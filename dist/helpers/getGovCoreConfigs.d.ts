import { IGovernanceDataHelper } from '../contracts/IGovernanceDataHelper';
import { VotingConfig } from '../types';
export declare function getGovCoreConfigs(govCoreDataHelper: IGovernanceDataHelper, govCoreContractAddress: string): Promise<{
    contractsConstants: {
        precisionDivider: string;
        cooldownPeriod: number;
        expirationTime: number;
        cancellationFee: string;
    };
    configs: VotingConfig[];
}>;
