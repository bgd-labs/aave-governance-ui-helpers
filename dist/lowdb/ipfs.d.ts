import { ProposalMetadata } from '../types';
export declare class Ipfs {
    getIpfsData(): ProposalMetadata[];
    get(originalIpfsHash: string): any;
    populate(originalIpfsHash: string, ipfsData: ProposalMetadata): Promise<void>;
}
