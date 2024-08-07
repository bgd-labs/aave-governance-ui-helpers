import { Address, Hex } from 'viem';

import { ProposalMetadata } from '../utils/generic';
import {
  BasicProposal,
  ContractsConstants,
  Payload,
  PayloadInitialStruct,
  ProposalInitialStruct,
  ProposalStructOutput,
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
  votes: APIEvent[];
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

export type CachedProposalData = {
  payloads: Payload[];
  ipfs: ProposalMetadata;
  proposal: BasicProposal;
};

export type RequestedProposalData = {
  proposal: ProposalStructOutput;
  proposalDataFromAPI: APIProposalData;
  proposalPayloadsDataFromAPI: APIPayloadData[];
  payloadsExecutionDelay: number;
  proposalPayloadsData: Payload[];
  isProposalPayloadsFinished: boolean;
};
