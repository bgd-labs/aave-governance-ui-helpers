import { InitialPayload, Payload as PayloadType } from '../types';
export declare class Payload {
    getInitialPayloads(): {
        id: number;
        chainId: number;
        payloadsController: string;
    }[];
    get(id: number, payloadsController: string, chainId: number): PayloadType | InitialPayload;
    populate(id: number, payloadData: PayloadType | InitialPayload, isVotingFailed: boolean, isProposalCanceled: boolean, isProposalExpired: boolean, chainId: number, payloadsController: string): Promise<void>;
}
