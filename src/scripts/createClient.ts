import { Chain, createClient, http } from 'viem';

export const createViemClient = ({
  chain,
  rpcUrl,
}: {
  chain: Chain;
  rpcUrl?: string;
}) =>
  createClient({
    batch: {
      multicall: true,
    },
    chain,
    transport: http(rpcUrl),
  });
