export declare const blockLimit = 1023;
export declare function getBlocksForEvents(currentBlock: number, startBlockNumber: number, endBlockNumber: number | undefined, lastBlockNumber: number | undefined): {
    startBlock: number;
    endBlock: number;
};
export declare function getEventsBySteps<T>(startBlock: number, endBlock: number, blockLimit: number, callbackFunc: (startBlock: number, endBlock: number) => Promise<T>): Promise<(T extends readonly (infer InnerArr)[] ? InnerArr : T)[]>;
