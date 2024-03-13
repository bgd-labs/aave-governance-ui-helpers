import { BigNumber, BytesLike, ethers } from 'ethers';

import {
  AssetsBalanceSlots,
  BalanceForProof,
  getVoteBalanceSlot,
} from '../generic';

export function formatToProofRLP(rawData: string[]): string {
  return ethers.utils.RLP.encode(
    rawData.map((d) => ethers.utils.RLP.decode(d)),
  );
}

// IMPORTANT valid only for post-Dancun blocks:
// https://eips.ethereum.org/EIPS/eip-4844#header-extension
// https://eips.ethereum.org/EIPS/eip-4788#block-structure-and-validity
export function prepareBLockRLP(rawBlock: any) {
  const rawData = [
    rawBlock.parentHash,
    rawBlock.sha3Uncles,
    rawBlock.miner,
    rawBlock.stateRoot,
    rawBlock.transactionsRoot,
    rawBlock.receiptsRoot,
    rawBlock.logsBloom,
    '0x', //BigNumber.from(rawBlock.difficulty).toHexString(),
    BigNumber.from(rawBlock.number).toHexString(),
    BigNumber.from(rawBlock.gasLimit).toHexString(),
    rawBlock.gasUsed === '0x0'
      ? '0x'
      : BigNumber.from(rawBlock.gasUsed).toHexString(),
    BigNumber.from(rawBlock.timestamp).toHexString(),
    rawBlock.extraData,
    rawBlock.mixHash,
    rawBlock.nonce,
    BigNumber.from(rawBlock.baseFeePerGas).toHexString(),
    rawBlock.withdrawalsRoot,
    BigNumber.from(rawBlock.blobGasUsed).toHexString(),
    BigNumber.from(rawBlock.excessBlobGas).toHexString(),
    rawBlock.parentBeaconBlockRoot,
  ];
  return ethers.utils.RLP.encode(rawData);
}

export function getSolidityStorageSlotBytes(
  mappingSlot: BytesLike,
  key: string,
) {
  const slot = ethers.utils.hexZeroPad(mappingSlot, 32);
  return ethers.utils.hexStripZeros(
    ethers.utils.keccak256(
      ethers.utils.defaultAbiCoder.encode(['address', 'uint256'], [key, slot]),
    ),
  );
}

export function getSolidityTwoLevelStorageSlotHash(
  rawSlot: string,
  voter: string,
  chainId: number,
) {
  const abiCoder = new ethers.utils.AbiCoder();
  // ABI Encode the first level of the mapping
  // abi.encode(address(voter), uint256(MAPPING_SLOT))
  // The keccak256 of this value will be the "slot" of the inner mapping
  const firstLevelEncoded = abiCoder.encode(
    ['address', 'uint256'],
    [voter, ethers.BigNumber.from(rawSlot)],
  );

  // ABI Encode the second level of the mapping
  // abi.encode(uint256(chainId))
  const secondLevelEncoded = abiCoder.encode(
    ['uint256'],
    [ethers.BigNumber.from(chainId)],
  );

  // Compute the storage slot of [address][uint256]
  // keccak256(abi.encode(uint256(chainId)) . abi.encode(address(voter), uint256(MAPPING_SLOT)))
  return ethers.utils.keccak256(
    ethers.utils.concat([
      secondLevelEncoded,
      ethers.utils.keccak256(firstLevelEncoded),
    ]),
  );
}

export async function getExtendedBlock(
  provider: ethers.providers.JsonRpcProvider,
  blockNumber: number,
) {
  return provider.send('eth_getBlockByNumber', [
    ethers.BigNumber.from(blockNumber).toHexString(),
    false,
  ]);
}

export async function getBlockNumberByBlockHash(
  provider: ethers.providers.JsonRpcProvider,
  blockHash: string,
) {
  return Number((await provider.getBlock(blockHash)).number);
}

export async function getProof(
  provider: ethers.providers.JsonRpcProvider,
  address: string,
  storageKeys: string[],
  blockNumber: number,
) {
  return await provider.send('eth_getProof', [
    address,
    storageKeys,
    ethers.utils.hexStripZeros(
      ethers.BigNumber.from(blockNumber).toHexString(),
    ),
  ]);
}

export async function getAndFormatProof({
  provider,
  userAddress,
  underlyingAsset,
  blockNumber,
  baseBalanceSlotRaw,
}: {
  provider: ethers.providers.JsonRpcProvider;
  userAddress: string;
  underlyingAsset: string;
  blockNumber: number;
  baseBalanceSlotRaw: number;
}) {
  const hashedHolderSlot = getSolidityStorageSlotBytes(
    ethers.utils.hexZeroPad(ethers.utils.hexlify(baseBalanceSlotRaw), 32),
    userAddress,
  );

  const rawProofData = await getProof(
    provider,
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
  provider,
  blockHash,
  balances,
  address,
  aAaveAddress,
  slots,
}: {
  provider: ethers.providers.JsonRpcProvider; // gov core provider
  blockHash: string;
  balances: BalanceForProof[];
  address: string;
  aAaveAddress: string;
  slots: AssetsBalanceSlots;
}) {
  const blockNumber = await getBlockNumberByBlockHash(provider, blockHash);
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
          provider,
          userAddress: address,
          underlyingAsset: balance.underlyingAsset,
          baseBalanceSlotRaw: balanceSlotRaw,
          blockNumber: blockNumber,
        });
      }),
  );
}

export async function getProofOfRepresentative({
  provider,
  blockHash,
  address,
  chainId,
  aAaveAddress,
  govCoreAddress,
  slots,
}: {
  provider: ethers.providers.JsonRpcProvider; // gov core provider
  blockHash: string;
  address: string;
  chainId: number;
  aAaveAddress: string;
  govCoreAddress: string;
  slots: AssetsBalanceSlots;
}) {
  const blockNumber = await getBlockNumberByBlockHash(provider, blockHash);
  const balanceSlotRaw = getVoteBalanceSlot(
    govCoreAddress,
    false,
    aAaveAddress,
    slots,
  );
  const hexSlot = ethers.utils.hexlify(balanceSlotRaw);
  const slot = getSolidityTwoLevelStorageSlotHash(hexSlot, address, chainId);
  const rawProofData = await getProof(
    provider,
    govCoreAddress,
    [slot],
    blockNumber,
  );
  return formatToProofRLP(rawProofData.storageProof[0].proof);
}
