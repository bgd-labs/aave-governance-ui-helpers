import { Address, Hex } from 'viem';

import {
  BasicProposal,
  ContractsConstants,
  Payload,
  PayloadInitialStruct,
  ProposalInitialStruct,
  VotingConfig,
} from '../utils/viem';

export type APIEvent = {
  address: Address;
  transactionHash: Hex;
  logIndex: number;
  blockNumber: number;
  eventName: string;
  args: any;
  removed: boolean;
};

export type DecodedIPFSFromAPI = {
  title: string;
  author: string;
  ipfsHash: string;
  description: string;
  discussions: string;
};

export type APIProposalData = {
  events: APIEvent[];
  proposal: {
    chainId: number;
    governanceAddress: Address;
    proposalId: number;
    decodedIpfs: DecodedIPFSFromAPI;
    args: ProposalInitialStruct;
  };
};

export type APIPayloadData = {
  events: APIEvent[];
  proposal: {
    chainId: number;
    payloadsControllerAddress: Address;
    payloadId: number;
    args: PayloadInitialStruct;
  };
};

export type FormatProposalParams = {
  proposal: BasicProposal;
  configs: VotingConfig[];
  constants: ContractsConstants;
  ipfsTitle?: string;
  proposalPayloadsData: Payload[];
  executionDelay: number;
};
