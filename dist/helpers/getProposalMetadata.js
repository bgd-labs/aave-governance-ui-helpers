"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/helpers/getProposalMetadata.ts
var getProposalMetadata_exports = {};
__export(getProposalMetadata_exports, {
  getLink: () => getLink,
  getProposalMetadata: () => getProposalMetadata,
  ipfsGateway: () => ipfsGateway
});
module.exports = __toCommonJS(getProposalMetadata_exports);
var import_bs58 = __toESM(require("bs58"));
var import_gray_matter = __toESM(require("gray-matter"));
var import_checkHash = require("./checkHash.js");
var ipfsGateway = "https://ipfs.io/ipfs";
function getLink(hash, gateway) {
  return `${gateway}/${hash}`;
}
var MEMORIZE = {};
var incorectedHashses = [
  "0x0000000000000000000000000000000000000000000000000000000000000020",
  import_checkHash.HashZero
];
function getProposalMetadata(_0) {
  return __async(this, arguments, function* (hash, gateway = ipfsGateway, setIpfsError, errorText) {
    const ipfsHash = hash.startsWith("0x") ? import_bs58.default.encode(Buffer.from(`1220${hash.slice(2)}`, "hex")) : hash;
    if (MEMORIZE[ipfsHash])
      return MEMORIZE[ipfsHash];
    if (incorectedHashses.some((h) => hash === h)) {
      if (!!setIpfsError) {
        setIpfsError(hash, errorText);
      } else {
        throw Error("Fetch metadata form ipfs not working");
      }
    } else {
      const ipfsResponse = yield fetch(getLink(ipfsHash, gateway));
      if (!ipfsResponse.ok) {
        if (!!setIpfsError) {
          setIpfsError(hash);
        } else {
          throw Error("Fetch metadata form ipfs not working");
        }
      }
      const clone = ipfsResponse.clone();
      try {
        const response = yield ipfsResponse.json();
        const { content } = (0, import_gray_matter.default)(response.description);
        MEMORIZE[ipfsHash] = {
          title: response.title,
          aip: response.aip,
          originalIpfsHash: hash,
          author: response.author,
          discussions: response.discussions,
          shortDescription: response.shortDescription,
          ipfsHash,
          description: content
        };
      } catch (e) {
        const text = yield clone.text();
        const { content, data } = (0, import_gray_matter.default)(text);
        MEMORIZE[ipfsHash] = {
          title: data.title,
          aip: data.aip,
          originalIpfsHash: hash,
          author: data.author,
          discussions: data.discussions,
          shortDescription: data.shortDescription,
          ipfsHash,
          description: content
        };
      }
    }
    return MEMORIZE[ipfsHash];
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getLink,
  getProposalMetadata,
  ipfsGateway
});
//# sourceMappingURL=getProposalMetadata.js.map