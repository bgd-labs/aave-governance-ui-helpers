import { PublicClient } from '@wagmi/core';
import { Hex } from 'viem';
import { VotingConfig } from './types.mjs';

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
