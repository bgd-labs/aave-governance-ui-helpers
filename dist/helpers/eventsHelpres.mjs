var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/helpers/eventsHelpres.ts
var blockLimit = 1023;
function getBlocksForEvents(currentBlock, startBlockNumber, endBlockNumber, lastBlockNumber) {
  const endBlock = endBlockNumber && endBlockNumber > 0 && endBlockNumber < currentBlock ? endBlockNumber : !!lastBlockNumber && isFinite(lastBlockNumber) && lastBlockNumber > startBlockNumber && lastBlockNumber < currentBlock ? lastBlockNumber + 1 : currentBlock > startBlockNumber + blockLimit ? startBlockNumber + blockLimit : currentBlock;
  const startBlock = !!lastBlockNumber && isFinite(lastBlockNumber) && lastBlockNumber > startBlockNumber && lastBlockNumber < currentBlock && lastBlockNumber < endBlock ? lastBlockNumber : startBlockNumber < currentBlock ? startBlockNumber : currentBlock - blockLimit;
  return { startBlock, endBlock };
}
function getEventsBySteps(startBlock, endBlock, blockLimit2, callbackFunc) {
  return __async(this, null, function* () {
    const blockSteps = Math.ceil((endBlock - startBlock) / blockLimit2);
    const eventsCountArray = new Array(blockSteps);
    for (let i = 0; i < blockSteps; i++) {
      eventsCountArray[i] = i;
    }
    const results = yield Promise.all(
      eventsCountArray.map((count) => __async(this, null, function* () {
        const startBlockNumber = startBlock + blockLimit2 * count;
        const endBlockNumber = startBlock + (blockLimit2 * count + blockLimit2);
        return yield callbackFunc(
          startBlockNumber,
          endBlock > endBlockNumber ? endBlockNumber : endBlock
        );
      }))
    );
    return results.flat();
  });
}
export {
  blockLimit,
  getBlocksForEvents,
  getEventsBySteps
};
//# sourceMappingURL=eventsHelpres.mjs.map