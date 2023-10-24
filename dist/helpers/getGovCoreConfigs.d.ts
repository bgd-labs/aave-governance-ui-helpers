import { PublicClient, Hex } from 'viem';
import { VotingConfig } from './types.js';

declare function getGovCoreConfigs(client: PublicClient, govCoreContractAddress: Hex, govCoreDataHelperContractAddress: Hex): Promise<{
    contractsConstants: {
        precisionDivider: string;
        cooldownPeriod: number;
        expirationTime: number;
        cancellationFee: string;
    };
    configs: VotingConfig[];
}>;

export { getGovCoreConfigs };
