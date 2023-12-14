"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports2, module2) {
    "use strict";
    !function(t, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports2, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date())
          return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2)
          return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1)
            return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2))
          return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2)
              return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2))
              return /* @__PURE__ */ new Date();
            if (e2 instanceof Date)
              return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c)
            return this.set(c, this.$M + r2);
          if ($2 === h)
            return this.set(h, this.$y + r2);
          if ($2 === a)
            return y2(1);
          if ($2 === o)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid())
            return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2)
            return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  }
});

// node_modules/viem/node_modules/abitype/dist/esm/regex.js
function execTyped(regex, string) {
  const match = regex.exec(string);
  return match?.groups;
}
var init_regex = __esm({
  "node_modules/viem/node_modules/abitype/dist/esm/regex.js"() {
    "use strict";
  }
});

// node_modules/viem/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js
function formatAbiParameter(abiParameter) {
  let type = abiParameter.type;
  if (tupleRegex.test(abiParameter.type) && "components" in abiParameter) {
    type = "(";
    const length = abiParameter.components.length;
    for (let i = 0; i < length; i++) {
      const component = abiParameter.components[i];
      type += formatAbiParameter(component);
      if (i < length - 1)
        type += ", ";
    }
    const result = execTyped(tupleRegex, abiParameter.type);
    type += `)${result?.array ?? ""}`;
    return formatAbiParameter({
      ...abiParameter,
      type
    });
  }
  if ("indexed" in abiParameter && abiParameter.indexed)
    type = `${type} indexed`;
  if (abiParameter.name)
    return `${type} ${abiParameter.name}`;
  return type;
}
var tupleRegex;
var init_formatAbiParameter = __esm({
  "node_modules/viem/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js"() {
    "use strict";
    init_regex();
    tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
  }
});

// node_modules/viem/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js
function formatAbiParameters(abiParameters) {
  let params = "";
  const length = abiParameters.length;
  for (let i = 0; i < length; i++) {
    const abiParameter = abiParameters[i];
    params += formatAbiParameter(abiParameter);
    if (i !== length - 1)
      params += ", ";
  }
  return params;
}
var init_formatAbiParameters = __esm({
  "node_modules/viem/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js"() {
    "use strict";
    init_formatAbiParameter();
  }
});

// node_modules/viem/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js
function formatAbiItem(abiItem) {
  if (abiItem.type === "function")
    return `function ${abiItem.name}(${formatAbiParameters(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== "nonpayable" ? ` ${abiItem.stateMutability}` : ""}${abiItem.outputs.length ? ` returns (${formatAbiParameters(abiItem.outputs)})` : ""}`;
  else if (abiItem.type === "event")
    return `event ${abiItem.name}(${formatAbiParameters(abiItem.inputs)})`;
  else if (abiItem.type === "error")
    return `error ${abiItem.name}(${formatAbiParameters(abiItem.inputs)})`;
  else if (abiItem.type === "constructor")
    return `constructor(${formatAbiParameters(abiItem.inputs)})${abiItem.stateMutability === "payable" ? " payable" : ""}`;
  else if (abiItem.type === "fallback")
    return "fallback()";
  return "receive() external payable";
}
var init_formatAbiItem = __esm({
  "node_modules/viem/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js"() {
    "use strict";
    init_formatAbiParameters();
  }
});

// node_modules/viem/node_modules/abitype/dist/esm/index.js
var init_esm = __esm({
  "node_modules/viem/node_modules/abitype/dist/esm/index.js"() {
    "use strict";
    init_formatAbiItem();
  }
});

// node_modules/viem/_esm/utils/abi/formatAbiItem.js
function formatAbiItem2(abiItem, { includeName = false } = {}) {
  if (abiItem.type !== "function" && abiItem.type !== "event" && abiItem.type !== "error")
    throw new InvalidDefinitionTypeError(abiItem.type);
  return `${abiItem.name}(${formatAbiParams(abiItem.inputs, { includeName })})`;
}
function formatAbiParams(params, { includeName = false } = {}) {
  if (!params)
    return "";
  return params.map((param) => formatAbiParam(param, { includeName })).join(includeName ? ", " : ",");
}
function formatAbiParam(param, { includeName }) {
  if (param.type.startsWith("tuple")) {
    return `(${formatAbiParams(param.components, { includeName })})${param.type.slice("tuple".length)}`;
  }
  return param.type + (includeName && param.name ? ` ${param.name}` : "");
}
var init_formatAbiItem2 = __esm({
  "node_modules/viem/_esm/utils/abi/formatAbiItem.js"() {
    "use strict";
    init_abi();
  }
});

// node_modules/viem/_esm/utils/data/isHex.js
function isHex(value, { strict = true } = {}) {
  if (!value)
    return false;
  if (typeof value !== "string")
    return false;
  return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}
var init_isHex = __esm({
  "node_modules/viem/_esm/utils/data/isHex.js"() {
    "use strict";
  }
});

// node_modules/viem/_esm/utils/data/size.js
function size(value) {
  if (isHex(value, { strict: false }))
    return Math.ceil((value.length - 2) / 2);
  return value.length;
}
var init_size = __esm({
  "node_modules/viem/_esm/utils/data/size.js"() {
    "use strict";
    init_isHex();
  }
});

// node_modules/viem/_esm/errors/version.js
var version;
var init_version = __esm({
  "node_modules/viem/_esm/errors/version.js"() {
    "use strict";
    version = "1.19.12";
  }
});

// node_modules/viem/_esm/errors/utils.js
var getContractAddress, getUrl, getVersion;
var init_utils = __esm({
  "node_modules/viem/_esm/errors/utils.js"() {
    "use strict";
    init_version();
    getContractAddress = (address) => address;
    getUrl = (url) => url;
    getVersion = () => `viem@${version}`;
  }
});

// node_modules/viem/_esm/errors/base.js
function walk(err, fn) {
  if (fn?.(err))
    return err;
  if (err && typeof err === "object" && "cause" in err)
    return walk(err.cause, fn);
  return fn ? null : err;
}
var BaseError;
var init_base = __esm({
  "node_modules/viem/_esm/errors/base.js"() {
    "use strict";
    init_utils();
    BaseError = class _BaseError extends Error {
      constructor(shortMessage, args = {}) {
        super();
        Object.defineProperty(this, "details", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "docsPath", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ViemError"
        });
        Object.defineProperty(this, "version", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: getVersion()
        });
        const details = args.cause instanceof _BaseError ? args.cause.details : args.cause?.message ? args.cause.message : args.details;
        const docsPath4 = args.cause instanceof _BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
        this.message = [
          shortMessage || "An error occurred.",
          "",
          ...args.metaMessages ? [...args.metaMessages, ""] : [],
          ...docsPath4 ? [
            `Docs: https://viem.sh${docsPath4}.html${args.docsSlug ? `#${args.docsSlug}` : ""}`
          ] : [],
          ...details ? [`Details: ${details}`] : [],
          `Version: ${this.version}`
        ].join("\n");
        if (args.cause)
          this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath4;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
      }
      walk(fn) {
        return walk(this, fn);
      }
    };
  }
});

// node_modules/viem/_esm/errors/abi.js
var AbiConstructorNotFoundError, AbiConstructorParamsNotFoundError, AbiDecodingDataSizeTooSmallError, AbiDecodingZeroDataError, AbiEncodingArrayLengthMismatchError, AbiEncodingBytesSizeMismatchError, AbiEncodingLengthMismatchError, AbiErrorSignatureNotFoundError, AbiEventSignatureEmptyTopicsError, AbiEventSignatureNotFoundError, AbiEventNotFoundError, AbiFunctionNotFoundError, AbiFunctionOutputsNotFoundError, AbiItemAmbiguityError, BytesSizeMismatchError, DecodeLogDataMismatch, DecodeLogTopicsMismatch, InvalidAbiEncodingTypeError, InvalidAbiDecodingTypeError, InvalidArrayError, InvalidDefinitionTypeError;
var init_abi = __esm({
  "node_modules/viem/_esm/errors/abi.js"() {
    "use strict";
    init_formatAbiItem2();
    init_size();
    init_base();
    AbiConstructorNotFoundError = class extends BaseError {
      constructor({ docsPath: docsPath4 }) {
        super([
          "A constructor was not found on the ABI.",
          "Make sure you are using the correct ABI and that the constructor exists on it."
        ].join("\n"), {
          docsPath: docsPath4
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiConstructorNotFoundError"
        });
      }
    };
    AbiConstructorParamsNotFoundError = class extends BaseError {
      constructor({ docsPath: docsPath4 }) {
        super([
          "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
          "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
        ].join("\n"), {
          docsPath: docsPath4
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiConstructorParamsNotFoundError"
        });
      }
    };
    AbiDecodingDataSizeTooSmallError = class extends BaseError {
      constructor({ data, params, size: size3 }) {
        super([`Data size of ${size3} bytes is too small for given parameters.`].join("\n"), {
          metaMessages: [
            `Params: (${formatAbiParams(params, { includeName: true })})`,
            `Data:   ${data} (${size3} bytes)`
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiDecodingDataSizeTooSmallError"
        });
        Object.defineProperty(this, "data", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "params", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "size", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.data = data;
        this.params = params;
        this.size = size3;
      }
    };
    AbiDecodingZeroDataError = class extends BaseError {
      constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.');
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiDecodingZeroDataError"
        });
      }
    };
    AbiEncodingArrayLengthMismatchError = class extends BaseError {
      constructor({ expectedLength, givenLength, type }) {
        super([
          `ABI encoding array length mismatch for type ${type}.`,
          `Expected length: ${expectedLength}`,
          `Given length: ${givenLength}`
        ].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiEncodingArrayLengthMismatchError"
        });
      }
    };
    AbiEncodingBytesSizeMismatchError = class extends BaseError {
      constructor({ expectedSize, value }) {
        super(`Size of bytes "${value}" (bytes${size(value)}) does not match expected size (bytes${expectedSize}).`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiEncodingBytesSizeMismatchError"
        });
      }
    };
    AbiEncodingLengthMismatchError = class extends BaseError {
      constructor({ expectedLength, givenLength }) {
        super([
          "ABI encoding params/values length mismatch.",
          `Expected length (params): ${expectedLength}`,
          `Given length (values): ${givenLength}`
        ].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiEncodingLengthMismatchError"
        });
      }
    };
    AbiErrorSignatureNotFoundError = class extends BaseError {
      constructor(signature, { docsPath: docsPath4 }) {
        super([
          `Encoded error signature "${signature}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the error exists on it.",
          `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join("\n"), {
          docsPath: docsPath4
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiErrorSignatureNotFoundError"
        });
        Object.defineProperty(this, "signature", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.signature = signature;
      }
    };
    AbiEventSignatureEmptyTopicsError = class extends BaseError {
      constructor({ docsPath: docsPath4 }) {
        super("Cannot extract event signature from empty topics.", {
          docsPath: docsPath4
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiEventSignatureEmptyTopicsError"
        });
      }
    };
    AbiEventSignatureNotFoundError = class extends BaseError {
      constructor(signature, { docsPath: docsPath4 }) {
        super([
          `Encoded event signature "${signature}" not found on ABI.`,
          "Make sure you are using the correct ABI and that the event exists on it.",
          `You can look up the signature here: https://openchain.xyz/signatures?query=${signature}.`
        ].join("\n"), {
          docsPath: docsPath4
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiEventSignatureNotFoundError"
        });
      }
    };
    AbiEventNotFoundError = class extends BaseError {
      constructor(eventName, { docsPath: docsPath4 } = {}) {
        super([
          `Event ${eventName ? `"${eventName}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the event exists on it."
        ].join("\n"), {
          docsPath: docsPath4
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiEventNotFoundError"
        });
      }
    };
    AbiFunctionNotFoundError = class extends BaseError {
      constructor(functionName, { docsPath: docsPath4 } = {}) {
        super([
          `Function ${functionName ? `"${functionName}" ` : ""}not found on ABI.`,
          "Make sure you are using the correct ABI and that the function exists on it."
        ].join("\n"), {
          docsPath: docsPath4
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiFunctionNotFoundError"
        });
      }
    };
    AbiFunctionOutputsNotFoundError = class extends BaseError {
      constructor(functionName, { docsPath: docsPath4 }) {
        super([
          `Function "${functionName}" does not contain any \`outputs\` on ABI.`,
          "Cannot decode function result without knowing what the parameter types are.",
          "Make sure you are using the correct ABI and that the function exists on it."
        ].join("\n"), {
          docsPath: docsPath4
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiFunctionOutputsNotFoundError"
        });
      }
    };
    AbiItemAmbiguityError = class extends BaseError {
      constructor(x, y) {
        super("Found ambiguous types in overloaded ABI items.", {
          metaMessages: [
            `\`${x.type}\` in \`${formatAbiItem2(x.abiItem)}\`, and`,
            `\`${y.type}\` in \`${formatAbiItem2(y.abiItem)}\``,
            "",
            "These types encode differently and cannot be distinguished at runtime.",
            "Remove one of the ambiguous items in the ABI."
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "AbiItemAmbiguityError"
        });
      }
    };
    BytesSizeMismatchError = class extends BaseError {
      constructor({ expectedSize, givenSize }) {
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "BytesSizeMismatchError"
        });
      }
    };
    DecodeLogDataMismatch = class extends BaseError {
      constructor({ abiItem, data, params, size: size3 }) {
        super([
          `Data size of ${size3} bytes is too small for non-indexed event parameters.`
        ].join("\n"), {
          metaMessages: [
            `Params: (${formatAbiParams(params, { includeName: true })})`,
            `Data:   ${data} (${size3} bytes)`
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "DecodeLogDataMismatch"
        });
        Object.defineProperty(this, "abiItem", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "data", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "params", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "size", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.abiItem = abiItem;
        this.data = data;
        this.params = params;
        this.size = size3;
      }
    };
    DecodeLogTopicsMismatch = class extends BaseError {
      constructor({ abiItem, param }) {
        super([
          `Expected a topic for indexed event parameter${param.name ? ` "${param.name}"` : ""} on event "${formatAbiItem2(abiItem, { includeName: true })}".`
        ].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "DecodeLogTopicsMismatch"
        });
        Object.defineProperty(this, "abiItem", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.abiItem = abiItem;
      }
    };
    InvalidAbiEncodingTypeError = class extends BaseError {
      constructor(type, { docsPath: docsPath4 }) {
        super([
          `Type "${type}" is not a valid encoding type.`,
          "Please provide a valid ABI type."
        ].join("\n"), { docsPath: docsPath4 });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidAbiEncodingType"
        });
      }
    };
    InvalidAbiDecodingTypeError = class extends BaseError {
      constructor(type, { docsPath: docsPath4 }) {
        super([
          `Type "${type}" is not a valid decoding type.`,
          "Please provide a valid ABI type."
        ].join("\n"), { docsPath: docsPath4 });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidAbiDecodingType"
        });
      }
    };
    InvalidArrayError = class extends BaseError {
      constructor(value) {
        super([`Value "${value}" is not a valid array.`].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidArrayError"
        });
      }
    };
    InvalidDefinitionTypeError = class extends BaseError {
      constructor(type) {
        super([
          `"${type}" is not a valid definition type.`,
          'Valid types: "function", "event", "error"'
        ].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidDefinitionTypeError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/errors/data.js
var SliceOffsetOutOfBoundsError, SizeExceedsPaddingSizeError;
var init_data = __esm({
  "node_modules/viem/_esm/errors/data.js"() {
    "use strict";
    init_base();
    SliceOffsetOutOfBoundsError = class extends BaseError {
      constructor({ offset, position, size: size3 }) {
        super(`Slice ${position === "start" ? "starting" : "ending"} at offset "${offset}" is out-of-bounds (size: ${size3}).`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "SliceOffsetOutOfBoundsError"
        });
      }
    };
    SizeExceedsPaddingSizeError = class extends BaseError {
      constructor({ size: size3, targetSize, type }) {
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size3}) exceeds padding size (${targetSize}).`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "SizeExceedsPaddingSizeError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/utils/data/pad.js
function pad(hexOrBytes, { dir, size: size3 = 32 } = {}) {
  if (typeof hexOrBytes === "string")
    return padHex(hexOrBytes, { dir, size: size3 });
  return padBytes(hexOrBytes, { dir, size: size3 });
}
function padHex(hex_, { dir, size: size3 = 32 } = {}) {
  if (size3 === null)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size3 * 2)
    throw new SizeExceedsPaddingSizeError({
      size: Math.ceil(hex.length / 2),
      targetSize: size3,
      type: "hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size3 * 2, "0")}`;
}
function padBytes(bytes2, { dir, size: size3 = 32 } = {}) {
  if (size3 === null)
    return bytes2;
  if (bytes2.length > size3)
    throw new SizeExceedsPaddingSizeError({
      size: bytes2.length,
      targetSize: size3,
      type: "bytes"
    });
  const paddedBytes = new Uint8Array(size3);
  for (let i = 0; i < size3; i++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i : size3 - i - 1] = bytes2[padEnd ? i : bytes2.length - i - 1];
  }
  return paddedBytes;
}
var init_pad = __esm({
  "node_modules/viem/_esm/utils/data/pad.js"() {
    "use strict";
    init_data();
  }
});

// node_modules/viem/_esm/errors/encoding.js
var IntegerOutOfRangeError, InvalidHexBooleanError, SizeOverflowError;
var init_encoding = __esm({
  "node_modules/viem/_esm/errors/encoding.js"() {
    "use strict";
    init_base();
    IntegerOutOfRangeError = class extends BaseError {
      constructor({ max, min, signed, size: size3, value }) {
        super(`Number "${value}" is not in safe ${size3 ? `${size3 * 8}-bit ${signed ? "signed" : "unsigned"} ` : ""}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "IntegerOutOfRangeError"
        });
      }
    };
    InvalidHexBooleanError = class extends BaseError {
      constructor(hex) {
        super(`Hex value "${hex}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidHexBooleanError"
        });
      }
    };
    SizeOverflowError = class extends BaseError {
      constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "SizeOverflowError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/utils/data/trim.js
function trim(hexOrBytes, { dir = "left" } = {}) {
  let data = typeof hexOrBytes === "string" ? hexOrBytes.replace("0x", "") : hexOrBytes;
  let sliceLength = 0;
  for (let i = 0; i < data.length - 1; i++) {
    if (data[dir === "left" ? i : data.length - i - 1].toString() === "0")
      sliceLength++;
    else
      break;
  }
  data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
  if (typeof hexOrBytes === "string") {
    if (data.length === 1 && dir === "right")
      data = `${data}0`;
    return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
  }
  return data;
}
var init_trim = __esm({
  "node_modules/viem/_esm/utils/data/trim.js"() {
    "use strict";
  }
});

// node_modules/viem/_esm/utils/encoding/fromHex.js
function assertSize(hexOrBytes, { size: size3 }) {
  if (size(hexOrBytes) > size3)
    throw new SizeOverflowError({
      givenSize: size(hexOrBytes),
      maxSize: size3
    });
}
function hexToBigInt(hex, opts = {}) {
  const { signed } = opts;
  if (opts.size)
    assertSize(hex, { size: opts.size });
  const value = BigInt(hex);
  if (!signed)
    return value;
  const size3 = (hex.length - 2) / 2;
  const max = (1n << BigInt(size3) * 8n - 1n) - 1n;
  if (value <= max)
    return value;
  return value - BigInt(`0x${"f".padStart(size3 * 2, "f")}`) - 1n;
}
function hexToBool(hex_, opts = {}) {
  let hex = hex_;
  if (opts.size) {
    assertSize(hex, { size: opts.size });
    hex = trim(hex);
  }
  if (trim(hex) === "0x00")
    return false;
  if (trim(hex) === "0x01")
    return true;
  throw new InvalidHexBooleanError(hex);
}
function hexToNumber(hex, opts = {}) {
  return Number(hexToBigInt(hex, opts));
}
function hexToString(hex, opts = {}) {
  let bytes2 = hexToBytes(hex);
  if (opts.size) {
    assertSize(bytes2, { size: opts.size });
    bytes2 = trim(bytes2, { dir: "right" });
  }
  return new TextDecoder().decode(bytes2);
}
var init_fromHex = __esm({
  "node_modules/viem/_esm/utils/encoding/fromHex.js"() {
    "use strict";
    init_encoding();
    init_size();
    init_trim();
    init_toBytes();
  }
});

// node_modules/viem/_esm/utils/encoding/toHex.js
function toHex(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToHex(value, opts);
  if (typeof value === "string") {
    return stringToHex(value, opts);
  }
  if (typeof value === "boolean")
    return boolToHex(value, opts);
  return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
  const hex = `0x${Number(value)}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { size: opts.size });
  }
  return hex;
}
function bytesToHex(value, opts = {}) {
  let string = "";
  for (let i = 0; i < value.length; i++) {
    string += hexes[value[i]];
  }
  const hex = `0x${string}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { dir: "right", size: opts.size });
  }
  return hex;
}
function numberToHex(value_, opts = {}) {
  const { signed, size: size3 } = opts;
  const value = BigInt(value_);
  let maxValue;
  if (size3) {
    if (signed)
      maxValue = (1n << BigInt(size3) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size3) * 8n) - 1n;
  } else if (typeof value_ === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value > maxValue || value < minValue) {
    const suffix = typeof value_ === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size3,
      value: `${value_}${suffix}`
    });
  }
  const hex = `0x${(signed && value < 0 ? (1n << BigInt(size3 * 8)) + BigInt(value) : value).toString(16)}`;
  if (size3)
    return pad(hex, { size: size3 });
  return hex;
}
function stringToHex(value_, opts = {}) {
  const value = encoder.encode(value_);
  return bytesToHex(value, opts);
}
var hexes, encoder;
var init_toHex = __esm({
  "node_modules/viem/_esm/utils/encoding/toHex.js"() {
    "use strict";
    init_encoding();
    init_pad();
    init_fromHex();
    hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
    encoder = /* @__PURE__ */ new TextEncoder();
  }
});

// node_modules/viem/_esm/utils/encoding/toBytes.js
function toBytes(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToBytes(value, opts);
  if (typeof value === "boolean")
    return boolToBytes(value, opts);
  if (isHex(value))
    return hexToBytes(value, opts);
  return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
  const bytes2 = new Uint8Array(1);
  bytes2[0] = Number(value);
  if (typeof opts.size === "number") {
    assertSize(bytes2, { size: opts.size });
    return pad(bytes2, { size: opts.size });
  }
  return bytes2;
}
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function hexToBytes(hex_, opts = {}) {
  let hex = hex_;
  if (opts.size) {
    assertSize(hex, { size: opts.size });
    hex = pad(hex, { dir: "right", size: opts.size });
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes2 = new Uint8Array(length);
  for (let index2 = 0, j = 0; index2 < length; index2++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
    }
    bytes2[index2] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes2;
}
function numberToBytes(value, opts) {
  const hex = numberToHex(value, opts);
  return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
  const bytes2 = encoder2.encode(value);
  if (typeof opts.size === "number") {
    assertSize(bytes2, { size: opts.size });
    return pad(bytes2, { dir: "right", size: opts.size });
  }
  return bytes2;
}
var encoder2, charCodeMap;
var init_toBytes = __esm({
  "node_modules/viem/_esm/utils/encoding/toBytes.js"() {
    "use strict";
    init_base();
    init_isHex();
    init_pad();
    init_fromHex();
    init_toHex();
    encoder2 = /* @__PURE__ */ new TextEncoder();
    charCodeMap = {
      zero: 48,
      nine: 57,
      A: 65,
      F: 70,
      a: 97,
      f: 102
    };
  }
});

// node_modules/viem/_esm/utils/hash/normalizeSignature.js
function normalizeSignature(signature) {
  let active = true;
  let current = "";
  let level = 0;
  let result = "";
  let valid = false;
  for (let i = 0; i < signature.length; i++) {
    const char = signature[i];
    if (["(", ")", ","].includes(char))
      active = true;
    if (char === "(")
      level++;
    if (char === ")")
      level--;
    if (!active)
      continue;
    if (level === 0) {
      if (char === " " && ["event", "function", ""].includes(result))
        result = "";
      else {
        result += char;
        if (char === ")") {
          valid = true;
          break;
        }
      }
      continue;
    }
    if (char === " ") {
      if (signature[i - 1] !== "," && current !== "," && current !== ",(") {
        current = "";
        active = false;
      }
      continue;
    }
    result += char;
    current += char;
  }
  if (!valid)
    throw new BaseError("Unable to normalize signature.");
  return result;
}
var init_normalizeSignature = __esm({
  "node_modules/viem/_esm/utils/hash/normalizeSignature.js"() {
    "use strict";
    init_base();
  }
});

// node_modules/viem/_esm/utils/hash/getFunctionSignature.js
var getFunctionSignature;
var init_getFunctionSignature = __esm({
  "node_modules/viem/_esm/utils/hash/getFunctionSignature.js"() {
    "use strict";
    init_esm();
    init_normalizeSignature();
    getFunctionSignature = (fn_) => {
      const fn = (() => {
        if (typeof fn_ === "string")
          return fn_;
        return formatAbiItem(fn_);
      })();
      return normalizeSignature(fn);
    };
  }
});

// node_modules/viem/_esm/utils/hash/getEventSignature.js
var getEventSignature;
var init_getEventSignature = __esm({
  "node_modules/viem/_esm/utils/hash/getEventSignature.js"() {
    "use strict";
    init_getFunctionSignature();
    getEventSignature = (fn) => {
      return getFunctionSignature(fn);
    };
  }
});

// node_modules/@noble/hashes/esm/_assert.js
function number(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function bytes(b, ...lengths) {
  if (!(b instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
var init_assert = __esm({
  "node_modules/@noble/hashes/esm/_assert.js"() {
    "use strict";
  }
});

// node_modules/@noble/hashes/esm/_u64.js
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
var U32_MASK64, _32n, rotlSH, rotlSL, rotlBH, rotlBL;
var init_u64 = __esm({
  "node_modules/@noble/hashes/esm/_u64.js"() {
    "use strict";
    U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
    _32n = /* @__PURE__ */ BigInt(32);
    rotlSH = (h, l, s) => h << s | l >>> 32 - s;
    rotlSL = (h, l, s) => l << s | h >>> 32 - s;
    rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
    rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
  }
});

// node_modules/@noble/hashes/esm/utils.js
function utf8ToBytes(str2) {
  if (typeof str2 !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str2}`);
  return new Uint8Array(new TextEncoder().encode(str2));
}
function toBytes2(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  if (!u8a(data))
    throw new Error(`expected Uint8Array, got ${typeof data}`);
  return data;
}
function wrapConstructor(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes2(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
  const hashC = (msg, opts) => hashCons(opts).update(toBytes2(msg)).digest();
  const tmp = hashCons({});
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (opts) => hashCons(opts);
  return hashC;
}
var u8a, u32, isLE, Hash, toStr;
var init_utils2 = __esm({
  "node_modules/@noble/hashes/esm/utils.js"() {
    "use strict";
    u8a = (a) => a instanceof Uint8Array;
    u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
    isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    if (!isLE)
      throw new Error("Non little-endian hardware is not supported");
    Hash = class {
      // Safe version that clones internal state
      clone() {
        return this._cloneInto();
      }
    };
    toStr = {}.toString;
  }
});

// node_modules/@noble/hashes/esm/sha3.js
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0; y < 50; y += 10) {
        s[x + y] ^= Th;
        s[x + y + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    for (let y = 0; y < 50; y += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s[y + x];
      for (let x = 0; x < 10; x++)
        s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  B.fill(0);
}
var SHA3_PI, SHA3_ROTL, _SHA3_IOTA, _0n, _1n, _2n, _7n, _256n, _0x71n, SHA3_IOTA_H, SHA3_IOTA_L, rotlH, rotlL, Keccak, gen, sha3_224, sha3_256, sha3_384, sha3_512, keccak_224, keccak_256, keccak_384, keccak_512, genShake, shake128, shake256;
var init_sha3 = __esm({
  "node_modules/@noble/hashes/esm/sha3.js"() {
    "use strict";
    init_assert();
    init_u64();
    init_utils2();
    [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
    _0n = /* @__PURE__ */ BigInt(0);
    _1n = /* @__PURE__ */ BigInt(1);
    _2n = /* @__PURE__ */ BigInt(2);
    _7n = /* @__PURE__ */ BigInt(7);
    _256n = /* @__PURE__ */ BigInt(256);
    _0x71n = /* @__PURE__ */ BigInt(113);
    for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
      [x, y] = [y, (2 * x + 3 * y) % 5];
      SHA3_PI.push(2 * (5 * y + x));
      SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t = _0n;
      for (let j = 0; j < 7; j++) {
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n)
          t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
      }
      _SHA3_IOTA.push(t);
    }
    [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
    rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
    rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
    Keccak = class _Keccak extends Hash {
      // NOTE: we accept arguments in bytes instead of bits here.
      constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        number(outputLen);
        if (0 >= this.blockLen || this.blockLen >= 200)
          throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200);
        this.state32 = u32(this.state);
      }
      keccak() {
        keccakP(this.state32, this.rounds);
        this.posOut = 0;
        this.pos = 0;
      }
      update(data) {
        exists(this);
        const { blockLen, state } = this;
        data = toBytes2(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          for (let i = 0; i < take; i++)
            state[this.pos++] ^= data[pos++];
          if (this.pos === blockLen)
            this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        state[pos] ^= suffix;
        if ((suffix & 128) !== 0 && pos === blockLen - 1)
          this.keccak();
        state[blockLen - 1] ^= 128;
        this.keccak();
      }
      writeInto(out) {
        exists(this, false);
        bytes(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          if (this.posOut >= blockLen)
            this.keccak();
          const take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
          this.posOut += take;
          pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes2) {
        number(bytes2);
        return this.xofInto(new Uint8Array(bytes2));
      }
      digestInto(out) {
        output(out, this);
        if (this.finished)
          throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true;
        this.state.fill(0);
      }
      _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
      }
    };
    gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
    sha3_224 = /* @__PURE__ */ gen(6, 144, 224 / 8);
    sha3_256 = /* @__PURE__ */ gen(6, 136, 256 / 8);
    sha3_384 = /* @__PURE__ */ gen(6, 104, 384 / 8);
    sha3_512 = /* @__PURE__ */ gen(6, 72, 512 / 8);
    keccak_224 = /* @__PURE__ */ gen(1, 144, 224 / 8);
    keccak_256 = /* @__PURE__ */ gen(1, 136, 256 / 8);
    keccak_384 = /* @__PURE__ */ gen(1, 104, 384 / 8);
    keccak_512 = /* @__PURE__ */ gen(1, 72, 512 / 8);
    genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
    shake128 = /* @__PURE__ */ genShake(31, 168, 128 / 8);
    shake256 = /* @__PURE__ */ genShake(31, 136, 256 / 8);
  }
});

// node_modules/viem/_esm/utils/hash/keccak256.js
function keccak256(value, to_) {
  const to = to_ || "hex";
  const bytes2 = keccak_256(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to === "bytes")
    return bytes2;
  return toHex(bytes2);
}
var init_keccak256 = __esm({
  "node_modules/viem/_esm/utils/hash/keccak256.js"() {
    "use strict";
    init_sha3();
    init_isHex();
    init_toBytes();
    init_toHex();
  }
});

// node_modules/viem/_esm/utils/hash/getEventSelector.js
var hash, getEventSelector;
var init_getEventSelector = __esm({
  "node_modules/viem/_esm/utils/hash/getEventSelector.js"() {
    "use strict";
    init_toBytes();
    init_getEventSignature();
    init_keccak256();
    hash = (value) => keccak256(toBytes(value));
    getEventSelector = (fn) => hash(getEventSignature(fn));
  }
});

// node_modules/viem/_esm/errors/address.js
var InvalidAddressError;
var init_address = __esm({
  "node_modules/viem/_esm/errors/address.js"() {
    "use strict";
    init_base();
    InvalidAddressError = class extends BaseError {
      constructor({ address }) {
        super(`Address "${address}" is invalid.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidAddressError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/utils/address/isAddress.js
function isAddress(address) {
  return addressRegex.test(address);
}
var addressRegex;
var init_isAddress = __esm({
  "node_modules/viem/_esm/utils/address/isAddress.js"() {
    "use strict";
    addressRegex = /^0x[a-fA-F0-9]{40}$/;
  }
});

// node_modules/viem/_esm/utils/data/concat.js
function concat(values) {
  if (typeof values[0] === "string")
    return concatHex(values);
  return concatBytes(values);
}
function concatBytes(values) {
  let length = 0;
  for (const arr of values) {
    length += arr.length;
  }
  const result = new Uint8Array(length);
  let offset = 0;
  for (const arr of values) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}
function concatHex(values) {
  return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}
var init_concat = __esm({
  "node_modules/viem/_esm/utils/data/concat.js"() {
    "use strict";
  }
});

// node_modules/viem/_esm/utils/data/slice.js
function slice(value, start, end, { strict } = {}) {
  if (isHex(value, { strict: false }))
    return sliceHex(value, start, end, {
      strict
    });
  return sliceBytes(value, start, end, {
    strict
  });
}
function assertStartOffset(value, start) {
  if (typeof start === "number" && start > 0 && start > size(value) - 1)
    throw new SliceOffsetOutOfBoundsError({
      offset: start,
      position: "start",
      size: size(value)
    });
}
function assertEndOffset(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError({
      offset: end,
      position: "end",
      size: size(value)
    });
  }
}
function sliceBytes(value_, start, end, { strict } = {}) {
  assertStartOffset(value_, start);
  const value = value_.slice(start, end);
  if (strict)
    assertEndOffset(value, start, end);
  return value;
}
function sliceHex(value_, start, end, { strict } = {}) {
  assertStartOffset(value_, start);
  const value = `0x${value_.replace("0x", "").slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
  if (strict)
    assertEndOffset(value, start, end);
  return value;
}
var init_slice = __esm({
  "node_modules/viem/_esm/utils/data/slice.js"() {
    "use strict";
    init_data();
    init_isHex();
    init_size();
  }
});

// node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
function encodeAbiParameters(params, values) {
  if (params.length !== values.length)
    throw new AbiEncodingLengthMismatchError({
      expectedLength: params.length,
      givenLength: values.length
    });
  const preparedParams = prepareParams({
    params,
    values
  });
  const data = encodeParams(preparedParams);
  if (data.length === 0)
    return "0x";
  return data;
}
function prepareParams({ params, values }) {
  const preparedParams = [];
  for (let i = 0; i < params.length; i++) {
    preparedParams.push(prepareParam({ param: params[i], value: values[i] }));
  }
  return preparedParams;
}
function prepareParam({ param, value }) {
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return encodeArray(value, { length, param: { ...param, type } });
  }
  if (param.type === "tuple") {
    return encodeTuple(value, {
      param
    });
  }
  if (param.type === "address") {
    return encodeAddress(value);
  }
  if (param.type === "bool") {
    return encodeBool(value);
  }
  if (param.type.startsWith("uint") || param.type.startsWith("int")) {
    const signed = param.type.startsWith("int");
    return encodeNumber(value, { signed });
  }
  if (param.type.startsWith("bytes")) {
    return encodeBytes(value, { param });
  }
  if (param.type === "string") {
    return encodeString(value);
  }
  throw new InvalidAbiEncodingTypeError(param.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function encodeParams(preparedParams) {
  let staticSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    const { dynamic, encoded } = preparedParams[i];
    if (dynamic)
      staticSize += 32;
    else
      staticSize += size(encoded);
  }
  const staticParams = [];
  const dynamicParams = [];
  let dynamicSize = 0;
  for (let i = 0; i < preparedParams.length; i++) {
    const { dynamic, encoded } = preparedParams[i];
    if (dynamic) {
      staticParams.push(numberToHex(staticSize + dynamicSize, { size: 32 }));
      dynamicParams.push(encoded);
      dynamicSize += size(encoded);
    } else {
      staticParams.push(encoded);
    }
  }
  return concat([...staticParams, ...dynamicParams]);
}
function encodeAddress(value) {
  if (!isAddress(value))
    throw new InvalidAddressError({ address: value });
  return { dynamic: false, encoded: padHex(value.toLowerCase()) };
}
function encodeArray(value, { length, param }) {
  const dynamic = length === null;
  if (!Array.isArray(value))
    throw new InvalidArrayError(value);
  if (!dynamic && value.length !== length)
    throw new AbiEncodingArrayLengthMismatchError({
      expectedLength: length,
      givenLength: value.length,
      type: `${param.type}[${length}]`
    });
  let dynamicChild = false;
  const preparedParams = [];
  for (let i = 0; i < value.length; i++) {
    const preparedParam = prepareParam({ param, value: value[i] });
    if (preparedParam.dynamic)
      dynamicChild = true;
    preparedParams.push(preparedParam);
  }
  if (dynamic || dynamicChild) {
    const data = encodeParams(preparedParams);
    if (dynamic) {
      const length2 = numberToHex(preparedParams.length, { size: 32 });
      return {
        dynamic: true,
        encoded: preparedParams.length > 0 ? concat([length2, data]) : length2
      };
    }
    if (dynamicChild)
      return { dynamic: true, encoded: data };
  }
  return {
    dynamic: false,
    encoded: concat(preparedParams.map(({ encoded }) => encoded))
  };
}
function encodeBytes(value, { param }) {
  const [, paramSize] = param.type.split("bytes");
  const bytesSize = size(value);
  if (!paramSize) {
    let value_ = value;
    if (bytesSize % 32 !== 0)
      value_ = padHex(value_, {
        dir: "right",
        size: Math.ceil((value.length - 2) / 2 / 32) * 32
      });
    return {
      dynamic: true,
      encoded: concat([padHex(numberToHex(bytesSize, { size: 32 })), value_])
    };
  }
  if (bytesSize !== parseInt(paramSize))
    throw new AbiEncodingBytesSizeMismatchError({
      expectedSize: parseInt(paramSize),
      value
    });
  return { dynamic: false, encoded: padHex(value, { dir: "right" }) };
}
function encodeBool(value) {
  return { dynamic: false, encoded: padHex(boolToHex(value)) };
}
function encodeNumber(value, { signed }) {
  return {
    dynamic: false,
    encoded: numberToHex(value, {
      size: 32,
      signed
    })
  };
}
function encodeString(value) {
  const hexValue = stringToHex(value);
  const partsLength = Math.ceil(size(hexValue) / 32);
  const parts = [];
  for (let i = 0; i < partsLength; i++) {
    parts.push(padHex(slice(hexValue, i * 32, (i + 1) * 32), {
      dir: "right"
    }));
  }
  return {
    dynamic: true,
    encoded: concat([
      padHex(numberToHex(size(hexValue), { size: 32 })),
      ...parts
    ])
  };
}
function encodeTuple(value, { param }) {
  let dynamic = false;
  const preparedParams = [];
  for (let i = 0; i < param.components.length; i++) {
    const param_ = param.components[i];
    const index2 = Array.isArray(value) ? i : param_.name;
    const preparedParam = prepareParam({
      param: param_,
      value: value[index2]
    });
    preparedParams.push(preparedParam);
    if (preparedParam.dynamic)
      dynamic = true;
  }
  return {
    dynamic,
    encoded: dynamic ? encodeParams(preparedParams) : concat(preparedParams.map(({ encoded }) => encoded))
  };
}
function getArrayComponents(type) {
  const matches = type.match(/^(.*)\[(\d+)?\]$/);
  return matches ? (
    // Return `null` if the array is dynamic.
    [matches[2] ? Number(matches[2]) : null, matches[1]]
  ) : void 0;
}
var init_encodeAbiParameters = __esm({
  "node_modules/viem/_esm/utils/abi/encodeAbiParameters.js"() {
    "use strict";
    init_abi();
    init_address();
    init_isAddress();
    init_concat();
    init_pad();
    init_size();
    init_slice();
    init_toHex();
  }
});

// node_modules/viem/_esm/utils/hash/getFunctionSelector.js
var hash2, getFunctionSelector;
var init_getFunctionSelector = __esm({
  "node_modules/viem/_esm/utils/hash/getFunctionSelector.js"() {
    "use strict";
    init_slice();
    init_toBytes();
    init_getFunctionSignature();
    init_keccak256();
    hash2 = (value) => keccak256(toBytes(value));
    getFunctionSelector = (fn) => slice(hash2(getFunctionSignature(fn)), 0, 4);
  }
});

// node_modules/viem/_esm/utils/abi/getAbiItem.js
function getAbiItem({ abi, args = [], name }) {
  const isSelector = isHex(name, { strict: false });
  const abiItems = abi.filter((abiItem) => {
    if (isSelector) {
      if (abiItem.type === "function")
        return getFunctionSelector(abiItem) === name;
      if (abiItem.type === "event")
        return getEventSelector(abiItem) === name;
      return false;
    }
    return "name" in abiItem && abiItem.name === name;
  });
  if (abiItems.length === 0)
    return void 0;
  if (abiItems.length === 1)
    return abiItems[0];
  let matchedAbiItem = void 0;
  for (const abiItem of abiItems) {
    if (!("inputs" in abiItem))
      continue;
    if (!args || args.length === 0) {
      if (!abiItem.inputs || abiItem.inputs.length === 0)
        return abiItem;
      continue;
    }
    if (!abiItem.inputs)
      continue;
    if (abiItem.inputs.length === 0)
      continue;
    if (abiItem.inputs.length !== args.length)
      continue;
    const matched = args.every((arg, index2) => {
      const abiParameter = "inputs" in abiItem && abiItem.inputs[index2];
      if (!abiParameter)
        return false;
      return isArgOfType(arg, abiParameter);
    });
    if (matched) {
      if (matchedAbiItem && "inputs" in matchedAbiItem && matchedAbiItem.inputs) {
        const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
        if (ambiguousTypes)
          throw new AbiItemAmbiguityError({
            abiItem,
            type: ambiguousTypes[0]
          }, {
            abiItem: matchedAbiItem,
            type: ambiguousTypes[1]
          });
      }
      matchedAbiItem = abiItem;
    }
  }
  if (matchedAbiItem)
    return matchedAbiItem;
  return abiItems[0];
}
function isArgOfType(arg, abiParameter) {
  const argType = typeof arg;
  const abiParameterType = abiParameter.type;
  switch (abiParameterType) {
    case "address":
      return isAddress(arg);
    case "bool":
      return argType === "boolean";
    case "function":
      return argType === "string";
    case "string":
      return argType === "string";
    default: {
      if (abiParameterType === "tuple" && "components" in abiParameter)
        return Object.values(abiParameter.components).every((component, index2) => {
          return isArgOfType(Object.values(arg)[index2], component);
        });
      if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
        return argType === "number" || argType === "bigint";
      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
        return argType === "string" || arg instanceof Uint8Array;
      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
        return Array.isArray(arg) && arg.every((x) => isArgOfType(x, {
          ...abiParameter,
          // Pop off `[]` or `[M]` from end of type
          type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, "")
        }));
      }
      return false;
    }
  }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
  for (const parameterIndex in sourceParameters) {
    const sourceParameter = sourceParameters[parameterIndex];
    const targetParameter = targetParameters[parameterIndex];
    if (sourceParameter.type === "tuple" && targetParameter.type === "tuple" && "components" in sourceParameter && "components" in targetParameter)
      return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
    const types = [sourceParameter.type, targetParameter.type];
    const ambiguous = (() => {
      if (types.includes("address") && types.includes("bytes20"))
        return true;
      if (types.includes("address") && types.includes("string"))
        return isAddress(args[parameterIndex]);
      if (types.includes("address") && types.includes("bytes"))
        return isAddress(args[parameterIndex]);
      return false;
    })();
    if (ambiguous)
      return types;
  }
  return;
}
var init_getAbiItem = __esm({
  "node_modules/viem/_esm/utils/abi/getAbiItem.js"() {
    "use strict";
    init_abi();
    init_isHex();
    init_getEventSelector();
    init_getFunctionSelector();
    init_isAddress();
  }
});

// node_modules/viem/_esm/accounts/utils/parseAccount.js
function parseAccount(account) {
  if (typeof account === "string")
    return { address: account, type: "json-rpc" };
  return account;
}
var init_parseAccount = __esm({
  "node_modules/viem/_esm/accounts/utils/parseAccount.js"() {
    "use strict";
  }
});

// node_modules/viem/_esm/utils/abi/encodeFunctionData.js
function encodeFunctionData({ abi, args, functionName }) {
  let abiItem = abi[0];
  if (functionName) {
    abiItem = getAbiItem({
      abi,
      args,
      name: functionName
    });
    if (!abiItem)
      throw new AbiFunctionNotFoundError(functionName, {
        docsPath: "/docs/contract/encodeFunctionData"
      });
  }
  if (abiItem.type !== "function")
    throw new AbiFunctionNotFoundError(void 0, {
      docsPath: "/docs/contract/encodeFunctionData"
    });
  const definition = formatAbiItem2(abiItem);
  const signature = getFunctionSelector(definition);
  const data = "inputs" in abiItem && abiItem.inputs ? encodeAbiParameters(abiItem.inputs, args ?? []) : void 0;
  return concatHex([signature, data ?? "0x"]);
}
var init_encodeFunctionData = __esm({
  "node_modules/viem/_esm/utils/abi/encodeFunctionData.js"() {
    "use strict";
    init_abi();
    init_concat();
    init_getFunctionSelector();
    init_encodeAbiParameters();
    init_formatAbiItem2();
    init_getAbiItem();
  }
});

// node_modules/viem/_esm/constants/solidity.js
var panicReasons, solidityError, solidityPanic;
var init_solidity = __esm({
  "node_modules/viem/_esm/constants/solidity.js"() {
    "use strict";
    panicReasons = {
      1: "An `assert` condition failed.",
      17: "Arithmic operation resulted in underflow or overflow.",
      18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
      33: "Attempted to convert to an invalid type.",
      34: "Attempted to access a storage byte array that is incorrectly encoded.",
      49: "Performed `.pop()` on an empty array",
      50: "Array index is out of bounds.",
      65: "Allocated too much memory or created an array which is too large.",
      81: "Attempted to call a zero-initialized variable of internal function type."
    };
    solidityError = {
      inputs: [
        {
          name: "message",
          type: "string"
        }
      ],
      name: "Error",
      type: "error"
    };
    solidityPanic = {
      inputs: [
        {
          name: "reason",
          type: "uint256"
        }
      ],
      name: "Panic",
      type: "error"
    };
  }
});

// node_modules/viem/_esm/utils/address/getAddress.js
function checksumAddress(address_, chainId) {
  const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
  const hash3 = keccak256(stringToBytes(hexAddress), "bytes");
  const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split("");
  for (let i = 0; i < 40; i += 2) {
    if (hash3[i >> 1] >> 4 >= 8 && address[i]) {
      address[i] = address[i].toUpperCase();
    }
    if ((hash3[i >> 1] & 15) >= 8 && address[i + 1]) {
      address[i + 1] = address[i + 1].toUpperCase();
    }
  }
  return `0x${address.join("")}`;
}
var init_getAddress = __esm({
  "node_modules/viem/_esm/utils/address/getAddress.js"() {
    "use strict";
    init_toBytes();
    init_keccak256();
  }
});

// node_modules/viem/_esm/utils/abi/decodeAbiParameters.js
function decodeAbiParameters(params, data) {
  if (data === "0x" && params.length > 0)
    throw new AbiDecodingZeroDataError();
  if (size(data) && size(data) < 32)
    throw new AbiDecodingDataSizeTooSmallError({
      data,
      params,
      size: size(data)
    });
  return decodeParams({
    data,
    params
  });
}
function decodeParams({ data, params }) {
  const decodedValues = [];
  let position = 0;
  for (let i = 0; i < params.length; i++) {
    if (position >= size(data))
      throw new AbiDecodingDataSizeTooSmallError({
        data,
        params,
        size: size(data)
      });
    const param = params[i];
    const { consumed, value } = decodeParam({ data, param, position });
    decodedValues.push(value);
    position += consumed;
  }
  return decodedValues;
}
function decodeParam({ data, param, position }) {
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return decodeArray(data, {
      length,
      param: { ...param, type },
      position
    });
  }
  if (param.type === "tuple") {
    return decodeTuple(data, { param, position });
  }
  if (param.type === "string") {
    return decodeString(data, { position });
  }
  if (param.type.startsWith("bytes")) {
    return decodeBytes(data, { param, position });
  }
  const value = slice(data, position, position + 32, { strict: true });
  if (param.type.startsWith("uint") || param.type.startsWith("int")) {
    return decodeNumber(value, { param });
  }
  if (param.type === "address") {
    return decodeAddress(value);
  }
  if (param.type === "bool") {
    return decodeBool(value);
  }
  throw new InvalidAbiDecodingTypeError(param.type, {
    docsPath: "/docs/contract/decodeAbiParameters"
  });
}
function decodeAddress(value) {
  return { consumed: 32, value: checksumAddress(slice(value, -20)) };
}
function decodeArray(data, { param, length, position }) {
  if (!length) {
    const offset = hexToNumber(slice(data, position, position + 32, { strict: true }));
    const length2 = hexToNumber(slice(data, offset, offset + 32, { strict: true }));
    let consumed2 = 0;
    const value2 = [];
    for (let i = 0; i < length2; ++i) {
      const decodedChild = decodeParam({
        data: slice(data, offset + 32),
        param,
        position: consumed2
      });
      consumed2 += decodedChild.consumed;
      value2.push(decodedChild.value);
    }
    return { value: value2, consumed: 32 };
  }
  if (hasDynamicChild(param)) {
    const arrayComponents = getArrayComponents(param.type);
    const dynamicChild = !arrayComponents?.[0];
    let consumed2 = 0;
    const value2 = [];
    for (let i = 0; i < length; ++i) {
      const offset = hexToNumber(slice(data, position, position + 32, { strict: true }));
      const decodedChild = decodeParam({
        data: slice(data, offset),
        param,
        position: dynamicChild ? consumed2 : i * 32
      });
      consumed2 += decodedChild.consumed;
      value2.push(decodedChild.value);
    }
    return { value: value2, consumed: 32 };
  }
  let consumed = 0;
  const value = [];
  for (let i = 0; i < length; ++i) {
    const decodedChild = decodeParam({
      data,
      param,
      position: position + consumed
    });
    consumed += decodedChild.consumed;
    value.push(decodedChild.value);
  }
  return { value, consumed };
}
function decodeBool(value) {
  return { consumed: 32, value: hexToBool(value) };
}
function decodeBytes(data, { param, position }) {
  const [_, size3] = param.type.split("bytes");
  if (!size3) {
    const offset = hexToNumber(slice(data, position, position + 32, { strict: true }));
    const length = hexToNumber(slice(data, offset, offset + 32, { strict: true }));
    if (length === 0)
      return { consumed: 32, value: "0x" };
    const value2 = slice(data, offset + 32, offset + 32 + length, {
      strict: true
    });
    return { consumed: 32, value: value2 };
  }
  const value = slice(data, position, position + parseInt(size3), {
    strict: true
  });
  return { consumed: 32, value };
}
function decodeNumber(value, { param }) {
  const signed = param.type.startsWith("int");
  const size3 = parseInt(param.type.split("int")[1] || "256");
  return {
    consumed: 32,
    value: size3 > 48 ? hexToBigInt(value, { signed }) : hexToNumber(value, { signed })
  };
}
function decodeString(data, { position }) {
  const offset = hexToNumber(slice(data, position, position + 32, { strict: true }));
  const length = hexToNumber(slice(data, offset, offset + 32, { strict: true }));
  if (length === 0)
    return { consumed: 32, value: "" };
  const value = hexToString(trim(slice(data, offset + 32, offset + 32 + length, { strict: true })));
  return { consumed: 32, value };
}
function decodeTuple(data, { param, position }) {
  const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name }) => !name);
  const value = hasUnnamedChild ? [] : {};
  let consumed = 0;
  if (hasDynamicChild(param)) {
    const offset = hexToNumber(slice(data, position, position + 32, { strict: true }));
    for (let i = 0; i < param.components.length; ++i) {
      const component = param.components[i];
      const decodedChild = decodeParam({
        data: slice(data, offset),
        param: component,
        position: consumed
      });
      consumed += decodedChild.consumed;
      value[hasUnnamedChild ? i : component?.name] = decodedChild.value;
    }
    return { consumed: 32, value };
  }
  for (let i = 0; i < param.components.length; ++i) {
    const component = param.components[i];
    const decodedChild = decodeParam({
      data,
      param: component,
      position: position + consumed
    });
    consumed += decodedChild.consumed;
    value[hasUnnamedChild ? i : component?.name] = decodedChild.value;
  }
  return { consumed, value };
}
function hasDynamicChild(param) {
  const { type } = param;
  if (type === "string")
    return true;
  if (type === "bytes")
    return true;
  if (type.endsWith("[]"))
    return true;
  if (type === "tuple")
    return param.components?.some(hasDynamicChild);
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents && hasDynamicChild({ ...param, type: arrayComponents[1] }))
    return true;
  return false;
}
var init_decodeAbiParameters = __esm({
  "node_modules/viem/_esm/utils/abi/decodeAbiParameters.js"() {
    "use strict";
    init_abi();
    init_getAddress();
    init_size();
    init_slice();
    init_trim();
    init_fromHex();
    init_encodeAbiParameters();
  }
});

// node_modules/viem/_esm/utils/abi/decodeErrorResult.js
function decodeErrorResult({ abi, data }) {
  const signature = slice(data, 0, 4);
  if (signature === "0x")
    throw new AbiDecodingZeroDataError();
  const abi_ = [...abi || [], solidityError, solidityPanic];
  const abiItem = abi_.find((x) => x.type === "error" && signature === getFunctionSelector(formatAbiItem2(x)));
  if (!abiItem)
    throw new AbiErrorSignatureNotFoundError(signature, {
      docsPath: "/docs/contract/decodeErrorResult"
    });
  return {
    abiItem,
    args: "inputs" in abiItem && abiItem.inputs && abiItem.inputs.length > 0 ? decodeAbiParameters(abiItem.inputs, slice(data, 4)) : void 0,
    errorName: abiItem.name
  };
}
var init_decodeErrorResult = __esm({
  "node_modules/viem/_esm/utils/abi/decodeErrorResult.js"() {
    "use strict";
    init_solidity();
    init_abi();
    init_slice();
    init_getFunctionSelector();
    init_decodeAbiParameters();
    init_formatAbiItem2();
  }
});

// node_modules/viem/_esm/utils/stringify.js
var stringify;
var init_stringify = __esm({
  "node_modules/viem/_esm/utils/stringify.js"() {
    "use strict";
    stringify = (value, replacer, space) => JSON.stringify(value, (key, value_) => {
      const value2 = typeof value_ === "bigint" ? value_.toString() : value_;
      return typeof replacer === "function" ? replacer(key, value2) : value2;
    }, space);
  }
});

// node_modules/viem/_esm/utils/abi/formatAbiItemWithArgs.js
function formatAbiItemWithArgs({ abiItem, args, includeFunctionName = true, includeName = false }) {
  if (!("name" in abiItem))
    return;
  if (!("inputs" in abiItem))
    return;
  if (!abiItem.inputs)
    return;
  return `${includeFunctionName ? abiItem.name : ""}(${abiItem.inputs.map((input, i) => `${includeName && input.name ? `${input.name}: ` : ""}${typeof args[i] === "object" ? stringify(args[i]) : args[i]}`).join(", ")})`;
}
var init_formatAbiItemWithArgs = __esm({
  "node_modules/viem/_esm/utils/abi/formatAbiItemWithArgs.js"() {
    "use strict";
    init_stringify();
  }
});

// node_modules/viem/_esm/constants/unit.js
var etherUnits, gweiUnits;
var init_unit = __esm({
  "node_modules/viem/_esm/constants/unit.js"() {
    "use strict";
    etherUnits = {
      gwei: 9,
      wei: 18
    };
    gweiUnits = {
      ether: -9,
      wei: 9
    };
  }
});

// node_modules/viem/_esm/utils/unit/formatUnits.js
function formatUnits(value, decimals) {
  let display = value.toString();
  const negative = display.startsWith("-");
  if (negative)
    display = display.slice(1);
  display = display.padStart(decimals, "0");
  let [integer, fraction] = [
    display.slice(0, display.length - decimals),
    display.slice(display.length - decimals)
  ];
  fraction = fraction.replace(/(0+)$/, "");
  return `${negative ? "-" : ""}${integer || "0"}${fraction ? `.${fraction}` : ""}`;
}
var init_formatUnits = __esm({
  "node_modules/viem/_esm/utils/unit/formatUnits.js"() {
    "use strict";
  }
});

// node_modules/viem/_esm/utils/unit/formatEther.js
function formatEther(wei, unit = "wei") {
  return formatUnits(wei, etherUnits[unit]);
}
var init_formatEther = __esm({
  "node_modules/viem/_esm/utils/unit/formatEther.js"() {
    "use strict";
    init_unit();
    init_formatUnits();
  }
});

// node_modules/viem/_esm/utils/unit/formatGwei.js
function formatGwei(wei, unit = "wei") {
  return formatUnits(wei, gweiUnits[unit]);
}
var init_formatGwei = __esm({
  "node_modules/viem/_esm/utils/unit/formatGwei.js"() {
    "use strict";
    init_unit();
    init_formatUnits();
  }
});

// node_modules/viem/_esm/errors/transaction.js
function prettyPrint(args) {
  const entries = Object.entries(args).map(([key, value]) => {
    if (value === void 0 || value === false)
      return null;
    return [key, value];
  }).filter(Boolean);
  const maxLength = entries.reduce((acc, [key]) => Math.max(acc, key.length), 0);
  return entries.map(([key, value]) => `  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join("\n");
}
var FeeConflictError, InvalidSerializableTransactionError, TransactionExecutionError, TransactionNotFoundError, TransactionReceiptNotFoundError, WaitForTransactionReceiptTimeoutError;
var init_transaction = __esm({
  "node_modules/viem/_esm/errors/transaction.js"() {
    "use strict";
    init_formatEther();
    init_formatGwei();
    init_base();
    FeeConflictError = class extends BaseError {
      constructor() {
        super([
          "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
          "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
        ].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "FeeConflictError"
        });
      }
    };
    InvalidSerializableTransactionError = class extends BaseError {
      constructor({ transaction }) {
        super("Cannot infer a transaction type from provided transaction.", {
          metaMessages: [
            "Provided Transaction:",
            "{",
            prettyPrint(transaction),
            "}",
            "",
            "To infer the type, either provide:",
            "- a `type` to the Transaction, or",
            "- an EIP-1559 Transaction with `maxFeePerGas`, or",
            "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
            "- a Legacy Transaction with `gasPrice`"
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidSerializableTransactionError"
        });
      }
    };
    TransactionExecutionError = class extends BaseError {
      constructor(cause, { account, docsPath: docsPath4, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }) {
        const prettyArgs = prettyPrint({
          chain: chain && `${chain?.name} (id: ${chain?.id})`,
          from: account?.address,
          to,
          value: typeof value !== "undefined" && `${formatEther(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
          data,
          gas,
          gasPrice: typeof gasPrice !== "undefined" && `${formatGwei(gasPrice)} gwei`,
          maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
          maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
          nonce
        });
        super(cause.shortMessage, {
          cause,
          docsPath: docsPath4,
          metaMessages: [
            ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
            "Request Arguments:",
            prettyArgs
          ].filter(Boolean)
        });
        Object.defineProperty(this, "cause", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TransactionExecutionError"
        });
        this.cause = cause;
      }
    };
    TransactionNotFoundError = class extends BaseError {
      constructor({ blockHash, blockNumber, blockTag, hash: hash3, index: index2 }) {
        let identifier = "Transaction";
        if (blockTag && index2 !== void 0)
          identifier = `Transaction at block time "${blockTag}" at index "${index2}"`;
        if (blockHash && index2 !== void 0)
          identifier = `Transaction at block hash "${blockHash}" at index "${index2}"`;
        if (blockNumber && index2 !== void 0)
          identifier = `Transaction at block number "${blockNumber}" at index "${index2}"`;
        if (hash3)
          identifier = `Transaction with hash "${hash3}"`;
        super(`${identifier} could not be found.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TransactionNotFoundError"
        });
      }
    };
    TransactionReceiptNotFoundError = class extends BaseError {
      constructor({ hash: hash3 }) {
        super(`Transaction receipt with hash "${hash3}" could not be found. The Transaction may not be processed on a block yet.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TransactionReceiptNotFoundError"
        });
      }
    };
    WaitForTransactionReceiptTimeoutError = class extends BaseError {
      constructor({ hash: hash3 }) {
        super(`Timed out while waiting for transaction with hash "${hash3}" to be confirmed.`);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "WaitForTransactionReceiptTimeoutError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/errors/contract.js
var CallExecutionError, ContractFunctionExecutionError, ContractFunctionRevertedError, ContractFunctionZeroDataError, RawContractError;
var init_contract = __esm({
  "node_modules/viem/_esm/errors/contract.js"() {
    "use strict";
    init_parseAccount();
    init_solidity();
    init_decodeErrorResult();
    init_formatAbiItem2();
    init_formatAbiItemWithArgs();
    init_getAbiItem();
    init_formatEther();
    init_formatGwei();
    init_abi();
    init_base();
    init_transaction();
    init_utils();
    CallExecutionError = class extends BaseError {
      constructor(cause, { account: account_, docsPath: docsPath4, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }) {
        const account = account_ ? parseAccount(account_) : void 0;
        const prettyArgs = prettyPrint({
          from: account?.address,
          to,
          value: typeof value !== "undefined" && `${formatEther(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
          data,
          gas,
          gasPrice: typeof gasPrice !== "undefined" && `${formatGwei(gasPrice)} gwei`,
          maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
          maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
          nonce
        });
        super(cause.shortMessage, {
          cause,
          docsPath: docsPath4,
          metaMessages: [
            ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
            "Raw Call Arguments:",
            prettyArgs
          ].filter(Boolean)
        });
        Object.defineProperty(this, "cause", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "CallExecutionError"
        });
        this.cause = cause;
      }
    };
    ContractFunctionExecutionError = class extends BaseError {
      constructor(cause, { abi, args, contractAddress, docsPath: docsPath4, functionName, sender }) {
        const abiItem = getAbiItem({ abi, args, name: functionName });
        const formattedArgs = abiItem ? formatAbiItemWithArgs({
          abiItem,
          args,
          includeFunctionName: false,
          includeName: false
        }) : void 0;
        const functionWithParams = abiItem ? formatAbiItem2(abiItem, { includeName: true }) : void 0;
        const prettyArgs = prettyPrint({
          address: contractAddress && getContractAddress(contractAddress),
          function: functionWithParams,
          args: formattedArgs && formattedArgs !== "()" && `${[...Array(functionName?.length ?? 0).keys()].map(() => " ").join("")}${formattedArgs}`,
          sender
        });
        super(cause.shortMessage || `An unknown error occurred while executing the contract function "${functionName}".`, {
          cause,
          docsPath: docsPath4,
          metaMessages: [
            ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
            "Contract Call:",
            prettyArgs
          ].filter(Boolean)
        });
        Object.defineProperty(this, "abi", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "args", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "cause", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "formattedArgs", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "functionName", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "sender", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ContractFunctionExecutionError"
        });
        this.abi = abi;
        this.args = args;
        this.cause = cause;
        this.contractAddress = contractAddress;
        this.functionName = functionName;
        this.sender = sender;
      }
    };
    ContractFunctionRevertedError = class extends BaseError {
      constructor({ abi, data, functionName, message }) {
        let cause;
        let decodedData = void 0;
        let metaMessages;
        let reason;
        if (data && data !== "0x") {
          try {
            decodedData = decodeErrorResult({ abi, data });
            const { abiItem, errorName, args: errorArgs } = decodedData;
            if (errorName === "Error") {
              reason = errorArgs[0];
            } else if (errorName === "Panic") {
              const [firstArg] = errorArgs;
              reason = panicReasons[firstArg];
            } else {
              const errorWithParams = abiItem ? formatAbiItem2(abiItem, { includeName: true }) : void 0;
              const formattedArgs = abiItem && errorArgs ? formatAbiItemWithArgs({
                abiItem,
                args: errorArgs,
                includeFunctionName: false,
                includeName: false
              }) : void 0;
              metaMessages = [
                errorWithParams ? `Error: ${errorWithParams}` : "",
                formattedArgs && formattedArgs !== "()" ? `       ${[...Array(errorName?.length ?? 0).keys()].map(() => " ").join("")}${formattedArgs}` : ""
              ];
            }
          } catch (err) {
            cause = err;
          }
        } else if (message)
          reason = message;
        let signature;
        if (cause instanceof AbiErrorSignatureNotFoundError) {
          signature = cause.signature;
          metaMessages = [
            `Unable to decode signature "${signature}" as it was not found on the provided ABI.`,
            "Make sure you are using the correct ABI and that the error exists on it.",
            `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`
          ];
        }
        super(reason && reason !== "execution reverted" || signature ? [
          `The contract function "${functionName}" reverted with the following ${signature ? "signature" : "reason"}:`,
          reason || signature
        ].join("\n") : `The contract function "${functionName}" reverted.`, {
          cause,
          metaMessages
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ContractFunctionRevertedError"
        });
        Object.defineProperty(this, "data", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "reason", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "signature", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.data = decodedData;
        this.reason = reason;
        this.signature = signature;
      }
    };
    ContractFunctionZeroDataError = class extends BaseError {
      constructor({ functionName }) {
        super(`The contract function "${functionName}" returned no data ("0x").`, {
          metaMessages: [
            "This could be due to any of the following:",
            `  - The contract does not have the function "${functionName}",`,
            "  - The parameters passed to the contract function may be invalid, or",
            "  - The address is not a contract."
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ContractFunctionZeroDataError"
        });
      }
    };
    RawContractError = class extends BaseError {
      constructor({ data, message }) {
        super(message || "");
        Object.defineProperty(this, "code", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: 3
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "RawContractError"
        });
        Object.defineProperty(this, "data", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.data = data;
      }
    };
  }
});

// node_modules/viem/_esm/errors/request.js
var HttpRequestError, WebSocketRequestError, RpcRequestError, TimeoutError;
var init_request = __esm({
  "node_modules/viem/_esm/errors/request.js"() {
    "use strict";
    init_stringify();
    init_base();
    init_utils();
    HttpRequestError = class extends BaseError {
      constructor({ body, details, headers, status, url }) {
        super("HTTP request failed.", {
          details,
          metaMessages: [
            status && `Status: ${status}`,
            `URL: ${getUrl(url)}`,
            body && `Request body: ${stringify(body)}`
          ].filter(Boolean)
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "HttpRequestError"
        });
        Object.defineProperty(this, "body", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "headers", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "status", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "url", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.body = body;
        this.headers = headers;
        this.status = status;
        this.url = url;
      }
    };
    WebSocketRequestError = class extends BaseError {
      constructor({ body, details, url }) {
        super("WebSocket request failed.", {
          details,
          metaMessages: [`URL: ${getUrl(url)}`, `Request body: ${stringify(body)}`]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "WebSocketRequestError"
        });
      }
    };
    RpcRequestError = class extends BaseError {
      constructor({ body, error, url }) {
        super("RPC Request failed.", {
          cause: error,
          details: error.message,
          metaMessages: [`URL: ${getUrl(url)}`, `Request body: ${stringify(body)}`]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "RpcRequestError"
        });
        Object.defineProperty(this, "code", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.code = error.code;
      }
    };
    TimeoutError = class extends BaseError {
      constructor({ body, url }) {
        super("The request took too long to respond.", {
          details: "The request timed out.",
          metaMessages: [`URL: ${getUrl(url)}`, `Request body: ${stringify(body)}`]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TimeoutError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/errors/rpc.js
var unknownErrorCode, RpcError, ProviderRpcError, ParseRpcError, InvalidRequestRpcError, MethodNotFoundRpcError, InvalidParamsRpcError, InternalRpcError, InvalidInputRpcError, ResourceNotFoundRpcError, ResourceUnavailableRpcError, TransactionRejectedRpcError, MethodNotSupportedRpcError, LimitExceededRpcError, JsonRpcVersionUnsupportedError, UserRejectedRequestError, UnauthorizedProviderError, UnsupportedProviderMethodError, ProviderDisconnectedError, ChainDisconnectedError, SwitchChainError, UnknownRpcError;
var init_rpc = __esm({
  "node_modules/viem/_esm/errors/rpc.js"() {
    "use strict";
    init_base();
    init_request();
    unknownErrorCode = -1;
    RpcError = class extends BaseError {
      constructor(cause, { code, docsPath: docsPath4, metaMessages, shortMessage }) {
        super(shortMessage, {
          cause,
          docsPath: docsPath4,
          metaMessages: metaMessages || cause?.metaMessages
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "RpcError"
        });
        Object.defineProperty(this, "code", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.name = cause.name;
        this.code = cause instanceof RpcRequestError ? cause.code : code ?? unknownErrorCode;
      }
    };
    ProviderRpcError = class extends RpcError {
      constructor(cause, options2) {
        super(cause, options2);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ProviderRpcError"
        });
        Object.defineProperty(this, "data", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.data = options2.data;
      }
    };
    ParseRpcError = class _ParseRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _ParseRpcError.code,
          shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ParseRpcError"
        });
      }
    };
    Object.defineProperty(ParseRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32700
    });
    InvalidRequestRpcError = class _InvalidRequestRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _InvalidRequestRpcError.code,
          shortMessage: "JSON is not a valid request object."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidRequestRpcError"
        });
      }
    };
    Object.defineProperty(InvalidRequestRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32600
    });
    MethodNotFoundRpcError = class _MethodNotFoundRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _MethodNotFoundRpcError.code,
          shortMessage: "The method does not exist / is not available."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "MethodNotFoundRpcError"
        });
      }
    };
    Object.defineProperty(MethodNotFoundRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32601
    });
    InvalidParamsRpcError = class _InvalidParamsRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _InvalidParamsRpcError.code,
          shortMessage: [
            "Invalid parameters were provided to the RPC method.",
            "Double check you have provided the correct parameters."
          ].join("\n")
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidParamsRpcError"
        });
      }
    };
    Object.defineProperty(InvalidParamsRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32602
    });
    InternalRpcError = class _InternalRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _InternalRpcError.code,
          shortMessage: "An internal error was received."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InternalRpcError"
        });
      }
    };
    Object.defineProperty(InternalRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32603
    });
    InvalidInputRpcError = class _InvalidInputRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _InvalidInputRpcError.code,
          shortMessage: [
            "Missing or invalid parameters.",
            "Double check you have provided the correct parameters."
          ].join("\n")
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InvalidInputRpcError"
        });
      }
    };
    Object.defineProperty(InvalidInputRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32e3
    });
    ResourceNotFoundRpcError = class _ResourceNotFoundRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _ResourceNotFoundRpcError.code,
          shortMessage: "Requested resource not found."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ResourceNotFoundRpcError"
        });
      }
    };
    Object.defineProperty(ResourceNotFoundRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32001
    });
    ResourceUnavailableRpcError = class _ResourceUnavailableRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _ResourceUnavailableRpcError.code,
          shortMessage: "Requested resource not available."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ResourceUnavailableRpcError"
        });
      }
    };
    Object.defineProperty(ResourceUnavailableRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32002
    });
    TransactionRejectedRpcError = class _TransactionRejectedRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _TransactionRejectedRpcError.code,
          shortMessage: "Transaction creation failed."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TransactionRejectedRpcError"
        });
      }
    };
    Object.defineProperty(TransactionRejectedRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32003
    });
    MethodNotSupportedRpcError = class _MethodNotSupportedRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _MethodNotSupportedRpcError.code,
          shortMessage: "Method is not implemented."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "MethodNotSupportedRpcError"
        });
      }
    };
    Object.defineProperty(MethodNotSupportedRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32004
    });
    LimitExceededRpcError = class _LimitExceededRpcError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _LimitExceededRpcError.code,
          shortMessage: "Request exceeds defined limit."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "LimitExceededRpcError"
        });
      }
    };
    Object.defineProperty(LimitExceededRpcError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32005
    });
    JsonRpcVersionUnsupportedError = class _JsonRpcVersionUnsupportedError extends RpcError {
      constructor(cause) {
        super(cause, {
          code: _JsonRpcVersionUnsupportedError.code,
          shortMessage: "Version of JSON-RPC protocol is not supported."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "JsonRpcVersionUnsupportedError"
        });
      }
    };
    Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -32006
    });
    UserRejectedRequestError = class _UserRejectedRequestError extends ProviderRpcError {
      constructor(cause) {
        super(cause, {
          code: _UserRejectedRequestError.code,
          shortMessage: "User rejected the request."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "UserRejectedRequestError"
        });
      }
    };
    Object.defineProperty(UserRejectedRequestError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4001
    });
    UnauthorizedProviderError = class _UnauthorizedProviderError extends ProviderRpcError {
      constructor(cause) {
        super(cause, {
          code: _UnauthorizedProviderError.code,
          shortMessage: "The requested method and/or account has not been authorized by the user."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "UnauthorizedProviderError"
        });
      }
    };
    Object.defineProperty(UnauthorizedProviderError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4100
    });
    UnsupportedProviderMethodError = class _UnsupportedProviderMethodError extends ProviderRpcError {
      constructor(cause) {
        super(cause, {
          code: _UnsupportedProviderMethodError.code,
          shortMessage: "The Provider does not support the requested method."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "UnsupportedProviderMethodError"
        });
      }
    };
    Object.defineProperty(UnsupportedProviderMethodError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4200
    });
    ProviderDisconnectedError = class _ProviderDisconnectedError extends ProviderRpcError {
      constructor(cause) {
        super(cause, {
          code: _ProviderDisconnectedError.code,
          shortMessage: "The Provider is disconnected from all chains."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ProviderDisconnectedError"
        });
      }
    };
    Object.defineProperty(ProviderDisconnectedError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4900
    });
    ChainDisconnectedError = class _ChainDisconnectedError extends ProviderRpcError {
      constructor(cause) {
        super(cause, {
          code: _ChainDisconnectedError.code,
          shortMessage: "The Provider is not connected to the requested chain."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ChainDisconnectedError"
        });
      }
    };
    Object.defineProperty(ChainDisconnectedError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4901
    });
    SwitchChainError = class _SwitchChainError extends ProviderRpcError {
      constructor(cause) {
        super(cause, {
          code: _SwitchChainError.code,
          shortMessage: "An error occurred when attempting to switch chain."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "SwitchChainError"
        });
      }
    };
    Object.defineProperty(SwitchChainError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 4902
    });
    UnknownRpcError = class extends RpcError {
      constructor(cause) {
        super(cause, {
          shortMessage: "An unknown RPC error occurred."
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "UnknownRpcError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/errors/node.js
var ExecutionRevertedError, FeeCapTooHighError, FeeCapTooLowError, NonceTooHighError, NonceTooLowError, NonceMaxValueError, InsufficientFundsError, IntrinsicGasTooHighError, IntrinsicGasTooLowError, TransactionTypeNotSupportedError, TipAboveFeeCapError, UnknownNodeError;
var init_node = __esm({
  "node_modules/viem/_esm/errors/node.js"() {
    "use strict";
    init_formatGwei();
    init_base();
    ExecutionRevertedError = class extends BaseError {
      constructor({ cause, message } = {}) {
        const reason = message?.replace("execution reverted: ", "")?.replace("execution reverted", "");
        super(`Execution reverted ${reason ? `with reason: ${reason}` : "for an unknown reason"}.`, {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ExecutionRevertedError"
        });
      }
    };
    Object.defineProperty(ExecutionRevertedError, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 3
    });
    Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /execution reverted/
    });
    FeeCapTooHighError = class extends BaseError {
      constructor({ cause, maxFeePerGas } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "FeeCapTooHigh"
        });
      }
    };
    Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
    });
    FeeCapTooLowError = class extends BaseError {
      constructor({ cause, maxFeePerGas } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)}` : ""} gwei) cannot be lower than the block base fee.`, {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "FeeCapTooLow"
        });
      }
    };
    Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
    });
    NonceTooHighError = class extends BaseError {
      constructor({ cause, nonce } = {}) {
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}is higher than the next one expected.`, { cause });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "NonceTooHighError"
        });
      }
    };
    Object.defineProperty(NonceTooHighError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /nonce too high/
    });
    NonceTooLowError = class extends BaseError {
      constructor({ cause, nonce } = {}) {
        super([
          `Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}is lower than the current nonce of the account.`,
          "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
        ].join("\n"), { cause });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "NonceTooLowError"
        });
      }
    };
    Object.defineProperty(NonceTooLowError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /nonce too low|transaction already imported|already known/
    });
    NonceMaxValueError = class extends BaseError {
      constructor({ cause, nonce } = {}) {
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}exceeds the maximum allowed nonce.`, { cause });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "NonceMaxValueError"
        });
      }
    };
    Object.defineProperty(NonceMaxValueError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /nonce has max value/
    });
    InsufficientFundsError = class extends BaseError {
      constructor({ cause } = {}) {
        super([
          "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
        ].join("\n"), {
          cause,
          metaMessages: [
            "This error could arise when the account does not have enough funds to:",
            " - pay for the total gas fee,",
            " - pay for the value to send.",
            " ",
            "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
            " - `gas` is the amount of gas needed for transaction to execute,",
            " - `gas fee` is the gas fee,",
            " - `value` is the amount of ether to send to the recipient."
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "InsufficientFundsError"
        });
      }
    };
    Object.defineProperty(InsufficientFundsError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /insufficient funds/
    });
    IntrinsicGasTooHighError = class extends BaseError {
      constructor({ cause, gas } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "IntrinsicGasTooHighError"
        });
      }
    };
    Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /intrinsic gas too high|gas limit reached/
    });
    IntrinsicGasTooLowError = class extends BaseError {
      constructor({ cause, gas } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction is too low.`, {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "IntrinsicGasTooLowError"
        });
      }
    };
    Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /intrinsic gas too low/
    });
    TransactionTypeNotSupportedError = class extends BaseError {
      constructor({ cause }) {
        super("The transaction type is not supported for this chain.", {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TransactionTypeNotSupportedError"
        });
      }
    };
    Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /transaction type not valid/
    });
    TipAboveFeeCapError = class extends BaseError {
      constructor({ cause, maxPriorityFeePerGas, maxFeePerGas } = {}) {
        super([
          `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${formatGwei(maxPriorityFeePerGas)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}).`
        ].join("\n"), {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "TipAboveFeeCapError"
        });
      }
    };
    Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
    });
    UnknownNodeError = class extends BaseError {
      constructor({ cause }) {
        super(`An error occurred while executing: ${cause?.shortMessage}`, {
          cause
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "UnknownNodeError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/utils/errors/getNodeError.js
function getNodeError(err, args) {
  const message = (err.details || "").toLowerCase();
  const executionRevertedError = err.walk((e) => e.code === ExecutionRevertedError.code);
  if (executionRevertedError instanceof BaseError) {
    return new ExecutionRevertedError({
      cause: err,
      message: executionRevertedError.details
    });
  }
  if (ExecutionRevertedError.nodeMessage.test(message))
    return new ExecutionRevertedError({
      cause: err,
      message: err.details
    });
  if (FeeCapTooHighError.nodeMessage.test(message))
    return new FeeCapTooHighError({
      cause: err,
      maxFeePerGas: args?.maxFeePerGas
    });
  if (FeeCapTooLowError.nodeMessage.test(message))
    return new FeeCapTooLowError({
      cause: err,
      maxFeePerGas: args?.maxFeePerGas
    });
  if (NonceTooHighError.nodeMessage.test(message))
    return new NonceTooHighError({ cause: err, nonce: args?.nonce });
  if (NonceTooLowError.nodeMessage.test(message))
    return new NonceTooLowError({ cause: err, nonce: args?.nonce });
  if (NonceMaxValueError.nodeMessage.test(message))
    return new NonceMaxValueError({ cause: err, nonce: args?.nonce });
  if (InsufficientFundsError.nodeMessage.test(message))
    return new InsufficientFundsError({ cause: err });
  if (IntrinsicGasTooHighError.nodeMessage.test(message))
    return new IntrinsicGasTooHighError({ cause: err, gas: args?.gas });
  if (IntrinsicGasTooLowError.nodeMessage.test(message))
    return new IntrinsicGasTooLowError({ cause: err, gas: args?.gas });
  if (TransactionTypeNotSupportedError.nodeMessage.test(message))
    return new TransactionTypeNotSupportedError({ cause: err });
  if (TipAboveFeeCapError.nodeMessage.test(message))
    return new TipAboveFeeCapError({
      cause: err,
      maxFeePerGas: args?.maxFeePerGas,
      maxPriorityFeePerGas: args?.maxPriorityFeePerGas
    });
  return new UnknownNodeError({
    cause: err
  });
}
var init_getNodeError = __esm({
  "node_modules/viem/_esm/utils/errors/getNodeError.js"() {
    "use strict";
    init_base();
    init_node();
  }
});

// node_modules/viem/_esm/utils/formatters/extract.js
function extract(value_, { format }) {
  if (!format)
    return {};
  const value = {};
  function extract_(formatted2) {
    const keys = Object.keys(formatted2);
    for (const key of keys) {
      if (key in value_)
        value[key] = value_[key];
      if (formatted2[key] && typeof formatted2[key] === "object" && !Array.isArray(formatted2[key]))
        extract_(formatted2[key]);
    }
  }
  const formatted = format(value_ || {});
  extract_(formatted);
  return value;
}
var init_extract = __esm({
  "node_modules/viem/_esm/utils/formatters/extract.js"() {
    "use strict";
  }
});

// node_modules/viem/_esm/utils/formatters/formatter.js
function defineFormatter(type, format) {
  return ({ exclude, format: overrides }) => {
    return {
      exclude,
      format: (args) => {
        const formatted = format(args);
        if (exclude) {
          for (const key of exclude) {
            delete formatted[key];
          }
        }
        return {
          ...formatted,
          ...overrides(args)
        };
      },
      type
    };
  };
}
var init_formatter = __esm({
  "node_modules/viem/_esm/utils/formatters/formatter.js"() {
    "use strict";
  }
});

// node_modules/viem/_esm/utils/formatters/transactionRequest.js
function formatTransactionRequest(transactionRequest) {
  return {
    ...transactionRequest,
    gas: typeof transactionRequest.gas !== "undefined" ? numberToHex(transactionRequest.gas) : void 0,
    gasPrice: typeof transactionRequest.gasPrice !== "undefined" ? numberToHex(transactionRequest.gasPrice) : void 0,
    maxFeePerGas: typeof transactionRequest.maxFeePerGas !== "undefined" ? numberToHex(transactionRequest.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: typeof transactionRequest.maxPriorityFeePerGas !== "undefined" ? numberToHex(transactionRequest.maxPriorityFeePerGas) : void 0,
    nonce: typeof transactionRequest.nonce !== "undefined" ? numberToHex(transactionRequest.nonce) : void 0,
    type: typeof transactionRequest.type !== "undefined" ? rpcTransactionType[transactionRequest.type] : void 0,
    value: typeof transactionRequest.value !== "undefined" ? numberToHex(transactionRequest.value) : void 0
  };
}
var rpcTransactionType;
var init_transactionRequest = __esm({
  "node_modules/viem/_esm/utils/formatters/transactionRequest.js"() {
    "use strict";
    init_toHex();
    rpcTransactionType = {
      legacy: "0x0",
      eip2930: "0x1",
      eip1559: "0x2"
    };
  }
});

// node_modules/viem/_esm/utils/transaction/assertRequest.js
function assertRequest(args) {
  const { account: account_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, to } = args;
  const account = account_ ? parseAccount(account_) : void 0;
  if (account && !isAddress(account.address))
    throw new InvalidAddressError({ address: account.address });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (typeof gasPrice !== "undefined" && (typeof maxFeePerGas !== "undefined" || typeof maxPriorityFeePerGas !== "undefined"))
    throw new FeeConflictError();
  if (maxFeePerGas && maxFeePerGas > 2n ** 256n - 1n)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
}
var init_assertRequest = __esm({
  "node_modules/viem/_esm/utils/transaction/assertRequest.js"() {
    "use strict";
    init_parseAccount();
    init_address();
    init_node();
    init_transaction();
    init_isAddress();
  }
});

// node_modules/viem/_esm/utils/abi/decodeFunctionResult.js
function decodeFunctionResult({ abi, args, functionName, data }) {
  let abiItem = abi[0];
  if (functionName) {
    abiItem = getAbiItem({
      abi,
      args,
      name: functionName
    });
    if (!abiItem)
      throw new AbiFunctionNotFoundError(functionName, { docsPath: docsPath2 });
  }
  if (abiItem.type !== "function")
    throw new AbiFunctionNotFoundError(void 0, { docsPath: docsPath2 });
  if (!abiItem.outputs)
    throw new AbiFunctionOutputsNotFoundError(abiItem.name, { docsPath: docsPath2 });
  const values = decodeAbiParameters(abiItem.outputs, data);
  if (values && values.length > 1)
    return values;
  if (values && values.length === 1)
    return values[0];
  return void 0;
}
var docsPath2;
var init_decodeFunctionResult = __esm({
  "node_modules/viem/_esm/utils/abi/decodeFunctionResult.js"() {
    "use strict";
    init_abi();
    init_decodeAbiParameters();
    init_getAbiItem();
    docsPath2 = "/docs/contract/decodeFunctionResult";
  }
});

// node_modules/viem/_esm/constants/abis.js
var multicall3Abi, universalResolverErrors, universalResolverResolveAbi, universalResolverReverseAbi, textResolverAbi, addressResolverAbi, universalSignatureValidatorAbi;
var init_abis = __esm({
  "node_modules/viem/_esm/constants/abis.js"() {
    "use strict";
    multicall3Abi = [
      {
        inputs: [
          {
            components: [
              {
                name: "target",
                type: "address"
              },
              {
                name: "allowFailure",
                type: "bool"
              },
              {
                name: "callData",
                type: "bytes"
              }
            ],
            name: "calls",
            type: "tuple[]"
          }
        ],
        name: "aggregate3",
        outputs: [
          {
            components: [
              {
                name: "success",
                type: "bool"
              },
              {
                name: "returnData",
                type: "bytes"
              }
            ],
            name: "returnData",
            type: "tuple[]"
          }
        ],
        stateMutability: "view",
        type: "function"
      }
    ];
    universalResolverErrors = [
      {
        inputs: [],
        name: "ResolverNotFound",
        type: "error"
      },
      {
        inputs: [],
        name: "ResolverWildcardNotSupported",
        type: "error"
      }
    ];
    universalResolverResolveAbi = [
      ...universalResolverErrors,
      {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes" },
          { name: "data", type: "bytes" }
        ],
        outputs: [
          { name: "", type: "bytes" },
          { name: "address", type: "address" }
        ]
      }
    ];
    universalResolverReverseAbi = [
      ...universalResolverErrors,
      {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [{ type: "bytes", name: "reverseName" }],
        outputs: [
          { type: "string", name: "resolvedName" },
          { type: "address", name: "resolvedAddress" },
          { type: "address", name: "reverseResolver" },
          { type: "address", name: "resolver" }
        ]
      }
    ];
    textResolverAbi = [
      {
        name: "text",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes32" },
          { name: "key", type: "string" }
        ],
        outputs: [{ name: "", type: "string" }]
      }
    ];
    addressResolverAbi = [
      {
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [{ name: "name", type: "bytes32" }],
        outputs: [{ name: "", type: "address" }]
      },
      {
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes32" },
          { name: "coinType", type: "uint256" }
        ],
        outputs: [{ name: "", type: "bytes" }]
      }
    ];
    universalSignatureValidatorAbi = [
      {
        inputs: [
          {
            internalType: "address",
            name: "_signer",
            type: "address"
          },
          {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes"
          }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
      }
    ];
  }
});

// node_modules/viem/_esm/constants/contract.js
var aggregate3Signature;
var init_contract2 = __esm({
  "node_modules/viem/_esm/constants/contract.js"() {
    "use strict";
    aggregate3Signature = "0x82ad56cb";
  }
});

// node_modules/viem/_esm/errors/chain.js
var ChainDoesNotSupportContract, ChainMismatchError, ChainNotFoundError, ClientChainNotConfiguredError;
var init_chain = __esm({
  "node_modules/viem/_esm/errors/chain.js"() {
    "use strict";
    init_base();
    ChainDoesNotSupportContract = class extends BaseError {
      constructor({ blockNumber, chain, contract }) {
        super(`Chain "${chain.name}" does not support contract "${contract.name}".`, {
          metaMessages: [
            "This could be due to any of the following:",
            ...blockNumber && contract.blockCreated && contract.blockCreated > blockNumber ? [
              `- The contract "${contract.name}" was not deployed until block ${contract.blockCreated} (current block ${blockNumber}).`
            ] : [
              `- The chain does not have the contract "${contract.name}" configured.`
            ]
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ChainDoesNotSupportContract"
        });
      }
    };
    ChainMismatchError = class extends BaseError {
      constructor({ chain, currentChainId }) {
        super(`The current chain of the wallet (id: ${currentChainId}) does not match the target chain for the transaction (id: ${chain.id} \u2013 ${chain.name}).`, {
          metaMessages: [
            `Current Chain ID:  ${currentChainId}`,
            `Expected Chain ID: ${chain.id} \u2013 ${chain.name}`
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ChainMismatchError"
        });
      }
    };
    ChainNotFoundError = class extends BaseError {
      constructor() {
        super([
          "No chain was provided to the request.",
          "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."
        ].join("\n"));
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ChainNotFoundError"
        });
      }
    };
    ClientChainNotConfiguredError = class extends BaseError {
      constructor() {
        super("No chain was provided to the Client.");
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ClientChainNotConfiguredError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/utils/chain/getChainContractAddress.js
function getChainContractAddress({ blockNumber, chain, contract: name }) {
  const contract = chain?.contracts?.[name];
  if (!contract)
    throw new ChainDoesNotSupportContract({
      chain,
      contract: { name }
    });
  if (blockNumber && contract.blockCreated && contract.blockCreated > blockNumber)
    throw new ChainDoesNotSupportContract({
      blockNumber,
      chain,
      contract: {
        name,
        blockCreated: contract.blockCreated
      }
    });
  return contract.address;
}
var init_getChainContractAddress = __esm({
  "node_modules/viem/_esm/utils/chain/getChainContractAddress.js"() {
    "use strict";
    init_chain();
  }
});

// node_modules/viem/_esm/utils/errors/getCallError.js
function getCallError(err, { docsPath: docsPath4, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new CallExecutionError(cause, {
    docsPath: docsPath4,
    ...args
  });
}
var init_getCallError = __esm({
  "node_modules/viem/_esm/utils/errors/getCallError.js"() {
    "use strict";
    init_contract();
    init_node();
    init_getNodeError();
  }
});

// node_modules/viem/_esm/utils/promise/createBatchScheduler.js
function createBatchScheduler({ fn, id: id2, shouldSplitBatch, wait: wait2 = 0, sort }) {
  const exec = async () => {
    const scheduler = getScheduler();
    flush();
    const args = scheduler.map(({ args: args2 }) => args2);
    if (args.length === 0)
      return;
    fn(args).then((data) => {
      if (sort && Array.isArray(data))
        data.sort(sort);
      for (let i = 0; i < scheduler.length; i++) {
        const { pendingPromise } = scheduler[i];
        pendingPromise.resolve?.([data[i], data]);
      }
    }).catch((err) => {
      for (let i = 0; i < scheduler.length; i++) {
        const { pendingPromise } = scheduler[i];
        pendingPromise.reject?.(err);
      }
    });
  };
  const flush = () => schedulerCache.delete(id2);
  const getBatchedArgs = () => getScheduler().map(({ args }) => args);
  const getScheduler = () => schedulerCache.get(id2) || [];
  const setScheduler = (item) => schedulerCache.set(id2, [...getScheduler(), item]);
  return {
    flush,
    async schedule(args) {
      const pendingPromise = {};
      const promise = new Promise((resolve, reject) => {
        pendingPromise.resolve = resolve;
        pendingPromise.reject = reject;
      });
      const split2 = shouldSplitBatch?.([...getBatchedArgs(), args]);
      if (split2)
        exec();
      const hasActiveScheduler = getScheduler().length > 0;
      if (hasActiveScheduler) {
        setScheduler({ args, pendingPromise });
        return promise;
      }
      setScheduler({ args, pendingPromise });
      setTimeout(exec, wait2);
      return promise;
    }
  };
}
var schedulerCache;
var init_createBatchScheduler = __esm({
  "node_modules/viem/_esm/utils/promise/createBatchScheduler.js"() {
    "use strict";
    schedulerCache = /* @__PURE__ */ new Map();
  }
});

// node_modules/viem/_esm/errors/ccip.js
var OffchainLookupError, OffchainLookupResponseMalformedError, OffchainLookupSenderMismatchError;
var init_ccip = __esm({
  "node_modules/viem/_esm/errors/ccip.js"() {
    "use strict";
    init_stringify();
    init_base();
    init_utils();
    OffchainLookupError = class extends BaseError {
      constructor({ callbackSelector, cause, data, extraData, sender, urls }) {
        super(cause.shortMessage || "An error occurred while fetching for an offchain result.", {
          cause,
          metaMessages: [
            ...cause.metaMessages || [],
            cause.metaMessages?.length ? "" : [],
            "Offchain Gateway Call:",
            urls && [
              "  Gateway URL(s):",
              ...urls.map((url) => `    ${getUrl(url)}`)
            ],
            `  Sender: ${sender}`,
            `  Data: ${data}`,
            `  Callback selector: ${callbackSelector}`,
            `  Extra data: ${extraData}`
          ].flat()
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "OffchainLookupError"
        });
      }
    };
    OffchainLookupResponseMalformedError = class extends BaseError {
      constructor({ result, url }) {
        super("Offchain gateway response is malformed. Response data must be a hex value.", {
          metaMessages: [
            `Gateway URL: ${getUrl(url)}`,
            `Response: ${stringify(result)}`
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "OffchainLookupResponseMalformedError"
        });
      }
    };
    OffchainLookupSenderMismatchError = class extends BaseError {
      constructor({ sender, to }) {
        super("Reverted sender address does not match target contract address (`to`).", {
          metaMessages: [
            `Contract address: ${to}`,
            `OffchainLookup sender address: ${sender}`
          ]
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "OffchainLookupSenderMismatchError"
        });
      }
    };
  }
});

// node_modules/viem/_esm/utils/address/isAddressEqual.js
function isAddressEqual(a, b) {
  if (!isAddress(a))
    throw new InvalidAddressError({ address: a });
  if (!isAddress(b))
    throw new InvalidAddressError({ address: b });
  return a.toLowerCase() === b.toLowerCase();
}
var init_isAddressEqual = __esm({
  "node_modules/viem/_esm/utils/address/isAddressEqual.js"() {
    "use strict";
    init_address();
    init_isAddress();
  }
});

// node_modules/viem/_esm/utils/ccip.js
var ccip_exports = {};
__export(ccip_exports, {
  ccipFetch: () => ccipFetch,
  offchainLookup: () => offchainLookup,
  offchainLookupAbiItem: () => offchainLookupAbiItem,
  offchainLookupSignature: () => offchainLookupSignature
});
async function offchainLookup(client, { blockNumber, blockTag, data, to }) {
  const { args } = decodeErrorResult({
    data,
    abi: [offchainLookupAbiItem]
  });
  const [sender, urls, callData, callbackSelector, extraData] = args;
  try {
    if (!isAddressEqual(to, sender))
      throw new OffchainLookupSenderMismatchError({ sender, to });
    const result = await ccipFetch({ data: callData, sender, urls });
    const { data: data_ } = await call(client, {
      blockNumber,
      blockTag,
      data: concat([
        callbackSelector,
        encodeAbiParameters([{ type: "bytes" }, { type: "bytes" }], [result, extraData])
      ]),
      to
    });
    return data_;
  } catch (err) {
    throw new OffchainLookupError({
      callbackSelector,
      cause: err,
      data,
      extraData,
      sender,
      urls
    });
  }
}
async function ccipFetch({ data, sender, urls }) {
  let error = new Error("An unknown error occurred.");
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const method = url.includes("{data}") ? "GET" : "POST";
    const body = method === "POST" ? { data, sender } : void 0;
    try {
      const response = await fetch(url.replace("{sender}", sender).replace("{data}", data), {
        body: JSON.stringify(body),
        method
      });
      let result;
      if (response.headers.get("Content-Type")?.startsWith("application/json")) {
        result = (await response.json()).data;
      } else {
        result = await response.text();
      }
      if (!response.ok) {
        error = new HttpRequestError({
          body,
          details: result?.error ? stringify(result.error) : response.statusText,
          headers: response.headers,
          status: response.status,
          url
        });
        continue;
      }
      if (!isHex(result)) {
        error = new OffchainLookupResponseMalformedError({
          result,
          url
        });
        continue;
      }
      return result;
    } catch (err) {
      error = new HttpRequestError({
        body,
        details: err.message,
        url
      });
    }
  }
  throw error;
}
var offchainLookupSignature, offchainLookupAbiItem;
var init_ccip2 = __esm({
  "node_modules/viem/_esm/utils/ccip.js"() {
    "use strict";
    init_call();
    init_ccip();
    init_request();
    init_decodeErrorResult();
    init_encodeAbiParameters();
    init_isAddressEqual();
    init_concat();
    init_isHex();
    init_stringify();
    offchainLookupSignature = "0x556f1830";
    offchainLookupAbiItem = {
      name: "OffchainLookup",
      type: "error",
      inputs: [
        {
          name: "sender",
          type: "address"
        },
        {
          name: "urls",
          type: "string[]"
        },
        {
          name: "callData",
          type: "bytes"
        },
        {
          name: "callbackFunction",
          type: "bytes4"
        },
        {
          name: "extraData",
          type: "bytes"
        }
      ]
    };
  }
});

// node_modules/viem/_esm/actions/public/call.js
async function call(client, args) {
  const { account: account_ = client.account, batch = Boolean(client.batch?.multicall), blockNumber, blockTag = "latest", accessList, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
  const account = account_ ? parseAccount(account_) : void 0;
  try {
    assertRequest(args);
    const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || formatTransactionRequest;
    const request = format({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...extract(rest, { format: chainFormat }),
      from: account?.address,
      accessList,
      data,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    });
    if (batch && shouldPerformMulticall({ request })) {
      try {
        return await scheduleMulticall(client, {
          ...request,
          blockNumber,
          blockTag
        });
      } catch (err) {
        if (!(err instanceof ClientChainNotConfiguredError) && !(err instanceof ChainDoesNotSupportContract))
          throw err;
      }
    }
    const response = await client.request({
      method: "eth_call",
      params: block ? [request, block] : [request]
    });
    if (response === "0x")
      return { data: void 0 };
    return { data: response };
  } catch (err) {
    const data2 = getRevertErrorData(err);
    const { offchainLookup: offchainLookup2, offchainLookupSignature: offchainLookupSignature2 } = await Promise.resolve().then(() => (init_ccip2(), ccip_exports));
    if (data2?.slice(0, 10) === offchainLookupSignature2 && to) {
      return { data: await offchainLookup2(client, { data: data2, to }) };
    }
    throw getCallError(err, {
      ...args,
      account,
      chain: client.chain
    });
  }
}
function shouldPerformMulticall({ request }) {
  const { data, to, ...request_ } = request;
  if (!data)
    return false;
  if (data.startsWith(aggregate3Signature))
    return false;
  if (!to)
    return false;
  if (Object.values(request_).filter((x) => typeof x !== "undefined").length > 0)
    return false;
  return true;
}
async function scheduleMulticall(client, args) {
  const { batchSize = 1024, wait: wait2 = 0 } = typeof client.batch?.multicall === "object" ? client.batch.multicall : {};
  const { blockNumber, blockTag = "latest", data, multicallAddress: multicallAddress_, to } = args;
  let multicallAddress = multicallAddress_;
  if (!multicallAddress) {
    if (!client.chain)
      throw new ClientChainNotConfiguredError();
    multicallAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "multicall3"
    });
  }
  const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
  const block = blockNumberHex || blockTag;
  const { schedule } = createBatchScheduler({
    id: `${client.uid}.${block}`,
    wait: wait2,
    shouldSplitBatch(args2) {
      const size3 = args2.reduce((size4, { data: data2 }) => size4 + (data2.length - 2), 0);
      return size3 > batchSize * 2;
    },
    fn: async (requests) => {
      const calls = requests.map((request) => ({
        allowFailure: true,
        callData: request.data,
        target: request.to
      }));
      const calldata = encodeFunctionData({
        abi: multicall3Abi,
        args: [calls],
        functionName: "aggregate3"
      });
      const data2 = await client.request({
        method: "eth_call",
        params: [
          {
            data: calldata,
            to: multicallAddress
          },
          block
        ]
      });
      return decodeFunctionResult({
        abi: multicall3Abi,
        args: [calls],
        functionName: "aggregate3",
        data: data2 || "0x"
      });
    }
  });
  const [{ returnData, success }] = await schedule({ data, to });
  if (!success)
    throw new RawContractError({ data: returnData });
  if (returnData === "0x")
    return { data: void 0 };
  return { data: returnData };
}
function getRevertErrorData(err) {
  if (!(err instanceof BaseError))
    return void 0;
  const error = err.walk();
  return typeof error.data === "object" ? error.data.data : error.data;
}
var init_call = __esm({
  "node_modules/viem/_esm/actions/public/call.js"() {
    "use strict";
    init_parseAccount();
    init_abis();
    init_contract2();
    init_base();
    init_chain();
    init_contract();
    init_decodeFunctionResult();
    init_encodeFunctionData();
    init_getChainContractAddress();
    init_toHex();
    init_getCallError();
    init_extract();
    init_transactionRequest();
    init_createBatchScheduler();
    init_assertRequest();
  }
});

// node_modules/@noble/curves/esm/abstract/utils.js
function equalBytes(b1, b2) {
  if (b1.length !== b2.length)
    return false;
  for (let i = 0; i < b1.length; i++)
    if (b1[i] !== b2[i])
      return false;
  return true;
}
var _0n2, _1n2, _2n2;
var init_utils3 = __esm({
  "node_modules/@noble/curves/esm/abstract/utils.js"() {
    "use strict";
    _0n2 = BigInt(0);
    _1n2 = BigInt(1);
    _2n2 = BigInt(2);
  }
});

// node_modules/dotenv/package.json
var require_package = __commonJS({
  "node_modules/dotenv/package.json"(exports2, module2) {
    module2.exports = {
      name: "dotenv",
      version: "16.3.1",
      description: "Loads environment variables from .env file",
      main: "lib/main.js",
      types: "lib/main.d.ts",
      exports: {
        ".": {
          types: "./lib/main.d.ts",
          require: "./lib/main.js",
          default: "./lib/main.js"
        },
        "./config": "./config.js",
        "./config.js": "./config.js",
        "./lib/env-options": "./lib/env-options.js",
        "./lib/env-options.js": "./lib/env-options.js",
        "./lib/cli-options": "./lib/cli-options.js",
        "./lib/cli-options.js": "./lib/cli-options.js",
        "./package.json": "./package.json"
      },
      scripts: {
        "dts-check": "tsc --project tests/types/tsconfig.json",
        lint: "standard",
        "lint-readme": "standard-markdown",
        pretest: "npm run lint && npm run dts-check",
        test: "tap tests/*.js --100 -Rspec",
        prerelease: "npm test",
        release: "standard-version"
      },
      repository: {
        type: "git",
        url: "git://github.com/motdotla/dotenv.git"
      },
      funding: "https://github.com/motdotla/dotenv?sponsor=1",
      keywords: [
        "dotenv",
        "env",
        ".env",
        "environment",
        "variables",
        "config",
        "settings"
      ],
      readmeFilename: "README.md",
      license: "BSD-2-Clause",
      devDependencies: {
        "@definitelytyped/dtslint": "^0.0.133",
        "@types/node": "^18.11.3",
        decache: "^4.6.1",
        sinon: "^14.0.1",
        standard: "^17.0.0",
        "standard-markdown": "^7.1.0",
        "standard-version": "^9.5.0",
        tap: "^16.3.0",
        tar: "^6.1.11",
        typescript: "^4.8.4"
      },
      engines: {
        node: ">=12"
      },
      browser: {
        fs: false
      }
    };
  }
});

// node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "node_modules/dotenv/lib/main.js"(exports2, module2) {
    "use strict";
    var fs = require("fs");
    var path = require("path");
    var os = require("os");
    var crypto2 = require("crypto");
    var packageJson = require_package();
    var version2 = packageJson.version;
    var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function parse2(src) {
      const obj = {};
      let lines = src.toString();
      lines = lines.replace(/\r\n?/mg, "\n");
      let match;
      while ((match = LINE.exec(lines)) != null) {
        const key = match[1];
        let value = match[2] || "";
        value = value.trim();
        const maybeQuote = value[0];
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        if (maybeQuote === '"') {
          value = value.replace(/\\n/g, "\n");
          value = value.replace(/\\r/g, "\r");
        }
        obj[key] = value;
      }
      return obj;
    }
    function _parseVault(options2) {
      const vaultPath = _vaultPath(options2);
      const result = DotenvModule.configDotenv({ path: vaultPath });
      if (!result.parsed) {
        throw new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
      }
      const keys = _dotenvKey(options2).split(",");
      const length = keys.length;
      let decrypted;
      for (let i = 0; i < length; i++) {
        try {
          const key = keys[i].trim();
          const attrs = _instructions(result, key);
          decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
          break;
        } catch (error) {
          if (i + 1 >= length) {
            throw error;
          }
        }
      }
      return DotenvModule.parse(decrypted);
    }
    function _log(message) {
      console.log(`[dotenv@${version2}][INFO] ${message}`);
    }
    function _warn(message) {
      console.log(`[dotenv@${version2}][WARN] ${message}`);
    }
    function _debug(message) {
      console.log(`[dotenv@${version2}][DEBUG] ${message}`);
    }
    function _dotenvKey(options2) {
      if (options2 && options2.DOTENV_KEY && options2.DOTENV_KEY.length > 0) {
        return options2.DOTENV_KEY;
      }
      if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
        return process.env.DOTENV_KEY;
      }
      return "";
    }
    function _instructions(result, dotenvKey) {
      let uri;
      try {
        uri = new URL(dotenvKey);
      } catch (error) {
        if (error.code === "ERR_INVALID_URL") {
          throw new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=development");
        }
        throw error;
      }
      const key = uri.password;
      if (!key) {
        throw new Error("INVALID_DOTENV_KEY: Missing key part");
      }
      const environment = uri.searchParams.get("environment");
      if (!environment) {
        throw new Error("INVALID_DOTENV_KEY: Missing environment part");
      }
      const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
      const ciphertext = result.parsed[environmentKey];
      if (!ciphertext) {
        throw new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
      }
      return { ciphertext, key };
    }
    function _vaultPath(options2) {
      let dotenvPath = path.resolve(process.cwd(), ".env");
      if (options2 && options2.path && options2.path.length > 0) {
        dotenvPath = options2.path;
      }
      return dotenvPath.endsWith(".vault") ? dotenvPath : `${dotenvPath}.vault`;
    }
    function _resolveHome(envPath) {
      return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
    }
    function _configVault(options2) {
      _log("Loading env from encrypted .env.vault");
      const parsed = DotenvModule._parseVault(options2);
      let processEnv = process.env;
      if (options2 && options2.processEnv != null) {
        processEnv = options2.processEnv;
      }
      DotenvModule.populate(processEnv, parsed, options2);
      return { parsed };
    }
    function configDotenv(options2) {
      let dotenvPath = path.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      const debug = Boolean(options2 && options2.debug);
      if (options2) {
        if (options2.path != null) {
          dotenvPath = _resolveHome(options2.path);
        }
        if (options2.encoding != null) {
          encoding = options2.encoding;
        }
      }
      try {
        const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, { encoding }));
        let processEnv = process.env;
        if (options2 && options2.processEnv != null) {
          processEnv = options2.processEnv;
        }
        DotenvModule.populate(processEnv, parsed, options2);
        return { parsed };
      } catch (e) {
        if (debug) {
          _debug(`Failed to load ${dotenvPath} ${e.message}`);
        }
        return { error: e };
      }
    }
    function config(options2) {
      const vaultPath = _vaultPath(options2);
      if (_dotenvKey(options2).length === 0) {
        return DotenvModule.configDotenv(options2);
      }
      if (!fs.existsSync(vaultPath)) {
        _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);
        return DotenvModule.configDotenv(options2);
      }
      return DotenvModule._configVault(options2);
    }
    function decrypt(encrypted, keyStr) {
      const key = Buffer.from(keyStr.slice(-64), "hex");
      let ciphertext = Buffer.from(encrypted, "base64");
      const nonce = ciphertext.slice(0, 12);
      const authTag = ciphertext.slice(-16);
      ciphertext = ciphertext.slice(12, -16);
      try {
        const aesgcm = crypto2.createDecipheriv("aes-256-gcm", key, nonce);
        aesgcm.setAuthTag(authTag);
        return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
      } catch (error) {
        const isRange = error instanceof RangeError;
        const invalidKeyLength = error.message === "Invalid key length";
        const decryptionFailed = error.message === "Unsupported state or unable to authenticate data";
        if (isRange || invalidKeyLength) {
          const msg = "INVALID_DOTENV_KEY: It must be 64 characters long (or more)";
          throw new Error(msg);
        } else if (decryptionFailed) {
          const msg = "DECRYPTION_FAILED: Please check your DOTENV_KEY";
          throw new Error(msg);
        } else {
          console.error("Error: ", error.code);
          console.error("Error: ", error.message);
          throw error;
        }
      }
    }
    function populate(processEnv, parsed, options2 = {}) {
      const debug = Boolean(options2 && options2.debug);
      const override = Boolean(options2 && options2.override);
      if (typeof parsed !== "object") {
        throw new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
      }
      for (const key of Object.keys(parsed)) {
        if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
          if (override === true) {
            processEnv[key] = parsed[key];
          }
          if (debug) {
            if (override === true) {
              _debug(`"${key}" is already defined and WAS overwritten`);
            } else {
              _debug(`"${key}" is already defined and was NOT overwritten`);
            }
          }
        } else {
          processEnv[key] = parsed[key];
        }
      }
    }
    var DotenvModule = {
      configDotenv,
      _configVault,
      _parseVault,
      config,
      decrypt,
      parse: parse2,
      populate
    };
    module2.exports.configDotenv = DotenvModule.configDotenv;
    module2.exports._configVault = DotenvModule._configVault;
    module2.exports._parseVault = DotenvModule._parseVault;
    module2.exports.config = DotenvModule.config;
    module2.exports.decrypt = DotenvModule.decrypt;
    module2.exports.parse = DotenvModule.parse;
    module2.exports.populate = DotenvModule.populate;
    module2.exports = DotenvModule;
  }
});

// node_modules/base-x/src/index.js
var require_src = __commonJS({
  "node_modules/base-x/src/index.js"(exports2, module2) {
    "use strict";
    function base2(ALPHABET) {
      if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
      }
      var BASE_MAP = new Uint8Array(256);
      for (var j = 0; j < BASE_MAP.length; j++) {
        BASE_MAP[j] = 255;
      }
      for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
          throw new TypeError(x + " is ambiguous");
        }
        BASE_MAP[xc] = i;
      }
      var BASE2 = ALPHABET.length;
      var LEADER = ALPHABET.charAt(0);
      var FACTOR = Math.log(BASE2) / Math.log(256);
      var iFACTOR = Math.log(256) / Math.log(BASE2);
      function encode(source) {
        if (source instanceof Uint8Array) {
        } else if (ArrayBuffer.isView(source)) {
          source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
          source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
          throw new TypeError("Expected Uint8Array");
        }
        if (source.length === 0) {
          return "";
        }
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++;
          zeroes++;
        }
        var size3 = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size3);
        while (pbegin !== pend) {
          var carry = source[pbegin];
          var i2 = 0;
          for (var it1 = size3 - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
            carry += 256 * b58[it1] >>> 0;
            b58[it1] = carry % BASE2 >>> 0;
            carry = carry / BASE2 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          pbegin++;
        }
        var it2 = size3 - length;
        while (it2 !== size3 && b58[it2] === 0) {
          it2++;
        }
        var str2 = LEADER.repeat(zeroes);
        for (; it2 < size3; ++it2) {
          str2 += ALPHABET.charAt(b58[it2]);
        }
        return str2;
      }
      function decodeUnsafe(source) {
        if (typeof source !== "string") {
          throw new TypeError("Expected String");
        }
        if (source.length === 0) {
          return new Uint8Array();
        }
        var psz = 0;
        var zeroes = 0;
        var length = 0;
        while (source[psz] === LEADER) {
          zeroes++;
          psz++;
        }
        var size3 = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size3);
        while (source[psz]) {
          var carry = BASE_MAP[source.charCodeAt(psz)];
          if (carry === 255) {
            return;
          }
          var i2 = 0;
          for (var it3 = size3 - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
            carry += BASE2 * b256[it3] >>> 0;
            b256[it3] = carry % 256 >>> 0;
            carry = carry / 256 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          psz++;
        }
        var it4 = size3 - length;
        while (it4 !== size3 && b256[it4] === 0) {
          it4++;
        }
        var vch = new Uint8Array(zeroes + (size3 - it4));
        var j2 = zeroes;
        while (it4 !== size3) {
          vch[j2++] = b256[it4++];
        }
        return vch;
      }
      function decode(string) {
        var buffer2 = decodeUnsafe(string);
        if (buffer2) {
          return buffer2;
        }
        throw new Error("Non-base" + BASE2 + " character");
      }
      return {
        encode,
        decodeUnsafe,
        decode
      };
    }
    module2.exports = base2;
  }
});

// node_modules/bs58/index.js
var require_bs58 = __commonJS({
  "node_modules/bs58/index.js"(exports2, module2) {
    "use strict";
    var basex = require_src();
    var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    module2.exports = basex(ALPHABET);
  }
});

// node_modules/kind-of/index.js
var require_kind_of = __commonJS({
  "node_modules/kind-of/index.js"(exports2, module2) {
    "use strict";
    var toString = Object.prototype.toString;
    module2.exports = function kindOf(val) {
      if (val === void 0)
        return "undefined";
      if (val === null)
        return "null";
      var type = typeof val;
      if (type === "boolean")
        return "boolean";
      if (type === "string")
        return "string";
      if (type === "number")
        return "number";
      if (type === "symbol")
        return "symbol";
      if (type === "function") {
        return isGeneratorFn(val) ? "generatorfunction" : "function";
      }
      if (isArray(val))
        return "array";
      if (isBuffer(val))
        return "buffer";
      if (isArguments(val))
        return "arguments";
      if (isDate(val))
        return "date";
      if (isError(val))
        return "error";
      if (isRegexp(val))
        return "regexp";
      switch (ctorName(val)) {
        case "Symbol":
          return "symbol";
        case "Promise":
          return "promise";
        case "WeakMap":
          return "weakmap";
        case "WeakSet":
          return "weakset";
        case "Map":
          return "map";
        case "Set":
          return "set";
        case "Int8Array":
          return "int8array";
        case "Uint8Array":
          return "uint8array";
        case "Uint8ClampedArray":
          return "uint8clampedarray";
        case "Int16Array":
          return "int16array";
        case "Uint16Array":
          return "uint16array";
        case "Int32Array":
          return "int32array";
        case "Uint32Array":
          return "uint32array";
        case "Float32Array":
          return "float32array";
        case "Float64Array":
          return "float64array";
      }
      if (isGeneratorObj(val)) {
        return "generator";
      }
      type = toString.call(val);
      switch (type) {
        case "[object Object]":
          return "object";
        case "[object Map Iterator]":
          return "mapiterator";
        case "[object Set Iterator]":
          return "setiterator";
        case "[object String Iterator]":
          return "stringiterator";
        case "[object Array Iterator]":
          return "arrayiterator";
      }
      return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
    };
    function ctorName(val) {
      return typeof val.constructor === "function" ? val.constructor.name : null;
    }
    function isArray(val) {
      if (Array.isArray)
        return Array.isArray(val);
      return val instanceof Array;
    }
    function isError(val) {
      return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
    }
    function isDate(val) {
      if (val instanceof Date)
        return true;
      return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
    }
    function isRegexp(val) {
      if (val instanceof RegExp)
        return true;
      return typeof val.flags === "string" && typeof val.ignoreCase === "boolean" && typeof val.multiline === "boolean" && typeof val.global === "boolean";
    }
    function isGeneratorFn(name, val) {
      return ctorName(name) === "GeneratorFunction";
    }
    function isGeneratorObj(val) {
      return typeof val.throw === "function" && typeof val.return === "function" && typeof val.next === "function";
    }
    function isArguments(val) {
      try {
        if (typeof val.length === "number" && typeof val.callee === "function") {
          return true;
        }
      } catch (err) {
        if (err.message.indexOf("callee") !== -1) {
          return true;
        }
      }
      return false;
    }
    function isBuffer(val) {
      if (val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
      }
      return false;
    }
  }
});

// node_modules/is-extendable/index.js
var require_is_extendable = __commonJS({
  "node_modules/is-extendable/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function isExtendable(val) {
      return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
    };
  }
});

// node_modules/extend-shallow/index.js
var require_extend_shallow = __commonJS({
  "node_modules/extend-shallow/index.js"(exports2, module2) {
    "use strict";
    var isObject = require_is_extendable();
    module2.exports = function extend(o) {
      if (!isObject(o)) {
        o = {};
      }
      var len = arguments.length;
      for (var i = 1; i < len; i++) {
        var obj = arguments[i];
        if (isObject(obj)) {
          assign(o, obj);
        }
      }
      return o;
    };
    function assign(a, b) {
      for (var key in b) {
        if (hasOwn(b, key)) {
          a[key] = b[key];
        }
      }
    }
    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  }
});

// node_modules/section-matter/index.js
var require_section_matter = __commonJS({
  "node_modules/section-matter/index.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var extend = require_extend_shallow();
    module2.exports = function(input, options2) {
      if (typeof options2 === "function") {
        options2 = { parse: options2 };
      }
      var file6 = toObject(input);
      var defaults = { section_delimiter: "---", parse: identity };
      var opts = extend({}, defaults, options2);
      var delim = opts.section_delimiter;
      var lines = file6.content.split(/\r?\n/);
      var sections = null;
      var section = createSection();
      var content = [];
      var stack = [];
      function initSections(val) {
        file6.content = val;
        sections = [];
        content = [];
      }
      function closeSection(val) {
        if (stack.length) {
          section.key = getKey(stack[0], delim);
          section.content = val;
          opts.parse(section, sections);
          sections.push(section);
          section = createSection();
          content = [];
          stack = [];
        }
      }
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var len = stack.length;
        var ln = line.trim();
        if (isDelimiter(ln, delim)) {
          if (ln.length === 3 && i !== 0) {
            if (len === 0 || len === 2) {
              content.push(line);
              continue;
            }
            stack.push(ln);
            section.data = content.join("\n");
            content = [];
            continue;
          }
          if (sections === null) {
            initSections(content.join("\n"));
          }
          if (len === 2) {
            closeSection(content.join("\n"));
          }
          stack.push(ln);
          continue;
        }
        content.push(line);
      }
      if (sections === null) {
        initSections(content.join("\n"));
      } else {
        closeSection(content.join("\n"));
      }
      file6.sections = sections;
      return file6;
    };
    function isDelimiter(line, delim) {
      if (line.slice(0, delim.length) !== delim) {
        return false;
      }
      if (line.charAt(delim.length + 1) === delim.slice(-1)) {
        return false;
      }
      return true;
    }
    function toObject(input) {
      if (typeOf(input) !== "object") {
        input = { content: input };
      }
      if (typeof input.content !== "string" && !isBuffer(input.content)) {
        throw new TypeError("expected a buffer or string");
      }
      input.content = input.content.toString();
      input.sections = [];
      return input;
    }
    function getKey(val, delim) {
      return val ? val.slice(delim.length).trim() : "";
    }
    function createSection() {
      return { key: "", data: "", content: "" };
    }
    function identity(val) {
      return val;
    }
    function isBuffer(val) {
      if (val && val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
      }
      return false;
    }
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/common.js
var require_common = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/common.js"(exports2, module2) {
    "use strict";
    function isNothing(subject) {
      return typeof subject === "undefined" || subject === null;
    }
    function isObject(subject) {
      return typeof subject === "object" && subject !== null;
    }
    function toArray(sequence) {
      if (Array.isArray(sequence))
        return sequence;
      else if (isNothing(sequence))
        return [];
      return [sequence];
    }
    function extend(target, source) {
      var index2, length, key, sourceKeys;
      if (source) {
        sourceKeys = Object.keys(source);
        for (index2 = 0, length = sourceKeys.length; index2 < length; index2 += 1) {
          key = sourceKeys[index2];
          target[key] = source[key];
        }
      }
      return target;
    }
    function repeat(string, count) {
      var result = "", cycle;
      for (cycle = 0; cycle < count; cycle += 1) {
        result += string;
      }
      return result;
    }
    function isNegativeZero(number2) {
      return number2 === 0 && Number.NEGATIVE_INFINITY === 1 / number2;
    }
    module2.exports.isNothing = isNothing;
    module2.exports.isObject = isObject;
    module2.exports.toArray = toArray;
    module2.exports.repeat = repeat;
    module2.exports.isNegativeZero = isNegativeZero;
    module2.exports.extend = extend;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/exception.js
var require_exception = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/exception.js"(exports2, module2) {
    "use strict";
    function YAMLException(reason, mark) {
      Error.call(this);
      this.name = "YAMLException";
      this.reason = reason;
      this.mark = mark;
      this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "");
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = new Error().stack || "";
      }
    }
    YAMLException.prototype = Object.create(Error.prototype);
    YAMLException.prototype.constructor = YAMLException;
    YAMLException.prototype.toString = function toString(compact) {
      var result = this.name + ": ";
      result += this.reason || "(unknown reason)";
      if (!compact && this.mark) {
        result += " " + this.mark.toString();
      }
      return result;
    };
    module2.exports = YAMLException;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/mark.js
var require_mark = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/mark.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    function Mark(name, buffer2, position, line, column) {
      this.name = name;
      this.buffer = buffer2;
      this.position = position;
      this.line = line;
      this.column = column;
    }
    Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
      var head, start, tail, end, snippet;
      if (!this.buffer)
        return null;
      indent = indent || 4;
      maxLength = maxLength || 75;
      head = "";
      start = this.position;
      while (start > 0 && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start - 1)) === -1) {
        start -= 1;
        if (this.position - start > maxLength / 2 - 1) {
          head = " ... ";
          start += 5;
          break;
        }
      }
      tail = "";
      end = this.position;
      while (end < this.buffer.length && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end)) === -1) {
        end += 1;
        if (end - this.position > maxLength / 2 - 1) {
          tail = " ... ";
          end -= 5;
          break;
        }
      }
      snippet = this.buffer.slice(start, end);
      return common.repeat(" ", indent) + head + snippet + tail + "\n" + common.repeat(" ", indent + this.position - start + head.length) + "^";
    };
    Mark.prototype.toString = function toString(compact) {
      var snippet, where = "";
      if (this.name) {
        where += 'in "' + this.name + '" ';
      }
      where += "at line " + (this.line + 1) + ", column " + (this.column + 1);
      if (!compact) {
        snippet = this.getSnippet();
        if (snippet) {
          where += ":\n" + snippet;
        }
      }
      return where;
    };
    module2.exports = Mark;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type.js
var require_type = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type.js"(exports2, module2) {
    "use strict";
    var YAMLException = require_exception();
    var TYPE_CONSTRUCTOR_OPTIONS = [
      "kind",
      "resolve",
      "construct",
      "instanceOf",
      "predicate",
      "represent",
      "defaultStyle",
      "styleAliases"
    ];
    var YAML_NODE_KINDS = [
      "scalar",
      "sequence",
      "mapping"
    ];
    function compileStyleAliases(map) {
      var result = {};
      if (map !== null) {
        Object.keys(map).forEach(function(style) {
          map[style].forEach(function(alias) {
            result[String(alias)] = style;
          });
        });
      }
      return result;
    }
    function Type(tag, options2) {
      options2 = options2 || {};
      Object.keys(options2).forEach(function(name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
          throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
      });
      this.tag = tag;
      this.kind = options2["kind"] || null;
      this.resolve = options2["resolve"] || function() {
        return true;
      };
      this.construct = options2["construct"] || function(data) {
        return data;
      };
      this.instanceOf = options2["instanceOf"] || null;
      this.predicate = options2["predicate"] || null;
      this.represent = options2["represent"] || null;
      this.defaultStyle = options2["defaultStyle"] || null;
      this.styleAliases = compileStyleAliases(options2["styleAliases"] || null);
      if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
      }
    }
    module2.exports = Type;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema.js
var require_schema = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var Type = require_type();
    function compileList(schema, name, result) {
      var exclude = [];
      schema.include.forEach(function(includedSchema) {
        result = compileList(includedSchema, name, result);
      });
      schema[name].forEach(function(currentType) {
        result.forEach(function(previousType, previousIndex) {
          if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
            exclude.push(previousIndex);
          }
        });
        result.push(currentType);
      });
      return result.filter(function(type, index2) {
        return exclude.indexOf(index2) === -1;
      });
    }
    function compileMap() {
      var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {}
      }, index2, length;
      function collectType(type) {
        result[type.kind][type.tag] = result["fallback"][type.tag] = type;
      }
      for (index2 = 0, length = arguments.length; index2 < length; index2 += 1) {
        arguments[index2].forEach(collectType);
      }
      return result;
    }
    function Schema(definition) {
      this.include = definition.include || [];
      this.implicit = definition.implicit || [];
      this.explicit = definition.explicit || [];
      this.implicit.forEach(function(type) {
        if (type.loadKind && type.loadKind !== "scalar") {
          throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        }
      });
      this.compiledImplicit = compileList(this, "implicit", []);
      this.compiledExplicit = compileList(this, "explicit", []);
      this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
    }
    Schema.DEFAULT = null;
    Schema.create = function createSchema() {
      var schemas, types;
      switch (arguments.length) {
        case 1:
          schemas = Schema.DEFAULT;
          types = arguments[0];
          break;
        case 2:
          schemas = arguments[0];
          types = arguments[1];
          break;
        default:
          throw new YAMLException("Wrong number of arguments for Schema.create function");
      }
      schemas = common.toArray(schemas);
      types = common.toArray(types);
      if (!schemas.every(function(schema) {
        return schema instanceof Schema;
      })) {
        throw new YAMLException("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
      }
      if (!types.every(function(type) {
        return type instanceof Type;
      })) {
        throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
      return new Schema({
        include: schemas,
        explicit: types
      });
    };
    module2.exports = Schema;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/str.js
var require_str = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/str.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:str", {
      kind: "scalar",
      construct: function(data) {
        return data !== null ? data : "";
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/seq.js
var require_seq = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/seq.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:seq", {
      kind: "sequence",
      construct: function(data) {
        return data !== null ? data : [];
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/map.js
var require_map = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/map.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:map", {
      kind: "mapping",
      construct: function(data) {
        return data !== null ? data : {};
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/failsafe.js
var require_failsafe = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/failsafe.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      explicit: [
        require_str(),
        require_seq(),
        require_map()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/null.js
var require_null = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/null.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlNull(data) {
      if (data === null)
        return true;
      var max = data.length;
      return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
    }
    function constructYamlNull() {
      return null;
    }
    function isNull(object) {
      return object === null;
    }
    module2.exports = new Type("tag:yaml.org,2002:null", {
      kind: "scalar",
      resolve: resolveYamlNull,
      construct: constructYamlNull,
      predicate: isNull,
      represent: {
        canonical: function() {
          return "~";
        },
        lowercase: function() {
          return "null";
        },
        uppercase: function() {
          return "NULL";
        },
        camelcase: function() {
          return "Null";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/bool.js
var require_bool = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/bool.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlBoolean(data) {
      if (data === null)
        return false;
      var max = data.length;
      return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
    }
    function constructYamlBoolean(data) {
      return data === "true" || data === "True" || data === "TRUE";
    }
    function isBoolean(object) {
      return Object.prototype.toString.call(object) === "[object Boolean]";
    }
    module2.exports = new Type("tag:yaml.org,2002:bool", {
      kind: "scalar",
      resolve: resolveYamlBoolean,
      construct: constructYamlBoolean,
      predicate: isBoolean,
      represent: {
        lowercase: function(object) {
          return object ? "true" : "false";
        },
        uppercase: function(object) {
          return object ? "TRUE" : "FALSE";
        },
        camelcase: function(object) {
          return object ? "True" : "False";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/int.js
var require_int = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/int.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var Type = require_type();
    function isHexCode(c) {
      return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
    }
    function isOctCode(c) {
      return 48 <= c && c <= 55;
    }
    function isDecCode(c) {
      return 48 <= c && c <= 57;
    }
    function resolveYamlInteger(data) {
      if (data === null)
        return false;
      var max = data.length, index2 = 0, hasDigits = false, ch;
      if (!max)
        return false;
      ch = data[index2];
      if (ch === "-" || ch === "+") {
        ch = data[++index2];
      }
      if (ch === "0") {
        if (index2 + 1 === max)
          return true;
        ch = data[++index2];
        if (ch === "b") {
          index2++;
          for (; index2 < max; index2++) {
            ch = data[index2];
            if (ch === "_")
              continue;
            if (ch !== "0" && ch !== "1")
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        if (ch === "x") {
          index2++;
          for (; index2 < max; index2++) {
            ch = data[index2];
            if (ch === "_")
              continue;
            if (!isHexCode(data.charCodeAt(index2)))
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        for (; index2 < max; index2++) {
          ch = data[index2];
          if (ch === "_")
            continue;
          if (!isOctCode(data.charCodeAt(index2)))
            return false;
          hasDigits = true;
        }
        return hasDigits && ch !== "_";
      }
      if (ch === "_")
        return false;
      for (; index2 < max; index2++) {
        ch = data[index2];
        if (ch === "_")
          continue;
        if (ch === ":")
          break;
        if (!isDecCode(data.charCodeAt(index2))) {
          return false;
        }
        hasDigits = true;
      }
      if (!hasDigits || ch === "_")
        return false;
      if (ch !== ":")
        return true;
      return /^(:[0-5]?[0-9])+$/.test(data.slice(index2));
    }
    function constructYamlInteger(data) {
      var value = data, sign = 1, ch, base2, digits = [];
      if (value.indexOf("_") !== -1) {
        value = value.replace(/_/g, "");
      }
      ch = value[0];
      if (ch === "-" || ch === "+") {
        if (ch === "-")
          sign = -1;
        value = value.slice(1);
        ch = value[0];
      }
      if (value === "0")
        return 0;
      if (ch === "0") {
        if (value[1] === "b")
          return sign * parseInt(value.slice(2), 2);
        if (value[1] === "x")
          return sign * parseInt(value, 16);
        return sign * parseInt(value, 8);
      }
      if (value.indexOf(":") !== -1) {
        value.split(":").forEach(function(v) {
          digits.unshift(parseInt(v, 10));
        });
        value = 0;
        base2 = 1;
        digits.forEach(function(d) {
          value += d * base2;
          base2 *= 60;
        });
        return sign * value;
      }
      return sign * parseInt(value, 10);
    }
    function isInteger(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
    }
    module2.exports = new Type("tag:yaml.org,2002:int", {
      kind: "scalar",
      resolve: resolveYamlInteger,
      construct: constructYamlInteger,
      predicate: isInteger,
      represent: {
        binary: function(obj) {
          return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        },
        octal: function(obj) {
          return obj >= 0 ? "0" + obj.toString(8) : "-0" + obj.toString(8).slice(1);
        },
        decimal: function(obj) {
          return obj.toString(10);
        },
        /* eslint-disable max-len */
        hexadecimal: function(obj) {
          return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        }
      },
      defaultStyle: "decimal",
      styleAliases: {
        binary: [2, "bin"],
        octal: [8, "oct"],
        decimal: [10, "dec"],
        hexadecimal: [16, "hex"]
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/float.js
var require_float = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/float.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var Type = require_type();
    var YAML_FLOAT_PATTERN = new RegExp(
      // 2.5e4, 2.5 and integers
      "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
    );
    function resolveYamlFloat(data) {
      if (data === null)
        return false;
      if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === "_") {
        return false;
      }
      return true;
    }
    function constructYamlFloat(data) {
      var value, sign, base2, digits;
      value = data.replace(/_/g, "").toLowerCase();
      sign = value[0] === "-" ? -1 : 1;
      digits = [];
      if ("+-".indexOf(value[0]) >= 0) {
        value = value.slice(1);
      }
      if (value === ".inf") {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
      } else if (value === ".nan") {
        return NaN;
      } else if (value.indexOf(":") >= 0) {
        value.split(":").forEach(function(v) {
          digits.unshift(parseFloat(v, 10));
        });
        value = 0;
        base2 = 1;
        digits.forEach(function(d) {
          value += d * base2;
          base2 *= 60;
        });
        return sign * value;
      }
      return sign * parseFloat(value, 10);
    }
    var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
    function representYamlFloat(object, style) {
      var res;
      if (isNaN(object)) {
        switch (style) {
          case "lowercase":
            return ".nan";
          case "uppercase":
            return ".NAN";
          case "camelcase":
            return ".NaN";
        }
      } else if (Number.POSITIVE_INFINITY === object) {
        switch (style) {
          case "lowercase":
            return ".inf";
          case "uppercase":
            return ".INF";
          case "camelcase":
            return ".Inf";
        }
      } else if (Number.NEGATIVE_INFINITY === object) {
        switch (style) {
          case "lowercase":
            return "-.inf";
          case "uppercase":
            return "-.INF";
          case "camelcase":
            return "-.Inf";
        }
      } else if (common.isNegativeZero(object)) {
        return "-0.0";
      }
      res = object.toString(10);
      return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
    }
    function isFloat(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
    }
    module2.exports = new Type("tag:yaml.org,2002:float", {
      kind: "scalar",
      resolve: resolveYamlFloat,
      construct: constructYamlFloat,
      predicate: isFloat,
      represent: representYamlFloat,
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/json.js
var require_json = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/json.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_failsafe()
      ],
      implicit: [
        require_null(),
        require_bool(),
        require_int(),
        require_float()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/core.js
var require_core = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/core.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_json()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/timestamp.js
var require_timestamp = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/timestamp.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var YAML_DATE_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
    );
    var YAML_TIMESTAMP_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
    );
    function resolveYamlTimestamp(data) {
      if (data === null)
        return false;
      if (YAML_DATE_REGEXP.exec(data) !== null)
        return true;
      if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
        return true;
      return false;
    }
    function constructYamlTimestamp(data) {
      var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
      match = YAML_DATE_REGEXP.exec(data);
      if (match === null)
        match = YAML_TIMESTAMP_REGEXP.exec(data);
      if (match === null)
        throw new Error("Date resolve error");
      year = +match[1];
      month = +match[2] - 1;
      day = +match[3];
      if (!match[4]) {
        return new Date(Date.UTC(year, month, day));
      }
      hour = +match[4];
      minute = +match[5];
      second = +match[6];
      if (match[7]) {
        fraction = match[7].slice(0, 3);
        while (fraction.length < 3) {
          fraction += "0";
        }
        fraction = +fraction;
      }
      if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 6e4;
        if (match[9] === "-")
          delta = -delta;
      }
      date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
      if (delta)
        date.setTime(date.getTime() - delta);
      return date;
    }
    function representYamlTimestamp(object) {
      return object.toISOString();
    }
    module2.exports = new Type("tag:yaml.org,2002:timestamp", {
      kind: "scalar",
      resolve: resolveYamlTimestamp,
      construct: constructYamlTimestamp,
      instanceOf: Date,
      represent: representYamlTimestamp
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/merge.js
var require_merge = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/merge.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlMerge(data) {
      return data === "<<" || data === null;
    }
    module2.exports = new Type("tag:yaml.org,2002:merge", {
      kind: "scalar",
      resolve: resolveYamlMerge
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/binary.js
var require_binary = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/binary.js"(exports2, module2) {
    "use strict";
    var NodeBuffer;
    try {
      _require = require;
      NodeBuffer = _require("buffer").Buffer;
    } catch (__) {
    }
    var _require;
    var Type = require_type();
    var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    function resolveYamlBinary(data) {
      if (data === null)
        return false;
      var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        code = map.indexOf(data.charAt(idx));
        if (code > 64)
          continue;
        if (code < 0)
          return false;
        bitlen += 6;
      }
      return bitlen % 8 === 0;
    }
    function constructYamlBinary(data) {
      var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map = BASE64_MAP, bits = 0, result = [];
      for (idx = 0; idx < max; idx++) {
        if (idx % 4 === 0 && idx) {
          result.push(bits >> 16 & 255);
          result.push(bits >> 8 & 255);
          result.push(bits & 255);
        }
        bits = bits << 6 | map.indexOf(input.charAt(idx));
      }
      tailbits = max % 4 * 6;
      if (tailbits === 0) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
      } else if (tailbits === 18) {
        result.push(bits >> 10 & 255);
        result.push(bits >> 2 & 255);
      } else if (tailbits === 12) {
        result.push(bits >> 4 & 255);
      }
      if (NodeBuffer) {
        return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
      }
      return result;
    }
    function representYamlBinary(object) {
      var result = "", bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        if (idx % 3 === 0 && idx) {
          result += map[bits >> 18 & 63];
          result += map[bits >> 12 & 63];
          result += map[bits >> 6 & 63];
          result += map[bits & 63];
        }
        bits = (bits << 8) + object[idx];
      }
      tail = max % 3;
      if (tail === 0) {
        result += map[bits >> 18 & 63];
        result += map[bits >> 12 & 63];
        result += map[bits >> 6 & 63];
        result += map[bits & 63];
      } else if (tail === 2) {
        result += map[bits >> 10 & 63];
        result += map[bits >> 4 & 63];
        result += map[bits << 2 & 63];
        result += map[64];
      } else if (tail === 1) {
        result += map[bits >> 2 & 63];
        result += map[bits << 4 & 63];
        result += map[64];
        result += map[64];
      }
      return result;
    }
    function isBinary(object) {
      return NodeBuffer && NodeBuffer.isBuffer(object);
    }
    module2.exports = new Type("tag:yaml.org,2002:binary", {
      kind: "scalar",
      resolve: resolveYamlBinary,
      construct: constructYamlBinary,
      predicate: isBinary,
      represent: representYamlBinary
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/omap.js
var require_omap = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/omap.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var _toString = Object.prototype.toString;
    function resolveYamlOmap(data) {
      if (data === null)
        return true;
      var objectKeys = [], index2, length, pair, pairKey, pairHasKey, object = data;
      for (index2 = 0, length = object.length; index2 < length; index2 += 1) {
        pair = object[index2];
        pairHasKey = false;
        if (_toString.call(pair) !== "[object Object]")
          return false;
        for (pairKey in pair) {
          if (_hasOwnProperty.call(pair, pairKey)) {
            if (!pairHasKey)
              pairHasKey = true;
            else
              return false;
          }
        }
        if (!pairHasKey)
          return false;
        if (objectKeys.indexOf(pairKey) === -1)
          objectKeys.push(pairKey);
        else
          return false;
      }
      return true;
    }
    function constructYamlOmap(data) {
      return data !== null ? data : [];
    }
    module2.exports = new Type("tag:yaml.org,2002:omap", {
      kind: "sequence",
      resolve: resolveYamlOmap,
      construct: constructYamlOmap
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/pairs.js
var require_pairs = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/pairs.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _toString = Object.prototype.toString;
    function resolveYamlPairs(data) {
      if (data === null)
        return true;
      var index2, length, pair, keys, result, object = data;
      result = new Array(object.length);
      for (index2 = 0, length = object.length; index2 < length; index2 += 1) {
        pair = object[index2];
        if (_toString.call(pair) !== "[object Object]")
          return false;
        keys = Object.keys(pair);
        if (keys.length !== 1)
          return false;
        result[index2] = [keys[0], pair[keys[0]]];
      }
      return true;
    }
    function constructYamlPairs(data) {
      if (data === null)
        return [];
      var index2, length, pair, keys, result, object = data;
      result = new Array(object.length);
      for (index2 = 0, length = object.length; index2 < length; index2 += 1) {
        pair = object[index2];
        keys = Object.keys(pair);
        result[index2] = [keys[0], pair[keys[0]]];
      }
      return result;
    }
    module2.exports = new Type("tag:yaml.org,2002:pairs", {
      kind: "sequence",
      resolve: resolveYamlPairs,
      construct: constructYamlPairs
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/set.js
var require_set = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/set.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function resolveYamlSet(data) {
      if (data === null)
        return true;
      var key, object = data;
      for (key in object) {
        if (_hasOwnProperty.call(object, key)) {
          if (object[key] !== null)
            return false;
        }
      }
      return true;
    }
    function constructYamlSet(data) {
      return data !== null ? data : {};
    }
    module2.exports = new Type("tag:yaml.org,2002:set", {
      kind: "mapping",
      resolve: resolveYamlSet,
      construct: constructYamlSet
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_safe.js
var require_default_safe = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_safe.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_core()
      ],
      implicit: [
        require_timestamp(),
        require_merge()
      ],
      explicit: [
        require_binary(),
        require_omap(),
        require_pairs(),
        require_set()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/undefined.js
var require_undefined = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/undefined.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveJavascriptUndefined() {
      return true;
    }
    function constructJavascriptUndefined() {
      return void 0;
    }
    function representJavascriptUndefined() {
      return "";
    }
    function isUndefined(object) {
      return typeof object === "undefined";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/undefined", {
      kind: "scalar",
      resolve: resolveJavascriptUndefined,
      construct: constructJavascriptUndefined,
      predicate: isUndefined,
      represent: representJavascriptUndefined
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/regexp.js
var require_regexp = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/regexp.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveJavascriptRegExp(data) {
      if (data === null)
        return false;
      if (data.length === 0)
        return false;
      var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
      if (regexp[0] === "/") {
        if (tail)
          modifiers = tail[1];
        if (modifiers.length > 3)
          return false;
        if (regexp[regexp.length - modifiers.length - 1] !== "/")
          return false;
      }
      return true;
    }
    function constructJavascriptRegExp(data) {
      var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
      if (regexp[0] === "/") {
        if (tail)
          modifiers = tail[1];
        regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
      }
      return new RegExp(regexp, modifiers);
    }
    function representJavascriptRegExp(object) {
      var result = "/" + object.source + "/";
      if (object.global)
        result += "g";
      if (object.multiline)
        result += "m";
      if (object.ignoreCase)
        result += "i";
      return result;
    }
    function isRegExp(object) {
      return Object.prototype.toString.call(object) === "[object RegExp]";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/regexp", {
      kind: "scalar",
      resolve: resolveJavascriptRegExp,
      construct: constructJavascriptRegExp,
      predicate: isRegExp,
      represent: representJavascriptRegExp
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/function.js
var require_function = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/function.js"(exports2, module2) {
    "use strict";
    var esprima;
    try {
      _require = require;
      esprima = _require("esprima");
    } catch (_) {
      if (typeof window !== "undefined")
        esprima = window.esprima;
    }
    var _require;
    var Type = require_type();
    function resolveJavascriptFunction(data) {
      if (data === null)
        return false;
      try {
        var source = "(" + data + ")", ast = esprima.parse(source, { range: true });
        if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    function constructJavascriptFunction(data) {
      var source = "(" + data + ")", ast = esprima.parse(source, { range: true }), params = [], body;
      if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
        throw new Error("Failed to resolve function");
      }
      ast.body[0].expression.params.forEach(function(param) {
        params.push(param.name);
      });
      body = ast.body[0].expression.body.range;
      if (ast.body[0].expression.body.type === "BlockStatement") {
        return new Function(params, source.slice(body[0] + 1, body[1] - 1));
      }
      return new Function(params, "return " + source.slice(body[0], body[1]));
    }
    function representJavascriptFunction(object) {
      return object.toString();
    }
    function isFunction(object) {
      return Object.prototype.toString.call(object) === "[object Function]";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/function", {
      kind: "scalar",
      resolve: resolveJavascriptFunction,
      construct: constructJavascriptFunction,
      predicate: isFunction,
      represent: representJavascriptFunction
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_full.js
var require_default_full = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_full.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = Schema.DEFAULT = new Schema({
      include: [
        require_default_safe()
      ],
      explicit: [
        require_undefined(),
        require_regexp(),
        require_function()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/loader.js
var require_loader = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/loader.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var Mark = require_mark();
    var DEFAULT_SAFE_SCHEMA = require_default_safe();
    var DEFAULT_FULL_SCHEMA = require_default_full();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var CONTEXT_FLOW_IN = 1;
    var CONTEXT_FLOW_OUT = 2;
    var CONTEXT_BLOCK_IN = 3;
    var CONTEXT_BLOCK_OUT = 4;
    var CHOMPING_CLIP = 1;
    var CHOMPING_STRIP = 2;
    var CHOMPING_KEEP = 3;
    var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
    var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
    var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
    var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function is_EOL(c) {
      return c === 10 || c === 13;
    }
    function is_WHITE_SPACE(c) {
      return c === 9 || c === 32;
    }
    function is_WS_OR_EOL(c) {
      return c === 9 || c === 32 || c === 10 || c === 13;
    }
    function is_FLOW_INDICATOR(c) {
      return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
    }
    function fromHexCode(c) {
      var lc;
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      lc = c | 32;
      if (97 <= lc && lc <= 102) {
        return lc - 97 + 10;
      }
      return -1;
    }
    function escapedHexLen(c) {
      if (c === 120) {
        return 2;
      }
      if (c === 117) {
        return 4;
      }
      if (c === 85) {
        return 8;
      }
      return 0;
    }
    function fromDecimalCode(c) {
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      return -1;
    }
    function simpleEscapeSequence(c) {
      return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
    }
    function charFromCodepoint(c) {
      if (c <= 65535) {
        return String.fromCharCode(c);
      }
      return String.fromCharCode(
        (c - 65536 >> 10) + 55296,
        (c - 65536 & 1023) + 56320
      );
    }
    var simpleEscapeCheck = new Array(256);
    var simpleEscapeMap = new Array(256);
    for (i = 0; i < 256; i++) {
      simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
      simpleEscapeMap[i] = simpleEscapeSequence(i);
    }
    var i;
    function State(input, options2) {
      this.input = input;
      this.filename = options2["filename"] || null;
      this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA;
      this.onWarning = options2["onWarning"] || null;
      this.legacy = options2["legacy"] || false;
      this.json = options2["json"] || false;
      this.listener = options2["listener"] || null;
      this.implicitTypes = this.schema.compiledImplicit;
      this.typeMap = this.schema.compiledTypeMap;
      this.length = input.length;
      this.position = 0;
      this.line = 0;
      this.lineStart = 0;
      this.lineIndent = 0;
      this.documents = [];
    }
    function generateError(state, message) {
      return new YAMLException(
        message,
        new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart)
      );
    }
    function throwError(state, message) {
      throw generateError(state, message);
    }
    function throwWarning(state, message) {
      if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
      }
    }
    var directiveHandlers = {
      YAML: function handleYamlDirective(state, name, args) {
        var match, major, minor;
        if (state.version !== null) {
          throwError(state, "duplication of %YAML directive");
        }
        if (args.length !== 1) {
          throwError(state, "YAML directive accepts exactly one argument");
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) {
          throwError(state, "ill-formed argument of the YAML directive");
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
          throwError(state, "unacceptable YAML version of the document");
        }
        state.version = args[0];
        state.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) {
          throwWarning(state, "unsupported YAML version of the document");
        }
      },
      TAG: function handleTagDirective(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
          throwError(state, "TAG directive accepts exactly two arguments");
        }
        handle = args[0];
        prefix = args[1];
        if (!PATTERN_TAG_HANDLE.test(handle)) {
          throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
        }
        if (_hasOwnProperty.call(state.tagMap, handle)) {
          throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }
        if (!PATTERN_TAG_URI.test(prefix)) {
          throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
        }
        state.tagMap[handle] = prefix;
      }
    };
    function captureSegment(state, start, end, checkJson) {
      var _position, _length, _character, _result;
      if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) {
          for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
            _character = _result.charCodeAt(_position);
            if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
              throwError(state, "expected valid JSON character");
            }
          }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
          throwError(state, "the stream contains non-printable characters");
        }
        state.result += _result;
      }
    }
    function mergeMappings(state, destination, source, overridableKeys) {
      var sourceKeys, key, index2, quantity;
      if (!common.isObject(source)) {
        throwError(state, "cannot merge mappings; the provided source object is unacceptable");
      }
      sourceKeys = Object.keys(source);
      for (index2 = 0, quantity = sourceKeys.length; index2 < quantity; index2 += 1) {
        key = sourceKeys[index2];
        if (!_hasOwnProperty.call(destination, key)) {
          destination[key] = source[key];
          overridableKeys[key] = true;
        }
      }
    }
    function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
      var index2, quantity;
      if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for (index2 = 0, quantity = keyNode.length; index2 < quantity; index2 += 1) {
          if (Array.isArray(keyNode[index2])) {
            throwError(state, "nested arrays are not supported inside keys");
          }
          if (typeof keyNode === "object" && _class(keyNode[index2]) === "[object Object]") {
            keyNode[index2] = "[object Object]";
          }
        }
      }
      if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
        keyNode = "[object Object]";
      }
      keyNode = String(keyNode);
      if (_result === null) {
        _result = {};
      }
      if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) {
          for (index2 = 0, quantity = valueNode.length; index2 < quantity; index2 += 1) {
            mergeMappings(state, _result, valueNode[index2], overridableKeys);
          }
        } else {
          mergeMappings(state, _result, valueNode, overridableKeys);
        }
      } else {
        if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
          state.line = startLine || state.line;
          state.position = startPos || state.position;
          throwError(state, "duplicated mapping key");
        }
        _result[keyNode] = valueNode;
        delete overridableKeys[keyNode];
      }
      return _result;
    }
    function readLineBreak(state) {
      var ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 10) {
        state.position++;
      } else if (ch === 13) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 10) {
          state.position++;
        }
      } else {
        throwError(state, "a line break is expected");
      }
      state.line += 1;
      state.lineStart = state.position;
    }
    function skipSeparationSpace(state, allowComments, checkIndent) {
      var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (allowComments && ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 10 && ch !== 13 && ch !== 0);
        }
        if (is_EOL(ch)) {
          readLineBreak(state);
          ch = state.input.charCodeAt(state.position);
          lineBreaks++;
          state.lineIndent = 0;
          while (ch === 32) {
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
          }
        } else {
          break;
        }
      }
      if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, "deficient indentation");
      }
      return lineBreaks;
    }
    function testDocumentSeparator(state) {
      var _position = state.position, ch;
      ch = state.input.charCodeAt(_position);
      if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) {
          return true;
        }
      }
      return false;
    }
    function writeFoldedLines(state, count) {
      if (count === 1) {
        state.result += " ";
      } else if (count > 1) {
        state.result += common.repeat("\n", count - 1);
      }
    }
    function readPlainScalar(state, nodeIndent, withinFlowCollection) {
      var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
      ch = state.input.charCodeAt(state.position);
      if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
        return false;
      }
      if (ch === 63 || ch === 45) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
          return false;
        }
      }
      state.kind = "scalar";
      state.result = "";
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
      while (ch !== 0) {
        if (ch === 58) {
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            break;
          }
        } else if (ch === 35) {
          preceding = state.input.charCodeAt(state.position - 1);
          if (is_WS_OR_EOL(preceding)) {
            break;
          }
        } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
          break;
        } else if (is_EOL(ch)) {
          _line = state.line;
          _lineStart = state.lineStart;
          _lineIndent = state.lineIndent;
          skipSeparationSpace(state, false, -1);
          if (state.lineIndent >= nodeIndent) {
            hasPendingContent = true;
            ch = state.input.charCodeAt(state.position);
            continue;
          } else {
            state.position = captureEnd;
            state.line = _line;
            state.lineStart = _lineStart;
            state.lineIndent = _lineIndent;
            break;
          }
        }
        if (hasPendingContent) {
          captureSegment(state, captureStart, captureEnd, false);
          writeFoldedLines(state, state.line - _line);
          captureStart = captureEnd = state.position;
          hasPendingContent = false;
        }
        if (!is_WHITE_SPACE(ch)) {
          captureEnd = state.position + 1;
        }
        ch = state.input.charCodeAt(++state.position);
      }
      captureSegment(state, captureStart, captureEnd, false);
      if (state.result) {
        return true;
      }
      state.kind = _kind;
      state.result = _result;
      return false;
    }
    function readSingleQuotedScalar(state, nodeIndent) {
      var ch, captureStart, captureEnd;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 39) {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      state.position++;
      captureStart = captureEnd = state.position;
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 39) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);
          if (ch === 39) {
            captureStart = state.position;
            state.position++;
            captureEnd = state.position;
          } else {
            return true;
          }
        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, "unexpected end of the document within a single quoted scalar");
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      throwError(state, "unexpected end of the stream within a single quoted scalar");
    }
    function readDoubleQuotedScalar(state, nodeIndent) {
      var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 34) {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      state.position++;
      captureStart = captureEnd = state.position;
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 34) {
          captureSegment(state, captureStart, state.position, true);
          state.position++;
          return true;
        } else if (ch === 92) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);
          if (is_EOL(ch)) {
            skipSeparationSpace(state, false, nodeIndent);
          } else if (ch < 256 && simpleEscapeCheck[ch]) {
            state.result += simpleEscapeMap[ch];
            state.position++;
          } else if ((tmp = escapedHexLen(ch)) > 0) {
            hexLength = tmp;
            hexResult = 0;
            for (; hexLength > 0; hexLength--) {
              ch = state.input.charCodeAt(++state.position);
              if ((tmp = fromHexCode(ch)) >= 0) {
                hexResult = (hexResult << 4) + tmp;
              } else {
                throwError(state, "expected hexadecimal character");
              }
            }
            state.result += charFromCodepoint(hexResult);
            state.position++;
          } else {
            throwError(state, "unknown escape sequence");
          }
          captureStart = captureEnd = state.position;
        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, "unexpected end of the document within a double quoted scalar");
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      throwError(state, "unexpected end of the stream within a double quoted scalar");
    }
    function readFlowCollection(state, nodeIndent) {
      var readNext = true, _line, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = {}, keyNode, keyTag, valueNode, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 91) {
        terminator = 93;
        isMapping = false;
        _result = [];
      } else if (ch === 123) {
        terminator = 125;
        isMapping = true;
        _result = {};
      } else {
        return false;
      }
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(++state.position);
      while (ch !== 0) {
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
          state.position++;
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = isMapping ? "mapping" : "sequence";
          state.result = _result;
          return true;
        } else if (!readNext) {
          throwError(state, "missed comma between flow collection entries");
        }
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 63) {
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following)) {
            isPair = isExplicitPair = true;
            state.position++;
            skipSeparationSpace(state, true, nodeIndent);
          }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 58) {
          isPair = true;
          ch = state.input.charCodeAt(++state.position);
          skipSeparationSpace(state, true, nodeIndent);
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
          valueNode = state.result;
        }
        if (isMapping) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
        } else if (isPair) {
          _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
        } else {
          _result.push(keyNode);
        }
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === 44) {
          readNext = true;
          ch = state.input.charCodeAt(++state.position);
        } else {
          readNext = false;
        }
      }
      throwError(state, "unexpected end of the stream within a flow collection");
    }
    function readBlockScalar(state, nodeIndent) {
      var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 124) {
        folding = false;
      } else if (ch === 62) {
        folding = true;
      } else {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      while (ch !== 0) {
        ch = state.input.charCodeAt(++state.position);
        if (ch === 43 || ch === 45) {
          if (CHOMPING_CLIP === chomping) {
            chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
          } else {
            throwError(state, "repeat of a chomping mode identifier");
          }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
          if (tmp === 0) {
            throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
          } else if (!detectedIndent) {
            textIndent = nodeIndent + tmp - 1;
            detectedIndent = true;
          } else {
            throwError(state, "repeat of an indentation width identifier");
          }
        } else {
          break;
        }
      }
      if (is_WHITE_SPACE(ch)) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (is_WHITE_SPACE(ch));
        if (ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (!is_EOL(ch) && ch !== 0);
        }
      }
      while (ch !== 0) {
        readLineBreak(state);
        state.lineIndent = 0;
        ch = state.input.charCodeAt(state.position);
        while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }
        if (!detectedIndent && state.lineIndent > textIndent) {
          textIndent = state.lineIndent;
        }
        if (is_EOL(ch)) {
          emptyLines++;
          continue;
        }
        if (state.lineIndent < textIndent) {
          if (chomping === CHOMPING_KEEP) {
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (chomping === CHOMPING_CLIP) {
            if (didReadContent) {
              state.result += "\n";
            }
          }
          break;
        }
        if (folding) {
          if (is_WHITE_SPACE(ch)) {
            atMoreIndented = true;
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (atMoreIndented) {
            atMoreIndented = false;
            state.result += common.repeat("\n", emptyLines + 1);
          } else if (emptyLines === 0) {
            if (didReadContent) {
              state.result += " ";
            }
          } else {
            state.result += common.repeat("\n", emptyLines);
          }
        } else {
          state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        }
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;
        while (!is_EOL(ch) && ch !== 0) {
          ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, state.position, false);
      }
      return true;
    }
    function readBlockSequence(state, nodeIndent) {
      var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        if (ch !== 45) {
          break;
        }
        following = state.input.charCodeAt(state.position + 1);
        if (!is_WS_OR_EOL(following)) {
          break;
        }
        detected = true;
        state.position++;
        if (skipSeparationSpace(state, true, -1)) {
          if (state.lineIndent <= nodeIndent) {
            _result.push(null);
            ch = state.input.charCodeAt(state.position);
            continue;
          }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
          throwError(state, "bad indentation of a sequence entry");
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "sequence";
        state.result = _result;
        return true;
      }
      return false;
    }
    function readBlockMapping(state, nodeIndent, flowIndent) {
      var following, allowCompact, _line, _pos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = {}, keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line;
        _pos = state.position;
        if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
          if (ch === 63) {
            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
              keyTag = keyNode = valueNode = null;
            }
            detected = true;
            atExplicitKey = true;
            allowCompact = true;
          } else if (atExplicitKey) {
            atExplicitKey = false;
            allowCompact = true;
          } else {
            throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
          }
          state.position += 1;
          ch = following;
        } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
          if (state.line === _line) {
            ch = state.input.charCodeAt(state.position);
            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 58) {
              ch = state.input.charCodeAt(++state.position);
              if (!is_WS_OR_EOL(ch)) {
                throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
              }
              if (atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
                keyTag = keyNode = valueNode = null;
              }
              detected = true;
              atExplicitKey = false;
              allowCompact = false;
              keyTag = state.tag;
              keyNode = state.result;
            } else if (detected) {
              throwError(state, "can not read an implicit mapping pair; a colon is missed");
            } else {
              state.tag = _tag;
              state.anchor = _anchor;
              return true;
            }
          } else if (detected) {
            throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
          } else {
            state.tag = _tag;
            state.anchor = _anchor;
            return true;
          }
        } else {
          break;
        }
        if (state.line === _line || state.lineIndent > nodeIndent) {
          if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
            if (atExplicitKey) {
              keyNode = state.result;
            } else {
              valueNode = state.result;
            }
          }
          if (!atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
            keyTag = keyNode = valueNode = null;
          }
          skipSeparationSpace(state, true, -1);
          ch = state.input.charCodeAt(state.position);
        }
        if (state.lineIndent > nodeIndent && ch !== 0) {
          throwError(state, "bad indentation of a mapping entry");
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }
      if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
      }
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "mapping";
        state.result = _result;
      }
      return detected;
    }
    function readTagProperty(state) {
      var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 33)
        return false;
      if (state.tag !== null) {
        throwError(state, "duplication of a tag property");
      }
      ch = state.input.charCodeAt(++state.position);
      if (ch === 60) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);
      } else if (ch === 33) {
        isNamed = true;
        tagHandle = "!!";
        ch = state.input.charCodeAt(++state.position);
      } else {
        tagHandle = "!";
      }
      _position = state.position;
      if (isVerbatim) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && ch !== 62);
        if (state.position < state.length) {
          tagName = state.input.slice(_position, state.position);
          ch = state.input.charCodeAt(++state.position);
        } else {
          throwError(state, "unexpected end of the stream within a verbatim tag");
        }
      } else {
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          if (ch === 33) {
            if (!isNamed) {
              tagHandle = state.input.slice(_position - 1, state.position + 1);
              if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                throwError(state, "named tag handle cannot contain such characters");
              }
              isNamed = true;
              _position = state.position + 1;
            } else {
              throwError(state, "tag suffix cannot contain exclamation marks");
            }
          }
          ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
          throwError(state, "tag suffix cannot contain flow indicator characters");
        }
      }
      if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, "tag name cannot contain such characters: " + tagName);
      }
      if (isVerbatim) {
        state.tag = tagName;
      } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;
      } else if (tagHandle === "!") {
        state.tag = "!" + tagName;
      } else if (tagHandle === "!!") {
        state.tag = "tag:yaml.org,2002:" + tagName;
      } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"');
      }
      return true;
    }
    function readAnchorProperty(state) {
      var _position, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 38)
        return false;
      if (state.anchor !== null) {
        throwError(state, "duplication of an anchor property");
      }
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        throwError(state, "name of an anchor node must contain at least one character");
      }
      state.anchor = state.input.slice(_position, state.position);
      return true;
    }
    function readAlias(state) {
      var _position, alias, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 42)
        return false;
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        throwError(state, "name of an alias node must contain at least one character");
      }
      alias = state.input.slice(_position, state.position);
      if (!_hasOwnProperty.call(state.anchorMap, alias)) {
        throwError(state, 'unidentified alias "' + alias + '"');
      }
      state.result = state.anchorMap[alias];
      skipSeparationSpace(state, true, -1);
      return true;
    }
    function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
      var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, type, flowIndent, blockIndent;
      if (state.listener !== null) {
        state.listener("open", state);
      }
      state.tag = null;
      state.anchor = null;
      state.kind = null;
      state.result = null;
      allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
      if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true;
          if (state.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        }
      }
      if (indentStatus === 1) {
        while (readTagProperty(state) || readAnchorProperty(state)) {
          if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            allowBlockCollections = allowBlockStyles;
            if (state.lineIndent > parentIndent) {
              indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1;
            }
          } else {
            allowBlockCollections = false;
          }
        }
      }
      if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
      }
      if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
          flowIndent = parentIndent;
        } else {
          flowIndent = parentIndent + 1;
        }
        blockIndent = state.position - state.lineStart;
        if (indentStatus === 1) {
          if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
            hasContent = true;
          } else {
            if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
              hasContent = true;
            } else if (readAlias(state)) {
              hasContent = true;
              if (state.tag !== null || state.anchor !== null) {
                throwError(state, "alias node should not have any properties");
              }
            } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
              hasContent = true;
              if (state.tag === null) {
                state.tag = "?";
              }
            }
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else if (indentStatus === 0) {
          hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
        }
      }
      if (state.tag !== null && state.tag !== "!") {
        if (state.tag === "?") {
          if (state.result !== null && state.kind !== "scalar") {
            throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
          }
          for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
            type = state.implicitTypes[typeIndex];
            if (type.resolve(state.result)) {
              state.result = type.construct(state.result);
              state.tag = type.tag;
              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
              }
              break;
            }
          }
        } else if (_hasOwnProperty.call(state.typeMap[state.kind || "fallback"], state.tag)) {
          type = state.typeMap[state.kind || "fallback"][state.tag];
          if (state.result !== null && type.kind !== state.kind) {
            throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
          }
          if (!type.resolve(state.result)) {
            throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
          } else {
            state.result = type.construct(state.result);
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else {
          throwError(state, "unknown tag !<" + state.tag + ">");
        }
      }
      if (state.listener !== null) {
        state.listener("close", state);
      }
      return state.tag !== null || state.anchor !== null || hasContent;
    }
    function readDocument(state) {
      var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
      state.version = null;
      state.checkLineBreaks = state.legacy;
      state.tagMap = {};
      state.anchorMap = {};
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 37) {
          break;
        }
        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];
        if (directiveName.length < 1) {
          throwError(state, "directive name must not be less than one character in length");
        }
        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          if (ch === 35) {
            do {
              ch = state.input.charCodeAt(++state.position);
            } while (ch !== 0 && !is_EOL(ch));
            break;
          }
          if (is_EOL(ch))
            break;
          _position = state.position;
          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          directiveArgs.push(state.input.slice(_position, state.position));
        }
        if (ch !== 0)
          readLineBreak(state);
        if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
          directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
          throwWarning(state, 'unknown document directive "' + directiveName + '"');
        }
      }
      skipSeparationSpace(state, true, -1);
      if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
      } else if (hasDirectives) {
        throwError(state, "directives end mark is expected");
      }
      composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
      skipSeparationSpace(state, true, -1);
      if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, "non-ASCII line breaks are interpreted as content");
      }
      state.documents.push(state.result);
      if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 46) {
          state.position += 3;
          skipSeparationSpace(state, true, -1);
        }
        return;
      }
      if (state.position < state.length - 1) {
        throwError(state, "end of the stream or a document separator is expected");
      } else {
        return;
      }
    }
    function loadDocuments(input, options2) {
      input = String(input);
      options2 = options2 || {};
      if (input.length !== 0) {
        if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
          input += "\n";
        }
        if (input.charCodeAt(0) === 65279) {
          input = input.slice(1);
        }
      }
      var state = new State(input, options2);
      var nullpos = input.indexOf("\0");
      if (nullpos !== -1) {
        state.position = nullpos;
        throwError(state, "null byte is not allowed in input");
      }
      state.input += "\0";
      while (state.input.charCodeAt(state.position) === 32) {
        state.lineIndent += 1;
        state.position += 1;
      }
      while (state.position < state.length - 1) {
        readDocument(state);
      }
      return state.documents;
    }
    function loadAll(input, iterator, options2) {
      if (iterator !== null && typeof iterator === "object" && typeof options2 === "undefined") {
        options2 = iterator;
        iterator = null;
      }
      var documents = loadDocuments(input, options2);
      if (typeof iterator !== "function") {
        return documents;
      }
      for (var index2 = 0, length = documents.length; index2 < length; index2 += 1) {
        iterator(documents[index2]);
      }
    }
    function load(input, options2) {
      var documents = loadDocuments(input, options2);
      if (documents.length === 0) {
        return void 0;
      } else if (documents.length === 1) {
        return documents[0];
      }
      throw new YAMLException("expected a single document in the stream, but found more");
    }
    function safeLoadAll(input, iterator, options2) {
      if (typeof iterator === "object" && iterator !== null && typeof options2 === "undefined") {
        options2 = iterator;
        iterator = null;
      }
      return loadAll(input, iterator, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    function safeLoad(input, options2) {
      return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    module2.exports.loadAll = loadAll;
    module2.exports.load = load;
    module2.exports.safeLoadAll = safeLoadAll;
    module2.exports.safeLoad = safeLoad;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/dumper.js
var require_dumper = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/dumper.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var DEFAULT_FULL_SCHEMA = require_default_full();
    var DEFAULT_SAFE_SCHEMA = require_default_safe();
    var _toString = Object.prototype.toString;
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var CHAR_TAB = 9;
    var CHAR_LINE_FEED = 10;
    var CHAR_CARRIAGE_RETURN = 13;
    var CHAR_SPACE = 32;
    var CHAR_EXCLAMATION = 33;
    var CHAR_DOUBLE_QUOTE = 34;
    var CHAR_SHARP = 35;
    var CHAR_PERCENT = 37;
    var CHAR_AMPERSAND = 38;
    var CHAR_SINGLE_QUOTE = 39;
    var CHAR_ASTERISK = 42;
    var CHAR_COMMA = 44;
    var CHAR_MINUS = 45;
    var CHAR_COLON = 58;
    var CHAR_EQUALS = 61;
    var CHAR_GREATER_THAN = 62;
    var CHAR_QUESTION = 63;
    var CHAR_COMMERCIAL_AT = 64;
    var CHAR_LEFT_SQUARE_BRACKET = 91;
    var CHAR_RIGHT_SQUARE_BRACKET = 93;
    var CHAR_GRAVE_ACCENT = 96;
    var CHAR_LEFT_CURLY_BRACKET = 123;
    var CHAR_VERTICAL_LINE = 124;
    var CHAR_RIGHT_CURLY_BRACKET = 125;
    var ESCAPE_SEQUENCES = {};
    ESCAPE_SEQUENCES[0] = "\\0";
    ESCAPE_SEQUENCES[7] = "\\a";
    ESCAPE_SEQUENCES[8] = "\\b";
    ESCAPE_SEQUENCES[9] = "\\t";
    ESCAPE_SEQUENCES[10] = "\\n";
    ESCAPE_SEQUENCES[11] = "\\v";
    ESCAPE_SEQUENCES[12] = "\\f";
    ESCAPE_SEQUENCES[13] = "\\r";
    ESCAPE_SEQUENCES[27] = "\\e";
    ESCAPE_SEQUENCES[34] = '\\"';
    ESCAPE_SEQUENCES[92] = "\\\\";
    ESCAPE_SEQUENCES[133] = "\\N";
    ESCAPE_SEQUENCES[160] = "\\_";
    ESCAPE_SEQUENCES[8232] = "\\L";
    ESCAPE_SEQUENCES[8233] = "\\P";
    var DEPRECATED_BOOLEANS_SYNTAX = [
      "y",
      "Y",
      "yes",
      "Yes",
      "YES",
      "on",
      "On",
      "ON",
      "n",
      "N",
      "no",
      "No",
      "NO",
      "off",
      "Off",
      "OFF"
    ];
    function compileStyleMap(schema, map) {
      var result, keys, index2, length, tag, style, type;
      if (map === null)
        return {};
      result = {};
      keys = Object.keys(map);
      for (index2 = 0, length = keys.length; index2 < length; index2 += 1) {
        tag = keys[index2];
        style = String(map[tag]);
        if (tag.slice(0, 2) === "!!") {
          tag = "tag:yaml.org,2002:" + tag.slice(2);
        }
        type = schema.compiledTypeMap["fallback"][tag];
        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
          style = type.styleAliases[style];
        }
        result[tag] = style;
      }
      return result;
    }
    function encodeHex(character) {
      var string, handle, length;
      string = character.toString(16).toUpperCase();
      if (character <= 255) {
        handle = "x";
        length = 2;
      } else if (character <= 65535) {
        handle = "u";
        length = 4;
      } else if (character <= 4294967295) {
        handle = "U";
        length = 8;
      } else {
        throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");
      }
      return "\\" + handle + common.repeat("0", length - string.length) + string;
    }
    function State(options2) {
      this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA;
      this.indent = Math.max(1, options2["indent"] || 2);
      this.noArrayIndent = options2["noArrayIndent"] || false;
      this.skipInvalid = options2["skipInvalid"] || false;
      this.flowLevel = common.isNothing(options2["flowLevel"]) ? -1 : options2["flowLevel"];
      this.styleMap = compileStyleMap(this.schema, options2["styles"] || null);
      this.sortKeys = options2["sortKeys"] || false;
      this.lineWidth = options2["lineWidth"] || 80;
      this.noRefs = options2["noRefs"] || false;
      this.noCompatMode = options2["noCompatMode"] || false;
      this.condenseFlow = options2["condenseFlow"] || false;
      this.implicitTypes = this.schema.compiledImplicit;
      this.explicitTypes = this.schema.compiledExplicit;
      this.tag = null;
      this.result = "";
      this.duplicates = [];
      this.usedDuplicates = null;
    }
    function indentString(string, spaces) {
      var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
      while (position < length) {
        next = string.indexOf("\n", position);
        if (next === -1) {
          line = string.slice(position);
          position = length;
        } else {
          line = string.slice(position, next + 1);
          position = next + 1;
        }
        if (line.length && line !== "\n")
          result += ind;
        result += line;
      }
      return result;
    }
    function generateNextLine(state, level) {
      return "\n" + common.repeat(" ", state.indent * level);
    }
    function testImplicitResolving(state, str2) {
      var index2, length, type;
      for (index2 = 0, length = state.implicitTypes.length; index2 < length; index2 += 1) {
        type = state.implicitTypes[index2];
        if (type.resolve(str2)) {
          return true;
        }
      }
      return false;
    }
    function isWhitespace(c) {
      return c === CHAR_SPACE || c === CHAR_TAB;
    }
    function isPrintable(c) {
      return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== 65279 || 65536 <= c && c <= 1114111;
    }
    function isNsChar(c) {
      return isPrintable(c) && !isWhitespace(c) && c !== 65279 && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
    }
    function isPlainSafe(c, prev) {
      return isPrintable(c) && c !== 65279 && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_COLON && (c !== CHAR_SHARP || prev && isNsChar(prev));
    }
    function isPlainSafeFirst(c) {
      return isPrintable(c) && c !== 65279 && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
    }
    function needIndentIndicator(string) {
      var leadingSpaceRe = /^\n* /;
      return leadingSpaceRe.test(string);
    }
    var STYLE_PLAIN = 1;
    var STYLE_SINGLE = 2;
    var STYLE_LITERAL = 3;
    var STYLE_FOLDED = 4;
    var STYLE_DOUBLE = 5;
    function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
      var i;
      var char, prev_char;
      var hasLineBreak = false;
      var hasFoldableLine = false;
      var shouldTrackWidth = lineWidth !== -1;
      var previousLineBreak = -1;
      var plain = isPlainSafeFirst(string.charCodeAt(0)) && !isWhitespace(string.charCodeAt(string.length - 1));
      if (singleLineOnly) {
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
          plain = plain && isPlainSafe(char, prev_char);
        }
      } else {
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          if (char === CHAR_LINE_FEED) {
            hasLineBreak = true;
            if (shouldTrackWidth) {
              hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
              i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
              previousLineBreak = i;
            }
          } else if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
          plain = plain && isPlainSafe(char, prev_char);
        }
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
      }
      if (!hasLineBreak && !hasFoldableLine) {
        return plain && !testAmbiguousType(string) ? STYLE_PLAIN : STYLE_SINGLE;
      }
      if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE;
      }
      return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
    }
    function writeScalar(state, string, level, iskey) {
      state.dump = function() {
        if (string.length === 0) {
          return "''";
        }
        if (!state.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
          return "'" + string + "'";
        }
        var indent = state.indent * Math.max(1, level);
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
        function testAmbiguity(string2) {
          return testImplicitResolving(state, string2);
        }
        switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
          case STYLE_PLAIN:
            return string;
          case STYLE_SINGLE:
            return "'" + string.replace(/'/g, "''") + "'";
          case STYLE_LITERAL:
            return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
          case STYLE_FOLDED:
            return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
          case STYLE_DOUBLE:
            return '"' + escapeString(string, lineWidth) + '"';
          default:
            throw new YAMLException("impossible error: invalid scalar style");
        }
      }();
    }
    function blockHeader(string, indentPerLevel) {
      var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
      var clip = string[string.length - 1] === "\n";
      var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
      var chomp = keep ? "+" : clip ? "" : "-";
      return indentIndicator + chomp + "\n";
    }
    function dropEndingNewline(string) {
      return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
    }
    function foldString(string, width) {
      var lineRe = /(\n+)([^\n]*)/g;
      var result = function() {
        var nextLF = string.indexOf("\n");
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width);
      }();
      var prevMoreIndented = string[0] === "\n" || string[0] === " ";
      var moreIndented;
      var match;
      while (match = lineRe.exec(string)) {
        var prefix = match[1], line = match[2];
        moreIndented = line[0] === " ";
        result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
        prevMoreIndented = moreIndented;
      }
      return result;
    }
    function foldLine(line, width) {
      if (line === "" || line[0] === " ")
        return line;
      var breakRe = / [^ ]/g;
      var match;
      var start = 0, end, curr = 0, next = 0;
      var result = "";
      while (match = breakRe.exec(line)) {
        next = match.index;
        if (next - start > width) {
          end = curr > start ? curr : next;
          result += "\n" + line.slice(start, end);
          start = end + 1;
        }
        curr = next;
      }
      result += "\n";
      if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
      } else {
        result += line.slice(start);
      }
      return result.slice(1);
    }
    function escapeString(string) {
      var result = "";
      var char, nextChar;
      var escapeSeq;
      for (var i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        if (char >= 55296 && char <= 56319) {
          nextChar = string.charCodeAt(i + 1);
          if (nextChar >= 56320 && nextChar <= 57343) {
            result += encodeHex((char - 55296) * 1024 + nextChar - 56320 + 65536);
            i++;
            continue;
          }
        }
        escapeSeq = ESCAPE_SEQUENCES[char];
        result += !escapeSeq && isPrintable(char) ? string[i] : escapeSeq || encodeHex(char);
      }
      return result;
    }
    function writeFlowSequence(state, level, object) {
      var _result = "", _tag = state.tag, index2, length;
      for (index2 = 0, length = object.length; index2 < length; index2 += 1) {
        if (writeNode(state, level, object[index2], false, false)) {
          if (index2 !== 0)
            _result += "," + (!state.condenseFlow ? " " : "");
          _result += state.dump;
        }
      }
      state.tag = _tag;
      state.dump = "[" + _result + "]";
    }
    function writeBlockSequence(state, level, object, compact) {
      var _result = "", _tag = state.tag, index2, length;
      for (index2 = 0, length = object.length; index2 < length; index2 += 1) {
        if (writeNode(state, level + 1, object[index2], true, true)) {
          if (!compact || index2 !== 0) {
            _result += generateNextLine(state, level);
          }
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            _result += "-";
          } else {
            _result += "- ";
          }
          _result += state.dump;
        }
      }
      state.tag = _tag;
      state.dump = _result || "[]";
    }
    function writeFlowMapping(state, level, object) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index2, length, objectKey, objectValue, pairBuffer;
      for (index2 = 0, length = objectKeyList.length; index2 < length; index2 += 1) {
        pairBuffer = "";
        if (index2 !== 0)
          pairBuffer += ", ";
        if (state.condenseFlow)
          pairBuffer += '"';
        objectKey = objectKeyList[index2];
        objectValue = object[objectKey];
        if (!writeNode(state, level, objectKey, false, false)) {
          continue;
        }
        if (state.dump.length > 1024)
          pairBuffer += "? ";
        pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
        if (!writeNode(state, level, objectValue, false, false)) {
          continue;
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
      }
      state.tag = _tag;
      state.dump = "{" + _result + "}";
    }
    function writeBlockMapping(state, level, object, compact) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index2, length, objectKey, objectValue, explicitPair, pairBuffer;
      if (state.sortKeys === true) {
        objectKeyList.sort();
      } else if (typeof state.sortKeys === "function") {
        objectKeyList.sort(state.sortKeys);
      } else if (state.sortKeys) {
        throw new YAMLException("sortKeys must be a boolean or a function");
      }
      for (index2 = 0, length = objectKeyList.length; index2 < length; index2 += 1) {
        pairBuffer = "";
        if (!compact || index2 !== 0) {
          pairBuffer += generateNextLine(state, level);
        }
        objectKey = objectKeyList[index2];
        objectValue = object[objectKey];
        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
          continue;
        }
        explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
        if (explicitPair) {
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += "?";
          } else {
            pairBuffer += "? ";
          }
        }
        pairBuffer += state.dump;
        if (explicitPair) {
          pairBuffer += generateNextLine(state, level);
        }
        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
          continue;
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += ":";
        } else {
          pairBuffer += ": ";
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
      }
      state.tag = _tag;
      state.dump = _result || "{}";
    }
    function detectType(state, object, explicit) {
      var _result, typeList, index2, length, type, style;
      typeList = explicit ? state.explicitTypes : state.implicitTypes;
      for (index2 = 0, length = typeList.length; index2 < length; index2 += 1) {
        type = typeList[index2];
        if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object === "object" && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
          state.tag = explicit ? type.tag : "?";
          if (type.represent) {
            style = state.styleMap[type.tag] || type.defaultStyle;
            if (_toString.call(type.represent) === "[object Function]") {
              _result = type.represent(object, style);
            } else if (_hasOwnProperty.call(type.represent, style)) {
              _result = type.represent[style](object, style);
            } else {
              throw new YAMLException("!<" + type.tag + '> tag resolver accepts not "' + style + '" style');
            }
            state.dump = _result;
          }
          return true;
        }
      }
      return false;
    }
    function writeNode(state, level, object, block, compact, iskey) {
      state.tag = null;
      state.dump = object;
      if (!detectType(state, object, false)) {
        detectType(state, object, true);
      }
      var type = _toString.call(state.dump);
      if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level;
      }
      var objectOrArray = type === "[object Object]" || type === "[object Array]", duplicateIndex, duplicate;
      if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
      }
      if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
        compact = false;
      }
      if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = "*ref_" + duplicateIndex;
      } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
          state.usedDuplicates[duplicateIndex] = true;
        }
        if (type === "[object Object]") {
          if (block && Object.keys(state.dump).length !== 0) {
            writeBlockMapping(state, level, state.dump, compact);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump;
            }
          } else {
            writeFlowMapping(state, level, state.dump);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump;
            }
          }
        } else if (type === "[object Array]") {
          var arrayLevel = state.noArrayIndent && level > 0 ? level - 1 : level;
          if (block && state.dump.length !== 0) {
            writeBlockSequence(state, arrayLevel, state.dump, compact);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump;
            }
          } else {
            writeFlowSequence(state, arrayLevel, state.dump);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump;
            }
          }
        } else if (type === "[object String]") {
          if (state.tag !== "?") {
            writeScalar(state, state.dump, level, iskey);
          }
        } else {
          if (state.skipInvalid)
            return false;
          throw new YAMLException("unacceptable kind of an object to dump " + type);
        }
        if (state.tag !== null && state.tag !== "?") {
          state.dump = "!<" + state.tag + "> " + state.dump;
        }
      }
      return true;
    }
    function getDuplicateReferences(object, state) {
      var objects = [], duplicatesIndexes = [], index2, length;
      inspectNode(object, objects, duplicatesIndexes);
      for (index2 = 0, length = duplicatesIndexes.length; index2 < length; index2 += 1) {
        state.duplicates.push(objects[duplicatesIndexes[index2]]);
      }
      state.usedDuplicates = new Array(length);
    }
    function inspectNode(object, objects, duplicatesIndexes) {
      var objectKeyList, index2, length;
      if (object !== null && typeof object === "object") {
        index2 = objects.indexOf(object);
        if (index2 !== -1) {
          if (duplicatesIndexes.indexOf(index2) === -1) {
            duplicatesIndexes.push(index2);
          }
        } else {
          objects.push(object);
          if (Array.isArray(object)) {
            for (index2 = 0, length = object.length; index2 < length; index2 += 1) {
              inspectNode(object[index2], objects, duplicatesIndexes);
            }
          } else {
            objectKeyList = Object.keys(object);
            for (index2 = 0, length = objectKeyList.length; index2 < length; index2 += 1) {
              inspectNode(object[objectKeyList[index2]], objects, duplicatesIndexes);
            }
          }
        }
      }
    }
    function dump(input, options2) {
      options2 = options2 || {};
      var state = new State(options2);
      if (!state.noRefs)
        getDuplicateReferences(input, state);
      if (writeNode(state, 0, input, true, true))
        return state.dump + "\n";
      return "";
    }
    function safeDump(input, options2) {
      return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    module2.exports.dump = dump;
    module2.exports.safeDump = safeDump;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml.js
var require_js_yaml = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml.js"(exports2, module2) {
    "use strict";
    var loader = require_loader();
    var dumper = require_dumper();
    function deprecated(name) {
      return function() {
        throw new Error("Function " + name + " is deprecated and cannot be used.");
      };
    }
    module2.exports.Type = require_type();
    module2.exports.Schema = require_schema();
    module2.exports.FAILSAFE_SCHEMA = require_failsafe();
    module2.exports.JSON_SCHEMA = require_json();
    module2.exports.CORE_SCHEMA = require_core();
    module2.exports.DEFAULT_SAFE_SCHEMA = require_default_safe();
    module2.exports.DEFAULT_FULL_SCHEMA = require_default_full();
    module2.exports.load = loader.load;
    module2.exports.loadAll = loader.loadAll;
    module2.exports.safeLoad = loader.safeLoad;
    module2.exports.safeLoadAll = loader.safeLoadAll;
    module2.exports.dump = dumper.dump;
    module2.exports.safeDump = dumper.safeDump;
    module2.exports.YAMLException = require_exception();
    module2.exports.MINIMAL_SCHEMA = require_failsafe();
    module2.exports.SAFE_SCHEMA = require_default_safe();
    module2.exports.DEFAULT_SCHEMA = require_default_full();
    module2.exports.scan = deprecated("scan");
    module2.exports.parse = deprecated("parse");
    module2.exports.compose = deprecated("compose");
    module2.exports.addConstructor = deprecated("addConstructor");
  }
});

// node_modules/gray-matter/node_modules/js-yaml/index.js
var require_js_yaml2 = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/index.js"(exports2, module2) {
    "use strict";
    var yaml2 = require_js_yaml();
    module2.exports = yaml2;
  }
});

// node_modules/gray-matter/lib/engines.js
var require_engines = __commonJS({
  "node_modules/gray-matter/lib/engines.js"(exports, module) {
    "use strict";
    var yaml = require_js_yaml2();
    var engines = exports = module.exports;
    engines.yaml = {
      parse: yaml.safeLoad.bind(yaml),
      stringify: yaml.safeDump.bind(yaml)
    };
    engines.json = {
      parse: JSON.parse.bind(JSON),
      stringify: function(obj, options2) {
        const opts = Object.assign({ replacer: null, space: 2 }, options2);
        return JSON.stringify(obj, opts.replacer, opts.space);
      }
    };
    engines.javascript = {
      parse: function parse(str, options, wrap) {
        try {
          if (wrap !== false) {
            str = "(function() {\nreturn " + str.trim() + ";\n}());";
          }
          return eval(str) || {};
        } catch (err) {
          if (wrap !== false && /(unexpected|identifier)/i.test(err.message)) {
            return parse(str, options, false);
          }
          throw new SyntaxError(err);
        }
      },
      stringify: function() {
        throw new Error("stringifying JavaScript is not supported");
      }
    };
  }
});

// node_modules/strip-bom-string/index.js
var require_strip_bom_string = __commonJS({
  "node_modules/strip-bom-string/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function(str2) {
      if (typeof str2 === "string" && str2.charAt(0) === "\uFEFF") {
        return str2.slice(1);
      }
      return str2;
    };
  }
});

// node_modules/gray-matter/lib/utils.js
var require_utils = __commonJS({
  "node_modules/gray-matter/lib/utils.js"(exports2) {
    "use strict";
    var stripBom = require_strip_bom_string();
    var typeOf = require_kind_of();
    exports2.define = function(obj, key, val) {
      Reflect.defineProperty(obj, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: val
      });
    };
    exports2.isBuffer = function(val) {
      return typeOf(val) === "buffer";
    };
    exports2.isObject = function(val) {
      return typeOf(val) === "object";
    };
    exports2.toBuffer = function(input) {
      return typeof input === "string" ? Buffer.from(input) : input;
    };
    exports2.toString = function(input) {
      if (exports2.isBuffer(input))
        return stripBom(String(input));
      if (typeof input !== "string") {
        throw new TypeError("expected input to be a string or buffer");
      }
      return stripBom(input);
    };
    exports2.arrayify = function(val) {
      return val ? Array.isArray(val) ? val : [val] : [];
    };
    exports2.startsWith = function(str2, substr, len) {
      if (typeof len !== "number")
        len = substr.length;
      return str2.slice(0, len) === substr;
    };
  }
});

// node_modules/gray-matter/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/gray-matter/lib/defaults.js"(exports2, module2) {
    "use strict";
    var engines2 = require_engines();
    var utils = require_utils();
    module2.exports = function(options2) {
      const opts = Object.assign({}, options2);
      opts.delimiters = utils.arrayify(opts.delims || opts.delimiters || "---");
      if (opts.delimiters.length === 1) {
        opts.delimiters.push(opts.delimiters[0]);
      }
      opts.language = (opts.language || opts.lang || "yaml").toLowerCase();
      opts.engines = Object.assign({}, engines2, opts.parsers, opts.engines);
      return opts;
    };
  }
});

// node_modules/gray-matter/lib/engine.js
var require_engine = __commonJS({
  "node_modules/gray-matter/lib/engine.js"(exports2, module2) {
    "use strict";
    module2.exports = function(name, options2) {
      let engine = options2.engines[name] || options2.engines[aliase(name)];
      if (typeof engine === "undefined") {
        throw new Error('gray-matter engine "' + name + '" is not registered');
      }
      if (typeof engine === "function") {
        engine = { parse: engine };
      }
      return engine;
    };
    function aliase(name) {
      switch (name.toLowerCase()) {
        case "js":
        case "javascript":
          return "javascript";
        case "coffee":
        case "coffeescript":
        case "cson":
          return "coffee";
        case "yaml":
        case "yml":
          return "yaml";
        default: {
          return name;
        }
      }
    }
  }
});

// node_modules/gray-matter/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/gray-matter/lib/stringify.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var getEngine = require_engine();
    var defaults = require_defaults();
    module2.exports = function(file6, data, options2) {
      if (data == null && options2 == null) {
        switch (typeOf(file6)) {
          case "object":
            data = file6.data;
            options2 = {};
            break;
          case "string":
            return file6;
          default: {
            throw new TypeError("expected file to be a string or object");
          }
        }
      }
      const str2 = file6.content;
      const opts = defaults(options2);
      if (data == null) {
        if (!opts.data)
          return file6;
        data = opts.data;
      }
      const language = file6.language || opts.language;
      const engine = getEngine(language, opts);
      if (typeof engine.stringify !== "function") {
        throw new TypeError('expected "' + language + '.stringify" to be a function');
      }
      data = Object.assign({}, file6.data, data);
      const open = opts.delimiters[0];
      const close = opts.delimiters[1];
      const matter2 = engine.stringify(data, options2).trim();
      let buf = "";
      if (matter2 !== "{}") {
        buf = newline(open) + newline(matter2) + newline(close);
      }
      if (typeof file6.excerpt === "string" && file6.excerpt !== "") {
        if (str2.indexOf(file6.excerpt.trim()) === -1) {
          buf += newline(file6.excerpt) + newline(close);
        }
      }
      return buf + newline(str2);
    };
    function newline(str2) {
      return str2.slice(-1) !== "\n" ? str2 + "\n" : str2;
    }
  }
});

// node_modules/gray-matter/lib/excerpt.js
var require_excerpt = __commonJS({
  "node_modules/gray-matter/lib/excerpt.js"(exports2, module2) {
    "use strict";
    var defaults = require_defaults();
    module2.exports = function(file6, options2) {
      const opts = defaults(options2);
      if (file6.data == null) {
        file6.data = {};
      }
      if (typeof opts.excerpt === "function") {
        return opts.excerpt(file6, opts);
      }
      const sep = file6.data.excerpt_separator || opts.excerpt_separator;
      if (sep == null && (opts.excerpt === false || opts.excerpt == null)) {
        return file6;
      }
      const delimiter = typeof opts.excerpt === "string" ? opts.excerpt : sep || opts.delimiters[0];
      const idx = file6.content.indexOf(delimiter);
      if (idx !== -1) {
        file6.excerpt = file6.content.slice(0, idx);
      }
      return file6;
    };
  }
});

// node_modules/gray-matter/lib/to-file.js
var require_to_file = __commonJS({
  "node_modules/gray-matter/lib/to-file.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var stringify2 = require_stringify();
    var utils = require_utils();
    module2.exports = function(file6) {
      if (typeOf(file6) !== "object") {
        file6 = { content: file6 };
      }
      if (typeOf(file6.data) !== "object") {
        file6.data = {};
      }
      if (file6.contents && file6.content == null) {
        file6.content = file6.contents;
      }
      utils.define(file6, "orig", utils.toBuffer(file6.content));
      utils.define(file6, "language", file6.language || "");
      utils.define(file6, "matter", file6.matter || "");
      utils.define(file6, "stringify", function(data, options2) {
        if (options2 && options2.language) {
          file6.language = options2.language;
        }
        return stringify2(file6, data, options2);
      });
      file6.content = utils.toString(file6.content);
      file6.isEmpty = false;
      file6.excerpt = "";
      return file6;
    };
  }
});

// node_modules/gray-matter/lib/parse.js
var require_parse = __commonJS({
  "node_modules/gray-matter/lib/parse.js"(exports2, module2) {
    "use strict";
    var getEngine = require_engine();
    var defaults = require_defaults();
    module2.exports = function(language, str2, options2) {
      const opts = defaults(options2);
      const engine = getEngine(language, opts);
      if (typeof engine.parse !== "function") {
        throw new TypeError('expected "' + language + '.parse" to be a function');
      }
      return engine.parse(str2, opts);
    };
  }
});

// node_modules/gray-matter/index.js
var require_gray_matter = __commonJS({
  "node_modules/gray-matter/index.js"(exports2, module2) {
    "use strict";
    var fs = require("fs");
    var sections = require_section_matter();
    var defaults = require_defaults();
    var stringify2 = require_stringify();
    var excerpt = require_excerpt();
    var engines2 = require_engines();
    var toFile = require_to_file();
    var parse2 = require_parse();
    var utils = require_utils();
    function matter2(input, options2) {
      if (input === "") {
        return { data: {}, content: input, excerpt: "", orig: input };
      }
      let file6 = toFile(input);
      const cached = matter2.cache[file6.content];
      if (!options2) {
        if (cached) {
          file6 = Object.assign({}, cached);
          file6.orig = cached.orig;
          return file6;
        }
        matter2.cache[file6.content] = file6;
      }
      return parseMatter(file6, options2);
    }
    function parseMatter(file6, options2) {
      const opts = defaults(options2);
      const open = opts.delimiters[0];
      const close = "\n" + opts.delimiters[1];
      let str2 = file6.content;
      if (opts.language) {
        file6.language = opts.language;
      }
      const openLen = open.length;
      if (!utils.startsWith(str2, open, openLen)) {
        excerpt(file6, opts);
        return file6;
      }
      if (str2.charAt(openLen) === open.slice(-1)) {
        return file6;
      }
      str2 = str2.slice(openLen);
      const len = str2.length;
      const language = matter2.language(str2, opts);
      if (language.name) {
        file6.language = language.name;
        str2 = str2.slice(language.raw.length);
      }
      let closeIndex = str2.indexOf(close);
      if (closeIndex === -1) {
        closeIndex = len;
      }
      file6.matter = str2.slice(0, closeIndex);
      const block = file6.matter.replace(/^\s*#[^\n]+/gm, "").trim();
      if (block === "") {
        file6.isEmpty = true;
        file6.empty = file6.content;
        file6.data = {};
      } else {
        file6.data = parse2(file6.language, file6.matter, opts);
      }
      if (closeIndex === len) {
        file6.content = "";
      } else {
        file6.content = str2.slice(closeIndex + close.length);
        if (file6.content[0] === "\r") {
          file6.content = file6.content.slice(1);
        }
        if (file6.content[0] === "\n") {
          file6.content = file6.content.slice(1);
        }
      }
      excerpt(file6, opts);
      if (opts.sections === true || typeof opts.section === "function") {
        sections(file6, opts.section);
      }
      return file6;
    }
    matter2.engines = engines2;
    matter2.stringify = function(file6, data, options2) {
      if (typeof file6 === "string")
        file6 = matter2(file6, options2);
      return stringify2(file6, data, options2);
    };
    matter2.read = function(filepath, options2) {
      const str2 = fs.readFileSync(filepath, "utf8");
      const file6 = matter2(str2, options2);
      file6.path = filepath;
      return file6;
    };
    matter2.test = function(str2, options2) {
      return utils.startsWith(str2, defaults(options2).delimiters[0]);
    };
    matter2.language = function(str2, options2) {
      const opts = defaults(options2);
      const open = opts.delimiters[0];
      if (matter2.test(str2)) {
        str2 = str2.slice(open.length);
      }
      const language = str2.slice(0, str2.search(/\r?\n/));
      return {
        raw: language,
        name: language ? language.trim() : ""
      };
    };
    matter2.cache = {};
    matter2.clearCache = function() {
      matter2.cache = {};
    };
    module2.exports = matter2;
  }
});

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports2, module2) {
    "use strict";
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER2 = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index2 = -1, length = array == null ? 0 : array.length;
        while (++index2 < length) {
          var value = array[index2];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index2 = -1, length = array == null ? 0 : array.length;
        while (++index2 < length) {
          if (iteratee(array[index2], index2, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index2 = -1, length = array == null ? 0 : array.length;
        while (++index2 < length) {
          if (!predicate(array[index2], index2, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index2 < length) {
          var value = array[index2];
          if (predicate(value, index2, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index2 = -1, length = array == null ? 0 : array.length;
        while (++index2 < length) {
          if (comparator(value, array[index2])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index2 < length) {
          result[index2] = iteratee(array[index2], index2, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index2 = -1, length = values.length, offset = array.length;
        while (++index2 < length) {
          array[offset + index2] = values[index2];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index2 = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index2];
        }
        while (++index2 < length) {
          accumulator = iteratee(accumulator, array[index2], index2, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index2 = -1, length = array == null ? 0 : array.length;
        while (++index2 < length) {
          if (predicate(array[index2], index2, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index2-- : ++index2 < length) {
          if (predicate(array[index2], index2, array)) {
            return index2;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index2 = fromIndex - 1, length = array.length;
        while (++index2 < length) {
          if (comparator(array[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index2, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index2, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index2 = -1, length = array.length;
        while (++index2 < length) {
          var current = iteratee(array[index2]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index2 = -1, result = Array(n);
        while (++index2 < n) {
          result[index2] = iteratee(index2);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index2 = -1, length = strSymbols.length;
        while (++index2 < length && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
        }
        return index2;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index2 = strSymbols.length;
        while (index2-- && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
        }
        return index2;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index2 = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index2] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index2 = -1, length = array.length, resIndex = 0, result = [];
        while (++index2 < length) {
          var value = array[index2];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index2] = PLACEHOLDER;
            result[resIndex++] = index2;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index2 = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index2] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index2 = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index2] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index2 = fromIndex - 1, length = array.length;
        while (++index2 < length) {
          if (array[index2] === value) {
            return index2;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index2 = fromIndex + 1;
        while (index2--) {
          if (array[index2] === value) {
            return index2;
          }
        }
        return index2;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index2 = string.length;
        while (index2-- && reWhitespace.test(string.charAt(index2))) {
        }
        return index2;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid2 ? "Symbol(src)_1." + uid2 : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView2 = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash6(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash6.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash6
          }
        };
        lodash6.prototype = baseLodash.prototype;
        lodash6.prototype.constructor = lodash6;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index2 = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index2 += dir;
              var iterIndex = -1, value = array[index2];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash2(entries) {
          var index2 = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index2 < length) {
            var entry = entries[index2];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash2.prototype.clear = hashClear;
        Hash2.prototype["delete"] = hashDelete;
        Hash2.prototype.get = hashGet;
        Hash2.prototype.has = hashHas;
        Hash2.prototype.set = hashSet;
        function ListCache(entries) {
          var index2 = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index2 < length) {
            var entry = entries[index2];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index2 = assocIndexOf(data, key);
          if (index2 < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index2 == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index2, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index2 = assocIndexOf(data, key);
          return index2 < 0 ? undefined2 : data[index2][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index2 = assocIndexOf(data, key);
          if (index2 < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index2][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index2 = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index2 < length) {
            var entry = entries[index2];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash2(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash2()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size4 = data.size;
          data.set(key, value);
          this.size += data.size == size4 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index2 = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index2 < length) {
            this.add(values2[index2]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index2 = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index2 < length) {
            result2[index2] = skip ? undefined2 : get(object, paths[index2]);
          }
          return result2;
        }
        function baseClamp(number2, lower, upper) {
          if (number2 === number2) {
            if (upper !== undefined2) {
              number2 = number2 <= upper ? number2 : upper;
            }
            if (lower !== undefined2) {
              number2 = number2 >= lower ? number2 : lower;
            }
          }
          return number2;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait2, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait2);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index2 = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index2 < length) {
              var value = array[index2], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index2, collection2) {
            result2 = !!predicate(value, index2, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index2 = -1, length = array.length;
          while (++index2 < length) {
            var value = array[index2], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index2, collection2) {
            if (predicate(value, index2, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index2 = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index2 < length) {
            var value = array[index2];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index2 = 0, length = path.length;
          while (object != null && index2 < length) {
            object = object[toKey(path[index2++])];
          }
          return index2 && index2 == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number2, start, end) {
          return number2 >= nativeMin(start, end) && number2 < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index2 = -1, seen = caches[0];
          outer:
            while (++index2 < length && result2.length < maxLength) {
              var value = array[index2], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index2 = matchData.length, length = index2, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index2--) {
            var data = matchData[index2];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index2 < length) {
            data = matchData[index2];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index2 = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index2] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index2 = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index2, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index2 = -1, length = paths.length, result2 = {};
          while (++index2 < length) {
            var path = paths[index2], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index2 = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index2 < length) {
            var fromIndex = 0, value = values2[index2], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index2 = indexes[length];
            if (length == lastIndex || index2 !== previous) {
              var previous = index2;
              if (isIndex(index2)) {
                splice.call(array, index2, 1);
              } else {
                baseUnset(array, index2);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index2 = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index2] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER2) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index2 < length) {
            var key = toKey(path[index2]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index2 != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index2 = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index2 < length) {
            result2[index2] = array[index2 + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index2, collection2) {
            result2 = predicate(value, index2, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index2 = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index2 < length) {
            var value = array[index2], computed = iteratee2 ? iteratee2(value) : value;
            if (!index2 || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index2 = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index2 < length) {
              var value = array[index2], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index2 = fromRight ? length : -1;
          while ((fromRight ? index2-- : ++index2 < length) && predicate(array[index2], index2, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index2, fromRight ? index2 + 1 : length) : baseSlice(array, fromRight ? index2 + 1 : 0, fromRight ? length : index2);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index2 = -1, result2 = Array2(length);
          while (++index2 < length) {
            var array = arrays[index2], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index2) {
                result2[index2] = baseDifference(result2[index2] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index2 = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index2 < length) {
            var value = index2 < valsLength ? values2[index2] : undefined2;
            assignFunc(result2, props[index2], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id2) {
          return root.clearTimeout(id2);
        };
        function cloneBuffer(buffer2, isDeep) {
          if (isDeep) {
            return buffer2.slice();
          }
          var length = buffer2.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer2.constructor(length);
          buffer2.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer2 = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer2, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer2 = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer2, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index2 = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index2 < length) {
            var result2 = compareAscending(objCriteria[index2], othCriteria[index2]);
            if (result2) {
              if (index2 >= ordersLength) {
                return result2;
              }
              var order = orders[index2];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index2 = -1, length = source.length;
          array || (array = Array2(length));
          while (++index2 < length) {
            array[index2] = source[index2];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index2 = -1, length = props.length;
          while (++index2 < length) {
            var key = props[index2];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index2 < length) {
              var source = sources[index2];
              if (source) {
                assigner(object, source, index2, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index2 = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index2-- : ++index2 < length) {
              if (iteratee2(iterable[index2], index2, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index2 = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index2];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index2 = length, placeholder = getHolder(wrapper);
            while (index2--) {
              args[index2] = arguments[index2];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index2 = findIndexFunc(collection, predicate, fromIndex);
            return index2 > -1 ? iterable[iteratee2 ? collection[index2] : index2] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index2 = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index2--) {
              var func = funcs[index2];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index2 = wrapper ? index2 : length;
            while (++index2 < length) {
              func = funcs[index2];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index3 = 0, result2 = length ? funcs[index3].apply(this, args) : value;
              while (++index3 < length) {
                result2 = funcs[index3].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index2 = length;
            while (index2--) {
              args[index2] = arguments[index2];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number2, precision) {
            number2 = toNumber(number2);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number2)) {
              var pair = (toString(number2) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number2);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index2 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index2 < arrLength) {
            var arrValue = array[index2], othValue = other[index2];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index2 = objLength;
          while (index2--) {
            var key = objProps[index2];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index2 < objLength) {
            key = objProps[index2];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash6, "placeholder") ? lodash6 : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash6.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index2 = -1, length = transforms.length;
          while (++index2 < length) {
            var data = transforms[index2], size4 = data.size;
            switch (data.type) {
              case "drop":
                start += size4;
                break;
              case "dropRight":
                end -= size4;
                break;
              case "take":
                end = nativeMin(end, start + size4);
                break;
              case "takeRight":
                start = nativeMax(start, end - size4);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index2 = -1, length = path.length, result2 = false;
          while (++index2 < length) {
            var key = toKey(path[index2]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index2 != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER2 : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index2, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index2;
          if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
            return eq(object[index2], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash6[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index2 < length) {
              array[index2] = args[start + index2];
            }
            index2 = -1;
            var otherArgs = Array2(start + 1);
            while (++index2 < start) {
              otherArgs[index2] = args[index2];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index2 = indexes[length];
            array[length] = isIndex(index2, arrLength) ? oldArray[index2] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait2) {
          return root.setTimeout(func, wait2);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size4) {
          var index2 = -1, length = array.length, lastIndex = length - 1;
          size4 = size4 === undefined2 ? length : size4;
          while (++index2 < size4) {
            var rand = baseRandom(index2, lastIndex), value = array[rand];
            array[rand] = array[index2];
            array[index2] = value;
          }
          array.length = size4;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number2, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size4, guard) {
          if (guard ? isIterateeCall(array, size4, guard) : size4 === undefined2) {
            size4 = 1;
          } else {
            size4 = nativeMax(toInteger(size4), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size4 < 1) {
            return [];
          }
          var index2 = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size4));
          while (index2 < length) {
            result2[resIndex++] = baseSlice(array, index2, index2 += size4);
          }
          return result2;
        }
        function compact(array) {
          var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index2 < length) {
            var value = array[index2];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat2() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index2 = length;
          while (index2--) {
            args[index2 - 1] = arguments[index2];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index2 < 0) {
            index2 = nativeMax(length + index2, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index2);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index2 = length - 1;
          if (fromIndex !== undefined2) {
            index2 = toInteger(fromIndex);
            index2 = fromIndex < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index2, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index2 = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index2 < length) {
            var pair = pairs[index2];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index2 < 0) {
            index2 = nativeMax(length + index2, 0);
          }
          return baseIndexOf(array, value, index2);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join7(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index2 = length;
          if (fromIndex !== undefined2) {
            index2 = toInteger(fromIndex);
            index2 = index2 < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index2) : baseFindIndex(array, baseIsNaN, index2, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index2) {
            return isIndex(index2, length) ? +index2 : index2;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index2 = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index2 < length) {
            var value = array[index2];
            if (predicate(value, index2, array)) {
              result2.push(value);
              indexes.push(index2);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice2(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index2 = baseSortedIndex(array, value);
            if (index2 < length && eq(array[index2], value)) {
              return index2;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index2 = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index2], value)) {
              return index2;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index2) {
            return arrayMap(array, baseProperty(index2));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash6(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone3 = wrapperClone(parent2);
            clone3.__index__ = 0;
            clone3.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone3;
            } else {
              result2 = clone3;
            }
            var previous = clone3;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index2 = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index2] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size3(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait2, options2) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait2 = toNumber(wait2) || 0;
          if (isObject(options2)) {
            leading = !!options2.leading;
            maxing = "maxWait" in options2;
            maxWait = maxing ? nativeMax(toNumber(options2.maxWait) || 0, wait2) : maxWait;
            trailing = "trailing" in options2 ? !!options2.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait2);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait2 - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait2 || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait2);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait2);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait2, args) {
          return baseDelay(func, toNumber(wait2) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index2 = -1, length = nativeMin(args.length, funcsLength);
            while (++index2 < length) {
              args[index2] = transforms[index2].call(this, args[index2]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait2, options2) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options2)) {
            leading = "leading" in options2 ? !!options2.leading : leading;
            trailing = "trailing" in options2 ? !!options2.trailing : trailing;
          }
          return debounce(func, wait2, {
            "leading": leading,
            "maxWait": wait2,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap2(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone2(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite2(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER2 && value <= MAX_SAFE_INTEGER2;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER2, MAX_SAFE_INTEGER2) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index2 = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index2 < length) {
            var source = sources[index2];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index2 = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index2 < length) {
            var value = object == null ? undefined2 : object[toKey(path[index2])];
            if (value === undefined2) {
              index2 = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index2, object2) {
            return iteratee2(accumulator, value, index2, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number2, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number2), lower, upper);
        }
        function inRange(number2, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number2 = toNumber(number2);
          return baseInRange(number2, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index2) {
          word = word.toLowerCase();
          return result2 + (index2 ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index2) {
          return result2 + (index2 ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index2) {
          return result2 + (index2 ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad2(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index2) {
          return result2 + (index2 ? "_" : "") + word.toLowerCase();
        });
        function split2(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index2) {
          return result2 + (index2 ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options2, guard) {
          var settings = lodash6.templateSettings;
          if (guard && isIterateeCall(string, options2, guard)) {
            options2 = undefined2;
          }
          string = toString(string);
          options2 = assignInWith({}, options2, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options2.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index2 = 0, interpolate = options2.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options2.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options2.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options2, "sourceURL") ? (options2.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index2, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index2 = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options2, "variable") && options2.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim2(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options2) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options2)) {
            var separator = "separator" in options2 ? options2.separator : separator;
            length = "length" in options2 ? toInteger(options2.length) : length;
            omission = "omission" in options2 ? baseToString(options2.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index2 = result2.lastIndexOf(separator);
            if (index2 > -1) {
              result2 = result2.slice(0, index2);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index2) {
          return result2 + (index2 ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index2 = -1;
            while (++index2 < length) {
              var pair = pairs[index2];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options2) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options2 == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options2 = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options2) && "chain" in options2) || !!options2.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER2) {
            return [];
          }
          var index2 = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index2 < n) {
            iteratee2(index2);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id2 = ++idCounter;
          return toString(prefix) + id2;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash6.after = after;
        lodash6.ary = ary;
        lodash6.assign = assign;
        lodash6.assignIn = assignIn;
        lodash6.assignInWith = assignInWith;
        lodash6.assignWith = assignWith;
        lodash6.at = at;
        lodash6.before = before;
        lodash6.bind = bind;
        lodash6.bindAll = bindAll;
        lodash6.bindKey = bindKey;
        lodash6.castArray = castArray;
        lodash6.chain = chain;
        lodash6.chunk = chunk;
        lodash6.compact = compact;
        lodash6.concat = concat2;
        lodash6.cond = cond;
        lodash6.conforms = conforms;
        lodash6.constant = constant;
        lodash6.countBy = countBy;
        lodash6.create = create;
        lodash6.curry = curry;
        lodash6.curryRight = curryRight;
        lodash6.debounce = debounce;
        lodash6.defaults = defaults;
        lodash6.defaultsDeep = defaultsDeep;
        lodash6.defer = defer;
        lodash6.delay = delay;
        lodash6.difference = difference;
        lodash6.differenceBy = differenceBy;
        lodash6.differenceWith = differenceWith;
        lodash6.drop = drop;
        lodash6.dropRight = dropRight;
        lodash6.dropRightWhile = dropRightWhile;
        lodash6.dropWhile = dropWhile;
        lodash6.fill = fill;
        lodash6.filter = filter;
        lodash6.flatMap = flatMap;
        lodash6.flatMapDeep = flatMapDeep;
        lodash6.flatMapDepth = flatMapDepth;
        lodash6.flatten = flatten;
        lodash6.flattenDeep = flattenDeep;
        lodash6.flattenDepth = flattenDepth;
        lodash6.flip = flip;
        lodash6.flow = flow;
        lodash6.flowRight = flowRight;
        lodash6.fromPairs = fromPairs;
        lodash6.functions = functions;
        lodash6.functionsIn = functionsIn;
        lodash6.groupBy = groupBy;
        lodash6.initial = initial;
        lodash6.intersection = intersection;
        lodash6.intersectionBy = intersectionBy;
        lodash6.intersectionWith = intersectionWith;
        lodash6.invert = invert;
        lodash6.invertBy = invertBy;
        lodash6.invokeMap = invokeMap;
        lodash6.iteratee = iteratee;
        lodash6.keyBy = keyBy;
        lodash6.keys = keys;
        lodash6.keysIn = keysIn;
        lodash6.map = map;
        lodash6.mapKeys = mapKeys;
        lodash6.mapValues = mapValues;
        lodash6.matches = matches;
        lodash6.matchesProperty = matchesProperty;
        lodash6.memoize = memoize;
        lodash6.merge = merge;
        lodash6.mergeWith = mergeWith;
        lodash6.method = method;
        lodash6.methodOf = methodOf;
        lodash6.mixin = mixin;
        lodash6.negate = negate;
        lodash6.nthArg = nthArg;
        lodash6.omit = omit;
        lodash6.omitBy = omitBy;
        lodash6.once = once;
        lodash6.orderBy = orderBy;
        lodash6.over = over;
        lodash6.overArgs = overArgs;
        lodash6.overEvery = overEvery;
        lodash6.overSome = overSome;
        lodash6.partial = partial;
        lodash6.partialRight = partialRight;
        lodash6.partition = partition;
        lodash6.pick = pick;
        lodash6.pickBy = pickBy;
        lodash6.property = property;
        lodash6.propertyOf = propertyOf;
        lodash6.pull = pull;
        lodash6.pullAll = pullAll;
        lodash6.pullAllBy = pullAllBy;
        lodash6.pullAllWith = pullAllWith;
        lodash6.pullAt = pullAt;
        lodash6.range = range;
        lodash6.rangeRight = rangeRight;
        lodash6.rearg = rearg;
        lodash6.reject = reject;
        lodash6.remove = remove;
        lodash6.rest = rest;
        lodash6.reverse = reverse;
        lodash6.sampleSize = sampleSize;
        lodash6.set = set;
        lodash6.setWith = setWith;
        lodash6.shuffle = shuffle;
        lodash6.slice = slice2;
        lodash6.sortBy = sortBy;
        lodash6.sortedUniq = sortedUniq;
        lodash6.sortedUniqBy = sortedUniqBy;
        lodash6.split = split2;
        lodash6.spread = spread;
        lodash6.tail = tail;
        lodash6.take = take;
        lodash6.takeRight = takeRight;
        lodash6.takeRightWhile = takeRightWhile;
        lodash6.takeWhile = takeWhile;
        lodash6.tap = tap;
        lodash6.throttle = throttle;
        lodash6.thru = thru;
        lodash6.toArray = toArray;
        lodash6.toPairs = toPairs;
        lodash6.toPairsIn = toPairsIn;
        lodash6.toPath = toPath;
        lodash6.toPlainObject = toPlainObject;
        lodash6.transform = transform;
        lodash6.unary = unary;
        lodash6.union = union;
        lodash6.unionBy = unionBy;
        lodash6.unionWith = unionWith;
        lodash6.uniq = uniq;
        lodash6.uniqBy = uniqBy;
        lodash6.uniqWith = uniqWith;
        lodash6.unset = unset;
        lodash6.unzip = unzip;
        lodash6.unzipWith = unzipWith;
        lodash6.update = update;
        lodash6.updateWith = updateWith;
        lodash6.values = values;
        lodash6.valuesIn = valuesIn;
        lodash6.without = without;
        lodash6.words = words;
        lodash6.wrap = wrap2;
        lodash6.xor = xor;
        lodash6.xorBy = xorBy;
        lodash6.xorWith = xorWith;
        lodash6.zip = zip;
        lodash6.zipObject = zipObject;
        lodash6.zipObjectDeep = zipObjectDeep;
        lodash6.zipWith = zipWith;
        lodash6.entries = toPairs;
        lodash6.entriesIn = toPairsIn;
        lodash6.extend = assignIn;
        lodash6.extendWith = assignInWith;
        mixin(lodash6, lodash6);
        lodash6.add = add;
        lodash6.attempt = attempt;
        lodash6.camelCase = camelCase;
        lodash6.capitalize = capitalize;
        lodash6.ceil = ceil;
        lodash6.clamp = clamp;
        lodash6.clone = clone2;
        lodash6.cloneDeep = cloneDeep;
        lodash6.cloneDeepWith = cloneDeepWith;
        lodash6.cloneWith = cloneWith;
        lodash6.conformsTo = conformsTo;
        lodash6.deburr = deburr;
        lodash6.defaultTo = defaultTo;
        lodash6.divide = divide;
        lodash6.endsWith = endsWith;
        lodash6.eq = eq;
        lodash6.escape = escape;
        lodash6.escapeRegExp = escapeRegExp;
        lodash6.every = every;
        lodash6.find = find;
        lodash6.findIndex = findIndex;
        lodash6.findKey = findKey;
        lodash6.findLast = findLast;
        lodash6.findLastIndex = findLastIndex;
        lodash6.findLastKey = findLastKey;
        lodash6.floor = floor;
        lodash6.forEach = forEach;
        lodash6.forEachRight = forEachRight;
        lodash6.forIn = forIn;
        lodash6.forInRight = forInRight;
        lodash6.forOwn = forOwn;
        lodash6.forOwnRight = forOwnRight;
        lodash6.get = get;
        lodash6.gt = gt;
        lodash6.gte = gte;
        lodash6.has = has;
        lodash6.hasIn = hasIn;
        lodash6.head = head;
        lodash6.identity = identity;
        lodash6.includes = includes;
        lodash6.indexOf = indexOf;
        lodash6.inRange = inRange;
        lodash6.invoke = invoke;
        lodash6.isArguments = isArguments;
        lodash6.isArray = isArray;
        lodash6.isArrayBuffer = isArrayBuffer;
        lodash6.isArrayLike = isArrayLike;
        lodash6.isArrayLikeObject = isArrayLikeObject;
        lodash6.isBoolean = isBoolean;
        lodash6.isBuffer = isBuffer;
        lodash6.isDate = isDate;
        lodash6.isElement = isElement;
        lodash6.isEmpty = isEmpty;
        lodash6.isEqual = isEqual;
        lodash6.isEqualWith = isEqualWith;
        lodash6.isError = isError;
        lodash6.isFinite = isFinite2;
        lodash6.isFunction = isFunction;
        lodash6.isInteger = isInteger;
        lodash6.isLength = isLength;
        lodash6.isMap = isMap;
        lodash6.isMatch = isMatch;
        lodash6.isMatchWith = isMatchWith;
        lodash6.isNaN = isNaN2;
        lodash6.isNative = isNative;
        lodash6.isNil = isNil;
        lodash6.isNull = isNull;
        lodash6.isNumber = isNumber;
        lodash6.isObject = isObject;
        lodash6.isObjectLike = isObjectLike;
        lodash6.isPlainObject = isPlainObject;
        lodash6.isRegExp = isRegExp;
        lodash6.isSafeInteger = isSafeInteger;
        lodash6.isSet = isSet;
        lodash6.isString = isString;
        lodash6.isSymbol = isSymbol;
        lodash6.isTypedArray = isTypedArray;
        lodash6.isUndefined = isUndefined;
        lodash6.isWeakMap = isWeakMap;
        lodash6.isWeakSet = isWeakSet;
        lodash6.join = join7;
        lodash6.kebabCase = kebabCase;
        lodash6.last = last;
        lodash6.lastIndexOf = lastIndexOf;
        lodash6.lowerCase = lowerCase;
        lodash6.lowerFirst = lowerFirst;
        lodash6.lt = lt;
        lodash6.lte = lte;
        lodash6.max = max;
        lodash6.maxBy = maxBy;
        lodash6.mean = mean;
        lodash6.meanBy = meanBy;
        lodash6.min = min;
        lodash6.minBy = minBy;
        lodash6.stubArray = stubArray;
        lodash6.stubFalse = stubFalse;
        lodash6.stubObject = stubObject;
        lodash6.stubString = stubString;
        lodash6.stubTrue = stubTrue;
        lodash6.multiply = multiply;
        lodash6.nth = nth;
        lodash6.noConflict = noConflict;
        lodash6.noop = noop;
        lodash6.now = now;
        lodash6.pad = pad2;
        lodash6.padEnd = padEnd;
        lodash6.padStart = padStart;
        lodash6.parseInt = parseInt2;
        lodash6.random = random;
        lodash6.reduce = reduce;
        lodash6.reduceRight = reduceRight;
        lodash6.repeat = repeat;
        lodash6.replace = replace;
        lodash6.result = result;
        lodash6.round = round;
        lodash6.runInContext = runInContext2;
        lodash6.sample = sample;
        lodash6.size = size3;
        lodash6.snakeCase = snakeCase;
        lodash6.some = some;
        lodash6.sortedIndex = sortedIndex;
        lodash6.sortedIndexBy = sortedIndexBy;
        lodash6.sortedIndexOf = sortedIndexOf;
        lodash6.sortedLastIndex = sortedLastIndex;
        lodash6.sortedLastIndexBy = sortedLastIndexBy;
        lodash6.sortedLastIndexOf = sortedLastIndexOf;
        lodash6.startCase = startCase;
        lodash6.startsWith = startsWith;
        lodash6.subtract = subtract;
        lodash6.sum = sum;
        lodash6.sumBy = sumBy;
        lodash6.template = template;
        lodash6.times = times;
        lodash6.toFinite = toFinite;
        lodash6.toInteger = toInteger;
        lodash6.toLength = toLength;
        lodash6.toLower = toLower;
        lodash6.toNumber = toNumber;
        lodash6.toSafeInteger = toSafeInteger;
        lodash6.toString = toString;
        lodash6.toUpper = toUpper;
        lodash6.trim = trim2;
        lodash6.trimEnd = trimEnd;
        lodash6.trimStart = trimStart;
        lodash6.truncate = truncate;
        lodash6.unescape = unescape;
        lodash6.uniqueId = uniqueId;
        lodash6.upperCase = upperCase;
        lodash6.upperFirst = upperFirst;
        lodash6.each = forEach;
        lodash6.eachRight = forEachRight;
        lodash6.first = head;
        mixin(lodash6, function() {
          var source = {};
          baseForOwn(lodash6, function(func, methodName) {
            if (!hasOwnProperty.call(lodash6.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash6.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash6[methodName].placeholder = lodash6;
        });
        arrayEach(["drop", "take"], function(methodName, index2) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index2 ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index2) {
          var type = index2 + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index2) {
          var takeName = "take" + (index2 ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index2) {
          var dropName = "drop" + (index2 ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash6[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash6.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash6, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash6.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash6[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash6.prototype.at = wrapperAt;
        lodash6.prototype.chain = wrapperChain;
        lodash6.prototype.commit = wrapperCommit;
        lodash6.prototype.next = wrapperNext;
        lodash6.prototype.plant = wrapperPlant;
        lodash6.prototype.reverse = wrapperReverse;
        lodash6.prototype.toJSON = lodash6.prototype.valueOf = lodash6.prototype.value = wrapperValue;
        lodash6.prototype.first = lodash6.prototype.head;
        if (symIterator) {
          lodash6.prototype[symIterator] = wrapperToIterator;
        }
        return lodash6;
      };
      var _ = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(exports2);
  }
});

// src/lowdb/populateCache.ts
var populateCache_exports = {};
__export(populateCache_exports, {
  populateCache: () => populateCache
});
module.exports = __toCommonJS(populateCache_exports);
var import_dayjs3 = __toESM(require_dayjs_min());

// node_modules/viem/_esm/utils/getAction.js
function getAction(client, action, name) {
  return (params) => client[action.name || name]?.(params) ?? action(client, params);
}

// node_modules/viem/_esm/utils/abi/encodeEventTopics.js
init_abi();

// node_modules/viem/_esm/errors/log.js
init_base();
var FilterTypeNotSupportedError = class extends BaseError {
  constructor(type) {
    super(`Filter type "${type}" is not supported.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "FilterTypeNotSupportedError"
    });
  }
};

// node_modules/viem/_esm/utils/abi/encodeEventTopics.js
init_toBytes();
init_getEventSelector();
init_keccak256();
init_encodeAbiParameters();
init_formatAbiItem2();
init_getAbiItem();
function encodeEventTopics({ abi, eventName, args }) {
  let abiItem = abi[0];
  if (eventName) {
    abiItem = getAbiItem({
      abi,
      args,
      name: eventName
    });
    if (!abiItem)
      throw new AbiEventNotFoundError(eventName, {
        docsPath: "/docs/contract/encodeEventTopics"
      });
  }
  if (abiItem.type !== "event")
    throw new AbiEventNotFoundError(void 0, {
      docsPath: "/docs/contract/encodeEventTopics"
    });
  const definition = formatAbiItem2(abiItem);
  const signature = getEventSelector(definition);
  let topics = [];
  if (args && "inputs" in abiItem) {
    const indexedInputs = abiItem.inputs?.filter((param) => "indexed" in param && param.indexed);
    const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? indexedInputs?.map((x) => args[x.name]) ?? [] : [];
    if (args_.length > 0) {
      topics = indexedInputs?.map((param, i) => Array.isArray(args_[i]) ? args_[i].map((_, j) => encodeArg({ param, value: args_[i][j] })) : args_[i] ? encodeArg({ param, value: args_[i] }) : null) ?? [];
    }
  }
  return [signature, ...topics];
}
function encodeArg({ param, value }) {
  if (param.type === "string" || param.type === "bytes")
    return keccak256(toBytes(value));
  if (param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
    throw new FilterTypeNotSupportedError(param.type);
  return encodeAbiParameters([param], [value]);
}

// node_modules/viem/_esm/actions/public/createContractEventFilter.js
init_toHex();

// node_modules/viem/_esm/utils/filters/createFilterRequestScope.js
function createFilterRequestScope(client, { method }) {
  const requestMap = {};
  if (client.transport.type === "fallback")
    client.transport.onResponse?.(({ method: method_, response: id2, status, transport }) => {
      if (status === "success" && method === method_)
        requestMap[id2] = transport.request;
    });
  return (id2) => requestMap[id2] || client.request;
}

// node_modules/viem/_esm/actions/public/createContractEventFilter.js
async function createContractEventFilter(client, { address, abi, args, eventName, fromBlock, strict, toBlock }) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newFilter"
  });
  const topics = eventName ? encodeEventTopics({
    abi,
    args,
    eventName
  }) : void 0;
  const id2 = await client.request({
    method: "eth_newFilter",
    params: [
      {
        address,
        fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
        toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
        topics
      }
    ]
  });
  return {
    abi,
    args,
    eventName,
    id: id2,
    request: getRequest(id2),
    strict,
    type: "event"
  };
}

// node_modules/viem/_esm/actions/public/estimateContractGas.js
init_parseAccount();
init_encodeFunctionData();

// node_modules/viem/_esm/utils/errors/getContractError.js
init_abi();
init_base();
init_contract();
init_rpc();
var EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi, address, args, docsPath: docsPath4, functionName, sender }) {
  const { code, data, message, shortMessage } = err instanceof RawContractError ? err : err instanceof BaseError ? err.walk((err2) => "data" in err2) || err.walk() : {};
  const cause = (() => {
    if (err instanceof AbiDecodingZeroDataError)
      return new ContractFunctionZeroDataError({ functionName });
    if ([EXECUTION_REVERTED_ERROR_CODE, InternalRpcError.code].includes(code) && (data || message || shortMessage)) {
      return new ContractFunctionRevertedError({
        abi,
        data: typeof data === "object" ? data.data : data,
        functionName,
        message: shortMessage ?? message
      });
    }
    return err;
  })();
  return new ContractFunctionExecutionError(cause, {
    abi,
    args,
    contractAddress: address,
    docsPath: docsPath4,
    functionName,
    sender
  });
}

// node_modules/viem/_esm/actions/public/estimateGas.js
init_parseAccount();

// node_modules/viem/_esm/errors/account.js
init_base();
var AccountNotFoundError = class extends BaseError {
  constructor({ docsPath: docsPath4 } = {}) {
    super([
      "Could not find an Account to execute with this Action.",
      "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."
    ].join("\n"), {
      docsPath: docsPath4,
      docsSlug: "account"
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AccountNotFoundError"
    });
  }
};

// node_modules/viem/_esm/actions/public/estimateGas.js
init_toHex();

// node_modules/viem/_esm/errors/estimateGas.js
init_formatEther();
init_formatGwei();
init_base();
init_transaction();
var EstimateGasExecutionError = class extends BaseError {
  constructor(cause, { account, docsPath: docsPath4, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }) {
    const prettyArgs = prettyPrint({
      from: account?.address,
      to,
      value: typeof value !== "undefined" && `${formatEther(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
      data,
      gas,
      gasPrice: typeof gasPrice !== "undefined" && `${formatGwei(gasPrice)} gwei`,
      maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
      maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
      nonce
    });
    super(cause.shortMessage, {
      cause,
      docsPath: docsPath4,
      metaMessages: [
        ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        prettyArgs
      ].filter(Boolean)
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "EstimateGasExecutionError"
    });
    this.cause = cause;
  }
};

// node_modules/viem/_esm/utils/errors/getEstimateGasError.js
init_node();
init_getNodeError();
function getEstimateGasError(err, { docsPath: docsPath4, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new EstimateGasExecutionError(cause, {
    docsPath: docsPath4,
    ...args
  });
}

// node_modules/viem/_esm/actions/public/estimateGas.js
init_extract();
init_transactionRequest();
init_assertRequest();

// node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js
init_parseAccount();

// node_modules/viem/_esm/errors/fee.js
init_formatGwei();
init_base();
var BaseFeeScalarError = class extends BaseError {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BaseFeeScalarError"
    });
  }
};
var Eip1559FeesNotSupportedError = class extends BaseError {
  constructor() {
    super("Chain does not support EIP-1559 fees.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Eip1559FeesNotSupportedError"
    });
  }
};
var MaxFeePerGasTooLowError = class extends BaseError {
  constructor({ maxPriorityFeePerGas }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${formatGwei(maxPriorityFeePerGas)} gwei).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "MaxFeePerGasTooLowError"
    });
  }
};

// node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js
init_fromHex();

// node_modules/viem/_esm/errors/block.js
init_base();
var BlockNotFoundError = class extends BaseError {
  constructor({ blockHash, blockNumber }) {
    let identifier = "Block";
    if (blockHash)
      identifier = `Block at hash "${blockHash}"`;
    if (blockNumber)
      identifier = `Block at number "${blockNumber}"`;
    super(`${identifier} could not be found.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BlockNotFoundError"
    });
  }
};

// node_modules/viem/_esm/actions/public/getBlock.js
init_toHex();

// node_modules/viem/_esm/utils/formatters/block.js
init_formatter();

// node_modules/viem/_esm/utils/formatters/transaction.js
init_fromHex();
init_formatter();
var transactionType = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559"
};
function formatTransaction(transaction) {
  const transaction_ = {
    ...transaction,
    blockHash: transaction.blockHash ? transaction.blockHash : null,
    blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
    chainId: transaction.chainId ? hexToNumber(transaction.chainId) : void 0,
    gas: transaction.gas ? BigInt(transaction.gas) : void 0,
    gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : void 0,
    maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : void 0,
    nonce: transaction.nonce ? hexToNumber(transaction.nonce) : void 0,
    to: transaction.to ? transaction.to : null,
    transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
    type: transaction.type ? transactionType[transaction.type] : void 0,
    typeHex: transaction.type ? transaction.type : void 0,
    value: transaction.value ? BigInt(transaction.value) : void 0,
    v: transaction.v ? BigInt(transaction.v) : void 0
  };
  transaction_.yParity = (() => {
    if (transaction.yParity)
      return Number(transaction.yParity);
    if (typeof transaction_.v === "bigint") {
      if (transaction_.v === 0n || transaction_.v === 27n)
        return 0;
      if (transaction_.v === 1n || transaction_.v === 28n)
        return 1;
      if (transaction_.v >= 35n)
        return transaction_.v % 2n === 0n ? 1 : 0;
    }
    return void 0;
  })();
  if (transaction_.type === "legacy") {
    delete transaction_.accessList;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
    delete transaction_.yParity;
  }
  if (transaction_.type === "eip2930") {
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
  }
  return transaction_;
}
var defineTransaction = /* @__PURE__ */ defineFormatter("transaction", formatTransaction);

// node_modules/viem/_esm/utils/formatters/block.js
function formatBlock(block) {
  const transactions = block.transactions?.map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return formatTransaction(transaction);
  });
  return {
    ...block,
    baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
    difficulty: block.difficulty ? BigInt(block.difficulty) : void 0,
    gasLimit: block.gasLimit ? BigInt(block.gasLimit) : void 0,
    gasUsed: block.gasUsed ? BigInt(block.gasUsed) : void 0,
    hash: block.hash ? block.hash : null,
    logsBloom: block.logsBloom ? block.logsBloom : null,
    nonce: block.nonce ? block.nonce : null,
    number: block.number ? BigInt(block.number) : null,
    size: block.size ? BigInt(block.size) : void 0,
    timestamp: block.timestamp ? BigInt(block.timestamp) : void 0,
    transactions,
    totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
  };
}
var defineBlock = /* @__PURE__ */ defineFormatter("block", formatBlock);

// node_modules/viem/_esm/actions/public/getBlock.js
async function getBlock(client, { blockHash, blockNumber, blockTag: blockTag_, includeTransactions: includeTransactions_ } = {}) {
  const blockTag = blockTag_ ?? "latest";
  const includeTransactions = includeTransactions_ ?? false;
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let block = null;
  if (blockHash) {
    block = await client.request({
      method: "eth_getBlockByHash",
      params: [blockHash, includeTransactions]
    });
  } else {
    block = await client.request({
      method: "eth_getBlockByNumber",
      params: [blockNumberHex || blockTag, includeTransactions]
    });
  }
  if (!block)
    throw new BlockNotFoundError({ blockHash, blockNumber });
  const format = client.chain?.formatters?.block?.format || formatBlock;
  return format(block);
}

// node_modules/viem/_esm/actions/public/getGasPrice.js
async function getGasPrice(client) {
  const gasPrice = await client.request({
    method: "eth_gasPrice"
  });
  return BigInt(gasPrice);
}

// node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js
async function estimateMaxPriorityFeePerGas(client, args) {
  return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
  const { block: block_, chain = client.chain, request } = args || {};
  if (typeof chain?.fees?.defaultPriorityFee === "function") {
    const block = block_ || await getAction(client, getBlock, "getBlock")({});
    return chain.fees.defaultPriorityFee({
      block,
      client,
      request
    });
  }
  if (typeof chain?.fees?.defaultPriorityFee !== "undefined")
    return chain?.fees?.defaultPriorityFee;
  try {
    const maxPriorityFeePerGasHex = await client.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return hexToBigInt(maxPriorityFeePerGasHex);
  } catch {
    const [block, gasPrice] = await Promise.all([
      block_ ? Promise.resolve(block_) : getAction(client, getBlock, "getBlock")({}),
      getAction(client, getGasPrice, "getGasPrice")({})
    ]);
    if (typeof block.baseFeePerGas !== "bigint")
      throw new Eip1559FeesNotSupportedError();
    const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
    if (maxPriorityFeePerGas < 0n)
      return 0n;
    return maxPriorityFeePerGas;
  }
}

// node_modules/viem/_esm/actions/public/estimateFeesPerGas.js
async function estimateFeesPerGas(client, args) {
  return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
  const { block: block_, chain = client.chain, request, type = "eip1559" } = args || {};
  const baseFeeMultiplier = await (async () => {
    if (typeof chain?.fees?.baseFeeMultiplier === "function")
      return chain.fees.baseFeeMultiplier({
        block: block_,
        client,
        request
      });
    return chain?.fees?.baseFeeMultiplier ?? 1.2;
  })();
  if (baseFeeMultiplier < 1)
    throw new BaseFeeScalarError();
  const decimals = baseFeeMultiplier.toString().split(".")[1]?.length ?? 0;
  const denominator = 10 ** decimals;
  const multiply = (base2) => base2 * BigInt(Math.ceil(baseFeeMultiplier * denominator)) / BigInt(denominator);
  const block = block_ ? block_ : await getAction(client, getBlock, "getBlock")({});
  if (typeof chain?.fees?.estimateFeesPerGas === "function")
    return chain.fees.estimateFeesPerGas({
      block: block_,
      client,
      multiply,
      request,
      type
    });
  if (type === "eip1559") {
    if (typeof block.baseFeePerGas !== "bigint")
      throw new Eip1559FeesNotSupportedError();
    const maxPriorityFeePerGas = request?.maxPriorityFeePerGas ? request.maxPriorityFeePerGas : await internal_estimateMaxPriorityFeePerGas(client, {
      block,
      chain,
      request
    });
    const baseFeePerGas = multiply(block.baseFeePerGas);
    const maxFeePerGas = request?.maxFeePerGas ?? baseFeePerGas + maxPriorityFeePerGas;
    return {
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  }
  const gasPrice = request?.gasPrice ?? multiply(await getAction(client, getGasPrice, "getGasPrice")({}));
  return {
    gasPrice
  };
}

// node_modules/viem/_esm/actions/public/getTransactionCount.js
init_fromHex();
init_toHex();
async function getTransactionCount(client, { address, blockTag = "latest", blockNumber }) {
  const count = await client.request({
    method: "eth_getTransactionCount",
    params: [address, blockNumber ? numberToHex(blockNumber) : blockTag]
  });
  return hexToNumber(count);
}

// node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js
init_assertRequest();

// node_modules/viem/_esm/utils/transaction/getTransactionType.js
init_transaction();
function getTransactionType(transaction) {
  if (transaction.type)
    return transaction.type;
  if (typeof transaction.maxFeePerGas !== "undefined" || typeof transaction.maxPriorityFeePerGas !== "undefined")
    return "eip1559";
  if (typeof transaction.gasPrice !== "undefined") {
    if (typeof transaction.accessList !== "undefined")
      return "eip2930";
    return "legacy";
  }
  throw new InvalidSerializableTransactionError({ transaction });
}

// node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js
async function prepareTransactionRequest(client, args) {
  const { account: account_ = client.account, chain, gas, nonce, type } = args;
  if (!account_)
    throw new AccountNotFoundError();
  const account = parseAccount(account_);
  const block = await getAction(client, getBlock, "getBlock")({ blockTag: "latest" });
  const request = { ...args, from: account.address };
  if (typeof nonce === "undefined")
    request.nonce = await getAction(client, getTransactionCount, "getTransactionCount")({
      address: account.address,
      blockTag: "pending"
    });
  if (typeof type === "undefined") {
    try {
      request.type = getTransactionType(request);
    } catch {
      request.type = typeof block.baseFeePerGas === "bigint" ? "eip1559" : "legacy";
    }
  }
  if (request.type === "eip1559") {
    const { maxFeePerGas, maxPriorityFeePerGas } = await internal_estimateFeesPerGas(client, {
      block,
      chain,
      request
    });
    if (typeof args.maxPriorityFeePerGas === "undefined" && args.maxFeePerGas && args.maxFeePerGas < maxPriorityFeePerGas)
      throw new MaxFeePerGasTooLowError({
        maxPriorityFeePerGas
      });
    request.maxPriorityFeePerGas = maxPriorityFeePerGas;
    request.maxFeePerGas = maxFeePerGas;
  } else {
    if (typeof args.maxFeePerGas !== "undefined" || typeof args.maxPriorityFeePerGas !== "undefined")
      throw new Eip1559FeesNotSupportedError();
    const { gasPrice: gasPrice_ } = await internal_estimateFeesPerGas(client, {
      block,
      chain,
      request,
      type: "legacy"
    });
    request.gasPrice = gasPrice_;
  }
  if (typeof gas === "undefined")
    request.gas = await getAction(client, estimateGas, "estimateGas")({
      ...request,
      account: { address: account.address, type: "json-rpc" }
    });
  assertRequest(request);
  return request;
}

// node_modules/viem/_esm/actions/public/estimateGas.js
async function estimateGas(client, args) {
  const account_ = args.account ?? client.account;
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/public/estimateGas"
    });
  const account = parseAccount(account_);
  try {
    const { accessList, blockNumber, blockTag, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = account.type === "local" ? await prepareTransactionRequest(client, args) : args;
    const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    assertRequest(args);
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || formatTransactionRequest;
    const request = format({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...extract(rest, { format: chainFormat }),
      from: account.address,
      accessList,
      data,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    });
    const balance = await client.request({
      method: "eth_estimateGas",
      params: block ? [request, block] : [request]
    });
    return BigInt(balance);
  } catch (err) {
    throw getEstimateGasError(err, {
      ...args,
      account,
      chain: client.chain
    });
  }
}

// node_modules/viem/_esm/actions/public/estimateContractGas.js
async function estimateContractGas(client, { abi, address, args, functionName, ...request }) {
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    const gas = await getAction(client, estimateGas, "estimateGas")({
      data,
      to: address,
      ...request
    });
    return gas;
  } catch (err) {
    const account = request.account ? parseAccount(request.account) : void 0;
    throw getContractError(err, {
      abi,
      address,
      args,
      docsPath: "/docs/contract/estimateContractGas",
      functionName,
      sender: account?.address
    });
  }
}

// node_modules/viem/_esm/actions/public/getContractEvents.js
init_getAbiItem();

// node_modules/viem/_esm/actions/public/getLogs.js
init_abi();

// node_modules/viem/_esm/utils/abi/decodeEventLog.js
init_abi();
init_getEventSelector();
init_decodeAbiParameters();
init_formatAbiItem2();
var docsPath = "/docs/contract/decodeEventLog";
function decodeEventLog({ abi, data, strict: strict_, topics }) {
  const strict = strict_ ?? true;
  const [signature, ...argTopics] = topics;
  if (!signature)
    throw new AbiEventSignatureEmptyTopicsError({
      docsPath
    });
  const abiItem = abi.find((x) => x.type === "event" && signature === getEventSelector(formatAbiItem2(x)));
  if (!(abiItem && "name" in abiItem) || abiItem.type !== "event")
    throw new AbiEventSignatureNotFoundError(signature, {
      docsPath
    });
  const { name, inputs } = abiItem;
  const isUnnamed = inputs?.some((x) => !("name" in x && x.name));
  let args = isUnnamed ? [] : {};
  const indexedInputs = inputs.filter((x) => "indexed" in x && x.indexed);
  for (let i = 0; i < indexedInputs.length; i++) {
    const param = indexedInputs[i];
    const topic = argTopics[i];
    if (!topic)
      throw new DecodeLogTopicsMismatch({
        abiItem,
        param
      });
    args[param.name || i] = decodeTopic({ param, value: topic });
  }
  const nonIndexedInputs = inputs.filter((x) => !("indexed" in x && x.indexed));
  if (nonIndexedInputs.length > 0) {
    if (data && data !== "0x") {
      try {
        const decodedData = decodeAbiParameters(nonIndexedInputs, data);
        if (decodedData) {
          if (isUnnamed)
            args = [...args, ...decodedData];
          else {
            for (let i = 0; i < nonIndexedInputs.length; i++) {
              args[nonIndexedInputs[i].name] = decodedData[i];
            }
          }
        }
      } catch (err) {
        if (strict) {
          if (err instanceof AbiDecodingDataSizeTooSmallError)
            throw new DecodeLogDataMismatch({
              abiItem,
              data: err.data,
              params: err.params,
              size: err.size
            });
          throw err;
        }
      }
    } else if (strict) {
      throw new DecodeLogDataMismatch({
        abiItem,
        data: "0x",
        params: nonIndexedInputs,
        size: 0
      });
    }
  }
  return {
    eventName: name,
    args: Object.values(args).length > 0 ? args : void 0
  };
}
function decodeTopic({ param, value }) {
  if (param.type === "string" || param.type === "bytes" || param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
    return value;
  const decodedArg = decodeAbiParameters([param], value) || [];
  return decodedArg[0];
}

// node_modules/viem/_esm/actions/public/getLogs.js
init_toHex();

// node_modules/viem/_esm/utils/formatters/log.js
function formatLog(log, { args, eventName } = {}) {
  return {
    ...log,
    blockHash: log.blockHash ? log.blockHash : null,
    blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
    logIndex: log.logIndex ? Number(log.logIndex) : null,
    transactionHash: log.transactionHash ? log.transactionHash : null,
    transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
    ...eventName ? { args, eventName } : {}
  };
}

// node_modules/viem/_esm/actions/public/getLogs.js
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = {}) {
  const strict = strict_ ?? false;
  const events = events_ ?? (event ? [event] : void 0);
  let topics = [];
  if (events) {
    topics = [
      events.flatMap((event2) => encodeEventTopics({
        abi: [event2],
        eventName: event2.name,
        args
      }))
    ];
    if (event)
      topics = topics[0];
  }
  let logs;
  if (blockHash) {
    logs = await client.request({
      method: "eth_getLogs",
      params: [{ address, topics, blockHash }]
    });
  } else {
    logs = await client.request({
      method: "eth_getLogs",
      params: [
        {
          address,
          topics,
          fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
          toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock
        }
      ]
    });
  }
  return logs.map((log) => {
    try {
      const { eventName, args: args2 } = events ? decodeEventLog({
        abi: events,
        data: log.data,
        topics: log.topics,
        strict
      }) : { eventName: void 0, args: void 0 };
      return formatLog(log, { args: args2, eventName });
    } catch (err) {
      let eventName;
      let isUnnamed;
      if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
        if (strict)
          return;
        eventName = err.abiItem.name;
        isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
      }
      return formatLog(log, { args: isUnnamed ? [] : {}, eventName });
    }
  }).filter(Boolean);
}

// node_modules/viem/_esm/actions/public/getContractEvents.js
async function getContractEvents(client, { abi, address, args, blockHash, eventName, fromBlock, toBlock, strict }) {
  const event = eventName ? getAbiItem({ abi, name: eventName }) : void 0;
  const events = !event ? abi.filter((x) => x.type === "event") : void 0;
  return getAction(client, getLogs, "getLogs")({
    address,
    args,
    blockHash,
    event,
    events,
    fromBlock,
    toBlock,
    strict
  });
}

// node_modules/viem/_esm/actions/public/readContract.js
init_decodeFunctionResult();
init_encodeFunctionData();
init_call();
async function readContract(client, { abi, address, args, functionName, ...callRequest }) {
  const calldata = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    const { data } = await getAction(client, call, "call")({
      data: calldata,
      to: address,
      ...callRequest
    });
    return decodeFunctionResult({
      abi,
      args,
      functionName,
      data: data || "0x"
    });
  } catch (err) {
    throw getContractError(err, {
      abi,
      address,
      args,
      docsPath: "/docs/contract/readContract",
      functionName
    });
  }
}

// node_modules/viem/_esm/actions/public/simulateContract.js
init_parseAccount();
init_decodeFunctionResult();
init_encodeFunctionData();
init_call();
async function simulateContract(client, { abi, address, args, dataSuffix, functionName, ...callRequest }) {
  const account = callRequest.account ? parseAccount(callRequest.account) : void 0;
  const calldata = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    const { data } = await getAction(client, call, "call")({
      batch: false,
      data: `${calldata}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
      to: address,
      ...callRequest
    });
    const result = decodeFunctionResult({
      abi,
      args,
      functionName,
      data: data || "0x"
    });
    return {
      result,
      request: {
        abi,
        address,
        args,
        dataSuffix,
        functionName,
        ...callRequest
      }
    };
  } catch (err) {
    throw getContractError(err, {
      abi,
      address,
      args,
      docsPath: "/docs/contract/simulateContract",
      functionName,
      sender: account?.address
    });
  }
}

// node_modules/viem/_esm/utils/observe.js
var listenersCache = /* @__PURE__ */ new Map();
var cleanupCache = /* @__PURE__ */ new Map();
var callbackCount = 0;
function observe(observerId, callbacks, fn) {
  const callbackId = ++callbackCount;
  const getListeners = () => listenersCache.get(observerId) || [];
  const unsubscribe = () => {
    const listeners2 = getListeners();
    listenersCache.set(observerId, listeners2.filter((cb) => cb.id !== callbackId));
  };
  const unwatch = () => {
    const cleanup2 = cleanupCache.get(observerId);
    if (getListeners().length === 1 && cleanup2)
      cleanup2();
    unsubscribe();
  };
  const listeners = getListeners();
  listenersCache.set(observerId, [
    ...listeners,
    { id: callbackId, fns: callbacks }
  ]);
  if (listeners && listeners.length > 0)
    return unwatch;
  const emit = {};
  for (const key in callbacks) {
    emit[key] = (...args) => {
      const listeners2 = getListeners();
      if (listeners2.length === 0)
        return;
      for (const listener of listeners2)
        listener.fns[key]?.(...args);
    };
  }
  const cleanup = fn(emit);
  if (typeof cleanup === "function")
    cleanupCache.set(observerId, cleanup);
  return unwatch;
}

// node_modules/viem/_esm/utils/wait.js
async function wait(time) {
  return new Promise((res) => setTimeout(res, time));
}

// node_modules/viem/_esm/utils/poll.js
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
  let active = true;
  const unwatch = () => active = false;
  const watch = async () => {
    let data = void 0;
    if (emitOnBegin)
      data = await fn({ unpoll: unwatch });
    const initialWait = await initialWaitTime?.(data) ?? interval;
    await wait(initialWait);
    const poll2 = async () => {
      if (!active)
        return;
      await fn({ unpoll: unwatch });
      await wait(interval);
      poll2();
    };
    poll2();
  };
  watch();
  return unwatch;
}

// node_modules/viem/_esm/actions/public/watchContractEvent.js
init_stringify();
init_abi();
init_rpc();

// node_modules/viem/_esm/utils/promise/withCache.js
var promiseCache = /* @__PURE__ */ new Map();
var responseCache = /* @__PURE__ */ new Map();
function getCache(cacheKey2) {
  const buildCache = (cacheKey3, cache) => ({
    clear: () => cache.delete(cacheKey3),
    get: () => cache.get(cacheKey3),
    set: (data) => cache.set(cacheKey3, data)
  });
  const promise = buildCache(cacheKey2, promiseCache);
  const response = buildCache(cacheKey2, responseCache);
  return {
    clear: () => {
      promise.clear();
      response.clear();
    },
    promise,
    response
  };
}
async function withCache(fn, { cacheKey: cacheKey2, cacheTime = Infinity }) {
  const cache = getCache(cacheKey2);
  const response = cache.response.get();
  if (response && cacheTime > 0) {
    const age = (/* @__PURE__ */ new Date()).getTime() - response.created.getTime();
    if (age < cacheTime)
      return response.data;
  }
  let promise = cache.promise.get();
  if (!promise) {
    promise = fn();
    cache.promise.set(promise);
  }
  try {
    const data = await promise;
    cache.response.set({ created: /* @__PURE__ */ new Date(), data });
    return data;
  } finally {
    cache.promise.clear();
  }
}

// node_modules/viem/_esm/actions/public/getBlockNumber.js
var cacheKey = (id2) => `blockNumber.${id2}`;
async function getBlockNumber(client, { cacheTime = client.cacheTime, maxAge } = {}) {
  const blockNumberHex = await withCache(() => client.request({
    method: "eth_blockNumber"
  }), { cacheKey: cacheKey(client.uid), cacheTime: maxAge ?? cacheTime });
  return BigInt(blockNumberHex);
}

// node_modules/viem/_esm/actions/public/getFilterChanges.js
init_abi();
async function getFilterChanges(_client, { filter }) {
  const strict = "strict" in filter && filter.strict;
  const logs = await filter.request({
    method: "eth_getFilterChanges",
    params: [filter.id]
  });
  return logs.map((log) => {
    if (typeof log === "string")
      return log;
    try {
      const { eventName, args } = "abi" in filter && filter.abi ? decodeEventLog({
        abi: filter.abi,
        data: log.data,
        topics: log.topics,
        strict
      }) : { eventName: void 0, args: void 0 };
      return formatLog(log, { args, eventName });
    } catch (err) {
      let eventName;
      let isUnnamed;
      if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
        if ("strict" in filter && filter.strict)
          return;
        eventName = err.abiItem.name;
        isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
      }
      return formatLog(log, { args: isUnnamed ? [] : {}, eventName });
    }
  }).filter(Boolean);
}

// node_modules/viem/_esm/actions/public/uninstallFilter.js
async function uninstallFilter(_client, { filter }) {
  return filter.request({
    method: "eth_uninstallFilter",
    params: [filter.id]
  });
}

// node_modules/viem/_esm/actions/public/watchContractEvent.js
function watchContractEvent(client, { abi, address, args, batch = true, eventName, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const pollContractEvent = () => {
    const observerId = stringify([
      "watchContractEvent",
      address,
      args,
      batch,
      client.uid,
      eventName,
      pollingInterval
    ]);
    const strict = strict_ ?? false;
    return observe(observerId, { onLogs, onError }, (emit) => {
      let previousBlockNumber;
      let filter;
      let initialized = false;
      const unwatch = poll(async () => {
        if (!initialized) {
          try {
            filter = await getAction(client, createContractEventFilter, "createContractEventFilter")({
              abi,
              address,
              args,
              eventName,
              strict
            });
          } catch {
          }
          initialized = true;
          return;
        }
        try {
          let logs;
          if (filter) {
            logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          } else {
            const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
            if (previousBlockNumber && previousBlockNumber !== blockNumber) {
              logs = await getAction(client, getContractEvents, "getContractEvents")({
                abi,
                address,
                args,
                eventName,
                fromBlock: previousBlockNumber + 1n,
                toBlock: blockNumber,
                strict
              });
            } else {
              logs = [];
            }
            previousBlockNumber = blockNumber;
          }
          if (logs.length === 0)
            return;
          if (batch)
            emit.onLogs(logs);
          else
            for (const log of logs)
              emit.onLogs([log]);
        } catch (err) {
          if (filter && err instanceof InvalidInputRpcError)
            initialized = false;
          emit.onError?.(err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribeContractEvent = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const topics = eventName ? encodeEventTopics({
          abi,
          eventName,
          args
        }) : [];
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["logs", { address, topics }],
          onData(data) {
            if (!active)
              return;
            const log = data.result;
            try {
              const { eventName: eventName2, args: args2 } = decodeEventLog({
                abi,
                data: log.data,
                topics: log.topics,
                strict: strict_
              });
              const formatted = formatLog(log, {
                args: args2,
                eventName: eventName2
              });
              onLogs([formatted]);
            } catch (err) {
              let eventName2;
              let isUnnamed;
              if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
                if (strict_)
                  return;
                eventName2 = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
              }
              const formatted = formatLog(log, {
                args: isUnnamed ? [] : {},
                eventName: eventName2
              });
              onLogs([formatted]);
            }
          },
          onError(error) {
            onError?.(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError?.(err);
      }
    })();
    return unsubscribe;
  };
  return enablePolling ? pollContractEvent() : subscribeContractEvent();
}

// node_modules/viem/_esm/actions/wallet/writeContract.js
init_encodeFunctionData();

// node_modules/viem/_esm/actions/wallet/sendTransaction.js
init_parseAccount();

// node_modules/viem/_esm/utils/chain/assertCurrentChain.js
init_chain();
function assertCurrentChain({ chain, currentChainId }) {
  if (!chain)
    throw new ChainNotFoundError();
  if (currentChainId !== chain.id)
    throw new ChainMismatchError({ chain, currentChainId });
}

// node_modules/viem/_esm/utils/errors/getTransactionError.js
init_node();
init_transaction();
init_getNodeError();
function getTransactionError(err, { docsPath: docsPath4, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new TransactionExecutionError(cause, {
    docsPath: docsPath4,
    ...args
  });
}

// node_modules/viem/_esm/actions/wallet/sendTransaction.js
init_extract();
init_transactionRequest();
init_assertRequest();

// node_modules/viem/_esm/actions/public/getChainId.js
init_fromHex();
async function getChainId(client) {
  const chainIdHex = await client.request({
    method: "eth_chainId"
  });
  return hexToNumber(chainIdHex);
}

// node_modules/viem/_esm/actions/wallet/sendRawTransaction.js
async function sendRawTransaction(client, { serializedTransaction }) {
  return client.request({
    method: "eth_sendRawTransaction",
    params: [serializedTransaction]
  });
}

// node_modules/viem/_esm/actions/wallet/sendTransaction.js
async function sendTransaction(client, args) {
  const { account: account_ = client.account, chain = client.chain, accessList, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/sendTransaction"
    });
  const account = parseAccount(account_);
  try {
    assertRequest(args);
    let chainId;
    if (chain !== null) {
      chainId = await getAction(client, getChainId, "getChainId")({});
      assertCurrentChain({
        currentChainId: chainId,
        chain
      });
    }
    if (account.type === "local") {
      const request2 = await getAction(client, prepareTransactionRequest, "prepareTransactionRequest")({
        account,
        accessList,
        chain,
        data,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        value,
        ...rest
      });
      if (!chainId)
        chainId = await getAction(client, getChainId, "getChainId")({});
      const serializer = chain?.serializers?.transaction;
      const serializedTransaction = await account.signTransaction({
        ...request2,
        chainId
      }, { serializer });
      return await getAction(client, sendRawTransaction, "sendRawTransaction")({
        serializedTransaction
      });
    }
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || formatTransactionRequest;
    const request = format({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...extract(rest, { format: chainFormat }),
      accessList,
      data,
      from: account.address,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    });
    return await client.request({
      method: "eth_sendTransaction",
      params: [request]
    });
  } catch (err) {
    throw getTransactionError(err, {
      ...args,
      account,
      chain: args.chain || void 0
    });
  }
}

// node_modules/viem/_esm/actions/wallet/writeContract.js
async function writeContract(client, { abi, address, args, dataSuffix, functionName, ...request }) {
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  const hash3 = await getAction(client, sendTransaction, "sendTransaction")({
    data: `${data}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
    to: address,
    ...request
  });
  return hash3;
}

// node_modules/viem/_esm/actions/getContract.js
function getContract({ abi, address, publicClient, walletClient }) {
  const hasPublicClient = publicClient !== void 0 && publicClient !== null;
  const hasWalletClient = walletClient !== void 0 && walletClient !== null;
  const contract = {};
  let hasReadFunction = false;
  let hasWriteFunction = false;
  let hasEvent = false;
  for (const item of abi) {
    if (item.type === "function")
      if (item.stateMutability === "view" || item.stateMutability === "pure")
        hasReadFunction = true;
      else
        hasWriteFunction = true;
    else if (item.type === "event")
      hasEvent = true;
    if (hasReadFunction && hasWriteFunction && hasEvent)
      break;
  }
  if (hasPublicClient) {
    if (hasReadFunction)
      contract.read = new Proxy({}, {
        get(_, functionName) {
          return (...parameters) => {
            const { args, options: options2 } = getFunctionParameters(parameters);
            return getAction(publicClient, readContract, "readContract")({
              abi,
              address,
              functionName,
              args,
              ...options2
            });
          };
        }
      });
    if (hasWriteFunction)
      contract.simulate = new Proxy({}, {
        get(_, functionName) {
          return (...parameters) => {
            const { args, options: options2 } = getFunctionParameters(parameters);
            return getAction(publicClient, simulateContract, "simulateContract")({
              abi,
              address,
              functionName,
              args,
              ...options2
            });
          };
        }
      });
    if (hasEvent) {
      contract.createEventFilter = new Proxy({}, {
        get(_, eventName) {
          return (...parameters) => {
            const abiEvent = abi.find((x) => x.type === "event" && x.name === eventName);
            const { args, options: options2 } = getEventParameters(parameters, abiEvent);
            return getAction(publicClient, createContractEventFilter, "createContractEventFilter")({
              abi,
              address,
              eventName,
              args,
              ...options2
            });
          };
        }
      });
      contract.getEvents = new Proxy({}, {
        get(_, eventName) {
          return (...parameters) => {
            const abiEvent = abi.find((x) => x.type === "event" && x.name === eventName);
            const { args, options: options2 } = getEventParameters(parameters, abiEvent);
            return getAction(publicClient, getContractEvents, "getContractEvents")({
              abi,
              address,
              eventName,
              args,
              ...options2
            });
          };
        }
      });
      contract.watchEvent = new Proxy({}, {
        get(_, eventName) {
          return (...parameters) => {
            const abiEvent = abi.find((x) => x.type === "event" && x.name === eventName);
            const { args, options: options2 } = getEventParameters(parameters, abiEvent);
            return getAction(publicClient, watchContractEvent, "watchContractEvent")({
              abi,
              address,
              eventName,
              args,
              ...options2
            });
          };
        }
      });
    }
  }
  if (hasWalletClient) {
    if (hasWriteFunction)
      contract.write = new Proxy({}, {
        get(_, functionName) {
          return (...parameters) => {
            const { args, options: options2 } = getFunctionParameters(parameters);
            return getAction(walletClient, writeContract, "writeContract")({
              abi,
              address,
              functionName,
              args,
              ...options2
            });
          };
        }
      });
  }
  if (hasPublicClient || hasWalletClient) {
    if (hasWriteFunction)
      contract.estimateGas = new Proxy({}, {
        get(_, functionName) {
          return (...parameters) => {
            const { args, options: options2 } = getFunctionParameters(parameters);
            const client = publicClient ?? walletClient;
            return getAction(client, estimateContractGas, "estimateContractGas")({
              abi,
              address,
              functionName,
              args,
              ...options2,
              account: options2.account ?? walletClient.account
            });
          };
        }
      });
  }
  contract.address = address;
  contract.abi = abi;
  return contract;
}
function getFunctionParameters(values) {
  const hasArgs = values.length && Array.isArray(values[0]);
  const args = hasArgs ? values[0] : [];
  const options2 = (hasArgs ? values[1] : values[0]) ?? {};
  return { args, options: options2 };
}
function getEventParameters(values, abiEvent) {
  let hasArgs = false;
  if (Array.isArray(values[0]))
    hasArgs = true;
  else if (values.length === 1) {
    hasArgs = abiEvent.inputs.some((x) => x.indexed);
  } else if (values.length === 2) {
    hasArgs = true;
  }
  const args = hasArgs ? values[0] : void 0;
  const options2 = (hasArgs ? values[1] : values[0]) ?? {};
  return { args, options: options2 };
}

// node_modules/viem/_esm/utils/accounts.js
init_parseAccount();

// node_modules/viem/_esm/utils/uid.js
var size2 = 256;
var index = size2;
var buffer;
function uid(length = 11) {
  if (!buffer || index + length > size2 * 2) {
    buffer = "";
    index = 0;
    for (let i = 0; i < size2; i++) {
      buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
    }
  }
  return buffer.substring(index, index++ + length);
}

// node_modules/viem/_esm/clients/createClient.js
function createClient(parameters) {
  const { batch, cacheTime = parameters.pollingInterval ?? 4e3, key = "base", name = "Base Client", pollingInterval = 4e3, type = "base" } = parameters;
  const chain = parameters.chain;
  const account = parameters.account ? parseAccount(parameters.account) : void 0;
  const { config, request, value } = parameters.transport({
    chain,
    pollingInterval
  });
  const transport = { ...config, ...value };
  const client = {
    account,
    batch,
    cacheTime,
    chain,
    key,
    name,
    pollingInterval,
    request,
    transport,
    type,
    uid: uid()
  };
  function extend(base2) {
    return (extendFn) => {
      const extended = extendFn(base2);
      for (const key2 in client)
        delete extended[key2];
      const combined = { ...base2, ...extended };
      return Object.assign(combined, { extend: extend(combined) });
    };
  }
  return Object.assign(client, { extend: extend(client) });
}

// node_modules/viem/_esm/utils/buildRequest.js
init_base();
init_request();
init_rpc();

// node_modules/viem/_esm/utils/promise/withRetry.js
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry = () => true } = {}) {
  return new Promise((resolve, reject) => {
    const attemptRetry = async ({ count = 0 } = {}) => {
      const retry = async ({ error }) => {
        const delay = typeof delay_ === "function" ? delay_({ count, error }) : delay_;
        if (delay)
          await wait(delay);
        attemptRetry({ count: count + 1 });
      };
      try {
        const data = await fn();
        resolve(data);
      } catch (err) {
        if (count < retryCount && await shouldRetry({ count, error: err }))
          return retry({ error: err });
        reject(err);
      }
    };
    attemptRetry();
  });
}

// node_modules/viem/_esm/utils/buildRequest.js
var isDeterministicError = (error) => {
  if ("code" in error)
    return error.code !== -1 && error.code !== -32004 && error.code !== -32005 && error.code !== -32042 && error.code !== -32603;
  if (error instanceof HttpRequestError && error.status)
    return error.status !== 403 && error.status !== 408 && error.status !== 413 && error.status !== 429 && error.status !== 500 && error.status !== 502 && error.status !== 503 && error.status !== 504;
  return false;
};
function buildRequest(request, { retryDelay = 150, retryCount = 3 } = {}) {
  return async (args) => withRetry(async () => {
    try {
      return await request(args);
    } catch (err_) {
      const err = err_;
      switch (err.code) {
        case ParseRpcError.code:
          throw new ParseRpcError(err);
        case InvalidRequestRpcError.code:
          throw new InvalidRequestRpcError(err);
        case MethodNotFoundRpcError.code:
          throw new MethodNotFoundRpcError(err);
        case InvalidParamsRpcError.code:
          throw new InvalidParamsRpcError(err);
        case InternalRpcError.code:
          throw new InternalRpcError(err);
        case InvalidInputRpcError.code:
          throw new InvalidInputRpcError(err);
        case ResourceNotFoundRpcError.code:
          throw new ResourceNotFoundRpcError(err);
        case ResourceUnavailableRpcError.code:
          throw new ResourceUnavailableRpcError(err);
        case TransactionRejectedRpcError.code:
          throw new TransactionRejectedRpcError(err);
        case MethodNotSupportedRpcError.code:
          throw new MethodNotSupportedRpcError(err);
        case LimitExceededRpcError.code:
          throw new LimitExceededRpcError(err);
        case JsonRpcVersionUnsupportedError.code:
          throw new JsonRpcVersionUnsupportedError(err);
        case UserRejectedRequestError.code:
          throw new UserRejectedRequestError(err);
        case UnauthorizedProviderError.code:
          throw new UnauthorizedProviderError(err);
        case UnsupportedProviderMethodError.code:
          throw new UnsupportedProviderMethodError(err);
        case ProviderDisconnectedError.code:
          throw new ProviderDisconnectedError(err);
        case ChainDisconnectedError.code:
          throw new ChainDisconnectedError(err);
        case SwitchChainError.code:
          throw new SwitchChainError(err);
        case 5e3:
          throw new UserRejectedRequestError(err);
        default:
          if (err_ instanceof BaseError)
            throw err_;
          throw new UnknownRpcError(err);
      }
    }
  }, {
    delay: ({ count, error }) => {
      if (error && error instanceof HttpRequestError) {
        const retryAfter = error?.headers?.get("Retry-After");
        if (retryAfter?.match(/\d/))
          return parseInt(retryAfter) * 1e3;
      }
      return ~~(1 << count) * retryDelay;
    },
    retryCount,
    shouldRetry: ({ error }) => !isDeterministicError(error)
  });
}

// node_modules/viem/_esm/clients/transports/createTransport.js
function createTransport({ key, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
  return {
    config: { key, name, request, retryCount, retryDelay, timeout, type },
    request: buildRequest(request, { retryCount, retryDelay }),
    value
  };
}

// node_modules/viem/_esm/clients/transports/fallback.js
function fallback(transports_, config = {}) {
  const { key = "fallback", name = "Fallback", rank = false, retryCount, retryDelay } = config;
  return ({ chain, pollingInterval = 4e3, timeout }) => {
    let transports = transports_;
    let onResponse = () => {
    };
    const transport = createTransport({
      key,
      name,
      async request({ method, params }) {
        const fetch2 = async (i = 0) => {
          const transport2 = transports[i]({ chain, retryCount: 0, timeout });
          try {
            const response = await transport2.request({
              method,
              params
            });
            onResponse({
              method,
              params,
              response,
              transport: transport2,
              status: "success"
            });
            return response;
          } catch (err) {
            onResponse({
              error: err,
              method,
              params,
              transport: transport2,
              status: "error"
            });
            if (isDeterministicError(err))
              throw err;
            if (i === transports.length - 1)
              throw err;
            return fetch2(i + 1);
          }
        };
        return fetch2();
      },
      retryCount,
      retryDelay,
      type: "fallback"
    }, {
      onResponse: (fn) => onResponse = fn,
      transports: transports.map((fn) => fn({ chain, retryCount: 0 }))
    });
    if (rank) {
      const rankOptions = typeof rank === "object" ? rank : {};
      rankTransports({
        chain,
        interval: rankOptions.interval ?? pollingInterval,
        onTransports: (transports_2) => transports = transports_2,
        sampleCount: rankOptions.sampleCount,
        timeout: rankOptions.timeout,
        transports,
        weights: rankOptions.weights
      });
    }
    return transport;
  };
}
function rankTransports({ chain, interval = 4e3, onTransports, sampleCount = 10, timeout = 1e3, transports, weights = {} }) {
  const { stability: stabilityWeight = 0.7, latency: latencyWeight = 0.3 } = weights;
  const samples = [];
  const rankTransports_ = async () => {
    const sample = await Promise.all(transports.map(async (transport) => {
      const transport_ = transport({ chain, retryCount: 0, timeout });
      const start = Date.now();
      let end;
      let success;
      try {
        await transport_.request({ method: "net_listening" });
        success = 1;
      } catch {
        success = 0;
      } finally {
        end = Date.now();
      }
      const latency = end - start;
      return { latency, success };
    }));
    samples.push(sample);
    if (samples.length > sampleCount)
      samples.shift();
    const maxLatency = Math.max(...samples.map((sample2) => Math.max(...sample2.map(({ latency }) => latency))));
    const scores = transports.map((_, i) => {
      const latencies = samples.map((sample2) => sample2[i].latency);
      const meanLatency = latencies.reduce((acc, latency) => acc + latency, 0) / latencies.length;
      const latencyScore = 1 - meanLatency / maxLatency;
      const successes = samples.map((sample2) => sample2[i].success);
      const stabilityScore = successes.reduce((acc, success) => acc + success, 0) / successes.length;
      if (stabilityScore === 0)
        return [0, i];
      return [
        latencyWeight * latencyScore + stabilityWeight * stabilityScore,
        i
      ];
    }).sort((a, b) => b[0] - a[0]);
    onTransports(scores.map(([, i]) => transports[i]));
    await wait(interval);
    rankTransports_();
  };
  rankTransports_();
}

// node_modules/viem/_esm/clients/transports/http.js
init_request();

// node_modules/viem/_esm/errors/transport.js
init_base();
var UrlRequiredError = class extends BaseError {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro"
    });
  }
};

// node_modules/viem/_esm/clients/transports/http.js
init_createBatchScheduler();

// node_modules/viem/_esm/utils/rpc.js
init_request();

// node_modules/viem/_esm/utils/promise/withTimeout.js
function withTimeout(fn, { errorInstance = new Error("timed out"), timeout, signal }) {
  return new Promise((resolve, reject) => {
    ;
    (async () => {
      let timeoutId;
      try {
        const controller = new AbortController();
        if (timeout > 0) {
          timeoutId = setTimeout(() => {
            if (signal) {
              controller.abort();
            } else {
              reject(errorInstance);
            }
          }, timeout);
        }
        resolve(await fn({ signal: controller?.signal }));
      } catch (err) {
        if (err.name === "AbortError")
          reject(errorInstance);
        reject(err);
      } finally {
        clearTimeout(timeoutId);
      }
    })();
  });
}

// node_modules/viem/_esm/utils/rpc.js
init_stringify();
var id = 0;
async function http(url, { body, fetchOptions = {}, timeout = 1e4 }) {
  const { headers, method, signal: signal_ } = fetchOptions;
  try {
    const response = await withTimeout(async ({ signal }) => {
      const response2 = await fetch(url, {
        ...fetchOptions,
        body: Array.isArray(body) ? stringify(body.map((body2) => ({
          jsonrpc: "2.0",
          id: body2.id ?? id++,
          ...body2
        }))) : stringify({ jsonrpc: "2.0", id: body.id ?? id++, ...body }),
        headers: {
          ...headers,
          "Content-Type": "application/json"
        },
        method: method || "POST",
        signal: signal_ || (timeout > 0 ? signal : void 0)
      });
      return response2;
    }, {
      errorInstance: new TimeoutError({ body, url }),
      timeout,
      signal: true
    });
    let data;
    if (response.headers.get("Content-Type")?.startsWith("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    if (!response.ok) {
      throw new HttpRequestError({
        body,
        details: stringify(data.error) || response.statusText,
        headers: response.headers,
        status: response.status,
        url
      });
    }
    return data;
  } catch (err) {
    if (err instanceof HttpRequestError)
      throw err;
    if (err instanceof TimeoutError)
      throw err;
    throw new HttpRequestError({
      body,
      details: err.message,
      url
    });
  }
}
function webSocket(socket, { body, onResponse }) {
  if (socket.readyState === socket.CLOSED || socket.readyState === socket.CLOSING)
    throw new WebSocketRequestError({
      body,
      url: socket.url,
      details: "Socket is closed."
    });
  const id_ = id++;
  const callback = ({ data }) => {
    const message = JSON.parse(data);
    if (typeof message.id === "number" && id_ !== message.id)
      return;
    onResponse?.(message);
    if (body.method === "eth_subscribe" && typeof message.result === "string") {
      socket.subscriptions.set(message.result, callback);
    }
    if (body.method === "eth_unsubscribe") {
      socket.subscriptions.delete(body.params?.[0]);
    }
  };
  socket.requests.set(id_, callback);
  socket.send(JSON.stringify({ jsonrpc: "2.0", ...body, id: id_ }));
  return socket;
}
async function webSocketAsync(socket, { body, timeout = 1e4 }) {
  return withTimeout(() => new Promise((onResponse) => rpc.webSocket(socket, {
    body,
    onResponse
  })), {
    errorInstance: new TimeoutError({ body, url: socket.url }),
    timeout
  });
}
var rpc = {
  http,
  webSocket,
  webSocketAsync
};

// node_modules/viem/_esm/clients/transports/http.js
function http2(url, config = {}) {
  const { batch, fetchOptions, key = "http", name = "HTTP JSON-RPC", retryDelay } = config;
  return ({ chain, retryCount: retryCount_, timeout: timeout_ }) => {
    const { batchSize = 1e3, wait: wait2 = 0 } = typeof batch === "object" ? batch : {};
    const retryCount = config.retryCount ?? retryCount_;
    const timeout = timeout_ ?? config.timeout ?? 1e4;
    const url_ = url || chain?.rpcUrls.default.http[0];
    if (!url_)
      throw new UrlRequiredError();
    return createTransport({
      key,
      name,
      async request({ method, params }) {
        const body = { method, params };
        const { schedule } = createBatchScheduler({
          id: `${url}`,
          wait: wait2,
          shouldSplitBatch(requests) {
            return requests.length > batchSize;
          },
          fn: (body2) => rpc.http(url_, {
            body: body2,
            fetchOptions,
            timeout
          }),
          sort: (a, b) => a.id - b.id
        });
        const fn = async (body2) => batch ? schedule(body2) : [await rpc.http(url_, { body: body2, fetchOptions, timeout })];
        const [{ error, result }] = await fn(body);
        if (error)
          throw new RpcRequestError({
            body,
            error,
            url: url_
          });
        return result;
      },
      retryCount,
      retryDelay,
      timeout,
      type: "http"
    }, {
      fetchOptions,
      url
    });
  };
}

// node_modules/viem/_esm/actions/ens/getEnsAddress.js
init_abis();
init_decodeFunctionResult();
init_encodeFunctionData();
init_getChainContractAddress();
init_trim();
init_toHex();

// node_modules/viem/_esm/utils/ens/errors.js
init_solidity();
init_base();
init_contract();
function isNullUniversalResolverError(err, callType) {
  if (!(err instanceof BaseError))
    return false;
  const cause = err.walk((e) => e instanceof ContractFunctionRevertedError);
  if (!(cause instanceof ContractFunctionRevertedError))
    return false;
  if (cause.data?.errorName === "ResolverNotFound")
    return true;
  if (cause.data?.errorName === "ResolverWildcardNotSupported")
    return true;
  if (cause.reason?.includes("Wildcard on non-extended resolvers is not supported"))
    return true;
  if (callType === "reverse" && cause.reason === panicReasons[50])
    return true;
  return false;
}

// node_modules/viem/_esm/utils/ens/namehash.js
init_concat();
init_toBytes();
init_toHex();
init_keccak256();

// node_modules/viem/_esm/utils/ens/encodedLabelToLabelhash.js
init_isHex();
function encodedLabelToLabelhash(label) {
  if (label.length !== 66)
    return null;
  if (label.indexOf("[") !== 0)
    return null;
  if (label.indexOf("]") !== 65)
    return null;
  const hash3 = `0x${label.slice(1, 65)}`;
  if (!isHex(hash3))
    return null;
  return hash3;
}

// node_modules/viem/_esm/utils/ens/namehash.js
function namehash(name) {
  let result = new Uint8Array(32).fill(0);
  if (!name)
    return bytesToHex(result);
  const labels = name.split(".");
  for (let i = labels.length - 1; i >= 0; i -= 1) {
    const hashFromEncodedLabel = encodedLabelToLabelhash(labels[i]);
    const hashed = hashFromEncodedLabel ? toBytes(hashFromEncodedLabel) : keccak256(stringToBytes(labels[i]), "bytes");
    result = keccak256(concat([result, hashed]), "bytes");
  }
  return bytesToHex(result);
}

// node_modules/viem/_esm/utils/ens/packetToBytes.js
init_toBytes();

// node_modules/viem/_esm/utils/ens/encodeLabelhash.js
function encodeLabelhash(hash3) {
  return `[${hash3.slice(2)}]`;
}

// node_modules/viem/_esm/utils/ens/labelhash.js
init_toBytes();
init_toHex();
init_keccak256();
function labelhash(label) {
  const result = new Uint8Array(32).fill(0);
  if (!label)
    return bytesToHex(result);
  return encodedLabelToLabelhash(label) || keccak256(stringToBytes(label));
}

// node_modules/viem/_esm/utils/ens/packetToBytes.js
function packetToBytes(packet) {
  const value = packet.replace(/^\.|\.$/gm, "");
  if (value.length === 0)
    return new Uint8Array(1);
  const bytes2 = new Uint8Array(stringToBytes(value).byteLength + 2);
  let offset = 0;
  const list = value.split(".");
  for (let i = 0; i < list.length; i++) {
    let encoded = stringToBytes(list[i]);
    if (encoded.byteLength > 255)
      encoded = stringToBytes(encodeLabelhash(labelhash(list[i])));
    bytes2[offset] = encoded.length;
    bytes2.set(encoded, offset + 1);
    offset += encoded.length + 1;
  }
  if (bytes2.byteLength !== offset + 1)
    return bytes2.slice(0, offset + 1);
  return bytes2;
}

// node_modules/viem/_esm/actions/ens/getEnsAddress.js
async function getEnsAddress(client, { blockNumber, blockTag, coinType, name, universalResolverAddress: universalResolverAddress_ }) {
  let universalResolverAddress = universalResolverAddress_;
  if (!universalResolverAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    universalResolverAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const functionData = encodeFunctionData({
      abi: addressResolverAbi,
      functionName: "addr",
      ...coinType != null ? { args: [namehash(name), BigInt(coinType)] } : { args: [namehash(name)] }
    });
    const res = await getAction(client, readContract, "readContract")({
      address: universalResolverAddress,
      abi: universalResolverResolveAbi,
      functionName: "resolve",
      args: [toHex(packetToBytes(name)), functionData],
      blockNumber,
      blockTag
    });
    if (res[0] === "0x")
      return null;
    const address = decodeFunctionResult({
      abi: addressResolverAbi,
      args: coinType != null ? [namehash(name), BigInt(coinType)] : void 0,
      functionName: "addr",
      data: res[0]
    });
    if (address === "0x")
      return null;
    if (trim(address) === "0x00")
      return null;
    return address;
  } catch (err) {
    if (isNullUniversalResolverError(err, "resolve"))
      return null;
    throw err;
  }
}

// node_modules/viem/_esm/errors/ens.js
init_base();
var EnsAvatarInvalidMetadataError = class extends BaseError {
  constructor({ data }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(data)}`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "EnsAvatarInvalidMetadataError"
    });
  }
};
var EnsAvatarInvalidNftUriError = class extends BaseError {
  constructor({ reason }) {
    super(`ENS NFT avatar URI is invalid. ${reason}`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "EnsAvatarInvalidNftUriError"
    });
  }
};
var EnsAvatarUriResolutionError = class extends BaseError {
  constructor({ uri }) {
    super(`Unable to resolve ENS avatar URI "${uri}". The URI may be malformed, invalid, or does not respond with a valid image.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "EnsAvatarUriResolutionError"
    });
  }
};
var EnsAvatarUnsupportedNamespaceError = class extends BaseError {
  constructor({ namespace }) {
    super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "EnsAvatarUnsupportedNamespaceError"
    });
  }
};

// node_modules/viem/_esm/utils/ens/avatar/utils.js
var networkRegex = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
var ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
var base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
var dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function isImageUri(uri) {
  try {
    const res = await fetch(uri, { method: "HEAD" });
    if (res.status === 200) {
      const contentType = res.headers.get("content-type");
      return contentType?.startsWith("image/");
    }
    return false;
  } catch (error) {
    if (typeof error === "object" && typeof error.response !== "undefined") {
      return false;
    }
    if (!globalThis.hasOwnProperty("Image"))
      return false;
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve(true);
      };
      img.onerror = () => {
        resolve(false);
      };
      img.src = uri;
    });
  }
}
function getGateway(custom, defaultGateway) {
  if (!custom)
    return defaultGateway;
  if (custom.endsWith("/"))
    return custom.slice(0, -1);
  return custom;
}
function resolveAvatarUri({ uri, gatewayUrls }) {
  const isEncoded = base64Regex.test(uri);
  if (isEncoded)
    return { uri, isOnChain: true, isEncoded };
  const ipfsGateway2 = getGateway(gatewayUrls?.ipfs, "https://ipfs.io");
  const arweaveGateway = getGateway(gatewayUrls?.arweave, "https://arweave.net");
  const networkRegexMatch = uri.match(networkRegex);
  const { protocol, subpath, target, subtarget = "" } = networkRegexMatch?.groups || {};
  const isIPNS = protocol === "ipns:/" || subpath === "ipns/";
  const isIPFS = protocol === "ipfs:/" || subpath === "ipfs/" || ipfsHashRegex.test(uri);
  if (uri.startsWith("http") && !isIPNS && !isIPFS) {
    let replacedUri = uri;
    if (gatewayUrls?.arweave)
      replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
    return { uri: replacedUri, isOnChain: false, isEncoded: false };
  }
  if ((isIPNS || isIPFS) && target) {
    return {
      uri: `${ipfsGateway2}/${isIPNS ? "ipns" : "ipfs"}/${target}${subtarget}`,
      isOnChain: false,
      isEncoded: false
    };
  }
  if (protocol === "ar:/" && target) {
    return {
      uri: `${arweaveGateway}/${target}${subtarget || ""}`,
      isOnChain: false,
      isEncoded: false
    };
  }
  let parsedUri = uri.replace(dataURIRegex, "");
  if (parsedUri.startsWith("<svg")) {
    parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
  }
  if (parsedUri.startsWith("data:") || parsedUri.startsWith("{")) {
    return {
      uri: parsedUri,
      isOnChain: true,
      isEncoded: false
    };
  }
  throw new EnsAvatarUriResolutionError({ uri });
}
function getJsonImage(data) {
  if (typeof data !== "object" || !("image" in data) && !("image_url" in data) && !("image_data" in data)) {
    throw new EnsAvatarInvalidMetadataError({ data });
  }
  return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri }) {
  try {
    const res = await fetch(uri).then((res2) => res2.json());
    const image = await parseAvatarUri({
      gatewayUrls,
      uri: getJsonImage(res)
    });
    return image;
  } catch {
    throw new EnsAvatarUriResolutionError({ uri });
  }
}
async function parseAvatarUri({ gatewayUrls, uri }) {
  const { uri: resolvedURI, isOnChain } = resolveAvatarUri({ uri, gatewayUrls });
  if (isOnChain)
    return resolvedURI;
  const isImage = await isImageUri(resolvedURI);
  if (isImage)
    return resolvedURI;
  throw new EnsAvatarUriResolutionError({ uri });
}
function parseNftUri(uri_) {
  let uri = uri_;
  if (uri.startsWith("did:nft:")) {
    uri = uri.replace("did:nft:", "").replace(/_/g, "/");
  }
  const [reference, asset_namespace, tokenID] = uri.split("/");
  const [eip_namespace, chainID] = reference.split(":");
  const [erc_namespace, contractAddress] = asset_namespace.split(":");
  if (!eip_namespace || eip_namespace.toLowerCase() !== "eip155")
    throw new EnsAvatarInvalidNftUriError({ reason: "Only EIP-155 supported" });
  if (!chainID)
    throw new EnsAvatarInvalidNftUriError({ reason: "Chain ID not found" });
  if (!contractAddress)
    throw new EnsAvatarInvalidNftUriError({
      reason: "Contract address not found"
    });
  if (!tokenID)
    throw new EnsAvatarInvalidNftUriError({ reason: "Token ID not found" });
  if (!erc_namespace)
    throw new EnsAvatarInvalidNftUriError({ reason: "ERC namespace not found" });
  return {
    chainID: parseInt(chainID),
    namespace: erc_namespace.toLowerCase(),
    contractAddress,
    tokenID
  };
}
async function getNftTokenUri(client, { nft }) {
  if (nft.namespace === "erc721") {
    return readContract(client, {
      address: nft.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "tokenURI",
      args: [BigInt(nft.tokenID)]
    });
  }
  if (nft.namespace === "erc1155") {
    return readContract(client, {
      address: nft.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "uri",
      args: [BigInt(nft.tokenID)]
    });
  }
  throw new EnsAvatarUnsupportedNamespaceError({ namespace: nft.namespace });
}

// node_modules/viem/_esm/utils/ens/avatar/parseAvatarRecord.js
async function parseAvatarRecord(client, { gatewayUrls, record }) {
  if (/eip155:/i.test(record))
    return parseNftAvatarUri(client, { gatewayUrls, record });
  return parseAvatarUri({ uri: record, gatewayUrls });
}
async function parseNftAvatarUri(client, { gatewayUrls, record }) {
  const nft = parseNftUri(record);
  const nftUri = await getNftTokenUri(client, { nft });
  const { uri: resolvedNftUri, isOnChain, isEncoded } = resolveAvatarUri({ uri: nftUri, gatewayUrls });
  if (isOnChain && (resolvedNftUri.includes("data:application/json;base64,") || resolvedNftUri.startsWith("{"))) {
    const encodedJson = isEncoded ? (
      // if it is encoded, decode it
      atob(resolvedNftUri.replace("data:application/json;base64,", ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      resolvedNftUri
    );
    const decoded = JSON.parse(encodedJson);
    return parseAvatarUri({ uri: getJsonImage(decoded), gatewayUrls });
  }
  let uriTokenId = nft.tokenID;
  if (nft.namespace === "erc1155")
    uriTokenId = uriTokenId.replace("0x", "").padStart(64, "0");
  return getMetadataAvatarUri({
    gatewayUrls,
    uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId)
  });
}

// node_modules/viem/_esm/actions/ens/getEnsText.js
init_abis();
init_decodeFunctionResult();
init_encodeFunctionData();
init_getChainContractAddress();
init_toHex();
async function getEnsText(client, { blockNumber, blockTag, name, key, universalResolverAddress: universalResolverAddress_ }) {
  let universalResolverAddress = universalResolverAddress_;
  if (!universalResolverAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    universalResolverAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const res = await getAction(client, readContract, "readContract")({
      address: universalResolverAddress,
      abi: universalResolverResolveAbi,
      functionName: "resolve",
      args: [
        toHex(packetToBytes(name)),
        encodeFunctionData({
          abi: textResolverAbi,
          functionName: "text",
          args: [namehash(name), key]
        })
      ],
      blockNumber,
      blockTag
    });
    if (res[0] === "0x")
      return null;
    const record = decodeFunctionResult({
      abi: textResolverAbi,
      functionName: "text",
      data: res[0]
    });
    return record === "" ? null : record;
  } catch (err) {
    if (isNullUniversalResolverError(err, "resolve"))
      return null;
    throw err;
  }
}

// node_modules/viem/_esm/actions/ens/getEnsAvatar.js
async function getEnsAvatar(client, { blockNumber, blockTag, gatewayUrls, name, universalResolverAddress }) {
  const record = await getAction(client, getEnsText, "getEnsText")({
    blockNumber,
    blockTag,
    key: "avatar",
    name,
    universalResolverAddress
  });
  if (!record)
    return null;
  try {
    return await parseAvatarRecord(client, { record, gatewayUrls });
  } catch {
    return null;
  }
}

// node_modules/viem/_esm/actions/ens/getEnsName.js
init_abis();
init_getChainContractAddress();
init_toHex();
async function getEnsName(client, { address, blockNumber, blockTag, universalResolverAddress: universalResolverAddress_ }) {
  let universalResolverAddress = universalResolverAddress_;
  if (!universalResolverAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    universalResolverAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "ensUniversalResolver"
    });
  }
  const reverseNode = `${address.toLowerCase().substring(2)}.addr.reverse`;
  try {
    const [name, resolvedAddress] = await getAction(client, readContract, "readContract")({
      address: universalResolverAddress,
      abi: universalResolverReverseAbi,
      functionName: "reverse",
      args: [toHex(packetToBytes(reverseNode))],
      blockNumber,
      blockTag
    });
    if (address.toLowerCase() !== resolvedAddress.toLowerCase())
      return null;
    return name;
  } catch (err) {
    if (isNullUniversalResolverError(err, "reverse"))
      return null;
    throw err;
  }
}

// node_modules/viem/_esm/actions/ens/getEnsResolver.js
init_getChainContractAddress();
init_toHex();
async function getEnsResolver(client, { blockNumber, blockTag, name, universalResolverAddress: universalResolverAddress_ }) {
  let universalResolverAddress = universalResolverAddress_;
  if (!universalResolverAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    universalResolverAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "ensUniversalResolver"
    });
  }
  const [resolverAddress] = await getAction(client, readContract, "readContract")({
    address: universalResolverAddress,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [{ type: "address" }, { type: "bytes32" }],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [toHex(packetToBytes(name))],
    blockNumber,
    blockTag
  });
  return resolverAddress;
}

// node_modules/viem/_esm/clients/decorators/public.js
init_call();

// node_modules/viem/_esm/actions/public/createBlockFilter.js
async function createBlockFilter(client) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newBlockFilter"
  });
  const id2 = await client.request({
    method: "eth_newBlockFilter"
  });
  return { id: id2, request: getRequest(id2), type: "block" };
}

// node_modules/viem/_esm/actions/public/createEventFilter.js
init_toHex();
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock } = {}) {
  const events = events_ ?? (event ? [event] : void 0);
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newFilter"
  });
  let topics = [];
  if (events) {
    topics = [
      events.flatMap((event2) => encodeEventTopics({
        abi: [event2],
        eventName: event2.name,
        args
      }))
    ];
    if (event)
      topics = topics[0];
  }
  const id2 = await client.request({
    method: "eth_newFilter",
    params: [
      {
        address,
        fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
        toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
        ...topics.length ? { topics } : {}
      }
    ]
  });
  return {
    abi: events,
    args,
    eventName: event ? event.name : void 0,
    fromBlock,
    id: id2,
    request: getRequest(id2),
    strict,
    toBlock,
    type: "event"
  };
}

// node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js
async function createPendingTransactionFilter(client) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newPendingTransactionFilter"
  });
  const id2 = await client.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id: id2, request: getRequest(id2), type: "transaction" };
}

// node_modules/viem/_esm/actions/public/getBalance.js
init_toHex();
async function getBalance(client, { address, blockNumber, blockTag = "latest" }) {
  const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
  const balance = await client.request({
    method: "eth_getBalance",
    params: [address, blockNumberHex || blockTag]
  });
  return BigInt(balance);
}

// node_modules/viem/_esm/actions/public/getBlockTransactionCount.js
init_fromHex();
init_toHex();
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = "latest" } = {}) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let count;
  if (blockHash) {
    count = await client.request({
      method: "eth_getBlockTransactionCountByHash",
      params: [blockHash]
    });
  } else {
    count = await client.request({
      method: "eth_getBlockTransactionCountByNumber",
      params: [blockNumberHex || blockTag]
    });
  }
  return hexToNumber(count);
}

// node_modules/viem/_esm/actions/public/getBytecode.js
init_toHex();
async function getBytecode(client, { address, blockNumber, blockTag = "latest" }) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const hex = await client.request({
    method: "eth_getCode",
    params: [address, blockNumberHex || blockTag]
  });
  if (hex === "0x")
    return void 0;
  return hex;
}

// node_modules/viem/_esm/actions/public/getFeeHistory.js
init_toHex();

// node_modules/viem/_esm/utils/formatters/feeHistory.js
function formatFeeHistory(feeHistory) {
  return {
    baseFeePerGas: feeHistory.baseFeePerGas.map((value) => BigInt(value)),
    gasUsedRatio: feeHistory.gasUsedRatio,
    oldestBlock: BigInt(feeHistory.oldestBlock),
    reward: feeHistory.reward?.map((reward) => reward.map((value) => BigInt(value)))
  };
}

// node_modules/viem/_esm/actions/public/getFeeHistory.js
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = "latest", rewardPercentiles }) {
  const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
  const feeHistory = await client.request({
    method: "eth_feeHistory",
    params: [
      numberToHex(blockCount),
      blockNumberHex || blockTag,
      rewardPercentiles
    ]
  });
  return formatFeeHistory(feeHistory);
}

// node_modules/viem/_esm/actions/public/getFilterLogs.js
init_abi();
async function getFilterLogs(_client, { filter }) {
  const strict = filter.strict ?? false;
  const logs = await filter.request({
    method: "eth_getFilterLogs",
    params: [filter.id]
  });
  return logs.map((log) => {
    try {
      const { eventName, args } = "abi" in filter && filter.abi ? decodeEventLog({
        abi: filter.abi,
        data: log.data,
        topics: log.topics,
        strict
      }) : { eventName: void 0, args: void 0 };
      return formatLog(log, { args, eventName });
    } catch (err) {
      let eventName;
      let isUnnamed;
      if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
        if ("strict" in filter && filter.strict)
          return;
        eventName = err.abiItem.name;
        isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
      }
      return formatLog(log, { args: isUnnamed ? [] : {}, eventName });
    }
  }).filter(Boolean);
}

// node_modules/viem/_esm/actions/public/getProof.js
init_toHex();

// node_modules/viem/_esm/utils/chain/defineChain.js
function defineChain(chain, config = {}) {
  const { fees = chain.fees, formatters = chain.formatters, serializers = chain.serializers } = config;
  return {
    ...chain,
    fees,
    formatters,
    serializers
  };
}

// node_modules/viem/_esm/utils/regex.js
var bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
var integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;

// node_modules/viem/_esm/utils/typedData.js
init_abi();
init_address();
init_isAddress();
init_size();
init_toHex();

// node_modules/viem/_esm/utils/signature/hashTypedData.js
init_encodeAbiParameters();
init_concat();
init_toHex();
init_keccak256();
function hashTypedData({ domain: domain_, message, primaryType, types: types_ }) {
  const domain = typeof domain_ === "undefined" ? {} : domain_;
  const types = {
    EIP712Domain: getTypesForEIP712Domain({ domain }),
    ...types_
  };
  validateTypedData({
    domain,
    message,
    primaryType,
    types
  });
  const parts = ["0x1901"];
  if (domain)
    parts.push(hashDomain({
      domain,
      types
    }));
  if (primaryType !== "EIP712Domain") {
    parts.push(hashStruct({
      data: message,
      primaryType,
      types
    }));
  }
  return keccak256(concat(parts));
}
function hashDomain({ domain, types }) {
  return hashStruct({
    data: domain,
    primaryType: "EIP712Domain",
    types
  });
}
function hashStruct({ data, primaryType, types }) {
  const encoded = encodeData({
    data,
    primaryType,
    types
  });
  return keccak256(encoded);
}
function encodeData({ data, primaryType, types }) {
  const encodedTypes = [{ type: "bytes32" }];
  const encodedValues = [hashType({ primaryType, types })];
  for (const field of types[primaryType]) {
    const [type, value] = encodeField({
      types,
      name: field.name,
      type: field.type,
      value: data[field.name]
    });
    encodedTypes.push(type);
    encodedValues.push(value);
  }
  return encodeAbiParameters(encodedTypes, encodedValues);
}
function hashType({ primaryType, types }) {
  const encodedHashType = toHex(encodeType({ primaryType, types }));
  return keccak256(encodedHashType);
}
function encodeType({ primaryType, types }) {
  let result = "";
  const unsortedDeps = findTypeDependencies({ primaryType, types });
  unsortedDeps.delete(primaryType);
  const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
  for (const type of deps) {
    result += `${type}(${types[type].map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
  }
  return result;
}
function findTypeDependencies({ primaryType: primaryType_, types }, results = /* @__PURE__ */ new Set()) {
  const match = primaryType_.match(/^\w*/u);
  const primaryType = match?.[0];
  if (results.has(primaryType) || types[primaryType] === void 0) {
    return results;
  }
  results.add(primaryType);
  for (const field of types[primaryType]) {
    findTypeDependencies({ primaryType: field.type, types }, results);
  }
  return results;
}
function encodeField({ types, name, type, value }) {
  if (types[type] !== void 0) {
    return [
      { type: "bytes32" },
      keccak256(encodeData({ data: value, primaryType: type, types }))
    ];
  }
  if (type === "bytes") {
    const prepend = value.length % 2 ? "0" : "";
    value = `0x${prepend + value.slice(2)}`;
    return [{ type: "bytes32" }, keccak256(value)];
  }
  if (type === "string")
    return [{ type: "bytes32" }, keccak256(toHex(value))];
  if (type.lastIndexOf("]") === type.length - 1) {
    const parsedType = type.slice(0, type.lastIndexOf("["));
    const typeValuePairs = value.map((item) => encodeField({
      name,
      type: parsedType,
      types,
      value: item
    }));
    return [
      { type: "bytes32" },
      keccak256(encodeAbiParameters(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))
    ];
  }
  return [{ type }, value];
}

// node_modules/viem/_esm/utils/typedData.js
function validateTypedData({ domain, message, primaryType, types: types_ }) {
  const types = types_;
  const validateData = (struct, value_) => {
    for (const param of struct) {
      const { name, type: type_ } = param;
      const type = type_;
      const value = value_[name];
      const integerMatch = type.match(integerRegex);
      if (integerMatch && (typeof value === "number" || typeof value === "bigint")) {
        const [_type, base2, size_] = integerMatch;
        numberToHex(value, {
          signed: base2 === "int",
          size: parseInt(size_) / 8
        });
      }
      if (type === "address" && typeof value === "string" && !isAddress(value))
        throw new InvalidAddressError({ address: value });
      const bytesMatch = type.match(bytesRegex);
      if (bytesMatch) {
        const [_type, size_] = bytesMatch;
        if (size_ && size(value) !== parseInt(size_))
          throw new BytesSizeMismatchError({
            expectedSize: parseInt(size_),
            givenSize: size(value)
          });
      }
      const struct2 = types[type];
      if (struct2)
        validateData(struct2, value);
    }
  };
  if (types.EIP712Domain && domain)
    validateData(types.EIP712Domain, domain);
  if (primaryType !== "EIP712Domain") {
    const type = types[primaryType];
    validateData(type, message);
  }
}
function getTypesForEIP712Domain({ domain }) {
  return [
    typeof domain?.name === "string" && { name: "name", type: "string" },
    domain?.version && { name: "version", type: "string" },
    typeof domain?.chainId === "number" && {
      name: "chainId",
      type: "uint256"
    },
    domain?.verifyingContract && {
      name: "verifyingContract",
      type: "address"
    },
    domain?.salt && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}

// node_modules/viem/_esm/utils/abi/encodeDeployData.js
init_abi();
init_concat();
init_encodeAbiParameters();
var docsPath3 = "/docs/contract/encodeDeployData";
function encodeDeployData({ abi, args, bytecode }) {
  if (!args || args.length === 0)
    return bytecode;
  const description = abi.find((x) => "type" in x && x.type === "constructor");
  if (!description)
    throw new AbiConstructorNotFoundError({ docsPath: docsPath3 });
  if (!("inputs" in description))
    throw new AbiConstructorParamsNotFoundError({ docsPath: docsPath3 });
  if (!description.inputs || description.inputs.length === 0)
    throw new AbiConstructorParamsNotFoundError({ docsPath: docsPath3 });
  const data = encodeAbiParameters(description.inputs, args);
  return concatHex([bytecode, data]);
}

// node_modules/viem/_esm/utils/index.js
init_isHex();

// node_modules/viem/_esm/utils/formatters/transactionReceipt.js
init_fromHex();
init_formatter();
var statuses = {
  "0x0": "reverted",
  "0x1": "success"
};
function formatTransactionReceipt(transactionReceipt) {
  return {
    ...transactionReceipt,
    blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
    contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
    cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
    effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
    gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
    logs: transactionReceipt.logs ? transactionReceipt.logs.map((log) => formatLog(log)) : null,
    to: transactionReceipt.to ? transactionReceipt.to : null,
    transactionIndex: transactionReceipt.transactionIndex ? hexToNumber(transactionReceipt.transactionIndex) : null,
    status: transactionReceipt.status ? statuses[transactionReceipt.status] : null,
    type: transactionReceipt.type ? transactionType[transactionReceipt.type] || transactionReceipt.type : null
  };
}
var defineTransactionReceipt = /* @__PURE__ */ defineFormatter("transactionReceipt", formatTransactionReceipt);

// node_modules/viem/_esm/utils/index.js
init_toHex();
init_fromHex();

// node_modules/viem/_esm/constants/strings.js
var presignMessagePrefix = "Ethereum Signed Message:\n";

// node_modules/viem/_esm/utils/signature/hashMessage.js
init_concat();
init_toBytes();
init_keccak256();
function hashMessage(message, to_) {
  const messageBytes = (() => {
    if (typeof message === "string")
      return stringToBytes(message);
    if (message.raw instanceof Uint8Array)
      return message.raw;
    return toBytes(message.raw);
  })();
  const prefixBytes = stringToBytes(`${presignMessagePrefix}${messageBytes.length}`);
  return keccak256(concat([prefixBytes, messageBytes]), to_);
}

// node_modules/viem/_esm/utils/formatters/proof.js
function formatStorageProof(storageProof) {
  return storageProof.map((proof) => ({
    ...proof,
    value: BigInt(proof.value)
  }));
}
function formatProof(proof) {
  return {
    ...proof,
    balance: proof.balance ? BigInt(proof.balance) : void 0,
    nonce: proof.nonce ? hexToNumber(proof.nonce) : void 0,
    storageProof: proof.storageProof ? formatStorageProof(proof.storageProof) : void 0
  };
}

// node_modules/viem/_esm/actions/public/getProof.js
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys }) {
  const blockTag = blockTag_ ?? "latest";
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const proof = await client.request({
    method: "eth_getProof",
    params: [address, storageKeys, blockNumberHex || blockTag]
  });
  return formatProof(proof);
}

// node_modules/viem/_esm/actions/public/getStorageAt.js
init_toHex();
async function getStorageAt(client, { address, blockNumber, blockTag = "latest", slot }) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const data = await client.request({
    method: "eth_getStorageAt",
    params: [address, slot, blockNumberHex || blockTag]
  });
  return data;
}

// node_modules/viem/_esm/actions/public/getTransaction.js
init_transaction();
init_toHex();
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash: hash3, index: index2 }) {
  const blockTag = blockTag_ || "latest";
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let transaction = null;
  if (hash3) {
    transaction = await client.request({
      method: "eth_getTransactionByHash",
      params: [hash3]
    });
  } else if (blockHash) {
    transaction = await client.request({
      method: "eth_getTransactionByBlockHashAndIndex",
      params: [blockHash, numberToHex(index2)]
    });
  } else if (blockNumberHex || blockTag) {
    transaction = await client.request({
      method: "eth_getTransactionByBlockNumberAndIndex",
      params: [blockNumberHex || blockTag, numberToHex(index2)]
    });
  }
  if (!transaction)
    throw new TransactionNotFoundError({
      blockHash,
      blockNumber,
      blockTag,
      hash: hash3,
      index: index2
    });
  const format = client.chain?.formatters?.transaction?.format || formatTransaction;
  return format(transaction);
}

// node_modules/viem/_esm/actions/public/getTransactionConfirmations.js
async function getTransactionConfirmations(client, { hash: hash3, transactionReceipt }) {
  const [blockNumber, transaction] = await Promise.all([
    getAction(client, getBlockNumber, "getBlockNumber")({}),
    hash3 ? getAction(client, getTransaction, "getBlockNumber")({ hash: hash3 }) : void 0
  ]);
  const transactionBlockNumber = transactionReceipt?.blockNumber || transaction?.blockNumber;
  if (!transactionBlockNumber)
    return 0n;
  return blockNumber - transactionBlockNumber + 1n;
}

// node_modules/viem/_esm/actions/public/getTransactionReceipt.js
init_transaction();
async function getTransactionReceipt(client, { hash: hash3 }) {
  const receipt = await client.request({
    method: "eth_getTransactionReceipt",
    params: [hash3]
  });
  if (!receipt)
    throw new TransactionReceiptNotFoundError({ hash: hash3 });
  const format = client.chain?.formatters?.transactionReceipt?.format || formatTransactionReceipt;
  return format(receipt);
}

// node_modules/viem/_esm/actions/public/multicall.js
init_abis();
init_abi();
init_base();
init_contract();
init_decodeFunctionResult();
init_encodeFunctionData();
init_getChainContractAddress();
async function multicall(client, args) {
  const { allowFailure = true, batchSize: batchSize_, blockNumber, blockTag, contracts, multicallAddress: multicallAddress_ } = args;
  const batchSize = batchSize_ ?? (typeof client.batch?.multicall === "object" && client.batch.multicall.batchSize || 1024);
  let multicallAddress = multicallAddress_;
  if (!multicallAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    multicallAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "multicall3"
    });
  }
  const chunkedCalls = [[]];
  let currentChunk = 0;
  let currentChunkSize = 0;
  for (let i = 0; i < contracts.length; i++) {
    const { abi, address, args: args2, functionName } = contracts[i];
    try {
      const callData = encodeFunctionData({
        abi,
        args: args2,
        functionName
      });
      currentChunkSize += (callData.length - 2) / 2;
      if (
        // Check if batching is enabled.
        batchSize > 0 && // Check if the current size of the batch exceeds the size limit.
        currentChunkSize > batchSize && // Check if the current chunk is not already empty.
        chunkedCalls[currentChunk].length > 0
      ) {
        currentChunk++;
        currentChunkSize = (callData.length - 2) / 2;
        chunkedCalls[currentChunk] = [];
      }
      chunkedCalls[currentChunk] = [
        ...chunkedCalls[currentChunk],
        {
          allowFailure: true,
          callData,
          target: address
        }
      ];
    } catch (err) {
      const error = getContractError(err, {
        abi,
        address,
        args: args2,
        docsPath: "/docs/contract/multicall",
        functionName
      });
      if (!allowFailure)
        throw error;
      chunkedCalls[currentChunk] = [
        ...chunkedCalls[currentChunk],
        {
          allowFailure: true,
          callData: "0x",
          target: address
        }
      ];
    }
  }
  const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls) => getAction(client, readContract, "readContract")({
    abi: multicall3Abi,
    address: multicallAddress,
    args: [calls],
    blockNumber,
    blockTag,
    functionName: "aggregate3"
  })));
  const results = [];
  for (let i = 0; i < aggregate3Results.length; i++) {
    const result = aggregate3Results[i];
    if (result.status === "rejected") {
      if (!allowFailure)
        throw result.reason;
      for (let j = 0; j < chunkedCalls[i].length; j++) {
        results.push({
          status: "failure",
          error: result.reason,
          result: void 0
        });
      }
      continue;
    }
    const aggregate3Result = result.value;
    for (let j = 0; j < aggregate3Result.length; j++) {
      const { returnData, success } = aggregate3Result[j];
      const { callData } = chunkedCalls[i][j];
      const { abi, address, functionName, args: args2 } = contracts[results.length];
      try {
        if (callData === "0x")
          throw new AbiDecodingZeroDataError();
        if (!success)
          throw new RawContractError({ data: returnData });
        const result2 = decodeFunctionResult({
          abi,
          args: args2,
          data: returnData,
          functionName
        });
        results.push(allowFailure ? { result: result2, status: "success" } : result2);
      } catch (err) {
        const error = getContractError(err, {
          abi,
          address,
          args: args2,
          docsPath: "/docs/contract/multicall",
          functionName
        });
        if (!allowFailure)
          throw error;
        results.push({ error, result: void 0, status: "failure" });
      }
    }
  }
  if (results.length !== contracts.length)
    throw new BaseError("multicall results mismatch");
  return results;
}

// node_modules/viem/_esm/actions/public/verifyHash.js
init_abis();

// node_modules/viem/_esm/constants/contracts.js
var universalSignatureValidatorByteCode = "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";

// node_modules/viem/_esm/actions/public/verifyHash.js
init_contract();

// node_modules/viem/_esm/utils/data/isBytesEqual.js
init_utils3();
init_toBytes();
init_isHex();
function isBytesEqual(a_, b_) {
  const a = isHex(a_) ? toBytes(a_) : a_;
  const b = isHex(b_) ? toBytes(b_) : b_;
  return equalBytes(a, b);
}

// node_modules/viem/_esm/actions/public/verifyHash.js
init_call();
async function verifyHash(client, { address, hash: hash3, signature, ...callRequest }) {
  const signatureHex = isHex(signature) ? signature : toHex(signature);
  try {
    const { data } = await getAction(client, call, "call")({
      data: encodeDeployData({
        abi: universalSignatureValidatorAbi,
        args: [address, hash3, signatureHex],
        bytecode: universalSignatureValidatorByteCode
      }),
      ...callRequest
    });
    return isBytesEqual(data ?? "0x0", "0x1");
  } catch (error) {
    if (error instanceof CallExecutionError) {
      return false;
    }
    throw error;
  }
}

// node_modules/viem/_esm/actions/public/verifyMessage.js
async function verifyMessage(client, { address, message, signature, ...callRequest }) {
  const hash3 = hashMessage(message);
  return verifyHash(client, {
    address,
    hash: hash3,
    signature,
    ...callRequest
  });
}

// node_modules/viem/_esm/actions/public/verifyTypedData.js
async function verifyTypedData(client, { address, signature, message, primaryType, types, domain, ...callRequest }) {
  const hash3 = hashTypedData({ message, primaryType, types, domain });
  return verifyHash(client, {
    address,
    hash: hash3,
    signature,
    ...callRequest
  });
}

// node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js
init_transaction();
init_stringify();

// node_modules/viem/_esm/actions/public/watchBlockNumber.js
init_fromHex();
init_stringify();
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  let prevBlockNumber;
  const pollBlockNumber = () => {
    const observerId = stringify([
      "watchBlockNumber",
      client.uid,
      emitOnBegin,
      emitMissed,
      pollingInterval
    ]);
    return observe(observerId, { onBlockNumber, onError }, (emit) => poll(async () => {
      try {
        const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({ cacheTime: 0 });
        if (prevBlockNumber) {
          if (blockNumber === prevBlockNumber)
            return;
          if (blockNumber - prevBlockNumber > 1 && emitMissed) {
            for (let i = prevBlockNumber + 1n; i < blockNumber; i++) {
              emit.onBlockNumber(i, prevBlockNumber);
              prevBlockNumber = i;
            }
          }
        }
        if (!prevBlockNumber || blockNumber > prevBlockNumber) {
          emit.onBlockNumber(blockNumber, prevBlockNumber);
          prevBlockNumber = blockNumber;
        }
      } catch (err) {
        emit.onError?.(err);
      }
    }, {
      emitOnBegin,
      interval: pollingInterval
    }));
  };
  const subscribeBlockNumber = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["newHeads"],
          onData(data) {
            if (!active)
              return;
            const blockNumber = hexToBigInt(data.result?.number);
            onBlockNumber(blockNumber, prevBlockNumber);
            prevBlockNumber = blockNumber;
          },
          onError(error) {
            onError?.(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError?.(err);
      }
    })();
    return unsubscribe;
  };
  return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
}

// node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js
async function waitForTransactionReceipt(client, { confirmations = 1, hash: hash3, onReplaced, pollingInterval = client.pollingInterval, timeout }) {
  const observerId = stringify(["waitForTransactionReceipt", client.uid, hash3]);
  let transaction;
  let replacedTransaction;
  let receipt;
  let retrying = false;
  return new Promise((resolve, reject) => {
    if (timeout)
      setTimeout(() => reject(new WaitForTransactionReceiptTimeoutError({ hash: hash3 })), timeout);
    const _unobserve = observe(observerId, { onReplaced, resolve, reject }, (emit) => {
      const _unwatch = getAction(client, watchBlockNumber, "watchBlockNumber")({
        emitMissed: true,
        emitOnBegin: true,
        poll: true,
        pollingInterval,
        async onBlockNumber(blockNumber_) {
          if (retrying)
            return;
          let blockNumber = blockNumber_;
          const done = (fn) => {
            _unwatch();
            fn();
            _unobserve();
          };
          try {
            if (receipt) {
              if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
                return;
              done(() => emit.resolve(receipt));
              return;
            }
            if (!transaction) {
              retrying = true;
              await withRetry(async () => {
                transaction = await getAction(client, getTransaction, "getTransaction")({ hash: hash3 });
                if (transaction.blockNumber)
                  blockNumber = transaction.blockNumber;
              }, {
                // exponential backoff
                delay: ({ count }) => ~~(1 << count) * 200,
                retryCount: 6
              });
              retrying = false;
            }
            receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash: hash3 });
            if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
              return;
            done(() => emit.resolve(receipt));
          } catch (err) {
            if (transaction && (err instanceof TransactionNotFoundError || err instanceof TransactionReceiptNotFoundError)) {
              try {
                replacedTransaction = transaction;
                retrying = true;
                const block = await withRetry(() => getAction(client, getBlock, "getBlock")({
                  blockNumber,
                  includeTransactions: true
                }), {
                  // exponential backoff
                  delay: ({ count }) => ~~(1 << count) * 200,
                  retryCount: 6,
                  shouldRetry: ({ error }) => error instanceof BlockNotFoundError
                });
                retrying = false;
                const replacementTransaction = block.transactions.find(({ from, nonce }) => from === replacedTransaction.from && nonce === replacedTransaction.nonce);
                if (!replacementTransaction)
                  return;
                receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({
                  hash: replacementTransaction.hash
                });
                if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
                  return;
                let reason = "replaced";
                if (replacementTransaction.to === replacedTransaction.to && replacementTransaction.value === replacedTransaction.value) {
                  reason = "repriced";
                } else if (replacementTransaction.from === replacementTransaction.to && replacementTransaction.value === 0n) {
                  reason = "cancelled";
                }
                done(() => {
                  emit.onReplaced?.({
                    reason,
                    replacedTransaction,
                    transaction: replacementTransaction,
                    transactionReceipt: receipt
                  });
                  emit.resolve(receipt);
                });
              } catch (err_) {
                done(() => emit.reject(err_));
              }
            } else {
              done(() => emit.reject(err));
            }
          }
        }
      });
    });
  });
}

// node_modules/viem/_esm/actions/public/watchBlocks.js
init_stringify();
function watchBlocks(client, { blockTag = "latest", emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const includeTransactions = includeTransactions_ ?? false;
  let prevBlock;
  const pollBlocks = () => {
    const observerId = stringify([
      "watchBlocks",
      client.uid,
      emitMissed,
      emitOnBegin,
      includeTransactions,
      pollingInterval
    ]);
    return observe(observerId, { onBlock, onError }, (emit) => poll(async () => {
      try {
        const block = await getAction(client, getBlock, "getBlock")({
          blockTag,
          includeTransactions
        });
        if (block.number && prevBlock?.number) {
          if (block.number === prevBlock.number)
            return;
          if (block.number - prevBlock.number > 1 && emitMissed) {
            for (let i = prevBlock?.number + 1n; i < block.number; i++) {
              const block2 = await getAction(client, getBlock, "getBlock")({
                blockNumber: i,
                includeTransactions
              });
              emit.onBlock(block2, prevBlock);
              prevBlock = block2;
            }
          }
        }
        if (
          // If no previous block exists, emit.
          !prevBlock?.number || // If the block tag is "pending" with no block number, emit.
          blockTag === "pending" && !block?.number || // If the next block number is greater than the previous block number, emit.
          // We don't want to emit blocks in the past.
          block.number && block.number > prevBlock.number
        ) {
          emit.onBlock(block, prevBlock);
          prevBlock = block;
        }
      } catch (err) {
        emit.onError?.(err);
      }
    }, {
      emitOnBegin,
      interval: pollingInterval
    }));
  };
  const subscribeBlocks = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["newHeads"],
          onData(data) {
            if (!active)
              return;
            const format = client.chain?.formatters?.block?.format || formatBlock;
            const block = format(data.result);
            onBlock(block, prevBlock);
            prevBlock = block;
          },
          onError(error) {
            onError?.(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError?.(err);
      }
    })();
    return unsubscribe;
  };
  return enablePolling ? pollBlocks() : subscribeBlocks();
}

// node_modules/viem/_esm/actions/public/watchEvent.js
init_stringify();
init_abi();
init_rpc();
function watchEvent(client, { address, args, batch = true, event, events, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const strict = strict_ ?? false;
  const pollEvent = () => {
    const observerId = stringify([
      "watchEvent",
      address,
      args,
      batch,
      client.uid,
      event,
      pollingInterval
    ]);
    return observe(observerId, { onLogs, onError }, (emit) => {
      let previousBlockNumber;
      let filter;
      let initialized = false;
      const unwatch = poll(async () => {
        if (!initialized) {
          try {
            filter = await getAction(client, createEventFilter, "createEventFilter")({
              address,
              args,
              event,
              events,
              strict
            });
          } catch {
          }
          initialized = true;
          return;
        }
        try {
          let logs;
          if (filter) {
            logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          } else {
            const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
            if (previousBlockNumber && previousBlockNumber !== blockNumber) {
              logs = await getAction(client, getLogs, "getLogs")({
                address,
                args,
                event,
                events,
                fromBlock: previousBlockNumber + 1n,
                toBlock: blockNumber
              });
            } else {
              logs = [];
            }
            previousBlockNumber = blockNumber;
          }
          if (logs.length === 0)
            return;
          if (batch)
            emit.onLogs(logs);
          else
            for (const log of logs)
              emit.onLogs([log]);
        } catch (err) {
          if (filter && err instanceof InvalidInputRpcError)
            initialized = false;
          emit.onError?.(err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribeEvent = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const events_ = events ?? (event ? [event] : void 0);
        let topics = [];
        if (events_) {
          topics = [
            events_.flatMap((event2) => encodeEventTopics({
              abi: [event2],
              eventName: event2.name,
              args
            }))
          ];
          if (event)
            topics = topics[0];
        }
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["logs", { address, topics }],
          onData(data) {
            if (!active)
              return;
            const log = data.result;
            try {
              const { eventName, args: args2 } = decodeEventLog({
                abi: events_,
                data: log.data,
                topics: log.topics,
                strict
              });
              const formatted = formatLog(log, {
                args: args2,
                eventName
              });
              onLogs([formatted]);
            } catch (err) {
              let eventName;
              let isUnnamed;
              if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
                if (strict_)
                  return;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x) => !("name" in x && x.name));
              }
              const formatted = formatLog(log, {
                args: isUnnamed ? [] : {},
                eventName
              });
              onLogs([formatted]);
            }
          },
          onError(error) {
            onError?.(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError?.(err);
      }
    })();
    return unsubscribe;
  };
  return enablePolling ? pollEvent() : subscribeEvent();
}

// node_modules/viem/_esm/actions/public/watchPendingTransactions.js
init_stringify();
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const pollPendingTransactions = () => {
    const observerId = stringify([
      "watchPendingTransactions",
      client.uid,
      batch,
      pollingInterval
    ]);
    return observe(observerId, { onTransactions, onError }, (emit) => {
      let filter;
      const unwatch = poll(async () => {
        try {
          if (!filter) {
            try {
              filter = await getAction(client, createPendingTransactionFilter, "createPendingTransactionFilter")({});
              return;
            } catch (err) {
              unwatch();
              throw err;
            }
          }
          const hashes = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          if (hashes.length === 0)
            return;
          if (batch)
            emit.onTransactions(hashes);
          else
            for (const hash3 of hashes)
              emit.onTransactions([hash3]);
        } catch (err) {
          emit.onError?.(err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribePendingTransactions = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(data) {
            if (!active)
              return;
            const transaction = data.result;
            onTransactions([transaction]);
          },
          onError(error) {
            onError?.(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError?.(err);
      }
    })();
    return unsubscribe;
  };
  return enablePolling ? pollPendingTransactions() : subscribePendingTransactions();
}

// node_modules/viem/_esm/clients/decorators/public.js
function publicActions(client) {
  return {
    call: (args) => call(client, args),
    createBlockFilter: () => createBlockFilter(client),
    createContractEventFilter: (args) => createContractEventFilter(client, args),
    createEventFilter: (args) => createEventFilter(client, args),
    createPendingTransactionFilter: () => createPendingTransactionFilter(client),
    estimateContractGas: (args) => estimateContractGas(client, args),
    estimateGas: (args) => estimateGas(client, args),
    getBalance: (args) => getBalance(client, args),
    getBlock: (args) => getBlock(client, args),
    getBlockNumber: (args) => getBlockNumber(client, args),
    getBlockTransactionCount: (args) => getBlockTransactionCount(client, args),
    getBytecode: (args) => getBytecode(client, args),
    getChainId: () => getChainId(client),
    getContractEvents: (args) => getContractEvents(client, args),
    getEnsAddress: (args) => getEnsAddress(client, args),
    getEnsAvatar: (args) => getEnsAvatar(client, args),
    getEnsName: (args) => getEnsName(client, args),
    getEnsResolver: (args) => getEnsResolver(client, args),
    getEnsText: (args) => getEnsText(client, args),
    getFeeHistory: (args) => getFeeHistory(client, args),
    estimateFeesPerGas: (args) => estimateFeesPerGas(client, args),
    getFilterChanges: (args) => getFilterChanges(client, args),
    getFilterLogs: (args) => getFilterLogs(client, args),
    getGasPrice: () => getGasPrice(client),
    getLogs: (args) => getLogs(client, args),
    getProof: (args) => getProof(client, args),
    estimateMaxPriorityFeePerGas: (args) => estimateMaxPriorityFeePerGas(client, args),
    getStorageAt: (args) => getStorageAt(client, args),
    getTransaction: (args) => getTransaction(client, args),
    getTransactionConfirmations: (args) => getTransactionConfirmations(client, args),
    getTransactionCount: (args) => getTransactionCount(client, args),
    getTransactionReceipt: (args) => getTransactionReceipt(client, args),
    multicall: (args) => multicall(client, args),
    prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
    readContract: (args) => readContract(client, args),
    sendRawTransaction: (args) => sendRawTransaction(client, args),
    simulateContract: (args) => simulateContract(client, args),
    verifyMessage: (args) => verifyMessage(client, args),
    verifyTypedData: (args) => verifyTypedData(client, args),
    uninstallFilter: (args) => uninstallFilter(client, args),
    waitForTransactionReceipt: (args) => waitForTransactionReceipt(client, args),
    watchBlocks: (args) => watchBlocks(client, args),
    watchBlockNumber: (args) => watchBlockNumber(client, args),
    watchContractEvent: (args) => watchContractEvent(client, args),
    watchEvent: (args) => watchEvent(client, args),
    watchPendingTransactions: (args) => watchPendingTransactions(client, args)
  };
}

// node_modules/viem/_esm/clients/createPublicClient.js
function createPublicClient(parameters) {
  const { key = "public", name = "Public Client" } = parameters;
  const client = createClient({
    ...parameters,
    key,
    name,
    type: "publicClient"
  });
  return client.extend(publicActions);
}

// node_modules/viem/_esm/constants/address.js
var zeroAddress = "0x0000000000000000000000000000000000000000";

// node_modules/viem/_esm/constants/bytes.js
var zeroHash = "0x0000000000000000000000000000000000000000000000000000000000000000";

// src/helpers/checkHash.ts
function checkHash(hash3) {
  return {
    notZero: hash3 !== zeroHash,
    zero: hash3 === zeroHash
  };
}

// node_modules/viem/_esm/chains/definitions/arbitrum.js
var arbitrum = /* @__PURE__ */ defineChain({
  id: 42161,
  name: "Arbitrum One",
  network: "arbitrum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://arbitrum-mainnet.infura.io/v3"],
      webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://arb1.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://arb1.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    etherscan: { name: "Arbiscan", url: "https://arbiscan.io" },
    default: { name: "Arbiscan", url: "https://arbiscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7654707
    }
  }
});

// node_modules/viem/_esm/chains/definitions/avalanche.js
var avalanche = /* @__PURE__ */ defineChain({
  id: 43114,
  name: "Avalanche",
  network: "avalanche",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: { http: ["https://api.avax.network/ext/bc/C/rpc"] },
    public: { http: ["https://api.avax.network/ext/bc/C/rpc"] }
  },
  blockExplorers: {
    etherscan: { name: "SnowTrace", url: "https://snowtrace.io" },
    default: { name: "SnowTrace", url: "https://snowtrace.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11907934
    }
  }
});

// node_modules/viem/_esm/chains/definitions/avalancheFuji.js
var avalancheFuji = /* @__PURE__ */ defineChain({
  id: 43113,
  name: "Avalanche Fuji",
  network: "avalanche-fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche Fuji",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] },
    public: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] }
  },
  blockExplorers: {
    etherscan: { name: "SnowTrace", url: "https://testnet.snowtrace.io" },
    default: { name: "SnowTrace", url: "https://testnet.snowtrace.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7096959
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/optimism/formatters.js
init_fromHex();
var formattersOptimism = {
  block: /* @__PURE__ */ defineBlock({
    format(args) {
      const transactions = args.transactions?.map((transaction) => {
        if (typeof transaction === "string")
          return transaction;
        const formatted = formatTransaction(transaction);
        if (formatted.typeHex === "0x7e") {
          formatted.isSystemTx = transaction.isSystemTx;
          formatted.mint = transaction.mint ? hexToBigInt(transaction.mint) : void 0;
          formatted.sourceHash = transaction.sourceHash;
          formatted.type = "deposit";
        }
        return formatted;
      });
      return {
        transactions,
        stateRoot: args.stateRoot
      };
    }
  }),
  transaction: /* @__PURE__ */ defineTransaction({
    format(args) {
      const transaction = {};
      if (args.type === "0x7e") {
        transaction.isSystemTx = args.isSystemTx;
        transaction.mint = args.mint ? hexToBigInt(args.mint) : void 0;
        transaction.sourceHash = args.sourceHash;
        transaction.type = "deposit";
      }
      return transaction;
    }
  }),
  transactionReceipt: /* @__PURE__ */ defineTransactionReceipt({
    format(args) {
      return {
        l1GasPrice: args.l1GasPrice ? hexToBigInt(args.l1GasPrice) : null,
        l1GasUsed: args.l1GasUsed ? hexToBigInt(args.l1GasUsed) : null,
        l1Fee: args.l1Fee ? hexToBigInt(args.l1Fee) : null,
        l1FeeScalar: args.l1FeeScalar ? Number(args.l1FeeScalar) : null
      };
    }
  })
};

// node_modules/viem/_esm/chains/definitions/base.js
var base = /* @__PURE__ */ defineChain({
  id: 8453,
  network: "base",
  name: "Base",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://base-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://base-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://base-mainnet.infura.io/v3"],
      webSocket: ["wss://base-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://mainnet.base.org"]
    },
    public: {
      http: ["https://mainnet.base.org"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "Basescout",
      url: "https://base.blockscout.com"
    },
    default: {
      name: "Basescan",
      url: "https://basescan.org"
    },
    etherscan: {
      name: "Basescan",
      url: "https://basescan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 5022
    }
  }
}, {
  formatters: formattersOptimism
});

// node_modules/viem/_esm/chains/definitions/bsc.js
var bsc = /* @__PURE__ */ defineChain({
  id: 56,
  name: "BNB Smart Chain",
  network: "bsc",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB"
  },
  rpcUrls: {
    default: { http: ["https://rpc.ankr.com/bsc"] },
    public: { http: ["https://rpc.ankr.com/bsc"] }
  },
  blockExplorers: {
    etherscan: { name: "BscScan", url: "https://bscscan.com" },
    default: { name: "BscScan", url: "https://bscscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 15921452
    }
  }
});

// node_modules/viem/_esm/chains/definitions/bscTestnet.js
var bscTestnet = /* @__PURE__ */ defineChain({
  id: 97,
  name: "Binance Smart Chain Testnet",
  network: "bsc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "tBNB"
  },
  rpcUrls: {
    default: { http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"] },
    public: { http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"] }
  },
  blockExplorers: {
    etherscan: { name: "BscScan", url: "https://testnet.bscscan.com" },
    default: { name: "BscScan", url: "https://testnet.bscscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 17422483
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/goerli.js
var goerli = /* @__PURE__ */ defineChain({
  id: 5,
  network: "goerli",
  name: "Goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://eth-goerli.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://goerli.infura.io/v3"],
      webSocket: ["wss://goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.ankr.com/eth_goerli"]
    },
    public: {
      http: ["https://rpc.ankr.com/eth_goerli"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0x56522D00C410a43BFfDF00a9A569489297385790",
      blockCreated: 8765204
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 6507670
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/mainnet.js
var mainnet = /* @__PURE__ */ defineChain({
  id: 1,
  network: "homestead",
  name: "Ethereum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://mainnet.infura.io/v3"],
      webSocket: ["wss://mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://cloudflare-eth.com"]
    },
    public: {
      http: ["https://cloudflare-eth.com"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://etherscan.io"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
      blockCreated: 16966585
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});

// node_modules/viem/_esm/chains/definitions/metis.js
var metis = /* @__PURE__ */ defineChain({
  id: 1088,
  name: "Metis",
  network: "andromeda",
  nativeCurrency: {
    decimals: 18,
    name: "Metis",
    symbol: "METIS"
  },
  rpcUrls: {
    default: { http: ["https://andromeda.metis.io/?owner=1088"] },
    public: { http: ["https://andromeda.metis.io/?owner=1088"] }
  },
  blockExplorers: {
    default: {
      name: "Andromeda Explorer",
      url: "https://andromeda-explorer.metis.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 2338552
    }
  }
});

// node_modules/viem/_esm/chains/definitions/optimism.js
var optimism = /* @__PURE__ */ defineChain({
  id: 10,
  name: "OP Mainnet",
  network: "optimism",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://opt-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://opt-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://optimism-mainnet.infura.io/v3"],
      webSocket: ["wss://optimism-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://mainnet.optimism.io"]
    },
    public: {
      http: ["https://mainnet.optimism.io"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://optimistic.etherscan.io"
    },
    default: {
      name: "Optimism Explorer",
      url: "https://explorer.optimism.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 4286263
    }
  }
}, {
  formatters: formattersOptimism
});

// node_modules/viem/_esm/chains/definitions/polygon.js
var polygon = /* @__PURE__ */ defineChain({
  id: 137,
  name: "Polygon",
  network: "matic",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://polygon-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://polygon-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://polygon-mainnet.infura.io/v3"],
      webSocket: ["wss://polygon-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://polygon-rpc.com"]
    },
    public: {
      http: ["https://polygon-rpc.com"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "PolygonScan",
      url: "https://polygonscan.com"
    },
    default: {
      name: "PolygonScan",
      url: "https://polygonscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  }
});

// node_modules/viem/_esm/chains/definitions/polygonMumbai.js
var polygonMumbai = /* @__PURE__ */ defineChain({
  id: 80001,
  name: "Polygon Mumbai",
  network: "maticmum",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://polygon-mumbai.g.alchemy.com/v2"],
      webSocket: ["wss://polygon-mumbai.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://polygon-mumbai.infura.io/v3"],
      webSocket: ["wss://polygon-mumbai.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.ankr.com/polygon_mumbai"]
    },
    public: {
      http: ["https://rpc.ankr.com/polygon_mumbai"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com"
    },
    default: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/sepolia.js
var sepolia = /* @__PURE__ */ defineChain({
  id: 11155111,
  network: "sepolia",
  name: "Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "SEP", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-sepolia.g.alchemy.com/v2"],
      webSocket: ["wss://eth-sepolia.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://sepolia.infura.io/v3"],
      webSocket: ["wss://sepolia.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.sepolia.org"]
    },
    public: {
      http: ["https://rpc.sepolia.org"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 751532
    },
    ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    ensUniversalResolver: {
      address: "0x21B000Fd62a880b2125A61e36a284BB757b76025",
      blockCreated: 3914906
    }
  },
  testnet: true
});

// src/lowdb/helpers.ts
require_main().config();
var coreName = process.env.CORE_NETWORK || "mainnet";
var baseDirName = `src/generated-cache/${coreName}`;

// node_modules/@bgd-labs/aave-address-book/dist/GovernanceV3Ethereum.mjs
var GovernanceV3Ethereum_exports = {};
__export(GovernanceV3Ethereum_exports, {
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER,
  DATA_WAREHOUSE: () => DATA_WAREHOUSE,
  EMERGENCY_REGISTRY: () => EMERGENCY_REGISTRY,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_1,
  EXECUTOR_LVL_2: () => EXECUTOR_LVL_2,
  GOVERNANCE: () => GOVERNANCE,
  GOVERNANCE_POWER_STRATEGY: () => GOVERNANCE_POWER_STRATEGY,
  GOV_DATA_HELPER: () => GOV_DATA_HELPER,
  META_DELEGATE_HELPER: () => META_DELEGATE_HELPER,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER,
  PC_DATA_HELPER: () => PC_DATA_HELPER,
  VM_DATA_HELPER: () => VM_DATA_HELPER,
  VOTING_MACHINE: () => VOTING_MACHINE,
  VOTING_PORTAL_ETH_AVAX: () => VOTING_PORTAL_ETH_AVAX,
  VOTING_PORTAL_ETH_ETH: () => VOTING_PORTAL_ETH_ETH,
  VOTING_PORTAL_ETH_POL: () => VOTING_PORTAL_ETH_POL,
  VOTING_STRATEGY: () => VOTING_STRATEGY
});
var CROSS_CHAIN_CONTROLLER = "0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1";
var GOVERNANCE = "0x9AEE0B04504CeF83A65AC3f0e838D0593BCb2BC7";
var PAYLOADS_CONTROLLER = "0xdAbad81aF85554E9ae636395611C58F7eC1aAEc5";
var VOTING_MACHINE = "0x617332a777780F546261247F621051d0b98975Eb";
var VOTING_PORTAL_ETH_ETH = "0xf23f7De3AC42F22eBDA17e64DC4f51FB66b8E21f";
var VOTING_PORTAL_ETH_AVAX = "0x33aCEf7365809218485873B7d0d67FeE411B5D79";
var VOTING_PORTAL_ETH_POL = "0x9b24C168d6A76b5459B1d47071a54962a4df36c3";
var PC_DATA_HELPER = "0xE3B770Dc4ae3f8bECaB3Ed12dE692c741603e16A";
var GOV_DATA_HELPER = "0x971c82c8316aD611904F95616c21ce90837f1856";
var VM_DATA_HELPER = "0x77976B51569896523EE215962Ee91ff236Fa50E8";
var META_DELEGATE_HELPER = "0x94363B11b37BC3ffe43AB09cff5A010352FE85dC";
var EMERGENCY_REGISTRY = "0x73C6Fb358dDA8e84D50e98A98F7c0dF32e15C7e9";
var GOVERNANCE_POWER_STRATEGY = "0xa198Fac58E02A5C5F8F7e877895d50cFa9ad1E04";
var EXECUTOR_LVL_1 = "0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A";
var EXECUTOR_LVL_2 = "0x17Dd33Ed0e3dD2a80E37489B8A63063161BE6957";
var VOTING_STRATEGY = "0x5642A5A5Ec284B4145563aBF319620204aCCA7f4";
var DATA_WAREHOUSE = "0x1699FE9CaDC8a0b6c93E06B62Ab4592a0fFEcF61";

// node_modules/@bgd-labs/aave-address-book/dist/GovernanceV3Arbitrum.mjs
var GovernanceV3Arbitrum_exports = {};
__export(GovernanceV3Arbitrum_exports, {
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER2,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_12,
  EXECUTOR_LVL_2: () => EXECUTOR_LVL_22,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER2,
  PC_DATA_HELPER: () => PC_DATA_HELPER2
});
var CROSS_CHAIN_CONTROLLER2 = "0xCbFB78a3Eeaa611b826E37c80E4126c8787D29f0";
var PAYLOADS_CONTROLLER2 = "0x89644CA1bB8064760312AE4F03ea41b05dA3637C";
var PC_DATA_HELPER2 = "0xE3B770Dc4ae3f8bECaB3Ed12dE692c741603e16A";
var EXECUTOR_LVL_12 = "0xFF1137243698CaA18EE364Cc966CF0e02A4e6327";
var EXECUTOR_LVL_22 = "0x0000000000000000000000000000000000000000";

// node_modules/@bgd-labs/aave-address-book/dist/GovernanceV3Avalanche.mjs
var GovernanceV3Avalanche_exports = {};
__export(GovernanceV3Avalanche_exports, {
  CL_EMERGENCY_ORACLE: () => CL_EMERGENCY_ORACLE,
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER3,
  DATA_WAREHOUSE: () => DATA_WAREHOUSE2,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_13,
  EXECUTOR_LVL_2: () => EXECUTOR_LVL_23,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER3,
  PC_DATA_HELPER: () => PC_DATA_HELPER3,
  VM_DATA_HELPER: () => VM_DATA_HELPER2,
  VOTING_MACHINE: () => VOTING_MACHINE2,
  VOTING_STRATEGY: () => VOTING_STRATEGY2
});
var CROSS_CHAIN_CONTROLLER3 = "0x27FC7D54C893dA63C0AE6d57e1B2B13A70690928";
var CL_EMERGENCY_ORACLE = "0x41185495Bc8297a65DC46f94001DC7233775EbEe";
var VOTING_MACHINE2 = "0x9b6f5ef589A3DD08670Dd146C11C4Fb33E04494F";
var PAYLOADS_CONTROLLER3 = "0x1140CB7CAfAcC745771C2Ea31e7B5C653c5d0B80";
var PC_DATA_HELPER3 = "0xE3B770Dc4ae3f8bECaB3Ed12dE692c741603e16A";
var VM_DATA_HELPER2 = "0x77976B51569896523EE215962Ee91ff236Fa50E8";
var EXECUTOR_LVL_13 = "0x3C06dce358add17aAf230f2234bCCC4afd50d090";
var EXECUTOR_LVL_23 = "0x0000000000000000000000000000000000000000";
var VOTING_STRATEGY2 = "0x690C218668B440204F369Af1541245d367cc805C";
var DATA_WAREHOUSE2 = "0x9626F9d60CC0B7e1c9a0A47b7f0bd618fb6f40ff";

// node_modules/@bgd-labs/aave-address-book/dist/GovernanceV3Optimism.mjs
var GovernanceV3Optimism_exports = {};
__export(GovernanceV3Optimism_exports, {
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER4,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_14,
  EXECUTOR_LVL_2: () => EXECUTOR_LVL_24,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER4,
  PC_DATA_HELPER: () => PC_DATA_HELPER4
});
var CROSS_CHAIN_CONTROLLER4 = "0x48A9FE90bce5EEd790f3F4Ce192d1C0B351fd4Ca";
var PAYLOADS_CONTROLLER4 = "0x0E1a3Af1f9cC76A62eD31eDedca291E63632e7c4";
var PC_DATA_HELPER4 = "0xE3B770Dc4ae3f8bECaB3Ed12dE692c741603e16A";
var EXECUTOR_LVL_14 = "0x746c675dAB49Bcd5BB9Dc85161f2d7Eb435009bf";
var EXECUTOR_LVL_24 = "0x0000000000000000000000000000000000000000";

// node_modules/@bgd-labs/aave-address-book/dist/GovernanceV3Polygon.mjs
var GovernanceV3Polygon_exports = {};
__export(GovernanceV3Polygon_exports, {
  CL_EMERGENCY_ORACLE: () => CL_EMERGENCY_ORACLE2,
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER5,
  DATA_WAREHOUSE: () => DATA_WAREHOUSE3,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_15,
  EXECUTOR_LVL_2: () => EXECUTOR_LVL_25,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER5,
  PC_DATA_HELPER: () => PC_DATA_HELPER5,
  VM_DATA_HELPER: () => VM_DATA_HELPER3,
  VOTING_MACHINE: () => VOTING_MACHINE3,
  VOTING_STRATEGY: () => VOTING_STRATEGY3
});
var CROSS_CHAIN_CONTROLLER5 = "0xF6B99959F0b5e79E1CC7062E12aF632CEb18eF0d";
var CL_EMERGENCY_ORACLE2 = "0xDAFA1989A504c48Ee20a582f2891eeB25E2fA23F";
var VOTING_MACHINE3 = "0xc8a2ADC4261c6b669CdFf69E717E77C9cFeB420d";
var PAYLOADS_CONTROLLER5 = "0x401B5D0294E23637c18fcc38b1Bca814CDa2637C";
var PC_DATA_HELPER5 = "0xE3B770Dc4ae3f8bECaB3Ed12dE692c741603e16A";
var VM_DATA_HELPER3 = "0x77976B51569896523EE215962Ee91ff236Fa50E8";
var EXECUTOR_LVL_15 = "0xDf7d0e6454DB638881302729F5ba99936EaAB233";
var EXECUTOR_LVL_25 = "0x0000000000000000000000000000000000000000";
var VOTING_STRATEGY3 = "0x59e6CAD5d7E7b9A26a45a1d1E74C7aF008170042";
var DATA_WAREHOUSE3 = "0xf41193E25408F652AF878c47E4401A01B5E4B682";

// node_modules/@bgd-labs/aave-address-book/dist/GovernanceV3Metis.mjs
var GovernanceV3Metis_exports = {};
__export(GovernanceV3Metis_exports, {
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER6,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_16,
  EXECUTOR_LVL_2: () => EXECUTOR_LVL_26,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER6,
  PC_DATA_HELPER: () => PC_DATA_HELPER6
});
var CROSS_CHAIN_CONTROLLER6 = "0x6fDaFb26915ABD6065a1E1501a37Ac438D877f70";
var PAYLOADS_CONTROLLER6 = "0x2233F8A66A728FBa6E1dC95570B25360D07D5524";
var PC_DATA_HELPER6 = "0x81d32B36380e6266e1BDd490eAC56cdB300afBe0";
var EXECUTOR_LVL_16 = "0x6fD45D32375d5aDB8D76275A3932c740F03a8718";
var EXECUTOR_LVL_26 = "0x0000000000000000000000000000000000000000";

// node_modules/@bgd-labs/aave-address-book/dist/GovernanceV3Base.mjs
var GovernanceV3Base_exports = {};
__export(GovernanceV3Base_exports, {
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER7,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_17,
  EXECUTOR_LVL_2: () => EXECUTOR_LVL_27,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER7,
  PC_DATA_HELPER: () => PC_DATA_HELPER7
});
var CROSS_CHAIN_CONTROLLER7 = "0x529467C76f234F2bD359d7ecF7c660A2846b04e2";
var PAYLOADS_CONTROLLER7 = "0x2DC219E716793fb4b21548C0f009Ba3Af753ab01";
var PC_DATA_HELPER7 = "0xE3B770Dc4ae3f8bECaB3Ed12dE692c741603e16A";
var EXECUTOR_LVL_17 = "0x9390B1735def18560c509E2d0bc090E9d6BA257a";
var EXECUTOR_LVL_27 = "0x0000000000000000000000000000000000000000";

// node_modules/@bgd-labs/aave-address-book/dist/AaveV3Ethereum.mjs
var AaveV3Ethereum_exports = {};
__export(AaveV3Ethereum_exports, {
  AAVE_PROTOCOL_DATA_PROVIDER: () => AAVE_PROTOCOL_DATA_PROVIDER,
  ACL_ADMIN: () => ACL_ADMIN,
  ACL_MANAGER: () => ACL_MANAGER,
  ASSETS: () => ASSETS,
  CAPS_PLUS_RISK_STEWARD: () => CAPS_PLUS_RISK_STEWARD,
  CHAIN_ID: () => CHAIN_ID,
  COLLECTOR: () => COLLECTOR,
  CONFIG_ENGINE: () => CONFIG_ENGINE,
  DEBT_SWAP_ADAPTER: () => DEBT_SWAP_ADAPTER,
  DEFAULT_A_TOKEN_IMPL_REV_1: () => DEFAULT_A_TOKEN_IMPL_REV_1,
  DEFAULT_INCENTIVES_CONTROLLER: () => DEFAULT_INCENTIVES_CONTROLLER,
  DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1: () => DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1,
  DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: () => DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1,
  DELEGATION_AWARE_A_TOKEN_IMPL_REV_1: () => DELEGATION_AWARE_A_TOKEN_IMPL_REV_1,
  EMISSION_MANAGER: () => EMISSION_MANAGER,
  E_MODES: () => E_MODES,
  FREEZING_STEWARD: () => FREEZING_STEWARD,
  GHO_TOKEN: () => GHO_TOKEN,
  ORACLE: () => ORACLE,
  POOL: () => POOL,
  POOL_ADDRESSES_PROVIDER: () => POOL_ADDRESSES_PROVIDER,
  POOL_ADDRESSES_PROVIDER_REGISTRY: () => POOL_ADDRESSES_PROVIDER_REGISTRY,
  POOL_CONFIGURATOR: () => POOL_CONFIGURATOR,
  PRICE_ORACLE_SENTINEL: () => PRICE_ORACLE_SENTINEL,
  RATES_FACTORY: () => RATES_FACTORY,
  REPAY_WITH_COLLATERAL_ADAPTER: () => REPAY_WITH_COLLATERAL_ADAPTER,
  STATIC_A_TOKEN_FACTORY: () => STATIC_A_TOKEN_FACTORY,
  SWAP_COLLATERAL_ADAPTER: () => SWAP_COLLATERAL_ADAPTER,
  UI_GHO_DATA_PROVIDER: () => UI_GHO_DATA_PROVIDER,
  UI_INCENTIVE_DATA_PROVIDER: () => UI_INCENTIVE_DATA_PROVIDER,
  UI_POOL_DATA_PROVIDER: () => UI_POOL_DATA_PROVIDER,
  WALLET_BALANCE_PROVIDER: () => WALLET_BALANCE_PROVIDER,
  WETH_GATEWAY: () => WETH_GATEWAY,
  WITHDRAW_SWAP_ADAPTER: () => WITHDRAW_SWAP_ADAPTER
});
var POOL_ADDRESSES_PROVIDER = "0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e";
var POOL = "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2";
var POOL_CONFIGURATOR = "0x64b761D848206f447Fe2dd461b0c635Ec39EbB27";
var ORACLE = "0x54586bE62E3c3580375aE3723C145253060Ca0C2";
var PRICE_ORACLE_SENTINEL = "0x0000000000000000000000000000000000000000";
var AAVE_PROTOCOL_DATA_PROVIDER = "0x7B4EB56E7CD4b454BA8ff71E4518426369a138a3";
var ACL_MANAGER = "0xc2aaCf6553D20d1e9d78E365AAba8032af9c85b0";
var ACL_ADMIN = "0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A";
var COLLECTOR = "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c";
var DEFAULT_INCENTIVES_CONTROLLER = "0x8164Cc65827dcFe994AB23944CBC90e0aa80bFcb";
var DEFAULT_A_TOKEN_IMPL_REV_1 = "0x7EfFD7b47Bfd17e52fB7559d3f924201b9DbfF3d";
var DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0xaC725CB59D16C81061BDeA61041a8A5e73DA9EC6";
var DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1 = "0x15C5620dfFaC7c7366EED66C20Ad222DDbB1eD57";
var EMISSION_MANAGER = "0x223d844fc4B006D67c0cDbd39371A9F73f69d974";
var CAPS_PLUS_RISK_STEWARD = "0x82dcCF206Ae2Ab46E2099e663F70DeE77caE7778";
var FREEZING_STEWARD = "0x2eE68ACb6A1319de1b49DC139894644E424fefD6";
var DEBT_SWAP_ADAPTER = "0x8761e0370f94f68Db8EaA731f4fC581f6AD0Bd68";
var DELEGATION_AWARE_A_TOKEN_IMPL_REV_1 = "0x21714092D90c7265F52fdfDae068EC11a23C6248";
var GHO_TOKEN = "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f";
var CONFIG_ENGINE = "0xA3e44d830440dF5098520F62Ebec285B1198c51E";
var POOL_ADDRESSES_PROVIDER_REGISTRY = "0xbaA999AC55EAce41CcAE355c77809e68Bb345170";
var RATES_FACTORY = "0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896";
var REPAY_WITH_COLLATERAL_ADAPTER = "0x02e7B8511831B1b02d9018215a0f8f500Ea5c6B3";
var STATIC_A_TOKEN_FACTORY = "0x411D79b8cC43384FDE66CaBf9b6a17180c842511";
var SWAP_COLLATERAL_ADAPTER = "0xADC0A53095A0af87F3aa29FE0715B5c28016364e";
var UI_GHO_DATA_PROVIDER = "0x379c1EDD1A41218bdbFf960a9d5AD2818Bf61aE8";
var UI_INCENTIVE_DATA_PROVIDER = "0x162A7AC02f547ad796CA549f757e2b8d1D9b10a6";
var UI_POOL_DATA_PROVIDER = "0x91c0eA31b49B69Ea18607702c5d9aC360bf3dE7d";
var WALLET_BALANCE_PROVIDER = "0xC7be5307ba715ce89b152f3Df0658295b3dbA8E2";
var WETH_GATEWAY = "0xD322A49006FC828F9B5B37Ab215F99B4E5caB19C";
var WITHDRAW_SWAP_ADAPTER = "0x78F8Bd884C3D738B74B420540659c82f392820e0";
var CHAIN_ID = 1;
var ASSETS = {
  WETH: {
    decimals: 18,
    UNDERLYING: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    A_TOKEN: "0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8",
    S_TOKEN: "0x102633152313C81cD80419b6EcF66d14Ad68949A",
    V_TOKEN: "0xeA51d7853EEFb32b6ee06b1C12E6dcCA88Be0fFE",
    INTEREST_RATE_STRATEGY: "0xA901Bf68Bebde17ba382e499C3e9EbAe649DF276",
    ORACLE: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  wstETH: {
    decimals: 18,
    UNDERLYING: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
    A_TOKEN: "0x0B925eD163218f6662a35e0f0371Ac234f9E9371",
    S_TOKEN: "0x39739943199c0fBFe9E5f1B5B160cd73a64CB85D",
    V_TOKEN: "0xC96113eED8cAB59cD8A66813bCB0cEb29F06D2e4",
    INTEREST_RATE_STRATEGY: "0x7b8Fa4540246554e77FCFf140f9114de00F8bB8D",
    ORACLE: "0x8B6851156023f4f5A66F68BEA80851c3D905Ac93",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  WBTC: {
    decimals: 8,
    UNDERLYING: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    A_TOKEN: "0x5Ee5bf7ae06D1Be5997A1A72006FE6C607eC6DE8",
    S_TOKEN: "0xA1773F1ccF6DB192Ad8FE826D15fe1d328B03284",
    V_TOKEN: "0x40aAbEf1aa8f0eEc637E0E7d92fbfFB2F26A8b7B",
    INTEREST_RATE_STRATEGY: "0x07Fa3744FeC271F80c2EA97679823F65c13CCDf4",
    ORACLE: "0x230E0321Cf38F09e247e50Afc7801EA2351fe56F",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  USDC: {
    decimals: 6,
    UNDERLYING: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    A_TOKEN: "0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c",
    S_TOKEN: "0xB0fe3D292f4bd50De902Ba5bDF120Ad66E9d7a39",
    V_TOKEN: "0x72E95b8931767C79bA4EeE721354d6E99a61D004",
    INTEREST_RATE_STRATEGY: "0x53b13a6D43F647D788411Abfd28D229C274AfBF9",
    ORACLE: "0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  DAI: {
    decimals: 18,
    UNDERLYING: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    A_TOKEN: "0x018008bfb33d285247A21d44E50697654f754e63",
    S_TOKEN: "0x413AdaC9E2Ef8683ADf5DDAEce8f19613d60D1bb",
    V_TOKEN: "0xcF8d0c70c850859266f5C338b38F9D663181C314",
    INTEREST_RATE_STRATEGY: "0x9a158802cD924747EF336cA3F9DE3bdb60Cf43D3",
    ORACLE: "0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  LINK: {
    decimals: 18,
    UNDERLYING: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    A_TOKEN: "0x5E8C8A7243651DB1384C0dDfDbE39761E8e7E51a",
    S_TOKEN: "0x63B1129ca97D2b9F97f45670787Ac12a9dF1110a",
    V_TOKEN: "0x4228F8895C7dDA20227F6a5c6751b8Ebf19a6ba8",
    INTEREST_RATE_STRATEGY: "0x24701A6368Ff6D2874d6b8cDadd461552B8A5283",
    ORACLE: "0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  AAVE: {
    decimals: 18,
    UNDERLYING: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    A_TOKEN: "0xA700b4eB416Be35b2911fd5Dee80678ff64fF6C9",
    S_TOKEN: "0x268497bF083388B1504270d0E717222d3A87D6F2",
    V_TOKEN: "0xBae535520Abd9f8C85E58929e0006A2c8B372F74",
    INTEREST_RATE_STRATEGY: "0x24701A6368Ff6D2874d6b8cDadd461552B8A5283",
    ORACLE: "0x547a514d5e3769680Ce22B2361c10Ea13619e8a9",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  cbETH: {
    decimals: 18,
    UNDERLYING: "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
    A_TOKEN: "0x977b6fc5dE62598B08C85AC8Cf2b745874E8b78c",
    S_TOKEN: "0x82bE6012cea6D147B968eBAea5ceEcF6A5b4F493",
    V_TOKEN: "0x0c91bcA95b5FE69164cE583A2ec9429A569798Ed",
    INTEREST_RATE_STRATEGY: "0x24701A6368Ff6D2874d6b8cDadd461552B8A5283",
    ORACLE: "0x5f4d15d761528c57a5C30c43c1DAb26Fc5452731",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  USDT: {
    decimals: 6,
    UNDERLYING: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    A_TOKEN: "0x23878914EFE38d27C4D67Ab83ed1b93A74D4086a",
    S_TOKEN: "0x822Fa72Df1F229C3900f5AD6C3Fa2C424D691622",
    V_TOKEN: "0x6df1C1E379bC5a00a7b4C6e67A203333772f45A8",
    INTEREST_RATE_STRATEGY: "0x588b62C84533232E3A881e096E5D639Fa754F093",
    ORACLE: "0x3E7d1eAB13ad0104d2750B8863b489D65364e32D",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  rETH: {
    decimals: 18,
    UNDERLYING: "0xae78736Cd615f374D3085123A210448E74Fc6393",
    A_TOKEN: "0xCc9EE9483f662091a1de4795249E24aC0aC2630f",
    S_TOKEN: "0x1d1906f909CAe494c7441604DAfDDDbD0485A925",
    V_TOKEN: "0xae8593DD575FE29A9745056aA91C4b746eee62C8",
    INTEREST_RATE_STRATEGY: "0x24701A6368Ff6D2874d6b8cDadd461552B8A5283",
    ORACLE: "0x05225Cd708bCa9253789C1374e4337a019e99D56",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  LUSD: {
    decimals: 18,
    UNDERLYING: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
    A_TOKEN: "0x3Fe6a295459FAe07DF8A0ceCC36F37160FE86AA9",
    S_TOKEN: "0x37A6B708FDB1483C231961b9a7F145261E815fc3",
    V_TOKEN: "0x33652e48e4B74D18520f11BfE58Edd2ED2cEc5A2",
    INTEREST_RATE_STRATEGY: "0xaDbdb3d6B51151e4CDF32e4050B6F03D2bfB6477",
    ORACLE: "0x3D7aE7E594f2f2091Ad8798313450130d0Aba3a0",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  CRV: {
    decimals: 18,
    UNDERLYING: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    A_TOKEN: "0x7B95Ec873268a6BFC6427e7a28e396Db9D0ebc65",
    S_TOKEN: "0x90D9CD005E553111EB8C9c31Abe9706a186b6048",
    V_TOKEN: "0x1b7D3F4b3c032a5AE656e30eeA4e8E1Ba376068F",
    INTEREST_RATE_STRATEGY: "0x76884cAFeCf1f7d4146DA6C4053B18B76bf6ED14",
    ORACLE: "0xCd627aA160A6fA45Eb793D19Ef54f5062F20f33f",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  MKR: {
    decimals: 18,
    UNDERLYING: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    A_TOKEN: "0x8A458A9dc9048e005d22849F470891b840296619",
    S_TOKEN: "0x0496372BE7e426D28E89DEBF01f19F014d5938bE",
    V_TOKEN: "0x6Efc73E54E41b27d2134fF9f98F15550f30DF9B1",
    INTEREST_RATE_STRATEGY: "0x27eFE5db315b71753b2a38ED3d5dd7E9362ba93F",
    ORACLE: "0xec1D1B3b0443256cc3860e24a46F108e699484Aa",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  SNX: {
    decimals: 18,
    UNDERLYING: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    A_TOKEN: "0xC7B4c17861357B8ABB91F25581E7263E08DCB59c",
    S_TOKEN: "0x478E1ec1A2BeEd94c1407c951E4B9e22d53b2501",
    V_TOKEN: "0x8d0de040e8aAd872eC3c33A3776dE9152D3c34ca",
    INTEREST_RATE_STRATEGY: "0xA6459195d60A797D278f58Ffbd2BA62Fb3F7FA1E",
    ORACLE: "0xDC3EA94CD0AC27d9A86C180091e7f78C683d3699",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  BAL: {
    decimals: 18,
    UNDERLYING: "0xba100000625a3754423978a60c9317c58a424e3D",
    A_TOKEN: "0x2516E7B3F76294e03C42AA4c5b5b4DCE9C436fB8",
    S_TOKEN: "0xB368d45aaAa07ee2c6275Cb320D140b22dE43CDD",
    V_TOKEN: "0x3D3efceb4Ff0966D34d9545D3A2fa2dcdBf451f2",
    INTEREST_RATE_STRATEGY: "0xd9d85499449f26d2A2c240defd75314f23920089",
    ORACLE: "0xdF2917806E30300537aEB49A7663062F4d1F2b5F",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  UNI: {
    decimals: 18,
    UNDERLYING: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    A_TOKEN: "0xF6D2224916DDFbbab6e6bd0D1B7034f4Ae0CaB18",
    S_TOKEN: "0x2FEc76324A0463c46f32e74A86D1cf94C02158DC",
    V_TOKEN: "0xF64178Ebd2E2719F2B1233bCb5Ef6DB4bCc4d09a",
    INTEREST_RATE_STRATEGY: "0x27eFE5db315b71753b2a38ED3d5dd7E9362ba93F",
    ORACLE: "0x553303d460EE0afB37EdFf9bE42922D8FF63220e",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  LDO: {
    decimals: 18,
    UNDERLYING: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
    A_TOKEN: "0x9A44fd41566876A39655f74971a3A6eA0a17a454",
    S_TOKEN: "0xa0a5bF5781Aeb548db9d4226363B9e89287C5FD2",
    V_TOKEN: "0xc30808705C01289A3D306ca9CAB081Ba9114eC82",
    INTEREST_RATE_STRATEGY: "0x27eFE5db315b71753b2a38ED3d5dd7E9362ba93F",
    ORACLE: "0xb01e6C9af83879B8e06a092f0DD94309c0D497E4",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  ENS: {
    decimals: 18,
    UNDERLYING: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
    A_TOKEN: "0x545bD6c032eFdde65A377A6719DEF2796C8E0f2e",
    S_TOKEN: "0x7617d02E311CdE347A0cb45BB7DF2926BBaf5347",
    V_TOKEN: "0xd180D7fdD4092f07428eFE801E17BC03576b3192",
    INTEREST_RATE_STRATEGY: "0xf6733B9842883BFE0e0a940eA2F572676af31bde",
    ORACLE: "0x5C00128d4d1c2F4f652C267d7bcdD7aC99C16E16",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  ONE_INCH: {
    decimals: 18,
    UNDERLYING: "0x111111111117dC0aa78b770fA6A738034120C302",
    A_TOKEN: "0x71Aef7b30728b9BB371578f36c5A1f1502a5723e",
    S_TOKEN: "0x4b62bFAff61AB3985798e5202D2d167F567D0BCD",
    V_TOKEN: "0xA38fCa8c6Bf9BdA52E76EB78f08CaA3BE7c5A970",
    INTEREST_RATE_STRATEGY: "0xf6733B9842883BFE0e0a940eA2F572676af31bde",
    ORACLE: "0xc929ad75B72593967DE83E7F7Cda0493458261D9",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  FRAX: {
    decimals: 18,
    UNDERLYING: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
    A_TOKEN: "0xd4e245848d6E1220DBE62e155d89fa327E43CB06",
    S_TOKEN: "0x219640546c0DFDDCb9ab3bcdA89B324e0a376367",
    V_TOKEN: "0x88B8358F5BC87c2D7E116cCA5b65A9eEb2c5EA3F",
    INTEREST_RATE_STRATEGY: "0x9a158802cD924747EF336cA3F9DE3bdb60Cf43D3",
    ORACLE: "0xB9E1E3A9feFf48998E45Fa90847ed4D467E8BcfD",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  GHO: {
    decimals: 18,
    UNDERLYING: "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f",
    A_TOKEN: "0x00907f9921424583e7ffBfEdf84F92B7B2Be4977",
    S_TOKEN: "0x3f3DF7266dA30102344A813F1a3D07f5F041B5AC",
    V_TOKEN: "0x786dBff3f1292ae8F92ea68Cf93c30b34B1ed04B",
    INTEREST_RATE_STRATEGY: "0xE6e780D77b883E9a5eC84f7baA6BF4DB43177Fa7",
    ORACLE: "0xD110cac5d8682A3b045D5524a9903E031d70FCCd",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  RPL: {
    decimals: 18,
    UNDERLYING: "0xD33526068D116cE69F19A9ee46F0bd304F21A51f",
    A_TOKEN: "0xB76CF92076adBF1D9C39294FA8e7A67579FDe357",
    S_TOKEN: "0x41e330fd8F7eA31E2e8F02cC0C9392D1403597B4",
    V_TOKEN: "0x8988ECA19D502fd8b9CCd03fA3bD20a6f599bc2A",
    INTEREST_RATE_STRATEGY: "0xD87974E8ED49AB16d5053ba793F4e17078Be0426",
    ORACLE: "0x4E155eD98aFE9034b7A5962f6C84c86d869daA9d",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  sDAI: {
    decimals: 18,
    UNDERLYING: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
    A_TOKEN: "0x4C612E3B15b96Ff9A6faED838F8d07d479a8dD4c",
    S_TOKEN: "0x48Bc45f084988bC01933EA93EeFfEBC0416534f6",
    V_TOKEN: "0x8Db9D35e117d8b93C6Ca9b644b25BaD5d9908141",
    INTEREST_RATE_STRATEGY: "0xdef8F50155A6cf21181E29E400E8CffAE2d50968",
    ORACLE: "0x29081f7aB5a644716EfcDC10D5c926c5fEe9F72B",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  STG: {
    decimals: 18,
    UNDERLYING: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
    A_TOKEN: "0x1bA9843bD4327c6c77011406dE5fA8749F7E3479",
    S_TOKEN: "0xc3115D0660b93AeF10F298886ae22E3Dd477E482",
    V_TOKEN: "0x655568bDd6168325EC7e58Bf39b21A856F906Dc2",
    INTEREST_RATE_STRATEGY: "0x27eFE5db315b71753b2a38ED3d5dd7E9362ba93F",
    ORACLE: "0x7A9f34a0Aa917D438e9b6E630067062B7F8f6f3d",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  KNC: {
    decimals: 18,
    UNDERLYING: "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
    A_TOKEN: "0x5b502e3796385E1e9755d7043B9C945C3aCCeC9C",
    S_TOKEN: "0xdfEE0C9eA1309cB9611F33972E72a72166fcF548",
    V_TOKEN: "0x253127Ffc04981cEA8932F406710661c2f2c3fD2",
    INTEREST_RATE_STRATEGY: "0xf6733B9842883BFE0e0a940eA2F572676af31bde",
    ORACLE: "0xf8fF43E991A81e6eC886a3D281A2C6cC19aE70Fc",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  FXS: {
    decimals: 18,
    UNDERLYING: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
    A_TOKEN: "0x82F9c5ad306BBa1AD0De49bB5FA6F01bf61085ef",
    S_TOKEN: "0x61dFd349140C239d3B61fEe203Efc811b518a317",
    V_TOKEN: "0x68e9f0aD4e6f8F5DB70F6923d4d6d5b225B83b16",
    INTEREST_RATE_STRATEGY: "0xf6733B9842883BFE0e0a940eA2F572676af31bde",
    ORACLE: "0x6Ebc52C8C1089be9eB3945C4350B68B8E4C2233f",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  },
  crvUSD: {
    decimals: 18,
    UNDERLYING: "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
    A_TOKEN: "0xb82fa9f31612989525992FCfBB09AB22Eff5c85A",
    S_TOKEN: "0xb55C604075D79486b8A329c396Fc711Be54B5330",
    V_TOKEN: "0x028f7886F3e937f8479efaD64f31B3fE1119857a",
    INTEREST_RATE_STRATEGY: "0x44CaDF6E49895640D9De85ac01d97D44429Ad0A4",
    ORACLE: "0xEEf0C605546958c1f899b6fB336C20671f9cD49F",
    STATA_TOKEN: "0x0000000000000000000000000000000000000000"
  }
};
var E_MODES = {
  NONE: 0,
  ETH_CORRELATED: 1
};

// node_modules/@bgd-labs/aave-address-book/dist/AaveSafetyModule.mjs
var AaveSafetyModule_exports = {};
__export(AaveSafetyModule_exports, {
  STK_AAVE: () => STK_AAVE,
  STK_ABPT: () => STK_ABPT,
  STK_ABPT_ORACLE: () => STK_ABPT_ORACLE,
  STK_ABPT_V2_ORACLE: () => STK_ABPT_V2_ORACLE
});
var STK_AAVE = "0x4da27a545c0c5B758a6BA100e3a049001de870f5";
var STK_ABPT = "0xa1116930326D21fB917d5A27F1E9943A9595fb47";
var STK_ABPT_ORACLE = "0x209Ad99bd808221293d03827B86cC544bcA0023b";
var STK_ABPT_V2_ORACLE = "0xADf86b537eF08591c2777E144322E8b0Ca7E82a7";

// node_modules/@bgd-labs/aave-address-book/dist/abis/IVotingMachineWithProofs.mjs
var IVotingMachineWithProofs_ABI = [
  {
    type: "function",
    name: "DATA_WAREHOUSE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IDataWarehouse"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "GOVERNANCE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "NAME",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "REPRESENTATIVES_SLOT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTE_SUBMITTED_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTING_ASSET_WITH_SLOT_RAW",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTING_ASSET_WITH_SLOT_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTING_STRATEGY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IVotingStrategy"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "closeAndSendVote",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getProposalById",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IVotingMachineWithProofs.ProposalWithoutVotes",
        components: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "sentToGovernance",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "startTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "endTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "votingClosedAndSentTimestamp",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "forVotes",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "againstVotes",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "creationBlockNumber",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "votingClosedAndSentBlockNumber",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalState",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum IVotingMachineWithProofs.ProposalState"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalVoteConfiguration",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IVotingMachineWithProofs.ProposalVoteConfiguration",
        components: [
          {
            name: "votingDuration",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "l1ProposalBlockHash",
            type: "bytes32",
            internalType: "bytes32"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalsVoteConfigurationIds",
    inputs: [
      {
        name: "skip",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "size",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getUserProposalVote",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IVotingMachineWithProofs.Vote",
        components: [
          {
            name: "support",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "votingPower",
            type: "uint248",
            internalType: "uint248"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "startProposalVote",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "submitVote",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "proof",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "submitVoteAsRepresentative",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "voter",
        type: "address",
        internalType: "address"
      },
      {
        name: "proofOfRepresentation",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "proof",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "submitVoteAsRepresentativeBySignature",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        internalType: "address"
      },
      {
        name: "representative",
        type: "address",
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "proofOfRepresentation",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "proof",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      },
      {
        name: "signatureParams",
        type: "tuple",
        internalType: "struct IVotingMachineWithProofs.SignatureParams",
        components: [
          {
            name: "v",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "r",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "s",
            type: "bytes32",
            internalType: "bytes32"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "submitVoteBySignature",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "proof",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8"
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "ProposalResultsSent",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "forVotes",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "againstVotes",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalVoteConfigurationBridged",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "blockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "votingDuration",
        type: "uint24",
        indexed: false,
        internalType: "uint24"
      },
      {
        name: "voteCreated",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalVoteStarted",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "l1BlockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "startTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "endTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VoteEmitted",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "votingPower",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];

// node_modules/@bgd-labs/aave-address-book/dist/abis/IGovernanceCore.mjs
var IGovernanceCore_ABI = [
  {
    type: "function",
    name: "ACHIEVABLE_VOTING_PARTICIPATION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "CANCELLATION_FEE_COLLECTOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "COOLDOWN_PERIOD",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MIN_VOTING_DURATION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "NAME",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "PRECISION_DIVIDER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "PROPOSAL_EXPIRATION_TIME",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VOTING_TOKENS_CAP",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "activateVoting",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "addVotingPortals",
    inputs: [
      {
        name: "votingPortals",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "cancelProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "createProposal",
    inputs: [
      {
        name: "payloads",
        type: "tuple[]",
        internalType: "struct PayloadsControllerUtils.Payload[]",
        components: [
          {
            name: "chain",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "payloadsController",
            type: "address",
            internalType: "address"
          },
          {
            name: "payloadId",
            type: "uint40",
            internalType: "uint40"
          }
        ]
      },
      {
        name: "votingPortal",
        type: "address",
        internalType: "address"
      },
      {
        name: "ipfsHash",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "executeProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getCancellationFee",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPowerStrategy",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IGovernancePowerStrategy"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IGovernanceCore.Proposal",
        components: [
          {
            name: "state",
            type: "uint8",
            internalType: "enum IGovernanceCore.State"
          },
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "creationTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "votingDuration",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "votingActivationTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "queuingTime",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "cancelTimestamp",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "creator",
            type: "address",
            internalType: "address"
          },
          {
            name: "votingPortal",
            type: "address",
            internalType: "address"
          },
          {
            name: "snapshotBlockHash",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "ipfsHash",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "forVotes",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "againstVotes",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "cancellationFee",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "payloads",
            type: "tuple[]",
            internalType: "struct PayloadsControllerUtils.Payload[]",
            components: [
              {
                name: "chain",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "accessLevel",
                type: "uint8",
                internalType: "enum PayloadsControllerUtils.AccessControl"
              },
              {
                name: "payloadsController",
                type: "address",
                internalType: "address"
              },
              {
                name: "payloadId",
                type: "uint40",
                internalType: "uint40"
              }
            ]
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalState",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum IGovernanceCore.State"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalsCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getRepresentativeByChain",
    inputs: [
      {
        name: "voter",
        type: "address",
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getRepresentedVotersByChain",
    inputs: [
      {
        name: "representative",
        type: "address",
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVotingConfig",
    inputs: [
      {
        name: "accessLevel",
        type: "uint8",
        internalType: "enum PayloadsControllerUtils.AccessControl"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IGovernanceCore.VotingConfig",
        components: [
          {
            name: "coolDownBeforeVotingStart",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "votingDuration",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "yesThreshold",
            type: "uint56",
            internalType: "uint56"
          },
          {
            name: "yesNoDifferential",
            type: "uint56",
            internalType: "uint56"
          },
          {
            name: "minPropositionPower",
            type: "uint56",
            internalType: "uint56"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVotingPortalsCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isVotingPortalApproved",
    inputs: [
      {
        name: "votingPortal",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "queueProposal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "forVotes",
        type: "uint128",
        internalType: "uint128"
      },
      {
        name: "againstVotes",
        type: "uint128",
        internalType: "uint128"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "redeemCancellationFee",
    inputs: [
      {
        name: "proposalIds",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "removeVotingPortals",
    inputs: [
      {
        name: "votingPortals",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "rescueVotingPortal",
    inputs: [
      {
        name: "votingPortal",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPowerStrategy",
    inputs: [
      {
        name: "newPowerStrategy",
        type: "address",
        internalType: "contract IGovernancePowerStrategy"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setVotingConfigs",
    inputs: [
      {
        name: "votingConfigs",
        type: "tuple[]",
        internalType: "struct IGovernanceCore.SetVotingConfigInput[]",
        components: [
          {
            name: "accessLevel",
            type: "uint8",
            internalType: "enum PayloadsControllerUtils.AccessControl"
          },
          {
            name: "coolDownBeforeVotingStart",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "votingDuration",
            type: "uint24",
            internalType: "uint24"
          },
          {
            name: "yesThreshold",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "yesNoDifferential",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "minPropositionPower",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateCancellationFee",
    inputs: [
      {
        name: "cancellationFee",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateRepresentativesForChain",
    inputs: [
      {
        name: "representatives",
        type: "tuple[]",
        internalType: "struct IGovernanceCore.RepresentativeInput[]",
        components: [
          {
            name: "representative",
            type: "address",
            internalType: "address"
          },
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "CancellationFeeRedeemed",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "cancellationFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "success",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "CancellationFeeUpdated",
    inputs: [
      {
        name: "cancellationFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PayloadSent",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "payloadId",
        type: "uint40",
        indexed: false,
        internalType: "uint40"
      },
      {
        name: "payloadsController",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "payloadNumberOnProposal",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "numberOfPayloadsOnProposal",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PowerStrategyUpdated",
    inputs: [
      {
        name: "newPowerStrategy",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalCanceled",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalCreated",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "creator",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "accessLevel",
        type: "uint8",
        indexed: true,
        internalType: "enum PayloadsControllerUtils.AccessControl"
      },
      {
        name: "ipfsHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalExecuted",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalFailed",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "votesFor",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      },
      {
        name: "votesAgainst",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalQueued",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "votesFor",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      },
      {
        name: "votesAgainst",
        type: "uint128",
        indexed: false,
        internalType: "uint128"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RepresentativeUpdated",
    inputs: [
      {
        name: "voter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "representative",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VoteForwarded",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "votingAssetsWithSlot",
        type: "tuple[]",
        indexed: false,
        internalType: "struct IVotingMachineWithProofs.VotingAssetWithSlot[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          }
        ]
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VotingActivated",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "snapshotBlockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "votingDuration",
        type: "uint24",
        indexed: false,
        internalType: "uint24"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VotingConfigUpdated",
    inputs: [
      {
        name: "accessLevel",
        type: "uint8",
        indexed: true,
        internalType: "enum PayloadsControllerUtils.AccessControl"
      },
      {
        name: "votingDuration",
        type: "uint24",
        indexed: false,
        internalType: "uint24"
      },
      {
        name: "coolDownBeforeVotingStart",
        type: "uint24",
        indexed: false,
        internalType: "uint24"
      },
      {
        name: "yesThreshold",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "yesNoDifferential",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "minPropositionPower",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VotingPortalUpdated",
    inputs: [
      {
        name: "votingPortal",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "approved",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  }
];

// node_modules/@bgd-labs/aave-address-book/dist/abis/IPayloadsControllerDataHelper.mjs
var IPayloadsControllerDataHelper_ABI = [
  {
    inputs: [
      {
        internalType: "contract IPayloadsController",
        name: "payloadsController",
        type: "address",
        components: []
      },
      {
        internalType: "enum PayloadsControllerUtils.AccessControl[]",
        name: "accessLevels",
        type: "uint8[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getExecutorConfigs",
    outputs: [
      {
        internalType: "struct IPayloadsControllerDataHelper.ExecutorConfig[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "enum PayloadsControllerUtils.AccessControl",
            name: "accessLevel",
            type: "uint8",
            components: []
          },
          {
            internalType: "struct IPayloadsControllerCore.ExecutorConfig",
            name: "config",
            type: "tuple",
            components: [
              {
                internalType: "address",
                name: "executor",
                type: "address",
                components: []
              },
              {
                internalType: "uint40",
                name: "delay",
                type: "uint40",
                components: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IPayloadsController",
        name: "payloadsController",
        type: "address",
        components: []
      },
      {
        internalType: "uint40[]",
        name: "payloadsIds",
        type: "uint40[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getPayloadsData",
    outputs: [
      {
        internalType: "struct IPayloadsControllerDataHelper.Payload[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
            components: []
          },
          {
            internalType: "struct IPayloadsControllerCore.Payload",
            name: "data",
            type: "tuple",
            components: [
              {
                internalType: "address",
                name: "creator",
                type: "address",
                components: []
              },
              {
                internalType: "enum PayloadsControllerUtils.AccessControl",
                name: "maximumAccessLevelRequired",
                type: "uint8",
                components: []
              },
              {
                internalType: "enum IPayloadsControllerCore.PayloadState",
                name: "state",
                type: "uint8",
                components: []
              },
              {
                internalType: "uint40",
                name: "createdAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "queuedAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "executedAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "cancelledAt",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "expirationTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "delay",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "gracePeriod",
                type: "uint40",
                components: []
              },
              {
                internalType: "struct IPayloadsControllerCore.ExecutionAction[]",
                name: "actions",
                type: "tuple[]",
                components: [
                  {
                    internalType: "address",
                    name: "target",
                    type: "address",
                    components: []
                  },
                  {
                    internalType: "bool",
                    name: "withDelegateCall",
                    type: "bool",
                    components: []
                  },
                  {
                    internalType: "enum PayloadsControllerUtils.AccessControl",
                    name: "accessLevel",
                    type: "uint8",
                    components: []
                  },
                  {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                    components: []
                  },
                  {
                    internalType: "string",
                    name: "signature",
                    type: "string",
                    components: []
                  },
                  {
                    internalType: "bytes",
                    name: "callData",
                    type: "bytes",
                    components: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

// node_modules/@bgd-labs/aave-address-book/dist/abis/IGovernanceDataHelper.mjs
var IGovernanceDataHelper_ABI = [
  {
    inputs: [
      {
        internalType: "contract IGovernanceCore",
        name: "govCore",
        type: "address",
        components: []
      },
      {
        internalType: "enum PayloadsControllerUtils.AccessControl[]",
        name: "accessLevels",
        type: "uint8[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getConstants",
    outputs: [
      {
        internalType: "struct IGovernanceDataHelper.Constants",
        name: "",
        type: "tuple",
        components: [
          {
            internalType: "struct IGovernanceDataHelper.VotingConfig[]",
            name: "votingConfigs",
            type: "tuple[]",
            components: [
              {
                internalType: "enum PayloadsControllerUtils.AccessControl",
                name: "accessLevel",
                type: "uint8",
                components: []
              },
              {
                internalType: "struct IGovernanceCore.VotingConfig",
                name: "config",
                type: "tuple",
                components: [
                  {
                    internalType: "uint24",
                    name: "coolDownBeforeVotingStart",
                    type: "uint24",
                    components: []
                  },
                  {
                    internalType: "uint24",
                    name: "votingDuration",
                    type: "uint24",
                    components: []
                  },
                  {
                    internalType: "uint56",
                    name: "yesThreshold",
                    type: "uint56",
                    components: []
                  },
                  {
                    internalType: "uint56",
                    name: "yesNoDifferential",
                    type: "uint56",
                    components: []
                  },
                  {
                    internalType: "uint56",
                    name: "minPropositionPower",
                    type: "uint56",
                    components: []
                  }
                ]
              }
            ]
          },
          {
            internalType: "uint256",
            name: "precisionDivider",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "cooldownPeriod",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "expirationTime",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "cancellationFee",
            type: "uint256",
            components: []
          }
        ]
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IGovernanceCore",
        name: "govCore",
        type: "address",
        components: []
      },
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
        components: []
      },
      {
        internalType: "uint256",
        name: "pageSize",
        type: "uint256",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getProposalsData",
    outputs: [
      {
        internalType: "struct IGovernanceDataHelper.Proposal[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
            components: []
          },
          {
            internalType: "uint256",
            name: "votingChainId",
            type: "uint256",
            components: []
          },
          {
            internalType: "struct IGovernanceCore.Proposal",
            name: "proposalData",
            type: "tuple",
            components: [
              {
                internalType: "enum IGovernanceCore.State",
                name: "state",
                type: "uint8",
                components: []
              },
              {
                internalType: "enum PayloadsControllerUtils.AccessControl",
                name: "accessLevel",
                type: "uint8",
                components: []
              },
              {
                internalType: "uint40",
                name: "creationTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint24",
                name: "votingDuration",
                type: "uint24",
                components: []
              },
              {
                internalType: "uint40",
                name: "votingActivationTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "queuingTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "cancelTimestamp",
                type: "uint40",
                components: []
              },
              {
                internalType: "address",
                name: "creator",
                type: "address",
                components: []
              },
              {
                internalType: "address",
                name: "votingPortal",
                type: "address",
                components: []
              },
              {
                internalType: "bytes32",
                name: "snapshotBlockHash",
                type: "bytes32",
                components: []
              },
              {
                internalType: "bytes32",
                name: "ipfsHash",
                type: "bytes32",
                components: []
              },
              {
                internalType: "uint128",
                name: "forVotes",
                type: "uint128",
                components: []
              },
              {
                internalType: "uint128",
                name: "againstVotes",
                type: "uint128",
                components: []
              },
              {
                internalType: "uint256",
                name: "cancellationFee",
                type: "uint256",
                components: []
              },
              {
                internalType: "struct PayloadsControllerUtils.Payload[]",
                name: "payloads",
                type: "tuple[]",
                components: [
                  {
                    internalType: "uint256",
                    name: "chain",
                    type: "uint256",
                    components: []
                  },
                  {
                    internalType: "enum PayloadsControllerUtils.AccessControl",
                    name: "accessLevel",
                    type: "uint8",
                    components: []
                  },
                  {
                    internalType: "address",
                    name: "payloadsController",
                    type: "address",
                    components: []
                  },
                  {
                    internalType: "uint40",
                    name: "payloadId",
                    type: "uint40",
                    components: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    inputs: [
      {
        internalType: "contract IGovernanceCore",
        name: "govCore",
        type: "address",
        components: []
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
        components: []
      },
      {
        internalType: "uint256[]",
        name: "chainIds",
        type: "uint256[]",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getRepresentationData",
    outputs: [
      {
        internalType: "struct IGovernanceDataHelper.Representatives[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
            components: []
          },
          {
            internalType: "address",
            name: "representative",
            type: "address",
            components: []
          }
        ]
      },
      {
        internalType: "struct IGovernanceDataHelper.Represented[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
            components: []
          },
          {
            internalType: "address[]",
            name: "votersRepresented",
            type: "address[]",
            components: []
          }
        ]
      }
    ]
  }
];

// node_modules/@bgd-labs/aave-address-book/dist/abis/IVotingMachineDataHelper.mjs
var IVotingMachineDataHelper_ABI = [
  {
    inputs: [
      {
        internalType: "contract IVotingMachineWithProofs",
        name: "votingMachine",
        type: "address",
        components: []
      },
      {
        internalType: "struct IVotingMachineDataHelper.InitialProposal[]",
        name: "initialProposals",
        type: "tuple[]",
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
            components: []
          },
          {
            internalType: "bytes32",
            name: "snapshotBlockHash",
            type: "bytes32",
            components: []
          }
        ]
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
        components: []
      }
    ],
    stateMutability: "view",
    type: "function",
    name: "getProposalsData",
    outputs: [
      {
        internalType: "struct IVotingMachineDataHelper.Proposal[]",
        name: "",
        type: "tuple[]",
        components: [
          {
            internalType: "struct IVotingMachineWithProofs.ProposalWithoutVotes",
            name: "proposalData",
            type: "tuple",
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
                components: []
              },
              {
                internalType: "bool",
                name: "sentToGovernance",
                type: "bool",
                components: []
              },
              {
                internalType: "uint40",
                name: "startTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "endTime",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint40",
                name: "votingClosedAndSentTimestamp",
                type: "uint40",
                components: []
              },
              {
                internalType: "uint128",
                name: "forVotes",
                type: "uint128",
                components: []
              },
              {
                internalType: "uint128",
                name: "againstVotes",
                type: "uint128",
                components: []
              },
              {
                internalType: "uint256",
                name: "creationBlockNumber",
                type: "uint256",
                components: []
              },
              {
                internalType: "uint256",
                name: "votingClosedAndSentBlockNumber",
                type: "uint256",
                components: []
              }
            ]
          },
          {
            internalType: "struct IVotingMachineDataHelper.VotedInfo",
            name: "votedInfo",
            type: "tuple",
            components: [
              {
                internalType: "bool",
                name: "support",
                type: "bool",
                components: []
              },
              {
                internalType: "uint248",
                name: "votingPower",
                type: "uint248",
                components: []
              }
            ]
          },
          {
            internalType: "contract IVotingStrategy",
            name: "strategy",
            type: "address",
            components: []
          },
          {
            internalType: "contract IDataWarehouse",
            name: "dataWarehouse",
            type: "address",
            components: []
          },
          {
            internalType: "address[]",
            name: "votingAssets",
            type: "address[]",
            components: []
          },
          {
            internalType: "bool",
            name: "hasRequiredRoots",
            type: "bool",
            components: []
          },
          {
            internalType: "struct IVotingMachineWithProofs.ProposalVoteConfiguration",
            name: "voteConfig",
            type: "tuple",
            components: [
              {
                internalType: "uint24",
                name: "votingDuration",
                type: "uint24",
                components: []
              },
              {
                internalType: "bytes32",
                name: "l1ProposalBlockHash",
                type: "bytes32",
                components: []
              }
            ]
          },
          {
            internalType: "enum IVotingMachineWithProofs.ProposalState",
            name: "state",
            type: "uint8",
            components: []
          }
        ]
      }
    ]
  }
];

// src/helpers/appConfig.ts
var govCoreConfig = {
  mainnet: {
    contractAddress: GovernanceV3Ethereum_exports.GOVERNANCE,
    dataHelperContractAddress: GovernanceV3Ethereum_exports.GOV_DATA_HELPER,
    votingPortals: {
      [mainnet.id]: GovernanceV3Ethereum_exports.VOTING_PORTAL_ETH_ETH,
      [polygon.id]: GovernanceV3Ethereum_exports.VOTING_PORTAL_ETH_POL,
      [avalanche.id]: GovernanceV3Ethereum_exports.VOTING_PORTAL_ETH_AVAX
    }
  },
  // testnets
  goerli: {
    contractAddress: "0x586207Df62c7D5D1c9dBb8F61EdF77cc30925C4F",
    dataHelperContractAddress: "0xB84D6c8b2cFC98191a1D6d00B38c1057252d876b",
    votingPortals: {
      [goerli.id]: "0xFf376b6db4AF0d87Dba35860B3B87F526d7879cF"
    }
  },
  sepolia: {
    contractAddress: "0xc4ABF658C3Dda84225cF8A07d7D5Bb6Aa41d9E59",
    dataHelperContractAddress: "0x863f9De2f82AB502612E8B7d4f4863c8535cb8cA",
    votingPortals: {
      [sepolia.id]: "0x1079bAa48E56065d43b4344866B187a485cb0A92",
      [avalancheFuji.id]: "0x4f47EdF2577995aBd7B875Eed75b3F28a20E696F"
    }
  }
};
var payloadsControllerConfig = {
  mainnet: {
    [mainnet.id]: {
      dataHelperContractAddress: GovernanceV3Ethereum_exports.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Ethereum_exports.PAYLOADS_CONTROLLER]
    },
    [polygon.id]: {
      dataHelperContractAddress: GovernanceV3Polygon_exports.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Polygon_exports.PAYLOADS_CONTROLLER]
    },
    [avalanche.id]: {
      dataHelperContractAddress: GovernanceV3Avalanche_exports.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Avalanche_exports.PAYLOADS_CONTROLLER]
    },
    [base.id]: {
      dataHelperContractAddress: GovernanceV3Base_exports.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Base_exports.PAYLOADS_CONTROLLER]
    },
    [arbitrum.id]: {
      dataHelperContractAddress: GovernanceV3Arbitrum_exports.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Arbitrum_exports.PAYLOADS_CONTROLLER]
    },
    [metis.id]: {
      dataHelperContractAddress: GovernanceV3Metis_exports.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Metis_exports.PAYLOADS_CONTROLLER]
    },
    [optimism.id]: {
      dataHelperContractAddress: GovernanceV3Optimism_exports.PC_DATA_HELPER,
      contractAddresses: [GovernanceV3Optimism_exports.PAYLOADS_CONTROLLER]
    }
  },
  // testnets
  goerli: {
    [goerli.id]: {
      dataHelperContractAddress: "0xbd2db358f3C82F2883132A6584e22F38A979e768",
      contractAddresses: ["0x064361B3761CcDd17300146bf58a79d1E570382E"],
      payloadAddress: "0xf6b9c3fCF7f91817E7bF0efF792BA692c7bd372A"
      // only for test
    }
  },
  sepolia: {
    [sepolia.id]: {
      dataHelperContractAddress: "0x6B9AF21B95FE20b5a878b43670c23124841ec31A",
      contractAddresses: ["0x7E314a46AA6dF79c51869967B9b8e9f8Bb20781d"],
      payloadAddress: "0xf19de078dbac9db382caf8015cb208667ec581c0"
      // only for test
    },
    [avalancheFuji.id]: {
      dataHelperContractAddress: "0x6B9AF21B95FE20b5a878b43670c23124841ec31A",
      contractAddresses: ["0x1fad4eac642D8CAFb7fC5d38973D1C2764202da5"],
      payloadAddress: "0xdf9f39247c553485ac3bf974418947d9b2f969e5"
      // only for test
    }
  }
};
var votingMachineConfig = {
  mainnet: {
    [mainnet.id]: {
      contractAddress: GovernanceV3Ethereum_exports.VOTING_MACHINE,
      dataHelperContractAddress: GovernanceV3Ethereum_exports.VM_DATA_HELPER,
      dataWarehouseAddress: GovernanceV3Ethereum_exports.DATA_WAREHOUSE
    },
    [polygon.id]: {
      contractAddress: GovernanceV3Polygon_exports.VOTING_MACHINE,
      dataHelperContractAddress: GovernanceV3Polygon_exports.VM_DATA_HELPER,
      dataWarehouseAddress: GovernanceV3Polygon_exports.DATA_WAREHOUSE
    },
    [avalanche.id]: {
      contractAddress: GovernanceV3Avalanche_exports.VOTING_MACHINE,
      dataHelperContractAddress: GovernanceV3Avalanche_exports.VM_DATA_HELPER,
      dataWarehouseAddress: GovernanceV3Avalanche_exports.DATA_WAREHOUSE
    }
  },
  // testnets
  goerli: {
    [goerli.id]: {
      contractAddress: "0xE8AD5ab6295c16D04257BC6Cd6D447ff4018FF89",
      dataHelperContractAddress: "0xe10617A1ea760E174E82fBeb38a540d8ACe566f5",
      dataWarehouseAddress: "0xC946cc6bb934bAf2A539BaB62c647aff09D2e2D8"
    }
  },
  sepolia: {
    [sepolia.id]: {
      contractAddress: "0xA1995F1d5A8A247c064a76F336E1C2ecD24Ef0D9",
      dataHelperContractAddress: "0x133210F3fe2deEB34e65deB6861ee3dF87393977",
      dataWarehouseAddress: "0xACd2b1bA0B85FaF0f45D4974Ba8ee538E157fBc6"
    },
    [avalancheFuji.id]: {
      contractAddress: "0x767AA57554690D23D1E0594E8746271C97e1A1e4",
      dataHelperContractAddress: "0x133210F3fe2deEB34e65deB6861ee3dF87393977",
      dataWarehouseAddress: "0x2F4bc3128D0D52ef954552FfEC28BC523462dc02"
    }
  }
};
var govCoreChainId = {
  mainnet: mainnet.id,
  // testnets
  goerli: goerli.id,
  sepolia: sepolia.id
};
var aditionalsAddresses = {
  mainnet: {
    aaveAddress: AaveV3Ethereum_exports.ASSETS.AAVE.UNDERLYING,
    aAaveAddress: AaveV3Ethereum_exports.ASSETS.AAVE.A_TOKEN,
    stkAAVEAddress: AaveSafetyModule_exports.STK_AAVE,
    // for delegation
    delegationHelper: GovernanceV3Ethereum_exports.META_DELEGATE_HELPER
  },
  // testnets
  goerli: {
    aaveAddress: "0xb6D88BfC5b145a558b279cf7692e6F02064889d0",
    aAaveAddress: "0xD1ff82609FB63A0eee6FE7D2896d80d29491cCCd",
    stkAAVEAddress: "0x1406A9Ea2B0ec8FD4bCa4F876DAae2a70a9856Ec",
    delegationHelper: "0x1966133c190475E8385Dc1b4150B5f81c70DC578"
  },
  sepolia: {
    aaveAddress: "0xdaEcee477B931b209e8123401EA37582ACB3811d",
    aAaveAddress: "0x26aAB2aE39897338c2d91491C46c14a8c2a67919",
    stkAAVEAddress: "0x354032B31339853A3D682613749F183328d07275",
    delegationHelper: "0x7cc468E937ec7B06A2816B33AC159BC1273dF4A3"
  }
};
var payloadsControllerChainIds = {
  mainnet: [
    mainnet.id,
    polygon.id,
    avalanche.id,
    base.id,
    arbitrum.id,
    metis.id,
    optimism.id
  ],
  goerli: [goerli.id],
  sepolia: [sepolia.id, avalancheFuji.id]
};
var votingMachineChainIds = {
  mainnet: [mainnet.id, polygon.id, avalanche.id],
  goerli: [goerli.id],
  sepolia: [sepolia.id, avalancheFuji.id]
};
var gelatoApiKeys = {
  testnet: "MgZBKc6a7GHzxlrkdHCWIsazai_Niqbps42wvPlE7xE_",
  mainnet: "XUE_2itpitxYR_gYSvqM6q4In705QddU1Xzz2KsxrXE_"
};
var appConfigInit = (coreNetwork) => {
  return {
    govCoreChainId: govCoreChainId[coreNetwork],
    govCoreConfig: govCoreConfig[coreNetwork],
    votingMachineConfig: votingMachineConfig[coreNetwork],
    votingMachineChainIds: votingMachineChainIds[coreNetwork],
    payloadsControllerConfig: payloadsControllerConfig[coreNetwork],
    payloadsControllerChainIds: payloadsControllerChainIds[coreNetwork],
    additional: aditionalsAddresses[coreNetwork],
    gelatoApiKeys
  };
};

// src/helpers/clients.ts
var initialRpcUrls = {
  [mainnet.id]: [
    "https://cloudflare-eth.com",
    "https://eth.llamarpc.com",
    "https://rpc.mevblocker.io"
  ],
  [polygon.id]: [
    "https://polygon.llamarpc.com",
    "https://polygon-bor.publicnode.com",
    "https://endpoints.omniatech.io/v1/matic/mainnet/public"
  ],
  [avalanche.id]: [
    "https://avalanche.drpc.org",
    "https://avax.meowrpc.com",
    "https://avalanche.blockpi.network/v1/rpc/public"
  ],
  [bsc.id]: ["https://binance.llamarpc.com", "https://bsc.meowrpc.com"],
  [base.id]: [
    "https://base.llamarpc.com",
    "https://base-mainnet.public.blastapi.io",
    "https://base.meowrpc.com"
  ],
  [arbitrum.id]: [
    "https://arbitrum.llamarpc.com",
    "https://arb-mainnet-public.unifra.io",
    "https://endpoints.omniatech.io/v1/arbitrum/one/public"
  ],
  [metis.id]: [
    "https://metis-mainnet.public.blastapi.io",
    "https://metis.api.onfinality.io/public"
  ],
  [optimism.id]: [
    "https://optimism.llamarpc.com",
    "https://optimism.blockpi.network/v1/rpc/public",
    "https://optimism.publicnode.com"
  ],
  // testnets
  [goerli.id]: [
    "https://ethereum-goerli.publicnode.com",
    "https://goerli.blockpi.network/v1/rpc/public",
    "https://eth-goerli.public.blastapi.io"
  ],
  [sepolia.id]: [
    "https://ethereum-sepolia.publicnode.com",
    "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
    "https://endpoints.omniatech.io/v1/eth/sepolia/public"
  ],
  [polygonMumbai.id]: ["https://rpc.ankr.com/polygon_mumbai"],
  [avalancheFuji.id]: [
    "https://api.avax-test.network/ext/bc/C/rpc",
    "https://avalanche-fuji-c-chain.publicnode.com",
    "https://rpc.ankr.com/avalanche_fuji"
  ],
  [bscTestnet.id]: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]
};
var appConfig = appConfigInit(coreName);
var appUsedNetworks = [
  ...appConfig.votingMachineChainIds,
  ...appConfig.payloadsControllerChainIds
].filter((value, index2, self2) => self2.indexOf(value) === index2);
function setChain(chain, url) {
  return {
    ...chain,
    rpcUrls: {
      ...chain.rpcUrls,
      default: {
        ...chain.rpcUrls.default,
        http: [url || initialRpcUrls[chain.id][0]]
      }
    }
  };
}
var CHAINS = {
  [mainnet.id]: setChain(mainnet),
  [polygon.id]: setChain(polygon),
  [avalanche.id]: setChain(avalanche),
  [bsc.id]: setChain(bsc),
  [base.id]: setChain(base),
  [arbitrum.id]: setChain(arbitrum),
  [metis.id]: setChain(metis),
  [optimism.id]: setChain(optimism),
  // testnets
  [goerli.id]: setChain(goerli),
  [sepolia.id]: setChain(sepolia),
  [polygonMumbai.id]: setChain(polygonMumbai),
  [avalancheFuji.id]: setChain(avalancheFuji),
  [bscTestnet.id]: setChain(bscTestnet)
};
var initialClients = {};
appUsedNetworks.forEach((chain) => {
  initialClients[chain] = createPublicClient({
    batch: {
      multicall: true
    },
    chain: CHAINS[chain],
    transport: fallback(initialRpcUrls[chain].map((url) => http2(url)))
  });
});
initialClients[mainnet.id] = createPublicClient({
  batch: {
    multicall: true
  },
  chain: CHAINS[mainnet.id],
  transport: fallback(initialRpcUrls[mainnet.id].map((url) => http2(url)))
});

// src/helpers/contracts.ts
function govCoreContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IGovernanceCore_ABI,
    publicClient: client,
    walletClient
  });
}
function govCoreDataHelperContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IGovernanceDataHelper_ABI,
    publicClient: client,
    walletClient
  });
}
function votingMachineContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IVotingMachineWithProofs_ABI,
    publicClient: client,
    walletClient
  });
}
function votingMachineDataHelperContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IVotingMachineDataHelper_ABI,
    publicClient: client,
    walletClient
  });
}
function payloadsControllerDataHelperContract({
  contractAddress,
  client,
  walletClient
}) {
  return getContract({
    address: contractAddress,
    abi: IPayloadsControllerDataHelper_ABI,
    publicClient: client,
    walletClient
  });
}

// src/helpers/eventsHelpres.ts
var blockLimit = 1023;
function getBlocksForEvents(currentBlock, startBlockNumber, endBlockNumber, lastBlockNumber) {
  const endBlock = endBlockNumber && endBlockNumber > 0 && endBlockNumber < currentBlock ? endBlockNumber : !!lastBlockNumber && isFinite(lastBlockNumber) && lastBlockNumber > startBlockNumber && lastBlockNumber < currentBlock ? lastBlockNumber + 1 : currentBlock > startBlockNumber + blockLimit ? startBlockNumber + blockLimit : currentBlock;
  const startBlock = !!lastBlockNumber && isFinite(lastBlockNumber) && lastBlockNumber > startBlockNumber && lastBlockNumber < currentBlock && lastBlockNumber < endBlock ? lastBlockNumber : startBlockNumber < currentBlock ? startBlockNumber : currentBlock - blockLimit;
  return { startBlock, endBlock };
}
async function getEventsBySteps(startBlock, endBlock, blockLimit2, callbackFunc) {
  const blockSteps = Math.ceil((endBlock - startBlock) / blockLimit2);
  const eventsCountArray = new Array(blockSteps);
  for (let i = 0; i < blockSteps; i++) {
    eventsCountArray[i] = i;
  }
  const results = await Promise.all(
    eventsCountArray.map(async (count) => {
      const startBlockNumber = startBlock + blockLimit2 * count;
      const endBlockNumber = startBlock + (blockLimit2 * count + blockLimit2);
      return await callbackFunc(
        startBlockNumber,
        endBlock > endBlockNumber ? endBlockNumber : endBlock
      );
    })
  );
  return results.flat();
}

// node_modules/bignumber.js/bignumber.mjs
var isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
var mathceil = Math.ceil;
var mathfloor = Math.floor;
var bignumberError = "[BigNumber Error] ";
var tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ";
var BASE = 1e14;
var LOG_BASE = 14;
var MAX_SAFE_INTEGER = 9007199254740991;
var POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13];
var SQRT_BASE = 1e7;
var MAX = 1e9;
function clone(configObject) {
  var div, convertBase, parseNumeric, P = BigNumber2.prototype = { constructor: BigNumber2, toString: null, valueOf: null }, ONE = new BigNumber2(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: "\xA0",
    // non-breaking space
    suffix: ""
  }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
  function BigNumber2(v, b) {
    var alphabet, c, caseChanged, e, i, isNum, len, str2, x = this;
    if (!(x instanceof BigNumber2))
      return new BigNumber2(v, b);
    if (b == null) {
      if (v && v._isBigNumber === true) {
        x.s = v.s;
        if (!v.c || v.e > MAX_EXP) {
          x.c = x.e = null;
        } else if (v.e < MIN_EXP) {
          x.c = [x.e = 0];
        } else {
          x.e = v.e;
          x.c = v.c.slice();
        }
        return;
      }
      if ((isNum = typeof v == "number") && v * 0 == 0) {
        x.s = 1 / v < 0 ? (v = -v, -1) : 1;
        if (v === ~~v) {
          for (e = 0, i = v; i >= 10; i /= 10, e++)
            ;
          if (e > MAX_EXP) {
            x.c = x.e = null;
          } else {
            x.e = e;
            x.c = [v];
          }
          return;
        }
        str2 = String(v);
      } else {
        if (!isNumeric.test(str2 = String(v)))
          return parseNumeric(x, str2, isNum);
        x.s = str2.charCodeAt(0) == 45 ? (str2 = str2.slice(1), -1) : 1;
      }
      if ((e = str2.indexOf(".")) > -1)
        str2 = str2.replace(".", "");
      if ((i = str2.search(/e/i)) > 0) {
        if (e < 0)
          e = i;
        e += +str2.slice(i + 1);
        str2 = str2.substring(0, i);
      } else if (e < 0) {
        e = str2.length;
      }
    } else {
      intCheck(b, 2, ALPHABET.length, "Base");
      if (b == 10 && alphabetHasNormalDecimalDigits) {
        x = new BigNumber2(v);
        return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
      }
      str2 = String(v);
      if (isNum = typeof v == "number") {
        if (v * 0 != 0)
          return parseNumeric(x, str2, isNum, b);
        x.s = 1 / v < 0 ? (str2 = str2.slice(1), -1) : 1;
        if (BigNumber2.DEBUG && str2.replace(/^0\.0*|\./, "").length > 15) {
          throw Error(tooManyDigits + v);
        }
      } else {
        x.s = str2.charCodeAt(0) === 45 ? (str2 = str2.slice(1), -1) : 1;
      }
      alphabet = ALPHABET.slice(0, b);
      e = i = 0;
      for (len = str2.length; i < len; i++) {
        if (alphabet.indexOf(c = str2.charAt(i)) < 0) {
          if (c == ".") {
            if (i > e) {
              e = len;
              continue;
            }
          } else if (!caseChanged) {
            if (str2 == str2.toUpperCase() && (str2 = str2.toLowerCase()) || str2 == str2.toLowerCase() && (str2 = str2.toUpperCase())) {
              caseChanged = true;
              i = -1;
              e = 0;
              continue;
            }
          }
          return parseNumeric(x, String(v), isNum, b);
        }
      }
      isNum = false;
      str2 = convertBase(str2, b, 10, x.s);
      if ((e = str2.indexOf(".")) > -1)
        str2 = str2.replace(".", "");
      else
        e = str2.length;
    }
    for (i = 0; str2.charCodeAt(i) === 48; i++)
      ;
    for (len = str2.length; str2.charCodeAt(--len) === 48; )
      ;
    if (str2 = str2.slice(i, ++len)) {
      len -= i;
      if (isNum && BigNumber2.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
        throw Error(tooManyDigits + x.s * v);
      }
      if ((e = e - i - 1) > MAX_EXP) {
        x.c = x.e = null;
      } else if (e < MIN_EXP) {
        x.c = [x.e = 0];
      } else {
        x.e = e;
        x.c = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0)
          i += LOG_BASE;
        if (i < len) {
          if (i)
            x.c.push(+str2.slice(0, i));
          for (len -= LOG_BASE; i < len; ) {
            x.c.push(+str2.slice(i, i += LOG_BASE));
          }
          i = LOG_BASE - (str2 = str2.slice(i)).length;
        } else {
          i -= len;
        }
        for (; i--; str2 += "0")
          ;
        x.c.push(+str2);
      }
    } else {
      x.c = [x.e = 0];
    }
  }
  BigNumber2.clone = clone;
  BigNumber2.ROUND_UP = 0;
  BigNumber2.ROUND_DOWN = 1;
  BigNumber2.ROUND_CEIL = 2;
  BigNumber2.ROUND_FLOOR = 3;
  BigNumber2.ROUND_HALF_UP = 4;
  BigNumber2.ROUND_HALF_DOWN = 5;
  BigNumber2.ROUND_HALF_EVEN = 6;
  BigNumber2.ROUND_HALF_CEIL = 7;
  BigNumber2.ROUND_HALF_FLOOR = 8;
  BigNumber2.EUCLID = 9;
  BigNumber2.config = BigNumber2.set = function(obj) {
    var p, v;
    if (obj != null) {
      if (typeof obj == "object") {
        if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          DECIMAL_PLACES = v;
        }
        if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
          v = obj[p];
          intCheck(v, 0, 8, p);
          ROUNDING_MODE = v;
        }
        if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, 0, p);
            intCheck(v[1], 0, MAX, p);
            TO_EXP_NEG = v[0];
            TO_EXP_POS = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
          }
        }
        if (obj.hasOwnProperty(p = "RANGE")) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, -1, p);
            intCheck(v[1], 1, MAX, p);
            MIN_EXP = v[0];
            MAX_EXP = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            if (v) {
              MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
            } else {
              throw Error(bignumberError + p + " cannot be zero: " + v);
            }
          }
        }
        if (obj.hasOwnProperty(p = "CRYPTO")) {
          v = obj[p];
          if (v === !!v) {
            if (v) {
              if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                CRYPTO = v;
              } else {
                CRYPTO = !v;
                throw Error(bignumberError + "crypto unavailable");
              }
            } else {
              CRYPTO = v;
            }
          } else {
            throw Error(bignumberError + p + " not true or false: " + v);
          }
        }
        if (obj.hasOwnProperty(p = "MODULO_MODE")) {
          v = obj[p];
          intCheck(v, 0, 9, p);
          MODULO_MODE = v;
        }
        if (obj.hasOwnProperty(p = "POW_PRECISION")) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          POW_PRECISION = v;
        }
        if (obj.hasOwnProperty(p = "FORMAT")) {
          v = obj[p];
          if (typeof v == "object")
            FORMAT = v;
          else
            throw Error(bignumberError + p + " not an object: " + v);
        }
        if (obj.hasOwnProperty(p = "ALPHABET")) {
          v = obj[p];
          if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
            alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
            ALPHABET = v;
          } else {
            throw Error(bignumberError + p + " invalid: " + v);
          }
        }
      } else {
        throw Error(bignumberError + "Object expected: " + obj);
      }
    }
    return {
      DECIMAL_PLACES,
      ROUNDING_MODE,
      EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
      RANGE: [MIN_EXP, MAX_EXP],
      CRYPTO,
      MODULO_MODE,
      POW_PRECISION,
      FORMAT,
      ALPHABET
    };
  };
  BigNumber2.isBigNumber = function(v) {
    if (!v || v._isBigNumber !== true)
      return false;
    if (!BigNumber2.DEBUG)
      return true;
    var i, n, c = v.c, e = v.e, s = v.s;
    out:
      if ({}.toString.call(c) == "[object Array]") {
        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
          if (c[0] === 0) {
            if (e === 0 && c.length === 1)
              return true;
            break out;
          }
          i = (e + 1) % LOG_BASE;
          if (i < 1)
            i += LOG_BASE;
          if (String(c[0]).length == i) {
            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n))
                break out;
            }
            if (n !== 0)
              return true;
          }
        }
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }
    throw Error(bignumberError + "Invalid BigNumber: " + v);
  };
  BigNumber2.maximum = BigNumber2.max = function() {
    return maxOrMin(arguments, -1);
  };
  BigNumber2.minimum = BigNumber2.min = function() {
    return maxOrMin(arguments, 1);
  };
  BigNumber2.random = function() {
    var pow2_53 = 9007199254740992;
    var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
      return mathfloor(Math.random() * pow2_53);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(dp) {
      var a, b, e, k, v, i = 0, c = [], rand = new BigNumber2(ONE);
      if (dp == null)
        dp = DECIMAL_PLACES;
      else
        intCheck(dp, 0, MAX);
      k = mathceil(dp / LOG_BASE);
      if (CRYPTO) {
        if (crypto.getRandomValues) {
          a = crypto.getRandomValues(new Uint32Array(k *= 2));
          for (; i < k; ) {
            v = a[i] * 131072 + (a[i + 1] >>> 11);
            if (v >= 9e15) {
              b = crypto.getRandomValues(new Uint32Array(2));
              a[i] = b[0];
              a[i + 1] = b[1];
            } else {
              c.push(v % 1e14);
              i += 2;
            }
          }
          i = k / 2;
        } else if (crypto.randomBytes) {
          a = crypto.randomBytes(k *= 7);
          for (; i < k; ) {
            v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
            if (v >= 9e15) {
              crypto.randomBytes(7).copy(a, i);
            } else {
              c.push(v % 1e14);
              i += 7;
            }
          }
          i = k / 7;
        } else {
          CRYPTO = false;
          throw Error(bignumberError + "crypto unavailable");
        }
      }
      if (!CRYPTO) {
        for (; i < k; ) {
          v = random53bitInt();
          if (v < 9e15)
            c[i++] = v % 1e14;
        }
      }
      k = c[--i];
      dp %= LOG_BASE;
      if (k && dp) {
        v = POWS_TEN[LOG_BASE - dp];
        c[i] = mathfloor(k / v) * v;
      }
      for (; c[i] === 0; c.pop(), i--)
        ;
      if (i < 0) {
        c = [e = 0];
      } else {
        for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE)
          ;
        for (i = 1, v = c[0]; v >= 10; v /= 10, i++)
          ;
        if (i < LOG_BASE)
          e -= LOG_BASE - i;
      }
      rand.e = e;
      rand.c = c;
      return rand;
    };
  }();
  BigNumber2.sum = function() {
    var i = 1, args = arguments, sum = new BigNumber2(args[0]);
    for (; i < args.length; )
      sum = sum.plus(args[i++]);
    return sum;
  };
  convertBase = /* @__PURE__ */ function() {
    var decimal = "0123456789";
    function toBaseOut(str2, baseIn, baseOut, alphabet) {
      var j, arr = [0], arrL, i = 0, len = str2.length;
      for (; i < len; ) {
        for (arrL = arr.length; arrL--; arr[arrL] *= baseIn)
          ;
        arr[0] += alphabet.indexOf(str2.charAt(i++));
        for (j = 0; j < arr.length; j++) {
          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] == null)
              arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }
      return arr.reverse();
    }
    return function(str2, baseIn, baseOut, sign, callerIsToString) {
      var alphabet, d, e, k, r, x, xc, y, i = str2.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
      if (i >= 0) {
        k = POW_PRECISION;
        POW_PRECISION = 0;
        str2 = str2.replace(".", "");
        y = new BigNumber2(baseIn);
        x = y.pow(str2.length - i);
        POW_PRECISION = k;
        y.c = toBaseOut(
          toFixedPoint(coeffToString(x.c), x.e, "0"),
          10,
          baseOut,
          decimal
        );
        y.e = y.c.length;
      }
      xc = toBaseOut(str2, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
      e = k = xc.length;
      for (; xc[--k] == 0; xc.pop())
        ;
      if (!xc[0])
        return alphabet.charAt(0);
      if (i < 0) {
        --e;
      } else {
        x.c = xc;
        x.e = e;
        x.s = sign;
        x = div(x, y, dp, rm, baseOut);
        xc = x.c;
        r = x.r;
        e = x.e;
      }
      d = e + dp + 1;
      i = xc[d];
      k = baseOut / 2;
      r = r || d < 0 || xc[d + 1] != null;
      r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
      if (d < 1 || !xc[0]) {
        str2 = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
      } else {
        xc.length = d;
        if (r) {
          for (--baseOut; ++xc[--d] > baseOut; ) {
            xc[d] = 0;
            if (!d) {
              ++e;
              xc = [1].concat(xc);
            }
          }
        }
        for (k = xc.length; !xc[--k]; )
          ;
        for (i = 0, str2 = ""; i <= k; str2 += alphabet.charAt(xc[i++]))
          ;
        str2 = toFixedPoint(str2, e, alphabet.charAt(0));
      }
      return str2;
    };
  }();
  div = /* @__PURE__ */ function() {
    function multiply(x, k, base2) {
      var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
      for (x = x.slice(); i--; ) {
        xlo = x[i] % SQRT_BASE;
        xhi = x[i] / SQRT_BASE | 0;
        m = khi * xlo + xhi * klo;
        temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
        carry = (temp / base2 | 0) + (m / SQRT_BASE | 0) + khi * xhi;
        x[i] = temp % base2;
      }
      if (carry)
        x = [carry].concat(x);
      return x;
    }
    function compare2(a, b, aL, bL) {
      var i, cmp;
      if (aL != bL) {
        cmp = aL > bL ? 1 : -1;
      } else {
        for (i = cmp = 0; i < aL; i++) {
          if (a[i] != b[i]) {
            cmp = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }
      return cmp;
    }
    function subtract(a, b, aL, base2) {
      var i = 0;
      for (; aL--; ) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base2 + a[aL] - b[aL];
      }
      for (; !a[0] && a.length > 1; a.splice(0, 1))
        ;
    }
    return function(x, y, dp, rm, base2) {
      var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
      if (!xc || !xc[0] || !yc || !yc[0]) {
        return new BigNumber2(
          // Return NaN if either NaN, or both Infinity or 0.
          !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
          )
        );
      }
      q = new BigNumber2(s);
      qc = q.c = [];
      e = x.e - y.e;
      s = dp + e + 1;
      if (!base2) {
        base2 = BASE;
        e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
        s = s / LOG_BASE | 0;
      }
      for (i = 0; yc[i] == (xc[i] || 0); i++)
        ;
      if (yc[i] > (xc[i] || 0))
        e--;
      if (s < 0) {
        qc.push(1);
        more = true;
      } else {
        xL = xc.length;
        yL = yc.length;
        i = 0;
        s += 2;
        n = mathfloor(base2 / (yc[0] + 1));
        if (n > 1) {
          yc = multiply(yc, n, base2);
          xc = multiply(xc, n, base2);
          yL = yc.length;
          xL = xc.length;
        }
        xi = yL;
        rem = xc.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; rem[remL++] = 0)
          ;
        yz = yc.slice();
        yz = [0].concat(yz);
        yc0 = yc[0];
        if (yc[1] >= base2 / 2)
          yc0++;
        do {
          n = 0;
          cmp = compare2(yc, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL)
              rem0 = rem0 * base2 + (rem[1] || 0);
            n = mathfloor(rem0 / yc0);
            if (n > 1) {
              if (n >= base2)
                n = base2 - 1;
              prod = multiply(yc, n, base2);
              prodL = prod.length;
              remL = rem.length;
              while (compare2(prod, rem, prodL, remL) == 1) {
                n--;
                subtract(prod, yL < prodL ? yz : yc, prodL, base2);
                prodL = prod.length;
                cmp = 1;
              }
            } else {
              if (n == 0) {
                cmp = n = 1;
              }
              prod = yc.slice();
              prodL = prod.length;
            }
            if (prodL < remL)
              prod = [0].concat(prod);
            subtract(rem, prod, remL, base2);
            remL = rem.length;
            if (cmp == -1) {
              while (compare2(yc, rem, yL, remL) < 1) {
                n++;
                subtract(rem, yL < remL ? yz : yc, remL, base2);
                remL = rem.length;
              }
            }
          } else if (cmp === 0) {
            n++;
            rem = [0];
          }
          qc[i++] = n;
          if (rem[0]) {
            rem[remL++] = xc[xi] || 0;
          } else {
            rem = [xc[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] != null) && s--);
        more = rem[0] != null;
        if (!qc[0])
          qc.splice(0, 1);
      }
      if (base2 == BASE) {
        for (i = 1, s = qc[0]; s >= 10; s /= 10, i++)
          ;
        round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
      } else {
        q.e = e;
        q.r = +more;
      }
      return q;
    };
  }();
  function format(n, i, rm, id2) {
    var c0, e, ne, len, str2;
    if (rm == null)
      rm = ROUNDING_MODE;
    else
      intCheck(rm, 0, 8);
    if (!n.c)
      return n.toString();
    c0 = n.c[0];
    ne = n.e;
    if (i == null) {
      str2 = coeffToString(n.c);
      str2 = id2 == 1 || id2 == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str2, ne) : toFixedPoint(str2, ne, "0");
    } else {
      n = round(new BigNumber2(n), i, rm);
      e = n.e;
      str2 = coeffToString(n.c);
      len = str2.length;
      if (id2 == 1 || id2 == 2 && (i <= e || e <= TO_EXP_NEG)) {
        for (; len < i; str2 += "0", len++)
          ;
        str2 = toExponential(str2, e);
      } else {
        i -= ne;
        str2 = toFixedPoint(str2, e, "0");
        if (e + 1 > len) {
          if (--i > 0)
            for (str2 += "."; i--; str2 += "0")
              ;
        } else {
          i += e - len;
          if (i > 0) {
            if (e + 1 == len)
              str2 += ".";
            for (; i--; str2 += "0")
              ;
          }
        }
      }
    }
    return n.s < 0 && c0 ? "-" + str2 : str2;
  }
  function maxOrMin(args, n) {
    var k, y, i = 1, x = new BigNumber2(args[0]);
    for (; i < args.length; i++) {
      y = new BigNumber2(args[i]);
      if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) {
        x = y;
      }
    }
    return x;
  }
  function normalise(n, c, e) {
    var i = 1, j = c.length;
    for (; !c[--j]; c.pop())
      ;
    for (j = c[0]; j >= 10; j /= 10, i++)
      ;
    if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
      n.c = n.e = null;
    } else if (e < MIN_EXP) {
      n.c = [n.e = 0];
    } else {
      n.e = e;
      n.c = c;
    }
    return n;
  }
  parseNumeric = /* @__PURE__ */ function() {
    var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(x, str2, isNum, b) {
      var base2, s = isNum ? str2 : str2.replace(whitespaceOrPlus, "");
      if (isInfinityOrNaN.test(s)) {
        x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
      } else {
        if (!isNum) {
          s = s.replace(basePrefix, function(m, p1, p2) {
            base2 = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
            return !b || b == base2 ? p1 : m;
          });
          if (b) {
            base2 = b;
            s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
          }
          if (str2 != s)
            return new BigNumber2(s, base2);
        }
        if (BigNumber2.DEBUG) {
          throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str2);
        }
        x.s = null;
      }
      x.c = x.e = null;
    };
  }();
  function round(x, sd, rm, r) {
    var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
    if (xc) {
      out: {
        for (d = 1, k = xc[0]; k >= 10; k /= 10, d++)
          ;
        i = sd - d;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          n = xc[ni = 0];
          rd = mathfloor(n / pows10[d - j - 1] % 10);
        } else {
          ni = mathceil((i + 1) / LOG_BASE);
          if (ni >= xc.length) {
            if (r) {
              for (; xc.length <= ni; xc.push(0))
                ;
              n = rd = 0;
              d = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            n = k = xc[ni];
            for (d = 1; k >= 10; k /= 10, d++)
              ;
            i %= LOG_BASE;
            j = i - LOG_BASE + d;
            rd = j < 0 ? 0 : mathfloor(n / pows10[d - j - 1] % 10);
          }
        }
        r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
        r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
        if (sd < 1 || !xc[0]) {
          xc.length = 0;
          if (r) {
            sd -= x.e + 1;
            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
            x.e = -sd || 0;
          } else {
            xc[0] = x.e = 0;
          }
          return x;
        }
        if (i == 0) {
          xc.length = ni;
          k = 1;
          ni--;
        } else {
          xc.length = ni + 1;
          k = pows10[LOG_BASE - i];
          xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
        }
        if (r) {
          for (; ; ) {
            if (ni == 0) {
              for (i = 1, j = xc[0]; j >= 10; j /= 10, i++)
                ;
              j = xc[0] += k;
              for (k = 1; j >= 10; j /= 10, k++)
                ;
              if (i != k) {
                x.e++;
                if (xc[0] == BASE)
                  xc[0] = 1;
              }
              break;
            } else {
              xc[ni] += k;
              if (xc[ni] != BASE)
                break;
              xc[ni--] = 0;
              k = 1;
            }
          }
        }
        for (i = xc.length; xc[--i] === 0; xc.pop())
          ;
      }
      if (x.e > MAX_EXP) {
        x.c = x.e = null;
      } else if (x.e < MIN_EXP) {
        x.c = [x.e = 0];
      }
    }
    return x;
  }
  function valueOf(n) {
    var str2, e = n.e;
    if (e === null)
      return n.toString();
    str2 = coeffToString(n.c);
    str2 = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str2, e) : toFixedPoint(str2, e, "0");
    return n.s < 0 ? "-" + str2 : str2;
  }
  P.absoluteValue = P.abs = function() {
    var x = new BigNumber2(this);
    if (x.s < 0)
      x.s = 1;
    return x;
  };
  P.comparedTo = function(y, b) {
    return compare(this, new BigNumber2(y, b));
  };
  P.decimalPlaces = P.dp = function(dp, rm) {
    var c, n, v, x = this;
    if (dp != null) {
      intCheck(dp, 0, MAX);
      if (rm == null)
        rm = ROUNDING_MODE;
      else
        intCheck(rm, 0, 8);
      return round(new BigNumber2(x), dp + x.e + 1, rm);
    }
    if (!(c = x.c))
      return null;
    n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
    if (v = c[v])
      for (; v % 10 == 0; v /= 10, n--)
        ;
    if (n < 0)
      n = 0;
    return n;
  };
  P.dividedBy = P.div = function(y, b) {
    return div(this, new BigNumber2(y, b), DECIMAL_PLACES, ROUNDING_MODE);
  };
  P.dividedToIntegerBy = P.idiv = function(y, b) {
    return div(this, new BigNumber2(y, b), 0, 1);
  };
  P.exponentiatedBy = P.pow = function(n, m) {
    var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
    n = new BigNumber2(n);
    if (n.c && !n.isInteger()) {
      throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
    }
    if (m != null)
      m = new BigNumber2(m);
    nIsBig = n.e > 14;
    if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
      y = new BigNumber2(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
      return m ? y.mod(m) : y;
    }
    nIsNeg = n.s < 0;
    if (m) {
      if (m.c ? !m.c[0] : !m.s)
        return new BigNumber2(NaN);
      isModExp = !nIsNeg && x.isInteger() && m.isInteger();
      if (isModExp)
        x = x.mod(m);
    } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
      k = x.s < 0 && isOdd(n) ? -0 : 0;
      if (x.e > -1)
        k = 1 / k;
      return new BigNumber2(nIsNeg ? 1 / k : k);
    } else if (POW_PRECISION) {
      k = mathceil(POW_PRECISION / LOG_BASE + 2);
    }
    if (nIsBig) {
      half = new BigNumber2(0.5);
      if (nIsNeg)
        n.s = 1;
      nIsOdd = isOdd(n);
    } else {
      i = Math.abs(+valueOf(n));
      nIsOdd = i % 2;
    }
    y = new BigNumber2(ONE);
    for (; ; ) {
      if (nIsOdd) {
        y = y.times(x);
        if (!y.c)
          break;
        if (k) {
          if (y.c.length > k)
            y.c.length = k;
        } else if (isModExp) {
          y = y.mod(m);
        }
      }
      if (i) {
        i = mathfloor(i / 2);
        if (i === 0)
          break;
        nIsOdd = i % 2;
      } else {
        n = n.times(half);
        round(n, n.e + 1, 1);
        if (n.e > 14) {
          nIsOdd = isOdd(n);
        } else {
          i = +valueOf(n);
          if (i === 0)
            break;
          nIsOdd = i % 2;
        }
      }
      x = x.times(x);
      if (k) {
        if (x.c && x.c.length > k)
          x.c.length = k;
      } else if (isModExp) {
        x = x.mod(m);
      }
    }
    if (isModExp)
      return y;
    if (nIsNeg)
      y = ONE.div(y);
    return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
  };
  P.integerValue = function(rm) {
    var n = new BigNumber2(this);
    if (rm == null)
      rm = ROUNDING_MODE;
    else
      intCheck(rm, 0, 8);
    return round(n, n.e + 1, rm);
  };
  P.isEqualTo = P.eq = function(y, b) {
    return compare(this, new BigNumber2(y, b)) === 0;
  };
  P.isFinite = function() {
    return !!this.c;
  };
  P.isGreaterThan = P.gt = function(y, b) {
    return compare(this, new BigNumber2(y, b)) > 0;
  };
  P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
    return (b = compare(this, new BigNumber2(y, b))) === 1 || b === 0;
  };
  P.isInteger = function() {
    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
  };
  P.isLessThan = P.lt = function(y, b) {
    return compare(this, new BigNumber2(y, b)) < 0;
  };
  P.isLessThanOrEqualTo = P.lte = function(y, b) {
    return (b = compare(this, new BigNumber2(y, b))) === -1 || b === 0;
  };
  P.isNaN = function() {
    return !this.s;
  };
  P.isNegative = function() {
    return this.s < 0;
  };
  P.isPositive = function() {
    return this.s > 0;
  };
  P.isZero = function() {
    return !!this.c && this.c[0] == 0;
  };
  P.minus = function(y, b) {
    var i, j, t, xLTy, x = this, a = x.s;
    y = new BigNumber2(y, b);
    b = y.s;
    if (!a || !b)
      return new BigNumber2(NaN);
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }
    var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
    if (!xe || !ye) {
      if (!xc || !yc)
        return xc ? (y.s = -b, y) : new BigNumber2(yc ? x : NaN);
      if (!xc[0] || !yc[0]) {
        return yc[0] ? (y.s = -b, y) : new BigNumber2(xc[0] ? x : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          ROUNDING_MODE == 3 ? -0 : 0
        ));
      }
    }
    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();
    if (a = xe - ye) {
      if (xLTy = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }
      t.reverse();
      for (b = a; b--; t.push(0))
        ;
      t.reverse();
    } else {
      j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
      for (a = b = 0; b < j; b++) {
        if (xc[b] != yc[b]) {
          xLTy = xc[b] < yc[b];
          break;
        }
      }
    }
    if (xLTy) {
      t = xc;
      xc = yc;
      yc = t;
      y.s = -y.s;
    }
    b = (j = yc.length) - (i = xc.length);
    if (b > 0)
      for (; b--; xc[i++] = 0)
        ;
    b = BASE - 1;
    for (; j > a; ) {
      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i]; xc[i] = b)
          ;
        --xc[i];
        xc[j] += BASE;
      }
      xc[j] -= yc[j];
    }
    for (; xc[0] == 0; xc.splice(0, 1), --ye)
      ;
    if (!xc[0]) {
      y.s = ROUNDING_MODE == 3 ? -1 : 1;
      y.c = [y.e = 0];
      return y;
    }
    return normalise(y, xc, ye);
  };
  P.modulo = P.mod = function(y, b) {
    var q, s, x = this;
    y = new BigNumber2(y, b);
    if (!x.c || !y.s || y.c && !y.c[0]) {
      return new BigNumber2(NaN);
    } else if (!y.c || x.c && !x.c[0]) {
      return new BigNumber2(x);
    }
    if (MODULO_MODE == 9) {
      s = y.s;
      y.s = 1;
      q = div(x, y, 0, 3);
      y.s = s;
      q.s *= s;
    } else {
      q = div(x, y, 0, MODULO_MODE);
    }
    y = x.minus(q.times(y));
    if (!y.c[0] && MODULO_MODE == 1)
      y.s = x.s;
    return y;
  };
  P.multipliedBy = P.times = function(y, b) {
    var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base2, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber2(y, b)).c;
    if (!xc || !yc || !xc[0] || !yc[0]) {
      if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
        y.c = y.e = y.s = null;
      } else {
        y.s *= x.s;
        if (!xc || !yc) {
          y.c = y.e = null;
        } else {
          y.c = [0];
          y.e = 0;
        }
      }
      return y;
    }
    e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
    y.s *= x.s;
    xcL = xc.length;
    ycL = yc.length;
    if (xcL < ycL) {
      zc = xc;
      xc = yc;
      yc = zc;
      i = xcL;
      xcL = ycL;
      ycL = i;
    }
    for (i = xcL + ycL, zc = []; i--; zc.push(0))
      ;
    base2 = BASE;
    sqrtBase = SQRT_BASE;
    for (i = ycL; --i >= 0; ) {
      c = 0;
      ylo = yc[i] % sqrtBase;
      yhi = yc[i] / sqrtBase | 0;
      for (k = xcL, j = i + k; j > i; ) {
        xlo = xc[--k] % sqrtBase;
        xhi = xc[k] / sqrtBase | 0;
        m = yhi * xlo + xhi * ylo;
        xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
        c = (xlo / base2 | 0) + (m / sqrtBase | 0) + yhi * xhi;
        zc[j--] = xlo % base2;
      }
      zc[j] = c;
    }
    if (c) {
      ++e;
    } else {
      zc.splice(0, 1);
    }
    return normalise(y, zc, e);
  };
  P.negated = function() {
    var x = new BigNumber2(this);
    x.s = -x.s || null;
    return x;
  };
  P.plus = function(y, b) {
    var t, x = this, a = x.s;
    y = new BigNumber2(y, b);
    b = y.s;
    if (!a || !b)
      return new BigNumber2(NaN);
    if (a != b) {
      y.s = -b;
      return x.minus(y);
    }
    var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
    if (!xe || !ye) {
      if (!xc || !yc)
        return new BigNumber2(a / 0);
      if (!xc[0] || !yc[0])
        return yc[0] ? y : new BigNumber2(xc[0] ? x : a * 0);
    }
    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }
      t.reverse();
      for (; a--; t.push(0))
        ;
      t.reverse();
    }
    a = xc.length;
    b = yc.length;
    if (a - b < 0) {
      t = yc;
      yc = xc;
      xc = t;
      b = a;
    }
    for (a = 0; b; ) {
      a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
      xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
    }
    if (a) {
      xc = [a].concat(xc);
      ++ye;
    }
    return normalise(y, xc, ye);
  };
  P.precision = P.sd = function(sd, rm) {
    var c, n, v, x = this;
    if (sd != null && sd !== !!sd) {
      intCheck(sd, 1, MAX);
      if (rm == null)
        rm = ROUNDING_MODE;
      else
        intCheck(rm, 0, 8);
      return round(new BigNumber2(x), sd, rm);
    }
    if (!(c = x.c))
      return null;
    v = c.length - 1;
    n = v * LOG_BASE + 1;
    if (v = c[v]) {
      for (; v % 10 == 0; v /= 10, n--)
        ;
      for (v = c[0]; v >= 10; v /= 10, n++)
        ;
    }
    if (sd && x.e + 1 > n)
      n = x.e + 1;
    return n;
  };
  P.shiftedBy = function(k) {
    intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
    return this.times("1e" + k);
  };
  P.squareRoot = P.sqrt = function() {
    var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber2("0.5");
    if (s !== 1 || !c || !c[0]) {
      return new BigNumber2(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
    }
    s = Math.sqrt(+valueOf(x));
    if (s == 0 || s == 1 / 0) {
      n = coeffToString(c);
      if ((n.length + e) % 2 == 0)
        n += "0";
      s = Math.sqrt(+n);
      e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
      if (s == 1 / 0) {
        n = "5e" + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf("e") + 1) + e;
      }
      r = new BigNumber2(n);
    } else {
      r = new BigNumber2(s + "");
    }
    if (r.c[0]) {
      e = r.e;
      s = e + dp;
      if (s < 3)
        s = 0;
      for (; ; ) {
        t = r;
        r = half.times(t.plus(div(x, t, dp, 1)));
        if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
          if (r.e < e)
            --s;
          n = n.slice(s - 3, s + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              round(t, t.e + DECIMAL_PLACES + 2, 0);
              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }
            dp += 4;
            s += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              round(r, r.e + DECIMAL_PLACES + 2, 1);
              m = !r.times(r).eq(x);
            }
            break;
          }
        }
      }
    }
    return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
  };
  P.toExponential = function(dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp++;
    }
    return format(this, dp, rm, 1);
  };
  P.toFixed = function(dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp = dp + this.e + 1;
    }
    return format(this, dp, rm);
  };
  P.toFormat = function(dp, rm, format2) {
    var str2, x = this;
    if (format2 == null) {
      if (dp != null && rm && typeof rm == "object") {
        format2 = rm;
        rm = null;
      } else if (dp && typeof dp == "object") {
        format2 = dp;
        dp = rm = null;
      } else {
        format2 = FORMAT;
      }
    } else if (typeof format2 != "object") {
      throw Error(bignumberError + "Argument not an object: " + format2);
    }
    str2 = x.toFixed(dp, rm);
    if (x.c) {
      var i, arr = str2.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
      if (g2) {
        i = g1;
        g1 = g2;
        g2 = i;
        len -= i;
      }
      if (g1 > 0 && len > 0) {
        i = len % g1 || g1;
        intPart = intDigits.substr(0, i);
        for (; i < len; i += g1)
          intPart += groupSeparator + intDigits.substr(i, g1);
        if (g2 > 0)
          intPart += groupSeparator + intDigits.slice(i);
        if (isNeg)
          intPart = "-" + intPart;
      }
      str2 = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(
        new RegExp("\\d{" + g2 + "}\\B", "g"),
        "$&" + (format2.fractionGroupSeparator || "")
      ) : fractionPart) : intPart;
    }
    return (format2.prefix || "") + str2 + (format2.suffix || "");
  };
  P.toFraction = function(md) {
    var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
    if (md != null) {
      n = new BigNumber2(md);
      if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
        throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
      }
    }
    if (!xc)
      return new BigNumber2(x);
    d = new BigNumber2(ONE);
    n1 = d0 = new BigNumber2(ONE);
    d1 = n0 = new BigNumber2(ONE);
    s = coeffToString(xc);
    e = d.e = s.length - x.e - 1;
    d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
    md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
    exp = MAX_EXP;
    MAX_EXP = 1 / 0;
    n = new BigNumber2(s);
    n0.c[0] = 0;
    for (; ; ) {
      q = div(n, d, 0, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.comparedTo(md) == 1)
        break;
      d0 = d1;
      d1 = d2;
      n1 = n0.plus(q.times(d2 = n1));
      n0 = d2;
      d = n.minus(q.times(d2 = d));
      n = d2;
    }
    d2 = div(md.minus(d0), d1, 0, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    e = e * 2;
    r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
      div(n0, d0, e, ROUNDING_MODE).minus(x).abs()
    ) < 1 ? [n1, d1] : [n0, d0];
    MAX_EXP = exp;
    return r;
  };
  P.toNumber = function() {
    return +valueOf(this);
  };
  P.toPrecision = function(sd, rm) {
    if (sd != null)
      intCheck(sd, 1, MAX);
    return format(this, sd, rm, 2);
  };
  P.toString = function(b) {
    var str2, n = this, s = n.s, e = n.e;
    if (e === null) {
      if (s) {
        str2 = "Infinity";
        if (s < 0)
          str2 = "-" + str2;
      } else {
        str2 = "NaN";
      }
    } else {
      if (b == null) {
        str2 = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
      } else if (b === 10 && alphabetHasNormalDecimalDigits) {
        n = round(new BigNumber2(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
        str2 = toFixedPoint(coeffToString(n.c), n.e, "0");
      } else {
        intCheck(b, 2, ALPHABET.length, "Base");
        str2 = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
      }
      if (s < 0 && n.c[0])
        str2 = "-" + str2;
    }
    return str2;
  };
  P.valueOf = P.toJSON = function() {
    return valueOf(this);
  };
  P._isBigNumber = true;
  P[Symbol.toStringTag] = "BigNumber";
  P[Symbol.for("nodejs.util.inspect.custom")] = P.valueOf;
  if (configObject != null)
    BigNumber2.set(configObject);
  return BigNumber2;
}
function bitFloor(n) {
  var i = n | 0;
  return n > 0 || n === i ? i : i - 1;
}
function coeffToString(a) {
  var s, z, i = 1, j = a.length, r = a[0] + "";
  for (; i < j; ) {
    s = a[i++] + "";
    z = LOG_BASE - s.length;
    for (; z--; s = "0" + s)
      ;
    r += s;
  }
  for (j = r.length; r.charCodeAt(--j) === 48; )
    ;
  return r.slice(0, j + 1 || 1);
}
function compare(x, y) {
  var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
  if (!i || !j)
    return null;
  a = xc && !xc[0];
  b = yc && !yc[0];
  if (a || b)
    return a ? b ? 0 : -j : i;
  if (i != j)
    return i;
  a = i < 0;
  b = k == l;
  if (!xc || !yc)
    return b ? 0 : !xc ^ a ? 1 : -1;
  if (!b)
    return k > l ^ a ? 1 : -1;
  j = (k = xc.length) < (l = yc.length) ? k : l;
  for (i = 0; i < j; i++)
    if (xc[i] != yc[i])
      return xc[i] > yc[i] ^ a ? 1 : -1;
  return k == l ? 0 : k > l ^ a ? 1 : -1;
}
function intCheck(n, min, max, name) {
  if (n < min || n > max || n !== mathfloor(n)) {
    throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
  }
}
function isOdd(n) {
  var k = n.c.length - 1;
  return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
}
function toExponential(str2, e) {
  return (str2.length > 1 ? str2.charAt(0) + "." + str2.slice(1) : str2) + (e < 0 ? "e" : "e+") + e;
}
function toFixedPoint(str2, e, z) {
  var len, zs;
  if (e < 0) {
    for (zs = z + "."; ++e; zs += z)
      ;
    str2 = zs + str2;
  } else {
    len = str2.length;
    if (++e > len) {
      for (zs = z, e -= len; --e; zs += z)
        ;
      str2 += zs;
    } else if (e < len) {
      str2 = str2.slice(0, e) + "." + str2.slice(e);
    }
  }
  return str2;
}
var BigNumber = clone();

// src/helpers/formatProposal.ts
var import_dayjs = __toESM(require_dayjs_min());

// src/helpers/bignumber.ts
function valueToBigNumber(amount) {
  if (amount instanceof BigNumber) {
    return amount;
  }
  return new BigNumber(amount);
}
function normalizeBN(n, decimals) {
  return valueToBigNumber(n).shiftedBy(decimals * -1);
}

// src/helpers/formatProposal.ts
function normalizeVotes(forVotes, againstVotes) {
  const forVotesN = normalizeBN(forVotes, 18).toNumber();
  const againstVotesN = normalizeBN(againstVotes, 18).toNumber();
  return { forVotes: forVotesN, againstVotes: againstVotesN };
}
function formatQuorum(forVotes, quorum, precisionDivider) {
  const minQuorumVotes = valueToBigNumber(quorum).multipliedBy(precisionDivider);
  const normalizeMinQuorumVotes = normalizeBN(minQuorumVotes, 18).toNumber();
  let quorumReached = false;
  if (valueToBigNumber(forVotes).gte(minQuorumVotes)) {
    quorumReached = true;
  }
  return {
    minQuorumVotes,
    normalizeMinQuorumVotes,
    quorumReached
  };
}
function formatDiff(forVotes, againstVotes, differential, precisionDivider) {
  const diff = valueToBigNumber(forVotes).minus(againstVotes);
  const requiredDiff = valueToBigNumber(differential).multipliedBy(precisionDivider);
  const normalizeRequiredDiff = normalizeBN(requiredDiff, 18).toNumber();
  return { diff, requiredDiff, normalizeRequiredDiff };
}
function getProposalStepsAndAmounts({
  proposalData,
  quorum,
  differential,
  precisionDivider,
  cooldownPeriod,
  executionPayloadTime
}) {
  const now = (0, import_dayjs.default)().unix();
  const isVotingStarted = proposalData.votingMachineState > 0 /* NotCreated */;
  const isVotingEnded = proposalData.votingMachineData.endTime > 0 && now > proposalData.votingMachineData.endTime;
  const isVotingClosed = proposalData.votingMachineData.votingClosedAndSentTimestamp > 0 && now > proposalData.votingMachineData.votingClosedAndSentTimestamp;
  const { forVotes, againstVotes } = normalizeVotes(
    proposalData.votingMachineData.forVotes,
    proposalData.votingMachineData.againstVotes
  );
  const { normalizeMinQuorumVotes, quorumReached } = formatQuorum(
    proposalData.votingMachineData.forVotes,
    quorum,
    precisionDivider
  );
  const { normalizeRequiredDiff } = formatDiff(
    proposalData.votingMachineData.forVotes,
    proposalData.votingMachineData.againstVotes,
    differential,
    precisionDivider
  );
  const lastPayloadQueuedAt = Math.max.apply(
    null,
    proposalData.payloads.map((payload) => payload?.queuedAt || 0)
  );
  const lastPayloadExecutedAt = Math.max.apply(
    null,
    proposalData.payloads.map((payload) => payload?.executedAt || 0)
  );
  const lastPayloadCanceledAt = Math.max.apply(
    null,
    proposalData.payloads.map((payload) => payload?.cancelledAt || 0)
  );
  const lastPayloadExpiredAt = Math.max.apply(
    null,
    proposalData.payloads.map((payload) => {
      if (payload.queuedAt <= 0 && payload.state === 5 /* Expired */) {
        return payload.expirationTime;
      } else if (payload.queuedAt > 0 && payload.state === 5 /* Expired */) {
        return payload.queuedAt + payload.delay + payload.gracePeriod;
      } else {
        return 0;
      }
    })
  );
  const predictPayloadExpiredTime = Math.max.apply(
    null,
    proposalData.payloads.map((payload) => {
      if (payload?.state && payload.state === 1 /* Created */) {
        return payload.expirationTime;
      } else if (payload?.state && payload.state === 2 /* Queued */) {
        return payload.queuedAt + payload.delay + payload.gracePeriod;
      } else {
        return 0;
      }
    })
  );
  const allPayloadsExecuted = proposalData.payloads.every(
    (payload) => payload?.state && payload.state === 3 /* Executed */
  );
  const allPayloadsCanceled = proposalData.payloads.every(
    (payload) => payload?.state && payload.state === 4 /* Cancelled */
  );
  const allPayloadsExpired = proposalData.payloads.every(
    (payload) => payload?.state && payload.state === 5 /* Expired */
  );
  const isCanceled = proposalData.basicState === 6 /* Cancelled */ || allPayloadsCanceled;
  const isExpired = proposalData.basicState === 7 /* Expired */ || allPayloadsExpired;
  const isVotingActive = isVotingStarted && !isVotingEnded && !isCanceled;
  const isVotingFailed = isVotingEnded && (againstVotes >= forVotes || againstVotes === 0 && forVotes === 0 || !quorumReached || forVotes < againstVotes + normalizeRequiredDiff);
  const isProposalQueued = isVotingStarted && isVotingEnded && isVotingClosed && proposalData.votingMachineData.sentToGovernance && proposalData.queuingTime > 0 && now > proposalData.queuingTime + cooldownPeriod;
  const isProposalExecuted = isVotingEnded && isVotingClosed && !isVotingFailed && proposalData.basicState === 4 /* Executed */ && !isCanceled;
  const isPayloadsQueued = isProposalExecuted && now > lastPayloadQueuedAt + executionPayloadTime;
  const isPayloadsExecuted = isVotingEnded && isVotingClosed && !isVotingFailed && proposalData.basicState === 4 /* Executed */ && !isCanceled && allPayloadsExecuted && !isExpired;
  let isProposalActive = true;
  if (proposalData.basicState === 0 /* Null */ || proposalData.basicState === 1 /* Created */) {
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
    forVotes,
    againstVotes,
    normalizeMinQuorumVotes,
    quorumReached,
    normalizeRequiredDiff,
    isVotingStarted,
    isVotingActive,
    isVotingEnded,
    isVotingClosed,
    isVotingFailed,
    lastPayloadQueuedAt,
    lastPayloadCanceledAt,
    lastPayloadExecutedAt,
    lastPayloadExpiredAt,
    predictPayloadExpiredTime,
    allPayloadsExecuted,
    allPayloadsCanceled,
    allPayloadsExpired,
    isCanceled,
    isExpired,
    isProposalActive,
    isProposalQueued,
    isProposalExecuted,
    isPayloadsQueued,
    isPayloadsExecuted
  };
}
function getProposalState({ ...data }) {
  const {
    forVotes,
    againstVotes,
    quorumReached,
    normalizeRequiredDiff,
    isVotingActive,
    isVotingEnded,
    isVotingFailed,
    isExpired,
    allPayloadsExecuted,
    isCanceled,
    isPayloadsExecuted
  } = getProposalStepsAndAmounts(data);
  if (!isCanceled && data.proposalData.votingMachineState === 0 /* NotCreated */ && data.proposalData.basicState <= 2 /* Active */) {
    return 0 /* Created */;
  } else if (isVotingActive && checkHash(data.proposalData.snapshotBlockHash).notZero) {
    return 1 /* Active */;
  } else if (isVotingEnded && !isCanceled && forVotes > againstVotes + normalizeRequiredDiff && quorumReached && !allPayloadsExecuted && !isExpired) {
    return 2 /* Succeed */;
  } else if (isVotingFailed && !isCanceled) {
    return 3 /* Defeated */;
  } else if (isCanceled) {
    return 6 /* Canceled */;
  } else if (isPayloadsExecuted) {
    return 4 /* Executed */;
  } else {
    return 5 /* Expired */;
  }
}

// src/helpers/getGovCoreConfigs.ts
async function getGovCoreConfigs({
  client,
  govCoreContractAddress,
  govCoreDataHelperContractAddress
}) {
  try {
    const govCoreDataHelper = govCoreDataHelperContract({
      contractAddress: govCoreDataHelperContractAddress,
      client
    });
    const accessLevels = [1, 2];
    const constants = await govCoreDataHelper.read.getConstants([
      govCoreContractAddress,
      accessLevels
    ]);
    const contractsConstants = {
      precisionDivider: constants.precisionDivider.toString(),
      cooldownPeriod: Number(constants.cooldownPeriod),
      expirationTime: Number(constants.expirationTime),
      cancellationFee: constants.cancellationFee.toString()
    };
    const configs = [];
    for (let i = 0; i < accessLevels.length; i++) {
      const votingConfig = constants.votingConfigs[i];
      const config = {
        accessLevel: votingConfig.accessLevel,
        votingDuration: votingConfig.config.votingDuration,
        quorum: Number(votingConfig.config.yesThreshold) || 200,
        differential: Number(votingConfig.config.yesNoDifferential) || 50,
        coolDownBeforeVotingStart: votingConfig.config.coolDownBeforeVotingStart,
        minPropositionPower: Number(votingConfig.config.minPropositionPower)
      };
      configs.push(config);
    }
    return {
      contractsConstants,
      configs
    };
  } catch {
    console.error("Cannot get gov core configs and constants. Set zero.");
    const contractsConstants = {
      precisionDivider: "0",
      cooldownPeriod: 100,
      expirationTime: 1e3,
      cancellationFee: "0"
    };
    const configs = [
      {
        accessLevel: 1,
        votingDuration: 100,
        quorum: 200,
        differential: 50,
        coolDownBeforeVotingStart: 100,
        minPropositionPower: 100
      }
    ];
    return {
      contractsConstants,
      configs
    };
  }
}

// src/helpers/getProposalData.ts
var import_dayjs2 = __toESM(require_dayjs_min());
function getVotingMachineProposalState(proposal) {
  const now = (0, import_dayjs2.default)().unix();
  if (proposal.votingMachineData.startTime === 0) {
    return 0 /* NotCreated */;
  } else if (now <= proposal.votingMachineData.endTime) {
    return 1 /* Active */;
  } else if (proposal.votingMachineData.votingClosedAndSentBlockNumber === 0) {
    return 2 /* Finished */;
  } else {
    return 3 /* SentToGovernance */;
  }
}
function formatVotingMachineData(id2, votingMachineData) {
  return {
    id: id2,
    forVotes: votingMachineData.proposalData.forVotes.toString(),
    againstVotes: votingMachineData.proposalData.againstVotes.toString(),
    startTime: votingMachineData.proposalData.startTime,
    endTime: votingMachineData.proposalData.endTime,
    votingClosedAndSentBlockNumber: Number(
      votingMachineData.proposalData.votingClosedAndSentBlockNumber
    ),
    votingClosedAndSentTimestamp: votingMachineData.proposalData.votingClosedAndSentTimestamp,
    l1BlockHash: votingMachineData?.voteConfig.l1ProposalBlockHash || zeroHash,
    strategy: votingMachineData.strategy,
    sentToGovernance: votingMachineData.proposalData.sentToGovernance,
    createdBlock: Number(votingMachineData.proposalData.creationBlockNumber),
    votedInfo: {
      support: votingMachineData.votedInfo.support,
      votingPower: votingMachineData.votedInfo.votingPower.toString()
    },
    votingAssets: votingMachineData.votingAssets,
    hasRequiredRoots: votingMachineData.hasRequiredRoots
  };
}
function getDetailedProposalsData(govCoreDataHelperData, votingMachineDataHelperData, ids, prerender) {
  const proposalsData = [];
  ids.forEach((id2) => {
    const govData = govCoreDataHelperData.find(
      (data) => Number(data.id) === id2
    );
    if (govData) {
      const votingMachineData = votingMachineDataHelperData.find(
        (proposal) => Number(proposal.proposalData.id) === Number(govData.id)
      ) || votingMachineDataHelperData.find(
        (data) => Number(data.proposalData.id) === id2
      );
      if (votingMachineData) {
        const proposalData = {
          id: Number(govData.id),
          votingDuration: +votingMachineData?.voteConfig.votingDuration || +govData.proposalData.votingDuration,
          creationTime: +govData.proposalData.creationTime,
          accessLevel: +govData.proposalData.accessLevel,
          basicState: +govData.proposalData.state,
          queuingTime: +govData.proposalData.queuingTime,
          ipfsHash: govData.proposalData.ipfsHash,
          initialPayloads: govData.proposalData.payloads.map((payload) => {
            return {
              id: payload.payloadId,
              chainId: Number(payload.chain),
              payloadsController: payload.payloadsController
            };
          }),
          snapshotBlockHash: govData.proposalData.snapshotBlockHash,
          creator: govData.proposalData.creator,
          canceledAt: govData.proposalData.cancelTimestamp,
          votingActivationTime: govData.proposalData.votingActivationTime,
          votingChainId: Number(govData.votingChainId),
          votingMachineData: formatVotingMachineData(
            Number(govData.id),
            votingMachineData
          ),
          prerender: !!prerender
        };
        proposalsData.push(proposalData);
      }
    }
  });
  return proposalsData;
}

// src/helpers/getProposalMetadata.ts
var import_bs58 = __toESM(require_bs58());
var import_gray_matter = __toESM(require_gray_matter());

// src/helpers/fetchWithTimeout.ts
async function fetchWithTimeout(resource, timeout) {
  const controller = new AbortController();
  const id2 = setTimeout(() => controller.abort(), timeout || 1e4);
  const response = await fetch(resource, {
    signal: controller.signal
  });
  clearTimeout(id2);
  return response;
}

// src/helpers/getProposalMetadata.ts
var ipfsGateway = "https://ipfs.io/ipfs";
function getLink(hash3, gateway) {
  return `${gateway}/${hash3}`;
}
var MEMORIZE = {};
var incorectedHashses = [
  "0x0000000000000000000000000000000000000000000000000000000000000020",
  zeroHash
];
async function getProposalMetadata(hash3, gateway = ipfsGateway, setIpfsError, errorText) {
  const ipfsHash = hash3.startsWith("0x") ? import_bs58.default.encode(Buffer.from(`1220${hash3.slice(2)}`, "hex")) : hash3;
  if (MEMORIZE[ipfsHash])
    return MEMORIZE[ipfsHash];
  if (incorectedHashses.some((h) => hash3 === h)) {
    if (!!setIpfsError) {
      setIpfsError(hash3, errorText);
    } else {
      console.error("Fetch metadata from ipfs error:", "incorrect ipfs hash");
      throw Error("Fetch metadata from ipfs error");
    }
  } else {
    try {
      const ipfsResponse = await fetchWithTimeout(
        getLink(ipfsHash, gateway)
      );
      if (!ipfsResponse.ok) {
        if (!!setIpfsError) {
          setIpfsError(hash3);
        }
        return MEMORIZE[ipfsHash];
      }
      const clone2 = ipfsResponse.clone();
      try {
        const response = await ipfsResponse.json();
        const { content } = (0, import_gray_matter.default)(response.description);
        MEMORIZE[ipfsHash] = {
          title: response.title,
          aip: response.aip,
          originalIpfsHash: hash3,
          author: response.author,
          discussions: response.discussions,
          shortDescription: response.shortDescription,
          ipfsHash,
          description: content
        };
      } catch (e) {
        const text = await clone2.text();
        const { content, data } = (0, import_gray_matter.default)(text);
        MEMORIZE[ipfsHash] = {
          title: data.title,
          aip: data.aip,
          originalIpfsHash: hash3,
          author: data.author,
          discussions: data.discussions,
          shortDescription: data.shortDescription,
          ipfsHash,
          description: content
        };
      }
    } catch (e) {
      if (!!setIpfsError) {
        setIpfsError(hash3);
      } else {
        console.error("Fetch metadata from ipfs error:", e);
        throw Error("Fetch metadata from ipfs error");
      }
    }
  }
  return MEMORIZE[ipfsHash];
}

// src/lowdb/ipfs.ts
var import_lodash = __toESM(require_lodash());

// node_modules/lowdb/lib/core/Low.js
function checkArgs(adapter6, defaultData) {
  if (adapter6 === void 0)
    throw new Error("lowdb: missing adapter");
  if (defaultData === void 0)
    throw new Error("lowdb: missing default data");
}
var Low = class {
  adapter;
  data;
  constructor(adapter6, defaultData) {
    checkArgs(adapter6, defaultData);
    this.adapter = adapter6;
    this.data = defaultData;
  }
  async read() {
    const data = await this.adapter.read();
    if (data)
      this.data = data;
  }
  async write() {
    if (this.data)
      await this.adapter.write(this.data);
  }
};

// node_modules/lowdb/lib/adapters/node/TextFile.js
var fsPromises = __toESM(require("node:fs/promises"), 1);

// node_modules/steno/lib/index.js
var import_promises = require("node:fs/promises");
var import_node_path = require("node:path");
var import_node_url = require("node:url");
function getTempFilename(file6) {
  const f = file6 instanceof URL ? (0, import_node_url.fileURLToPath)(file6) : file6.toString();
  return (0, import_node_path.join)((0, import_node_path.dirname)(f), `.${(0, import_node_path.basename)(f)}.tmp`);
}
var Writer = class {
  #filename;
  #tempFilename;
  #locked = false;
  #prev = null;
  #next = null;
  #nextPromise = null;
  #nextData = null;
  // File is locked, add data for later
  #add(data) {
    this.#nextData = data;
    this.#nextPromise ||= new Promise((resolve, reject) => {
      this.#next = [resolve, reject];
    });
    return new Promise((resolve, reject) => {
      this.#nextPromise?.then(resolve).catch(reject);
    });
  }
  // File isn't locked, write data
  async #write(data) {
    this.#locked = true;
    try {
      await (0, import_promises.writeFile)(this.#tempFilename, data, "utf-8");
      await (0, import_promises.rename)(this.#tempFilename, this.#filename);
      this.#prev?.[0]();
    } catch (err) {
      if (err instanceof Error) {
        this.#prev?.[1](err);
      }
      throw err;
    } finally {
      this.#locked = false;
      this.#prev = this.#next;
      this.#next = this.#nextPromise = null;
      if (this.#nextData !== null) {
        const nextData = this.#nextData;
        this.#nextData = null;
        await this.write(nextData);
      }
    }
  }
  constructor(filename) {
    this.#filename = filename;
    this.#tempFilename = getTempFilename(filename);
  }
  async write(data) {
    return this.#locked ? this.#add(data) : this.#write(data);
  }
};

// node_modules/lowdb/lib/adapters/node/TextFile.js
var TextFile = class {
  #filename;
  #writer;
  constructor(filename) {
    this.#filename = filename;
    this.#writer = new Writer(filename);
  }
  async read() {
    let data;
    try {
      data = await fsPromises.readFile(this.#filename, "utf-8");
    } catch (e) {
      if (e.code === "ENOENT") {
        return null;
      }
      throw e;
    }
    return data;
  }
  write(str2) {
    return this.#writer.write(str2);
  }
};

// node_modules/lowdb/lib/adapters/node/JSONFile.js
var JSONFile = class {
  #adapter;
  constructor(filename) {
    this.#adapter = new TextFile(filename);
  }
  async read() {
    const data = await this.#adapter.read();
    if (data === null) {
      return null;
    } else {
      return JSON.parse(data);
    }
  }
  write(obj) {
    return this.#adapter.write(JSON.stringify(obj, null, 2));
  }
};

// src/lowdb/ipfs.ts
var import_path = require("path");
var LowWithLodash = class extends Low {
  constructor() {
    super(...arguments);
    this.chain = import_lodash.default.chain(this).get("data");
  }
};
var file = (0, import_path.join)(process.cwd(), baseDirName, "ipfs.json");
var adapter = new JSONFile(file);
var db = new LowWithLodash(adapter, { ipfs: [] });
db.read();
var Ipfs = class {
  getIpfsData() {
    return db.data?.ipfs || [];
  }
  get(originalIpfsHash) {
    const value = db.chain.get("ipfs").find({ originalIpfsHash }).value();
    if (!value)
      throw new Error("trying to fetch ipfs cache, but failed");
    return value;
  }
  async populate(originalIpfsHash, ipfsData) {
    db.data ||= { ipfs: [] };
    const value = db.chain.get("ipfs").find({ originalIpfsHash }).value();
    if (value) {
      const index2 = db.data.ipfs.findIndex(
        (data) => data.originalIpfsHash === originalIpfsHash
      );
      db.data.ipfs[index2] = ipfsData;
    } else {
      db.data.ipfs.push(ipfsData);
    }
    db.write();
  }
};

// src/lowdb/listViewProposals.ts
var import_lodash2 = __toESM(require_lodash());
var import_path2 = require("path");
var LowWithLodash2 = class extends Low {
  constructor() {
    super(...arguments);
    this.chain = import_lodash2.default.chain(this).get("data");
  }
};
var file2 = (0, import_path2.join)(process.cwd(), baseDirName, "list_view_proposals.json");
var adapter2 = new JSONFile(file2);
var db2 = new LowWithLodash2(adapter2, { totalProposalCount: 0, proposals: [] });
db2.read();
var ListViewProposal = class {
  getTotalCount() {
    return db2.data.totalProposalCount || 0;
  }
  getIds() {
    return db2.data.proposals.map((proposal) => proposal.id) || [];
  }
  getListViewProposalsData() {
    return db2.data.proposals || [];
  }
  async populate(id2, proposalData, isVotingFailed, isProposalPayloadsFinished, isProposalCanceled, isProposalExpired, proposalsCount) {
    db2.data ||= { totalProposalCount: 0, proposals: [] };
    const value = db2.chain.get("proposals").find({ id: id2 }).value();
    if (!isProposalPayloadsFinished && !isVotingFailed && !isProposalCanceled && !isProposalExpired)
      return;
    if (value) {
      const index2 = db2.data.proposals.findIndex((p) => p.id === id2);
      db2.data.proposals[index2] = proposalData;
    } else {
      db2.data.proposals.push(proposalData);
    }
    db2.data.totalProposalCount = proposalsCount;
    db2.write();
  }
};

// src/lowdb/payload.ts
var import_lodash3 = __toESM(require_lodash());
var import_path3 = require("path");
var LowWithLodash3 = class extends Low {
  constructor() {
    super(...arguments);
    this.chain = import_lodash3.default.chain(this).get("data");
  }
};
var file3 = (0, import_path3.join)(process.cwd(), baseDirName, "payloads.json");
var adapter3 = new JSONFile(
  file3
);
var db3 = new LowWithLodash3(adapter3, { payloads: [] });
db3.read();
var Payload = class {
  getInitialPayloads() {
    return db3.data?.payloads?.map((payload) => {
      return {
        id: payload.id,
        chainId: payload.chainId,
        payloadsController: payload.payloadsController
      };
    }) || [];
  }
  get(id2, payloadsController, chainId) {
    db3.data ||= { payloads: [] };
    const value = db3.data.payloads.find(
      (payload) => payload.id === id2 && payload.payloadsController === payloadsController && payload.chainId === chainId
    );
    if (!value)
      throw new Error("trying to fetch payload cache, but failed");
    return value;
  }
  async populate(id2, payloadData, isVotingFailed, isProposalCanceled, isProposalExpired, chainId, payloadsController) {
    db3.data ||= { payloads: [] };
    const isInDb = db3.data.payloads.find(
      (payload) => payload.id === id2 && payload.payloadsController === payloadsController && payload.chainId === chainId
    );
    if (
      // @ts-ignore
      payloadData?.state && // @ts-ignore
      payloadData?.state < 3 && !isVotingFailed && !isProposalCanceled && !isProposalExpired
    )
      return;
    if (!!isInDb) {
      const index2 = db3.data.payloads.findIndex(
        (p) => p.id === id2 && p.payloadsController === payloadsController
      );
      db3.data.payloads[index2] = payloadData;
    } else {
      db3.data.payloads.push(payloadData);
    }
    db3.write();
  }
};

// src/lowdb/proposal.ts
var import_lodash4 = __toESM(require_lodash());
var import_path4 = require("path");
var LowWithLodash4 = class extends Low {
  constructor() {
    super(...arguments);
    this.chain = import_lodash4.default.chain(this).get("data");
  }
};
var file4 = (0, import_path4.join)(process.cwd(), baseDirName, "proposals.json");
var adapter4 = new JSONFile(file4);
var db4 = new LowWithLodash4(adapter4, []);
db4.read();
var Proposal = class {
  getIds() {
    return db4.data.map((proposal) => proposal.id) || [];
  }
  get(id2) {
    const value = db4.chain.find({ id: id2 }).value();
    if (!value)
      throw new Error("trying to fetch proposal cache, but failed");
    return value;
  }
  async populate(id2, proposalData, isVotingFailed, isProposalPayloadsFinished, isProposalCanceled, isProposalExpired) {
    db4.data ||= [];
    const value = db4.chain.find({ id: id2 }).value();
    if (!isProposalPayloadsFinished && !isVotingFailed && !isProposalCanceled && !isProposalExpired)
      return;
    if (value) {
      const index2 = db4.data.findIndex((p) => p.id === id2);
      db4.data[index2] = proposalData;
    } else {
      db4.data.push(proposalData);
    }
    db4.write();
  }
};

// src/lowdb/votes.ts
var import_lodash5 = __toESM(require_lodash());
var import_path5 = require("path");

// src/helpers/getProposalEvents.ts
async function getVoteEvents({
  contractAddress,
  client,
  startBlock,
  endBlock,
  chainId
}) {
  const votingMachine = votingMachineContract({
    contractAddress,
    client
  });
  const events = await client.getContractEvents({
    address: votingMachine.address,
    abi: votingMachine.abi,
    eventName: "VoteEmitted",
    fromBlock: BigInt(startBlock),
    toBlock: BigInt(endBlock)
  });
  return events.sort((a, b) => Number(b.blockNumber) - Number(a.blockNumber)).map((event) => ({
    proposalId: Number(event.args.proposalId),
    address: (event.args.voter || "").toString(),
    support: event.args.support || false,
    votingPower: normalizeBN(
      (event.args.votingPower || "").toString(),
      18
    ).toNumber(),
    transactionHash: event.transactionHash,
    blockNumber: Number(event.blockNumber),
    chainId
  }));
}
async function getVoters({
  contractAddress,
  client,
  endBlock,
  startBlock,
  blockLimit: blockLimit2,
  chainId
}) {
  const callbackFunc = async (startBlockNumber, endBlockNumber) => {
    return await getVoteEvents({
      contractAddress,
      client,
      startBlock: startBlockNumber,
      endBlock: endBlockNumber,
      chainId
    });
  };
  return getEventsBySteps(startBlock, endBlock, blockLimit2, callbackFunc);
}

// src/lowdb/votes.ts
var LowWithLodash5 = class extends Low {
  constructor() {
    super(...arguments);
    this.chain = import_lodash5.default.chain(this).get("data");
  }
};
var file5 = (0, import_path5.join)(process.cwd(), baseDirName, "votes.json");
var adapter5 = new JSONFile(file5);
var db5 = new LowWithLodash5(adapter5, {
  voters: [],
  lastVoteBlockNumber: {}
});
db5.read();
var Votes = class {
  async getAll() {
    const cache = db5.data;
    if (!cache) {
      return { voters: [], lastVoteBlockNumber: {} };
    }
    return cache;
  }
  async getVotersById(id2) {
    const cache = db5.data;
    if (!cache) {
      return [];
    }
    return cache.voters.filter((voter) => voter.proposalId === id2);
  }
  async populate(contractAddress, startBlockNumber, endBlockNumber, chainId) {
    const mainnetClient = initialClients[mainnet.id];
    const votingMachineClient = initialClients[chainId];
    db5.data ||= { voters: [], lastVoteBlockNumber: {} };
    const isCached = db5.data ||= { voters: [], lastVoteBlockNumber: {} };
    const currentBlock = await votingMachineClient.getBlockNumber();
    const { endBlock, startBlock } = getBlocksForEvents(
      Number(currentBlock),
      startBlockNumber,
      endBlockNumber,
      isCached.lastVoteBlockNumber[chainId]
    );
    const voters = isCached.voters;
    if (endBlock) {
      const newVoters = await getVoters({
        contractAddress,
        client: votingMachineClient,
        endBlock,
        startBlock,
        blockLimit,
        chainId
      });
      const fiveTopVoters = await Promise.all(
        newVoters.sort((a, b) => b.votingPower - a.votingPower).slice(0, 5).map(async (vote) => {
          try {
            const name = await mainnetClient.getEnsName({
              address: vote.address
            });
            return {
              ...vote,
              ensName: name ? name : void 0
            };
          } catch {
            return {
              ...vote,
              ensName: void 0
            };
          }
        })
      );
      fiveTopVoters.forEach((vote) => {
        const cache = isCached.voters.find(
          (cacheVote) => vote.transactionHash === cacheVote.transactionHash && vote.ensName === cacheVote.ensName
        );
        if (!cache) {
          voters.push(vote);
        }
      });
      newVoters.forEach((vote) => {
        const cache = isCached.voters.find(
          (cacheVote) => vote.transactionHash === cacheVote.transactionHash
        );
        if (!cache) {
          voters.push(vote);
        }
      });
    }
    voters.forEach((vote) => {
      const cache = isCached.voters.find(
        (cacheVote) => vote.transactionHash === cacheVote.transactionHash
      );
      if (!cache && db5.data) {
        db5.data.voters.push(vote);
      }
    });
    const arrayBlockNumbers = db5.data.voters.filter((vote) => vote.chainId === chainId).map((vote) => vote.blockNumber);
    db5.data.lastVoteBlockNumber[chainId] = Math.max.apply(0, arrayBlockNumbers);
    await db5.write();
  }
};

// src/lowdb/populateCache.ts
async function populateCache() {
  const proposalFetcher = new Proposal();
  const listViewProposalFetcher = new ListViewProposal();
  const payloadFetcher = new Payload();
  const ipfsFetcher = new Ipfs();
  const votesFetcher = new Votes();
  const govCore = govCoreContract({
    contractAddress: appConfig.govCoreConfig.contractAddress,
    client: initialClients[appConfig.govCoreChainId]
  });
  const govCoreDataHelper = govCoreDataHelperContract({
    contractAddress: appConfig.govCoreConfig.dataHelperContractAddress,
    client: initialClients[appConfig.govCoreChainId]
  });
  const votingMachineDataHelpers = {
    [appConfig.votingMachineChainIds[0]]: votingMachineDataHelperContract({
      contractAddress: appConfig.votingMachineConfig[appConfig.votingMachineChainIds[0]].dataHelperContractAddress,
      client: initialClients[appConfig.votingMachineChainIds[0]]
    })
  };
  if (appConfig.votingMachineChainIds.length > 1) {
    appConfig.votingMachineChainIds.forEach((chainId) => {
      const votingMachineConfig2 = appConfig.votingMachineConfig[chainId];
      votingMachineDataHelpers[chainId] = votingMachineDataHelperContract({
        contractAddress: votingMachineConfig2.dataHelperContractAddress,
        client: initialClients[chainId]
      });
    });
  }
  const payloadsControllerDataHelpers = {
    [appConfig.payloadsControllerChainIds[0]]: payloadsControllerDataHelperContract({
      contractAddress: appConfig.payloadsControllerConfig[appConfig.payloadsControllerChainIds[0]].dataHelperContractAddress,
      client: initialClients[appConfig.payloadsControllerChainIds[0]]
    })
  };
  if (appConfig.payloadsControllerChainIds.length > 1) {
    appConfig.payloadsControllerChainIds.forEach((chainId) => {
      const payloadsControllerConfig2 = appConfig.payloadsControllerConfig[chainId];
      payloadsControllerDataHelpers[chainId] = payloadsControllerDataHelperContract({
        contractAddress: payloadsControllerConfig2.dataHelperContractAddress,
        client: initialClients[chainId]
      });
    });
  }
  const proposalsCountInit = await govCore.read.getProposalsCount();
  const proposalsCount = Number(proposalsCountInit);
  if (proposalsCount > 0) {
    const cachedIds = proposalFetcher.getIds();
    const proposalIds = Array.from(Array(proposalsCount).keys());
    const idsForRequest = [];
    for (let i = 0; i < proposalIds.length; i++) {
      let found = false;
      for (let j = 0; j < cachedIds.length; j++) {
        if (proposalIds[i] === cachedIds[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        idsForRequest.push(proposalIds[i]);
      }
    }
    const fr = Math.max(
      Math.max.apply(
        null,
        idsForRequest.map((id2) => id2)
      ),
      0
    );
    const to = Math.max(
      Math.min.apply(
        null,
        idsForRequest.map((id2) => id2)
      ),
      0
    );
    const govCoreDataHelperData = fr > 0 ? await govCoreDataHelper.read.getProposalsData([
      appConfig.govCoreConfig.contractAddress,
      BigInt(fr),
      BigInt(to > 0 ? to - 1 : 0),
      BigInt(fr - to + 1)
    ]) : [];
    const initialProposals = govCoreDataHelperData.map((proposal) => {
      return {
        id: proposal.id,
        votingChainId: Number(proposal.votingChainId),
        snapshotBlockHash: proposal.proposalData.snapshotBlockHash
      };
    });
    const getVotingData = async (initialProposals2, userAddress) => {
      const votingMachineChainIds2 = initialProposals2.map((data2) => data2.votingChainId).filter((value, index2, self2) => self2.indexOf(value) === index2);
      const data = await Promise.all(
        votingMachineChainIds2.map(async (chainId) => {
          const votingMachineDataHelper = votingMachineDataHelpers[chainId];
          const formattedInitialProposals = initialProposals2.filter((proposal) => proposal.votingChainId === chainId).map((proposal) => {
            return {
              id: proposal.id,
              snapshotBlockHash: proposal.snapshotBlockHash
            };
          });
          return await votingMachineDataHelper.read.getProposalsData([
            appConfig.votingMachineConfig[chainId].contractAddress,
            formattedInitialProposals,
            userAddress || zeroAddress
          ]) || [];
        })
      );
      return data.flat();
    };
    const votingMachineDataHelperData = await getVotingData(initialProposals);
    const proposalsData = getDetailedProposalsData(
      govCoreDataHelperData,
      votingMachineDataHelperData,
      idsForRequest,
      true
    );
    const { contractsConstants, configs } = await getGovCoreConfigs({
      client: initialClients[appConfig.govCoreChainId],
      govCoreContractAddress: appConfig.govCoreConfig.contractAddress,
      govCoreDataHelperContractAddress: appConfig.govCoreConfig.dataHelperContractAddress
    });
    const dataFromCache = ipfsFetcher.getIpfsData();
    const ipfsData = {};
    dataFromCache.forEach((ipfs) => {
      ipfsData[ipfs.originalIpfsHash] = ipfs;
    });
    const newIpfsHashes = [];
    idsForRequest.forEach((id2) => {
      const proposalData = proposalsData.find((proposal) => proposal.id === id2);
      if (proposalData && typeof ipfsData[proposalData.ipfsHash] === "undefined") {
        newIpfsHashes.push(proposalData.ipfsHash);
      }
    });
    const newIpfsData = await Promise.all(
      newIpfsHashes.filter((value, index2, self2) => self2.indexOf(value) === index2).map(async (hash3) => {
        const ipfsData2 = await getProposalMetadata(hash3);
        return {
          ...ipfsData2,
          originalIpfsHash: hash3
        };
      })
    );
    newIpfsData.forEach((ipfs) => {
      ipfsData[ipfs.originalIpfsHash] = ipfs;
    });
    await Promise.all(
      newIpfsData.map(async (ipfs) => {
        await ipfsFetcher.populate(ipfs.originalIpfsHash, ipfs);
      })
    );
    const now = (0, import_dayjs3.default)().unix();
    await Promise.all(
      idsForRequest.map(async (id2) => {
        const proposalData = proposalsData.find(
          (proposal) => proposal.id === id2
        );
        if (proposalData) {
          const isVotingEndedN = proposalData.votingMachineData.endTime > 0 && now > proposalData.votingMachineData.endTime;
          const { forVotes, againstVotes } = normalizeVotes(
            proposalData.votingMachineData.forVotes,
            proposalData.votingMachineData.againstVotes
          );
          const { quorumReached } = formatQuorum(
            proposalData.votingMachineData.forVotes,
            configs[proposalData.accessLevel].quorum,
            contractsConstants.precisionDivider
          );
          const { normalizeRequiredDiff } = formatDiff(
            proposalData.votingMachineData.forVotes,
            proposalData.votingMachineData.againstVotes,
            configs[proposalData.accessLevel].differential,
            contractsConstants.precisionDivider
          );
          const isVotingFailed = isVotingEndedN && (againstVotes >= forVotes || againstVotes === 0 && forVotes === 0 || !quorumReached || forVotes < againstVotes + normalizeRequiredDiff);
          const isProposalCanceled = proposalData.basicState === 6 /* Cancelled */;
          const isProposalExpired = proposalData.basicState === 7 /* Expired */ || now > proposalData.creationTime + contractsConstants.expirationTime;
          const payloadsChainIds = proposalData.initialPayloads.map((payload) => payload.chainId).filter((value, index2, self2) => self2.indexOf(value) === index2);
          const payloadsControllers = proposalData.initialPayloads.map((payload) => payload.payloadsController).filter((value, index2, self2) => self2.indexOf(value) === index2);
          const payloadsData = await Promise.all(
            payloadsChainIds.map(async (id3) => {
              return await Promise.all(
                payloadsControllers.map(async (controller) => {
                  const proposalPayloadsIds = proposalData.initialPayloads.filter(
                    (payload) => payload.payloadsController === controller && payload.chainId === id3
                  ).map((payload) => payload.id);
                  const payloadController = appConfig.payloadsControllerConfig[id3].contractAddresses.find(
                    (address) => address.toLowerCase() === controller.toLowerCase()
                  );
                  if (payloadController) {
                    const payloadsData2 = await payloadsControllerDataHelpers[id3].read.getPayloadsData([
                      controller,
                      proposalPayloadsIds
                    ]) || [];
                    return payloadsData2.map((payload) => {
                      return {
                        creator: payload.data.creator,
                        id: Number(payload.id),
                        chainId: id3,
                        maximumAccessLevelRequired: payload.data.maximumAccessLevelRequired,
                        state: payload.data.state,
                        createdAt: payload.data.createdAt,
                        queuedAt: payload.data.queuedAt,
                        executedAt: payload.data.executedAt,
                        cancelledAt: payload.data.cancelledAt,
                        expirationTime: payload.data.expirationTime,
                        delay: payload.data.delay,
                        gracePeriod: payload.data.gracePeriod,
                        payloadsController: controller,
                        actionAddresses: payload.data.actions.map(
                          (action) => action.target
                        )
                      };
                    });
                  }
                })
              );
            })
          );
          const proposalPayloadsData = await Promise.all(
            proposalData.initialPayloads.map(async (payload) => {
              const payloadData = payloadsData.flat().flat().find(
                (payloadS) => payloadS && payloadS.id === payload.id && payloadS.payloadsController === payload.payloadsController && payloadS.chainId === payload.chainId
              );
              if (payloadData) {
                await payloadFetcher.populate(
                  payload.id,
                  payloadData,
                  isVotingFailed,
                  isProposalCanceled,
                  isProposalExpired,
                  payload.chainId,
                  payload.payloadsController
                );
                return payloadData;
              } else {
                return payloadsData.flat().flat()[0];
              }
            })
          );
          const currentBlock = await initialClients[proposalData.votingChainId].getBlockNumber();
          const startBlockNumber = proposalData.votingMachineData.createdBlock;
          const endBlockNumber = proposalData.votingMachineData.votingClosedAndSentBlockNumber;
          const { startBlock, endBlock } = getBlocksForEvents(
            Number(currentBlock),
            startBlockNumber,
            endBlockNumber,
            void 0
          );
          if (isFinite(startBlock) && startBlock > 0 && isFinite(endBlock) && endBlock > 0) {
            await votesFetcher.populate(
              appConfig.votingMachineConfig[proposalData.votingChainId].contractAddress,
              startBlock,
              endBlock,
              proposalData.votingChainId
            );
          }
          const isProposalPayloadsFinished = proposalPayloadsData.every(
            // @ts-ignore
            (payload) => payload && payload?.state > 2
          );
          await proposalFetcher.populate(
            id2,
            proposalData,
            isVotingFailed,
            isProposalPayloadsFinished,
            isProposalCanceled,
            isProposalExpired
          );
          const proposalConfig = configs.filter(
            (config) => config.accessLevel === proposalData.accessLevel
          )[0];
          const executionPayloadTime = Math.max.apply(
            null,
            // @ts-ignore
            proposalPayloadsData.map((payload) => payload?.delay || 0)
          );
          const proposalTitle = Object.values(ipfsData).find(
            (ipfs) => ipfs.originalIpfsHash === proposalData.ipfsHash
          )?.title || "";
          const formattedProposalData = {
            ...proposalData,
            payloads: proposalPayloadsData,
            title: proposalTitle,
            votingMachineState: getVotingMachineProposalState(proposalData)
          };
          const proposalState = getProposalState({
            // @ts-ignore
            proposalData: formattedProposalData,
            quorum: proposalConfig.quorum,
            differential: proposalConfig.differential,
            precisionDivider: contractsConstants.precisionDivider,
            cooldownPeriod: contractsConstants.cooldownPeriod,
            executionPayloadTime
          });
          let finishedTimestamp = formattedProposalData.creationTime;
          const {
            isVotingEnded,
            isVotingStarted,
            isExpired,
            lastPayloadExecutedAt,
            lastPayloadCanceledAt,
            lastPayloadExpiredAt,
            allPayloadsExpired,
            isCanceled
          } = getProposalStepsAndAmounts({
            // @ts-ignore
            proposalData: formattedProposalData,
            quorum: proposalConfig.quorum,
            differential: proposalConfig.differential,
            precisionDivider: contractsConstants.precisionDivider,
            cooldownPeriod: contractsConstants.cooldownPeriod,
            executionPayloadTime
          });
          if (proposalState === 0 /* Created */ && !isExpired && !isCanceled) {
            finishedTimestamp = formattedProposalData.creationTime;
          } else if (formattedProposalData.votingMachineState === 0 /* NotCreated */ && !isExpired && !isCanceled) {
            finishedTimestamp = formattedProposalData.creationTime + proposalConfig.coolDownBeforeVotingStart;
          } else if (checkHash(formattedProposalData.snapshotBlockHash).notZero && !isVotingStarted && !isExpired && !isCanceled) {
            finishedTimestamp = formattedProposalData.votingActivationTime;
          } else if (!isVotingEnded && isVotingStarted && !isExpired && !isCanceled) {
            finishedTimestamp = formattedProposalData.votingMachineData.startTime;
          } else if (isVotingStarted && isVotingEnded && proposalState !== 4 /* Executed */ && !isExpired && !isCanceled) {
            finishedTimestamp = formattedProposalData.votingMachineData.endTime > 0 ? formattedProposalData.votingMachineData.endTime : formattedProposalData.creationTime + proposalConfig.coolDownBeforeVotingStart;
          } else if (proposalState === 3 /* Defeated */) {
            finishedTimestamp = formattedProposalData.votingMachineData.endTime;
          } else if (proposalState === 4 /* Executed */) {
            finishedTimestamp = lastPayloadExecutedAt;
          } else if (proposalState === 6 /* Canceled */) {
            finishedTimestamp = lastPayloadCanceledAt > formattedProposalData.canceledAt ? lastPayloadCanceledAt : formattedProposalData.canceledAt;
          } else if (formattedProposalData.basicState === 4 /* Executed */ && allPayloadsExpired) {
            finishedTimestamp = lastPayloadExpiredAt;
          } else {
            finishedTimestamp = formattedProposalData.creationTime + contractsConstants.expirationTime;
          }
          const listViewProposalData = {
            id: formattedProposalData.id,
            title: formattedProposalData.title,
            state: proposalState,
            finishedTimestamp,
            ipfsHash: formattedProposalData.ipfsHash
          };
          await listViewProposalFetcher.populate(
            id2,
            listViewProposalData,
            isVotingFailed,
            isProposalPayloadsFinished,
            isProposalCanceled,
            isProposalExpired,
            proposalsCount
          );
        }
      })
    );
  }
}
populateCache().then(() => console.log("finished"));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  populateCache
});
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

strip-bom-string/index.js:
  (*!
   * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
   *
   * Copyright (c) 2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
