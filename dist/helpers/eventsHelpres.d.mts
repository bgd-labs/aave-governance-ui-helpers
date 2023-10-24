declare const blockLimit = 1023;
declare function getBlocksForEvents(currentBlock: number, startBlockNumber: number, endBlockNumber: number | undefined, lastBlockNumber: number | undefined): {
    startBlock: number;
    endBlock: number;
};
declare function getEventsBySteps<T>(startBlock: number, endBlock: number, blockLimit: number, callbackFunc: (startBlock: number, endBlock: number) => Promise<T>): Promise<(Awaited<T> extends infer T_1 ? T_1 extends Awaited<T> ? T_1 extends readonly (infer InnerArr)[] ? InnerArr : T_1 : never : never)[]>;

export { blockLimit, getBlocksForEvents, getEventsBySteps };
