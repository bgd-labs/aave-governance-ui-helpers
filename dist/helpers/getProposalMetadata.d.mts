import { ProposalMetadata } from './types.mjs';
import '@wagmi/core';
import 'viem';

declare const ipfsGateway = "https://ipfs.io/ipfs";
declare function getLink(hash: string, gateway: string): string;
declare function getProposalMetadata(hash: string, gateway?: string, setIpfsError?: (hash: string, text?: string) => void, errorText?: string): Promise<ProposalMetadata>;

export { getLink, getProposalMetadata, ipfsGateway };
