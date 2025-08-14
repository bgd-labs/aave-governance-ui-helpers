import { createClient, http } from 'viem';

export const createViemClient = ({
  chain,
  rpcUrl,
}: {
  chain: any;
  rpcUrl?: string;
}) =>
  createClient({
    batch: {
      multicall: true,
    },
    chain,
    transport: http(rpcUrl),
  });
