// src/helpers/checkHash.ts
var HashZero = "0x0000000000000000000000000000000000000000000000000000000000000000";
function checkHash(hash) {
  return {
    notZero: hash !== HashZero,
    zero: hash === HashZero
  };
}
export {
  HashZero,
  checkHash
};
//# sourceMappingURL=checkHash.mjs.map