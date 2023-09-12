import { ProposalMetadata } from '../types';
export declare const ipfsGateway = "https://ipfs.io/ipfs";
export declare function getLink(hash: string, gateway: string): string;
export declare function getProposalMetadata(hash: string, gateway?: string, setIpfsError?: (hash: string, text?: string) => void, errorText?: string): Promise<ProposalMetadata>;
