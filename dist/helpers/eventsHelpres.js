"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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
var eventsHelpres_exports = {};
__export(eventsHelpres_exports, {
  blockLimit: () => blockLimit,
  getBlocksForEvents: () => getBlocksForEvents,
  getEventsBySteps: () => getEventsBySteps
});
module.exports = __toCommonJS(eventsHelpres_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  blockLimit,
  getBlocksForEvents,
  getEventsBySteps
});
//# sourceMappingURL=eventsHelpres.js.map