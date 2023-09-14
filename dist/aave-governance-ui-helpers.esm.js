import { BigNumber } from 'bignumber.js';
import { ethers } from 'ethers';
import dayjs from 'dayjs';
import { base58 } from 'ethers/lib/utils';
import matter from 'gray-matter';

var ChainIdByName;
(function (ChainIdByName) {
  ChainIdByName[ChainIdByName["Goerli"] = 5] = "Goerli";
  ChainIdByName[ChainIdByName["GoerliOptimism"] = 420] = "GoerliOptimism";
  ChainIdByName[ChainIdByName["AvalancheFuji"] = 43113] = "AvalancheFuji";
  ChainIdByName[ChainIdByName["Sepolia"] = 11155111] = "Sepolia";
  ChainIdByName[ChainIdByName["Mumbai"] = 80001] = "Mumbai";
  ChainIdByName[ChainIdByName["BnbTest"] = 97] = "BnbTest";
})(ChainIdByName || (ChainIdByName = {}));

var _votingPortals, _votingPortals2, _goerli, _sepolia, _goerli2, _sepolia2;
var govCoreConfig = {
  // testnets
  goerli: {
    contractAddress: '0x586207Df62c7D5D1c9dBb8F61EdF77cc30925C4F',
    dataHelperContractAddress: '0x160e2d1456B815d6a3d281218538dd6E2e3C841f',
    votingPortals: (_votingPortals = {}, _votingPortals[ChainIdByName.Goerli] = '0xFf376b6db4AF0d87Dba35860B3B87F526d7879cF', _votingPortals)
  },
  sepolia: {
    contractAddress: '0x84b3FE5eD74caC496BcB58d448A7c83c523F6E0E',
    dataHelperContractAddress: '0x74bb7b600fA33E2A1945F8493D17db3b129513D2',
    votingPortals: (_votingPortals2 = {}, _votingPortals2[ChainIdByName.Sepolia] = '0x5C77bF8505716904a1a73eB8c3909c0Da0DD49b3', _votingPortals2)
  }
};
var payloadsControllerConfig = {
  // testnets
  goerli: (_goerli = {}, _goerli[ChainIdByName.Goerli] = {
    dataHelperContractAddress: '0xbd2db358f3C82F2883132A6584e22F38A979e768',
    // for create payload
    contractAddresses: ['0x064361B3761CcDd17300146bf58a79d1E570382E'],
    // TODO: (remove after release)
    payloadAddress: '0xf6b9c3fCF7f91817E7bF0efF792BA692c7bd372A'
  }, _goerli),
  sepolia: (_sepolia = {}, _sepolia[ChainIdByName.Sepolia] = {
    dataHelperContractAddress: '0x5c2AD703961c59Adb4412d402b8D694Eee48a822',
    // for create payload
    contractAddresses: ['0x7Bb94b2a8d9fD3f37345Ec5A0b46c234164b4f90'],
    // TODO: (remove after release)
    payloadAddress: '0xf19de078dbac9db382caf8015cb208667ec581c0'
  }, _sepolia)
};
var votingMachineConfig = {
  // testnets
  goerli: (_goerli2 = {}, _goerli2[ChainIdByName.Goerli] = {
    contractAddress: '0xE8AD5ab6295c16D04257BC6Cd6D447ff4018FF89',
    dataHelperContractAddress: '0xe10617A1ea760E174E82fBeb38a540d8ACe566f5',
    dataWarehouseAddress: '0xC946cc6bb934bAf2A539BaB62c647aff09D2e2D8'
  }, _goerli2),
  sepolia: (_sepolia2 = {}, _sepolia2[ChainIdByName.Sepolia] = {
    contractAddress: '0xB379f8a3E62Ff807E827F853B36688d1d7aD692f',
    dataHelperContractAddress: '0x8b5661024Bc97c1Fd71B4eCafCA88c316c3D438B',
    dataWarehouseAddress: '0xdF6C1affD18Ecb318e4468d96b588bbbEac180E2'
  }, _sepolia2)
};
var govCoreChainId = {
  // testnets
  goerli: ChainIdByName.Goerli,
  sepolia: ChainIdByName.Sepolia
};
var aditionalsAddresses = {
  // testnets
  goerli: {
    aaveAddress: '0xb6D88BfC5b145a558b279cf7692e6F02064889d0',
    aAaveAddress: '0xD1ff82609FB63A0eee6FE7D2896d80d29491cCCd',
    stkAAVEAddress: '0x1406A9Ea2B0ec8FD4bCa4F876DAae2a70a9856Ec',
    // for delegation
    delegationHelper: '0x1966133c190475E8385Dc1b4150B5f81c70DC578'
  },
  sepolia: {
    aaveAddress: '0x64033B2270fd9D6bbFc35736d2aC812942cE75fE',
    aAaveAddress: '0x7d9EB767eEc260d1bCe8C518276a894aE5535F04',
    stkAAVEAddress: '0xA4FDAbdE9eF3045F0dcF9221bab436B784B7e42D',
    // for delegation
    delegationHelper: '0x1633Bd6772020a797fB09a3b17D6AD9a95b98f01'
  }
};
var votingMachineChainIds = {
  goerli: [ChainIdByName.Goerli],
  sepolia: [ChainIdByName.Sepolia]
};
var payloadsControllerChainIds = {
  goerli: [ChainIdByName.Goerli],
  sepolia: [ChainIdByName.Sepolia]
};
var gelatoApiKeys = {
  testnet: 'qGvvlJMoyDKyuMxqJjDwFslpgiBKZCXNXpnSjIxsICY_',
  mainnet: ''
};
var appConfigInit = function appConfigInit(providers, coreNetwork) {
  return {
    providers: providers,
    govCoreChainId: govCoreChainId[coreNetwork],
    govCoreConfig: govCoreConfig[coreNetwork],
    votingMachineConfig: votingMachineConfig[coreNetwork],
    votingMachineChainIds: votingMachineChainIds[coreNetwork],
    payloadsControllerConfig: payloadsControllerConfig[coreNetwork],
    payloadsControllerChainIds: payloadsControllerChainIds[coreNetwork],
    additional: aditionalsAddresses[coreNetwork],
    gelatoApiKeys: gelatoApiKeys
  };
};

function valueToBigNumber(amount) {
  if (amount instanceof BigNumber) {
    return amount;
  }
  return new BigNumber(amount);
}
function normalize(n, decimals) {
  return normalizeBN(n, decimals).toString(10);
}
function normalizeBN(n, decimals) {
  return valueToBigNumber(n).shiftedBy(decimals * -1);
}

function checkHash(hash) {
  return {
    notZero: hash !== ethers.constants.HashZero,
    zero: hash === ethers.constants.HashZero
  };
}

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}

var blockLimit = 1023;
function getBlocksForEvents(currentBlock, startBlockNumber, endBlockNumber, lastBlockNumber) {
  var endBlock = endBlockNumber && endBlockNumber > 0 && endBlockNumber < currentBlock ? endBlockNumber : !!lastBlockNumber && isFinite(lastBlockNumber) && lastBlockNumber > startBlockNumber && lastBlockNumber < currentBlock ? lastBlockNumber + 1 : currentBlock > startBlockNumber + blockLimit ? startBlockNumber + blockLimit : currentBlock;
  var startBlock = !!lastBlockNumber && isFinite(lastBlockNumber) && lastBlockNumber > startBlockNumber && lastBlockNumber < currentBlock && lastBlockNumber < endBlock ? lastBlockNumber : startBlockNumber < currentBlock ? startBlockNumber : currentBlock - blockLimit;
  return {
    startBlock: startBlock,
    endBlock: endBlock
  };
}
function getEventsBySteps(_x, _x2, _x3, _x4) {
  return _getEventsBySteps.apply(this, arguments);
}
function _getEventsBySteps() {
  _getEventsBySteps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(startBlock, endBlock, blockLimit, callbackFunc) {
    var blockSteps, eventsCountArray, i, results;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          blockSteps = Math.ceil((endBlock - startBlock) / blockLimit);
          eventsCountArray = new Array(blockSteps);
          for (i = 0; i < blockSteps; i++) {
            eventsCountArray[i] = i;
          }
          _context2.next = 5;
          return Promise.all(eventsCountArray.map( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(count) {
              var startBlockNumber, endBlockNumber;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    startBlockNumber = startBlock + blockLimit * count;
                    endBlockNumber = startBlock + (blockLimit * count + blockLimit);
                    _context.next = 4;
                    return callbackFunc(startBlockNumber, endBlock > endBlockNumber ? endBlockNumber : endBlock);
                  case 4:
                    return _context.abrupt("return", _context.sent);
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x5) {
              return _ref.apply(this, arguments);
            };
          }()));
        case 5:
          results = _context2.sent;
          return _context2.abrupt("return", results.flat());
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getEventsBySteps.apply(this, arguments);
}

var BasicProposalState;
(function (BasicProposalState) {
  BasicProposalState[BasicProposalState["Null"] = 0] = "Null";
  BasicProposalState[BasicProposalState["Created"] = 1] = "Created";
  BasicProposalState[BasicProposalState["Active"] = 2] = "Active";
  BasicProposalState[BasicProposalState["Queued"] = 3] = "Queued";
  BasicProposalState[BasicProposalState["Executed"] = 4] = "Executed";
  BasicProposalState[BasicProposalState["Failed"] = 5] = "Failed";
  BasicProposalState[BasicProposalState["Cancelled"] = 6] = "Cancelled";
  BasicProposalState[BasicProposalState["Expired"] = 7] = "Expired";
})(BasicProposalState || (BasicProposalState = {}));
var VotingMachineProposalState;
(function (VotingMachineProposalState) {
  VotingMachineProposalState[VotingMachineProposalState["NotCreated"] = 0] = "NotCreated";
  VotingMachineProposalState[VotingMachineProposalState["Active"] = 1] = "Active";
  VotingMachineProposalState[VotingMachineProposalState["Finished"] = 2] = "Finished";
  VotingMachineProposalState[VotingMachineProposalState["SentToGovernance"] = 3] = "SentToGovernance";
})(VotingMachineProposalState || (VotingMachineProposalState = {}));
var PayloadState;
(function (PayloadState) {
  PayloadState[PayloadState["None"] = 0] = "None";
  PayloadState[PayloadState["Created"] = 1] = "Created";
  PayloadState[PayloadState["Queued"] = 2] = "Queued";
  PayloadState[PayloadState["Executed"] = 3] = "Executed";
  PayloadState[PayloadState["Cancelled"] = 4] = "Cancelled";
  PayloadState[PayloadState["Expired"] = 5] = "Expired";
})(PayloadState || (PayloadState = {}));
var ProposalState;
(function (ProposalState) {
  ProposalState[ProposalState["Created"] = 0] = "Created";
  ProposalState[ProposalState["Active"] = 1] = "Active";
  ProposalState[ProposalState["Succeed"] = 2] = "Succeed";
  ProposalState[ProposalState["Defeated"] = 3] = "Defeated";
  ProposalState[ProposalState["Executed"] = 4] = "Executed";
  ProposalState[ProposalState["Expired"] = 5] = "Expired";
  ProposalState[ProposalState["Canceled"] = 6] = "Canceled";
})(ProposalState || (ProposalState = {}));
var ProposalStateWithName;
(function (ProposalStateWithName) {
  ProposalStateWithName["Created"] = "Created";
  ProposalStateWithName["Active"] = "Voting";
  ProposalStateWithName["Succeed"] = "Passed";
  ProposalStateWithName["Failed"] = "Failed";
  ProposalStateWithName["Defeated"] = "Failed";
  ProposalStateWithName["Executed"] = "Executed";
  ProposalStateWithName["Expired"] = "Expired";
  ProposalStateWithName["Canceled"] = "Canceled";
  ProposalStateWithName["ActiveAll"] = "Active";
})(ProposalStateWithName || (ProposalStateWithName = {}));
var ProposalEstimatedState;
(function (ProposalEstimatedState) {
  ProposalEstimatedState["Active"] = "Will open for voting";
  ProposalEstimatedState["Succeed"] = "Will pass";
  ProposalEstimatedState["Defeated"] = "Will fail";
  ProposalEstimatedState["ProposalExecuted"] = "Proposal will be executed";
  ProposalEstimatedState["PayloadsExecuted"] = "Payloads will be executed";
  ProposalEstimatedState["Expired"] = "Will expire";
})(ProposalEstimatedState || (ProposalEstimatedState = {}));
var ProposalWaitForState;
(function (ProposalWaitForState) {
  ProposalWaitForState["WaitForActivateVoting"] = "Pending voting activation";
  ProposalWaitForState["WaitForCloseVoting"] = "Pending voting closure";
  ProposalWaitForState["WaitForQueueProposal"] = "Proposal is time-locked";
  ProposalWaitForState["WaitForExecuteProposal"] = "Pending proposal execution";
  ProposalWaitForState["WaitForQueuePayloads"] = "Payloads are time-locked";
  ProposalWaitForState["WaitForExecutePayloads"] = "Pending payloads execution";
})(ProposalWaitForState || (ProposalWaitForState = {}));

function normalizeVotes(forVotes, againstVotes) {
  var forVotesN = normalizeBN(forVotes, 18).toNumber();
  var againstVotesN = normalizeBN(againstVotes, 18).toNumber();
  return {
    forVotes: forVotesN,
    againstVotes: againstVotesN
  };
}
function formatQuorum(forVotes, quorum, precisionDivider) {
  var minQuorumVotes = valueToBigNumber(quorum).multipliedBy(precisionDivider);
  var normalizeMinQuorumVotes = normalizeBN(minQuorumVotes, 18).toNumber();
  var quorumReached = false;
  if (valueToBigNumber(forVotes).gte(minQuorumVotes)) {
    quorumReached = true;
  }
  return {
    minQuorumVotes: minQuorumVotes,
    normalizeMinQuorumVotes: normalizeMinQuorumVotes,
    quorumReached: quorumReached
  };
}
function formatDiff(forVotes, againstVotes, differential, precisionDivider) {
  var diff = valueToBigNumber(forVotes).minus(againstVotes);
  var requiredDiff = valueToBigNumber(differential).multipliedBy(precisionDivider);
  var normalizeRequiredDiff = normalizeBN(requiredDiff, 18).toNumber();
  return {
    diff: diff,
    requiredDiff: requiredDiff,
    normalizeRequiredDiff: normalizeRequiredDiff
  };
}
function getProposalStepsAndAmounts(_ref) {
  var proposalData = _ref.proposalData,
    quorum = _ref.quorum,
    differential = _ref.differential,
    precisionDivider = _ref.precisionDivider,
    cooldownPeriod = _ref.cooldownPeriod,
    executionPayloadTime = _ref.executionPayloadTime;
  var now = dayjs().unix();
  var isVotingStarted = proposalData.votingMachineState > VotingMachineProposalState.NotCreated;
  var isVotingEnded = proposalData.votingMachineData.endTime > 0 && now > proposalData.votingMachineData.endTime;
  var isVotingClosed = proposalData.votingMachineData.votingClosedAndSentTimestamp > 0 && now > proposalData.votingMachineData.votingClosedAndSentTimestamp;
  var _normalizeVotes = normalizeVotes(proposalData.votingMachineData.forVotes, proposalData.votingMachineData.againstVotes),
    forVotes = _normalizeVotes.forVotes,
    againstVotes = _normalizeVotes.againstVotes;
  var _formatQuorum = formatQuorum(proposalData.votingMachineData.forVotes, quorum, precisionDivider),
    normalizeMinQuorumVotes = _formatQuorum.normalizeMinQuorumVotes,
    quorumReached = _formatQuorum.quorumReached;
  var _formatDiff = formatDiff(proposalData.votingMachineData.forVotes, proposalData.votingMachineData.againstVotes, differential, precisionDivider),
    normalizeRequiredDiff = _formatDiff.normalizeRequiredDiff;
  var lastPayloadQueuedAt = Math.max.apply(null, proposalData.payloads.map(function (payload) {
    return (payload == null ? void 0 : payload.queuedAt) || 0;
  }));
  var lastPayloadExecutedAt = Math.max.apply(null, proposalData.payloads.map(function (payload) {
    return (payload == null ? void 0 : payload.executedAt) || 0;
  }));
  var lastPayloadCanceledAt = Math.max.apply(null, proposalData.payloads.map(function (payload) {
    return (payload == null ? void 0 : payload.cancelledAt) || 0;
  }));
  var lastPayloadExpiredAt = Math.max.apply(null, proposalData.payloads.map(function (payload) {
    if (!!(payload != null && payload.executedAt)) {
      if (payload.queuedAt <= 0 && payload.state === PayloadState.Expired) {
        return payload.expirationTime;
      } else if (payload.queuedAt > 0 && payload.state === PayloadState.Expired) {
        return payload.queuedAt + payload.delay + payload.gracePeriod;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }));
  var predictPayloadExpiredTime = Math.max.apply(null, proposalData.payloads.map(function (payload) {
    if (payload != null && payload.state && payload.state === PayloadState.Created) {
      return payload.expirationTime;
    } else if (payload != null && payload.state && payload.state === PayloadState.Queued) {
      return payload.queuedAt + payload.delay + payload.gracePeriod;
    } else {
      return 0;
    }
  }));
  var allPayloadsExecuted = proposalData.payloads.every(function (payload) {
    return (payload == null ? void 0 : payload.state) && payload.state === PayloadState.Executed;
  });
  var allPayloadsCanceled = proposalData.payloads.every(function (payload) {
    return (payload == null ? void 0 : payload.state) && payload.state === PayloadState.Cancelled;
  });
  var allPayloadsExpired = proposalData.payloads.every(function (payload) {
    return (payload == null ? void 0 : payload.state) && payload.state === PayloadState.Expired;
  });
  var isCanceled = proposalData.basicState === BasicProposalState.Cancelled || allPayloadsCanceled;
  var isExpired = proposalData.basicState === BasicProposalState.Expired || allPayloadsExpired;
  var isVotingActive = isVotingStarted && !isVotingEnded && !isCanceled;
  var isVotingFailed = isVotingEnded && (againstVotes > forVotes + normalizeRequiredDiff || againstVotes === 0 && forVotes === 0);
  var isProposalQueued = isVotingStarted && isVotingEnded && isVotingClosed && proposalData.votingMachineData.sentToGovernance && proposalData.queuingTime > 0 && now > proposalData.queuingTime + cooldownPeriod;
  var isProposalExecuted = isVotingEnded && isVotingClosed && !isVotingFailed && proposalData.basicState === BasicProposalState.Executed && !isCanceled;
  var isPayloadsQueued = isProposalExecuted && now > lastPayloadQueuedAt + executionPayloadTime;
  var isPayloadsExecuted = isVotingEnded && isVotingClosed && !isVotingFailed && proposalData.basicState === BasicProposalState.Executed && !isCanceled && allPayloadsExecuted && !isExpired;
  var isProposalActive = true;
  if (proposalData.basicState === BasicProposalState.Null || proposalData.basicState === BasicProposalState.Created) {
    isProposalActive = false;
  } else if (isCanceled) {
    isProposalActive = false;
  } else if (isVotingFailed) {
    isProposalActive = false;
  } else if (isPayloadsExecuted) {
    isProposalActive = false;
  } else if (isExpired) {
    isProposalActive = false;
  }
  return {
    forVotes: forVotes,
    againstVotes: againstVotes,
    normalizeMinQuorumVotes: normalizeMinQuorumVotes,
    quorumReached: quorumReached,
    normalizeRequiredDiff: normalizeRequiredDiff,
    isVotingStarted: isVotingStarted,
    isVotingActive: isVotingActive,
    isVotingEnded: isVotingEnded,
    isVotingClosed: isVotingClosed,
    isVotingFailed: isVotingFailed,
    lastPayloadQueuedAt: lastPayloadQueuedAt,
    lastPayloadCanceledAt: lastPayloadCanceledAt,
    lastPayloadExecutedAt: lastPayloadExecutedAt,
    lastPayloadExpiredAt: lastPayloadExpiredAt,
    predictPayloadExpiredTime: predictPayloadExpiredTime,
    allPayloadsExecuted: allPayloadsExecuted,
    allPayloadsCanceled: allPayloadsCanceled,
    allPayloadsExpired: allPayloadsExpired,
    isCanceled: isCanceled,
    isExpired: isExpired,
    isProposalActive: isProposalActive,
    isProposalQueued: isProposalQueued,
    isProposalExecuted: isProposalExecuted,
    isPayloadsQueued: isPayloadsQueued,
    isPayloadsExecuted: isPayloadsExecuted
  };
}
function getProposalState(_ref2) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  var _getProposalStepsAndA = getProposalStepsAndAmounts(data),
    forVotes = _getProposalStepsAndA.forVotes,
    againstVotes = _getProposalStepsAndA.againstVotes,
    quorumReached = _getProposalStepsAndA.quorumReached,
    normalizeRequiredDiff = _getProposalStepsAndA.normalizeRequiredDiff,
    isVotingActive = _getProposalStepsAndA.isVotingActive,
    isVotingEnded = _getProposalStepsAndA.isVotingEnded,
    isVotingFailed = _getProposalStepsAndA.isVotingFailed,
    isExpired = _getProposalStepsAndA.isExpired,
    allPayloadsExecuted = _getProposalStepsAndA.allPayloadsExecuted,
    isCanceled = _getProposalStepsAndA.isCanceled,
    isPayloadsExecuted = _getProposalStepsAndA.isPayloadsExecuted;
  if (!isCanceled && data.proposalData.votingMachineState === VotingMachineProposalState.NotCreated && data.proposalData.basicState <= BasicProposalState.Active) {
    return ProposalState.Created;
  } else if (isVotingActive && checkHash(data.proposalData.snapshotBlockHash).notZero) {
    return ProposalState.Active;
  } else if (isVotingEnded && !isCanceled && forVotes > againstVotes + normalizeRequiredDiff && quorumReached && !allPayloadsExecuted && !isExpired) {
    return ProposalState.Succeed;
  } else if (isVotingFailed && !isCanceled) {
    return ProposalState.Defeated;
  } else if (isCanceled) {
    return ProposalState.Canceled;
  } else if (isPayloadsExecuted) {
    return ProposalState.Executed;
  } else {
    return ProposalState.Expired;
  }
}
function getStateTimestamp(proposal) {
  var _getProposalStepsAndA2 = getProposalStepsAndAmounts({
      proposalData: proposal.data,
      quorum: proposal.config.quorum,
      differential: proposal.config.differential,
      precisionDivider: proposal.precisionDivider,
      cooldownPeriod: proposal.timings.cooldownPeriod,
      executionPayloadTime: proposal.timings.executionPayloadTime
    }),
    isVotingEnded = _getProposalStepsAndA2.isVotingEnded,
    isVotingStarted = _getProposalStepsAndA2.isVotingStarted,
    isExpired = _getProposalStepsAndA2.isExpired,
    lastPayloadExecutedAt = _getProposalStepsAndA2.lastPayloadExecutedAt,
    lastPayloadCanceledAt = _getProposalStepsAndA2.lastPayloadCanceledAt,
    lastPayloadExpiredAt = _getProposalStepsAndA2.lastPayloadExpiredAt,
    allPayloadsExpired = _getProposalStepsAndA2.allPayloadsExpired,
    isCanceled = _getProposalStepsAndA2.isCanceled;
  if (proposal.state === ProposalState.Created && !isExpired && !isCanceled) {
    return proposal.data.creationTime;
  } else if (proposal.data.votingMachineState === VotingMachineProposalState.NotCreated && !isExpired && !isCanceled) {
    return proposal.data.creationTime + proposal.config.coolDownBeforeVotingStart;
  } else if (checkHash(proposal.data.snapshotBlockHash).notZero && !isVotingStarted && !isExpired && !isCanceled) {
    return proposal.data.votingActivationTime;
  } else if (!isVotingEnded && isVotingStarted && !isExpired && !isCanceled) {
    return proposal.data.votingMachineData.startTime;
  } else if (isVotingStarted && isVotingEnded && proposal.state !== ProposalState.Executed && !isExpired && !isCanceled) {
    return proposal.data.votingMachineData.endTime > 0 ? proposal.data.votingMachineData.endTime : proposal.data.creationTime + proposal.config.coolDownBeforeVotingStart;
  } else if (proposal.state === ProposalState.Defeated) {
    return proposal.data.votingMachineData.endTime;
  } else if (proposal.state === ProposalState.Executed) {
    return lastPayloadExecutedAt;
  } else if (proposal.state === ProposalState.Canceled) {
    return lastPayloadCanceledAt > proposal.data.canceledAt ? lastPayloadCanceledAt : proposal.data.canceledAt;
  } else if (proposal.data.basicState === BasicProposalState.Executed && allPayloadsExpired) {
    return lastPayloadExpiredAt;
  } else {
    return proposal.data.creationTime + proposal.timings.expirationTime;
  }
}
function getEstimatedState(proposal, forVotesS, againstVotesS) {
  var now = dayjs().unix();
  var _getProposalStepsAndA3 = getProposalStepsAndAmounts({
      proposalData: proposal.data,
      quorum: proposal.config.quorum,
      differential: proposal.config.differential,
      precisionDivider: proposal.precisionDivider,
      cooldownPeriod: proposal.timings.cooldownPeriod,
      executionPayloadTime: proposal.timings.executionPayloadTime
    }),
    isVotingStarted = _getProposalStepsAndA3.isVotingStarted,
    isVotingEnded = _getProposalStepsAndA3.isVotingEnded,
    isVotingClosed = _getProposalStepsAndA3.isVotingClosed,
    lastPayloadQueuedAt = _getProposalStepsAndA3.lastPayloadQueuedAt,
    predictPayloadExpiredTime = _getProposalStepsAndA3.predictPayloadExpiredTime;
  var _normalizeVotes2 = normalizeVotes(forVotesS, againstVotesS),
    forVotes = _normalizeVotes2.forVotes,
    againstVotes = _normalizeVotes2.againstVotes;
  var _formatQuorum2 = formatQuorum(forVotesS, proposal.config.quorum, proposal.precisionDivider),
    quorumReached = _formatQuorum2.quorumReached;
  var _formatDiff2 = formatDiff(forVotesS, againstVotesS, proposal.config.differential, proposal.precisionDivider),
    normalizeRequiredDiff = _formatDiff2.normalizeRequiredDiff;
  var isVotingDefeated = againstVotes > forVotes + normalizeRequiredDiff || againstVotes === 0 && forVotes === 0 || !quorumReached;
  var isProposalWaitForQueued = isVotingStarted && isVotingEnded && isVotingClosed && !isVotingDefeated && proposal.data.votingMachineData.sentToGovernance && proposal.data.queuingTime > 0 && now < proposal.data.queuingTime + proposal.timings.cooldownPeriod;
  var isPayloadsWaitForQueued = proposal.data.basicState === BasicProposalState.Executed && now < lastPayloadQueuedAt + proposal.timings.executionPayloadTime;
  var executedTimestamp = proposal.data.queuingTime > 0 && lastPayloadQueuedAt === 0 ? proposal.data.queuingTime + proposal.timings.cooldownPeriod : proposal.data.queuingTime > 0 && lastPayloadQueuedAt > 0 ? lastPayloadQueuedAt + proposal.timings.executionPayloadTime : 0;
  if (now <= proposal.data.creationTime + proposal.config.coolDownBeforeVotingStart) {
    return {
      estimatedState: ProposalEstimatedState.Active,
      timestampForEstimatedState: proposal.data.creationTime + proposal.config.coolDownBeforeVotingStart
    };
  } else if (isVotingStarted && !isVotingEnded && forVotes > againstVotes + normalizeRequiredDiff && quorumReached) {
    return {
      estimatedState: ProposalEstimatedState.Succeed,
      timestampForEstimatedState: proposal.data.votingMachineData.endTime
    };
  } else if (isVotingDefeated && isVotingStarted && !isVotingEnded) {
    return {
      estimatedState: ProposalEstimatedState.Defeated,
      timestampForEstimatedState: proposal.data.votingMachineData.endTime
    };
  } else if (isProposalWaitForQueued && !isPayloadsWaitForQueued) {
    return {
      estimatedState: ProposalEstimatedState.ProposalExecuted,
      timestampForEstimatedState: executedTimestamp
    };
  } else if (isPayloadsWaitForQueued) {
    return {
      estimatedState: ProposalEstimatedState.PayloadsExecuted,
      timestampForEstimatedState: executedTimestamp
    };
  } else {
    return {
      estimatedState: ProposalEstimatedState.Expired,
      timestampForEstimatedState: proposal.data.basicState === BasicProposalState.Executed ? predictPayloadExpiredTime : proposal.data.creationTime + proposal.timings.expirationTime
    };
  }
}
function getWaitForState(proposal) {
  var now = dayjs().unix();
  var _getProposalStepsAndA4 = getProposalStepsAndAmounts({
      proposalData: proposal.data,
      quorum: proposal.config.quorum,
      differential: proposal.config.differential,
      precisionDivider: proposal.precisionDivider,
      cooldownPeriod: proposal.timings.cooldownPeriod,
      executionPayloadTime: proposal.timings.executionPayloadTime
    }),
    isVotingStarted = _getProposalStepsAndA4.isVotingStarted,
    isVotingEnded = _getProposalStepsAndA4.isVotingEnded,
    isVotingClosed = _getProposalStepsAndA4.isVotingClosed,
    isVotingFailed = _getProposalStepsAndA4.isVotingFailed,
    isProposalExecuted = _getProposalStepsAndA4.isProposalExecuted,
    isProposalQueued = _getProposalStepsAndA4.isProposalQueued,
    isPayloadsQueued = _getProposalStepsAndA4.isPayloadsQueued,
    lastPayloadQueuedAt = _getProposalStepsAndA4.lastPayloadQueuedAt;
  if (!isVotingFailed) {
    if (now > proposal.data.creationTime + proposal.config.coolDownBeforeVotingStart && !isVotingStarted && !isVotingEnded && !isVotingClosed) {
      return ProposalWaitForState.WaitForActivateVoting;
    } else if (isVotingStarted && isVotingEnded && !isVotingClosed) {
      return ProposalWaitForState.WaitForCloseVoting;
    } else if (isVotingStarted && isVotingEnded && isVotingClosed && proposal.data.votingMachineData.sentToGovernance && proposal.data.queuingTime <= 0) {
      return ProposalWaitForState.WaitForQueueProposal;
    } else if (isProposalQueued && proposal.data.basicState !== BasicProposalState.Executed) {
      return ProposalWaitForState.WaitForExecuteProposal;
    } else if (isProposalExecuted && lastPayloadQueuedAt === 0) {
      return ProposalWaitForState.WaitForQueuePayloads;
    } else if (isPayloadsQueued) {
      return ProposalWaitForState.WaitForExecutePayloads;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}
function formatProposal(proposal) {
  var _getProposalStepsAndA5 = getProposalStepsAndAmounts({
      proposalData: proposal.data,
      quorum: proposal.config.quorum,
      differential: proposal.config.differential,
      precisionDivider: proposal.precisionDivider,
      cooldownPeriod: proposal.timings.cooldownPeriod,
      executionPayloadTime: proposal.timings.executionPayloadTime
    }),
    forVotes = _getProposalStepsAndA5.forVotes,
    normalizeMinQuorumVotes = _getProposalStepsAndA5.normalizeMinQuorumVotes,
    againstVotes = _getProposalStepsAndA5.againstVotes,
    normalizeRequiredDiff = _getProposalStepsAndA5.normalizeRequiredDiff;
  var stateTimestamp = getStateTimestamp(proposal);
  var _getEstimatedState = getEstimatedState(proposal, proposal.data.votingMachineData.forVotes, proposal.data.votingMachineData.againstVotes),
    estimatedState = _getEstimatedState.estimatedState,
    timestampForEstimatedState = _getEstimatedState.timestampForEstimatedState;
  var waitForState = getWaitForState(proposal);
  var allVotes = new BigNumber(proposal.data.votingMachineData.forVotes).plus(proposal.data.votingMachineData.againstVotes);
  var votingPowerBasic = proposal.balances.map(function (balance) {
    return valueToBigNumber(balance.basicValue).toNumber();
  }).reduce(function (sum, value) {
    return sum + value;
  }, 0);
  var votingPower = proposal.balances.map(function (balance) {
    return valueToBigNumber(balance.value).toNumber();
  }).reduce(function (sum, value) {
    return sum + value;
  }, 0);
  var votingTokens = proposal.balances;
  var requiredForVotes = normalizeMinQuorumVotes - againstVotes > normalizeRequiredDiff ? normalizeMinQuorumVotes - againstVotes : againstVotes + normalizeRequiredDiff;
  var requiredAgainstVotes = forVotes === 0 ? 0 : forVotes + normalizeRequiredDiff;
  var forPercent = allVotes.gt(0) ? new BigNumber(forVotes).dividedBy(requiredForVotes).multipliedBy(100).toNumber() : 0;
  var againstPercent = allVotes.gt(0) ? new BigNumber(againstVotes).dividedBy(requiredAgainstVotes > 0 ? requiredAgainstVotes : 1).multipliedBy(100).toNumber() : 0;
  return {
    forPercent: forPercent,
    forVotes: forVotes,
    againstPercent: againstPercent,
    againstVotes: againstVotes,
    minQuorumVotes: normalizeMinQuorumVotes,
    requiredDiff: normalizeRequiredDiff,
    requiredForVotes: requiredForVotes,
    requiredAgainstVotes: requiredAgainstVotes,
    stateTimestamp: stateTimestamp,
    estimatedState: estimatedState,
    timestampForEstimatedState: timestampForEstimatedState,
    waitForState: waitForState,
    votingPowerBasic: votingPowerBasic,
    votingPower: votingPower,
    votedPower: normalizeBN(proposal.data.votingMachineData.votedInfo.votingPower, 18).toNumber(),
    votingTokens: votingTokens
  };
}

// TODO: need added mainnets
var getAverageBlockTime = function getAverageBlockTime(chainId) {
  switch (chainId) {
    case ChainIdByName.Sepolia:
      return 15;
    case ChainIdByName.AvalancheFuji:
      return 5;
    case ChainIdByName.Mumbai:
      return 3;
    case ChainIdByName.BnbTest:
      return 3;
    default:
      return 15;
  }
};
function getBlockNumberByTimestamp(_x, _x2, _x3) {
  return _getBlockNumberByTimestamp.apply(this, arguments);
}
function _getBlockNumberByTimestamp() {
  _getBlockNumberByTimestamp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(chainId, targetTimestamp, provider) {
    var blocksDiff, MAX_ITERATIONS, iterationCount, averageBlockTime, currentBlock, previousBlockTimestamp, previousBlockNumber, estimatedBlockNumber, estimatedBlock, minBlockNumber, maxBlockNumber;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          blocksDiff = 100;
          MAX_ITERATIONS = 10;
          iterationCount = 0;
          averageBlockTime = getAverageBlockTime(chainId);
          _context.next = 6;
          return provider.getBlock('latest');
        case 6:
          currentBlock = _context.sent;
          if (!(targetTimestamp > currentBlock.timestamp)) {
            _context.next = 9;
            break;
          }
          throw new Error('Target timestamp is in the future.');
        case 9:
          previousBlockTimestamp = currentBlock.timestamp;
          previousBlockNumber = currentBlock.number;
        case 11:
          // Make a guess
          estimatedBlockNumber = Math.max(0, currentBlock.number - Math.floor((previousBlockTimestamp - targetTimestamp) / averageBlockTime));
          // Get block data
          _context.next = 14;
          return provider.getBlock(estimatedBlockNumber);
        case 14:
          estimatedBlock = _context.sent;
          // Calculate a new average block time based on the difference of the timestamps
          averageBlockTime = (estimatedBlock.timestamp - previousBlockTimestamp) / (estimatedBlockNumber - previousBlockNumber);
          previousBlockTimestamp = estimatedBlock.timestamp;
          previousBlockNumber = estimatedBlock.number;
          iterationCount++;
        case 19:
          if (Math.abs(estimatedBlock.timestamp - targetTimestamp) > blocksDiff * averageBlockTime && iterationCount < MAX_ITERATIONS) {
            _context.next = 11;
            break;
          }
        case 20:
          if (!(iterationCount === MAX_ITERATIONS)) {
            _context.next = 22;
            break;
          }
          throw new Error('Maximum iterations reached without converging.');
        case 22:
          // if estimated block timestamp <= target
          minBlockNumber = estimatedBlock.number - 1;
          maxBlockNumber = estimatedBlock.number + blocksDiff * 2; // if estimated block timestamp > target
          if (estimatedBlock.timestamp > targetTimestamp) {
            minBlockNumber = estimatedBlock.number - blocksDiff * 2;
            maxBlockNumber = estimatedBlock.number;
          }
          return _context.abrupt("return", {
            minBlockNumber: minBlockNumber,
            maxBlockNumber: maxBlockNumber
          });
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getBlockNumberByTimestamp.apply(this, arguments);
}

function getGovCoreConfigs(_x, _x2) {
  return _getGovCoreConfigs.apply(this, arguments);
}
function _getGovCoreConfigs() {
  _getGovCoreConfigs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(govCoreDataHelper, govCoreContractAddress) {
    var accessLevels, constants, contractsConstants, configs, i, votingConfig, config;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          accessLevels = [1, 2]; // access levels that we can’t get from contracts in any way, so far there are only two of them, we need to keep an eye on that suddenly there will be more of them
          _context.next = 3;
          return govCoreDataHelper.getConstants(govCoreContractAddress, accessLevels);
        case 3:
          constants = _context.sent;
          contractsConstants = {
            precisionDivider: constants.precisionDivider.toString(),
            cooldownPeriod: constants.cooldownPeriod.toNumber(),
            expirationTime: constants.expirationTime.toNumber(),
            cancellationFee: constants.cancellationFee.toString()
          };
          configs = [];
          for (i = 0; i < accessLevels.length; i++) {
            votingConfig = constants.votingConfigs[i];
            config = {
              accessLevel: votingConfig.accessLevel,
              votingDuration: votingConfig.config.votingDuration,
              quorum: votingConfig.config.yesThreshold.toNumber() || 200,
              differential: votingConfig.config.yesNoDifferential.toNumber() || 50,
              coolDownBeforeVotingStart: votingConfig.config.coolDownBeforeVotingStart,
              minPropositionPower: votingConfig.config.minPropositionPower.toNumber()
            };
            configs.push(config);
          }
          return _context.abrupt("return", {
            contractsConstants: contractsConstants,
            configs: configs
          });
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getGovCoreConfigs.apply(this, arguments);
}

function getPayloadsCreatedEvents(_x, _x2, _x3, _x4, _x5) {
  return _getPayloadsCreatedEvents.apply(this, arguments);
}
function _getPayloadsCreatedEvents() {
  _getPayloadsCreatedEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(startBlock, endBlock, payloadsController, payloadsControllerAddress, chainId) {
    var events;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return payloadsController.queryFilter(payloadsController.filters.PayloadCreated(), startBlock, endBlock);
        case 2:
          events = _context.sent;
          return _context.abrupt("return", events.sort(function (a, b) {
            return b.blockNumber - a.blockNumber;
          }).map(function (event) {
            return {
              payloadId: event.args.payloadId,
              chainId: chainId,
              transactionHash: event.transactionHash,
              blockNumber: event.blockNumber,
              payloadsController: payloadsControllerAddress
            };
          }));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getPayloadsCreatedEvents.apply(this, arguments);
}
function getPayloadsCreated(_x6, _x7, _x8, _x9, _x10) {
  return _getPayloadsCreated.apply(this, arguments);
}
// proposal created
function _getPayloadsCreated() {
  _getPayloadsCreated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(startBlock, endBlock, payloadsController, payloadsControllerAddress, chainId) {
    var callbackFunc;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          callbackFunc = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(startBlockNumber, endBlockNumber) {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return getPayloadsCreatedEvents(startBlockNumber, endBlockNumber, payloadsController, payloadsControllerAddress, chainId);
                  case 2:
                    return _context2.abrupt("return", _context2.sent);
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function callbackFunc(_x61, _x62) {
              return _ref.apply(this, arguments);
            };
          }();
          return _context3.abrupt("return", getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc));
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _getPayloadsCreated.apply(this, arguments);
}
function getProposalCreatedEvents(_x11, _x12, _x13) {
  return _getProposalCreatedEvents.apply(this, arguments);
}
function _getProposalCreatedEvents() {
  _getProposalCreatedEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(startBlock, endBlock, govCore) {
    var events;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return govCore.queryFilter(govCore.filters.ProposalCreated(), startBlock, endBlock);
        case 2:
          events = _context4.sent;
          return _context4.abrupt("return", events.sort(function (a, b) {
            return b.blockNumber - a.blockNumber;
          }).map(function (event) {
            return {
              proposalId: event.args.proposalId.toNumber(),
              transactionHash: event.transactionHash,
              blockNumber: event.blockNumber
            };
          }));
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _getProposalCreatedEvents.apply(this, arguments);
}
function getProposalCreated(_x14, _x15, _x16) {
  return _getProposalCreated.apply(this, arguments);
}
// proposal activate for voting
function _getProposalCreated() {
  _getProposalCreated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(startBlock, endBlock, govCore) {
    var callbackFunc;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          callbackFunc = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(startBlockNumber, endBlockNumber) {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return getProposalCreatedEvents(startBlockNumber, endBlockNumber, govCore);
                  case 2:
                    return _context5.abrupt("return", _context5.sent);
                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function callbackFunc(_x63, _x64) {
              return _ref2.apply(this, arguments);
            };
          }();
          return _context6.abrupt("return", getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc));
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _getProposalCreated.apply(this, arguments);
}
function getProposalActivatedEvents(_x17, _x18, _x19) {
  return _getProposalActivatedEvents.apply(this, arguments);
}
function _getProposalActivatedEvents() {
  _getProposalActivatedEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(startBlock, endBlock, govCore) {
    var events;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return govCore.queryFilter(govCore.filters.VotingActivated(), startBlock, endBlock);
        case 2:
          events = _context7.sent;
          return _context7.abrupt("return", events.sort(function (a, b) {
            return b.blockNumber - a.blockNumber;
          }).map(function (event) {
            return {
              proposalId: event.args.proposalId.toNumber(),
              transactionHash: event.transactionHash,
              blockNumber: event.blockNumber
            };
          }));
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _getProposalActivatedEvents.apply(this, arguments);
}
function getProposalActivated(_x20, _x21, _x22) {
  return _getProposalActivated.apply(this, arguments);
}
// voting activate on VM
function _getProposalActivated() {
  _getProposalActivated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(startBlock, endBlock, govCore) {
    var callbackFunc;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          callbackFunc = /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(startBlockNumber, endBlockNumber) {
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return getProposalActivatedEvents(startBlockNumber, endBlockNumber, govCore);
                  case 2:
                    return _context8.abrupt("return", _context8.sent);
                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8);
            }));
            return function callbackFunc(_x65, _x66) {
              return _ref3.apply(this, arguments);
            };
          }();
          return _context9.abrupt("return", getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc));
        case 2:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _getProposalActivated.apply(this, arguments);
}
function getProposalActivatedOnVMEvents(_x23, _x24, _x25) {
  return _getProposalActivatedOnVMEvents.apply(this, arguments);
}
function _getProposalActivatedOnVMEvents() {
  _getProposalActivatedOnVMEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(startBlock, endBlock, votingMachine) {
    var events;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return votingMachine.queryFilter(votingMachine.filters.ProposalVoteStarted(), startBlock, endBlock);
        case 2:
          events = _context10.sent;
          return _context10.abrupt("return", events.sort(function (a, b) {
            return b.blockNumber - a.blockNumber;
          }).map(function (event) {
            return {
              proposalId: event.args.proposalId.toNumber(),
              transactionHash: event.transactionHash,
              blockNumber: event.blockNumber
            };
          }));
        case 4:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _getProposalActivatedOnVMEvents.apply(this, arguments);
}
function getProposalActivatedOnVM(_x26, _x27, _x28) {
  return _getProposalActivatedOnVM.apply(this, arguments);
}
// voting closed on VM and voting results sent
function _getProposalActivatedOnVM() {
  _getProposalActivatedOnVM = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(startBlock, endBlock, votingMachine) {
    var callbackFunc;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          callbackFunc = /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(startBlockNumber, endBlockNumber) {
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return getProposalActivatedOnVMEvents(startBlockNumber, endBlockNumber, votingMachine);
                  case 2:
                    return _context11.abrupt("return", _context11.sent);
                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11);
            }));
            return function callbackFunc(_x67, _x68) {
              return _ref4.apply(this, arguments);
            };
          }();
          return _context12.abrupt("return", getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc));
        case 2:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _getProposalActivatedOnVM.apply(this, arguments);
}
function getProposalVotingClosedEvents(_x29, _x30, _x31) {
  return _getProposalVotingClosedEvents.apply(this, arguments);
}
function _getProposalVotingClosedEvents() {
  _getProposalVotingClosedEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(startBlock, endBlock, votingMachine) {
    var events;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return votingMachine.queryFilter(votingMachine.filters.ProposalResultsSent(), startBlock, endBlock);
        case 2:
          events = _context13.sent;
          return _context13.abrupt("return", events.sort(function (a, b) {
            return b.blockNumber - a.blockNumber;
          }).map(function (event) {
            return {
              proposalId: event.args.proposalId.toNumber(),
              transactionHash: event.transactionHash,
              blockNumber: event.blockNumber
            };
          }));
        case 4:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return _getProposalVotingClosedEvents.apply(this, arguments);
}
function getProposalVotingClosed(_x32, _x33, _x34) {
  return _getProposalVotingClosed.apply(this, arguments);
}
// proposal queued
function _getProposalVotingClosed() {
  _getProposalVotingClosed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(startBlock, endBlock, votingMachine) {
    var callbackFunc;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          callbackFunc = /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(startBlockNumber, endBlockNumber) {
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return getProposalVotingClosedEvents(startBlockNumber, endBlockNumber, votingMachine);
                  case 2:
                    return _context14.abrupt("return", _context14.sent);
                  case 3:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14);
            }));
            return function callbackFunc(_x69, _x70) {
              return _ref5.apply(this, arguments);
            };
          }();
          return _context15.abrupt("return", getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc));
        case 2:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return _getProposalVotingClosed.apply(this, arguments);
}
function getProposalQueuedEvents(_x35, _x36, _x37) {
  return _getProposalQueuedEvents.apply(this, arguments);
}
function _getProposalQueuedEvents() {
  _getProposalQueuedEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(startBlock, endBlock, govCore) {
    var events;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return govCore.queryFilter(govCore.filters.ProposalQueued(), startBlock, endBlock);
        case 2:
          events = _context16.sent;
          return _context16.abrupt("return", events.sort(function (a, b) {
            return b.blockNumber - a.blockNumber;
          }).map(function (event) {
            return {
              proposalId: event.args.proposalId.toNumber(),
              transactionHash: event.transactionHash,
              blockNumber: event.blockNumber
            };
          }));
        case 4:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return _getProposalQueuedEvents.apply(this, arguments);
}
function getProposalQueued(_x38, _x39, _x40) {
  return _getProposalQueued.apply(this, arguments);
}
// payloads queued
function _getProposalQueued() {
  _getProposalQueued = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(startBlock, endBlock, govCore) {
    var callbackFunc;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          callbackFunc = /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(startBlockNumber, endBlockNumber) {
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return getProposalQueuedEvents(startBlockNumber, endBlockNumber, govCore);
                  case 2:
                    return _context17.abrupt("return", _context17.sent);
                  case 3:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17);
            }));
            return function callbackFunc(_x71, _x72) {
              return _ref6.apply(this, arguments);
            };
          }();
          return _context18.abrupt("return", getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc));
        case 2:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return _getProposalQueued.apply(this, arguments);
}
function getPayloadsQueuedEvents(_x41, _x42, _x43, _x44, _x45) {
  return _getPayloadsQueuedEvents.apply(this, arguments);
}
function _getPayloadsQueuedEvents() {
  _getPayloadsQueuedEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(startBlock, endBlock, payloadsController, payloadsControllerAddress, chainId) {
    var events;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return payloadsController.queryFilter(payloadsController.filters.PayloadQueued(), startBlock, endBlock);
        case 2:
          events = _context19.sent;
          return _context19.abrupt("return", events.sort(function (a, b) {
            return b.blockNumber - a.blockNumber;
          }).map(function (event) {
            return {
              payloadId: event.args.payloadId,
              chainId: chainId,
              transactionHash: event.transactionHash,
              blockNumber: event.blockNumber,
              payloadsController: payloadsControllerAddress
            };
          }));
        case 4:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return _getPayloadsQueuedEvents.apply(this, arguments);
}
function getPayloadsQueued(_x46, _x47, _x48, _x49, _x50) {
  return _getPayloadsQueued.apply(this, arguments);
}
// payloads executed
function _getPayloadsQueued() {
  _getPayloadsQueued = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(startBlock, endBlock, payloadsController, payloadsControllerAddress, chainId) {
    var callbackFunc;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          callbackFunc = /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(startBlockNumber, endBlockNumber) {
              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                while (1) switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return getPayloadsQueuedEvents(startBlockNumber, endBlockNumber, payloadsController, payloadsControllerAddress, chainId);
                  case 2:
                    return _context20.abrupt("return", _context20.sent);
                  case 3:
                  case "end":
                    return _context20.stop();
                }
              }, _callee20);
            }));
            return function callbackFunc(_x73, _x74) {
              return _ref7.apply(this, arguments);
            };
          }();
          return _context21.abrupt("return", getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc));
        case 2:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return _getPayloadsQueued.apply(this, arguments);
}
function getPayloadsExecutedEvents(_x51, _x52, _x53, _x54, _x55) {
  return _getPayloadsExecutedEvents.apply(this, arguments);
}
function _getPayloadsExecutedEvents() {
  _getPayloadsExecutedEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(startBlock, endBlock, payloadsController, payloadsControllerAddress, chainId) {
    var events;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return payloadsController.queryFilter(payloadsController.filters.PayloadExecuted(), startBlock, endBlock);
        case 2:
          events = _context22.sent;
          return _context22.abrupt("return", events.sort(function (a, b) {
            return b.blockNumber - a.blockNumber;
          }).map(function (event) {
            return {
              payloadId: event.args.payloadId,
              chainId: chainId,
              transactionHash: event.transactionHash,
              blockNumber: event.blockNumber,
              payloadsController: payloadsControllerAddress
            };
          }));
        case 4:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return _getPayloadsExecutedEvents.apply(this, arguments);
}
function getPayloadsExecuted(_x56, _x57, _x58, _x59, _x60) {
  return _getPayloadsExecuted.apply(this, arguments);
}
function _getPayloadsExecuted() {
  _getPayloadsExecuted = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(startBlock, endBlock, payloadsController, payloadsControllerAddress, chainId) {
    var callbackFunc;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          callbackFunc = /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(startBlockNumber, endBlockNumber) {
              return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                while (1) switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return getPayloadsExecutedEvents(startBlockNumber, endBlockNumber, payloadsController, payloadsControllerAddress, chainId);
                  case 2:
                    return _context23.abrupt("return", _context23.sent);
                  case 3:
                  case "end":
                    return _context23.stop();
                }
              }, _callee23);
            }));
            return function callbackFunc(_x75, _x76) {
              return _ref8.apply(this, arguments);
            };
          }();
          return _context24.abrupt("return", getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc));
        case 2:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return _getPayloadsExecuted.apply(this, arguments);
}

function getVotingMachineProposalState(proposal) {
  var now = dayjs().unix();
  if (proposal.votingMachineData.startTime === 0) {
    return VotingMachineProposalState.NotCreated;
  } else if (now <= proposal.votingMachineData.endTime) {
    return VotingMachineProposalState.Active;
  } else if (proposal.votingMachineData.votingClosedAndSentBlockNumber === 0) {
    return VotingMachineProposalState.Finished;
  } else {
    return VotingMachineProposalState.SentToGovernance;
  }
}
function formatVotingMachineData(id, votingMachineData) {
  return {
    id: id,
    forVotes: votingMachineData.proposalData.forVotes.toString(),
    againstVotes: votingMachineData.proposalData.againstVotes.toString(),
    startTime: votingMachineData.proposalData.startTime,
    endTime: votingMachineData.proposalData.endTime,
    votingClosedAndSentBlockNumber: votingMachineData.proposalData.votingClosedAndSentBlockNumber.toNumber(),
    votingClosedAndSentTimestamp: votingMachineData.proposalData.votingClosedAndSentTimestamp,
    l1BlockHash: (votingMachineData == null ? void 0 : votingMachineData.voteConfig.l1ProposalBlockHash) || ethers.constants.HashZero,
    strategy: votingMachineData.strategy,
    sentToGovernance: votingMachineData.proposalData.sentToGovernance,
    createdBlock: votingMachineData.proposalData.creationBlockNumber.toNumber(),
    votedInfo: {
      support: votingMachineData.votedInfo.support,
      votingPower: votingMachineData.votedInfo.votingPower.toString()
    },
    votingAssets: votingMachineData.votingAssets,
    hasRequiredRoots: votingMachineData.hasRequiredRoots
  };
}
function updateVotingMachineData(proposals, votingMachineDataHelperData, ids) {
  var proposalsData = [];
  ids.forEach(function (id) {
    var govData = proposals.find(function (proposal) {
      return (proposal == null ? void 0 : proposal.id) === id;
    });
    if (govData) {
      var votingMachineData = votingMachineDataHelperData.find(function (proposal) {
        return proposal.proposalData.id.toNumber() === govData.id;
      }) || votingMachineDataHelperData[0];
      var proposalData = {
        id: govData.id,
        votingDuration: +(votingMachineData == null ? void 0 : votingMachineData.voteConfig.votingDuration) || govData.votingDuration,
        creationTime: govData.creationTime,
        accessLevel: govData.accessLevel,
        basicState: govData.basicState,
        queuingTime: govData.queuingTime,
        ipfsHash: govData.ipfsHash,
        initialPayloads: govData.initialPayloads,
        snapshotBlockHash: govData.snapshotBlockHash,
        creator: govData.creator,
        canceledAt: govData.canceledAt,
        votingActivationTime: govData.votingActivationTime,
        votingChainId: govData.votingChainId,
        votingMachineData: formatVotingMachineData(govData.id, votingMachineData),
        prerender: govData.prerender
      };
      proposalsData.push(proposalData);
    }
  });
  return proposalsData;
}
function getDetailedProposalsData(govCoreDataHelperData, votingMachineDataHelperData, ids, prerender) {
  var proposalsData = [];
  var _loop = function _loop() {
    var govData = govCoreDataHelperData[i];
    var votingMachineData = votingMachineDataHelperData.find(function (proposal) {
      return proposal.proposalData.id.toNumber() === govData.id.toNumber();
    }) || votingMachineDataHelperData[i];
    var proposalData = {
      id: govData.id.toNumber(),
      votingDuration: +(votingMachineData == null ? void 0 : votingMachineData.voteConfig.votingDuration) || +govData.proposalData.votingDuration,
      creationTime: +govData.proposalData.creationTime,
      accessLevel: +govData.proposalData.accessLevel,
      basicState: +govData.proposalData.state,
      queuingTime: +govData.proposalData.queuingTime,
      ipfsHash: govData.proposalData.ipfsHash,
      initialPayloads: govData.proposalData.payloads.map(function (payload) {
        return {
          id: payload.payloadId,
          chainId: payload.chain.toNumber(),
          payloadsController: payload.payloadsController
        };
      }),
      snapshotBlockHash: govData.proposalData.snapshotBlockHash,
      creator: govData.proposalData.creator,
      canceledAt: govData.proposalData.cancelTimestamp,
      votingActivationTime: govData.proposalData.votingActivationTime,
      votingChainId: govData.votingChainId.toNumber(),
      votingMachineData: formatVotingMachineData(govData.id.toNumber(), votingMachineData),
      prerender: !!prerender
    };
    proposalsData.push(proposalData);
  };
  for (var i = 0; i < ids.length; i++) {
    _loop();
  }
  return proposalsData;
}

function getVoteEvents(_x, _x2, _x3, _x4) {
  return _getVoteEvents.apply(this, arguments);
}
function _getVoteEvents() {
  _getVoteEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(votingMachine, startBlock, endBlock, chainId) {
    var events;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return votingMachine.queryFilter(votingMachine.filters.VoteEmitted(), startBlock, endBlock);
        case 2:
          events = _context.sent;
          return _context.abrupt("return", events.sort(function (a, b) {
            return b.blockNumber - a.blockNumber;
          }).map(function (event) {
            return {
              proposalId: event.args.proposalId.toNumber(),
              address: event.args.voter.toString(),
              support: event.args.support,
              votingPower: normalizeBN(event.args.votingPower.toString(), 18).toNumber(),
              transactionHash: event.transactionHash,
              blockNumber: event.blockNumber,
              chainId: chainId
            };
          }));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getVoteEvents.apply(this, arguments);
}
function getVoters(_x5, _x6, _x7, _x8, _x9) {
  return _getVoters.apply(this, arguments);
}
function _getVoters() {
  _getVoters = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(endBlock, startBlock, blockLimit, votingMachine, chainId) {
    var callbackFunc;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          callbackFunc = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(startBlockNumber, endBlockNumber) {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return getVoteEvents(votingMachine, startBlockNumber, endBlockNumber, chainId);
                  case 2:
                    return _context2.abrupt("return", _context2.sent);
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function callbackFunc(_x10, _x11) {
              return _ref.apply(this, arguments);
            };
          }();
          return _context3.abrupt("return", getEventsBySteps(startBlock, endBlock, blockLimit, callbackFunc));
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _getVoters.apply(this, arguments);
}

var ipfsGateway = 'https://ipfs.io/ipfs';
function getLink(hash, gateway) {
  return gateway + "/" + hash;
}
var MEMORIZE = {};
var incorectedHashses = ['0x0000000000000000000000000000000000000000000000000000000000000020', ethers.constants.HashZero];
function getProposalMetadata(_x, _x2, _x3, _x4) {
  return _getProposalMetadata.apply(this, arguments);
}
function _getProposalMetadata() {
  _getProposalMetadata = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(hash, gateway, setIpfsError, errorText) {
    var ipfsHash, ipfsResponse, clone, response, _matter, content, text, _matter2, _content, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (gateway === void 0) {
            gateway = ipfsGateway;
          }
          ipfsHash = hash.startsWith('0x') ? base58.encode(Buffer.from("1220" + hash.slice(2), 'hex')) : hash;
          if (!MEMORIZE[ipfsHash]) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", MEMORIZE[ipfsHash]);
        case 4:
          if (!incorectedHashses.some(function (h) {
            return hash === h;
          })) {
            _context.next = 12;
            break;
          }
          if (!setIpfsError) {
            _context.next = 9;
            break;
          }
          setIpfsError(hash, errorText);
          _context.next = 10;
          break;
        case 9:
          throw Error('Fetch metadata form ipfs not working');
        case 10:
          _context.next = 37;
          break;
        case 12:
          _context.next = 14;
          return fetch(getLink(ipfsHash, gateway));
        case 14:
          ipfsResponse = _context.sent;
          if (ipfsResponse.ok) {
            _context.next = 21;
            break;
          }
          if (!setIpfsError) {
            _context.next = 20;
            break;
          }
          setIpfsError(hash);
          _context.next = 21;
          break;
        case 20:
          throw Error('Fetch metadata form ipfs not working');
        case 21:
          clone = ipfsResponse.clone();
          _context.prev = 22;
          _context.next = 25;
          return ipfsResponse.json();
        case 25:
          response = _context.sent;
          _matter = matter(response.description), content = _matter.content;
          MEMORIZE[ipfsHash] = {
            title: response.title,
            aip: response.aip,
            originalIpfsHash: hash,
            author: response.author,
            discussions: response.discussions,
            shortDescription: response.shortDescription,
            ipfsHash: ipfsHash,
            description: content
          };
          _context.next = 37;
          break;
        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](22);
          _context.next = 34;
          return clone.text();
        case 34:
          text = _context.sent;
          _matter2 = matter(text), _content = _matter2.content, data = _matter2.data;
          MEMORIZE[ipfsHash] = {
            title: data.title,
            aip: data.aip,
            originalIpfsHash: hash,
            author: data.author,
            discussions: data.discussions,
            shortDescription: data.shortDescription,
            ipfsHash: ipfsHash,
            description: _content
          };
        case 37:
          return _context.abrupt("return", MEMORIZE[ipfsHash]);
        case 38:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[22, 30]]);
  }));
  return _getProposalMetadata.apply(this, arguments);
}

export { BasicProposalState, ChainIdByName, PayloadState, ProposalEstimatedState, ProposalState, ProposalStateWithName, ProposalWaitForState, VotingMachineProposalState, appConfigInit, blockLimit, checkHash, formatDiff, formatProposal, formatQuorum, formatVotingMachineData, getBlockNumberByTimestamp, getBlocksForEvents, getDetailedProposalsData, getEstimatedState, getEventsBySteps, getGovCoreConfigs, getLink, getPayloadsCreated, getPayloadsExecuted, getPayloadsQueued, getProposalActivated, getProposalActivatedOnVM, getProposalCreated, getProposalMetadata, getProposalQueued, getProposalState, getProposalStepsAndAmounts, getProposalVotingClosed, getVoters, getVotingMachineProposalState, getWaitForState, govCoreConfig, ipfsGateway, normalize, normalizeBN, normalizeVotes, payloadsControllerChainIds, payloadsControllerConfig, updateVotingMachineData, valueToBigNumber, votingMachineChainIds };
//# sourceMappingURL=aave-governance-ui-helpers.esm.js.map
