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

// src/helpers/checkHash.ts
var checkHash_exports = {};
__export(checkHash_exports, {
  HashZero: () => HashZero,
  checkHash: () => checkHash
});
module.exports = __toCommonJS(checkHash_exports);
var HashZero = "0x0000000000000000000000000000000000000000000000000000000000000000";
function checkHash(hash) {
  return {
    notZero: hash !== HashZero,
    zero: hash === HashZero
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HashZero,
  checkHash
});
//# sourceMappingURL=checkHash.js.map