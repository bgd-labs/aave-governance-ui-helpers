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
import base58 from "bs58";
import matter from "gray-matter";
import { HashZero } from "./checkHash.mjs";
var ipfsGateway = "https://ipfs.io/ipfs";
function getLink(hash, gateway) {
  return `${gateway}/${hash}`;
}
var MEMORIZE = {};
var incorectedHashses = [
  "0x0000000000000000000000000000000000000000000000000000000000000020",
  HashZero
];
function getProposalMetadata(_0) {
  return __async(this, arguments, function* (hash, gateway = ipfsGateway, setIpfsError, errorText) {
    const ipfsHash = hash.startsWith("0x") ? base58.encode(Buffer.from(`1220${hash.slice(2)}`, "hex")) : hash;
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
        const { content } = matter(response.description);
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
        const { content, data } = matter(text);
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
export {
  getLink,
  getProposalMetadata,
  ipfsGateway
};
//# sourceMappingURL=getProposalMetadata.mjs.map