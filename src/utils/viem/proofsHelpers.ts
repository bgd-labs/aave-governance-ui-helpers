import {
  Address,
  Block,
  Client,
  concat,
  encodeAbiParameters,
  fromRlp,
  Hex,
  keccak256,
  pad,
  parseAbiParameters,
  toHex,
  toRlp,
} from 'viem';
import { getBlock } from 'viem/actions';

import {
  AssetsBalanceSlots,
  BalanceForProof,
  getVoteBalanceSlot,
} from '../generic';

// types
export type Proof = {
  balance: Hex; //QUANTITY - the balance of the account. Seeeth_getBalance
  codeHash: Hex; //DATA, 32 Bytes - hash of the code of the account. For a simple Account without code it will return "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"
  nonce: Hex; //QUANTITY, - nonce of the account. See eth_getTransactionCount
  storageHash: Hex; //DATA, 32 Bytes - SHA3 of the StorageRoot. All storage will deliver a MerkleProof starting with this rootHash.
  accountProof: Hex[]; //ARRAY - Array of rlp-serialized MerkleTree-Nodes, starting with the stateRoot-Node, following the path of the SHA3 (address) as key.
  storageProof: {
    //ARRAY - Array of storage-entries as requested. Each entry is an object with these properties:
    key: Hex; //QUANTITY - the requested storage key
    value: Hex; //QUANTITY - the storage value
    proof: Hex[]; //ARRAY - Array of rlp-serialized MerkleTree-Nodes, starting with the storageHash-Node, following the path of the SHA3 (key) as path.
  }[];
};
// end

export const formatToProofRLP = (rawData: Hex[]) => {
  return toRlp(rawData.map((d: Hex) => fromRlp(d, 'hex')));
};

// IMPORTANT valid only for post-Shapella blocks, as it includes `withdrawalsRoot`
export const prepareBLockRLP = (rawBlock: Block) => {
  const rawData: Hex[] = [
    rawBlock.parentHash,
    rawBlock.sha3Uncles,
    rawBlock.miner,
    rawBlock.stateRoot,
    rawBlock.transactionsRoot,
    rawBlock.receiptsRoot,
    rawBlock.logsBloom as Hex,
    '0x', //toHex(rawBlock.difficulty),
    toHex(rawBlock.number || 0), // 0 to account for type null
    toHex(rawBlock.gasLimit),
    toHex(rawBlock.gasUsed),
    toHex(rawBlock.timestamp),
    rawBlock.extraData,
    rawBlock.mixHash,
    rawBlock.nonce as Hex,
    toHex(rawBlock.baseFeePerGas || 0), // 0 to account for type null
    rawBlock.withdrawalsRoot as Hex,
  ];
  return toRlp(rawData);
};

export const getSolidityStorageSlotBytes = (mappingSlot: Hex, key: Hex) => {
  const slot = pad(mappingSlot).toString();
  return (
    //hexStripZeros
    keccak256(
      encodeAbiParameters(parseAbiParameters('address, uint256'), [
        key,
        BigInt(slot),
      ]),
    )
  );
};

export function getSolidityTwoLevelStorageSlotHash(
  rawSlot: Hex,
  voter: Address,
  chainId: number,
) {
  // ABI Encode the first level of the mapping
  // abi.encode(address(voter), uint256(MAPPING_SLOT))
  // The keccak256 of this value will be the "slot" of the inner mapping
  const firstLevelEncoded = encodeAbiParameters(
    [
      { name: 'voter', type: 'address' },
      { name: 'rawSlot', type: 'uint256' },
    ],
    [voter, BigInt(rawSlot)],
  );
  // ABI Encode the second level of the mapping
  // abi.encode(uint256(chainId))
  const secondLevelEncoded = encodeAbiParameters(
    [{ name: 'chainId', type: 'uint256' }],
    [BigInt(chainId)],
  );
  // Compute the storage slot of [address][uint256]
  // keccak256(abi.encode(uint256(chainId)) . abi.encode(address(voter), uint256(MAPPING_SLOT)))
  return keccak256(concat([secondLevelEncoded, keccak256(firstLevelEncoded)]));
}

export const getExtendedBlock = async (
  client: Client,
  blockNumber: number,
): Promise<Block> => {
  return (await getBlock(client, {
    blockNumber: BigInt(blockNumber),
    includeTransactions: false,
  })) as Block;
};

export async function getBlockNumberByBlockHash(
  client: Client,
  blockHash: Hex,
) {
  return Number((await getBlock(client, { blockHash })).number);
}

export const getProof = async (
  client: Client, // gov core client
  address: Address,
  storageKeys: string[],
  blockNumber: number,
) => {
  return (await client.request({
    method: 'eth_getProof' as any,
    params: [address, storageKeys, toHex(blockNumber)] as any,
  })) as unknown as Proof;
};

export async function getAndFormatProof({
  client,
  userAddress,
  underlyingAsset,
  blockNumber,
  baseBalanceSlotRaw,
}: {
  client: Client; // gov core client
  userAddress: Address;
  underlyingAsset: Address;
  blockNumber: number;
  baseBalanceSlotRaw: number;
}) {
  const hashedHolderSlot = getSolidityStorageSlotBytes(
    pad(toHex(baseBalanceSlotRaw), { size: 32 }),
    userAddress,
  );

  const rawProofData = await getProof(
    client,
    underlyingAsset,
    [hashedHolderSlot],
    blockNumber,
  );

  const proof = formatToProofRLP(rawProofData.storageProof[0].proof);

  return {
    underlyingAsset,
    slot: BigInt(baseBalanceSlotRaw),
    proof,
  };
}

export async function getVotingProofs({
  client,
  blockHash,
  balances,
  address,
  aAaveAddress,
  slots,
}: {
  client: Client; // gov core client
  blockHash: Hex;
  balances: BalanceForProof[];
  address: Address;
  aAaveAddress: Address;
  slots: AssetsBalanceSlots;
}) {
  const blockNumber = await getBlockNumberByBlockHash(client, blockHash);
  return await Promise.all(
    balances
      .filter((balance) => balance.value !== '0')
      .map((balance) => {
        const balanceSlotRaw = getVoteBalanceSlot(
          balance.underlyingAsset,
          balance.isWithDelegatedPower,
          aAaveAddress,
          slots,
        );
        return getAndFormatProof({
          client,
          userAddress: address,
          underlyingAsset: balance.underlyingAsset as Hex,
          baseBalanceSlotRaw: balanceSlotRaw,
          blockNumber: blockNumber,
        });
      }),
  );
}

export async function getProofOfRepresentative({
  client,
  blockHash,
  address,
  chainId,
  aAaveAddress,
  govCoreAddress,
  slots,
}: {
  client: Client; // gov core client
  blockHash: Hex;
  address: Address;
  chainId: number;
  aAaveAddress: Address;
  govCoreAddress: Address;
  slots: AssetsBalanceSlots;
}) {
  const blockNumber = await getBlockNumberByBlockHash(client, blockHash);
  const balanceSlotRaw = getVoteBalanceSlot(
    govCoreAddress,
    false,
    aAaveAddress,
    slots,
  );
  const hexSlot = toHex(balanceSlotRaw);
  const slot = getSolidityTwoLevelStorageSlotHash(hexSlot, address, chainId);
  const rawProofData = await getProof(
    client,
    govCoreAddress,
    [slot],
    blockNumber,
  );
  return formatToProofRLP(rawProofData.storageProof[0].proof);
}
