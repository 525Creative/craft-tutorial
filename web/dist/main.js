/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/handlebars/dist/handlebars.min.js":
/*!********************************************************!*\
  !*** ./node_modules/handlebars/dist/handlebars.min.js ***!
  \********************************************************/
/***/ (function(module) {

/**!

 @license
 handlebars v4.7.8

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function (a, b) {
   true ? module.exports = b() : 0;
}(this, function () {
  return function (a) {
    function b(d) {
      if (c[d]) return c[d].exports;
      var e = c[d] = {
        exports: {},
        id: d,
        loaded: !1
      };
      return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports;
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0);
  }([function (a, b, c) {
    "use strict";

    function d() {
      var a = r();
      return a.compile = function (b, c) {
        return k.compile(b, c, a);
      }, a.precompile = function (b, c) {
        return k.precompile(b, c, a);
      }, a.AST = i["default"], a.Compiler = k.Compiler, a.JavaScriptCompiler = m["default"], a.Parser = j.parser, a.parse = j.parse, a.parseWithoutProcessing = j.parseWithoutProcessing, a;
    }
    var e = c(1)["default"];
    b.__esModule = !0;
    var f = c(2),
      g = e(f),
      h = c(84),
      i = e(h),
      j = c(85),
      k = c(90),
      l = c(91),
      m = e(l),
      n = c(88),
      o = e(n),
      p = c(83),
      q = e(p),
      r = g["default"].create,
      s = d();
    s.create = d, q["default"](s), s.Visitor = o["default"], s["default"] = s, b["default"] = s, a.exports = b["default"];
  }, function (a, b) {
    "use strict";

    b["default"] = function (a) {
      return a && a.__esModule ? a : {
        "default": a
      };
    }, b.__esModule = !0;
  }, function (a, b, c) {
    "use strict";

    function d() {
      var a = new h.HandlebarsEnvironment();
      return n.extend(a, h), a.SafeString = j["default"], a.Exception = l["default"], a.Utils = n, a.escapeExpression = n.escapeExpression, a.VM = p, a.template = function (b) {
        return p.template(b, a);
      }, a;
    }
    var e = c(3)["default"],
      f = c(1)["default"];
    b.__esModule = !0;
    var g = c(4),
      h = e(g),
      i = c(77),
      j = f(i),
      k = c(6),
      l = f(k),
      m = c(5),
      n = e(m),
      o = c(78),
      p = e(o),
      q = c(83),
      r = f(q),
      s = d();
    s.create = d, r["default"](s), s["default"] = s, b["default"] = s, a.exports = b["default"];
  }, function (a, b) {
    "use strict";

    b["default"] = function (a) {
      if (a && a.__esModule) return a;
      var b = {};
      if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
      return b["default"] = a, b;
    }, b.__esModule = !0;
  }, function (a, b, c) {
    "use strict";

    function d(a, b, c) {
      this.helpers = a || {}, this.partials = b || {}, this.decorators = c || {}, i.registerDefaultHelpers(this), j.registerDefaultDecorators(this);
    }
    var e = c(1)["default"];
    b.__esModule = !0, b.HandlebarsEnvironment = d;
    var f = c(5),
      g = c(6),
      h = e(g),
      i = c(10),
      j = c(70),
      k = c(72),
      l = e(k),
      m = c(73),
      n = "4.7.8";
    b.VERSION = n;
    var o = 8;
    b.COMPILER_REVISION = o;
    var p = 7;
    b.LAST_COMPATIBLE_COMPILER_REVISION = p;
    var q = {
      1: "<= 1.0.rc.2",
      2: "== 1.0.0-rc.3",
      3: "== 1.0.0-rc.4",
      4: "== 1.x.x",
      5: "== 2.0.0-alpha.x",
      6: ">= 2.0.0-beta.1",
      7: ">= 4.0.0 <4.3.0",
      8: ">= 4.3.0"
    };
    b.REVISION_CHANGES = q;
    var r = "[object Object]";
    d.prototype = {
      constructor: d,
      logger: l["default"],
      log: l["default"].log,
      registerHelper: function (a, b) {
        if (f.toString.call(a) === r) {
          if (b) throw new h["default"]("Arg not supported with multiple helpers");
          f.extend(this.helpers, a);
        } else this.helpers[a] = b;
      },
      unregisterHelper: function (a) {
        delete this.helpers[a];
      },
      registerPartial: function (a, b) {
        if (f.toString.call(a) === r) f.extend(this.partials, a);else {
          if ("undefined" == typeof b) throw new h["default"]('Attempting to register a partial called "' + a + '" as undefined');
          this.partials[a] = b;
        }
      },
      unregisterPartial: function (a) {
        delete this.partials[a];
      },
      registerDecorator: function (a, b) {
        if (f.toString.call(a) === r) {
          if (b) throw new h["default"]("Arg not supported with multiple decorators");
          f.extend(this.decorators, a);
        } else this.decorators[a] = b;
      },
      unregisterDecorator: function (a) {
        delete this.decorators[a];
      },
      resetLoggedPropertyAccesses: function () {
        m.resetLoggedProperties();
      }
    };
    var s = l["default"].log;
    b.log = s, b.createFrame = f.createFrame, b.logger = l["default"];
  }, function (a, b) {
    "use strict";

    function c(a) {
      return k[a];
    }
    function d(a) {
      for (var b = 1; b < arguments.length; b++) for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
      return a;
    }
    function e(a, b) {
      for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
      return -1;
    }
    function f(a) {
      if ("string" != typeof a) {
        if (a && a.toHTML) return a.toHTML();
        if (null == a) return "";
        if (!a) return a + "";
        a = "" + a;
      }
      return m.test(a) ? a.replace(l, c) : a;
    }
    function g(a) {
      return !a && 0 !== a || !(!p(a) || 0 !== a.length);
    }
    function h(a) {
      var b = d({}, a);
      return b._parent = a, b;
    }
    function i(a, b) {
      return a.path = b, a;
    }
    function j(a, b) {
      return (a ? a + "." : "") + b;
    }
    b.__esModule = !0, b.extend = d, b.indexOf = e, b.escapeExpression = f, b.isEmpty = g, b.createFrame = h, b.blockParams = i, b.appendContextPath = j;
    var k = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
        "=": "&#x3D;"
      },
      l = /[&<>"'`=]/g,
      m = /[&<>"'`=]/,
      n = Object.prototype.toString;
    b.toString = n;
    var o = function (a) {
      return "function" == typeof a;
    };
    o(/x/) && (b.isFunction = o = function (a) {
      return "function" == typeof a && "[object Function]" === n.call(a);
    }), b.isFunction = o;
    var p = Array.isArray || function (a) {
      return !(!a || "object" != typeof a) && "[object Array]" === n.call(a);
    };
    b.isArray = p;
  }, function (a, b, c) {
    "use strict";

    function d(a, b) {
      var c = b && b.loc,
        g = void 0,
        h = void 0,
        i = void 0,
        j = void 0;
      c && (g = c.start.line, h = c.end.line, i = c.start.column, j = c.end.column, a += " - " + g + ":" + i);
      for (var k = Error.prototype.constructor.call(this, a), l = 0; l < f.length; l++) this[f[l]] = k[f[l]];
      Error.captureStackTrace && Error.captureStackTrace(this, d);
      try {
        c && (this.lineNumber = g, this.endLineNumber = h, e ? (Object.defineProperty(this, "column", {
          value: i,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: j,
          enumerable: !0
        })) : (this.column = i, this.endColumn = j));
      } catch (m) {}
    }
    var e = c(7)["default"];
    b.__esModule = !0;
    var f = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    d.prototype = new Error(), b["default"] = d, a.exports = b["default"];
  }, function (a, b, c) {
    a.exports = {
      "default": c(8),
      __esModule: !0
    };
  }, function (a, b, c) {
    var d = c(9);
    a.exports = function (a, b, c) {
      return d.setDesc(a, b, c);
    };
  }, function (a, b) {
    var c = Object;
    a.exports = {
      create: c.create,
      getProto: c.getPrototypeOf,
      isEnum: {}.propertyIsEnumerable,
      getDesc: c.getOwnPropertyDescriptor,
      setDesc: c.defineProperty,
      setDescs: c.defineProperties,
      getKeys: c.keys,
      getNames: c.getOwnPropertyNames,
      getSymbols: c.getOwnPropertySymbols,
      each: [].forEach
    };
  }, function (a, b, c) {
    "use strict";

    function d(a) {
      h["default"](a), j["default"](a), l["default"](a), n["default"](a), p["default"](a), r["default"](a), t["default"](a);
    }
    function e(a, b, c) {
      a.helpers[b] && (a.hooks[b] = a.helpers[b], c || delete a.helpers[b]);
    }
    var f = c(1)["default"];
    b.__esModule = !0, b.registerDefaultHelpers = d, b.moveHelperToHooks = e;
    var g = c(11),
      h = f(g),
      i = c(12),
      j = f(i),
      k = c(65),
      l = f(k),
      m = c(66),
      n = f(m),
      o = c(67),
      p = f(o),
      q = c(68),
      r = f(q),
      s = c(69),
      t = f(s);
  }, function (a, b, c) {
    "use strict";

    b.__esModule = !0;
    var d = c(5);
    b["default"] = function (a) {
      a.registerHelper("blockHelperMissing", function (b, c) {
        var e = c.inverse,
          f = c.fn;
        if (b === !0) return f(this);
        if (b === !1 || null == b) return e(this);
        if (d.isArray(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : e(this);
        if (c.data && c.ids) {
          var g = d.createFrame(c.data);
          g.contextPath = d.appendContextPath(c.data.contextPath, c.name), c = {
            data: g
          };
        }
        return f(b, c);
      });
    }, a.exports = b["default"];
  }, function (a, b, c) {
    "use strict";

    var d = c(13)["default"],
      e = c(43)["default"],
      f = c(55)["default"],
      g = c(60)["default"],
      h = c(1)["default"];
    b.__esModule = !0;
    var i = c(5),
      j = c(6),
      k = h(j);
    b["default"] = function (a) {
      a.registerHelper("each", function (a, b) {
        function c(b, c, d) {
          n && (n.key = b, n.index = c, n.first = 0 === c, n.last = !!d, o && (n.contextPath = o + b)), m += h(a[b], {
            data: n,
            blockParams: i.blockParams([a[b], b], [o + b, null])
          });
        }
        if (!b) throw new k["default"]("Must pass iterator to #each");
        var h = b.fn,
          j = b.inverse,
          l = 0,
          m = "",
          n = void 0,
          o = void 0;
        if (b.data && b.ids && (o = i.appendContextPath(b.data.contextPath, b.ids[0]) + "."), i.isFunction(a) && (a = a.call(this)), b.data && (n = i.createFrame(b.data)), a && "object" == typeof a) if (i.isArray(a)) for (var p = a.length; l < p; l++) l in a && c(l, l, l === a.length - 1);else if ("function" == typeof d && a[e]) {
          for (var q = [], r = f(a), s = r.next(); !s.done; s = r.next()) q.push(s.value);
          a = q;
          for (var p = a.length; l < p; l++) c(l, l, l === a.length - 1);
        } else !function () {
          var b = void 0;
          g(a).forEach(function (a) {
            void 0 !== b && c(b, l - 1), b = a, l++;
          }), void 0 !== b && c(b, l - 1, !0);
        }();
        return 0 === l && (m = j(this)), m;
      });
    }, a.exports = b["default"];
  }, function (a, b, c) {
    a.exports = {
      "default": c(14),
      __esModule: !0
    };
  }, function (a, b, c) {
    c(15), c(42), a.exports = c(21).Symbol;
  }, function (a, b, c) {
    "use strict";

    var d = c(9),
      e = c(16),
      f = c(17),
      g = c(18),
      h = c(20),
      i = c(24),
      j = c(19),
      k = c(27),
      l = c(28),
      m = c(30),
      n = c(29),
      o = c(31),
      p = c(36),
      q = c(37),
      r = c(38),
      s = c(39),
      t = c(32),
      u = c(26),
      v = d.getDesc,
      w = d.setDesc,
      x = d.create,
      y = p.get,
      z = e.Symbol,
      A = e.JSON,
      B = A && A.stringify,
      C = !1,
      D = n("_hidden"),
      E = d.isEnum,
      F = k("symbol-registry"),
      G = k("symbols"),
      H = "function" == typeof z,
      I = Object.prototype,
      J = g && j(function () {
        return 7 != x(w({}, "a", {
          get: function () {
            return w(this, "a", {
              value: 7
            }).a;
          }
        })).a;
      }) ? function (a, b, c) {
        var d = v(I, b);
        d && delete I[b], w(a, b, c), d && a !== I && w(I, b, d);
      } : w,
      K = function (a) {
        var b = G[a] = x(z.prototype);
        return b._k = a, g && C && J(I, a, {
          configurable: !0,
          set: function (b) {
            f(this, D) && f(this[D], a) && (this[D][a] = !1), J(this, a, u(1, b));
          }
        }), b;
      },
      L = function (a) {
        return "symbol" == typeof a;
      },
      M = function (a, b, c) {
        return c && f(G, b) ? (c.enumerable ? (f(a, D) && a[D][b] && (a[D][b] = !1), c = x(c, {
          enumerable: u(0, !1)
        })) : (f(a, D) || w(a, D, u(1, {})), a[D][b] = !0), J(a, b, c)) : w(a, b, c);
      },
      N = function (a, b) {
        s(a);
        for (var c, d = q(b = t(b)), e = 0, f = d.length; f > e;) M(a, c = d[e++], b[c]);
        return a;
      },
      O = function (a, b) {
        return void 0 === b ? x(a) : N(x(a), b);
      },
      P = function (a) {
        var b = E.call(this, a);
        return !(b || !f(this, a) || !f(G, a) || f(this, D) && this[D][a]) || b;
      },
      Q = function (a, b) {
        var c = v(a = t(a), b);
        return !c || !f(G, b) || f(a, D) && a[D][b] || (c.enumerable = !0), c;
      },
      R = function (a) {
        for (var b, c = y(t(a)), d = [], e = 0; c.length > e;) f(G, b = c[e++]) || b == D || d.push(b);
        return d;
      },
      S = function (a) {
        for (var b, c = y(t(a)), d = [], e = 0; c.length > e;) f(G, b = c[e++]) && d.push(G[b]);
        return d;
      },
      T = function (a) {
        if (void 0 !== a && !L(a)) {
          for (var b, c, d = [a], e = 1, f = arguments; f.length > e;) d.push(f[e++]);
          return b = d[1], "function" == typeof b && (c = b), !c && r(b) || (b = function (a, b) {
            if (c && (b = c.call(this, a, b)), !L(b)) return b;
          }), d[1] = b, B.apply(A, d);
        }
      },
      U = j(function () {
        var a = z();
        return "[null]" != B([a]) || "{}" != B({
          a: a
        }) || "{}" != B(Object(a));
      });
    H || (z = function () {
      if (L(this)) throw TypeError("Symbol is not a constructor");
      return K(m(arguments.length > 0 ? arguments[0] : void 0));
    }, i(z.prototype, "toString", function () {
      return this._k;
    }), L = function (a) {
      return a instanceof z;
    }, d.create = O, d.isEnum = P, d.getDesc = Q, d.setDesc = M, d.setDescs = N, d.getNames = p.get = R, d.getSymbols = S, g && !c(41) && i(I, "propertyIsEnumerable", P, !0));
    var V = {
      "for": function (a) {
        return f(F, a += "") ? F[a] : F[a] = z(a);
      },
      keyFor: function (a) {
        return o(F, a);
      },
      useSetter: function () {
        C = !0;
      },
      useSimple: function () {
        C = !1;
      }
    };
    d.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function (a) {
      var b = n(a);
      V[a] = H ? b : K(b);
    }), C = !0, h(h.G + h.W, {
      Symbol: z
    }), h(h.S, "Symbol", V), h(h.S + h.F * !H, "Object", {
      create: O,
      defineProperty: M,
      defineProperties: N,
      getOwnPropertyDescriptor: Q,
      getOwnPropertyNames: R,
      getOwnPropertySymbols: S
    }), A && h(h.S + h.F * (!H || U), "JSON", {
      stringify: T
    }), l(z, "Symbol"), l(Math, "Math", !0), l(e.JSON, "JSON", !0);
  }, function (a, b) {
    var c = a.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = c);
  }, function (a, b) {
    var c = {}.hasOwnProperty;
    a.exports = function (a, b) {
      return c.call(a, b);
    };
  }, function (a, b, c) {
    a.exports = !c(19)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7;
        }
      }).a;
    });
  }, function (a, b) {
    a.exports = function (a) {
      try {
        return !!a();
      } catch (b) {
        return !0;
      }
    };
  }, function (a, b, c) {
    var d = c(16),
      e = c(21),
      f = c(22),
      g = "prototype",
      h = function (a, b, c) {
        var i,
          j,
          k,
          l = a & h.F,
          m = a & h.G,
          n = a & h.S,
          o = a & h.P,
          p = a & h.B,
          q = a & h.W,
          r = m ? e : e[b] || (e[b] = {}),
          s = m ? d : n ? d[b] : (d[b] || {})[g];
        m && (c = b);
        for (i in c) j = !l && s && i in s, j && i in r || (k = j ? s[i] : c[i], r[i] = m && "function" != typeof s[i] ? c[i] : p && j ? f(k, d) : q && s[i] == k ? function (a) {
          var b = function (b) {
            return this instanceof a ? new a(b) : a(b);
          };
          return b[g] = a[g], b;
        }(k) : o && "function" == typeof k ? f(Function.call, k) : k, o && ((r[g] || (r[g] = {}))[i] = k));
      };
    h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, a.exports = h;
  }, function (a, b) {
    var c = a.exports = {
      version: "1.2.6"
    };
    "number" == typeof __e && (__e = c);
  }, function (a, b, c) {
    var d = c(23);
    a.exports = function (a, b, c) {
      if (d(a), void 0 === b) return a;
      switch (c) {
        case 1:
          return function (c) {
            return a.call(b, c);
          };
        case 2:
          return function (c, d) {
            return a.call(b, c, d);
          };
        case 3:
          return function (c, d, e) {
            return a.call(b, c, d, e);
          };
      }
      return function () {
        return a.apply(b, arguments);
      };
    };
  }, function (a, b) {
    a.exports = function (a) {
      if ("function" != typeof a) throw TypeError(a + " is not a function!");
      return a;
    };
  }, function (a, b, c) {
    a.exports = c(25);
  }, function (a, b, c) {
    var d = c(9),
      e = c(26);
    a.exports = c(18) ? function (a, b, c) {
      return d.setDesc(a, b, e(1, c));
    } : function (a, b, c) {
      return a[b] = c, a;
    };
  }, function (a, b) {
    a.exports = function (a, b) {
      return {
        enumerable: !(1 & a),
        configurable: !(2 & a),
        writable: !(4 & a),
        value: b
      };
    };
  }, function (a, b, c) {
    var d = c(16),
      e = "__core-js_shared__",
      f = d[e] || (d[e] = {});
    a.exports = function (a) {
      return f[a] || (f[a] = {});
    };
  }, function (a, b, c) {
    var d = c(9).setDesc,
      e = c(17),
      f = c(29)("toStringTag");
    a.exports = function (a, b, c) {
      a && !e(a = c ? a : a.prototype, f) && d(a, f, {
        configurable: !0,
        value: b
      });
    };
  }, function (a, b, c) {
    var d = c(27)("wks"),
      e = c(30),
      f = c(16).Symbol;
    a.exports = function (a) {
      return d[a] || (d[a] = f && f[a] || (f || e)("Symbol." + a));
    };
  }, function (a, b) {
    var c = 0,
      d = Math.random();
    a.exports = function (a) {
      return "Symbol(".concat(void 0 === a ? "" : a, ")_", (++c + d).toString(36));
    };
  }, function (a, b, c) {
    var d = c(9),
      e = c(32);
    a.exports = function (a, b) {
      for (var c, f = e(a), g = d.getKeys(f), h = g.length, i = 0; h > i;) if (f[c = g[i++]] === b) return c;
    };
  }, function (a, b, c) {
    var d = c(33),
      e = c(35);
    a.exports = function (a) {
      return d(e(a));
    };
  }, function (a, b, c) {
    var d = c(34);
    a.exports = Object("z").propertyIsEnumerable(0) ? Object : function (a) {
      return "String" == d(a) ? a.split("") : Object(a);
    };
  }, function (a, b) {
    var c = {}.toString;
    a.exports = function (a) {
      return c.call(a).slice(8, -1);
    };
  }, function (a, b) {
    a.exports = function (a) {
      if (void 0 == a) throw TypeError("Can't call method on  " + a);
      return a;
    };
  }, function (a, b, c) {
    var d = c(32),
      e = c(9).getNames,
      f = {}.toString,
      g = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      h = function (a) {
        try {
          return e(a);
        } catch (b) {
          return g.slice();
        }
      };
    a.exports.get = function (a) {
      return g && "[object Window]" == f.call(a) ? h(a) : e(d(a));
    };
  }, function (a, b, c) {
    var d = c(9);
    a.exports = function (a) {
      var b = d.getKeys(a),
        c = d.getSymbols;
      if (c) for (var e, f = c(a), g = d.isEnum, h = 0; f.length > h;) g.call(a, e = f[h++]) && b.push(e);
      return b;
    };
  }, function (a, b, c) {
    var d = c(34);
    a.exports = Array.isArray || function (a) {
      return "Array" == d(a);
    };
  }, function (a, b, c) {
    var d = c(40);
    a.exports = function (a) {
      if (!d(a)) throw TypeError(a + " is not an object!");
      return a;
    };
  }, function (a, b) {
    a.exports = function (a) {
      return "object" == typeof a ? null !== a : "function" == typeof a;
    };
  }, function (a, b) {
    a.exports = !0;
  }, function (a, b) {}, function (a, b, c) {
    a.exports = {
      "default": c(44),
      __esModule: !0
    };
  }, function (a, b, c) {
    c(45), c(51), a.exports = c(29)("iterator");
  }, function (a, b, c) {
    "use strict";

    var d = c(46)(!0);
    c(48)(String, "String", function (a) {
      this._t = String(a), this._i = 0;
    }, function () {
      var a,
        b = this._t,
        c = this._i;
      return c >= b.length ? {
        value: void 0,
        done: !0
      } : (a = d(b, c), this._i += a.length, {
        value: a,
        done: !1
      });
    });
  }, function (a, b, c) {
    var d = c(47),
      e = c(35);
    a.exports = function (a) {
      return function (b, c) {
        var f,
          g,
          h = String(e(b)),
          i = d(c),
          j = h.length;
        return i < 0 || i >= j ? a ? "" : void 0 : (f = h.charCodeAt(i), f < 55296 || f > 56319 || i + 1 === j || (g = h.charCodeAt(i + 1)) < 56320 || g > 57343 ? a ? h.charAt(i) : f : a ? h.slice(i, i + 2) : (f - 55296 << 10) + (g - 56320) + 65536);
      };
    };
  }, function (a, b) {
    var c = Math.ceil,
      d = Math.floor;
    a.exports = function (a) {
      return isNaN(a = +a) ? 0 : (a > 0 ? d : c)(a);
    };
  }, function (a, b, c) {
    "use strict";

    var d = c(41),
      e = c(20),
      f = c(24),
      g = c(25),
      h = c(17),
      i = c(49),
      j = c(50),
      k = c(28),
      l = c(9).getProto,
      m = c(29)("iterator"),
      n = !([].keys && "next" in [].keys()),
      o = "@@iterator",
      p = "keys",
      q = "values",
      r = function () {
        return this;
      };
    a.exports = function (a, b, c, s, t, u, v) {
      j(c, b, s);
      var w,
        x,
        y = function (a) {
          if (!n && a in C) return C[a];
          switch (a) {
            case p:
              return function () {
                return new c(this, a);
              };
            case q:
              return function () {
                return new c(this, a);
              };
          }
          return function () {
            return new c(this, a);
          };
        },
        z = b + " Iterator",
        A = t == q,
        B = !1,
        C = a.prototype,
        D = C[m] || C[o] || t && C[t],
        E = D || y(t);
      if (D) {
        var F = l(E.call(new a()));
        k(F, z, !0), !d && h(C, o) && g(F, m, r), A && D.name !== q && (B = !0, E = function () {
          return D.call(this);
        });
      }
      if (d && !v || !n && !B && C[m] || g(C, m, E), i[b] = E, i[z] = r, t) if (w = {
        values: A ? E : y(q),
        keys: u ? E : y(p),
        entries: A ? y("entries") : E
      }, v) for (x in w) x in C || f(C, x, w[x]);else e(e.P + e.F * (n || B), b, w);
      return w;
    };
  }, function (a, b) {
    a.exports = {};
  }, function (a, b, c) {
    "use strict";

    var d = c(9),
      e = c(26),
      f = c(28),
      g = {};
    c(25)(g, c(29)("iterator"), function () {
      return this;
    }), a.exports = function (a, b, c) {
      a.prototype = d.create(g, {
        next: e(1, c)
      }), f(a, b + " Iterator");
    };
  }, function (a, b, c) {
    c(52);
    var d = c(49);
    d.NodeList = d.HTMLCollection = d.Array;
  }, function (a, b, c) {
    "use strict";

    var d = c(53),
      e = c(54),
      f = c(49),
      g = c(32);
    a.exports = c(48)(Array, "Array", function (a, b) {
      this._t = g(a), this._i = 0, this._k = b;
    }, function () {
      var a = this._t,
        b = this._k,
        c = this._i++;
      return !a || c >= a.length ? (this._t = void 0, e(1)) : "keys" == b ? e(0, c) : "values" == b ? e(0, a[c]) : e(0, [c, a[c]]);
    }, "values"), f.Arguments = f.Array, d("keys"), d("values"), d("entries");
  }, function (a, b) {
    a.exports = function () {};
  }, function (a, b) {
    a.exports = function (a, b) {
      return {
        value: b,
        done: !!a
      };
    };
  }, function (a, b, c) {
    a.exports = {
      "default": c(56),
      __esModule: !0
    };
  }, function (a, b, c) {
    c(51), c(45), a.exports = c(57);
  }, function (a, b, c) {
    var d = c(39),
      e = c(58);
    a.exports = c(21).getIterator = function (a) {
      var b = e(a);
      if ("function" != typeof b) throw TypeError(a + " is not iterable!");
      return d(b.call(a));
    };
  }, function (a, b, c) {
    var d = c(59),
      e = c(29)("iterator"),
      f = c(49);
    a.exports = c(21).getIteratorMethod = function (a) {
      if (void 0 != a) return a[e] || a["@@iterator"] || f[d(a)];
    };
  }, function (a, b, c) {
    var d = c(34),
      e = c(29)("toStringTag"),
      f = "Arguments" == d(function () {
        return arguments;
      }());
    a.exports = function (a) {
      var b, c, g;
      return void 0 === a ? "Undefined" : null === a ? "Null" : "string" == typeof (c = (b = Object(a))[e]) ? c : f ? d(b) : "Object" == (g = d(b)) && "function" == typeof b.callee ? "Arguments" : g;
    };
  }, function (a, b, c) {
    a.exports = {
      "default": c(61),
      __esModule: !0
    };
  }, function (a, b, c) {
    c(62), a.exports = c(21).Object.keys;
  }, function (a, b, c) {
    var d = c(63);
    c(64)("keys", function (a) {
      return function (b) {
        return a(d(b));
      };
    });
  }, function (a, b, c) {
    var d = c(35);
    a.exports = function (a) {
      return Object(d(a));
    };
  }, function (a, b, c) {
    var d = c(20),
      e = c(21),
      f = c(19);
    a.exports = function (a, b) {
      var c = (e.Object || {})[a] || Object[a],
        g = {};
      g[a] = b(c), d(d.S + d.F * f(function () {
        c(1);
      }), "Object", g);
    };
  }, function (a, b, c) {
    "use strict";

    var d = c(1)["default"];
    b.__esModule = !0;
    var e = c(6),
      f = d(e);
    b["default"] = function (a) {
      a.registerHelper("helperMissing", function () {
        if (1 !== arguments.length) throw new f["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, a.exports = b["default"];
  }, function (a, b, c) {
    "use strict";

    var d = c(1)["default"];
    b.__esModule = !0;
    var e = c(5),
      f = c(6),
      g = d(f);
    b["default"] = function (a) {
      a.registerHelper("if", function (a, b) {
        if (2 != arguments.length) throw new g["default"]("#if requires exactly one argument");
        return e.isFunction(a) && (a = a.call(this)), !b.hash.includeZero && !a || e.isEmpty(a) ? b.inverse(this) : b.fn(this);
      }), a.registerHelper("unless", function (b, c) {
        if (2 != arguments.length) throw new g["default"]("#unless requires exactly one argument");
        return a.helpers["if"].call(this, b, {
          fn: c.inverse,
          inverse: c.fn,
          hash: c.hash
        });
      });
    }, a.exports = b["default"];
  }, function (a, b) {
    "use strict";

    b.__esModule = !0, b["default"] = function (a) {
      a.registerHelper("log", function () {
        for (var b = [void 0], c = arguments[arguments.length - 1], d = 0; d < arguments.length - 1; d++) b.push(arguments[d]);
        var e = 1;
        null != c.hash.level ? e = c.hash.level : c.data && null != c.data.level && (e = c.data.level), b[0] = e, a.log.apply(a, b);
      });
    }, a.exports = b["default"];
  }, function (a, b) {
    "use strict";

    b.__esModule = !0, b["default"] = function (a) {
      a.registerHelper("lookup", function (a, b, c) {
        return a ? c.lookupProperty(a, b) : a;
      });
    }, a.exports = b["default"];
  }, function (a, b, c) {
    "use strict";

    var d = c(1)["default"];
    b.__esModule = !0;
    var e = c(5),
      f = c(6),
      g = d(f);
    b["default"] = function (a) {
      a.registerHelper("with", function (a, b) {
        if (2 != arguments.length) throw new g["default"]("#with requires exactly one argument");
        e.isFunction(a) && (a = a.call(this));
        var c = b.fn;
        if (e.isEmpty(a)) return b.inverse(this);
        var d = b.data;
        return b.data && b.ids && (d = e.createFrame(b.data), d.contextPath = e.appendContextPath(b.data.contextPath, b.ids[0])), c(a, {
          data: d,
          blockParams: e.blockParams([a], [d && d.contextPath])
        });
      });
    }, a.exports = b["default"];
  }, function (a, b, c) {
    "use strict";

    function d(a) {
      g["default"](a);
    }
    var e = c(1)["default"];
    b.__esModule = !0, b.registerDefaultDecorators = d;
    var f = c(71),
      g = e(f);
  }, function (a, b, c) {
    "use strict";

    b.__esModule = !0;
    var d = c(5);
    b["default"] = function (a) {
      a.registerDecorator("inline", function (a, b, c, e) {
        var f = a;
        return b.partials || (b.partials = {}, f = function (e, f) {
          var g = c.partials;
          c.partials = d.extend({}, g, b.partials);
          var h = a(e, f);
          return c.partials = g, h;
        }), b.partials[e.args[0]] = e.fn, f;
      });
    }, a.exports = b["default"];
  }, function (a, b, c) {
    "use strict";

    b.__esModule = !0;
    var d = c(5),
      e = {
        methodMap: ["debug", "info", "warn", "error"],
        level: "info",
        lookupLevel: function (a) {
          if ("string" == typeof a) {
            var b = d.indexOf(e.methodMap, a.toLowerCase());
            a = b >= 0 ? b : parseInt(a, 10);
          }
          return a;
        },
        log: function (a) {
          if (a = e.lookupLevel(a), "undefined" != typeof console && e.lookupLevel(e.level) <= a) {
            var b = e.methodMap[a];
            console[b] || (b = "log");
            for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++) d[f - 1] = arguments[f];
            console[b].apply(console, d);
          }
        }
      };
    b["default"] = e, a.exports = b["default"];
  }, function (a, b, c) {
    "use strict";

    function d(a) {
      var b = i(null);
      b.constructor = !1, b.__defineGetter__ = !1, b.__defineSetter__ = !1, b.__lookupGetter__ = !1;
      var c = i(null);
      return c.__proto__ = !1, {
        properties: {
          whitelist: l.createNewLookupObject(c, a.allowedProtoProperties),
          defaultValue: a.allowProtoPropertiesByDefault
        },
        methods: {
          whitelist: l.createNewLookupObject(b, a.allowedProtoMethods),
          defaultValue: a.allowProtoMethodsByDefault
        }
      };
    }
    function e(a, b, c) {
      return "function" == typeof a ? f(b.methods, c) : f(b.properties, c);
    }
    function f(a, b) {
      return void 0 !== a.whitelist[b] ? a.whitelist[b] === !0 : void 0 !== a.defaultValue ? a.defaultValue : (g(b), !1);
    }
    function g(a) {
      o[a] !== !0 && (o[a] = !0, n["default"].log("error", 'Handlebars: Access has been denied to resolve the property "' + a + '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'));
    }
    function h() {
      j(o).forEach(function (a) {
        delete o[a];
      });
    }
    var i = c(74)["default"],
      j = c(60)["default"],
      k = c(1)["default"];
    b.__esModule = !0, b.createProtoAccessControl = d, b.resultIsAllowed = e, b.resetLoggedProperties = h;
    var l = c(76),
      m = c(72),
      n = k(m),
      o = i(null);
  }, function (a, b, c) {
    a.exports = {
      "default": c(75),
      __esModule: !0
    };
  }, function (a, b, c) {
    var d = c(9);
    a.exports = function (a, b) {
      return d.create(a, b);
    };
  }, function (a, b, c) {
    "use strict";

    function d() {
      for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
      return f.extend.apply(void 0, [e(null)].concat(b));
    }
    var e = c(74)["default"];
    b.__esModule = !0, b.createNewLookupObject = d;
    var f = c(5);
  }, function (a, b) {
    "use strict";

    function c(a) {
      this.string = a;
    }
    b.__esModule = !0, c.prototype.toString = c.prototype.toHTML = function () {
      return "" + this.string;
    }, b["default"] = c, a.exports = b["default"];
  }, function (a, b, c) {
    "use strict";

    function d(a) {
      var b = a && a[0] || 1,
        c = v.COMPILER_REVISION;
      if (!(b >= v.LAST_COMPATIBLE_COMPILER_REVISION && b <= v.COMPILER_REVISION)) {
        if (b < v.LAST_COMPATIBLE_COMPILER_REVISION) {
          var d = v.REVISION_CHANGES[c],
            e = v.REVISION_CHANGES[b];
          throw new u["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").");
        }
        throw new u["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").");
      }
    }
    function e(a, b) {
      function c(c, d, e) {
        e.hash && (d = s.extend({}, d, e.hash), e.ids && (e.ids[0] = !0)), c = b.VM.resolvePartial.call(this, c, d, e);
        var f = s.extend({}, e, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
          }),
          g = b.VM.invokePartial.call(this, c, d, f);
        if (null == g && b.compile && (e.partials[e.name] = b.compile(c, a.compilerOptions, b), g = e.partials[e.name](d, f)), null != g) {
          if (e.indent) {
            for (var h = g.split("\n"), i = 0, j = h.length; i < j && (h[i] || i + 1 !== j); i++) h[i] = e.indent + h[i];
            g = h.join("\n");
          }
          return g;
        }
        throw new u["default"]("The partial " + e.name + " could not be compiled when running in runtime-only mode");
      }
      function d(b) {
        function c(b) {
          return "" + a.main(g, b, g.helpers, g.partials, f, i, h);
        }
        var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
          f = e.data;
        d._setup(e), !e.partial && a.useData && (f = j(b, f));
        var h = void 0,
          i = a.useBlockParams ? [] : void 0;
        return a.useDepths && (h = e.depths ? b != e.depths[0] ? [b].concat(e.depths) : e.depths : [b]), (c = k(a.main, c, g, e.depths || [], f, i))(b, e);
      }
      if (!b) throw new u["default"]("No environment passed to template");
      if (!a || !a.main) throw new u["default"]("Unknown template object: " + typeof a);
      a.main.decorator = a.main_d, b.VM.checkRevision(a.compiler);
      var e = a.compiler && 7 === a.compiler[0],
        g = {
          strict: function (a, b, c) {
            if (!(a && b in a)) throw new u["default"]('"' + b + '" not defined in ' + a, {
              loc: c
            });
            return g.lookupProperty(a, b);
          },
          lookupProperty: function (a, b) {
            var c = a[b];
            return null == c ? c : Object.prototype.hasOwnProperty.call(a, b) ? c : y.resultIsAllowed(c, g.protoAccessControl, b) ? c : void 0;
          },
          lookup: function (a, b) {
            for (var c = a.length, d = 0; d < c; d++) {
              var e = a[d] && g.lookupProperty(a[d], b);
              if (null != e) return a[d][b];
            }
          },
          lambda: function (a, b) {
            return "function" == typeof a ? a.call(b) : a;
          },
          escapeExpression: s.escapeExpression,
          invokePartial: c,
          fn: function (b) {
            var c = a[b];
            return c.decorator = a[b + "_d"], c;
          },
          programs: [],
          program: function (a, b, c, d, e) {
            var g = this.programs[a],
              h = this.fn(a);
            return b || e || d || c ? g = f(this, a, h, b, c, d, e) : g || (g = this.programs[a] = f(this, a, h)), g;
          },
          data: function (a, b) {
            for (; a && b--;) a = a._parent;
            return a;
          },
          mergeIfNeeded: function (a, b) {
            var c = a || b;
            return a && b && a !== b && (c = s.extend({}, b, a)), c;
          },
          nullContext: n({}),
          noop: b.VM.noop,
          compilerInfo: a.compiler
        };
      return d.isTop = !0, d._setup = function (c) {
        if (c.partial) g.protoAccessControl = c.protoAccessControl, g.helpers = c.helpers, g.partials = c.partials, g.decorators = c.decorators, g.hooks = c.hooks;else {
          var d = s.extend({}, b.helpers, c.helpers);
          l(d, g), g.helpers = d, a.usePartial && (g.partials = g.mergeIfNeeded(c.partials, b.partials)), (a.usePartial || a.useDecorators) && (g.decorators = s.extend({}, b.decorators, c.decorators)), g.hooks = {}, g.protoAccessControl = y.createProtoAccessControl(c);
          var f = c.allowCallsToHelperMissing || e;
          w.moveHelperToHooks(g, "helperMissing", f), w.moveHelperToHooks(g, "blockHelperMissing", f);
        }
      }, d._child = function (b, c, d, e) {
        if (a.useBlockParams && !d) throw new u["default"]("must pass block params");
        if (a.useDepths && !e) throw new u["default"]("must pass parent depths");
        return f(g, b, a[b], c, 0, d, e);
      }, d;
    }
    function f(a, b, c, d, e, f, g) {
      function h(b) {
        var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
          h = g;
        return !g || b == g[0] || b === a.nullContext && null === g[0] || (h = [b].concat(g)), c(a, b, a.helpers, a.partials, e.data || d, f && [e.blockParams].concat(f), h);
      }
      return h = k(c, h, a, g, d, f), h.program = b, h.depth = g ? g.length : 0, h.blockParams = e || 0, h;
    }
    function g(a, b, c) {
      return a ? a.call || c.name || (c.name = a, a = c.partials[a]) : a = "@partial-block" === c.name ? c.data["partial-block"] : c.partials[c.name], a;
    }
    function h(a, b, c) {
      var d = c.data && c.data["partial-block"];
      c.partial = !0, c.ids && (c.data.contextPath = c.ids[0] || c.data.contextPath);
      var e = void 0;
      if (c.fn && c.fn !== i && !function () {
        c.data = v.createFrame(c.data);
        var a = c.fn;
        e = c.data["partial-block"] = function (b) {
          var c = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
          return c.data = v.createFrame(c.data), c.data["partial-block"] = d, a(b, c);
        }, a.partials && (c.partials = s.extend({}, c.partials, a.partials));
      }(), void 0 === a && e && (a = e), void 0 === a) throw new u["default"]("The partial " + c.name + " could not be found");
      if (a instanceof Function) return a(b, c);
    }
    function i() {
      return "";
    }
    function j(a, b) {
      return b && "root" in b || (b = b ? v.createFrame(b) : {}, b.root = a), b;
    }
    function k(a, b, c, d, e, f) {
      if (a.decorator) {
        var g = {};
        b = a.decorator(b, g, c, d && d[0], e, f, d), s.extend(b, g);
      }
      return b;
    }
    function l(a, b) {
      o(a).forEach(function (c) {
        var d = a[c];
        a[c] = m(d, b);
      });
    }
    function m(a, b) {
      var c = b.lookupProperty;
      return x.wrapHelper(a, function (a) {
        return s.extend({
          lookupProperty: c
        }, a);
      });
    }
    var n = c(79)["default"],
      o = c(60)["default"],
      p = c(3)["default"],
      q = c(1)["default"];
    b.__esModule = !0, b.checkRevision = d, b.template = e, b.wrapProgram = f, b.resolvePartial = g, b.invokePartial = h, b.noop = i;
    var r = c(5),
      s = p(r),
      t = c(6),
      u = q(t),
      v = c(4),
      w = c(10),
      x = c(82),
      y = c(73);
  }, function (a, b, c) {
    a.exports = {
      "default": c(80),
      __esModule: !0
    };
  }, function (a, b, c) {
    c(81), a.exports = c(21).Object.seal;
  }, function (a, b, c) {
    var d = c(40);
    c(64)("seal", function (a) {
      return function (b) {
        return a && d(b) ? a(b) : b;
      };
    });
  }, function (a, b) {
    "use strict";

    function c(a, b) {
      if ("function" != typeof a) return a;
      var c = function () {
        var c = arguments[arguments.length - 1];
        return arguments[arguments.length - 1] = b(c), a.apply(this, arguments);
      };
      return c;
    }
    b.__esModule = !0, b.wrapHelper = c;
  }, function (a, b) {
    "use strict";

    b.__esModule = !0, b["default"] = function (a) {
      !function () {
        "object" != typeof globalThis && (Object.prototype.__defineGetter__("__magic__", function () {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      }();
      var b = globalThis.Handlebars;
      a.noConflict = function () {
        return globalThis.Handlebars === a && (globalThis.Handlebars = b), a;
      };
    }, a.exports = b["default"];
  }, function (a, b) {
    "use strict";

    b.__esModule = !0;
    var c = {
      helpers: {
        helperExpression: function (a) {
          return "SubExpression" === a.type || ("MustacheStatement" === a.type || "BlockStatement" === a.type) && !!(a.params && a.params.length || a.hash);
        },
        scopedId: function (a) {
          return /^\.|this\b/.test(a.original);
        },
        simpleId: function (a) {
          return 1 === a.parts.length && !c.helpers.scopedId(a) && !a.depth;
        }
      }
    };
    b["default"] = c, a.exports = b["default"];
  }, function (a, b, c) {
    "use strict";

    function d(a, b) {
      if ("Program" === a.type) return a;
      i["default"].yy = o, o.locInfo = function (a) {
        return new o.SourceLocation(b && b.srcName, a);
      };
      var c = i["default"].parse(a);
      return c;
    }
    function e(a, b) {
      var c = d(a, b),
        e = new k["default"](b);
      return e.accept(c);
    }
    var f = c(1)["default"],
      g = c(3)["default"];
    b.__esModule = !0, b.parseWithoutProcessing = d, b.parse = e;
    var h = c(86),
      i = f(h),
      j = c(87),
      k = f(j),
      l = c(89),
      m = g(l),
      n = c(5);
    b.parser = i["default"];
    var o = {};
    n.extend(o, m);
  }, function (a, b) {
    "use strict";

    b.__esModule = !0;
    var c = function () {
      function a() {
        this.yy = {};
      }
      var b = {
          trace: function () {},
          yy: {},
          symbols_: {
            error: 2,
            root: 3,
            program: 4,
            EOF: 5,
            program_repetition0: 6,
            statement: 7,
            mustache: 8,
            block: 9,
            rawBlock: 10,
            partial: 11,
            partialBlock: 12,
            content: 13,
            COMMENT: 14,
            CONTENT: 15,
            openRawBlock: 16,
            rawBlock_repetition0: 17,
            END_RAW_BLOCK: 18,
            OPEN_RAW_BLOCK: 19,
            helperName: 20,
            openRawBlock_repetition0: 21,
            openRawBlock_option0: 22,
            CLOSE_RAW_BLOCK: 23,
            openBlock: 24,
            block_option0: 25,
            closeBlock: 26,
            openInverse: 27,
            block_option1: 28,
            OPEN_BLOCK: 29,
            openBlock_repetition0: 30,
            openBlock_option0: 31,
            openBlock_option1: 32,
            CLOSE: 33,
            OPEN_INVERSE: 34,
            openInverse_repetition0: 35,
            openInverse_option0: 36,
            openInverse_option1: 37,
            openInverseChain: 38,
            OPEN_INVERSE_CHAIN: 39,
            openInverseChain_repetition0: 40,
            openInverseChain_option0: 41,
            openInverseChain_option1: 42,
            inverseAndProgram: 43,
            INVERSE: 44,
            inverseChain: 45,
            inverseChain_option0: 46,
            OPEN_ENDBLOCK: 47,
            OPEN: 48,
            mustache_repetition0: 49,
            mustache_option0: 50,
            OPEN_UNESCAPED: 51,
            mustache_repetition1: 52,
            mustache_option1: 53,
            CLOSE_UNESCAPED: 54,
            OPEN_PARTIAL: 55,
            partialName: 56,
            partial_repetition0: 57,
            partial_option0: 58,
            openPartialBlock: 59,
            OPEN_PARTIAL_BLOCK: 60,
            openPartialBlock_repetition0: 61,
            openPartialBlock_option0: 62,
            param: 63,
            sexpr: 64,
            OPEN_SEXPR: 65,
            sexpr_repetition0: 66,
            sexpr_option0: 67,
            CLOSE_SEXPR: 68,
            hash: 69,
            hash_repetition_plus0: 70,
            hashSegment: 71,
            ID: 72,
            EQUALS: 73,
            blockParams: 74,
            OPEN_BLOCK_PARAMS: 75,
            blockParams_repetition_plus0: 76,
            CLOSE_BLOCK_PARAMS: 77,
            path: 78,
            dataName: 79,
            STRING: 80,
            NUMBER: 81,
            BOOLEAN: 82,
            UNDEFINED: 83,
            NULL: 84,
            DATA: 85,
            pathSegments: 86,
            SEP: 87,
            $accept: 0,
            $end: 1
          },
          terminals_: {
            2: "error",
            5: "EOF",
            14: "COMMENT",
            15: "CONTENT",
            18: "END_RAW_BLOCK",
            19: "OPEN_RAW_BLOCK",
            23: "CLOSE_RAW_BLOCK",
            29: "OPEN_BLOCK",
            33: "CLOSE",
            34: "OPEN_INVERSE",
            39: "OPEN_INVERSE_CHAIN",
            44: "INVERSE",
            47: "OPEN_ENDBLOCK",
            48: "OPEN",
            51: "OPEN_UNESCAPED",
            54: "CLOSE_UNESCAPED",
            55: "OPEN_PARTIAL",
            60: "OPEN_PARTIAL_BLOCK",
            65: "OPEN_SEXPR",
            68: "CLOSE_SEXPR",
            72: "ID",
            73: "EQUALS",
            75: "OPEN_BLOCK_PARAMS",
            77: "CLOSE_BLOCK_PARAMS",
            80: "STRING",
            81: "NUMBER",
            82: "BOOLEAN",
            83: "UNDEFINED",
            84: "NULL",
            85: "DATA",
            87: "SEP"
          },
          productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
          performAction: function (a, b, c, d, e, f, g) {
            var h = f.length - 1;
            switch (e) {
              case 1:
                return f[h - 1];
              case 2:
                this.$ = d.prepareProgram(f[h]);
                break;
              case 3:
                this.$ = f[h];
                break;
              case 4:
                this.$ = f[h];
                break;
              case 5:
                this.$ = f[h];
                break;
              case 6:
                this.$ = f[h];
                break;
              case 7:
                this.$ = f[h];
                break;
              case 8:
                this.$ = f[h];
                break;
              case 9:
                this.$ = {
                  type: "CommentStatement",
                  value: d.stripComment(f[h]),
                  strip: d.stripFlags(f[h], f[h]),
                  loc: d.locInfo(this._$)
                };
                break;
              case 10:
                this.$ = {
                  type: "ContentStatement",
                  original: f[h],
                  value: f[h],
                  loc: d.locInfo(this._$)
                };
                break;
              case 11:
                this.$ = d.prepareRawBlock(f[h - 2], f[h - 1], f[h], this._$);
                break;
              case 12:
                this.$ = {
                  path: f[h - 3],
                  params: f[h - 2],
                  hash: f[h - 1]
                };
                break;
              case 13:
                this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !1, this._$);
                break;
              case 14:
                this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !0, this._$);
                break;
              case 15:
                this.$ = {
                  open: f[h - 5],
                  path: f[h - 4],
                  params: f[h - 3],
                  hash: f[h - 2],
                  blockParams: f[h - 1],
                  strip: d.stripFlags(f[h - 5], f[h])
                };
                break;
              case 16:
                this.$ = {
                  path: f[h - 4],
                  params: f[h - 3],
                  hash: f[h - 2],
                  blockParams: f[h - 1],
                  strip: d.stripFlags(f[h - 5], f[h])
                };
                break;
              case 17:
                this.$ = {
                  path: f[h - 4],
                  params: f[h - 3],
                  hash: f[h - 2],
                  blockParams: f[h - 1],
                  strip: d.stripFlags(f[h - 5], f[h])
                };
                break;
              case 18:
                this.$ = {
                  strip: d.stripFlags(f[h - 1], f[h - 1]),
                  program: f[h]
                };
                break;
              case 19:
                var i = d.prepareBlock(f[h - 2], f[h - 1], f[h], f[h], !1, this._$),
                  j = d.prepareProgram([i], f[h - 1].loc);
                j.chained = !0, this.$ = {
                  strip: f[h - 2].strip,
                  program: j,
                  chain: !0
                };
                break;
              case 20:
                this.$ = f[h];
                break;
              case 21:
                this.$ = {
                  path: f[h - 1],
                  strip: d.stripFlags(f[h - 2], f[h])
                };
                break;
              case 22:
                this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                break;
              case 23:
                this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                break;
              case 24:
                this.$ = {
                  type: "PartialStatement",
                  name: f[h - 3],
                  params: f[h - 2],
                  hash: f[h - 1],
                  indent: "",
                  strip: d.stripFlags(f[h - 4], f[h]),
                  loc: d.locInfo(this._$)
                };
                break;
              case 25:
                this.$ = d.preparePartialBlock(f[h - 2], f[h - 1], f[h], this._$);
                break;
              case 26:
                this.$ = {
                  path: f[h - 3],
                  params: f[h - 2],
                  hash: f[h - 1],
                  strip: d.stripFlags(f[h - 4], f[h])
                };
                break;
              case 27:
                this.$ = f[h];
                break;
              case 28:
                this.$ = f[h];
                break;
              case 29:
                this.$ = {
                  type: "SubExpression",
                  path: f[h - 3],
                  params: f[h - 2],
                  hash: f[h - 1],
                  loc: d.locInfo(this._$)
                };
                break;
              case 30:
                this.$ = {
                  type: "Hash",
                  pairs: f[h],
                  loc: d.locInfo(this._$)
                };
                break;
              case 31:
                this.$ = {
                  type: "HashPair",
                  key: d.id(f[h - 2]),
                  value: f[h],
                  loc: d.locInfo(this._$)
                };
                break;
              case 32:
                this.$ = d.id(f[h - 1]);
                break;
              case 33:
                this.$ = f[h];
                break;
              case 34:
                this.$ = f[h];
                break;
              case 35:
                this.$ = {
                  type: "StringLiteral",
                  value: f[h],
                  original: f[h],
                  loc: d.locInfo(this._$)
                };
                break;
              case 36:
                this.$ = {
                  type: "NumberLiteral",
                  value: Number(f[h]),
                  original: Number(f[h]),
                  loc: d.locInfo(this._$)
                };
                break;
              case 37:
                this.$ = {
                  type: "BooleanLiteral",
                  value: "true" === f[h],
                  original: "true" === f[h],
                  loc: d.locInfo(this._$)
                };
                break;
              case 38:
                this.$ = {
                  type: "UndefinedLiteral",
                  original: void 0,
                  value: void 0,
                  loc: d.locInfo(this._$)
                };
                break;
              case 39:
                this.$ = {
                  type: "NullLiteral",
                  original: null,
                  value: null,
                  loc: d.locInfo(this._$)
                };
                break;
              case 40:
                this.$ = f[h];
                break;
              case 41:
                this.$ = f[h];
                break;
              case 42:
                this.$ = d.preparePath(!0, f[h], this._$);
                break;
              case 43:
                this.$ = d.preparePath(!1, f[h], this._$);
                break;
              case 44:
                f[h - 2].push({
                  part: d.id(f[h]),
                  original: f[h],
                  separator: f[h - 1]
                }), this.$ = f[h - 2];
                break;
              case 45:
                this.$ = [{
                  part: d.id(f[h]),
                  original: f[h]
                }];
                break;
              case 46:
                this.$ = [];
                break;
              case 47:
                f[h - 1].push(f[h]);
                break;
              case 48:
                this.$ = [];
                break;
              case 49:
                f[h - 1].push(f[h]);
                break;
              case 50:
                this.$ = [];
                break;
              case 51:
                f[h - 1].push(f[h]);
                break;
              case 58:
                this.$ = [];
                break;
              case 59:
                f[h - 1].push(f[h]);
                break;
              case 64:
                this.$ = [];
                break;
              case 65:
                f[h - 1].push(f[h]);
                break;
              case 70:
                this.$ = [];
                break;
              case 71:
                f[h - 1].push(f[h]);
                break;
              case 78:
                this.$ = [];
                break;
              case 79:
                f[h - 1].push(f[h]);
                break;
              case 82:
                this.$ = [];
                break;
              case 83:
                f[h - 1].push(f[h]);
                break;
              case 86:
                this.$ = [];
                break;
              case 87:
                f[h - 1].push(f[h]);
                break;
              case 90:
                this.$ = [];
                break;
              case 91:
                f[h - 1].push(f[h]);
                break;
              case 94:
                this.$ = [];
                break;
              case 95:
                f[h - 1].push(f[h]);
                break;
              case 98:
                this.$ = [f[h]];
                break;
              case 99:
                f[h - 1].push(f[h]);
                break;
              case 100:
                this.$ = [f[h]];
                break;
              case 101:
                f[h - 1].push(f[h]);
            }
          },
          table: [{
            3: 1,
            4: 2,
            5: [2, 46],
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            1: [3]
          }, {
            5: [1, 4]
          }, {
            5: [2, 2],
            7: 5,
            8: 6,
            9: 7,
            10: 8,
            11: 9,
            12: 10,
            13: 11,
            14: [1, 12],
            15: [1, 20],
            16: 17,
            19: [1, 23],
            24: 15,
            27: 16,
            29: [1, 21],
            34: [1, 22],
            39: [2, 2],
            44: [2, 2],
            47: [2, 2],
            48: [1, 13],
            51: [1, 14],
            55: [1, 18],
            59: 19,
            60: [1, 24]
          }, {
            1: [2, 1]
          }, {
            5: [2, 47],
            14: [2, 47],
            15: [2, 47],
            19: [2, 47],
            29: [2, 47],
            34: [2, 47],
            39: [2, 47],
            44: [2, 47],
            47: [2, 47],
            48: [2, 47],
            51: [2, 47],
            55: [2, 47],
            60: [2, 47]
          }, {
            5: [2, 3],
            14: [2, 3],
            15: [2, 3],
            19: [2, 3],
            29: [2, 3],
            34: [2, 3],
            39: [2, 3],
            44: [2, 3],
            47: [2, 3],
            48: [2, 3],
            51: [2, 3],
            55: [2, 3],
            60: [2, 3]
          }, {
            5: [2, 4],
            14: [2, 4],
            15: [2, 4],
            19: [2, 4],
            29: [2, 4],
            34: [2, 4],
            39: [2, 4],
            44: [2, 4],
            47: [2, 4],
            48: [2, 4],
            51: [2, 4],
            55: [2, 4],
            60: [2, 4]
          }, {
            5: [2, 5],
            14: [2, 5],
            15: [2, 5],
            19: [2, 5],
            29: [2, 5],
            34: [2, 5],
            39: [2, 5],
            44: [2, 5],
            47: [2, 5],
            48: [2, 5],
            51: [2, 5],
            55: [2, 5],
            60: [2, 5]
          }, {
            5: [2, 6],
            14: [2, 6],
            15: [2, 6],
            19: [2, 6],
            29: [2, 6],
            34: [2, 6],
            39: [2, 6],
            44: [2, 6],
            47: [2, 6],
            48: [2, 6],
            51: [2, 6],
            55: [2, 6],
            60: [2, 6]
          }, {
            5: [2, 7],
            14: [2, 7],
            15: [2, 7],
            19: [2, 7],
            29: [2, 7],
            34: [2, 7],
            39: [2, 7],
            44: [2, 7],
            47: [2, 7],
            48: [2, 7],
            51: [2, 7],
            55: [2, 7],
            60: [2, 7]
          }, {
            5: [2, 8],
            14: [2, 8],
            15: [2, 8],
            19: [2, 8],
            29: [2, 8],
            34: [2, 8],
            39: [2, 8],
            44: [2, 8],
            47: [2, 8],
            48: [2, 8],
            51: [2, 8],
            55: [2, 8],
            60: [2, 8]
          }, {
            5: [2, 9],
            14: [2, 9],
            15: [2, 9],
            19: [2, 9],
            29: [2, 9],
            34: [2, 9],
            39: [2, 9],
            44: [2, 9],
            47: [2, 9],
            48: [2, 9],
            51: [2, 9],
            55: [2, 9],
            60: [2, 9]
          }, {
            20: 25,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 36,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            4: 37,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            39: [2, 46],
            44: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            4: 38,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            44: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            15: [2, 48],
            17: 39,
            18: [2, 48]
          }, {
            20: 41,
            56: 40,
            64: 42,
            65: [1, 43],
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            4: 44,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            5: [2, 10],
            14: [2, 10],
            15: [2, 10],
            18: [2, 10],
            19: [2, 10],
            29: [2, 10],
            34: [2, 10],
            39: [2, 10],
            44: [2, 10],
            47: [2, 10],
            48: [2, 10],
            51: [2, 10],
            55: [2, 10],
            60: [2, 10]
          }, {
            20: 45,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 46,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 47,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 41,
            56: 48,
            64: 42,
            65: [1, 43],
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            33: [2, 78],
            49: 49,
            65: [2, 78],
            72: [2, 78],
            80: [2, 78],
            81: [2, 78],
            82: [2, 78],
            83: [2, 78],
            84: [2, 78],
            85: [2, 78]
          }, {
            23: [2, 33],
            33: [2, 33],
            54: [2, 33],
            65: [2, 33],
            68: [2, 33],
            72: [2, 33],
            75: [2, 33],
            80: [2, 33],
            81: [2, 33],
            82: [2, 33],
            83: [2, 33],
            84: [2, 33],
            85: [2, 33]
          }, {
            23: [2, 34],
            33: [2, 34],
            54: [2, 34],
            65: [2, 34],
            68: [2, 34],
            72: [2, 34],
            75: [2, 34],
            80: [2, 34],
            81: [2, 34],
            82: [2, 34],
            83: [2, 34],
            84: [2, 34],
            85: [2, 34]
          }, {
            23: [2, 35],
            33: [2, 35],
            54: [2, 35],
            65: [2, 35],
            68: [2, 35],
            72: [2, 35],
            75: [2, 35],
            80: [2, 35],
            81: [2, 35],
            82: [2, 35],
            83: [2, 35],
            84: [2, 35],
            85: [2, 35]
          }, {
            23: [2, 36],
            33: [2, 36],
            54: [2, 36],
            65: [2, 36],
            68: [2, 36],
            72: [2, 36],
            75: [2, 36],
            80: [2, 36],
            81: [2, 36],
            82: [2, 36],
            83: [2, 36],
            84: [2, 36],
            85: [2, 36]
          }, {
            23: [2, 37],
            33: [2, 37],
            54: [2, 37],
            65: [2, 37],
            68: [2, 37],
            72: [2, 37],
            75: [2, 37],
            80: [2, 37],
            81: [2, 37],
            82: [2, 37],
            83: [2, 37],
            84: [2, 37],
            85: [2, 37]
          }, {
            23: [2, 38],
            33: [2, 38],
            54: [2, 38],
            65: [2, 38],
            68: [2, 38],
            72: [2, 38],
            75: [2, 38],
            80: [2, 38],
            81: [2, 38],
            82: [2, 38],
            83: [2, 38],
            84: [2, 38],
            85: [2, 38]
          }, {
            23: [2, 39],
            33: [2, 39],
            54: [2, 39],
            65: [2, 39],
            68: [2, 39],
            72: [2, 39],
            75: [2, 39],
            80: [2, 39],
            81: [2, 39],
            82: [2, 39],
            83: [2, 39],
            84: [2, 39],
            85: [2, 39]
          }, {
            23: [2, 43],
            33: [2, 43],
            54: [2, 43],
            65: [2, 43],
            68: [2, 43],
            72: [2, 43],
            75: [2, 43],
            80: [2, 43],
            81: [2, 43],
            82: [2, 43],
            83: [2, 43],
            84: [2, 43],
            85: [2, 43],
            87: [1, 50]
          }, {
            72: [1, 35],
            86: 51
          }, {
            23: [2, 45],
            33: [2, 45],
            54: [2, 45],
            65: [2, 45],
            68: [2, 45],
            72: [2, 45],
            75: [2, 45],
            80: [2, 45],
            81: [2, 45],
            82: [2, 45],
            83: [2, 45],
            84: [2, 45],
            85: [2, 45],
            87: [2, 45]
          }, {
            52: 52,
            54: [2, 82],
            65: [2, 82],
            72: [2, 82],
            80: [2, 82],
            81: [2, 82],
            82: [2, 82],
            83: [2, 82],
            84: [2, 82],
            85: [2, 82]
          }, {
            25: 53,
            38: 55,
            39: [1, 57],
            43: 56,
            44: [1, 58],
            45: 54,
            47: [2, 54]
          }, {
            28: 59,
            43: 60,
            44: [1, 58],
            47: [2, 56]
          }, {
            13: 62,
            15: [1, 20],
            18: [1, 61]
          }, {
            33: [2, 86],
            57: 63,
            65: [2, 86],
            72: [2, 86],
            80: [2, 86],
            81: [2, 86],
            82: [2, 86],
            83: [2, 86],
            84: [2, 86],
            85: [2, 86]
          }, {
            33: [2, 40],
            65: [2, 40],
            72: [2, 40],
            80: [2, 40],
            81: [2, 40],
            82: [2, 40],
            83: [2, 40],
            84: [2, 40],
            85: [2, 40]
          }, {
            33: [2, 41],
            65: [2, 41],
            72: [2, 41],
            80: [2, 41],
            81: [2, 41],
            82: [2, 41],
            83: [2, 41],
            84: [2, 41],
            85: [2, 41]
          }, {
            20: 64,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            26: 65,
            47: [1, 66]
          }, {
            30: 67,
            33: [2, 58],
            65: [2, 58],
            72: [2, 58],
            75: [2, 58],
            80: [2, 58],
            81: [2, 58],
            82: [2, 58],
            83: [2, 58],
            84: [2, 58],
            85: [2, 58]
          }, {
            33: [2, 64],
            35: 68,
            65: [2, 64],
            72: [2, 64],
            75: [2, 64],
            80: [2, 64],
            81: [2, 64],
            82: [2, 64],
            83: [2, 64],
            84: [2, 64],
            85: [2, 64]
          }, {
            21: 69,
            23: [2, 50],
            65: [2, 50],
            72: [2, 50],
            80: [2, 50],
            81: [2, 50],
            82: [2, 50],
            83: [2, 50],
            84: [2, 50],
            85: [2, 50]
          }, {
            33: [2, 90],
            61: 70,
            65: [2, 90],
            72: [2, 90],
            80: [2, 90],
            81: [2, 90],
            82: [2, 90],
            83: [2, 90],
            84: [2, 90],
            85: [2, 90]
          }, {
            20: 74,
            33: [2, 80],
            50: 71,
            63: 72,
            64: 75,
            65: [1, 43],
            69: 73,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            72: [1, 79]
          }, {
            23: [2, 42],
            33: [2, 42],
            54: [2, 42],
            65: [2, 42],
            68: [2, 42],
            72: [2, 42],
            75: [2, 42],
            80: [2, 42],
            81: [2, 42],
            82: [2, 42],
            83: [2, 42],
            84: [2, 42],
            85: [2, 42],
            87: [1, 50]
          }, {
            20: 74,
            53: 80,
            54: [2, 84],
            63: 81,
            64: 75,
            65: [1, 43],
            69: 82,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            26: 83,
            47: [1, 66]
          }, {
            47: [2, 55]
          }, {
            4: 84,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            39: [2, 46],
            44: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            47: [2, 20]
          }, {
            20: 85,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            4: 86,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            26: 87,
            47: [1, 66]
          }, {
            47: [2, 57]
          }, {
            5: [2, 11],
            14: [2, 11],
            15: [2, 11],
            19: [2, 11],
            29: [2, 11],
            34: [2, 11],
            39: [2, 11],
            44: [2, 11],
            47: [2, 11],
            48: [2, 11],
            51: [2, 11],
            55: [2, 11],
            60: [2, 11]
          }, {
            15: [2, 49],
            18: [2, 49]
          }, {
            20: 74,
            33: [2, 88],
            58: 88,
            63: 89,
            64: 75,
            65: [1, 43],
            69: 90,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            65: [2, 94],
            66: 91,
            68: [2, 94],
            72: [2, 94],
            80: [2, 94],
            81: [2, 94],
            82: [2, 94],
            83: [2, 94],
            84: [2, 94],
            85: [2, 94]
          }, {
            5: [2, 25],
            14: [2, 25],
            15: [2, 25],
            19: [2, 25],
            29: [2, 25],
            34: [2, 25],
            39: [2, 25],
            44: [2, 25],
            47: [2, 25],
            48: [2, 25],
            51: [2, 25],
            55: [2, 25],
            60: [2, 25]
          }, {
            20: 92,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 74,
            31: 93,
            33: [2, 60],
            63: 94,
            64: 75,
            65: [1, 43],
            69: 95,
            70: 76,
            71: 77,
            72: [1, 78],
            75: [2, 60],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 74,
            33: [2, 66],
            36: 96,
            63: 97,
            64: 75,
            65: [1, 43],
            69: 98,
            70: 76,
            71: 77,
            72: [1, 78],
            75: [2, 66],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 74,
            22: 99,
            23: [2, 52],
            63: 100,
            64: 75,
            65: [1, 43],
            69: 101,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 74,
            33: [2, 92],
            62: 102,
            63: 103,
            64: 75,
            65: [1, 43],
            69: 104,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            33: [1, 105]
          }, {
            33: [2, 79],
            65: [2, 79],
            72: [2, 79],
            80: [2, 79],
            81: [2, 79],
            82: [2, 79],
            83: [2, 79],
            84: [2, 79],
            85: [2, 79]
          }, {
            33: [2, 81]
          }, {
            23: [2, 27],
            33: [2, 27],
            54: [2, 27],
            65: [2, 27],
            68: [2, 27],
            72: [2, 27],
            75: [2, 27],
            80: [2, 27],
            81: [2, 27],
            82: [2, 27],
            83: [2, 27],
            84: [2, 27],
            85: [2, 27]
          }, {
            23: [2, 28],
            33: [2, 28],
            54: [2, 28],
            65: [2, 28],
            68: [2, 28],
            72: [2, 28],
            75: [2, 28],
            80: [2, 28],
            81: [2, 28],
            82: [2, 28],
            83: [2, 28],
            84: [2, 28],
            85: [2, 28]
          }, {
            23: [2, 30],
            33: [2, 30],
            54: [2, 30],
            68: [2, 30],
            71: 106,
            72: [1, 107],
            75: [2, 30]
          }, {
            23: [2, 98],
            33: [2, 98],
            54: [2, 98],
            68: [2, 98],
            72: [2, 98],
            75: [2, 98]
          }, {
            23: [2, 45],
            33: [2, 45],
            54: [2, 45],
            65: [2, 45],
            68: [2, 45],
            72: [2, 45],
            73: [1, 108],
            75: [2, 45],
            80: [2, 45],
            81: [2, 45],
            82: [2, 45],
            83: [2, 45],
            84: [2, 45],
            85: [2, 45],
            87: [2, 45]
          }, {
            23: [2, 44],
            33: [2, 44],
            54: [2, 44],
            65: [2, 44],
            68: [2, 44],
            72: [2, 44],
            75: [2, 44],
            80: [2, 44],
            81: [2, 44],
            82: [2, 44],
            83: [2, 44],
            84: [2, 44],
            85: [2, 44],
            87: [2, 44]
          }, {
            54: [1, 109]
          }, {
            54: [2, 83],
            65: [2, 83],
            72: [2, 83],
            80: [2, 83],
            81: [2, 83],
            82: [2, 83],
            83: [2, 83],
            84: [2, 83],
            85: [2, 83]
          }, {
            54: [2, 85]
          }, {
            5: [2, 13],
            14: [2, 13],
            15: [2, 13],
            19: [2, 13],
            29: [2, 13],
            34: [2, 13],
            39: [2, 13],
            44: [2, 13],
            47: [2, 13],
            48: [2, 13],
            51: [2, 13],
            55: [2, 13],
            60: [2, 13]
          }, {
            38: 55,
            39: [1, 57],
            43: 56,
            44: [1, 58],
            45: 111,
            46: 110,
            47: [2, 76]
          }, {
            33: [2, 70],
            40: 112,
            65: [2, 70],
            72: [2, 70],
            75: [2, 70],
            80: [2, 70],
            81: [2, 70],
            82: [2, 70],
            83: [2, 70],
            84: [2, 70],
            85: [2, 70]
          }, {
            47: [2, 18]
          }, {
            5: [2, 14],
            14: [2, 14],
            15: [2, 14],
            19: [2, 14],
            29: [2, 14],
            34: [2, 14],
            39: [2, 14],
            44: [2, 14],
            47: [2, 14],
            48: [2, 14],
            51: [2, 14],
            55: [2, 14],
            60: [2, 14]
          }, {
            33: [1, 113]
          }, {
            33: [2, 87],
            65: [2, 87],
            72: [2, 87],
            80: [2, 87],
            81: [2, 87],
            82: [2, 87],
            83: [2, 87],
            84: [2, 87],
            85: [2, 87]
          }, {
            33: [2, 89]
          }, {
            20: 74,
            63: 115,
            64: 75,
            65: [1, 43],
            67: 114,
            68: [2, 96],
            69: 116,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            33: [1, 117]
          }, {
            32: 118,
            33: [2, 62],
            74: 119,
            75: [1, 120]
          }, {
            33: [2, 59],
            65: [2, 59],
            72: [2, 59],
            75: [2, 59],
            80: [2, 59],
            81: [2, 59],
            82: [2, 59],
            83: [2, 59],
            84: [2, 59],
            85: [2, 59]
          }, {
            33: [2, 61],
            75: [2, 61]
          }, {
            33: [2, 68],
            37: 121,
            74: 122,
            75: [1, 120]
          }, {
            33: [2, 65],
            65: [2, 65],
            72: [2, 65],
            75: [2, 65],
            80: [2, 65],
            81: [2, 65],
            82: [2, 65],
            83: [2, 65],
            84: [2, 65],
            85: [2, 65]
          }, {
            33: [2, 67],
            75: [2, 67]
          }, {
            23: [1, 123]
          }, {
            23: [2, 51],
            65: [2, 51],
            72: [2, 51],
            80: [2, 51],
            81: [2, 51],
            82: [2, 51],
            83: [2, 51],
            84: [2, 51],
            85: [2, 51]
          }, {
            23: [2, 53]
          }, {
            33: [1, 124]
          }, {
            33: [2, 91],
            65: [2, 91],
            72: [2, 91],
            80: [2, 91],
            81: [2, 91],
            82: [2, 91],
            83: [2, 91],
            84: [2, 91],
            85: [2, 91]
          }, {
            33: [2, 93]
          }, {
            5: [2, 22],
            14: [2, 22],
            15: [2, 22],
            19: [2, 22],
            29: [2, 22],
            34: [2, 22],
            39: [2, 22],
            44: [2, 22],
            47: [2, 22],
            48: [2, 22],
            51: [2, 22],
            55: [2, 22],
            60: [2, 22]
          }, {
            23: [2, 99],
            33: [2, 99],
            54: [2, 99],
            68: [2, 99],
            72: [2, 99],
            75: [2, 99]
          }, {
            73: [1, 108]
          }, {
            20: 74,
            63: 125,
            64: 75,
            65: [1, 43],
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            5: [2, 23],
            14: [2, 23],
            15: [2, 23],
            19: [2, 23],
            29: [2, 23],
            34: [2, 23],
            39: [2, 23],
            44: [2, 23],
            47: [2, 23],
            48: [2, 23],
            51: [2, 23],
            55: [2, 23],
            60: [2, 23]
          }, {
            47: [2, 19]
          }, {
            47: [2, 77]
          }, {
            20: 74,
            33: [2, 72],
            41: 126,
            63: 127,
            64: 75,
            65: [1, 43],
            69: 128,
            70: 76,
            71: 77,
            72: [1, 78],
            75: [2, 72],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            5: [2, 24],
            14: [2, 24],
            15: [2, 24],
            19: [2, 24],
            29: [2, 24],
            34: [2, 24],
            39: [2, 24],
            44: [2, 24],
            47: [2, 24],
            48: [2, 24],
            51: [2, 24],
            55: [2, 24],
            60: [2, 24]
          }, {
            68: [1, 129]
          }, {
            65: [2, 95],
            68: [2, 95],
            72: [2, 95],
            80: [2, 95],
            81: [2, 95],
            82: [2, 95],
            83: [2, 95],
            84: [2, 95],
            85: [2, 95]
          }, {
            68: [2, 97]
          }, {
            5: [2, 21],
            14: [2, 21],
            15: [2, 21],
            19: [2, 21],
            29: [2, 21],
            34: [2, 21],
            39: [2, 21],
            44: [2, 21],
            47: [2, 21],
            48: [2, 21],
            51: [2, 21],
            55: [2, 21],
            60: [2, 21]
          }, {
            33: [1, 130]
          }, {
            33: [2, 63]
          }, {
            72: [1, 132],
            76: 131
          }, {
            33: [1, 133]
          }, {
            33: [2, 69]
          }, {
            15: [2, 12],
            18: [2, 12]
          }, {
            14: [2, 26],
            15: [2, 26],
            19: [2, 26],
            29: [2, 26],
            34: [2, 26],
            47: [2, 26],
            48: [2, 26],
            51: [2, 26],
            55: [2, 26],
            60: [2, 26]
          }, {
            23: [2, 31],
            33: [2, 31],
            54: [2, 31],
            68: [2, 31],
            72: [2, 31],
            75: [2, 31]
          }, {
            33: [2, 74],
            42: 134,
            74: 135,
            75: [1, 120]
          }, {
            33: [2, 71],
            65: [2, 71],
            72: [2, 71],
            75: [2, 71],
            80: [2, 71],
            81: [2, 71],
            82: [2, 71],
            83: [2, 71],
            84: [2, 71],
            85: [2, 71]
          }, {
            33: [2, 73],
            75: [2, 73]
          }, {
            23: [2, 29],
            33: [2, 29],
            54: [2, 29],
            65: [2, 29],
            68: [2, 29],
            72: [2, 29],
            75: [2, 29],
            80: [2, 29],
            81: [2, 29],
            82: [2, 29],
            83: [2, 29],
            84: [2, 29],
            85: [2, 29]
          }, {
            14: [2, 15],
            15: [2, 15],
            19: [2, 15],
            29: [2, 15],
            34: [2, 15],
            39: [2, 15],
            44: [2, 15],
            47: [2, 15],
            48: [2, 15],
            51: [2, 15],
            55: [2, 15],
            60: [2, 15]
          }, {
            72: [1, 137],
            77: [1, 136]
          }, {
            72: [2, 100],
            77: [2, 100]
          }, {
            14: [2, 16],
            15: [2, 16],
            19: [2, 16],
            29: [2, 16],
            34: [2, 16],
            44: [2, 16],
            47: [2, 16],
            48: [2, 16],
            51: [2, 16],
            55: [2, 16],
            60: [2, 16]
          }, {
            33: [1, 138]
          }, {
            33: [2, 75]
          }, {
            33: [2, 32]
          }, {
            72: [2, 101],
            77: [2, 101]
          }, {
            14: [2, 17],
            15: [2, 17],
            19: [2, 17],
            29: [2, 17],
            34: [2, 17],
            39: [2, 17],
            44: [2, 17],
            47: [2, 17],
            48: [2, 17],
            51: [2, 17],
            55: [2, 17],
            60: [2, 17]
          }],
          defaultActions: {
            4: [2, 1],
            54: [2, 55],
            56: [2, 20],
            60: [2, 57],
            73: [2, 81],
            82: [2, 85],
            86: [2, 18],
            90: [2, 89],
            101: [2, 53],
            104: [2, 93],
            110: [2, 19],
            111: [2, 77],
            116: [2, 97],
            119: [2, 63],
            122: [2, 69],
            135: [2, 75],
            136: [2, 32]
          },
          parseError: function (a, b) {
            throw new Error(a);
          },
          parse: function (a) {
            function b() {
              var a;
              return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a;
            }
            var c = this,
              d = [0],
              e = [null],
              f = [],
              g = this.table,
              h = "",
              i = 0,
              j = 0,
              k = 0;
            this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
            var l = this.lexer.yylloc;
            f.push(l);
            var m = this.lexer.options && this.lexer.options.ranges;
            "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
            for (var n, o, p, q, r, s, t, u, v, w = {};;) {
              if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : (null !== n && "undefined" != typeof n || (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                var x = "";
                if (!k) {
                  v = [];
                  for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                  x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, {
                    text: this.lexer.match,
                    token: this.terminals_[n] || n,
                    line: this.lexer.yylineno,
                    loc: l,
                    expected: v
                  });
                }
              }
              if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
              switch (q[0]) {
                case 1:
                  d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                  break;
                case 2:
                  if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {
                    first_line: f[f.length - (t || 1)].first_line,
                    last_line: f[f.length - 1].last_line,
                    first_column: f[f.length - (t || 1)].first_column,
                    last_column: f[f.length - 1].last_column
                  }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;
                  t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                  break;
                case 3:
                  return !0;
              }
            }
            return !0;
          }
        },
        c = function () {
          var a = {
            EOF: 1,
            parseError: function (a, b) {
              if (!this.yy.parser) throw new Error(a);
              this.yy.parser.parseError(a, b);
            },
            setInput: function (a) {
              return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                first_line: 1,
                first_column: 0,
                last_line: 1,
                last_column: 0
              }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
            },
            input: function () {
              var a = this._input[0];
              this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
              var b = a.match(/(?:\r\n?|\n).*/g);
              return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a;
            },
            unput: function (a) {
              var b = a.length,
                c = a.split(/(?:\r\n?|\n)/g);
              this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
              var d = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
              var e = this.yylloc.range;
              return this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
              }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this;
            },
            more: function () {
              return this._more = !0, this;
            },
            less: function (a) {
              this.unput(this.match.slice(a));
            },
            pastInput: function () {
              var a = this.matched.substr(0, this.matched.length - this.match.length);
              return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function () {
              var a = this.match;
              return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function () {
              var a = this.pastInput(),
                b = new Array(a.length + 1).join("-");
              return a + this.upcomingInput() + "\n" + b + "^";
            },
            next: function () {
              if (this.done) return this.EOF;
              this._input || (this.done = !0);
              var a, b, c, d, e;
              this._more || (this.yytext = "", this.match = "");
              for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++);
              return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
              }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
              });
            },
            lex: function () {
              var a = this.next();
              return "undefined" != typeof a ? a : this.lex();
            },
            begin: function (a) {
              this.conditionStack.push(a);
            },
            popState: function () {
              return this.conditionStack.pop();
            },
            _currentRules: function () {
              return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function () {
              return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function (a) {
              this.begin(a);
            }
          };
          return a.options = {}, a.performAction = function (a, b, c, d) {
            function e(a, c) {
              return b.yytext = b.yytext.substring(a, b.yyleng - c + a);
            }
            switch (c) {
              case 0:
                if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 15;
                break;
              case 1:
                return 15;
              case 2:
                return this.popState(), 15;
              case 3:
                return this.begin("raw"), 15;
              case 4:
                return this.popState(), "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : (e(5, 9), "END_RAW_BLOCK");
              case 5:
                return 15;
              case 6:
                return this.popState(), 14;
              case 7:
                return 65;
              case 8:
                return 68;
              case 9:
                return 19;
              case 10:
                return this.popState(), this.begin("raw"), 23;
              case 11:
                return 55;
              case 12:
                return 60;
              case 13:
                return 29;
              case 14:
                return 47;
              case 15:
                return this.popState(), 44;
              case 16:
                return this.popState(), 44;
              case 17:
                return 34;
              case 18:
                return 39;
              case 19:
                return 51;
              case 20:
                return 48;
              case 21:
                this.unput(b.yytext), this.popState(), this.begin("com");
                break;
              case 22:
                return this.popState(), 14;
              case 23:
                return 48;
              case 24:
                return 73;
              case 25:
                return 72;
              case 26:
                return 72;
              case 27:
                return 87;
              case 28:
                break;
              case 29:
                return this.popState(), 54;
              case 30:
                return this.popState(), 33;
              case 31:
                return b.yytext = e(1, 2).replace(/\\"/g, '"'), 80;
              case 32:
                return b.yytext = e(1, 2).replace(/\\'/g, "'"), 80;
              case 33:
                return 85;
              case 34:
                return 82;
              case 35:
                return 82;
              case 36:
                return 83;
              case 37:
                return 84;
              case 38:
                return 81;
              case 39:
                return 75;
              case 40:
                return 77;
              case 41:
                return 72;
              case 42:
                return b.yytext = b.yytext.replace(/\\([\\\]])/g, "$1"), 72;
              case 43:
                return "INVALID";
              case 44:
                return 5;
            }
          }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], a.conditions = {
            mu: {
              rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
              inclusive: !1
            },
            emu: {
              rules: [2],
              inclusive: !1
            },
            com: {
              rules: [6],
              inclusive: !1
            },
            raw: {
              rules: [3, 4, 5],
              inclusive: !1
            },
            INITIAL: {
              rules: [0, 1, 44],
              inclusive: !0
            }
          }, a;
        }();
      return b.lexer = c, a.prototype = b, b.Parser = a, new a();
    }();
    b["default"] = c, a.exports = b["default"];
  }, function (a, b, c) {
    "use strict";

    function d() {
      var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
      this.options = a;
    }
    function e(a, b, c) {
      void 0 === b && (b = a.length);
      var d = a[b - 1],
        e = a[b - 2];
      return d ? "ContentStatement" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0 : c;
    }
    function f(a, b, c) {
      void 0 === b && (b = -1);
      var d = a[b + 1],
        e = a[b + 2];
      return d ? "ContentStatement" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0 : c;
    }
    function g(a, b, c) {
      var d = a[null == b ? 0 : b + 1];
      if (d && "ContentStatement" === d.type && (c || !d.rightStripped)) {
        var e = d.value;
        d.value = d.value.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d.rightStripped = d.value !== e;
      }
    }
    function h(a, b, c) {
      var d = a[null == b ? a.length - 1 : b - 1];
      if (d && "ContentStatement" === d.type && (c || !d.leftStripped)) {
        var e = d.value;
        return d.value = d.value.replace(c ? /\s+$/ : /[ \t]+$/, ""), d.leftStripped = d.value !== e, d.leftStripped;
      }
    }
    var i = c(1)["default"];
    b.__esModule = !0;
    var j = c(88),
      k = i(j);
    d.prototype = new k["default"](), d.prototype.Program = function (a) {
      var b = !this.options.ignoreStandalone,
        c = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var d = a.body, i = 0, j = d.length; i < j; i++) {
        var k = d[i],
          l = this.accept(k);
        if (l) {
          var m = e(d, i, c),
            n = f(d, i, c),
            o = l.openStandalone && m,
            p = l.closeStandalone && n,
            q = l.inlineStandalone && m && n;
          l.close && g(d, i, !0), l.open && h(d, i, !0), b && q && (g(d, i), h(d, i) && "PartialStatement" === k.type && (k.indent = /([ \t]+$)/.exec(d[i - 1].original)[1])), b && o && (g((k.program || k.inverse).body), h(d, i)), b && p && (g(d, i), h((k.inverse || k.program).body));
        }
      }
      return a;
    }, d.prototype.BlockStatement = d.prototype.DecoratorBlock = d.prototype.PartialBlockStatement = function (a) {
      this.accept(a.program), this.accept(a.inverse);
      var b = a.program || a.inverse,
        c = a.program && a.inverse,
        d = c,
        i = c;
      if (c && c.chained) for (d = c.body[0].program; i.chained;) i = i.body[i.body.length - 1].program;
      var j = {
        open: a.openStrip.open,
        close: a.closeStrip.close,
        openStandalone: f(b.body),
        closeStandalone: e((d || b).body)
      };
      if (a.openStrip.close && g(b.body, null, !0), c) {
        var k = a.inverseStrip;
        k.open && h(b.body, null, !0), k.close && g(d.body, null, !0), a.closeStrip.open && h(i.body, null, !0), !this.options.ignoreStandalone && e(b.body) && f(d.body) && (h(b.body), g(d.body));
      } else a.closeStrip.open && h(b.body, null, !0);
      return j;
    }, d.prototype.Decorator = d.prototype.MustacheStatement = function (a) {
      return a.strip;
    }, d.prototype.PartialStatement = d.prototype.CommentStatement = function (a) {
      var b = a.strip || {};
      return {
        inlineStandalone: !0,
        open: b.open,
        close: b.close
      };
    }, b["default"] = d, a.exports = b["default"];
  }, function (a, b, c) {
    "use strict";

    function d() {
      this.parents = [];
    }
    function e(a) {
      this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash");
    }
    function f(a) {
      e.call(this, a), this.acceptKey(a, "program"), this.acceptKey(a, "inverse");
    }
    function g(a) {
      this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash");
    }
    var h = c(1)["default"];
    b.__esModule = !0;
    var i = c(6),
      j = h(i);
    d.prototype = {
      constructor: d,
      mutating: !1,
      acceptKey: function (a, b) {
        var c = this.accept(a[b]);
        if (this.mutating) {
          if (c && !d.prototype[c.type]) throw new j["default"]('Unexpected node type "' + c.type + '" found when accepting ' + b + " on " + a.type);
          a[b] = c;
        }
      },
      acceptRequired: function (a, b) {
        if (this.acceptKey(a, b), !a[b]) throw new j["default"](a.type + " requires " + b);
      },
      acceptArray: function (a) {
        for (var b = 0, c = a.length; b < c; b++) this.acceptKey(a, b), a[b] || (a.splice(b, 1), b--, c--);
      },
      accept: function (a) {
        if (a) {
          if (!this[a.type]) throw new j["default"]("Unknown type: " + a.type, a);
          this.current && this.parents.unshift(this.current), this.current = a;
          var b = this[a.type](a);
          return this.current = this.parents.shift(), !this.mutating || b ? b : b !== !1 ? a : void 0;
        }
      },
      Program: function (a) {
        this.acceptArray(a.body);
      },
      MustacheStatement: e,
      Decorator: e,
      BlockStatement: f,
      DecoratorBlock: f,
      PartialStatement: g,
      PartialBlockStatement: function (a) {
        g.call(this, a), this.acceptKey(a, "program");
      },
      ContentStatement: function () {},
      CommentStatement: function () {},
      SubExpression: e,
      PathExpression: function () {},
      StringLiteral: function () {},
      NumberLiteral: function () {},
      BooleanLiteral: function () {},
      UndefinedLiteral: function () {},
      NullLiteral: function () {},
      Hash: function (a) {
        this.acceptArray(a.pairs);
      },
      HashPair: function (a) {
        this.acceptRequired(a, "value");
      }
    }, b["default"] = d, a.exports = b["default"];
  }, function (a, b, c) {
    "use strict";

    function d(a, b) {
      if (b = b.path ? b.path.original : b, a.path.original !== b) {
        var c = {
          loc: a.path.loc
        };
        throw new q["default"](a.path.original + " doesn't match " + b, c);
      }
    }
    function e(a, b) {
      this.source = a, this.start = {
        line: b.first_line,
        column: b.first_column
      }, this.end = {
        line: b.last_line,
        column: b.last_column
      };
    }
    function f(a) {
      return /^\[.*\]$/.test(a) ? a.substring(1, a.length - 1) : a;
    }
    function g(a, b) {
      return {
        open: "~" === a.charAt(2),
        close: "~" === b.charAt(b.length - 3)
      };
    }
    function h(a) {
      return a.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
    }
    function i(a, b, c) {
      c = this.locInfo(c);
      for (var d = a ? "@" : "", e = [], f = 0, g = 0, h = b.length; g < h; g++) {
        var i = b[g].part,
          j = b[g].original !== i;
        if (d += (b[g].separator || "") + i, j || ".." !== i && "." !== i && "this" !== i) e.push(i);else {
          if (e.length > 0) throw new q["default"]("Invalid path: " + d, {
            loc: c
          });
          ".." === i && f++;
        }
      }
      return {
        type: "PathExpression",
        data: a,
        depth: f,
        parts: e,
        original: d,
        loc: c
      };
    }
    function j(a, b, c, d, e, f) {
      var g = d.charAt(3) || d.charAt(2),
        h = "{" !== g && "&" !== g,
        i = /\*/.test(d);
      return {
        type: i ? "Decorator" : "MustacheStatement",
        path: a,
        params: b,
        hash: c,
        escaped: h,
        strip: e,
        loc: this.locInfo(f)
      };
    }
    function k(a, b, c, e) {
      d(a, c), e = this.locInfo(e);
      var f = {
        type: "Program",
        body: b,
        strip: {},
        loc: e
      };
      return {
        type: "BlockStatement",
        path: a.path,
        params: a.params,
        hash: a.hash,
        program: f,
        openStrip: {},
        inverseStrip: {},
        closeStrip: {},
        loc: e
      };
    }
    function l(a, b, c, e, f, g) {
      e && e.path && d(a, e);
      var h = /\*/.test(a.open);
      b.blockParams = a.blockParams;
      var i = void 0,
        j = void 0;
      if (c) {
        if (h) throw new q["default"]("Unexpected inverse block on decorator", c);
        c.chain && (c.program.body[0].closeStrip = e.strip), j = c.strip, i = c.program;
      }
      return f && (f = i, i = b, b = f), {
        type: h ? "DecoratorBlock" : "BlockStatement",
        path: a.path,
        params: a.params,
        hash: a.hash,
        program: b,
        inverse: i,
        openStrip: a.strip,
        inverseStrip: j,
        closeStrip: e && e.strip,
        loc: this.locInfo(g)
      };
    }
    function m(a, b) {
      if (!b && a.length) {
        var c = a[0].loc,
          d = a[a.length - 1].loc;
        c && d && (b = {
          source: c.source,
          start: {
            line: c.start.line,
            column: c.start.column
          },
          end: {
            line: d.end.line,
            column: d.end.column
          }
        });
      }
      return {
        type: "Program",
        body: a,
        strip: {},
        loc: b
      };
    }
    function n(a, b, c, e) {
      return d(a, c), {
        type: "PartialBlockStatement",
        name: a.path,
        params: a.params,
        hash: a.hash,
        program: b,
        openStrip: a.strip,
        closeStrip: c && c.strip,
        loc: this.locInfo(e)
      };
    }
    var o = c(1)["default"];
    b.__esModule = !0, b.SourceLocation = e, b.id = f, b.stripFlags = g, b.stripComment = h, b.preparePath = i, b.prepareMustache = j, b.prepareRawBlock = k, b.prepareBlock = l, b.prepareProgram = m, b.preparePartialBlock = n;
    var p = c(6),
      q = o(p);
  }, function (a, b, c) {
    "use strict";

    function d() {}
    function e(a, b, c) {
      if (null == a || "string" != typeof a && "Program" !== a.type) throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
      b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
      var d = c.parse(a, b),
        e = new c.Compiler().compile(d, b);
      return new c.JavaScriptCompiler().compile(e, b);
    }
    function f(a, b, c) {
      function d() {
        var d = c.parse(a, b),
          e = new c.Compiler().compile(d, b),
          f = new c.JavaScriptCompiler().compile(e, b, void 0, !0);
        return c.template(f);
      }
      function e(a, b) {
        return f || (f = d()), f.call(this, a, b);
      }
      if (void 0 === b && (b = {}), null == a || "string" != typeof a && "Program" !== a.type) throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
      b = m.extend({}, b), "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
      var f = void 0;
      return e._setup = function (a) {
        return f || (f = d()), f._setup(a);
      }, e._child = function (a, b, c, e) {
        return f || (f = d()), f._child(a, b, c, e);
      }, e;
    }
    function g(a, b) {
      if (a === b) return !0;
      if (m.isArray(a) && m.isArray(b) && a.length === b.length) {
        for (var c = 0; c < a.length; c++) if (!g(a[c], b[c])) return !1;
        return !0;
      }
    }
    function h(a) {
      if (!a.path.parts) {
        var b = a.path;
        a.path = {
          type: "PathExpression",
          data: !1,
          depth: 0,
          parts: [b.original + ""],
          original: b.original + "",
          loc: b.loc
        };
      }
    }
    var i = c(74)["default"],
      j = c(1)["default"];
    b.__esModule = !0, b.Compiler = d, b.precompile = e, b.compile = f;
    var k = c(6),
      l = j(k),
      m = c(5),
      n = c(84),
      o = j(n),
      p = [].slice;
    d.prototype = {
      compiler: d,
      equals: function (a) {
        var b = this.opcodes.length;
        if (a.opcodes.length !== b) return !1;
        for (var c = 0; c < b; c++) {
          var d = this.opcodes[c],
            e = a.opcodes[c];
          if (d.opcode !== e.opcode || !g(d.args, e.args)) return !1;
        }
        b = this.children.length;
        for (var c = 0; c < b; c++) if (!this.children[c].equals(a.children[c])) return !1;
        return !0;
      },
      guid: 0,
      compile: function (a, b) {
        return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = b, this.stringParams = b.stringParams, this.trackIds = b.trackIds, b.blockParams = b.blockParams || [], b.knownHelpers = m.extend(i(null), {
          helperMissing: !0,
          blockHelperMissing: !0,
          each: !0,
          "if": !0,
          unless: !0,
          "with": !0,
          log: !0,
          lookup: !0
        }, b.knownHelpers), this.accept(a);
      },
      compileProgram: function (a) {
        var b = new this.compiler(),
          c = b.compile(a, this.options),
          d = this.guid++;
        return this.usePartial = this.usePartial || c.usePartial, this.children[d] = c, this.useDepths = this.useDepths || c.useDepths, d;
      },
      accept: function (a) {
        if (!this[a.type]) throw new l["default"]("Unknown type: " + a.type, a);
        this.sourceNode.unshift(a);
        var b = this[a.type](a);
        return this.sourceNode.shift(), b;
      },
      Program: function (a) {
        this.options.blockParams.unshift(a.blockParams);
        for (var b = a.body, c = b.length, d = 0; d < c; d++) this.accept(b[d]);
        return this.options.blockParams.shift(), this.isSimple = 1 === c, this.blockParams = a.blockParams ? a.blockParams.length : 0, this;
      },
      BlockStatement: function (a) {
        h(a);
        var b = a.program,
          c = a.inverse;
        b = b && this.compileProgram(b), c = c && this.compileProgram(c);
        var d = this.classifySexpr(a);
        "helper" === d ? this.helperSexpr(a, b, c) : "simple" === d ? (this.simpleSexpr(a), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("blockValue", a.path.original)) : (this.ambiguousSexpr(a, b, c), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
      },
      DecoratorBlock: function (a) {
        var b = a.program && this.compileProgram(a.program),
          c = this.setupFullMustacheParams(a, b, void 0),
          d = a.path;
        this.useDecorators = !0, this.opcode("registerDecorator", c.length, d.original);
      },
      PartialStatement: function (a) {
        this.usePartial = !0;
        var b = a.program;
        b && (b = this.compileProgram(a.program));
        var c = a.params;
        if (c.length > 1) throw new l["default"]("Unsupported number of partial arguments: " + c.length, a);
        c.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : c.push({
          type: "PathExpression",
          parts: [],
          depth: 0
        }));
        var d = a.name.original,
          e = "SubExpression" === a.name.type;
        e && this.accept(a.name), this.setupFullMustacheParams(a, b, void 0, !0);
        var f = a.indent || "";
        this.options.preventIndent && f && (this.opcode("appendContent", f), f = ""), this.opcode("invokePartial", e, d, f), this.opcode("append");
      },
      PartialBlockStatement: function (a) {
        this.PartialStatement(a);
      },
      MustacheStatement: function (a) {
        this.SubExpression(a), a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
      },
      Decorator: function (a) {
        this.DecoratorBlock(a);
      },
      ContentStatement: function (a) {
        a.value && this.opcode("appendContent", a.value);
      },
      CommentStatement: function () {},
      SubExpression: function (a) {
        h(a);
        var b = this.classifySexpr(a);
        "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a);
      },
      ambiguousSexpr: function (a, b, c) {
        var d = a.path,
          e = d.parts[0],
          f = null != b || null != c;
        this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), d.strict = !0, this.accept(d), this.opcode("invokeAmbiguous", e, f);
      },
      simpleSexpr: function (a) {
        var b = a.path;
        b.strict = !0, this.accept(b), this.opcode("resolvePossibleLambda");
      },
      helperSexpr: function (a, b, c) {
        var d = this.setupFullMustacheParams(a, b, c),
          e = a.path,
          f = e.parts[0];
        if (this.options.knownHelpers[f]) this.opcode("invokeKnownHelper", d.length, f);else {
          if (this.options.knownHelpersOnly) throw new l["default"]("You specified knownHelpersOnly, but used the unknown helper " + f, a);
          e.strict = !0, e.falsy = !0, this.accept(e), this.opcode("invokeHelper", d.length, e.original, o["default"].helpers.simpleId(e));
        }
      },
      PathExpression: function (a) {
        this.addDepth(a.depth), this.opcode("getContext", a.depth);
        var b = a.parts[0],
          c = o["default"].helpers.scopedId(a),
          d = !a.depth && !c && this.blockParamIndex(b);
        d ? this.opcode("lookupBlockParam", d, a.parts) : b ? a.data ? (this.options.data = !0, this.opcode("lookupData", a.depth, a.parts, a.strict)) : this.opcode("lookupOnContext", a.parts, a.falsy, a.strict, c) : this.opcode("pushContext");
      },
      StringLiteral: function (a) {
        this.opcode("pushString", a.value);
      },
      NumberLiteral: function (a) {
        this.opcode("pushLiteral", a.value);
      },
      BooleanLiteral: function (a) {
        this.opcode("pushLiteral", a.value);
      },
      UndefinedLiteral: function () {
        this.opcode("pushLiteral", "undefined");
      },
      NullLiteral: function () {
        this.opcode("pushLiteral", "null");
      },
      Hash: function (a) {
        var b = a.pairs,
          c = 0,
          d = b.length;
        for (this.opcode("pushHash"); c < d; c++) this.pushParam(b[c].value);
        for (; c--;) this.opcode("assignToHash", b[c].key);
        this.opcode("popHash");
      },
      opcode: function (a) {
        this.opcodes.push({
          opcode: a,
          args: p.call(arguments, 1),
          loc: this.sourceNode[0].loc
        });
      },
      addDepth: function (a) {
        a && (this.useDepths = !0);
      },
      classifySexpr: function (a) {
        var b = o["default"].helpers.simpleId(a.path),
          c = b && !!this.blockParamIndex(a.path.parts[0]),
          d = !c && o["default"].helpers.helperExpression(a),
          e = !c && (d || b);
        if (e && !d) {
          var f = a.path.parts[0],
            g = this.options;
          g.knownHelpers[f] ? d = !0 : g.knownHelpersOnly && (e = !1);
        }
        return d ? "helper" : e ? "ambiguous" : "simple";
      },
      pushParams: function (a) {
        for (var b = 0, c = a.length; b < c; b++) this.pushParam(a[b]);
      },
      pushParam: function (a) {
        var b = null != a.value ? a.value : a.original || "";
        if (this.stringParams) b.replace && (b = b.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), a.depth && this.addDepth(a.depth), this.opcode("getContext", a.depth || 0), this.opcode("pushStringParam", b, a.type), "SubExpression" === a.type && this.accept(a);else {
          if (this.trackIds) {
            var c = void 0;
            if (!a.parts || o["default"].helpers.scopedId(a) || a.depth || (c = this.blockParamIndex(a.parts[0])), c) {
              var d = a.parts.slice(1).join(".");
              this.opcode("pushId", "BlockParam", c, d);
            } else b = a.original || b, b.replace && (b = b.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", a.type, b);
          }
          this.accept(a);
        }
      },
      setupFullMustacheParams: function (a, b, c, d) {
        var e = a.params;
        return this.pushParams(e), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.accept(a.hash) : this.opcode("emptyHash", d), e;
      },
      blockParamIndex: function (a) {
        for (var b = 0, c = this.options.blockParams.length; b < c; b++) {
          var d = this.options.blockParams[b],
            e = d && m.indexOf(d, a);
          if (d && e >= 0) return [b, e];
        }
      }
    };
  }, function (a, b, c) {
    "use strict";

    function d(a) {
      this.value = a;
    }
    function e() {}
    function f(a, b, c, d, e) {
      var f = b.popStack(),
        g = c.length;
      for (a && g--; d < g; d++) f = b.nameLookup(f, c[d], e);
      return a ? [b.aliasable("container.strict"), "(", f, ", ", b.quotedString(c[d]), ", ", JSON.stringify(b.source.currentLocation), " )"] : f;
    }
    var g = c(60)["default"],
      h = c(1)["default"];
    b.__esModule = !0;
    var i = c(4),
      j = c(6),
      k = h(j),
      l = c(5),
      m = c(92),
      n = h(m);
    e.prototype = {
      nameLookup: function (a, b) {
        return this.internalNameLookup(a, b);
      },
      depthedLookup: function (a) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(a), ")"];
      },
      compilerInfo: function () {
        var a = i.COMPILER_REVISION,
          b = i.REVISION_CHANGES[a];
        return [a, b];
      },
      appendToBuffer: function (a, b, c) {
        return l.isArray(a) || (a = [a]), a = this.source.wrap(a, b), this.environment.isSimple ? ["return ", a, ";"] : c ? ["buffer += ", a, ";"] : (a.appendToBuffer = !0, a);
      },
      initializeBuffer: function () {
        return this.quotedString("");
      },
      internalNameLookup: function (a, b) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", a, ",", JSON.stringify(b), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function (a, b, c, d) {
        this.environment = a, this.options = b, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !d, this.name = this.environment.name, this.isChild = !!c, this.context = c || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
          list: []
        }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(a, b), this.useDepths = this.useDepths || a.useDepths || a.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || a.useBlockParams;
        var e = a.opcodes,
          f = void 0,
          g = void 0,
          h = void 0,
          i = void 0;
        for (h = 0, i = e.length; h < i; h++) f = e[h], this.source.currentLocation = f.loc, g = g || f.loc, this[f.opcode].apply(this, f.args);
        if (this.source.currentLocation = g, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new k["default"]("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), ";\n"]), this.decorators.push("return fn;"), d ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), this.decorators.push("}\n"), this.decorators = this.decorators.merge()));
        var j = this.createFunctionContext(d);
        if (this.isChild) return j;
        var l = {
          compiler: this.compilerInfo(),
          main: j
        };
        this.decorators && (l.main_d = this.decorators, l.useDecorators = !0);
        var m = this.context,
          n = m.programs,
          o = m.decorators;
        for (h = 0, i = n.length; h < i; h++) n[h] && (l[h] = n[h], o[h] && (l[h + "_d"] = o[h], l.useDecorators = !0));
        return this.environment.usePartial && (l.usePartial = !0), this.options.data && (l.useData = !0), this.useDepths && (l.useDepths = !0), this.useBlockParams && (l.useBlockParams = !0), this.options.compat && (l.compat = !0), d ? l.compilerOptions = this.options : (l.compiler = JSON.stringify(l.compiler), this.source.currentLocation = {
          start: {
            line: 1,
            column: 0
          }
        }, l = this.objectLiteral(l), b.srcName ? (l = l.toStringWithSourceMap({
          file: b.destName
        }), l.map = l.map && l.map.toString()) : l = l.toString()), l;
      },
      preamble: function () {
        this.lastContext = 0, this.source = new n["default"](this.options.srcName), this.decorators = new n["default"](this.options.srcName);
      },
      createFunctionContext: function (a) {
        var b = this,
          c = "",
          d = this.stackVars.concat(this.registers.list);
        d.length > 0 && (c += ", " + d.join(", "));
        var e = 0;
        g(this.aliases).forEach(function (a) {
          var d = b.aliases[a];
          d.children && d.referenceCount > 1 && (c += ", alias" + ++e + "=" + a, d.children[0] = "alias" + e);
        }), this.lookupPropertyFunctionIsUsed && (c += ", " + this.lookupPropertyFunctionVarDeclaration());
        var f = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && f.push("blockParams"), this.useDepths && f.push("depths");
        var h = this.mergeSource(c);
        return a ? (f.push(h), Function.apply(this, f)) : this.source.wrap(["function(", f.join(","), ") {\n  ", h, "}"]);
      },
      mergeSource: function (a) {
        var b = this.environment.isSimple,
          c = !this.forceBuffer,
          d = void 0,
          e = void 0,
          f = void 0,
          g = void 0;
        return this.source.each(function (a) {
          a.appendToBuffer ? (f ? a.prepend("  + ") : f = a, g = a) : (f && (e ? f.prepend("buffer += ") : d = !0, g.add(";"), f = g = void 0), e = !0, b || (c = !1));
        }), c ? f ? (f.prepend("return "), g.add(";")) : e || this.source.push('return "";') : (a += ", buffer = " + (d ? "" : this.initializeBuffer()), f ? (f.prepend("return buffer + "), g.add(";")) : this.source.push("return buffer;")), a && this.source.prepend("var " + a.substring(2) + (d ? "" : ";\n")), this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function () {
        return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim();
      },
      blockValue: function (a) {
        var b = this.aliasable("container.hooks.blockHelperMissing"),
          c = [this.contextName(0)];
        this.setupHelperArgs(a, 0, c);
        var d = this.popStack();
        c.splice(1, 0, d), this.push(this.source.functionCall(b, "call", c));
      },
      ambiguousBlockValue: function () {
        var a = this.aliasable("container.hooks.blockHelperMissing"),
          b = [this.contextName(0)];
        this.setupHelperArgs("", 0, b, !0), this.flushInline();
        var c = this.topStack();
        b.splice(1, 0, c), this.pushSource(["if (!", this.lastHelper, ") { ", c, " = ", this.source.functionCall(a, "call", b), "}"]);
      },
      appendContent: function (a) {
        this.pendingContent ? a = this.pendingContent + a : this.pendingLocation = this.source.currentLocation, this.pendingContent = a;
      },
      append: function () {
        if (this.isInline()) this.replaceStack(function (a) {
          return [" != null ? ", a, ' : ""'];
        }), this.pushSource(this.appendToBuffer(this.popStack()));else {
          var a = this.popStack();
          this.pushSource(["if (", a, " != null) { ", this.appendToBuffer(a, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
        }
      },
      appendEscaped: function () {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      getContext: function (a) {
        this.lastContext = a;
      },
      pushContext: function () {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      lookupOnContext: function (a, b, c, d) {
        var e = 0;
        d || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[e++])), this.resolvePath("context", a, e, b, c);
      },
      lookupBlockParam: function (a, b) {
        this.useBlockParams = !0, this.push(["blockParams[", a[0], "][", a[1], "]"]), this.resolvePath("context", b, 1);
      },
      lookupData: function (a, b, c) {
        a ? this.pushStackLiteral("container.data(data, " + a + ")") : this.pushStackLiteral("data"), this.resolvePath("data", b, 0, !0, c);
      },
      resolvePath: function (a, b, c, d, e) {
        var g = this;
        if (this.options.strict || this.options.assumeObjects) return void this.push(f(this.options.strict && e, this, b, c, a));
        for (var h = b.length; c < h; c++) this.replaceStack(function (e) {
          var f = g.nameLookup(e, b[c], a);
          return d ? [" && ", f] : [" != null ? ", f, " : ", e];
        });
      },
      resolvePossibleLambda: function () {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      pushStringParam: function (a, b) {
        this.pushContext(), this.pushString(b), "SubExpression" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a));
      },
      emptyHash: function (a) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(a ? "undefined" : "{}");
      },
      pushHash: function () {
        this.hash && this.hashes.push(this.hash), this.hash = {
          values: {},
          types: [],
          contexts: [],
          ids: []
        };
      },
      popHash: function () {
        var a = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(a.ids)), this.stringParams && (this.push(this.objectLiteral(a.contexts)), this.push(this.objectLiteral(a.types))), this.push(this.objectLiteral(a.values));
      },
      pushString: function (a) {
        this.pushStackLiteral(this.quotedString(a));
      },
      pushLiteral: function (a) {
        this.pushStackLiteral(a);
      },
      pushProgram: function (a) {
        null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null);
      },
      registerDecorator: function (a, b) {
        var c = this.nameLookup("decorators", b, "decorator"),
          d = this.setupHelperArgs(b, a);
        this.decorators.push(["fn = ", this.decorators.functionCall(c, "", ["fn", "props", "container", d]), " || fn;"]);
      },
      invokeHelper: function (a, b, c) {
        var d = this.popStack(),
          e = this.setupHelper(a, b),
          f = [];
        c && f.push(e.name), f.push(d), this.options.strict || f.push(this.aliasable("container.hooks.helperMissing"));
        var g = ["(", this.itemsSeparatedBy(f, "||"), ")"],
          h = this.source.functionCall(g, "call", e.callParams);
        this.push(h);
      },
      itemsSeparatedBy: function (a, b) {
        var c = [];
        c.push(a[0]);
        for (var d = 1; d < a.length; d++) c.push(b, a[d]);
        return c;
      },
      invokeKnownHelper: function (a, b) {
        var c = this.setupHelper(a, b);
        this.push(this.source.functionCall(c.name, "call", c.callParams));
      },
      invokeAmbiguous: function (a, b) {
        this.useRegister("helper");
        var c = this.popStack();
        this.emptyHash();
        var d = this.setupHelper(0, a, b),
          e = this.lastHelper = this.nameLookup("helpers", a, "helper"),
          f = ["(", "(helper = ", e, " || ", c, ")"];
        this.options.strict || (f[0] = "(helper = ", f.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", f, d.paramsInit ? ["),(", d.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", d.callParams), " : helper))"]);
      },
      invokePartial: function (a, b, c) {
        var d = [],
          e = this.setupParams(b, 1, d);
        a && (b = this.popStack(), delete e.name), c && (e.indent = JSON.stringify(c)), e.helpers = "helpers", e.partials = "partials", e.decorators = "container.decorators", a ? d.unshift(b) : d.unshift(this.nameLookup("partials", b, "partial")), this.options.compat && (e.depths = "depths"), e = this.objectLiteral(e), d.push(e), this.push(this.source.functionCall("container.invokePartial", "", d));
      },
      assignToHash: function (a) {
        var b = this.popStack(),
          c = void 0,
          d = void 0,
          e = void 0;
        this.trackIds && (e = this.popStack()), this.stringParams && (d = this.popStack(), c = this.popStack());
        var f = this.hash;
        c && (f.contexts[a] = c), d && (f.types[a] = d), e && (f.ids[a] = e), f.values[a] = b;
      },
      pushId: function (a, b, c) {
        "BlockParam" === a ? this.pushStackLiteral("blockParams[" + b[0] + "].path[" + b[1] + "]" + (c ? " + " + JSON.stringify("." + c) : "")) : "PathExpression" === a ? this.pushString(b) : "SubExpression" === a ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      compiler: e,
      compileChildren: function (a, b) {
        for (var c = a.children, d = void 0, e = void 0, f = 0, g = c.length; f < g; f++) {
          d = c[f], e = new this.compiler();
          var h = this.matchExistingProgram(d);
          if (null == h) {
            this.context.programs.push("");
            var i = this.context.programs.length;
            d.index = i, d.name = "program" + i, this.context.programs[i] = e.compile(d, b, this.context, !this.precompile), this.context.decorators[i] = e.decorators, this.context.environments[i] = d, this.useDepths = this.useDepths || e.useDepths, this.useBlockParams = this.useBlockParams || e.useBlockParams, d.useDepths = this.useDepths, d.useBlockParams = this.useBlockParams;
          } else d.index = h.index, d.name = "program" + h.index, this.useDepths = this.useDepths || h.useDepths, this.useBlockParams = this.useBlockParams || h.useBlockParams;
        }
      },
      matchExistingProgram: function (a) {
        for (var b = 0, c = this.context.environments.length; b < c; b++) {
          var d = this.context.environments[b];
          if (d && d.equals(a)) return d;
        }
      },
      programExpression: function (a) {
        var b = this.environment.children[a],
          c = [b.index, "data", b.blockParams];
        return (this.useBlockParams || this.useDepths) && c.push("blockParams"), this.useDepths && c.push("depths"), "container.program(" + c.join(", ") + ")";
      },
      useRegister: function (a) {
        this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a));
      },
      push: function (a) {
        return a instanceof d || (a = this.source.wrap(a)), this.inlineStack.push(a), a;
      },
      pushStackLiteral: function (a) {
        this.push(new d(a));
      },
      pushSource: function (a) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), a && this.source.push(a);
      },
      replaceStack: function (a) {
        var b = ["("],
          c = void 0,
          e = void 0,
          f = void 0;
        if (!this.isInline()) throw new k["default"]("replaceStack on non-inline");
        var g = this.popStack(!0);
        if (g instanceof d) c = [g.value], b = ["(", c], f = !0;else {
          e = !0;
          var h = this.incrStack();
          b = ["((", this.push(h), " = ", g, ")"], c = this.topStack();
        }
        var i = a.call(this, c);
        f || this.popStack(), e && this.stackSlot--, this.push(b.concat(i, ")"));
      },
      incrStack: function () {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function () {
        return "stack" + this.stackSlot;
      },
      flushInline: function () {
        var a = this.inlineStack;
        this.inlineStack = [];
        for (var b = 0, c = a.length; b < c; b++) {
          var e = a[b];
          if (e instanceof d) this.compileStack.push(e);else {
            var f = this.incrStack();
            this.pushSource([f, " = ", e, ";"]), this.compileStack.push(f);
          }
        }
      },
      isInline: function () {
        return this.inlineStack.length;
      },
      popStack: function (a) {
        var b = this.isInline(),
          c = (b ? this.inlineStack : this.compileStack).pop();
        if (!a && c instanceof d) return c.value;
        if (!b) {
          if (!this.stackSlot) throw new k["default"]("Invalid stack pop");
          this.stackSlot--;
        }
        return c;
      },
      topStack: function () {
        var a = this.isInline() ? this.inlineStack : this.compileStack,
          b = a[a.length - 1];
        return b instanceof d ? b.value : b;
      },
      contextName: function (a) {
        return this.useDepths && a ? "depths[" + a + "]" : "depth" + a;
      },
      quotedString: function (a) {
        return this.source.quotedString(a);
      },
      objectLiteral: function (a) {
        return this.source.objectLiteral(a);
      },
      aliasable: function (a) {
        var b = this.aliases[a];
        return b ? (b.referenceCount++, b) : (b = this.aliases[a] = this.source.wrap(a), b.aliasable = !0, b.referenceCount = 1, b);
      },
      setupHelper: function (a, b, c) {
        var d = [],
          e = this.setupHelperArgs(b, a, d, c),
          f = this.nameLookup("helpers", b, "helper"),
          g = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: d,
          paramsInit: e,
          name: f,
          callParams: [g].concat(d)
        };
      },
      setupParams: function (a, b, c) {
        var d = {},
          e = [],
          f = [],
          g = [],
          h = !c,
          i = void 0;
        h && (c = []), d.name = this.quotedString(a), d.hash = this.popStack(), this.trackIds && (d.hashIds = this.popStack()), this.stringParams && (d.hashTypes = this.popStack(), d.hashContexts = this.popStack());
        var j = this.popStack(),
          k = this.popStack();
        (k || j) && (d.fn = k || "container.noop", d.inverse = j || "container.noop");
        for (var l = b; l--;) i = this.popStack(), c[l] = i, this.trackIds && (g[l] = this.popStack()), this.stringParams && (f[l] = this.popStack(), e[l] = this.popStack());
        return h && (d.args = this.source.generateArray(c)), this.trackIds && (d.ids = this.source.generateArray(g)), this.stringParams && (d.types = this.source.generateArray(f), d.contexts = this.source.generateArray(e)), this.options.data && (d.data = "data"), this.useBlockParams && (d.blockParams = "blockParams"), d;
      },
      setupHelperArgs: function (a, b, c, d) {
        var e = this.setupParams(a, b, c);
        return e.loc = JSON.stringify(this.source.currentLocation), e = this.objectLiteral(e), d ? (this.useRegister("options"), c.push("options"), ["options=", e]) : c ? (c.push(e), "") : e;
      }
    }, function () {
      for (var a = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), b = e.RESERVED_WORDS = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
    }(), e.isValidJavaScriptVariableName = function (a) {
      return !e.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a);
    }, b["default"] = e, a.exports = b["default"];
  }, function (a, b, c) {
    "use strict";

    function d(a, b, c) {
      if (g.isArray(a)) {
        for (var d = [], e = 0, f = a.length; e < f; e++) d.push(b.wrap(a[e], c));
        return d;
      }
      return "boolean" == typeof a || "number" == typeof a ? a + "" : a;
    }
    function e(a) {
      this.srcFile = a, this.source = [];
    }
    var f = c(60)["default"];
    b.__esModule = !0;
    var g = c(5),
      h = void 0;
    try {} catch (i) {}
    h || (h = function (a, b, c, d) {
      this.src = "", d && this.add(d);
    }, h.prototype = {
      add: function (a) {
        g.isArray(a) && (a = a.join("")), this.src += a;
      },
      prepend: function (a) {
        g.isArray(a) && (a = a.join("")), this.src = a + this.src;
      },
      toStringWithSourceMap: function () {
        return {
          code: this.toString()
        };
      },
      toString: function () {
        return this.src;
      }
    }), e.prototype = {
      isEmpty: function () {
        return !this.source.length;
      },
      prepend: function (a, b) {
        this.source.unshift(this.wrap(a, b));
      },
      push: function (a, b) {
        this.source.push(this.wrap(a, b));
      },
      merge: function () {
        var a = this.empty();
        return this.each(function (b) {
          a.add(["  ", b, "\n"]);
        }), a;
      },
      each: function (a) {
        for (var b = 0, c = this.source.length; b < c; b++) a(this.source[b]);
      },
      empty: function () {
        var a = this.currentLocation || {
          start: {}
        };
        return new h(a.start.line, a.start.column, this.srcFile);
      },
      wrap: function (a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || {
          start: {}
        } : arguments[1];
        return a instanceof h ? a : (a = d(a, this, b), new h(b.start.line, b.start.column, this.srcFile, a));
      },
      functionCall: function (a, b, c) {
        return c = this.generateList(c), this.wrap([a, b ? "." + b + "(" : "(", c, ")"]);
      },
      quotedString: function (a) {
        return '"' + (a + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function (a) {
        var b = this,
          c = [];
        f(a).forEach(function (e) {
          var f = d(a[e], b);
          "undefined" !== f && c.push([b.quotedString(e), ":", f]);
        });
        var e = this.generateList(c);
        return e.prepend("{"), e.add("}"), e;
      },
      generateList: function (a) {
        for (var b = this.empty(), c = 0, e = a.length; c < e; c++) c && b.add(","), b.add(d(a[c], this));
        return b;
      },
      generateArray: function (a) {
        var b = this.generateList(a);
        return b.prepend("["), b.add("]"), b;
      }
    }, b["default"] = e, a.exports = b["default"];
  }]);
});

/***/ }),

/***/ "./web/src/javascripts/pricing-slider.js":
/*!***********************************************!*\
  !*** ./web/src/javascripts/pricing-slider.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var handlebars_dist_handlebars_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlebars/dist/handlebars.min.js */ "./node_modules/handlebars/dist/handlebars.min.js");
/* harmony import */ var handlebars_dist_handlebars_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(handlebars_dist_handlebars_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");


var Pricing = {
  // Calculator elements.
  slider: document.querySelector('.js-pricing-slider'),
  blankView: document.querySelector('.js-pricing-blank'),
  resultView: document.querySelector('.js-pricing-results'),
  highVolumeView: document.querySelector('.js-pricing-high-volume'),
  instructionsView: document.querySelector('.js-pricing-instructions'),
  resultTotal: document.querySelector('.js-pricing-amount'),
  resultBreakdown: document.querySelector('.js-pricing-breakdown'),
  mobileTotal: document.querySelector('.js-pricing-total'),
  // State vars.
  min_volume: 100,
  // Free tier
  max_volume: 1900000,
  // The point at which the high volume pane should be shown.
  plans: [{
    volume: 10000,
    price: 15,
    overagesPrice: 1.80,
    increment: 1000 // Range slider value increments when plan is active
  }, {
    volume: 50000,
    price: 55,
    overagesPrice: 1.30,
    increment: 1000
  }, {
    volume: 125000,
    price: 115,
    overagesPrice: 1.10,
    increment: 5000
  }, {
    volume: 300000,
    price: 245,
    overagesPrice: 1.00,
    increment: 10000
  }, {
    volume: 700000,
    price: 455,
    overagesPrice: 0.80,
    increment: 10000
  }, {
    volume: 1500000,
    price: 775,
    overagesPrice: 0.60,
    increment: 10000
  }],
  /**
   * Initialize the pricing calculator.
   *
   * @return {void}
   */
  init: function init() {
    nouislider__WEBPACK_IMPORTED_MODULE_1__.create(Pricing.slider, {
      range: Pricing.generateRange(),
      start: Pricing.min_volume,
      connect: 'lower',
      tooltips: {
        to: function to(value) {
          return Pricing.generateTooltip(value);
        }
      },
      pips: {
        mode: 'values',
        values: Pricing.generateValues(),
        density: 20,
        format: {
          to: function to(value) {
            if (value === Pricing.max_volume) return 'More';
            return value.toLocaleString();
          },
          from: function from(value) {
            if (value === 'More') return Pricing.max_volume;
            return value;
          }
        }
      }
    });

    // Move markers into base container
    // Allows markers to be properly layered over slider
    var pips = Pricing.slider.querySelector('.noUi-pips');
    var base = Pricing.slider.querySelector('.noUi-base');
    base.appendChild(pips);
    Pricing.slider.noUiSlider.on('slide', Pricing.slidePlan);

    // Make it so pip values are clickable
    // This ensures that the precise value of the slider is set when a label is selected
    // Without this, the slider thinks you're selecting the bar
    // So if you select the end of the 10k label, it would set the slider to something like 16k instead
    var values = pips.querySelectorAll('.noUi-value');
    values.forEach(function (value) {
      // Use mousedown instead of click event
      // Ensures that this event overrides the slider behavior which prevents the handle from bouncing back and forth
      value.addEventListener('mousedown', function (event) {
        var label = event.target.textContent.replace(/,/g, '');
        console.log("Pip clicked:", label);
        if (label == 'More') {
          label = Pricing.max_volume;
        }
        label = Number(label);

        // Set handle position
        Pricing.slider.noUiSlider.set(label);

        // Trigger slide event
        Pricing.slidePlan([label]);
      });
    });
  },
  /**
   * Generate values to display on slider labels
   */
  generateValues: function generateValues() {
    var values = [Pricing.min_volume];
    Pricing.plans.forEach(function (plan) {
      values.push(plan.volume);
    });
    values.push(Pricing.max_volume);
    return values;
  },
  /**
   * Generate tooltip label based on current volume
   * @param {string} volume
   * @returns string
   */
  generateTooltip: function generateTooltip(volume) {
    var volumeLabel = volume.toLocaleString();

    // If slider is at the max volume
    if (volume === Pricing.max_volume) {
      return "".concat(volumeLabel, "+ emails");
    }

    // If slider is between 100+ and 10k
    var lowestPaidPlan = Pricing.plans[0];
    if (volume > Pricing.min_volume && volume < lowestPaidPlan.volume) {
      return "Up to ".concat(lowestPaidPlan.volume.toLocaleString(), " emails");
    }
    return "".concat(volumeLabel, " emails");
  },
  /**
   * Outputs a slider ranges required by nouislider
   * Key % specifies where plan is positioned on the slider
   * var range = {
   'min': [100, 100],
   '14%': [10000, 1000],
   '29%': [50000, 1000],
   '43%': [125000, 5000],
   '57%': [300000, 10000],
   '71%': [700000, 10000],
   '86%': [1500000, 10000],
   'max': [1900000]
   };
   * @returns object
   */
  generateRange: function generateRange() {
    var range = {};

    // Set free plan
    range.min = [Pricing.min_volume, 100];
    range.max = [Pricing.max_volume];

    // Keep track of the total marks on the slider
    // Total plans + the free plan + max volume
    var totalMarks = Pricing.plans.length + 1;
    var itemPercentage = 100 / totalMarks;

    // Iterate through plans
    Pricing.plans.forEach(function (plan, index) {
      // Calculate position on slider
      var position = Math.round(itemPercentage * (index + 1));
      range[position] = [plan.volume, plan.increment];
    });
    return range;
  },
  /**
   * Update cards based on selected volume
   */
  updateCards: function updateCards(volume) {
    var result = Pricing.findPlanForVolume(volume);
    var plan = result.plan;
    var planCostDetails = Pricing.calculateMonthlyCost(plan, volume);

    // First, remove the 'best-option' class from all cards
    document.querySelector('.pricing-card-basic').classList.remove('best-option');
    document.querySelector('.pricing-card-platform').classList.remove('best-option');
    if (volume <= Pricing.min_volume) {
      Pricing.showFreePlan();
      return;
    }

    // Update the breakdown template for Basic and Platform cards
    var breakdownTemplate = handlebars_dist_handlebars_min_js__WEBPACK_IMPORTED_MODULE_0___default().compile("<tbody>\n      <tr>\n        <th>{{ planVolume }} emails/month</th>\n        <td>{{ planPrice }}</td>\n      </tr>\n      {{#if hasOverages}}\n        <tr class=\"overages-row\">\n          <th>{{ overages }} extra emails <span>@ {{ planOveragesPrice }} per 1,000</span></th>\n          <td>{{ overagesCost }}</td>\n        </tr>\n      {{/if}}\n    </tbody>");
    var breakdownHtml = breakdownTemplate({
      planVolume: plan.volume.toLocaleString(),
      planPrice: "$".concat(plan.price.toFixed(2)),
      hasOverages: planCostDetails.overages > 0 && volume > plan.volume,
      overages: planCostDetails.overages.toLocaleString(),
      overagesCost: "$".concat(planCostDetails.overagesCost.toFixed(2)),
      planOveragesPrice: "$".concat(plan.overagesPrice.toFixed(2))
    });
    if (volume > Pricing.plans[1].volume) {
      // Assuming plans[1] is the Basic plan
      document.querySelector('.pricing-card-platform .pricing-cost').textContent = "$".concat(planCostDetails.totalCost.toFixed(2));
      document.querySelector('.js-pricing-breakdown-platform').innerHTML = breakdownHtml;
      document.querySelector('.pricing-card-platform').classList.add('best-option'); // Add class to Platform card

      // Update the Platform detailed view
      document.querySelector('.pricing-column.cell-platform .plan-price').textContent = "$".concat(planCostDetails.totalCost.toFixed(2), "/mo");
      console.log('Platform card updated and marked as best option');
    } else {
      document.querySelector('.pricing-card-basic .pricing-cost').textContent = "$".concat(planCostDetails.totalCost.toFixed(2));
      document.querySelector('.js-pricing-breakdown-basic').innerHTML = breakdownHtml;
      document.querySelector('.pricing-card-basic').classList.add('best-option'); // Add class to Basic card

      // Update the Basic detailed view
      document.querySelector('.pricing-column.cell-basic .plan-price').textContent = "$".concat(planCostDetails.totalCost.toFixed(2), "/mo");
      console.log('Basic card updated and marked as best option');
    }

    // Explicitly remove the overages row if it shouldn't be displayed
    if (!(planCostDetails.overages > 0 && volume > plan.volume)) {
      var _document$querySelect;
      (_document$querySelect = document.querySelector('.js-pricing-breakdown-platform .overages-row')) === null || _document$querySelect === void 0 || _document$querySelect.remove();
    }

    // Update mobile total with the calculated total cost including overages
    Pricing.mobileTotal.textContent = "$".concat(planCostDetails.totalCost.toFixed(2));
  },
  /**
   * Update summary when slider changes
   */
  slidePlan: function slidePlan(value) {
    Pricing.current_volume = Number(value[0]);
    Pricing.updateMobileTotal();

    // Round the volume down to the nearest thousand.
    var roundedVolume = Math.floor(Pricing.current_volume / 1000) * 1000;

    // Find the best priced plan.
    var result = Pricing.findPlanForVolume(roundedVolume);

    // Set current state
    Pricing.current_plan = result.plan;

    // Update the cards based on the current volume
    Pricing.updateCards(Pricing.current_volume);

    // Display the result.
    Pricing.updateSummary();
  },
  /**
   * Update volume tooltip/label on mobile
   */
  updateMobileTotal: function updateMobileTotal() {
    var label = Pricing.mobileTotal;
    var tooltip = Pricing.generateTooltip(Pricing.current_volume);
    label.textContent = tooltip;
  },
  /**
   * Show a prompt to contact us about volume pricing.
   *
   * @return {void}
   */
  showHighVolumePromo: function showHighVolumePromo() {
    Pricing.blankView.classList.add('hidden');
    Pricing.resultView.classList.add('hidden');
    Pricing.highVolumeView.classList.remove('hidden');
    Pricing.instructionsView.classList.add('hidden');
  },
  /**
   * Show the Free Plan.
   *
   * @return {void}
   */
  showFreePlan: function showFreePlan() {
    Pricing.resultView.classList.add('hidden');
    Pricing.highVolumeView.classList.add('hidden');
    Pricing.instructionsView.classList.add('hidden');
    Pricing.blankView.classList.remove('hidden');
  },
  /**
   * Display the best plan in the calculator.
   *
   * @return {void}
   */
  updateSummary: function updateSummary() {
    var volume = Pricing.current_volume;
    if (volume >= Pricing.max_volume) {
      return Pricing.showHighVolumePromo();
    }
    if (volume <= 100) {
      return Pricing.showFreePlan();
    }
    var volumeFormatter = new Intl.NumberFormat('en-US');
    var currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    var selectedPlan = Pricing.current_plan;
    if (selectedPlan === undefined) {
      // Default to first plan.
      selectedPlan = Pricing.plans[0];
    }
    var planCost = Pricing.calculateMonthlyCost(selectedPlan, Pricing.current_volume);
    var lowestPaidActive = Pricing.current_volume > Pricing.min_volume && Pricing.current_volume < Pricing.plans[0].volume;
    var template = handlebars_dist_handlebars_min_js__WEBPACK_IMPORTED_MODULE_0___default().compile("<tbody>\n        <tr>\n          <th>\n            {{#if lowestPaidActive }}Up to {{/if}}\n            {{ planVolume }} emails/month\n          </th>\n          <td>{{ planPrice }}</td>\n        </tr>\n\n        {{#if hasOverages}}\n          <tr>\n            <th>{{ overages }} extra emails <span>@ {{ planOveragesPrice }} per 1,000</span></th>\n            <td>{{ overagesCost }}</td>\n          </tr>\n        {{/if}}\n      </tbody>");
    Pricing.resultTotal.innerHTML = currencyFormatter.format(planCost.totalCost);
    Pricing.resultBreakdown.innerHTML = template({
      lowestPaidActive: lowestPaidActive,
      planVolume: volumeFormatter.format(selectedPlan.volume),
      planPrice: currencyFormatter.format(selectedPlan.price),
      hasOverages: planCost.overages > 0,
      overages: volumeFormatter.format(planCost.overages),
      overagesCost: currencyFormatter.format(planCost.overagesCost),
      planOveragesPrice: currencyFormatter.format(selectedPlan.overagesPrice)
    });
    Pricing.blankView.classList.add('hidden');
    Pricing.highVolumeView.classList.add('hidden');
    Pricing.resultView.classList.remove('hidden');
    Pricing.instructionsView.classList.remove('hidden');
  },
  /**
   * Finds the lowest cost plan for the user’s volume.
   * This takes into account the combination of base plan price + overages.
   *
   * @param  {Int} volume   The user's monthly volume, rounded up to the nearest
   *                        thousand.
   * @return {Object}       A result object containing the best plan and totals.
   */
  findPlanForVolume: function findPlanForVolume(volume) {
    var bestPlan;

    // Loop through each of the pricing plans.
    Pricing.plans.forEach(function (plan) {
      var result = Pricing.calculateMonthlyCost(plan, volume);

      // Check if this plan/overages combo is cheaper
      // and set it as the bestPlan if it is.
      if (bestPlan == undefined || result.totalCost <= bestPlan.totalCost) {
        bestPlan = result;
      }
    });
    console.log('Best Plan: ', bestPlan);
    // Return the best plan.
    return bestPlan;
  },
  /**
   * Calculate how much it would cost to send with a specified plan.
   *
   * @param {Plan} plan The plan to use for pricing.
   * @param {Number} volume The monthly volume.
   * @return {Object} An object with the total monthly cost, overages
   *                  amount, overages cost and plan used to calculate
   *                  the pricing.
   */
  calculateMonthlyCost: function calculateMonthlyCost(plan, volume) {
    var totalCost = plan.price,
      overages = 0,
      overagesCost = 0;

    // Calculate the cost of overages if they are needed.
    if (volume > plan.volume) {
      overages = Math.floor((volume - plan.volume) / 1000);
      overagesCost = overages * plan.overagesPrice;
      totalCost += overagesCost;
    }
    return {
      plan: plan,
      totalCost: totalCost,
      overages: overages * 1000,
      overagesCost: overagesCost
    };
  }
};
window.addEventListener('DOMContentLoaded', function () {
  // Initialize if there is a calculator.
  if (Pricing.slider) {
    Pricing.init();
  }
});

/**
 * Manages the visibility of the pricing table headers based on scroll position.
 *
 * - `minimizedHeader`: The initially visible, minimized header.
 * - `detailedHeader`: The detailed header, shown when the minimized header scrolls out of view.
 * - `table`: The table element used to determine when the detailed header should be hidden.
 * - `hasHiddenClassBeenRemoved`: Tracks whether the hidden class has been removed from the detailed header.
 *
 * Functions:
 * - `toggleHeaderVisibility(isVisible)`: Toggles the `fade-in` and `fade-out` classes based on visibility.
 * - `handleScroll()`: Checks the scroll position and toggles header visibility accordingly.
 *
 * Event Listeners:
 * - `DOMContentLoaded`: Initializes the script after the DOM is fully loaded.
 * - `scroll`: Attaches `handleScroll` to the scroll event.
 */
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".pricing-table-head");
  var minimizedHeader = document.querySelector('.pricing-table-head.minimized');
  var detailedHeader = document.querySelector('.pricing-table-head.detailed');
  var table = document.querySelector('.pricing-table');
  if (!header || !detailedHeader || !table) {
    console.error("Required elements not found");
    return;
  }
  var hasHiddenClassBeenRemoved = false; // Tracks if the hidden class has been removed

  function toggleHeaderVisibility(isVisible) {
    if (isVisible && !hasHiddenClassBeenRemoved) {
      detailedHeader.classList.remove("hidden");
      hasHiddenClassBeenRemoved = true;
    }
    detailedHeader.classList.toggle("fade-in", isVisible);
    detailedHeader.classList.toggle("fade-out", !isVisible);
  }
  function handleScroll() {
    var minimizedRect = minimizedHeader.getBoundingClientRect();
    var tableRect = table.getBoundingClientRect();
    var shouldShowDetailedHeader = minimizedRect.bottom <= 0 && tableRect.bottom > 140;
    toggleHeaderVisibility(shouldShowDetailedHeader);
  }
  window.addEventListener('scroll', handleScroll);

  // Ensure the correct header is visible on load
  handleScroll();
});

/***/ }),

/***/ "./web/src/javascripts/pricing.js":
/*!****************************************!*\
  !*** ./web/src/javascripts/pricing.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var handlebars_dist_handlebars_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlebars/dist/handlebars.min.js */ "./node_modules/handlebars/dist/handlebars.min.js");
/* harmony import */ var handlebars_dist_handlebars_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(handlebars_dist_handlebars_min_js__WEBPACK_IMPORTED_MODULE_0__);
// Pricing logic for table calculator


var Pricing = {
  // Calculator elements.
  form: document.querySelector('.pricing-calculator_form'),
  volumeInput: document.querySelector('.pricing-calculator_input'),
  blankView: document.querySelector('.pricing-calculator_blank'),
  resultView: document.querySelector('.pricing-calculator_results'),
  highVolumeView: document.querySelector('.pricing-calculator_high-volume'),
  resetButton: document.querySelector('.js-reset-calculator'),
  instructionsView: document.querySelector('.pricing-calculator_instructions'),
  resultTotal: document.querySelector('.pricing-calculator_amount'),
  resultBreakdown: document.querySelector('.pricing-calculator_breakdown'),
  // Pricing table elements.
  planRows: [].slice.call(document.querySelectorAll('.product-row--plan')),
  enterpriseRow: document.querySelector('.product-row--promo'),
  addOnTierRows: [].slice.call(document.querySelectorAll('.product-row--addon')),
  // State vars.
  max_volume: 1900000,
  // The point at which the high volume pane should be shown.
  plans: [],
  addOns: [],
  /**
   * Initialize the pricing calculator.
   *
   * @return {void}
   */
  init: function init() {
    // Set up the plans & add-ons.
    Pricing.fetchPlans();
    Pricing.fetchAddOns();

    // Set up listener for calculator submit events.
    Pricing.form.addEventListener('submit', Pricing.volumeFormSubmitted);
    Pricing.planRows.forEach(function (row) {
      row.addEventListener('change', Pricing.selectPlan);
    });
    Pricing.addOnTierRows.forEach(function (row) {
      row.addEventListener('change', Pricing.selectAddOn);
    });
    Pricing.resetButton.addEventListener('click', function (e) {
      e.preventDefault();
      Pricing.reset();
    });
  },
  /**
   * Handle changes to the selected plan.
   *
   * @param {InputEvent} e The radio button change event.
   */
  selectPlan: function selectPlan(e) {
    if (!e.target.checked) {
      return;
    }
    var id = e.target.value,
      plan = Pricing.plans.find(function (plan) {
        return plan.id === id;
      });
    Pricing.volumeInput.value = plan.volume;

    // Highlight the relevant row.
    Pricing.resetPlanRows();
    plan.row.classList.add('product-row--selected');
    plan.input.checked = true;

    // Display the result.
    Pricing.updateSummary();
  },
  /**
   * Handle changes to add-on rows.
   *
   * @param {InputEvent} e The radio/checkbox change event.
   */
  selectAddOn: function selectAddOn(e) {
    var addOnId = e.target.value;
    var addOn = Pricing.addOns.find(function (addOn) {
      return addOn.id === addOnId;
    });
    if (addOn.disabled) {
      return;
    }
    var checked = e.target.checked;

    // Clear any previously selected rows.
    Pricing.resetAddOnRowsForAlias(addOn.alias);
    if (checked) {
      addOn.row.classList.add('product-row--selected');
      addOn.input.checked = true;
    }
    Pricing.updateSummary();
  },
  /**
   * Examines the plan rows to gather the available plans.
   *
   * @return {void}
   */
  fetchPlans: function fetchPlans() {
    // Reset the plans array.
    Pricing.plans = [];

    // Loop each of the rows in the pricing table and add the data to the plans array.
    Pricing.planRows.forEach(function (row) {
      Pricing.plans.push({
        row: row,
        input: row.querySelector('.product-row_control'),
        id: row.getAttribute('data-plan-id'),
        volume: parseInt(row.getAttribute('data-plan')),
        price: parseFloat(row.getAttribute('data-price')),
        overagesPrice: parseFloat(row.getAttribute('data-overage-price'))
      });
    });
  },
  /**
   * Examines the add-on rows to gather the available add-ons.
   *
   * @return {void}
   */
  fetchAddOns: function fetchAddOns() {
    Pricing.addOns = [];
    Pricing.addOnTierRows.forEach(function (row) {
      Pricing.addOns.push({
        row: row,
        input: row.querySelector('.product-row_control'),
        id: row.getAttribute('data-id'),
        name: row.getAttribute('data-name'),
        alias: row.getAttribute('data-alias'),
        price: row.getAttribute('data-price'),
        included: row.classList.contains('product-row--included'),
        disabled: row.classList.contains('product-row--disabled')
      });
    });
  },
  /**
   * Handles form submits from the calculator.
   *
   * @param  {Event} e  The form submit event.
   * @return {void}
   */
  volumeFormSubmitted: function volumeFormSubmitted(e) {
    e.preventDefault();

    // Grab the volume from the input.
    var volume = parseInt(Pricing.volumeInput.value.replace(/[^0-9]/g, ''));

    // Stop here if the volume is not valid.
    if (!volume) {
      return Pricing.reset();
    }

    // Write the cleaned volume back to the input field.
    Pricing.volumeInput.value = volume;
    if (volume >= Pricing.max_volume) {
      return Pricing.showHighVolumePromo();
    }

    // Round the volume down to the nearest thousand.
    var roundedVolume = Math.floor(volume / 1000) * 1000;

    // Find the best priced plan.
    var result = Pricing.findPlanForVolume(roundedVolume);

    // Highlight the relevant row.
    Pricing.resetPlanRows();
    result.plan.row.classList.add('product-row--selected');
    result.plan.input.checked = true;

    // Display the result.
    Pricing.updateSummary();
  },
  /**
   * Show a prompt to contact us about volume pricing.
   *
   * @return {void}
   */
  showHighVolumePromo: function showHighVolumePromo() {
    Pricing.blankView.classList.add('hidden');
    Pricing.resultView.classList.add('hidden');
    Pricing.highVolumeView.classList.remove('hidden');
    Pricing.instructionsView.classList.add('hidden');

    // Make sure no rows in the pricing table are highlighted.
    Pricing.resetPlanRows();
  },
  /**
   * Display the best plan in the calculator.
   *
   * @return {void}
   */
  updateSummary: function updateSummary() {
    var volume = parseInt(Pricing.volumeInput.value.replace(/[^0-9]/g, ''));
    if (volume >= Pricing.max_volume) {
      return Pricing.showHighVolumePromo();
    }
    var volumeFormatter = new Intl.NumberFormat('en-US');
    var currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    var selectedPlan = Pricing.plans.find(function (plan) {
      return plan.input.checked;
    });
    if (selectedPlan === undefined) {
      // Default to first plan.
      selectedPlan = Pricing.plans[0];
      selectedPlan.row.classList.add('product-row--selected');
      selectedPlan.input.checked = true;
    }
    var selectedAddOns = [],
      addOnsTotal = 0;
    Pricing.addOns.forEach(function (addOn) {
      if (addOn.input && addOn.input.checked) {
        selectedAddOns.push({
          name: addOn.name,
          price: addOn.price == 0 ? 'Included' : currencyFormatter.format(addOn.price)
        });
        addOnsTotal += parseInt(addOn.price);
      }
    });
    var planCost = Pricing.calculateMonthlyCost(selectedPlan, Pricing.volumeInput.value);
    var template = handlebars_dist_handlebars_min_js__WEBPACK_IMPORTED_MODULE_0___default().compile('<tbody><tr><th>{{ planVolume }} emails/month</th><td>{{ planPrice }}</td></tr>{{#if hasOverages}}<tr><th>{{ overages }} extra emails <span>@ {{ planOveragesPrice }} per 1,000</span></th><td>{{ overagesCost }}</td></tr>{{/if}}{{#each addOns}}<tr><th>{{ name }}</th><td>{{ price }}</td></tr>{{/each}}</tbody>');
    Pricing.resultTotal.innerHTML = currencyFormatter.format(planCost.totalCost + addOnsTotal);
    Pricing.resultBreakdown.innerHTML = template({
      planVolume: volumeFormatter.format(selectedPlan.volume),
      planPrice: currencyFormatter.format(selectedPlan.price),
      hasOverages: planCost.overages > 0,
      overages: volumeFormatter.format(planCost.overages),
      overagesCost: currencyFormatter.format(planCost.overagesCost),
      planOveragesPrice: currencyFormatter.format(selectedPlan.overagesPrice),
      addOns: selectedAddOns
    });
    Pricing.blankView.classList.add('hidden');
    Pricing.highVolumeView.classList.add('hidden');
    Pricing.resultView.classList.remove('hidden');
    Pricing.instructionsView.classList.remove('hidden');
  },
  /**
   * Reset the calculator to it’s initial state.
   *
   * @return {void}
   */
  reset: function reset() {
    // Result the volume input.
    Pricing.volumeInput.value = '';

    // Remove highlight from pricing table.
    Pricing.resetPlanRows();

    // Reset the addons.
    Pricing.resetAddOnRows();

    // Show blank state.
    Pricing.blankView.classList.remove('hidden');
    Pricing.highVolumeView.classList.add('hidden');
    Pricing.resultView.classList.add('hidden');
    Pricing.instructionsView.classList.add('hidden');
  },
  /**
   * Resets the pricing table rows to their default state.
   *
   * @return {void}
   */
  resetPlanRows: function resetPlanRows() {
    Pricing.plans.forEach(function (plan) {
      plan.row.classList.remove('product-row--selected');
      plan.input.checked = false;
    });
  },
  /**
   * Reset all add-on rows back to their default state.
   *
   * @return {void}
   */
  resetAddOnRows: function resetAddOnRows() {
    Pricing.addOns.forEach(function (addOn) {
      if (addOn.included) {
        addOn.row.classList.add('product-row--selected');
      } else {
        addOn.row.classList.remove('product-row--selected');
      }
      if (addOn.input) {
        addOn.input.checked = addOn.included;
      }
    });
  },
  /**
   * Resets the addon rows to their default state.
   *
   * @return {void}
   */
  resetAddOnRowsForAlias: function resetAddOnRowsForAlias(alias) {
    var addOns = Pricing.addOns.filter(function (i) {
      return i.alias == alias;
    });
    addOns.forEach(function (addOn) {
      addOn.row.classList.remove('product-row--selected');
      addOn.input.checked = false;
    });
  },
  /**
   * Finds the lowest cost plan for the user’s volume.
   * This takes into account the combination of base plan price + overages.
   *
   * @param  {Int} volume   The user's monthly volume, rounded up to the nearest
   *                        thousand.
   * @return {Object}       A result object containing the best plan and totals.
   */
  findPlanForVolume: function findPlanForVolume(volume) {
    var bestPlan;

    // Loop through each of the pricing plans.
    Pricing.plans.forEach(function (plan) {
      var result = Pricing.calculateMonthlyCost(plan, volume);

      // Check if this plan/overages combo is cheaper
      // and set it as the bestPlan if it is.
      if (bestPlan == undefined || result.totalCost <= bestPlan.totalCost) {
        bestPlan = result;
      }
    });

    // Return the best plan.
    return bestPlan;
  },
  /**
   * Calculate how much it would cost to send with a specified plan.
   *
   * @param {Plan} plan The plan to use for pricing.
   * @param {Number} volume The monthly volume.
   * @return {Object} An object with the total monthly cost, overages
   *                  amount, overages cost and plan used to calculate
   *                  the pricing.
   */
  calculateMonthlyCost: function calculateMonthlyCost(plan, volume) {
    var totalCost = plan.price,
      overages = 0,
      overagesCost = 0;

    // Calculate the cost of overages if they are needed.
    if (volume > plan.volume) {
      overages = Math.floor((volume - plan.volume) / 1000);
      overagesCost = overages * plan.overagesPrice;
      totalCost += overagesCost;
    }
    return {
      plan: plan,
      totalCost: totalCost,
      overages: overages * 1000,
      overagesCost: overagesCost
    };
  }
};
window.addEventListener('DOMContentLoaded', function () {
  // Initialize if there is a calculator.
  if (Pricing.form) {
    Pricing.init();
  }
});

/***/ }),

/***/ "./web/src/stylesheets/styles.scss":
/*!*****************************************!*\
  !*** ./web/src/stylesheets/styles.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipsMode: () => (/* binding */ PipsMode),
/* harmony export */   PipsType: () => (/* binding */ PipsType),
/* harmony export */   create: () => (/* binding */ initialize),
/* harmony export */   cssClasses: () => (/* binding */ cssClasses),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var PipsMode;
(function (PipsMode) {
    PipsMode["Range"] = "range";
    PipsMode["Steps"] = "steps";
    PipsMode["Positions"] = "positions";
    PipsMode["Count"] = "count";
    PipsMode["Values"] = "values";
})(PipsMode || (PipsMode = {}));
var PipsType;
(function (PipsType) {
    PipsType[PipsType["None"] = -1] = "None";
    PipsType[PipsType["NoValue"] = 0] = "NoValue";
    PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
    PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
})(PipsType || (PipsType = {}));
//region Helper Methods
function isValidFormatter(entry) {
    return isValidPartialFormatter(entry) && typeof entry.from === "function";
}
function isValidPartialFormatter(entry) {
    // partial formatters only need a to function and not a from function
    return typeof entry === "object" && typeof entry.to === "function";
}
function removeElement(el) {
    el.parentElement.removeChild(el);
}
function isSet(value) {
    return value !== null && value !== undefined;
}
// Bindable version
function preventDefault(e) {
    e.preventDefault();
}
// Removes duplicates from an array.
function unique(array) {
    return array.filter(function (a) {
        return !this[a] ? (this[a] = true) : false;
    }, {});
}
// Round a value to the closest 'to'.
function closest(value, to) {
    return Math.round(value / to) * to;
}
// Current position of an element relative to the document.
function offset(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc);
    // getBoundingClientRect contains left scroll in Chrome on Android.
    // I haven't found a feature detection that proves this. Worst case
    // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
        pageOffset.x = 0;
    }
    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
}
// Checks whether a value is numerical.
function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
}
// Sets a class and removes it after [duration] ms.
function addClassFor(element, className, duration) {
    if (duration > 0) {
        addClass(element, className);
        setTimeout(function () {
            removeClass(element, className);
        }, duration);
    }
}
// Limits a value to 0 - 100
function limit(a) {
    return Math.max(Math.min(a, 100), 0);
}
// Wraps a variable as an array, if it isn't one yet.
// Note that an input array is returned by reference!
function asArray(a) {
    return Array.isArray(a) ? a : [a];
}
// Counts decimals
function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
}
// http://youmightnotneedjquery.com/#add_class
function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.add(className);
    }
    else {
        el.className += " " + className;
    }
}
// http://youmightnotneedjquery.com/#remove_class
function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.remove(className);
    }
    else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
}
// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
}
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat
            ? doc.documentElement.scrollLeft
            : doc.body.scrollLeft;
    var y = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
            ? doc.documentElement.scrollTop
            : doc.body.scrollTop;
    return {
        x: x,
        y: y,
    };
}
// we provide a function to compute constants instead
// of accessing window.* as soon as the module needs it
// so that we do not compute anything if not needed
function getActions() {
    // Determine the events to bind. IE11 implements pointerEvents without
    // a prefix, which breaks compatibility with the IE10 implementation.
    return window.navigator.pointerEnabled
        ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup",
        }
        : window.navigator.msPointerEnabled
            ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp",
            }
            : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend",
            };
}
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
// Issue #785
function getSupportsPassive() {
    var supportsPassive = false;
    /* eslint-disable */
    try {
        var opts = Object.defineProperty({}, "passive", {
            get: function () {
                supportsPassive = true;
            },
        });
        // @ts-ignore
        window.addEventListener("test", null, opts);
    }
    catch (e) { }
    /* eslint-enable */
    return supportsPassive;
}
function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
//endregion
//region Range Calculation
// Determine the size of a sub-range in relation to a full range.
function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
}
// (percentage) How many percent is this value of this range?
function fromPercentage(range, value, startRange) {
    return (value * 100) / (range[startRange + 1] - range[startRange]);
}
// (percentage) Where is this value on this range?
function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
}
// (value) How much is this percentage on this range?
function isPercentage(range, value) {
    return (value * (range[1] - range[0])) / 100 + range[0];
}
function getJ(value, arr) {
    var j = 1;
    while (value >= arr[j]) {
        j += 1;
    }
    return j;
}
// (percentage) Input a value, find where, on a scale of 0-100, it applies.
function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
        return 100;
    }
    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
}
// (value) Input a percentage, find where it is on the specified range.
function fromStepping(xVal, xPct, value) {
    // There is no range group that fits 100
    if (value >= 100) {
        return xVal.slice(-1)[0];
    }
    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
}
// (percentage) Get the step that applies at a certain value.
function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
        return value;
    }
    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j];
    // If 'snap' is set, steps are used as fixed points on the slider.
    if (snap) {
        // Find the closest position, a or b.
        if (value - a > (b - a) / 2) {
            return b;
        }
        return a;
    }
    if (!xSteps[j - 1]) {
        return value;
    }
    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
}
//endregion
//region Spectrum
var Spectrum = /** @class */ (function () {
    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [];
        this.xNumSteps = [];
        this.xHighestCompleteStep = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.snap = snap;
        var index;
        var ordered = [];
        // Map the object keys to an array.
        Object.keys(entry).forEach(function (index) {
            ordered.push([asArray(entry[index]), index]);
        });
        // Sort all entries by value (numeric sort).
        ordered.sort(function (a, b) {
            return a[0][0] - b[0][0];
        });
        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            this.handleEntryPoint(ordered[index][1], ordered[index][0]);
        }
        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);
        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            this.handleStepPoint(index, this.xNumSteps[index]);
        }
    }
    Spectrum.prototype.getDistance = function (value) {
        var distances = [];
        for (var index = 0; index < this.xNumSteps.length - 1; index++) {
            distances[index] = fromPercentage(this.xVal, value, index);
        }
        return distances;
    };
    // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards
    Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
        var xPct_index = 0;
        // Calculate range where to start calculation
        if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
        }
        else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
        }
        // If looking backwards and the value is exactly at a range separator then look one range further
        if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
        }
        if (distances === null) {
            distances = [];
        }
        var start_factor;
        var rest_factor = 1;
        var rest_rel_distance = distances[xPct_index];
        var range_pct = 0;
        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;
        // Calculate what part of the start range the value is
        if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        // Do until the complete distance across ranges is calculated
        while (rest_rel_distance > 0) {
            // Calculate the percentage of total range
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
            // Detect if the margin, padding or limit is larger then the current range and calculate
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor;
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1;
            }
            else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                // No rest left as the rest fits in current range
                rest_factor = 0;
            }
            if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance;
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                    range_counter--;
                }
            }
            else {
                abs_distance_counter = abs_distance_counter + rel_range_distance;
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                    range_counter++;
                }
            }
            // Rest of relative percentual distance still to be calculated
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }
        return value + abs_distance_counter;
    };
    Spectrum.prototype.toStepping = function (value) {
        value = toStepping(this.xVal, this.xPct, value);
        return value;
    };
    Spectrum.prototype.fromStepping = function (value) {
        return fromStepping(this.xVal, this.xPct, value);
    };
    Spectrum.prototype.getStep = function (value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);
        return value;
    };
    Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
        var j = getJ(value, this.xPct);
        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }
        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };
    Spectrum.prototype.getNearbySteps = function (value) {
        var j = getJ(value, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2],
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1],
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j],
            },
        };
    };
    Spectrum.prototype.countStepDecimals = function () {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };
    Spectrum.prototype.hasNoSize = function () {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
    };
    // Outside testing
    Spectrum.prototype.convert = function (value) {
        return this.getStep(this.toStepping(value));
    };
    Spectrum.prototype.handleEntryPoint = function (index, value) {
        var percentage;
        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        }
        else if (index === "max") {
            percentage = 100;
        }
        else {
            percentage = parseFloat(index);
        }
        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider: 'range' value isn't numeric.");
        }
        // Store values.
        this.xPct.push(percentage);
        this.xVal.push(value[0]);
        var value1 = Number(value[1]);
        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value1)) {
                this.xSteps[0] = value1;
            }
        }
        else {
            this.xSteps.push(isNaN(value1) ? false : value1);
        }
        this.xHighestCompleteStep.push(0);
    };
    Spectrum.prototype.handleStepPoint = function (i, n) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }
        // Step over zero-length ranges (#948);
        if (this.xVal[i] === this.xVal[i + 1]) {
            this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
            return;
        }
        // Factor to range ratio
        this.xSteps[i] =
            fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
        var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
        this.xHighestCompleteStep[i] = step;
    };
    return Spectrum;
}());
//endregion
//region Options
/*	Every input option is tested and parsed. This will prevent
    endless validation in internal methods. These tests are
    structured with an item for every option available. An
    option can be marked as required by setting the 'r' flag.
    The testing function is provided with three arguments:
        - The provided value for the option;
        - A reference to the options object;
        - The name for the option;

    The testing function returns false when an error is detected,
    or true when everything is OK. It can also modify the option
    object, to make sure all values can be correctly looped elsewhere. */
//region Defaults
var defaultFormatter = {
    to: function (value) {
        return value === undefined ? "" : value.toFixed(2);
    },
    from: Number,
};
var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub",
};
// Namespaces of internal event listeners
var INTERNAL_EVENT_NS = {
    tooltips: ".__tooltips",
    aria: ".__aria",
};
//endregion
function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'step' is not numeric.");
    }
    // The step option can still be used to set stepping
    // for linear sliders. Overwritten if set in 'range'.
    parsed.singleStep = entry;
}
function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    }
    parsed.keyboardPageMultiplier = entry;
}
function testKeyboardMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    }
    parsed.keyboardMultiplier = entry;
}
function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    }
    parsed.keyboardDefaultStep = entry;
}
function testRange(parsed, entry) {
    // Filter incorrect input.
    if (typeof entry !== "object" || Array.isArray(entry)) {
        throw new Error("noUiSlider: 'range' is not an object.");
    }
    // Catch missing start or end.
    if (entry.min === undefined || entry.max === undefined) {
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    }
    parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
}
function testStart(parsed, entry) {
    entry = asArray(entry);
    // Validate input. Values aren't tested, as the public .val method
    // will always provide a valid location.
    if (!Array.isArray(entry) || !entry.length) {
        throw new Error("noUiSlider: 'start' option is incorrect.");
    }
    // Store the number of handles.
    parsed.handles = entry.length;
    // When the slider is initialized, the .val method will
    // be called with the start options.
    parsed.start = entry;
}
function testSnap(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.snap = entry;
}
function testAnimate(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.animate = entry;
}
function testAnimationDuration(parsed, entry) {
    if (typeof entry !== "number") {
        throw new Error("noUiSlider: 'animationDuration' option must be a number.");
    }
    parsed.animationDuration = entry;
}
function testConnect(parsed, entry) {
    var connect = [false];
    var i;
    // Map legacy options
    if (entry === "lower") {
        entry = [true, false];
    }
    else if (entry === "upper") {
        entry = [false, true];
    }
    // Handle boolean options
    if (entry === true || entry === false) {
        for (i = 1; i < parsed.handles; i++) {
            connect.push(entry);
        }
        connect.push(false);
    }
    // Reject invalid input
    else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
        throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
    }
    else {
        connect = entry;
    }
    parsed.connect = connect;
}
function testOrientation(parsed, entry) {
    // Set orientation to an a numerical value for easy
    // array selection.
    switch (entry) {
        case "horizontal":
            parsed.ort = 0;
            break;
        case "vertical":
            parsed.ort = 1;
            break;
        default:
            throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
}
function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'margin' option must be numeric.");
    }
    // Issue #582
    if (entry === 0) {
        return;
    }
    parsed.margin = parsed.spectrum.getDistance(entry);
}
function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'limit' option must be numeric.");
    }
    parsed.limit = parsed.spectrum.getDistance(entry);
    if (!parsed.limit || parsed.handles < 2) {
        throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
}
function testPadding(parsed, entry) {
    var index;
    if (!isNumeric(entry) && !Array.isArray(entry)) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (entry === 0) {
        return;
    }
    if (!Array.isArray(entry)) {
        entry = [entry, entry];
    }
    // 'getDistance' returns false for invalid values.
    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
        // last "range" can't contain step size as it is purely an endpoint.
        if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
            throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        }
    }
    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
    if (totalPadding / (lastValue - firstValue) > 1) {
        throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
    }
}
function testDirection(parsed, entry) {
    // Set direction as a numerical value for easy parsing.
    // Invert connection for RTL sliders, so that the proper
    // handles get the connect/background classes.
    switch (entry) {
        case "ltr":
            parsed.dir = 0;
            break;
        case "rtl":
            parsed.dir = 1;
            break;
        default:
            throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
}
function testBehaviour(parsed, entry) {
    // Make sure the input is a string.
    if (typeof entry !== "string") {
        throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
    }
    // Check if the string contains any keywords.
    // None are required.
    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;
    var invertConnects = entry.indexOf("invert-connects") >= 0;
    var dragAll = entry.indexOf("drag-all") >= 0;
    var smoothSteps = entry.indexOf("smooth-steps") >= 0;
    if (fixed) {
        if (parsed.handles !== 2) {
            throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        }
        // Use margin to enforce fixed state
        testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }
    if (invertConnects && parsed.handles !== 2) {
        throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
    }
    if (unconstrained && (parsed.margin || parsed.limit)) {
        throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
    }
    parsed.events = {
        tap: tap || snap,
        drag: drag,
        dragAll: dragAll,
        smoothSteps: smoothSteps,
        fixed: fixed,
        snap: snap,
        hover: hover,
        unconstrained: unconstrained,
        invertConnects: invertConnects,
    };
}
function testTooltips(parsed, entry) {
    if (entry === false) {
        return;
    }
    if (entry === true || isValidPartialFormatter(entry)) {
        parsed.tooltips = [];
        for (var i = 0; i < parsed.handles; i++) {
            parsed.tooltips.push(entry);
        }
    }
    else {
        entry = asArray(entry);
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a formatter for all handles.");
        }
        entry.forEach(function (formatter) {
            if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
            }
        });
        parsed.tooltips = entry;
    }
}
function testHandleAttributes(parsed, entry) {
    if (entry.length !== parsed.handles) {
        throw new Error("noUiSlider: must pass a attributes for all handles.");
    }
    parsed.handleAttributes = entry;
}
function testAriaFormat(parsed, entry) {
    if (!isValidPartialFormatter(entry)) {
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    }
    parsed.ariaFormat = entry;
}
function testFormat(parsed, entry) {
    if (!isValidFormatter(entry)) {
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }
    parsed.format = entry;
}
function testKeyboardSupport(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
    }
    parsed.keyboardSupport = entry;
}
function testDocumentElement(parsed, entry) {
    // This is an advanced option. Passed values are used without validation.
    parsed.documentElement = entry;
}
function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    }
    parsed.cssPrefix = entry;
}
function testCssClasses(parsed, entry) {
    if (typeof entry !== "object") {
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
    }
    if (typeof parsed.cssPrefix === "string") {
        parsed.cssClasses = {};
        Object.keys(entry).forEach(function (key) {
            parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
        });
    }
    else {
        parsed.cssClasses = entry;
    }
}
// Test all developer settings and parse to assumption-safe values.
function testOptions(options) {
    // To prove a fix for #537, freeze options here.
    // If the object is modified, an error will be thrown.
    // Object.freeze(options);
    var parsed = {
        margin: null,
        limit: null,
        padding: null,
        animate: true,
        animationDuration: 300,
        ariaFormat: defaultFormatter,
        format: defaultFormatter,
    };
    // Tests are executed in the order they are presented here.
    var tests = {
        step: { r: false, t: testStep },
        keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
        keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
        keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
        start: { r: true, t: testStart },
        connect: { r: true, t: testConnect },
        direction: { r: true, t: testDirection },
        snap: { r: false, t: testSnap },
        animate: { r: false, t: testAnimate },
        animationDuration: { r: false, t: testAnimationDuration },
        range: { r: true, t: testRange },
        orientation: { r: false, t: testOrientation },
        margin: { r: false, t: testMargin },
        limit: { r: false, t: testLimit },
        padding: { r: false, t: testPadding },
        behaviour: { r: true, t: testBehaviour },
        ariaFormat: { r: false, t: testAriaFormat },
        format: { r: false, t: testFormat },
        tooltips: { r: false, t: testTooltips },
        keyboardSupport: { r: true, t: testKeyboardSupport },
        documentElement: { r: false, t: testDocumentElement },
        cssPrefix: { r: true, t: testCssPrefix },
        cssClasses: { r: true, t: testCssClasses },
        handleAttributes: { r: false, t: testHandleAttributes },
    };
    var defaults = {
        connect: false,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: true,
        cssPrefix: "noUi-",
        cssClasses: cssClasses,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10,
    };
    // AriaFormat defaults to regular format, if any.
    if (options.format && !options.ariaFormat) {
        options.ariaFormat = options.format;
    }
    // Run all options through a testing mechanism to ensure correct
    // input. It should be noted that options might get modified to
    // be handled properly. E.g. wrapping integers in arrays.
    Object.keys(tests).forEach(function (name) {
        // If the option isn't set, but it is required, throw an error.
        if (!isSet(options[name]) && defaults[name] === undefined) {
            if (tests[name].r) {
                throw new Error("noUiSlider: '" + name + "' is required.");
            }
            return;
        }
        tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    });
    // Forward pips options
    parsed.pips = options.pips;
    // All recent browsers accept unprefixed transform.
    // We need -ms- for IE9 and -webkit- for older Android;
    // Assume use of -webkit- if unprefixed and -ms- are not supported.
    // https://caniuse.com/#feat=transforms2d
    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== undefined;
    var noPrefix = d.style.transform !== undefined;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
    // Pips don't move, so we can place them using left/top.
    var styles = [
        ["left", "top"],
        ["right", "bottom"],
    ];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
}
//endregion
function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive();
    // All variables local to 'scope' are prefixed with 'scope_'
    // Slider DOM Nodes
    var scope_Target = target;
    var scope_Base;
    var scope_ConnectBase;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips;
    // Slider state values
    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {};
    var scope_ConnectsInverted = false;
    // Document Nodes
    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body;
    // For horizontal sliders in standard ltr documents,
    // make .noUi-origin overflow to the left so the document doesn't scroll.
    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
    // Creates a node, adds it to target, returns the new node.
    function addNodeTo(addTarget, className) {
        var div = scope_Document.createElement("div");
        if (className) {
            addClass(div, className);
        }
        addTarget.appendChild(div);
        return div;
    }
    // Append a origin to the base
    function addOrigin(base, handleNumber) {
        var origin = addNodeTo(base, options.cssClasses.origin);
        var handle = addNodeTo(origin, options.cssClasses.handle);
        addNodeTo(handle, options.cssClasses.touchArea);
        handle.setAttribute("data-handle", String(handleNumber));
        if (options.keyboardSupport) {
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
            // 0 = focusable and reachable
            handle.setAttribute("tabindex", "0");
            handle.addEventListener("keydown", function (event) {
                return eventKeydown(event, handleNumber);
            });
        }
        if (options.handleAttributes !== undefined) {
            var attributes_1 = options.handleAttributes[handleNumber];
            Object.keys(attributes_1).forEach(function (attribute) {
                handle.setAttribute(attribute, attributes_1[attribute]);
            });
        }
        handle.setAttribute("role", "slider");
        handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
        if (handleNumber === 0) {
            addClass(handle, options.cssClasses.handleLower);
        }
        else if (handleNumber === options.handles - 1) {
            addClass(handle, options.cssClasses.handleUpper);
        }
        origin.handle = handle;
        return origin;
    }
    // Insert nodes for connect elements
    function addConnect(base, add) {
        if (!add) {
            return false;
        }
        return addNodeTo(base, options.cssClasses.connect);
    }
    // Add handles to the slider base.
    function addElements(connectOptions, base) {
        scope_ConnectBase = addNodeTo(base, options.cssClasses.connects);
        scope_Handles = [];
        scope_Connects = [];
        scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[0]));
        // [::::O====O====O====]
        // connectOptions = [0, 1, 1, 1]
        for (var i = 0; i < options.handles; i++) {
            // Keep a list of all added handles.
            scope_Handles.push(addOrigin(base, i));
            scope_HandleNumbers[i] = i;
            scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[i + 1]));
        }
    }
    // Initialize a single slider.
    function addSlider(addTarget) {
        // Apply classes and data to the target.
        addClass(addTarget, options.cssClasses.target);
        if (options.dir === 0) {
            addClass(addTarget, options.cssClasses.ltr);
        }
        else {
            addClass(addTarget, options.cssClasses.rtl);
        }
        if (options.ort === 0) {
            addClass(addTarget, options.cssClasses.horizontal);
        }
        else {
            addClass(addTarget, options.cssClasses.vertical);
        }
        var textDirection = getComputedStyle(addTarget).direction;
        if (textDirection === "rtl") {
            addClass(addTarget, options.cssClasses.textDirectionRtl);
        }
        else {
            addClass(addTarget, options.cssClasses.textDirectionLtr);
        }
        return addNodeTo(addTarget, options.cssClasses.base);
    }
    function addTooltip(handle, handleNumber) {
        if (!options.tooltips || !options.tooltips[handleNumber]) {
            return false;
        }
        return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }
    function isSliderDisabled() {
        return scope_Target.hasAttribute("disabled");
    }
    // Disable the slider dragging if any handle is disabled
    function isHandleDisabled(handleNumber) {
        var handleOrigin = scope_Handles[handleNumber];
        return handleOrigin.hasAttribute("disabled");
    }
    function disable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].setAttribute("disabled", "");
            scope_Handles[handleNumber].handle.removeAttribute("tabindex");
        }
        else {
            scope_Target.setAttribute("disabled", "");
            scope_Handles.forEach(function (handle) {
                handle.handle.removeAttribute("tabindex");
            });
        }
    }
    function enable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].removeAttribute("disabled");
            scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
        }
        else {
            scope_Target.removeAttribute("disabled");
            scope_Handles.forEach(function (handle) {
                handle.removeAttribute("disabled");
                handle.handle.setAttribute("tabindex", "0");
            });
        }
    }
    function removeTooltips() {
        if (scope_Tooltips) {
            removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
            scope_Tooltips.forEach(function (tooltip) {
                if (tooltip) {
                    removeElement(tooltip);
                }
            });
            scope_Tooltips = null;
        }
    }
    // The tooltips option is a shorthand for using the 'update' event.
    function tooltips() {
        removeTooltips();
        // Tooltips are added with options.tooltips in original order.
        scope_Tooltips = scope_Handles.map(addTooltip);
        bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
            if (!scope_Tooltips || !options.tooltips) {
                return;
            }
            if (scope_Tooltips[handleNumber] === false) {
                return;
            }
            var formattedValue = values[handleNumber];
            if (options.tooltips[handleNumber] !== true) {
                formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
            }
            scope_Tooltips[handleNumber].innerHTML = formattedValue;
        });
    }
    function aria() {
        removeEvent("update" + INTERNAL_EVENT_NS.aria);
        bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
            // Update Aria Values for all handles, as a change in one changes min and max values for the next.
            scope_HandleNumbers.forEach(function (index) {
                var handle = scope_Handles[index];
                var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                var now = positions[index];
                // Formatted value for display
                var text = String(options.ariaFormat.to(unencoded[index]));
                // Map to slider range values
                min = scope_Spectrum.fromStepping(min).toFixed(1);
                max = scope_Spectrum.fromStepping(max).toFixed(1);
                now = scope_Spectrum.fromStepping(now).toFixed(1);
                handle.children[0].setAttribute("aria-valuemin", min);
                handle.children[0].setAttribute("aria-valuemax", max);
                handle.children[0].setAttribute("aria-valuenow", now);
                handle.children[0].setAttribute("aria-valuetext", text);
            });
        });
    }
    function getGroup(pips) {
        // Use the range.
        if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) {
            return scope_Spectrum.xVal;
        }
        if (pips.mode === PipsMode.Count) {
            if (pips.values < 2) {
                throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
            }
            // Divide 0 - 100 in 'count' parts.
            var interval = pips.values - 1;
            var spread = 100 / interval;
            var values = [];
            // List these parts and have them handled as 'positions'.
            while (interval--) {
                values[interval] = interval * spread;
            }
            values.push(100);
            return mapToRange(values, pips.stepped);
        }
        if (pips.mode === PipsMode.Positions) {
            // Map all percentages to on-range values.
            return mapToRange(pips.values, pips.stepped);
        }
        if (pips.mode === PipsMode.Values) {
            // If the value must be stepped, it needs to be converted to a percentage first.
            if (pips.stepped) {
                return pips.values.map(function (value) {
                    // Convert to percentage, apply step, return to value.
                    return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                });
            }
            // Otherwise, we can simply use the values.
            return pips.values;
        }
        return []; // pips.mode = never
    }
    function mapToRange(values, stepped) {
        return values.map(function (value) {
            return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
    }
    function generateSpread(pips) {
        function safeIncrement(value, increment) {
            // Avoid floating point variance by dropping the smallest decimal places.
            return Number((value + increment).toFixed(7));
        }
        var group = getGroup(pips);
        var indexes = {};
        var firstInRange = scope_Spectrum.xVal[0];
        var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
        var ignoreFirst = false;
        var ignoreLast = false;
        var prevPct = 0;
        // Create a copy of the group, sort it and filter away all duplicates.
        group = unique(group.slice().sort(function (a, b) {
            return a - b;
        }));
        // Make sure the range starts with the first element.
        if (group[0] !== firstInRange) {
            group.unshift(firstInRange);
            ignoreFirst = true;
        }
        // Likewise for the last one.
        if (group[group.length - 1] !== lastInRange) {
            group.push(lastInRange);
            ignoreLast = true;
        }
        group.forEach(function (current, index) {
            // Get the current step and the lower + upper positions.
            var step;
            var i;
            var q;
            var low = current;
            var high = group[index + 1];
            var newPct;
            var pctDifference;
            var pctPos;
            var type;
            var steps;
            var realSteps;
            var stepSize;
            var isSteps = pips.mode === PipsMode.Steps;
            // When using 'steps' mode, use the provided steps.
            // Otherwise, we'll step on to the next subrange.
            if (isSteps) {
                step = scope_Spectrum.xNumSteps[index];
            }
            // Default to a 'full' step.
            if (!step) {
                step = high - low;
            }
            // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
            if (high === undefined) {
                high = low;
            }
            // Make sure step isn't 0, which would cause an infinite loop (#654)
            step = Math.max(step, 0.0000001);
            // Find all steps in the subrange.
            for (i = low; i <= high; i = safeIncrement(i, step)) {
                // Get the percentage value for the current step,
                // calculate the size for the subrange.
                newPct = scope_Spectrum.toStepping(i);
                pctDifference = newPct - prevPct;
                steps = pctDifference / (pips.density || 1);
                realSteps = Math.round(steps);
                // This ratio represents the amount of percentage-space a point indicates.
                // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                // Round the percentage offset to an even number, then divide by two
                // to spread the offset on both sides of the range.
                stepSize = pctDifference / realSteps;
                // Divide all points evenly, adding the correct number to this subrange.
                // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                for (q = 1; q <= realSteps; q += 1) {
                    // The ratio between the rounded value and the actual size might be ~1% off.
                    // Correct the percentage offset by the number of points
                    // per subrange. density = 1 will result in 100 points on the
                    // full range, 2 for 50, 4 for 25, etc.
                    pctPos = prevPct + q * stepSize;
                    indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                }
                // Determine the point type.
                type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                if (!index && ignoreFirst && i !== high) {
                    type = 0;
                }
                if (!(i === high && ignoreLast)) {
                    // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                    indexes[newPct.toFixed(5)] = [i, type];
                }
                // Update the percentage count.
                prevPct = newPct;
            }
        });
        return indexes;
    }
    function addMarking(spread, filterFunc, formatter) {
        var _a, _b;
        var element = scope_Document.createElement("div");
        var valueSizeClasses = (_a = {},
            _a[PipsType.None] = "",
            _a[PipsType.NoValue] = options.cssClasses.valueNormal,
            _a[PipsType.LargeValue] = options.cssClasses.valueLarge,
            _a[PipsType.SmallValue] = options.cssClasses.valueSub,
            _a);
        var markerSizeClasses = (_b = {},
            _b[PipsType.None] = "",
            _b[PipsType.NoValue] = options.cssClasses.markerNormal,
            _b[PipsType.LargeValue] = options.cssClasses.markerLarge,
            _b[PipsType.SmallValue] = options.cssClasses.markerSub,
            _b);
        var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
        var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
        addClass(element, options.cssClasses.pips);
        addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
        function getClasses(type, source) {
            var a = source === options.cssClasses.value;
            var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
            var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
            return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
        }
        function addSpread(offset, value, type) {
            // Apply the filter function, if it is set.
            type = filterFunc ? filterFunc(value, type) : type;
            if (type === PipsType.None) {
                return;
            }
            // Add a marker for every point
            var node = addNodeTo(element, false);
            node.className = getClasses(type, options.cssClasses.marker);
            node.style[options.style] = offset + "%";
            // Values are only appended for points marked '1' or '2'.
            if (type > PipsType.NoValue) {
                node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.value);
                node.setAttribute("data-value", String(value));
                node.style[options.style] = offset + "%";
                node.innerHTML = String(formatter.to(value));
            }
        }
        // Append all points.
        Object.keys(spread).forEach(function (offset) {
            addSpread(offset, spread[offset][0], spread[offset][1]);
        });
        return element;
    }
    function removePips() {
        if (scope_Pips) {
            removeElement(scope_Pips);
            scope_Pips = null;
        }
    }
    function pips(pips) {
        // Fix #669
        removePips();
        var spread = generateSpread(pips);
        var filter = pips.filter;
        var format = pips.format || {
            to: function (value) {
                return String(Math.round(value));
            },
        };
        scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
        return scope_Pips;
    }
    // Shorthand for base dimensions.
    function baseSize() {
        var rect = scope_Base.getBoundingClientRect();
        var alt = ("offset" + ["Width", "Height"][options.ort]);
        return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    }
    // Handler for attaching events trough a proxy.
    function attachEvent(events, element, callback, data) {
        // This function can be used to 'filter' events to the slider.
        // element is a node, not a nodeList
        var method = function (event) {
            var e = fixEvent(event, data.pageOffset, data.target || element);
            // fixEvent returns false if this event has a different target
            // when handling (multi-) touch events;
            if (!e) {
                return false;
            }
            // doNotReject is passed by all end events to make sure released touches
            // are not rejected, leaving the slider "stuck" to the cursor;
            if (isSliderDisabled() && !data.doNotReject) {
                return false;
            }
            // Stop if an active 'tap' transition is taking place.
            if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (data.hover && e.buttons) {
                return false;
            }
            // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
            // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
            // touch-action: manipulation, but that allows panning, which breaks
            // sliders after zooming/on non-responsive pages.
            // See: https://bugs.webkit.org/show_bug.cgi?id=133112
            if (!supportsPassive) {
                e.preventDefault();
            }
            e.calcPoint = e.points[options.ort];
            // Call the event handler with the event [ and additional data ].
            callback(e, data);
            return;
        };
        var methods = [];
        // Bind a closure on the target for every event type.
        events.split(" ").forEach(function (eventName) {
            element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
            methods.push([eventName, method]);
        });
        return methods;
    }
    // Provide a clean event with standardized offset values.
    function fixEvent(e, pageOffset, eventTarget) {
        // Filter the event to register the type, which can be
        // touch, mouse or pointer. Offset changes need to be
        // made on an event specific basis.
        var touch = e.type.indexOf("touch") === 0;
        var mouse = e.type.indexOf("mouse") === 0;
        var pointer = e.type.indexOf("pointer") === 0;
        var x = 0;
        var y = 0;
        // IE10 implemented pointer events with a prefix;
        if (e.type.indexOf("MSPointer") === 0) {
            pointer = true;
        }
        // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
        // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
        // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
        if (e.type === "mousedown" && !e.buttons && !e.touches) {
            return false;
        }
        // The only thing one handle should be concerned about is the touches that originated on top of it.
        if (touch) {
            // Returns true if a touch originated on the target.
            var isTouchOnTarget = function (checkTouch) {
                var target = checkTouch.target;
                return (target === eventTarget ||
                    eventTarget.contains(target) ||
                    (e.composed && e.composedPath().shift() === eventTarget));
            };
            // In the case of touchstart events, we need to make sure there is still no more than one
            // touch on the target so we look amongst all touches.
            if (e.type === "touchstart") {
                var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                // Do not support more than one touch per handle.
                if (targetTouches.length > 1) {
                    return false;
                }
                x = targetTouches[0].pageX;
                y = targetTouches[0].pageY;
            }
            else {
                // In the other cases, find on changedTouches is enough.
                var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                // Cancel if the target touch has not moved.
                if (!targetTouch) {
                    return false;
                }
                x = targetTouch.pageX;
                y = targetTouch.pageY;
            }
        }
        pageOffset = pageOffset || getPageOffset(scope_Document);
        if (mouse || pointer) {
            x = e.clientX + pageOffset.x;
            y = e.clientY + pageOffset.y;
        }
        e.pageOffset = pageOffset;
        e.points = [x, y];
        e.cursor = mouse || pointer; // Fix #435
        return e;
    }
    // Translate a coordinate in the document to a percentage on the slider
    function calcPointToPercentage(calcPoint) {
        var location = calcPoint - offset(scope_Base, options.ort);
        var proposal = (location * 100) / baseSize();
        // Clamp proposal between 0% and 100%
        // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
        // are used (e.g. contained handles feature)
        proposal = limit(proposal);
        return options.dir ? 100 - proposal : proposal;
    }
    // Find handle closest to a certain percentage on the slider
    function getClosestHandle(clickedPosition) {
        var smallestDifference = 100;
        var handleNumber = false;
        scope_Handles.forEach(function (handle, index) {
            // Disabled handles are ignored
            if (isHandleDisabled(index)) {
                return;
            }
            var handlePosition = scope_Locations[index];
            var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
            // Initial state
            var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
            // Difference with this handle is smaller than the previously checked handle
            var isCloser = differenceWithThisHandle < smallestDifference;
            var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
            if (isCloser || isCloserAfter || clickAtEdge) {
                handleNumber = index;
                smallestDifference = differenceWithThisHandle;
            }
        });
        return handleNumber;
    }
    // Fire 'end' when a mouse or pen leaves the document.
    function documentLeave(event, data) {
        if (event.type === "mouseout" &&
            event.target.nodeName === "HTML" &&
            event.relatedTarget === null) {
            eventEnd(event, data);
        }
    }
    // Handle movement on document for handle and range drag.
    function eventMove(event, data) {
        // Fix #498
        // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
        // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
        // IE9 has .buttons and .which zero on mousemove.
        // Firefox breaks the spec MDN defines.
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
            return eventEnd(event, data);
        }
        // Check if we are moving up or down
        var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
        // Convert the movement into a percentage of the slider width/height
        var proposal = (movement * 100) / data.baseSize;
        moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
    }
    // Unbind move events on document, call callbacks.
    function eventEnd(event, data) {
        // The handle is no longer active, so remove the class.
        if (data.handle) {
            removeClass(data.handle, options.cssClasses.active);
            scope_ActiveHandlesCount -= 1;
        }
        // Unbind the move and end events, which are added on 'start'.
        data.listeners.forEach(function (c) {
            scope_DocumentElement.removeEventListener(c[0], c[1]);
        });
        if (scope_ActiveHandlesCount === 0) {
            // Remove dragging class.
            removeClass(scope_Target, options.cssClasses.drag);
            setZindex();
            // Remove cursor styles and text-selection events bound to the body.
            if (event.cursor) {
                scope_Body.style.cursor = "";
                scope_Body.removeEventListener("selectstart", preventDefault);
            }
        }
        if (options.events.smoothSteps) {
            data.handleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
            });
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
            });
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            fireEvent("end", handleNumber);
        });
    }
    // Bind move events on document.
    function eventStart(event, data) {
        // Ignore event if any handle is disabled
        if (data.handleNumbers.some(isHandleDisabled)) {
            return;
        }
        var handle;
        if (data.handleNumbers.length === 1) {
            var handleOrigin = scope_Handles[data.handleNumbers[0]];
            handle = handleOrigin.children[0];
            scope_ActiveHandlesCount += 1;
            // Mark the handle as 'active' so it can be styled.
            addClass(handle, options.cssClasses.active);
        }
        // A drag should never propagate up to the 'tap' event.
        event.stopPropagation();
        // Record the event listeners.
        var listeners = [];
        // Attach the move and end events.
        var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
            // The event target has changed so we need to propagate the original one so that we keep
            // relying on it to extract target touches.
            target: event.target,
            handle: handle,
            connect: data.connect,
            listeners: listeners,
            startCalcPoint: event.calcPoint,
            baseSize: baseSize(),
            pageOffset: event.pageOffset,
            handleNumbers: data.handleNumbers,
            buttonsProperty: event.buttons,
            locations: scope_Locations.slice(),
        });
        var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        // We want to make sure we pushed the listeners in the listener list rather than creating
        // a new one as it has already been passed to the event handlers.
        listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
        // Text selection isn't an issue on touch devices,
        // so adding cursor styles can be skipped.
        if (event.cursor) {
            // Prevent the 'I' cursor and extend the range-drag cursor.
            scope_Body.style.cursor = getComputedStyle(event.target).cursor;
            // Mark the target with a dragging state.
            if (scope_Handles.length > 1) {
                addClass(scope_Target, options.cssClasses.drag);
            }
            // Prevent text selection when dragging the handles.
            // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
            // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
            // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
            // The 'cursor' flag is false.
            // See: http://caniuse.com/#search=selectstart
            scope_Body.addEventListener("selectstart", preventDefault, false);
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("start", handleNumber);
        });
    }
    // Move closest handle to tapped location.
    function eventTap(event) {
        // The tap event shouldn't propagate up
        event.stopPropagation();
        var proposal = calcPointToPercentage(event.calcPoint);
        var handleNumber = getClosestHandle(proposal);
        // Tackle the case that all handles are 'disabled'.
        if (handleNumber === false) {
            return;
        }
        // Flag the slider as it is now in a transitional state.
        // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
        if (!options.events.snap) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        setHandle(handleNumber, proposal, true, true);
        setZindex();
        fireEvent("slide", handleNumber, true);
        fireEvent("update", handleNumber, true);
        if (!options.events.snap) {
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);
        }
        else {
            eventStart(event, { handleNumbers: [handleNumber] });
        }
    }
    // Fires a 'hover' event for a hovered mouse/pen position.
    function eventHover(event) {
        var proposal = calcPointToPercentage(event.calcPoint);
        var to = scope_Spectrum.getStep(proposal);
        var value = scope_Spectrum.fromStepping(to);
        Object.keys(scope_Events).forEach(function (targetEvent) {
            if ("hover" === targetEvent.split(".")[0]) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(scope_Self, value);
                });
            }
        });
    }
    // Handles keydown on focused handles
    // Don't move the document when pressing arrow keys on focused handles
    function eventKeydown(event, handleNumber) {
        if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
            return false;
        }
        var horizontalKeys = ["Left", "Right"];
        var verticalKeys = ["Down", "Up"];
        var largeStepKeys = ["PageDown", "PageUp"];
        var edgeKeys = ["Home", "End"];
        if (options.dir && !options.ort) {
            // On an right-to-left slider, the left and right keys act inverted
            horizontalKeys.reverse();
        }
        else if (options.ort && !options.dir) {
            // On a top-to-bottom slider, the up and down keys act inverted
            verticalKeys.reverse();
            largeStepKeys.reverse();
        }
        // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        var key = event.key.replace("Arrow", "");
        var isLargeDown = key === largeStepKeys[0];
        var isLargeUp = key === largeStepKeys[1];
        var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
        var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
        var isMin = key === edgeKeys[0];
        var isMax = key === edgeKeys[1];
        if (!isDown && !isUp && !isMin && !isMax) {
            return true;
        }
        event.preventDefault();
        var to;
        if (isUp || isDown) {
            var direction = isDown ? 0 : 1;
            var steps = getNextStepsForHandle(handleNumber);
            var step = steps[direction];
            // At the edge of a slider, do nothing
            if (step === null) {
                return false;
            }
            // No step set, use the default of 10% of the sub-range
            if (step === false) {
                step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
            }
            if (isLargeUp || isLargeDown) {
                step *= options.keyboardPageMultiplier;
            }
            else {
                step *= options.keyboardMultiplier;
            }
            // Step over zero-length ranges (#948);
            step = Math.max(step, 0.0000001);
            // Decrement for down steps
            step = (isDown ? -1 : 1) * step;
            to = scope_Values[handleNumber] + step;
        }
        else if (isMax) {
            // End key
            to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
        }
        else {
            // Home key
            to = options.spectrum.xVal[0];
        }
        setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
        fireEvent("slide", handleNumber);
        fireEvent("update", handleNumber);
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        return false;
    }
    // Attach events to several slider parts.
    function bindSliderEvents(behaviour) {
        // Attach the standard drag event to the handles.
        if (!behaviour.fixed) {
            scope_Handles.forEach(function (handle, index) {
                // These events are only bound to the visual handle
                // element, not the 'real' origin element.
                attachEvent(actions.start, handle.children[0], eventStart, {
                    handleNumbers: [index],
                });
            });
        }
        // Attach the tap event to the slider base.
        if (behaviour.tap) {
            attachEvent(actions.start, scope_Base, eventTap, {});
        }
        // Fire hover events
        if (behaviour.hover) {
            attachEvent(actions.move, scope_Base, eventHover, {
                hover: true,
            });
        }
        // Make the range draggable.
        if (behaviour.drag) {
            scope_Connects.forEach(function (connect, index) {
                if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                    return;
                }
                var handleBefore = scope_Handles[index - 1];
                var handleAfter = scope_Handles[index];
                var eventHolders = [connect];
                var handlesToDrag = [handleBefore, handleAfter];
                var handleNumbersToDrag = [index - 1, index];
                addClass(connect, options.cssClasses.draggable);
                // When the range is fixed, the entire range can
                // be dragged by the handles. The handle in the first
                // origin will propagate the start event upward,
                // but it needs to be bound manually on the other.
                if (behaviour.fixed) {
                    eventHolders.push(handleBefore.children[0]);
                    eventHolders.push(handleAfter.children[0]);
                }
                if (behaviour.dragAll) {
                    handlesToDrag = scope_Handles;
                    handleNumbersToDrag = scope_HandleNumbers;
                }
                eventHolders.forEach(function (eventHolder) {
                    attachEvent(actions.start, eventHolder, eventStart, {
                        handles: handlesToDrag,
                        handleNumbers: handleNumbersToDrag,
                        connect: connect,
                    });
                });
            });
        }
    }
    // Attach an event to this slider, possibly including a namespace
    function bindEvent(namespacedEvent, callback) {
        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
        scope_Events[namespacedEvent].push(callback);
        // If the event bound is 'update,' fire it immediately for all handles.
        if (namespacedEvent.split(".")[0] === "update") {
            scope_Handles.forEach(function (a, index) {
                fireEvent("update", index);
            });
        }
    }
    function isInternalNamespace(namespace) {
        return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
    }
    // Undo attachment of event
    function removeEvent(namespacedEvent) {
        var event = namespacedEvent && namespacedEvent.split(".")[0];
        var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
        Object.keys(scope_Events).forEach(function (bind) {
            var tEvent = bind.split(".")[0];
            var tNamespace = bind.substring(tEvent.length);
            if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                // only delete protected internal event if intentional
                if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                    delete scope_Events[bind];
                }
            }
        });
    }
    // External event handling
    function fireEvent(eventName, handleNumber, tap) {
        Object.keys(scope_Events).forEach(function (targetEvent) {
            var eventType = targetEvent.split(".")[0];
            if (eventName === eventType) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(
                    // Use the slider public API as the scope ('this')
                    scope_Self, 
                    // Return values as array, so arg_1[arg_2] is always valid.
                    scope_Values.map(options.format.to), 
                    // Handle index, 0 or 1
                    handleNumber, 
                    // Un-formatted slider values
                    scope_Values.slice(), 
                    // Event is fired by tap, true or false
                    tap || false, 
                    // Left offset of the handle, in relation to the slider
                    scope_Locations.slice(), 
                    // add the slider public API to an accessible parameter when this is unavailable
                    scope_Self);
                });
            }
        });
    }
    // Split out the handle positioning logic so the Move event can use it, too
    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
        var distance;
        // For sliders with multiple handles, limit movement to the other handle.
        // Apply the margin option by adding it to the handle positions.
        if (scope_Handles.length > 1 && !options.events.unconstrained) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                to = Math.max(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                to = Math.min(to, distance);
            }
        }
        // The limit option has the opposite effect, limiting handles to a
        // maximum distance from another. Limit must be > 0, as otherwise
        // handles would be unmovable.
        if (scope_Handles.length > 1 && options.limit) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                to = Math.min(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                to = Math.max(to, distance);
            }
        }
        // The padding option keeps the handles a certain distance from the
        // edges of the slider. Padding must be > 0.
        if (options.padding) {
            if (handleNumber === 0) {
                distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                to = Math.max(to, distance);
            }
            if (handleNumber === scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                to = Math.min(to, distance);
            }
        }
        if (!smoothSteps) {
            to = scope_Spectrum.getStep(to);
        }
        // Limit percentage to the 0 - 100 range
        to = limit(to);
        // Return false if handle can't move
        if (to === reference[handleNumber] && !getValue) {
            return false;
        }
        return to;
    }
    // Uses slider orientation to create CSS rules. a = base value;
    function inRuleOrder(v, a) {
        var o = options.ort;
        return (o ? a : v) + ", " + (o ? v : a);
    }
    // Moves handle(s) by a percentage
    // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
    function moveHandles(upward, proposal, locations, handleNumbers, connect) {
        var proposals = locations.slice();
        // Store first handle now, so we still have it in case handleNumbers is reversed
        var firstHandle = handleNumbers[0];
        var smoothSteps = options.events.smoothSteps;
        var b = [!upward, upward];
        var f = [upward, !upward];
        // Copy handleNumbers so we don't change the dataset
        handleNumbers = handleNumbers.slice();
        // Check to see which handle is 'leading'.
        // If that one can't move the second can't either.
        if (upward) {
            handleNumbers.reverse();
        }
        // Step 1: get the maximum percentage that any of the handles can move
        if (handleNumbers.length > 1) {
            handleNumbers.forEach(function (handleNumber, o) {
                var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                // Stop if one of the handles can't move.
                if (to === false) {
                    proposal = 0;
                }
                else {
                    proposal = to - proposals[handleNumber];
                    proposals[handleNumber] = to;
                }
            });
        }
        // If using one handle, check backward AND forward
        else {
            b = f = [true];
        }
        var state = false;
        // Step 2: Try to set the handles with the found percentage
        handleNumbers.forEach(function (handleNumber, o) {
            state =
                setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
        });
        // Step 3: If a handle moved, fire events
        if (state) {
            handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                fireEvent("slide", handleNumber);
            });
            // If target is a connect, then fire drag event
            if (connect != undefined) {
                fireEvent("drag", firstHandle);
            }
        }
    }
    // Takes a base value and an offset. This offset is used for the connect bar size.
    // In the initial design for this feature, the origin element was 1% wide.
    // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
    // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
    function transformDirection(a, b) {
        return options.dir ? 100 - a - b : a;
    }
    // Updates scope_Locations and scope_Values, updates visual state
    function updateHandlePosition(handleNumber, to) {
        // Update locations.
        scope_Locations[handleNumber] = to;
        // Convert the value to the slider stepping/range.
        scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
        var translation = transformDirection(to, 0) - scope_DirOffset;
        var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
        scope_Handles[handleNumber].style[options.transformRule] = translateRule;
        // sanity check for at least 2 handles (e.g. during setup)
        if (options.events.invertConnects && scope_Locations.length > 1) {
            // check if handles passed each other, but don't match the ConnectsInverted state
            var handlesAreInOrder = scope_Locations.every(function (position, index, locations) {
                return index === 0 || position >= locations[index - 1];
            });
            if (scope_ConnectsInverted !== !handlesAreInOrder) {
                // invert connects when handles pass each other
                invertConnects();
                // invertConnects already updates all connect elements
                return;
            }
        }
        updateConnect(handleNumber);
        updateConnect(handleNumber + 1);
        if (scope_ConnectsInverted) {
            // When connects are inverted, we also have to update adjacent connects
            updateConnect(handleNumber - 1);
            updateConnect(handleNumber + 2);
        }
    }
    // Handles before the slider middle are stacked later = higher,
    // Handles after the middle later is lower
    // [[7] [8] .......... | .......... [5] [4]
    function setZindex() {
        scope_HandleNumbers.forEach(function (handleNumber) {
            var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
            var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
            scope_Handles[handleNumber].style.zIndex = String(zIndex);
        });
    }
    // Test suggested values and apply margin, step.
    // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
        if (!exactInput) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
        }
        if (to === false) {
            return false;
        }
        updateHandlePosition(handleNumber, to);
        return true;
    }
    // Updates style attribute for connect nodes
    function updateConnect(index) {
        // Skip connects set to false
        if (!scope_Connects[index]) {
            return;
        }
        // Create a copy of locations, so we can sort them for the local scope logic
        var locations = scope_Locations.slice();
        if (scope_ConnectsInverted) {
            locations.sort(function (a, b) {
                return a - b;
            });
        }
        var l = 0;
        var h = 100;
        if (index !== 0) {
            l = locations[index - 1];
        }
        if (index !== scope_Connects.length - 1) {
            h = locations[index];
        }
        // We use two rules:
        // 'translate' to change the left/top offset;
        // 'scale' to change the width of the element;
        // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
        var connectWidth = h - l;
        var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
        var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
        scope_Connects[index].style[options.transformRule] =
            translateRule + " " + scaleRule;
    }
    // Parses value passed to .set method. Returns current value if not parse-able.
    function resolveToValue(to, handleNumber) {
        // Setting with null indicates an 'ignore'.
        // Inputting 'false' is invalid.
        if (to === null || to === false || to === undefined) {
            return scope_Locations[handleNumber];
        }
        // If a formatted number was passed, attempt to decode it.
        if (typeof to === "number") {
            to = String(to);
        }
        to = options.format.from(to);
        if (to !== false) {
            to = scope_Spectrum.toStepping(to);
        }
        // If parsing the number failed, use the current value.
        if (to === false || isNaN(to)) {
            return scope_Locations[handleNumber];
        }
        return to;
    }
    // Set the slider value.
    function valueSet(input, fireSetEvent, exactInput) {
        var values = asArray(input);
        var isInit = scope_Locations[0] === undefined;
        // Event fires by default
        fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
        // Animation is optional.
        // Make sure the initial values were set before using animated placement.
        if (options.animate && !isInit) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        // First pass, without lookAhead but with lookBackward. Values are set from left to right.
        scope_HandleNumbers.forEach(function (handleNumber) {
            setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
        });
        var i = scope_HandleNumbers.length === 1 ? 0 : 1;
        // Spread handles evenly across the slider if the range has no size (min=max)
        if (isInit && scope_Spectrum.hasNoSize()) {
            exactInput = true;
            scope_Locations[0] = 0;
            if (scope_HandleNumbers.length > 1) {
                var space_1 = 100 / (scope_HandleNumbers.length - 1);
                scope_HandleNumbers.forEach(function (handleNumber) {
                    scope_Locations[handleNumber] = handleNumber * space_1;
                });
            }
        }
        // Secondary passes. Now that all base values are set, apply constraints.
        // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
        for (; i < scope_HandleNumbers.length; ++i) {
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
            });
        }
        setZindex();
        scope_HandleNumbers.forEach(function (handleNumber) {
            fireEvent("update", handleNumber);
            // Fire the event only for handles that received a new value, as per #579
            if (values[handleNumber] !== null && fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        });
    }
    // Reset slider to initial values
    function valueReset(fireSetEvent) {
        valueSet(options.start, fireSetEvent);
    }
    // Set value for a single handle
    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
        // Ensure numeric input
        handleNumber = Number(handleNumber);
        if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
            throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
        }
        // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
        // The exactInput argument can be used to ignore slider stepping (#436)
        setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
        fireEvent("update", handleNumber);
        if (fireSetEvent) {
            fireEvent("set", handleNumber);
        }
    }
    // Get the slider value.
    function valueGet(unencoded) {
        if (unencoded === void 0) { unencoded = false; }
        if (unencoded) {
            // return a copy of the raw values
            return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
        }
        var values = scope_Values.map(options.format.to);
        // If only one handle is used, return a single value.
        if (values.length === 1) {
            return values[0];
        }
        return values;
    }
    // Removes classes from the root and empties it.
    function destroy() {
        // remove protected internal listeners
        removeEvent(INTERNAL_EVENT_NS.aria);
        removeEvent(INTERNAL_EVENT_NS.tooltips);
        Object.keys(options.cssClasses).forEach(function (key) {
            removeClass(scope_Target, options.cssClasses[key]);
        });
        while (scope_Target.firstChild) {
            scope_Target.removeChild(scope_Target.firstChild);
        }
        delete scope_Target.noUiSlider;
    }
    function getNextStepsForHandle(handleNumber) {
        var location = scope_Locations[handleNumber];
        var nearbySteps = scope_Spectrum.getNearbySteps(location);
        var value = scope_Values[handleNumber];
        var increment = nearbySteps.thisStep.step;
        var decrement = null;
        // If snapped, directly use defined step value
        if (options.snap) {
            return [
                value - nearbySteps.stepBefore.startValue || null,
                nearbySteps.stepAfter.startValue - value || null,
            ];
        }
        // If the next value in this step moves into the next step,
        // the increment is the start of the next step - the current value
        if (increment !== false) {
            if (value + increment > nearbySteps.stepAfter.startValue) {
                increment = nearbySteps.stepAfter.startValue - value;
            }
        }
        // If the value is beyond the starting point
        if (value > nearbySteps.thisStep.startValue) {
            decrement = nearbySteps.thisStep.step;
        }
        else if (nearbySteps.stepBefore.step === false) {
            decrement = false;
        }
        // If a handle is at the start of a step, it always steps back into the previous step first
        else {
            decrement = value - nearbySteps.stepBefore.highestStep;
        }
        // Now, if at the slider edges, there is no in/decrement
        if (location === 100) {
            increment = null;
        }
        else if (location === 0) {
            decrement = null;
        }
        // As per #391, the comparison for the decrement step can have some rounding issues.
        var stepDecimals = scope_Spectrum.countStepDecimals();
        // Round per #391
        if (increment !== null && increment !== false) {
            increment = Number(increment.toFixed(stepDecimals));
        }
        if (decrement !== null && decrement !== false) {
            decrement = Number(decrement.toFixed(stepDecimals));
        }
        return [decrement, increment];
    }
    // Get the current step size for the slider.
    function getNextSteps() {
        return scope_HandleNumbers.map(getNextStepsForHandle);
    }
    // Updatable: margin, limit, padding, step, range, animate, snap
    function updateOptions(optionsToUpdate, fireSetEvent) {
        // Spectrum is created using the range, snap, direction and step options.
        // 'snap' and 'step' can be updated.
        // If 'snap' and 'step' are not passed, they should remain unchanged.
        var v = valueGet();
        var updateAble = [
            "margin",
            "limit",
            "padding",
            "range",
            "animate",
            "snap",
            "step",
            "format",
            "pips",
            "tooltips",
            "connect",
        ];
        // Only change options that we're actually passed to update.
        updateAble.forEach(function (name) {
            // Check for undefined. null removes the value.
            if (optionsToUpdate[name] !== undefined) {
                originalOptions[name] = optionsToUpdate[name];
            }
        });
        var newOptions = testOptions(originalOptions);
        // Load new options into the slider state
        updateAble.forEach(function (name) {
            if (optionsToUpdate[name] !== undefined) {
                options[name] = newOptions[name];
            }
        });
        scope_Spectrum = newOptions.spectrum;
        // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
        options.margin = newOptions.margin;
        options.limit = newOptions.limit;
        options.padding = newOptions.padding;
        // Update pips, removes existing.
        if (options.pips) {
            pips(options.pips);
        }
        else {
            removePips();
        }
        // Update tooltips, removes existing.
        if (options.tooltips) {
            tooltips();
        }
        else {
            removeTooltips();
        }
        // Invalidate the current positioning so valueSet forces an update.
        scope_Locations = [];
        valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        // Update connects only if it was set
        if (optionsToUpdate.connect) {
            updateConnectOption();
        }
    }
    function updateConnectOption() {
        // IE supported way of removing children including event handlers
        while (scope_ConnectBase.firstChild) {
            scope_ConnectBase.removeChild(scope_ConnectBase.firstChild);
        }
        // Adding new connects according to the new connect options
        for (var i = 0; i <= options.handles; i++) {
            scope_Connects[i] = addConnect(scope_ConnectBase, options.connect[i]);
            updateConnect(i);
        }
        // re-adding drag events for the new connect elements
        // to ignore the other events we have to negate the 'if (!behaviour.fixed)' check
        bindSliderEvents({ drag: options.events.drag, fixed: true });
    }
    // Invert options for connect handles
    function invertConnects() {
        scope_ConnectsInverted = !scope_ConnectsInverted;
        testConnect(options, 
        // inverse the connect boolean array
        options.connect.map(function (b) { return !b; }));
        updateConnectOption();
    }
    // Initialization steps
    function setupSlider() {
        // Create the base element, initialize HTML and set classes.
        // Add handles and connect elements.
        scope_Base = addSlider(scope_Target);
        addElements(options.connect, scope_Base);
        // Attach user events.
        bindSliderEvents(options.events);
        // Use the public value method to set the start values.
        valueSet(options.start);
        if (options.pips) {
            pips(options.pips);
        }
        if (options.tooltips) {
            tooltips();
        }
        aria();
    }
    setupSlider();
    var scope_Self = {
        destroy: destroy,
        steps: getNextSteps,
        on: bindEvent,
        off: removeEvent,
        get: valueGet,
        set: valueSet,
        setHandle: valueSetHandle,
        reset: valueReset,
        disable: disable,
        enable: enable,
        // Exposed for unit testing, don't use this in your application.
        __moveHandles: function (upward, proposal, handleNumbers) {
            moveHandles(upward, proposal, scope_Locations, handleNumbers);
        },
        options: originalOptions,
        updateOptions: updateOptions,
        target: scope_Target,
        removePips: removePips,
        removeTooltips: removeTooltips,
        getPositions: function () {
            return scope_Locations.slice();
        },
        getTooltips: function () {
            return scope_Tooltips;
        },
        getOrigins: function () {
            return scope_Handles;
        },
        pips: pips, // Issue #594
    };
    return scope_Self;
}
// Run the standard initializer
function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
        throw new Error("noUiSlider: create requires a single element, got: " + target);
    }
    // Throw an error if the slider was already initialized.
    if (target.noUiSlider) {
        throw new Error("noUiSlider: Slider was already initialized.");
    }
    // Test the options and create the slider environment;
    var options = testOptions(originalOptions);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // Exposed for unit testing, don't use this in your application.
    __spectrum: Spectrum,
    // A reference to the default classes, allows global changes.
    // Use the cssClasses option for changes to one slider.
    cssClasses: cssClasses,
    create: initialize,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./web/src/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/styles.scss */ "./web/src/stylesheets/styles.scss");
/* harmony import */ var _javascripts_pricing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascripts/pricing.js */ "./web/src/javascripts/pricing.js");
/* harmony import */ var _javascripts_pricing_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascripts/pricing-slider.js */ "./web/src/javascripts/pricing-slider.js");



console.log("Hello World! Index.js is running");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQUEsQ0FBQztRQUFDLEtBQUssQ0FBQztVQUFDLE9BQU8sVUFBU0EsQ0FBQyxFQUFDRCxDQUFDLEVBQUM7WUFBQyxPQUFPUCxDQUFDLENBQUNZLElBQUksQ0FBQ1gsQ0FBQyxFQUFDTyxDQUFDLEVBQUNELENBQUMsQ0FBQztVQUFBLENBQUM7UUFBQyxLQUFLLENBQUM7VUFBQyxPQUFPLFVBQVNDLENBQUMsRUFBQ0QsQ0FBQyxFQUFDRSxDQUFDLEVBQUM7WUFBQyxPQUFPVCxDQUFDLENBQUNZLElBQUksQ0FBQ1gsQ0FBQyxFQUFDTyxDQUFDLEVBQUNELENBQUMsRUFBQ0UsQ0FBQyxDQUFDO1VBQUEsQ0FBQztNQUFBO01BQUMsT0FBTyxZQUFVO1FBQUMsT0FBT1QsQ0FBQyxDQUFDcUssS0FBSyxDQUFDcEssQ0FBQyxFQUFDdUUsU0FBUyxDQUFDO01BQUEsQ0FBQztJQUFBLENBQUM7RUFBQSxDQUFDLEVBQUMsVUFBU3hFLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0lBQUNELENBQUMsQ0FBQ0UsT0FBTyxHQUFDLFVBQVNGLENBQUMsRUFBQztNQUFDLElBQUcsVUFBVSxJQUFFLE9BQU9BLENBQUMsRUFBQyxNQUFNdUssU0FBUyxDQUFDdkssQ0FBQyxHQUFDLHFCQUFxQixDQUFDO01BQUMsT0FBT0EsQ0FBQztJQUFBLENBQUM7RUFBQSxDQUFDLEVBQUMsVUFBU0EsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztJQUFDUixDQUFDLENBQUNFLE9BQU8sR0FBQ00sQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUFBLENBQUMsRUFBQyxVQUFTUixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO0lBQUMsSUFBSUQsQ0FBQyxHQUFDQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUNDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUFDUixDQUFDLENBQUNFLE9BQU8sR0FBQ00sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLFVBQVNSLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUM7TUFB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QUNFLE9BQU8sR0FBQztNQUFDLFNBQVMsRUFBQ00sQ0FBQyxDQUFDLEVBQUUsQ0FBQztNQUFDb0IsVUFBVSxFQUFDLENBQUM7SUFBQyxDQUFDO0VBQUEsQ0FBQyxFQUFDLFVBQVM1QixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO0lBQUNBLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQ1IsQ0FBQyxDQUFDRSxPQUFPLEdBQUNNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ3VDLE1BQU0sQ0FBQzhELElBQUk7RUFBQSxDQUFDLEVBQUMsVUFBUzdHLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUM7SUFBQyxJQUFJRCxDQUFDLEdBQUNDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFBQ0EsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBQyxVQUFTUixDQUFDLEVBQUM7TUFBQyxPQUFPLFVBQVNDLENBQUMsRUFBQztRQUFDLE9BQU9ELENBQUMsQ0FBQ08sQ0FBQyxDQUFDTixDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7SUFBQSxDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUMsVUFBU0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztJQUFDLElBQUlELENBQUMsR0FBQ0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUFDUixDQUFDLENBQUNFLE9BQU8sR0FBQyxVQUFTRixDQUFDLEVBQUM7TUFBQyxPQUFPK0MsTUFBTSxDQUFDeEMsQ0FBQyxDQUFDUCxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7RUFBQSxDQUFDLEVBQUMsVUFBU0EsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztJQUFDLElBQUlELENBQUMsR0FBQ0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQztNQUFDQyxDQUFDLEdBQUNELENBQUMsQ0FBQyxFQUFFLENBQUM7TUFBQ3FCLENBQUMsR0FBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFBQ1IsQ0FBQyxDQUFDRSxPQUFPLEdBQUMsVUFBU0YsQ0FBQyxFQUFDQyxD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SSxDQUFDLENBQUMsRUFBRSxDQUFDO01BQUNpSSxDQUFDLEdBQUNqSSxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQUEsQ0FBQyxFQUFDLFVBQVNSLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUM7SUFBQ1IsQ0FBQyxDQUFDRSxPQUFPLEdBQUM7TUFBQyxTQUFTLEVBQUNNLENBQUMsQ0FBQyxFQUFFLENBQUM7TUFBQ29CLFVBQVUsRUFBQyxDQUFDO0lBQUMsQ0FBQztFQUFBLENBQUMsRUFBQyxVQUFTNUIsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztJQUFDQSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUNSLENBQUMsQ0FBQ0UsT0FBTyxHQUFDTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUN1QyxNQUFNLENBQUN3TixJQUFJO0VBQUEsQ0FBQyxFQUFDLFVBQVN2USxDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO0lBQUMsSUFBSUQsQ0FBQyxHQUFDQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQUNBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUMsVUFBU1IsQ0FBQyxFQUFDO01BQUMsT0FBTyxVQUFTQyxDQUFDLEVBQUM7UUFBQyxPQUFPRCxDQUFDLElBQUVPLENBQUMsQ0FBQ04sQ0FBQyxDQUFDLEdBQUNELENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEdBQUNBLENBQUM7TUFBQSxDQUFDO0lBQUEsQ0FBQyxDQUFDO0VBQUEsQ0FBQyxFQUFDLFVBQVNELENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0lBQUMsWUFBWTs7SUFBQyxTQUFTTyxDQUFDQSxDQUFDUixDQUFDLEVBQUNDLENBQUMsRUFBQztNQUFDLElBQUcsVUFBVSxJQUFFLE9BQU9ELENBQUMsRUFBQyxPQUFPQSxDQUFDO01BQUMsSUFBSVEsQ0FBQyxHQUFDLFNBQUFBLENBQUEsRUFBVTtRQUFDLElBQUlBLENBQUMsR0FBQ2dFLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1FBQUMsT0FBT0QsU0FBUyxDQUFDQSxTQUFTLENBQUNDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBQ3hFLENBQUMsQ0FBQ08sQ0FBQyxDQUFDLEVBQUNSLENBQUMsQ0FBQ3FLLEtBQUssQ0FBQyxJQUFJLEVBQUM3RixTQUFTLENBQUM7TUFBQSxDQUFDO01BQUMsT0FBT2hFLENBQUM7SUFBQTtJQUFDUCxDQUFDLENBQUMyQixVQUFVLEdBQUMsQ0FBQyxDQUFDLEVBQUMzQixDQUFDLENBQUNvUSxVQUFVLEdBQUM3UCxDQUFDO0VBQUEsQ0FBQyxFQUFDLFVBQVNSLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0lBQUMsWUFBWTs7SUFBQ0EsQ0FBQyxDQUFDMkIsVUFBVSxHQUFDLENBQUMsQ0FBQyxFQUFDM0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFDLFVBQVNELENBQUMsRUFBQztNQUFDLENBQUMsWUFBVTtRQUFDLFFBQVEsSUFBRSxPQUFPd1EsVUFBVSxLQUFHek4sTUFBTSxDQUFDQyxTQUFTLENBQUNvSyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUMsWUFBVTtVQUFDLE9BQU8sSUFBSTtRQUFBLENBQUMsQ0FBQyxFQUFDcUQsU0FBUyxDQUFDRCxVQUFVLEdBQUNDLFNBQVMsRUFBQyxPQUFPMU4sTUFBTSxDQUFDQyxTQUFTLENBQUN5TixTQUFTLENBQUM7TUFBQSxDQUFDLENBQUMsQ0FBQztNQUFDLElBQUl4USxDQUFDLEdBQUN1USxVQUFVLENBQUNsUSxVQUFVO01BQUNOLENBQUMsQ0FBQzBRLFVBQVUsR0FBQyxZQUFVO1FBQUMsT0FBT0YsVUFBVSxDQUFDbFEsVUFBVSxLQUFHTixDQUFDLEtBQUd3USxVQUFVLENBQUNsUSxVQUFVLEdBQUNMLENBQUMsQ0FBQyxFQUFDRCxDQUFDO01BQUEsQ0FBQztJQUFBLENBQUMsRUFBQ0EsQ0FBQyxDQUFDRSxPQUFPLEdBQUNELENBQUMsQ0FBQyxTQUFTLENBQUM7RUFBQSxDQUFDLEVBQUMsVUFBU0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7SUFBQyxZQUFZOztJQUFDQSxDQUFDLENBQUMyQixVQUFVLEdBQUMsQ0FBQyxDQUFDO0lBQUMsSUFBSXBCLENBQUMsR0FBQztNQUFDMEMsT0FBTyxFQUFDO1FBQUN5TixnQkFBZ0IsRUFBQyxTQUFBQSxDQUFTM1EsQ0FBQyxFQUFDO1VBQUMsT0FBTSxlQUFlLEtBQUdBLENBQUMsQ0FBQzRRLElBQUksSUFBRSxDQUFDLG1CQUFtQixLQUFHNVEsQ0FBQyxDQUFDNFEsSUFBSSxJQUFFLGdCQUFnQixLQUFHNVEsQ0FBQyxDQUFDNFEsSUFBSSxLQUFHLENBQUMsRUFBRTVRLENBQUMsQ0FBQzZRLE1BQU0sSUFBRTdRLENBQUMsQ0FBQzZRLE1BQU0sQ0FBQ3BNLE1BQU0sSUFBRXpFLENBQUMsQ0FBQzBNLElBQUksQ0FBQztRQUFBLENBQUM7UUFBQ29FLFFBQVEsRUFBQyxTQUFBQSxDQUFTOVEsQ0FBQyxFQUFDO1VBQUMsT0FBTSxZQUFZLENBQUMyRSxJQUFJLENBQUMzRSxDQUFDLENBQUMrUSxRQUFRLENBQUM7UUFBQSxDQUFDO1FBQUNDLFFBQVEsRUFBQyxTQUFBQSxDQUFTaFIsQ0FBQyxFQUFDO1VBQUMsT0FBTyxDQUFDLEtBQUdBLENBQUMsQ0FBQ2lSLEtBQUssQ0FBQ3hNLE1BQU0sSUFBRSxDQUFDakUsQ0FBQyxDQUFDMEMsT0FBTyxDQUFDNE4sUUFBUSxDQUFDOVEsQ0FBQyxDQUFDLElBQUUsQ0FBQ0EsQ0FBQyxDQUFDbVEsS0FBSztRQUFBO01BQUM7SUFBQyxDQUFDO0lBQUNsUSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUNPLENBQUMsRUFBQ1IsQ0FBQyxDQUFDRSxPQUFPLEdBQUNELENBQUMsQ0FBQyxTQUFTLENBQUM7RUFBQSxDQUFDLEVBQUMsVUFBU0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztJQUFDLFlBQVk7O0lBQUMsU0FBU0QsQ0FBQ0EsQ0FBQ1AsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQyxJQUFHLFNBQVMsS0FBR0QsQ0FBQyxDQUFDNFEsSUFBSSxFQUFDLE9BQU81USxDQUFDO01BQUNvQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM4UCxFQUFFLEdBQUNoUCxDQUFDLEVBQUNBLENBQUMsQ0FBQ2lQLE9BQU8sR0FBQyxVQUFTblIsQ0FBQyxFQUFDO1FBQUMsT0FBTyxJQUFJa0MsQ0FBQyxDQUFDa1AsY0FBYyxDQUFDblIsQ0FBQyxJQUFFQSxDQUFDLENBQUNvUixPQUFPLEVBQUNyUixDQUFDLENBQUM7TUFBQSxDQUFDO01BQUMsSUFBSVEsQ0FBQyxHQUFDWSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNNLEtBQUssQ0FBQzFCLENBQUMsQ0FBQztNQUFDLE9BQU9RLENBQUM7SUFBQTtJQUFDLFNBQVNDLENBQUNBLENBQUNULENBQUMsRUFBQ0MsQ0FBQyxFQUFDO01BQUMsSUFBSU8sQ0FBQyxHQUFDRCxDQUFDLENBQUNQLENBQUMsRUFBQ0MsQ0FBQyxDQUFDO1FBQUNRLENBQUMsR0FBQyxJQUFJUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNoQixDQUFDLENBQUM7TUFBQyxPQUFPUSxDQUFDLENBQUM2USxNQUFNLENBQUM5USxDQUFDLENBQUM7SUFBQTtJQUFDLElBQUlxQixDQUFDLEdBQUNyQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO01BQUNzQixDQUFDLEdBQUN0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQUNQLENBQUMsQ0FBQzJCLFVBQVUsR0FBQyxDQUFDLENBQUMsRUFBQzNCLENBQUMsQ0FBQzBCLHNCQUFzQixHQUFDcEIsQ0FBQyxFQUFDTixDQUFDLENBQUN5QixLQUFLLEdBQUNqQixDQUFDO0lBQUMsSUFBSXNCLENBQUMsR0FBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUM7TUFBQ1ksQ0FBQyxHQUFDUyxDQUFDLENBQUNFLENBQUMsQ0FBQztNQUFDUCxDQUFDLEdBQUNoQixDQUFDLENBQUMsRUFBRSxDQUFDO01BQUNTLENBQUMsR0FBQ1ksQ0FBQyxDQUFDTCxDQUFDLENBQUM7TUFBQ1EsQ0FBQyxHQUFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztNQUFDSyxDQUFDLEdBQUNpQixDQUFDLENBQUNFLENBQUMsQ0FBQztNQUFDQyxDQUFDLEdBQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUNQLENBQUMsQ0FBQ3dCLE1BQU0sR0FBQ0wsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUFDLElBQUljLENBQUMsR0FBQyxDQUFDLENBQUM7SUFBQ0QsQ0FBQyxDQUFDTyxNQUFNLENBQUNOLENBQUMsRUFBQ3JCLENBQUMsQ0FBQztFQUFBLENBQUMsRUFBQyxVQUFTYixDQUFDLEVBQUNDLENBQUMsRUFBQztJQUFDLFlBQVk7O0lBQUNBLENBQUMsQ0FBQzJCLFVBQVUsR0FBQyxDQUFDLENBQUM7SUFBQyxJQUFJcEIsQ0FBQyxHQUFDLFlBQVU7TUFBQyxTQUFTUixDQUFDQSxDQUFBLEVBQUU7UUFBQyxJQUFJLENBQUNrUixFQUFFLEdBQUMsQ0FBQyxDQUFDO01BQUE7TUFBQyxJQUFJalIsQ0FBQyxHQUFDO1VBQUNzUixLQUFLLEVBQUMsU0FBQUEsQ0FBQSxFQUFVLENBQUMsQ0FBQztVQUFDTCxFQUFFLEVBQUMsQ0FBQyxDQUFDO1VBQUNNLFFBQVEsRUFBQztZQUFDQyxLQUFLLEVBQUMsQ0FBQztZQUFDckIsSUFBSSxFQUFDLENBQUM7WUFBQ1gsT0FBTyxFQUFDLENBQUM7WUFBQ2lDLEdBQUcsRUFBQyxDQUFDO1lBQUNDLG1CQUFtQixFQUFDLENBQUM7WUFBQ0MsU0FBUyxFQUFDLENBQUM7WUFBQ0MsUUFBUSxFQUFDLENBQUM7WUFBQ0MsS0FBSyxFQUFDLENBQUM7WUFBQ0MsUUFBUSxFQUFDLEVBQUU7WUFBQ25ELE9BQU8sRUFBQyxFQUFFO1lBQUNvRCxZQUFZLEVBQUMsRUFBRTtZQUFDQyxPQUFPLEVBQUMsRUFBRTtZQUFDQyxPQUFPLEVBQUMsRUFBRTtZQUFDQyxPQUFPLEVBQUMsRUFBRTtZQUFDQyxZQUFZLEVBQUMsRUFBRTtZQUFDQyxvQkFBb0IsRUFBQyxFQUFFO1lBQUNDLGFBQWEsRUFBQyxFQUFFO1lBQUNDLGNBQWMsRUFBQyxFQUFFO1lBQUNDLFVBQVUsRUFBQyxFQUFFO1lBQUNDLHdCQUF3QixFQUFDLEVBQUU7WUFBQ0Msb0JBQW9CLEVBQUMsRUFBRTtZQUFDQyxlQUFlLEVBQUMsRUFBRTtZQUFDQyxTQUFTLEVBQUMsRUFBRTtZQUFDQyxhQUFhLEVBQUMsRUFBRTtZQUFDQyxVQUFVLEVBQUMsRUFBRTtZQUFDQyxXQUFXLEVBQUMsRUFBRTtZQUFDQyxhQUFhLEVBQUMsRUFBRTtZQUFDQyxVQUFVLEVBQUMsRUFBRTtZQUFDQyxxQkFBcUIsRUFBQyxFQUFFO1lBQUNDLGlCQUFpQixFQUFDLEVBQUU7WUFBQ0MsaUJBQWlCLEVBQUMsRUFBRTtZQUFDQyxLQUFLLEVBQUMsRUFBRTtZQUFDQyxZQUFZLEVBQUMsRUFBRTtZQUFDQyx1QkFBdUIsRUFBQyxFQUFFO1lBQUNDLG1CQUFtQixFQUFDLEVBQUU7WUFBQ0MsbUJBQW1CLEVBQUMsRUFBRTtZQUFDQyxnQkFBZ0IsRUFBQyxFQUFFO1lBQUNDLGtCQUFrQixFQUFDLEVBQUU7WUFBQ0MsNEJBQTRCLEVBQUMsRUFBRTtZQUFDQyx3QkFBd0IsRUFBQyxFQUFFO1lBQUNDLHdCQUF3QixFQUFDLEVBQUU7WUFBQ0MsaUJBQWlCLEVBQUMsRUFBRTtZQUFDQyxPQUFPLEVBQUMsRUFBRTtZQUFDQyxZQUFZLEVBQUMsRUFBRTtZQUFDQyxvQkFBb0IsRUFBQyxFQUFFO1lBQUNDLGFBQWEsRUFBQyxFQUFFO1lBQUNDLElBQUksRUFBQyxFQUFFO1lBQUNDLG9CQUFvQixFQUFDLEVBQUU7WUFBQ0MsZ0JBQWdCLEVBQUMsRUFBRTtZQUFDQyxjQUFjLEVBQUMsRUFBRTtZQUFDQyxvQkFBb0IsRUFBQyxFQUFFO1lBQUNDLGdCQUFnQixFQUFDLEVBQUU7WUFBQ0MsZUFBZSxFQUFDLEVBQUU7WUFBQ0MsWUFBWSxFQUFDLEVBQUU7WUFBQ0MsV0FBVyxFQUFDLEVBQUU7WUFBQ0MsbUJBQW1CLEVBQUMsRUFBRTtZQUFDQyxlQUFlLEVBQUMsRUFBRTtZQUFDQyxnQkFBZ0IsRUFBQyxFQUFFO1lBQUNDLGtCQUFrQixFQUFDLEVBQUU7WUFBQ0MsNEJBQTRCLEVBQUMsRUFBRTtZQUFDQyx3QkFBd0IsRUFBQyxFQUFFO1lBQUNDLEtBQUssRUFBQyxFQUFFO1lBQUNDLEtBQUssRUFBQyxFQUFFO1lBQUNDLFVBQVUsRUFBQyxFQUFFO1lBQUNDLGlCQUFpQixFQUFDLEVBQUU7WUFBQ0MsYUFBYSxFQUFDLEVBQUU7WUFBQ0MsV0FBVyxFQUFDLEVBQUU7WUFBQzlJLElBQUksRUFBQyxFQUFFO1lBQUMrSSxxQkFBcUIsRUFBQyxFQUFFO1lBQUNDLFdBQVcsRUFBQyxFQUFFO1lBQUNDLEVBQUUsRUFBQyxFQUFFO1lBQUNDLE1BQU0sRUFBQyxFQUFFO1lBQUMzUSxXQUFXLEVBQUMsRUFBRTtZQUFDNFEsaUJBQWlCLEVBQUMsRUFBRTtZQUFDQyw0QkFBNEIsRUFBQyxFQUFFO1lBQUNDLGtCQUFrQixFQUFDLEVBQUU7WUFBQ2pSLElBQUksRUFBQyxFQUFFO1lBQUNrUixRQUFRLEVBQUMsRUFBRTtZQUFDQyxNQUFNLEVBQUMsRUFBRTtZQUFDQyxNQUFNLEVBQUMsRUFBRTtZQUFDQyxPQUFPLEVBQUMsRUFBRTtZQUFDQyxTQUFTLEVBQUMsRUFBRTtZQUFDQyxJQUFJLEVBQUMsRUFBRTtZQUFDQyxJQUFJLEVBQUMsRUFBRTtZQUFDQyxZQUFZLEVBQUMsRUFBRTtZQUFDQyxHQUFHLEVBQUMsRUFBRTtZQUFDQyxPQUFPLEVBQUMsQ0FBQztZQUFDQyxJQUFJLEVBQUM7VUFBQyxDQUFDO1VBQUNDLFVBQVUsRUFBQztZQUFDLENBQUMsRUFBQyxPQUFPO1lBQUMsQ0FBQyxFQUFDLEtBQUs7WUFBQyxFQUFFLEVBQUMsU0FBUztZQUFDLEVBQUUsRUFBQyxTQUFTO1lBQUMsRUFBRSxFQUFDLGVBQWU7WUFBQyxFQUFFLEVBQUMsZ0JBQWdCO1lBQUMsRUFBRSxFQUFDLGlCQUFpQjtZQUFDLEVBQUUsRUFBQyxZQUFZO1lBQUMsRUFBRSxFQUFDLE9BQU87WUFBQyxFQUFFLEVBQUMsY0FBYztZQUFDLEVBQUUsRUFBQyxvQkFBb0I7WUFBQyxFQUFFLEVBQUMsU0FBUztZQUFDLEVBQUUsRUFBQyxlQUFlO1lBQUMsRUFBRSxFQUFDLE1BQU07WUFBQyxFQUFFLEVBQUMsZ0JBQWdCO1lBQUMsRUFBRSxFQUFDLGlCQUFpQjtZQUFDLEVBQUUsRUFBQyxjQUFjO1lBQUMsRUFBRSxFQUFDLG9CQUFvQjtZQUFDLEVBQUUsRUFBQyxZQUFZO1lBQUMsRUFBRSxFQUFDLGFBQWE7WUFBQyxFQUFFLEVBQUMsSUFBSTtZQUFDLEVBQUUsRUFBQyxRQUFRO1lBQUMsRUFBRSxFQUFDLG1CQUFtQjtZQUFDLEVBQUUsRUFBQyxvQkFBb0I7WUFBQyxFQUFFLEVBQUMsUUFBUTtZQUFDLEVBQUUsRUFBQyxRQUFRO1lBQUMsRUFBRSxFQUFDLFNBQVM7WUFBQyxFQUFFLEVBQUMsV0FBVztZQUFDLEVBQUUsRUFBQyxNQUFNO1lBQUMsRUFBRSxFQUFDLE1BQU07WUFBQyxFQUFFLEVBQUM7VUFBSyxDQUFDO1VBQUNDLFlBQVksRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztVQUFDQyxhQUFhLEVBQUMsU0FBQUEsQ0FBUzdXLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUNELENBQUMsRUFBQ0UsQ0FBQyxFQUFDb0IsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7WUFDbHcrQixJQUFJQyxDQUFDLEdBQUNGLENBQUMsQ0FBQzRDLE1BQU0sR0FBQyxDQUFDO1lBQUMsUUFBT2hFLENB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LEdBQUMsRUFBRTtnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQyxJQUFJLENBQUMrVSxDQUFDLEdBQUMsRUFBRTtnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQyxJQUFJLENBQUMrVSxDQUFDLEdBQUMsRUFBRTtnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQyxJQUFJLENBQUMrVSxDQUFDLEdBQUMsRUFBRTtnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQyxJQUFJLENBQUMrVSxDQUFDLEdBQUMsRUFBRTtnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQyxJQUFJLENBQUMrVSxDQUFDLEdBQUMsRUFBRTtnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQyxJQUFJLENBQUMrVSxDQUFDLEdBQUMsRUFBRTtnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQyxJQUFJLENBQUMrVSxDQUFDLEdBQUMsRUFBRTtnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQyxJQUFJLENBQUMrVSxDQUFDLEdBQUMsRUFBRTtnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQyxJQUFJLENBQUMrVSxDQUFDLEdBQUMsRUFBRTtnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQyxJQUFJLENBQUMrVSxDQUFDLEdBQUMsRUFBRTtnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQyxJQUFJLENBQUMrVSxDQUFDLEdBQUMsQ0FBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUM7Z0JBQUM7Y0FBTSxLQUFLLEVBQUU7Z0JBQUNGLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztnQkFBQztjQUFNLEtBQUssR0FBRztnQkFBQyxJQUFJLENBQUMrVSxDQUFDLEdBQUMsQ0FBQ2pWLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUM7Z0JBQUM7Y0FBTSxLQUFLLEdBQUc7Z0JBQUNGLENBQUMsQ0FBQ0UsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDb0csSUFBSSxDQUFDdEcsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQztZQUFBO1VBQUMsQ0FBQztVQUFDaVcsS0FBSyxFQUFDLENBQUM7WUFBQyxDQUFDLEVBQUMsQ0FBQztZQUFDLENBQUMsRUFBQyxDQUFDO1lBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLENBQUMsRUFBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7VUFBQyxDQUFDLEVBQUM7WUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztVQUFDLENBQUMsRUFBQztZQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxDQUFDLEVBQUMsQ0FBQztZQUFDLENBQUMsRUFBQyxDQUFDO1lBQUMsQ0FBQyxFQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1VBQUMsQ0FBQyxFQUFDO1lBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztVQUFDLENBQUMsRUFBQztZQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1VBQUMsQ0FBQyxFQUFDO1lBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7VUFBQyxDQUFDLEVBQUM7WUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztVQUFDLENBQUMsRUFBQztZQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1VBQUMsQ0FBQyxFQUFDO1lBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7VUFBQyxDQUFDLEVBQUM7WUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUM7VUFBRSxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDO1VBQUUsQ0FBQyxFQUFDO1lBQUMsQ0FBQyxFQUFDLEVBQUU7WUFBQyxDQUFDLEVBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxDQUFDLEVBQUMsRUFBRTtZQUFDLENBQUMsRUFBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUM7VUFBRSxDQUFDLEVBQUM7WUFBQyxDQUFDLEVBQUMsRUFBRTtZQUFDLENBQUMsRUFBQyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDO1VBQUUsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQztVQUFFLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUM7VUFBRSxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUM7VUFBRSxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUM7VUFBRSxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUM7VUFBRSxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUM7VUFBRSxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQztVQUFFLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLENBQUMsRUFBQyxFQUFFO1lBQUMsQ0FBQyxFQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDO1VBQUUsQ0FBQyxFQUFDO1lBQUMsQ0FBQyxFQUFDLEVBQUU7WUFBQyxDQUFDLEVBQUMsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUM7VUFBRSxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUM7VUFBRSxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDO1VBQUUsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQztVQUFFLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEdBQUc7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsR0FBRztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQztVQUFFLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxHQUFHO1lBQUMsRUFBRSxFQUFDLEdBQUc7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsR0FBRztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQztVQUFFLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsR0FBRztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUc7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxHQUFHO1lBQUMsRUFBRSxFQUFDLEdBQUc7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsR0FBRztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUc7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxHQUFHO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEdBQUc7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEdBQUc7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUM7VUFBRSxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRztVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxHQUFHO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxHQUFHO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUc7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsR0FBRztZQUFDLEVBQUUsRUFBQyxHQUFHO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUc7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUc7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRztVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEdBQUc7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQztVQUFFLENBQUMsRUFBQztZQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxHQUFHO1lBQUMsRUFBRSxFQUFDLEdBQUc7WUFBQyxFQUFFLEVBQUMsRUFBRTtZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsR0FBRztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxFQUFFO1lBQUMsRUFBRSxFQUFDLEVBQUU7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUM7VUFBRSxDQUFDLEVBQUM7WUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRztVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQztZQUFDLEVBQUUsRUFBQztVQUFHLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLEdBQUc7WUFBQyxFQUFFLEVBQUMsR0FBRztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUc7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUc7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRztVQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxFQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUU7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUc7VUFBQyxDQUFDLEVBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFO1VBQUMsQ0FBQyxDQUFDO1VBQUNDLGNBQWMsRUFBQztZQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztZQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7WUFBQyxHQUFH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LENBQUMsQ0FBQyxFQUFDLEVBQUU7Y0FBQyxLQUFLLENBQUM7Z0JBQUMsT0FBTyxFQUFFO2NBQUMsS0FBSyxDQUFDO2dCQUFDLE9BQU8sRUFBRTtjQUFDLEtBQUssQ0FBQztnQkFBQyxPQUFPLEVBQUU7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBTyxJQUFJLENBQUNBLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUMsRUFBRTtjQUFDLEtBQUssRUFBRTtnQkFBQyxPQUFPLEVBQUU7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBTyxFQUFFO2NBQUMsS0FBSyxFQUFFO2dCQUFDLE9BQU8sRUFBRTtjQUFDLEtBQUssRUFBRTtnQkFBQyxPQUFPLEVBQUU7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBTyxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsRUFBRTtjQUFDLEtBQUssRUFBRTtnQkFBQyxPQUFPLElBQUksQ0FBQ0EsUUFBUSxDQUFDLENBQUMsRUFBQyxFQUFFO2NBQUMsS0FBSyxFQUFFO2dCQUFDLE9BQU8sRUFBRTtjQUFDLEtBQUssRUFBRTtnQkFBQyxPQUFPLEVBQUU7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBTyxFQUFFO2NBQUMsS0FBSyxFQUFFO2dCQUFDLE9BQU8sRUFBRTtjQUFDLEtBQUssRUFBRTtnQkFBQyxJQUFJLENBQUNYLEtBQUssQ0FBQzVaLENBQUMsQ0FBQzhZLE1BQU0sQ0FBQyxFQUFDLElBQUksQ0FBQ3lCLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUFDO2NBQU0sS0FBSyxFQUFFO2dCQUFDLE9BQU8sSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFDLEVBQUU7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBTyxFQUFFO2NBQUMsS0FBSyxFQUFFO2dCQUFDLE9BQU8sRUFBRTtjQUFDLEtBQUssRUFBRTtnQkFBQyxPQUFPLEVBQUU7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBTyxFQUFFO2NBQUMsS0FBSyxFQUFFO2dCQUFDLE9BQU8sRUFBRTtjQUFDLEtBQUssRUFBRTtnQkFBQztjQUFNLEtBQUssRUFBRTtnQkFBQyxPQUFPLElBQUksQ0FBQ0EsUUFBUSxDQUFDLENBQUMsRUFBQyxFQUFFO2NBQUMsS0FBSyxFQUFFO2dCQUFDLE9BQU8sSUFBSSxDQUFDQSxRQUFRLENBQUMsQ0FBQyxFQUFDLEVBQUU7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBT3ZhLENBQUMsQ0FBQzhZLE1BQU0sR0FBQ3RZLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUNtRSxPQUFPLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUU7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBTzNFLENBQUMsQ0FBQzhZLE1BQU0sR0FBQ3RZLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUNtRSxPQUFPLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUU7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBTyxFQUFFO2NBQUMsS0FBSyxFQUFFO2dCQUFDLE9BQU8sRUFBRTtjQUFDLEtBQUssRUFBRTtnQkFBQyxPQUFPLEVBQUU7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBTyxFQUFFO2NBQUMsS0FBSyxFQUFFO2dCQUFDLE9BQU8sRUFBRTtjQUFDLEtBQUssRUFBRTtnQkFBQyxPQUFPLEVBQUU7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBTyxFQUFFO2NBQUMsS0FBSyxFQUFFO2dCQUFDLE9BQU8sRUFBRTtjQUFDLEtBQUssRUFBRTtnQkFBQyxPQUFPLEVBQUU7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBTzNFLENBQUMsQ0FBQzhZLE1BQU0sR0FBQzlZLENBQUMsQ0FBQzhZLE1BQU0sQ0FBQ25VLE9BQU8sQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRTtjQUFDLEtBQUssRUFBRTtnQkFBQyxPQUFNLFNBQVM7Y0FBQyxLQUFLLEVBQUU7Z0JBQUMsT0FBTyxDQUFDO1lBQUE7VUFBQyxDQUFDLEVBQUM1RSxDQUFDLENBQUNvYSxLQUFLLEdBQUMsQ0FBQywwQkFBMEIsRUFBQyxlQUFlLEVBQUMsK0NBQStDLEVBQUMsdUJBQXVCLEVBQUMsb0VBQW9FLEVBQUMsOEJBQThCLEVBQUMseUJBQXlCLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLG1CQUFtQixFQUFDLGlCQUFpQixFQUFDLDRCQUE0QixFQUFDLGlDQUFpQyxFQUFDLGlCQUFpQixFQUFDLHdCQUF3QixFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLGtCQUFrQixFQUFDLDRCQUE0QixFQUFDLGtCQUFrQixFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsMkJBQTJCLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxlQUFlLEVBQUMsc0JBQXNCLEVBQUMsc0JBQXNCLEVBQUMsUUFBUSxFQUFDLHdCQUF3QixFQUFDLHlCQUF5QixFQUFDLDZCQUE2QixFQUFDLHdCQUF3QixFQUFDLHlDQUF5QyxFQUFDLGNBQWMsRUFBQyxTQUFTLEVBQUMseURBQXlELEVBQUMsd0JBQXdCLEVBQUMsUUFBUSxFQUFDLFFBQVEsQ0FBQyxFQUFDcGEsQ0FBQyxDQUFDMGEsVUFBVSxHQUFDO1lBQUNJLEVBQUUsRUFBQztjQUFDVixLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO2NBQUNXLFNBQVMsRUFBQyxDQUFDO1lBQUMsQ0FBQztZQUFDQyxHQUFHLEVBQUM7Y0FBQ1osS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2NBQUNXLFNBQVMsRUFBQyxDQUFDO1lBQUMsQ0FBQztZQUFDRSxHQUFHLEVBQUM7Y0FBQ2IsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2NBQUNXLFNBQVMsRUFBQyxDQUFDO1lBQUMsQ0FBQztZQUFDRyxHQUFHLEVBQUM7Y0FBQ2QsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7Y0FBQ1csU0FBUyxFQUFDLENBQUM7WUFBQyxDQUFDO1lBQUNJLE9BQU8sRUFBQztjQUFDZixLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztjQUFDVyxTQUFTLEVBQUMsQ0FBQztZQUFDO1VBQUMsQ0FBQyxFQUFDL2EsQ0FBQztRQUFBLENBQUMsQ0FBQyxDQUFDO01BQUMsT0FBT0MsQ0FBQyxDQUFDa1ksS0FBSyxHQUFDM1gsQ0FBQyxFQUFDUixDQUFDLENBQUNnRCxTQUFTLEdBQUMvQyxDQUFDLEVBQUNBLENBQUMsQ0FBQ3NCLE1BQU0sR0FBQ3ZCLENBQUMsRUFBQyxJQUFJQSxDQUFDLENBQUQsQ0FBQztJQUFBLENBQUMsQ0FBQyxDQUFDO0lBQUNDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBQ08sQ0FBQyxFQUFDUixDQUFDLENBQUNFLE9BQU8sR0FBQ0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQztFQUFBLENBQUMsRUFBQyxVQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO0lBQUMsWUFBWTs7SUFBQyxTQUFTRCxDQUFDQSxDQUFBLEVBQUU7TUFBQyxJQUFJUCxDQUFDLEdBQUN3RSxTQUFTLENBQUNDLE1BQU0sSUFBRSxDQUFDLElBQUUsS0FBSyxDQUFDLEtBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQ0EsU0FBUyxDQUFDLENBQUMsQ0FBQztNQUFDLElBQUksQ0FBQytULE9BQU8sR0FBQ3ZZLENBQUM7SUFBQTtJQUFDLFNBQVNTLENBQUNBLENBQUNULENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUM7TUFBQyxLQUFLLENBQUMsS0FBR1AsQ0FBQyxLQUFHQSxDQUFDLEdBQUNELENBQUMsQ0FBQ3lFLE1BQU0sQ0FBQztNQUFDLElBQUlsRSxDQUFDLEdBQUNQLENBQUMsQ0FBQ0MsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUFDUSxDQUFDLEdBQUNULENBQUMsQ0FBQ0MsQ0FBQyxHQUFDLENBQUMsQ0FBQztNQUFDLE9BQU9NLENBQUMsR0FBQyxrQkFBa0IsS0FBR0EsQ0FBQyxDQUFDcVEsSUFBSSxHQUFDLENBQUNuUSxDQUFDLElBQUUsQ0FBQ0QsQ0FBQyxHQUFDLFlBQVksR0FBQyxnQkFBZ0IsRUFBRW1FLElBQUksQ0FBQ3BFLENBQUMsQ0FBQ3dRLFFBQVEsQ0FBQyxHQUFDLEtBQUssQ0FBQyxHQUFDdlEsQ0FBQztJQUFBO0lBQUMsU0FBU3FCLENBQUNBLENBQUM3QixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO01BQUMsS0FBSyxDQUFDLEtBQUdQLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO01BQUMsSUFBSU0sQ0FBQyxHQUFDUCxDQUFDLENBQUNDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFBQ1EsQ0FBQyxHQUFDVCxDQUFDLENBQUNDLENBQUMsR0FBQyxDQUFDLENBQUM7TUFBQyxPQUFPTSxDQUFDLEdBQUMsa0JBQWtCLEtBQUdBLENBQUMsQ0FBQ3FRLElBQUksR0FBQyxDQUFDblEsQ0FBQyxJQUFFLENBQUNELENBQUMsR0FBQyxZQUFZLEdBQUMsZ0JBQWdCLEVBQUVtRSxJQUFJLENBQUNwRSxDQUFDLENBQUN3USxRQUFRLENBQUMsR0FBQyxLQUFLLENBQUMsR0FBQ3ZRLENBQUM7SUFBQTtJQUFDLFNBQVNzQixDQUFDQSxDQUFDOUIsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztNQUFDLElBQUlELENBQUMsR0FBQ1AsQ0FBQyxDQUFDLElBQUksSUFBRUMsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxHQUFDLENBQUMsQ0FBQztNQUFDLElBQUdNLENBQUMsSUFBRSxrQkFBa0IsS0FBR0EsQ0FBQyxDQUFDcVEsSUFBSSxLQUFHcFEsQ0FBQyxJQUFFLENBQUNELENBQUMsQ0FBQzZhLGFBQWEsQ0FBQyxFQUFDO1FBQUMsSUFBSTNhLENBQUMsR0FBQ0YsQ0FBQyxDQUFDeUYsS0FBSztRQUFDekYsQ0FBQyxDQUFDeUYsS0FBSyxHQUFDekYsQ0FBQyxDQUFDeUYsS0FBSyxDQUFDcEIsT0FBTyxDQUFDcEUsQ0FBQyxHQUFDLE1BQU0sR0FBQyxlQUFlLEVBQUMsRUFBRSxDQUFDLEVBQUNELENBQUMsQ0FBQzZhLGFBQWEsR0FBQzdhLENBQUMsQ0FBQ3lGLEtBQUssS0FBR3ZGLENBQUM7TUFBQTtJQUFDO0lBQUMsU0FBU3NCLENBQUNBLENBQUMvQixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO01BQUMsSUFBSUQsQ0FBQyxHQUFDUCxDQUFDLENBQUMsSUFBSSxJQUFFQyxDQUFDLEdBQUNELENBQUMsQ0FBQ3lFLE1BQU0sR0FBQyxDQUFDLEdBQUN4RSxDQUFDLEdBQUMsQ0FBQyxDQUFDO01BQUMsSUFBR00sQ0FBQyxJQUFFLGtCQUFrQixLQUFHQSxDQUFDLENBQUNxUSxJQUFJLEtBQUdwUSxDQUFDLElBQUUsQ0FBQ0QsQ0FBQyxDQUFDOGEsWUFBWSxDQUFDLEVBQUM7UUFBQyxJQUFJNWEsQ0FBQyxHQUFDRixDQUFDLENBQUN5RixLQUFLO1FBQUMsT0FBT3pGLENBQUMsQ0FBQ3lGLEtBQUssR0FBQ3pGLENBQUMsQ0FBQ3lGLEtBQUssQ0FBQ3BCLE9BQU8sQ0FBQ3BFLENBQUMsR0FBQyxNQUFNLEdBQUMsU0FBUyxFQUFDLEVBQUUsQ0FBQyxFQUFDRCxDQUFDLENBQUM4YSxZQUFZLEdBQUM5YSxDQUFDLENBQUN5RixLQUFLLEtBQUd2RixDQUFDLEVBQUNGLENBQUMsQ0FBQzhhLFlBQVk7TUFBQTtJQUFDO0lBQUMsSUFBSWphLENBQUMsR0FBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUFDUCxDQUFDLENBQUMyQixVQUFVLEdBQUMsQ0FBQyxDQUFDO0lBQUMsSUFBSUosQ0FBQyxHQUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztNQUFDUyxDQUFDLEdBQUNHLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDO0lBQUNqQixDQUFDLENBQUN5QyxTQUFTLEdBQUMsSUFBSS9CLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBRCxDQUFDLEVBQUNWLENBQUMsQ0FBQ3lDLFNBQVMsQ0FBQ3NZLE9BQU8sR0FBQyxVQUFTdGIsQ0FBQyxFQUFDO01BQUMsSUFBSUMsQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDc1ksT0FBTyxDQUFDZ0QsZ0JBQWdCO1FBQUMvYSxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUNnYixVQUFVO01BQUMsSUFBSSxDQUFDQSxVQUFVLEdBQUMsQ0FBQyxDQUFDO01BQUMsS0FBSSxJQUFJamIsQ0FBQyxHQUFDUCxDQUFDLENBQUN5YixJQUFJLEVBQUNyYSxDQUFDLEdBQUMsQ0FBQyxFQUFDSSxDQUFDLEdBQUNqQixDQUFDLENBQUNrRSxNQUFNLEVBQUNyRCxDQUFDLEdBQUNJLENBQUMsRUFBQ0osQ0FBQyxFQUFFLEVBQUM7UUFBQyxJQUFJSCxDQUFDLEdBQUNWLENBQUMsQ0FBQ2EsQ0FBQyxDQUFDO1VBQUNZLENBQUMsR0FBQyxJQUFJLENBQUNzUCxNQUFNLENBQUNyUSxDQUFDLENBQUM7UUFBQyxJQUFHZSxDQUFDLEVBQUM7VUFBQyxJQUFJbkIsQ0FBQyxHQUFDSixDQUFDLENBQUNGLENBQUMsRUFBQ2EsQ0FBQyxFQUFDWixDQUFDLENBQUM7WUFBQ3lCLENBQUMsR0FBQ0osQ0FBQyxDQUFDdEIsQ0FBQyxFQUFDYSxDQUFDLEVBQUNaLENBQUMsQ0FBQztZQUFDMEIsQ0FBQyxHQUFDRixDQUFDLENBQUMwWixjQUFjLElBQUU3YSxDQUFDO1lBQUNDLENBQUMsR0FBQ2tCLENBQUMsQ0FBQzJaLGVBQWUsSUFBRTFaLENBQUM7WUFBQ0UsQ0FBQyxHQUFDSCxDQUFDLENBQUM0WixnQkFBZ0IsSUFBRS9hLENBQUMsSUFBRW9CLENBQUM7VUFBQ0QsQ0FBQyxDQUFDNlosS0FBSyxJQUFFL1osQ0FBQyxDQUFDdkIsQ0FBQyxFQUFDYSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ1ksQ0FBQyxDQUFDc1YsSUFBSSxJQUFFdlYsQ0FBQyxDQUFDeEIsQ0FBQyxFQUFDYSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ25CLENBQUMsSUFBRWtDLENBQUMsS0FBR0wsQ0FBQyxDQUFDdkIsQ0FBQyxFQUFDYSxDQUFDLENBQUMsRUFBQ1csQ0FBQyxDQUFDeEIsQ0FBQyxFQUFDYSxDQUFDLENBQUMsSUFBRSxrQkFBa0IsS0FBR0gsQ0FBQyxDQUFDMlAsSUFBSSxLQUFHM1AsQ0FBQyxDQUFDdU4sTUFBTSxHQUFDLFdBQVcsQ0FBQ3NOLElBQUksQ0FBQ3ZiLENBQUMsQ0FBQ2EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDMlAsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDOVEsQ0FBQyxJQUFFaUMsQ0FBQyxLQUFHSixDQUFDLENBQUMsQ0FBQ2IsQ0FBQyxDQUFDd08sT0FBTyxJQUFFeE8sQ0FBQyxDQUFDc0csT0FBTyxFQUFFa1UsSUFBSSxDQUFDLEVBQUMxWixDQUFDLENBQUN4QixDQUFDLEVBQUNhLENBQUMsQ0FBQyxDQUFDLEVBQUNuQixDQUFDLElBQUVhLENBQUMsS0FBR2dCLENBQUMsQ0FBQ3ZCLENBQUMsRUFBQ2EsQ0FBQyxDQUFDLEVBQUNXLENBQUMsQ0FBQyxDQUFDZCxDQUFDLENBQUNzRyxPQUFPLElBQUV0RyxDQUFDLENBQUN3TyxPQUFPLEVBQUVnTSxJQUFJLENBQUMsQ0FBQztRQUFBO01BQUM7TUFBQyxPQUFPemIsQ0FBQztJQUFBLENBQUMsRUFBQ08sQ0FBQyxDQUFDeUMsU0FBUyxDQUFDK1ksY0FBYyxHQUFDeGIsQ0FBQyxDQUFDeUMsU0FBUyxDQUFDZ1osY0FBYyxHQUFDemIsQ0FBQyxDQUFDeUMsU0FBUyxDQUFDaVoscUJBQXFCLEdBQUMsVUFBU2pjLENBQUMsRUFBQztNQUFDLElBQUksQ0FBQ3NSLE1BQU0sQ0FBQ3RSLENBQUMsQ0FBQ3lQLE9BQU8sQ0FBQyxFQUFDLElBQUksQ0FBQzZCLE1BQU0sQ0FBQ3RSLENBQUMsQ0FBQ3VILE9BQU8sQ0FBQztNQUFDLElBQUl0SCxDQUFDLEdBQUNELENBQUMsQ0FBQ3lQLE9BQU8sSUFBRXpQLENBQUMsQ0FBQ3VILE9BQU87UUFBQy9HLENBQUMsR0FBQ1IsQ0FBQyxDQUFDeVAsT0FBTyxJQUFFelAsQ0FBQyxDQUFDdUgsT0FBTztRQUFDaEgsQ0FBQyxHQUFDQyxDQUFDO1FBQUNZLENBQUMsR0FBQ1osQ0FBQztNQUFDLElBQUdBLENBQUMsSUFBRUEsQ0FBQyxDQUFDK1csT0FBTyxFQUFDLEtBQUloWCxDQUFDLEdBQUNDLENBQUMsQ0FBQ2liLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ2hNLE9BQU8sRUFBQ3JPLENBQUMsQ0FBQ21XLE9BQU8sR0FBRW5XLENBQUMsR0FBQ0EsQ0FBQyxDQUFDcWEsSUFBSSxDQUFDcmEsQ0FBQyxDQUFDcWEsSUFBSSxDQUFDaFgsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDZ0wsT0FBTztNQUFDLElBQUlqTyxDQUFDLEdBQUM7UUFBQzhWLElBQUksRUFBQ3RYLENBQUMsQ0FBQ2tjLFNBQVMsQ0FBQzVFLElBQUk7UUFBQ3VFLEtBQUssRUFBQzdiLENBQUMsQ0FBQ21jLFVBQVUsQ0FBQ04sS0FBSztRQUFDSCxjQUFjLEVBQUM3WixDQUFDLENBQUM1QixDQUFDLENBQUN3YixJQUFJLENBQUM7UUFBQ0UsZUFBZSxFQUFDbGIsQ0FBQyxDQUFDLENBQUNGLENBQUMsSUFBRU4sQ0FBQyxFQUFFd2IsSUFBSTtNQUFDLENBQUM7TUFBQyxJQUFHemIsQ0FBQyxDQUFDa2MsU0FBUyxDQUFDTCxLQUFLLElBQUUvWixDQUFDLENBQUM3QixDQUFDLENBQUN3YixJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNqYixDQUFDLEVBQUM7UUFBQyxJQUFJUyxDQUFDLEdBQUNqQixDQUFDLENBQUNvYyxZQUFZO1FBQUNuYixDQUFDLENBQUNxVyxJQUFJLElBQUV2VixDQUFDLENBQUM5QixDQUFDLENBQUN3YixJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUN4YSxDQUFDLENBQUM0YSxLQUFLLElBQUUvWixDQUFDLENBQUN2QixDQUFDLENBQUNrYixJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUN6YixDQUFDLENBQUNtYyxVQUFVLENBQUM3RSxJQUFJLElBQUV2VixDQUFDLENBQUNYLENBQUMsQ0FBQ3FhLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQ2xELE9BQU8sQ0FBQ2dELGdCQUFnQixJQUFFOWEsQ0FBQyxDQUFDUixDQUFDLENBQUN3YixJQUFJLENBQUMsSUFBRTVaLENBQUMsQ0FBQ3RCLENBQUMsQ0FBQ2tiLElBQUksQ0FBQyxLQUFHMVosQ0FBQyxDQUFDOUIsQ0FBQyxDQUFDd2IsSUFBSSxDQUFDLEVBQUMzWixDQUFDLENBQUN2QixDQUFDLENBQUNrYixJQUFJLENBQUMsQ0FBQztNQUFBLENBQUMsTUFBS3piLENBQUMsQ0FBQ21jLFVBQVUsQ0FBQzdFLElBQUksSUFBRXZWLENBQUMsQ0FBQzlCLENBQUMsQ0FBQ3diLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7TUFBQyxPQUFPamEsQ0FBQztJQUFBLENBQUMsRUFBQ2pCLENBQUMsQ0FBQ3lDLFNBQVMsQ0FBQ3FaLFNBQVMsR0FBQzliLENBQUMsQ0FBQ3lDLFNBQVMsQ0FBQ3NaLGlCQUFpQixHQUFDLFVBQVN0YyxDQUFDLEVBQUM7TUFBQyxPQUFPQSxDQUFDLENBQUNpWCxLQUFLO0lBQUEsQ0FBQyxFQUFDMVcsQ0FBQyxDQUFDeUMsU0FBUyxDQUFDdVosZ0JBQWdCLEdBQUNoYyxDQUFDLENBQUN5QyxTQUFTLENBQUN3WixnQkFBZ0IsR0FBQyxVQUFTeGMsQ0FBQyxFQUFDO01BQUMsSUFBSUMsQ0FBQyxHQUFDRCxDQUFDLENBQUNpWCxLQUFLLElBQUUsQ0FBQyxDQUFDO01BQUMsT0FBTTtRQUFDMkUsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO1FBQUN0RSxJQUFJLEVBQUNyWCxDQUFDLENBQUNxWCxJQUFJO1FBQUN1RSxLQUFLLEVBQUM1YixDQUFDLENBQUM0YjtNQUFLLENBQUM7SUFBQSxDQUFDLEVBQUM1YixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUNNLENBQUMsRUFBQ1AsQ0FBQyxDQUFDRSxPQUFPLEdBQUNELENBQUMsQ0FBQyxTQUFTLENBQUM7RUFBQSxDQUFDLEVBQUMsVUFBU0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztJQUFDLFlBQVk7O0lBQUMsU0FBU0QsQ0FBQ0EsQ0FBQSxFQUFFO01BQUMsSUFBSSxDQUFDa2MsT0FBTyxHQUFDLEVBQUU7SUFBQTtJQUFDLFNBQVNoYyxDQUFDQSxDQUFDVCxDQUFDLEVBQUM7TUFBQyxJQUFJLENBQUMwYyxjQUFjLENBQUMxYyxDQUFDLEVBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxDQUFDMmMsV0FBVyxDQUFDM2MsQ0FBQyxDQUFDNlEsTUFBTSxDQUFDLEVBQUMsSUFBSSxDQUFDK0wsU0FBUyxDQUFDNWMsQ0FBQyxFQUFDLE1BQU0sQ0FBQztJQUFBO0lBQUMsU0FBUzZCLENBQUNBLENBQUM3QixDQUFDLEVBQUM7TUFBQ1MsQ0FBQyxDQUFDRyxJQUFJLENBQUMsSUFBSSxFQUFDWixDQUFDLENBQUMsRUFBQyxJQUFJLENBQUM0YyxTQUFTLENBQUM1YyxDQUFDLEVBQUMsU0FBUyxDQUFDLEVBQUMsSUFBSSxDQUFDNGMsU0FBUyxDQUFDNWMsQ0FBQyxFQUFDLFNBQVMsQ0FBQztJQUFBO0lBQUMsU0FBUzhCLENBQUNBLENBQUM5QixDQUFDLEVBQUM7TUFBQyxJQUFJLENBQUMwYyxjQUFjLENBQUMxYyxDQUFDLEVBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxDQUFDMmMsV0FBVyxDQUFDM2MsQ0FBQyxDQUFDNlEsTUFBTSxDQUFDLEVBQUMsSUFBSSxDQUFDK0wsU0FBUyxDQUFDNWMsQ0FBQyxFQUFDLE1BQU0sQ0FBQztJQUFBO0lBQUMsSUFBSStCLENBQUMsR0FBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFBQ1AsQ0FBQyxDQUFDMkIsVUFBVSxHQUFDLENBQUMsQ0FBQztJQUFDLElBQUlSLENBQUMsR0FBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUFDZ0IsQ0FBQyxHQUFDTyxDQUFDLENBQUNYLENBQUMsQ0FBQztJQUFDYixDQUFDLENBQUN5QyxTQUFTLEdBQUM7TUFBQ1csV0FBVyxFQUFDcEQsQ0FBQztNQUFDc2MsUUFBUSxFQUFDLENBQUMsQ0FBQztNQUFDRCxTQUFTLEVBQUMsU0FBQUEsQ0FBUzVjLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBSU8sQ0FBQyxHQUFDLElBQUksQ0FBQzhRLE1BQU0sQ0FBQ3RSLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFHLElBQUksQ0FBQzRjLFFBQVEsRUFBQztVQUFDLElBQUdyYyxDQUFDLElBQUUsQ0FBQ0QsQ0FBQyxDQUFDeUMsU0FBUyxDQUFDeEMsQ0FBQyxDQUFDb1EsSUFBSSxDQUFDLEVBQUMsTUFBTSxJQUFJcFAsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLHdCQUF3QixHQUFDaEIsQ0FBQyxDQUFDb1EsSUFBSSxHQUFDLHlCQUF5QixHQUFDM1EsQ0FBQyxHQUFDLE1BQU0sR0FBQ0QsQ0FBQyxDQUFDNFEsSUFBSSxDQUFDO1VBQUM1USxDQUFDLENBQUNDLENBQUMsQ0FBQyxHQUFDTyxDQUFDO1FBQUE7TUFBQyxDQUFDO01BQUNrYyxjQUFjLEVBQUMsU0FBQUEsQ0FBUzFjLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBRyxJQUFJLENBQUMyYyxTQUFTLENBQUM1YyxDQUFDLEVBQUNDLENBQUMsQ0FBQyxFQUFDLENBQUNELENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEVBQUMsTUFBTSxJQUFJdUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDeEIsQ0FBQyxDQUFDNFEsSUFBSSxHQUFDLFlBQVksR0FBQzNRLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQzBjLFdBQVcsRUFBQyxTQUFBQSxDQUFTM2MsQ0FBQyxFQUFDO1FBQUMsS0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBQyxFQUFDTyxDQUFDLEdBQUNSLENBQUMsQ0FBQ3lFLE1BQU0sRUFBQ3hFLENBQUMsR0FBQ08sQ0FBQyxFQUFDUCxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMyYyxTQUFTLENBQUM1YyxDQUFDLEVBQUNDLENBQUMsQ0FBQyxFQUFDRCxDQUFDLENBQUNDLENBQUMsQ0FBQyxLQUFHRCxDQUFDLENBQUM4YyxNQUFNLENBQUM3YyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUNBLENBQUMsRUFBRSxFQUFDTyxDQUFDLEVBQUUsQ0FBQztNQUFBLENBQUM7TUFBQzhRLE1BQU0sRUFBQyxTQUFBQSxDQUFTdFIsQ0FBQyxFQUFDO1FBQUMsSUFBR0EsQ0FBQyxFQUFDO1VBQUMsSUFBRyxDQUFDLElBQUksQ0FBQ0EsQ0FBQyxDQUFDNFEsSUFBSSxDQUFDLEVBQUMsTUFBTSxJQUFJcFAsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixHQUFDeEIsQ0FBQyxDQUFDNFEsSUFBSSxFQUFDNVEsQ0FBQyxDQUFDO1VBQUMsSUFBSSxDQUFDK2MsT0FBTyxJQUFFLElBQUksQ0FBQ04sT0FBTyxDQUFDTyxPQUFPLENBQUMsSUFBSSxDQUFDRCxPQUFPLENBQUMsRUFBQyxJQUFJLENBQUNBLE9BQU8sR0FBQy9jLENBQUM7VUFBQyxJQUFJQyxDQUFDLEdBQUMsSUFBSSxDQUFDRCxDQUFDLENBQUM0USxJQUFJLENBQUMsQ0FBQzVRLENBQUMsQ0FBQztVQUFDLE9BQU8sSUFBSSxDQUFDK2MsT0FBTyxHQUFDLElBQUksQ0FBQ04sT0FBTyxDQUFDUSxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDSixRQUFRLElBQUU1YyxDQUFDLEdBQUNBLENBQUMsR0FBQ0EsQ0FBQyxLQUFHLENBQUMsQ0FBQyxHQUFDRCxDQUFDLEdBQUMsS0FBSyxDQUFDO1FBQUE7TUFBQyxDQUFDO01BQUNzYixPQUFPLEVBQUMsU0FBQUEsQ0FBU3RiLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQzJjLFdBQVcsQ0FBQzNjLENBQUMsQ0FBQ3liLElBQUksQ0FBQztNQUFBLENBQUM7TUFBQ2EsaUJBQWlCLEVBQUM3YixDQUFDO01BQUM0YixTQUFTLEVBQUM1YixDQUFDO01BQUNzYixjQUFjLEVBQUNsYSxDQUFDO01BQUNtYSxjQUFjLEVBQUNuYSxDQUFDO01BQUMwYSxnQkFBZ0IsRUFBQ3phLENBQUM7TUFBQ21hLHFCQUFxQixFQUFDLFNBQUFBLENBQVNqYyxDQUFDLEVBQUM7UUFBQzhCLENBQUMsQ0FBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUNaLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzRjLFNBQVMsQ0FBQzVjLENBQUMsRUFBQyxTQUFTLENBQUM7TUFBQSxDQUFDO01BQUNrZCxnQkFBZ0IsRUFBQyxTQUFBQSxDQUFBLEVBQVUsQ0FBQyxDQUFDO01BQUNWLGdCQUFnQixFQUFDLFNBQUFBLENBQUEsRUFBVSxDQUFDLENBQUM7TUFBQ1csYUFBYSxFQUFDMWMsQ0FBQztNQUFDMmMsY0FBYyxFQUFDLFNBQUFBLENBQUEsRUFBVSxDQUFDLENBQUM7TUFBQ0MsYUFBYSxFQUFDLFNBQUFBLENBQUEsRUFBVSxDQUFDLENBQUM7TUFBQ0MsYUFBYSxFQUFDLFNBQUFBLENBQUEsRUFBVSxDQUFDLENBQUM7TUFBQ0MsY0FBYyxFQUFDLFNBQUFBLENBQUEsRUFBVSxDQUFDLENBQUM7TUFBQ0MsZ0JBQWdCLEVBQUMsU0FBQUEsQ0FBQSxFQUFVLENBQUMsQ0FBQztNQUFDQyxXQUFXLEVBQUMsU0FBQUEsQ0FBQSxFQUFVLENBQUMsQ0FBQztNQUFDQyxJQUFJLEVBQUMsU0FBQUEsQ0FBUzFkLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQzJjLFdBQVcsQ0FBQzNjLENBQUMsQ0FBQzJYLEtBQUssQ0FBQztNQUFBLENBQUM7TUFBQ2dHLFFBQVEsRUFBQyxTQUFBQSxDQUFTM2QsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDMGMsY0FBYyxDQUFDMWMsQ0FBQyxFQUFDLE9BQU8sQ0FBQztNQUFBO0lBQUMsQ0FBQyxFQUFDQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUNNLENBQUMsRUFBQ1AsQ0FBQyxDQUFDRSxPQUFPLEdBQUNELENBQUMsQ0FBQyxTQUFTLENBQUM7RUFBQSxDQUFDLEVBQUMsVUFBU0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztJQUFDLFlBQVk7O0lBQUMsU0FBU0QsQ0FBQ0EsQ0FBQ1AsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQyxJQUFHQSxDQUFDLEdBQUNBLENBQUMsQ0FBQzZFLElBQUksR0FBQzdFLENBQUMsQ0FBQzZFLElBQUksQ0FBQ2lNLFFBQVEsR0FBQzlRLENBQUMsRUFBQ0QsQ0FBQyxDQUFDOEUsSUFBSSxDQUFDaU0sUUFBUSxLQUFHOVEsQ0FBQyxFQUFDO1FBQUMsSUFBSU8sQ0FBQyxHQUFDO1VBQUM4RSxHQUFHLEVBQUN0RixDQUFDLENBQUM4RSxJQUFJLENBQUNRO1FBQUcsQ0FBQztRQUFDLE1BQU0sSUFBSW5ELENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ25DLENBQUMsQ0FBQzhFLElBQUksQ0FBQ2lNLFFBQVEsR0FBQyxpQkFBaUIsR0FBQzlRLENBQUMsRUFBQ08sQ0FBQyxDQUFDO01BQUE7SUFBQztJQUFDLFNBQVNDLENBQUNBLENBQUNULENBQUMsRUFBQ0MsQ0FBQyxFQUFDO01BQUMsSUFBSSxDQUFDMmQsTUFBTSxHQUFDNWQsQ0FBQyxFQUFDLElBQUksQ0FBQ3VGLEtBQUssR0FBQztRQUFDQyxJQUFJLEVBQUN2RixDQUFDLENBQUNnWixVQUFVO1FBQUN2VCxNQUFNLEVBQUN6RixDQUFDLENBQUNrWjtNQUFZLENBQUMsRUFBQyxJQUFJLENBQUMxVCxHQUFHLEdBQUM7UUFBQ0QsSUFBSSxFQUFDdkYsQ0FBQyxDQUFDaVosU0FBUztRQUFDeFQsTUFBTSxFQUFDekYsQ0FBQyxDQUFDbVo7TUFBVyxDQUFDO0lBQUE7SUFBQyxTQUFTdlgsQ0FBQ0EsQ0FBQzdCLENBQUMsRUFBQztNQUFDLE9BQU0sVUFBVSxDQUFDMkUsSUFBSSxDQUFDM0UsQ0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQzZhLFNBQVMsQ0FBQyxDQUFDLEVBQUM3YSxDQUFDLENBQUN5RSxNQUFNLEdBQUMsQ0FBQyxDQUFDLEdBQUN6RSxDQUFDO0lBQUE7SUFBQyxTQUFTOEIsQ0FBQ0EsQ0FBQzlCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO01BQUMsT0FBTTtRQUFDcVgsSUFBSSxFQUFDLEdBQUcsS0FBR3RYLENBQUMsQ0FBQzhMLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFBQytQLEtBQUssRUFBQyxHQUFHLEtBQUc1YixDQUFDLENBQUM2TCxNQUFNLENBQUM3TCxDQUFDLENBQUN3RSxNQUFNLEdBQUMsQ0FBQztNQUFDLENBQUM7SUFBQTtJQUFDLFNBQVMxQyxDQUFDQSxDQUFDL0IsQ0FBQyxFQUFDO01BQUMsT0FBT0EsQ0FBQyxDQUFDNEUsT0FBTyxDQUFDLGNBQWMsRUFBQyxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLGFBQWEsRUFBQyxFQUFFLENBQUM7SUFBQTtJQUFDLFNBQVN4RCxDQUFDQSxDQUFDcEIsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztNQUFDQSxDQUFDLEdBQUMsSUFBSSxDQUFDMlEsT0FBTyxDQUFDM1EsQ0FBQyxDQUFDO01BQUMsS0FBSSxJQUFJRCxDQUFDLEdBQUNQLENBQUMsR0FBQyxHQUFHLEdBQUMsRUFBRSxFQUFDUyxDQUFDLEdBQUMsRUFBRSxFQUFDb0IsQ0FBQyxHQUFDLENBQUMsRUFBQ0MsQ0FBQyxHQUFDLENBQUMsRUFBQ0MsQ0FBQyxHQUFDOUIsQ0FBQyxDQUFDd0UsTUFBTSxFQUFDM0MsQ0FBQyxHQUFDQyxDQUFDLEVBQUNELENBQUMsRUFBRSxFQUFDO1FBQUMsSUFBSVYsQ0FBQyxHQUFDbkIsQ0FBQyxDQUFDNkIsQ0FBQyxDQUFDLENBQUNnVyxJQUFJO1VBQUN0VyxDQUFDLEdBQUN2QixDQUFDLENBQUM2QixDQUFDLENBQUMsQ0FBQ2lQLFFBQVEsS0FBRzNQLENBQUM7UUFBQyxJQUFHYixDQUFDLElBQUUsQ0FBQ04sQ0FBQyxDQUFDNkIsQ0FBQyxDQUFDLENBQUNpVyxTQUFTLElBQUUsRUFBRSxJQUFFM1csQ0FBQyxFQUFDSSxDQUFDLElBQUUsSUFBSSxLQUFHSixDQUFDLElBQUUsR0FBRyxLQUFHQSxDQUFDLElBQUUsTUFBTSxLQUFHQSxDQUFDLEVBQUNYLENBQUMsQ0FBQzBILElBQUksQ0FBQy9HLENBQUMsQ0FBQyxDQUFDLEtBQUk7VUFBQyxJQUFHWCxDQUFDLENBQUNnRSxNQUFNLEdBQUMsQ0FBQyxFQUFDLE1BQU0sSUFBSXRDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxnQkFBZ0IsR0FBQzVCLENBQUMsRUFBQztZQUFDK0UsR0FBRyxFQUFDOUU7VUFBQyxDQUFDLENBQUM7VUFBQyxJQUFJLEtBQUdZLENBQUMsSUFBRVMsQ0FBQyxFQUFFO1FBQUE7TUFBQztNQUFDLE9BQU07UUFBQytPLElBQUksRUFBQyxnQkFBZ0I7UUFBQ2pKLElBQUksRUFBQzNILENBQUM7UUFBQ21RLEtBQUssRUFBQ3RPLENBQUM7UUFBQ29QLEtBQUssRUFBQ3hRLENBQUM7UUFBQ3NRLFFBQVEsRUFBQ3hRLENBQUM7UUFBQytFLEdBQUcsRUFBQzlFO01BQUMsQ0FBQztJQUFBO0lBQUMsU0FBU2dCLENBQUNBLENBQUN4QixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDRCxDQUFDLEVBQUNFLENBQUMsRUFBQ29CLENBQUMsRUFBQztNQUFDLElBQUlDLENBQUMsR0FBQ3ZCLENBQUMsQ0FBQ3VMLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBRXZMLENBQUMsQ0FBQ3VMLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFBQy9KLENBQUMsR0FBQyxHQUFHLEtBQUdELENBQUMsSUFBRSxHQUFHLEtBQUdBLENBQUM7UUFBQ1YsQ0FBQyxHQUFDLElBQUksQ0FBQ3VELElBQUksQ0FBQ3BFLENBQUMsQ0FBQztNQUFDLE9BQU07UUFBQ3FRLElBQUksRUFBQ3hQLENBQUMsR0FBQyxXQUFXLEdBQUMsbUJBQW1CO1FBQUMwRCxJQUFJLEVBQUM5RSxDQUFDO1FBQUM2USxNQUFNLEVBQUM1USxDQUFDO1FBQUN5TSxJQUFJLEVBQUNsTSxDQUFDO1FBQUNxZCxPQUFPLEVBQUM5YixDQUFDO1FBQUNrVixLQUFLLEVBQUN4VyxDQUFDO1FBQUM2RSxHQUFHLEVBQUMsSUFBSSxDQUFDNkwsT0FBTyxDQUFDdFAsQ0FBQztNQUFDLENBQUM7SUFBQTtJQUFDLFNBQVNaLENBQUNBLENBQUNqQixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQ0YsQ0FBQyxDQUFDUCxDQUFDLEVBQUNRLENBQUMsQ0FBQyxFQUFDQyxDQUFDLEdBQUMsSUFBSSxDQUFDMFEsT0FBTyxDQUFDMVEsQ0FBQyxDQUFDO01BQUMsSUFBSW9CLENBQUMsR0FBQztRQUFDK08sSUFBSSxFQUFDLFNBQVM7UUFBQzZLLElBQUksRUFBQ3hiLENBQUM7UUFBQ2dYLEtBQUssRUFBQyxDQUFDLENBQUM7UUFBQzNSLEdBQUcsRUFBQzdFO01BQUMsQ0FBQztNQUFDLE9BQU07UUFBQ21RLElBQUksRUFBQyxnQkFBZ0I7UUFBQzlMLElBQUksRUFBQzlFLENBQUMsQ0FBQzhFLElBQUk7UUFBQytMLE1BQU0sRUFBQzdRLENBQUMsQ0FBQzZRLE1BQU07UUFBQ25FLElBQUksRUFBQzFNLENBQUMsQ0FBQzBNLElBQUk7UUFBQytDLE9BQU8sRUFBQzVOLENBQUM7UUFBQ3FhLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFBQ0UsWUFBWSxFQUFDLENBQUMsQ0FBQztRQUFDRCxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQUM3VyxHQUFHLEVBQUM3RTtNQUFDLENBQUM7SUFBQTtJQUFDLFNBQVN1QixDQUFDQSxDQUFDaEMsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQ0MsQ0FBQyxFQUFDb0IsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQ3JCLENBQUMsSUFBRUEsQ0FBQyxDQUFDcUUsSUFBSSxJQUFFdkUsQ0FBQyxDQUFDUCxDQUFDLEVBQUNTLENBQUMsQ0FBQztNQUFDLElBQUlzQixDQUFDLEdBQUMsSUFBSSxDQUFDNEMsSUFBSSxDQUFDM0UsQ0FBQyxDQUFDc1gsSUFBSSxDQUFDO01BQUNyWCxDQUFDLENBQUNnRixXQUFXLEdBQUNqRixDQUFDLENBQUNpRixXQUFXO01BQUMsSUFBSTdELENBQUMsR0FBQyxLQUFLLENBQUM7UUFBQ0ksQ0FBQyxHQUFDLEtBQUssQ0FBQztNQUFDLElBQUdoQixDQUFDLEVBQUM7UUFBQyxJQUFHdUIsQ0FBQyxFQUFDLE1BQU0sSUFBSUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLHVDQUF1QyxFQUFDM0IsQ0FBQyxDQUFDO1FBQUNBLENBQUMsQ0FBQ2dYLEtBQUssS0FBR2hYLENBQUMsQ0FBQ2lQLE9BQU8sQ0FBQ2dNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1UsVUFBVSxHQUFDMWIsQ0FBQyxDQUFDd1csS0FBSyxDQUFDLEVBQUN6VixDQUFDLEdBQUNoQixDQUFDLENBQUN5VyxLQUFLLEVBQUM3VixDQUFDLEdBQUNaLENBQUMsQ0FBQ2lQLE9BQU87TUFBQTtNQUFDLE9BQU81TixDQUFDLEtBQUdBLENBQUMsR0FBQ1QsQ0FBQyxFQUFDQSxDQUFDLEdBQUNuQixDQUFDLEVBQUNBLENBQUMsR0FBQzRCLENBQUMsQ0FBQyxFQUFDO1FBQUMrTyxJQUFJLEVBQUM3TyxDQUFDLEdBQUMsZ0JBQWdCLEdBQUMsZ0JBQWdCO1FBQUMrQyxJQUFJLEVBQUM5RSxDQUFDLENBQUM4RSxJQUFJO1FBQUMrTCxNQUFNLEVBQUM3USxDQUFDLENBQUM2USxNQUFNO1FBQUNuRSxJQUFJLEVBQUMxTSxDQUFDLENBQUMwTSxJQUFJO1FBQUMrQyxPQUFPLEVBQUN4UCxDQUFDO1FBQUNzSCxPQUFPLEVBQUNuRyxDQUFDO1FBQUM4YSxTQUFTLEVBQUNsYyxDQUFDLENBQUNpWCxLQUFLO1FBQUNtRixZQUFZLEVBQUM1YSxDQUFDO1FBQUMyYSxVQUFVLEVBQUMxYixDQUFDLElBQUVBLENBQUMsQ0FBQ3dXLEtBQUs7UUFBQzNSLEdBQUcsRUFBQyxJQUFJLENBQUM2TCxPQUFPLENBQUNyUCxDQUFDO01BQUMsQ0FBQztJQUFBO0lBQUMsU0FBU2pCLENBQUNBLENBQUNiLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO01BQUMsSUFBRyxDQUFDQSxDQUFDLElBQUVELENBQUMsQ0FBQ3lFLE1BQU0sRUFBQztRQUFDLElBQUlqRSxDQUFDLEdBQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3NGLEdBQUc7VUFBQy9FLENBQUMsR0FBQ1AsQ0FBQyxDQUFDQSxDQUFDLENBQUN5RSxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUNhLEdBQUc7UUFBQzlFLENBQUMsSUFBRUQsQ0FBQyxLQUFHTixDQUFDLEdBQUM7VUFBQzJkLE1BQU0sRUFBQ3BkLENBQUMsQ0FBQ29kLE1BQU07VUFBQ3JZLEtBQUssRUFBQztZQUFDQyxJQUFJLEVBQUNoRixDQUFDLENBQUMrRSxLQUFLLENBQUNDLElBQUk7WUFBQ0UsTUFBTSxFQUFDbEYsQ0FBQyxDQUFDK0UsS0FBSyxDQUFDRztVQUFNLENBQUM7VUFBQ0QsR0FBRyxFQUFDO1lBQUNELElBQUksRUFBQ2pGLENBQUMsQ0FBQ2tGLEdBQUcsQ0FBQ0QsSUFBSTtZQUFDRSxNQUFNLEVBQUNuRixDQUFDLENBQUNrRixHQUFHLENBQUNDO1VBQU07UUFBQyxDQUFDLENBQUM7TUFBQTtNQUFDLE9BQU07UUFBQ2tMLElBQUksRUFBQyxTQUFTO1FBQUM2SyxJQUFJLEVBQUN6YixDQUFDO1FBQUNpWCxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQUMzUixHQUFHLEVBQUNyRjtNQUFDLENBQUM7SUFBQTtJQUFDLFNBQVNnQyxDQUFDQSxDQUFDakMsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO01BQUMsT0FBT0YsQ0FBQyxDQUFDUCxDQUFDLEVBQUNRLENBQUMsQ0FBQyxFQUFDO1FBQUNvUSxJQUFJLEVBQUMsdUJBQXVCO1FBQUNsSixJQUFJLEVBQUMxSCxDQUFDLENBQUM4RSxJQUFJO1FBQUMrTCxNQUFNLEVBQUM3USxDQUFDLENBQUM2USxNQUFNO1FBQUNuRSxJQUFJLEVBQUMxTSxDQUFDLENBQUMwTSxJQUFJO1FBQUMrQyxPQUFPLEVBQUN4UCxDQUFDO1FBQUNpYyxTQUFTLEVBQUNsYyxDQUFDLENBQUNpWCxLQUFLO1FBQUNrRixVQUFVLEVBQUMzYixDQUFDLElBQUVBLENBQUMsQ0FBQ3lXLEtBQUs7UUFBQzNSLEdBQUcsRUFBQyxJQUFJLENBQUM2TCxPQUFPLENBQUMxUSxDQUFDO01BQUMsQ0FBQztJQUFBO0lBQUMsSUFBSXlCLENBQUMsR0FBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFBQ1AsQ0FBQyxDQUFDMkIsVUFBVSxHQUFDLENBQUMsQ0FBQyxFQUFDM0IsQ0FBQyxDQUFDbVIsY0FBYyxHQUFDM1EsQ0FBQyxFQUFDUixDQUFDLENBQUNTLEVBQUUsR0FBQ21CLENBQUMsRUFBQzVCLENBQUMsQ0FBQ2lYLFVBQVUsR0FBQ3BWLENBQUMsRUFBQzdCLENBQUMsQ0FBQytXLFlBQVksR0FBQ2pWLENBQUMsRUFBQzlCLENBQUMsQ0FBQzRYLFdBQVcsR0FBQ3pXLENBQUMsRUFBQ25CLENBQUMsQ0FBQ3dYLGVBQWUsR0FBQ2pXLENBQUMsRUFBQ3ZCLENBQUMsQ0FBQ21YLGVBQWUsR0FBQ25XLENBQUMsRUFBQ2hCLENBQUMsQ0FBQ29YLFlBQVksR0FBQ3JWLENBQUMsRUFBQy9CLENBQUMsQ0FBQzhXLGNBQWMsR0FBQ2xXLENBQUMsRUFBQ1osQ0FBQyxDQUFDeVgsbUJBQW1CLEdBQUN6VixDQUFDO0lBQUMsSUFBSW5CLENBQUMsR0FBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUFDMkIsQ0FBQyxHQUFDRCxDQUFDLENBQUNwQixDQUFDLENBQUM7RUFBQSxDQUFDLEVBQUMsVUFBU2QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztJQUFDLFlBQVk7O0lBQUMsU0FBU0QsQ0FBQ0EsQ0FBQSxFQUFFLENBQUM7SUFBQyxTQUFTRSxDQUFDQSxDQUFDVCxDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO01BQUMsSUFBRyxJQUFJLElBQUVSLENBQUMsSUFBRSxRQUFRLElBQUUsT0FBT0EsQ0FBQyxJQUFFLFNBQVMsS0FBR0EsQ0FBQyxDQUFDNFEsSUFBSSxFQUFDLE1BQU0sSUFBSTVPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxnRkFBZ0YsR0FBQ2hDLENBQUMsQ0FBQztNQUFDQyxDQUFDLEdBQUNBLENBQUMsSUFBRSxDQUFDLENBQUMsRUFBQyxNQUFNLElBQUdBLENBQUMsS0FBR0EsQ0FBQyxDQUFDMEgsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMxSCxDQUFDLENBQUM2ZCxNQUFNLEtBQUc3ZCxDQUFDLENBQUM4TyxTQUFTLEdBQUMsQ0FBQyxDQUFDLENBQUM7TUFBQyxJQUFJeE8sQ0FBQyxHQUFDQyxDQUFDLENBQUNrQixLQUFLLENBQUMxQixDQUFDLEVBQUNDLENBQUMsQ0FBQztRQUFDUSxDQUFDLEdBQUUsSUFBSUQsQ0FBQyxDQUFDYSxRQUFRLENBQUQsQ0FBQyxDQUFFTCxPQUFPLENBQUNULENBQUMsRUFBQ04sQ0FBQyxDQUFDO01BQUMsT0FBTyxJQUFJTyxDQUFDLENBQUNjLGtCQUFrQixDQUFELENBQUMsQ0FBRU4sT0FBTyxDQUFDUCxDQUFDLEVBQUNSLENBQUMsQ0FBQztJQUFBO0lBQUMsU0FBUzRCLENBQUNBLENBQUM3QixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO01BQUMsU0FBU0QsQ0FBQ0EsQ0FBQSxFQUFFO1FBQUMsSUFBSUEsQ0FBQyxHQUFDQyxDQUFDLENBQUNrQixLQUFLLENBQUMxQixDQUFDLEVBQUNDLENBQUMsQ0FBQztVQUFDUSxDQUFDLEdBQUUsSUFBSUQsQ0FBQyxDQUFDYSxRQUFRLENBQUQsQ0FBQyxDQUFFTCxPQUFPLENBQUNULENBQUMsRUFBQ04sQ0FBQyxDQUFDO1VBQUM0QixDQUFDLEdBQUUsSUFBSXJCLENBQUMsQ0FBQ2Msa0JBQWtCLENBQUQsQ0FBQyxDQUFFTixPQUFPLENBQUNQLENBQUMsRUFBQ1IsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsT0FBT08sQ0FBQyxDQUFDc0MsUUFBUSxDQUFDakIsQ0FBQyxDQUFDO01BQUE7TUFBQyxTQUFTcEIsQ0FBQ0EsQ0FBQ1QsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxPQUFPNEIsQ0FBQyxLQUFHQSxDQUFDLEdBQUN0QixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNzQixDQUFDLENBQUNqQixJQUFJLENBQUMsSUFBSSxFQUFDWixDQUFDLEVBQUNDLENBQUMsQ0FBQztNQUFBO01BQUMsSUFBRyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLElBQUVELENBQUMsSUFBRSxRQUFRLElBQUUsT0FBT0EsQ0FBQyxJQUFFLFNBQVMsS0FBR0EsQ0FBQyxDQUFDNFEsSUFBSSxFQUFDLE1BQU0sSUFBSTVPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyw2RUFBNkUsR0FBQ2hDLENBQUMsQ0FBQztNQUFDQyxDQUFDLEdBQUNZLENBQUMsQ0FBQzJCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQ3ZDLENBQUMsQ0FBQyxFQUFDLE1BQU0sSUFBR0EsQ0FBQyxLQUFHQSxDQUFDLENBQUMwSCxJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQzFILENBQUMsQ0FBQzZkLE1BQU0sS0FBRzdkLENBQUMsQ0FBQzhPLFNBQVMsR0FBQyxDQUFDLENBQUMsQ0FBQztNQUFDLElBQUlsTixDQUFDLEdBQUMsS0FBSyxDQUFDO01BQUMsT0FBT3BCLENBQUMsQ0FBQ2tPLE1BQU0sR0FBQyxVQUFTM08sQ0FBQyxFQUFDO1FBQUMsT0FBTzZCLENBQUMsS0FBR0EsQ0FBQyxHQUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDc0IsQ0FBQyxDQUFDOE0sTUFBTSxDQUFDM08sQ0FBQyxDQUFDO01BQUEsQ0FBQyxFQUFDUyxDQUFDLENBQUN5UCxNQUFNLEdBQUMsVUFBU2xRLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUNDLENBQUMsRUFBQztRQUFDLE9BQU9vQixDQUFDLEtBQUdBLENBQUMsR0FBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ3NCLENBQUMsQ0FBQ3FPLE1BQU0sQ0FBQ2xRLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUNDLENBQUMsQ0FBQztNQUFBLENBQUMsRUFBQ0EsQ0FBQztJQUFBO0lBQUMsU0FBU3FCLENBQUNBLENBQUM5QixDQUFDLEVBQUNDLENBQUMsRUFBQztNQUFDLElBQUdELENBQUMsS0FBR0MsQ0FBQyxFQUFDLE9BQU0sQ0FBQyxDQUFDO01BQUMsSUFBR1ksQ0FBQyxDQUFDd0UsT0FBTyxDQUFDckYsQ0FBQyxDQUFDLElBQUVhLENBQUMsQ0FBQ3dFLE9BQU8sQ0FBQ3BGLENBQUMsQ0FBQyxJQUFFRCxDQUFDLENBQUN5RSxNQUFNLEtBQUd4RSxDQUFDLENBQUN3RSxNQUFNLEVBQUM7UUFBQyxLQUFJLElBQUlqRSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNSLENBQUMsQ0FBQ3lFLE1BQU0sRUFBQ2pFLENBQUMsRUFBRSxFQUFDLElBQUcsQ0FBQ3NCLENBQUMsQ0FBQzlCLENBQUMsQ0FBQ1EsQ0FBQyxDQUFDLEVBQUNQLENBQUMsQ0FBQ08sQ0FBQyxDQUFDLENBQUMsRUFBQyxPQUFNLENBQUMsQ0FBQztRQUFDLE9BQU0sQ0FBQyxDQUFDO01BQUE7SUFBQztJQUFDLFNBQVN1QixDQUFDQSxDQUFDL0IsQ0FBQyxFQUFDO01BQUMsSUFBRyxDQUFDQSxDQUFDLENBQUM4RSxJQUFJLENBQUNtTSxLQUFLLEVBQUM7UUFBQyxJQUFJaFIsQ0FBQyxHQUFDRCxDQUFDLENBQUM4RSxJQUFJO1FBQUM5RSxDQUFDLENBQUM4RSxJQUFJLEdBQUM7VUFBQzhMLElBQUksRUFBQyxnQkFBZ0I7VUFBQ2pKLElBQUksRUFBQyxDQUFDLENBQUM7VUFBQ3dJLEtBQUssRUFBQyxDQUFDO1VBQUNjLEtBQUssRUFBQyxDQUFDaFIsQ0FBQyxDQUFDOFEsUUFBUSxHQUFDLEVBQUUsQ0FBQztVQUFDQSxRQUFRLEVBQUM5USxDQUFDLENBQUM4USxRQUFRLEdBQUMsRUFBRTtVQUFDekwsR0FBRyxFQUFDckYsQ0FBQyxDQUFDcUY7UUFBRyxDQUFDO01BQUE7SUFBQztJQUFDLElBQUlsRSxDQUFDLEdBQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUM7TUFBQ2dCLENBQUMsR0FBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFBQ1AsQ0FBQyxDQUFDMkIsVUFBVSxHQUFDLENBQUMsQ0FBQyxFQUFDM0IsQ0FBQyxDQUFDb0IsUUFBUSxHQUFDZCxDQUFDLEVBQUNOLENBQUMsQ0FBQ2lCLFVBQVUsR0FBQ1QsQ0FBQyxFQUFDUixDQUFDLENBQUNlLE9BQU8sR0FBQ2EsQ0FBQztJQUFDLElBQUlaLENBQUMsR0FBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUFDd0IsQ0FBQyxHQUFDUixDQUFDLENBQUNQLENBQUMsQ0FBQztNQUFDSixDQUFDLEdBQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFBQ3lCLENBQUMsR0FBQ3pCLENBQUMsQ0FBQyxFQUFFLENBQUM7TUFBQzBCLENBQUMsR0FBQ1YsQ0FBQyxDQUFDUyxDQUFDLENBQUM7TUFBQ25CLENBQUMsR0FBQyxFQUFFLENBQUMySyxLQUFLO0lBQUNsTCxDQUFDLENBQUN5QyxTQUFTLEdBQUM7TUFBQ29NLFFBQVEsRUFBQzdPLENBQUM7TUFBQ3dkLE1BQU0sRUFBQyxTQUFBQSxDQUFTL2QsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUksQ0FBQytkLE9BQU8sQ0FBQ3ZaLE1BQU07UUFBQyxJQUFHekUsQ0FBQyxDQUFDZ2UsT0FBTyxDQUFDdlosTUFBTSxLQUFHeEUsQ0FBQyxFQUFDLE9BQU0sQ0FBQyxDQUFDO1FBQUMsS0FBSSxJQUFJTyxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNQLENBQUMsRUFBQ08sQ0FBQyxFQUFFLEVBQUM7VUFBQyxJQUFJRCxDQUFDLEdBQUMsSUFBSSxDQUFDeWQsT0FBTyxDQUFDeGQsQ0FBQyxDQUFDO1lBQUNDLENBQUMsR0FBQ1QsQ0FBQyxDQUFDZ2UsT0FBTyxDQUFDeGQsQ0FBQyxDQUFDO1VBQUMsSUFBR0QsQ0FBQyxDQUFDMGQsTUFBTSxLQUFHeGQsQ0FBQyxDQUFDd2QsTUFBTSxJQUFFLENBQUNuYyxDQUFDLENBQUN2QixDQUFDLENBQUN1TSxJQUFJLEVBQUNyTSxDQUFDLENBQUNxTSxJQUFJLENBQUMsRUFBQyxPQUFNLENBQUMsQ0FBQztRQUFBO1FBQUM3TSxDQUFDLEdBQUMsSUFBSSxDQUFDaWUsUUFBUSxDQUFDelosTUFBTTtRQUFDLEtBQUksSUFBSWpFLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ1AsQ0FBQyxFQUFDTyxDQUFDLEVBQUUsRUFBQyxJQUFHLENBQUMsSUFBSSxDQUFDMGQsUUFBUSxDQUFDMWQsQ0FBQyxDQUFDLENBQUN1ZCxNQUFNLENBQUMvZCxDQUFDLENBQUNrZSxRQUFRLENBQUMxZCxDQUFDLENBQUMsQ0FBQyxFQUFDLE9BQU0sQ0FBQyxDQUFDO1FBQzl4K0IsT0FBTSxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUMyZCxJQUFJLEVBQUMsQ0FBQztNQUFDbmQsT0FBTyxFQUFDLFNBQUFBLENBQVNoQixDQUFDLEVBQUNDLENBQUMsRUFBQztRQUFDLE9BQU8sSUFBSSxDQUFDbWUsVUFBVSxHQUFDLEVBQUUsRUFBQyxJQUFJLENBQUNKLE9BQU8sR0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDRSxRQUFRLEdBQUMsRUFBRSxFQUFDLElBQUksQ0FBQzNGLE9BQU8sR0FBQ3RZLENBQUMsRUFBQyxJQUFJLENBQUNvZSxZQUFZLEdBQUNwZSxDQUFDLENBQUNvZSxZQUFZLEVBQUMsSUFBSSxDQUFDQyxRQUFRLEdBQUNyZSxDQUFDLENBQUNxZSxRQUFRLEVBQUNyZSxDQUFDLENBQUNnRixXQUFXLEdBQUNoRixDQUFDLENBQUNnRixXQUFXLElBQUUsRUFBRSxFQUFDaEYsQ0FBQyxDQUFDc2UsWUFBWSxHQUFDMWQsQ0FBQyxDQUFDMkIsTUFBTSxDQUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDO1VBQUNvZCxhQUFhLEVBQUMsQ0FBQyxDQUFDO1VBQUNDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztVQUFDdlgsSUFBSSxFQUFDLENBQUMsQ0FBQztVQUFDLElBQUksRUFBQyxDQUFDLENBQUM7VUFBQ3dYLE1BQU0sRUFBQyxDQUFDLENBQUM7VUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1VBQUM3YSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1VBQUN5TCxNQUFNLEVBQUMsQ0FBQztRQUFDLENBQUMsRUFBQ3JQLENBQUMsQ0FBQ3NlLFlBQVksQ0FBQyxFQUFDLElBQUksQ0FBQ2pOLE1BQU0sQ0FBQ3RSLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQzJlLGNBQWMsRUFBQyxTQUFBQSxDQUFTM2UsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUksSUFBSSxDQUFDbVAsUUFBUSxDQUFELENBQUM7VUFBQzVPLENBQUMsR0FBQ1AsQ0FBQyxDQUFDZSxPQUFPLENBQUNoQixDQUFDLEVBQUMsSUFBSSxDQUFDdVksT0FBTyxDQUFDO1VBQUNoWSxDQUFDLEdBQUMsSUFBSSxDQUFDNGQsSUFBSSxFQUFFO1FBQUMsT0FBTyxJQUFJLENBQUNwTyxVQUFVLEdBQUMsSUFBSSxDQUFDQSxVQUFVLElBQUV2UCxDQUFDLENBQUN1UCxVQUFVLEVBQUMsSUFBSSxDQUFDbU8sUUFBUSxDQUFDM2QsQ0FBQyxDQUFDLEdBQUNDLENBQUMsRUFBQyxJQUFJLENBQUN1TyxTQUFTLEdBQUMsSUFBSSxDQUFDQSxTQUFTLElBQUV2TyxDQUFDLENBQUN1TyxTQUFTLEVBQUN4TyxDQUFDO01BQUEsQ0FBQztNQUFDK1EsTUFBTSxFQUFDLFNBQUFBLENBQVN0UixDQUFDLEVBQUM7UUFBQyxJQUFHLENBQUMsSUFBSSxDQUFDQSxDQUFDLENBQUM0USxJQUFJLENBQUMsRUFBQyxNQUFNLElBQUk1TyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLEdBQUNoQyxDQUFDLENBQUM0USxJQUFJLEVBQUM1USxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUNvZSxVQUFVLENBQUNwQixPQUFPLENBQUNoZCxDQUFDLENBQUM7UUFBQyxJQUFJQyxDQUFDLEdBQUMsSUFBSSxDQUFDRCxDQUFDLENBQUM0USxJQUFJLENBQUMsQ0FBQzVRLENBQUMsQ0FBQztRQUFDLE9BQU8sSUFBSSxDQUFDb2UsVUFBVSxDQUFDbkIsS0FBSyxDQUFDLENBQUMsRUFBQ2hkLENBQUM7TUFBQSxDQUFDO01BQUNxYixPQUFPLEVBQUMsU0FBQUEsQ0FBU3RiLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQ3VZLE9BQU8sQ0FBQ3RULFdBQVcsQ0FBQytYLE9BQU8sQ0FBQ2hkLENBQUMsQ0FBQ2lGLFdBQVcsQ0FBQztRQUFDLEtBQUksSUFBSWhGLENBQUMsR0FBQ0QsQ0FBQyxDQUFDeWIsSUFBSSxFQUFDamIsQ0FBQyxHQUFDUCxDQUFDLENBQUN3RSxNQUFNLEVBQUNsRSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNDLENBQUMsRUFBQ0QsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDK1EsTUFBTSxDQUFDclIsQ0FBQyxDQUFDTSxDQUFDLENBQUMsQ0FBQztRQUFDLE9BQU8sSUFBSSxDQUFDZ1ksT0FBTyxDQUFDdFQsV0FBVyxDQUFDZ1ksS0FBSyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMyQixRQUFRLEdBQUMsQ0FBQyxLQUFHcGUsQ0FBQyxFQUFDLElBQUksQ0FBQ3lFLFdBQVcsR0FBQ2pGLENBQUMsQ0FBQ2lGLFdBQVcsR0FBQ2pGLENBQUMsQ0FBQ2lGLFdBQVcsQ0FBQ1IsTUFBTSxHQUFDLENBQUMsRUFBQyxJQUFJO01BQUEsQ0FBQztNQUFDc1gsY0FBYyxFQUFDLFNBQUFBLENBQVMvYixDQUFDLEVBQUM7UUFBQytCLENBQUMsQ0FBQy9CLENBQUMsQ0FBQztRQUFDLElBQUlDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDeVAsT0FBTztVQUFDalAsQ0FBQyxHQUFDUixDQUFDLENBQUN1SCxPQUFPO1FBQUN0SCxDQUFDLEdBQUNBLENBQUMsSUFBRSxJQUFJLENBQUMwZSxjQUFjLENBQUMxZSxDQUFDLENBQUMsRUFBQ08sQ0FBQyxHQUFDQSxDQUFDLElBQUUsSUFBSSxDQUFDbWUsY0FBYyxDQUFDbmUsQ0FBQyxDQUFDO1FBQUMsSUFBSUQsQ0FBQyxHQUFDLElBQUksQ0FBQ3NlLGFBQWEsQ0FBQzdlLENBQUMsQ0FBQztRQUFDLFFBQVEsS0FBR08sQ0FBQyxHQUFDLElBQUksQ0FBQ3VlLFdBQVcsQ0FBQzllLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLENBQUMsR0FBQyxRQUFRLEtBQUdELENBQUMsSUFBRSxJQUFJLENBQUN3ZSxXQUFXLENBQUMvZSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNpZSxNQUFNLENBQUMsYUFBYSxFQUFDaGUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDZ2UsTUFBTSxDQUFDLGFBQWEsRUFBQ3pkLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3lkLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLENBQUNBLE1BQU0sQ0FBQyxZQUFZLEVBQUNqZSxDQUFDLENBQUM4RSxJQUFJLENBQUNpTSxRQUFRLENBQUMsS0FBRyxJQUFJLENBQUNpTyxjQUFjLENBQUNoZixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDeWQsTUFBTSxDQUFDLGFBQWEsRUFBQ2hlLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2dlLE1BQU0sQ0FBQyxhQUFhLEVBQUN6ZCxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUN5ZCxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUMsSUFBSSxDQUFDQSxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ0EsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUFBLENBQUM7TUFBQ2pDLGNBQWMsRUFBQyxTQUFBQSxDQUFTaGMsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDRCxDQUFDLENBQUN5UCxPQUFPLElBQUUsSUFBSSxDQUFDa1AsY0FBYyxDQUFDM2UsQ0FBQyxDQUFDeVAsT0FBTyxDQUFDO1VBQUNqUCxDQUFDLEdBQUMsSUFBSSxDQUFDeWUsdUJBQXVCLENBQUNqZixDQUFDLEVBQUNDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztVQUFDTSxDQUFDLEdBQUNQLENBQUMsQ0FBQzhFLElBQUk7UUFBQyxJQUFJLENBQUNrTCxhQUFhLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDaU8sTUFBTSxDQUFDLG1CQUFtQixFQUFDemQsQ0FBQyxDQUFDaUUsTUFBTSxFQUFDbEUsQ0FBQyxDQUFDd1EsUUFBUSxDQUFDO01BQUEsQ0FBQztNQUFDd0wsZ0JBQWdCLEVBQUMsU0FBQUEsQ0FBU3ZjLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQytQLFVBQVUsR0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJOVAsQ0FBQyxHQUFDRCxDQUFDLENBQUN5UCxPQUFPO1FBQUN4UCxDQUFDLEtBQUdBLENBQUMsR0FBQyxJQUFJLENBQUMwZSxjQUFjLENBQUMzZSxDQUFDLENBQUN5UCxPQUFPLENBQUMsQ0FBQztRQUFDLElBQUlqUCxDQUFDLEdBQUNSLENBQUMsQ0FBQzZRLE1BQU07UUFBQyxJQUFHclEsQ0FBQyxDQUFDaUUsTUFBTSxHQUFDLENBQUMsRUFBQyxNQUFNLElBQUl6QyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsMkNBQTJDLEdBQUN4QixDQUFDLENBQUNpRSxNQUFNLEVBQUN6RSxDQUFDLENBQUM7UUFBQ1EsQ0FBQyxDQUFDaUUsTUFBTSxLQUFHLElBQUksQ0FBQzhULE9BQU8sQ0FBQzJHLHNCQUFzQixHQUFDLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQyxhQUFhLEVBQUMsV0FBVyxDQUFDLEdBQUN6ZCxDQUFDLENBQUMySCxJQUFJLENBQUM7VUFBQ3lJLElBQUksRUFBQyxnQkFBZ0I7VUFBQ0ssS0FBSyxFQUFDLEVBQUU7VUFBQ2QsS0FBSyxFQUFDO1FBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJNVAsQ0FBQyxHQUFDUCxDQUFDLENBQUMwSCxJQUFJLENBQUNxSixRQUFRO1VBQUN0USxDQUFDLEdBQUMsZUFBZSxLQUFHVCxDQUFDLENBQUMwSCxJQUFJLENBQUNrSixJQUFJO1FBQUNuUSxDQUFDLElBQUUsSUFBSSxDQUFDNlEsTUFBTSxDQUFDdFIsQ0FBQyxDQUFDMEgsSUFBSSxDQUFDLEVBQUMsSUFBSSxDQUFDdVgsdUJBQXVCLENBQUNqZixDQUFDLEVBQUNDLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUFDLElBQUk0QixDQUFDLEdBQUM3QixDQUFDLENBQUN3TyxNQUFNLElBQUUsRUFBRTtRQUFDLElBQUksQ0FBQytKLE9BQU8sQ0FBQzRHLGFBQWEsSUFBRXRkLENBQUMsS0FBRyxJQUFJLENBQUNvYyxNQUFNLENBQUMsZUFBZSxFQUFDcGMsQ0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBQyxJQUFJLENBQUNvYyxNQUFNLENBQUMsZUFBZSxFQUFDeGQsQ0FBQyxFQUFDRixDQUFDLEVBQUNzQixDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNvYyxNQUFNLENBQUMsUUFBUSxDQUFDO01BQUEsQ0FBQztNQUFDaEMscUJBQXFCLEVBQUMsU0FBQUEsQ0FBU2pjLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQ3VjLGdCQUFnQixDQUFDdmMsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDc2MsaUJBQWlCLEVBQUMsU0FBQUEsQ0FBU3RjLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQ21kLGFBQWEsQ0FBQ25kLENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUM2ZCxPQUFPLElBQUUsQ0FBQyxJQUFJLENBQUN0RixPQUFPLENBQUM2RyxRQUFRLEdBQUMsSUFBSSxDQUFDbkIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFDLElBQUksQ0FBQ0EsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUFBLENBQUM7TUFBQzVCLFNBQVMsRUFBQyxTQUFBQSxDQUFTcmMsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDZ2MsY0FBYyxDQUFDaGMsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDa2QsZ0JBQWdCLEVBQUMsU0FBQUEsQ0FBU2xkLENBQUMsRUFBQztRQUFDQSxDQUFDLENBQUNnRyxLQUFLLElBQUUsSUFBSSxDQUFDaVksTUFBTSxDQUFDLGVBQWUsRUFBQ2plLENBQUMsQ0FBQ2dHLEtBQUssQ0FBQztNQUFBLENBQUM7TUFBQ3dXLGdCQUFnQixFQUFDLFNBQUFBLENBQUEsRUFBVSxDQUFDLENBQUM7TUFBQ1csYUFBYSxFQUFDLFNBQUFBLENBQVNuZCxDQUFDLEVBQUM7UUFBQytCLENBQUMsQ0FBQy9CLENBQUMsQ0FBQztRQUFDLElBQUlDLENBQUMsR0FBQyxJQUFJLENBQUM0ZSxhQUFhLENBQUM3ZSxDQUFDLENBQUM7UUFBQyxRQUFRLEtBQUdDLENBQUMsR0FBQyxJQUFJLENBQUM4ZSxXQUFXLENBQUMvZSxDQUFDLENBQUMsR0FBQyxRQUFRLEtBQUdDLENBQUMsR0FBQyxJQUFJLENBQUM2ZSxXQUFXLENBQUM5ZSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUNnZixjQUFjLENBQUNoZixDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNnZixjQUFjLEVBQUMsU0FBQUEsQ0FBU2hmLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUM7UUFBQyxJQUFJRCxDQUFDLEdBQUNQLENBQUMsQ0FBQzhFLElBQUk7VUFBQ3JFLENBQUMsR0FBQ0YsQ0FBQyxDQUFDMFEsS0FBSyxDQUFDLENBQUMsQ0FBQztVQUFDcFAsQ0FBQyxHQUFDLElBQUksSUFBRTVCLENBQUMsSUFBRSxJQUFJLElBQUVPLENBQUM7UUFBQyxJQUFJLENBQUN5ZCxNQUFNLENBQUMsWUFBWSxFQUFDMWQsQ0FBQyxDQUFDNFAsS0FBSyxDQUFDLEVBQUMsSUFBSSxDQUFDOE4sTUFBTSxDQUFDLGFBQWEsRUFBQ2hlLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2dlLE1BQU0sQ0FBQyxhQUFhLEVBQUN6ZCxDQUFDLENBQUMsRUFBQ0QsQ0FBQyxDQUFDOE8sTUFBTSxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2lDLE1BQU0sQ0FBQy9RLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzBkLE1BQU0sQ0FBQyxpQkFBaUIsRUFBQ3hkLENBQUMsRUFBQ29CLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ2tkLFdBQVcsRUFBQyxTQUFBQSxDQUFTL2UsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDRCxDQUFDLENBQUM4RSxJQUFJO1FBQUM3RSxDQUFDLENBQUNvUCxNQUFNLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDaUMsTUFBTSxDQUFDclIsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDZ2UsTUFBTSxDQUFDLHVCQUF1QixDQUFDO01BQUEsQ0FBQztNQUFDYSxXQUFXLEVBQUMsU0FBQUEsQ0FBUzllLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUM7UUFBQyxJQUFJRCxDQUFDLEdBQUMsSUFBSSxDQUFDMGUsdUJBQXVCLENBQUNqZixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxDQUFDO1VBQUNDLENBQUMsR0FBQ1QsQ0FBQyxDQUFDOEUsSUFBSTtVQUFDakQsQ0FBQyxHQUFDcEIsQ0FBQyxDQUFDd1EsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUFDLElBQUcsSUFBSSxDQUFDc0gsT0FBTyxDQUFDZ0csWUFBWSxDQUFDMWMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDb2MsTUFBTSxDQUFDLG1CQUFtQixFQUFDMWQsQ0FBQyxDQUFDa0UsTUFBTSxFQUFDNUMsQ0FBQyxDQUFDLENBQUMsS0FBSTtVQUFDLElBQUcsSUFBSSxDQUFDMFcsT0FBTyxDQUFDOEcsZ0JBQWdCLEVBQUMsTUFBTSxJQUFJcmQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLDhEQUE4RCxHQUFDSCxDQUFDLEVBQUM3QixDQUFDLENBQUM7VUFBQ1MsQ0FBQyxDQUFDNE8sTUFBTSxHQUFDLENBQUMsQ0FBQyxFQUFDNU8sQ0FBQyxDQUFDNmUsS0FBSyxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2hPLE1BQU0sQ0FBQzdRLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3dkLE1BQU0sQ0FBQyxjQUFjLEVBQUMxZCxDQUFDLENBQUNrRSxNQUFNLEVBQUNoRSxDQUFDLENBQUNzUSxRQUFRLEVBQUM3TyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNnQixPQUFPLENBQUM4TixRQUFRLENBQUN2USxDQUFDLENBQUMsQ0FBQztRQUFBO01BQUMsQ0FBQztNQUFDMmMsY0FBYyxFQUFDLFNBQUFBLENBQVNwZCxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUN1ZixRQUFRLENBQUN2ZixDQUFDLENBQUNtUSxLQUFLLENBQUMsRUFBQyxJQUFJLENBQUM4TixNQUFNLENBQUMsWUFBWSxFQUFDamUsQ0FBQyxDQUFDbVEsS0FBSyxDQUFDO1FBQUMsSUFBSWxRLENBQUMsR0FBQ0QsQ0FBQyxDQUFDaVIsS0FBSyxDQUFDLENBQUMsQ0FBQztVQUFDelEsQ0FBQyxHQUFDMEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDZ0IsT0FBTyxDQUFDNE4sUUFBUSxDQUFDOVEsQ0FBQyxDQUFDO1VBQUNPLENBQUMsR0FBQyxDQUFDUCxDQUFDLENBQUNtUSxLQUFLLElBQUUsQ0FBQzNQLENBQUMsSUFBRSxJQUFJLENBQUNnZixlQUFlLENBQUN2ZixDQUFDLENBQUM7UUFBQ00sQ0FBQyxHQUFDLElBQUksQ0FBQzBkLE1BQU0sQ0FBQyxrQkFBa0IsRUFBQzFkLENBQUMsRUFBQ1AsQ0FBQyxDQUFDaVIsS0FBSyxDQUFDLEdBQUNoUixDQUFDLEdBQUNELENBQUMsQ0FBQzJILElBQUksSUFBRSxJQUFJLENBQUM0USxPQUFPLENBQUM1USxJQUFJLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDc1csTUFBTSxDQUFDLFlBQVksRUFBQ2plLENBQUMsQ0FBQ21RLEtBQUssRUFBQ25RLENBQUMsQ0FBQ2lSLEtBQUssRUFBQ2pSLENBQUMsQ0FBQ3FQLE1BQU0sQ0FBQyxJQUFFLElBQUksQ0FBQzRPLE1BQU0sQ0FBQyxpQkFBaUIsRUFBQ2plLENBQUMsQ0FBQ2lSLEtBQUssRUFBQ2pSLENBQUMsQ0FBQ3NmLEtBQUssRUFBQ3RmLENBQUMsQ0FBQ3FQLE1BQU0sRUFBQzdPLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQ3lkLE1BQU0sQ0FBQyxhQUFhLENBQUM7TUFBQSxDQUFDO01BQUNaLGFBQWEsRUFBQyxTQUFBQSxDQUFTcmQsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDaWUsTUFBTSxDQUFDLFlBQVksRUFBQ2plLENBQUMsQ0FBQ2dHLEtBQUssQ0FBQztNQUFBLENBQUM7TUFBQ3NYLGFBQWEsRUFBQyxTQUFBQSxDQUFTdGQsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDaWUsTUFBTSxDQUFDLGFBQWEsRUFBQ2plLENBQUMsQ0FBQ2dHLEtBQUssQ0FBQztNQUFBLENBQUM7TUFBQ3VYLGNBQWMsRUFBQyxTQUFBQSxDQUFTdmQsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDaWUsTUFBTSxDQUFDLGFBQWEsRUFBQ2plLENBQUMsQ0FBQ2dHLEtBQUssQ0FBQztNQUFBLENBQUM7TUFBQ3dYLGdCQUFnQixFQUFDLFNBQUFBLENBQUEsRUFBVTtRQUFDLElBQUksQ0FBQ1MsTUFBTSxDQUFDLGFBQWEsRUFBQyxXQUFXLENBQUM7TUFBQSxDQUFDO01BQUNSLFdBQVcsRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxJQUFJLENBQUNRLE1BQU0sQ0FBQyxhQUFhLEVBQUMsTUFBTSxDQUFDO01BQUEsQ0FBQztNQUFDUCxJQUFJLEVBQUMsU0FBQUEsQ0FBUzFkLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDMlgsS0FBSztVQUFDblgsQ0FBQyxHQUFDLENBQUM7VUFBQ0QsQ0FBQyxHQUFDTixDQUFDLENBQUN3RSxNQUFNO1FBQUMsS0FBSSxJQUFJLENBQUN3WixNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUN6ZCxDQUFDLEdBQUNELENBQUMsRUFBQ0MsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDaWYsU0FBUyxDQUFDeGYsQ0FBQyxDQUFDTyxDQUFDLENBQUMsQ0FBQ3dGLEtBQUssQ0FBQztRQUFDLE9BQUt4RixDQUFDLEVBQUUsR0FBRSxJQUFJLENBQUN5ZCxNQUFNLENBQUMsY0FBYyxFQUFDaGUsQ0FBQyxDQUFDTyxDQUFDLENBQUMsQ0FBQ3FILEdBQUcsQ0FBQztRQUFDLElBQUksQ0FBQ29XLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFBQSxDQUFDO01BQUNBLE1BQU0sRUFBQyxTQUFBQSxDQUFTamUsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDZ2UsT0FBTyxDQUFDN1YsSUFBSSxDQUFDO1VBQUM4VixNQUFNLEVBQUNqZSxDQUFDO1VBQUM4TSxJQUFJLEVBQUNoTSxDQUFDLENBQUNGLElBQUksQ0FBQzRELFNBQVMsRUFBQyxDQUFDLENBQUM7VUFBQ2MsR0FBRyxFQUFDLElBQUksQ0FBQzhZLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzlZO1FBQUcsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDaWEsUUFBUSxFQUFDLFNBQUFBLENBQVN2ZixDQUFDLEVBQUM7UUFBQ0EsQ0FBQyxLQUFHLElBQUksQ0FBQytPLFNBQVMsR0FBQyxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQzhQLGFBQWEsRUFBQyxTQUFBQSxDQUFTN2UsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDaUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDZ0IsT0FBTyxDQUFDOE4sUUFBUSxDQUFDaFIsQ0FBQyxDQUFDOEUsSUFBSSxDQUFDO1VBQUN0RSxDQUFDLEdBQUNQLENBQUMsSUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDdWYsZUFBZSxDQUFDeGYsQ0FBQyxDQUFDOEUsSUFBSSxDQUFDbU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQUMxUSxDQUFDLEdBQUMsQ0FBQ0MsQ0FBQyxJQUFFMEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDZ0IsT0FBTyxDQUFDeU4sZ0JBQWdCLENBQUMzUSxDQUFDLENBQUM7VUFBQ1MsQ0FBQyxHQUFDLENBQUNELENBQUMsS0FBR0QsQ0FBQyxJQUFFTixDQUFDLENBQUM7UUFBQyxJQUFHUSxDQUFDLElBQUUsQ0FBQ0YsQ0FBQyxFQUFDO1VBQUMsSUFBSXNCLENBQUMsR0FBQzdCLENBQUMsQ0FBQzhFLElBQUksQ0FBQ21NLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBQ25QLENBQUMsR0FBQyxJQUFJLENBQUN5VyxPQUFPO1VBQUN6VyxDQUFDLENBQUN5YyxZQUFZLENBQUMxYyxDQUFDLENBQUMsR0FBQ3RCLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQ3VCLENBQUMsQ0FBQ3VkLGdCQUFnQixLQUFHNWUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUE7UUFBQyxPQUFPRixDQUFDLEdBQUMsUUFBUSxHQUFDRSxDQUFDLEdBQUMsV0FBVyxHQUFDLFFBQVE7TUFBQSxDQUFDO01BQUNpZixVQUFVLEVBQUMsU0FBQUEsQ0FBUzFmLENBQUMsRUFBQztRQUFDLEtBQUksSUFBSUMsQ0FBQyxHQUFDLENBQUMsRUFBQ08sQ0FBQyxHQUFDUixDQUFDLENBQUN5RSxNQUFNLEVBQUN4RSxDQUFDLEdBQUNPLENBQUMsRUFBQ1AsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDd2YsU0FBUyxDQUFDemYsQ0FBQyxDQUFDQyxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3dmLFNBQVMsRUFBQyxTQUFBQSxDQUFTemYsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUksSUFBRUQsQ0FBQyxDQUFDZ0csS0FBSyxHQUFDaEcsQ0FBQyxDQUFDZ0csS0FBSyxHQUFDaEcsQ0FBQyxDQUFDK1EsUUFBUSxJQUFFLEVBQUU7UUFBQyxJQUFHLElBQUksQ0FBQ3NOLFlBQVksRUFBQ3BlLENBQUMsQ0FBQzJFLE9BQU8sS0FBRzNFLENBQUMsR0FBQ0EsQ0FBQyxDQUFDMkUsT0FBTyxDQUFDLGNBQWMsRUFBQyxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxFQUFDNUUsQ0FBQyxDQUFDbVEsS0FBSyxJQUFFLElBQUksQ0FBQ29QLFFBQVEsQ0FBQ3ZmLENBQUMsQ0FBQ21RLEtBQUssQ0FBQyxFQUFDLElBQUksQ0FBQzhOLE1BQU0sQ0FBQyxZQUFZLEVBQUNqZSxDQUFDLENBQUNtUSxLQUFLLElBQUUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDOE4sTUFBTSxDQUFDLGlCQUFpQixFQUFDaGUsQ0FBQyxFQUFDRCxDQUFDLENBQUM0USxJQUFJLENBQUMsRUFBQyxlQUFlLEtBQUc1USxDQUFDLENBQUM0USxJQUFJLElBQUUsSUFBSSxDQUFDVSxNQUFNLENBQUN0UixDQUFDLENBQUMsQ0FBQyxLQUFJO1VBQUMsSUFBRyxJQUFJLENBQUNzZSxRQUFRLEVBQUM7WUFBQyxJQUFJOWQsQ0FBQyxHQUFDLEtBQUssQ0FBQztZQUFDLElBQUcsQ0FBQ1IsQ0FBQyxDQUFDaVIsS0FBSyxJQUFFL08sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDZ0IsT0FBTyxDQUFDNE4sUUFBUSxDQUFDOVEsQ0FBQyxDQUFDLElBQUVBLENBQUMsQ0FBQ21RLEtBQUssS0FBRzNQLENBQUMsR0FBQyxJQUFJLENBQUNnZixlQUFlLENBQUN4ZixDQUFDLENBQUNpUixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDelEsQ0FBQyxFQUFDO2NBQUMsSUFBSUQsQ0FBQyxHQUFDUCxDQUFDLENBQUNpUixLQUFLLENBQUN4RixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNnRCxJQUFJLENBQUMsR0FBRyxDQUFDO2NBQUMsSUFBSSxDQUFDd1AsTUFBTSxDQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUN6ZCxDQUFDLEVBQUNELENBQUMsQ0FBQztZQUFBLENBQUMsTUFBS04sQ0FBQyxHQUFDRCxDQUFDLENBQUMrUSxRQUFRLElBQUU5USxDQUFDLEVBQUNBLENBQUMsQ0FBQzJFLE9BQU8sS0FBRzNFLENBQUMsR0FBQ0EsQ0FBQyxDQUFDMkUsT0FBTyxDQUFDLGVBQWUsRUFBQyxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3FaLE1BQU0sQ0FBQyxRQUFRLEVBQUNqZSxDQUFDLENBQUM0USxJQUFJLEVBQUMzUSxDQUFDLENBQUM7VUFBQTtVQUFDLElBQUksQ0FBQ3FSLE1BQU0sQ0FBQ3RSLENBQUMsQ0FBQztRQUFBO01BQUMsQ0FBQztNQUFDaWYsdUJBQXVCLEVBQUMsU0FBQUEsQ0FBU2pmLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUNELENBQUMsRUFBQztRQUFDLElBQUlFLENBQUMsR0FBQ1QsQ0FBQyxDQUFDNlEsTUFBTTtRQUFDLE9BQU8sSUFBSSxDQUFDNk8sVUFBVSxDQUFDamYsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDd2QsTUFBTSxDQUFDLGFBQWEsRUFBQ2hlLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2dlLE1BQU0sQ0FBQyxhQUFhLEVBQUN6ZCxDQUFDLENBQUMsRUFBQ1IsQ0FBQyxDQUFDME0sSUFBSSxHQUFDLElBQUksQ0FBQzRFLE1BQU0sQ0FBQ3RSLENBQUMsQ0FBQzBNLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQ3VSLE1BQU0sQ0FBQyxXQUFXLEVBQUMxZCxDQUFDLENBQUMsRUFBQ0UsQ0FBQztNQUFBLENBQUM7TUFBQytlLGVBQWUsRUFBQyxTQUFBQSxDQUFTeGYsQ0FBQyxFQUFDO1FBQUMsS0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBQyxFQUFDTyxDQUFDLEdBQUMsSUFBSSxDQUFDK1gsT0FBTyxDQUFDdFQsV0FBVyxDQUFDUixNQUFNLEVBQUN4RSxDQUFDLEdBQUNPLENBQUMsRUFBQ1AsQ0FBQyxFQUFFLEVBQUM7VUFBQyxJQUFJTSxDQUFDLEdBQUMsSUFBSSxDQUFDZ1ksT0FBTyxDQUFDdFQsV0FBVyxDQUFDaEYsQ0FBQyxDQUFDO1lBQUNRLENBQUMsR0FBQ0YsQ0FBQyxJQUFFTSxDQUFDLENBQUNrRSxPQUFPLENBQUN4RSxDQUFDLEVBQUNQLENBQUMsQ0FBQztVQUFDLElBQUdPLENBQUMsSUFBRUUsQ0FBQyxJQUFFLENBQUMsRUFBQyxPQUFNLENBQUNSLENBQUMsRUFBQ1EsQ0FBQyxDQUFDO1FBQUE7TUFBQztJQUFDLENBQUM7RUFBQSxDQUFDLEVBQUMsVUFBU1QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztJQUFDLFlBQVk7O0lBQUMsU0FBU0QsQ0FBQ0EsQ0FBQ1AsQ0FBQyxFQUFDO01BQUMsSUFBSSxDQUFDZ0csS0FBSyxHQUFDaEcsQ0FBQztJQUFBO0lBQUMsU0FBU1MsQ0FBQ0EsQ0FBQSxFQUFFLENBQUM7SUFBQyxTQUFTb0IsQ0FBQ0EsQ0FBQzdCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUNELENBQUMsRUFBQ0UsQ0FBQyxFQUFDO01BQUMsSUFBSW9CLENBQUMsR0FBQzVCLENBQUMsQ0FBQzBmLFFBQVEsQ0FBQyxDQUFDO1FBQUM3ZCxDQUFDLEdBQUN0QixDQUFDLENBQUNpRSxNQUFNO01BQUMsS0FBSXpFLENBQUMsSUFBRThCLENBQUMsRUFBRSxFQUFDdkIsQ0FBQyxHQUFDdUIsQ0FBQyxFQUFDdkIsQ0FBQyxFQUFFLEVBQUNzQixDQUFDLEdBQUM1QixDQUFDLENBQUMyZixVQUFVLENBQUMvZCxDQUFDLEVBQUNyQixDQUFDLENBQUNELENBQUMsQ0FBQyxFQUFDRSxDQUFDLENBQUM7TUFBQyxPQUFPVCxDQUFDLEdBQUMsQ0FBQ0MsQ0FBQyxDQUFDNGYsU0FBUyxDQUFDLGtCQUFrQixDQUFDLEVBQUMsR0FBRyxFQUFDaGUsQ0FBQyxFQUFDLElBQUksRUFBQzVCLENBQUMsQ0FBQzZmLFlBQVksQ0FBQ3RmLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUNzSSxJQUFJLENBQUNFLFNBQVMsQ0FBQzlJLENBQUMsQ0FBQzJkLE1BQU0sQ0FBQ21DLGVBQWUsQ0FBQyxFQUFDLElBQUksQ0FBQyxHQUFDbGUsQ0FBQztJQUFBO0lBQUMsSUFBSUMsQ0FBQyxHQUFDdEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztNQUFDdUIsQ0FBQyxHQUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUFDUCxDQUFDLENBQUMyQixVQUFVLEdBQUMsQ0FBQyxDQUFDO0lBQUMsSUFBSVIsQ0FBQyxHQUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUNnQixDQUFDLEdBQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUNTLENBQUMsR0FBQ2MsQ0FBQyxDQUFDUCxDQUFDLENBQUM7TUFBQ1EsQ0FBQyxHQUFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUFDSyxDQUFDLEdBQUNMLENBQUMsQ0FBQyxFQUFFLENBQUM7TUFBQ3lCLENBQUMsR0FBQ0YsQ0FBQyxDQUFDbEIsQ0FBQyxDQUFDO0lBQUNKLENBQUMsQ0FBQ3VDLFNBQVMsR0FBQztNQUFDNGMsVUFBVSxFQUFDLFNBQUFBLENBQVM1ZixDQUFDLEVBQUNDLENBQUMsRUFBQztRQUFDLE9BQU8sSUFBSSxDQUFDK2Ysa0JBQWtCLENBQUNoZ0IsQ0FBQyxFQUFDQyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNnZ0IsYUFBYSxFQUFDLFNBQUFBLENBQVNqZ0IsQ0FBQyxFQUFDO1FBQUMsT0FBTSxDQUFDLElBQUksQ0FBQzZmLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLFdBQVcsRUFBQ2hYLElBQUksQ0FBQ0UsU0FBUyxDQUFDL0ksQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDO01BQUEsQ0FBQztNQUFDNlAsWUFBWSxFQUFDLFNBQUFBLENBQUEsRUFBVTtRQUFDLElBQUk3UCxDQUFDLEdBQUNvQixDQUFDLENBQUNvQyxpQkFBaUI7VUFBQ3ZELENBQUMsR0FBQ21CLENBQUMsQ0FBQ3NDLGdCQUFnQixDQUFDMUQsQ0FBQyxDQUFDO1FBQUMsT0FBTSxDQUFDQSxDQUFDLEVBQUNDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ2lnQixjQUFjLEVBQUMsU0FBQUEsQ0FBU2xnQixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO1FBQUMsT0FBT3dCLENBQUMsQ0FBQ3FELE9BQU8sQ0FBQ3JGLENBQUMsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDLElBQUksQ0FBQzRkLE1BQU0sQ0FBQ3VDLElBQUksQ0FBQ25nQixDQUFDLEVBQUNDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ21nQixXQUFXLENBQUN4QixRQUFRLEdBQUMsQ0FBQyxTQUFTLEVBQUM1ZSxDQUFDLEVBQUMsR0FBRyxDQUFDLEdBQUNRLENBQUMsR0FBQyxDQUFDLFlBQVksRUFBQ1IsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxJQUFFQSxDQUFDLENBQUNrZ0IsY0FBYyxHQUFDLENBQUMsQ0FBQyxFQUFDbGdCLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3FnQixnQkFBZ0IsRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxPQUFPLElBQUksQ0FBQ1AsWUFBWSxDQUFDLEVBQUUsQ0FBQztNQUFBLENBQUM7TUFBQ0Usa0JBQWtCLEVBQUMsU0FBQUEsQ0FBU2hnQixDQUFDLEVBQUNDLENBQUMsRUFBQztRQUFDLE9BQU8sSUFBSSxDQUFDcWdCLDRCQUE0QixHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsaUJBQWlCLEVBQUN0Z0IsQ0FBQyxFQUFDLEdBQUcsRUFBQzZJLElBQUksQ0FBQ0UsU0FBUyxDQUFDOUksQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDO01BQUEsQ0FBQztNQUFDcWdCLDRCQUE0QixFQUFDLENBQUMsQ0FBQztNQUFDdGYsT0FBTyxFQUFDLFNBQUFBLENBQVNoQixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDRCxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUM2ZixXQUFXLEdBQUNwZ0IsQ0FBQyxFQUFDLElBQUksQ0FBQ3VZLE9BQU8sR0FBQ3RZLENBQUMsRUFBQyxJQUFJLENBQUNvZSxZQUFZLEdBQUMsSUFBSSxDQUFDOUYsT0FBTyxDQUFDOEYsWUFBWSxFQUFDLElBQUksQ0FBQ0MsUUFBUSxHQUFDLElBQUksQ0FBQy9GLE9BQU8sQ0FBQytGLFFBQVEsRUFBQyxJQUFJLENBQUNwZCxVQUFVLEdBQUMsQ0FBQ1gsQ0FBQyxFQUFDLElBQUksQ0FBQ21ILElBQUksR0FBQyxJQUFJLENBQUMwWSxXQUFXLENBQUMxWSxJQUFJLEVBQUMsSUFBSSxDQUFDNlksT0FBTyxHQUFDLENBQUMsQ0FBQy9mLENBQUMsRUFBQyxJQUFJLENBQUNnZ0IsT0FBTyxHQUFDaGdCLENBQUMsSUFBRTtVQUFDNEMsVUFBVSxFQUFDLEVBQUU7VUFBQ29NLFFBQVEsRUFBQyxFQUFFO1VBQUNpUixZQUFZLEVBQUM7UUFBRSxDQUFDLEVBQUMsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ0MsU0FBUyxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUNDLFNBQVMsR0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDQyxTQUFTLEdBQUM7VUFBQ0MsSUFBSSxFQUFDO1FBQUUsQ0FBQyxFQUFDLElBQUksQ0FBQ0MsTUFBTSxHQUFDLEVBQUUsRUFBQyxJQUFJLENBQUNDLFlBQVksR0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDQyxXQUFXLEdBQUMsRUFBRSxFQUFDLElBQUksQ0FBQ2pjLFdBQVcsR0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDa2MsZUFBZSxDQUFDbmhCLENBQUMsRUFBQ0MsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDOE8sU0FBUyxHQUFDLElBQUksQ0FBQ0EsU0FBUyxJQUFFL08sQ0FBQyxDQUFDK08sU0FBUyxJQUFFL08sQ0FBQyxDQUFDZ1EsYUFBYSxJQUFFLElBQUksQ0FBQ3VJLE9BQU8sQ0FBQ3VGLE1BQU0sRUFBQyxJQUFJLENBQUNoUCxjQUFjLEdBQUMsSUFBSSxDQUFDQSxjQUFjLElBQUU5TyxDQUFDLENBQUM4TyxjQUFjO1FBQUMsSUFBSXJPLENBQUMsR0FBQ1QsQ0FBQyxDQUFDZ2UsT0FBTztVQUFDbmMsQ0FBQyxHQUFDLEtBQUssQ0FBQztVQUFDQyxDQUFDLEdBQUMsS0FBSyxDQUFDO1VBQUNDLENBQUMsR0FBQyxLQUFLLENBQUM7VUFBQ1gsQ0FBQyxHQUFDLEtBQUssQ0FBQztRQUFDLEtBQUlXLENBQUMsR0FBQyxDQUFDLEVBQUNYLENBQUMsR0FBQ1gsQ0FBQyxDQUFDZ0UsTUFBTSxFQUFDMUMsQ0FBQyxHQUFDWCxDQUFDLEVBQUNXLENBQUMsRUFBRSxFQUFDRixDQUFDLEdBQUNwQixDQUFDLENBQUNzQixDQUFDLENBQUMsRUFBQyxJQUFJLENBQUM2YixNQUFNLENBQUNtQyxlQUFlLEdBQUNsZSxDQUFDLENBQUN5RCxHQUFHLEVBQUN4RCxDQUFDLEdBQUNBLENBQUMsSUFBRUQsQ0FBQyxDQUFDeUQsR0FBRyxFQUFDLElBQUksQ0FBQ3pELENBQUMsQ0FBQ29jLE1BQU0sQ0FBQyxDQUFDNVQsS0FBSyxDQUFDLElBQUksRUFBQ3hJLENBQUMsQ0FBQ2lMLElBQUksQ0FBQztRQUFDLElBQUcsSUFBSSxDQUFDOFEsTUFBTSxDQUFDbUMsZUFBZSxHQUFDamUsQ0FBQyxFQUFDLElBQUksQ0FBQ3NmLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBQyxJQUFJLENBQUNULFNBQVMsSUFBRSxJQUFJLENBQUNPLFdBQVcsQ0FBQ3pjLE1BQU0sSUFBRSxJQUFJLENBQUN3YyxZQUFZLENBQUN4YyxNQUFNLEVBQUMsTUFBTSxJQUFJeEQsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLDhDQUE4QyxDQUFDO1FBQUMsSUFBSSxDQUFDbUMsVUFBVSxDQUFDNEIsT0FBTyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUM1QixVQUFVLEdBQUMsS0FBSyxDQUFDLElBQUUsSUFBSSxDQUFDNE0sYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzVNLFVBQVUsQ0FBQ2llLE9BQU8sQ0FBQyxDQUFDLHlDQUF5QyxFQUFDLElBQUksQ0FBQ0Msb0NBQW9DLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDbGUsVUFBVSxDQUFDK0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDNUgsQ0FBQyxHQUFDLElBQUksQ0FBQzZDLFVBQVUsR0FBQzhILFFBQVEsQ0FBQ2IsS0FBSyxDQUFDLElBQUksRUFBQyxDQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxJQUFJLENBQUNqSCxVQUFVLENBQUNtZSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUNuZSxVQUFVLENBQUNpZSxPQUFPLENBQUMsdUVBQXVFLENBQUMsRUFBQyxJQUFJLENBQUNqZSxVQUFVLENBQUMrRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsSUFBSSxDQUFDL0UsVUFBVSxHQUFDLElBQUksQ0FBQ0EsVUFBVSxDQUFDbWUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsSUFBSS9mLENBQUMsR0FBQyxJQUFJLENBQUNnZ0IscUJBQXFCLENBQUNqaEIsQ0FBQyxDQUFDO1FBQUMsSUFBRyxJQUFJLENBQUNnZ0IsT0FBTyxFQUFDLE9BQU8vZSxDQUFDO1FBQUMsSUFBSVEsQ0FBQyxHQUFDO1VBQUNvTixRQUFRLEVBQUMsSUFBSSxDQUFDUyxZQUFZLENBQUMsQ0FBQztVQUFDbkIsSUFBSSxFQUFDbE47UUFBQyxDQUFDO1FBQUMsSUFBSSxDQUFDNEIsVUFBVSxLQUFHcEIsQ0FBQyxDQUFDa04sTUFBTSxHQUFDLElBQUksQ0FBQzlMLFVBQVUsRUFBQ3BCLENBQUMsQ0FBQ2dPLGFBQWEsR0FBQyxDQUFDLENBQUMsQ0FBQztRQUFDLElBQUluUCxDQUFDLEdBQUMsSUFBSSxDQUFDMmYsT0FBTztVQUFDdmUsQ0FBQyxHQUFDcEIsQ0FBQyxDQUFDMk8sUUFBUTtVQUFDdE4sQ0FBQyxHQUFDckIsQ0FBQyxDQUFDdUMsVUFBVTtRQUFDLEtBQUlyQixDQUFDLEdBQUMsQ0FBQyxFQUFDWCxDQUFDLEdBQUNhLENBQUMsQ0FBQ3dDLE1BQU0sRUFBQzFDLENBQUMsR0FBQ1gsQ0FBQyxFQUFDVyxDQUFDLEVBQUUsRUFBQ0UsQ0FBQyxDQUFDRixDQUFDLENBQUMsS0FBR0MsQ0FBQyxDQUFDRCxDQUFDLENBQUMsR0FBQ0UsQ0FBQyxDQUFDRixDQUFDLENBQUMsRUFBQ0csQ0FBQyxDQUFDSCxDQUFDLENBQUMsS0FBR0MsQ0FBQyxDQUFDRCxDQUFDLEdBQUMsSUFBSSxDQUFDLEdBQUNHLENBQUMsQ0FBQ0gsQ0FBQyxDQUFDLEVBQUNDLENBQUMsQ0FBQ2dPLGFBQWEsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsT0FBTyxJQUFJLENBQUNvUSxXQUFXLENBQUNyUSxVQUFVLEtBQUcvTixDQUFDLENBQUMrTixVQUFVLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUN3SSxPQUFPLENBQUM1USxJQUFJLEtBQUczRixDQUFDLENBQUM2TSxPQUFPLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNFLFNBQVMsS0FBRy9NLENBQUMsQ0FBQytNLFNBQVMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ0QsY0FBYyxLQUFHOU0sQ0FBQyxDQUFDOE0sY0FBYyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDeUosT0FBTyxDQUFDdUYsTUFBTSxLQUFHOWIsQ0FBQyxDQUFDOGIsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUN2ZCxDQUFDLEdBQUN5QixDQUFDLENBQUN1TSxlQUFlLEdBQUMsSUFBSSxDQUFDZ0ssT0FBTyxJQUFFdlcsQ0FBQyxDQUFDb04sUUFBUSxHQUFDdkcsSUFBSSxDQUFDRSxTQUFTLENBQUMvRyxDQUFDLENBQUNvTixRQUFRLENBQUMsRUFBQyxJQUFJLENBQUN3TyxNQUFNLENBQUNtQyxlQUFlLEdBQUM7VUFBQ3hhLEtBQUssRUFBQztZQUFDQyxJQUFJLEVBQUMsQ0FBQztZQUFDRSxNQUFNLEVBQUM7VUFBQztRQUFDLENBQUMsRUFBQzFELENBQUMsR0FBQyxJQUFJLENBQUN5ZixhQUFhLENBQUN6ZixDQUFDLENBQUMsRUFBQy9CLENBQUMsQ0FBQ29SLE9BQU8sSUFBRXJQLENBQUMsR0FBQ0EsQ0FBQyxDQUFDMGYscUJBQXFCLENBQUM7VUFBQ0MsSUFBSSxFQUFDMWhCLENBQUMsQ0FBQzJoQjtRQUFRLENBQUMsQ0FBQyxFQUFDNWYsQ0FBQyxDQUFDNmYsR0FBRyxHQUFDN2YsQ0FBQyxDQUFDNmYsR0FBRyxJQUFFN2YsQ0FBQyxDQUFDNmYsR0FBRyxDQUFDOWQsUUFBUSxDQUFDLENBQUMsSUFBRS9CLENBQUMsR0FBQ0EsQ0FBQyxDQUFDK0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDL0IsQ0FBQztNQUFBLENBQUM7TUFBQzBlLFFBQVEsRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxJQUFJLENBQUNvQixXQUFXLEdBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2xFLE1BQU0sR0FBQyxJQUFJM2IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQ3NXLE9BQU8sQ0FBQ2xILE9BQU8sQ0FBQyxFQUFDLElBQUksQ0FBQ2pPLFVBQVUsR0FBQyxJQUFJbkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQ3NXLE9BQU8sQ0FBQ2xILE9BQU8sQ0FBQztNQUFBLENBQUM7TUFBQ21RLHFCQUFxQixFQUFDLFNBQUFBLENBQVN4aEIsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUk7VUFBQ08sQ0FBQyxHQUFDLEVBQUU7VUFBQ0QsQ0FBQyxHQUFDLElBQUksQ0FBQ3FnQixTQUFTLENBQUNwVixNQUFNLENBQUMsSUFBSSxDQUFDc1YsU0FBUyxDQUFDQyxJQUFJLENBQUM7UUFBQ3hnQixDQUFDLENBQUNrRSxNQUFNLEdBQUMsQ0FBQyxLQUFHakUsQ0FBQyxJQUFFLElBQUksR0FBQ0QsQ0FBQyxDQUFDa08sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQUMsSUFBSWhPLENBQUMsR0FBQyxDQUFDO1FBQUNxQixDQUFDLENBQUMsSUFBSSxDQUFDK2UsT0FBTyxDQUFDLENBQUMxWixPQUFPLENBQUMsVUFBU25ILENBQUMsRUFBQztVQUFDLElBQUlPLENBQUMsR0FBQ04sQ0FBQyxDQUFDNGdCLE9BQU8sQ0FBQzdnQixDQUFDLENBQUM7VUFBQ08sQ0FBQyxDQUFDMmQsUUFBUSxJQUFFM2QsQ0FBQyxDQUFDd2hCLGNBQWMsR0FBQyxDQUFDLEtBQUd2aEIsQ0FBQyxJQUFFLFNBQVMsR0FBRSxFQUFFQyxDQUFDLEdBQUMsR0FBRyxHQUFDVCxDQUFDLEVBQUNPLENBQUMsQ0FBQzJkLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBQyxPQUFPLEdBQUN6ZCxDQUFDLENBQUM7UUFBQSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUM2Ziw0QkFBNEIsS0FBRzlmLENBQUMsSUFBRSxJQUFJLEdBQUMsSUFBSSxDQUFDOGdCLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztRQUFDLElBQUl6ZixDQUFDLEdBQUMsQ0FBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsTUFBTSxDQUFDO1FBQUMsQ0FBQyxJQUFJLENBQUNpTixjQUFjLElBQUUsSUFBSSxDQUFDQyxTQUFTLEtBQUdsTixDQUFDLENBQUNzRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUMsSUFBSSxDQUFDNEcsU0FBUyxJQUFFbE4sQ0FBQyxDQUFDc0csSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUFDLElBQUlwRyxDQUFDLEdBQUMsSUFBSSxDQUFDaWdCLFdBQVcsQ0FBQ3hoQixDQUFDLENBQUM7UUFBQyxPQUFPUixDQUFDLElBQUU2QixDQUFDLENBQUNzRyxJQUFJLENBQUNwRyxDQUFDLENBQUMsRUFBQ21KLFFBQVEsQ0FBQ2IsS0FBSyxDQUFDLElBQUksRUFBQ3hJLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQytiLE1BQU0sQ0FBQ3VDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBQ3RlLENBQUMsQ0FBQzRNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxTQUFTLEVBQUMxTSxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNpZ0IsV0FBVyxFQUFDLFNBQUFBLENBQVNoaUIsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUksQ0FBQ21nQixXQUFXLENBQUN4QixRQUFRO1VBQUNwZSxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUN5aEIsV0FBVztVQUFDMWhCLENBQUMsR0FBQyxLQUFLLENBQUM7VUFBQ0UsQ0FBQyxHQUFDLEtBQUssQ0FBQztVQUFDb0IsQ0FBQyxHQUFDLEtBQUssQ0FBQztVQUFDQyxDQUFDLEdBQUMsS0FBSyxDQUFDO1FBQUMsT0FBTyxJQUFJLENBQUM4YixNQUFNLENBQUMxVyxJQUFJLENBQUMsVUFBU2xILENBQUMsRUFBQztVQUFDQSxDQUFDLENBQUNrZ0IsY0FBYyxJQUFFcmUsQ0FBQyxHQUFDN0IsQ0FBQyxDQUFDcWhCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBQ3hmLENBQUMsR0FBQzdCLENBQUMsRUFBQzhCLENBQUMsR0FBQzlCLENBQUMsS0FBRzZCLENBQUMsS0FBR3BCLENBQUMsR0FBQ29CLENBQUMsQ0FBQ3dmLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBQzlnQixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUN1QixDQUFDLENBQUNvZ0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDcmdCLENBQUMsR0FBQ0MsQ0FBQyxHQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUNyQixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNSLENBQUMsS0FBR08sQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQSxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDcUIsQ0FBQyxJQUFFQSxDQUFDLENBQUN3ZixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUN2ZixDQUFDLENBQUNvZ0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFFemhCLENBQUMsSUFBRSxJQUFJLENBQUNtZCxNQUFNLENBQUN6VixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUVuSSxDQUFDLElBQUUsYUFBYSxJQUFFTyxDQUFDLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQzhmLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFDeGUsQ0FBQyxJQUFFQSxDQUFDLENBQUN3ZixPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBQ3ZmLENBQUMsQ0FBQ29nQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUUsSUFBSSxDQUFDdEUsTUFBTSxDQUFDelYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBQ25JLENBQUMsSUFBRSxJQUFJLENBQUM0ZCxNQUFNLENBQUN5RCxPQUFPLENBQUMsTUFBTSxHQUFDcmhCLENBQUMsQ0FBQzZhLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBRXRhLENBQUMsR0FBQyxFQUFFLEdBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNxZCxNQUFNLENBQUMyRCxLQUFLLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ0Qsb0NBQW9DLEVBQUMsU0FBQUEsQ0FBQSxFQUFVO1FBQUMsT0FBTSw0UEFBNFAsQ0FBQ2EsSUFBSSxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNDLFVBQVUsRUFBQyxTQUFBQSxDQUFTcGlCLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQyxJQUFJLENBQUM0ZixTQUFTLENBQUMsb0NBQW9DLENBQUM7VUFBQ3JmLENBQUMsR0FBQyxDQUFDLElBQUksQ0FBQzZoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUNDLGVBQWUsQ0FBQ3RpQixDQUFDLEVBQUMsQ0FBQyxFQUFDUSxDQUFDLENBQUM7UUFBQyxJQUFJRCxDQUFDLEdBQUMsSUFBSSxDQUFDb2YsUUFBUSxDQUFDLENBQUM7UUFBQ25mLENBQUMsQ0FBQ3NjLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDdmMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDNEgsSUFBSSxDQUFDLElBQUksQ0FBQ3lWLE1BQU0sQ0FBQzJFLFlBQVksQ0FBQ3RpQixDQUFDLEVBQUMsTUFBTSxFQUFDTyxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ2dpQixtQkFBbUIsRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxJQUFJeGlCLENBQUMsR0FBQyxJQUFJLENBQUM2ZixTQUFTLENBQUMsb0NBQW9DLENBQUM7VUFBQzVmLENBQUMsR0FBQyxDQUFDLElBQUksQ0FBQ29pQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFJLENBQUNDLGVBQWUsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDcmlCLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3dpQixXQUFXLENBQUMsQ0FBQztRQUFDLElBQUlqaUIsQ0FBQyxHQUFDLElBQUksQ0FBQ2tpQixRQUFRLENBQUMsQ0FBQztRQUFDemlCLENBQUMsQ0FBQzZjLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDdGMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDNGdCLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUN1QixVQUFVLEVBQUMsTUFBTSxFQUFDbmlCLENBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDb2QsTUFBTSxDQUFDMkUsWUFBWSxDQUFDdmlCLENBQUMsRUFBQyxNQUFNLEVBQUNDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDMmlCLGFBQWEsRUFBQyxTQUFBQSxDQUFTNWlCLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQzZpQixjQUFjLEdBQUM3aUIsQ0FBQyxHQUFDLElBQUksQ0FBQzZpQixjQUFjLEdBQUM3aUIsQ0FBQyxHQUFDLElBQUksQ0FBQzhpQixlQUFlLEdBQUMsSUFBSSxDQUFDbEYsTUFBTSxDQUFDbUMsZUFBZSxFQUFDLElBQUksQ0FBQzhDLGNBQWMsR0FBQzdpQixDQUFDO01BQUEsQ0FBQztNQUFDK2lCLE1BQU0sRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxJQUFHLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxVQUFTampCLENBQUMsRUFBQztVQUFDLE9BQU0sQ0FBQyxhQUFhLEVBQUNBLENBQUMsRUFBQyxPQUFPLENBQUM7UUFBQSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNvaEIsVUFBVSxDQUFDLElBQUksQ0FBQ2xCLGNBQWMsQ0FBQyxJQUFJLENBQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUk7VUFBQyxJQUFJM2YsQ0FBQyxHQUFDLElBQUksQ0FBQzJmLFFBQVEsQ0FBQyxDQUFDO1VBQUMsSUFBSSxDQUFDeUIsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFDcGhCLENBQUMsRUFBQyxjQUFjLEVBQUMsSUFBSSxDQUFDa2dCLGNBQWMsQ0FBQ2xnQixDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ29nQixXQUFXLENBQUN4QixRQUFRLElBQUUsSUFBSSxDQUFDd0MsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQ2xCLGNBQWMsQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUFBO01BQUMsQ0FBQztNQUFDZ0QsYUFBYSxFQUFDLFNBQUFBLENBQUEsRUFBVTtRQUFDLElBQUksQ0FBQzlCLFVBQVUsQ0FBQyxJQUFJLENBQUNsQixjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUNMLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUNGLFFBQVEsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3dELFVBQVUsRUFBQyxTQUFBQSxDQUFTbmpCLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQzhoQixXQUFXLEdBQUM5aEIsQ0FBQztNQUFBLENBQUM7TUFBQ29qQixXQUFXLEVBQUMsU0FBQUEsQ0FBQSxFQUFVO1FBQUMsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNoQixXQUFXLENBQUMsSUFBSSxDQUFDUCxXQUFXLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3dCLGVBQWUsRUFBQyxTQUFBQSxDQUFTdGpCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUNELENBQUMsRUFBQztRQUFDLElBQUlFLENBQUMsR0FBQyxDQUFDO1FBQUNGLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQ2dZLE9BQU8sQ0FBQ3VGLE1BQU0sSUFBRSxJQUFJLENBQUNnRSxXQUFXLEdBQUMsSUFBSSxDQUFDc0IsV0FBVyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUNqYixJQUFJLENBQUMsSUFBSSxDQUFDOFgsYUFBYSxDQUFDamdCLENBQUMsQ0FBQ1MsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDOGlCLFdBQVcsQ0FBQyxTQUFTLEVBQUN2akIsQ0FBQyxFQUFDUyxDQUFDLEVBQUNSLENBQUMsRUFBQ08sQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDZ2pCLGdCQUFnQixFQUFDLFNBQUFBLENBQVN4akIsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUM2TyxjQUFjLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDM0csSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFDbkksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDdWpCLFdBQVcsQ0FBQyxTQUFTLEVBQUN0akIsQ0FBQyxFQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3dqQixVQUFVLEVBQUMsU0FBQUEsQ0FBU3pqQixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO1FBQUNSLENBQUMsR0FBQyxJQUFJLENBQUNxakIsZ0JBQWdCLENBQUMsdUJBQXVCLEdBQUNyakIsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxHQUFDLElBQUksQ0FBQ3FqQixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLENBQUNFLFdBQVcsQ0FBQyxNQUFNLEVBQUN0akIsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQ08sQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDK2lCLFdBQVcsRUFBQyxTQUFBQSxDQUFTdmpCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUNELENBQUMsRUFBQ0UsQ0FBQyxFQUFDO1FBQUMsSUFBSXFCLENBQUMsR0FBQyxJQUFJO1FBQUMsSUFBRyxJQUFJLENBQUN5VyxPQUFPLENBQUNsSixNQUFNLElBQUUsSUFBSSxDQUFDa0osT0FBTyxDQUFDbUwsYUFBYSxFQUFDLE9BQU8sS0FBSyxJQUFJLENBQUN2YixJQUFJLENBQUN0RyxDQUFDLENBQUMsSUFBSSxDQUFDMFcsT0FBTyxDQUFDbEosTUFBTSxJQUFFNU8sQ0FBQyxFQUFDLElBQUksRUFBQ1IsQ0FBQyxFQUFDTyxDQUFDLEVBQUNSLENBQUMsQ0FBQyxDQUFDO1FBQUMsS0FBSSxJQUFJK0IsQ0FBQyxHQUFDOUIsQ0FBQyxDQUFDd0UsTUFBTSxFQUFDakUsQ0FBQyxHQUFDdUIsQ0FBQyxFQUFDdkIsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDeWlCLFlBQVksQ0FBQyxVQUFTeGlCLENBQUMsRUFBQztVQUFDLElBQUlvQixDQUFDLEdBQUNDLENBQUMsQ0FBQzhkLFVBQVUsQ0FBQ25mLENBQUMsRUFBQ1IsQ0FBQyxDQUFDTyxDQUFDLENBQUMsRUFBQ1IsQ0FBQyxDQUFDO1VBQUMsT0FBT08sQ0FBQyxHQUFDLENBQUMsTUFBTSxFQUFDc0IsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxhQUFhLEVBQUNBLENBQUMsRUFBQyxLQUFLLEVBQUNwQixDQUFDLENBQUM7UUFBQSxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNrakIscUJBQXFCLEVBQUMsU0FBQUEsQ0FBQSxFQUFVO1FBQUMsSUFBSSxDQUFDeGIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDMFgsU0FBUyxDQUFDLGtCQUFrQixDQUFDLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQ0YsUUFBUSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDMEMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDdUIsZUFBZSxFQUFDLFNBQUFBLENBQVM1akIsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUNtakIsV0FBVyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNTLFVBQVUsQ0FBQzVqQixDQUFDLENBQUMsRUFBQyxlQUFlLEtBQUdBLENBQUMsS0FBRyxRQUFRLElBQUUsT0FBT0QsQ0FBQyxHQUFDLElBQUksQ0FBQzZqQixVQUFVLENBQUM3akIsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDcWpCLGdCQUFnQixDQUFDcmpCLENBQUMsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDOGpCLFNBQVMsRUFBQyxTQUFBQSxDQUFTOWpCLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQ3NlLFFBQVEsSUFBRSxJQUFJLENBQUNuVyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxDQUFDa1csWUFBWSxLQUFHLElBQUksQ0FBQ2xXLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLENBQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2tiLGdCQUFnQixDQUFDcmpCLENBQUMsR0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDO01BQUEsQ0FBQztNQUFDK2pCLFFBQVEsRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxJQUFJLENBQUNyWCxJQUFJLElBQUUsSUFBSSxDQUFDc1UsTUFBTSxDQUFDN1ksSUFBSSxDQUFDLElBQUksQ0FBQ3VFLElBQUksQ0FBQyxFQUFDLElBQUksQ0FBQ0EsSUFBSSxHQUFDO1VBQUNSLE1BQU0sRUFBQyxDQUFDLENBQUM7VUFBQzhYLEtBQUssRUFBQyxFQUFFO1VBQUNDLFFBQVEsRUFBQyxFQUFFO1VBQUN4YyxHQUFHLEVBQUM7UUFBRSxDQUFDO01BQUEsQ0FBQztNQUFDeWMsT0FBTyxFQUFDLFNBQUFBLENBQUEsRUFBVTtRQUFDLElBQUlsa0IsQ0FBQyxHQUFDLElBQUksQ0FBQzBNLElBQUk7UUFBQyxJQUFJLENBQUNBLElBQUksR0FBQyxJQUFJLENBQUNzVSxNQUFNLENBQUN2RyxHQUFHLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzZELFFBQVEsSUFBRSxJQUFJLENBQUNuVyxJQUFJLENBQUMsSUFBSSxDQUFDc1osYUFBYSxDQUFDemhCLENBQUMsQ0FBQ3lILEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDNFcsWUFBWSxLQUFHLElBQUksQ0FBQ2xXLElBQUksQ0FBQyxJQUFJLENBQUNzWixhQUFhLENBQUN6aEIsQ0FBQyxDQUFDaWtCLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDOWIsSUFBSSxDQUFDLElBQUksQ0FBQ3NaLGFBQWEsQ0FBQ3poQixDQUFDLENBQUNna0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzdiLElBQUksQ0FBQyxJQUFJLENBQUNzWixhQUFhLENBQUN6aEIsQ0FBQyxDQUFDa00sTUFBTSxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUMyWCxVQUFVLEVBQUMsU0FBQUEsQ0FBUzdqQixDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUNxakIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDdkQsWUFBWSxDQUFDOWYsQ0FBQyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNta0IsV0FBVyxFQUFDLFNBQUFBLENBQVNua0IsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDcWpCLGdCQUFnQixDQUFDcmpCLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ29rQixXQUFXLEVBQUMsU0FBQUEsQ0FBU3BrQixDQUFDLEVBQUM7UUFBQyxJQUFJLElBQUVBLENBQUMsR0FBQyxJQUFJLENBQUNxakIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDZ0IsaUJBQWlCLENBQUNya0IsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUNxakIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO01BQUEsQ0FBQztNQUFDbGYsaUJBQWlCLEVBQUMsU0FBQUEsQ0FBU25FLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBSU8sQ0FBQyxHQUFDLElBQUksQ0FBQ29mLFVBQVUsQ0FBQyxZQUFZLEVBQUMzZixDQUFDLEVBQUMsV0FBVyxDQUFDO1VBQUNNLENBQUMsR0FBQyxJQUFJLENBQUMraEIsZUFBZSxDQUFDcmlCLENBQUMsRUFBQ0QsQ0FBQyxDQUFDO1FBQUMsSUFBSSxDQUFDb0QsVUFBVSxDQUFDK0UsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQy9FLFVBQVUsQ0FBQ21mLFlBQVksQ0FBQy9oQixDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUNELENBQUMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUMrakIsWUFBWSxFQUFDLFNBQUFBLENBQVN0a0IsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztRQUFDLElBQUlELENBQUMsR0FBQyxJQUFJLENBQUNvZixRQUFRLENBQUMsQ0FBQztVQUFDbGYsQ0FBQyxHQUFDLElBQUksQ0FBQzhqQixXQUFXLENBQUN2a0IsQ0FBQyxFQUFDQyxDQUFDLENBQUM7VUFBQzRCLENBQUMsR0FBQyxFQUFFO1FBQUNyQixDQUFDLElBQUVxQixDQUFDLENBQUNzRyxJQUFJLENBQUMxSCxDQUFDLENBQUNpSCxJQUFJLENBQUMsRUFBQzdGLENBQUMsQ0FBQ3NHLElBQUksQ0FBQzVILENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2dZLE9BQU8sQ0FBQ2xKLE1BQU0sSUFBRXhOLENBQUMsQ0FBQ3NHLElBQUksQ0FBQyxJQUFJLENBQUMwWCxTQUFTLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUFDLElBQUkvZCxDQUFDLEdBQUMsQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDMGlCLGdCQUFnQixDQUFDM2lCLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQyxHQUFHLENBQUM7VUFBQ0UsQ0FBQyxHQUFDLElBQUksQ0FBQzZiLE1BQU0sQ0FBQzJFLFlBQVksQ0FBQ3pnQixDQUFDLEVBQUMsTUFBTSxFQUFDckIsQ0FBQyxDQUFDZ2tCLFVBQVUsQ0FBQztRQUFDLElBQUksQ0FBQ3RjLElBQUksQ0FBQ3BHLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3lpQixnQkFBZ0IsRUFBQyxTQUFBQSxDQUFTeGtCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBSU8sQ0FBQyxHQUFDLEVBQUU7UUFBQ0EsQ0FBQyxDQUFDMkgsSUFBSSxDQUFDbkksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsS0FBSSxJQUFJTyxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNQLENBQUMsQ0FBQ3lFLE1BQU0sRUFBQ2xFLENBQUMsRUFBRSxFQUFDQyxDQUFDLENBQUMySCxJQUFJLENBQUNsSSxDQUFDLEVBQUNELENBQUMsQ0FBQ08sQ0FBQyxDQUFDLENBQUM7UUFBQyxPQUFPQyxDQUFDO01BQUEsQ0FBQztNQUFDa2tCLGlCQUFpQixFQUFDLFNBQUFBLENBQVMxa0IsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxJQUFJTyxDQUFDLEdBQUMsSUFBSSxDQUFDK2pCLFdBQVcsQ0FBQ3ZrQixDQUFDLEVBQUNDLENBQUMsQ0FBQztRQUFDLElBQUksQ0FBQ2tJLElBQUksQ0FBQyxJQUFJLENBQUN5VixNQUFNLENBQUMyRSxZQUFZLENBQUMvaEIsQ0FBQyxDQUFDa0gsSUFBSSxFQUFDLE1BQU0sRUFBQ2xILENBQUMsQ0FBQ2lrQixVQUFVLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ0UsZUFBZSxFQUFDLFNBQUFBLENBQVMza0IsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUMya0IsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUFDLElBQUlwa0IsQ0FBQyxHQUFDLElBQUksQ0FBQ21mLFFBQVEsQ0FBQyxDQUFDO1FBQUMsSUFBSSxDQUFDbUUsU0FBUyxDQUFDLENBQUM7UUFBQyxJQUFJdmpCLENBQUMsR0FBQyxJQUFJLENBQUNna0IsV0FBVyxDQUFDLENBQUMsRUFBQ3ZrQixDQUFDLEVBQUNDLENBQUMsQ0FBQztVQUFDUSxDQUFDLEdBQUMsSUFBSSxDQUFDa2lCLFVBQVUsR0FBQyxJQUFJLENBQUMvQyxVQUFVLENBQUMsU0FBUyxFQUFDNWYsQ0FBQyxFQUFDLFFBQVEsQ0FBQztVQUFDNkIsQ0FBQyxHQUFDLENBQUMsR0FBRyxFQUFDLFlBQVksRUFBQ3BCLENBQUMsRUFBQyxNQUFNLEVBQUNELENBQUMsRUFBQyxHQUFHLENBQUM7UUFBQyxJQUFJLENBQUMrWCxPQUFPLENBQUNsSixNQUFNLEtBQUd4TixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsWUFBWSxFQUFDQSxDQUFDLENBQUNzRyxJQUFJLENBQUMsc0JBQXNCLEVBQUMsSUFBSSxDQUFDMFgsU0FBUyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzFYLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBQ3RHLENBQUMsRUFBQ3RCLENBQUMsQ0FBQ3NrQixVQUFVLEdBQUMsQ0FBQyxLQUFLLEVBQUN0a0IsQ0FBQyxDQUFDc2tCLFVBQVUsQ0FBQyxHQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMscUJBQXFCLEVBQUMsSUFBSSxDQUFDaEYsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBQyxJQUFJLENBQUNqQyxNQUFNLENBQUMyRSxZQUFZLENBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQ2hpQixDQUFDLENBQUNra0IsVUFBVSxDQUFDLEVBQUMsYUFBYSxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNuVyxhQUFhLEVBQUMsU0FBQUEsQ0FBU3RPLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUM7UUFBQyxJQUFJRCxDQUFDLEdBQUMsRUFBRTtVQUFDRSxDQUFDLEdBQUMsSUFBSSxDQUFDcWtCLFdBQVcsQ0FBQzdrQixDQUFDLEVBQUMsQ0FBQyxFQUFDTSxDQUFDLENBQUM7UUFBQ1AsQ0FBQyxLQUFHQyxDQUFDLEdBQUMsSUFBSSxDQUFDMGYsUUFBUSxDQUFDLENBQUMsRUFBQyxPQUFPbGYsQ0FBQyxDQUFDaUgsSUFBSSxDQUFDLEVBQUNsSCxDQUFDLEtBQUdDLENBQUMsQ0FBQytOLE1BQU0sR0FBQzNGLElBQUksQ0FBQ0UsU0FBUyxDQUFDdkksQ0FBQyxDQUFDLENBQUMsRUFBQ0MsQ0FBQyxDQUFDeUMsT0FBTyxHQUFDLFNBQVMsRUFBQ3pDLENBQUMsQ0FBQzBDLFFBQVEsR0FBQyxVQUFVLEVBQUMxQyxDQUFDLENBQUMyQyxVQUFVLEdBQUMsc0JBQXNCLEVBQUNwRCxDQUFDLEdBQUNPLENBQUMsQ0FBQ3ljLE9BQU8sQ0FBQy9jLENBQUMsQ0FBQyxHQUFDTSxDQUFDLENBQUN5YyxPQUFPLENBQUMsSUFBSSxDQUFDNEMsVUFBVSxDQUFDLFVBQVUsRUFBQzNmLENBQUMsRUFBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3NZLE9BQU8sQ0FBQ3VGLE1BQU0sS0FBR3JkLENBQUMsQ0FBQ3VPLE1BQU0sR0FBQyxRQUFRLENBQUMsRUFBQ3ZPLENBQUMsR0FBQyxJQUFJLENBQUNnaEIsYUFBYSxDQUFDaGhCLENBQUMsQ0FBQyxFQUFDRixDQUFDLENBQUM0SCxJQUFJLENBQUMxSCxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMwSCxJQUFJLENBQUMsSUFBSSxDQUFDeVYsTUFBTSxDQUFDMkUsWUFBWSxDQUFDLHlCQUF5QixFQUFDLEVBQUUsRUFBQ2hpQixDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3drQixZQUFZLEVBQUMsU0FBQUEsQ0FBUy9rQixDQUFDLEVBQUM7UUFBQyxJQUFJQyxDQUFDLEdBQUMsSUFBSSxDQUFDMGYsUUFBUSxDQUFDLENBQUM7VUFBQ25mLENBQUMsR0FBQyxLQUFLLENBQUM7VUFBQ0QsQ0FBQyxHQUFDLEtBQUssQ0FBQztVQUFDRSxDQUFDLEdBQUMsS0FBSyxDQUFDO1FBQUMsSUFBSSxDQUFDNmQsUUFBUSxLQUFHN2QsQ0FBQyxHQUFDLElBQUksQ0FBQ2tmLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUN0QixZQUFZLEtBQUc5ZCxDQUFDLEdBQUMsSUFBSSxDQUFDb2YsUUFBUSxDQUFDLENBQUMsRUFBQ25mLENBQUMsR0FBQyxJQUFJLENBQUNtZixRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQUMsSUFBSTlkLENBQUMsR0FBQyxJQUFJLENBQUM2SyxJQUFJO1FBQUNsTSxDQUFDLEtBQUdxQixDQUFDLENBQUNvaUIsUUFBUSxDQUFDamtCLENBQUMsQ0FBQyxHQUFDUSxDQUFDLENBQUMsRUFBQ0QsQ0FBQyxLQUFHc0IsQ0FBQyxDQUFDbWlCLEtBQUssQ0FBQ2hrQixDQUFDLENBQUMsR0FBQ08sQ0FBQyxDQUFDLEVBQUNFLENBQUMsS0FBR29CLENBQUMsQ0FBQzRGLEdBQUcsQ0FBQ3pILENBQUMsQ0FBQyxHQUFDUyxDQUFDLENBQUMsRUFBQ29CLENBQUMsQ0FBQ3FLLE1BQU0sQ0FBQ2xNLENBQUMsQ0FBQyxHQUFDQyxDQUFDO01BQUEsQ0FBQztNQUFDK2tCLE1BQU0sRUFBQyxTQUFBQSxDQUFTaGxCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUM7UUFBQyxZQUFZLEtBQUdSLENBQUMsR0FBQyxJQUFJLENBQUNxakIsZ0JBQWdCLENBQUMsY0FBYyxHQUFDcGpCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLEdBQUNBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLElBQUVPLENBQUMsR0FBQyxLQUFLLEdBQUNxSSxJQUFJLENBQUNFLFNBQVMsQ0FBQyxHQUFHLEdBQUN2SSxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLGdCQUFnQixLQUFHUixDQUFDLEdBQUMsSUFBSSxDQUFDNmpCLFVBQVUsQ0FBQzVqQixDQUFDLENBQUMsR0FBQyxlQUFlLEtBQUdELENBQUMsR0FBQyxJQUFJLENBQUNxakIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUMsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7TUFBQSxDQUFDO01BQUNqVSxRQUFRLEVBQUMzTyxDQUFDO01BQUMwZ0IsZUFBZSxFQUFDLFNBQUFBLENBQVNuaEIsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7UUFBQyxLQUFJLElBQUlPLENBQUMsR0FBQ1IsQ0FBQyxDQUFDa2UsUUFBUSxFQUFDM2QsQ0FBQyxHQUFDLEtBQUssQ0FBQyxFQUFDRSxDQUFDLEdBQUMsS0FBSyxDQUFDLEVBQUNvQixDQUFDLEdBQUMsQ0FBQyxFQUFDQyxDQUFDLEdBQUN0QixDQUFDLENBQUNpRSxNQUFNLEVBQUM1QyxDQUFDLEdBQUNDLENBQUMsRUFBQ0QsQ0FBQyxFQUFFLEVBQUM7VUFBQ3RCLENBQUMsR0FBQ0MsQ0FBQyxDQUFDcUIsQ0FBQyxDQUFDLEVBQUNwQixDQUFDLEdBQUMsSUFBSSxJQUFJLENBQUMyTyxRQUFRLENBQUQsQ0FBQztVQUFDLElBQUlyTixDQUFDLEdBQUMsSUFBSSxDQUFDa2pCLG9CQUFvQixDQUFDMWtCLENBQUMsQ0FBQztVQUFDLElBQUcsSUFBSSxJQUFFd0IsQ0FBQyxFQUFDO1lBQUMsSUFBSSxDQUFDeWUsT0FBTyxDQUFDaFIsUUFBUSxDQUFDckgsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUFDLElBQUkvRyxDQUFDLEdBQUMsSUFBSSxDQUFDb2YsT0FBTyxDQUFDaFIsUUFBUSxDQUFDL0ssTUFBTTtZQUFDbEUsQ0FBQyxDQUFDdUgsS0FBSyxHQUFDMUcsQ0FBQyxFQUFDYixDQUFDLENBQUNtSCxJQUFJLEdBQUMsU0FBUyxHQUFDdEcsQ0FBQyxFQUFDLElBQUksQ0FBQ29mLE9BQU8sQ0FBQ2hSLFFBQVEsQ0FBQ3BPLENBQUMsQ0FBQyxHQUFDWCxDQUFDLENBQUNPLE9BQU8sQ0FBQ1QsQ0FBQyxFQUFDTixDQUFDLEVBQUMsSUFBSSxDQUFDdWdCLE9BQU8sRUFBQyxDQUFDLElBQUksQ0FBQ3RmLFVBQVUsQ0FBQyxFQUFDLElBQUksQ0FBQ3NmLE9BQU8sQ0FBQ3BkLFVBQVUsQ0FBQ2hDLENBQUMsQ0FBQyxHQUFDWCxDQUFDLENBQUMyQyxVQUFVLEVBQUMsSUFBSSxDQUFDb2QsT0FBTyxDQUFDQyxZQUFZLENBQUNyZixDQUFDLENBQUMsR0FBQ2IsQ0FBQyxFQUFDLElBQUksQ0FBQ3dPLFNBQVMsR0FBQyxJQUFJLENBQUNBLFNBQVMsSUFBRXRPLENBQUMsQ0FBQ3NPLFNBQVMsRUFBQyxJQUFJLENBQUNELGNBQWMsR0FBQyxJQUFJLENBQUNBLGNBQWMsSUFBRXJPLENBQUMsQ0FBQ3FPLGNBQWMsRUFBQ3ZPLENBQUMsQ0FBQ3dPLFNBQVMsR0FBQyxJQUFJLENBQUNBLFNBQVMsRUFBQ3hPLENBQUMsQ0FBQ3VPLGNBQWMsR0FBQyxJQUFJLENBQUNBLGNBQWM7VUFBQSxDQUFDLE1BQUt2TyxDQUFDLENBQUN1SCxLQUFLLEdBQUMvRixDQUFDLENBQUMrRixLQUFLLEVBQUN2SCxDQUFDLENBQUNtSCxJQUFJLEdBQUMsU0FBUyxHQUFDM0YsQ0FBQyxDQUFDK0YsS0FBSyxFQUFDLElBQUksQ0FBQ2lILFNBQVMsR0FBQyxJQUFJLENBQUNBLFNBQVMsSUFBRWhOLENBQUMsQ0FBQ2dOLFNBQVMsRUFBQyxJQUFJLENBQUNELGNBQWMsR0FBQyxJQUFJLENBQUNBLGNBQWMsSUFBRS9NLENBQUMsQ0FBQytNLGNBQWM7UUFBQTtNQUFDLENBQUM7TUFBQ21XLG9CQUFvQixFQUFDLFNBQUFBLENBQVNqbEIsQ0FBQyxFQUFDO1FBQUMsS0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBQyxFQUFDTyxDQUFDLEdBQUMsSUFBSSxDQUFDZ2dCLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDaGMsTUFBTSxFQUFDeEUsQ0FBQyxHQUFDTyxDQUFDLEVBQUNQLENBQUMsRUFBRSxFQUFDO1VBQUMsSUFBSU0sQ0FBQyxHQUFDLElBQUksQ0FBQ2lnQixPQUFPLENBQUNDLFlBQVksQ0FBQ3hnQixDQUFDLENBQUM7VUFBQyxJQUFHTSxDQUFDLElBQUVBLENBQUMsQ0FBQ3dkLE1BQU0sQ0FBQy9kLENBQUMsQ0FBQyxFQUFDLE9BQU9PLENBQUM7UUFBQTtNQUFDLENBQUM7TUFBQzhqQixpQkFBaUIsRUFBQyxTQUFBQSxDQUFTcmtCLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQyxJQUFJLENBQUNtZ0IsV0FBVyxDQUFDbEMsUUFBUSxDQUFDbGUsQ0FBQyxDQUFDO1VBQUNRLENBQUMsR0FBQyxDQUFDUCxDQUFDLENBQUM2SCxLQUFLLEVBQUMsTUFBTSxFQUFDN0gsQ0FBQyxDQUFDZ0YsV0FBVyxDQUFDO1FBQUMsT0FBTSxDQUFDLElBQUksQ0FBQzZKLGNBQWMsSUFBRSxJQUFJLENBQUNDLFNBQVMsS0FBR3ZPLENBQUMsQ0FBQzJILElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxJQUFJLENBQUM0RyxTQUFTLElBQUV2TyxDQUFDLENBQUMySCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsb0JBQW9CLEdBQUMzSCxDQUFDLENBQUNpTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUMsR0FBRztNQUFBLENBQUM7TUFBQ21XLFdBQVcsRUFBQyxTQUFBQSxDQUFTNWtCLENBQUMsRUFBQztRQUFDLElBQUksQ0FBQzhnQixTQUFTLENBQUM5Z0IsQ0FBQyxDQUFDLEtBQUcsSUFBSSxDQUFDOGdCLFNBQVMsQ0FBQzlnQixDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUM4Z0IsU0FBUyxDQUFDQyxJQUFJLENBQUM1WSxJQUFJLENBQUNuSSxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ21JLElBQUksRUFBQyxTQUFBQSxDQUFTbkksQ0FBQyxFQUFDO1FBQUMsT0FBT0EsQ0FBQyxZQUFZTyxDQUFDLEtBQUdQLENBQUMsR0FBQyxJQUFJLENBQUM0ZCxNQUFNLENBQUN1QyxJQUFJLENBQUNuZ0IsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNraEIsV0FBVyxDQUFDL1ksSUFBSSxDQUFDbkksQ0FBQyxDQUFDLEVBQUNBLENBQUM7TUFBQSxDQUFDO01BQUNxakIsZ0JBQWdCLEVBQUMsU0FBQUEsQ0FBU3JqQixDQUFDLEVBQUM7UUFBQyxJQUFJLENBQUNtSSxJQUFJLENBQUMsSUFBSTVILENBQUMsQ0FBQ1AsQ0FBQyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNvaEIsVUFBVSxFQUFDLFNBQUFBLENBQVNwaEIsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDNmlCLGNBQWMsS0FBRyxJQUFJLENBQUNqRixNQUFNLENBQUN6VixJQUFJLENBQUMsSUFBSSxDQUFDK1gsY0FBYyxDQUFDLElBQUksQ0FBQ3RDLE1BQU0sQ0FBQ2tDLFlBQVksQ0FBQyxJQUFJLENBQUMrQyxjQUFjLENBQUMsRUFBQyxJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDRCxjQUFjLEdBQUMsS0FBSyxDQUFDLENBQUMsRUFBQzdpQixDQUFDLElBQUUsSUFBSSxDQUFDNGQsTUFBTSxDQUFDelYsSUFBSSxDQUFDbkksQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDaWpCLFlBQVksRUFBQyxTQUFBQSxDQUFTampCLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQyxDQUFDLEdBQUcsQ0FBQztVQUFDTyxDQUFDLEdBQUMsS0FBSyxDQUFDO1VBQUNDLENBQUMsR0FBQyxLQUFLLENBQUM7VUFBQ29CLENBQUMsR0FBQyxLQUFLLENBQUM7UUFBQyxJQUFHLENBQUMsSUFBSSxDQUFDbWhCLFFBQVEsQ0FBQyxDQUFDLEVBQUMsTUFBTSxJQUFJL2hCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQztRQUFDLElBQUlhLENBQUMsR0FBQyxJQUFJLENBQUM2ZCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxJQUFHN2QsQ0FBQyxZQUFZdkIsQ0FBQyxFQUFDQyxDQUFDLEdBQUMsQ0FBQ3NCLENBQUMsQ0FBQ2tFLEtBQUssQ0FBQyxFQUFDL0YsQ0FBQyxHQUFDLENBQUMsR0FBRyxFQUFDTyxDQUFDLENBQUMsRUFBQ3FCLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJO1VBQUNwQixDQUFDLEdBQUMsQ0FBQyxDQUFDO1VBQUMsSUFBSXNCLENBQUMsR0FBQyxJQUFJLENBQUNtakIsU0FBUyxDQUFDLENBQUM7VUFBQ2psQixDQUFDLEdBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDa0ksSUFBSSxDQUFDcEcsQ0FBQyxDQUFDLEVBQUMsS0FBSyxFQUFDRCxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUN0QixDQUFDLEdBQUMsSUFBSSxDQUFDa2lCLFFBQVEsQ0FBQyxDQUFDO1FBQUE7UUFBQyxJQUFJdGhCLENBQUMsR0FBQ3BCLENBQUMsQ0FBQ1ksSUFBSSxDQUFDLElBQUksRUFBQ0osQ0FBQyxDQUFDO1FBQUNxQixDQUFDLElBQUUsSUFBSSxDQUFDOGQsUUFBUSxDQUFDLENBQUMsRUFBQ2xmLENBQUMsSUFBRSxJQUFJLENBQUNrZ0IsU0FBUyxFQUFFLEVBQUMsSUFBSSxDQUFDeFksSUFBSSxDQUFDbEksQ0FBQyxDQUFDdUwsTUFBTSxDQUFDcEssQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDOGpCLFNBQVMsRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxPQUFPLElBQUksQ0FBQ3ZFLFNBQVMsRUFBRSxFQUFDLElBQUksQ0FBQ0EsU0FBUyxHQUFDLElBQUksQ0FBQ0MsU0FBUyxDQUFDbmMsTUFBTSxJQUFFLElBQUksQ0FBQ21jLFNBQVMsQ0FBQ3pZLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDd1ksU0FBUyxDQUFDLEVBQUMsSUFBSSxDQUFDd0UsWUFBWSxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNBLFlBQVksRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxPQUFNLE9BQU8sR0FBQyxJQUFJLENBQUN4RSxTQUFTO01BQUEsQ0FBQztNQUFDOEIsV0FBVyxFQUFDLFNBQUFBLENBQUEsRUFBVTtRQUFDLElBQUl6aUIsQ0FBQyxHQUFDLElBQUksQ0FBQ2toQixXQUFXO1FBQUMsSUFBSSxDQUFDQSxXQUFXLEdBQUMsRUFBRTtRQUFDLEtBQUksSUFBSWpoQixDQUFDLEdBQUMsQ0FBQyxFQUFDTyxDQUFDLEdBQUNSLENBQUMsQ0FBQ3lFLE1BQU0sRUFBQ3hFLENBQUMsR0FBQ08sQ0FBQyxFQUFDUCxDQUFDLEVBQUUsRUFBQztVQUFDLElBQUlRLENBQUMsR0FBQ1QsQ0FBQyxDQUFDQyxDQUFDLENBQUM7VUFBQyxJQUFHUSxDQUFDLFlBQVlGLENBQUMsRUFBQyxJQUFJLENBQUMwZ0IsWUFBWSxDQUFDOVksSUFBSSxDQUFDMUgsQ0FBQyxDQUFDLENBQUMsS0FBSTtZQUFDLElBQUlvQixDQUFDLEdBQUMsSUFBSSxDQUFDcWpCLFNBQVMsQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDOUQsVUFBVSxDQUFDLENBQUN2ZixDQUFDLEVBQUMsS0FBSyxFQUFDcEIsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDd2dCLFlBQVksQ0FBQzlZLElBQUksQ0FBQ3RHLENBQUMsQ0FBQztVQUFBO1FBQUM7TUFBQyxDQUFDO01BQUNtaEIsUUFBUSxFQUFDLFNBQUFBLENBQUEsRUFBVTtRQUFDLE9BQU8sSUFBSSxDQUFDOUIsV0FBVyxDQUFDemMsTUFBTTtNQUFBLENBQUM7TUFBQ2tiLFFBQVEsRUFBQyxTQUFBQSxDQUFTM2YsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUksQ0FBQytpQixRQUFRLENBQUMsQ0FBQztVQUFDeGlCLENBQUMsR0FBQyxDQUFDUCxDQUFDLEdBQUMsSUFBSSxDQUFDaWhCLFdBQVcsR0FBQyxJQUFJLENBQUNELFlBQVksRUFBRXhHLEdBQUcsQ0FBQyxDQUFDO1FBQUMsSUFBRyxDQUFDemEsQ0FBQyxJQUFFUSxDQUFDLFlBQVlELENBQUMsRUFBQyxPQUFPQyxDQUFDLENBQUN3RixLQUFLO1FBQUMsSUFBRyxDQUFDL0YsQ0FBQyxFQUFDO1VBQUMsSUFBRyxDQUFDLElBQUksQ0FBQzBnQixTQUFTLEVBQUMsTUFBTSxJQUFJMWYsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1VBQUMsSUFBSSxDQUFDMGYsU0FBUyxFQUFFO1FBQUE7UUFBQyxPQUFPbmdCLENBQUM7TUFBQSxDQUFDO01BQUNraUIsUUFBUSxFQUFDLFNBQUFBLENBQUEsRUFBVTtRQUFDLElBQUkxaUIsQ0FBQyxHQUFDLElBQUksQ0FBQ2dqQixRQUFRLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQzlCLFdBQVcsR0FBQyxJQUFJLENBQUNELFlBQVk7VUFBQ2hoQixDQUFDLEdBQUNELENBQUMsQ0FBQ0EsQ0FBQyxDQUFDeUUsTUFBTSxHQUFDLENBQUMsQ0FBQztRQUFDLE9BQU94RSxDQUFDLFlBQVlNLENBQUMsR0FBQ04sQ0FBQyxDQUFDK0YsS0FBSyxHQUFDL0YsQ0FBQztNQUFBLENBQUM7TUFBQ29pQixXQUFXLEVBQUMsU0FBQUEsQ0FBU3JpQixDQUFDLEVBQUM7UUFBQyxPQUFPLElBQUksQ0FBQytPLFNBQVMsSUFBRS9PLENBQUMsR0FBQyxTQUFTLEdBQUNBLENBQUMsR0FBQyxHQUFHLEdBQUMsT0FBTyxHQUFDQSxDQUFDO01BQUEsQ0FBQztNQUFDOGYsWUFBWSxFQUFDLFNBQUFBLENBQVM5ZixDQUFDLEVBQUM7UUFBQyxPQUFPLElBQUksQ0FBQzRkLE1BQU0sQ0FBQ2tDLFlBQVksQ0FBQzlmLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3loQixhQUFhLEVBQUMsU0FBQUEsQ0FBU3poQixDQUFDLEVBQUM7UUFBQyxPQUFPLElBQUksQ0FBQzRkLE1BQU0sQ0FBQzZELGFBQWEsQ0FBQ3poQixDQUFDLENBQUM7TUFBQSxDQUFDO01BQUM2ZixTQUFTLEVBQUMsU0FBQUEsQ0FBUzdmLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQyxJQUFJLENBQUM0Z0IsT0FBTyxDQUFDN2dCLENBQUMsQ0FBQztRQUFDLE9BQU9DLENBQUMsSUFBRUEsQ0FBQyxDQUFDOGhCLGNBQWMsRUFBRSxFQUFDOWhCLENBQUMsS0FBR0EsQ0FBQyxHQUFDLElBQUksQ0FBQzRnQixPQUFPLENBQUM3Z0IsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDNGQsTUFBTSxDQUFDdUMsSUFBSSxDQUFDbmdCLENBQUMsQ0FBQyxFQUFDQyxDQUFDLENBQUM0ZixTQUFTLEdBQUMsQ0FBQyxDQUFDLEVBQUM1ZixDQUFDLENBQUM4aEIsY0FBYyxHQUFDLENBQUMsRUFBQzloQixDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNza0IsV0FBVyxFQUFDLFNBQUFBLENBQVN2a0IsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQztRQUFDLElBQUlELENBQUMsR0FBQyxFQUFFO1VBQUNFLENBQUMsR0FBQyxJQUFJLENBQUM2aEIsZUFBZSxDQUFDcmlCLENBQUMsRUFBQ0QsQ0FBQyxFQUFDTyxDQUFDLEVBQUNDLENBQUMsQ0FBQztVQUFDcUIsQ0FBQyxHQUFDLElBQUksQ0FBQytkLFVBQVUsQ0FBQyxTQUFTLEVBQUMzZixDQUFDLEVBQUMsUUFBUSxDQUFDO1VBQUM2QixDQUFDLEdBQUMsSUFBSSxDQUFDK2QsU0FBUyxDQUFDLElBQUksQ0FBQ3dDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDQSxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUMsa0NBQWtDLENBQUM7UUFBQyxPQUFNO1VBQUN4UixNQUFNLEVBQUN0USxDQUFDO1VBQUNza0IsVUFBVSxFQUFDcGtCLENBQUM7VUFBQ2lILElBQUksRUFBQzdGLENBQUM7VUFBQzRpQixVQUFVLEVBQUMsQ0FBQzNpQixDQUFDLENBQUMsQ0FBQzBKLE1BQU0sQ0FBQ2pMLENBQUM7UUFBQyxDQUFDO01BQUEsQ0FBQztNQUFDdWtCLFdBQVcsRUFBQyxTQUFBQSxDQUFTOWtCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUM7UUFBQyxJQUFJRCxDQUFDLEdBQUMsQ0FBQyxDQUFDO1VBQUNFLENBQUMsR0FBQyxFQUFFO1VBQUNvQixDQUFDLEdBQUMsRUFBRTtVQUFDQyxDQUFDLEdBQUMsRUFBRTtVQUFDQyxDQUFDLEdBQUMsQ0FBQ3ZCLENBQUM7VUFBQ1ksQ0FBQyxHQUFDLEtBQUssQ0FBQztRQUFDVyxDQUFDLEtBQUd2QixDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUNELENBQUMsQ0FBQ21ILElBQUksR0FBQyxJQUFJLENBQUNvWSxZQUFZLENBQUM5ZixDQUFDLENBQUMsRUFBQ08sQ0FBQyxDQUFDbU0sSUFBSSxHQUFDLElBQUksQ0FBQ2lULFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDckIsUUFBUSxLQUFHL2QsQ0FBQyxDQUFDNmtCLE9BQU8sR0FBQyxJQUFJLENBQUN6RixRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDdEIsWUFBWSxLQUFHOWQsQ0FBQyxDQUFDOGtCLFNBQVMsR0FBQyxJQUFJLENBQUMxRixRQUFRLENBQUMsQ0FBQyxFQUFDcGYsQ0FBQyxDQUFDK2tCLFlBQVksR0FBQyxJQUFJLENBQUMzRixRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQUMsSUFBSW5lLENBQUMsR0FBQyxJQUFJLENBQUNtZSxRQUFRLENBQUMsQ0FBQztVQUFDMWUsQ0FBQyxHQUFDLElBQUksQ0FBQzBlLFFBQVEsQ0FBQyxDQUFDO1FBQUMsQ0FBQzFlLENBQUMsSUFBRU8sQ0FBQyxNQUFJakIsQ0FBQyxDQUFDaUgsRUFBRSxHQUFDdkcsQ0FBQyxJQUFFLGdCQUFnQixFQUFDVixDQUFDLENBQUNnSCxPQUFPLEdBQUMvRixDQUFDLElBQUUsZ0JBQWdCLENBQUM7UUFBQyxLQUFJLElBQUlRLENBQUMsR0FBQy9CLENBQUMsRUFBQytCLENBQUMsRUFBRSxHQUFFWixDQUFDLEdBQUMsSUFBSSxDQUFDdWUsUUFBUSxDQUFDLENBQUMsRUFBQ25mLENBQUMsQ0FBQ3dCLENBQUMsQ0FBQyxHQUFDWixDQUFDLEVBQUMsSUFBSSxDQUFDa2QsUUFBUSxLQUFHeGMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMyZCxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDdEIsWUFBWSxLQUFHeGMsQ0FBQyxDQUFDRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMyZCxRQUFRLENBQUMsQ0FBQyxFQUFDbGYsQ0FBQyxDQUFDdUIsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDMmQsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUFDLE9BQU81ZCxDQUFDLEtBQUd4QixDQUFDLENBQUN1TSxJQUFJLEdBQUMsSUFBSSxDQUFDOFEsTUFBTSxDQUFDMkgsYUFBYSxDQUFDL2tCLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDOGQsUUFBUSxLQUFHL2QsQ0FBQyxDQUFDa0gsR0FBRyxHQUFDLElBQUksQ0FBQ21XLE1BQU0sQ0FBQzJILGFBQWEsQ0FBQ3pqQixDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3VjLFlBQVksS0FBRzlkLENBQUMsQ0FBQ3lqQixLQUFLLEdBQUMsSUFBSSxDQUFDcEcsTUFBTSxDQUFDMkgsYUFBYSxDQUFDMWpCLENBQUMsQ0FBQyxFQUFDdEIsQ0FBQyxDQUFDMGpCLFFBQVEsR0FBQyxJQUFJLENBQUNyRyxNQUFNLENBQUMySCxhQUFhLENBQUM5a0IsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUM4WCxPQUFPLENBQUM1USxJQUFJLEtBQUdwSCxDQUFDLENBQUNvSCxJQUFJLEdBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxDQUFDbUgsY0FBYyxLQUFHdk8sQ0FBQyxDQUFDMEUsV0FBVyxHQUFDLGFBQWEsQ0FBQyxFQUFDMUUsQ0FBQztNQUFBLENBQUM7TUFBQytoQixlQUFlLEVBQUMsU0FBQUEsQ0FBU3RpQixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDRCxDQUFDLEVBQUM7UUFBQyxJQUFJRSxDQUFDLEdBQUMsSUFBSSxDQUFDcWtCLFdBQVcsQ0FBQzlrQixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxDQUFDO1FBQUMsT0FBT0MsQ0FBQyxDQUFDNkUsR0FBRyxHQUFDdUQsSUFBSSxDQUFDRSxTQUFTLENBQUMsSUFBSSxDQUFDNlUsTUFBTSxDQUFDbUMsZUFBZSxDQUFDLEVBQUN0ZixDQUFDLEdBQUMsSUFBSSxDQUFDZ2hCLGFBQWEsQ0FBQ2hoQixDQUFDLENBQUMsRUFBQ0YsQ0FBQyxJQUFFLElBQUksQ0FBQ3FrQixXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUNwa0IsQ0FBQyxDQUFDMkgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDMUgsQ0FBQyxDQUFDLElBQUVELENBQUMsSUFBRUEsQ0FBQyxDQUFDMkgsSUFBSSxDQUFDMUgsQ0FBQyxDQUFDLEVBQUMsRUFBRSxJQUFFQSxDQUFDO01BQUE7SUFBQyxDQUFDLEVBQUMsWUFBVTtNQUFDLEtBQUksSUFBSVQsQ0FBQyxHQUFDLHVaQUF1WixDQUFDNkssS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDNUssQ0FBQyxHQUFDUSxDQUFDLENBQUMra0IsY0FBYyxHQUFDLENBQUMsQ0FBQyxFQUFDaGxCLENBQUMsR0FBQyxDQUFDLEVBQUNELENBQUMsR0FBQ1AsQ0FBQyxDQUFDeUUsTUFBTSxFQUFDakUsQ0FBQyxHQUFDRCxDQUFDLEVBQUNDLENBQUMsRUFBRSxFQUFDUCxDQUFDLENBQUNELENBQUMsQ0FBQ1EsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDLENBQUMsQ0FBQyxFQUFDQyxDQUFDLENBQUNnbEIsNkJBQTZCLEdBQUMsVUFBU3psQixDQUFDLEVBQUM7TUFBQyxPQUFNLENBQUNTLENBQUMsQ0FBQytrQixjQUFjLENBQUN4bEIsQ0FBQyxDQUFDLElBQUUsNEJBQTRCLENBQUMyRSxJQUFJLENBQUMzRSxDQUFDLENBQUM7SUFBQSxDQUFDLEVBQUNDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBQ1EsQ0FBQyxFQUFDVCxDQUFDLENBQUNFLE9BQU8sR0FBQ0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQztFQUFBLENBQUMsRUFBQyxVQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO0lBQUMsWUFBWTs7SUFBQyxTQUFTRCxDQUFDQSxDQUFDUCxDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO01BQUMsSUFBR3NCLENBQUMsQ0FBQ3VELE9BQU8sQ0FBQ3JGLENBQUMsQ0FBQyxFQUFDO1FBQUMsS0FBSSxJQUFJTyxDQUFDLEdBQUMsRUFBRSxFQUFDRSxDQUFDLEdBQUMsQ0FBQyxFQUFDb0IsQ0FBQyxHQUFDN0IsQ0FBQyxDQUFDeUUsTUFBTSxFQUFDaEUsQ0FBQyxHQUFDb0IsQ0FBQyxFQUFDcEIsQ0FBQyxFQUFFLEVBQUNGLENBQUMsQ0FBQzRILElBQUksQ0FBQ2xJLENBQUMsQ0FBQ2tnQixJQUFJLENBQUNuZ0IsQ0FBQyxDQUFDUyxDQUFDLENBQUMsRUFBQ0QsQ0FBQyxDQUFDLENBQUM7UUFBQyxPQUFPRCxDQUFDO01BQUE7TUFBQyxPQUFNLFNBQVMsSUFBRSxPQUFPUCxDQUFDLElBQUUsUUFBUSxJQUFFLE9BQU9BLENBQUMsR0FBQ0EsQ0FBQyxHQUFDLEVBQUUsR0FBQ0EsQ0FBQztJQUFBO0lBQUMsU0FBU1MsQ0FBQ0EsQ0FBQ1QsQ0FBQyxFQUFDO01BQUMsSUFBSSxDQUFDMGxCLE9BQU8sR0FBQzFsQixDQUFDLEVBQUMsSUFBSSxDQUFDNGQsTUFBTSxHQUFDLEVBQUU7SUFBQTtJQUFDLElBQUkvYixDQUFDLEdBQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQUNQLENBQUMsQ0FBQzJCLFVBQVUsR0FBQyxDQUFDLENBQUM7SUFBQyxJQUFJRSxDQUFDLEdBQUN0QixDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUN1QixDQUFDLEdBQUMsS0FBSyxDQUFDO0lBQUMsSUFBRyxDQUFDLENBQUMsUUFBTVgsQ0FBQyxFQUFDLENBQUM7SUFBQ1csQ0FBQyxLQUFHQSxDQUFDLEdBQUMsU0FBQUEsQ0FBUy9CLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTyxDQUFDLEVBQUNELENBQUMsRUFBQztNQUFDLElBQUksQ0FBQ29sQixHQUFHLEdBQUMsRUFBRSxFQUFDcGxCLENBQUMsSUFBRSxJQUFJLENBQUMyaEIsR0FBRyxDQUFDM2hCLENBQUMsQ0FBQztJQUFBLENBQUMsRUFBQ3dCLENBQUMsQ0FBQ2lCLFNBQVMsR0FBQztNQUFDa2YsR0FBRyxFQUFDLFNBQUFBLENBQVNsaUIsQ0FBQyxFQUFDO1FBQUM4QixDQUFDLENBQUN1RCxPQUFPLENBQUNyRixDQUFDLENBQUMsS0FBR0EsQ0FBQyxHQUFDQSxDQUFDLENBQUN5TyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNrWCxHQUFHLElBQUUzbEIsQ0FBQztNQUFBLENBQUM7TUFBQ3FoQixPQUFPLEVBQUMsU0FBQUEsQ0FBU3JoQixDQUFDLEVBQUM7UUFBQzhCLENBQUMsQ0FBQ3VELE9BQU8sQ0FBQ3JGLENBQUMsQ0FBQyxLQUFHQSxDQUFDLEdBQUNBLENBQUMsQ0FBQ3lPLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2tYLEdBQUcsR0FBQzNsQixDQUFDLEdBQUMsSUFBSSxDQUFDMmxCLEdBQUc7TUFBQSxDQUFDO01BQUNqRSxxQkFBcUIsRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxPQUFNO1VBQUNrRSxJQUFJLEVBQUMsSUFBSSxDQUFDN2hCLFFBQVEsQ0FBQztRQUFDLENBQUM7TUFBQSxDQUFDO01BQUNBLFFBQVEsRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxPQUFPLElBQUksQ0FBQzRoQixHQUFHO01BQUE7SUFBQyxDQUFDLENBQUMsRUFBQ2xsQixDQUFDLENBQUN1QyxTQUFTLEdBQUM7TUFBQ2dDLE9BQU8sRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxPQUFNLENBQUMsSUFBSSxDQUFDNFksTUFBTSxDQUFDblosTUFBTTtNQUFBLENBQUM7TUFBQzRjLE9BQU8sRUFBQyxTQUFBQSxDQUFTcmhCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDMmQsTUFBTSxDQUFDWixPQUFPLENBQUMsSUFBSSxDQUFDbUQsSUFBSSxDQUFDbmdCLENBQUMsRUFBQ0MsQ0FBQyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUNrSSxJQUFJLEVBQUMsU0FBQUEsQ0FBU25JLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO1FBQUMsSUFBSSxDQUFDMmQsTUFBTSxDQUFDelYsSUFBSSxDQUFDLElBQUksQ0FBQ2dZLElBQUksQ0FBQ25nQixDQUFDLEVBQUNDLENBQUMsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDc2hCLEtBQUssRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxJQUFJdmhCLENBQUMsR0FBQyxJQUFJLENBQUM2bEIsS0FBSyxDQUFDLENBQUM7UUFBQyxPQUFPLElBQUksQ0FBQzNlLElBQUksQ0FBQyxVQUFTakgsQ0FBQyxFQUFDO1VBQUNELENBQUMsQ0FBQ2tpQixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUNqaUIsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDLEVBQUNELENBQUM7TUFBQSxDQUFDO01BQUNrSCxJQUFJLEVBQUMsU0FBQUEsQ0FBU2xILENBQUMsRUFBQztRQUFDLEtBQUksSUFBSUMsQ0FBQyxHQUFDLENBQUMsRUFBQ08sQ0FBQyxHQUFDLElBQUksQ0FBQ29kLE1BQU0sQ0FBQ25aLE1BQU0sRUFBQ3hFLENBQUMsR0FBQ08sQ0FBQyxFQUFDUCxDQUFDLEVBQUUsRUFBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQzRkLE1BQU0sQ0FBQzNkLENBQUMsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDNGxCLEtBQUssRUFBQyxTQUFBQSxDQUFBLEVBQVU7UUFBQyxJQUFJN2xCLENBQUMsR0FBQyxJQUFJLENBQUMrZixlQUFlLElBQUU7VUFBQ3hhLEtBQUssRUFBQyxDQUFDO1FBQUMsQ0FBQztRQUFDLE9BQU8sSUFBSXhELENBQUMsQ0FBQy9CLENBQUMsQ0FBQ3VGLEtBQUssQ0FBQ0MsSUFBSSxFQUFDeEYsQ0FBQyxDQUFDdUYsS0FBSyxDQUFDRyxNQUFNLEVBQUMsSUFBSSxDQUFDZ2dCLE9BQU8sQ0FBQztNQUFBLENBQUM7TUFBQ3ZGLElBQUksRUFBQyxTQUFBQSxDQUFTbmdCLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQ3VFLFNBQVMsQ0FBQ0MsTUFBTSxJQUFFLENBQUMsSUFBRSxLQUFLLENBQUMsS0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQ3ViLGVBQWUsSUFBRTtVQUFDeGEsS0FBSyxFQUFDLENBQUM7UUFBQyxDQUFDLEdBQUNmLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFBQyxPQUFPeEUsQ0FBQyxZQUFZK0IsQ0FBQyxHQUFDL0IsQ0FBQyxJQUFFQSxDQUFDLEdBQUNPLENBQUMsQ0FBQ1AsQ0FBQyxFQUFDLElBQUksRUFBQ0MsQ0FBQyxDQUFDLEVBQUMsSUFBSThCLENBQUMsQ0FBQzlCLENBQUMsQ0FBQ3NGLEtBQUssQ0FBQ0MsSUFBSSxFQUFDdkYsQ0FBQyxDQUFDc0YsS0FBSyxDQUFDRyxNQUFNLEVBQUMsSUFBSSxDQUFDZ2dCLE9BQU8sRUFBQzFsQixDQUFDLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBQ3VpQixZQUFZLEVBQUMsU0FBQUEsQ0FBU3ZpQixDQUFDLEVBQUNDLENBQUMsRUFBQ08sQ0FBQyxFQUFDO1FBQUMsT0FBT0EsQ0FBQyxHQUFDLElBQUksQ0FBQ3NsQixZQUFZLENBQUN0bEIsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDMmYsSUFBSSxDQUFDLENBQUNuZ0IsQ0FBQyxFQUFDQyxDQUFDLEdBQUMsR0FBRyxHQUFDQSxDQUFDLEdBQUMsR0FBRyxHQUFDLEdBQUcsRUFBQ08sQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUFDc2YsWUFBWSxFQUFDLFNBQUFBLENBQVM5ZixDQUFDLEVBQUM7UUFBQyxPQUFNLEdBQUcsR0FBQyxDQUFDQSxDQUFDLEdBQUMsRUFBRSxFQUFFNEUsT0FBTyxDQUFDLEtBQUssRUFBQyxNQUFNLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLFNBQVMsRUFBQyxTQUFTLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLFNBQVMsRUFBQyxTQUFTLENBQUMsR0FBQyxHQUFHO01BQUEsQ0FBQztNQUFDNmMsYUFBYSxFQUFDLFNBQUFBLENBQVN6aEIsQ0FBQyxFQUFDO1FBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUk7VUFBQ08sQ0FBQyxHQUFDLEVBQUU7UUFBQ3FCLENBQUMsQ0FBQzdCLENBQUMsQ0FBQyxDQUFDbUgsT0FBTyxDQUFDLFVBQVMxRyxDQUFDLEVBQUM7VUFBQyxJQUFJb0IsQ0FBQyxHQUFDdEIsQ0FBQyxDQUFDUCxDQUFDLENBQUNTLENBQUMsQ0FBQyxFQUFDUixDQUFDLENBQUM7VUFBQyxXQUFXLEtBQUc0QixDQUFDLElBQUVyQixDQUFDLENBQUMySCxJQUFJLENBQUMsQ0FBQ2xJLENBQUMsQ0FBQzZmLFlBQVksQ0FBQ3JmLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQ29CLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQyxDQUFDO1FBQUMsSUFBSXBCLENBQUMsR0FBQyxJQUFJLENBQUNxbEIsWUFBWSxDQUFDdGxCLENBQUMsQ0FBQztRQUFDLE9BQU9DLENBQUMsQ0FBQzRnQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUM1Z0IsQ0FBQyxDQUFDeWhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQ3poQixDQUFDO01BQUEsQ0FBQztNQUFDcWxCLFlBQVksRUFBQyxTQUFBQSxDQUFTOWxCLENBQUMsRUFBQztRQUFDLEtBQUksSUFBSUMsQ0FBQyxHQUFDLElBQUksQ0FBQzRsQixLQUFLLENBQUMsQ0FBQyxFQUFDcmxCLENBQUMsR0FBQyxDQUFDLEVBQUNDLENBQUMsR0FBQ1QsQ0FBQyxDQUFDeUUsTUFBTSxFQUFDakUsQ0FBQyxHQUFDQyxDQUFDLEVBQUNELENBQUMsRUFBRSxFQUFDQSxDQUFDLElBQUVQLENBQUMsQ0FBQ2lpQixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUNqaUIsQ0FBQyxDQUFDaWlCLEdBQUcsQ0FBQzNoQixDQUFDLENBQUNQLENBQUMsQ0FBQ1EsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFBQyxPQUFPUCxDQUFDO01BQUEsQ0FBQztNQUFDc2xCLGFBQWEsRUFBQyxTQUFBQSxDQUFTdmxCLENBQUMsRUFBQztRQUFDLElBQUlDLENBQUMsR0FBQyxJQUFJLENBQUM2bEIsWUFBWSxDQUFDOWxCLENBQUMsQ0FBQztRQUFDLE9BQU9DLENBQUMsQ0FBQ29oQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUNwaEIsQ0FBQyxDQUFDaWlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQ2ppQixDQUFDO01BQUE7SUFBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBQ1EsQ0FBQyxFQUFDVCxDQUFDLENBQUNFLE9BQU8sR0FBQ0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQztFQUFBLENBQUMsQ0FBQyxDQUFDO0FBQUEsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1QjNydEI7QUFDbEI7QUFFekMsSUFBSStsQixPQUFPLEdBQUc7RUFDWjtFQUNBQyxNQUFNLEVBQUVDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0VBQ3BEQyxTQUFTLEVBQUVGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0VBQ3RERSxVQUFVLEVBQUVILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBQ3pERyxjQUFjLEVBQUVKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0VBQ2pFSSxnQkFBZ0IsRUFBRUwsUUFBUSxDQUFDQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7RUFFcEVLLFdBQVcsRUFBRU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7RUFDekRNLGVBQWUsRUFBRVAsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7RUFDaEVPLFdBQVcsRUFBRVIsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFFeEQ7RUFDQVEsVUFBVSxFQUFFLEdBQUc7RUFBRTtFQUNqQkMsVUFBVSxFQUFFLE9BQU87RUFBRTtFQUNyQkMsS0FBSyxFQUFFLENBQ0w7SUFDRUMsTUFBTSxFQUFFLEtBQUs7SUFDYkMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsYUFBYSxFQUFFLElBQUk7SUFDbkJDLFNBQVMsRUFBRSxJQUFJLENBQUM7RUFDbEIsQ0FBQyxFQUNEO0lBQ0VILE1BQU0sRUFBRSxLQUFLO0lBQ2JDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxJQUFJO0lBQ25CQyxTQUFTLEVBQUU7RUFDYixDQUFDLEVBQ0Q7SUFDRUgsTUFBTSxFQUFFLE1BQU07SUFDZEMsS0FBSyxFQUFFLEdBQUc7SUFDVkMsYUFBYSxFQUFFLElBQUk7SUFDbkJDLFNBQVMsRUFBRTtFQUNiLENBQUMsRUFDRDtJQUNFSCxNQUFNLEVBQUUsTUFBTTtJQUNkQyxLQUFLLEVBQUUsR0FBRztJQUNWQyxhQUFhLEVBQUUsSUFBSTtJQUNuQkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQyxFQUNEO0lBQ0VILE1BQU0sRUFBRSxNQUFNO0lBQ2RDLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLGFBQWEsRUFBRSxJQUFJO0lBQ25CQyxTQUFTLEVBQUU7RUFDYixDQUFDLEVBQ0Q7SUFDRUgsTUFBTSxFQUFFLE9BQU87SUFDZkMsS0FBSyxFQUFFLEdBQUc7SUFDVkMsYUFBYSxFQUFFLElBQUk7SUFDbkJDLFNBQVMsRUFBRTtFQUNiLENBQUMsQ0FDRjtFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRUMsSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBWTtJQUNoQm5CLDhDQUFpQixDQUFDQyxPQUFPLENBQUNDLE1BQU0sRUFBRTtNQUNoQzVNLEtBQUssRUFBRTJNLE9BQU8sQ0FBQ21CLGFBQWEsQ0FBQyxDQUFDO01BQzlCNWhCLEtBQUssRUFBRXlnQixPQUFPLENBQUNXLFVBQVU7TUFDekJTLE9BQU8sRUFBRSxPQUFPO01BQ2hCQyxRQUFRLEVBQUU7UUFDUkMsRUFBRSxFQUFFLFNBQUFBLEdBQVN0aEIsS0FBSyxFQUFFO1VBQ2xCLE9BQU9nZ0IsT0FBTyxDQUFDdUIsZUFBZSxDQUFDdmhCLEtBQUssQ0FBQztRQUN2QztNQUNGLENBQUM7TUFDRHdoQixJQUFJLEVBQUU7UUFDSkMsSUFBSSxFQUFFLFFBQVE7UUFDZHZiLE1BQU0sRUFBRThaLE9BQU8sQ0FBQzBCLGNBQWMsQ0FBQyxDQUFDO1FBQ2hDQyxPQUFPLEVBQUUsRUFBRTtRQUNYQyxNQUFNLEVBQUU7VUFDTk4sRUFBRSxFQUFFLFNBQUFBLEdBQVV0aEIsS0FBSyxFQUFFO1lBQ25CLElBQUlBLEtBQUssS0FBS2dnQixPQUFPLENBQUNZLFVBQVUsRUFBRSxPQUFPLE1BQU07WUFDL0MsT0FBTzVnQixLQUFLLENBQUM2aEIsY0FBYyxDQUFDLENBQUM7VUFDL0IsQ0FBQztVQUNEQyxJQUFJLEVBQUUsU0FBQUEsS0FBVTloQixLQUFLLEVBQUU7WUFDckIsSUFBSUEsS0FBSyxLQUFLLE1BQU0sRUFBRSxPQUFPZ2dCLE9BQU8sQ0FBQ1ksVUFBVTtZQUMvQyxPQUFPNWdCLEtBQUs7VUFDZDtRQUNGO01BQ0Y7SUFDRixDQUFDLENBQUM7O0lBRUY7SUFDQTtJQUNBLElBQU13aEIsSUFBSSxHQUFHeEIsT0FBTyxDQUFDQyxNQUFNLENBQUNFLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDdkQsSUFBTTRCLElBQUksR0FBRy9CLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDRSxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3ZENEIsSUFBSSxDQUFDQyxXQUFXLENBQUNSLElBQUksQ0FBQztJQUV0QnhCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDRixVQUFVLENBQUNrQyxFQUFFLENBQUMsT0FBTyxFQUFFakMsT0FBTyxDQUFDa0MsU0FBUyxDQUFDOztJQUV4RDtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUloYyxNQUFNLEdBQUdzYixJQUFJLENBQUNXLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNqRGpjLE1BQU0sQ0FBQy9FLE9BQU8sQ0FBQyxVQUFTbkIsS0FBSyxFQUFFO01BQzdCO01BQ0E7TUFDQUEsS0FBSyxDQUFDb2lCLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFTQyxLQUFLLEVBQUU7UUFDbEQsSUFBSUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDNWpCLE9BQU8sQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDO1FBQ3JEdUksT0FBTyxDQUFDdEosR0FBRyxDQUFDLGNBQWMsRUFBRXlrQixLQUFLLENBQUM7UUFFbEMsSUFBSUEsS0FBSyxJQUFJLE1BQU0sRUFBRTtVQUNuQkEsS0FBSyxHQUFHdEMsT0FBTyxDQUFDWSxVQUFVO1FBQzVCO1FBRUEwQixLQUFLLEdBQUcxUSxNQUFNLENBQUMwUSxLQUFLLENBQUM7O1FBRXJCO1FBQ0F0QyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0YsVUFBVSxDQUFDcGMsR0FBRyxDQUFDMmUsS0FBSyxDQUFDOztRQUVwQztRQUNBdEMsT0FBTyxDQUFDa0MsU0FBUyxDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDO01BRTVCLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKLENBQUM7RUFFRDtBQUNGO0FBQ0E7RUFDRVosY0FBYyxFQUFFLFNBQUFBLGVBQUEsRUFBVztJQUN6QixJQUFJeGIsTUFBTSxHQUFHLENBQUM4WixPQUFPLENBQUNXLFVBQVUsQ0FBQztJQUVqQ1gsT0FBTyxDQUFDYSxLQUFLLENBQUMxZixPQUFPLENBQUMsVUFBU3NoQixJQUFJLEVBQUU7TUFDbkN2YyxNQUFNLENBQUMvRCxJQUFJLENBQUNzZ0IsSUFBSSxDQUFDM0IsTUFBTSxDQUFDO0lBQzFCLENBQUMsQ0FBQztJQUVGNWEsTUFBTSxDQUFDL0QsSUFBSSxDQUFDNmQsT0FBTyxDQUFDWSxVQUFVLENBQUM7SUFDL0IsT0FBTzFhLE1BQU07RUFDZixDQUFDO0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUNFcWIsZUFBZSxFQUFFLFNBQUFBLGdCQUFTVCxNQUFNLEVBQUU7SUFDaEMsSUFBSTRCLFdBQVcsR0FBRzVCLE1BQU0sQ0FBQ2UsY0FBYyxDQUFDLENBQUM7O0lBRXpDO0lBQ0EsSUFBSWYsTUFBTSxLQUFLZCxPQUFPLENBQUNZLFVBQVUsRUFBRTtNQUNqQyxVQUFBcGIsTUFBQSxDQUFVa2QsV0FBVztJQUN2Qjs7SUFFQTtJQUNBLElBQUlDLGNBQWMsR0FBRzNDLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVyQyxJQUFJQyxNQUFNLEdBQUdkLE9BQU8sQ0FBQ1csVUFBVSxJQUFJRyxNQUFNLEdBQUc2QixjQUFjLENBQUM3QixNQUFNLEVBQUU7TUFDakUsZ0JBQUF0YixNQUFBLENBQWdCbWQsY0FBYyxDQUFDN0IsTUFBTSxDQUFDZSxjQUFjLENBQUMsQ0FBQztJQUN4RDtJQUVBLFVBQUFyYyxNQUFBLENBQVVrZCxXQUFXO0VBQ3ZCLENBQUM7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRXZCLGFBQWEsRUFBRSxTQUFBQSxjQUFBLEVBQVc7SUFDeEIsSUFBSTlOLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBRWQ7SUFDQUEsS0FBSyxDQUFDdVAsR0FBRyxHQUFHLENBQUM1QyxPQUFPLENBQUNXLFVBQVUsRUFBRSxHQUFHLENBQUM7SUFDckN0TixLQUFLLENBQUN3UCxHQUFHLEdBQUcsQ0FBQzdDLE9BQU8sQ0FBQ1ksVUFBVSxDQUFDOztJQUVoQztJQUNBO0lBQ0EsSUFBSWtDLFVBQVUsR0FBRzlDLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDcGlCLE1BQU0sR0FBRyxDQUFDO0lBQ3pDLElBQUlza0IsY0FBYyxHQUFHLEdBQUcsR0FBR0QsVUFBVTs7SUFFckM7SUFDQTlDLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDMWYsT0FBTyxDQUFDLFVBQVNzaEIsSUFBSSxFQUFFM2dCLEtBQUssRUFBRTtNQUMxQztNQUNBLElBQUlraEIsUUFBUSxHQUFHamUsSUFBSSxDQUFDa2UsS0FBSyxDQUFDRixjQUFjLElBQUlqaEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ3ZEdVIsS0FBSyxDQUFDMlAsUUFBUSxDQUFDLEdBQUcsQ0FBQ1AsSUFBSSxDQUFDM0IsTUFBTSxFQUFFMkIsSUFBSSxDQUFDeEIsU0FBUyxDQUFDO0lBQ2pELENBQUMsQ0FBQztJQUVGLE9BQU81TixLQUFLO0VBQ2QsQ0FBQztFQUVEO0FBQ0Y7QUFDQTtFQUNFNlAsV0FBVyxFQUFFLFNBQUFBLFlBQVNwQyxNQUFNLEVBQUU7SUFDNUIsSUFBSXFDLE1BQU0sR0FBR25ELE9BQU8sQ0FBQ29ELGlCQUFpQixDQUFDdEMsTUFBTSxDQUFDO0lBQzlDLElBQUkyQixJQUFJLEdBQUdVLE1BQU0sQ0FBQ1YsSUFBSTtJQUN0QixJQUFJWSxlQUFlLEdBQUdyRCxPQUFPLENBQUNzRCxvQkFBb0IsQ0FBQ2IsSUFBSSxFQUFFM0IsTUFBTSxDQUFDOztJQUVoRTtJQUNBWixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDb0QsU0FBUyxDQUFDQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQzdFdEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQ29ELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUVoRixJQUFJMUMsTUFBTSxJQUFJZCxPQUFPLENBQUNXLFVBQVUsRUFBRTtNQUNoQ1gsT0FBTyxDQUFDeUQsWUFBWSxDQUFDLENBQUM7TUFDdEI7SUFDRjs7SUFFQTtJQUNBLElBQUlDLGlCQUFpQixHQUFHcHBCLGdGQUFrQix5V0FhMUMsQ0FBQztJQUVELElBQUlxcEIsYUFBYSxHQUFHRCxpQkFBaUIsQ0FBQztNQUNwQ0UsVUFBVSxFQUFFbkIsSUFBSSxDQUFDM0IsTUFBTSxDQUFDZSxjQUFjLENBQUMsQ0FBQztNQUN4Q2dDLFNBQVMsTUFBQXJlLE1BQUEsQ0FBTWlkLElBQUksQ0FBQzFCLEtBQUssQ0FBQytDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBRTtNQUN0Q0MsV0FBVyxFQUFFVixlQUFlLENBQUNXLFFBQVEsR0FBRyxDQUFDLElBQUlsRCxNQUFNLEdBQUcyQixJQUFJLENBQUMzQixNQUFNO01BQ2pFa0QsUUFBUSxFQUFFWCxlQUFlLENBQUNXLFFBQVEsQ0FBQ25DLGNBQWMsQ0FBQyxDQUFDO01BQ25Eb0MsWUFBWSxNQUFBemUsTUFBQSxDQUFNNmQsZUFBZSxDQUFDWSxZQUFZLENBQUNILE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBRTtNQUMzREksaUJBQWlCLE1BQUExZSxNQUFBLENBQU1pZCxJQUFJLENBQUN6QixhQUFhLENBQUM4QyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQztJQUVGLElBQUloRCxNQUFNLEdBQUdkLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEVBQUU7TUFBRTtNQUN0Q1osUUFBUSxDQUFDQyxhQUFhLENBQUMsc0NBQXNDLENBQUMsQ0FBQ3FDLFdBQVcsT0FBQWhkLE1BQUEsQ0FBTzZkLGVBQWUsQ0FBQ2MsU0FBUyxDQUFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUU7TUFDdkg1RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDaUUsU0FBUyxHQUFHVCxhQUFhO01BQ2xGekQsUUFBUSxDQUFDQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQ29ELFNBQVMsQ0FBQ3JILEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOztNQUUvRTtNQUNBZ0UsUUFBUSxDQUFDQyxhQUFhLENBQUMsMkNBQTJDLENBQUMsQ0FBQ3FDLFdBQVcsT0FBQWhkLE1BQUEsQ0FBTzZkLGVBQWUsQ0FBQ2MsU0FBUyxDQUFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQUs7TUFFL0gzYyxPQUFPLENBQUN0SixHQUFHLENBQUMsaURBQWlELENBQUM7SUFDaEUsQ0FBQyxNQUFNO01BQ0xxaUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUNBQW1DLENBQUMsQ0FBQ3FDLFdBQVcsT0FBQWhkLE1BQUEsQ0FBTzZkLGVBQWUsQ0FBQ2MsU0FBUyxDQUFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUU7TUFDcEg1RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDaUUsU0FBUyxHQUFHVCxhQUFhO01BQy9FekQsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQ29ELFNBQVMsQ0FBQ3JILEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOztNQUU1RTtNQUNBZ0UsUUFBUSxDQUFDQyxhQUFhLENBQUMsd0NBQXdDLENBQUMsQ0FBQ3FDLFdBQVcsT0FBQWhkLE1BQUEsQ0FBTzZkLGVBQWUsQ0FBQ2MsU0FBUyxDQUFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQUs7TUFFNUgzYyxPQUFPLENBQUN0SixHQUFHLENBQUMsOENBQThDLENBQUM7SUFDN0Q7O0lBRUE7SUFDQSxJQUFJLEVBQUV3bEIsZUFBZSxDQUFDVyxRQUFRLEdBQUcsQ0FBQyxJQUFJbEQsTUFBTSxHQUFHMkIsSUFBSSxDQUFDM0IsTUFBTSxDQUFDLEVBQUU7TUFBQSxJQUFBdUQscUJBQUE7TUFDM0QsQ0FBQUEscUJBQUEsR0FBQW5FLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDhDQUE4QyxDQUFDLGNBQUFrRSxxQkFBQSxlQUF0RUEscUJBQUEsQ0FBd0ViLE1BQU0sQ0FBQyxDQUFDO0lBQ2xGOztJQUVBO0lBQ0F4RCxPQUFPLENBQUNVLFdBQVcsQ0FBQzhCLFdBQVcsT0FBQWhkLE1BQUEsQ0FBTzZkLGVBQWUsQ0FBQ2MsU0FBUyxDQUFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUU7RUFDOUUsQ0FBQztFQUVEO0FBQ0Y7QUFDQTtFQUNFNUIsU0FBUyxFQUFFLFNBQUFBLFVBQVVsaUIsS0FBSyxFQUFFO0lBQzFCZ2dCLE9BQU8sQ0FBQ3NFLGNBQWMsR0FBRzFTLE1BQU0sQ0FBQzVSLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6Q2dnQixPQUFPLENBQUN1RSxpQkFBaUIsQ0FBQyxDQUFDOztJQUUzQjtJQUNBLElBQUlDLGFBQWEsR0FBR3pmLElBQUksQ0FBQ2lCLEtBQUssQ0FBQ2dhLE9BQU8sQ0FBQ3NFLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJOztJQUVwRTtJQUNBLElBQUluQixNQUFNLEdBQUduRCxPQUFPLENBQUNvRCxpQkFBaUIsQ0FBQ29CLGFBQWEsQ0FBQzs7SUFFckQ7SUFDQXhFLE9BQU8sQ0FBQ3lFLFlBQVksR0FBR3RCLE1BQU0sQ0FBQ1YsSUFBSTs7SUFFbEM7SUFDQXpDLE9BQU8sQ0FBQ2tELFdBQVcsQ0FBQ2xELE9BQU8sQ0FBQ3NFLGNBQWMsQ0FBQzs7SUFFM0M7SUFDQXRFLE9BQU8sQ0FBQzBFLGFBQWEsQ0FBQyxDQUFDO0VBQ3pCLENBQUM7RUFFRDtBQUNGO0FBQ0E7RUFDRUgsaUJBQWlCLEVBQUUsU0FBQUEsa0JBQUEsRUFBVztJQUM1QixJQUFJakMsS0FBSyxHQUFHdEMsT0FBTyxDQUFDVSxXQUFXO0lBQy9CLElBQUlpRSxPQUFPLEdBQUczRSxPQUFPLENBQUN1QixlQUFlLENBQUN2QixPQUFPLENBQUNzRSxjQUFjLENBQUM7SUFFN0RoQyxLQUFLLENBQUNFLFdBQVcsR0FBR21DLE9BQU87RUFDN0IsQ0FBQztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRUMsbUJBQW1CLEVBQUUsU0FBQUEsb0JBQUEsRUFBWTtJQUMvQjVFLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDbUQsU0FBUyxDQUFDckgsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN6QzhELE9BQU8sQ0FBQ0ssVUFBVSxDQUFDa0QsU0FBUyxDQUFDckgsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUMxQzhELE9BQU8sQ0FBQ00sY0FBYyxDQUFDaUQsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2pEeEQsT0FBTyxDQUFDTyxnQkFBZ0IsQ0FBQ2dELFNBQVMsQ0FBQ3JILEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDbEQsQ0FBQztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRXVILFlBQVksRUFBRSxTQUFBQSxhQUFBLEVBQVc7SUFDdkJ6RCxPQUFPLENBQUNLLFVBQVUsQ0FBQ2tELFNBQVMsQ0FBQ3JILEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDMUM4RCxPQUFPLENBQUNNLGNBQWMsQ0FBQ2lELFNBQVMsQ0FBQ3JILEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDOUM4RCxPQUFPLENBQUNPLGdCQUFnQixDQUFDZ0QsU0FBUyxDQUFDckgsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNoRDhELE9BQU8sQ0FBQ0ksU0FBUyxDQUFDbUQsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQzlDLENBQUM7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBQ0VrQixhQUFhLEVBQUUsU0FBQUEsY0FBQSxFQUFZO0lBQ3pCLElBQUk1RCxNQUFNLEdBQUdkLE9BQU8sQ0FBQ3NFLGNBQWM7SUFFbkMsSUFBSXhELE1BQU0sSUFBSWQsT0FBTyxDQUFDWSxVQUFVLEVBQUU7TUFDaEMsT0FBT1osT0FBTyxDQUFDNEUsbUJBQW1CLENBQUMsQ0FBQztJQUN0QztJQUVBLElBQUk5RCxNQUFNLElBQUksR0FBRyxFQUFFO01BQ2pCLE9BQU9kLE9BQU8sQ0FBQ3lELFlBQVksQ0FBQyxDQUFDO0lBQy9CO0lBRUEsSUFBSW9CLGVBQWUsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFFcEQsSUFBSUMsaUJBQWlCLEdBQUcsSUFBSUYsSUFBSSxDQUFDQyxZQUFZLENBQUMsT0FBTyxFQUFFO01BQ3JERSxLQUFLLEVBQUUsVUFBVTtNQUNqQkMsUUFBUSxFQUFFLEtBQUs7TUFDZkMscUJBQXFCLEVBQUU7SUFDekIsQ0FBQyxDQUFDO0lBRUYsSUFBSUMsWUFBWSxHQUFHcEYsT0FBTyxDQUFDeUUsWUFBWTtJQUV2QyxJQUFJVyxZQUFZLEtBQUtDLFNBQVMsRUFBRTtNQUM5QjtNQUNBRCxZQUFZLEdBQUdwRixPQUFPLENBQUNhLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakM7SUFFQSxJQUFJeUUsUUFBUSxHQUFHdEYsT0FBTyxDQUFDc0Qsb0JBQW9CLENBQ3pDOEIsWUFBWSxFQUNacEYsT0FBTyxDQUFDc0UsY0FDVixDQUFDO0lBRUQsSUFBSWlCLGdCQUFnQixHQUFHdkYsT0FBTyxDQUFDc0UsY0FBYyxHQUFHdEUsT0FBTyxDQUFDVyxVQUFVLElBQ2hFWCxPQUFPLENBQUNzRSxjQUFjLEdBQUd0RSxPQUFPLENBQUNhLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsTUFBTTtJQUVsRCxJQUFJaGtCLFFBQVEsR0FBR3hDLGdGQUFrQix3YkFpQmpDLENBQUM7SUFFRDBsQixPQUFPLENBQUNRLFdBQVcsQ0FBQzRELFNBQVMsR0FBR1ksaUJBQWlCLENBQUNwRCxNQUFNLENBQ3REMEQsUUFBUSxDQUFDbkIsU0FDWCxDQUFDO0lBRURuRSxPQUFPLENBQUNTLGVBQWUsQ0FBQzJELFNBQVMsR0FBR3RuQixRQUFRLENBQUM7TUFDM0N5b0IsZ0JBQWdCLEVBQUVBLGdCQUFnQjtNQUNsQzNCLFVBQVUsRUFBRWlCLGVBQWUsQ0FBQ2pELE1BQU0sQ0FBQ3dELFlBQVksQ0FBQ3RFLE1BQU0sQ0FBQztNQUN2RCtDLFNBQVMsRUFBRW1CLGlCQUFpQixDQUFDcEQsTUFBTSxDQUFDd0QsWUFBWSxDQUFDckUsS0FBSyxDQUFDO01BQ3ZEZ0QsV0FBVyxFQUFFdUIsUUFBUSxDQUFDdEIsUUFBUSxHQUFHLENBQUM7TUFDbENBLFFBQVEsRUFBRWEsZUFBZSxDQUFDakQsTUFBTSxDQUFDMEQsUUFBUSxDQUFDdEIsUUFBUSxDQUFDO01BQ25EQyxZQUFZLEVBQUVlLGlCQUFpQixDQUFDcEQsTUFBTSxDQUFDMEQsUUFBUSxDQUFDckIsWUFBWSxDQUFDO01BQzdEQyxpQkFBaUIsRUFBRWMsaUJBQWlCLENBQUNwRCxNQUFNLENBQUN3RCxZQUFZLENBQUNwRSxhQUFhO0lBQ3hFLENBQUMsQ0FBQztJQUVGaEIsT0FBTyxDQUFDSSxTQUFTLENBQUNtRCxTQUFTLENBQUNySCxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3pDOEQsT0FBTyxDQUFDTSxjQUFjLENBQUNpRCxTQUFTLENBQUNySCxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQzlDOEQsT0FBTyxDQUFDSyxVQUFVLENBQUNrRCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDN0N4RCxPQUFPLENBQUNPLGdCQUFnQixDQUFDZ0QsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ3JELENBQUM7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0VKLGlCQUFpQixFQUFFLFNBQUFBLGtCQUFVdEMsTUFBTSxFQUFFO0lBQ25DLElBQUkwRSxRQUFROztJQUVaO0lBQ0F4RixPQUFPLENBQUNhLEtBQUssQ0FBQzFmLE9BQU8sQ0FBQyxVQUFVc2hCLElBQUksRUFBRTtNQUNwQyxJQUFJVSxNQUFNLEdBQUduRCxPQUFPLENBQUNzRCxvQkFBb0IsQ0FBQ2IsSUFBSSxFQUFFM0IsTUFBTSxDQUFDOztNQUV2RDtNQUNBO01BQ0EsSUFBSTBFLFFBQVEsSUFBSUgsU0FBUyxJQUFJbEMsTUFBTSxDQUFDZ0IsU0FBUyxJQUFJcUIsUUFBUSxDQUFDckIsU0FBUyxFQUFFO1FBQ25FcUIsUUFBUSxHQUFHckMsTUFBTTtNQUNuQjtJQUNGLENBQUMsQ0FBQztJQUVGaGMsT0FBTyxDQUFDdEosR0FBRyxDQUFDLGFBQWEsRUFBRTJuQixRQUFRLENBQUM7SUFDcEM7SUFDQSxPQUFPQSxRQUFRO0VBQ2pCLENBQUM7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRWxDLG9CQUFvQixFQUFFLFNBQUFBLHFCQUFVYixJQUFJLEVBQUUzQixNQUFNLEVBQUU7SUFDNUMsSUFBSXFELFNBQVMsR0FBRzFCLElBQUksQ0FBQzFCLEtBQUs7TUFDeEJpRCxRQUFRLEdBQUcsQ0FBQztNQUNaQyxZQUFZLEdBQUcsQ0FBQzs7SUFFbEI7SUFDQSxJQUFJbkQsTUFBTSxHQUFHMkIsSUFBSSxDQUFDM0IsTUFBTSxFQUFFO01BQ3hCa0QsUUFBUSxHQUFHamYsSUFBSSxDQUFDaUIsS0FBSyxDQUFDLENBQUM4YSxNQUFNLEdBQUcyQixJQUFJLENBQUMzQixNQUFNLElBQUksSUFBSSxDQUFDO01BQ3BEbUQsWUFBWSxHQUFHRCxRQUFRLEdBQUd2QixJQUFJLENBQUN6QixhQUFhO01BRTVDbUQsU0FBUyxJQUFJRixZQUFZO0lBQzNCO0lBRUEsT0FBTztNQUNMeEIsSUFBSSxFQUFFQSxJQUFJO01BQ1YwQixTQUFTLEVBQUVBLFNBQVM7TUFDcEJILFFBQVEsRUFBRUEsUUFBUSxHQUFHLElBQUk7TUFDekJDLFlBQVksRUFBRUE7SUFDaEIsQ0FBQztFQUNIO0FBQ0YsQ0FBQztBQUVEamYsTUFBTSxDQUFDb2QsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0RDtFQUNBLElBQUlwQyxPQUFPLENBQUNDLE1BQU0sRUFBRTtJQUNsQkQsT0FBTyxDQUFDa0IsSUFBSSxDQUFDLENBQUM7RUFDaEI7QUFDRixDQUFDLENBQUM7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWhCLFFBQVEsQ0FBQ2tDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDeEQsSUFBTXFELE1BQU0sR0FBR3ZGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBQzVELElBQU11RixlQUFlLEdBQUd4RixRQUFRLENBQUNDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztFQUMvRSxJQUFNd0YsY0FBYyxHQUFHekYsUUFBUSxDQUFDQyxhQUFhLENBQUMsOEJBQThCLENBQUM7RUFDN0UsSUFBTW5PLEtBQUssR0FBR2tPLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBRXRELElBQUksQ0FBQ3NGLE1BQU0sSUFBSSxDQUFDRSxjQUFjLElBQUksQ0FBQzNULEtBQUssRUFBRTtJQUN4QzdLLE9BQU8sQ0FBQ3NFLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztJQUM1QztFQUNGO0VBRUEsSUFBSW1hLHlCQUF5QixHQUFHLEtBQUssQ0FBQyxDQUFDOztFQUV2QyxTQUFTQyxzQkFBc0JBLENBQUNDLFNBQVMsRUFBRTtJQUN6QyxJQUFJQSxTQUFTLElBQUksQ0FBQ0YseUJBQXlCLEVBQUU7TUFDM0NELGNBQWMsQ0FBQ3BDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUN6Q29DLHlCQUF5QixHQUFHLElBQUk7SUFDbEM7SUFDQUQsY0FBYyxDQUFDcEMsU0FBUyxDQUFDd0MsTUFBTSxDQUFDLFNBQVMsRUFBRUQsU0FBUyxDQUFDO0lBQ3JESCxjQUFjLENBQUNwQyxTQUFTLENBQUN3QyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUNELFNBQVMsQ0FBQztFQUN6RDtFQUVBLFNBQVNFLFlBQVlBLENBQUEsRUFBRztJQUN0QixJQUFNQyxhQUFhLEdBQUdQLGVBQWUsQ0FBQ1EscUJBQXFCLENBQUMsQ0FBQztJQUM3RCxJQUFNQyxTQUFTLEdBQUduVSxLQUFLLENBQUNrVSxxQkFBcUIsQ0FBQyxDQUFDO0lBRS9DLElBQU1FLHdCQUF3QixHQUFHSCxhQUFhLENBQUNJLE1BQU0sSUFBSSxDQUFDLElBQUlGLFNBQVMsQ0FBQ0UsTUFBTSxHQUFHLEdBQUc7SUFDcEZSLHNCQUFzQixDQUFDTyx3QkFBd0IsQ0FBQztFQUNsRDtFQUVBcGhCLE1BQU0sQ0FBQ29kLGdCQUFnQixDQUFDLFFBQVEsRUFBRTRELFlBQVksQ0FBQzs7RUFFL0M7RUFDQUEsWUFBWSxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3pnQkY7O0FBRTJEO0FBRTNELElBQUloRyxPQUFPLEdBQUc7RUFDWjtFQUNBc0csSUFBSSxFQUFFcEcsUUFBUSxDQUFDQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7RUFDeERvRyxXQUFXLEVBQUVyRyxRQUFRLENBQUNDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQztFQUNoRUMsU0FBUyxFQUFFRixRQUFRLENBQUNDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQztFQUM5REUsVUFBVSxFQUFFSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztFQUNqRUcsY0FBYyxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQ0FBaUMsQ0FBQztFQUN6RXFHLFdBQVcsRUFBRXRHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0VBQzNESSxnQkFBZ0IsRUFBRUwsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0NBQWtDLENBQUM7RUFFNUVLLFdBQVcsRUFBRU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsNEJBQTRCLENBQUM7RUFDakVNLGVBQWUsRUFBRVAsUUFBUSxDQUFDQyxhQUFhLENBQUMsK0JBQStCLENBQUM7RUFFeEU7RUFDQXNHLFFBQVEsRUFBRSxFQUFFLENBQUNoaEIsS0FBSyxDQUFDN0ssSUFBSSxDQUFDc2xCLFFBQVEsQ0FBQ2lDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7RUFDeEV1RSxhQUFhLEVBQUV4RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztFQUU1RHdHLGFBQWEsRUFBRSxFQUFFLENBQUNsaEIsS0FBSyxDQUFDN0ssSUFBSSxDQUMxQnNsQixRQUFRLENBQUNpQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FDakQsQ0FBQztFQUVEO0VBQ0F2QixVQUFVLEVBQUUsT0FBTztFQUFFO0VBQ3JCQyxLQUFLLEVBQUUsRUFBRTtFQUNUK0YsTUFBTSxFQUFFLEVBQUU7RUFFVjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBQ0UxRixJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFZO0lBQ2hCO0lBQ0FsQixPQUFPLENBQUM2RyxVQUFVLENBQUMsQ0FBQztJQUNwQjdHLE9BQU8sQ0FBQzhHLFdBQVcsQ0FBQyxDQUFDOztJQUVyQjtJQUNBOUcsT0FBTyxDQUFDc0csSUFBSSxDQUFDbEUsZ0JBQWdCLENBQUMsUUFBUSxFQUFFcEMsT0FBTyxDQUFDK0csbUJBQW1CLENBQUM7SUFFcEUvRyxPQUFPLENBQUN5RyxRQUFRLENBQUN0bEIsT0FBTyxDQUFDLFVBQVU2bEIsR0FBRyxFQUFFO01BQ3RDQSxHQUFHLENBQUM1RSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVwQyxPQUFPLENBQUNpSCxVQUFVLENBQUM7SUFDcEQsQ0FBQyxDQUFDO0lBRUZqSCxPQUFPLENBQUMyRyxhQUFhLENBQUN4bEIsT0FBTyxDQUFDLFVBQVU2bEIsR0FBRyxFQUFFO01BQzNDQSxHQUFHLENBQUM1RSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVwQyxPQUFPLENBQUNrSCxXQUFXLENBQUM7SUFDckQsQ0FBQyxDQUFDO0lBRUZsSCxPQUFPLENBQUN3RyxXQUFXLENBQUNwRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVTNuQixDQUFDLEVBQUU7TUFDekRBLENBQUMsQ0FBQzBzQixjQUFjLENBQUMsQ0FBQztNQUVsQm5ILE9BQU8sQ0FBQ29ILEtBQUssQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQztFQUNKLENBQUM7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBQ0VILFVBQVUsRUFBRSxTQUFBQSxXQUFVeHNCLENBQUMsRUFBRTtJQUN2QixJQUFJLENBQUNBLENBQUMsQ0FBQzhuQixNQUFNLENBQUM4RSxPQUFPLEVBQUU7TUFDckI7SUFDRjtJQUVBLElBQUkzc0IsRUFBRSxHQUFHRCxDQUFDLENBQUM4bkIsTUFBTSxDQUFDdmlCLEtBQUs7TUFDckJ5aUIsSUFBSSxHQUFHekMsT0FBTyxDQUFDYSxLQUFLLENBQUN5RyxJQUFJLENBQUMsVUFBVTdFLElBQUksRUFBRTtRQUN4QyxPQUFPQSxJQUFJLENBQUMvbkIsRUFBRSxLQUFLQSxFQUFFO01BQ3ZCLENBQUMsQ0FBQztJQUVKc2xCLE9BQU8sQ0FBQ3VHLFdBQVcsQ0FBQ3ZtQixLQUFLLEdBQUd5aUIsSUFBSSxDQUFDM0IsTUFBTTs7SUFFdkM7SUFDQWQsT0FBTyxDQUFDdUgsYUFBYSxDQUFDLENBQUM7SUFFdkI5RSxJQUFJLENBQUN1RSxHQUFHLENBQUN6RCxTQUFTLENBQUNySCxHQUFHLENBQUMsdUJBQXVCLENBQUM7SUFDL0N1RyxJQUFJLENBQUM3TyxLQUFLLENBQUN5VCxPQUFPLEdBQUcsSUFBSTs7SUFFekI7SUFDQXJILE9BQU8sQ0FBQzBFLGFBQWEsQ0FBQyxDQUFDO0VBQ3pCLENBQUM7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBQ0V3QyxXQUFXLEVBQUUsU0FBQUEsWUFBVXpzQixDQUFDLEVBQUU7SUFDeEIsSUFBSStzQixPQUFPLEdBQUcvc0IsQ0FBQyxDQUFDOG5CLE1BQU0sQ0FBQ3ZpQixLQUFLO0lBRTVCLElBQUl5bkIsS0FBSyxHQUFHekgsT0FBTyxDQUFDNEcsTUFBTSxDQUFDVSxJQUFJLENBQUMsVUFBVUcsS0FBSyxFQUFFO01BQy9DLE9BQU9BLEtBQUssQ0FBQy9zQixFQUFFLEtBQUs4c0IsT0FBTztJQUM3QixDQUFDLENBQUM7SUFFRixJQUFJQyxLQUFLLENBQUNDLFFBQVEsRUFBRTtNQUNsQjtJQUNGO0lBRUEsSUFBSUwsT0FBTyxHQUFHNXNCLENBQUMsQ0FBQzhuQixNQUFNLENBQUM4RSxPQUFPOztJQUU5QjtJQUNBckgsT0FBTyxDQUFDMkgsc0JBQXNCLENBQUNGLEtBQUssQ0FBQ0csS0FBSyxDQUFDO0lBRTNDLElBQUlQLE9BQU8sRUFBRTtNQUNYSSxLQUFLLENBQUNULEdBQUcsQ0FBQ3pELFNBQVMsQ0FBQ3JILEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztNQUNoRHVMLEtBQUssQ0FBQzdULEtBQUssQ0FBQ3lULE9BQU8sR0FBRyxJQUFJO0lBQzVCO0lBRUFySCxPQUFPLENBQUMwRSxhQUFhLENBQUMsQ0FBQztFQUN6QixDQUFDO0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUNFbUMsVUFBVSxFQUFFLFNBQUFBLFdBQUEsRUFBWTtJQUN0QjtJQUNBN0csT0FBTyxDQUFDYSxLQUFLLEdBQUcsRUFBRTs7SUFFbEI7SUFDQWIsT0FBTyxDQUFDeUcsUUFBUSxDQUFDdGxCLE9BQU8sQ0FBQyxVQUFVNmxCLEdBQUcsRUFBRTtNQUN0Q2hILE9BQU8sQ0FBQ2EsS0FBSyxDQUFDMWUsSUFBSSxDQUFDO1FBQ2pCNmtCLEdBQUcsRUFBRUEsR0FBRztRQUNScFQsS0FBSyxFQUFFb1QsR0FBRyxDQUFDN0csYUFBYSxDQUFDLHNCQUFzQixDQUFDO1FBQ2hEemxCLEVBQUUsRUFBRXNzQixHQUFHLENBQUNhLFlBQVksQ0FBQyxjQUFjLENBQUM7UUFDcEMvRyxNQUFNLEVBQUU1WixRQUFRLENBQUM4ZixHQUFHLENBQUNhLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQzlHLEtBQUssRUFBRStHLFVBQVUsQ0FBQ2QsR0FBRyxDQUFDYSxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQ3RyxhQUFhLEVBQUU4RyxVQUFVLENBQUNkLEdBQUcsQ0FBQ2EsWUFBWSxDQUFDLG9CQUFvQixDQUFDO01BQ2xFLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKLENBQUM7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBQ0VmLFdBQVcsRUFBRSxTQUFBQSxZQUFBLEVBQVk7SUFDdkI5RyxPQUFPLENBQUM0RyxNQUFNLEdBQUcsRUFBRTtJQUVuQjVHLE9BQU8sQ0FBQzJHLGFBQWEsQ0FBQ3hsQixPQUFPLENBQUMsVUFBVTZsQixHQUFHLEVBQUU7TUFDM0NoSCxPQUFPLENBQUM0RyxNQUFNLENBQUN6a0IsSUFBSSxDQUFDO1FBQ2xCNmtCLEdBQUcsRUFBRUEsR0FBRztRQUNScFQsS0FBSyxFQUFFb1QsR0FBRyxDQUFDN0csYUFBYSxDQUFDLHNCQUFzQixDQUFDO1FBQ2hEemxCLEVBQUUsRUFBRXNzQixHQUFHLENBQUNhLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDL0JubUIsSUFBSSxFQUFFc2xCLEdBQUcsQ0FBQ2EsWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUNuQ0QsS0FBSyxFQUFFWixHQUFHLENBQUNhLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDckM5RyxLQUFLLEVBQUVpRyxHQUFHLENBQUNhLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDckNFLFFBQVEsRUFBRWYsR0FBRyxDQUFDekQsU0FBUyxDQUFDeUUsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1FBQ3pETixRQUFRLEVBQUVWLEdBQUcsQ0FBQ3pELFNBQVMsQ0FBQ3lFLFFBQVEsQ0FBQyx1QkFBdUI7TUFDMUQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFakIsbUJBQW1CLEVBQUUsU0FBQUEsb0JBQVV0c0IsQ0FBQyxFQUFFO0lBQ2hDQSxDQUFDLENBQUMwc0IsY0FBYyxDQUFDLENBQUM7O0lBRWxCO0lBQ0EsSUFBSXJHLE1BQU0sR0FBRzVaLFFBQVEsQ0FBQzhZLE9BQU8sQ0FBQ3VHLFdBQVcsQ0FBQ3ZtQixLQUFLLENBQUNwQixPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUV2RTtJQUNBLElBQUksQ0FBQ2tpQixNQUFNLEVBQUU7TUFDWCxPQUFPZCxPQUFPLENBQUNvSCxLQUFLLENBQUMsQ0FBQztJQUN4Qjs7SUFFQTtJQUNBcEgsT0FBTyxDQUFDdUcsV0FBVyxDQUFDdm1CLEtBQUssR0FBRzhnQixNQUFNO0lBRWxDLElBQUlBLE1BQU0sSUFBSWQsT0FBTyxDQUFDWSxVQUFVLEVBQUU7TUFDaEMsT0FBT1osT0FBTyxDQUFDNEUsbUJBQW1CLENBQUMsQ0FBQztJQUN0Qzs7SUFFQTtJQUNBLElBQUlKLGFBQWEsR0FBR3pmLElBQUksQ0FBQ2lCLEtBQUssQ0FBQzhhLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJOztJQUVwRDtJQUNBLElBQUlxQyxNQUFNLEdBQUduRCxPQUFPLENBQUNvRCxpQkFBaUIsQ0FBQ29CLGFBQWEsQ0FBQzs7SUFFckQ7SUFDQXhFLE9BQU8sQ0FBQ3VILGFBQWEsQ0FBQyxDQUFDO0lBRXZCcEUsTUFBTSxDQUFDVixJQUFJLENBQUN1RSxHQUFHLENBQUN6RCxTQUFTLENBQUNySCxHQUFHLENBQUMsdUJBQXVCLENBQUM7SUFDdERpSCxNQUFNLENBQUNWLElBQUksQ0FBQzdPLEtBQUssQ0FBQ3lULE9BQU8sR0FBRyxJQUFJOztJQUVoQztJQUNBckgsT0FBTyxDQUFDMEUsYUFBYSxDQUFDLENBQUM7RUFDekIsQ0FBQztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRUUsbUJBQW1CLEVBQUUsU0FBQUEsb0JBQUEsRUFBWTtJQUMvQjVFLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDbUQsU0FBUyxDQUFDckgsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN6QzhELE9BQU8sQ0FBQ0ssVUFBVSxDQUFDa0QsU0FBUyxDQUFDckgsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUMxQzhELE9BQU8sQ0FBQ00sY0FBYyxDQUFDaUQsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2pEeEQsT0FBTyxDQUFDTyxnQkFBZ0IsQ0FBQ2dELFNBQVMsQ0FBQ3JILEdBQUcsQ0FBQyxRQUFRLENBQUM7O0lBRWhEO0lBQ0E4RCxPQUFPLENBQUN1SCxhQUFhLENBQUMsQ0FBQztFQUN6QixDQUFDO0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUNFN0MsYUFBYSxFQUFFLFNBQUFBLGNBQUEsRUFBWTtJQUN6QixJQUFJNUQsTUFBTSxHQUFHNVosUUFBUSxDQUFDOFksT0FBTyxDQUFDdUcsV0FBVyxDQUFDdm1CLEtBQUssQ0FBQ3BCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFdkUsSUFBSWtpQixNQUFNLElBQUlkLE9BQU8sQ0FBQ1ksVUFBVSxFQUFFO01BQ2hDLE9BQU9aLE9BQU8sQ0FBQzRFLG1CQUFtQixDQUFDLENBQUM7SUFDdEM7SUFFQSxJQUFJQyxlQUFlLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFZLENBQUMsT0FBTyxDQUFDO0lBRXBELElBQUlDLGlCQUFpQixHQUFHLElBQUlGLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE9BQU8sRUFBRTtNQUNyREUsS0FBSyxFQUFFLFVBQVU7TUFDakJDLFFBQVEsRUFBRSxLQUFLO01BQ2ZDLHFCQUFxQixFQUFFO0lBQ3pCLENBQUMsQ0FBQztJQUVGLElBQUlDLFlBQVksR0FBR3BGLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDeUcsSUFBSSxDQUFDLFVBQVU3RSxJQUFJLEVBQUU7TUFDcEQsT0FBT0EsSUFBSSxDQUFDN08sS0FBSyxDQUFDeVQsT0FBTztJQUMzQixDQUFDLENBQUM7SUFFRixJQUFJakMsWUFBWSxLQUFLQyxTQUFTLEVBQUU7TUFDOUI7TUFDQUQsWUFBWSxHQUFHcEYsT0FBTyxDQUFDYSxLQUFLLENBQUMsQ0FBQyxDQUFDO01BRS9CdUUsWUFBWSxDQUFDNEIsR0FBRyxDQUFDekQsU0FBUyxDQUFDckgsR0FBRyxDQUFDLHVCQUF1QixDQUFDO01BQ3ZEa0osWUFBWSxDQUFDeFIsS0FBSyxDQUFDeVQsT0FBTyxHQUFHLElBQUk7SUFDbkM7SUFFQSxJQUFJWSxjQUFjLEdBQUcsRUFBRTtNQUNyQkMsV0FBVyxHQUFHLENBQUM7SUFFakJsSSxPQUFPLENBQUM0RyxNQUFNLENBQUN6bEIsT0FBTyxDQUFDLFVBQVVzbUIsS0FBSyxFQUFFO01BQ3RDLElBQUlBLEtBQUssQ0FBQzdULEtBQUssSUFBSTZULEtBQUssQ0FBQzdULEtBQUssQ0FBQ3lULE9BQU8sRUFBRTtRQUN0Q1ksY0FBYyxDQUFDOWxCLElBQUksQ0FBQztVQUNsQlQsSUFBSSxFQUFFK2xCLEtBQUssQ0FBQy9sQixJQUFJO1VBQ2hCcWYsS0FBSyxFQUNIMEcsS0FBSyxDQUFDMUcsS0FBSyxJQUFJLENBQUMsR0FDWixVQUFVLEdBQ1ZpRSxpQkFBaUIsQ0FBQ3BELE1BQU0sQ0FBQzZGLEtBQUssQ0FBQzFHLEtBQUs7UUFDNUMsQ0FBQyxDQUFDO1FBQ0ZtSCxXQUFXLElBQUloaEIsUUFBUSxDQUFDdWdCLEtBQUssQ0FBQzFHLEtBQUssQ0FBQztNQUN0QztJQUNGLENBQUMsQ0FBQztJQUVGLElBQUl1RSxRQUFRLEdBQUd0RixPQUFPLENBQUNzRCxvQkFBb0IsQ0FDekM4QixZQUFZLEVBQ1pwRixPQUFPLENBQUN1RyxXQUFXLENBQUN2bUIsS0FDdEIsQ0FBQztJQUVELElBQUlsRCxRQUFRLEdBQUd4QyxnRkFBa0IsQ0FDL0Isb1RBQ0YsQ0FBQztJQUVEMGxCLE9BQU8sQ0FBQ1EsV0FBVyxDQUFDNEQsU0FBUyxHQUFHWSxpQkFBaUIsQ0FBQ3BELE1BQU0sQ0FDdEQwRCxRQUFRLENBQUNuQixTQUFTLEdBQUcrRCxXQUN2QixDQUFDO0lBRURsSSxPQUFPLENBQUNTLGVBQWUsQ0FBQzJELFNBQVMsR0FBR3RuQixRQUFRLENBQUM7TUFDM0M4bUIsVUFBVSxFQUFFaUIsZUFBZSxDQUFDakQsTUFBTSxDQUFDd0QsWUFBWSxDQUFDdEUsTUFBTSxDQUFDO01BQ3ZEK0MsU0FBUyxFQUFFbUIsaUJBQWlCLENBQUNwRCxNQUFNLENBQUN3RCxZQUFZLENBQUNyRSxLQUFLLENBQUM7TUFDdkRnRCxXQUFXLEVBQUV1QixRQUFRLENBQUN0QixRQUFRLEdBQUcsQ0FBQztNQUNsQ0EsUUFBUSxFQUFFYSxlQUFlLENBQUNqRCxNQUFNLENBQUMwRCxRQUFRLENBQUN0QixRQUFRLENBQUM7TUFDbkRDLFlBQVksRUFBRWUsaUJBQWlCLENBQUNwRCxNQUFNLENBQUMwRCxRQUFRLENBQUNyQixZQUFZLENBQUM7TUFDN0RDLGlCQUFpQixFQUFFYyxpQkFBaUIsQ0FBQ3BELE1BQU0sQ0FBQ3dELFlBQVksQ0FBQ3BFLGFBQWEsQ0FBQztNQUN2RTRGLE1BQU0sRUFBRXFCO0lBQ1YsQ0FBQyxDQUFDO0lBRUZqSSxPQUFPLENBQUNJLFNBQVMsQ0FBQ21ELFNBQVMsQ0FBQ3JILEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDekM4RCxPQUFPLENBQUNNLGNBQWMsQ0FBQ2lELFNBQVMsQ0FBQ3JILEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDOUM4RCxPQUFPLENBQUNLLFVBQVUsQ0FBQ2tELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUM3Q3hELE9BQU8sQ0FBQ08sZ0JBQWdCLENBQUNnRCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDckQsQ0FBQztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRTRELEtBQUssRUFBRSxTQUFBQSxNQUFBLEVBQVk7SUFDakI7SUFDQXBILE9BQU8sQ0FBQ3VHLFdBQVcsQ0FBQ3ZtQixLQUFLLEdBQUcsRUFBRTs7SUFFOUI7SUFDQWdnQixPQUFPLENBQUN1SCxhQUFhLENBQUMsQ0FBQzs7SUFFdkI7SUFDQXZILE9BQU8sQ0FBQ21JLGNBQWMsQ0FBQyxDQUFDOztJQUV4QjtJQUNBbkksT0FBTyxDQUFDSSxTQUFTLENBQUNtRCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDNUN4RCxPQUFPLENBQUNNLGNBQWMsQ0FBQ2lELFNBQVMsQ0FBQ3JILEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDOUM4RCxPQUFPLENBQUNLLFVBQVUsQ0FBQ2tELFNBQVMsQ0FBQ3JILEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDMUM4RCxPQUFPLENBQUNPLGdCQUFnQixDQUFDZ0QsU0FBUyxDQUFDckgsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNsRCxDQUFDO0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUNFcUwsYUFBYSxFQUFFLFNBQUFBLGNBQUEsRUFBWTtJQUN6QnZILE9BQU8sQ0FBQ2EsS0FBSyxDQUFDMWYsT0FBTyxDQUFDLFVBQVVzaEIsSUFBSSxFQUFFO01BQ3BDQSxJQUFJLENBQUN1RSxHQUFHLENBQUN6RCxTQUFTLENBQUNDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztNQUNsRGYsSUFBSSxDQUFDN08sS0FBSyxDQUFDeVQsT0FBTyxHQUFHLEtBQUs7SUFDNUIsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRWMsY0FBYyxFQUFFLFNBQUFBLGVBQUEsRUFBWTtJQUMxQm5JLE9BQU8sQ0FBQzRHLE1BQU0sQ0FBQ3psQixPQUFPLENBQUMsVUFBVXNtQixLQUFLLEVBQUU7TUFDdEMsSUFBSUEsS0FBSyxDQUFDTSxRQUFRLEVBQUU7UUFDbEJOLEtBQUssQ0FBQ1QsR0FBRyxDQUFDekQsU0FBUyxDQUFDckgsR0FBRyxDQUFDLHVCQUF1QixDQUFDO01BQ2xELENBQUMsTUFBTTtRQUNMdUwsS0FBSyxDQUFDVCxHQUFHLENBQUN6RCxTQUFTLENBQUNDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztNQUNyRDtNQUVBLElBQUlpRSxLQUFLLENBQUM3VCxLQUFLLEVBQUU7UUFDZjZULEtBQUssQ0FBQzdULEtBQUssQ0FBQ3lULE9BQU8sR0FBR0ksS0FBSyxDQUFDTSxRQUFRO01BQ3RDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRUosc0JBQXNCLEVBQUUsU0FBQUEsdUJBQVVDLEtBQUssRUFBRTtJQUN2QyxJQUFJaEIsTUFBTSxHQUFHNUcsT0FBTyxDQUFDNEcsTUFBTSxDQUFDd0IsTUFBTSxDQUFDLFVBQVVodEIsQ0FBQyxFQUFFO01BQzlDLE9BQU9BLENBQUMsQ0FBQ3dzQixLQUFLLElBQUlBLEtBQUs7SUFDekIsQ0FBQyxDQUFDO0lBRUZoQixNQUFNLENBQUN6bEIsT0FBTyxDQUFDLFVBQVVzbUIsS0FBSyxFQUFFO01BQzlCQSxLQUFLLENBQUNULEdBQUcsQ0FBQ3pELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLHVCQUF1QixDQUFDO01BQ25EaUUsS0FBSyxDQUFDN1QsS0FBSyxDQUFDeVQsT0FBTyxHQUFHLEtBQUs7SUFDN0IsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRWpFLGlCQUFpQixFQUFFLFNBQUFBLGtCQUFVdEMsTUFBTSxFQUFFO0lBQ25DLElBQUkwRSxRQUFROztJQUVaO0lBQ0F4RixPQUFPLENBQUNhLEtBQUssQ0FBQzFmLE9BQU8sQ0FBQyxVQUFVc2hCLElBQUksRUFBRTtNQUNwQyxJQUFJVSxNQUFNLEdBQUduRCxPQUFPLENBQUNzRCxvQkFBb0IsQ0FBQ2IsSUFBSSxFQUFFM0IsTUFBTSxDQUFDOztNQUV2RDtNQUNBO01BQ0EsSUFBSTBFLFFBQVEsSUFBSUgsU0FBUyxJQUFJbEMsTUFBTSxDQUFDZ0IsU0FBUyxJQUFJcUIsUUFBUSxDQUFDckIsU0FBUyxFQUFFO1FBQ25FcUIsUUFBUSxHQUFHckMsTUFBTTtNQUNuQjtJQUNGLENBQUMsQ0FBQzs7SUFFRjtJQUNBLE9BQU9xQyxRQUFRO0VBQ2pCLENBQUM7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRWxDLG9CQUFvQixFQUFFLFNBQUFBLHFCQUFVYixJQUFJLEVBQUUzQixNQUFNLEVBQUU7SUFDNUMsSUFBSXFELFNBQVMsR0FBRzFCLElBQUksQ0FBQzFCLEtBQUs7TUFDeEJpRCxRQUFRLEdBQUcsQ0FBQztNQUNaQyxZQUFZLEdBQUcsQ0FBQzs7SUFFbEI7SUFDQSxJQUFJbkQsTUFBTSxHQUFHMkIsSUFBSSxDQUFDM0IsTUFBTSxFQUFFO01BQ3hCa0QsUUFBUSxHQUFHamYsSUFBSSxDQUFDaUIsS0FBSyxDQUFDLENBQUM4YSxNQUFNLEdBQUcyQixJQUFJLENBQUMzQixNQUFNLElBQUksSUFBSSxDQUFDO01BQ3BEbUQsWUFBWSxHQUFHRCxRQUFRLEdBQUd2QixJQUFJLENBQUN6QixhQUFhO01BRTVDbUQsU0FBUyxJQUFJRixZQUFZO0lBQzNCO0lBRUEsT0FBTztNQUNMeEIsSUFBSSxFQUFFQSxJQUFJO01BQ1YwQixTQUFTLEVBQUVBLFNBQVM7TUFDcEJILFFBQVEsRUFBRUEsUUFBUSxHQUFHLElBQUk7TUFDekJDLFlBQVksRUFBRUE7SUFDaEIsQ0FBQztFQUNIO0FBQ0YsQ0FBQztBQUVEamYsTUFBTSxDQUFDb2QsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0RDtFQUNBLElBQUlwQyxPQUFPLENBQUNzRyxJQUFJLEVBQUU7SUFDaEJ0RyxPQUFPLENBQUNrQixJQUFJLENBQUMsQ0FBQztFQUNoQjtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcmFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FhO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUN0QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBOEM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDLGtDQUFrQyx5Q0FBeUM7QUFDM0UsOEJBQThCLHFDQUFxQztBQUNuRSwrQkFBK0Isc0NBQXNDO0FBQ3JFLGlCQUFpQix1QkFBdUI7QUFDeEMsbUJBQW1CLHlCQUF5QjtBQUM1QyxxQkFBcUIsMkJBQTJCO0FBQ2hELGdCQUFnQix1QkFBdUI7QUFDdkMsbUJBQW1CLDBCQUEwQjtBQUM3Qyw2QkFBNkIsb0NBQW9DO0FBQ2pFLGlCQUFpQix1QkFBdUI7QUFDeEMsdUJBQXVCLDhCQUE4QjtBQUNyRCxrQkFBa0IseUJBQXlCO0FBQzNDLGlCQUFpQix3QkFBd0I7QUFDekMsbUJBQW1CLDBCQUEwQjtBQUM3QyxxQkFBcUIsMkJBQTJCO0FBQ2hELHNCQUFzQiw2QkFBNkI7QUFDbkQsa0JBQWtCLHlCQUF5QjtBQUMzQyxvQkFBb0IsMkJBQTJCO0FBQy9DLDJCQUEyQixpQ0FBaUM7QUFDNUQsMkJBQTJCLGtDQUFrQztBQUM3RCxxQkFBcUIsMkJBQTJCO0FBQ2hELHNCQUFzQiw0QkFBNEI7QUFDbEQsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsZ0JBQWdCO0FBQzVGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0JBQStCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0NBQWdDO0FBQy9DO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdDQUF3QztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQztBQUNWO0FBQ3RCLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7O1VDenhFRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBRUQ7QUFDTztBQUV6Qy9aLE9BQU8sQ0FBQ3RKLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9oYW5kbGViYXJzLm1pbi5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi93ZWIvc3JjL2phdmFzY3JpcHRzL3ByaWNpbmctc2xpZGVyLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3dlYi9zcmMvamF2YXNjcmlwdHMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi93ZWIvc3JjL3N0eWxlc2hlZXRzL3N0eWxlcy5zY3NzP2Q0ZDMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLm1qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vd2ViL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiohXG5cbiBAbGljZW5zZVxuIGhhbmRsZWJhcnMgdjQuNy44XG5cbkNvcHlyaWdodCAoQykgMjAxMS0yMDE5IGJ5IFllaHVkYSBLYXR6XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cbiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWIoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGIpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuSGFuZGxlYmFycz1iKCk6YS5IYW5kbGViYXJzPWIoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGQpe2lmKGNbZF0pcmV0dXJuIGNbZF0uZXhwb3J0czt2YXIgZT1jW2RdPXtleHBvcnRzOnt9LGlkOmQsbG9hZGVkOiExfTtyZXR1cm4gYVtkXS5jYWxsKGUuZXhwb3J0cyxlLGUuZXhwb3J0cyxiKSxlLmxvYWRlZD0hMCxlLmV4cG9ydHN9dmFyIGM9e307cmV0dXJuIGIubT1hLGIuYz1jLGIucD1cIlwiLGIoMCl9KFtmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZCgpe3ZhciBhPXIoKTtyZXR1cm4gYS5jb21waWxlPWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGsuY29tcGlsZShiLGMsYSl9LGEucHJlY29tcGlsZT1mdW5jdGlvbihiLGMpe3JldHVybiBrLnByZWNvbXBpbGUoYixjLGEpfSxhLkFTVD1pW1wiZGVmYXVsdFwiXSxhLkNvbXBpbGVyPWsuQ29tcGlsZXIsYS5KYXZhU2NyaXB0Q29tcGlsZXI9bVtcImRlZmF1bHRcIl0sYS5QYXJzZXI9ai5wYXJzZXIsYS5wYXJzZT1qLnBhcnNlLGEucGFyc2VXaXRob3V0UHJvY2Vzc2luZz1qLnBhcnNlV2l0aG91dFByb2Nlc3NpbmcsYX12YXIgZT1jKDEpW1wiZGVmYXVsdFwiXTtiLl9fZXNNb2R1bGU9ITA7dmFyIGY9YygyKSxnPWUoZiksaD1jKDg0KSxpPWUoaCksaj1jKDg1KSxrPWMoOTApLGw9Yyg5MSksbT1lKGwpLG49Yyg4OCksbz1lKG4pLHA9Yyg4MykscT1lKHApLHI9Z1tcImRlZmF1bHRcIl0uY3JlYXRlLHM9ZCgpO3MuY3JlYXRlPWQscVtcImRlZmF1bHRcIl0ocykscy5WaXNpdG9yPW9bXCJkZWZhdWx0XCJdLHNbXCJkZWZhdWx0XCJdPXMsYltcImRlZmF1bHRcIl09cyxhLmV4cG9ydHM9YltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7YltcImRlZmF1bHRcIl09ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmEuX19lc01vZHVsZT9hOntcImRlZmF1bHRcIjphfX0sYi5fX2VzTW9kdWxlPSEwfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZCgpe3ZhciBhPW5ldyBoLkhhbmRsZWJhcnNFbnZpcm9ubWVudDtyZXR1cm4gbi5leHRlbmQoYSxoKSxhLlNhZmVTdHJpbmc9altcImRlZmF1bHRcIl0sYS5FeGNlcHRpb249bFtcImRlZmF1bHRcIl0sYS5VdGlscz1uLGEuZXNjYXBlRXhwcmVzc2lvbj1uLmVzY2FwZUV4cHJlc3Npb24sYS5WTT1wLGEudGVtcGxhdGU9ZnVuY3Rpb24oYil7cmV0dXJuIHAudGVtcGxhdGUoYixhKX0sYX12YXIgZT1jKDMpW1wiZGVmYXVsdFwiXSxmPWMoMSlbXCJkZWZhdWx0XCJdO2IuX19lc01vZHVsZT0hMDt2YXIgZz1jKDQpLGg9ZShnKSxpPWMoNzcpLGo9ZihpKSxrPWMoNiksbD1mKGspLG09Yyg1KSxuPWUobSksbz1jKDc4KSxwPWUobykscT1jKDgzKSxyPWYocSkscz1kKCk7cy5jcmVhdGU9ZCxyW1wiZGVmYXVsdFwiXShzKSxzW1wiZGVmYXVsdFwiXT1zLGJbXCJkZWZhdWx0XCJdPXMsYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO2JbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGEpe2lmKGEmJmEuX19lc01vZHVsZSlyZXR1cm4gYTt2YXIgYj17fTtpZihudWxsIT1hKWZvcih2YXIgYyBpbiBhKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLGMpJiYoYltjXT1hW2NdKTtyZXR1cm4gYltcImRlZmF1bHRcIl09YSxifSxiLl9fZXNNb2R1bGU9ITB9LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKGEsYixjKXt0aGlzLmhlbHBlcnM9YXx8e30sdGhpcy5wYXJ0aWFscz1ifHx7fSx0aGlzLmRlY29yYXRvcnM9Y3x8e30saS5yZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpLGoucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyh0aGlzKX12YXIgZT1jKDEpW1wiZGVmYXVsdFwiXTtiLl9fZXNNb2R1bGU9ITAsYi5IYW5kbGViYXJzRW52aXJvbm1lbnQ9ZDt2YXIgZj1jKDUpLGc9Yyg2KSxoPWUoZyksaT1jKDEwKSxqPWMoNzApLGs9Yyg3MiksbD1lKGspLG09Yyg3Myksbj1cIjQuNy44XCI7Yi5WRVJTSU9OPW47dmFyIG89ODtiLkNPTVBJTEVSX1JFVklTSU9OPW87dmFyIHA9NztiLkxBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTj1wO3ZhciBxPXsxOlwiPD0gMS4wLnJjLjJcIiwyOlwiPT0gMS4wLjAtcmMuM1wiLDM6XCI9PSAxLjAuMC1yYy40XCIsNDpcIj09IDEueC54XCIsNTpcIj09IDIuMC4wLWFscGhhLnhcIiw2OlwiPj0gMi4wLjAtYmV0YS4xXCIsNzpcIj49IDQuMC4wIDw0LjMuMFwiLDg6XCI+PSA0LjMuMFwifTtiLlJFVklTSU9OX0NIQU5HRVM9cTt2YXIgcj1cIltvYmplY3QgT2JqZWN0XVwiO2QucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpkLGxvZ2dlcjpsW1wiZGVmYXVsdFwiXSxsb2c6bFtcImRlZmF1bHRcIl0ubG9nLHJlZ2lzdGVySGVscGVyOmZ1bmN0aW9uKGEsYil7aWYoZi50b1N0cmluZy5jYWxsKGEpPT09cil7aWYoYil0aHJvdyBuZXcgaFtcImRlZmF1bHRcIl0oXCJBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnNcIik7Zi5leHRlbmQodGhpcy5oZWxwZXJzLGEpfWVsc2UgdGhpcy5oZWxwZXJzW2FdPWJ9LHVucmVnaXN0ZXJIZWxwZXI6ZnVuY3Rpb24oYSl7ZGVsZXRlIHRoaXMuaGVscGVyc1thXX0scmVnaXN0ZXJQYXJ0aWFsOmZ1bmN0aW9uKGEsYil7aWYoZi50b1N0cmluZy5jYWxsKGEpPT09cilmLmV4dGVuZCh0aGlzLnBhcnRpYWxzLGEpO2Vsc2V7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGIpdGhyb3cgbmV3IGhbXCJkZWZhdWx0XCJdKCdBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCInK2ErJ1wiIGFzIHVuZGVmaW5lZCcpO3RoaXMucGFydGlhbHNbYV09Yn19LHVucmVnaXN0ZXJQYXJ0aWFsOmZ1bmN0aW9uKGEpe2RlbGV0ZSB0aGlzLnBhcnRpYWxzW2FdfSxyZWdpc3RlckRlY29yYXRvcjpmdW5jdGlvbihhLGIpe2lmKGYudG9TdHJpbmcuY2FsbChhKT09PXIpe2lmKGIpdGhyb3cgbmV3IGhbXCJkZWZhdWx0XCJdKFwiQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBkZWNvcmF0b3JzXCIpO2YuZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycyxhKX1lbHNlIHRoaXMuZGVjb3JhdG9yc1thXT1ifSx1bnJlZ2lzdGVyRGVjb3JhdG9yOmZ1bmN0aW9uKGEpe2RlbGV0ZSB0aGlzLmRlY29yYXRvcnNbYV19LHJlc2V0TG9nZ2VkUHJvcGVydHlBY2Nlc3NlczpmdW5jdGlvbigpe20ucmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCl9fTt2YXIgcz1sW1wiZGVmYXVsdFwiXS5sb2c7Yi5sb2c9cyxiLmNyZWF0ZUZyYW1lPWYuY3JlYXRlRnJhbWUsYi5sb2dnZXI9bFtcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYyhhKXtyZXR1cm4ga1thXX1mdW5jdGlvbiBkKGEpe2Zvcih2YXIgYj0xO2I8YXJndW1lbnRzLmxlbmd0aDtiKyspZm9yKHZhciBjIGluIGFyZ3VtZW50c1tiXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndW1lbnRzW2JdLGMpJiYoYVtjXT1hcmd1bWVudHNbYl1bY10pO3JldHVybiBhfWZ1bmN0aW9uIGUoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9ZnVuY3Rpb24gZihhKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSl7aWYoYSYmYS50b0hUTUwpcmV0dXJuIGEudG9IVE1MKCk7aWYobnVsbD09YSlyZXR1cm5cIlwiO2lmKCFhKXJldHVybiBhK1wiXCI7YT1cIlwiK2F9cmV0dXJuIG0udGVzdChhKT9hLnJlcGxhY2UobCxjKTphfWZ1bmN0aW9uIGcoYSl7cmV0dXJuIWEmJjAhPT1hfHwhKCFwKGEpfHwwIT09YS5sZW5ndGgpfWZ1bmN0aW9uIGgoYSl7dmFyIGI9ZCh7fSxhKTtyZXR1cm4gYi5fcGFyZW50PWEsYn1mdW5jdGlvbiBpKGEsYil7cmV0dXJuIGEucGF0aD1iLGF9ZnVuY3Rpb24gaihhLGIpe3JldHVybihhP2ErXCIuXCI6XCJcIikrYn1iLl9fZXNNb2R1bGU9ITAsYi5leHRlbmQ9ZCxiLmluZGV4T2Y9ZSxiLmVzY2FwZUV4cHJlc3Npb249ZixiLmlzRW1wdHk9ZyxiLmNyZWF0ZUZyYW1lPWgsYi5ibG9ja1BhcmFtcz1pLGIuYXBwZW5kQ29udGV4dFBhdGg9ajt2YXIgaz17XCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLCdcIic6XCImcXVvdDtcIixcIidcIjpcIiYjeDI3O1wiLFwiYFwiOlwiJiN4NjA7XCIsXCI9XCI6XCImI3gzRDtcIn0sbD0vWyY8PlwiJ2A9XS9nLG09L1smPD5cIidgPV0vLG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztiLnRvU3RyaW5nPW47dmFyIG89ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYX07bygveC8pJiYoYi5pc0Z1bmN0aW9uPW89ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT09bi5jYWxsKGEpfSksYi5pc0Z1bmN0aW9uPW87dmFyIHA9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuISghYXx8XCJvYmplY3RcIiE9dHlwZW9mIGEpJiZcIltvYmplY3QgQXJyYXldXCI9PT1uLmNhbGwoYSl9O2IuaXNBcnJheT1wfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZChhLGIpe3ZhciBjPWImJmIubG9jLGc9dm9pZCAwLGg9dm9pZCAwLGk9dm9pZCAwLGo9dm9pZCAwO2MmJihnPWMuc3RhcnQubGluZSxoPWMuZW5kLmxpbmUsaT1jLnN0YXJ0LmNvbHVtbixqPWMuZW5kLmNvbHVtbixhKz1cIiAtIFwiK2crXCI6XCIraSk7Zm9yKHZhciBrPUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsYSksbD0wO2w8Zi5sZW5ndGg7bCsrKXRoaXNbZltsXV09a1tmW2xdXTtFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSYmRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcyxkKTt0cnl7YyYmKHRoaXMubGluZU51bWJlcj1nLHRoaXMuZW5kTGluZU51bWJlcj1oLGU/KE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY29sdW1uXCIse3ZhbHVlOmksZW51bWVyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZW5kQ29sdW1uXCIse3ZhbHVlOmosZW51bWVyYWJsZTohMH0pKToodGhpcy5jb2x1bW49aSx0aGlzLmVuZENvbHVtbj1qKSl9Y2F0Y2gobSl7fX12YXIgZT1jKDcpW1wiZGVmYXVsdFwiXTtiLl9fZXNNb2R1bGU9ITA7dmFyIGY9W1wiZGVzY3JpcHRpb25cIixcImZpbGVOYW1lXCIsXCJsaW5lTnVtYmVyXCIsXCJlbmRMaW5lTnVtYmVyXCIsXCJtZXNzYWdlXCIsXCJuYW1lXCIsXCJudW1iZXJcIixcInN0YWNrXCJdO2QucHJvdG90eXBlPW5ldyBFcnJvcixiW1wiZGVmYXVsdFwiXT1kLGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiLGMpe2EuZXhwb3J0cz17XCJkZWZhdWx0XCI6Yyg4KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMoOSk7YS5leHBvcnRzPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZC5zZXREZXNjKGEsYixjKX19LGZ1bmN0aW9uKGEsYil7dmFyIGM9T2JqZWN0O2EuZXhwb3J0cz17Y3JlYXRlOmMuY3JlYXRlLGdldFByb3RvOmMuZ2V0UHJvdG90eXBlT2YsaXNFbnVtOnt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLGdldERlc2M6Yy5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Isc2V0RGVzYzpjLmRlZmluZVByb3BlcnR5LHNldERlc2NzOmMuZGVmaW5lUHJvcGVydGllcyxnZXRLZXlzOmMua2V5cyxnZXROYW1lczpjLmdldE93blByb3BlcnR5TmFtZXMsZ2V0U3ltYm9sczpjLmdldE93blByb3BlcnR5U3ltYm9scyxlYWNoOltdLmZvckVhY2h9fSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZChhKXtoW1wiZGVmYXVsdFwiXShhKSxqW1wiZGVmYXVsdFwiXShhKSxsW1wiZGVmYXVsdFwiXShhKSxuW1wiZGVmYXVsdFwiXShhKSxwW1wiZGVmYXVsdFwiXShhKSxyW1wiZGVmYXVsdFwiXShhKSx0W1wiZGVmYXVsdFwiXShhKX1mdW5jdGlvbiBlKGEsYixjKXthLmhlbHBlcnNbYl0mJihhLmhvb2tzW2JdPWEuaGVscGVyc1tiXSxjfHxkZWxldGUgYS5oZWxwZXJzW2JdKX12YXIgZj1jKDEpW1wiZGVmYXVsdFwiXTtiLl9fZXNNb2R1bGU9ITAsYi5yZWdpc3RlckRlZmF1bHRIZWxwZXJzPWQsYi5tb3ZlSGVscGVyVG9Ib29rcz1lO3ZhciBnPWMoMTEpLGg9ZihnKSxpPWMoMTIpLGo9ZihpKSxrPWMoNjUpLGw9ZihrKSxtPWMoNjYpLG49ZihtKSxvPWMoNjcpLHA9ZihvKSxxPWMoNjgpLHI9ZihxKSxzPWMoNjkpLHQ9ZihzKX0sZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO2IuX19lc01vZHVsZT0hMDt2YXIgZD1jKDUpO2JbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGEpe2EucmVnaXN0ZXJIZWxwZXIoXCJibG9ja0hlbHBlck1pc3NpbmdcIixmdW5jdGlvbihiLGMpe3ZhciBlPWMuaW52ZXJzZSxmPWMuZm47aWYoYj09PSEwKXJldHVybiBmKHRoaXMpO2lmKGI9PT0hMXx8bnVsbD09YilyZXR1cm4gZSh0aGlzKTtpZihkLmlzQXJyYXkoYikpcmV0dXJuIGIubGVuZ3RoPjA/KGMuaWRzJiYoYy5pZHM9W2MubmFtZV0pLGEuaGVscGVycy5lYWNoKGIsYykpOmUodGhpcyk7aWYoYy5kYXRhJiZjLmlkcyl7dmFyIGc9ZC5jcmVhdGVGcmFtZShjLmRhdGEpO2cuY29udGV4dFBhdGg9ZC5hcHBlbmRDb250ZXh0UGF0aChjLmRhdGEuY29udGV4dFBhdGgsYy5uYW1lKSxjPXtkYXRhOmd9fXJldHVybiBmKGIsYyl9KX0sYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGQ9YygxMylbXCJkZWZhdWx0XCJdLGU9Yyg0MylbXCJkZWZhdWx0XCJdLGY9Yyg1NSlbXCJkZWZhdWx0XCJdLGc9Yyg2MClbXCJkZWZhdWx0XCJdLGg9YygxKVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwO3ZhciBpPWMoNSksaj1jKDYpLGs9aChqKTtiW1wiZGVmYXVsdFwiXT1mdW5jdGlvbihhKXthLnJlZ2lzdGVySGVscGVyKFwiZWFjaFwiLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhiLGMsZCl7biYmKG4ua2V5PWIsbi5pbmRleD1jLG4uZmlyc3Q9MD09PWMsbi5sYXN0PSEhZCxvJiYobi5jb250ZXh0UGF0aD1vK2IpKSxtKz1oKGFbYl0se2RhdGE6bixibG9ja1BhcmFtczppLmJsb2NrUGFyYW1zKFthW2JdLGJdLFtvK2IsbnVsbF0pfSl9aWYoIWIpdGhyb3cgbmV3IGtbXCJkZWZhdWx0XCJdKFwiTXVzdCBwYXNzIGl0ZXJhdG9yIHRvICNlYWNoXCIpO3ZhciBoPWIuZm4saj1iLmludmVyc2UsbD0wLG09XCJcIixuPXZvaWQgMCxvPXZvaWQgMDtpZihiLmRhdGEmJmIuaWRzJiYobz1pLmFwcGVuZENvbnRleHRQYXRoKGIuZGF0YS5jb250ZXh0UGF0aCxiLmlkc1swXSkrXCIuXCIpLGkuaXNGdW5jdGlvbihhKSYmKGE9YS5jYWxsKHRoaXMpKSxiLmRhdGEmJihuPWkuY3JlYXRlRnJhbWUoYi5kYXRhKSksYSYmXCJvYmplY3RcIj09dHlwZW9mIGEpaWYoaS5pc0FycmF5KGEpKWZvcih2YXIgcD1hLmxlbmd0aDtsPHA7bCsrKWwgaW4gYSYmYyhsLGwsbD09PWEubGVuZ3RoLTEpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZCYmYVtlXSl7Zm9yKHZhciBxPVtdLHI9ZihhKSxzPXIubmV4dCgpOyFzLmRvbmU7cz1yLm5leHQoKSlxLnB1c2gocy52YWx1ZSk7YT1xO2Zvcih2YXIgcD1hLmxlbmd0aDtsPHA7bCsrKWMobCxsLGw9PT1hLmxlbmd0aC0xKX1lbHNlIWZ1bmN0aW9uKCl7dmFyIGI9dm9pZCAwO2coYSkuZm9yRWFjaChmdW5jdGlvbihhKXt2b2lkIDAhPT1iJiZjKGIsbC0xKSxiPWEsbCsrfSksdm9pZCAwIT09YiYmYyhiLGwtMSwhMCl9KCk7cmV0dXJuIDA9PT1sJiYobT1qKHRoaXMpKSxtfSl9LGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiLGMpe2EuZXhwb3J0cz17XCJkZWZhdWx0XCI6YygxNCksX19lc01vZHVsZTohMH19LGZ1bmN0aW9uKGEsYixjKXtjKDE1KSxjKDQyKSxhLmV4cG9ydHM9YygyMSkuU3ltYm9sfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGQ9Yyg5KSxlPWMoMTYpLGY9YygxNyksZz1jKDE4KSxoPWMoMjApLGk9YygyNCksaj1jKDE5KSxrPWMoMjcpLGw9YygyOCksbT1jKDMwKSxuPWMoMjkpLG89YygzMSkscD1jKDM2KSxxPWMoMzcpLHI9YygzOCkscz1jKDM5KSx0PWMoMzIpLHU9YygyNiksdj1kLmdldERlc2Msdz1kLnNldERlc2MseD1kLmNyZWF0ZSx5PXAuZ2V0LHo9ZS5TeW1ib2wsQT1lLkpTT04sQj1BJiZBLnN0cmluZ2lmeSxDPSExLEQ9bihcIl9oaWRkZW5cIiksRT1kLmlzRW51bSxGPWsoXCJzeW1ib2wtcmVnaXN0cnlcIiksRz1rKFwic3ltYm9sc1wiKSxIPVwiZnVuY3Rpb25cIj09dHlwZW9mIHosST1PYmplY3QucHJvdG90eXBlLEo9ZyYmaihmdW5jdGlvbigpe3JldHVybiA3IT14KHcoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB3KHRoaXMsXCJhXCIse3ZhbHVlOjd9KS5hfX0pKS5hfSk/ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXYoSSxiKTtkJiZkZWxldGUgSVtiXSx3KGEsYixjKSxkJiZhIT09SSYmdyhJLGIsZCl9OncsSz1mdW5jdGlvbihhKXt2YXIgYj1HW2FdPXgoei5wcm90b3R5cGUpO3JldHVybiBiLl9rPWEsZyYmQyYmSihJLGEse2NvbmZpZ3VyYWJsZTohMCxzZXQ6ZnVuY3Rpb24oYil7Zih0aGlzLEQpJiZmKHRoaXNbRF0sYSkmJih0aGlzW0RdW2FdPSExKSxKKHRoaXMsYSx1KDEsYikpfX0pLGJ9LEw9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIGF9LE09ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjJiZmKEcsYik/KGMuZW51bWVyYWJsZT8oZihhLEQpJiZhW0RdW2JdJiYoYVtEXVtiXT0hMSksYz14KGMse2VudW1lcmFibGU6dSgwLCExKX0pKTooZihhLEQpfHx3KGEsRCx1KDEse30pKSxhW0RdW2JdPSEwKSxKKGEsYixjKSk6dyhhLGIsYyl9LE49ZnVuY3Rpb24oYSxiKXtzKGEpO2Zvcih2YXIgYyxkPXEoYj10KGIpKSxlPTAsZj1kLmxlbmd0aDtmPmU7KU0oYSxjPWRbZSsrXSxiW2NdKTtyZXR1cm4gYX0sTz1mdW5jdGlvbihhLGIpe3JldHVybiB2b2lkIDA9PT1iP3goYSk6Tih4KGEpLGIpfSxQPWZ1bmN0aW9uKGEpe3ZhciBiPUUuY2FsbCh0aGlzLGEpO3JldHVybiEoYnx8IWYodGhpcyxhKXx8IWYoRyxhKXx8Zih0aGlzLEQpJiZ0aGlzW0RdW2FdKXx8Yn0sUT1mdW5jdGlvbihhLGIpe3ZhciBjPXYoYT10KGEpLGIpO3JldHVybiFjfHwhZihHLGIpfHxmKGEsRCkmJmFbRF1bYl18fChjLmVudW1lcmFibGU9ITApLGN9LFI9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGM9eSh0KGEpKSxkPVtdLGU9MDtjLmxlbmd0aD5lOylmKEcsYj1jW2UrK10pfHxiPT1EfHxkLnB1c2goYik7cmV0dXJuIGR9LFM9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGM9eSh0KGEpKSxkPVtdLGU9MDtjLmxlbmd0aD5lOylmKEcsYj1jW2UrK10pJiZkLnB1c2goR1tiXSk7cmV0dXJuIGR9LFQ9ZnVuY3Rpb24oYSl7aWYodm9pZCAwIT09YSYmIUwoYSkpe2Zvcih2YXIgYixjLGQ9W2FdLGU9MSxmPWFyZ3VtZW50cztmLmxlbmd0aD5lOylkLnB1c2goZltlKytdKTtyZXR1cm4gYj1kWzFdLFwiZnVuY3Rpb25cIj09dHlwZW9mIGImJihjPWIpLCFjJiZyKGIpfHwoYj1mdW5jdGlvbihhLGIpe2lmKGMmJihiPWMuY2FsbCh0aGlzLGEsYikpLCFMKGIpKXJldHVybiBifSksZFsxXT1iLEIuYXBwbHkoQSxkKX19LFU9aihmdW5jdGlvbigpe3ZhciBhPXooKTtyZXR1cm5cIltudWxsXVwiIT1CKFthXSl8fFwie31cIiE9Qih7YTphfSl8fFwie31cIiE9QihPYmplY3QoYSkpfSk7SHx8KHo9ZnVuY3Rpb24oKXtpZihMKHRoaXMpKXRocm93IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvclwiKTtyZXR1cm4gSyhtKGFyZ3VtZW50cy5sZW5ndGg+MD9hcmd1bWVudHNbMF06dm9pZCAwKSl9LGkoei5wcm90b3R5cGUsXCJ0b1N0cmluZ1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2t9KSxMPWZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2Ygen0sZC5jcmVhdGU9TyxkLmlzRW51bT1QLGQuZ2V0RGVzYz1RLGQuc2V0RGVzYz1NLGQuc2V0RGVzY3M9TixkLmdldE5hbWVzPXAuZ2V0PVIsZC5nZXRTeW1ib2xzPVMsZyYmIWMoNDEpJiZpKEksXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLFAsITApKTt2YXIgVj17XCJmb3JcIjpmdW5jdGlvbihhKXtyZXR1cm4gZihGLGErPVwiXCIpP0ZbYV06RlthXT16KGEpfSxrZXlGb3I6ZnVuY3Rpb24oYSl7cmV0dXJuIG8oRixhKX0sdXNlU2V0dGVyOmZ1bmN0aW9uKCl7Qz0hMH0sdXNlU2ltcGxlOmZ1bmN0aW9uKCl7Qz0hMX19O2QuZWFjaC5jYWxsKFwiaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXNcIi5zcGxpdChcIixcIiksZnVuY3Rpb24oYSl7dmFyIGI9bihhKTtWW2FdPUg/YjpLKGIpfSksQz0hMCxoKGguRytoLlcse1N5bWJvbDp6fSksaChoLlMsXCJTeW1ib2xcIixWKSxoKGguUytoLkYqIUgsXCJPYmplY3RcIix7Y3JlYXRlOk8sZGVmaW5lUHJvcGVydHk6TSxkZWZpbmVQcm9wZXJ0aWVzOk4sZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOlEsZ2V0T3duUHJvcGVydHlOYW1lczpSLGdldE93blByb3BlcnR5U3ltYm9sczpTfSksQSYmaChoLlMraC5GKighSHx8VSksXCJKU09OXCIse3N0cmluZ2lmeTpUfSksbCh6LFwiU3ltYm9sXCIpLGwoTWF0aCxcIk1hdGhcIiwhMCksbChlLkpTT04sXCJKU09OXCIsITApfSxmdW5jdGlvbihhLGIpe3ZhciBjPWEuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPWMpfSxmdW5jdGlvbihhLGIpe3ZhciBjPXt9Lmhhc093blByb3BlcnR5O2EuZXhwb3J0cz1mdW5jdGlvbihhLGIpe3JldHVybiBjLmNhbGwoYSxiKX19LGZ1bmN0aW9uKGEsYixjKXthLmV4cG9ydHM9IWMoMTkpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbihhLGIpe2EuZXhwb3J0cz1mdW5jdGlvbihhKXt0cnl7cmV0dXJuISFhKCl9Y2F0Y2goYil7cmV0dXJuITB9fX0sZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMoMTYpLGU9YygyMSksZj1jKDIyKSxnPVwicHJvdG90eXBlXCIsaD1mdW5jdGlvbihhLGIsYyl7dmFyIGksaixrLGw9YSZoLkYsbT1hJmguRyxuPWEmaC5TLG89YSZoLlAscD1hJmguQixxPWEmaC5XLHI9bT9lOmVbYl18fChlW2JdPXt9KSxzPW0/ZDpuP2RbYl06KGRbYl18fHt9KVtnXTttJiYoYz1iKTtmb3IoaSBpbiBjKWo9IWwmJnMmJmkgaW4gcyxqJiZpIGluIHJ8fChrPWo/c1tpXTpjW2ldLHJbaV09bSYmXCJmdW5jdGlvblwiIT10eXBlb2Ygc1tpXT9jW2ldOnAmJmo/ZihrLGQpOnEmJnNbaV09PWs/ZnVuY3Rpb24oYSl7dmFyIGI9ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBhP25ldyBhKGIpOmEoYil9O3JldHVybiBiW2ddPWFbZ10sYn0oayk6byYmXCJmdW5jdGlvblwiPT10eXBlb2Ygaz9mKEZ1bmN0aW9uLmNhbGwsayk6ayxvJiYoKHJbZ118fChyW2ddPXt9KSlbaV09aykpfTtoLkY9MSxoLkc9MixoLlM9NCxoLlA9OCxoLkI9MTYsaC5XPTMyLGEuZXhwb3J0cz1ofSxmdW5jdGlvbihhLGIpe3ZhciBjPWEuZXhwb3J0cz17dmVyc2lvbjpcIjEuMi42XCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9Yyl9LGZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jKDIzKTthLmV4cG9ydHM9ZnVuY3Rpb24oYSxiLGMpe2lmKGQoYSksdm9pZCAwPT09YilyZXR1cm4gYTtzd2l0Y2goYyl7Y2FzZSAxOnJldHVybiBmdW5jdGlvbihjKXtyZXR1cm4gYS5jYWxsKGIsYyl9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24oYyxkKXtyZXR1cm4gYS5jYWxsKGIsYyxkKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihjLGQsZSl7cmV0dXJuIGEuY2FsbChiLGMsZCxlKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX19LGZ1bmN0aW9uKGEsYil7YS5leHBvcnRzPWZ1bmN0aW9uKGEpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGEpdGhyb3cgVHlwZUVycm9yKGErXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiBhfX0sZnVuY3Rpb24oYSxiLGMpe2EuZXhwb3J0cz1jKDI1KX0sZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMoOSksZT1jKDI2KTthLmV4cG9ydHM9YygxOCk/ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBkLnNldERlc2MoYSxiLGUoMSxjKSl9OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYVtiXT1jLGF9fSxmdW5jdGlvbihhLGIpe2EuZXhwb3J0cz1mdW5jdGlvbihhLGIpe3JldHVybntlbnVtZXJhYmxlOiEoMSZhKSxjb25maWd1cmFibGU6ISgyJmEpLHdyaXRhYmxlOiEoNCZhKSx2YWx1ZTpifX19LGZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jKDE2KSxlPVwiX19jb3JlLWpzX3NoYXJlZF9fXCIsZj1kW2VdfHwoZFtlXT17fSk7YS5leHBvcnRzPWZ1bmN0aW9uKGEpe3JldHVybiBmW2FdfHwoZlthXT17fSl9fSxmdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yyg5KS5zZXREZXNjLGU9YygxNyksZj1jKDI5KShcInRvU3RyaW5nVGFnXCIpO2EuZXhwb3J0cz1mdW5jdGlvbihhLGIsYyl7YSYmIWUoYT1jP2E6YS5wcm90b3R5cGUsZikmJmQoYSxmLHtjb25maWd1cmFibGU6ITAsdmFsdWU6Yn0pfX0sZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMoMjcpKFwid2tzXCIpLGU9YygzMCksZj1jKDE2KS5TeW1ib2w7YS5leHBvcnRzPWZ1bmN0aW9uKGEpe3JldHVybiBkW2FdfHwoZFthXT1mJiZmW2FdfHwoZnx8ZSkoXCJTeW1ib2wuXCIrYSkpfX0sZnVuY3Rpb24oYSxiKXt2YXIgYz0wLGQ9TWF0aC5yYW5kb20oKTthLmV4cG9ydHM9ZnVuY3Rpb24oYSl7cmV0dXJuXCJTeW1ib2woXCIuY29uY2F0KHZvaWQgMD09PWE/XCJcIjphLFwiKV9cIiwoKytjK2QpLnRvU3RyaW5nKDM2KSl9fSxmdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yyg5KSxlPWMoMzIpO2EuZXhwb3J0cz1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxmPWUoYSksZz1kLmdldEtleXMoZiksaD1nLmxlbmd0aCxpPTA7aD5pOylpZihmW2M9Z1tpKytdXT09PWIpcmV0dXJuIGN9fSxmdW5jdGlvbihhLGIsYyl7dmFyIGQ9YygzMyksZT1jKDM1KTthLmV4cG9ydHM9ZnVuY3Rpb24oYSl7cmV0dXJuIGQoZShhKSl9fSxmdW5jdGlvbihhLGIsYyl7dmFyIGQ9YygzNCk7YS5leHBvcnRzPU9iamVjdChcInpcIikucHJvcGVydHlJc0VudW1lcmFibGUoMCk/T2JqZWN0OmZ1bmN0aW9uKGEpe3JldHVyblwiU3RyaW5nXCI9PWQoYSk/YS5zcGxpdChcIlwiKTpPYmplY3QoYSl9fSxmdW5jdGlvbihhLGIpe3ZhciBjPXt9LnRvU3RyaW5nO2EuZXhwb3J0cz1mdW5jdGlvbihhKXtyZXR1cm4gYy5jYWxsKGEpLnNsaWNlKDgsLTEpfX0sZnVuY3Rpb24oYSxiKXthLmV4cG9ydHM9ZnVuY3Rpb24oYSl7aWYodm9pZCAwPT1hKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIithKTtyZXR1cm4gYX19LGZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jKDMyKSxlPWMoOSkuZ2V0TmFtZXMsZj17fS50b1N0cmluZyxnPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzP09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdyk6W10saD1mdW5jdGlvbihhKXt0cnl7cmV0dXJuIGUoYSl9Y2F0Y2goYil7cmV0dXJuIGcuc2xpY2UoKX19O2EuZXhwb3J0cy5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGcmJlwiW29iamVjdCBXaW5kb3ddXCI9PWYuY2FsbChhKT9oKGEpOmUoZChhKSl9fSxmdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yyg5KTthLmV4cG9ydHM9ZnVuY3Rpb24oYSl7dmFyIGI9ZC5nZXRLZXlzKGEpLGM9ZC5nZXRTeW1ib2xzO2lmKGMpZm9yKHZhciBlLGY9YyhhKSxnPWQuaXNFbnVtLGg9MDtmLmxlbmd0aD5oOylnLmNhbGwoYSxlPWZbaCsrXSkmJmIucHVzaChlKTtyZXR1cm4gYn19LGZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jKDM0KTthLmV4cG9ydHM9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJBcnJheVwiPT1kKGEpfX0sZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMoNDApO2EuZXhwb3J0cz1mdW5jdGlvbihhKXtpZighZChhKSl0aHJvdyBUeXBlRXJyb3IoYStcIiBpcyBub3QgYW4gb2JqZWN0IVwiKTtyZXR1cm4gYX19LGZ1bmN0aW9uKGEsYil7YS5leHBvcnRzPWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP251bGwhPT1hOlwiZnVuY3Rpb25cIj09dHlwZW9mIGF9fSxmdW5jdGlvbihhLGIpe2EuZXhwb3J0cz0hMH0sZnVuY3Rpb24oYSxiKXt9LGZ1bmN0aW9uKGEsYixjKXthLmV4cG9ydHM9e1wiZGVmYXVsdFwiOmMoNDQpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbihhLGIsYyl7Yyg0NSksYyg1MSksYS5leHBvcnRzPWMoMjkpKFwiaXRlcmF0b3JcIil9LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjt2YXIgZD1jKDQ2KSghMCk7Yyg0OCkoU3RyaW5nLFwiU3RyaW5nXCIsZnVuY3Rpb24oYSl7dGhpcy5fdD1TdHJpbmcoYSksdGhpcy5faT0wfSxmdW5jdGlvbigpe3ZhciBhLGI9dGhpcy5fdCxjPXRoaXMuX2k7cmV0dXJuIGM+PWIubGVuZ3RoP3t2YWx1ZTp2b2lkIDAsZG9uZTohMH06KGE9ZChiLGMpLHRoaXMuX2krPWEubGVuZ3RoLHt2YWx1ZTphLGRvbmU6ITF9KX0pfSxmdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yyg0NyksZT1jKDM1KTthLmV4cG9ydHM9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7dmFyIGYsZyxoPVN0cmluZyhlKGIpKSxpPWQoYyksaj1oLmxlbmd0aDtyZXR1cm4gaTwwfHxpPj1qP2E/XCJcIjp2b2lkIDA6KGY9aC5jaGFyQ29kZUF0KGkpLGY8NTUyOTZ8fGY+NTYzMTl8fGkrMT09PWp8fChnPWguY2hhckNvZGVBdChpKzEpKTw1NjMyMHx8Zz41NzM0Mz9hP2guY2hhckF0KGkpOmY6YT9oLnNsaWNlKGksaSsyKTooZi01NTI5Njw8MTApKyhnLTU2MzIwKSs2NTUzNil9fX0sZnVuY3Rpb24oYSxiKXt2YXIgYz1NYXRoLmNlaWwsZD1NYXRoLmZsb29yO2EuZXhwb3J0cz1mdW5jdGlvbihhKXtyZXR1cm4gaXNOYU4oYT0rYSk/MDooYT4wP2Q6YykoYSl9fSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGQ9Yyg0MSksZT1jKDIwKSxmPWMoMjQpLGc9YygyNSksaD1jKDE3KSxpPWMoNDkpLGo9Yyg1MCksaz1jKDI4KSxsPWMoOSkuZ2V0UHJvdG8sbT1jKDI5KShcIml0ZXJhdG9yXCIpLG49IShbXS5rZXlzJiZcIm5leHRcImluW10ua2V5cygpKSxvPVwiQEBpdGVyYXRvclwiLHA9XCJrZXlzXCIscT1cInZhbHVlc1wiLHI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307YS5leHBvcnRzPWZ1bmN0aW9uKGEsYixjLHMsdCx1LHYpe2ooYyxiLHMpO3ZhciB3LHgseT1mdW5jdGlvbihhKXtpZighbiYmYSBpbiBDKXJldHVybiBDW2FdO3N3aXRjaChhKXtjYXNlIHA6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBjKHRoaXMsYSl9O2Nhc2UgcTpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGModGhpcyxhKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBjKHRoaXMsYSl9fSx6PWIrXCIgSXRlcmF0b3JcIixBPXQ9PXEsQj0hMSxDPWEucHJvdG90eXBlLEQ9Q1ttXXx8Q1tvXXx8dCYmQ1t0XSxFPUR8fHkodCk7aWYoRCl7dmFyIEY9bChFLmNhbGwobmV3IGEpKTtrKEYseiwhMCksIWQmJmgoQyxvKSYmZyhGLG0sciksQSYmRC5uYW1lIT09cSYmKEI9ITAsRT1mdW5jdGlvbigpe3JldHVybiBELmNhbGwodGhpcyl9KX1pZihkJiYhdnx8IW4mJiFCJiZDW21dfHxnKEMsbSxFKSxpW2JdPUUsaVt6XT1yLHQpaWYodz17dmFsdWVzOkE/RTp5KHEpLGtleXM6dT9FOnkocCksZW50cmllczpBP3koXCJlbnRyaWVzXCIpOkV9LHYpZm9yKHggaW4gdyl4IGluIEN8fGYoQyx4LHdbeF0pO2Vsc2UgZShlLlArZS5GKihufHxCKSxiLHcpO3JldHVybiB3fX0sZnVuY3Rpb24oYSxiKXthLmV4cG9ydHM9e319LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjt2YXIgZD1jKDkpLGU9YygyNiksZj1jKDI4KSxnPXt9O2MoMjUpKGcsYygyOSkoXCJpdGVyYXRvclwiKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSksYS5leHBvcnRzPWZ1bmN0aW9uKGEsYixjKXthLnByb3RvdHlwZT1kLmNyZWF0ZShnLHtuZXh0OmUoMSxjKX0pLGYoYSxiK1wiIEl0ZXJhdG9yXCIpfX0sZnVuY3Rpb24oYSxiLGMpe2MoNTIpO3ZhciBkPWMoNDkpO2QuTm9kZUxpc3Q9ZC5IVE1MQ29sbGVjdGlvbj1kLkFycmF5fSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGQ9Yyg1MyksZT1jKDU0KSxmPWMoNDkpLGc9YygzMik7YS5leHBvcnRzPWMoNDgpKEFycmF5LFwiQXJyYXlcIixmdW5jdGlvbihhLGIpe3RoaXMuX3Q9ZyhhKSx0aGlzLl9pPTAsdGhpcy5faz1ifSxmdW5jdGlvbigpe3ZhciBhPXRoaXMuX3QsYj10aGlzLl9rLGM9dGhpcy5faSsrO3JldHVybiFhfHxjPj1hLmxlbmd0aD8odGhpcy5fdD12b2lkIDAsZSgxKSk6XCJrZXlzXCI9PWI/ZSgwLGMpOlwidmFsdWVzXCI9PWI/ZSgwLGFbY10pOmUoMCxbYyxhW2NdXSl9LFwidmFsdWVzXCIpLGYuQXJndW1lbnRzPWYuQXJyYXksZChcImtleXNcIiksZChcInZhbHVlc1wiKSxkKFwiZW50cmllc1wiKX0sZnVuY3Rpb24oYSxiKXthLmV4cG9ydHM9ZnVuY3Rpb24oKXt9fSxmdW5jdGlvbihhLGIpe2EuZXhwb3J0cz1mdW5jdGlvbihhLGIpe3JldHVybnt2YWx1ZTpiLGRvbmU6ISFhfX19LGZ1bmN0aW9uKGEsYixjKXthLmV4cG9ydHM9e1wiZGVmYXVsdFwiOmMoNTYpLF9fZXNNb2R1bGU6ITB9fSxmdW5jdGlvbihhLGIsYyl7Yyg1MSksYyg0NSksYS5leHBvcnRzPWMoNTcpfSxmdW5jdGlvbihhLGIsYyl7dmFyIGQ9YygzOSksZT1jKDU4KTthLmV4cG9ydHM9YygyMSkuZ2V0SXRlcmF0b3I9ZnVuY3Rpb24oYSl7dmFyIGI9ZShhKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBiKXRocm93IFR5cGVFcnJvcihhK1wiIGlzIG5vdCBpdGVyYWJsZSFcIik7cmV0dXJuIGQoYi5jYWxsKGEpKX19LGZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jKDU5KSxlPWMoMjkpKFwiaXRlcmF0b3JcIiksZj1jKDQ5KTthLmV4cG9ydHM9YygyMSkuZ2V0SXRlcmF0b3JNZXRob2Q9ZnVuY3Rpb24oYSl7aWYodm9pZCAwIT1hKXJldHVybiBhW2VdfHxhW1wiQEBpdGVyYXRvclwiXXx8ZltkKGEpXX19LGZ1bmN0aW9uKGEsYixjKXt2YXIgZD1jKDM0KSxlPWMoMjkpKFwidG9TdHJpbmdUYWdcIiksZj1cIkFyZ3VtZW50c1wiPT1kKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk7YS5leHBvcnRzPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZztyZXR1cm4gdm9pZCAwPT09YT9cIlVuZGVmaW5lZFwiOm51bGw9PT1hP1wiTnVsbFwiOlwic3RyaW5nXCI9PXR5cGVvZihjPShiPU9iamVjdChhKSlbZV0pP2M6Zj9kKGIpOlwiT2JqZWN0XCI9PShnPWQoYikpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLmNhbGxlZT9cIkFyZ3VtZW50c1wiOmd9fSxmdW5jdGlvbihhLGIsYyl7YS5leHBvcnRzPXtcImRlZmF1bHRcIjpjKDYxKSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24oYSxiLGMpe2MoNjIpLGEuZXhwb3J0cz1jKDIxKS5PYmplY3Qua2V5c30sZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMoNjMpO2MoNjQpKFwia2V5c1wiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYShkKGIpKX19KX0sZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMoMzUpO2EuZXhwb3J0cz1mdW5jdGlvbihhKXtyZXR1cm4gT2JqZWN0KGQoYSkpfX0sZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMoMjApLGU9YygyMSksZj1jKDE5KTthLmV4cG9ydHM9ZnVuY3Rpb24oYSxiKXt2YXIgYz0oZS5PYmplY3R8fHt9KVthXXx8T2JqZWN0W2FdLGc9e307Z1thXT1iKGMpLGQoZC5TK2QuRipmKGZ1bmN0aW9uKCl7YygxKX0pLFwiT2JqZWN0XCIsZyl9fSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGQ9YygxKVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwO3ZhciBlPWMoNiksZj1kKGUpO2JbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGEpe2EucmVnaXN0ZXJIZWxwZXIoXCJoZWxwZXJNaXNzaW5nXCIsZnVuY3Rpb24oKXtpZigxIT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgZltcImRlZmF1bHRcIl0oJ01pc3NpbmcgaGVscGVyOiBcIicrYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGgtMV0ubmFtZSsnXCInKX0pfSxhLmV4cG9ydHM9YltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjt2YXIgZD1jKDEpW1wiZGVmYXVsdFwiXTtiLl9fZXNNb2R1bGU9ITA7dmFyIGU9Yyg1KSxmPWMoNiksZz1kKGYpO2JbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGEpe2EucmVnaXN0ZXJIZWxwZXIoXCJpZlwiLGZ1bmN0aW9uKGEsYil7aWYoMiE9YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgZ1tcImRlZmF1bHRcIl0oXCIjaWYgcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnRcIik7cmV0dXJuIGUuaXNGdW5jdGlvbihhKSYmKGE9YS5jYWxsKHRoaXMpKSwhYi5oYXNoLmluY2x1ZGVaZXJvJiYhYXx8ZS5pc0VtcHR5KGEpP2IuaW52ZXJzZSh0aGlzKTpiLmZuKHRoaXMpfSksYS5yZWdpc3RlckhlbHBlcihcInVubGVzc1wiLGZ1bmN0aW9uKGIsYyl7aWYoMiE9YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgZ1tcImRlZmF1bHRcIl0oXCIjdW5sZXNzIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50XCIpO3JldHVybiBhLmhlbHBlcnNbXCJpZlwiXS5jYWxsKHRoaXMsYix7Zm46Yy5pbnZlcnNlLGludmVyc2U6Yy5mbixoYXNoOmMuaGFzaH0pfSl9LGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtiLl9fZXNNb2R1bGU9ITAsYltcImRlZmF1bHRcIl09ZnVuY3Rpb24oYSl7YS5yZWdpc3RlckhlbHBlcihcImxvZ1wiLGZ1bmN0aW9uKCl7Zm9yKHZhciBiPVt2b2lkIDBdLGM9YXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGgtMV0sZD0wO2Q8YXJndW1lbnRzLmxlbmd0aC0xO2QrKyliLnB1c2goYXJndW1lbnRzW2RdKTt2YXIgZT0xO251bGwhPWMuaGFzaC5sZXZlbD9lPWMuaGFzaC5sZXZlbDpjLmRhdGEmJm51bGwhPWMuZGF0YS5sZXZlbCYmKGU9Yy5kYXRhLmxldmVsKSxiWzBdPWUsYS5sb2cuYXBwbHkoYSxiKX0pfSxhLmV4cG9ydHM9YltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7Yi5fX2VzTW9kdWxlPSEwLGJbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGEpe2EucmVnaXN0ZXJIZWxwZXIoXCJsb29rdXBcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGE/Yy5sb29rdXBQcm9wZXJ0eShhLGIpOmF9KX0sYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGQ9YygxKVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwO3ZhciBlPWMoNSksZj1jKDYpLGc9ZChmKTtiW1wiZGVmYXVsdFwiXT1mdW5jdGlvbihhKXthLnJlZ2lzdGVySGVscGVyKFwid2l0aFwiLGZ1bmN0aW9uKGEsYil7aWYoMiE9YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgZ1tcImRlZmF1bHRcIl0oXCIjd2l0aCByZXF1aXJlcyBleGFjdGx5IG9uZSBhcmd1bWVudFwiKTtlLmlzRnVuY3Rpb24oYSkmJihhPWEuY2FsbCh0aGlzKSk7dmFyIGM9Yi5mbjtpZihlLmlzRW1wdHkoYSkpcmV0dXJuIGIuaW52ZXJzZSh0aGlzKTt2YXIgZD1iLmRhdGE7cmV0dXJuIGIuZGF0YSYmYi5pZHMmJihkPWUuY3JlYXRlRnJhbWUoYi5kYXRhKSxkLmNvbnRleHRQYXRoPWUuYXBwZW5kQ29udGV4dFBhdGgoYi5kYXRhLmNvbnRleHRQYXRoLGIuaWRzWzBdKSksYyhhLHtkYXRhOmQsYmxvY2tQYXJhbXM6ZS5ibG9ja1BhcmFtcyhbYV0sW2QmJmQuY29udGV4dFBhdGhdKX0pfSl9LGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGQoYSl7Z1tcImRlZmF1bHRcIl0oYSl9dmFyIGU9YygxKVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwLGIucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycz1kO3ZhciBmPWMoNzEpLGc9ZShmKX0sZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO2IuX19lc01vZHVsZT0hMDt2YXIgZD1jKDUpO2JbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGEpe2EucmVnaXN0ZXJEZWNvcmF0b3IoXCJpbmxpbmVcIixmdW5jdGlvbihhLGIsYyxlKXt2YXIgZj1hO3JldHVybiBiLnBhcnRpYWxzfHwoYi5wYXJ0aWFscz17fSxmPWZ1bmN0aW9uKGUsZil7dmFyIGc9Yy5wYXJ0aWFscztjLnBhcnRpYWxzPWQuZXh0ZW5kKHt9LGcsYi5wYXJ0aWFscyk7dmFyIGg9YShlLGYpO3JldHVybiBjLnBhcnRpYWxzPWcsaH0pLGIucGFydGlhbHNbZS5hcmdzWzBdXT1lLmZuLGZ9KX0sYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7Yi5fX2VzTW9kdWxlPSEwO3ZhciBkPWMoNSksZT17bWV0aG9kTWFwOltcImRlYnVnXCIsXCJpbmZvXCIsXCJ3YXJuXCIsXCJlcnJvclwiXSxsZXZlbDpcImluZm9cIixsb29rdXBMZXZlbDpmdW5jdGlvbihhKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7dmFyIGI9ZC5pbmRleE9mKGUubWV0aG9kTWFwLGEudG9Mb3dlckNhc2UoKSk7YT1iPj0wP2I6cGFyc2VJbnQoYSwxMCl9cmV0dXJuIGF9LGxvZzpmdW5jdGlvbihhKXtpZihhPWUubG9va3VwTGV2ZWwoYSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJmUubG9va3VwTGV2ZWwoZS5sZXZlbCk8PWEpe3ZhciBiPWUubWV0aG9kTWFwW2FdO2NvbnNvbGVbYl18fChiPVwibG9nXCIpO2Zvcih2YXIgYz1hcmd1bWVudHMubGVuZ3RoLGQ9QXJyYXkoYz4xP2MtMTowKSxmPTE7ZjxjO2YrKylkW2YtMV09YXJndW1lbnRzW2ZdO2NvbnNvbGVbYl0uYXBwbHkoY29uc29sZSxkKX19fTtiW1wiZGVmYXVsdFwiXT1lLGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGQoYSl7dmFyIGI9aShudWxsKTtiLmNvbnN0cnVjdG9yPSExLGIuX19kZWZpbmVHZXR0ZXJfXz0hMSxiLl9fZGVmaW5lU2V0dGVyX189ITEsYi5fX2xvb2t1cEdldHRlcl9fPSExO3ZhciBjPWkobnVsbCk7cmV0dXJuIGMuX19wcm90b19fPSExLHtwcm9wZXJ0aWVzOnt3aGl0ZWxpc3Q6bC5jcmVhdGVOZXdMb29rdXBPYmplY3QoYyxhLmFsbG93ZWRQcm90b1Byb3BlcnRpZXMpLGRlZmF1bHRWYWx1ZTphLmFsbG93UHJvdG9Qcm9wZXJ0aWVzQnlEZWZhdWx0fSxtZXRob2RzOnt3aGl0ZWxpc3Q6bC5jcmVhdGVOZXdMb29rdXBPYmplY3QoYixhLmFsbG93ZWRQcm90b01ldGhvZHMpLGRlZmF1bHRWYWx1ZTphLmFsbG93UHJvdG9NZXRob2RzQnlEZWZhdWx0fX19ZnVuY3Rpb24gZShhLGIsYyl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYT9mKGIubWV0aG9kcyxjKTpmKGIucHJvcGVydGllcyxjKX1mdW5jdGlvbiBmKGEsYil7cmV0dXJuIHZvaWQgMCE9PWEud2hpdGVsaXN0W2JdP2Eud2hpdGVsaXN0W2JdPT09ITA6dm9pZCAwIT09YS5kZWZhdWx0VmFsdWU/YS5kZWZhdWx0VmFsdWU6KGcoYiksITEpfWZ1bmN0aW9uIGcoYSl7b1thXSE9PSEwJiYob1thXT0hMCxuW1wiZGVmYXVsdFwiXS5sb2coXCJlcnJvclwiLCdIYW5kbGViYXJzOiBBY2Nlc3MgaGFzIGJlZW4gZGVuaWVkIHRvIHJlc29sdmUgdGhlIHByb3BlcnR5IFwiJythKydcIiBiZWNhdXNlIGl0IGlzIG5vdCBhbiBcIm93biBwcm9wZXJ0eVwiIG9mIGl0cyBwYXJlbnQuXFxuWW91IGNhbiBhZGQgYSBydW50aW1lIG9wdGlvbiB0byBkaXNhYmxlIHRoZSBjaGVjayBvciB0aGlzIHdhcm5pbmc6XFxuU2VlIGh0dHBzOi8vaGFuZGxlYmFyc2pzLmNvbS9hcGktcmVmZXJlbmNlL3J1bnRpbWUtb3B0aW9ucy5odG1sI29wdGlvbnMtdG8tY29udHJvbC1wcm90b3R5cGUtYWNjZXNzIGZvciBkZXRhaWxzJykpfWZ1bmN0aW9uIGgoKXtqKG8pLmZvckVhY2goZnVuY3Rpb24oYSl7ZGVsZXRlIG9bYV19KX12YXIgaT1jKDc0KVtcImRlZmF1bHRcIl0saj1jKDYwKVtcImRlZmF1bHRcIl0saz1jKDEpW1wiZGVmYXVsdFwiXTtiLl9fZXNNb2R1bGU9ITAsYi5jcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2w9ZCxiLnJlc3VsdElzQWxsb3dlZD1lLGIucmVzZXRMb2dnZWRQcm9wZXJ0aWVzPWg7dmFyIGw9Yyg3NiksbT1jKDcyKSxuPWsobSksbz1pKG51bGwpfSxmdW5jdGlvbihhLGIsYyl7YS5leHBvcnRzPXtcImRlZmF1bHRcIjpjKDc1KSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMoOSk7YS5leHBvcnRzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGQuY3JlYXRlKGEsYil9fSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZCgpe2Zvcih2YXIgYT1hcmd1bWVudHMubGVuZ3RoLGI9QXJyYXkoYSksYz0wO2M8YTtjKyspYltjXT1hcmd1bWVudHNbY107cmV0dXJuIGYuZXh0ZW5kLmFwcGx5KHZvaWQgMCxbZShudWxsKV0uY29uY2F0KGIpKX12YXIgZT1jKDc0KVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwLGIuY3JlYXRlTmV3TG9va3VwT2JqZWN0PWQ7dmFyIGY9Yyg1KX0sZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBjKGEpe3RoaXMuc3RyaW5nPWF9Yi5fX2VzTW9kdWxlPSEwLGMucHJvdG90eXBlLnRvU3RyaW5nPWMucHJvdG90eXBlLnRvSFRNTD1mdW5jdGlvbigpe3JldHVyblwiXCIrdGhpcy5zdHJpbmd9LGJbXCJkZWZhdWx0XCJdPWMsYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZChhKXt2YXIgYj1hJiZhWzBdfHwxLGM9di5DT01QSUxFUl9SRVZJU0lPTjtpZighKGI+PXYuTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OJiZiPD12LkNPTVBJTEVSX1JFVklTSU9OKSl7aWYoYjx2LkxBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTil7dmFyIGQ9di5SRVZJU0lPTl9DSEFOR0VTW2NdLGU9di5SRVZJU0lPTl9DSEFOR0VTW2JdO3Rocm93IG5ldyB1W1wiZGVmYXVsdFwiXShcIlRlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuIFBsZWFzZSB1cGRhdGUgeW91ciBwcmVjb21waWxlciB0byBhIG5ld2VyIHZlcnNpb24gKFwiK2QrXCIpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoXCIrZStcIikuXCIpfXRocm93IG5ldyB1W1wiZGVmYXVsdFwiXShcIlRlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uIChcIithWzFdK1wiKS5cIil9fWZ1bmN0aW9uIGUoYSxiKXtmdW5jdGlvbiBjKGMsZCxlKXtlLmhhc2gmJihkPXMuZXh0ZW5kKHt9LGQsZS5oYXNoKSxlLmlkcyYmKGUuaWRzWzBdPSEwKSksYz1iLlZNLnJlc29sdmVQYXJ0aWFsLmNhbGwodGhpcyxjLGQsZSk7dmFyIGY9cy5leHRlbmQoe30sZSx7aG9va3M6dGhpcy5ob29rcyxwcm90b0FjY2Vzc0NvbnRyb2w6dGhpcy5wcm90b0FjY2Vzc0NvbnRyb2x9KSxnPWIuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsYyxkLGYpO2lmKG51bGw9PWcmJmIuY29tcGlsZSYmKGUucGFydGlhbHNbZS5uYW1lXT1iLmNvbXBpbGUoYyxhLmNvbXBpbGVyT3B0aW9ucyxiKSxnPWUucGFydGlhbHNbZS5uYW1lXShkLGYpKSxudWxsIT1nKXtpZihlLmluZGVudCl7Zm9yKHZhciBoPWcuc3BsaXQoXCJcXG5cIiksaT0wLGo9aC5sZW5ndGg7aTxqJiYoaFtpXXx8aSsxIT09aik7aSsrKWhbaV09ZS5pbmRlbnQraFtpXTtnPWguam9pbihcIlxcblwiKX1yZXR1cm4gZ310aHJvdyBuZXcgdVtcImRlZmF1bHRcIl0oXCJUaGUgcGFydGlhbCBcIitlLm5hbWUrXCIgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZVwiKX1mdW5jdGlvbiBkKGIpe2Z1bmN0aW9uIGMoYil7cmV0dXJuXCJcIithLm1haW4oZyxiLGcuaGVscGVycyxnLnBhcnRpYWxzLGYsaSxoKX12YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0xfHx2b2lkIDA9PT1hcmd1bWVudHNbMV0/e306YXJndW1lbnRzWzFdLGY9ZS5kYXRhO2QuX3NldHVwKGUpLCFlLnBhcnRpYWwmJmEudXNlRGF0YSYmKGY9aihiLGYpKTt2YXIgaD12b2lkIDAsaT1hLnVzZUJsb2NrUGFyYW1zP1tdOnZvaWQgMDtyZXR1cm4gYS51c2VEZXB0aHMmJihoPWUuZGVwdGhzP2IhPWUuZGVwdGhzWzBdP1tiXS5jb25jYXQoZS5kZXB0aHMpOmUuZGVwdGhzOltiXSksKGM9ayhhLm1haW4sYyxnLGUuZGVwdGhzfHxbXSxmLGkpKShiLGUpfWlmKCFiKXRocm93IG5ldyB1W1wiZGVmYXVsdFwiXShcIk5vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZVwiKTtpZighYXx8IWEubWFpbil0aHJvdyBuZXcgdVtcImRlZmF1bHRcIl0oXCJVbmtub3duIHRlbXBsYXRlIG9iamVjdDogXCIrdHlwZW9mIGEpO2EubWFpbi5kZWNvcmF0b3I9YS5tYWluX2QsYi5WTS5jaGVja1JldmlzaW9uKGEuY29tcGlsZXIpO3ZhciBlPWEuY29tcGlsZXImJjc9PT1hLmNvbXBpbGVyWzBdLGc9e3N0cmljdDpmdW5jdGlvbihhLGIsYyl7aWYoIShhJiZiIGluIGEpKXRocm93IG5ldyB1W1wiZGVmYXVsdFwiXSgnXCInK2IrJ1wiIG5vdCBkZWZpbmVkIGluICcrYSx7bG9jOmN9KTtyZXR1cm4gZy5sb29rdXBQcm9wZXJ0eShhLGIpfSxsb29rdXBQcm9wZXJ0eTpmdW5jdGlvbihhLGIpe3ZhciBjPWFbYl07cmV0dXJuIG51bGw9PWM/YzpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxiKT9jOnkucmVzdWx0SXNBbGxvd2VkKGMsZy5wcm90b0FjY2Vzc0NvbnRyb2wsYik/Yzp2b2lkIDB9LGxvb2t1cDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1hLmxlbmd0aCxkPTA7ZDxjO2QrKyl7dmFyIGU9YVtkXSYmZy5sb29rdXBQcm9wZXJ0eShhW2RdLGIpO2lmKG51bGwhPWUpcmV0dXJuIGFbZF1bYl19fSxsYW1iZGE6ZnVuY3Rpb24oYSxiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2EuY2FsbChiKTphfSxlc2NhcGVFeHByZXNzaW9uOnMuZXNjYXBlRXhwcmVzc2lvbixpbnZva2VQYXJ0aWFsOmMsZm46ZnVuY3Rpb24oYil7dmFyIGM9YVtiXTtyZXR1cm4gYy5kZWNvcmF0b3I9YVtiK1wiX2RcIl0sY30scHJvZ3JhbXM6W10scHJvZ3JhbTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBnPXRoaXMucHJvZ3JhbXNbYV0saD10aGlzLmZuKGEpO3JldHVybiBifHxlfHxkfHxjP2c9Zih0aGlzLGEsaCxiLGMsZCxlKTpnfHwoZz10aGlzLnByb2dyYW1zW2FdPWYodGhpcyxhLGgpKSxnfSxkYXRhOmZ1bmN0aW9uKGEsYil7Zm9yKDthJiZiLS07KWE9YS5fcGFyZW50O3JldHVybiBhfSxtZXJnZUlmTmVlZGVkOmZ1bmN0aW9uKGEsYil7dmFyIGM9YXx8YjtyZXR1cm4gYSYmYiYmYSE9PWImJihjPXMuZXh0ZW5kKHt9LGIsYSkpLGN9LG51bGxDb250ZXh0Om4oe30pLG5vb3A6Yi5WTS5ub29wLGNvbXBpbGVySW5mbzphLmNvbXBpbGVyfTtyZXR1cm4gZC5pc1RvcD0hMCxkLl9zZXR1cD1mdW5jdGlvbihjKXtpZihjLnBhcnRpYWwpZy5wcm90b0FjY2Vzc0NvbnRyb2w9Yy5wcm90b0FjY2Vzc0NvbnRyb2wsZy5oZWxwZXJzPWMuaGVscGVycyxnLnBhcnRpYWxzPWMucGFydGlhbHMsZy5kZWNvcmF0b3JzPWMuZGVjb3JhdG9ycyxnLmhvb2tzPWMuaG9va3M7ZWxzZXt2YXIgZD1zLmV4dGVuZCh7fSxiLmhlbHBlcnMsYy5oZWxwZXJzKTtsKGQsZyksZy5oZWxwZXJzPWQsYS51c2VQYXJ0aWFsJiYoZy5wYXJ0aWFscz1nLm1lcmdlSWZOZWVkZWQoYy5wYXJ0aWFscyxiLnBhcnRpYWxzKSksKGEudXNlUGFydGlhbHx8YS51c2VEZWNvcmF0b3JzKSYmKGcuZGVjb3JhdG9ycz1zLmV4dGVuZCh7fSxiLmRlY29yYXRvcnMsYy5kZWNvcmF0b3JzKSksZy5ob29rcz17fSxnLnByb3RvQWNjZXNzQ29udHJvbD15LmNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbChjKTt2YXIgZj1jLmFsbG93Q2FsbHNUb0hlbHBlck1pc3Npbmd8fGU7dy5tb3ZlSGVscGVyVG9Ib29rcyhnLFwiaGVscGVyTWlzc2luZ1wiLGYpLHcubW92ZUhlbHBlclRvSG9va3MoZyxcImJsb2NrSGVscGVyTWlzc2luZ1wiLGYpfX0sZC5fY2hpbGQ9ZnVuY3Rpb24oYixjLGQsZSl7aWYoYS51c2VCbG9ja1BhcmFtcyYmIWQpdGhyb3cgbmV3IHVbXCJkZWZhdWx0XCJdKFwibXVzdCBwYXNzIGJsb2NrIHBhcmFtc1wiKTtpZihhLnVzZURlcHRocyYmIWUpdGhyb3cgbmV3IHVbXCJkZWZhdWx0XCJdKFwibXVzdCBwYXNzIHBhcmVudCBkZXB0aHNcIik7cmV0dXJuIGYoZyxiLGFbYl0sYywwLGQsZSl9LGR9ZnVuY3Rpb24gZihhLGIsYyxkLGUsZixnKXtmdW5jdGlvbiBoKGIpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTF8fHZvaWQgMD09PWFyZ3VtZW50c1sxXT97fTphcmd1bWVudHNbMV0saD1nO3JldHVybiFnfHxiPT1nWzBdfHxiPT09YS5udWxsQ29udGV4dCYmbnVsbD09PWdbMF18fChoPVtiXS5jb25jYXQoZykpLGMoYSxiLGEuaGVscGVycyxhLnBhcnRpYWxzLGUuZGF0YXx8ZCxmJiZbZS5ibG9ja1BhcmFtc10uY29uY2F0KGYpLGgpfXJldHVybiBoPWsoYyxoLGEsZyxkLGYpLGgucHJvZ3JhbT1iLGguZGVwdGg9Zz9nLmxlbmd0aDowLGguYmxvY2tQYXJhbXM9ZXx8MCxofWZ1bmN0aW9uIGcoYSxiLGMpe3JldHVybiBhP2EuY2FsbHx8Yy5uYW1lfHwoYy5uYW1lPWEsYT1jLnBhcnRpYWxzW2FdKTphPVwiQHBhcnRpYWwtYmxvY2tcIj09PWMubmFtZT9jLmRhdGFbXCJwYXJ0aWFsLWJsb2NrXCJdOmMucGFydGlhbHNbYy5uYW1lXSxhfWZ1bmN0aW9uIGgoYSxiLGMpe3ZhciBkPWMuZGF0YSYmYy5kYXRhW1wicGFydGlhbC1ibG9ja1wiXTtjLnBhcnRpYWw9ITAsYy5pZHMmJihjLmRhdGEuY29udGV4dFBhdGg9Yy5pZHNbMF18fGMuZGF0YS5jb250ZXh0UGF0aCk7dmFyIGU9dm9pZCAwO2lmKGMuZm4mJmMuZm4hPT1pJiYhZnVuY3Rpb24oKXtjLmRhdGE9di5jcmVhdGVGcmFtZShjLmRhdGEpO3ZhciBhPWMuZm47ZT1jLmRhdGFbXCJwYXJ0aWFsLWJsb2NrXCJdPWZ1bmN0aW9uKGIpe3ZhciBjPWFyZ3VtZW50cy5sZW5ndGg8PTF8fHZvaWQgMD09PWFyZ3VtZW50c1sxXT97fTphcmd1bWVudHNbMV07cmV0dXJuIGMuZGF0YT12LmNyZWF0ZUZyYW1lKGMuZGF0YSksYy5kYXRhW1wicGFydGlhbC1ibG9ja1wiXT1kLGEoYixjKX0sYS5wYXJ0aWFscyYmKGMucGFydGlhbHM9cy5leHRlbmQoe30sYy5wYXJ0aWFscyxhLnBhcnRpYWxzKSl9KCksdm9pZCAwPT09YSYmZSYmKGE9ZSksdm9pZCAwPT09YSl0aHJvdyBuZXcgdVtcImRlZmF1bHRcIl0oXCJUaGUgcGFydGlhbCBcIitjLm5hbWUrXCIgY291bGQgbm90IGJlIGZvdW5kXCIpO2lmKGEgaW5zdGFuY2VvZiBGdW5jdGlvbilyZXR1cm4gYShiLGMpfWZ1bmN0aW9uIGkoKXtyZXR1cm5cIlwifWZ1bmN0aW9uIGooYSxiKXtyZXR1cm4gYiYmXCJyb290XCJpbiBifHwoYj1iP3YuY3JlYXRlRnJhbWUoYik6e30sYi5yb290PWEpLGJ9ZnVuY3Rpb24gayhhLGIsYyxkLGUsZil7aWYoYS5kZWNvcmF0b3Ipe3ZhciBnPXt9O2I9YS5kZWNvcmF0b3IoYixnLGMsZCYmZFswXSxlLGYsZCkscy5leHRlbmQoYixnKX1yZXR1cm4gYn1mdW5jdGlvbiBsKGEsYil7byhhKS5mb3JFYWNoKGZ1bmN0aW9uKGMpe3ZhciBkPWFbY107YVtjXT1tKGQsYil9KX1mdW5jdGlvbiBtKGEsYil7dmFyIGM9Yi5sb29rdXBQcm9wZXJ0eTtyZXR1cm4geC53cmFwSGVscGVyKGEsZnVuY3Rpb24oYSl7cmV0dXJuIHMuZXh0ZW5kKHtsb29rdXBQcm9wZXJ0eTpjfSxhKX0pfXZhciBuPWMoNzkpW1wiZGVmYXVsdFwiXSxvPWMoNjApW1wiZGVmYXVsdFwiXSxwPWMoMylbXCJkZWZhdWx0XCJdLHE9YygxKVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwLGIuY2hlY2tSZXZpc2lvbj1kLGIudGVtcGxhdGU9ZSxiLndyYXBQcm9ncmFtPWYsYi5yZXNvbHZlUGFydGlhbD1nLGIuaW52b2tlUGFydGlhbD1oLGIubm9vcD1pO3ZhciByPWMoNSkscz1wKHIpLHQ9Yyg2KSx1PXEodCksdj1jKDQpLHc9YygxMCkseD1jKDgyKSx5PWMoNzMpfSxmdW5jdGlvbihhLGIsYyl7YS5leHBvcnRzPXtcImRlZmF1bHRcIjpjKDgwKSxfX2VzTW9kdWxlOiEwfX0sZnVuY3Rpb24oYSxiLGMpe2MoODEpLGEuZXhwb3J0cz1jKDIxKS5PYmplY3Quc2VhbH0sZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMoNDApO2MoNjQpKFwic2VhbFwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYSYmZChiKT9hKGIpOmJ9fSl9LGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYyhhLGIpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGEpcmV0dXJuIGE7dmFyIGM9ZnVuY3Rpb24oKXt2YXIgYz1hcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aC0xXTtyZXR1cm4gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGgtMV09YihjKSxhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07cmV0dXJuIGN9Yi5fX2VzTW9kdWxlPSEwLGIud3JhcEhlbHBlcj1jfSxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO2IuX19lc01vZHVsZT0hMCxiW1wiZGVmYXVsdFwiXT1mdW5jdGlvbihhKXshZnVuY3Rpb24oKXtcIm9iamVjdFwiIT10eXBlb2YgZ2xvYmFsVGhpcyYmKE9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyhcIl9fbWFnaWNfX1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxfX21hZ2ljX18uZ2xvYmFsVGhpcz1fX21hZ2ljX18sZGVsZXRlIE9iamVjdC5wcm90b3R5cGUuX19tYWdpY19fKX0oKTt2YXIgYj1nbG9iYWxUaGlzLkhhbmRsZWJhcnM7YS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGdsb2JhbFRoaXMuSGFuZGxlYmFycz09PWEmJihnbG9iYWxUaGlzLkhhbmRsZWJhcnM9YiksYX19LGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtiLl9fZXNNb2R1bGU9ITA7dmFyIGM9e2hlbHBlcnM6e2hlbHBlckV4cHJlc3Npb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJTdWJFeHByZXNzaW9uXCI9PT1hLnR5cGV8fChcIk11c3RhY2hlU3RhdGVtZW50XCI9PT1hLnR5cGV8fFwiQmxvY2tTdGF0ZW1lbnRcIj09PWEudHlwZSkmJiEhKGEucGFyYW1zJiZhLnBhcmFtcy5sZW5ndGh8fGEuaGFzaCl9LHNjb3BlZElkOmZ1bmN0aW9uKGEpe3JldHVybi9eXFwufHRoaXNcXGIvLnRlc3QoYS5vcmlnaW5hbCl9LHNpbXBsZUlkOmZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5wYXJ0cy5sZW5ndGgmJiFjLmhlbHBlcnMuc2NvcGVkSWQoYSkmJiFhLmRlcHRofX19O2JbXCJkZWZhdWx0XCJdPWMsYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZChhLGIpe2lmKFwiUHJvZ3JhbVwiPT09YS50eXBlKXJldHVybiBhO2lbXCJkZWZhdWx0XCJdLnl5PW8sby5sb2NJbmZvPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgby5Tb3VyY2VMb2NhdGlvbihiJiZiLnNyY05hbWUsYSl9O3ZhciBjPWlbXCJkZWZhdWx0XCJdLnBhcnNlKGEpO3JldHVybiBjfWZ1bmN0aW9uIGUoYSxiKXt2YXIgYz1kKGEsYiksZT1uZXcga1tcImRlZmF1bHRcIl0oYik7cmV0dXJuIGUuYWNjZXB0KGMpfXZhciBmPWMoMSlbXCJkZWZhdWx0XCJdLGc9YygzKVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwLGIucGFyc2VXaXRob3V0UHJvY2Vzc2luZz1kLGIucGFyc2U9ZTt2YXIgaD1jKDg2KSxpPWYoaCksaj1jKDg3KSxrPWYoaiksbD1jKDg5KSxtPWcobCksbj1jKDUpO2IucGFyc2VyPWlbXCJkZWZhdWx0XCJdO3ZhciBvPXt9O24uZXh0ZW5kKG8sbSl9LGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7Yi5fX2VzTW9kdWxlPSEwO3ZhciBjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3RoaXMueXk9e319dmFyIGI9e3RyYWNlOmZ1bmN0aW9uKCl7fSx5eTp7fSxzeW1ib2xzXzp7ZXJyb3I6Mixyb290OjMscHJvZ3JhbTo0LEVPRjo1LHByb2dyYW1fcmVwZXRpdGlvbjA6NixzdGF0ZW1lbnQ6NyxtdXN0YWNoZTo4LGJsb2NrOjkscmF3QmxvY2s6MTAscGFydGlhbDoxMSxwYXJ0aWFsQmxvY2s6MTIsY29udGVudDoxMyxDT01NRU5UOjE0LENPTlRFTlQ6MTUsb3BlblJhd0Jsb2NrOjE2LHJhd0Jsb2NrX3JlcGV0aXRpb24wOjE3LEVORF9SQVdfQkxPQ0s6MTgsT1BFTl9SQVdfQkxPQ0s6MTksaGVscGVyTmFtZToyMCxvcGVuUmF3QmxvY2tfcmVwZXRpdGlvbjA6MjEsb3BlblJhd0Jsb2NrX29wdGlvbjA6MjIsQ0xPU0VfUkFXX0JMT0NLOjIzLG9wZW5CbG9jazoyNCxibG9ja19vcHRpb24wOjI1LGNsb3NlQmxvY2s6MjYsb3BlbkludmVyc2U6MjcsYmxvY2tfb3B0aW9uMToyOCxPUEVOX0JMT0NLOjI5LG9wZW5CbG9ja19yZXBldGl0aW9uMDozMCxvcGVuQmxvY2tfb3B0aW9uMDozMSxvcGVuQmxvY2tfb3B0aW9uMTozMixDTE9TRTozMyxPUEVOX0lOVkVSU0U6MzQsb3BlbkludmVyc2VfcmVwZXRpdGlvbjA6MzUsb3BlbkludmVyc2Vfb3B0aW9uMDozNixvcGVuSW52ZXJzZV9vcHRpb24xOjM3LG9wZW5JbnZlcnNlQ2hhaW46MzgsT1BFTl9JTlZFUlNFX0NIQUlOOjM5LG9wZW5JbnZlcnNlQ2hhaW5fcmVwZXRpdGlvbjA6NDAsb3BlbkludmVyc2VDaGFpbl9vcHRpb24wOjQxLG9wZW5JbnZlcnNlQ2hhaW5fb3B0aW9uMTo0MixpbnZlcnNlQW5kUHJvZ3JhbTo0MyxJTlZFUlNFOjQ0LGludmVyc2VDaGFpbjo0NSxpbnZlcnNlQ2hhaW5fb3B0aW9uMDo0NixPUEVOX0VOREJMT0NLOjQ3LE9QRU46NDgsbXVzdGFjaGVfcmVwZXRpdGlvbjA6NDksbXVzdGFjaGVfb3B0aW9uMDo1MCxPUEVOX1VORVNDQVBFRDo1MSxtdXN0YWNoZV9yZXBldGl0aW9uMTo1MixtdXN0YWNoZV9vcHRpb24xOjUzLENMT1NFX1VORVNDQVBFRDo1NCxPUEVOX1BBUlRJQUw6NTUscGFydGlhbE5hbWU6NTYscGFydGlhbF9yZXBldGl0aW9uMDo1NyxwYXJ0aWFsX29wdGlvbjA6NTgsb3BlblBhcnRpYWxCbG9jazo1OSxPUEVOX1BBUlRJQUxfQkxPQ0s6NjAsb3BlblBhcnRpYWxCbG9ja19yZXBldGl0aW9uMDo2MSxvcGVuUGFydGlhbEJsb2NrX29wdGlvbjA6NjIscGFyYW06NjMsc2V4cHI6NjQsT1BFTl9TRVhQUjo2NSxzZXhwcl9yZXBldGl0aW9uMDo2NixzZXhwcl9vcHRpb24wOjY3LENMT1NFX1NFWFBSOjY4LGhhc2g6NjksaGFzaF9yZXBldGl0aW9uX3BsdXMwOjcwLGhhc2hTZWdtZW50OjcxLElEOjcyLEVRVUFMUzo3MyxibG9ja1BhcmFtczo3NCxPUEVOX0JMT0NLX1BBUkFNUzo3NSxibG9ja1BhcmFtc19yZXBldGl0aW9uX3BsdXMwOjc2LENMT1NFX0JMT0NLX1BBUkFNUzo3NyxwYXRoOjc4LGRhdGFOYW1lOjc5LFNUUklORzo4MCxOVU1CRVI6ODEsQk9PTEVBTjo4MixVTkRFRklORUQ6ODMsTlVMTDo4NCxEQVRBOjg1LHBhdGhTZWdtZW50czo4NixTRVA6ODcsJGFjY2VwdDowLCRlbmQ6MX0sdGVybWluYWxzXzp7MjpcImVycm9yXCIsNTpcIkVPRlwiLDE0OlwiQ09NTUVOVFwiLDE1OlwiQ09OVEVOVFwiLDE4OlwiRU5EX1JBV19CTE9DS1wiLDE5OlwiT1BFTl9SQVdfQkxPQ0tcIiwyMzpcIkNMT1NFX1JBV19CTE9DS1wiLDI5OlwiT1BFTl9CTE9DS1wiLDMzOlwiQ0xPU0VcIiwzNDpcIk9QRU5fSU5WRVJTRVwiLDM5OlwiT1BFTl9JTlZFUlNFX0NIQUlOXCIsNDQ6XCJJTlZFUlNFXCIsNDc6XCJPUEVOX0VOREJMT0NLXCIsNDg6XCJPUEVOXCIsNTE6XCJPUEVOX1VORVNDQVBFRFwiLDU0OlwiQ0xPU0VfVU5FU0NBUEVEXCIsNTU6XCJPUEVOX1BBUlRJQUxcIiw2MDpcIk9QRU5fUEFSVElBTF9CTE9DS1wiLDY1OlwiT1BFTl9TRVhQUlwiLDY4OlwiQ0xPU0VfU0VYUFJcIiw3MjpcIklEXCIsNzM6XCJFUVVBTFNcIiw3NTpcIk9QRU5fQkxPQ0tfUEFSQU1TXCIsNzc6XCJDTE9TRV9CTE9DS19QQVJBTVNcIiw4MDpcIlNUUklOR1wiLDgxOlwiTlVNQkVSXCIsODI6XCJCT09MRUFOXCIsODM6XCJVTkRFRklORURcIiw4NDpcIk5VTExcIiw4NTpcIkRBVEFcIiw4NzpcIlNFUFwifSxwcm9kdWN0aW9uc186WzAsWzMsMl0sWzQsMV0sWzcsMV0sWzcsMV0sWzcsMV0sWzcsMV0sWzcsMV0sWzcsMV0sWzcsMV0sWzEzLDFdLFsxMCwzXSxbMTYsNV0sWzksNF0sWzksNF0sWzI0LDZdLFsyNyw2XSxbMzgsNl0sWzQzLDJdLFs0NSwzXSxbNDUsMV0sWzI2LDNdLFs4LDVdLFs4LDVdLFsxMSw1XSxbMTIsM10sWzU5LDVdLFs2MywxXSxbNjMsMV0sWzY0LDVdLFs2OSwxXSxbNzEsM10sWzc0LDNdLFsyMCwxXSxbMjAsMV0sWzIwLDFdLFsyMCwxXSxbMjAsMV0sWzIwLDFdLFsyMCwxXSxbNTYsMV0sWzU2LDFdLFs3OSwyXSxbNzgsMV0sWzg2LDNdLFs4NiwxXSxbNiwwXSxbNiwyXSxbMTcsMF0sWzE3LDJdLFsyMSwwXSxbMjEsMl0sWzIyLDBdLFsyMiwxXSxbMjUsMF0sWzI1LDFdLFsyOCwwXSxbMjgsMV0sWzMwLDBdLFszMCwyXSxbMzEsMF0sWzMxLDFdLFszMiwwXSxbMzIsMV0sWzM1LDBdLFszNSwyXSxbMzYsMF0sWzM2LDFdLFszNywwXSxbMzcsMV0sWzQwLDBdLFs0MCwyXSxbNDEsMF0sWzQxLDFdLFs0MiwwXSxbNDIsMV0sWzQ2LDBdLFs0NiwxXSxbNDksMF0sWzQ5LDJdLFs1MCwwXSxbNTAsMV0sWzUyLDBdLFs1MiwyXSxbNTMsMF0sWzUzLDFdLFs1NywwXSxbNTcsMl0sWzU4LDBdLFs1OCwxXSxbNjEsMF0sWzYxLDJdLFs2MiwwXSxbNjIsMV0sWzY2LDBdLFs2NiwyXSxbNjcsMF0sWzY3LDFdLFs3MCwxXSxbNzAsMl0sWzc2LDFdLFs3NiwyXV0scGVyZm9ybUFjdGlvbjpmdW5jdGlvbihhLGIsYyxkLGUsZixnKXtcbnZhciBoPWYubGVuZ3RoLTE7c3dpdGNoKGUpe2Nhc2UgMTpyZXR1cm4gZltoLTFdO2Nhc2UgMjp0aGlzLiQ9ZC5wcmVwYXJlUHJvZ3JhbShmW2hdKTticmVhaztjYXNlIDM6dGhpcy4kPWZbaF07YnJlYWs7Y2FzZSA0OnRoaXMuJD1mW2hdO2JyZWFrO2Nhc2UgNTp0aGlzLiQ9ZltoXTticmVhaztjYXNlIDY6dGhpcy4kPWZbaF07YnJlYWs7Y2FzZSA3OnRoaXMuJD1mW2hdO2JyZWFrO2Nhc2UgODp0aGlzLiQ9ZltoXTticmVhaztjYXNlIDk6dGhpcy4kPXt0eXBlOlwiQ29tbWVudFN0YXRlbWVudFwiLHZhbHVlOmQuc3RyaXBDb21tZW50KGZbaF0pLHN0cmlwOmQuc3RyaXBGbGFncyhmW2hdLGZbaF0pLGxvYzpkLmxvY0luZm8odGhpcy5fJCl9O2JyZWFrO2Nhc2UgMTA6dGhpcy4kPXt0eXBlOlwiQ29udGVudFN0YXRlbWVudFwiLG9yaWdpbmFsOmZbaF0sdmFsdWU6ZltoXSxsb2M6ZC5sb2NJbmZvKHRoaXMuXyQpfTticmVhaztjYXNlIDExOnRoaXMuJD1kLnByZXBhcmVSYXdCbG9jayhmW2gtMl0sZltoLTFdLGZbaF0sdGhpcy5fJCk7YnJlYWs7Y2FzZSAxMjp0aGlzLiQ9e3BhdGg6ZltoLTNdLHBhcmFtczpmW2gtMl0saGFzaDpmW2gtMV19O2JyZWFrO2Nhc2UgMTM6dGhpcy4kPWQucHJlcGFyZUJsb2NrKGZbaC0zXSxmW2gtMl0sZltoLTFdLGZbaF0sITEsdGhpcy5fJCk7YnJlYWs7Y2FzZSAxNDp0aGlzLiQ9ZC5wcmVwYXJlQmxvY2soZltoLTNdLGZbaC0yXSxmW2gtMV0sZltoXSwhMCx0aGlzLl8kKTticmVhaztjYXNlIDE1OnRoaXMuJD17b3BlbjpmW2gtNV0scGF0aDpmW2gtNF0scGFyYW1zOmZbaC0zXSxoYXNoOmZbaC0yXSxibG9ja1BhcmFtczpmW2gtMV0sc3RyaXA6ZC5zdHJpcEZsYWdzKGZbaC01XSxmW2hdKX07YnJlYWs7Y2FzZSAxNjp0aGlzLiQ9e3BhdGg6ZltoLTRdLHBhcmFtczpmW2gtM10saGFzaDpmW2gtMl0sYmxvY2tQYXJhbXM6ZltoLTFdLHN0cmlwOmQuc3RyaXBGbGFncyhmW2gtNV0sZltoXSl9O2JyZWFrO2Nhc2UgMTc6dGhpcy4kPXtwYXRoOmZbaC00XSxwYXJhbXM6ZltoLTNdLGhhc2g6ZltoLTJdLGJsb2NrUGFyYW1zOmZbaC0xXSxzdHJpcDpkLnN0cmlwRmxhZ3MoZltoLTVdLGZbaF0pfTticmVhaztjYXNlIDE4OnRoaXMuJD17c3RyaXA6ZC5zdHJpcEZsYWdzKGZbaC0xXSxmW2gtMV0pLHByb2dyYW06ZltoXX07YnJlYWs7Y2FzZSAxOTp2YXIgaT1kLnByZXBhcmVCbG9jayhmW2gtMl0sZltoLTFdLGZbaF0sZltoXSwhMSx0aGlzLl8kKSxqPWQucHJlcGFyZVByb2dyYW0oW2ldLGZbaC0xXS5sb2MpO2ouY2hhaW5lZD0hMCx0aGlzLiQ9e3N0cmlwOmZbaC0yXS5zdHJpcCxwcm9ncmFtOmosY2hhaW46ITB9O2JyZWFrO2Nhc2UgMjA6dGhpcy4kPWZbaF07YnJlYWs7Y2FzZSAyMTp0aGlzLiQ9e3BhdGg6ZltoLTFdLHN0cmlwOmQuc3RyaXBGbGFncyhmW2gtMl0sZltoXSl9O2JyZWFrO2Nhc2UgMjI6dGhpcy4kPWQucHJlcGFyZU11c3RhY2hlKGZbaC0zXSxmW2gtMl0sZltoLTFdLGZbaC00XSxkLnN0cmlwRmxhZ3MoZltoLTRdLGZbaF0pLHRoaXMuXyQpO2JyZWFrO2Nhc2UgMjM6dGhpcy4kPWQucHJlcGFyZU11c3RhY2hlKGZbaC0zXSxmW2gtMl0sZltoLTFdLGZbaC00XSxkLnN0cmlwRmxhZ3MoZltoLTRdLGZbaF0pLHRoaXMuXyQpO2JyZWFrO2Nhc2UgMjQ6dGhpcy4kPXt0eXBlOlwiUGFydGlhbFN0YXRlbWVudFwiLG5hbWU6ZltoLTNdLHBhcmFtczpmW2gtMl0saGFzaDpmW2gtMV0saW5kZW50OlwiXCIsc3RyaXA6ZC5zdHJpcEZsYWdzKGZbaC00XSxmW2hdKSxsb2M6ZC5sb2NJbmZvKHRoaXMuXyQpfTticmVhaztjYXNlIDI1OnRoaXMuJD1kLnByZXBhcmVQYXJ0aWFsQmxvY2soZltoLTJdLGZbaC0xXSxmW2hdLHRoaXMuXyQpO2JyZWFrO2Nhc2UgMjY6dGhpcy4kPXtwYXRoOmZbaC0zXSxwYXJhbXM6ZltoLTJdLGhhc2g6ZltoLTFdLHN0cmlwOmQuc3RyaXBGbGFncyhmW2gtNF0sZltoXSl9O2JyZWFrO2Nhc2UgMjc6dGhpcy4kPWZbaF07YnJlYWs7Y2FzZSAyODp0aGlzLiQ9ZltoXTticmVhaztjYXNlIDI5OnRoaXMuJD17dHlwZTpcIlN1YkV4cHJlc3Npb25cIixwYXRoOmZbaC0zXSxwYXJhbXM6ZltoLTJdLGhhc2g6ZltoLTFdLGxvYzpkLmxvY0luZm8odGhpcy5fJCl9O2JyZWFrO2Nhc2UgMzA6dGhpcy4kPXt0eXBlOlwiSGFzaFwiLHBhaXJzOmZbaF0sbG9jOmQubG9jSW5mbyh0aGlzLl8kKX07YnJlYWs7Y2FzZSAzMTp0aGlzLiQ9e3R5cGU6XCJIYXNoUGFpclwiLGtleTpkLmlkKGZbaC0yXSksdmFsdWU6ZltoXSxsb2M6ZC5sb2NJbmZvKHRoaXMuXyQpfTticmVhaztjYXNlIDMyOnRoaXMuJD1kLmlkKGZbaC0xXSk7YnJlYWs7Y2FzZSAzMzp0aGlzLiQ9ZltoXTticmVhaztjYXNlIDM0OnRoaXMuJD1mW2hdO2JyZWFrO2Nhc2UgMzU6dGhpcy4kPXt0eXBlOlwiU3RyaW5nTGl0ZXJhbFwiLHZhbHVlOmZbaF0sb3JpZ2luYWw6ZltoXSxsb2M6ZC5sb2NJbmZvKHRoaXMuXyQpfTticmVhaztjYXNlIDM2OnRoaXMuJD17dHlwZTpcIk51bWJlckxpdGVyYWxcIix2YWx1ZTpOdW1iZXIoZltoXSksb3JpZ2luYWw6TnVtYmVyKGZbaF0pLGxvYzpkLmxvY0luZm8odGhpcy5fJCl9O2JyZWFrO2Nhc2UgMzc6dGhpcy4kPXt0eXBlOlwiQm9vbGVhbkxpdGVyYWxcIix2YWx1ZTpcInRydWVcIj09PWZbaF0sb3JpZ2luYWw6XCJ0cnVlXCI9PT1mW2hdLGxvYzpkLmxvY0luZm8odGhpcy5fJCl9O2JyZWFrO2Nhc2UgMzg6dGhpcy4kPXt0eXBlOlwiVW5kZWZpbmVkTGl0ZXJhbFwiLG9yaWdpbmFsOnZvaWQgMCx2YWx1ZTp2b2lkIDAsbG9jOmQubG9jSW5mbyh0aGlzLl8kKX07YnJlYWs7Y2FzZSAzOTp0aGlzLiQ9e3R5cGU6XCJOdWxsTGl0ZXJhbFwiLG9yaWdpbmFsOm51bGwsdmFsdWU6bnVsbCxsb2M6ZC5sb2NJbmZvKHRoaXMuXyQpfTticmVhaztjYXNlIDQwOnRoaXMuJD1mW2hdO2JyZWFrO2Nhc2UgNDE6dGhpcy4kPWZbaF07YnJlYWs7Y2FzZSA0Mjp0aGlzLiQ9ZC5wcmVwYXJlUGF0aCghMCxmW2hdLHRoaXMuXyQpO2JyZWFrO2Nhc2UgNDM6dGhpcy4kPWQucHJlcGFyZVBhdGgoITEsZltoXSx0aGlzLl8kKTticmVhaztjYXNlIDQ0OmZbaC0yXS5wdXNoKHtwYXJ0OmQuaWQoZltoXSksb3JpZ2luYWw6ZltoXSxzZXBhcmF0b3I6ZltoLTFdfSksdGhpcy4kPWZbaC0yXTticmVhaztjYXNlIDQ1OnRoaXMuJD1be3BhcnQ6ZC5pZChmW2hdKSxvcmlnaW5hbDpmW2hdfV07YnJlYWs7Y2FzZSA0Njp0aGlzLiQ9W107YnJlYWs7Y2FzZSA0NzpmW2gtMV0ucHVzaChmW2hdKTticmVhaztjYXNlIDQ4OnRoaXMuJD1bXTticmVhaztjYXNlIDQ5OmZbaC0xXS5wdXNoKGZbaF0pO2JyZWFrO2Nhc2UgNTA6dGhpcy4kPVtdO2JyZWFrO2Nhc2UgNTE6ZltoLTFdLnB1c2goZltoXSk7YnJlYWs7Y2FzZSA1ODp0aGlzLiQ9W107YnJlYWs7Y2FzZSA1OTpmW2gtMV0ucHVzaChmW2hdKTticmVhaztjYXNlIDY0OnRoaXMuJD1bXTticmVhaztjYXNlIDY1OmZbaC0xXS5wdXNoKGZbaF0pO2JyZWFrO2Nhc2UgNzA6dGhpcy4kPVtdO2JyZWFrO2Nhc2UgNzE6ZltoLTFdLnB1c2goZltoXSk7YnJlYWs7Y2FzZSA3ODp0aGlzLiQ9W107YnJlYWs7Y2FzZSA3OTpmW2gtMV0ucHVzaChmW2hdKTticmVhaztjYXNlIDgyOnRoaXMuJD1bXTticmVhaztjYXNlIDgzOmZbaC0xXS5wdXNoKGZbaF0pO2JyZWFrO2Nhc2UgODY6dGhpcy4kPVtdO2JyZWFrO2Nhc2UgODc6ZltoLTFdLnB1c2goZltoXSk7YnJlYWs7Y2FzZSA5MDp0aGlzLiQ9W107YnJlYWs7Y2FzZSA5MTpmW2gtMV0ucHVzaChmW2hdKTticmVhaztjYXNlIDk0OnRoaXMuJD1bXTticmVhaztjYXNlIDk1OmZbaC0xXS5wdXNoKGZbaF0pO2JyZWFrO2Nhc2UgOTg6dGhpcy4kPVtmW2hdXTticmVhaztjYXNlIDk5OmZbaC0xXS5wdXNoKGZbaF0pO2JyZWFrO2Nhc2UgMTAwOnRoaXMuJD1bZltoXV07YnJlYWs7Y2FzZSAxMDE6ZltoLTFdLnB1c2goZltoXSl9fSx0YWJsZTpbezM6MSw0OjIsNTpbMiw0Nl0sNjozLDE0OlsyLDQ2XSwxNTpbMiw0Nl0sMTk6WzIsNDZdLDI5OlsyLDQ2XSwzNDpbMiw0Nl0sNDg6WzIsNDZdLDUxOlsyLDQ2XSw1NTpbMiw0Nl0sNjA6WzIsNDZdfSx7MTpbM119LHs1OlsxLDRdfSx7NTpbMiwyXSw3OjUsODo2LDk6NywxMDo4LDExOjksMTI6MTAsMTM6MTEsMTQ6WzEsMTJdLDE1OlsxLDIwXSwxNjoxNywxOTpbMSwyM10sMjQ6MTUsMjc6MTYsMjk6WzEsMjFdLDM0OlsxLDIyXSwzOTpbMiwyXSw0NDpbMiwyXSw0NzpbMiwyXSw0ODpbMSwxM10sNTE6WzEsMTRdLDU1OlsxLDE4XSw1OToxOSw2MDpbMSwyNF19LHsxOlsyLDFdfSx7NTpbMiw0N10sMTQ6WzIsNDddLDE1OlsyLDQ3XSwxOTpbMiw0N10sMjk6WzIsNDddLDM0OlsyLDQ3XSwzOTpbMiw0N10sNDQ6WzIsNDddLDQ3OlsyLDQ3XSw0ODpbMiw0N10sNTE6WzIsNDddLDU1OlsyLDQ3XSw2MDpbMiw0N119LHs1OlsyLDNdLDE0OlsyLDNdLDE1OlsyLDNdLDE5OlsyLDNdLDI5OlsyLDNdLDM0OlsyLDNdLDM5OlsyLDNdLDQ0OlsyLDNdLDQ3OlsyLDNdLDQ4OlsyLDNdLDUxOlsyLDNdLDU1OlsyLDNdLDYwOlsyLDNdfSx7NTpbMiw0XSwxNDpbMiw0XSwxNTpbMiw0XSwxOTpbMiw0XSwyOTpbMiw0XSwzNDpbMiw0XSwzOTpbMiw0XSw0NDpbMiw0XSw0NzpbMiw0XSw0ODpbMiw0XSw1MTpbMiw0XSw1NTpbMiw0XSw2MDpbMiw0XX0sezU6WzIsNV0sMTQ6WzIsNV0sMTU6WzIsNV0sMTk6WzIsNV0sMjk6WzIsNV0sMzQ6WzIsNV0sMzk6WzIsNV0sNDQ6WzIsNV0sNDc6WzIsNV0sNDg6WzIsNV0sNTE6WzIsNV0sNTU6WzIsNV0sNjA6WzIsNV19LHs1OlsyLDZdLDE0OlsyLDZdLDE1OlsyLDZdLDE5OlsyLDZdLDI5OlsyLDZdLDM0OlsyLDZdLDM5OlsyLDZdLDQ0OlsyLDZdLDQ3OlsyLDZdLDQ4OlsyLDZdLDUxOlsyLDZdLDU1OlsyLDZdLDYwOlsyLDZdfSx7NTpbMiw3XSwxNDpbMiw3XSwxNTpbMiw3XSwxOTpbMiw3XSwyOTpbMiw3XSwzNDpbMiw3XSwzOTpbMiw3XSw0NDpbMiw3XSw0NzpbMiw3XSw0ODpbMiw3XSw1MTpbMiw3XSw1NTpbMiw3XSw2MDpbMiw3XX0sezU6WzIsOF0sMTQ6WzIsOF0sMTU6WzIsOF0sMTk6WzIsOF0sMjk6WzIsOF0sMzQ6WzIsOF0sMzk6WzIsOF0sNDQ6WzIsOF0sNDc6WzIsOF0sNDg6WzIsOF0sNTE6WzIsOF0sNTU6WzIsOF0sNjA6WzIsOF19LHs1OlsyLDldLDE0OlsyLDldLDE1OlsyLDldLDE5OlsyLDldLDI5OlsyLDldLDM0OlsyLDldLDM5OlsyLDldLDQ0OlsyLDldLDQ3OlsyLDldLDQ4OlsyLDldLDUxOlsyLDldLDU1OlsyLDldLDYwOlsyLDldfSx7MjA6MjUsNzI6WzEsMzVdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7MjA6MzYsNzI6WzEsMzVdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7NDozNyw2OjMsMTQ6WzIsNDZdLDE1OlsyLDQ2XSwxOTpbMiw0Nl0sMjk6WzIsNDZdLDM0OlsyLDQ2XSwzOTpbMiw0Nl0sNDQ6WzIsNDZdLDQ3OlsyLDQ2XSw0ODpbMiw0Nl0sNTE6WzIsNDZdLDU1OlsyLDQ2XSw2MDpbMiw0Nl19LHs0OjM4LDY6MywxNDpbMiw0Nl0sMTU6WzIsNDZdLDE5OlsyLDQ2XSwyOTpbMiw0Nl0sMzQ6WzIsNDZdLDQ0OlsyLDQ2XSw0NzpbMiw0Nl0sNDg6WzIsNDZdLDUxOlsyLDQ2XSw1NTpbMiw0Nl0sNjA6WzIsNDZdfSx7MTU6WzIsNDhdLDE3OjM5LDE4OlsyLDQ4XX0sezIwOjQxLDU2OjQwLDY0OjQyLDY1OlsxLDQzXSw3MjpbMSwzNV0sNzg6MjYsNzk6MjcsODA6WzEsMjhdLDgxOlsxLDI5XSw4MjpbMSwzMF0sODM6WzEsMzFdLDg0OlsxLDMyXSw4NTpbMSwzNF0sODY6MzN9LHs0OjQ0LDY6MywxNDpbMiw0Nl0sMTU6WzIsNDZdLDE5OlsyLDQ2XSwyOTpbMiw0Nl0sMzQ6WzIsNDZdLDQ3OlsyLDQ2XSw0ODpbMiw0Nl0sNTE6WzIsNDZdLDU1OlsyLDQ2XSw2MDpbMiw0Nl19LHs1OlsyLDEwXSwxNDpbMiwxMF0sMTU6WzIsMTBdLDE4OlsyLDEwXSwxOTpbMiwxMF0sMjk6WzIsMTBdLDM0OlsyLDEwXSwzOTpbMiwxMF0sNDQ6WzIsMTBdLDQ3OlsyLDEwXSw0ODpbMiwxMF0sNTE6WzIsMTBdLDU1OlsyLDEwXSw2MDpbMiwxMF19LHsyMDo0NSw3MjpbMSwzNV0sNzg6MjYsNzk6MjcsODA6WzEsMjhdLDgxOlsxLDI5XSw4MjpbMSwzMF0sODM6WzEsMzFdLDg0OlsxLDMyXSw4NTpbMSwzNF0sODY6MzN9LHsyMDo0Niw3MjpbMSwzNV0sNzg6MjYsNzk6MjcsODA6WzEsMjhdLDgxOlsxLDI5XSw4MjpbMSwzMF0sODM6WzEsMzFdLDg0OlsxLDMyXSw4NTpbMSwzNF0sODY6MzN9LHsyMDo0Nyw3MjpbMSwzNV0sNzg6MjYsNzk6MjcsODA6WzEsMjhdLDgxOlsxLDI5XSw4MjpbMSwzMF0sODM6WzEsMzFdLDg0OlsxLDMyXSw4NTpbMSwzNF0sODY6MzN9LHsyMDo0MSw1Njo0OCw2NDo0Miw2NTpbMSw0M10sNzI6WzEsMzVdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7MzM6WzIsNzhdLDQ5OjQ5LDY1OlsyLDc4XSw3MjpbMiw3OF0sODA6WzIsNzhdLDgxOlsyLDc4XSw4MjpbMiw3OF0sODM6WzIsNzhdLDg0OlsyLDc4XSw4NTpbMiw3OF19LHsyMzpbMiwzM10sMzM6WzIsMzNdLDU0OlsyLDMzXSw2NTpbMiwzM10sNjg6WzIsMzNdLDcyOlsyLDMzXSw3NTpbMiwzM10sODA6WzIsMzNdLDgxOlsyLDMzXSw4MjpbMiwzM10sODM6WzIsMzNdLDg0OlsyLDMzXSw4NTpbMiwzM119LHsyMzpbMiwzNF0sMzM6WzIsMzRdLDU0OlsyLDM0XSw2NTpbMiwzNF0sNjg6WzIsMzRdLDcyOlsyLDM0XSw3NTpbMiwzNF0sODA6WzIsMzRdLDgxOlsyLDM0XSw4MjpbMiwzNF0sODM6WzIsMzRdLDg0OlsyLDM0XSw4NTpbMiwzNF19LHsyMzpbMiwzNV0sMzM6WzIsMzVdLDU0OlsyLDM1XSw2NTpbMiwzNV0sNjg6WzIsMzVdLDcyOlsyLDM1XSw3NTpbMiwzNV0sODA6WzIsMzVdLDgxOlsyLDM1XSw4MjpbMiwzNV0sODM6WzIsMzVdLDg0OlsyLDM1XSw4NTpbMiwzNV19LHsyMzpbMiwzNl0sMzM6WzIsMzZdLDU0OlsyLDM2XSw2NTpbMiwzNl0sNjg6WzIsMzZdLDcyOlsyLDM2XSw3NTpbMiwzNl0sODA6WzIsMzZdLDgxOlsyLDM2XSw4MjpbMiwzNl0sODM6WzIsMzZdLDg0OlsyLDM2XSw4NTpbMiwzNl19LHsyMzpbMiwzN10sMzM6WzIsMzddLDU0OlsyLDM3XSw2NTpbMiwzN10sNjg6WzIsMzddLDcyOlsyLDM3XSw3NTpbMiwzN10sODA6WzIsMzddLDgxOlsyLDM3XSw4MjpbMiwzN10sODM6WzIsMzddLDg0OlsyLDM3XSw4NTpbMiwzN119LHsyMzpbMiwzOF0sMzM6WzIsMzhdLDU0OlsyLDM4XSw2NTpbMiwzOF0sNjg6WzIsMzhdLDcyOlsyLDM4XSw3NTpbMiwzOF0sODA6WzIsMzhdLDgxOlsyLDM4XSw4MjpbMiwzOF0sODM6WzIsMzhdLDg0OlsyLDM4XSw4NTpbMiwzOF19LHsyMzpbMiwzOV0sMzM6WzIsMzldLDU0OlsyLDM5XSw2NTpbMiwzOV0sNjg6WzIsMzldLDcyOlsyLDM5XSw3NTpbMiwzOV0sODA6WzIsMzldLDgxOlsyLDM5XSw4MjpbMiwzOV0sODM6WzIsMzldLDg0OlsyLDM5XSw4NTpbMiwzOV19LHsyMzpbMiw0M10sMzM6WzIsNDNdLDU0OlsyLDQzXSw2NTpbMiw0M10sNjg6WzIsNDNdLDcyOlsyLDQzXSw3NTpbMiw0M10sODA6WzIsNDNdLDgxOlsyLDQzXSw4MjpbMiw0M10sODM6WzIsNDNdLDg0OlsyLDQzXSw4NTpbMiw0M10sODc6WzEsNTBdfSx7NzI6WzEsMzVdLDg2OjUxfSx7MjM6WzIsNDVdLDMzOlsyLDQ1XSw1NDpbMiw0NV0sNjU6WzIsNDVdLDY4OlsyLDQ1XSw3MjpbMiw0NV0sNzU6WzIsNDVdLDgwOlsyLDQ1XSw4MTpbMiw0NV0sODI6WzIsNDVdLDgzOlsyLDQ1XSw4NDpbMiw0NV0sODU6WzIsNDVdLDg3OlsyLDQ1XX0sezUyOjUyLDU0OlsyLDgyXSw2NTpbMiw4Ml0sNzI6WzIsODJdLDgwOlsyLDgyXSw4MTpbMiw4Ml0sODI6WzIsODJdLDgzOlsyLDgyXSw4NDpbMiw4Ml0sODU6WzIsODJdfSx7MjU6NTMsMzg6NTUsMzk6WzEsNTddLDQzOjU2LDQ0OlsxLDU4XSw0NTo1NCw0NzpbMiw1NF19LHsyODo1OSw0Mzo2MCw0NDpbMSw1OF0sNDc6WzIsNTZdfSx7MTM6NjIsMTU6WzEsMjBdLDE4OlsxLDYxXX0sezMzOlsyLDg2XSw1Nzo2Myw2NTpbMiw4Nl0sNzI6WzIsODZdLDgwOlsyLDg2XSw4MTpbMiw4Nl0sODI6WzIsODZdLDgzOlsyLDg2XSw4NDpbMiw4Nl0sODU6WzIsODZdfSx7MzM6WzIsNDBdLDY1OlsyLDQwXSw3MjpbMiw0MF0sODA6WzIsNDBdLDgxOlsyLDQwXSw4MjpbMiw0MF0sODM6WzIsNDBdLDg0OlsyLDQwXSw4NTpbMiw0MF19LHszMzpbMiw0MV0sNjU6WzIsNDFdLDcyOlsyLDQxXSw4MDpbMiw0MV0sODE6WzIsNDFdLDgyOlsyLDQxXSw4MzpbMiw0MV0sODQ6WzIsNDFdLDg1OlsyLDQxXX0sezIwOjY0LDcyOlsxLDM1XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezI2OjY1LDQ3OlsxLDY2XX0sezMwOjY3LDMzOlsyLDU4XSw2NTpbMiw1OF0sNzI6WzIsNThdLDc1OlsyLDU4XSw4MDpbMiw1OF0sODE6WzIsNThdLDgyOlsyLDU4XSw4MzpbMiw1OF0sODQ6WzIsNThdLDg1OlsyLDU4XX0sezMzOlsyLDY0XSwzNTo2OCw2NTpbMiw2NF0sNzI6WzIsNjRdLDc1OlsyLDY0XSw4MDpbMiw2NF0sODE6WzIsNjRdLDgyOlsyLDY0XSw4MzpbMiw2NF0sODQ6WzIsNjRdLDg1OlsyLDY0XX0sezIxOjY5LDIzOlsyLDUwXSw2NTpbMiw1MF0sNzI6WzIsNTBdLDgwOlsyLDUwXSw4MTpbMiw1MF0sODI6WzIsNTBdLDgzOlsyLDUwXSw4NDpbMiw1MF0sODU6WzIsNTBdfSx7MzM6WzIsOTBdLDYxOjcwLDY1OlsyLDkwXSw3MjpbMiw5MF0sODA6WzIsOTBdLDgxOlsyLDkwXSw4MjpbMiw5MF0sODM6WzIsOTBdLDg0OlsyLDkwXSw4NTpbMiw5MF19LHsyMDo3NCwzMzpbMiw4MF0sNTA6NzEsNjM6NzIsNjQ6NzUsNjU6WzEsNDNdLDY5OjczLDcwOjc2LDcxOjc3LDcyOlsxLDc4XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezcyOlsxLDc5XX0sezIzOlsyLDQyXSwzMzpbMiw0Ml0sNTQ6WzIsNDJdLDY1OlsyLDQyXSw2ODpbMiw0Ml0sNzI6WzIsNDJdLDc1OlsyLDQyXSw4MDpbMiw0Ml0sODE6WzIsNDJdLDgyOlsyLDQyXSw4MzpbMiw0Ml0sODQ6WzIsNDJdLDg1OlsyLDQyXSw4NzpbMSw1MF19LHsyMDo3NCw1Mzo4MCw1NDpbMiw4NF0sNjM6ODEsNjQ6NzUsNjU6WzEsNDNdLDY5OjgyLDcwOjc2LDcxOjc3LDcyOlsxLDc4XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezI2OjgzLDQ3OlsxLDY2XX0sezQ3OlsyLDU1XX0sezQ6ODQsNjozLDE0OlsyLDQ2XSwxNTpbMiw0Nl0sMTk6WzIsNDZdLDI5OlsyLDQ2XSwzNDpbMiw0Nl0sMzk6WzIsNDZdLDQ0OlsyLDQ2XSw0NzpbMiw0Nl0sNDg6WzIsNDZdLDUxOlsyLDQ2XSw1NTpbMiw0Nl0sNjA6WzIsNDZdfSx7NDc6WzIsMjBdfSx7MjA6ODUsNzI6WzEsMzVdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7NDo4Niw2OjMsMTQ6WzIsNDZdLDE1OlsyLDQ2XSwxOTpbMiw0Nl0sMjk6WzIsNDZdLDM0OlsyLDQ2XSw0NzpbMiw0Nl0sNDg6WzIsNDZdLDUxOlsyLDQ2XSw1NTpbMiw0Nl0sNjA6WzIsNDZdfSx7MjY6ODcsNDc6WzEsNjZdfSx7NDc6WzIsNTddfSx7NTpbMiwxMV0sMTQ6WzIsMTFdLDE1OlsyLDExXSwxOTpbMiwxMV0sMjk6WzIsMTFdLDM0OlsyLDExXSwzOTpbMiwxMV0sNDQ6WzIsMTFdLDQ3OlsyLDExXSw0ODpbMiwxMV0sNTE6WzIsMTFdLDU1OlsyLDExXSw2MDpbMiwxMV19LHsxNTpbMiw0OV0sMTg6WzIsNDldfSx7MjA6NzQsMzM6WzIsODhdLDU4Ojg4LDYzOjg5LDY0Ojc1LDY1OlsxLDQzXSw2OTo5MCw3MDo3Niw3MTo3Nyw3MjpbMSw3OF0sNzg6MjYsNzk6MjcsODA6WzEsMjhdLDgxOlsxLDI5XSw4MjpbMSwzMF0sODM6WzEsMzFdLDg0OlsxLDMyXSw4NTpbMSwzNF0sODY6MzN9LHs2NTpbMiw5NF0sNjY6OTEsNjg6WzIsOTRdLDcyOlsyLDk0XSw4MDpbMiw5NF0sODE6WzIsOTRdLDgyOlsyLDk0XSw4MzpbMiw5NF0sODQ6WzIsOTRdLDg1OlsyLDk0XX0sezU6WzIsMjVdLDE0OlsyLDI1XSwxNTpbMiwyNV0sMTk6WzIsMjVdLDI5OlsyLDI1XSwzNDpbMiwyNV0sMzk6WzIsMjVdLDQ0OlsyLDI1XSw0NzpbMiwyNV0sNDg6WzIsMjVdLDUxOlsyLDI1XSw1NTpbMiwyNV0sNjA6WzIsMjVdfSx7MjA6OTIsNzI6WzEsMzVdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7MjA6NzQsMzE6OTMsMzM6WzIsNjBdLDYzOjk0LDY0Ojc1LDY1OlsxLDQzXSw2OTo5NSw3MDo3Niw3MTo3Nyw3MjpbMSw3OF0sNzU6WzIsNjBdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7MjA6NzQsMzM6WzIsNjZdLDM2Ojk2LDYzOjk3LDY0Ojc1LDY1OlsxLDQzXSw2OTo5OCw3MDo3Niw3MTo3Nyw3MjpbMSw3OF0sNzU6WzIsNjZdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7MjA6NzQsMjI6OTksMjM6WzIsNTJdLDYzOjEwMCw2NDo3NSw2NTpbMSw0M10sNjk6MTAxLDcwOjc2LDcxOjc3LDcyOlsxLDc4XSw3ODoyNiw3OToyNyw4MDpbMSwyOF0sODE6WzEsMjldLDgyOlsxLDMwXSw4MzpbMSwzMV0sODQ6WzEsMzJdLDg1OlsxLDM0XSw4NjozM30sezIwOjc0LDMzOlsyLDkyXSw2MjoxMDIsNjM6MTAzLDY0Ojc1LDY1OlsxLDQzXSw2OToxMDQsNzA6NzYsNzE6NzcsNzI6WzEsNzhdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7MzM6WzEsMTA1XX0sezMzOlsyLDc5XSw2NTpbMiw3OV0sNzI6WzIsNzldLDgwOlsyLDc5XSw4MTpbMiw3OV0sODI6WzIsNzldLDgzOlsyLDc5XSw4NDpbMiw3OV0sODU6WzIsNzldfSx7MzM6WzIsODFdfSx7MjM6WzIsMjddLDMzOlsyLDI3XSw1NDpbMiwyN10sNjU6WzIsMjddLDY4OlsyLDI3XSw3MjpbMiwyN10sNzU6WzIsMjddLDgwOlsyLDI3XSw4MTpbMiwyN10sODI6WzIsMjddLDgzOlsyLDI3XSw4NDpbMiwyN10sODU6WzIsMjddfSx7MjM6WzIsMjhdLDMzOlsyLDI4XSw1NDpbMiwyOF0sNjU6WzIsMjhdLDY4OlsyLDI4XSw3MjpbMiwyOF0sNzU6WzIsMjhdLDgwOlsyLDI4XSw4MTpbMiwyOF0sODI6WzIsMjhdLDgzOlsyLDI4XSw4NDpbMiwyOF0sODU6WzIsMjhdfSx7MjM6WzIsMzBdLDMzOlsyLDMwXSw1NDpbMiwzMF0sNjg6WzIsMzBdLDcxOjEwNiw3MjpbMSwxMDddLDc1OlsyLDMwXX0sezIzOlsyLDk4XSwzMzpbMiw5OF0sNTQ6WzIsOThdLDY4OlsyLDk4XSw3MjpbMiw5OF0sNzU6WzIsOThdfSx7MjM6WzIsNDVdLDMzOlsyLDQ1XSw1NDpbMiw0NV0sNjU6WzIsNDVdLDY4OlsyLDQ1XSw3MjpbMiw0NV0sNzM6WzEsMTA4XSw3NTpbMiw0NV0sODA6WzIsNDVdLDgxOlsyLDQ1XSw4MjpbMiw0NV0sODM6WzIsNDVdLDg0OlsyLDQ1XSw4NTpbMiw0NV0sODc6WzIsNDVdfSx7MjM6WzIsNDRdLDMzOlsyLDQ0XSw1NDpbMiw0NF0sNjU6WzIsNDRdLDY4OlsyLDQ0XSw3MjpbMiw0NF0sNzU6WzIsNDRdLDgwOlsyLDQ0XSw4MTpbMiw0NF0sODI6WzIsNDRdLDgzOlsyLDQ0XSw4NDpbMiw0NF0sODU6WzIsNDRdLDg3OlsyLDQ0XX0sezU0OlsxLDEwOV19LHs1NDpbMiw4M10sNjU6WzIsODNdLDcyOlsyLDgzXSw4MDpbMiw4M10sODE6WzIsODNdLDgyOlsyLDgzXSw4MzpbMiw4M10sODQ6WzIsODNdLDg1OlsyLDgzXX0sezU0OlsyLDg1XX0sezU6WzIsMTNdLDE0OlsyLDEzXSwxNTpbMiwxM10sMTk6WzIsMTNdLDI5OlsyLDEzXSwzNDpbMiwxM10sMzk6WzIsMTNdLDQ0OlsyLDEzXSw0NzpbMiwxM10sNDg6WzIsMTNdLDUxOlsyLDEzXSw1NTpbMiwxM10sNjA6WzIsMTNdfSx7Mzg6NTUsMzk6WzEsNTddLDQzOjU2LDQ0OlsxLDU4XSw0NToxMTEsNDY6MTEwLDQ3OlsyLDc2XX0sezMzOlsyLDcwXSw0MDoxMTIsNjU6WzIsNzBdLDcyOlsyLDcwXSw3NTpbMiw3MF0sODA6WzIsNzBdLDgxOlsyLDcwXSw4MjpbMiw3MF0sODM6WzIsNzBdLDg0OlsyLDcwXSw4NTpbMiw3MF19LHs0NzpbMiwxOF19LHs1OlsyLDE0XSwxNDpbMiwxNF0sMTU6WzIsMTRdLDE5OlsyLDE0XSwyOTpbMiwxNF0sMzQ6WzIsMTRdLDM5OlsyLDE0XSw0NDpbMiwxNF0sNDc6WzIsMTRdLDQ4OlsyLDE0XSw1MTpbMiwxNF0sNTU6WzIsMTRdLDYwOlsyLDE0XX0sezMzOlsxLDExM119LHszMzpbMiw4N10sNjU6WzIsODddLDcyOlsyLDg3XSw4MDpbMiw4N10sODE6WzIsODddLDgyOlsyLDg3XSw4MzpbMiw4N10sODQ6WzIsODddLDg1OlsyLDg3XX0sezMzOlsyLDg5XX0sezIwOjc0LDYzOjExNSw2NDo3NSw2NTpbMSw0M10sNjc6MTE0LDY4OlsyLDk2XSw2OToxMTYsNzA6NzYsNzE6NzcsNzI6WzEsNzhdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7MzM6WzEsMTE3XX0sezMyOjExOCwzMzpbMiw2Ml0sNzQ6MTE5LDc1OlsxLDEyMF19LHszMzpbMiw1OV0sNjU6WzIsNTldLDcyOlsyLDU5XSw3NTpbMiw1OV0sODA6WzIsNTldLDgxOlsyLDU5XSw4MjpbMiw1OV0sODM6WzIsNTldLDg0OlsyLDU5XSw4NTpbMiw1OV19LHszMzpbMiw2MV0sNzU6WzIsNjFdfSx7MzM6WzIsNjhdLDM3OjEyMSw3NDoxMjIsNzU6WzEsMTIwXX0sezMzOlsyLDY1XSw2NTpbMiw2NV0sNzI6WzIsNjVdLDc1OlsyLDY1XSw4MDpbMiw2NV0sODE6WzIsNjVdLDgyOlsyLDY1XSw4MzpbMiw2NV0sODQ6WzIsNjVdLDg1OlsyLDY1XX0sezMzOlsyLDY3XSw3NTpbMiw2N119LHsyMzpbMSwxMjNdfSx7MjM6WzIsNTFdLDY1OlsyLDUxXSw3MjpbMiw1MV0sODA6WzIsNTFdLDgxOlsyLDUxXSw4MjpbMiw1MV0sODM6WzIsNTFdLDg0OlsyLDUxXSw4NTpbMiw1MV19LHsyMzpbMiw1M119LHszMzpbMSwxMjRdfSx7MzM6WzIsOTFdLDY1OlsyLDkxXSw3MjpbMiw5MV0sODA6WzIsOTFdLDgxOlsyLDkxXSw4MjpbMiw5MV0sODM6WzIsOTFdLDg0OlsyLDkxXSw4NTpbMiw5MV19LHszMzpbMiw5M119LHs1OlsyLDIyXSwxNDpbMiwyMl0sMTU6WzIsMjJdLDE5OlsyLDIyXSwyOTpbMiwyMl0sMzQ6WzIsMjJdLDM5OlsyLDIyXSw0NDpbMiwyMl0sNDc6WzIsMjJdLDQ4OlsyLDIyXSw1MTpbMiwyMl0sNTU6WzIsMjJdLDYwOlsyLDIyXX0sezIzOlsyLDk5XSwzMzpbMiw5OV0sNTQ6WzIsOTldLDY4OlsyLDk5XSw3MjpbMiw5OV0sNzU6WzIsOTldfSx7NzM6WzEsMTA4XX0sezIwOjc0LDYzOjEyNSw2NDo3NSw2NTpbMSw0M10sNzI6WzEsMzVdLDc4OjI2LDc5OjI3LDgwOlsxLDI4XSw4MTpbMSwyOV0sODI6WzEsMzBdLDgzOlsxLDMxXSw4NDpbMSwzMl0sODU6WzEsMzRdLDg2OjMzfSx7NTpbMiwyM10sMTQ6WzIsMjNdLDE1OlsyLDIzXSwxOTpbMiwyM10sMjk6WzIsMjNdLDM0OlsyLDIzXSwzOTpbMiwyM10sNDQ6WzIsMjNdLDQ3OlsyLDIzXSw0ODpbMiwyM10sNTE6WzIsMjNdLDU1OlsyLDIzXSw2MDpbMiwyM119LHs0NzpbMiwxOV19LHs0NzpbMiw3N119LHsyMDo3NCwzMzpbMiw3Ml0sNDE6MTI2LDYzOjEyNyw2NDo3NSw2NTpbMSw0M10sNjk6MTI4LDcwOjc2LDcxOjc3LDcyOlsxLDc4XSw3NTpbMiw3Ml0sNzg6MjYsNzk6MjcsODA6WzEsMjhdLDgxOlsxLDI5XSw4MjpbMSwzMF0sODM6WzEsMzFdLDg0OlsxLDMyXSw4NTpbMSwzNF0sODY6MzN9LHs1OlsyLDI0XSwxNDpbMiwyNF0sMTU6WzIsMjRdLDE5OlsyLDI0XSwyOTpbMiwyNF0sMzQ6WzIsMjRdLDM5OlsyLDI0XSw0NDpbMiwyNF0sNDc6WzIsMjRdLDQ4OlsyLDI0XSw1MTpbMiwyNF0sNTU6WzIsMjRdLDYwOlsyLDI0XX0sezY4OlsxLDEyOV19LHs2NTpbMiw5NV0sNjg6WzIsOTVdLDcyOlsyLDk1XSw4MDpbMiw5NV0sODE6WzIsOTVdLDgyOlsyLDk1XSw4MzpbMiw5NV0sODQ6WzIsOTVdLDg1OlsyLDk1XX0sezY4OlsyLDk3XX0sezU6WzIsMjFdLDE0OlsyLDIxXSwxNTpbMiwyMV0sMTk6WzIsMjFdLDI5OlsyLDIxXSwzNDpbMiwyMV0sMzk6WzIsMjFdLDQ0OlsyLDIxXSw0NzpbMiwyMV0sNDg6WzIsMjFdLDUxOlsyLDIxXSw1NTpbMiwyMV0sNjA6WzIsMjFdfSx7MzM6WzEsMTMwXX0sezMzOlsyLDYzXX0sezcyOlsxLDEzMl0sNzY6MTMxfSx7MzM6WzEsMTMzXX0sezMzOlsyLDY5XX0sezE1OlsyLDEyXSwxODpbMiwxMl19LHsxNDpbMiwyNl0sMTU6WzIsMjZdLDE5OlsyLDI2XSwyOTpbMiwyNl0sMzQ6WzIsMjZdLDQ3OlsyLDI2XSw0ODpbMiwyNl0sNTE6WzIsMjZdLDU1OlsyLDI2XSw2MDpbMiwyNl19LHsyMzpbMiwzMV0sMzM6WzIsMzFdLDU0OlsyLDMxXSw2ODpbMiwzMV0sNzI6WzIsMzFdLDc1OlsyLDMxXX0sezMzOlsyLDc0XSw0MjoxMzQsNzQ6MTM1LDc1OlsxLDEyMF19LHszMzpbMiw3MV0sNjU6WzIsNzFdLDcyOlsyLDcxXSw3NTpbMiw3MV0sODA6WzIsNzFdLDgxOlsyLDcxXSw4MjpbMiw3MV0sODM6WzIsNzFdLDg0OlsyLDcxXSw4NTpbMiw3MV19LHszMzpbMiw3M10sNzU6WzIsNzNdfSx7MjM6WzIsMjldLDMzOlsyLDI5XSw1NDpbMiwyOV0sNjU6WzIsMjldLDY4OlsyLDI5XSw3MjpbMiwyOV0sNzU6WzIsMjldLDgwOlsyLDI5XSw4MTpbMiwyOV0sODI6WzIsMjldLDgzOlsyLDI5XSw4NDpbMiwyOV0sODU6WzIsMjldfSx7MTQ6WzIsMTVdLDE1OlsyLDE1XSwxOTpbMiwxNV0sMjk6WzIsMTVdLDM0OlsyLDE1XSwzOTpbMiwxNV0sNDQ6WzIsMTVdLDQ3OlsyLDE1XSw0ODpbMiwxNV0sNTE6WzIsMTVdLDU1OlsyLDE1XSw2MDpbMiwxNV19LHs3MjpbMSwxMzddLDc3OlsxLDEzNl19LHs3MjpbMiwxMDBdLDc3OlsyLDEwMF19LHsxNDpbMiwxNl0sMTU6WzIsMTZdLDE5OlsyLDE2XSwyOTpbMiwxNl0sMzQ6WzIsMTZdLDQ0OlsyLDE2XSw0NzpbMiwxNl0sNDg6WzIsMTZdLDUxOlsyLDE2XSw1NTpbMiwxNl0sNjA6WzIsMTZdfSx7MzM6WzEsMTM4XX0sezMzOlsyLDc1XX0sezMzOlsyLDMyXX0sezcyOlsyLDEwMV0sNzc6WzIsMTAxXX0sezE0OlsyLDE3XSwxNTpbMiwxN10sMTk6WzIsMTddLDI5OlsyLDE3XSwzNDpbMiwxN10sMzk6WzIsMTddLDQ0OlsyLDE3XSw0NzpbMiwxN10sNDg6WzIsMTddLDUxOlsyLDE3XSw1NTpbMiwxN10sNjA6WzIsMTddfV0sZGVmYXVsdEFjdGlvbnM6ezQ6WzIsMV0sNTQ6WzIsNTVdLDU2OlsyLDIwXSw2MDpbMiw1N10sNzM6WzIsODFdLDgyOlsyLDg1XSw4NjpbMiwxOF0sOTA6WzIsODldLDEwMTpbMiw1M10sMTA0OlsyLDkzXSwxMTA6WzIsMTldLDExMTpbMiw3N10sMTE2OlsyLDk3XSwxMTk6WzIsNjNdLDEyMjpbMiw2OV0sMTM1OlsyLDc1XSwxMzY6WzIsMzJdfSxwYXJzZUVycm9yOmZ1bmN0aW9uKGEsYil7dGhyb3cgbmV3IEVycm9yKGEpfSxwYXJzZTpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7dmFyIGE7cmV0dXJuIGE9Yy5sZXhlci5sZXgoKXx8MSxcIm51bWJlclwiIT10eXBlb2YgYSYmKGE9Yy5zeW1ib2xzX1thXXx8YSksYX12YXIgYz10aGlzLGQ9WzBdLGU9W251bGxdLGY9W10sZz10aGlzLnRhYmxlLGg9XCJcIixpPTAsaj0wLGs9MDt0aGlzLmxleGVyLnNldElucHV0KGEpLHRoaXMubGV4ZXIueXk9dGhpcy55eSx0aGlzLnl5LmxleGVyPXRoaXMubGV4ZXIsdGhpcy55eS5wYXJzZXI9dGhpcyxcInVuZGVmaW5lZFwiPT10eXBlb2YgdGhpcy5sZXhlci55eWxsb2MmJih0aGlzLmxleGVyLnl5bGxvYz17fSk7dmFyIGw9dGhpcy5sZXhlci55eWxsb2M7Zi5wdXNoKGwpO3ZhciBtPXRoaXMubGV4ZXIub3B0aW9ucyYmdGhpcy5sZXhlci5vcHRpb25zLnJhbmdlcztcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLnl5LnBhcnNlRXJyb3ImJih0aGlzLnBhcnNlRXJyb3I9dGhpcy55eS5wYXJzZUVycm9yKTtmb3IodmFyIG4sbyxwLHEscixzLHQsdSx2LHc9e307Oyl7aWYocD1kW2QubGVuZ3RoLTFdLHRoaXMuZGVmYXVsdEFjdGlvbnNbcF0/cT10aGlzLmRlZmF1bHRBY3Rpb25zW3BdOihudWxsIT09biYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG58fChuPWIoKSkscT1nW3BdJiZnW3BdW25dKSxcInVuZGVmaW5lZFwiPT10eXBlb2YgcXx8IXEubGVuZ3RofHwhcVswXSl7dmFyIHg9XCJcIjtpZighayl7dj1bXTtmb3IocyBpbiBnW3BdKXRoaXMudGVybWluYWxzX1tzXSYmcz4yJiZ2LnB1c2goXCInXCIrdGhpcy50ZXJtaW5hbHNfW3NdK1wiJ1wiKTt4PXRoaXMubGV4ZXIuc2hvd1Bvc2l0aW9uP1wiUGFyc2UgZXJyb3Igb24gbGluZSBcIisoaSsxKStcIjpcXG5cIit0aGlzLmxleGVyLnNob3dQb3NpdGlvbigpK1wiXFxuRXhwZWN0aW5nIFwiK3Yuam9pbihcIiwgXCIpK1wiLCBnb3QgJ1wiKyh0aGlzLnRlcm1pbmFsc19bbl18fG4pK1wiJ1wiOlwiUGFyc2UgZXJyb3Igb24gbGluZSBcIisoaSsxKStcIjogVW5leHBlY3RlZCBcIisoMT09bj9cImVuZCBvZiBpbnB1dFwiOlwiJ1wiKyh0aGlzLnRlcm1pbmFsc19bbl18fG4pK1wiJ1wiKSx0aGlzLnBhcnNlRXJyb3IoeCx7dGV4dDp0aGlzLmxleGVyLm1hdGNoLHRva2VuOnRoaXMudGVybWluYWxzX1tuXXx8bixsaW5lOnRoaXMubGV4ZXIueXlsaW5lbm8sbG9jOmwsZXhwZWN0ZWQ6dn0pfX1pZihxWzBdaW5zdGFuY2VvZiBBcnJheSYmcS5sZW5ndGg+MSl0aHJvdyBuZXcgRXJyb3IoXCJQYXJzZSBFcnJvcjogbXVsdGlwbGUgYWN0aW9ucyBwb3NzaWJsZSBhdCBzdGF0ZTogXCIrcCtcIiwgdG9rZW46IFwiK24pO3N3aXRjaChxWzBdKXtjYXNlIDE6ZC5wdXNoKG4pLGUucHVzaCh0aGlzLmxleGVyLnl5dGV4dCksZi5wdXNoKHRoaXMubGV4ZXIueXlsbG9jKSxkLnB1c2gocVsxXSksbj1udWxsLG8/KG49byxvPW51bGwpOihqPXRoaXMubGV4ZXIueXlsZW5nLGg9dGhpcy5sZXhlci55eXRleHQsaT10aGlzLmxleGVyLnl5bGluZW5vLGw9dGhpcy5sZXhlci55eWxsb2Msaz4wJiZrLS0pO2JyZWFrO2Nhc2UgMjppZih0PXRoaXMucHJvZHVjdGlvbnNfW3FbMV1dWzFdLHcuJD1lW2UubGVuZ3RoLXRdLHcuXyQ9e2ZpcnN0X2xpbmU6ZltmLmxlbmd0aC0odHx8MSldLmZpcnN0X2xpbmUsbGFzdF9saW5lOmZbZi5sZW5ndGgtMV0ubGFzdF9saW5lLGZpcnN0X2NvbHVtbjpmW2YubGVuZ3RoLSh0fHwxKV0uZmlyc3RfY29sdW1uLGxhc3RfY29sdW1uOmZbZi5sZW5ndGgtMV0ubGFzdF9jb2x1bW59LG0mJih3Ll8kLnJhbmdlPVtmW2YubGVuZ3RoLSh0fHwxKV0ucmFuZ2VbMF0sZltmLmxlbmd0aC0xXS5yYW5nZVsxXV0pLHI9dGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwodyxoLGosaSx0aGlzLnl5LHFbMV0sZSxmKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgcilyZXR1cm4gcjt0JiYoZD1kLnNsaWNlKDAsLTEqdCoyKSxlPWUuc2xpY2UoMCwtMSp0KSxmPWYuc2xpY2UoMCwtMSp0KSksZC5wdXNoKHRoaXMucHJvZHVjdGlvbnNfW3FbMV1dWzBdKSxlLnB1c2gody4kKSxmLnB1c2gody5fJCksdT1nW2RbZC5sZW5ndGgtMl1dW2RbZC5sZW5ndGgtMV1dLGQucHVzaCh1KTticmVhaztjYXNlIDM6cmV0dXJuITB9fXJldHVybiEwfX0sYz1mdW5jdGlvbigpe3ZhciBhPXtFT0Y6MSxwYXJzZUVycm9yOmZ1bmN0aW9uKGEsYil7aWYoIXRoaXMueXkucGFyc2VyKXRocm93IG5ldyBFcnJvcihhKTt0aGlzLnl5LnBhcnNlci5wYXJzZUVycm9yKGEsYil9LHNldElucHV0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9pbnB1dD1hLHRoaXMuX21vcmU9dGhpcy5fbGVzcz10aGlzLmRvbmU9ITEsdGhpcy55eWxpbmVubz10aGlzLnl5bGVuZz0wLHRoaXMueXl0ZXh0PXRoaXMubWF0Y2hlZD10aGlzLm1hdGNoPVwiXCIsdGhpcy5jb25kaXRpb25TdGFjaz1bXCJJTklUSUFMXCJdLHRoaXMueXlsbG9jPXtmaXJzdF9saW5lOjEsZmlyc3RfY29sdW1uOjAsbGFzdF9saW5lOjEsbGFzdF9jb2x1bW46MH0sdGhpcy5vcHRpb25zLnJhbmdlcyYmKHRoaXMueXlsbG9jLnJhbmdlPVswLDBdKSx0aGlzLm9mZnNldD0wLHRoaXN9LGlucHV0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5faW5wdXRbMF07dGhpcy55eXRleHQrPWEsdGhpcy55eWxlbmcrKyx0aGlzLm9mZnNldCsrLHRoaXMubWF0Y2grPWEsdGhpcy5tYXRjaGVkKz1hO3ZhciBiPWEubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO3JldHVybiBiPyh0aGlzLnl5bGluZW5vKyssdGhpcy55eWxsb2MubGFzdF9saW5lKyspOnRoaXMueXlsbG9jLmxhc3RfY29sdW1uKyssdGhpcy5vcHRpb25zLnJhbmdlcyYmdGhpcy55eWxsb2MucmFuZ2VbMV0rKyx0aGlzLl9pbnB1dD10aGlzLl9pbnB1dC5zbGljZSgxKSxhfSx1bnB1dDpmdW5jdGlvbihhKXt2YXIgYj1hLmxlbmd0aCxjPWEuc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTt0aGlzLl9pbnB1dD1hK3RoaXMuX2lucHV0LHRoaXMueXl0ZXh0PXRoaXMueXl0ZXh0LnN1YnN0cigwLHRoaXMueXl0ZXh0Lmxlbmd0aC1iLTEpLHRoaXMub2Zmc2V0LT1iO3ZhciBkPXRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTt0aGlzLm1hdGNoPXRoaXMubWF0Y2guc3Vic3RyKDAsdGhpcy5tYXRjaC5sZW5ndGgtMSksdGhpcy5tYXRjaGVkPXRoaXMubWF0Y2hlZC5zdWJzdHIoMCx0aGlzLm1hdGNoZWQubGVuZ3RoLTEpLGMubGVuZ3RoLTEmJih0aGlzLnl5bGluZW5vLT1jLmxlbmd0aC0xKTt2YXIgZT10aGlzLnl5bGxvYy5yYW5nZTtyZXR1cm4gdGhpcy55eWxsb2M9e2ZpcnN0X2xpbmU6dGhpcy55eWxsb2MuZmlyc3RfbGluZSxsYXN0X2xpbmU6dGhpcy55eWxpbmVubysxLGZpcnN0X2NvbHVtbjp0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sbGFzdF9jb2x1bW46Yz8oYy5sZW5ndGg9PT1kLmxlbmd0aD90aGlzLnl5bGxvYy5maXJzdF9jb2x1bW46MCkrZFtkLmxlbmd0aC1jLmxlbmd0aF0ubGVuZ3RoLWNbMF0ubGVuZ3RoOnRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbi1ifSx0aGlzLm9wdGlvbnMucmFuZ2VzJiYodGhpcy55eWxsb2MucmFuZ2U9W2VbMF0sZVswXSt0aGlzLnl5bGVuZy1iXSksdGhpc30sbW9yZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9tb3JlPSEwLHRoaXN9LGxlc3M6ZnVuY3Rpb24oYSl7dGhpcy51bnB1dCh0aGlzLm1hdGNoLnNsaWNlKGEpKX0scGFzdElucHV0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5tYXRjaGVkLnN1YnN0cigwLHRoaXMubWF0Y2hlZC5sZW5ndGgtdGhpcy5tYXRjaC5sZW5ndGgpO3JldHVybihhLmxlbmd0aD4yMD9cIi4uLlwiOlwiXCIpK2Euc3Vic3RyKC0yMCkucmVwbGFjZSgvXFxuL2csXCJcIil9LHVwY29taW5nSW5wdXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm1hdGNoO3JldHVybiBhLmxlbmd0aDwyMCYmKGErPXRoaXMuX2lucHV0LnN1YnN0cigwLDIwLWEubGVuZ3RoKSksKGEuc3Vic3RyKDAsMjApKyhhLmxlbmd0aD4yMD9cIi4uLlwiOlwiXCIpKS5yZXBsYWNlKC9cXG4vZyxcIlwiKX0sc2hvd1Bvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5wYXN0SW5wdXQoKSxiPW5ldyBBcnJheShhLmxlbmd0aCsxKS5qb2luKFwiLVwiKTtyZXR1cm4gYSt0aGlzLnVwY29taW5nSW5wdXQoKStcIlxcblwiK2IrXCJeXCJ9LG5leHQ6ZnVuY3Rpb24oKXtpZih0aGlzLmRvbmUpcmV0dXJuIHRoaXMuRU9GO3RoaXMuX2lucHV0fHwodGhpcy5kb25lPSEwKTt2YXIgYSxiLGMsZCxlO3RoaXMuX21vcmV8fCh0aGlzLnl5dGV4dD1cIlwiLHRoaXMubWF0Y2g9XCJcIik7Zm9yKHZhciBmPXRoaXMuX2N1cnJlbnRSdWxlcygpLGc9MDtnPGYubGVuZ3RoJiYoYz10aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW2ZbZ11dKSwhY3x8YiYmIShjWzBdLmxlbmd0aD5iWzBdLmxlbmd0aCl8fChiPWMsZD1nLHRoaXMub3B0aW9ucy5mbGV4KSk7ZysrKTtyZXR1cm4gYj8oZT1iWzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKSxlJiYodGhpcy55eWxpbmVubys9ZS5sZW5ndGgpLHRoaXMueXlsbG9jPXtmaXJzdF9saW5lOnRoaXMueXlsbG9jLmxhc3RfbGluZSxsYXN0X2xpbmU6dGhpcy55eWxpbmVubysxLGZpcnN0X2NvbHVtbjp0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixsYXN0X2NvbHVtbjplP2VbZS5sZW5ndGgtMV0ubGVuZ3RoLWVbZS5sZW5ndGgtMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoOnRoaXMueXlsbG9jLmxhc3RfY29sdW1uK2JbMF0ubGVuZ3RofSx0aGlzLnl5dGV4dCs9YlswXSx0aGlzLm1hdGNoKz1iWzBdLHRoaXMubWF0Y2hlcz1iLHRoaXMueXlsZW5nPXRoaXMueXl0ZXh0Lmxlbmd0aCx0aGlzLm9wdGlvbnMucmFuZ2VzJiYodGhpcy55eWxsb2MucmFuZ2U9W3RoaXMub2Zmc2V0LHRoaXMub2Zmc2V0Kz10aGlzLnl5bGVuZ10pLHRoaXMuX21vcmU9ITEsdGhpcy5faW5wdXQ9dGhpcy5faW5wdXQuc2xpY2UoYlswXS5sZW5ndGgpLHRoaXMubWF0Y2hlZCs9YlswXSxhPXRoaXMucGVyZm9ybUFjdGlvbi5jYWxsKHRoaXMsdGhpcy55eSx0aGlzLGZbZF0sdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aC0xXSksdGhpcy5kb25lJiZ0aGlzLl9pbnB1dCYmKHRoaXMuZG9uZT0hMSksYT9hOnZvaWQgMCk6XCJcIj09PXRoaXMuX2lucHV0P3RoaXMuRU9GOnRoaXMucGFyc2VFcnJvcihcIkxleGljYWwgZXJyb3Igb24gbGluZSBcIisodGhpcy55eWxpbmVubysxKStcIi4gVW5yZWNvZ25pemVkIHRleHQuXFxuXCIrdGhpcy5zaG93UG9zaXRpb24oKSx7dGV4dDpcIlwiLHRva2VuOm51bGwsbGluZTp0aGlzLnl5bGluZW5vfSl9LGxleDpmdW5jdGlvbigpe3ZhciBhPXRoaXMubmV4dCgpO3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBhP2E6dGhpcy5sZXgoKX0sYmVnaW46ZnVuY3Rpb24oYSl7dGhpcy5jb25kaXRpb25TdGFjay5wdXNoKGEpfSxwb3BTdGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrLnBvcCgpfSxfY3VycmVudFJ1bGVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoLTFdXS5ydWxlc30sdG9wU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aC0yXX0scHVzaFN0YXRlOmZ1bmN0aW9uKGEpe3RoaXMuYmVnaW4oYSl9fTtyZXR1cm4gYS5vcHRpb25zPXt9LGEucGVyZm9ybUFjdGlvbj1mdW5jdGlvbihhLGIsYyxkKXtmdW5jdGlvbiBlKGEsYyl7cmV0dXJuIGIueXl0ZXh0PWIueXl0ZXh0LnN1YnN0cmluZyhhLGIueXlsZW5nLWMrYSl9c3dpdGNoKGMpe2Nhc2UgMDppZihcIlxcXFxcXFxcXCI9PT1iLnl5dGV4dC5zbGljZSgtMik/KGUoMCwxKSx0aGlzLmJlZ2luKFwibXVcIikpOlwiXFxcXFwiPT09Yi55eXRleHQuc2xpY2UoLTEpPyhlKDAsMSksdGhpcy5iZWdpbihcImVtdVwiKSk6dGhpcy5iZWdpbihcIm11XCIpLGIueXl0ZXh0KXJldHVybiAxNTticmVhaztjYXNlIDE6cmV0dXJuIDE1O2Nhc2UgMjpyZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLDE1O2Nhc2UgMzpyZXR1cm4gdGhpcy5iZWdpbihcInJhd1wiKSwxNTtjYXNlIDQ6cmV0dXJuIHRoaXMucG9wU3RhdGUoKSxcInJhd1wiPT09dGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aC0xXT8xNTooZSg1LDkpLFwiRU5EX1JBV19CTE9DS1wiKTtjYXNlIDU6cmV0dXJuIDE1O2Nhc2UgNjpyZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLDE0O2Nhc2UgNzpyZXR1cm4gNjU7Y2FzZSA4OnJldHVybiA2ODtjYXNlIDk6cmV0dXJuIDE5O2Nhc2UgMTA6cmV0dXJuIHRoaXMucG9wU3RhdGUoKSx0aGlzLmJlZ2luKFwicmF3XCIpLDIzO2Nhc2UgMTE6cmV0dXJuIDU1O2Nhc2UgMTI6cmV0dXJuIDYwO2Nhc2UgMTM6cmV0dXJuIDI5O2Nhc2UgMTQ6cmV0dXJuIDQ3O2Nhc2UgMTU6cmV0dXJuIHRoaXMucG9wU3RhdGUoKSw0NDtjYXNlIDE2OnJldHVybiB0aGlzLnBvcFN0YXRlKCksNDQ7Y2FzZSAxNzpyZXR1cm4gMzQ7Y2FzZSAxODpyZXR1cm4gMzk7Y2FzZSAxOTpyZXR1cm4gNTE7Y2FzZSAyMDpyZXR1cm4gNDg7Y2FzZSAyMTp0aGlzLnVucHV0KGIueXl0ZXh0KSx0aGlzLnBvcFN0YXRlKCksdGhpcy5iZWdpbihcImNvbVwiKTticmVhaztjYXNlIDIyOnJldHVybiB0aGlzLnBvcFN0YXRlKCksMTQ7Y2FzZSAyMzpyZXR1cm4gNDg7Y2FzZSAyNDpyZXR1cm4gNzM7Y2FzZSAyNTpyZXR1cm4gNzI7Y2FzZSAyNjpyZXR1cm4gNzI7Y2FzZSAyNzpyZXR1cm4gODc7Y2FzZSAyODpicmVhaztjYXNlIDI5OnJldHVybiB0aGlzLnBvcFN0YXRlKCksNTQ7Y2FzZSAzMDpyZXR1cm4gdGhpcy5wb3BTdGF0ZSgpLDMzO2Nhc2UgMzE6cmV0dXJuIGIueXl0ZXh0PWUoMSwyKS5yZXBsYWNlKC9cXFxcXCIvZywnXCInKSw4MDtjYXNlIDMyOnJldHVybiBiLnl5dGV4dD1lKDEsMikucmVwbGFjZSgvXFxcXCcvZyxcIidcIiksODA7Y2FzZSAzMzpyZXR1cm4gODU7Y2FzZSAzNDpyZXR1cm4gODI7Y2FzZSAzNTpyZXR1cm4gODI7Y2FzZSAzNjpyZXR1cm4gODM7Y2FzZSAzNzpyZXR1cm4gODQ7Y2FzZSAzODpyZXR1cm4gODE7Y2FzZSAzOTpyZXR1cm4gNzU7Y2FzZSA0MDpyZXR1cm4gNzc7Y2FzZSA0MTpyZXR1cm4gNzI7Y2FzZSA0MjpyZXR1cm4gYi55eXRleHQ9Yi55eXRleHQucmVwbGFjZSgvXFxcXChbXFxcXFxcXV0pL2csXCIkMVwiKSw3MjtjYXNlIDQzOnJldHVyblwiSU5WQUxJRFwiO2Nhc2UgNDQ6cmV0dXJuIDV9fSxhLnJ1bGVzPVsvXig/OlteXFx4MDBdKj8oPz0oXFx7XFx7KSkpLywvXig/OlteXFx4MDBdKykvLC9eKD86W15cXHgwMF17Mix9Pyg/PShcXHtcXHt8XFxcXFxce1xce3xcXFxcXFxcXFxce1xce3wkKSkpLywvXig/Olxce1xce1xce1xceyg/PVteL10pKS8sL14oPzpcXHtcXHtcXHtcXHtcXC9bXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89Wz19XFxzXFwvLl0pXFx9XFx9XFx9XFx9KS8sL14oPzpbXlxceDAwXSs/KD89KFxce1xce1xce1xceykpKS8sL14oPzpbXFxzXFxTXSo/LS0ofik/XFx9XFx9KS8sL14oPzpcXCgpLywvXig/OlxcKSkvLC9eKD86XFx7XFx7XFx7XFx7KS8sL14oPzpcXH1cXH1cXH1cXH0pLywvXig/Olxce1xceyh+KT8+KS8sL14oPzpcXHtcXHsofik/Iz4pLywvXig/Olxce1xceyh+KT8jXFwqPykvLC9eKD86XFx7XFx7KH4pP1xcLykvLC9eKD86XFx7XFx7KH4pP1xcXlxccyoofik/XFx9XFx9KS8sL14oPzpcXHtcXHsofik/XFxzKmVsc2VcXHMqKH4pP1xcfVxcfSkvLC9eKD86XFx7XFx7KH4pP1xcXikvLC9eKD86XFx7XFx7KH4pP1xccyplbHNlXFxiKS8sL14oPzpcXHtcXHsofik/XFx7KS8sL14oPzpcXHtcXHsofik/JikvLC9eKD86XFx7XFx7KH4pPyEtLSkvLC9eKD86XFx7XFx7KH4pPyFbXFxzXFxTXSo/XFx9XFx9KS8sL14oPzpcXHtcXHsofik/XFwqPykvLC9eKD86PSkvLC9eKD86XFwuXFwuKS8sL14oPzpcXC4oPz0oWz1+fVxcc1xcLy4pfF0pKSkvLC9eKD86W1xcLy5dKS8sL14oPzpcXHMrKS8sL14oPzpcXH0ofik/XFx9XFx9KS8sL14oPzoofik/XFx9XFx9KS8sL14oPzpcIihcXFxcW1wiXXxbXlwiXSkqXCIpLywvXig/OicoXFxcXFsnXXxbXiddKSonKS8sL14oPzpAKS8sL14oPzp0cnVlKD89KFt+fVxccyldKSkpLywvXig/OmZhbHNlKD89KFt+fVxccyldKSkpLywvXig/OnVuZGVmaW5lZCg/PShbfn1cXHMpXSkpKS8sL14oPzpudWxsKD89KFt+fVxccyldKSkpLywvXig/Oi0/WzAtOV0rKD86XFwuWzAtOV0rKT8oPz0oW359XFxzKV0pKSkvLC9eKD86YXNcXHMrXFx8KS8sL14oPzpcXHwpLywvXig/OihbXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89KFs9fn1cXHNcXC8uKXxdKSkpKS8sL14oPzpcXFsoXFxcXFxcXXxbXlxcXV0pKlxcXSkvLC9eKD86LikvLC9eKD86JCkvXSxhLmNvbmRpdGlvbnM9e211OntydWxlczpbNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjksMzAsMzEsMzIsMzMsMzQsMzUsMzYsMzcsMzgsMzksNDAsNDEsNDIsNDMsNDRdLGluY2x1c2l2ZTohMX0sZW11OntydWxlczpbMl0saW5jbHVzaXZlOiExfSxjb206e3J1bGVzOls2XSxpbmNsdXNpdmU6ITF9LHJhdzp7cnVsZXM6WzMsNCw1XSxpbmNsdXNpdmU6ITF9LElOSVRJQUw6e3J1bGVzOlswLDEsNDRdLGluY2x1c2l2ZTohMH19LGF9KCk7cmV0dXJuIGIubGV4ZXI9YyxhLnByb3RvdHlwZT1iLGIuUGFyc2VyPWEsbmV3IGF9KCk7YltcImRlZmF1bHRcIl09YyxhLmV4cG9ydHM9YltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKCl7dmFyIGE9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP3t9OmFyZ3VtZW50c1swXTt0aGlzLm9wdGlvbnM9YX1mdW5jdGlvbiBlKGEsYixjKXt2b2lkIDA9PT1iJiYoYj1hLmxlbmd0aCk7dmFyIGQ9YVtiLTFdLGU9YVtiLTJdO3JldHVybiBkP1wiQ29udGVudFN0YXRlbWVudFwiPT09ZC50eXBlPyhlfHwhYz8vXFxyP1xcblxccyo/JC86LyhefFxccj9cXG4pXFxzKj8kLykudGVzdChkLm9yaWdpbmFsKTp2b2lkIDA6Y31mdW5jdGlvbiBmKGEsYixjKXt2b2lkIDA9PT1iJiYoYj0tMSk7dmFyIGQ9YVtiKzFdLGU9YVtiKzJdO3JldHVybiBkP1wiQ29udGVudFN0YXRlbWVudFwiPT09ZC50eXBlPyhlfHwhYz8vXlxccyo/XFxyP1xcbi86L15cXHMqPyhcXHI/XFxufCQpLykudGVzdChkLm9yaWdpbmFsKTp2b2lkIDA6Y31mdW5jdGlvbiBnKGEsYixjKXt2YXIgZD1hW251bGw9PWI/MDpiKzFdO2lmKGQmJlwiQ29udGVudFN0YXRlbWVudFwiPT09ZC50eXBlJiYoY3x8IWQucmlnaHRTdHJpcHBlZCkpe3ZhciBlPWQudmFsdWU7ZC52YWx1ZT1kLnZhbHVlLnJlcGxhY2UoYz8vXlxccysvOi9eWyBcXHRdKlxccj9cXG4/LyxcIlwiKSxkLnJpZ2h0U3RyaXBwZWQ9ZC52YWx1ZSE9PWV9fWZ1bmN0aW9uIGgoYSxiLGMpe3ZhciBkPWFbbnVsbD09Yj9hLmxlbmd0aC0xOmItMV07aWYoZCYmXCJDb250ZW50U3RhdGVtZW50XCI9PT1kLnR5cGUmJihjfHwhZC5sZWZ0U3RyaXBwZWQpKXt2YXIgZT1kLnZhbHVlO3JldHVybiBkLnZhbHVlPWQudmFsdWUucmVwbGFjZShjPy9cXHMrJC86L1sgXFx0XSskLyxcIlwiKSxkLmxlZnRTdHJpcHBlZD1kLnZhbHVlIT09ZSxkLmxlZnRTdHJpcHBlZH19dmFyIGk9YygxKVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwO3ZhciBqPWMoODgpLGs9aShqKTtkLnByb3RvdHlwZT1uZXcga1tcImRlZmF1bHRcIl0sZC5wcm90b3R5cGUuUHJvZ3JhbT1mdW5jdGlvbihhKXt2YXIgYj0hdGhpcy5vcHRpb25zLmlnbm9yZVN0YW5kYWxvbmUsYz0hdGhpcy5pc1Jvb3RTZWVuO3RoaXMuaXNSb290U2Vlbj0hMDtmb3IodmFyIGQ9YS5ib2R5LGk9MCxqPWQubGVuZ3RoO2k8ajtpKyspe3ZhciBrPWRbaV0sbD10aGlzLmFjY2VwdChrKTtpZihsKXt2YXIgbT1lKGQsaSxjKSxuPWYoZCxpLGMpLG89bC5vcGVuU3RhbmRhbG9uZSYmbSxwPWwuY2xvc2VTdGFuZGFsb25lJiZuLHE9bC5pbmxpbmVTdGFuZGFsb25lJiZtJiZuO2wuY2xvc2UmJmcoZCxpLCEwKSxsLm9wZW4mJmgoZCxpLCEwKSxiJiZxJiYoZyhkLGkpLGgoZCxpKSYmXCJQYXJ0aWFsU3RhdGVtZW50XCI9PT1rLnR5cGUmJihrLmluZGVudD0vKFsgXFx0XSskKS8uZXhlYyhkW2ktMV0ub3JpZ2luYWwpWzFdKSksYiYmbyYmKGcoKGsucHJvZ3JhbXx8ay5pbnZlcnNlKS5ib2R5KSxoKGQsaSkpLGImJnAmJihnKGQsaSksaCgoay5pbnZlcnNlfHxrLnByb2dyYW0pLmJvZHkpKX19cmV0dXJuIGF9LGQucHJvdG90eXBlLkJsb2NrU3RhdGVtZW50PWQucHJvdG90eXBlLkRlY29yYXRvckJsb2NrPWQucHJvdG90eXBlLlBhcnRpYWxCbG9ja1N0YXRlbWVudD1mdW5jdGlvbihhKXt0aGlzLmFjY2VwdChhLnByb2dyYW0pLHRoaXMuYWNjZXB0KGEuaW52ZXJzZSk7dmFyIGI9YS5wcm9ncmFtfHxhLmludmVyc2UsYz1hLnByb2dyYW0mJmEuaW52ZXJzZSxkPWMsaT1jO2lmKGMmJmMuY2hhaW5lZClmb3IoZD1jLmJvZHlbMF0ucHJvZ3JhbTtpLmNoYWluZWQ7KWk9aS5ib2R5W2kuYm9keS5sZW5ndGgtMV0ucHJvZ3JhbTt2YXIgaj17b3BlbjphLm9wZW5TdHJpcC5vcGVuLGNsb3NlOmEuY2xvc2VTdHJpcC5jbG9zZSxvcGVuU3RhbmRhbG9uZTpmKGIuYm9keSksY2xvc2VTdGFuZGFsb25lOmUoKGR8fGIpLmJvZHkpfTtpZihhLm9wZW5TdHJpcC5jbG9zZSYmZyhiLmJvZHksbnVsbCwhMCksYyl7dmFyIGs9YS5pbnZlcnNlU3RyaXA7ay5vcGVuJiZoKGIuYm9keSxudWxsLCEwKSxrLmNsb3NlJiZnKGQuYm9keSxudWxsLCEwKSxhLmNsb3NlU3RyaXAub3BlbiYmaChpLmJvZHksbnVsbCwhMCksIXRoaXMub3B0aW9ucy5pZ25vcmVTdGFuZGFsb25lJiZlKGIuYm9keSkmJmYoZC5ib2R5KSYmKGgoYi5ib2R5KSxnKGQuYm9keSkpfWVsc2UgYS5jbG9zZVN0cmlwLm9wZW4mJmgoYi5ib2R5LG51bGwsITApO3JldHVybiBqfSxkLnByb3RvdHlwZS5EZWNvcmF0b3I9ZC5wcm90b3R5cGUuTXVzdGFjaGVTdGF0ZW1lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3RyaXB9LGQucHJvdG90eXBlLlBhcnRpYWxTdGF0ZW1lbnQ9ZC5wcm90b3R5cGUuQ29tbWVudFN0YXRlbWVudD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0cmlwfHx7fTtyZXR1cm57aW5saW5lU3RhbmRhbG9uZTohMCxvcGVuOmIub3BlbixjbG9zZTpiLmNsb3NlfX0sYltcImRlZmF1bHRcIl09ZCxhLmV4cG9ydHM9YltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKCl7dGhpcy5wYXJlbnRzPVtdfWZ1bmN0aW9uIGUoYSl7dGhpcy5hY2NlcHRSZXF1aXJlZChhLFwicGF0aFwiKSx0aGlzLmFjY2VwdEFycmF5KGEucGFyYW1zKSx0aGlzLmFjY2VwdEtleShhLFwiaGFzaFwiKX1mdW5jdGlvbiBmKGEpe2UuY2FsbCh0aGlzLGEpLHRoaXMuYWNjZXB0S2V5KGEsXCJwcm9ncmFtXCIpLHRoaXMuYWNjZXB0S2V5KGEsXCJpbnZlcnNlXCIpfWZ1bmN0aW9uIGcoYSl7dGhpcy5hY2NlcHRSZXF1aXJlZChhLFwibmFtZVwiKSx0aGlzLmFjY2VwdEFycmF5KGEucGFyYW1zKSx0aGlzLmFjY2VwdEtleShhLFwiaGFzaFwiKX12YXIgaD1jKDEpW1wiZGVmYXVsdFwiXTtiLl9fZXNNb2R1bGU9ITA7dmFyIGk9Yyg2KSxqPWgoaSk7ZC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmQsbXV0YXRpbmc6ITEsYWNjZXB0S2V5OmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5hY2NlcHQoYVtiXSk7aWYodGhpcy5tdXRhdGluZyl7aWYoYyYmIWQucHJvdG90eXBlW2MudHlwZV0pdGhyb3cgbmV3IGpbXCJkZWZhdWx0XCJdKCdVbmV4cGVjdGVkIG5vZGUgdHlwZSBcIicrYy50eXBlKydcIiBmb3VuZCB3aGVuIGFjY2VwdGluZyAnK2IrXCIgb24gXCIrYS50eXBlKTthW2JdPWN9fSxhY2NlcHRSZXF1aXJlZDpmdW5jdGlvbihhLGIpe2lmKHRoaXMuYWNjZXB0S2V5KGEsYiksIWFbYl0pdGhyb3cgbmV3IGpbXCJkZWZhdWx0XCJdKGEudHlwZStcIiByZXF1aXJlcyBcIitiKX0sYWNjZXB0QXJyYXk6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aDtiPGM7YisrKXRoaXMuYWNjZXB0S2V5KGEsYiksYVtiXXx8KGEuc3BsaWNlKGIsMSksYi0tLGMtLSl9LGFjY2VwdDpmdW5jdGlvbihhKXtpZihhKXtpZighdGhpc1thLnR5cGVdKXRocm93IG5ldyBqW1wiZGVmYXVsdFwiXShcIlVua25vd24gdHlwZTogXCIrYS50eXBlLGEpO3RoaXMuY3VycmVudCYmdGhpcy5wYXJlbnRzLnVuc2hpZnQodGhpcy5jdXJyZW50KSx0aGlzLmN1cnJlbnQ9YTt2YXIgYj10aGlzW2EudHlwZV0oYSk7cmV0dXJuIHRoaXMuY3VycmVudD10aGlzLnBhcmVudHMuc2hpZnQoKSwhdGhpcy5tdXRhdGluZ3x8Yj9iOmIhPT0hMT9hOnZvaWQgMH19LFByb2dyYW06ZnVuY3Rpb24oYSl7dGhpcy5hY2NlcHRBcnJheShhLmJvZHkpfSxNdXN0YWNoZVN0YXRlbWVudDplLERlY29yYXRvcjplLEJsb2NrU3RhdGVtZW50OmYsRGVjb3JhdG9yQmxvY2s6ZixQYXJ0aWFsU3RhdGVtZW50OmcsUGFydGlhbEJsb2NrU3RhdGVtZW50OmZ1bmN0aW9uKGEpe2cuY2FsbCh0aGlzLGEpLHRoaXMuYWNjZXB0S2V5KGEsXCJwcm9ncmFtXCIpfSxDb250ZW50U3RhdGVtZW50OmZ1bmN0aW9uKCl7fSxDb21tZW50U3RhdGVtZW50OmZ1bmN0aW9uKCl7fSxTdWJFeHByZXNzaW9uOmUsUGF0aEV4cHJlc3Npb246ZnVuY3Rpb24oKXt9LFN0cmluZ0xpdGVyYWw6ZnVuY3Rpb24oKXt9LE51bWJlckxpdGVyYWw6ZnVuY3Rpb24oKXt9LEJvb2xlYW5MaXRlcmFsOmZ1bmN0aW9uKCl7fSxVbmRlZmluZWRMaXRlcmFsOmZ1bmN0aW9uKCl7fSxOdWxsTGl0ZXJhbDpmdW5jdGlvbigpe30sSGFzaDpmdW5jdGlvbihhKXt0aGlzLmFjY2VwdEFycmF5KGEucGFpcnMpfSxIYXNoUGFpcjpmdW5jdGlvbihhKXt0aGlzLmFjY2VwdFJlcXVpcmVkKGEsXCJ2YWx1ZVwiKX19LGJbXCJkZWZhdWx0XCJdPWQsYS5leHBvcnRzPWJbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZChhLGIpe2lmKGI9Yi5wYXRoP2IucGF0aC5vcmlnaW5hbDpiLGEucGF0aC5vcmlnaW5hbCE9PWIpe3ZhciBjPXtsb2M6YS5wYXRoLmxvY307dGhyb3cgbmV3IHFbXCJkZWZhdWx0XCJdKGEucGF0aC5vcmlnaW5hbCtcIiBkb2Vzbid0IG1hdGNoIFwiK2IsYyl9fWZ1bmN0aW9uIGUoYSxiKXt0aGlzLnNvdXJjZT1hLHRoaXMuc3RhcnQ9e2xpbmU6Yi5maXJzdF9saW5lLGNvbHVtbjpiLmZpcnN0X2NvbHVtbn0sdGhpcy5lbmQ9e2xpbmU6Yi5sYXN0X2xpbmUsY29sdW1uOmIubGFzdF9jb2x1bW59fWZ1bmN0aW9uIGYoYSl7cmV0dXJuL15cXFsuKlxcXSQvLnRlc3QoYSk/YS5zdWJzdHJpbmcoMSxhLmxlbmd0aC0xKTphfWZ1bmN0aW9uIGcoYSxiKXtyZXR1cm57b3BlbjpcIn5cIj09PWEuY2hhckF0KDIpLGNsb3NlOlwiflwiPT09Yi5jaGFyQXQoYi5sZW5ndGgtMyl9fWZ1bmN0aW9uIGgoYSl7cmV0dXJuIGEucmVwbGFjZSgvXlxce1xce34/IS0/LT8vLFwiXCIpLnJlcGxhY2UoLy0/LT9+P1xcfVxcfSQvLFwiXCIpfWZ1bmN0aW9uIGkoYSxiLGMpe2M9dGhpcy5sb2NJbmZvKGMpO2Zvcih2YXIgZD1hP1wiQFwiOlwiXCIsZT1bXSxmPTAsZz0wLGg9Yi5sZW5ndGg7ZzxoO2crKyl7dmFyIGk9YltnXS5wYXJ0LGo9YltnXS5vcmlnaW5hbCE9PWk7aWYoZCs9KGJbZ10uc2VwYXJhdG9yfHxcIlwiKStpLGp8fFwiLi5cIiE9PWkmJlwiLlwiIT09aSYmXCJ0aGlzXCIhPT1pKWUucHVzaChpKTtlbHNle2lmKGUubGVuZ3RoPjApdGhyb3cgbmV3IHFbXCJkZWZhdWx0XCJdKFwiSW52YWxpZCBwYXRoOiBcIitkLHtsb2M6Y30pO1wiLi5cIj09PWkmJmYrK319cmV0dXJue3R5cGU6XCJQYXRoRXhwcmVzc2lvblwiLGRhdGE6YSxkZXB0aDpmLHBhcnRzOmUsb3JpZ2luYWw6ZCxsb2M6Y319ZnVuY3Rpb24gaihhLGIsYyxkLGUsZil7dmFyIGc9ZC5jaGFyQXQoMyl8fGQuY2hhckF0KDIpLGg9XCJ7XCIhPT1nJiZcIiZcIiE9PWcsaT0vXFwqLy50ZXN0KGQpO3JldHVybnt0eXBlOmk/XCJEZWNvcmF0b3JcIjpcIk11c3RhY2hlU3RhdGVtZW50XCIscGF0aDphLHBhcmFtczpiLGhhc2g6Yyxlc2NhcGVkOmgsc3RyaXA6ZSxsb2M6dGhpcy5sb2NJbmZvKGYpfX1mdW5jdGlvbiBrKGEsYixjLGUpe2QoYSxjKSxlPXRoaXMubG9jSW5mbyhlKTt2YXIgZj17dHlwZTpcIlByb2dyYW1cIixib2R5OmIsc3RyaXA6e30sbG9jOmV9O3JldHVybnt0eXBlOlwiQmxvY2tTdGF0ZW1lbnRcIixwYXRoOmEucGF0aCxwYXJhbXM6YS5wYXJhbXMsaGFzaDphLmhhc2gscHJvZ3JhbTpmLG9wZW5TdHJpcDp7fSxpbnZlcnNlU3RyaXA6e30sY2xvc2VTdHJpcDp7fSxsb2M6ZX19ZnVuY3Rpb24gbChhLGIsYyxlLGYsZyl7ZSYmZS5wYXRoJiZkKGEsZSk7dmFyIGg9L1xcKi8udGVzdChhLm9wZW4pO2IuYmxvY2tQYXJhbXM9YS5ibG9ja1BhcmFtczt2YXIgaT12b2lkIDAsaj12b2lkIDA7aWYoYyl7aWYoaCl0aHJvdyBuZXcgcVtcImRlZmF1bHRcIl0oXCJVbmV4cGVjdGVkIGludmVyc2UgYmxvY2sgb24gZGVjb3JhdG9yXCIsYyk7Yy5jaGFpbiYmKGMucHJvZ3JhbS5ib2R5WzBdLmNsb3NlU3RyaXA9ZS5zdHJpcCksaj1jLnN0cmlwLGk9Yy5wcm9ncmFtfXJldHVybiBmJiYoZj1pLGk9YixiPWYpLHt0eXBlOmg/XCJEZWNvcmF0b3JCbG9ja1wiOlwiQmxvY2tTdGF0ZW1lbnRcIixwYXRoOmEucGF0aCxwYXJhbXM6YS5wYXJhbXMsaGFzaDphLmhhc2gscHJvZ3JhbTpiLGludmVyc2U6aSxvcGVuU3RyaXA6YS5zdHJpcCxpbnZlcnNlU3RyaXA6aixjbG9zZVN0cmlwOmUmJmUuc3RyaXAsbG9jOnRoaXMubG9jSW5mbyhnKX19ZnVuY3Rpb24gbShhLGIpe2lmKCFiJiZhLmxlbmd0aCl7dmFyIGM9YVswXS5sb2MsZD1hW2EubGVuZ3RoLTFdLmxvYztjJiZkJiYoYj17c291cmNlOmMuc291cmNlLHN0YXJ0OntsaW5lOmMuc3RhcnQubGluZSxjb2x1bW46Yy5zdGFydC5jb2x1bW59LGVuZDp7bGluZTpkLmVuZC5saW5lLGNvbHVtbjpkLmVuZC5jb2x1bW59fSl9cmV0dXJue3R5cGU6XCJQcm9ncmFtXCIsYm9keTphLHN0cmlwOnt9LGxvYzpifX1mdW5jdGlvbiBuKGEsYixjLGUpe3JldHVybiBkKGEsYykse3R5cGU6XCJQYXJ0aWFsQmxvY2tTdGF0ZW1lbnRcIixuYW1lOmEucGF0aCxwYXJhbXM6YS5wYXJhbXMsaGFzaDphLmhhc2gscHJvZ3JhbTpiLG9wZW5TdHJpcDphLnN0cmlwLGNsb3NlU3RyaXA6YyYmYy5zdHJpcCxsb2M6dGhpcy5sb2NJbmZvKGUpfX12YXIgbz1jKDEpW1wiZGVmYXVsdFwiXTtiLl9fZXNNb2R1bGU9ITAsYi5Tb3VyY2VMb2NhdGlvbj1lLGIuaWQ9ZixiLnN0cmlwRmxhZ3M9ZyxiLnN0cmlwQ29tbWVudD1oLGIucHJlcGFyZVBhdGg9aSxiLnByZXBhcmVNdXN0YWNoZT1qLGIucHJlcGFyZVJhd0Jsb2NrPWssYi5wcmVwYXJlQmxvY2s9bCxiLnByZXBhcmVQcm9ncmFtPW0sYi5wcmVwYXJlUGFydGlhbEJsb2NrPW47dmFyIHA9Yyg2KSxxPW8ocCl9LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKCl7fWZ1bmN0aW9uIGUoYSxiLGMpe2lmKG51bGw9PWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhJiZcIlByb2dyYW1cIiE9PWEudHlwZSl0aHJvdyBuZXcgbFtcImRlZmF1bHRcIl0oXCJZb3UgbXVzdCBwYXNzIGEgc3RyaW5nIG9yIEhhbmRsZWJhcnMgQVNUIHRvIEhhbmRsZWJhcnMucHJlY29tcGlsZS4gWW91IHBhc3NlZCBcIithKTtiPWJ8fHt9LFwiZGF0YVwiaW4gYnx8KGIuZGF0YT0hMCksYi5jb21wYXQmJihiLnVzZURlcHRocz0hMCk7dmFyIGQ9Yy5wYXJzZShhLGIpLGU9KG5ldyBjLkNvbXBpbGVyKS5jb21waWxlKGQsYik7cmV0dXJuKG5ldyBjLkphdmFTY3JpcHRDb21waWxlcikuY29tcGlsZShlLGIpfWZ1bmN0aW9uIGYoYSxiLGMpe2Z1bmN0aW9uIGQoKXt2YXIgZD1jLnBhcnNlKGEsYiksZT0obmV3IGMuQ29tcGlsZXIpLmNvbXBpbGUoZCxiKSxmPShuZXcgYy5KYXZhU2NyaXB0Q29tcGlsZXIpLmNvbXBpbGUoZSxiLHZvaWQgMCwhMCk7cmV0dXJuIGMudGVtcGxhdGUoZil9ZnVuY3Rpb24gZShhLGIpe3JldHVybiBmfHwoZj1kKCkpLGYuY2FsbCh0aGlzLGEsYil9aWYodm9pZCAwPT09YiYmKGI9e30pLG51bGw9PWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhJiZcIlByb2dyYW1cIiE9PWEudHlwZSl0aHJvdyBuZXcgbFtcImRlZmF1bHRcIl0oXCJZb3UgbXVzdCBwYXNzIGEgc3RyaW5nIG9yIEhhbmRsZWJhcnMgQVNUIHRvIEhhbmRsZWJhcnMuY29tcGlsZS4gWW91IHBhc3NlZCBcIithKTtiPW0uZXh0ZW5kKHt9LGIpLFwiZGF0YVwiaW4gYnx8KGIuZGF0YT0hMCksYi5jb21wYXQmJihiLnVzZURlcHRocz0hMCk7dmFyIGY9dm9pZCAwO3JldHVybiBlLl9zZXR1cD1mdW5jdGlvbihhKXtyZXR1cm4gZnx8KGY9ZCgpKSxmLl9zZXR1cChhKX0sZS5fY2hpbGQ9ZnVuY3Rpb24oYSxiLGMsZSl7cmV0dXJuIGZ8fChmPWQoKSksZi5fY2hpbGQoYSxiLGMsZSl9LGV9ZnVuY3Rpb24gZyhhLGIpe2lmKGE9PT1iKXJldHVybiEwO2lmKG0uaXNBcnJheShhKSYmbS5pc0FycmF5KGIpJiZhLmxlbmd0aD09PWIubGVuZ3RoKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZighZyhhW2NdLGJbY10pKXJldHVybiExO3JldHVybiEwfX1mdW5jdGlvbiBoKGEpe2lmKCFhLnBhdGgucGFydHMpe3ZhciBiPWEucGF0aDthLnBhdGg9e3R5cGU6XCJQYXRoRXhwcmVzc2lvblwiLGRhdGE6ITEsZGVwdGg6MCxwYXJ0czpbYi5vcmlnaW5hbCtcIlwiXSxvcmlnaW5hbDpiLm9yaWdpbmFsK1wiXCIsbG9jOmIubG9jfX19dmFyIGk9Yyg3NClbXCJkZWZhdWx0XCJdLGo9YygxKVtcImRlZmF1bHRcIl07Yi5fX2VzTW9kdWxlPSEwLGIuQ29tcGlsZXI9ZCxiLnByZWNvbXBpbGU9ZSxiLmNvbXBpbGU9Zjt2YXIgaz1jKDYpLGw9aihrKSxtPWMoNSksbj1jKDg0KSxvPWoobikscD1bXS5zbGljZTtkLnByb3RvdHlwZT17Y29tcGlsZXI6ZCxlcXVhbHM6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcGNvZGVzLmxlbmd0aDtpZihhLm9wY29kZXMubGVuZ3RoIT09YilyZXR1cm4hMTtmb3IodmFyIGM9MDtjPGI7YysrKXt2YXIgZD10aGlzLm9wY29kZXNbY10sZT1hLm9wY29kZXNbY107aWYoZC5vcGNvZGUhPT1lLm9wY29kZXx8IWcoZC5hcmdzLGUuYXJncykpcmV0dXJuITF9Yj10aGlzLmNoaWxkcmVuLmxlbmd0aDtmb3IodmFyIGM9MDtjPGI7YysrKWlmKCF0aGlzLmNoaWxkcmVuW2NdLmVxdWFscyhhLmNoaWxkcmVuW2NdKSlyZXR1cm4hMTtcbnJldHVybiEwfSxndWlkOjAsY29tcGlsZTpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnNvdXJjZU5vZGU9W10sdGhpcy5vcGNvZGVzPVtdLHRoaXMuY2hpbGRyZW49W10sdGhpcy5vcHRpb25zPWIsdGhpcy5zdHJpbmdQYXJhbXM9Yi5zdHJpbmdQYXJhbXMsdGhpcy50cmFja0lkcz1iLnRyYWNrSWRzLGIuYmxvY2tQYXJhbXM9Yi5ibG9ja1BhcmFtc3x8W10sYi5rbm93bkhlbHBlcnM9bS5leHRlbmQoaShudWxsKSx7aGVscGVyTWlzc2luZzohMCxibG9ja0hlbHBlck1pc3Npbmc6ITAsZWFjaDohMCxcImlmXCI6ITAsdW5sZXNzOiEwLFwid2l0aFwiOiEwLGxvZzohMCxsb29rdXA6ITB9LGIua25vd25IZWxwZXJzKSx0aGlzLmFjY2VwdChhKX0sY29tcGlsZVByb2dyYW06ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IHRoaXMuY29tcGlsZXIsYz1iLmNvbXBpbGUoYSx0aGlzLm9wdGlvbnMpLGQ9dGhpcy5ndWlkKys7cmV0dXJuIHRoaXMudXNlUGFydGlhbD10aGlzLnVzZVBhcnRpYWx8fGMudXNlUGFydGlhbCx0aGlzLmNoaWxkcmVuW2RdPWMsdGhpcy51c2VEZXB0aHM9dGhpcy51c2VEZXB0aHN8fGMudXNlRGVwdGhzLGR9LGFjY2VwdDpmdW5jdGlvbihhKXtpZighdGhpc1thLnR5cGVdKXRocm93IG5ldyBsW1wiZGVmYXVsdFwiXShcIlVua25vd24gdHlwZTogXCIrYS50eXBlLGEpO3RoaXMuc291cmNlTm9kZS51bnNoaWZ0KGEpO3ZhciBiPXRoaXNbYS50eXBlXShhKTtyZXR1cm4gdGhpcy5zb3VyY2VOb2RlLnNoaWZ0KCksYn0sUHJvZ3JhbTpmdW5jdGlvbihhKXt0aGlzLm9wdGlvbnMuYmxvY2tQYXJhbXMudW5zaGlmdChhLmJsb2NrUGFyYW1zKTtmb3IodmFyIGI9YS5ib2R5LGM9Yi5sZW5ndGgsZD0wO2Q8YztkKyspdGhpcy5hY2NlcHQoYltkXSk7cmV0dXJuIHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5zaGlmdCgpLHRoaXMuaXNTaW1wbGU9MT09PWMsdGhpcy5ibG9ja1BhcmFtcz1hLmJsb2NrUGFyYW1zP2EuYmxvY2tQYXJhbXMubGVuZ3RoOjAsdGhpc30sQmxvY2tTdGF0ZW1lbnQ6ZnVuY3Rpb24oYSl7aChhKTt2YXIgYj1hLnByb2dyYW0sYz1hLmludmVyc2U7Yj1iJiZ0aGlzLmNvbXBpbGVQcm9ncmFtKGIpLGM9YyYmdGhpcy5jb21waWxlUHJvZ3JhbShjKTt2YXIgZD10aGlzLmNsYXNzaWZ5U2V4cHIoYSk7XCJoZWxwZXJcIj09PWQ/dGhpcy5oZWxwZXJTZXhwcihhLGIsYyk6XCJzaW1wbGVcIj09PWQ/KHRoaXMuc2ltcGxlU2V4cHIoYSksdGhpcy5vcGNvZGUoXCJwdXNoUHJvZ3JhbVwiLGIpLHRoaXMub3Bjb2RlKFwicHVzaFByb2dyYW1cIixjKSx0aGlzLm9wY29kZShcImVtcHR5SGFzaFwiKSx0aGlzLm9wY29kZShcImJsb2NrVmFsdWVcIixhLnBhdGgub3JpZ2luYWwpKToodGhpcy5hbWJpZ3VvdXNTZXhwcihhLGIsYyksdGhpcy5vcGNvZGUoXCJwdXNoUHJvZ3JhbVwiLGIpLHRoaXMub3Bjb2RlKFwicHVzaFByb2dyYW1cIixjKSx0aGlzLm9wY29kZShcImVtcHR5SGFzaFwiKSx0aGlzLm9wY29kZShcImFtYmlndW91c0Jsb2NrVmFsdWVcIikpLHRoaXMub3Bjb2RlKFwiYXBwZW5kXCIpfSxEZWNvcmF0b3JCbG9jazpmdW5jdGlvbihhKXt2YXIgYj1hLnByb2dyYW0mJnRoaXMuY29tcGlsZVByb2dyYW0oYS5wcm9ncmFtKSxjPXRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoYSxiLHZvaWQgMCksZD1hLnBhdGg7dGhpcy51c2VEZWNvcmF0b3JzPSEwLHRoaXMub3Bjb2RlKFwicmVnaXN0ZXJEZWNvcmF0b3JcIixjLmxlbmd0aCxkLm9yaWdpbmFsKX0sUGFydGlhbFN0YXRlbWVudDpmdW5jdGlvbihhKXt0aGlzLnVzZVBhcnRpYWw9ITA7dmFyIGI9YS5wcm9ncmFtO2ImJihiPXRoaXMuY29tcGlsZVByb2dyYW0oYS5wcm9ncmFtKSk7dmFyIGM9YS5wYXJhbXM7aWYoYy5sZW5ndGg+MSl0aHJvdyBuZXcgbFtcImRlZmF1bHRcIl0oXCJVbnN1cHBvcnRlZCBudW1iZXIgb2YgcGFydGlhbCBhcmd1bWVudHM6IFwiK2MubGVuZ3RoLGEpO2MubGVuZ3RofHwodGhpcy5vcHRpb25zLmV4cGxpY2l0UGFydGlhbENvbnRleHQ/dGhpcy5vcGNvZGUoXCJwdXNoTGl0ZXJhbFwiLFwidW5kZWZpbmVkXCIpOmMucHVzaCh7dHlwZTpcIlBhdGhFeHByZXNzaW9uXCIscGFydHM6W10sZGVwdGg6MH0pKTt2YXIgZD1hLm5hbWUub3JpZ2luYWwsZT1cIlN1YkV4cHJlc3Npb25cIj09PWEubmFtZS50eXBlO2UmJnRoaXMuYWNjZXB0KGEubmFtZSksdGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhhLGIsdm9pZCAwLCEwKTt2YXIgZj1hLmluZGVudHx8XCJcIjt0aGlzLm9wdGlvbnMucHJldmVudEluZGVudCYmZiYmKHRoaXMub3Bjb2RlKFwiYXBwZW5kQ29udGVudFwiLGYpLGY9XCJcIiksdGhpcy5vcGNvZGUoXCJpbnZva2VQYXJ0aWFsXCIsZSxkLGYpLHRoaXMub3Bjb2RlKFwiYXBwZW5kXCIpfSxQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQ6ZnVuY3Rpb24oYSl7dGhpcy5QYXJ0aWFsU3RhdGVtZW50KGEpfSxNdXN0YWNoZVN0YXRlbWVudDpmdW5jdGlvbihhKXt0aGlzLlN1YkV4cHJlc3Npb24oYSksYS5lc2NhcGVkJiYhdGhpcy5vcHRpb25zLm5vRXNjYXBlP3RoaXMub3Bjb2RlKFwiYXBwZW5kRXNjYXBlZFwiKTp0aGlzLm9wY29kZShcImFwcGVuZFwiKX0sRGVjb3JhdG9yOmZ1bmN0aW9uKGEpe3RoaXMuRGVjb3JhdG9yQmxvY2soYSl9LENvbnRlbnRTdGF0ZW1lbnQ6ZnVuY3Rpb24oYSl7YS52YWx1ZSYmdGhpcy5vcGNvZGUoXCJhcHBlbmRDb250ZW50XCIsYS52YWx1ZSl9LENvbW1lbnRTdGF0ZW1lbnQ6ZnVuY3Rpb24oKXt9LFN1YkV4cHJlc3Npb246ZnVuY3Rpb24oYSl7aChhKTt2YXIgYj10aGlzLmNsYXNzaWZ5U2V4cHIoYSk7XCJzaW1wbGVcIj09PWI/dGhpcy5zaW1wbGVTZXhwcihhKTpcImhlbHBlclwiPT09Yj90aGlzLmhlbHBlclNleHByKGEpOnRoaXMuYW1iaWd1b3VzU2V4cHIoYSl9LGFtYmlndW91c1NleHByOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hLnBhdGgsZT1kLnBhcnRzWzBdLGY9bnVsbCE9Ynx8bnVsbCE9Yzt0aGlzLm9wY29kZShcImdldENvbnRleHRcIixkLmRlcHRoKSx0aGlzLm9wY29kZShcInB1c2hQcm9ncmFtXCIsYiksdGhpcy5vcGNvZGUoXCJwdXNoUHJvZ3JhbVwiLGMpLGQuc3RyaWN0PSEwLHRoaXMuYWNjZXB0KGQpLHRoaXMub3Bjb2RlKFwiaW52b2tlQW1iaWd1b3VzXCIsZSxmKX0sc2ltcGxlU2V4cHI6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXRoO2Iuc3RyaWN0PSEwLHRoaXMuYWNjZXB0KGIpLHRoaXMub3Bjb2RlKFwicmVzb2x2ZVBvc3NpYmxlTGFtYmRhXCIpfSxoZWxwZXJTZXhwcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhhLGIsYyksZT1hLnBhdGgsZj1lLnBhcnRzWzBdO2lmKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNbZl0pdGhpcy5vcGNvZGUoXCJpbnZva2VLbm93bkhlbHBlclwiLGQubGVuZ3RoLGYpO2Vsc2V7aWYodGhpcy5vcHRpb25zLmtub3duSGVscGVyc09ubHkpdGhyb3cgbmV3IGxbXCJkZWZhdWx0XCJdKFwiWW91IHNwZWNpZmllZCBrbm93bkhlbHBlcnNPbmx5LCBidXQgdXNlZCB0aGUgdW5rbm93biBoZWxwZXIgXCIrZixhKTtlLnN0cmljdD0hMCxlLmZhbHN5PSEwLHRoaXMuYWNjZXB0KGUpLHRoaXMub3Bjb2RlKFwiaW52b2tlSGVscGVyXCIsZC5sZW5ndGgsZS5vcmlnaW5hbCxvW1wiZGVmYXVsdFwiXS5oZWxwZXJzLnNpbXBsZUlkKGUpKX19LFBhdGhFeHByZXNzaW9uOmZ1bmN0aW9uKGEpe3RoaXMuYWRkRGVwdGgoYS5kZXB0aCksdGhpcy5vcGNvZGUoXCJnZXRDb250ZXh0XCIsYS5kZXB0aCk7dmFyIGI9YS5wYXJ0c1swXSxjPW9bXCJkZWZhdWx0XCJdLmhlbHBlcnMuc2NvcGVkSWQoYSksZD0hYS5kZXB0aCYmIWMmJnRoaXMuYmxvY2tQYXJhbUluZGV4KGIpO2Q/dGhpcy5vcGNvZGUoXCJsb29rdXBCbG9ja1BhcmFtXCIsZCxhLnBhcnRzKTpiP2EuZGF0YT8odGhpcy5vcHRpb25zLmRhdGE9ITAsdGhpcy5vcGNvZGUoXCJsb29rdXBEYXRhXCIsYS5kZXB0aCxhLnBhcnRzLGEuc3RyaWN0KSk6dGhpcy5vcGNvZGUoXCJsb29rdXBPbkNvbnRleHRcIixhLnBhcnRzLGEuZmFsc3ksYS5zdHJpY3QsYyk6dGhpcy5vcGNvZGUoXCJwdXNoQ29udGV4dFwiKX0sU3RyaW5nTGl0ZXJhbDpmdW5jdGlvbihhKXt0aGlzLm9wY29kZShcInB1c2hTdHJpbmdcIixhLnZhbHVlKX0sTnVtYmVyTGl0ZXJhbDpmdW5jdGlvbihhKXt0aGlzLm9wY29kZShcInB1c2hMaXRlcmFsXCIsYS52YWx1ZSl9LEJvb2xlYW5MaXRlcmFsOmZ1bmN0aW9uKGEpe3RoaXMub3Bjb2RlKFwicHVzaExpdGVyYWxcIixhLnZhbHVlKX0sVW5kZWZpbmVkTGl0ZXJhbDpmdW5jdGlvbigpe3RoaXMub3Bjb2RlKFwicHVzaExpdGVyYWxcIixcInVuZGVmaW5lZFwiKX0sTnVsbExpdGVyYWw6ZnVuY3Rpb24oKXt0aGlzLm9wY29kZShcInB1c2hMaXRlcmFsXCIsXCJudWxsXCIpfSxIYXNoOmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFpcnMsYz0wLGQ9Yi5sZW5ndGg7Zm9yKHRoaXMub3Bjb2RlKFwicHVzaEhhc2hcIik7YzxkO2MrKyl0aGlzLnB1c2hQYXJhbShiW2NdLnZhbHVlKTtmb3IoO2MtLTspdGhpcy5vcGNvZGUoXCJhc3NpZ25Ub0hhc2hcIixiW2NdLmtleSk7dGhpcy5vcGNvZGUoXCJwb3BIYXNoXCIpfSxvcGNvZGU6ZnVuY3Rpb24oYSl7dGhpcy5vcGNvZGVzLnB1c2goe29wY29kZTphLGFyZ3M6cC5jYWxsKGFyZ3VtZW50cywxKSxsb2M6dGhpcy5zb3VyY2VOb2RlWzBdLmxvY30pfSxhZGREZXB0aDpmdW5jdGlvbihhKXthJiYodGhpcy51c2VEZXB0aHM9ITApfSxjbGFzc2lmeVNleHByOmZ1bmN0aW9uKGEpe3ZhciBiPW9bXCJkZWZhdWx0XCJdLmhlbHBlcnMuc2ltcGxlSWQoYS5wYXRoKSxjPWImJiEhdGhpcy5ibG9ja1BhcmFtSW5kZXgoYS5wYXRoLnBhcnRzWzBdKSxkPSFjJiZvW1wiZGVmYXVsdFwiXS5oZWxwZXJzLmhlbHBlckV4cHJlc3Npb24oYSksZT0hYyYmKGR8fGIpO2lmKGUmJiFkKXt2YXIgZj1hLnBhdGgucGFydHNbMF0sZz10aGlzLm9wdGlvbnM7Zy5rbm93bkhlbHBlcnNbZl0/ZD0hMDpnLmtub3duSGVscGVyc09ubHkmJihlPSExKX1yZXR1cm4gZD9cImhlbHBlclwiOmU/XCJhbWJpZ3VvdXNcIjpcInNpbXBsZVwifSxwdXNoUGFyYW1zOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGg7YjxjO2IrKyl0aGlzLnB1c2hQYXJhbShhW2JdKX0scHVzaFBhcmFtOmZ1bmN0aW9uKGEpe3ZhciBiPW51bGwhPWEudmFsdWU/YS52YWx1ZTphLm9yaWdpbmFsfHxcIlwiO2lmKHRoaXMuc3RyaW5nUGFyYW1zKWIucmVwbGFjZSYmKGI9Yi5yZXBsYWNlKC9eKFxcLj9cXC5cXC8pKi9nLFwiXCIpLnJlcGxhY2UoL1xcLy9nLFwiLlwiKSksYS5kZXB0aCYmdGhpcy5hZGREZXB0aChhLmRlcHRoKSx0aGlzLm9wY29kZShcImdldENvbnRleHRcIixhLmRlcHRofHwwKSx0aGlzLm9wY29kZShcInB1c2hTdHJpbmdQYXJhbVwiLGIsYS50eXBlKSxcIlN1YkV4cHJlc3Npb25cIj09PWEudHlwZSYmdGhpcy5hY2NlcHQoYSk7ZWxzZXtpZih0aGlzLnRyYWNrSWRzKXt2YXIgYz12b2lkIDA7aWYoIWEucGFydHN8fG9bXCJkZWZhdWx0XCJdLmhlbHBlcnMuc2NvcGVkSWQoYSl8fGEuZGVwdGh8fChjPXRoaXMuYmxvY2tQYXJhbUluZGV4KGEucGFydHNbMF0pKSxjKXt2YXIgZD1hLnBhcnRzLnNsaWNlKDEpLmpvaW4oXCIuXCIpO3RoaXMub3Bjb2RlKFwicHVzaElkXCIsXCJCbG9ja1BhcmFtXCIsYyxkKX1lbHNlIGI9YS5vcmlnaW5hbHx8YixiLnJlcGxhY2UmJihiPWIucmVwbGFjZSgvXnRoaXMoPzpcXC58JCkvLFwiXCIpLnJlcGxhY2UoL15cXC5cXC8vLFwiXCIpLnJlcGxhY2UoL15cXC4kLyxcIlwiKSksdGhpcy5vcGNvZGUoXCJwdXNoSWRcIixhLnR5cGUsYil9dGhpcy5hY2NlcHQoYSl9fSxzZXR1cEZ1bGxNdXN0YWNoZVBhcmFtczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hLnBhcmFtcztyZXR1cm4gdGhpcy5wdXNoUGFyYW1zKGUpLHRoaXMub3Bjb2RlKFwicHVzaFByb2dyYW1cIixiKSx0aGlzLm9wY29kZShcInB1c2hQcm9ncmFtXCIsYyksYS5oYXNoP3RoaXMuYWNjZXB0KGEuaGFzaCk6dGhpcy5vcGNvZGUoXCJlbXB0eUhhc2hcIixkKSxlfSxibG9ja1BhcmFtSW5kZXg6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz10aGlzLm9wdGlvbnMuYmxvY2tQYXJhbXMubGVuZ3RoO2I8YztiKyspe3ZhciBkPXRoaXMub3B0aW9ucy5ibG9ja1BhcmFtc1tiXSxlPWQmJm0uaW5kZXhPZihkLGEpO2lmKGQmJmU+PTApcmV0dXJuW2IsZV19fX19LGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKGEpe3RoaXMudmFsdWU9YX1mdW5jdGlvbiBlKCl7fWZ1bmN0aW9uIGYoYSxiLGMsZCxlKXt2YXIgZj1iLnBvcFN0YWNrKCksZz1jLmxlbmd0aDtmb3IoYSYmZy0tO2Q8ZztkKyspZj1iLm5hbWVMb29rdXAoZixjW2RdLGUpO3JldHVybiBhP1tiLmFsaWFzYWJsZShcImNvbnRhaW5lci5zdHJpY3RcIiksXCIoXCIsZixcIiwgXCIsYi5xdW90ZWRTdHJpbmcoY1tkXSksXCIsIFwiLEpTT04uc3RyaW5naWZ5KGIuc291cmNlLmN1cnJlbnRMb2NhdGlvbiksXCIgKVwiXTpmfXZhciBnPWMoNjApW1wiZGVmYXVsdFwiXSxoPWMoMSlbXCJkZWZhdWx0XCJdO2IuX19lc01vZHVsZT0hMDt2YXIgaT1jKDQpLGo9Yyg2KSxrPWgoaiksbD1jKDUpLG09Yyg5Miksbj1oKG0pO2UucHJvdG90eXBlPXtuYW1lTG9va3VwOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuaW50ZXJuYWxOYW1lTG9va3VwKGEsYil9LGRlcHRoZWRMb29rdXA6ZnVuY3Rpb24oYSl7cmV0dXJuW3RoaXMuYWxpYXNhYmxlKFwiY29udGFpbmVyLmxvb2t1cFwiKSxcIihkZXB0aHMsIFwiLEpTT04uc3RyaW5naWZ5KGEpLFwiKVwiXX0sY29tcGlsZXJJbmZvOmZ1bmN0aW9uKCl7dmFyIGE9aS5DT01QSUxFUl9SRVZJU0lPTixiPWkuUkVWSVNJT05fQ0hBTkdFU1thXTtyZXR1cm5bYSxiXX0sYXBwZW5kVG9CdWZmZXI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBsLmlzQXJyYXkoYSl8fChhPVthXSksYT10aGlzLnNvdXJjZS53cmFwKGEsYiksdGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZT9bXCJyZXR1cm4gXCIsYSxcIjtcIl06Yz9bXCJidWZmZXIgKz0gXCIsYSxcIjtcIl06KGEuYXBwZW5kVG9CdWZmZXI9ITAsYSl9LGluaXRpYWxpemVCdWZmZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5xdW90ZWRTdHJpbmcoXCJcIil9LGludGVybmFsTmFtZUxvb2t1cDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmxvb2t1cFByb3BlcnR5RnVuY3Rpb25Jc1VzZWQ9ITAsW1wibG9va3VwUHJvcGVydHkoXCIsYSxcIixcIixKU09OLnN0cmluZ2lmeShiKSxcIilcIl19LGxvb2t1cFByb3BlcnR5RnVuY3Rpb25Jc1VzZWQ6ITEsY29tcGlsZTpmdW5jdGlvbihhLGIsYyxkKXt0aGlzLmVudmlyb25tZW50PWEsdGhpcy5vcHRpb25zPWIsdGhpcy5zdHJpbmdQYXJhbXM9dGhpcy5vcHRpb25zLnN0cmluZ1BhcmFtcyx0aGlzLnRyYWNrSWRzPXRoaXMub3B0aW9ucy50cmFja0lkcyx0aGlzLnByZWNvbXBpbGU9IWQsdGhpcy5uYW1lPXRoaXMuZW52aXJvbm1lbnQubmFtZSx0aGlzLmlzQ2hpbGQ9ISFjLHRoaXMuY29udGV4dD1jfHx7ZGVjb3JhdG9yczpbXSxwcm9ncmFtczpbXSxlbnZpcm9ubWVudHM6W119LHRoaXMucHJlYW1ibGUoKSx0aGlzLnN0YWNrU2xvdD0wLHRoaXMuc3RhY2tWYXJzPVtdLHRoaXMuYWxpYXNlcz17fSx0aGlzLnJlZ2lzdGVycz17bGlzdDpbXX0sdGhpcy5oYXNoZXM9W10sdGhpcy5jb21waWxlU3RhY2s9W10sdGhpcy5pbmxpbmVTdGFjaz1bXSx0aGlzLmJsb2NrUGFyYW1zPVtdLHRoaXMuY29tcGlsZUNoaWxkcmVuKGEsYiksdGhpcy51c2VEZXB0aHM9dGhpcy51c2VEZXB0aHN8fGEudXNlRGVwdGhzfHxhLnVzZURlY29yYXRvcnN8fHRoaXMub3B0aW9ucy5jb21wYXQsdGhpcy51c2VCbG9ja1BhcmFtcz10aGlzLnVzZUJsb2NrUGFyYW1zfHxhLnVzZUJsb2NrUGFyYW1zO3ZhciBlPWEub3Bjb2RlcyxmPXZvaWQgMCxnPXZvaWQgMCxoPXZvaWQgMCxpPXZvaWQgMDtmb3IoaD0wLGk9ZS5sZW5ndGg7aDxpO2grKylmPWVbaF0sdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uPWYubG9jLGc9Z3x8Zi5sb2MsdGhpc1tmLm9wY29kZV0uYXBwbHkodGhpcyxmLmFyZ3MpO2lmKHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbj1nLHRoaXMucHVzaFNvdXJjZShcIlwiKSx0aGlzLnN0YWNrU2xvdHx8dGhpcy5pbmxpbmVTdGFjay5sZW5ndGh8fHRoaXMuY29tcGlsZVN0YWNrLmxlbmd0aCl0aHJvdyBuZXcga1tcImRlZmF1bHRcIl0oXCJDb21waWxlIGNvbXBsZXRlZCB3aXRoIGNvbnRlbnQgbGVmdCBvbiBzdGFja1wiKTt0aGlzLmRlY29yYXRvcnMuaXNFbXB0eSgpP3RoaXMuZGVjb3JhdG9ycz12b2lkIDA6KHRoaXMudXNlRGVjb3JhdG9ycz0hMCx0aGlzLmRlY29yYXRvcnMucHJlcGVuZChbXCJ2YXIgZGVjb3JhdG9ycyA9IGNvbnRhaW5lci5kZWNvcmF0b3JzLCBcIix0aGlzLmxvb2t1cFByb3BlcnR5RnVuY3Rpb25WYXJEZWNsYXJhdGlvbigpLFwiO1xcblwiXSksdGhpcy5kZWNvcmF0b3JzLnB1c2goXCJyZXR1cm4gZm47XCIpLGQ/dGhpcy5kZWNvcmF0b3JzPUZ1bmN0aW9uLmFwcGx5KHRoaXMsW1wiZm5cIixcInByb3BzXCIsXCJjb250YWluZXJcIixcImRlcHRoMFwiLFwiZGF0YVwiLFwiYmxvY2tQYXJhbXNcIixcImRlcHRoc1wiLHRoaXMuZGVjb3JhdG9ycy5tZXJnZSgpXSk6KHRoaXMuZGVjb3JhdG9ycy5wcmVwZW5kKFwiZnVuY3Rpb24oZm4sIHByb3BzLCBjb250YWluZXIsIGRlcHRoMCwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xcblwiKSx0aGlzLmRlY29yYXRvcnMucHVzaChcIn1cXG5cIiksdGhpcy5kZWNvcmF0b3JzPXRoaXMuZGVjb3JhdG9ycy5tZXJnZSgpKSk7dmFyIGo9dGhpcy5jcmVhdGVGdW5jdGlvbkNvbnRleHQoZCk7aWYodGhpcy5pc0NoaWxkKXJldHVybiBqO3ZhciBsPXtjb21waWxlcjp0aGlzLmNvbXBpbGVySW5mbygpLG1haW46an07dGhpcy5kZWNvcmF0b3JzJiYobC5tYWluX2Q9dGhpcy5kZWNvcmF0b3JzLGwudXNlRGVjb3JhdG9ycz0hMCk7dmFyIG09dGhpcy5jb250ZXh0LG49bS5wcm9ncmFtcyxvPW0uZGVjb3JhdG9ycztmb3IoaD0wLGk9bi5sZW5ndGg7aDxpO2grKyluW2hdJiYobFtoXT1uW2hdLG9baF0mJihsW2grXCJfZFwiXT1vW2hdLGwudXNlRGVjb3JhdG9ycz0hMCkpO3JldHVybiB0aGlzLmVudmlyb25tZW50LnVzZVBhcnRpYWwmJihsLnVzZVBhcnRpYWw9ITApLHRoaXMub3B0aW9ucy5kYXRhJiYobC51c2VEYXRhPSEwKSx0aGlzLnVzZURlcHRocyYmKGwudXNlRGVwdGhzPSEwKSx0aGlzLnVzZUJsb2NrUGFyYW1zJiYobC51c2VCbG9ja1BhcmFtcz0hMCksdGhpcy5vcHRpb25zLmNvbXBhdCYmKGwuY29tcGF0PSEwKSxkP2wuY29tcGlsZXJPcHRpb25zPXRoaXMub3B0aW9uczoobC5jb21waWxlcj1KU09OLnN0cmluZ2lmeShsLmNvbXBpbGVyKSx0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb249e3N0YXJ0OntsaW5lOjEsY29sdW1uOjB9fSxsPXRoaXMub2JqZWN0TGl0ZXJhbChsKSxiLnNyY05hbWU/KGw9bC50b1N0cmluZ1dpdGhTb3VyY2VNYXAoe2ZpbGU6Yi5kZXN0TmFtZX0pLGwubWFwPWwubWFwJiZsLm1hcC50b1N0cmluZygpKTpsPWwudG9TdHJpbmcoKSksbH0scHJlYW1ibGU6ZnVuY3Rpb24oKXt0aGlzLmxhc3RDb250ZXh0PTAsdGhpcy5zb3VyY2U9bmV3IG5bXCJkZWZhdWx0XCJdKHRoaXMub3B0aW9ucy5zcmNOYW1lKSx0aGlzLmRlY29yYXRvcnM9bmV3IG5bXCJkZWZhdWx0XCJdKHRoaXMub3B0aW9ucy5zcmNOYW1lKX0sY3JlYXRlRnVuY3Rpb25Db250ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1cIlwiLGQ9dGhpcy5zdGFja1ZhcnMuY29uY2F0KHRoaXMucmVnaXN0ZXJzLmxpc3QpO2QubGVuZ3RoPjAmJihjKz1cIiwgXCIrZC5qb2luKFwiLCBcIikpO3ZhciBlPTA7Zyh0aGlzLmFsaWFzZXMpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGQ9Yi5hbGlhc2VzW2FdO2QuY2hpbGRyZW4mJmQucmVmZXJlbmNlQ291bnQ+MSYmKGMrPVwiLCBhbGlhc1wiKyArK2UrXCI9XCIrYSxkLmNoaWxkcmVuWzBdPVwiYWxpYXNcIitlKX0pLHRoaXMubG9va3VwUHJvcGVydHlGdW5jdGlvbklzVXNlZCYmKGMrPVwiLCBcIit0aGlzLmxvb2t1cFByb3BlcnR5RnVuY3Rpb25WYXJEZWNsYXJhdGlvbigpKTt2YXIgZj1bXCJjb250YWluZXJcIixcImRlcHRoMFwiLFwiaGVscGVyc1wiLFwicGFydGlhbHNcIixcImRhdGFcIl07KHRoaXMudXNlQmxvY2tQYXJhbXN8fHRoaXMudXNlRGVwdGhzKSYmZi5wdXNoKFwiYmxvY2tQYXJhbXNcIiksdGhpcy51c2VEZXB0aHMmJmYucHVzaChcImRlcHRoc1wiKTt2YXIgaD10aGlzLm1lcmdlU291cmNlKGMpO3JldHVybiBhPyhmLnB1c2goaCksRnVuY3Rpb24uYXBwbHkodGhpcyxmKSk6dGhpcy5zb3VyY2Uud3JhcChbXCJmdW5jdGlvbihcIixmLmpvaW4oXCIsXCIpLFwiKSB7XFxuICBcIixoLFwifVwiXSl9LG1lcmdlU291cmNlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZW52aXJvbm1lbnQuaXNTaW1wbGUsYz0hdGhpcy5mb3JjZUJ1ZmZlcixkPXZvaWQgMCxlPXZvaWQgMCxmPXZvaWQgMCxnPXZvaWQgMDtyZXR1cm4gdGhpcy5zb3VyY2UuZWFjaChmdW5jdGlvbihhKXthLmFwcGVuZFRvQnVmZmVyPyhmP2EucHJlcGVuZChcIiAgKyBcIik6Zj1hLGc9YSk6KGYmJihlP2YucHJlcGVuZChcImJ1ZmZlciArPSBcIik6ZD0hMCxnLmFkZChcIjtcIiksZj1nPXZvaWQgMCksZT0hMCxifHwoYz0hMSkpfSksYz9mPyhmLnByZXBlbmQoXCJyZXR1cm4gXCIpLGcuYWRkKFwiO1wiKSk6ZXx8dGhpcy5zb3VyY2UucHVzaCgncmV0dXJuIFwiXCI7Jyk6KGErPVwiLCBidWZmZXIgPSBcIisoZD9cIlwiOnRoaXMuaW5pdGlhbGl6ZUJ1ZmZlcigpKSxmPyhmLnByZXBlbmQoXCJyZXR1cm4gYnVmZmVyICsgXCIpLGcuYWRkKFwiO1wiKSk6dGhpcy5zb3VyY2UucHVzaChcInJldHVybiBidWZmZXI7XCIpKSxhJiZ0aGlzLnNvdXJjZS5wcmVwZW5kKFwidmFyIFwiK2Euc3Vic3RyaW5nKDIpKyhkP1wiXCI6XCI7XFxuXCIpKSx0aGlzLnNvdXJjZS5tZXJnZSgpfSxsb29rdXBQcm9wZXJ0eUZ1bmN0aW9uVmFyRGVjbGFyYXRpb246ZnVuY3Rpb24oKXtyZXR1cm5cIlxcbiAgICAgIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XFxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XFxuICAgICAgICB9XFxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXFxuICAgIH1cXG4gICAgXCIudHJpbSgpfSxibG9ja1ZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYWxpYXNhYmxlKFwiY29udGFpbmVyLmhvb2tzLmJsb2NrSGVscGVyTWlzc2luZ1wiKSxjPVt0aGlzLmNvbnRleHROYW1lKDApXTt0aGlzLnNldHVwSGVscGVyQXJncyhhLDAsYyk7dmFyIGQ9dGhpcy5wb3BTdGFjaygpO2Muc3BsaWNlKDEsMCxkKSx0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGIsXCJjYWxsXCIsYykpfSxhbWJpZ3VvdXNCbG9ja1ZhbHVlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5hbGlhc2FibGUoXCJjb250YWluZXIuaG9va3MuYmxvY2tIZWxwZXJNaXNzaW5nXCIpLGI9W3RoaXMuY29udGV4dE5hbWUoMCldO3RoaXMuc2V0dXBIZWxwZXJBcmdzKFwiXCIsMCxiLCEwKSx0aGlzLmZsdXNoSW5saW5lKCk7dmFyIGM9dGhpcy50b3BTdGFjaygpO2Iuc3BsaWNlKDEsMCxjKSx0aGlzLnB1c2hTb3VyY2UoW1wiaWYgKCFcIix0aGlzLmxhc3RIZWxwZXIsXCIpIHsgXCIsYyxcIiA9IFwiLHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChhLFwiY2FsbFwiLGIpLFwifVwiXSl9LGFwcGVuZENvbnRlbnQ6ZnVuY3Rpb24oYSl7dGhpcy5wZW5kaW5nQ29udGVudD9hPXRoaXMucGVuZGluZ0NvbnRlbnQrYTp0aGlzLnBlbmRpbmdMb2NhdGlvbj10aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb24sdGhpcy5wZW5kaW5nQ29udGVudD1hfSxhcHBlbmQ6ZnVuY3Rpb24oKXtpZih0aGlzLmlzSW5saW5lKCkpdGhpcy5yZXBsYWNlU3RhY2soZnVuY3Rpb24oYSl7cmV0dXJuW1wiICE9IG51bGwgPyBcIixhLCcgOiBcIlwiJ119KSx0aGlzLnB1c2hTb3VyY2UodGhpcy5hcHBlbmRUb0J1ZmZlcih0aGlzLnBvcFN0YWNrKCkpKTtlbHNle3ZhciBhPXRoaXMucG9wU3RhY2soKTt0aGlzLnB1c2hTb3VyY2UoW1wiaWYgKFwiLGEsXCIgIT0gbnVsbCkgeyBcIix0aGlzLmFwcGVuZFRvQnVmZmVyKGEsdm9pZCAwLCEwKSxcIiB9XCJdKSx0aGlzLmVudmlyb25tZW50LmlzU2ltcGxlJiZ0aGlzLnB1c2hTb3VyY2UoW1wiZWxzZSB7IFwiLHRoaXMuYXBwZW5kVG9CdWZmZXIoXCInJ1wiLHZvaWQgMCwhMCksXCIgfVwiXSl9fSxhcHBlbmRFc2NhcGVkOmZ1bmN0aW9uKCl7dGhpcy5wdXNoU291cmNlKHRoaXMuYXBwZW5kVG9CdWZmZXIoW3RoaXMuYWxpYXNhYmxlKFwiY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb25cIiksXCIoXCIsdGhpcy5wb3BTdGFjaygpLFwiKVwiXSkpfSxnZXRDb250ZXh0OmZ1bmN0aW9uKGEpe3RoaXMubGFzdENvbnRleHQ9YX0scHVzaENvbnRleHQ6ZnVuY3Rpb24oKXt0aGlzLnB1c2hTdGFja0xpdGVyYWwodGhpcy5jb250ZXh0TmFtZSh0aGlzLmxhc3RDb250ZXh0KSl9LGxvb2t1cE9uQ29udGV4dDpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT0wO2R8fCF0aGlzLm9wdGlvbnMuY29tcGF0fHx0aGlzLmxhc3RDb250ZXh0P3RoaXMucHVzaENvbnRleHQoKTp0aGlzLnB1c2godGhpcy5kZXB0aGVkTG9va3VwKGFbZSsrXSkpLHRoaXMucmVzb2x2ZVBhdGgoXCJjb250ZXh0XCIsYSxlLGIsYyl9LGxvb2t1cEJsb2NrUGFyYW06ZnVuY3Rpb24oYSxiKXt0aGlzLnVzZUJsb2NrUGFyYW1zPSEwLHRoaXMucHVzaChbXCJibG9ja1BhcmFtc1tcIixhWzBdLFwiXVtcIixhWzFdLFwiXVwiXSksdGhpcy5yZXNvbHZlUGF0aChcImNvbnRleHRcIixiLDEpfSxsb29rdXBEYXRhOmZ1bmN0aW9uKGEsYixjKXthP3RoaXMucHVzaFN0YWNrTGl0ZXJhbChcImNvbnRhaW5lci5kYXRhKGRhdGEsIFwiK2ErXCIpXCIpOnRoaXMucHVzaFN0YWNrTGl0ZXJhbChcImRhdGFcIiksdGhpcy5yZXNvbHZlUGF0aChcImRhdGFcIixiLDAsITAsYyl9LHJlc29sdmVQYXRoOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGc9dGhpcztpZih0aGlzLm9wdGlvbnMuc3RyaWN0fHx0aGlzLm9wdGlvbnMuYXNzdW1lT2JqZWN0cylyZXR1cm4gdm9pZCB0aGlzLnB1c2goZih0aGlzLm9wdGlvbnMuc3RyaWN0JiZlLHRoaXMsYixjLGEpKTtmb3IodmFyIGg9Yi5sZW5ndGg7YzxoO2MrKyl0aGlzLnJlcGxhY2VTdGFjayhmdW5jdGlvbihlKXt2YXIgZj1nLm5hbWVMb29rdXAoZSxiW2NdLGEpO3JldHVybiBkP1tcIiAmJiBcIixmXTpbXCIgIT0gbnVsbCA/IFwiLGYsXCIgOiBcIixlXX0pfSxyZXNvbHZlUG9zc2libGVMYW1iZGE6ZnVuY3Rpb24oKXt0aGlzLnB1c2goW3RoaXMuYWxpYXNhYmxlKFwiY29udGFpbmVyLmxhbWJkYVwiKSxcIihcIix0aGlzLnBvcFN0YWNrKCksXCIsIFwiLHRoaXMuY29udGV4dE5hbWUoMCksXCIpXCJdKX0scHVzaFN0cmluZ1BhcmFtOmZ1bmN0aW9uKGEsYil7dGhpcy5wdXNoQ29udGV4dCgpLHRoaXMucHVzaFN0cmluZyhiKSxcIlN1YkV4cHJlc3Npb25cIiE9PWImJihcInN0cmluZ1wiPT10eXBlb2YgYT90aGlzLnB1c2hTdHJpbmcoYSk6dGhpcy5wdXNoU3RhY2tMaXRlcmFsKGEpKX0sZW1wdHlIYXNoOmZ1bmN0aW9uKGEpe3RoaXMudHJhY2tJZHMmJnRoaXMucHVzaChcInt9XCIpLHRoaXMuc3RyaW5nUGFyYW1zJiYodGhpcy5wdXNoKFwie31cIiksdGhpcy5wdXNoKFwie31cIikpLHRoaXMucHVzaFN0YWNrTGl0ZXJhbChhP1widW5kZWZpbmVkXCI6XCJ7fVwiKX0scHVzaEhhc2g6ZnVuY3Rpb24oKXt0aGlzLmhhc2gmJnRoaXMuaGFzaGVzLnB1c2godGhpcy5oYXNoKSx0aGlzLmhhc2g9e3ZhbHVlczp7fSx0eXBlczpbXSxjb250ZXh0czpbXSxpZHM6W119fSxwb3BIYXNoOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5oYXNoO3RoaXMuaGFzaD10aGlzLmhhc2hlcy5wb3AoKSx0aGlzLnRyYWNrSWRzJiZ0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGEuaWRzKSksdGhpcy5zdHJpbmdQYXJhbXMmJih0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGEuY29udGV4dHMpKSx0aGlzLnB1c2godGhpcy5vYmplY3RMaXRlcmFsKGEudHlwZXMpKSksdGhpcy5wdXNoKHRoaXMub2JqZWN0TGl0ZXJhbChhLnZhbHVlcykpfSxwdXNoU3RyaW5nOmZ1bmN0aW9uKGEpe3RoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLnF1b3RlZFN0cmluZyhhKSl9LHB1c2hMaXRlcmFsOmZ1bmN0aW9uKGEpe3RoaXMucHVzaFN0YWNrTGl0ZXJhbChhKX0scHVzaFByb2dyYW06ZnVuY3Rpb24oYSl7bnVsbCE9YT90aGlzLnB1c2hTdGFja0xpdGVyYWwodGhpcy5wcm9ncmFtRXhwcmVzc2lvbihhKSk6dGhpcy5wdXNoU3RhY2tMaXRlcmFsKG51bGwpfSxyZWdpc3RlckRlY29yYXRvcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMubmFtZUxvb2t1cChcImRlY29yYXRvcnNcIixiLFwiZGVjb3JhdG9yXCIpLGQ9dGhpcy5zZXR1cEhlbHBlckFyZ3MoYixhKTt0aGlzLmRlY29yYXRvcnMucHVzaChbXCJmbiA9IFwiLHRoaXMuZGVjb3JhdG9ycy5mdW5jdGlvbkNhbGwoYyxcIlwiLFtcImZuXCIsXCJwcm9wc1wiLFwiY29udGFpbmVyXCIsZF0pLFwiIHx8IGZuO1wiXSl9LGludm9rZUhlbHBlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcy5wb3BTdGFjaygpLGU9dGhpcy5zZXR1cEhlbHBlcihhLGIpLGY9W107YyYmZi5wdXNoKGUubmFtZSksZi5wdXNoKGQpLHRoaXMub3B0aW9ucy5zdHJpY3R8fGYucHVzaCh0aGlzLmFsaWFzYWJsZShcImNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nXCIpKTt2YXIgZz1bXCIoXCIsdGhpcy5pdGVtc1NlcGFyYXRlZEJ5KGYsXCJ8fFwiKSxcIilcIl0saD10aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoZyxcImNhbGxcIixlLmNhbGxQYXJhbXMpO3RoaXMucHVzaChoKX0saXRlbXNTZXBhcmF0ZWRCeTpmdW5jdGlvbihhLGIpe3ZhciBjPVtdO2MucHVzaChhWzBdKTtmb3IodmFyIGQ9MTtkPGEubGVuZ3RoO2QrKyljLnB1c2goYixhW2RdKTtyZXR1cm4gY30saW52b2tlS25vd25IZWxwZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLnNldHVwSGVscGVyKGEsYik7dGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChjLm5hbWUsXCJjYWxsXCIsYy5jYWxsUGFyYW1zKSl9LGludm9rZUFtYmlndW91czpmdW5jdGlvbihhLGIpe3RoaXMudXNlUmVnaXN0ZXIoXCJoZWxwZXJcIik7dmFyIGM9dGhpcy5wb3BTdGFjaygpO3RoaXMuZW1wdHlIYXNoKCk7dmFyIGQ9dGhpcy5zZXR1cEhlbHBlcigwLGEsYiksZT10aGlzLmxhc3RIZWxwZXI9dGhpcy5uYW1lTG9va3VwKFwiaGVscGVyc1wiLGEsXCJoZWxwZXJcIiksZj1bXCIoXCIsXCIoaGVscGVyID0gXCIsZSxcIiB8fCBcIixjLFwiKVwiXTt0aGlzLm9wdGlvbnMuc3RyaWN0fHwoZlswXT1cIihoZWxwZXIgPSBcIixmLnB1c2goXCIgIT0gbnVsbCA/IGhlbHBlciA6IFwiLHRoaXMuYWxpYXNhYmxlKFwiY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmdcIikpKSx0aGlzLnB1c2goW1wiKFwiLGYsZC5wYXJhbXNJbml0P1tcIiksKFwiLGQucGFyYW1zSW5pdF06W10sXCIpLFwiLFwiKHR5cGVvZiBoZWxwZXIgPT09IFwiLHRoaXMuYWxpYXNhYmxlKCdcImZ1bmN0aW9uXCInKSxcIiA/IFwiLHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChcImhlbHBlclwiLFwiY2FsbFwiLGQuY2FsbFBhcmFtcyksXCIgOiBoZWxwZXIpKVwiXSl9LGludm9rZVBhcnRpYWw6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dGhpcy5zZXR1cFBhcmFtcyhiLDEsZCk7YSYmKGI9dGhpcy5wb3BTdGFjaygpLGRlbGV0ZSBlLm5hbWUpLGMmJihlLmluZGVudD1KU09OLnN0cmluZ2lmeShjKSksZS5oZWxwZXJzPVwiaGVscGVyc1wiLGUucGFydGlhbHM9XCJwYXJ0aWFsc1wiLGUuZGVjb3JhdG9ycz1cImNvbnRhaW5lci5kZWNvcmF0b3JzXCIsYT9kLnVuc2hpZnQoYik6ZC51bnNoaWZ0KHRoaXMubmFtZUxvb2t1cChcInBhcnRpYWxzXCIsYixcInBhcnRpYWxcIikpLHRoaXMub3B0aW9ucy5jb21wYXQmJihlLmRlcHRocz1cImRlcHRoc1wiKSxlPXRoaXMub2JqZWN0TGl0ZXJhbChlKSxkLnB1c2goZSksdGhpcy5wdXNoKHRoaXMuc291cmNlLmZ1bmN0aW9uQ2FsbChcImNvbnRhaW5lci5pbnZva2VQYXJ0aWFsXCIsXCJcIixkKSl9LGFzc2lnblRvSGFzaDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnBvcFN0YWNrKCksYz12b2lkIDAsZD12b2lkIDAsZT12b2lkIDA7dGhpcy50cmFja0lkcyYmKGU9dGhpcy5wb3BTdGFjaygpKSx0aGlzLnN0cmluZ1BhcmFtcyYmKGQ9dGhpcy5wb3BTdGFjaygpLGM9dGhpcy5wb3BTdGFjaygpKTt2YXIgZj10aGlzLmhhc2g7YyYmKGYuY29udGV4dHNbYV09YyksZCYmKGYudHlwZXNbYV09ZCksZSYmKGYuaWRzW2FdPWUpLGYudmFsdWVzW2FdPWJ9LHB1c2hJZDpmdW5jdGlvbihhLGIsYyl7XCJCbG9ja1BhcmFtXCI9PT1hP3RoaXMucHVzaFN0YWNrTGl0ZXJhbChcImJsb2NrUGFyYW1zW1wiK2JbMF0rXCJdLnBhdGhbXCIrYlsxXStcIl1cIisoYz9cIiArIFwiK0pTT04uc3RyaW5naWZ5KFwiLlwiK2MpOlwiXCIpKTpcIlBhdGhFeHByZXNzaW9uXCI9PT1hP3RoaXMucHVzaFN0cmluZyhiKTpcIlN1YkV4cHJlc3Npb25cIj09PWE/dGhpcy5wdXNoU3RhY2tMaXRlcmFsKFwidHJ1ZVwiKTp0aGlzLnB1c2hTdGFja0xpdGVyYWwoXCJudWxsXCIpfSxjb21waWxlcjplLGNvbXBpbGVDaGlsZHJlbjpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1hLmNoaWxkcmVuLGQ9dm9pZCAwLGU9dm9pZCAwLGY9MCxnPWMubGVuZ3RoO2Y8ZztmKyspe2Q9Y1tmXSxlPW5ldyB0aGlzLmNvbXBpbGVyO3ZhciBoPXRoaXMubWF0Y2hFeGlzdGluZ1Byb2dyYW0oZCk7aWYobnVsbD09aCl7dGhpcy5jb250ZXh0LnByb2dyYW1zLnB1c2goXCJcIik7dmFyIGk9dGhpcy5jb250ZXh0LnByb2dyYW1zLmxlbmd0aDtkLmluZGV4PWksZC5uYW1lPVwicHJvZ3JhbVwiK2ksdGhpcy5jb250ZXh0LnByb2dyYW1zW2ldPWUuY29tcGlsZShkLGIsdGhpcy5jb250ZXh0LCF0aGlzLnByZWNvbXBpbGUpLHRoaXMuY29udGV4dC5kZWNvcmF0b3JzW2ldPWUuZGVjb3JhdG9ycyx0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzW2ldPWQsdGhpcy51c2VEZXB0aHM9dGhpcy51c2VEZXB0aHN8fGUudXNlRGVwdGhzLHRoaXMudXNlQmxvY2tQYXJhbXM9dGhpcy51c2VCbG9ja1BhcmFtc3x8ZS51c2VCbG9ja1BhcmFtcyxkLnVzZURlcHRocz10aGlzLnVzZURlcHRocyxkLnVzZUJsb2NrUGFyYW1zPXRoaXMudXNlQmxvY2tQYXJhbXN9ZWxzZSBkLmluZGV4PWguaW5kZXgsZC5uYW1lPVwicHJvZ3JhbVwiK2guaW5kZXgsdGhpcy51c2VEZXB0aHM9dGhpcy51c2VEZXB0aHN8fGgudXNlRGVwdGhzLHRoaXMudXNlQmxvY2tQYXJhbXM9dGhpcy51c2VCbG9ja1BhcmFtc3x8aC51c2VCbG9ja1BhcmFtc319LG1hdGNoRXhpc3RpbmdQcm9ncmFtOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wLGM9dGhpcy5jb250ZXh0LmVudmlyb25tZW50cy5sZW5ndGg7YjxjO2IrKyl7dmFyIGQ9dGhpcy5jb250ZXh0LmVudmlyb25tZW50c1tiXTtpZihkJiZkLmVxdWFscyhhKSlyZXR1cm4gZH19LHByb2dyYW1FeHByZXNzaW9uOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZW52aXJvbm1lbnQuY2hpbGRyZW5bYV0sYz1bYi5pbmRleCxcImRhdGFcIixiLmJsb2NrUGFyYW1zXTtyZXR1cm4odGhpcy51c2VCbG9ja1BhcmFtc3x8dGhpcy51c2VEZXB0aHMpJiZjLnB1c2goXCJibG9ja1BhcmFtc1wiKSx0aGlzLnVzZURlcHRocyYmYy5wdXNoKFwiZGVwdGhzXCIpLFwiY29udGFpbmVyLnByb2dyYW0oXCIrYy5qb2luKFwiLCBcIikrXCIpXCJ9LHVzZVJlZ2lzdGVyOmZ1bmN0aW9uKGEpe3RoaXMucmVnaXN0ZXJzW2FdfHwodGhpcy5yZWdpc3RlcnNbYV09ITAsdGhpcy5yZWdpc3RlcnMubGlzdC5wdXNoKGEpKX0scHVzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIGR8fChhPXRoaXMuc291cmNlLndyYXAoYSkpLHRoaXMuaW5saW5lU3RhY2sucHVzaChhKSxhfSxwdXNoU3RhY2tMaXRlcmFsOmZ1bmN0aW9uKGEpe3RoaXMucHVzaChuZXcgZChhKSl9LHB1c2hTb3VyY2U6ZnVuY3Rpb24oYSl7dGhpcy5wZW5kaW5nQ29udGVudCYmKHRoaXMuc291cmNlLnB1c2godGhpcy5hcHBlbmRUb0J1ZmZlcih0aGlzLnNvdXJjZS5xdW90ZWRTdHJpbmcodGhpcy5wZW5kaW5nQ29udGVudCksdGhpcy5wZW5kaW5nTG9jYXRpb24pKSx0aGlzLnBlbmRpbmdDb250ZW50PXZvaWQgMCksYSYmdGhpcy5zb3VyY2UucHVzaChhKX0scmVwbGFjZVN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPVtcIihcIl0sYz12b2lkIDAsZT12b2lkIDAsZj12b2lkIDA7aWYoIXRoaXMuaXNJbmxpbmUoKSl0aHJvdyBuZXcga1tcImRlZmF1bHRcIl0oXCJyZXBsYWNlU3RhY2sgb24gbm9uLWlubGluZVwiKTt2YXIgZz10aGlzLnBvcFN0YWNrKCEwKTtpZihnIGluc3RhbmNlb2YgZCljPVtnLnZhbHVlXSxiPVtcIihcIixjXSxmPSEwO2Vsc2V7ZT0hMDt2YXIgaD10aGlzLmluY3JTdGFjaygpO2I9W1wiKChcIix0aGlzLnB1c2goaCksXCIgPSBcIixnLFwiKVwiXSxjPXRoaXMudG9wU3RhY2soKX12YXIgaT1hLmNhbGwodGhpcyxjKTtmfHx0aGlzLnBvcFN0YWNrKCksZSYmdGhpcy5zdGFja1Nsb3QtLSx0aGlzLnB1c2goYi5jb25jYXQoaSxcIilcIikpfSxpbmNyU3RhY2s6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdGFja1Nsb3QrKyx0aGlzLnN0YWNrU2xvdD50aGlzLnN0YWNrVmFycy5sZW5ndGgmJnRoaXMuc3RhY2tWYXJzLnB1c2goXCJzdGFja1wiK3RoaXMuc3RhY2tTbG90KSx0aGlzLnRvcFN0YWNrTmFtZSgpfSx0b3BTdGFja05hbWU6ZnVuY3Rpb24oKXtyZXR1cm5cInN0YWNrXCIrdGhpcy5zdGFja1Nsb3R9LGZsdXNoSW5saW5lOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5pbmxpbmVTdGFjazt0aGlzLmlubGluZVN0YWNrPVtdO2Zvcih2YXIgYj0wLGM9YS5sZW5ndGg7YjxjO2IrKyl7dmFyIGU9YVtiXTtpZihlIGluc3RhbmNlb2YgZCl0aGlzLmNvbXBpbGVTdGFjay5wdXNoKGUpO2Vsc2V7dmFyIGY9dGhpcy5pbmNyU3RhY2soKTt0aGlzLnB1c2hTb3VyY2UoW2YsXCIgPSBcIixlLFwiO1wiXSksdGhpcy5jb21waWxlU3RhY2sucHVzaChmKX19fSxpc0lubGluZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlubGluZVN0YWNrLmxlbmd0aH0scG9wU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5pc0lubGluZSgpLGM9KGI/dGhpcy5pbmxpbmVTdGFjazp0aGlzLmNvbXBpbGVTdGFjaykucG9wKCk7aWYoIWEmJmMgaW5zdGFuY2VvZiBkKXJldHVybiBjLnZhbHVlO2lmKCFiKXtpZighdGhpcy5zdGFja1Nsb3QpdGhyb3cgbmV3IGtbXCJkZWZhdWx0XCJdKFwiSW52YWxpZCBzdGFjayBwb3BcIik7dGhpcy5zdGFja1Nsb3QtLX1yZXR1cm4gY30sdG9wU3RhY2s6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmlzSW5saW5lKCk/dGhpcy5pbmxpbmVTdGFjazp0aGlzLmNvbXBpbGVTdGFjayxiPWFbYS5sZW5ndGgtMV07cmV0dXJuIGIgaW5zdGFuY2VvZiBkP2IudmFsdWU6Yn0sY29udGV4dE5hbWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudXNlRGVwdGhzJiZhP1wiZGVwdGhzW1wiK2ErXCJdXCI6XCJkZXB0aFwiK2F9LHF1b3RlZFN0cmluZzpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5zb3VyY2UucXVvdGVkU3RyaW5nKGEpfSxvYmplY3RMaXRlcmFsOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnNvdXJjZS5vYmplY3RMaXRlcmFsKGEpfSxhbGlhc2FibGU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hbGlhc2VzW2FdO3JldHVybiBiPyhiLnJlZmVyZW5jZUNvdW50KyssYik6KGI9dGhpcy5hbGlhc2VzW2FdPXRoaXMuc291cmNlLndyYXAoYSksYi5hbGlhc2FibGU9ITAsYi5yZWZlcmVuY2VDb3VudD0xLGIpfSxzZXR1cEhlbHBlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT10aGlzLnNldHVwSGVscGVyQXJncyhiLGEsZCxjKSxmPXRoaXMubmFtZUxvb2t1cChcImhlbHBlcnNcIixiLFwiaGVscGVyXCIpLGc9dGhpcy5hbGlhc2FibGUodGhpcy5jb250ZXh0TmFtZSgwKStcIiAhPSBudWxsID8gXCIrdGhpcy5jb250ZXh0TmFtZSgwKStcIiA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pXCIpO3JldHVybntwYXJhbXM6ZCxwYXJhbXNJbml0OmUsbmFtZTpmLGNhbGxQYXJhbXM6W2ddLmNvbmNhdChkKX19LHNldHVwUGFyYW1zOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD17fSxlPVtdLGY9W10sZz1bXSxoPSFjLGk9dm9pZCAwO2gmJihjPVtdKSxkLm5hbWU9dGhpcy5xdW90ZWRTdHJpbmcoYSksZC5oYXNoPXRoaXMucG9wU3RhY2soKSx0aGlzLnRyYWNrSWRzJiYoZC5oYXNoSWRzPXRoaXMucG9wU3RhY2soKSksdGhpcy5zdHJpbmdQYXJhbXMmJihkLmhhc2hUeXBlcz10aGlzLnBvcFN0YWNrKCksZC5oYXNoQ29udGV4dHM9dGhpcy5wb3BTdGFjaygpKTt2YXIgaj10aGlzLnBvcFN0YWNrKCksaz10aGlzLnBvcFN0YWNrKCk7KGt8fGopJiYoZC5mbj1rfHxcImNvbnRhaW5lci5ub29wXCIsZC5pbnZlcnNlPWp8fFwiY29udGFpbmVyLm5vb3BcIik7Zm9yKHZhciBsPWI7bC0tOylpPXRoaXMucG9wU3RhY2soKSxjW2xdPWksdGhpcy50cmFja0lkcyYmKGdbbF09dGhpcy5wb3BTdGFjaygpKSx0aGlzLnN0cmluZ1BhcmFtcyYmKGZbbF09dGhpcy5wb3BTdGFjaygpLGVbbF09dGhpcy5wb3BTdGFjaygpKTtyZXR1cm4gaCYmKGQuYXJncz10aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KGMpKSx0aGlzLnRyYWNrSWRzJiYoZC5pZHM9dGhpcy5zb3VyY2UuZ2VuZXJhdGVBcnJheShnKSksdGhpcy5zdHJpbmdQYXJhbXMmJihkLnR5cGVzPXRoaXMuc291cmNlLmdlbmVyYXRlQXJyYXkoZiksZC5jb250ZXh0cz10aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KGUpKSx0aGlzLm9wdGlvbnMuZGF0YSYmKGQuZGF0YT1cImRhdGFcIiksdGhpcy51c2VCbG9ja1BhcmFtcyYmKGQuYmxvY2tQYXJhbXM9XCJibG9ja1BhcmFtc1wiKSxkfSxzZXR1cEhlbHBlckFyZ3M6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dGhpcy5zZXR1cFBhcmFtcyhhLGIsYyk7cmV0dXJuIGUubG9jPUpTT04uc3RyaW5naWZ5KHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbiksZT10aGlzLm9iamVjdExpdGVyYWwoZSksZD8odGhpcy51c2VSZWdpc3RlcihcIm9wdGlvbnNcIiksYy5wdXNoKFwib3B0aW9uc1wiKSxbXCJvcHRpb25zPVwiLGVdKTpjPyhjLnB1c2goZSksXCJcIik6ZX19LGZ1bmN0aW9uKCl7Zm9yKHZhciBhPVwiYnJlYWsgZWxzZSBuZXcgdmFyIGNhc2UgZmluYWxseSByZXR1cm4gdm9pZCBjYXRjaCBmb3Igc3dpdGNoIHdoaWxlIGNvbnRpbnVlIGZ1bmN0aW9uIHRoaXMgd2l0aCBkZWZhdWx0IGlmIHRocm93IGRlbGV0ZSBpbiB0cnkgZG8gaW5zdGFuY2VvZiB0eXBlb2YgYWJzdHJhY3QgZW51bSBpbnQgc2hvcnQgYm9vbGVhbiBleHBvcnQgaW50ZXJmYWNlIHN0YXRpYyBieXRlIGV4dGVuZHMgbG9uZyBzdXBlciBjaGFyIGZpbmFsIG5hdGl2ZSBzeW5jaHJvbml6ZWQgY2xhc3MgZmxvYXQgcGFja2FnZSB0aHJvd3MgY29uc3QgZ290byBwcml2YXRlIHRyYW5zaWVudCBkZWJ1Z2dlciBpbXBsZW1lbnRzIHByb3RlY3RlZCB2b2xhdGlsZSBkb3VibGUgaW1wb3J0IHB1YmxpYyBsZXQgeWllbGQgYXdhaXQgbnVsbCB0cnVlIGZhbHNlXCIuc3BsaXQoXCIgXCIpLGI9ZS5SRVNFUlZFRF9XT1JEUz17fSxjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKWJbYVtjXV09ITB9KCksZS5pc1ZhbGlkSmF2YVNjcmlwdFZhcmlhYmxlTmFtZT1mdW5jdGlvbihhKXtyZXR1cm4hZS5SRVNFUlZFRF9XT1JEU1thXSYmL15bYS16QS1aXyRdWzAtOWEtekEtWl8kXSokLy50ZXN0KGEpfSxiW1wiZGVmYXVsdFwiXT1lLGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGQoYSxiLGMpe2lmKGcuaXNBcnJheShhKSl7Zm9yKHZhciBkPVtdLGU9MCxmPWEubGVuZ3RoO2U8ZjtlKyspZC5wdXNoKGIud3JhcChhW2VdLGMpKTtyZXR1cm4gZH1yZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGF8fFwibnVtYmVyXCI9PXR5cGVvZiBhP2ErXCJcIjphfWZ1bmN0aW9uIGUoYSl7dGhpcy5zcmNGaWxlPWEsdGhpcy5zb3VyY2U9W119dmFyIGY9Yyg2MClbXCJkZWZhdWx0XCJdO2IuX19lc01vZHVsZT0hMDt2YXIgZz1jKDUpLGg9dm9pZCAwO3RyeXt9Y2F0Y2goaSl7fWh8fChoPWZ1bmN0aW9uKGEsYixjLGQpe3RoaXMuc3JjPVwiXCIsZCYmdGhpcy5hZGQoZCl9LGgucHJvdG90eXBlPXthZGQ6ZnVuY3Rpb24oYSl7Zy5pc0FycmF5KGEpJiYoYT1hLmpvaW4oXCJcIikpLHRoaXMuc3JjKz1hfSxwcmVwZW5kOmZ1bmN0aW9uKGEpe2cuaXNBcnJheShhKSYmKGE9YS5qb2luKFwiXCIpKSx0aGlzLnNyYz1hK3RoaXMuc3JjfSx0b1N0cmluZ1dpdGhTb3VyY2VNYXA6ZnVuY3Rpb24oKXtyZXR1cm57Y29kZTp0aGlzLnRvU3RyaW5nKCl9fSx0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNyY319KSxlLnByb3RvdHlwZT17aXNFbXB0eTpmdW5jdGlvbigpe3JldHVybiF0aGlzLnNvdXJjZS5sZW5ndGh9LHByZXBlbmQ6ZnVuY3Rpb24oYSxiKXt0aGlzLnNvdXJjZS51bnNoaWZ0KHRoaXMud3JhcChhLGIpKX0scHVzaDpmdW5jdGlvbihhLGIpe3RoaXMuc291cmNlLnB1c2godGhpcy53cmFwKGEsYikpfSxtZXJnZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZW1wdHkoKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe2EuYWRkKFtcIiAgXCIsYixcIlxcblwiXSl9KSxhfSxlYWNoOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wLGM9dGhpcy5zb3VyY2UubGVuZ3RoO2I8YztiKyspYSh0aGlzLnNvdXJjZVtiXSl9LGVtcHR5OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jdXJyZW50TG9jYXRpb258fHtzdGFydDp7fX07cmV0dXJuIG5ldyBoKGEuc3RhcnQubGluZSxhLnN0YXJ0LmNvbHVtbix0aGlzLnNyY0ZpbGUpfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPWFyZ3VtZW50cy5sZW5ndGg8PTF8fHZvaWQgMD09PWFyZ3VtZW50c1sxXT90aGlzLmN1cnJlbnRMb2NhdGlvbnx8e3N0YXJ0Ont9fTphcmd1bWVudHNbMV07cmV0dXJuIGEgaW5zdGFuY2VvZiBoP2E6KGE9ZChhLHRoaXMsYiksbmV3IGgoYi5zdGFydC5saW5lLGIuc3RhcnQuY29sdW1uLHRoaXMuc3JjRmlsZSxhKSl9LGZ1bmN0aW9uQ2FsbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGM9dGhpcy5nZW5lcmF0ZUxpc3QoYyksdGhpcy53cmFwKFthLGI/XCIuXCIrYitcIihcIjpcIihcIixjLFwiKVwiXSl9LHF1b3RlZFN0cmluZzpmdW5jdGlvbihhKXtyZXR1cm4nXCInKyhhK1wiXCIpLnJlcGxhY2UoL1xcXFwvZyxcIlxcXFxcXFxcXCIpLnJlcGxhY2UoL1wiL2csJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLFwiXFxcXG5cIikucmVwbGFjZSgvXFxyL2csXCJcXFxcclwiKS5yZXBsYWNlKC9cXHUyMDI4L2csXCJcXFxcdTIwMjhcIikucmVwbGFjZSgvXFx1MjAyOS9nLFwiXFxcXHUyMDI5XCIpKydcIid9LG9iamVjdExpdGVyYWw6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPVtdO2YoYSkuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgZj1kKGFbZV0sYik7XCJ1bmRlZmluZWRcIiE9PWYmJmMucHVzaChbYi5xdW90ZWRTdHJpbmcoZSksXCI6XCIsZl0pfSk7dmFyIGU9dGhpcy5nZW5lcmF0ZUxpc3QoYyk7cmV0dXJuIGUucHJlcGVuZChcIntcIiksZS5hZGQoXCJ9XCIpLGV9LGdlbmVyYXRlTGlzdDpmdW5jdGlvbihhKXtmb3IodmFyIGI9dGhpcy5lbXB0eSgpLGM9MCxlPWEubGVuZ3RoO2M8ZTtjKyspYyYmYi5hZGQoXCIsXCIpLGIuYWRkKGQoYVtjXSx0aGlzKSk7cmV0dXJuIGJ9LGdlbmVyYXRlQXJyYXk6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5nZW5lcmF0ZUxpc3QoYSk7cmV0dXJuIGIucHJlcGVuZChcIltcIiksYi5hZGQoXCJdXCIpLGJ9fSxiW1wiZGVmYXVsdFwiXT1lLGEuZXhwb3J0cz1iW1wiZGVmYXVsdFwiXX1dKX0pOyIsImltcG9ydCBIYW5kbGViYXJzIGZyb20gJ2hhbmRsZWJhcnMvZGlzdC9oYW5kbGViYXJzLm1pbi5qcyc7XG5pbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuXG52YXIgUHJpY2luZyA9IHtcbiAgLy8gQ2FsY3VsYXRvciBlbGVtZW50cy5cbiAgc2xpZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJpY2luZy1zbGlkZXInKSxcbiAgYmxhbmtWaWV3OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJpY2luZy1ibGFuaycpLFxuICByZXN1bHRWaWV3OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJpY2luZy1yZXN1bHRzJyksXG4gIGhpZ2hWb2x1bWVWaWV3OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJpY2luZy1oaWdoLXZvbHVtZScpLFxuICBpbnN0cnVjdGlvbnNWaWV3OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJpY2luZy1pbnN0cnVjdGlvbnMnKSxcblxuICByZXN1bHRUb3RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXByaWNpbmctYW1vdW50JyksXG4gIHJlc3VsdEJyZWFrZG93bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXByaWNpbmctYnJlYWtkb3duJyksXG4gIG1vYmlsZVRvdGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJpY2luZy10b3RhbCcpLFxuXG4gIC8vIFN0YXRlIHZhcnMuXG4gIG1pbl92b2x1bWU6IDEwMCwgLy8gRnJlZSB0aWVyXG4gIG1heF92b2x1bWU6IDE5MDAwMDAsIC8vIFRoZSBwb2ludCBhdCB3aGljaCB0aGUgaGlnaCB2b2x1bWUgcGFuZSBzaG91bGQgYmUgc2hvd24uXG4gIHBsYW5zOiBbXG4gICAge1xuICAgICAgdm9sdW1lOiAxMDAwMCxcbiAgICAgIHByaWNlOiAxNSxcbiAgICAgIG92ZXJhZ2VzUHJpY2U6IDEuODAsXG4gICAgICBpbmNyZW1lbnQ6IDEwMDAgLy8gUmFuZ2Ugc2xpZGVyIHZhbHVlIGluY3JlbWVudHMgd2hlbiBwbGFuIGlzIGFjdGl2ZVxuICAgIH0sXG4gICAge1xuICAgICAgdm9sdW1lOiA1MDAwMCxcbiAgICAgIHByaWNlOiA1NSxcbiAgICAgIG92ZXJhZ2VzUHJpY2U6IDEuMzAsXG4gICAgICBpbmNyZW1lbnQ6IDEwMDBcbiAgICB9LFxuICAgIHtcbiAgICAgIHZvbHVtZTogMTI1MDAwLFxuICAgICAgcHJpY2U6IDExNSxcbiAgICAgIG92ZXJhZ2VzUHJpY2U6IDEuMTAsXG4gICAgICBpbmNyZW1lbnQ6IDUwMDBcbiAgICB9LFxuICAgIHtcbiAgICAgIHZvbHVtZTogMzAwMDAwLFxuICAgICAgcHJpY2U6IDI0NSxcbiAgICAgIG92ZXJhZ2VzUHJpY2U6IDEuMDAsXG4gICAgICBpbmNyZW1lbnQ6IDEwMDAwXG4gICAgfSxcbiAgICB7XG4gICAgICB2b2x1bWU6IDcwMDAwMCxcbiAgICAgIHByaWNlOiA0NTUsXG4gICAgICBvdmVyYWdlc1ByaWNlOiAwLjgwLFxuICAgICAgaW5jcmVtZW50OiAxMDAwMFxuICAgIH0sXG4gICAge1xuICAgICAgdm9sdW1lOiAxNTAwMDAwLFxuICAgICAgcHJpY2U6IDc3NSxcbiAgICAgIG92ZXJhZ2VzUHJpY2U6IDAuNjAsXG4gICAgICBpbmNyZW1lbnQ6IDEwMDAwXG4gICAgfVxuICBdLFxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBwcmljaW5nIGNhbGN1bGF0b3IuXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgbm9VaVNsaWRlci5jcmVhdGUoUHJpY2luZy5zbGlkZXIsIHtcbiAgICAgIHJhbmdlOiBQcmljaW5nLmdlbmVyYXRlUmFuZ2UoKSxcbiAgICAgIHN0YXJ0OiBQcmljaW5nLm1pbl92b2x1bWUsXG4gICAgICBjb25uZWN0OiAnbG93ZXInLFxuICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgdG86IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIFByaWNpbmcuZ2VuZXJhdGVUb29sdGlwKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHBpcHM6IHtcbiAgICAgICAgbW9kZTogJ3ZhbHVlcycsXG4gICAgICAgIHZhbHVlczogUHJpY2luZy5nZW5lcmF0ZVZhbHVlcygpLFxuICAgICAgICBkZW5zaXR5OiAyMCxcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBQcmljaW5nLm1heF92b2x1bWUpIHJldHVybiAnTW9yZSc7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZyb206IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnTW9yZScpIHJldHVybiBQcmljaW5nLm1heF92b2x1bWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBNb3ZlIG1hcmtlcnMgaW50byBiYXNlIGNvbnRhaW5lclxuICAgIC8vIEFsbG93cyBtYXJrZXJzIHRvIGJlIHByb3Blcmx5IGxheWVyZWQgb3ZlciBzbGlkZXJcbiAgICBjb25zdCBwaXBzID0gUHJpY2luZy5zbGlkZXIucXVlcnlTZWxlY3RvcignLm5vVWktcGlwcycpO1xuICAgIGNvbnN0IGJhc2UgPSBQcmljaW5nLnNsaWRlci5xdWVyeVNlbGVjdG9yKCcubm9VaS1iYXNlJyk7XG4gICAgYmFzZS5hcHBlbmRDaGlsZChwaXBzKTtcblxuICAgIFByaWNpbmcuc2xpZGVyLm5vVWlTbGlkZXIub24oJ3NsaWRlJywgUHJpY2luZy5zbGlkZVBsYW4pO1xuXG4gICAgLy8gTWFrZSBpdCBzbyBwaXAgdmFsdWVzIGFyZSBjbGlja2FibGVcbiAgICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgcHJlY2lzZSB2YWx1ZSBvZiB0aGUgc2xpZGVyIGlzIHNldCB3aGVuIGEgbGFiZWwgaXMgc2VsZWN0ZWRcbiAgICAvLyBXaXRob3V0IHRoaXMsIHRoZSBzbGlkZXIgdGhpbmtzIHlvdSdyZSBzZWxlY3RpbmcgdGhlIGJhclxuICAgIC8vIFNvIGlmIHlvdSBzZWxlY3QgdGhlIGVuZCBvZiB0aGUgMTBrIGxhYmVsLCBpdCB3b3VsZCBzZXQgdGhlIHNsaWRlciB0byBzb21ldGhpbmcgbGlrZSAxNmsgaW5zdGVhZFxuICAgIHZhciB2YWx1ZXMgPSBwaXBzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub1VpLXZhbHVlJylcbiAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gVXNlIG1vdXNlZG93biBpbnN0ZWFkIG9mIGNsaWNrIGV2ZW50XG4gICAgICAvLyBFbnN1cmVzIHRoYXQgdGhpcyBldmVudCBvdmVycmlkZXMgdGhlIHNsaWRlciBiZWhhdmlvciB3aGljaCBwcmV2ZW50cyB0aGUgaGFuZGxlIGZyb20gYm91bmNpbmcgYmFjayBhbmQgZm9ydGhcbiAgICAgIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBsYWJlbCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudC5yZXBsYWNlKC8sL2csJycpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBpcCBjbGlja2VkOlwiLCBsYWJlbCk7XG5cbiAgICAgICAgaWYgKGxhYmVsID09ICdNb3JlJykge1xuICAgICAgICAgIGxhYmVsID0gUHJpY2luZy5tYXhfdm9sdW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwgPSBOdW1iZXIobGFiZWwpO1xuXG4gICAgICAgIC8vIFNldCBoYW5kbGUgcG9zaXRpb25cbiAgICAgICAgUHJpY2luZy5zbGlkZXIubm9VaVNsaWRlci5zZXQobGFiZWwpO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgc2xpZGUgZXZlbnRcbiAgICAgICAgUHJpY2luZy5zbGlkZVBsYW4oW2xhYmVsXSk7XG5cbiAgICAgIH0pXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHZhbHVlcyB0byBkaXNwbGF5IG9uIHNsaWRlciBsYWJlbHNcbiAgICovXG4gIGdlbmVyYXRlVmFsdWVzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzID0gW1ByaWNpbmcubWluX3ZvbHVtZV07XG5cbiAgICBQcmljaW5nLnBsYW5zLmZvckVhY2goZnVuY3Rpb24ocGxhbikge1xuICAgICAgdmFsdWVzLnB1c2gocGxhbi52b2x1bWUpO1xuICAgIH0pO1xuXG4gICAgdmFsdWVzLnB1c2goUHJpY2luZy5tYXhfdm9sdW1lKTtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSB0b29sdGlwIGxhYmVsIGJhc2VkIG9uIGN1cnJlbnQgdm9sdW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2b2x1bWVcbiAgICogQHJldHVybnMgc3RyaW5nXG4gICAqL1xuICBnZW5lcmF0ZVRvb2x0aXA6IGZ1bmN0aW9uKHZvbHVtZSkge1xuICAgIHZhciB2b2x1bWVMYWJlbCA9IHZvbHVtZS50b0xvY2FsZVN0cmluZygpO1xuXG4gICAgLy8gSWYgc2xpZGVyIGlzIGF0IHRoZSBtYXggdm9sdW1lXG4gICAgaWYgKHZvbHVtZSA9PT0gUHJpY2luZy5tYXhfdm9sdW1lKSB7XG4gICAgICByZXR1cm4gYCR7dm9sdW1lTGFiZWx9KyBlbWFpbHNgO1xuICAgIH1cblxuICAgIC8vIElmIHNsaWRlciBpcyBiZXR3ZWVuIDEwMCsgYW5kIDEwa1xuICAgIHZhciBsb3dlc3RQYWlkUGxhbiA9IFByaWNpbmcucGxhbnNbMF07XG5cbiAgICBpZiAodm9sdW1lID4gUHJpY2luZy5taW5fdm9sdW1lICYmIHZvbHVtZSA8IGxvd2VzdFBhaWRQbGFuLnZvbHVtZSkge1xuICAgICAgcmV0dXJuIGBVcCB0byAke2xvd2VzdFBhaWRQbGFuLnZvbHVtZS50b0xvY2FsZVN0cmluZygpfSBlbWFpbHNgO1xuICAgIH1cblxuICAgIHJldHVybiBgJHt2b2x1bWVMYWJlbH0gZW1haWxzYDtcbiAgfSxcblxuICAvKipcbiAgICogT3V0cHV0cyBhIHNsaWRlciByYW5nZXMgcmVxdWlyZWQgYnkgbm91aXNsaWRlclxuICAgKiBLZXkgJSBzcGVjaWZpZXMgd2hlcmUgcGxhbiBpcyBwb3NpdGlvbmVkIG9uIHRoZSBzbGlkZXJcbiAgICogdmFyIHJhbmdlID0ge1xuICAgJ21pbic6IFsxMDAsIDEwMF0sXG4gICAnMTQlJzogWzEwMDAwLCAxMDAwXSxcbiAgICcyOSUnOiBbNTAwMDAsIDEwMDBdLFxuICAgJzQzJSc6IFsxMjUwMDAsIDUwMDBdLFxuICAgJzU3JSc6IFszMDAwMDAsIDEwMDAwXSxcbiAgICc3MSUnOiBbNzAwMDAwLCAxMDAwMF0sXG4gICAnODYlJzogWzE1MDAwMDAsIDEwMDAwXSxcbiAgICdtYXgnOiBbMTkwMDAwMF1cbiAgIH07XG4gICAqIEByZXR1cm5zIG9iamVjdFxuICAgKi9cbiAgZ2VuZXJhdGVSYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJhbmdlID0ge307XG5cbiAgICAvLyBTZXQgZnJlZSBwbGFuXG4gICAgcmFuZ2UubWluID0gW1ByaWNpbmcubWluX3ZvbHVtZSwgMTAwXTtcbiAgICByYW5nZS5tYXggPSBbUHJpY2luZy5tYXhfdm9sdW1lXTtcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhlIHRvdGFsIG1hcmtzIG9uIHRoZSBzbGlkZXJcbiAgICAvLyBUb3RhbCBwbGFucyArIHRoZSBmcmVlIHBsYW4gKyBtYXggdm9sdW1lXG4gICAgdmFyIHRvdGFsTWFya3MgPSBQcmljaW5nLnBsYW5zLmxlbmd0aCArIDE7XG4gICAgdmFyIGl0ZW1QZXJjZW50YWdlID0gMTAwIC8gdG90YWxNYXJrcztcblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBwbGFuc1xuICAgIFByaWNpbmcucGxhbnMuZm9yRWFjaChmdW5jdGlvbihwbGFuLCBpbmRleCkge1xuICAgICAgLy8gQ2FsY3VsYXRlIHBvc2l0aW9uIG9uIHNsaWRlclxuICAgICAgdmFyIHBvc2l0aW9uID0gTWF0aC5yb3VuZChpdGVtUGVyY2VudGFnZSAqIChpbmRleCArIDEpKTtcbiAgICAgIHJhbmdlW3Bvc2l0aW9uXSA9IFtwbGFuLnZvbHVtZSwgcGxhbi5pbmNyZW1lbnRdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY2FyZHMgYmFzZWQgb24gc2VsZWN0ZWQgdm9sdW1lXG4gICAqL1xuICB1cGRhdGVDYXJkczogZnVuY3Rpb24odm9sdW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IFByaWNpbmcuZmluZFBsYW5Gb3JWb2x1bWUodm9sdW1lKTtcbiAgICB2YXIgcGxhbiA9IHJlc3VsdC5wbGFuO1xuICAgIHZhciBwbGFuQ29zdERldGFpbHMgPSBQcmljaW5nLmNhbGN1bGF0ZU1vbnRobHlDb3N0KHBsYW4sIHZvbHVtZSk7XG5cbiAgICAvLyBGaXJzdCwgcmVtb3ZlIHRoZSAnYmVzdC1vcHRpb24nIGNsYXNzIGZyb20gYWxsIGNhcmRzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNpbmctY2FyZC1iYXNpYycpLmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Qtb3B0aW9uJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNpbmctY2FyZC1wbGF0Zm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Qtb3B0aW9uJyk7XG5cbiAgICBpZiAodm9sdW1lIDw9IFByaWNpbmcubWluX3ZvbHVtZSkge1xuICAgICAgUHJpY2luZy5zaG93RnJlZVBsYW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIGJyZWFrZG93biB0ZW1wbGF0ZSBmb3IgQmFzaWMgYW5kIFBsYXRmb3JtIGNhcmRzXG4gICAgdmFyIGJyZWFrZG93blRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKFxuICAgICAgYDx0Ym9keT5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRoPnt7IHBsYW5Wb2x1bWUgfX0gZW1haWxzL21vbnRoPC90aD5cbiAgICAgICAgPHRkPnt7IHBsYW5QcmljZSB9fTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAge3sjaWYgaGFzT3ZlcmFnZXN9fVxuICAgICAgICA8dHIgY2xhc3M9XCJvdmVyYWdlcy1yb3dcIj5cbiAgICAgICAgICA8dGg+e3sgb3ZlcmFnZXMgfX0gZXh0cmEgZW1haWxzIDxzcGFuPkAge3sgcGxhbk92ZXJhZ2VzUHJpY2UgfX0gcGVyIDEsMDAwPC9zcGFuPjwvdGg+XG4gICAgICAgICAgPHRkPnt7IG92ZXJhZ2VzQ29zdCB9fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICB7ey9pZn19XG4gICAgPC90Ym9keT5gXG4gICAgKTtcblxuICAgIHZhciBicmVha2Rvd25IdG1sID0gYnJlYWtkb3duVGVtcGxhdGUoe1xuICAgICAgcGxhblZvbHVtZTogcGxhbi52b2x1bWUudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgIHBsYW5QcmljZTogYCQke3BsYW4ucHJpY2UudG9GaXhlZCgyKX1gLFxuICAgICAgaGFzT3ZlcmFnZXM6IHBsYW5Db3N0RGV0YWlscy5vdmVyYWdlcyA+IDAgJiYgdm9sdW1lID4gcGxhbi52b2x1bWUsXG4gICAgICBvdmVyYWdlczogcGxhbkNvc3REZXRhaWxzLm92ZXJhZ2VzLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICBvdmVyYWdlc0Nvc3Q6IGAkJHtwbGFuQ29zdERldGFpbHMub3ZlcmFnZXNDb3N0LnRvRml4ZWQoMil9YCxcbiAgICAgIHBsYW5PdmVyYWdlc1ByaWNlOiBgJCR7cGxhbi5vdmVyYWdlc1ByaWNlLnRvRml4ZWQoMil9YFxuICAgIH0pO1xuXG4gICAgaWYgKHZvbHVtZSA+IFByaWNpbmcucGxhbnNbMV0udm9sdW1lKSB7IC8vIEFzc3VtaW5nIHBsYW5zWzFdIGlzIHRoZSBCYXNpYyBwbGFuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2luZy1jYXJkLXBsYXRmb3JtIC5wcmljaW5nLWNvc3QnKS50ZXh0Q29udGVudCA9IGAkJHtwbGFuQ29zdERldGFpbHMudG90YWxDb3N0LnRvRml4ZWQoMil9YDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcmljaW5nLWJyZWFrZG93bi1wbGF0Zm9ybScpLmlubmVySFRNTCA9IGJyZWFrZG93bkh0bWw7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2luZy1jYXJkLXBsYXRmb3JtJykuY2xhc3NMaXN0LmFkZCgnYmVzdC1vcHRpb24nKTsgLy8gQWRkIGNsYXNzIHRvIFBsYXRmb3JtIGNhcmRcblxuICAgICAgLy8gVXBkYXRlIHRoZSBQbGF0Zm9ybSBkZXRhaWxlZCB2aWV3XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2luZy1jb2x1bW4uY2VsbC1wbGF0Zm9ybSAucGxhbi1wcmljZScpLnRleHRDb250ZW50ID0gYCQke3BsYW5Db3N0RGV0YWlscy50b3RhbENvc3QudG9GaXhlZCgyKX0vbW9gO1xuXG4gICAgICBjb25zb2xlLmxvZygnUGxhdGZvcm0gY2FyZCB1cGRhdGVkIGFuZCBtYXJrZWQgYXMgYmVzdCBvcHRpb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNpbmctY2FyZC1iYXNpYyAucHJpY2luZy1jb3N0JykudGV4dENvbnRlbnQgPSBgJCR7cGxhbkNvc3REZXRhaWxzLnRvdGFsQ29zdC50b0ZpeGVkKDIpfWA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJpY2luZy1icmVha2Rvd24tYmFzaWMnKS5pbm5lckhUTUwgPSBicmVha2Rvd25IdG1sO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNpbmctY2FyZC1iYXNpYycpLmNsYXNzTGlzdC5hZGQoJ2Jlc3Qtb3B0aW9uJyk7IC8vIEFkZCBjbGFzcyB0byBCYXNpYyBjYXJkXG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgQmFzaWMgZGV0YWlsZWQgdmlld1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNpbmctY29sdW1uLmNlbGwtYmFzaWMgLnBsYW4tcHJpY2UnKS50ZXh0Q29udGVudCA9IGAkJHtwbGFuQ29zdERldGFpbHMudG90YWxDb3N0LnRvRml4ZWQoMil9L21vYDtcblxuICAgICAgY29uc29sZS5sb2coJ0Jhc2ljIGNhcmQgdXBkYXRlZCBhbmQgbWFya2VkIGFzIGJlc3Qgb3B0aW9uJyk7XG4gICAgfVxuXG4gICAgLy8gRXhwbGljaXRseSByZW1vdmUgdGhlIG92ZXJhZ2VzIHJvdyBpZiBpdCBzaG91bGRuJ3QgYmUgZGlzcGxheWVkXG4gICAgaWYgKCEocGxhbkNvc3REZXRhaWxzLm92ZXJhZ2VzID4gMCAmJiB2b2x1bWUgPiBwbGFuLnZvbHVtZSkpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcmljaW5nLWJyZWFrZG93bi1wbGF0Zm9ybSAub3ZlcmFnZXMtcm93Jyk/LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBtb2JpbGUgdG90YWwgd2l0aCB0aGUgY2FsY3VsYXRlZCB0b3RhbCBjb3N0IGluY2x1ZGluZyBvdmVyYWdlc1xuICAgIFByaWNpbmcubW9iaWxlVG90YWwudGV4dENvbnRlbnQgPSBgJCR7cGxhbkNvc3REZXRhaWxzLnRvdGFsQ29zdC50b0ZpeGVkKDIpfWA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdW1tYXJ5IHdoZW4gc2xpZGVyIGNoYW5nZXNcbiAgICovXG4gIHNsaWRlUGxhbjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgUHJpY2luZy5jdXJyZW50X3ZvbHVtZSA9IE51bWJlcih2YWx1ZVswXSk7XG4gICAgUHJpY2luZy51cGRhdGVNb2JpbGVUb3RhbCgpO1xuXG4gICAgLy8gUm91bmQgdGhlIHZvbHVtZSBkb3duIHRvIHRoZSBuZWFyZXN0IHRob3VzYW5kLlxuICAgIHZhciByb3VuZGVkVm9sdW1lID0gTWF0aC5mbG9vcihQcmljaW5nLmN1cnJlbnRfdm9sdW1lIC8gMTAwMCkgKiAxMDAwO1xuXG4gICAgLy8gRmluZCB0aGUgYmVzdCBwcmljZWQgcGxhbi5cbiAgICB2YXIgcmVzdWx0ID0gUHJpY2luZy5maW5kUGxhbkZvclZvbHVtZShyb3VuZGVkVm9sdW1lKTtcblxuICAgIC8vIFNldCBjdXJyZW50IHN0YXRlXG4gICAgUHJpY2luZy5jdXJyZW50X3BsYW4gPSByZXN1bHQucGxhbjtcblxuICAgIC8vIFVwZGF0ZSB0aGUgY2FyZHMgYmFzZWQgb24gdGhlIGN1cnJlbnQgdm9sdW1lXG4gICAgUHJpY2luZy51cGRhdGVDYXJkcyhQcmljaW5nLmN1cnJlbnRfdm9sdW1lKTtcblxuICAgIC8vIERpc3BsYXkgdGhlIHJlc3VsdC5cbiAgICBQcmljaW5nLnVwZGF0ZVN1bW1hcnkoKTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlIHZvbHVtZSB0b29sdGlwL2xhYmVsIG9uIG1vYmlsZVxuICAgKi9cbiAgdXBkYXRlTW9iaWxlVG90YWw6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYWJlbCA9IFByaWNpbmcubW9iaWxlVG90YWw7XG4gICAgdmFyIHRvb2x0aXAgPSBQcmljaW5nLmdlbmVyYXRlVG9vbHRpcChQcmljaW5nLmN1cnJlbnRfdm9sdW1lKTtcblxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gdG9vbHRpcDtcbiAgfSxcblxuICAvKipcbiAgICogU2hvdyBhIHByb21wdCB0byBjb250YWN0IHVzIGFib3V0IHZvbHVtZSBwcmljaW5nLlxuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2hvd0hpZ2hWb2x1bWVQcm9tbzogZnVuY3Rpb24gKCkge1xuICAgIFByaWNpbmcuYmxhbmtWaWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIFByaWNpbmcucmVzdWx0Vmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBQcmljaW5nLmhpZ2hWb2x1bWVWaWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIFByaWNpbmcuaW5zdHJ1Y3Rpb25zVmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfSxcblxuICAvKipcbiAgICogU2hvdyB0aGUgRnJlZSBQbGFuLlxuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2hvd0ZyZWVQbGFuOiBmdW5jdGlvbigpIHtcbiAgICBQcmljaW5nLnJlc3VsdFZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgUHJpY2luZy5oaWdoVm9sdW1lVmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBQcmljaW5nLmluc3RydWN0aW9uc1ZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgUHJpY2luZy5ibGFua1ZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERpc3BsYXkgdGhlIGJlc3QgcGxhbiBpbiB0aGUgY2FsY3VsYXRvci5cbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHVwZGF0ZVN1bW1hcnk6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm9sdW1lID0gUHJpY2luZy5jdXJyZW50X3ZvbHVtZTtcblxuICAgIGlmICh2b2x1bWUgPj0gUHJpY2luZy5tYXhfdm9sdW1lKSB7XG4gICAgICByZXR1cm4gUHJpY2luZy5zaG93SGlnaFZvbHVtZVByb21vKCk7XG4gICAgfVxuXG4gICAgaWYgKHZvbHVtZSA8PSAxMDApIHtcbiAgICAgIHJldHVybiBQcmljaW5nLnNob3dGcmVlUGxhbigpO1xuICAgIH1cblxuICAgIHZhciB2b2x1bWVGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJyk7XG5cbiAgICB2YXIgY3VycmVuY3lGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgICB9KTtcblxuICAgIHZhciBzZWxlY3RlZFBsYW4gPSBQcmljaW5nLmN1cnJlbnRfcGxhbjtcblxuICAgIGlmIChzZWxlY3RlZFBsYW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRGVmYXVsdCB0byBmaXJzdCBwbGFuLlxuICAgICAgc2VsZWN0ZWRQbGFuID0gUHJpY2luZy5wbGFuc1swXTtcbiAgICB9XG5cbiAgICB2YXIgcGxhbkNvc3QgPSBQcmljaW5nLmNhbGN1bGF0ZU1vbnRobHlDb3N0KFxuICAgICAgc2VsZWN0ZWRQbGFuLFxuICAgICAgUHJpY2luZy5jdXJyZW50X3ZvbHVtZVxuICAgICk7XG5cbiAgICB2YXIgbG93ZXN0UGFpZEFjdGl2ZSA9IFByaWNpbmcuY3VycmVudF92b2x1bWUgPiBQcmljaW5nLm1pbl92b2x1bWUgJiZcbiAgICAgIFByaWNpbmcuY3VycmVudF92b2x1bWUgPCBQcmljaW5nLnBsYW5zWzBdLnZvbHVtZTtcblxuICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShcbiAgICAgIGA8dGJvZHk+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+XG4gICAgICAgICAgICB7eyNpZiBsb3dlc3RQYWlkQWN0aXZlIH19VXAgdG8ge3svaWZ9fVxuICAgICAgICAgICAge3sgcGxhblZvbHVtZSB9fSBlbWFpbHMvbW9udGhcbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0ZD57eyBwbGFuUHJpY2UgfX08L3RkPlxuICAgICAgICA8L3RyPlxuXG4gICAgICAgIHt7I2lmIGhhc092ZXJhZ2VzfX1cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+e3sgb3ZlcmFnZXMgfX0gZXh0cmEgZW1haWxzIDxzcGFuPkAge3sgcGxhbk92ZXJhZ2VzUHJpY2UgfX0gcGVyIDEsMDAwPC9zcGFuPjwvdGg+XG4gICAgICAgICAgICA8dGQ+e3sgb3ZlcmFnZXNDb3N0IH19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICB7ey9pZn19XG4gICAgICA8L3Rib2R5PmBcbiAgICApO1xuXG4gICAgUHJpY2luZy5yZXN1bHRUb3RhbC5pbm5lckhUTUwgPSBjdXJyZW5jeUZvcm1hdHRlci5mb3JtYXQoXG4gICAgICBwbGFuQ29zdC50b3RhbENvc3RcbiAgICApO1xuXG4gICAgUHJpY2luZy5yZXN1bHRCcmVha2Rvd24uaW5uZXJIVE1MID0gdGVtcGxhdGUoe1xuICAgICAgbG93ZXN0UGFpZEFjdGl2ZTogbG93ZXN0UGFpZEFjdGl2ZSxcbiAgICAgIHBsYW5Wb2x1bWU6IHZvbHVtZUZvcm1hdHRlci5mb3JtYXQoc2VsZWN0ZWRQbGFuLnZvbHVtZSksXG4gICAgICBwbGFuUHJpY2U6IGN1cnJlbmN5Rm9ybWF0dGVyLmZvcm1hdChzZWxlY3RlZFBsYW4ucHJpY2UpLFxuICAgICAgaGFzT3ZlcmFnZXM6IHBsYW5Db3N0Lm92ZXJhZ2VzID4gMCxcbiAgICAgIG92ZXJhZ2VzOiB2b2x1bWVGb3JtYXR0ZXIuZm9ybWF0KHBsYW5Db3N0Lm92ZXJhZ2VzKSxcbiAgICAgIG92ZXJhZ2VzQ29zdDogY3VycmVuY3lGb3JtYXR0ZXIuZm9ybWF0KHBsYW5Db3N0Lm92ZXJhZ2VzQ29zdCksXG4gICAgICBwbGFuT3ZlcmFnZXNQcmljZTogY3VycmVuY3lGb3JtYXR0ZXIuZm9ybWF0KHNlbGVjdGVkUGxhbi5vdmVyYWdlc1ByaWNlKVxuICAgIH0pO1xuXG4gICAgUHJpY2luZy5ibGFua1ZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgUHJpY2luZy5oaWdoVm9sdW1lVmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBQcmljaW5nLnJlc3VsdFZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgUHJpY2luZy5pbnN0cnVjdGlvbnNWaWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgbG93ZXN0IGNvc3QgcGxhbiBmb3IgdGhlIHVzZXLigJlzIHZvbHVtZS5cbiAgICogVGhpcyB0YWtlcyBpbnRvIGFjY291bnQgdGhlIGNvbWJpbmF0aW9uIG9mIGJhc2UgcGxhbiBwcmljZSArIG92ZXJhZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtJbnR9IHZvbHVtZSAgIFRoZSB1c2VyJ3MgbW9udGhseSB2b2x1bWUsIHJvdW5kZWQgdXAgdG8gdGhlIG5lYXJlc3RcbiAgICogICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICBBIHJlc3VsdCBvYmplY3QgY29udGFpbmluZyB0aGUgYmVzdCBwbGFuIGFuZCB0b3RhbHMuXG4gICAqL1xuICBmaW5kUGxhbkZvclZvbHVtZTogZnVuY3Rpb24gKHZvbHVtZSkge1xuICAgIHZhciBiZXN0UGxhbjtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIG9mIHRoZSBwcmljaW5nIHBsYW5zLlxuICAgIFByaWNpbmcucGxhbnMuZm9yRWFjaChmdW5jdGlvbiAocGxhbikge1xuICAgICAgdmFyIHJlc3VsdCA9IFByaWNpbmcuY2FsY3VsYXRlTW9udGhseUNvc3QocGxhbiwgdm9sdW1lKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBwbGFuL292ZXJhZ2VzIGNvbWJvIGlzIGNoZWFwZXJcbiAgICAgIC8vIGFuZCBzZXQgaXQgYXMgdGhlIGJlc3RQbGFuIGlmIGl0IGlzLlxuICAgICAgaWYgKGJlc3RQbGFuID09IHVuZGVmaW5lZCB8fCByZXN1bHQudG90YWxDb3N0IDw9IGJlc3RQbGFuLnRvdGFsQ29zdCkge1xuICAgICAgICBiZXN0UGxhbiA9IHJlc3VsdDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdCZXN0IFBsYW46ICcsIGJlc3RQbGFuKTtcbiAgICAvLyBSZXR1cm4gdGhlIGJlc3QgcGxhbi5cbiAgICByZXR1cm4gYmVzdFBsYW47XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBob3cgbXVjaCBpdCB3b3VsZCBjb3N0IHRvIHNlbmQgd2l0aCBhIHNwZWNpZmllZCBwbGFuLlxuICAgKlxuICAgKiBAcGFyYW0ge1BsYW59IHBsYW4gVGhlIHBsYW4gdG8gdXNlIGZvciBwcmljaW5nLlxuICAgKiBAcGFyYW0ge051bWJlcn0gdm9sdW1lIFRoZSBtb250aGx5IHZvbHVtZS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCB0aGUgdG90YWwgbW9udGhseSBjb3N0LCBvdmVyYWdlc1xuICAgKiAgICAgICAgICAgICAgICAgIGFtb3VudCwgb3ZlcmFnZXMgY29zdCBhbmQgcGxhbiB1c2VkIHRvIGNhbGN1bGF0ZVxuICAgKiAgICAgICAgICAgICAgICAgIHRoZSBwcmljaW5nLlxuICAgKi9cbiAgY2FsY3VsYXRlTW9udGhseUNvc3Q6IGZ1bmN0aW9uIChwbGFuLCB2b2x1bWUpIHtcbiAgICB2YXIgdG90YWxDb3N0ID0gcGxhbi5wcmljZSxcbiAgICAgIG92ZXJhZ2VzID0gMCxcbiAgICAgIG92ZXJhZ2VzQ29zdCA9IDA7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGNvc3Qgb2Ygb3ZlcmFnZXMgaWYgdGhleSBhcmUgbmVlZGVkLlxuICAgIGlmICh2b2x1bWUgPiBwbGFuLnZvbHVtZSkge1xuICAgICAgb3ZlcmFnZXMgPSBNYXRoLmZsb29yKCh2b2x1bWUgLSBwbGFuLnZvbHVtZSkgLyAxMDAwKTtcbiAgICAgIG92ZXJhZ2VzQ29zdCA9IG92ZXJhZ2VzICogcGxhbi5vdmVyYWdlc1ByaWNlO1xuXG4gICAgICB0b3RhbENvc3QgKz0gb3ZlcmFnZXNDb3N0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwbGFuOiBwbGFuLFxuICAgICAgdG90YWxDb3N0OiB0b3RhbENvc3QsXG4gICAgICBvdmVyYWdlczogb3ZlcmFnZXMgKiAxMDAwLFxuICAgICAgb3ZlcmFnZXNDb3N0OiBvdmVyYWdlc0Nvc3RcbiAgICB9O1xuICB9XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgLy8gSW5pdGlhbGl6ZSBpZiB0aGVyZSBpcyBhIGNhbGN1bGF0b3IuXG4gIGlmIChQcmljaW5nLnNsaWRlcikge1xuICAgIFByaWNpbmcuaW5pdCgpO1xuICB9XG59KTtcblxuXG4vKipcbiAqIE1hbmFnZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHByaWNpbmcgdGFibGUgaGVhZGVycyBiYXNlZCBvbiBzY3JvbGwgcG9zaXRpb24uXG4gKlxuICogLSBgbWluaW1pemVkSGVhZGVyYDogVGhlIGluaXRpYWxseSB2aXNpYmxlLCBtaW5pbWl6ZWQgaGVhZGVyLlxuICogLSBgZGV0YWlsZWRIZWFkZXJgOiBUaGUgZGV0YWlsZWQgaGVhZGVyLCBzaG93biB3aGVuIHRoZSBtaW5pbWl6ZWQgaGVhZGVyIHNjcm9sbHMgb3V0IG9mIHZpZXcuXG4gKiAtIGB0YWJsZWA6IFRoZSB0YWJsZSBlbGVtZW50IHVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gdGhlIGRldGFpbGVkIGhlYWRlciBzaG91bGQgYmUgaGlkZGVuLlxuICogLSBgaGFzSGlkZGVuQ2xhc3NCZWVuUmVtb3ZlZGA6IFRyYWNrcyB3aGV0aGVyIHRoZSBoaWRkZW4gY2xhc3MgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBkZXRhaWxlZCBoZWFkZXIuXG4gKlxuICogRnVuY3Rpb25zOlxuICogLSBgdG9nZ2xlSGVhZGVyVmlzaWJpbGl0eShpc1Zpc2libGUpYDogVG9nZ2xlcyB0aGUgYGZhZGUtaW5gIGFuZCBgZmFkZS1vdXRgIGNsYXNzZXMgYmFzZWQgb24gdmlzaWJpbGl0eS5cbiAqIC0gYGhhbmRsZVNjcm9sbCgpYDogQ2hlY2tzIHRoZSBzY3JvbGwgcG9zaXRpb24gYW5kIHRvZ2dsZXMgaGVhZGVyIHZpc2liaWxpdHkgYWNjb3JkaW5nbHkuXG4gKlxuICogRXZlbnQgTGlzdGVuZXJzOlxuICogLSBgRE9NQ29udGVudExvYWRlZGA6IEluaXRpYWxpemVzIHRoZSBzY3JpcHQgYWZ0ZXIgdGhlIERPTSBpcyBmdWxseSBsb2FkZWQuXG4gKiAtIGBzY3JvbGxgOiBBdHRhY2hlcyBgaGFuZGxlU2Nyb2xsYCB0byB0aGUgc2Nyb2xsIGV2ZW50LlxuICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpY2luZy10YWJsZS1oZWFkXCIpO1xuICBjb25zdCBtaW5pbWl6ZWRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2luZy10YWJsZS1oZWFkLm1pbmltaXplZCcpO1xuICBjb25zdCBkZXRhaWxlZEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljaW5nLXRhYmxlLWhlYWQuZGV0YWlsZWQnKTtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2luZy10YWJsZScpO1xuXG4gIGlmICghaGVhZGVyIHx8ICFkZXRhaWxlZEhlYWRlciB8fCAhdGFibGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUmVxdWlyZWQgZWxlbWVudHMgbm90IGZvdW5kXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBoYXNIaWRkZW5DbGFzc0JlZW5SZW1vdmVkID0gZmFsc2U7IC8vIFRyYWNrcyBpZiB0aGUgaGlkZGVuIGNsYXNzIGhhcyBiZWVuIHJlbW92ZWRcblxuICBmdW5jdGlvbiB0b2dnbGVIZWFkZXJWaXNpYmlsaXR5KGlzVmlzaWJsZSkge1xuICAgIGlmIChpc1Zpc2libGUgJiYgIWhhc0hpZGRlbkNsYXNzQmVlblJlbW92ZWQpIHtcbiAgICAgIGRldGFpbGVkSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICBoYXNIaWRkZW5DbGFzc0JlZW5SZW1vdmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZGV0YWlsZWRIZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImZhZGUtaW5cIiwgaXNWaXNpYmxlKTtcbiAgICBkZXRhaWxlZEhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiZmFkZS1vdXRcIiwgIWlzVmlzaWJsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XG4gICAgY29uc3QgbWluaW1pemVkUmVjdCA9IG1pbmltaXplZEhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0YWJsZVJlY3QgPSB0YWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHNob3VsZFNob3dEZXRhaWxlZEhlYWRlciA9IG1pbmltaXplZFJlY3QuYm90dG9tIDw9IDAgJiYgdGFibGVSZWN0LmJvdHRvbSA+IDE0MDtcbiAgICB0b2dnbGVIZWFkZXJWaXNpYmlsaXR5KHNob3VsZFNob3dEZXRhaWxlZEhlYWRlcik7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAvLyBFbnN1cmUgdGhlIGNvcnJlY3QgaGVhZGVyIGlzIHZpc2libGUgb24gbG9hZFxuICBoYW5kbGVTY3JvbGwoKTtcbn0pO1xuIiwiLy8gUHJpY2luZyBsb2dpYyBmb3IgdGFibGUgY2FsY3VsYXRvclxuXG5pbXBvcnQgSGFuZGxlYmFycyBmcm9tICdoYW5kbGViYXJzL2Rpc3QvaGFuZGxlYmFycy5taW4uanMnO1xuXG52YXIgUHJpY2luZyA9IHtcbiAgLy8gQ2FsY3VsYXRvciBlbGVtZW50cy5cbiAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNpbmctY2FsY3VsYXRvcl9mb3JtJyksXG4gIHZvbHVtZUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2luZy1jYWxjdWxhdG9yX2lucHV0JyksXG4gIGJsYW5rVmlldzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNpbmctY2FsY3VsYXRvcl9ibGFuaycpLFxuICByZXN1bHRWaWV3OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2luZy1jYWxjdWxhdG9yX3Jlc3VsdHMnKSxcbiAgaGlnaFZvbHVtZVZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljaW5nLWNhbGN1bGF0b3JfaGlnaC12b2x1bWUnKSxcbiAgcmVzZXRCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZXNldC1jYWxjdWxhdG9yJyksXG4gIGluc3RydWN0aW9uc1ZpZXc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljaW5nLWNhbGN1bGF0b3JfaW5zdHJ1Y3Rpb25zJyksXG5cbiAgcmVzdWx0VG90YWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljaW5nLWNhbGN1bGF0b3JfYW1vdW50JyksXG4gIHJlc3VsdEJyZWFrZG93bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNpbmctY2FsY3VsYXRvcl9icmVha2Rvd24nKSxcblxuICAvLyBQcmljaW5nIHRhYmxlIGVsZW1lbnRzLlxuICBwbGFuUm93czogW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1yb3ctLXBsYW4nKSksXG4gIGVudGVycHJpc2VSb3c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXJvdy0tcHJvbW8nKSxcblxuICBhZGRPblRpZXJSb3dzOiBbXS5zbGljZS5jYWxsKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LXJvdy0tYWRkb24nKVxuICApLFxuXG4gIC8vIFN0YXRlIHZhcnMuXG4gIG1heF92b2x1bWU6IDE5MDAwMDAsIC8vIFRoZSBwb2ludCBhdCB3aGljaCB0aGUgaGlnaCB2b2x1bWUgcGFuZSBzaG91bGQgYmUgc2hvd24uXG4gIHBsYW5zOiBbXSxcbiAgYWRkT25zOiBbXSxcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgcHJpY2luZyBjYWxjdWxhdG9yLlxuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIC8vIFNldCB1cCB0aGUgcGxhbnMgJiBhZGQtb25zLlxuICAgIFByaWNpbmcuZmV0Y2hQbGFucygpO1xuICAgIFByaWNpbmcuZmV0Y2hBZGRPbnMoKTtcblxuICAgIC8vIFNldCB1cCBsaXN0ZW5lciBmb3IgY2FsY3VsYXRvciBzdWJtaXQgZXZlbnRzLlxuICAgIFByaWNpbmcuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBQcmljaW5nLnZvbHVtZUZvcm1TdWJtaXR0ZWQpO1xuXG4gICAgUHJpY2luZy5wbGFuUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBQcmljaW5nLnNlbGVjdFBsYW4pO1xuICAgIH0pO1xuXG4gICAgUHJpY2luZy5hZGRPblRpZXJSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIFByaWNpbmcuc2VsZWN0QWRkT24pO1xuICAgIH0pO1xuXG4gICAgUHJpY2luZy5yZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIFByaWNpbmcucmVzZXQoKTtcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlIGNoYW5nZXMgdG8gdGhlIHNlbGVjdGVkIHBsYW4uXG4gICAqXG4gICAqIEBwYXJhbSB7SW5wdXRFdmVudH0gZSBUaGUgcmFkaW8gYnV0dG9uIGNoYW5nZSBldmVudC5cbiAgICovXG4gIHNlbGVjdFBsYW46IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlkID0gZS50YXJnZXQudmFsdWUsXG4gICAgICBwbGFuID0gUHJpY2luZy5wbGFucy5maW5kKGZ1bmN0aW9uIChwbGFuKSB7XG4gICAgICAgIHJldHVybiBwbGFuLmlkID09PSBpZDtcbiAgICAgIH0pO1xuXG4gICAgUHJpY2luZy52b2x1bWVJbnB1dC52YWx1ZSA9IHBsYW4udm9sdW1lO1xuXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSByZWxldmFudCByb3cuXG4gICAgUHJpY2luZy5yZXNldFBsYW5Sb3dzKCk7XG5cbiAgICBwbGFuLnJvdy5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXJvdy0tc2VsZWN0ZWQnKTtcbiAgICBwbGFuLmlucHV0LmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgLy8gRGlzcGxheSB0aGUgcmVzdWx0LlxuICAgIFByaWNpbmcudXBkYXRlU3VtbWFyeSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2hhbmdlcyB0byBhZGQtb24gcm93cy5cbiAgICpcbiAgICogQHBhcmFtIHtJbnB1dEV2ZW50fSBlIFRoZSByYWRpby9jaGVja2JveCBjaGFuZ2UgZXZlbnQuXG4gICAqL1xuICBzZWxlY3RBZGRPbjogZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgYWRkT25JZCA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgdmFyIGFkZE9uID0gUHJpY2luZy5hZGRPbnMuZmluZChmdW5jdGlvbiAoYWRkT24pIHtcbiAgICAgIHJldHVybiBhZGRPbi5pZCA9PT0gYWRkT25JZDtcbiAgICB9KTtcblxuICAgIGlmIChhZGRPbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZDtcblxuICAgIC8vIENsZWFyIGFueSBwcmV2aW91c2x5IHNlbGVjdGVkIHJvd3MuXG4gICAgUHJpY2luZy5yZXNldEFkZE9uUm93c0ZvckFsaWFzKGFkZE9uLmFsaWFzKTtcblxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBhZGRPbi5yb3cuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1yb3ctLXNlbGVjdGVkJyk7XG4gICAgICBhZGRPbi5pbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBQcmljaW5nLnVwZGF0ZVN1bW1hcnkoKTtcbiAgfSxcblxuICAvKipcbiAgICogRXhhbWluZXMgdGhlIHBsYW4gcm93cyB0byBnYXRoZXIgdGhlIGF2YWlsYWJsZSBwbGFucy5cbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZldGNoUGxhbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZXNldCB0aGUgcGxhbnMgYXJyYXkuXG4gICAgUHJpY2luZy5wbGFucyA9IFtdO1xuXG4gICAgLy8gTG9vcCBlYWNoIG9mIHRoZSByb3dzIGluIHRoZSBwcmljaW5nIHRhYmxlIGFuZCBhZGQgdGhlIGRhdGEgdG8gdGhlIHBsYW5zIGFycmF5LlxuICAgIFByaWNpbmcucGxhblJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICBQcmljaW5nLnBsYW5zLnB1c2goe1xuICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgaW5wdXQ6IHJvdy5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1yb3dfY29udHJvbCcpLFxuICAgICAgICBpZDogcm93LmdldEF0dHJpYnV0ZSgnZGF0YS1wbGFuLWlkJyksXG4gICAgICAgIHZvbHVtZTogcGFyc2VJbnQocm93LmdldEF0dHJpYnV0ZSgnZGF0YS1wbGFuJykpLFxuICAgICAgICBwcmljZTogcGFyc2VGbG9hdChyb3cuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJykpLFxuICAgICAgICBvdmVyYWdlc1ByaWNlOiBwYXJzZUZsb2F0KHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3ZlcmFnZS1wcmljZScpKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEV4YW1pbmVzIHRoZSBhZGQtb24gcm93cyB0byBnYXRoZXIgdGhlIGF2YWlsYWJsZSBhZGQtb25zLlxuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmV0Y2hBZGRPbnM6IGZ1bmN0aW9uICgpIHtcbiAgICBQcmljaW5nLmFkZE9ucyA9IFtdO1xuXG4gICAgUHJpY2luZy5hZGRPblRpZXJSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgUHJpY2luZy5hZGRPbnMucHVzaCh7XG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBpbnB1dDogcm93LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXJvd19jb250cm9sJyksXG4gICAgICAgIGlkOiByb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgIG5hbWU6IHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpLFxuICAgICAgICBhbGlhczogcm93LmdldEF0dHJpYnV0ZSgnZGF0YS1hbGlhcycpLFxuICAgICAgICBwcmljZTogcm93LmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpLFxuICAgICAgICBpbmNsdWRlZDogcm93LmNsYXNzTGlzdC5jb250YWlucygncHJvZHVjdC1yb3ctLWluY2x1ZGVkJyksXG4gICAgICAgIGRpc2FibGVkOiByb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9kdWN0LXJvdy0tZGlzYWJsZWQnKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZm9ybSBzdWJtaXRzIGZyb20gdGhlIGNhbGN1bGF0b3IuXG4gICAqXG4gICAqIEBwYXJhbSAge0V2ZW50fSBlICBUaGUgZm9ybSBzdWJtaXQgZXZlbnQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB2b2x1bWVGb3JtU3VibWl0dGVkOiBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEdyYWIgdGhlIHZvbHVtZSBmcm9tIHRoZSBpbnB1dC5cbiAgICB2YXIgdm9sdW1lID0gcGFyc2VJbnQoUHJpY2luZy52b2x1bWVJbnB1dC52YWx1ZS5yZXBsYWNlKC9bXjAtOV0vZywgJycpKTtcblxuICAgIC8vIFN0b3AgaGVyZSBpZiB0aGUgdm9sdW1lIGlzIG5vdCB2YWxpZC5cbiAgICBpZiAoIXZvbHVtZSkge1xuICAgICAgcmV0dXJuIFByaWNpbmcucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvLyBXcml0ZSB0aGUgY2xlYW5lZCB2b2x1bWUgYmFjayB0byB0aGUgaW5wdXQgZmllbGQuXG4gICAgUHJpY2luZy52b2x1bWVJbnB1dC52YWx1ZSA9IHZvbHVtZTtcblxuICAgIGlmICh2b2x1bWUgPj0gUHJpY2luZy5tYXhfdm9sdW1lKSB7XG4gICAgICByZXR1cm4gUHJpY2luZy5zaG93SGlnaFZvbHVtZVByb21vKCk7XG4gICAgfVxuXG4gICAgLy8gUm91bmQgdGhlIHZvbHVtZSBkb3duIHRvIHRoZSBuZWFyZXN0IHRob3VzYW5kLlxuICAgIHZhciByb3VuZGVkVm9sdW1lID0gTWF0aC5mbG9vcih2b2x1bWUgLyAxMDAwKSAqIDEwMDA7XG5cbiAgICAvLyBGaW5kIHRoZSBiZXN0IHByaWNlZCBwbGFuLlxuICAgIHZhciByZXN1bHQgPSBQcmljaW5nLmZpbmRQbGFuRm9yVm9sdW1lKHJvdW5kZWRWb2x1bWUpO1xuXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSByZWxldmFudCByb3cuXG4gICAgUHJpY2luZy5yZXNldFBsYW5Sb3dzKCk7XG5cbiAgICByZXN1bHQucGxhbi5yb3cuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1yb3ctLXNlbGVjdGVkJyk7XG4gICAgcmVzdWx0LnBsYW4uaW5wdXQuY2hlY2tlZCA9IHRydWU7XG5cbiAgICAvLyBEaXNwbGF5IHRoZSByZXN1bHQuXG4gICAgUHJpY2luZy51cGRhdGVTdW1tYXJ5KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3cgYSBwcm9tcHQgdG8gY29udGFjdCB1cyBhYm91dCB2b2x1bWUgcHJpY2luZy5cbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHNob3dIaWdoVm9sdW1lUHJvbW86IGZ1bmN0aW9uICgpIHtcbiAgICBQcmljaW5nLmJsYW5rVmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBQcmljaW5nLnJlc3VsdFZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgUHJpY2luZy5oaWdoVm9sdW1lVmlldy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBQcmljaW5nLmluc3RydWN0aW9uc1ZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cbiAgICAvLyBNYWtlIHN1cmUgbm8gcm93cyBpbiB0aGUgcHJpY2luZyB0YWJsZSBhcmUgaGlnaGxpZ2h0ZWQuXG4gICAgUHJpY2luZy5yZXNldFBsYW5Sb3dzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERpc3BsYXkgdGhlIGJlc3QgcGxhbiBpbiB0aGUgY2FsY3VsYXRvci5cbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHVwZGF0ZVN1bW1hcnk6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm9sdW1lID0gcGFyc2VJbnQoUHJpY2luZy52b2x1bWVJbnB1dC52YWx1ZS5yZXBsYWNlKC9bXjAtOV0vZywgJycpKTtcblxuICAgIGlmICh2b2x1bWUgPj0gUHJpY2luZy5tYXhfdm9sdW1lKSB7XG4gICAgICByZXR1cm4gUHJpY2luZy5zaG93SGlnaFZvbHVtZVByb21vKCk7XG4gICAgfVxuXG4gICAgdmFyIHZvbHVtZUZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnKTtcblxuICAgIHZhciBjdXJyZW5jeUZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMlxuICAgIH0pO1xuXG4gICAgdmFyIHNlbGVjdGVkUGxhbiA9IFByaWNpbmcucGxhbnMuZmluZChmdW5jdGlvbiAocGxhbikge1xuICAgICAgcmV0dXJuIHBsYW4uaW5wdXQuY2hlY2tlZDtcbiAgICB9KTtcblxuICAgIGlmIChzZWxlY3RlZFBsYW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRGVmYXVsdCB0byBmaXJzdCBwbGFuLlxuICAgICAgc2VsZWN0ZWRQbGFuID0gUHJpY2luZy5wbGFuc1swXTtcblxuICAgICAgc2VsZWN0ZWRQbGFuLnJvdy5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LXJvdy0tc2VsZWN0ZWQnKTtcbiAgICAgIHNlbGVjdGVkUGxhbi5pbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZWN0ZWRBZGRPbnMgPSBbXSxcbiAgICAgIGFkZE9uc1RvdGFsID0gMDtcblxuICAgIFByaWNpbmcuYWRkT25zLmZvckVhY2goZnVuY3Rpb24gKGFkZE9uKSB7XG4gICAgICBpZiAoYWRkT24uaW5wdXQgJiYgYWRkT24uaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICBzZWxlY3RlZEFkZE9ucy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBhZGRPbi5uYW1lLFxuICAgICAgICAgIHByaWNlOlxuICAgICAgICAgICAgYWRkT24ucHJpY2UgPT0gMFxuICAgICAgICAgICAgICA/ICdJbmNsdWRlZCdcbiAgICAgICAgICAgICAgOiBjdXJyZW5jeUZvcm1hdHRlci5mb3JtYXQoYWRkT24ucHJpY2UpXG4gICAgICAgIH0pO1xuICAgICAgICBhZGRPbnNUb3RhbCArPSBwYXJzZUludChhZGRPbi5wcmljZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcGxhbkNvc3QgPSBQcmljaW5nLmNhbGN1bGF0ZU1vbnRobHlDb3N0KFxuICAgICAgc2VsZWN0ZWRQbGFuLFxuICAgICAgUHJpY2luZy52b2x1bWVJbnB1dC52YWx1ZVxuICAgICk7XG5cbiAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoXG4gICAgICAnPHRib2R5Pjx0cj48dGg+e3sgcGxhblZvbHVtZSB9fSBlbWFpbHMvbW9udGg8L3RoPjx0ZD57eyBwbGFuUHJpY2UgfX08L3RkPjwvdHI+e3sjaWYgaGFzT3ZlcmFnZXN9fTx0cj48dGg+e3sgb3ZlcmFnZXMgfX0gZXh0cmEgZW1haWxzIDxzcGFuPkAge3sgcGxhbk92ZXJhZ2VzUHJpY2UgfX0gcGVyIDEsMDAwPC9zcGFuPjwvdGg+PHRkPnt7IG92ZXJhZ2VzQ29zdCB9fTwvdGQ+PC90cj57ey9pZn19e3sjZWFjaCBhZGRPbnN9fTx0cj48dGg+e3sgbmFtZSB9fTwvdGg+PHRkPnt7IHByaWNlIH19PC90ZD48L3RyPnt7L2VhY2h9fTwvdGJvZHk+J1xuICAgICk7XG5cbiAgICBQcmljaW5nLnJlc3VsdFRvdGFsLmlubmVySFRNTCA9IGN1cnJlbmN5Rm9ybWF0dGVyLmZvcm1hdChcbiAgICAgIHBsYW5Db3N0LnRvdGFsQ29zdCArIGFkZE9uc1RvdGFsXG4gICAgKTtcblxuICAgIFByaWNpbmcucmVzdWx0QnJlYWtkb3duLmlubmVySFRNTCA9IHRlbXBsYXRlKHtcbiAgICAgIHBsYW5Wb2x1bWU6IHZvbHVtZUZvcm1hdHRlci5mb3JtYXQoc2VsZWN0ZWRQbGFuLnZvbHVtZSksXG4gICAgICBwbGFuUHJpY2U6IGN1cnJlbmN5Rm9ybWF0dGVyLmZvcm1hdChzZWxlY3RlZFBsYW4ucHJpY2UpLFxuICAgICAgaGFzT3ZlcmFnZXM6IHBsYW5Db3N0Lm92ZXJhZ2VzID4gMCxcbiAgICAgIG92ZXJhZ2VzOiB2b2x1bWVGb3JtYXR0ZXIuZm9ybWF0KHBsYW5Db3N0Lm92ZXJhZ2VzKSxcbiAgICAgIG92ZXJhZ2VzQ29zdDogY3VycmVuY3lGb3JtYXR0ZXIuZm9ybWF0KHBsYW5Db3N0Lm92ZXJhZ2VzQ29zdCksXG4gICAgICBwbGFuT3ZlcmFnZXNQcmljZTogY3VycmVuY3lGb3JtYXR0ZXIuZm9ybWF0KHNlbGVjdGVkUGxhbi5vdmVyYWdlc1ByaWNlKSxcbiAgICAgIGFkZE9uczogc2VsZWN0ZWRBZGRPbnNcbiAgICB9KTtcblxuICAgIFByaWNpbmcuYmxhbmtWaWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIFByaWNpbmcuaGlnaFZvbHVtZVZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgUHJpY2luZy5yZXN1bHRWaWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIFByaWNpbmcuaW5zdHJ1Y3Rpb25zVmlldy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVzZXQgdGhlIGNhbGN1bGF0b3IgdG8gaXTigJlzIGluaXRpYWwgc3RhdGUuXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlc3VsdCB0aGUgdm9sdW1lIGlucHV0LlxuICAgIFByaWNpbmcudm9sdW1lSW5wdXQudmFsdWUgPSAnJztcblxuICAgIC8vIFJlbW92ZSBoaWdobGlnaHQgZnJvbSBwcmljaW5nIHRhYmxlLlxuICAgIFByaWNpbmcucmVzZXRQbGFuUm93cygpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGFkZG9ucy5cbiAgICBQcmljaW5nLnJlc2V0QWRkT25Sb3dzKCk7XG5cbiAgICAvLyBTaG93IGJsYW5rIHN0YXRlLlxuICAgIFByaWNpbmcuYmxhbmtWaWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIFByaWNpbmcuaGlnaFZvbHVtZVZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgUHJpY2luZy5yZXN1bHRWaWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIFByaWNpbmcuaW5zdHJ1Y3Rpb25zVmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBwcmljaW5nIHRhYmxlIHJvd3MgdG8gdGhlaXIgZGVmYXVsdCBzdGF0ZS5cbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlc2V0UGxhblJvd3M6IGZ1bmN0aW9uICgpIHtcbiAgICBQcmljaW5nLnBsYW5zLmZvckVhY2goZnVuY3Rpb24gKHBsYW4pIHtcbiAgICAgIHBsYW4ucm93LmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3Qtcm93LS1zZWxlY3RlZCcpO1xuICAgICAgcGxhbi5pbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc2V0IGFsbCBhZGQtb24gcm93cyBiYWNrIHRvIHRoZWlyIGRlZmF1bHQgc3RhdGUuXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICByZXNldEFkZE9uUm93czogZnVuY3Rpb24gKCkge1xuICAgIFByaWNpbmcuYWRkT25zLmZvckVhY2goZnVuY3Rpb24gKGFkZE9uKSB7XG4gICAgICBpZiAoYWRkT24uaW5jbHVkZWQpIHtcbiAgICAgICAgYWRkT24ucm93LmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3Qtcm93LS1zZWxlY3RlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkT24ucm93LmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2R1Y3Qtcm93LS1zZWxlY3RlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWRkT24uaW5wdXQpIHtcbiAgICAgICAgYWRkT24uaW5wdXQuY2hlY2tlZCA9IGFkZE9uLmluY2x1ZGVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGFkZG9uIHJvd3MgdG8gdGhlaXIgZGVmYXVsdCBzdGF0ZS5cbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlc2V0QWRkT25Sb3dzRm9yQWxpYXM6IGZ1bmN0aW9uIChhbGlhcykge1xuICAgIHZhciBhZGRPbnMgPSBQcmljaW5nLmFkZE9ucy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpLmFsaWFzID09IGFsaWFzO1xuICAgIH0pO1xuXG4gICAgYWRkT25zLmZvckVhY2goZnVuY3Rpb24gKGFkZE9uKSB7XG4gICAgICBhZGRPbi5yb3cuY2xhc3NMaXN0LnJlbW92ZSgncHJvZHVjdC1yb3ctLXNlbGVjdGVkJyk7XG4gICAgICBhZGRPbi5pbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBsb3dlc3QgY29zdCBwbGFuIGZvciB0aGUgdXNlcuKAmXMgdm9sdW1lLlxuICAgKiBUaGlzIHRha2VzIGludG8gYWNjb3VudCB0aGUgY29tYmluYXRpb24gb2YgYmFzZSBwbGFuIHByaWNlICsgb3ZlcmFnZXMuXG4gICAqXG4gICAqIEBwYXJhbSAge0ludH0gdm9sdW1lICAgVGhlIHVzZXIncyBtb250aGx5IHZvbHVtZSwgcm91bmRlZCB1cCB0byB0aGUgbmVhcmVzdFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgIEEgcmVzdWx0IG9iamVjdCBjb250YWluaW5nIHRoZSBiZXN0IHBsYW4gYW5kIHRvdGFscy5cbiAgICovXG4gIGZpbmRQbGFuRm9yVm9sdW1lOiBmdW5jdGlvbiAodm9sdW1lKSB7XG4gICAgdmFyIGJlc3RQbGFuO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggb2YgdGhlIHByaWNpbmcgcGxhbnMuXG4gICAgUHJpY2luZy5wbGFucy5mb3JFYWNoKGZ1bmN0aW9uIChwbGFuKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gUHJpY2luZy5jYWxjdWxhdGVNb250aGx5Q29zdChwbGFuLCB2b2x1bWUpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIHBsYW4vb3ZlcmFnZXMgY29tYm8gaXMgY2hlYXBlclxuICAgICAgLy8gYW5kIHNldCBpdCBhcyB0aGUgYmVzdFBsYW4gaWYgaXQgaXMuXG4gICAgICBpZiAoYmVzdFBsYW4gPT0gdW5kZWZpbmVkIHx8IHJlc3VsdC50b3RhbENvc3QgPD0gYmVzdFBsYW4udG90YWxDb3N0KSB7XG4gICAgICAgIGJlc3RQbGFuID0gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBiZXN0IHBsYW4uXG4gICAgcmV0dXJuIGJlc3RQbGFuO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgaG93IG11Y2ggaXQgd291bGQgY29zdCB0byBzZW5kIHdpdGggYSBzcGVjaWZpZWQgcGxhbi5cbiAgICpcbiAgICogQHBhcmFtIHtQbGFufSBwbGFuIFRoZSBwbGFuIHRvIHVzZSBmb3IgcHJpY2luZy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZvbHVtZSBUaGUgbW9udGhseSB2b2x1bWUuXG4gICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggdGhlIHRvdGFsIG1vbnRobHkgY29zdCwgb3ZlcmFnZXNcbiAgICogICAgICAgICAgICAgICAgICBhbW91bnQsIG92ZXJhZ2VzIGNvc3QgYW5kIHBsYW4gdXNlZCB0byBjYWxjdWxhdGVcbiAgICogICAgICAgICAgICAgICAgICB0aGUgcHJpY2luZy5cbiAgICovXG4gIGNhbGN1bGF0ZU1vbnRobHlDb3N0OiBmdW5jdGlvbiAocGxhbiwgdm9sdW1lKSB7XG4gICAgdmFyIHRvdGFsQ29zdCA9IHBsYW4ucHJpY2UsXG4gICAgICBvdmVyYWdlcyA9IDAsXG4gICAgICBvdmVyYWdlc0Nvc3QgPSAwO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBjb3N0IG9mIG92ZXJhZ2VzIGlmIHRoZXkgYXJlIG5lZWRlZC5cbiAgICBpZiAodm9sdW1lID4gcGxhbi52b2x1bWUpIHtcbiAgICAgIG92ZXJhZ2VzID0gTWF0aC5mbG9vcigodm9sdW1lIC0gcGxhbi52b2x1bWUpIC8gMTAwMCk7XG4gICAgICBvdmVyYWdlc0Nvc3QgPSBvdmVyYWdlcyAqIHBsYW4ub3ZlcmFnZXNQcmljZTtcblxuICAgICAgdG90YWxDb3N0ICs9IG92ZXJhZ2VzQ29zdDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGxhbjogcGxhbixcbiAgICAgIHRvdGFsQ29zdDogdG90YWxDb3N0LFxuICAgICAgb3ZlcmFnZXM6IG92ZXJhZ2VzICogMTAwMCxcbiAgICAgIG92ZXJhZ2VzQ29zdDogb3ZlcmFnZXNDb3N0XG4gICAgfTtcbiAgfVxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIEluaXRpYWxpemUgaWYgdGhlcmUgaXMgYSBjYWxjdWxhdG9yLlxuICBpZiAoUHJpY2luZy5mb3JtKSB7XG4gICAgUHJpY2luZy5pbml0KCk7XG4gIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnQgdmFyIFBpcHNNb2RlO1xuKGZ1bmN0aW9uIChQaXBzTW9kZSkge1xuICAgIFBpcHNNb2RlW1wiUmFuZ2VcIl0gPSBcInJhbmdlXCI7XG4gICAgUGlwc01vZGVbXCJTdGVwc1wiXSA9IFwic3RlcHNcIjtcbiAgICBQaXBzTW9kZVtcIlBvc2l0aW9uc1wiXSA9IFwicG9zaXRpb25zXCI7XG4gICAgUGlwc01vZGVbXCJDb3VudFwiXSA9IFwiY291bnRcIjtcbiAgICBQaXBzTW9kZVtcIlZhbHVlc1wiXSA9IFwidmFsdWVzXCI7XG59KShQaXBzTW9kZSB8fCAoUGlwc01vZGUgPSB7fSkpO1xuZXhwb3J0IHZhciBQaXBzVHlwZTtcbihmdW5jdGlvbiAoUGlwc1R5cGUpIHtcbiAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vbmVcIl0gPSAtMV0gPSBcIk5vbmVcIjtcbiAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vVmFsdWVcIl0gPSAwXSA9IFwiTm9WYWx1ZVwiO1xuICAgIFBpcHNUeXBlW1BpcHNUeXBlW1wiTGFyZ2VWYWx1ZVwiXSA9IDFdID0gXCJMYXJnZVZhbHVlXCI7XG4gICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJTbWFsbFZhbHVlXCJdID0gMl0gPSBcIlNtYWxsVmFsdWVcIjtcbn0pKFBpcHNUeXBlIHx8IChQaXBzVHlwZSA9IHt9KSk7XG4vL3JlZ2lvbiBIZWxwZXIgTWV0aG9kc1xuZnVuY3Rpb24gaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkge1xuICAgIHJldHVybiBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkgJiYgdHlwZW9mIGVudHJ5LmZyb20gPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSB7XG4gICAgLy8gcGFydGlhbCBmb3JtYXR0ZXJzIG9ubHkgbmVlZCBhIHRvIGZ1bmN0aW9uIGFuZCBub3QgYSBmcm9tIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHR5cGVvZiBlbnRyeSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZW50cnkudG8gPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWwpIHtcbiAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcbn1cbmZ1bmN0aW9uIGlzU2V0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59XG4vLyBCaW5kYWJsZSB2ZXJzaW9uXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuLy8gUmVtb3ZlcyBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkuXG5mdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiAhdGhpc1thXSA/ICh0aGlzW2FdID0gdHJ1ZSkgOiBmYWxzZTtcbiAgICB9LCB7fSk7XG59XG4vLyBSb3VuZCBhIHZhbHVlIHRvIHRoZSBjbG9zZXN0ICd0bycuXG5mdW5jdGlvbiBjbG9zZXN0KHZhbHVlLCB0bykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdG8pICogdG87XG59XG4vLyBDdXJyZW50IHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50LlxuZnVuY3Rpb24gb2Zmc2V0KGVsZW0sIG9yaWVudGF0aW9uKSB7XG4gICAgdmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gICAgdmFyIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBwYWdlT2Zmc2V0ID0gZ2V0UGFnZU9mZnNldChkb2MpO1xuICAgIC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBjb250YWlucyBsZWZ0IHNjcm9sbCBpbiBDaHJvbWUgb24gQW5kcm9pZC5cbiAgICAvLyBJIGhhdmVuJ3QgZm91bmQgYSBmZWF0dXJlIGRldGVjdGlvbiB0aGF0IHByb3ZlcyB0aGlzLiBXb3JzdCBjYXNlXG4gICAgLy8gc2NlbmFyaW8gb24gbWlzLW1hdGNoOiB0aGUgJ3RhcCcgZmVhdHVyZSBvbiBob3Jpem9udGFsIHNsaWRlcnMgYnJlYWtzLlxuICAgIGlmICgvd2Via2l0LipDaHJvbWUuKk1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgcGFnZU9mZnNldC54ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uID8gcmVjdC50b3AgKyBwYWdlT2Zmc2V0LnkgLSBkb2NFbGVtLmNsaWVudFRvcCA6IHJlY3QubGVmdCArIHBhZ2VPZmZzZXQueCAtIGRvY0VsZW0uY2xpZW50TGVmdDtcbn1cbi8vIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgbnVtZXJpY2FsLlxuZnVuY3Rpb24gaXNOdW1lcmljKGEpIHtcbiAgICByZXR1cm4gdHlwZW9mIGEgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKGEpICYmIGlzRmluaXRlKGEpO1xufVxuLy8gU2V0cyBhIGNsYXNzIGFuZCByZW1vdmVzIGl0IGFmdGVyIFtkdXJhdGlvbl0gbXMuXG5mdW5jdGlvbiBhZGRDbGFzc0ZvcihlbGVtZW50LCBjbGFzc05hbWUsIGR1cmF0aW9uKSB7XG4gICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICB9XG59XG4vLyBMaW1pdHMgYSB2YWx1ZSB0byAwIC0gMTAwXG5mdW5jdGlvbiBsaW1pdChhKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGEsIDEwMCksIDApO1xufVxuLy8gV3JhcHMgYSB2YXJpYWJsZSBhcyBhbiBhcnJheSwgaWYgaXQgaXNuJ3Qgb25lIHlldC5cbi8vIE5vdGUgdGhhdCBhbiBpbnB1dCBhcnJheSBpcyByZXR1cm5lZCBieSByZWZlcmVuY2UhXG5mdW5jdGlvbiBhc0FycmF5KGEpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSA/IGEgOiBbYV07XG59XG4vLyBDb3VudHMgZGVjaW1hbHNcbmZ1bmN0aW9uIGNvdW50RGVjaW1hbHMobnVtU3RyKSB7XG4gICAgbnVtU3RyID0gU3RyaW5nKG51bVN0cik7XG4gICAgdmFyIHBpZWNlcyA9IG51bVN0ci5zcGxpdChcIi5cIik7XG4gICAgcmV0dXJuIHBpZWNlcy5sZW5ndGggPiAxID8gcGllY2VzWzFdLmxlbmd0aCA6IDA7XG59XG4vLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jYWRkX2NsYXNzXG5mdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcbiAgICB9XG59XG4vLyBodHRwOi8veW91bWlnaHRub3RuZWVkanF1ZXJ5LmNvbS8jcmVtb3ZlX2NsYXNzXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIiArIGNsYXNzTmFtZS5zcGxpdChcIiBcIikuam9pbihcInxcIikgKyBcIihcXFxcYnwkKVwiLCBcImdpXCIpLCBcIiBcIik7XG4gICAgfVxufVxuLy8gaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L2F0dHJpYnV0ZXMvYWRkaW5nLXJlbW92aW5nLWFuZC10ZXN0aW5nLWZvci1jbGFzc2VzLTkvXG5mdW5jdGlvbiBoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdCA/IGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDogbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBjbGFzc05hbWUgKyBcIlxcXFxiXCIpLnRlc3QoZWwuY2xhc3NOYW1lKTtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvc2Nyb2xsWSNOb3Rlc1xuZnVuY3Rpb24gZ2V0UGFnZU9mZnNldChkb2MpIHtcbiAgICB2YXIgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaXNDU1MxQ29tcGF0ID0gKGRvYy5jb21wYXRNb2RlIHx8IFwiXCIpID09PSBcIkNTUzFDb21wYXRcIjtcbiAgICB2YXIgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgID8gd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgICAgIDogaXNDU1MxQ29tcGF0XG4gICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgOiBkb2MuYm9keS5zY3JvbGxMZWZ0O1xuICAgIHZhciB5ID0gc3VwcG9ydFBhZ2VPZmZzZXRcbiAgICAgICAgPyB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgID8gZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsVG9wO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHksXG4gICAgfTtcbn1cbi8vIHdlIHByb3ZpZGUgYSBmdW5jdGlvbiB0byBjb21wdXRlIGNvbnN0YW50cyBpbnN0ZWFkXG4vLyBvZiBhY2Nlc3Npbmcgd2luZG93LiogYXMgc29vbiBhcyB0aGUgbW9kdWxlIG5lZWRzIGl0XG4vLyBzbyB0aGF0IHdlIGRvIG5vdCBjb21wdXRlIGFueXRoaW5nIGlmIG5vdCBuZWVkZWRcbmZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBldmVudHMgdG8gYmluZC4gSUUxMSBpbXBsZW1lbnRzIHBvaW50ZXJFdmVudHMgd2l0aG91dFxuICAgIC8vIGEgcHJlZml4LCB3aGljaCBicmVha3MgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBJRTEwIGltcGxlbWVudGF0aW9uLlxuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkXG4gICAgICAgID8ge1xuICAgICAgICAgICAgc3RhcnQ6IFwicG9pbnRlcmRvd25cIixcbiAgICAgICAgICAgIG1vdmU6IFwicG9pbnRlcm1vdmVcIixcbiAgICAgICAgICAgIGVuZDogXCJwb2ludGVydXBcIixcbiAgICAgICAgfVxuICAgICAgICA6IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiTVNQb2ludGVyRG93blwiLFxuICAgICAgICAgICAgICAgIG1vdmU6IFwiTVNQb2ludGVyTW92ZVwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJNU1BvaW50ZXJVcFwiLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwibW91c2Vkb3duIHRvdWNoc3RhcnRcIixcbiAgICAgICAgICAgICAgICBtb3ZlOiBcIm1vdXNlbW92ZSB0b3VjaG1vdmVcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwibW91c2V1cCB0b3VjaGVuZFwiLFxuICAgICAgICAgICAgfTtcbn1cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4vLyBJc3N1ZSAjNzg1XG5mdW5jdGlvbiBnZXRTdXBwb3J0c1Bhc3NpdmUoKSB7XG4gICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG51bGwsIG9wdHMpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkgeyB9XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG59XG5mdW5jdGlvbiBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpIHtcbiAgICByZXR1cm4gd2luZG93LkNTUyAmJiBDU1Muc3VwcG9ydHMgJiYgQ1NTLnN1cHBvcnRzKFwidG91Y2gtYWN0aW9uXCIsIFwibm9uZVwiKTtcbn1cbi8vZW5kcmVnaW9uXG4vL3JlZ2lvbiBSYW5nZSBDYWxjdWxhdGlvblxuLy8gRGV0ZXJtaW5lIHRoZSBzaXplIG9mIGEgc3ViLXJhbmdlIGluIHJlbGF0aW9uIHRvIGEgZnVsbCByYW5nZS5cbmZ1bmN0aW9uIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSB7XG4gICAgcmV0dXJuIDEwMCAvIChwYiAtIHBhKTtcbn1cbi8vIChwZXJjZW50YWdlKSBIb3cgbWFueSBwZXJjZW50IGlzIHRoaXMgdmFsdWUgb2YgdGhpcyByYW5nZT9cbmZ1bmN0aW9uIGZyb21QZXJjZW50YWdlKHJhbmdlLCB2YWx1ZSwgc3RhcnRSYW5nZSkge1xuICAgIHJldHVybiAodmFsdWUgKiAxMDApIC8gKHJhbmdlW3N0YXJ0UmFuZ2UgKyAxXSAtIHJhbmdlW3N0YXJ0UmFuZ2VdKTtcbn1cbi8vIChwZXJjZW50YWdlKSBXaGVyZSBpcyB0aGlzIHZhbHVlIG9uIHRoaXMgcmFuZ2U/XG5mdW5jdGlvbiB0b1BlcmNlbnRhZ2UocmFuZ2UsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGZyb21QZXJjZW50YWdlKHJhbmdlLCByYW5nZVswXSA8IDAgPyB2YWx1ZSArIE1hdGguYWJzKHJhbmdlWzBdKSA6IHZhbHVlIC0gcmFuZ2VbMF0sIDApO1xufVxuLy8gKHZhbHVlKSBIb3cgbXVjaCBpcyB0aGlzIHBlcmNlbnRhZ2Ugb24gdGhpcyByYW5nZT9cbmZ1bmN0aW9uIGlzUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICogKHJhbmdlWzFdIC0gcmFuZ2VbMF0pKSAvIDEwMCArIHJhbmdlWzBdO1xufVxuZnVuY3Rpb24gZ2V0Sih2YWx1ZSwgYXJyKSB7XG4gICAgdmFyIGogPSAxO1xuICAgIHdoaWxlICh2YWx1ZSA+PSBhcnJbal0pIHtcbiAgICAgICAgaiArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gajtcbn1cbi8vIChwZXJjZW50YWdlKSBJbnB1dCBhIHZhbHVlLCBmaW5kIHdoZXJlLCBvbiBhIHNjYWxlIG9mIDAtMTAwLCBpdCBhcHBsaWVzLlxuZnVuY3Rpb24gdG9TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA+PSB4VmFsLnNsaWNlKC0xKVswXSkge1xuICAgICAgICByZXR1cm4gMTAwO1xuICAgIH1cbiAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhWYWwpO1xuICAgIHZhciB2YSA9IHhWYWxbaiAtIDFdO1xuICAgIHZhciB2YiA9IHhWYWxbal07XG4gICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgdmFyIHBiID0geFBjdFtqXTtcbiAgICByZXR1cm4gcGEgKyB0b1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sIHZhbHVlKSAvIHN1YlJhbmdlUmF0aW8ocGEsIHBiKTtcbn1cbi8vICh2YWx1ZSkgSW5wdXQgYSBwZXJjZW50YWdlLCBmaW5kIHdoZXJlIGl0IGlzIG9uIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXG5mdW5jdGlvbiBmcm9tU3RlcHBpbmcoeFZhbCwgeFBjdCwgdmFsdWUpIHtcbiAgICAvLyBUaGVyZSBpcyBubyByYW5nZSBncm91cCB0aGF0IGZpdHMgMTAwXG4gICAgaWYgKHZhbHVlID49IDEwMCkge1xuICAgICAgICByZXR1cm4geFZhbC5zbGljZSgtMSlbMF07XG4gICAgfVxuICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgdmFyIHZhID0geFZhbFtqIC0gMV07XG4gICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICB2YXIgcGEgPSB4UGN0W2ogLSAxXTtcbiAgICB2YXIgcGIgPSB4UGN0W2pdO1xuICAgIHJldHVybiBpc1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sICh2YWx1ZSAtIHBhKSAqIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSk7XG59XG4vLyAocGVyY2VudGFnZSkgR2V0IHRoZSBzdGVwIHRoYXQgYXBwbGllcyBhdCBhIGNlcnRhaW4gdmFsdWUuXG5mdW5jdGlvbiBnZXRTdGVwKHhQY3QsIHhTdGVwcywgc25hcCwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IDEwMCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhciBqID0gZ2V0Sih2YWx1ZSwgeFBjdCk7XG4gICAgdmFyIGEgPSB4UGN0W2ogLSAxXTtcbiAgICB2YXIgYiA9IHhQY3Rbal07XG4gICAgLy8gSWYgJ3NuYXAnIGlzIHNldCwgc3RlcHMgYXJlIHVzZWQgYXMgZml4ZWQgcG9pbnRzIG9uIHRoZSBzbGlkZXIuXG4gICAgaWYgKHNuYXApIHtcbiAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCBwb3NpdGlvbiwgYSBvciBiLlxuICAgICAgICBpZiAodmFsdWUgLSBhID4gKGIgLSBhKSAvIDIpIHtcbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBpZiAoIXhTdGVwc1tqIC0gMV0pIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4geFBjdFtqIC0gMV0gKyBjbG9zZXN0KHZhbHVlIC0geFBjdFtqIC0gMV0sIHhTdGVwc1tqIC0gMV0pO1xufVxuLy9lbmRyZWdpb25cbi8vcmVnaW9uIFNwZWN0cnVtXG52YXIgU3BlY3RydW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3BlY3RydW0oZW50cnksIHNuYXAsIHNpbmdsZVN0ZXApIHtcbiAgICAgICAgdGhpcy54UGN0ID0gW107XG4gICAgICAgIHRoaXMueFZhbCA9IFtdO1xuICAgICAgICB0aGlzLnhTdGVwcyA9IFtdO1xuICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtdO1xuICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwID0gW107XG4gICAgICAgIHRoaXMueFN0ZXBzID0gW3NpbmdsZVN0ZXAgfHwgZmFsc2VdO1xuICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtmYWxzZV07XG4gICAgICAgIHRoaXMuc25hcCA9IHNuYXA7XG4gICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgdmFyIG9yZGVyZWQgPSBbXTtcbiAgICAgICAgLy8gTWFwIHRoZSBvYmplY3Qga2V5cyB0byBhbiBhcnJheS5cbiAgICAgICAgT2JqZWN0LmtleXMoZW50cnkpLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICBvcmRlcmVkLnB1c2goW2FzQXJyYXkoZW50cnlbaW5kZXhdKSwgaW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFNvcnQgYWxsIGVudHJpZXMgYnkgdmFsdWUgKG51bWVyaWMgc29ydCkuXG4gICAgICAgIG9yZGVyZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGFbMF1bMF0gLSBiWzBdWzBdO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ29udmVydCBhbGwgZW50cmllcyB0byBzdWJyYW5nZXMuXG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IG9yZGVyZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVudHJ5UG9pbnQob3JkZXJlZFtpbmRleF1bMV0sIG9yZGVyZWRbaW5kZXhdWzBdKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdG9yZSB0aGUgYWN0dWFsIHN0ZXAgdmFsdWVzLlxuICAgICAgICAvLyB4U3RlcHMgaXMgc29ydGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHhQY3QgYW5kIHhWYWwuXG4gICAgICAgIHRoaXMueE51bVN0ZXBzID0gdGhpcy54U3RlcHMuc2xpY2UoMCk7XG4gICAgICAgIC8vIENvbnZlcnQgYWxsIG51bWVyaWMgc3RlcHMgdG8gdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHN1YnJhbmdlIHRoZXkgcmVwcmVzZW50LlxuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnhOdW1TdGVwcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RlcFBvaW50KGluZGV4LCB0aGlzLnhOdW1TdGVwc1tpbmRleF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGlzdGFuY2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnhOdW1TdGVwcy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBkaXN0YW5jZXNbaW5kZXhdID0gZnJvbVBlcmNlbnRhZ2UodGhpcy54VmFsLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXN0YW5jZXM7XG4gICAgfTtcbiAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb3ZlciB0aGUgd2hvbGUgc2NhbGUgb2YgcmFuZ2VzLlxuICAgIC8vIGRpcmVjdGlvbjogMCA9IGJhY2t3YXJkcyAvIDEgPSBmb3J3YXJkc1xuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRBYnNvbHV0ZURpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlLCBkaXN0YW5jZXMsIGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgeFBjdF9pbmRleCA9IDA7XG4gICAgICAgIC8vIENhbGN1bGF0ZSByYW5nZSB3aGVyZSB0byBzdGFydCBjYWxjdWxhdGlvblxuICAgICAgICBpZiAodmFsdWUgPCB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICB3aGlsZSAodmFsdWUgPiB0aGlzLnhQY3RbeFBjdF9pbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09PSB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICB4UGN0X2luZGV4ID0gdGhpcy54UGN0Lmxlbmd0aCAtIDI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgbG9va2luZyBiYWNrd2FyZHMgYW5kIHRoZSB2YWx1ZSBpcyBleGFjdGx5IGF0IGEgcmFuZ2Ugc2VwYXJhdG9yIHRoZW4gbG9vayBvbmUgcmFuZ2UgZnVydGhlclxuICAgICAgICBpZiAoIWRpcmVjdGlvbiAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgeFBjdF9pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXN0YW5jZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydF9mYWN0b3I7XG4gICAgICAgIHZhciByZXN0X2ZhY3RvciA9IDE7XG4gICAgICAgIHZhciByZXN0X3JlbF9kaXN0YW5jZSA9IGRpc3RhbmNlc1t4UGN0X2luZGV4XTtcbiAgICAgICAgdmFyIHJhbmdlX3BjdCA9IDA7XG4gICAgICAgIHZhciByZWxfcmFuZ2VfZGlzdGFuY2UgPSAwO1xuICAgICAgICB2YXIgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSAwO1xuICAgICAgICB2YXIgcmFuZ2VfY291bnRlciA9IDA7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB3aGF0IHBhcnQgb2YgdGhlIHN0YXJ0IHJhbmdlIHRoZSB2YWx1ZSBpc1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodmFsdWUgLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pIC8gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB2YWx1ZSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRG8gdW50aWwgdGhlIGNvbXBsZXRlIGRpc3RhbmNlIGFjcm9zcyByYW5nZXMgaXMgY2FsY3VsYXRlZFxuICAgICAgICB3aGlsZSAocmVzdF9yZWxfZGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHBlcmNlbnRhZ2Ugb2YgdG90YWwgcmFuZ2VcbiAgICAgICAgICAgIHJhbmdlX3BjdCA9IHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMSArIHJhbmdlX2NvdW50ZXJdIC0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXTtcbiAgICAgICAgICAgIC8vIERldGVjdCBpZiB0aGUgbWFyZ2luLCBwYWRkaW5nIG9yIGxpbWl0IGlzIGxhcmdlciB0aGVuIHRoZSBjdXJyZW50IHJhbmdlIGFuZCBjYWxjdWxhdGVcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmVzdF9mYWN0b3IgKyAxMDAgLSBzdGFydF9mYWN0b3IgKiAxMDAgPiAxMDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBsYXJnZXIgdGhlbiB0YWtlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG9mIHRoZSB3aG9sZSByYW5nZVxuICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9IHJhbmdlX3BjdCAqIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAvLyBSZXN0IGZhY3RvciBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgICAgICByZXN0X2ZhY3RvciA9IChyZXN0X3JlbF9kaXN0YW5jZSAtIDEwMCAqIHN0YXJ0X2ZhY3RvcikgLyBkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgIC8vIFNldCBzdGFydCBmYWN0b3IgdG8gMSBhcyBmb3IgbmV4dCByYW5nZSBpdCBkb2VzIG5vdCBhcHBseS5cbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc21hbGxlciBvciBlcXVhbCB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIGNhbGN1bGF0ZSBwZXJjZW50dWFsIHBhcnQgb2YgdGhhdCByYW5nZVxuICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9ICgoZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJhbmdlX3BjdCkgLyAxMDApICogcmVzdF9mYWN0b3I7XG4gICAgICAgICAgICAgICAgLy8gTm8gcmVzdCBsZWZ0IGFzIHRoZSByZXN0IGZpdHMgaW4gY3VycmVudCByYW5nZVxuICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyIC0gcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgIC8vIExpbWl0IHJhbmdlIHRvIGZpcnN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1pbmltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCArIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSBhYnNfZGlzdGFuY2VfY291bnRlciArIHJlbF9yYW5nZV9kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBsYXN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1heGltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCAtIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICByYW5nZV9jb3VudGVyKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdCBvZiByZWxhdGl2ZSBwZXJjZW50dWFsIGRpc3RhbmNlIHN0aWxsIHRvIGJlIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZSArIGFic19kaXN0YW5jZV9jb3VudGVyO1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLnRvU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSB0b1N0ZXBwaW5nKHRoaXMueFZhbCwgdGhpcy54UGN0LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5mcm9tU3RlcHBpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZyb21TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmdldFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBnZXRTdGVwKHRoaXMueFBjdCwgdGhpcy54U3RlcHMsIHRoaXMuc25hcCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0RGVmYXVsdFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUsIGlzRG93biwgc2l6ZSkge1xuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHRoaXMueFBjdCk7XG4gICAgICAgIC8vIFdoZW4gYXQgdGhlIHRvcCBvciBzdGVwcGluZyBkb3duLCBsb29rIGF0IHRoZSBwcmV2aW91cyBzdWItcmFuZ2VcbiAgICAgICAgaWYgKHZhbHVlID09PSAxMDAgfHwgKGlzRG93biAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W2ogLSAxXSkpIHtcbiAgICAgICAgICAgIGogPSBNYXRoLm1heChqIC0gMSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh0aGlzLnhWYWxbal0gLSB0aGlzLnhWYWxbaiAtIDFdKSAvIHNpemU7XG4gICAgfTtcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0TmVhcmJ5U3RlcHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RlcEJlZm9yZToge1xuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMl0sXG4gICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDJdLFxuICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAyXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzU3RlcDoge1xuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMV0sXG4gICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDFdLFxuICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGVwOiB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ogLSAxXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGVwQWZ0ZXI6IHtcbiAgICAgICAgICAgICAgICBzdGFydFZhbHVlOiB0aGlzLnhWYWxbal0sXG4gICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbal0sXG4gICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbal0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmNvdW50U3RlcERlY2ltYWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RlcERlY2ltYWxzID0gdGhpcy54TnVtU3RlcHMubWFwKGNvdW50RGVjaW1hbHMpO1xuICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgc3RlcERlY2ltYWxzKTtcbiAgICB9O1xuICAgIFNwZWN0cnVtLnByb3RvdHlwZS5oYXNOb1NpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnhWYWxbMF0gPT09IHRoaXMueFZhbFt0aGlzLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgfTtcbiAgICAvLyBPdXRzaWRlIHRlc3RpbmdcbiAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGVwKHRoaXMudG9TdGVwcGluZyh2YWx1ZSkpO1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZUVudHJ5UG9pbnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHZhciBwZXJjZW50YWdlO1xuICAgICAgICAvLyBDb3ZlcnQgbWluL21heCBzeW50YXggdG8gMCBhbmQgMTAwLlxuICAgICAgICBpZiAoaW5kZXggPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICBwZXJjZW50YWdlID0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGVyY2VudGFnZSA9IHBhcnNlRmxvYXQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGZvciBjb3JyZWN0IGlucHV0LlxuICAgICAgICBpZiAoIWlzTnVtZXJpYyhwZXJjZW50YWdlKSB8fCAhaXNOdW1lcmljKHZhbHVlWzBdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyB2YWx1ZSBpc24ndCBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdG9yZSB2YWx1ZXMuXG4gICAgICAgIHRoaXMueFBjdC5wdXNoKHBlcmNlbnRhZ2UpO1xuICAgICAgICB0aGlzLnhWYWwucHVzaCh2YWx1ZVswXSk7XG4gICAgICAgIHZhciB2YWx1ZTEgPSBOdW1iZXIodmFsdWVbMV0pO1xuICAgICAgICAvLyBOYU4gd2lsbCBldmFsdWF0ZSB0byBmYWxzZSB0b28sIGJ1dCB0byBrZWVwXG4gICAgICAgIC8vIGxvZ2dpbmcgY2xlYXIsIHNldCBzdGVwIGV4cGxpY2l0bHkuIE1ha2Ugc3VyZVxuICAgICAgICAvLyBub3QgdG8gb3ZlcnJpZGUgdGhlICdzdGVwJyBzZXR0aW5nIHdpdGggZmFsc2UuXG4gICAgICAgIGlmICghcGVyY2VudGFnZSkge1xuICAgICAgICAgICAgaWYgKCFpc05hTih2YWx1ZTEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3RlcHNbMF0gPSB2YWx1ZTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnhTdGVwcy5wdXNoKGlzTmFOKHZhbHVlMSkgPyBmYWxzZSA6IHZhbHVlMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcC5wdXNoKDApO1xuICAgIH07XG4gICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZVN0ZXBQb2ludCA9IGZ1bmN0aW9uIChpLCBuKSB7XG4gICAgICAgIC8vIElnbm9yZSAnZmFsc2UnIHN0ZXBwaW5nLlxuICAgICAgICBpZiAoIW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdGVwIG92ZXIgemVyby1sZW5ndGggcmFuZ2VzICgjOTQ4KTtcbiAgICAgICAgaWYgKHRoaXMueFZhbFtpXSA9PT0gdGhpcy54VmFsW2kgKyAxXSkge1xuICAgICAgICAgICAgdGhpcy54U3RlcHNbaV0gPSB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gdGhpcy54VmFsW2ldO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZhY3RvciB0byByYW5nZSByYXRpb1xuICAgICAgICB0aGlzLnhTdGVwc1tpXSA9XG4gICAgICAgICAgICBmcm9tUGVyY2VudGFnZShbdGhpcy54VmFsW2ldLCB0aGlzLnhWYWxbaSArIDFdXSwgbiwgMCkgLyBzdWJSYW5nZVJhdGlvKHRoaXMueFBjdFtpXSwgdGhpcy54UGN0W2kgKyAxXSk7XG4gICAgICAgIHZhciB0b3RhbFN0ZXBzID0gKHRoaXMueFZhbFtpICsgMV0gLSB0aGlzLnhWYWxbaV0pIC8gdGhpcy54TnVtU3RlcHNbaV07XG4gICAgICAgIHZhciBoaWdoZXN0U3RlcCA9IE1hdGguY2VpbChOdW1iZXIodG90YWxTdGVwcy50b0ZpeGVkKDMpKSAtIDEpO1xuICAgICAgICB2YXIgc3RlcCA9IHRoaXMueFZhbFtpXSArIHRoaXMueE51bVN0ZXBzW2ldICogaGlnaGVzdFN0ZXA7XG4gICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaV0gPSBzdGVwO1xuICAgIH07XG4gICAgcmV0dXJuIFNwZWN0cnVtO1xufSgpKTtcbi8vZW5kcmVnaW9uXG4vL3JlZ2lvbiBPcHRpb25zXG4vKlx0RXZlcnkgaW5wdXQgb3B0aW9uIGlzIHRlc3RlZCBhbmQgcGFyc2VkLiBUaGlzIHdpbGwgcHJldmVudFxuICAgIGVuZGxlc3MgdmFsaWRhdGlvbiBpbiBpbnRlcm5hbCBtZXRob2RzLiBUaGVzZSB0ZXN0cyBhcmVcbiAgICBzdHJ1Y3R1cmVkIHdpdGggYW4gaXRlbSBmb3IgZXZlcnkgb3B0aW9uIGF2YWlsYWJsZS4gQW5cbiAgICBvcHRpb24gY2FuIGJlIG1hcmtlZCBhcyByZXF1aXJlZCBieSBzZXR0aW5nIHRoZSAncicgZmxhZy5cbiAgICBUaGUgdGVzdGluZyBmdW5jdGlvbiBpcyBwcm92aWRlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAgICAgICAgLSBUaGUgcHJvdmlkZWQgdmFsdWUgZm9yIHRoZSBvcHRpb247XG4gICAgICAgIC0gQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgb2JqZWN0O1xuICAgICAgICAtIFRoZSBuYW1lIGZvciB0aGUgb3B0aW9uO1xuXG4gICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSB3aGVuIGFuIGVycm9yIGlzIGRldGVjdGVkLFxuICAgIG9yIHRydWUgd2hlbiBldmVyeXRoaW5nIGlzIE9LLiBJdCBjYW4gYWxzbyBtb2RpZnkgdGhlIG9wdGlvblxuICAgIG9iamVjdCwgdG8gbWFrZSBzdXJlIGFsbCB2YWx1ZXMgY2FuIGJlIGNvcnJlY3RseSBsb29wZWQgZWxzZXdoZXJlLiAqL1xuLy9yZWdpb24gRGVmYXVsdHNcbnZhciBkZWZhdWx0Rm9ybWF0dGVyID0ge1xuICAgIHRvOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBcIlwiIDogdmFsdWUudG9GaXhlZCgyKTtcbiAgICB9LFxuICAgIGZyb206IE51bWJlcixcbn07XG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICB0YXJnZXQ6IFwidGFyZ2V0XCIsXG4gICAgYmFzZTogXCJiYXNlXCIsXG4gICAgb3JpZ2luOiBcIm9yaWdpblwiLFxuICAgIGhhbmRsZTogXCJoYW5kbGVcIixcbiAgICBoYW5kbGVMb3dlcjogXCJoYW5kbGUtbG93ZXJcIixcbiAgICBoYW5kbGVVcHBlcjogXCJoYW5kbGUtdXBwZXJcIixcbiAgICB0b3VjaEFyZWE6IFwidG91Y2gtYXJlYVwiLFxuICAgIGhvcml6b250YWw6IFwiaG9yaXpvbnRhbFwiLFxuICAgIHZlcnRpY2FsOiBcInZlcnRpY2FsXCIsXG4gICAgYmFja2dyb3VuZDogXCJiYWNrZ3JvdW5kXCIsXG4gICAgY29ubmVjdDogXCJjb25uZWN0XCIsXG4gICAgY29ubmVjdHM6IFwiY29ubmVjdHNcIixcbiAgICBsdHI6IFwibHRyXCIsXG4gICAgcnRsOiBcInJ0bFwiLFxuICAgIHRleHREaXJlY3Rpb25MdHI6IFwidHh0LWRpci1sdHJcIixcbiAgICB0ZXh0RGlyZWN0aW9uUnRsOiBcInR4dC1kaXItcnRsXCIsXG4gICAgZHJhZ2dhYmxlOiBcImRyYWdnYWJsZVwiLFxuICAgIGRyYWc6IFwic3RhdGUtZHJhZ1wiLFxuICAgIHRhcDogXCJzdGF0ZS10YXBcIixcbiAgICBhY3RpdmU6IFwiYWN0aXZlXCIsXG4gICAgdG9vbHRpcDogXCJ0b29sdGlwXCIsXG4gICAgcGlwczogXCJwaXBzXCIsXG4gICAgcGlwc0hvcml6b250YWw6IFwicGlwcy1ob3Jpem9udGFsXCIsXG4gICAgcGlwc1ZlcnRpY2FsOiBcInBpcHMtdmVydGljYWxcIixcbiAgICBtYXJrZXI6IFwibWFya2VyXCIsXG4gICAgbWFya2VySG9yaXpvbnRhbDogXCJtYXJrZXItaG9yaXpvbnRhbFwiLFxuICAgIG1hcmtlclZlcnRpY2FsOiBcIm1hcmtlci12ZXJ0aWNhbFwiLFxuICAgIG1hcmtlck5vcm1hbDogXCJtYXJrZXItbm9ybWFsXCIsXG4gICAgbWFya2VyTGFyZ2U6IFwibWFya2VyLWxhcmdlXCIsXG4gICAgbWFya2VyU3ViOiBcIm1hcmtlci1zdWJcIixcbiAgICB2YWx1ZTogXCJ2YWx1ZVwiLFxuICAgIHZhbHVlSG9yaXpvbnRhbDogXCJ2YWx1ZS1ob3Jpem9udGFsXCIsXG4gICAgdmFsdWVWZXJ0aWNhbDogXCJ2YWx1ZS12ZXJ0aWNhbFwiLFxuICAgIHZhbHVlTm9ybWFsOiBcInZhbHVlLW5vcm1hbFwiLFxuICAgIHZhbHVlTGFyZ2U6IFwidmFsdWUtbGFyZ2VcIixcbiAgICB2YWx1ZVN1YjogXCJ2YWx1ZS1zdWJcIixcbn07XG4vLyBOYW1lc3BhY2VzIG9mIGludGVybmFsIGV2ZW50IGxpc3RlbmVyc1xudmFyIElOVEVSTkFMX0VWRU5UX05TID0ge1xuICAgIHRvb2x0aXBzOiBcIi5fX3Rvb2x0aXBzXCIsXG4gICAgYXJpYTogXCIuX19hcmlhXCIsXG59O1xuLy9lbmRyZWdpb25cbmZ1bmN0aW9uIHRlc3RTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3N0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICB9XG4gICAgLy8gVGhlIHN0ZXAgb3B0aW9uIGNhbiBzdGlsbCBiZSB1c2VkIHRvIHNldCBzdGVwcGluZ1xuICAgIC8vIGZvciBsaW5lYXIgc2xpZGVycy4gT3ZlcndyaXR0ZW4gaWYgc2V0IGluICdyYW5nZScuXG4gICAgcGFyc2VkLnNpbmdsZVN0ZXAgPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RLZXlib2FyZFBhZ2VNdWx0aXBsaWVyKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkUGFnZU11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmtleWJvYXJkUGFnZU11bHRpcGxpZXIgPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RLZXlib2FyZE11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5rZXlib2FyZE11bHRpcGxpZXIgPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RLZXlib2FyZERlZmF1bHRTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkRGVmYXVsdFN0ZXAnIGlzIG5vdCBudW1lcmljLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmtleWJvYXJkRGVmYXVsdFN0ZXAgPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RSYW5nZShwYXJzZWQsIGVudHJ5KSB7XG4gICAgLy8gRmlsdGVyIGluY29ycmVjdCBpbnB1dC5cbiAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdyYW5nZScgaXMgbm90IGFuIG9iamVjdC5cIik7XG4gICAgfVxuICAgIC8vIENhdGNoIG1pc3Npbmcgc3RhcnQgb3IgZW5kLlxuICAgIGlmIChlbnRyeS5taW4gPT09IHVuZGVmaW5lZCB8fCBlbnRyeS5tYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBNaXNzaW5nICdtaW4nIG9yICdtYXgnIGluICdyYW5nZScuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQuc3BlY3RydW0gPSBuZXcgU3BlY3RydW0oZW50cnksIHBhcnNlZC5zbmFwIHx8IGZhbHNlLCBwYXJzZWQuc2luZ2xlU3RlcCk7XG59XG5mdW5jdGlvbiB0ZXN0U3RhcnQocGFyc2VkLCBlbnRyeSkge1xuICAgIGVudHJ5ID0gYXNBcnJheShlbnRyeSk7XG4gICAgLy8gVmFsaWRhdGUgaW5wdXQuIFZhbHVlcyBhcmVuJ3QgdGVzdGVkLCBhcyB0aGUgcHVibGljIC52YWwgbWV0aG9kXG4gICAgLy8gd2lsbCBhbHdheXMgcHJvdmlkZSBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RhcnQnIG9wdGlvbiBpcyBpbmNvcnJlY3QuXCIpO1xuICAgIH1cbiAgICAvLyBTdG9yZSB0aGUgbnVtYmVyIG9mIGhhbmRsZXMuXG4gICAgcGFyc2VkLmhhbmRsZXMgPSBlbnRyeS5sZW5ndGg7XG4gICAgLy8gV2hlbiB0aGUgc2xpZGVyIGlzIGluaXRpYWxpemVkLCB0aGUgLnZhbCBtZXRob2Qgd2lsbFxuICAgIC8vIGJlIGNhbGxlZCB3aXRoIHRoZSBzdGFydCBvcHRpb25zLlxuICAgIHBhcnNlZC5zdGFydCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdFNuYXAocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdzbmFwJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgIH1cbiAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICBwYXJzZWQuc25hcCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEFuaW1hdGUocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRlJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgIH1cbiAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICBwYXJzZWQuYW5pbWF0ZSA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdEFuaW1hdGlvbkR1cmF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRpb25EdXJhdGlvbicgb3B0aW9uIG11c3QgYmUgYSBudW1iZXIuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQuYW5pbWF0aW9uRHVyYXRpb24gPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RDb25uZWN0KHBhcnNlZCwgZW50cnkpIHtcbiAgICB2YXIgY29ubmVjdCA9IFtmYWxzZV07XG4gICAgdmFyIGk7XG4gICAgLy8gTWFwIGxlZ2FjeSBvcHRpb25zXG4gICAgaWYgKGVudHJ5ID09PSBcImxvd2VyXCIpIHtcbiAgICAgICAgZW50cnkgPSBbdHJ1ZSwgZmFsc2VdO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbnRyeSA9PT0gXCJ1cHBlclwiKSB7XG4gICAgICAgIGVudHJ5ID0gW2ZhbHNlLCB0cnVlXTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGJvb2xlYW4gb3B0aW9uc1xuICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbm5lY3QucHVzaChlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdC5wdXNoKGZhbHNlKTtcbiAgICB9XG4gICAgLy8gUmVqZWN0IGludmFsaWQgaW5wdXRcbiAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkgfHwgIWVudHJ5Lmxlbmd0aCB8fCBlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzICsgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnY29ubmVjdCcgb3B0aW9uIGRvZXNuJ3QgbWF0Y2ggaGFuZGxlIGNvdW50LlwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbm5lY3QgPSBlbnRyeTtcbiAgICB9XG4gICAgcGFyc2VkLmNvbm5lY3QgPSBjb25uZWN0O1xufVxuZnVuY3Rpb24gdGVzdE9yaWVudGF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAvLyBTZXQgb3JpZW50YXRpb24gdG8gYW4gYSBudW1lcmljYWwgdmFsdWUgZm9yIGVhc3lcbiAgICAvLyBhcnJheSBzZWxlY3Rpb24uXG4gICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICAgICAgcGFyc2VkLm9ydCA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInZlcnRpY2FsXCI6XG4gICAgICAgICAgICBwYXJzZWQub3J0ID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ29yaWVudGF0aW9uJyBvcHRpb24gaXMgaW52YWxpZC5cIik7XG4gICAgfVxufVxuZnVuY3Rpb24gdGVzdE1hcmdpbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdtYXJnaW4nIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgIH1cbiAgICAvLyBJc3N1ZSAjNTgyXG4gICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGFyc2VkLm1hcmdpbiA9IHBhcnNlZC5zcGVjdHJ1bS5nZXREaXN0YW5jZShlbnRyeSk7XG59XG5mdW5jdGlvbiB0ZXN0TGltaXQocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQubGltaXQgPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgIGlmICghcGFyc2VkLmxpbWl0IHx8IHBhcnNlZC5oYW5kbGVzIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBpcyBvbmx5IHN1cHBvcnRlZCBvbiBsaW5lYXIgc2xpZGVycyB3aXRoIDIgb3IgbW9yZSBoYW5kbGVzLlwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0ZXN0UGFkZGluZyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgdmFyIGluZGV4O1xuICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSAmJiAhQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMgb3IgYXJyYXkgb2YgZXhhY3RseSAyIG51bWJlcnMuXCIpO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyeSkgJiYgIShlbnRyeS5sZW5ndGggPT09IDIgfHwgaXNOdW1lcmljKGVudHJ5WzBdKSB8fCBpc051bWVyaWMoZW50cnlbMV0pKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgfVxuICAgIGlmIChlbnRyeSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgZW50cnkgPSBbZW50cnksIGVudHJ5XTtcbiAgICB9XG4gICAgLy8gJ2dldERpc3RhbmNlJyByZXR1cm5zIGZhbHNlIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICBwYXJzZWQucGFkZGluZyA9IFtwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMF0pLCBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMV0pXTtcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBwYXJzZWQuc3BlY3RydW0ueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgLy8gbGFzdCBcInJhbmdlXCIgY2FuJ3QgY29udGFpbiBzdGVwIHNpemUgYXMgaXQgaXMgcHVyZWx5IGFuIGVuZHBvaW50LlxuICAgICAgICBpZiAocGFyc2VkLnBhZGRpbmdbMF1baW5kZXhdIDwgMCB8fCBwYXJzZWQucGFkZGluZ1sxXVtpbmRleF0gPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIocykuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciB0b3RhbFBhZGRpbmcgPSBlbnRyeVswXSArIGVudHJ5WzFdO1xuICAgIHZhciBmaXJzdFZhbHVlID0gcGFyc2VkLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgdmFyIGxhc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsW3BhcnNlZC5zcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgIGlmICh0b3RhbFBhZGRpbmcgLyAobGFzdFZhbHVlIC0gZmlyc3RWYWx1ZSkgPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBub3QgZXhjZWVkIDEwMCUgb2YgdGhlIHJhbmdlLlwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0ZXN0RGlyZWN0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAvLyBTZXQgZGlyZWN0aW9uIGFzIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5IHBhcnNpbmcuXG4gICAgLy8gSW52ZXJ0IGNvbm5lY3Rpb24gZm9yIFJUTCBzbGlkZXJzLCBzbyB0aGF0IHRoZSBwcm9wZXJcbiAgICAvLyBoYW5kbGVzIGdldCB0aGUgY29ubmVjdC9iYWNrZ3JvdW5kIGNsYXNzZXMuXG4gICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICBjYXNlIFwibHRyXCI6XG4gICAgICAgICAgICBwYXJzZWQuZGlyID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicnRsXCI6XG4gICAgICAgICAgICBwYXJzZWQuZGlyID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2RpcmVjdGlvbicgb3B0aW9uIHdhcyBub3QgcmVjb2duaXplZC5cIik7XG4gICAgfVxufVxuZnVuY3Rpb24gdGVzdEJlaGF2aW91cihwYXJzZWQsIGVudHJ5KSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBpbnB1dCBpcyBhIHN0cmluZy5cbiAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdiZWhhdmlvdXInIG11c3QgYmUgYSBzdHJpbmcgY29udGFpbmluZyBvcHRpb25zLlwiKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHN0cmluZyBjb250YWlucyBhbnkga2V5d29yZHMuXG4gICAgLy8gTm9uZSBhcmUgcmVxdWlyZWQuXG4gICAgdmFyIHRhcCA9IGVudHJ5LmluZGV4T2YoXCJ0YXBcIikgPj0gMDtcbiAgICB2YXIgZHJhZyA9IGVudHJ5LmluZGV4T2YoXCJkcmFnXCIpID49IDA7XG4gICAgdmFyIGZpeGVkID0gZW50cnkuaW5kZXhPZihcImZpeGVkXCIpID49IDA7XG4gICAgdmFyIHNuYXAgPSBlbnRyeS5pbmRleE9mKFwic25hcFwiKSA+PSAwO1xuICAgIHZhciBob3ZlciA9IGVudHJ5LmluZGV4T2YoXCJob3ZlclwiKSA+PSAwO1xuICAgIHZhciB1bmNvbnN0cmFpbmVkID0gZW50cnkuaW5kZXhPZihcInVuY29uc3RyYWluZWRcIikgPj0gMDtcbiAgICB2YXIgaW52ZXJ0Q29ubmVjdHMgPSBlbnRyeS5pbmRleE9mKFwiaW52ZXJ0LWNvbm5lY3RzXCIpID49IDA7XG4gICAgdmFyIGRyYWdBbGwgPSBlbnRyeS5pbmRleE9mKFwiZHJhZy1hbGxcIikgPj0gMDtcbiAgICB2YXIgc21vb3RoU3RlcHMgPSBlbnRyeS5pbmRleE9mKFwic21vb3RoLXN0ZXBzXCIpID49IDA7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICAgIGlmIChwYXJzZWQuaGFuZGxlcyAhPT0gMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2ZpeGVkJyBiZWhhdmlvdXIgbXVzdCBiZSB1c2VkIHdpdGggMiBoYW5kbGVzXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVzZSBtYXJnaW4gdG8gZW5mb3JjZSBmaXhlZCBzdGF0ZVxuICAgICAgICB0ZXN0TWFyZ2luKHBhcnNlZCwgcGFyc2VkLnN0YXJ0WzFdIC0gcGFyc2VkLnN0YXJ0WzBdKTtcbiAgICB9XG4gICAgaWYgKGludmVydENvbm5lY3RzICYmIHBhcnNlZC5oYW5kbGVzICE9PSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdpbnZlcnQtY29ubmVjdHMnIGJlaGF2aW91ciBtdXN0IGJlIHVzZWQgd2l0aCAyIGhhbmRsZXNcIik7XG4gICAgfVxuICAgIGlmICh1bmNvbnN0cmFpbmVkICYmIChwYXJzZWQubWFyZ2luIHx8IHBhcnNlZC5saW1pdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3VuY29uc3RyYWluZWQnIGJlaGF2aW91ciBjYW5ub3QgYmUgdXNlZCB3aXRoIG1hcmdpbiBvciBsaW1pdFwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmV2ZW50cyA9IHtcbiAgICAgICAgdGFwOiB0YXAgfHwgc25hcCxcbiAgICAgICAgZHJhZzogZHJhZyxcbiAgICAgICAgZHJhZ0FsbDogZHJhZ0FsbCxcbiAgICAgICAgc21vb3RoU3RlcHM6IHNtb290aFN0ZXBzLFxuICAgICAgICBmaXhlZDogZml4ZWQsXG4gICAgICAgIHNuYXA6IHNuYXAsXG4gICAgICAgIGhvdmVyOiBob3ZlcixcbiAgICAgICAgdW5jb25zdHJhaW5lZDogdW5jb25zdHJhaW5lZCxcbiAgICAgICAgaW52ZXJ0Q29ubmVjdHM6IGludmVydENvbm5lY3RzLFxuICAgIH07XG59XG5mdW5jdGlvbiB0ZXN0VG9vbHRpcHMocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmIChlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZW50cnkgPT09IHRydWUgfHwgaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgIHBhcnNlZC50b29sdGlwcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IG11c3QgcGFzcyBhIGZvcm1hdHRlciBmb3IgYWxsIGhhbmRsZXMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVudHJ5LmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXR0ZXIgIT09IFwiYm9vbGVhblwiICYmICFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihmb3JtYXR0ZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3Rvb2x0aXBzJyBtdXN0IGJlIHBhc3NlZCBhIGZvcm1hdHRlciBvciAnZmFsc2UnLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHBhcnNlZC50b29sdGlwcyA9IGVudHJ5O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRlc3RIYW5kbGVBdHRyaWJ1dGVzKHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAoZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBtdXN0IHBhc3MgYSBhdHRyaWJ1dGVzIGZvciBhbGwgaGFuZGxlcy5cIik7XG4gICAgfVxuICAgIHBhcnNlZC5oYW5kbGVBdHRyaWJ1dGVzID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0QXJpYUZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKCFpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FyaWFGb3JtYXQnIHJlcXVpcmVzICd0bycgbWV0aG9kLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmFyaWFGb3JtYXQgPSBlbnRyeTtcbn1cbmZ1bmN0aW9uIHRlc3RGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICghaXNWYWxpZEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Zvcm1hdCcgcmVxdWlyZXMgJ3RvJyBhbmQgJ2Zyb20nIG1ldGhvZHMuXCIpO1xuICAgIH1cbiAgICBwYXJzZWQuZm9ybWF0ID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0S2V5Ym9hcmRTdXBwb3J0KHBhcnNlZCwgZW50cnkpIHtcbiAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAna2V5Ym9hcmRTdXBwb3J0JyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpO1xuICAgIH1cbiAgICBwYXJzZWQua2V5Ym9hcmRTdXBwb3J0ID0gZW50cnk7XG59XG5mdW5jdGlvbiB0ZXN0RG9jdW1lbnRFbGVtZW50KHBhcnNlZCwgZW50cnkpIHtcbiAgICAvLyBUaGlzIGlzIGFuIGFkdmFuY2VkIG9wdGlvbi4gUGFzc2VkIHZhbHVlcyBhcmUgdXNlZCB3aXRob3V0IHZhbGlkYXRpb24uXG4gICAgcGFyc2VkLmRvY3VtZW50RWxlbWVudCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdENzc1ByZWZpeChwYXJzZWQsIGVudHJ5KSB7XG4gICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIiAmJiBlbnRyeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc1ByZWZpeCcgbXVzdCBiZSBhIHN0cmluZyBvciBgZmFsc2VgLlwiKTtcbiAgICB9XG4gICAgcGFyc2VkLmNzc1ByZWZpeCA9IGVudHJ5O1xufVxuZnVuY3Rpb24gdGVzdENzc0NsYXNzZXMocGFyc2VkLCBlbnRyeSkge1xuICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc0NsYXNzZXMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwYXJzZWQuY3NzUHJlZml4ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzW2tleV0gPSBwYXJzZWQuY3NzUHJlZml4ICsgZW50cnlba2V5XTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IGVudHJ5O1xuICAgIH1cbn1cbi8vIFRlc3QgYWxsIGRldmVsb3BlciBzZXR0aW5ncyBhbmQgcGFyc2UgdG8gYXNzdW1wdGlvbi1zYWZlIHZhbHVlcy5cbmZ1bmN0aW9uIHRlc3RPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAvLyBUbyBwcm92ZSBhIGZpeCBmb3IgIzUzNywgZnJlZXplIG9wdGlvbnMgaGVyZS5cbiAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIG1vZGlmaWVkLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAgICAvLyBPYmplY3QuZnJlZXplKG9wdGlvbnMpO1xuICAgIHZhciBwYXJzZWQgPSB7XG4gICAgICAgIG1hcmdpbjogbnVsbCxcbiAgICAgICAgbGltaXQ6IG51bGwsXG4gICAgICAgIHBhZGRpbmc6IG51bGwsXG4gICAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzMDAsXG4gICAgICAgIGFyaWFGb3JtYXQ6IGRlZmF1bHRGb3JtYXR0ZXIsXG4gICAgICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdHRlcixcbiAgICB9O1xuICAgIC8vIFRlc3RzIGFyZSBleGVjdXRlZCBpbiB0aGUgb3JkZXIgdGhleSBhcmUgcHJlc2VudGVkIGhlcmUuXG4gICAgdmFyIHRlc3RzID0ge1xuICAgICAgICBzdGVwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U3RlcCB9LFxuICAgICAgICBrZXlib2FyZFBhZ2VNdWx0aXBsaWVyOiB7IHI6IGZhbHNlLCB0OiB0ZXN0S2V5Ym9hcmRQYWdlTXVsdGlwbGllciB9LFxuICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZE11bHRpcGxpZXIgfSxcbiAgICAgICAga2V5Ym9hcmREZWZhdWx0U3RlcDogeyByOiBmYWxzZSwgdDogdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAgfSxcbiAgICAgICAgc3RhcnQ6IHsgcjogdHJ1ZSwgdDogdGVzdFN0YXJ0IH0sXG4gICAgICAgIGNvbm5lY3Q6IHsgcjogdHJ1ZSwgdDogdGVzdENvbm5lY3QgfSxcbiAgICAgICAgZGlyZWN0aW9uOiB7IHI6IHRydWUsIHQ6IHRlc3REaXJlY3Rpb24gfSxcbiAgICAgICAgc25hcDogeyByOiBmYWxzZSwgdDogdGVzdFNuYXAgfSxcbiAgICAgICAgYW5pbWF0ZTogeyByOiBmYWxzZSwgdDogdGVzdEFuaW1hdGUgfSxcbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RBbmltYXRpb25EdXJhdGlvbiB9LFxuICAgICAgICByYW5nZTogeyByOiB0cnVlLCB0OiB0ZXN0UmFuZ2UgfSxcbiAgICAgICAgb3JpZW50YXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RPcmllbnRhdGlvbiB9LFxuICAgICAgICBtYXJnaW46IHsgcjogZmFsc2UsIHQ6IHRlc3RNYXJnaW4gfSxcbiAgICAgICAgbGltaXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RMaW1pdCB9LFxuICAgICAgICBwYWRkaW5nOiB7IHI6IGZhbHNlLCB0OiB0ZXN0UGFkZGluZyB9LFxuICAgICAgICBiZWhhdmlvdXI6IHsgcjogdHJ1ZSwgdDogdGVzdEJlaGF2aW91ciB9LFxuICAgICAgICBhcmlhRm9ybWF0OiB7IHI6IGZhbHNlLCB0OiB0ZXN0QXJpYUZvcm1hdCB9LFxuICAgICAgICBmb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RGb3JtYXQgfSxcbiAgICAgICAgdG9vbHRpcHM6IHsgcjogZmFsc2UsIHQ6IHRlc3RUb29sdGlwcyB9LFxuICAgICAgICBrZXlib2FyZFN1cHBvcnQ6IHsgcjogdHJ1ZSwgdDogdGVzdEtleWJvYXJkU3VwcG9ydCB9LFxuICAgICAgICBkb2N1bWVudEVsZW1lbnQ6IHsgcjogZmFsc2UsIHQ6IHRlc3REb2N1bWVudEVsZW1lbnQgfSxcbiAgICAgICAgY3NzUHJlZml4OiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NQcmVmaXggfSxcbiAgICAgICAgY3NzQ2xhc3NlczogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzQ2xhc3NlcyB9LFxuICAgICAgICBoYW5kbGVBdHRyaWJ1dGVzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0SGFuZGxlQXR0cmlidXRlcyB9LFxuICAgIH07XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBjb25uZWN0OiBmYWxzZSxcbiAgICAgICAgZGlyZWN0aW9uOiBcImx0clwiLFxuICAgICAgICBiZWhhdmlvdXI6IFwidGFwXCIsXG4gICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAga2V5Ym9hcmRTdXBwb3J0OiB0cnVlLFxuICAgICAgICBjc3NQcmVmaXg6IFwibm9VaS1cIixcbiAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAga2V5Ym9hcmRQYWdlTXVsdGlwbGllcjogNSxcbiAgICAgICAga2V5Ym9hcmRNdWx0aXBsaWVyOiAxLFxuICAgICAgICBrZXlib2FyZERlZmF1bHRTdGVwOiAxMCxcbiAgICB9O1xuICAgIC8vIEFyaWFGb3JtYXQgZGVmYXVsdHMgdG8gcmVndWxhciBmb3JtYXQsIGlmIGFueS5cbiAgICBpZiAob3B0aW9ucy5mb3JtYXQgJiYgIW9wdGlvbnMuYXJpYUZvcm1hdCkge1xuICAgICAgICBvcHRpb25zLmFyaWFGb3JtYXQgPSBvcHRpb25zLmZvcm1hdDtcbiAgICB9XG4gICAgLy8gUnVuIGFsbCBvcHRpb25zIHRocm91Z2ggYSB0ZXN0aW5nIG1lY2hhbmlzbSB0byBlbnN1cmUgY29ycmVjdFxuICAgIC8vIGlucHV0LiBJdCBzaG91bGQgYmUgbm90ZWQgdGhhdCBvcHRpb25zIG1pZ2h0IGdldCBtb2RpZmllZCB0b1xuICAgIC8vIGJlIGhhbmRsZWQgcHJvcGVybHkuIEUuZy4gd3JhcHBpbmcgaW50ZWdlcnMgaW4gYXJyYXlzLlxuICAgIE9iamVjdC5rZXlzKHRlc3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIC8vIElmIHRoZSBvcHRpb24gaXNuJ3Qgc2V0LCBidXQgaXQgaXMgcmVxdWlyZWQsIHRocm93IGFuIGVycm9yLlxuICAgICAgICBpZiAoIWlzU2V0KG9wdGlvbnNbbmFtZV0pICYmIGRlZmF1bHRzW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0ZXN0c1tuYW1lXS5yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ1wiICsgbmFtZSArIFwiJyBpcyByZXF1aXJlZC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGVzdHNbbmFtZV0udChwYXJzZWQsICFpc1NldChvcHRpb25zW25hbWVdKSA/IGRlZmF1bHRzW25hbWVdIDogb3B0aW9uc1tuYW1lXSk7XG4gICAgfSk7XG4gICAgLy8gRm9yd2FyZCBwaXBzIG9wdGlvbnNcbiAgICBwYXJzZWQucGlwcyA9IG9wdGlvbnMucGlwcztcbiAgICAvLyBBbGwgcmVjZW50IGJyb3dzZXJzIGFjY2VwdCB1bnByZWZpeGVkIHRyYW5zZm9ybS5cbiAgICAvLyBXZSBuZWVkIC1tcy0gZm9yIElFOSBhbmQgLXdlYmtpdC0gZm9yIG9sZGVyIEFuZHJvaWQ7XG4gICAgLy8gQXNzdW1lIHVzZSBvZiAtd2Via2l0LSBpZiB1bnByZWZpeGVkIGFuZCAtbXMtIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9dHJhbnNmb3JtczJkXG4gICAgdmFyIGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZhciBtc1ByZWZpeCA9IGQuc3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgbm9QcmVmaXggPSBkLnN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgIHBhcnNlZC50cmFuc2Zvcm1SdWxlID0gbm9QcmVmaXggPyBcInRyYW5zZm9ybVwiIDogbXNQcmVmaXggPyBcIm1zVHJhbnNmb3JtXCIgOiBcIndlYmtpdFRyYW5zZm9ybVwiO1xuICAgIC8vIFBpcHMgZG9uJ3QgbW92ZSwgc28gd2UgY2FuIHBsYWNlIHRoZW0gdXNpbmcgbGVmdC90b3AuXG4gICAgdmFyIHN0eWxlcyA9IFtcbiAgICAgICAgW1wibGVmdFwiLCBcInRvcFwiXSxcbiAgICAgICAgW1wicmlnaHRcIiwgXCJib3R0b21cIl0sXG4gICAgXTtcbiAgICBwYXJzZWQuc3R5bGUgPSBzdHlsZXNbcGFyc2VkLmRpcl1bcGFyc2VkLm9ydF07XG4gICAgcmV0dXJuIHBhcnNlZDtcbn1cbi8vZW5kcmVnaW9uXG5mdW5jdGlvbiBzY29wZSh0YXJnZXQsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucykge1xuICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgIHZhciBzdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSA9IGdldFN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lKCk7XG4gICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IHN1cHBvcnRzVG91Y2hBY3Rpb25Ob25lICYmIGdldFN1cHBvcnRzUGFzc2l2ZSgpO1xuICAgIC8vIEFsbCB2YXJpYWJsZXMgbG9jYWwgdG8gJ3Njb3BlJyBhcmUgcHJlZml4ZWQgd2l0aCAnc2NvcGVfJ1xuICAgIC8vIFNsaWRlciBET00gTm9kZXNcbiAgICB2YXIgc2NvcGVfVGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHZhciBzY29wZV9CYXNlO1xuICAgIHZhciBzY29wZV9Db25uZWN0QmFzZTtcbiAgICB2YXIgc2NvcGVfSGFuZGxlcztcbiAgICB2YXIgc2NvcGVfQ29ubmVjdHM7XG4gICAgdmFyIHNjb3BlX1BpcHM7XG4gICAgdmFyIHNjb3BlX1Rvb2x0aXBzO1xuICAgIC8vIFNsaWRlciBzdGF0ZSB2YWx1ZXNcbiAgICB2YXIgc2NvcGVfU3BlY3RydW0gPSBvcHRpb25zLnNwZWN0cnVtO1xuICAgIHZhciBzY29wZV9WYWx1ZXMgPSBbXTtcbiAgICB2YXIgc2NvcGVfTG9jYXRpb25zID0gW107XG4gICAgdmFyIHNjb3BlX0hhbmRsZU51bWJlcnMgPSBbXTtcbiAgICB2YXIgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID0gMDtcbiAgICB2YXIgc2NvcGVfRXZlbnRzID0ge307XG4gICAgdmFyIHNjb3BlX0Nvbm5lY3RzSW52ZXJ0ZWQgPSBmYWxzZTtcbiAgICAvLyBEb2N1bWVudCBOb2Rlc1xuICAgIHZhciBzY29wZV9Eb2N1bWVudCA9IHRhcmdldC5vd25lckRvY3VtZW50O1xuICAgIHZhciBzY29wZV9Eb2N1bWVudEVsZW1lbnQgPSBvcHRpb25zLmRvY3VtZW50RWxlbWVudCB8fCBzY29wZV9Eb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIHNjb3BlX0JvZHkgPSBzY29wZV9Eb2N1bWVudC5ib2R5O1xuICAgIC8vIEZvciBob3Jpem9udGFsIHNsaWRlcnMgaW4gc3RhbmRhcmQgbHRyIGRvY3VtZW50cyxcbiAgICAvLyBtYWtlIC5ub1VpLW9yaWdpbiBvdmVyZmxvdyB0byB0aGUgbGVmdCBzbyB0aGUgZG9jdW1lbnQgZG9lc24ndCBzY3JvbGwuXG4gICAgdmFyIHNjb3BlX0Rpck9mZnNldCA9IHNjb3BlX0RvY3VtZW50LmRpciA9PT0gXCJydGxcIiB8fCBvcHRpb25zLm9ydCA9PT0gMSA/IDAgOiAxMDA7XG4gICAgLy8gQ3JlYXRlcyBhIG5vZGUsIGFkZHMgaXQgdG8gdGFyZ2V0LCByZXR1cm5zIHRoZSBuZXcgbm9kZS5cbiAgICBmdW5jdGlvbiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBjbGFzc05hbWUpIHtcbiAgICAgICAgdmFyIGRpdiA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGRpdiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRUYXJnZXQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG4gICAgLy8gQXBwZW5kIGEgb3JpZ2luIHRvIHRoZSBiYXNlXG4gICAgZnVuY3Rpb24gYWRkT3JpZ2luKGJhc2UsIGhhbmRsZU51bWJlcikge1xuICAgICAgICB2YXIgb3JpZ2luID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5vcmlnaW4pO1xuICAgICAgICB2YXIgaGFuZGxlID0gYWRkTm9kZVRvKG9yaWdpbiwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZSk7XG4gICAgICAgIGFkZE5vZGVUbyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50b3VjaEFyZWEpO1xuICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVcIiwgU3RyaW5nKGhhbmRsZU51bWJlcikpO1xuICAgICAgICBpZiAob3B0aW9ucy5rZXlib2FyZFN1cHBvcnQpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvR2xvYmFsX2F0dHJpYnV0ZXMvdGFiaW5kZXhcbiAgICAgICAgICAgIC8vIDAgPSBmb2N1c2FibGUgYW5kIHJlYWNoYWJsZVxuICAgICAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlc18xID0gb3B0aW9ucy5oYW5kbGVBdHRyaWJ1dGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzXzEpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzXzFbYXR0cmlidXRlXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInNsaWRlclwiKTtcbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcImFyaWEtb3JpZW50YXRpb25cIiwgb3B0aW9ucy5vcnQgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIik7XG4gICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZUxvd2VyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoYW5kbGVOdW1iZXIgPT09IG9wdGlvbnMuaGFuZGxlcyAtIDEpIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZVVwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW4uaGFuZGxlID0gaGFuZGxlO1xuICAgICAgICByZXR1cm4gb3JpZ2luO1xuICAgIH1cbiAgICAvLyBJbnNlcnQgbm9kZXMgZm9yIGNvbm5lY3QgZWxlbWVudHNcbiAgICBmdW5jdGlvbiBhZGRDb25uZWN0KGJhc2UsIGFkZCkge1xuICAgICAgICBpZiAoIWFkZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3QpO1xuICAgIH1cbiAgICAvLyBBZGQgaGFuZGxlcyB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgZnVuY3Rpb24gYWRkRWxlbWVudHMoY29ubmVjdE9wdGlvbnMsIGJhc2UpIHtcbiAgICAgICAgc2NvcGVfQ29ubmVjdEJhc2UgPSBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3RzKTtcbiAgICAgICAgc2NvcGVfSGFuZGxlcyA9IFtdO1xuICAgICAgICBzY29wZV9Db25uZWN0cyA9IFtdO1xuICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3Qoc2NvcGVfQ29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zWzBdKSk7XG4gICAgICAgIC8vIFs6Ojo6Tz09PT1PPT09PU89PT09XVxuICAgICAgICAvLyBjb25uZWN0T3B0aW9ucyA9IFswLCAxLCAxLCAxXVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBLZWVwIGEgbGlzdCBvZiBhbGwgYWRkZWQgaGFuZGxlcy5cbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMucHVzaChhZGRPcmlnaW4oYmFzZSwgaSkpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVyc1tpXSA9IGk7XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3Qoc2NvcGVfQ29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zW2kgKyAxXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgYSBzaW5nbGUgc2xpZGVyLlxuICAgIGZ1bmN0aW9uIGFkZFNsaWRlcihhZGRUYXJnZXQpIHtcbiAgICAgICAgLy8gQXBwbHkgY2xhc3NlcyBhbmQgZGF0YSB0byB0aGUgdGFyZ2V0LlxuICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXJnZXQpO1xuICAgICAgICBpZiAob3B0aW9ucy5kaXIgPT09IDApIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmx0cik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ydGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLm9ydCA9PT0gMCkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuaG9yaXpvbnRhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy52ZXJ0aWNhbCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRleHREaXJlY3Rpb24gPSBnZXRDb21wdXRlZFN0eWxlKGFkZFRhcmdldCkuZGlyZWN0aW9uO1xuICAgICAgICBpZiAodGV4dERpcmVjdGlvbiA9PT0gXCJydGxcIikge1xuICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGV4dERpcmVjdGlvblJ0bCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uTHRyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmJhc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRUb29sdGlwKGhhbmRsZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy50b29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFkZE5vZGVUbyhoYW5kbGUuZmlyc3RDaGlsZCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvb2x0aXApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1NsaWRlckRpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gc2NvcGVfVGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIH1cbiAgICAvLyBEaXNhYmxlIHRoZSBzbGlkZXIgZHJhZ2dpbmcgaWYgYW55IGhhbmRsZSBpcyBkaXNhYmxlZFxuICAgIGZ1bmN0aW9uIGlzSGFuZGxlRGlzYWJsZWQoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgIHJldHVybiBoYW5kbGVPcmlnaW4uaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc2FibGUoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgIGlmIChoYW5kbGVOdW1iZXIgIT09IG51bGwgJiYgaGFuZGxlTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5oYW5kbGUucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY29wZV9UYXJnZXQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZS5oYW5kbGUucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBlbmFibGUoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgIGlmIChoYW5kbGVOdW1iZXIgIT09IG51bGwgJiYgaGFuZGxlTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXNbaGFuZGxlTnVtYmVyXS5oYW5kbGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2NvcGVfVGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGUucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVUb29sdGlwcygpIHtcbiAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzKSB7XG4gICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMuZm9yRWFjaChmdW5jdGlvbiAodG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQodG9vbHRpcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY29wZV9Ub29sdGlwcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGhlIHRvb2x0aXBzIG9wdGlvbiBpcyBhIHNob3J0aGFuZCBmb3IgdXNpbmcgdGhlICd1cGRhdGUnIGV2ZW50LlxuICAgIGZ1bmN0aW9uIHRvb2x0aXBzKCkge1xuICAgICAgICByZW1vdmVUb29sdGlwcygpO1xuICAgICAgICAvLyBUb29sdGlwcyBhcmUgYWRkZWQgd2l0aCBvcHRpb25zLnRvb2x0aXBzIGluIG9yaWdpbmFsIG9yZGVyLlxuICAgICAgICBzY29wZV9Ub29sdGlwcyA9IHNjb3BlX0hhbmRsZXMubWFwKGFkZFRvb2x0aXApO1xuICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgaWYgKCFzY29wZV9Ub29sdGlwcyB8fCAhb3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzY29wZV9Ub29sdGlwc1toYW5kbGVOdW1iZXJdID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHNbaGFuZGxlTnVtYmVyXSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdLnRvKHVuZW5jb2RlZFtoYW5kbGVOdW1iZXJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzW2hhbmRsZU51bWJlcl0uaW5uZXJIVE1MID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhcmlhKCkge1xuICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgIGJpbmRFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSwgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlTnVtYmVyLCB1bmVuY29kZWQsIHRhcCwgcG9zaXRpb25zKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgQXJpYSBWYWx1ZXMgZm9yIGFsbCBoYW5kbGVzLCBhcyBhIGNoYW5nZSBpbiBvbmUgY2hhbmdlcyBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIHRoZSBuZXh0LlxuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgbWluID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAwLCB0cnVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgbWF4ID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAxMDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIC8vIEZvcm1hdHRlZCB2YWx1ZSBmb3IgZGlzcGxheVxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gU3RyaW5nKG9wdGlvbnMuYXJpYUZvcm1hdC50byh1bmVuY29kZWRbaW5kZXhdKSk7XG4gICAgICAgICAgICAgICAgLy8gTWFwIHRvIHNsaWRlciByYW5nZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICBtaW4gPSBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcobWluKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgIG1heCA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtYXgpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgbm93ID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKG5vdykudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZW1pblwiLCBtaW4pO1xuICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWF4XCIsIG1heCk7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVub3dcIiwgbm93KTtcbiAgICAgICAgICAgICAgICBoYW5kbGUuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIiwgdGV4dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEdyb3VwKHBpcHMpIHtcbiAgICAgICAgLy8gVXNlIHRoZSByYW5nZS5cbiAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gUGlwc01vZGUuUmFuZ2UgfHwgcGlwcy5tb2RlID09PSBQaXBzTW9kZS5TdGVwcykge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLnhWYWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gUGlwc01vZGUuQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChwaXBzLnZhbHVlcyA8IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndmFsdWVzJyAoPj0gMikgcmVxdWlyZWQgZm9yIG1vZGUgJ2NvdW50Jy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEaXZpZGUgMCAtIDEwMCBpbiAnY291bnQnIHBhcnRzLlxuICAgICAgICAgICAgdmFyIGludGVydmFsID0gcGlwcy52YWx1ZXMgLSAxO1xuICAgICAgICAgICAgdmFyIHNwcmVhZCA9IDEwMCAvIGludGVydmFsO1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgLy8gTGlzdCB0aGVzZSBwYXJ0cyBhbmQgaGF2ZSB0aGVtIGhhbmRsZWQgYXMgJ3Bvc2l0aW9ucycuXG4gICAgICAgICAgICB3aGlsZSAoaW50ZXJ2YWwtLSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1tpbnRlcnZhbF0gPSBpbnRlcnZhbCAqIHNwcmVhZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKDEwMCk7XG4gICAgICAgICAgICByZXR1cm4gbWFwVG9SYW5nZSh2YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gUGlwc01vZGUuUG9zaXRpb25zKSB7XG4gICAgICAgICAgICAvLyBNYXAgYWxsIHBlcmNlbnRhZ2VzIHRvIG9uLXJhbmdlIHZhbHVlcy5cbiAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHBpcHMudmFsdWVzLCBwaXBzLnN0ZXBwZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwaXBzLm1vZGUgPT09IFBpcHNNb2RlLlZhbHVlcykge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIG11c3QgYmUgc3RlcHBlZCwgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIGEgcGVyY2VudGFnZSBmaXJzdC5cbiAgICAgICAgICAgIGlmIChwaXBzLnN0ZXBwZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRvIHBlcmNlbnRhZ2UsIGFwcGx5IHN0ZXAsIHJldHVybiB0byB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodmFsdWUpKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGNhbiBzaW1wbHkgdXNlIHRoZSB2YWx1ZXMuXG4gICAgICAgICAgICByZXR1cm4gcGlwcy52YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdOyAvLyBwaXBzLm1vZGUgPSBuZXZlclxuICAgIH1cbiAgICBmdW5jdGlvbiBtYXBUb1JhbmdlKHZhbHVlcywgc3RlcHBlZCkge1xuICAgICAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcoc3RlcHBlZCA/IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAodmFsdWUpIDogdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVTcHJlYWQocGlwcykge1xuICAgICAgICBmdW5jdGlvbiBzYWZlSW5jcmVtZW50KHZhbHVlLCBpbmNyZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIGZsb2F0aW5nIHBvaW50IHZhcmlhbmNlIGJ5IGRyb3BwaW5nIHRoZSBzbWFsbGVzdCBkZWNpbWFsIHBsYWNlcy5cbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoKHZhbHVlICsgaW5jcmVtZW50KS50b0ZpeGVkKDcpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZ3JvdXAgPSBnZXRHcm91cChwaXBzKTtcbiAgICAgICAgdmFyIGluZGV4ZXMgPSB7fTtcbiAgICAgICAgdmFyIGZpcnN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgIHZhciBsYXN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbc2NvcGVfU3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlnbm9yZUZpcnN0ID0gZmFsc2U7XG4gICAgICAgIHZhciBpZ25vcmVMYXN0ID0gZmFsc2U7XG4gICAgICAgIHZhciBwcmV2UGN0ID0gMDtcbiAgICAgICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZ3JvdXAsIHNvcnQgaXQgYW5kIGZpbHRlciBhd2F5IGFsbCBkdXBsaWNhdGVzLlxuICAgICAgICBncm91cCA9IHVuaXF1ZShncm91cC5zbGljZSgpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSkpO1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHJhbmdlIHN0YXJ0cyB3aXRoIHRoZSBmaXJzdCBlbGVtZW50LlxuICAgICAgICBpZiAoZ3JvdXBbMF0gIT09IGZpcnN0SW5SYW5nZSkge1xuICAgICAgICAgICAgZ3JvdXAudW5zaGlmdChmaXJzdEluUmFuZ2UpO1xuICAgICAgICAgICAgaWdub3JlRmlyc3QgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIExpa2V3aXNlIGZvciB0aGUgbGFzdCBvbmUuXG4gICAgICAgIGlmIChncm91cFtncm91cC5sZW5ndGggLSAxXSAhPT0gbGFzdEluUmFuZ2UpIHtcbiAgICAgICAgICAgIGdyb3VwLnB1c2gobGFzdEluUmFuZ2UpO1xuICAgICAgICAgICAgaWdub3JlTGFzdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGVwIGFuZCB0aGUgbG93ZXIgKyB1cHBlciBwb3NpdGlvbnMuXG4gICAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIHE7XG4gICAgICAgICAgICB2YXIgbG93ID0gY3VycmVudDtcbiAgICAgICAgICAgIHZhciBoaWdoID0gZ3JvdXBbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIHZhciBuZXdQY3Q7XG4gICAgICAgICAgICB2YXIgcGN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIHZhciBwY3RQb3M7XG4gICAgICAgICAgICB2YXIgdHlwZTtcbiAgICAgICAgICAgIHZhciBzdGVwcztcbiAgICAgICAgICAgIHZhciByZWFsU3RlcHM7XG4gICAgICAgICAgICB2YXIgc3RlcFNpemU7XG4gICAgICAgICAgICB2YXIgaXNTdGVwcyA9IHBpcHMubW9kZSA9PT0gUGlwc01vZGUuU3RlcHM7XG4gICAgICAgICAgICAvLyBXaGVuIHVzaW5nICdzdGVwcycgbW9kZSwgdXNlIHRoZSBwcm92aWRlZCBzdGVwcy5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UnbGwgc3RlcCBvbiB0byB0aGUgbmV4dCBzdWJyYW5nZS5cbiAgICAgICAgICAgIGlmIChpc1N0ZXBzKSB7XG4gICAgICAgICAgICAgICAgc3RlcCA9IHNjb3BlX1NwZWN0cnVtLnhOdW1TdGVwc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGEgJ2Z1bGwnIHN0ZXAuXG4gICAgICAgICAgICBpZiAoIXN0ZXApIHtcbiAgICAgICAgICAgICAgICBzdGVwID0gaGlnaCAtIGxvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGhpZ2ggaXMgdW5kZWZpbmVkIHdlIGFyZSBhdCB0aGUgbGFzdCBzdWJyYW5nZS4gTWFrZSBzdXJlIGl0IGl0ZXJhdGVzIG9uY2UgKCMxMDg4KVxuICAgICAgICAgICAgaWYgKGhpZ2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGhpZ2ggPSBsb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgc3RlcCBpc24ndCAwLCB3aGljaCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wICgjNjU0KVxuICAgICAgICAgICAgc3RlcCA9IE1hdGgubWF4KHN0ZXAsIDAuMDAwMDAwMSk7XG4gICAgICAgICAgICAvLyBGaW5kIGFsbCBzdGVwcyBpbiB0aGUgc3VicmFuZ2UuXG4gICAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gaGlnaDsgaSA9IHNhZmVJbmNyZW1lbnQoaSwgc3RlcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHBlcmNlbnRhZ2UgdmFsdWUgZm9yIHRoZSBjdXJyZW50IHN0ZXAsXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBzaXplIGZvciB0aGUgc3VicmFuZ2UuXG4gICAgICAgICAgICAgICAgbmV3UGN0ID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyhpKTtcbiAgICAgICAgICAgICAgICBwY3REaWZmZXJlbmNlID0gbmV3UGN0IC0gcHJldlBjdDtcbiAgICAgICAgICAgICAgICBzdGVwcyA9IHBjdERpZmZlcmVuY2UgLyAocGlwcy5kZW5zaXR5IHx8IDEpO1xuICAgICAgICAgICAgICAgIHJlYWxTdGVwcyA9IE1hdGgucm91bmQoc3RlcHMpO1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgcmF0aW8gcmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHBlcmNlbnRhZ2Utc3BhY2UgYSBwb2ludCBpbmRpY2F0ZXMuXG4gICAgICAgICAgICAgICAgLy8gRm9yIGEgZGVuc2l0eSAxIHRoZSBwb2ludHMvcGVyY2VudGFnZSA9IDEuIEZvciBkZW5zaXR5IDIsIHRoYXQgcGVyY2VudGFnZSBuZWVkcyB0byBiZSByZS1kaXZpZGVkLlxuICAgICAgICAgICAgICAgIC8vIFJvdW5kIHRoZSBwZXJjZW50YWdlIG9mZnNldCB0byBhbiBldmVuIG51bWJlciwgdGhlbiBkaXZpZGUgYnkgdHdvXG4gICAgICAgICAgICAgICAgLy8gdG8gc3ByZWFkIHRoZSBvZmZzZXQgb24gYm90aCBzaWRlcyBvZiB0aGUgcmFuZ2UuXG4gICAgICAgICAgICAgICAgc3RlcFNpemUgPSBwY3REaWZmZXJlbmNlIC8gcmVhbFN0ZXBzO1xuICAgICAgICAgICAgICAgIC8vIERpdmlkZSBhbGwgcG9pbnRzIGV2ZW5seSwgYWRkaW5nIHRoZSBjb3JyZWN0IG51bWJlciB0byB0aGlzIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgIC8vIFJ1biB1cCB0byA8PSBzbyB0aGF0IDEwMCUgZ2V0cyBhIHBvaW50LCBldmVudCBpZiBpZ25vcmVMYXN0IGlzIHNldC5cbiAgICAgICAgICAgICAgICBmb3IgKHEgPSAxOyBxIDw9IHJlYWxTdGVwczsgcSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByYXRpbyBiZXR3ZWVuIHRoZSByb3VuZGVkIHZhbHVlIGFuZCB0aGUgYWN0dWFsIHNpemUgbWlnaHQgYmUgfjElIG9mZi5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29ycmVjdCB0aGUgcGVyY2VudGFnZSBvZmZzZXQgYnkgdGhlIG51bWJlciBvZiBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgLy8gcGVyIHN1YnJhbmdlLiBkZW5zaXR5ID0gMSB3aWxsIHJlc3VsdCBpbiAxMDAgcG9pbnRzIG9uIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBmdWxsIHJhbmdlLCAyIGZvciA1MCwgNCBmb3IgMjUsIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgcGN0UG9zID0gcHJldlBjdCArIHEgKiBzdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1twY3RQb3MudG9GaXhlZCg1KV0gPSBbc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHBjdFBvcyksIDBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHBvaW50IHR5cGUuXG4gICAgICAgICAgICAgICAgdHlwZSA9IGdyb3VwLmluZGV4T2YoaSkgPiAtMSA/IFBpcHNUeXBlLkxhcmdlVmFsdWUgOiBpc1N0ZXBzID8gUGlwc1R5cGUuU21hbGxWYWx1ZSA6IFBpcHNUeXBlLk5vVmFsdWU7XG4gICAgICAgICAgICAgICAgLy8gRW5mb3JjZSB0aGUgJ2lnbm9yZUZpcnN0JyBvcHRpb24gYnkgb3ZlcndyaXRpbmcgdGhlIHR5cGUgZm9yIDAuXG4gICAgICAgICAgICAgICAgaWYgKCFpbmRleCAmJiBpZ25vcmVGaXJzdCAmJiBpICE9PSBoaWdoKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIShpID09PSBoaWdoICYmIGlnbm9yZUxhc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlICd0eXBlJyBvZiB0aGlzIHBvaW50LiAwID0gcGxhaW4sIDEgPSByZWFsIHZhbHVlLCAyID0gc3RlcCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1tuZXdQY3QudG9GaXhlZCg1KV0gPSBbaSwgdHlwZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgcGVyY2VudGFnZSBjb3VudC5cbiAgICAgICAgICAgICAgICBwcmV2UGN0ID0gbmV3UGN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZE1hcmtpbmcoc3ByZWFkLCBmaWx0ZXJGdW5jLCBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZV9Eb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgdmFsdWVTaXplQ2xhc3NlcyA9IChfYSA9IHt9LFxuICAgICAgICAgICAgX2FbUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgX2FbUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVOb3JtYWwsXG4gICAgICAgICAgICBfYVtQaXBzVHlwZS5MYXJnZVZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZUxhcmdlLFxuICAgICAgICAgICAgX2FbUGlwc1R5cGUuU21hbGxWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVTdWIsXG4gICAgICAgICAgICBfYSk7XG4gICAgICAgIHZhciBtYXJrZXJTaXplQ2xhc3NlcyA9IChfYiA9IHt9LFxuICAgICAgICAgICAgX2JbUGlwc1R5cGUuTm9uZV0gPSBcIlwiLFxuICAgICAgICAgICAgX2JbUGlwc1R5cGUuTm9WYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTm9ybWFsLFxuICAgICAgICAgICAgX2JbUGlwc1R5cGUuTGFyZ2VWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyTGFyZ2UsXG4gICAgICAgICAgICBfYltQaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJTdWIsXG4gICAgICAgICAgICBfYik7XG4gICAgICAgIHZhciB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVWZXJ0aWNhbF07XG4gICAgICAgIHZhciBtYXJrZXJPcmllbnRhdGlvbkNsYXNzZXMgPSBbb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckhvcml6b250YWwsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJWZXJ0aWNhbF07XG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5waXBzKTtcbiAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5vcnQgPT09IDAgPyBvcHRpb25zLmNzc0NsYXNzZXMucGlwc0hvcml6b250YWwgOiBvcHRpb25zLmNzc0NsYXNzZXMucGlwc1ZlcnRpY2FsKTtcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q2xhc3Nlcyh0eXBlLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIHZhciBhID0gc291cmNlID09PSBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWU7XG4gICAgICAgICAgICB2YXIgb3JpZW50YXRpb25DbGFzc2VzID0gYSA/IHZhbHVlT3JpZW50YXRpb25DbGFzc2VzIDogbWFya2VyT3JpZW50YXRpb25DbGFzc2VzO1xuICAgICAgICAgICAgdmFyIHNpemVDbGFzc2VzID0gYSA/IHZhbHVlU2l6ZUNsYXNzZXMgOiBtYXJrZXJTaXplQ2xhc3NlcztcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UgKyBcIiBcIiArIG9yaWVudGF0aW9uQ2xhc3Nlc1tvcHRpb25zLm9ydF0gKyBcIiBcIiArIHNpemVDbGFzc2VzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZFNwcmVhZChvZmZzZXQsIHZhbHVlLCB0eXBlKSB7XG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgZmlsdGVyIGZ1bmN0aW9uLCBpZiBpdCBpcyBzZXQuXG4gICAgICAgICAgICB0eXBlID0gZmlsdGVyRnVuYyA/IGZpbHRlckZ1bmModmFsdWUsIHR5cGUpIDogdHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBQaXBzVHlwZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIGEgbWFya2VyIGZvciBldmVyeSBwb2ludFxuICAgICAgICAgICAgdmFyIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBnZXRDbGFzc2VzKHR5cGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXIpO1xuICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgLy8gVmFsdWVzIGFyZSBvbmx5IGFwcGVuZGVkIGZvciBwb2ludHMgbWFya2VkICcxJyBvciAnMicuXG4gICAgICAgICAgICBpZiAodHlwZSA+IFBpcHNUeXBlLk5vVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gU3RyaW5nKGZvcm1hdHRlci50byh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCBhbGwgcG9pbnRzLlxuICAgICAgICBPYmplY3Qua2V5cyhzcHJlYWQpLmZvckVhY2goZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgYWRkU3ByZWFkKG9mZnNldCwgc3ByZWFkW29mZnNldF1bMF0sIHNwcmVhZFtvZmZzZXRdWzFdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVQaXBzKCkge1xuICAgICAgICBpZiAoc2NvcGVfUGlwcykge1xuICAgICAgICAgICAgcmVtb3ZlRWxlbWVudChzY29wZV9QaXBzKTtcbiAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBpcHMocGlwcykge1xuICAgICAgICAvLyBGaXggIzY2OVxuICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgIHZhciBzcHJlYWQgPSBnZW5lcmF0ZVNwcmVhZChwaXBzKTtcbiAgICAgICAgdmFyIGZpbHRlciA9IHBpcHMuZmlsdGVyO1xuICAgICAgICB2YXIgZm9ybWF0ID0gcGlwcy5mb3JtYXQgfHwge1xuICAgICAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCh2YWx1ZSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgc2NvcGVfUGlwcyA9IHNjb3BlX1RhcmdldC5hcHBlbmRDaGlsZChhZGRNYXJraW5nKHNwcmVhZCwgZmlsdGVyLCBmb3JtYXQpKTtcbiAgICAgICAgcmV0dXJuIHNjb3BlX1BpcHM7XG4gICAgfVxuICAgIC8vIFNob3J0aGFuZCBmb3IgYmFzZSBkaW1lbnNpb25zLlxuICAgIGZ1bmN0aW9uIGJhc2VTaXplKCkge1xuICAgICAgICB2YXIgcmVjdCA9IHNjb3BlX0Jhc2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBhbHQgPSAoXCJvZmZzZXRcIiArIFtcIldpZHRoXCIsIFwiSGVpZ2h0XCJdW29wdGlvbnMub3J0XSk7XG4gICAgICAgIHJldHVybiBvcHRpb25zLm9ydCA9PT0gMCA/IHJlY3Qud2lkdGggfHwgc2NvcGVfQmFzZVthbHRdIDogcmVjdC5oZWlnaHQgfHwgc2NvcGVfQmFzZVthbHRdO1xuICAgIH1cbiAgICAvLyBIYW5kbGVyIGZvciBhdHRhY2hpbmcgZXZlbnRzIHRyb3VnaCBhIHByb3h5LlxuICAgIGZ1bmN0aW9uIGF0dGFjaEV2ZW50KGV2ZW50cywgZWxlbWVudCwgY2FsbGJhY2ssIGRhdGEpIHtcbiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byAnZmlsdGVyJyBldmVudHMgdG8gdGhlIHNsaWRlci5cbiAgICAgICAgLy8gZWxlbWVudCBpcyBhIG5vZGUsIG5vdCBhIG5vZGVMaXN0XG4gICAgICAgIHZhciBtZXRob2QgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBlID0gZml4RXZlbnQoZXZlbnQsIGRhdGEucGFnZU9mZnNldCwgZGF0YS50YXJnZXQgfHwgZWxlbWVudCk7XG4gICAgICAgICAgICAvLyBmaXhFdmVudCByZXR1cm5zIGZhbHNlIGlmIHRoaXMgZXZlbnQgaGFzIGEgZGlmZmVyZW50IHRhcmdldFxuICAgICAgICAgICAgLy8gd2hlbiBoYW5kbGluZyAobXVsdGktKSB0b3VjaCBldmVudHM7XG4gICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkb05vdFJlamVjdCBpcyBwYXNzZWQgYnkgYWxsIGVuZCBldmVudHMgdG8gbWFrZSBzdXJlIHJlbGVhc2VkIHRvdWNoZXNcbiAgICAgICAgICAgIC8vIGFyZSBub3QgcmVqZWN0ZWQsIGxlYXZpbmcgdGhlIHNsaWRlciBcInN0dWNrXCIgdG8gdGhlIGN1cnNvcjtcbiAgICAgICAgICAgIGlmIChpc1NsaWRlckRpc2FibGVkKCkgJiYgIWRhdGEuZG9Ob3RSZWplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdG9wIGlmIGFuIGFjdGl2ZSAndGFwJyB0cmFuc2l0aW9uIGlzIHRha2luZyBwbGFjZS5cbiAgICAgICAgICAgIGlmIChoYXNDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXApICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgaWYgKGV2ZW50cyA9PT0gYWN0aW9ucy5zdGFydCAmJiBlLmJ1dHRvbnMgIT09IHVuZGVmaW5lZCAmJiBlLmJ1dHRvbnMgPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgaWYgKGRhdGEuaG92ZXIgJiYgZS5idXR0b25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gJ3N1cHBvcnRzUGFzc2l2ZScgaXMgb25seSB0cnVlIGlmIGEgYnJvd3NlciBhbHNvIHN1cHBvcnRzIHRvdWNoLWFjdGlvbjogbm9uZSBpbiBDU1MuXG4gICAgICAgICAgICAvLyBpT1Mgc2FmYXJpIGRvZXMgbm90LCBzbyBpdCBkb2Vzbid0IGdldCB0byBiZW5lZml0IGZyb20gcGFzc2l2ZSBzY3JvbGxpbmcuIGlPUyBkb2VzIHN1cHBvcnRcbiAgICAgICAgICAgIC8vIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uLCBidXQgdGhhdCBhbGxvd3MgcGFubmluZywgd2hpY2ggYnJlYWtzXG4gICAgICAgICAgICAvLyBzbGlkZXJzIGFmdGVyIHpvb21pbmcvb24gbm9uLXJlc3BvbnNpdmUgcGFnZXMuXG4gICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzMxMTJcbiAgICAgICAgICAgIGlmICghc3VwcG9ydHNQYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5jYWxjUG9pbnQgPSBlLnBvaW50c1tvcHRpb25zLm9ydF07XG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBldmVudCBoYW5kbGVyIHdpdGggdGhlIGV2ZW50IFsgYW5kIGFkZGl0aW9uYWwgZGF0YSBdLlxuICAgICAgICAgICAgY2FsbGJhY2soZSwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHZhciBtZXRob2RzID0gW107XG4gICAgICAgIC8vIEJpbmQgYSBjbG9zdXJlIG9uIHRoZSB0YXJnZXQgZm9yIGV2ZXJ5IGV2ZW50IHR5cGUuXG4gICAgICAgIGV2ZW50cy5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBtZXRob2QsIHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xuICAgICAgICAgICAgbWV0aG9kcy5wdXNoKFtldmVudE5hbWUsIG1ldGhvZF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1ldGhvZHM7XG4gICAgfVxuICAgIC8vIFByb3ZpZGUgYSBjbGVhbiBldmVudCB3aXRoIHN0YW5kYXJkaXplZCBvZmZzZXQgdmFsdWVzLlxuICAgIGZ1bmN0aW9uIGZpeEV2ZW50KGUsIHBhZ2VPZmZzZXQsIGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIC8vIEZpbHRlciB0aGUgZXZlbnQgdG8gcmVnaXN0ZXIgdGhlIHR5cGUsIHdoaWNoIGNhbiBiZVxuICAgICAgICAvLyB0b3VjaCwgbW91c2Ugb3IgcG9pbnRlci4gT2Zmc2V0IGNoYW5nZXMgbmVlZCB0byBiZVxuICAgICAgICAvLyBtYWRlIG9uIGFuIGV2ZW50IHNwZWNpZmljIGJhc2lzLlxuICAgICAgICB2YXIgdG91Y2ggPSBlLnR5cGUuaW5kZXhPZihcInRvdWNoXCIpID09PSAwO1xuICAgICAgICB2YXIgbW91c2UgPSBlLnR5cGUuaW5kZXhPZihcIm1vdXNlXCIpID09PSAwO1xuICAgICAgICB2YXIgcG9pbnRlciA9IGUudHlwZS5pbmRleE9mKFwicG9pbnRlclwiKSA9PT0gMDtcbiAgICAgICAgdmFyIHggPSAwO1xuICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgIC8vIElFMTAgaW1wbGVtZW50ZWQgcG9pbnRlciBldmVudHMgd2l0aCBhIHByZWZpeDtcbiAgICAgICAgaWYgKGUudHlwZS5pbmRleE9mKFwiTVNQb2ludGVyXCIpID09PSAwKSB7XG4gICAgICAgICAgICBwb2ludGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFcnJvbmVvdXMgZXZlbnRzIHNlZW0gdG8gYmUgcGFzc2VkIGluIG9jY2FzaW9uYWxseSBvbiBpT1MvaVBhZE9TIGFmdGVyIHVzZXIgZmluaXNoZXMgaW50ZXJhY3Rpbmcgd2l0aFxuICAgICAgICAvLyB0aGUgc2xpZGVyLiBUaGV5IGFwcGVhciB0byBiZSBvZiB0eXBlIE1vdXNlRXZlbnQsIHlldCB0aGV5IGRvbid0IGhhdmUgdXN1YWwgcHJvcGVydGllcyBzZXQuIElnbm9yZVxuICAgICAgICAvLyBldmVudHMgdGhhdCBoYXZlIG5vIHRvdWNoZXMgb3IgYnV0dG9ucyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gKCMxMDU3LCAjMTA3OSwgIzEwOTUpXG4gICAgICAgIGlmIChlLnR5cGUgPT09IFwibW91c2Vkb3duXCIgJiYgIWUuYnV0dG9ucyAmJiAhZS50b3VjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIG9ubHkgdGhpbmcgb25lIGhhbmRsZSBzaG91bGQgYmUgY29uY2VybmVkIGFib3V0IGlzIHRoZSB0b3VjaGVzIHRoYXQgb3JpZ2luYXRlZCBvbiB0b3Agb2YgaXQuXG4gICAgICAgIGlmICh0b3VjaCkge1xuICAgICAgICAgICAgLy8gUmV0dXJucyB0cnVlIGlmIGEgdG91Y2ggb3JpZ2luYXRlZCBvbiB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgdmFyIGlzVG91Y2hPblRhcmdldCA9IGZ1bmN0aW9uIChjaGVja1RvdWNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGNoZWNrVG91Y2gudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHJldHVybiAodGFyZ2V0ID09PSBldmVudFRhcmdldCB8fFxuICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldC5jb250YWlucyh0YXJnZXQpIHx8XG4gICAgICAgICAgICAgICAgICAgIChlLmNvbXBvc2VkICYmIGUuY29tcG9zZWRQYXRoKCkuc2hpZnQoKSA9PT0gZXZlbnRUYXJnZXQpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBJbiB0aGUgY2FzZSBvZiB0b3VjaHN0YXJ0IGV2ZW50cywgd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlcmUgaXMgc3RpbGwgbm8gbW9yZSB0aGFuIG9uZVxuICAgICAgICAgICAgLy8gdG91Y2ggb24gdGhlIHRhcmdldCBzbyB3ZSBsb29rIGFtb25nc3QgYWxsIHRvdWNoZXMuXG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaGVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGUudG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3Qgc3VwcG9ydCBtb3JlIHRoYW4gb25lIHRvdWNoIHBlciBoYW5kbGUuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIG90aGVyIGNhc2VzLCBmaW5kIG9uIGNoYW5nZWRUb3VjaGVzIGlzIGVub3VnaC5cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VG91Y2ggPSBBcnJheS5wcm90b3R5cGUuZmluZC5jYWxsKGUuY2hhbmdlZFRvdWNoZXMsIGlzVG91Y2hPblRhcmdldCk7XG4gICAgICAgICAgICAgICAgLy8gQ2FuY2VsIGlmIHRoZSB0YXJnZXQgdG91Y2ggaGFzIG5vdCBtb3ZlZC5cbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeCA9IHRhcmdldFRvdWNoLnBhZ2VYO1xuICAgICAgICAgICAgICAgIHkgPSB0YXJnZXRUb3VjaC5wYWdlWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwYWdlT2Zmc2V0ID0gcGFnZU9mZnNldCB8fCBnZXRQYWdlT2Zmc2V0KHNjb3BlX0RvY3VtZW50KTtcbiAgICAgICAgaWYgKG1vdXNlIHx8IHBvaW50ZXIpIHtcbiAgICAgICAgICAgIHggPSBlLmNsaWVudFggKyBwYWdlT2Zmc2V0Lng7XG4gICAgICAgICAgICB5ID0gZS5jbGllbnRZICsgcGFnZU9mZnNldC55O1xuICAgICAgICB9XG4gICAgICAgIGUucGFnZU9mZnNldCA9IHBhZ2VPZmZzZXQ7XG4gICAgICAgIGUucG9pbnRzID0gW3gsIHldO1xuICAgICAgICBlLmN1cnNvciA9IG1vdXNlIHx8IHBvaW50ZXI7IC8vIEZpeCAjNDM1XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICAvLyBUcmFuc2xhdGUgYSBjb29yZGluYXRlIGluIHRoZSBkb2N1bWVudCB0byBhIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgIGZ1bmN0aW9uIGNhbGNQb2ludFRvUGVyY2VudGFnZShjYWxjUG9pbnQpIHtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gY2FsY1BvaW50IC0gb2Zmc2V0KHNjb3BlX0Jhc2UsIG9wdGlvbnMub3J0KTtcbiAgICAgICAgdmFyIHByb3Bvc2FsID0gKGxvY2F0aW9uICogMTAwKSAvIGJhc2VTaXplKCk7XG4gICAgICAgIC8vIENsYW1wIHByb3Bvc2FsIGJldHdlZW4gMCUgYW5kIDEwMCVcbiAgICAgICAgLy8gT3V0LW9mLWJvdW5kIGNvb3JkaW5hdGVzIG1heSBvY2N1ciB3aGVuIC5ub1VpLWJhc2UgcHNldWRvLWVsZW1lbnRzXG4gICAgICAgIC8vIGFyZSB1c2VkIChlLmcuIGNvbnRhaW5lZCBoYW5kbGVzIGZlYXR1cmUpXG4gICAgICAgIHByb3Bvc2FsID0gbGltaXQocHJvcG9zYWwpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBwcm9wb3NhbCA6IHByb3Bvc2FsO1xuICAgIH1cbiAgICAvLyBGaW5kIGhhbmRsZSBjbG9zZXN0IHRvIGEgY2VydGFpbiBwZXJjZW50YWdlIG9uIHRoZSBzbGlkZXJcbiAgICBmdW5jdGlvbiBnZXRDbG9zZXN0SGFuZGxlKGNsaWNrZWRQb3NpdGlvbikge1xuICAgICAgICB2YXIgc21hbGxlc3REaWZmZXJlbmNlID0gMTAwO1xuICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZmFsc2U7XG4gICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlLCBpbmRleCkge1xuICAgICAgICAgICAgLy8gRGlzYWJsZWQgaGFuZGxlcyBhcmUgaWdub3JlZFxuICAgICAgICAgICAgaWYgKGlzSGFuZGxlRGlzYWJsZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhbmRsZVBvc2l0aW9uID0gc2NvcGVfTG9jYXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgIHZhciBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPSBNYXRoLmFicyhoYW5kbGVQb3NpdGlvbiAtIGNsaWNrZWRQb3NpdGlvbik7XG4gICAgICAgICAgICAvLyBJbml0aWFsIHN0YXRlXG4gICAgICAgICAgICB2YXIgY2xpY2tBdEVkZ2UgPSBkaWZmZXJlbmNlV2l0aFRoaXNIYW5kbGUgPT09IDEwMCAmJiBzbWFsbGVzdERpZmZlcmVuY2UgPT09IDEwMDtcbiAgICAgICAgICAgIC8vIERpZmZlcmVuY2Ugd2l0aCB0aGlzIGhhbmRsZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHByZXZpb3VzbHkgY2hlY2tlZCBoYW5kbGVcbiAgICAgICAgICAgIHZhciBpc0Nsb3NlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8IHNtYWxsZXN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIHZhciBpc0Nsb3NlckFmdGVyID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlIDw9IHNtYWxsZXN0RGlmZmVyZW5jZSAmJiBjbGlja2VkUG9zaXRpb24gPiBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChpc0Nsb3NlciB8fCBpc0Nsb3NlckFmdGVyIHx8IGNsaWNrQXRFZGdlKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgc21hbGxlc3REaWZmZXJlbmNlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZU51bWJlcjtcbiAgICB9XG4gICAgLy8gRmlyZSAnZW5kJyB3aGVuIGEgbW91c2Ugb3IgcGVuIGxlYXZlcyB0aGUgZG9jdW1lbnQuXG4gICAgZnVuY3Rpb24gZG9jdW1lbnRMZWF2ZShldmVudCwgZGF0YSkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZW91dFwiICYmXG4gICAgICAgICAgICBldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiSFRNTFwiICYmXG4gICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBldmVudEVuZChldmVudCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFuZGxlIG1vdmVtZW50IG9uIGRvY3VtZW50IGZvciBoYW5kbGUgYW5kIHJhbmdlIGRyYWcuXG4gICAgZnVuY3Rpb24gZXZlbnRNb3ZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIC8vIEZpeCAjNDk4XG4gICAgICAgIC8vIENoZWNrIHZhbHVlIG9mIC5idXR0b25zIGluICdzdGFydCcgdG8gd29yayBhcm91bmQgYSBidWcgaW4gSUUxMCBtb2JpbGUgKGRhdGEuYnV0dG9uc1Byb3BlcnR5KS5cbiAgICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy85MjcwMDUvbW9iaWxlLWllMTAtd2luZG93cy1waG9uZS1idXR0b25zLXByb3BlcnR5LW9mLXBvaW50ZXJtb3ZlLWV2ZW50LWFsd2F5cy16ZXJvXG4gICAgICAgIC8vIElFOSBoYXMgLmJ1dHRvbnMgYW5kIC53aGljaCB6ZXJvIG9uIG1vdXNlbW92ZS5cbiAgICAgICAgLy8gRmlyZWZveCBicmVha3MgdGhlIHNwZWMgTUROIGRlZmluZXMuXG4gICAgICAgIGlmIChuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSA5XCIpID09PSAtMSAmJiBldmVudC5idXR0b25zID09PSAwICYmIGRhdGEuYnV0dG9uc1Byb3BlcnR5ICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnRFbmQoZXZlbnQsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGFyZSBtb3ZpbmcgdXAgb3IgZG93blxuICAgICAgICB2YXIgbW92ZW1lbnQgPSAob3B0aW9ucy5kaXIgPyAtMSA6IDEpICogKGV2ZW50LmNhbGNQb2ludCAtIGRhdGEuc3RhcnRDYWxjUG9pbnQpO1xuICAgICAgICAvLyBDb252ZXJ0IHRoZSBtb3ZlbWVudCBpbnRvIGEgcGVyY2VudGFnZSBvZiB0aGUgc2xpZGVyIHdpZHRoL2hlaWdodFxuICAgICAgICB2YXIgcHJvcG9zYWwgPSAobW92ZW1lbnQgKiAxMDApIC8gZGF0YS5iYXNlU2l6ZTtcbiAgICAgICAgbW92ZUhhbmRsZXMobW92ZW1lbnQgPiAwLCBwcm9wb3NhbCwgZGF0YS5sb2NhdGlvbnMsIGRhdGEuaGFuZGxlTnVtYmVycywgZGF0YS5jb25uZWN0KTtcbiAgICB9XG4gICAgLy8gVW5iaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LCBjYWxsIGNhbGxiYWNrcy5cbiAgICBmdW5jdGlvbiBldmVudEVuZChldmVudCwgZGF0YSkge1xuICAgICAgICAvLyBUaGUgaGFuZGxlIGlzIG5vIGxvbmdlciBhY3RpdmUsIHNvIHJlbW92ZSB0aGUgY2xhc3MuXG4gICAgICAgIGlmIChkYXRhLmhhbmRsZSkge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZGF0YS5oYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50IC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5iaW5kIHRoZSBtb3ZlIGFuZCBlbmQgZXZlbnRzLCB3aGljaCBhcmUgYWRkZWQgb24gJ3N0YXJ0Jy5cbiAgICAgICAgZGF0YS5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgc2NvcGVfRG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoY1swXSwgY1sxXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZHJhZ2dpbmcgY2xhc3MuXG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnKTtcbiAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGN1cnNvciBzdHlsZXMgYW5kIHRleHQtc2VsZWN0aW9uIGV2ZW50cyBib3VuZCB0byB0aGUgYm9keS5cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Cb2R5LnN0eWxlLmN1cnNvciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmV2ZW50cy5zbW9vdGhTdGVwcykge1xuICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCB0cnVlLCB0cnVlLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwiZW5kXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBCaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LlxuICAgIGZ1bmN0aW9uIGV2ZW50U3RhcnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgLy8gSWdub3JlIGV2ZW50IGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5zb21lKGlzSGFuZGxlRGlzYWJsZWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhbmRsZTtcbiAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2RhdGEuaGFuZGxlTnVtYmVyc1swXV07XG4gICAgICAgICAgICBoYW5kbGUgPSBoYW5kbGVPcmlnaW4uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgKz0gMTtcbiAgICAgICAgICAgIC8vIE1hcmsgdGhlIGhhbmRsZSBhcyAnYWN0aXZlJyBzbyBpdCBjYW4gYmUgc3R5bGVkLlxuICAgICAgICAgICAgYWRkQ2xhc3MoaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBIGRyYWcgc2hvdWxkIG5ldmVyIHByb3BhZ2F0ZSB1cCB0byB0aGUgJ3RhcCcgZXZlbnQuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBSZWNvcmQgdGhlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICAvLyBBdHRhY2ggdGhlIG1vdmUgYW5kIGVuZCBldmVudHMuXG4gICAgICAgIHZhciBtb3ZlRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRNb3ZlLCB7XG4gICAgICAgICAgICAvLyBUaGUgZXZlbnQgdGFyZ2V0IGhhcyBjaGFuZ2VkIHNvIHdlIG5lZWQgdG8gcHJvcGFnYXRlIHRoZSBvcmlnaW5hbCBvbmUgc28gdGhhdCB3ZSBrZWVwXG4gICAgICAgICAgICAvLyByZWx5aW5nIG9uIGl0IHRvIGV4dHJhY3QgdGFyZ2V0IHRvdWNoZXMuXG4gICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgY29ubmVjdDogZGF0YS5jb25uZWN0LFxuICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICBzdGFydENhbGNQb2ludDogZXZlbnQuY2FsY1BvaW50LFxuICAgICAgICAgICAgYmFzZVNpemU6IGJhc2VTaXplKCksXG4gICAgICAgICAgICBwYWdlT2Zmc2V0OiBldmVudC5wYWdlT2Zmc2V0LFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICAgICAgYnV0dG9uc1Byb3BlcnR5OiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgbG9jYXRpb25zOiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBlbmRFdmVudCA9IGF0dGFjaEV2ZW50KGFjdGlvbnMuZW5kLCBzY29wZV9Eb2N1bWVudEVsZW1lbnQsIGV2ZW50RW5kLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBvdXRFdmVudCA9IGF0dGFjaEV2ZW50KFwibW91c2VvdXRcIiwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudExlYXZlLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIHB1c2hlZCB0aGUgbGlzdGVuZXJzIGluIHRoZSBsaXN0ZW5lciBsaXN0IHJhdGhlciB0aGFuIGNyZWF0aW5nXG4gICAgICAgIC8vIGEgbmV3IG9uZSBhcyBpdCBoYXMgYWxyZWFkeSBiZWVuIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgIGxpc3RlbmVycy5wdXNoLmFwcGx5KGxpc3RlbmVycywgbW92ZUV2ZW50LmNvbmNhdChlbmRFdmVudCwgb3V0RXZlbnQpKTtcbiAgICAgICAgLy8gVGV4dCBzZWxlY3Rpb24gaXNuJ3QgYW4gaXNzdWUgb24gdG91Y2ggZGV2aWNlcyxcbiAgICAgICAgLy8gc28gYWRkaW5nIGN1cnNvciBzdHlsZXMgY2FuIGJlIHNraXBwZWQuXG4gICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlICdJJyBjdXJzb3IgYW5kIGV4dGVuZCB0aGUgcmFuZ2UtZHJhZyBjdXJzb3IuXG4gICAgICAgICAgICBzY29wZV9Cb2R5LnN0eWxlLmN1cnNvciA9IGdldENvbXB1dGVkU3R5bGUoZXZlbnQudGFyZ2V0KS5jdXJzb3I7XG4gICAgICAgICAgICAvLyBNYXJrIHRoZSB0YXJnZXQgd2l0aCBhIGRyYWdnaW5nIHN0YXRlLlxuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLmRyYWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJldmVudCB0ZXh0IHNlbGVjdGlvbiB3aGVuIGRyYWdnaW5nIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgLy8gSW4gbm9VaVNsaWRlciA8PSA5LjIuMCwgdGhpcyB3YXMgaGFuZGxlZCBieSBjYWxsaW5nIHByZXZlbnREZWZhdWx0IG9uIG1vdXNlL3RvdWNoIHN0YXJ0L21vdmUsXG4gICAgICAgICAgICAvLyB3aGljaCBpcyBzY3JvbGwgYmxvY2tpbmcuIFRoZSBzZWxlY3RzdGFydCBldmVudCBpcyBzdXBwb3J0ZWQgYnkgRmlyZUZveCBzdGFydGluZyBmcm9tIHZlcnNpb24gNTIsXG4gICAgICAgICAgICAvLyBtZWFuaW5nIHRoZSBvbmx5IGhvbGRvdXQgaXMgaU9TIFNhZmFyaS4gVGhpcyBkb2Vzbid0IG1hdHRlcjogdGV4dCBzZWxlY3Rpb24gaXNuJ3QgdHJpZ2dlcmVkIHRoZXJlLlxuICAgICAgICAgICAgLy8gVGhlICdjdXJzb3InIGZsYWcgaXMgZmFsc2UuXG4gICAgICAgICAgICAvLyBTZWU6IGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXNlbGVjdHN0YXJ0XG4gICAgICAgICAgICBzY29wZV9Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInN0YXJ0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBNb3ZlIGNsb3Nlc3QgaGFuZGxlIHRvIHRhcHBlZCBsb2NhdGlvbi5cbiAgICBmdW5jdGlvbiBldmVudFRhcChldmVudCkge1xuICAgICAgICAvLyBUaGUgdGFwIGV2ZW50IHNob3VsZG4ndCBwcm9wYWdhdGUgdXBcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHZhciBwcm9wb3NhbCA9IGNhbGNQb2ludFRvUGVyY2VudGFnZShldmVudC5jYWxjUG9pbnQpO1xuICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZ2V0Q2xvc2VzdEhhbmRsZShwcm9wb3NhbCk7XG4gICAgICAgIC8vIFRhY2tsZSB0aGUgY2FzZSB0aGF0IGFsbCBoYW5kbGVzIGFyZSAnZGlzYWJsZWQnLlxuICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZsYWcgdGhlIHNsaWRlciBhcyBpdCBpcyBub3cgaW4gYSB0cmFuc2l0aW9uYWwgc3RhdGUuXG4gICAgICAgIC8vIFRyYW5zaXRpb24gdGFrZXMgYSBjb25maWd1cmFibGUgYW1vdW50IG9mIG1zIChkZWZhdWx0IDMwMCkuIFJlLWVuYWJsZSB0aGUgc2xpZGVyIGFmdGVyIHRoYXQuXG4gICAgICAgIGlmICghb3B0aW9ucy5ldmVudHMuc25hcCkge1xuICAgICAgICAgICAgYWRkQ2xhc3NGb3Ioc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGFwLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCBwcm9wb3NhbCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgaWYgKCFvcHRpb25zLmV2ZW50cy5zbmFwKSB7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRTdGFydChldmVudCwgeyBoYW5kbGVOdW1iZXJzOiBbaGFuZGxlTnVtYmVyXSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGaXJlcyBhICdob3ZlcicgZXZlbnQgZm9yIGEgaG92ZXJlZCBtb3VzZS9wZW4gcG9zaXRpb24uXG4gICAgZnVuY3Rpb24gZXZlbnRIb3ZlcihldmVudCkge1xuICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgdmFyIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcChwcm9wb3NhbCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcImhvdmVyXCIgPT09IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXSkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0V2ZW50c1t0YXJnZXRFdmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChzY29wZV9TZWxmLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBIYW5kbGVzIGtleWRvd24gb24gZm9jdXNlZCBoYW5kbGVzXG4gICAgLy8gRG9uJ3QgbW92ZSB0aGUgZG9jdW1lbnQgd2hlbiBwcmVzc2luZyBhcnJvdyBrZXlzIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgIGZ1bmN0aW9uIGV2ZW50S2V5ZG93bihldmVudCwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgIGlmIChpc1NsaWRlckRpc2FibGVkKCkgfHwgaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhvcml6b250YWxLZXlzID0gW1wiTGVmdFwiLCBcIlJpZ2h0XCJdO1xuICAgICAgICB2YXIgdmVydGljYWxLZXlzID0gW1wiRG93blwiLCBcIlVwXCJdO1xuICAgICAgICB2YXIgbGFyZ2VTdGVwS2V5cyA9IFtcIlBhZ2VEb3duXCIsIFwiUGFnZVVwXCJdO1xuICAgICAgICB2YXIgZWRnZUtleXMgPSBbXCJIb21lXCIsIFwiRW5kXCJdO1xuICAgICAgICBpZiAob3B0aW9ucy5kaXIgJiYgIW9wdGlvbnMub3J0KSB7XG4gICAgICAgICAgICAvLyBPbiBhbiByaWdodC10by1sZWZ0IHNsaWRlciwgdGhlIGxlZnQgYW5kIHJpZ2h0IGtleXMgYWN0IGludmVydGVkXG4gICAgICAgICAgICBob3Jpem9udGFsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5vcnQgJiYgIW9wdGlvbnMuZGlyKSB7XG4gICAgICAgICAgICAvLyBPbiBhIHRvcC10by1ib3R0b20gc2xpZGVyLCB0aGUgdXAgYW5kIGRvd24ga2V5cyBhY3QgaW52ZXJ0ZWRcbiAgICAgICAgICAgIHZlcnRpY2FsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICBsYXJnZVN0ZXBLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdHJpcCBcIkFycm93XCIgZm9yIElFIGNvbXBhdGliaWxpdHkuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L2tleVxuICAgICAgICB2YXIga2V5ID0gZXZlbnQua2V5LnJlcGxhY2UoXCJBcnJvd1wiLCBcIlwiKTtcbiAgICAgICAgdmFyIGlzTGFyZ2VEb3duID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzBdO1xuICAgICAgICB2YXIgaXNMYXJnZVVwID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzFdO1xuICAgICAgICB2YXIgaXNEb3duID0ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMF0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1swXSB8fCBpc0xhcmdlRG93bjtcbiAgICAgICAgdmFyIGlzVXAgPSBrZXkgPT09IHZlcnRpY2FsS2V5c1sxXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzFdIHx8IGlzTGFyZ2VVcDtcbiAgICAgICAgdmFyIGlzTWluID0ga2V5ID09PSBlZGdlS2V5c1swXTtcbiAgICAgICAgdmFyIGlzTWF4ID0ga2V5ID09PSBlZGdlS2V5c1sxXTtcbiAgICAgICAgaWYgKCFpc0Rvd24gJiYgIWlzVXAgJiYgIWlzTWluICYmICFpc01heCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHRvO1xuICAgICAgICBpZiAoaXNVcCB8fCBpc0Rvd24pIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBpc0Rvd24gPyAwIDogMTtcbiAgICAgICAgICAgIHZhciBzdGVwcyA9IGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgdmFyIHN0ZXAgPSBzdGVwc1tkaXJlY3Rpb25dO1xuICAgICAgICAgICAgLy8gQXQgdGhlIGVkZ2Ugb2YgYSBzbGlkZXIsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIGlmIChzdGVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm8gc3RlcCBzZXQsIHVzZSB0aGUgZGVmYXVsdCBvZiAxMCUgb2YgdGhlIHN1Yi1yYW5nZVxuICAgICAgICAgICAgaWYgKHN0ZXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgc3RlcCA9IHNjb3BlX1NwZWN0cnVtLmdldERlZmF1bHRTdGVwKHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCBpc0Rvd24sIG9wdGlvbnMua2V5Ym9hcmREZWZhdWx0U3RlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNMYXJnZVVwIHx8IGlzTGFyZ2VEb3duKSB7XG4gICAgICAgICAgICAgICAgc3RlcCAqPSBvcHRpb25zLmtleWJvYXJkUGFnZU11bHRpcGxpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRNdWx0aXBsaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RlcCBvdmVyIHplcm8tbGVuZ3RoIHJhbmdlcyAoIzk0OCk7XG4gICAgICAgICAgICBzdGVwID0gTWF0aC5tYXgoc3RlcCwgMC4wMDAwMDAxKTtcbiAgICAgICAgICAgIC8vIERlY3JlbWVudCBmb3IgZG93biBzdGVwc1xuICAgICAgICAgICAgc3RlcCA9IChpc0Rvd24gPyAtMSA6IDEpICogc3RlcDtcbiAgICAgICAgICAgIHRvID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl0gKyBzdGVwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzTWF4KSB7XG4gICAgICAgICAgICAvLyBFbmQga2V5XG4gICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFtvcHRpb25zLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBIb21lIGtleVxuICAgICAgICAgICAgdG8gPSBvcHRpb25zLnNwZWN0cnVtLnhWYWxbMF07XG4gICAgICAgIH1cbiAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byksIHRydWUsIHRydWUpO1xuICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIEF0dGFjaCBldmVudHMgdG8gc2V2ZXJhbCBzbGlkZXIgcGFydHMuXG4gICAgZnVuY3Rpb24gYmluZFNsaWRlckV2ZW50cyhiZWhhdmlvdXIpIHtcbiAgICAgICAgLy8gQXR0YWNoIHRoZSBzdGFuZGFyZCBkcmFnIGV2ZW50IHRvIHRoZSBoYW5kbGVzLlxuICAgICAgICBpZiAoIWJlaGF2aW91ci5maXhlZCkge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZXZlbnRzIGFyZSBvbmx5IGJvdW5kIHRvIHRoZSB2aXN1YWwgaGFuZGxlXG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudCwgbm90IHRoZSAncmVhbCcgb3JpZ2luIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgYXR0YWNoRXZlbnQoYWN0aW9ucy5zdGFydCwgaGFuZGxlLmNoaWxkcmVuWzBdLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IFtpbmRleF0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggdGhlIHRhcCBldmVudCB0byB0aGUgc2xpZGVyIGJhc2UuXG4gICAgICAgIGlmIChiZWhhdmlvdXIudGFwKSB7XG4gICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBzY29wZV9CYXNlLCBldmVudFRhcCwge30pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcmUgaG92ZXIgZXZlbnRzXG4gICAgICAgIGlmIChiZWhhdmlvdXIuaG92ZXIpIHtcbiAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMubW92ZSwgc2NvcGVfQmFzZSwgZXZlbnRIb3Zlciwge1xuICAgICAgICAgICAgICAgIGhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFrZSB0aGUgcmFuZ2UgZHJhZ2dhYmxlLlxuICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWcpIHtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLmZvckVhY2goZnVuY3Rpb24gKGNvbm5lY3QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3QgPT09IGZhbHNlIHx8IGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZUJlZm9yZSA9IHNjb3BlX0hhbmRsZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQWZ0ZXIgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRIb2xkZXJzID0gW2Nvbm5lY3RdO1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVzVG9EcmFnID0gW2hhbmRsZUJlZm9yZSwgaGFuZGxlQWZ0ZXJdO1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXJzVG9EcmFnID0gW2luZGV4IC0gMSwgaW5kZXhdO1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGNvbm5lY3QsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5kcmFnZ2FibGUpO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIHJhbmdlIGlzIGZpeGVkLCB0aGUgZW50aXJlIHJhbmdlIGNhblxuICAgICAgICAgICAgICAgIC8vIGJlIGRyYWdnZWQgYnkgdGhlIGhhbmRsZXMuIFRoZSBoYW5kbGUgaW4gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luIHdpbGwgcHJvcGFnYXRlIHRoZSBzdGFydCBldmVudCB1cHdhcmQsXG4gICAgICAgICAgICAgICAgLy8gYnV0IGl0IG5lZWRzIHRvIGJlIGJvdW5kIG1hbnVhbGx5IG9uIHRoZSBvdGhlci5cbiAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUJlZm9yZS5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SG9sZGVycy5wdXNoKGhhbmRsZUFmdGVyLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJlaGF2aW91ci5kcmFnQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXNUb0RyYWcgPSBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzVG9EcmFnID0gc2NvcGVfSGFuZGxlTnVtYmVycztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGV2ZW50SG9sZGVyLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVzOiBoYW5kbGVzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogaGFuZGxlTnVtYmVyc1RvRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3QsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQXR0YWNoIGFuIGV2ZW50IHRvIHRoaXMgc2xpZGVyLCBwb3NzaWJseSBpbmNsdWRpbmcgYSBuYW1lc3BhY2VcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnQobmFtZXNwYWNlZEV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XSA9IHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdIHx8IFtdO1xuICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgLy8gSWYgdGhlIGV2ZW50IGJvdW5kIGlzICd1cGRhdGUsJyBmaXJlIGl0IGltbWVkaWF0ZWx5IGZvciBhbGwgaGFuZGxlcy5cbiAgICAgICAgaWYgKG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF0gPT09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoYSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNJbnRlcm5hbE5hbWVzcGFjZShuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMuYXJpYSB8fCBuYW1lc3BhY2UgPT09IElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzO1xuICAgIH1cbiAgICAvLyBVbmRvIGF0dGFjaG1lbnQgb2YgZXZlbnRcbiAgICBmdW5jdGlvbiByZW1vdmVFdmVudChuYW1lc3BhY2VkRXZlbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gbmFtZXNwYWNlZEV2ZW50ICYmIG5hbWVzcGFjZWRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBldmVudCA/IG5hbWVzcGFjZWRFdmVudC5zdWJzdHJpbmcoZXZlbnQubGVuZ3RoKSA6IG5hbWVzcGFjZWRFdmVudDtcbiAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChiaW5kKSB7XG4gICAgICAgICAgICB2YXIgdEV2ZW50ID0gYmluZC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICB2YXIgdE5hbWVzcGFjZSA9IGJpbmQuc3Vic3RyaW5nKHRFdmVudC5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKCghZXZlbnQgfHwgZXZlbnQgPT09IHRFdmVudCkgJiYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSkge1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgZGVsZXRlIHByb3RlY3RlZCBpbnRlcm5hbCBldmVudCBpZiBpbnRlbnRpb25hbFxuICAgICAgICAgICAgICAgIGlmICghaXNJbnRlcm5hbE5hbWVzcGFjZSh0TmFtZXNwYWNlKSB8fCBuYW1lc3BhY2UgPT09IHROYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjb3BlX0V2ZW50c1tiaW5kXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBFeHRlcm5hbCBldmVudCBoYW5kbGluZ1xuICAgIGZ1bmN0aW9uIGZpcmVFdmVudChldmVudE5hbWUsIGhhbmRsZU51bWJlciwgdGFwKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBldmVudFR5cGUgPSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF07XG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBldmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9FdmVudHNbdGFyZ2V0RXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgYXMgdGhlIHNjb3BlICgndGhpcycpXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX1NlbGYsIFxuICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdmFsdWVzIGFzIGFycmF5LCBzbyBhcmdfMVthcmdfMl0gaXMgYWx3YXlzIHZhbGlkLlxuICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBpbmRleCwgMCBvciAxXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlciwgXG4gICAgICAgICAgICAgICAgICAgIC8vIFVuLWZvcm1hdHRlZCBzbGlkZXIgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX1ZhbHVlcy5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gRXZlbnQgaXMgZmlyZWQgYnkgdGFwLCB0cnVlIG9yIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRhcCB8fCBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIExlZnQgb2Zmc2V0IG9mIHRoZSBoYW5kbGUsIGluIHJlbGF0aW9uIHRvIHRoZSBzbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHNsaWRlciBwdWJsaWMgQVBJIHRvIGFuIGFjY2Vzc2libGUgcGFyYW1ldGVyIHdoZW4gdGhpcyBpcyB1bmF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFNwbGl0IG91dCB0aGUgaGFuZGxlIHBvc2l0aW9uaW5nIGxvZ2ljIHNvIHRoZSBNb3ZlIGV2ZW50IGNhbiB1c2UgaXQsIHRvb1xuICAgIGZ1bmN0aW9uIGNoZWNrSGFuZGxlUG9zaXRpb24ocmVmZXJlbmNlLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBnZXRWYWx1ZSwgc21vb3RoU3RlcHMpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlO1xuICAgICAgICAvLyBGb3Igc2xpZGVycyB3aXRoIG11bHRpcGxlIGhhbmRsZXMsIGxpbWl0IG1vdmVtZW50IHRvIHRoZSBvdGhlciBoYW5kbGUuXG4gICAgICAgIC8vIEFwcGx5IHRoZSBtYXJnaW4gb3B0aW9uIGJ5IGFkZGluZyBpdCB0byB0aGUgaGFuZGxlIHBvc2l0aW9ucy5cbiAgICAgICAgaWYgKHNjb3BlX0hhbmRsZXMubGVuZ3RoID4gMSAmJiAhb3B0aW9ucy5ldmVudHMudW5jb25zdHJhaW5lZCkge1xuICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5tYXJnaW4sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobG9va0ZvcndhcmQgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgKyAxXSwgb3B0aW9ucy5tYXJnaW4sIHRydWUpO1xuICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgbGltaXQgb3B0aW9uIGhhcyB0aGUgb3Bwb3NpdGUgZWZmZWN0LCBsaW1pdGluZyBoYW5kbGVzIHRvIGFcbiAgICAgICAgLy8gbWF4aW11bSBkaXN0YW5jZSBmcm9tIGFub3RoZXIuIExpbWl0IG11c3QgYmUgPiAwLCBhcyBvdGhlcndpc2VcbiAgICAgICAgLy8gaGFuZGxlcyB3b3VsZCBiZSB1bm1vdmFibGUuXG4gICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgb3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKHJlZmVyZW5jZVtoYW5kbGVOdW1iZXIgLSAxXSwgb3B0aW9ucy5saW1pdCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsb29rRm9yd2FyZCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLmxpbWl0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0byA9IE1hdGgubWF4KHRvLCBkaXN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHBhZGRpbmcgb3B0aW9uIGtlZXBzIHRoZSBoYW5kbGVzIGEgY2VydGFpbiBkaXN0YW5jZSBmcm9tIHRoZVxuICAgICAgICAvLyBlZGdlcyBvZiB0aGUgc2xpZGVyLiBQYWRkaW5nIG11c3QgYmUgPiAwLlxuICAgICAgICBpZiAob3B0aW9ucy5wYWRkaW5nKSB7XG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBzY29wZV9TcGVjdHJ1bS5nZXRBYnNvbHV0ZURpc3RhbmNlKDAsIG9wdGlvbnMucGFkZGluZ1swXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgxMDAsIG9wdGlvbnMucGFkZGluZ1sxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1pbih0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghc21vb3RoU3RlcHMpIHtcbiAgICAgICAgICAgIHRvID0gc2NvcGVfU3BlY3RydW0uZ2V0U3RlcCh0byk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGltaXQgcGVyY2VudGFnZSB0byB0aGUgMCAtIDEwMCByYW5nZVxuICAgICAgICB0byA9IGxpbWl0KHRvKTtcbiAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIGhhbmRsZSBjYW4ndCBtb3ZlXG4gICAgICAgIGlmICh0byA9PT0gcmVmZXJlbmNlW2hhbmRsZU51bWJlcl0gJiYgIWdldFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvO1xuICAgIH1cbiAgICAvLyBVc2VzIHNsaWRlciBvcmllbnRhdGlvbiB0byBjcmVhdGUgQ1NTIHJ1bGVzLiBhID0gYmFzZSB2YWx1ZTtcbiAgICBmdW5jdGlvbiBpblJ1bGVPcmRlcih2LCBhKSB7XG4gICAgICAgIHZhciBvID0gb3B0aW9ucy5vcnQ7XG4gICAgICAgIHJldHVybiAobyA/IGEgOiB2KSArIFwiLCBcIiArIChvID8gdiA6IGEpO1xuICAgIH1cbiAgICAvLyBNb3ZlcyBoYW5kbGUocykgYnkgYSBwZXJjZW50YWdlXG4gICAgLy8gKGJvb2wsICUgdG8gbW92ZSwgWyUgd2hlcmUgaGFuZGxlIHN0YXJ0ZWQsIC4uLl0sIFtpbmRleCBpbiBzY29wZV9IYW5kbGVzLCAuLi5dKVxuICAgIGZ1bmN0aW9uIG1vdmVIYW5kbGVzKHVwd2FyZCwgcHJvcG9zYWwsIGxvY2F0aW9ucywgaGFuZGxlTnVtYmVycywgY29ubmVjdCkge1xuICAgICAgICB2YXIgcHJvcG9zYWxzID0gbG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgIC8vIFN0b3JlIGZpcnN0IGhhbmRsZSBub3csIHNvIHdlIHN0aWxsIGhhdmUgaXQgaW4gY2FzZSBoYW5kbGVOdW1iZXJzIGlzIHJldmVyc2VkXG4gICAgICAgIHZhciBmaXJzdEhhbmRsZSA9IGhhbmRsZU51bWJlcnNbMF07XG4gICAgICAgIHZhciBzbW9vdGhTdGVwcyA9IG9wdGlvbnMuZXZlbnRzLnNtb290aFN0ZXBzO1xuICAgICAgICB2YXIgYiA9IFshdXB3YXJkLCB1cHdhcmRdO1xuICAgICAgICB2YXIgZiA9IFt1cHdhcmQsICF1cHdhcmRdO1xuICAgICAgICAvLyBDb3B5IGhhbmRsZU51bWJlcnMgc28gd2UgZG9uJ3QgY2hhbmdlIHRoZSBkYXRhc2V0XG4gICAgICAgIGhhbmRsZU51bWJlcnMgPSBoYW5kbGVOdW1iZXJzLnNsaWNlKCk7XG4gICAgICAgIC8vIENoZWNrIHRvIHNlZSB3aGljaCBoYW5kbGUgaXMgJ2xlYWRpbmcnLlxuICAgICAgICAvLyBJZiB0aGF0IG9uZSBjYW4ndCBtb3ZlIHRoZSBzZWNvbmQgY2FuJ3QgZWl0aGVyLlxuICAgICAgICBpZiAodXB3YXJkKSB7XG4gICAgICAgICAgICBoYW5kbGVOdW1iZXJzLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdGVwIDE6IGdldCB0aGUgbWF4aW11bSBwZXJjZW50YWdlIHRoYXQgYW55IG9mIHRoZSBoYW5kbGVzIGNhbiBtb3ZlXG4gICAgICAgIGlmIChoYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyLCBvKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvID0gY2hlY2tIYW5kbGVQb3NpdGlvbihwcm9wb3NhbHMsIGhhbmRsZU51bWJlciwgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSwgZmFsc2UsIHNtb290aFN0ZXBzKTtcbiAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIG9uZSBvZiB0aGUgaGFuZGxlcyBjYW4ndCBtb3ZlLlxuICAgICAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSB0byAtIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbHNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHVzaW5nIG9uZSBoYW5kbGUsIGNoZWNrIGJhY2t3YXJkIEFORCBmb3J3YXJkXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYiA9IGYgPSBbdHJ1ZV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXRlID0gZmFsc2U7XG4gICAgICAgIC8vIFN0ZXAgMjogVHJ5IHRvIHNldCB0aGUgaGFuZGxlcyB3aXRoIHRoZSBmb3VuZCBwZXJjZW50YWdlXG4gICAgICAgIGhhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyLCBvKSB7XG4gICAgICAgICAgICBzdGF0ZSA9XG4gICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgbG9jYXRpb25zW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSwgZmFsc2UsIHNtb290aFN0ZXBzKSB8fCBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFN0ZXAgMzogSWYgYSBoYW5kbGUgbW92ZWQsIGZpcmUgZXZlbnRzXG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBjb25uZWN0LCB0aGVuIGZpcmUgZHJhZyBldmVudFxuICAgICAgICAgICAgaWYgKGNvbm5lY3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwiZHJhZ1wiLCBmaXJzdEhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGFrZXMgYSBiYXNlIHZhbHVlIGFuZCBhbiBvZmZzZXQuIFRoaXMgb2Zmc2V0IGlzIHVzZWQgZm9yIHRoZSBjb25uZWN0IGJhciBzaXplLlxuICAgIC8vIEluIHRoZSBpbml0aWFsIGRlc2lnbiBmb3IgdGhpcyBmZWF0dXJlLCB0aGUgb3JpZ2luIGVsZW1lbnQgd2FzIDElIHdpZGUuXG4gICAgLy8gVW5mb3J0dW5hdGVseSwgYSByb3VuZGluZyBidWcgaW4gQ2hyb21lIG1ha2VzIGl0IGltcG9zc2libGUgdG8gaW1wbGVtZW50IHRoaXMgZmVhdHVyZVxuICAgIC8vIGluIHRoaXMgbWFubmVyOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTgyMjNcbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1EaXJlY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5kaXIgPyAxMDAgLSBhIC0gYiA6IGE7XG4gICAgfVxuICAgIC8vIFVwZGF0ZXMgc2NvcGVfTG9jYXRpb25zIGFuZCBzY29wZV9WYWx1ZXMsIHVwZGF0ZXMgdmlzdWFsIHN0YXRlXG4gICAgZnVuY3Rpb24gdXBkYXRlSGFuZGxlUG9zaXRpb24oaGFuZGxlTnVtYmVyLCB0bykge1xuICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25zLlxuICAgICAgICBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA9IHRvO1xuICAgICAgICAvLyBDb252ZXJ0IHRoZSB2YWx1ZSB0byB0aGUgc2xpZGVyIHN0ZXBwaW5nL3JhbmdlLlxuICAgICAgICBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgIHZhciB0cmFuc2xhdGlvbiA9IHRyYW5zZm9ybURpcmVjdGlvbih0bywgMCkgLSBzY29wZV9EaXJPZmZzZXQ7XG4gICAgICAgIHZhciB0cmFuc2xhdGVSdWxlID0gXCJ0cmFuc2xhdGUoXCIgKyBpblJ1bGVPcmRlcih0cmFuc2xhdGlvbiArIFwiJVwiLCBcIjBcIikgKyBcIilcIjtcbiAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPSB0cmFuc2xhdGVSdWxlO1xuICAgICAgICAvLyBzYW5pdHkgY2hlY2sgZm9yIGF0IGxlYXN0IDIgaGFuZGxlcyAoZS5nLiBkdXJpbmcgc2V0dXApXG4gICAgICAgIGlmIChvcHRpb25zLmV2ZW50cy5pbnZlcnRDb25uZWN0cyAmJiBzY29wZV9Mb2NhdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgaGFuZGxlcyBwYXNzZWQgZWFjaCBvdGhlciwgYnV0IGRvbid0IG1hdGNoIHRoZSBDb25uZWN0c0ludmVydGVkIHN0YXRlXG4gICAgICAgICAgICB2YXIgaGFuZGxlc0FyZUluT3JkZXIgPSBzY29wZV9Mb2NhdGlvbnMuZXZlcnkoZnVuY3Rpb24gKHBvc2l0aW9uLCBpbmRleCwgbG9jYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09PSAwIHx8IHBvc2l0aW9uID49IGxvY2F0aW9uc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc2NvcGVfQ29ubmVjdHNJbnZlcnRlZCAhPT0gIWhhbmRsZXNBcmVJbk9yZGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gaW52ZXJ0IGNvbm5lY3RzIHdoZW4gaGFuZGxlcyBwYXNzIGVhY2ggb3RoZXJcbiAgICAgICAgICAgICAgICBpbnZlcnRDb25uZWN0cygpO1xuICAgICAgICAgICAgICAgIC8vIGludmVydENvbm5lY3RzIGFscmVhZHkgdXBkYXRlcyBhbGwgY29ubmVjdCBlbGVtZW50c1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVDb25uZWN0KGhhbmRsZU51bWJlcik7XG4gICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyICsgMSk7XG4gICAgICAgIGlmIChzY29wZV9Db25uZWN0c0ludmVydGVkKSB7XG4gICAgICAgICAgICAvLyBXaGVuIGNvbm5lY3RzIGFyZSBpbnZlcnRlZCwgd2UgYWxzbyBoYXZlIHRvIHVwZGF0ZSBhZGphY2VudCBjb25uZWN0c1xuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIgLSAxKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbm5lY3QoaGFuZGxlTnVtYmVyICsgMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFuZGxlcyBiZWZvcmUgdGhlIHNsaWRlciBtaWRkbGUgYXJlIHN0YWNrZWQgbGF0ZXIgPSBoaWdoZXIsXG4gICAgLy8gSGFuZGxlcyBhZnRlciB0aGUgbWlkZGxlIGxhdGVyIGlzIGxvd2VyXG4gICAgLy8gW1s3XSBbOF0gLi4uLi4uLi4uLiB8IC4uLi4uLi4uLi4gWzVdIFs0XVxuICAgIGZ1bmN0aW9uIHNldFppbmRleCgpIHtcbiAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBkaXIgPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXSA+IDUwID8gLTEgOiAxO1xuICAgICAgICAgICAgdmFyIHpJbmRleCA9IDMgKyAoc2NvcGVfSGFuZGxlcy5sZW5ndGggKyBkaXIgKiBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlLnpJbmRleCA9IFN0cmluZyh6SW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gVGVzdCBzdWdnZXN0ZWQgdmFsdWVzIGFuZCBhcHBseSBtYXJnaW4sIHN0ZXAuXG4gICAgLy8gaWYgZXhhY3RJbnB1dCBpcyB0cnVlLCBkb24ndCBydW4gY2hlY2tIYW5kbGVQb3NpdGlvbiwgdGhlbiB0aGUgaGFuZGxlIGNhbiBiZSBwbGFjZWQgaW4gYmV0d2VlbiBzdGVwcyAoIzQzNilcbiAgICBmdW5jdGlvbiBzZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZXhhY3RJbnB1dCwgc21vb3RoU3RlcHMpIHtcbiAgICAgICAgaWYgKCFleGFjdElucHV0KSB7XG4gICAgICAgICAgICB0byA9IGNoZWNrSGFuZGxlUG9zaXRpb24oc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBmYWxzZSwgc21vb3RoU3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIFVwZGF0ZXMgc3R5bGUgYXR0cmlidXRlIGZvciBjb25uZWN0IG5vZGVzXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdChpbmRleCkge1xuICAgICAgICAvLyBTa2lwIGNvbm5lY3RzIHNldCB0byBmYWxzZVxuICAgICAgICBpZiAoIXNjb3BlX0Nvbm5lY3RzW2luZGV4XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgbG9jYXRpb25zLCBzbyB3ZSBjYW4gc29ydCB0aGVtIGZvciB0aGUgbG9jYWwgc2NvcGUgbG9naWNcbiAgICAgICAgdmFyIGxvY2F0aW9ucyA9IHNjb3BlX0xvY2F0aW9ucy5zbGljZSgpO1xuICAgICAgICBpZiAoc2NvcGVfQ29ubmVjdHNJbnZlcnRlZCkge1xuICAgICAgICAgICAgbG9jYXRpb25zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbCA9IDA7XG4gICAgICAgIHZhciBoID0gMTAwO1xuICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIGwgPSBsb2NhdGlvbnNbaW5kZXggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggIT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGggPSBsb2NhdGlvbnNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIHVzZSB0d28gcnVsZXM6XG4gICAgICAgIC8vICd0cmFuc2xhdGUnIHRvIGNoYW5nZSB0aGUgbGVmdC90b3Agb2Zmc2V0O1xuICAgICAgICAvLyAnc2NhbGUnIHRvIGNoYW5nZSB0aGUgd2lkdGggb2YgdGhlIGVsZW1lbnQ7XG4gICAgICAgIC8vIEFzIHRoZSBlbGVtZW50IGhhcyBhIHdpZHRoIG9mIDEwMCUsIGEgdHJhbnNsYXRpb24gb2YgMTAwJSBpcyBlcXVhbCB0byAxMDAlIG9mIHRoZSBwYXJlbnQgKC5ub1VpLWJhc2UpXG4gICAgICAgIHZhciBjb25uZWN0V2lkdGggPSBoIC0gbDtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zZm9ybURpcmVjdGlvbihsLCBjb25uZWN0V2lkdGgpICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICB2YXIgc2NhbGVSdWxlID0gXCJzY2FsZShcIiArIGluUnVsZU9yZGVyKGNvbm5lY3RXaWR0aCAvIDEwMCwgXCIxXCIpICsgXCIpXCI7XG4gICAgICAgIHNjb3BlX0Nvbm5lY3RzW2luZGV4XS5zdHlsZVtvcHRpb25zLnRyYW5zZm9ybVJ1bGVdID1cbiAgICAgICAgICAgIHRyYW5zbGF0ZVJ1bGUgKyBcIiBcIiArIHNjYWxlUnVsZTtcbiAgICB9XG4gICAgLy8gUGFyc2VzIHZhbHVlIHBhc3NlZCB0byAuc2V0IG1ldGhvZC4gUmV0dXJucyBjdXJyZW50IHZhbHVlIGlmIG5vdCBwYXJzZS1hYmxlLlxuICAgIGZ1bmN0aW9uIHJlc29sdmVUb1ZhbHVlKHRvLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgLy8gU2V0dGluZyB3aXRoIG51bGwgaW5kaWNhdGVzIGFuICdpZ25vcmUnLlxuICAgICAgICAvLyBJbnB1dHRpbmcgJ2ZhbHNlJyBpcyBpbnZhbGlkLlxuICAgICAgICBpZiAodG8gPT09IG51bGwgfHwgdG8gPT09IGZhbHNlIHx8IHRvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhIGZvcm1hdHRlZCBudW1iZXIgd2FzIHBhc3NlZCwgYXR0ZW1wdCB0byBkZWNvZGUgaXQuXG4gICAgICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRvID0gU3RyaW5nKHRvKTtcbiAgICAgICAgfVxuICAgICAgICB0byA9IG9wdGlvbnMuZm9ybWF0LmZyb20odG8pO1xuICAgICAgICBpZiAodG8gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodG8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHBhcnNpbmcgdGhlIG51bWJlciBmYWlsZWQsIHVzZSB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgICAgaWYgKHRvID09PSBmYWxzZSB8fCBpc05hTih0bykpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG87XG4gICAgfVxuICAgIC8vIFNldCB0aGUgc2xpZGVyIHZhbHVlLlxuICAgIGZ1bmN0aW9uIHZhbHVlU2V0KGlucHV0LCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IGFzQXJyYXkoaW5wdXQpO1xuICAgICAgICB2YXIgaXNJbml0ID0gc2NvcGVfTG9jYXRpb25zWzBdID09PSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIEV2ZW50IGZpcmVzIGJ5IGRlZmF1bHRcbiAgICAgICAgZmlyZVNldEV2ZW50ID0gZmlyZVNldEV2ZW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmlyZVNldEV2ZW50O1xuICAgICAgICAvLyBBbmltYXRpb24gaXMgb3B0aW9uYWwuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5pdGlhbCB2YWx1ZXMgd2VyZSBzZXQgYmVmb3JlIHVzaW5nIGFuaW1hdGVkIHBsYWNlbWVudC5cbiAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0ZSAmJiAhaXNJbml0KSB7XG4gICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHBhc3MsIHdpdGhvdXQgbG9va0FoZWFkIGJ1dCB3aXRoIGxvb2tCYWNrd2FyZC4gVmFsdWVzIGFyZSBzZXQgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWVzW2hhbmRsZU51bWJlcl0sIGhhbmRsZU51bWJlciksIHRydWUsIGZhbHNlLCBleGFjdElucHV0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBpID0gc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEgPyAwIDogMTtcbiAgICAgICAgLy8gU3ByZWFkIGhhbmRsZXMgZXZlbmx5IGFjcm9zcyB0aGUgc2xpZGVyIGlmIHRoZSByYW5nZSBoYXMgbm8gc2l6ZSAobWluPW1heClcbiAgICAgICAgaWYgKGlzSW5pdCAmJiBzY29wZV9TcGVjdHJ1bS5oYXNOb1NpemUoKSkge1xuICAgICAgICAgICAgZXhhY3RJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbMF0gPSAwO1xuICAgICAgICAgICAgaWYgKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHZhciBzcGFjZV8xID0gMTAwIC8gKHNjb3BlX0hhbmRsZU51bWJlcnMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSBoYW5kbGVOdW1iZXIgKiBzcGFjZV8xO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNlY29uZGFyeSBwYXNzZXMuIE5vdyB0aGF0IGFsbCBiYXNlIHZhbHVlcyBhcmUgc2V0LCBhcHBseSBjb25zdHJhaW50cy5cbiAgICAgICAgLy8gSXRlcmF0ZSBhbGwgaGFuZGxlcyB0byBlbnN1cmUgY29uc3RyYWludHMgYXJlIGFwcGxpZWQgZm9yIHRoZSBlbnRpcmUgc2xpZGVyIChJc3N1ZSAjMTAwOSlcbiAgICAgICAgZm9yICg7IGkgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAvLyBGaXJlIHRoZSBldmVudCBvbmx5IGZvciBoYW5kbGVzIHRoYXQgcmVjZWl2ZWQgYSBuZXcgdmFsdWUsIGFzIHBlciAjNTc5XG4gICAgICAgICAgICBpZiAodmFsdWVzW2hhbmRsZU51bWJlcl0gIT09IG51bGwgJiYgZmlyZVNldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBSZXNldCBzbGlkZXIgdG8gaW5pdGlhbCB2YWx1ZXNcbiAgICBmdW5jdGlvbiB2YWx1ZVJlc2V0KGZpcmVTZXRFdmVudCkge1xuICAgICAgICB2YWx1ZVNldChvcHRpb25zLnN0YXJ0LCBmaXJlU2V0RXZlbnQpO1xuICAgIH1cbiAgICAvLyBTZXQgdmFsdWUgZm9yIGEgc2luZ2xlIGhhbmRsZVxuICAgIGZ1bmN0aW9uIHZhbHVlU2V0SGFuZGxlKGhhbmRsZU51bWJlciwgdmFsdWUsIGZpcmVTZXRFdmVudCwgZXhhY3RJbnB1dCkge1xuICAgICAgICAvLyBFbnN1cmUgbnVtZXJpYyBpbnB1dFxuICAgICAgICBoYW5kbGVOdW1iZXIgPSBOdW1iZXIoaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgaWYgKCEoaGFuZGxlTnVtYmVyID49IDAgJiYgaGFuZGxlTnVtYmVyIDwgc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBpbnZhbGlkIGhhbmRsZSBudW1iZXIsIGdvdDogXCIgKyBoYW5kbGVOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvb2sgYm90aCBiYWNrd2FyZCBhbmQgZm9yd2FyZCwgc2luY2Ugd2UgZG9uJ3Qgd2FudCB0aGlzIGhhbmRsZSB0byBcInB1c2hcIiBvdGhlciBoYW5kbGVzICgjOTYwKTtcbiAgICAgICAgLy8gVGhlIGV4YWN0SW5wdXQgYXJndW1lbnQgY2FuIGJlIHVzZWQgdG8gaWdub3JlIHNsaWRlciBzdGVwcGluZyAoIzQzNilcbiAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWUsIGhhbmRsZU51bWJlciksIHRydWUsIHRydWUsIGV4YWN0SW5wdXQpO1xuICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgaWYgKGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2V0XCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gR2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgZnVuY3Rpb24gdmFsdWVHZXQodW5lbmNvZGVkKSB7XG4gICAgICAgIGlmICh1bmVuY29kZWQgPT09IHZvaWQgMCkgeyB1bmVuY29kZWQgPSBmYWxzZTsgfVxuICAgICAgICBpZiAodW5lbmNvZGVkKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gYSBjb3B5IG9mIHRoZSByYXcgdmFsdWVzXG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfVmFsdWVzLmxlbmd0aCA9PT0gMSA/IHNjb3BlX1ZhbHVlc1swXSA6IHNjb3BlX1ZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWVzID0gc2NvcGVfVmFsdWVzLm1hcChvcHRpb25zLmZvcm1hdC50byk7XG4gICAgICAgIC8vIElmIG9ubHkgb25lIGhhbmRsZSBpcyB1c2VkLCByZXR1cm4gYSBzaW5nbGUgdmFsdWUuXG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuICAgIC8vIFJlbW92ZXMgY2xhc3NlcyBmcm9tIHRoZSByb290IGFuZCBlbXB0aWVzIGl0LlxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vIHJlbW92ZSBwcm90ZWN0ZWQgaW50ZXJuYWwgbGlzdGVuZXJzXG4gICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLmFyaWEpO1xuICAgICAgICByZW1vdmVFdmVudChJTlRFUk5BTF9FVkVOVF9OUy50b29sdGlwcyk7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuY3NzQ2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdoaWxlIChzY29wZV9UYXJnZXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgc2NvcGVfVGFyZ2V0LnJlbW92ZUNoaWxkKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc2NvcGVfVGFyZ2V0Lm5vVWlTbGlkZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgIHZhciBuZWFyYnlTdGVwcyA9IHNjb3BlX1NwZWN0cnVtLmdldE5lYXJieVN0ZXBzKGxvY2F0aW9uKTtcbiAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfVmFsdWVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgIHZhciBpbmNyZW1lbnQgPSBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGVwO1xuICAgICAgICB2YXIgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgLy8gSWYgc25hcHBlZCwgZGlyZWN0bHkgdXNlIGRlZmluZWQgc3RlcCB2YWx1ZVxuICAgICAgICBpZiAob3B0aW9ucy5zbmFwKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIHZhbHVlIC0gbmVhcmJ5U3RlcHMuc3RlcEJlZm9yZS5zdGFydFZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZSB8fCBudWxsLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgbmV4dCB2YWx1ZSBpbiB0aGlzIHN0ZXAgbW92ZXMgaW50byB0aGUgbmV4dCBzdGVwLFxuICAgICAgICAvLyB0aGUgaW5jcmVtZW50IGlzIHRoZSBzdGFydCBvZiB0aGUgbmV4dCBzdGVwIC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgaWYgKGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSArIGluY3JlbWVudCA+IG5lYXJieVN0ZXBzLnN0ZXBBZnRlci5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYmV5b25kIHRoZSBzdGFydGluZyBwb2ludFxuICAgICAgICBpZiAodmFsdWUgPiBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGFydFZhbHVlKSB7XG4gICAgICAgICAgICBkZWNyZW1lbnQgPSBuZWFyYnlTdGVwcy50aGlzU3RlcC5zdGVwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RlcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRlY3JlbWVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGEgaGFuZGxlIGlzIGF0IHRoZSBzdGFydCBvZiBhIHN0ZXAsIGl0IGFsd2F5cyBzdGVwcyBiYWNrIGludG8gdGhlIHByZXZpb3VzIHN0ZXAgZmlyc3RcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWNyZW1lbnQgPSB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuaGlnaGVzdFN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm93LCBpZiBhdCB0aGUgc2xpZGVyIGVkZ2VzLCB0aGVyZSBpcyBubyBpbi9kZWNyZW1lbnRcbiAgICAgICAgaWYgKGxvY2F0aW9uID09PSAxMDApIHtcbiAgICAgICAgICAgIGluY3JlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobG9jYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgIGRlY3JlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXMgcGVyICMzOTEsIHRoZSBjb21wYXJpc29uIGZvciB0aGUgZGVjcmVtZW50IHN0ZXAgY2FuIGhhdmUgc29tZSByb3VuZGluZyBpc3N1ZXMuXG4gICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSBzY29wZV9TcGVjdHJ1bS5jb3VudFN0ZXBEZWNpbWFscygpO1xuICAgICAgICAvLyBSb3VuZCBwZXIgIzM5MVxuICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBudWxsICYmIGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGluY3JlbWVudCA9IE51bWJlcihpbmNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVjcmVtZW50ICE9PSBudWxsICYmIGRlY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRlY3JlbWVudCA9IE51bWJlcihkZWNyZW1lbnQudG9GaXhlZChzdGVwRGVjaW1hbHMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2RlY3JlbWVudCwgaW5jcmVtZW50XTtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHN0ZXAgc2l6ZSBmb3IgdGhlIHNsaWRlci5cbiAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHMoKSB7XG4gICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVOdW1iZXJzLm1hcChnZXROZXh0U3RlcHNGb3JIYW5kbGUpO1xuICAgIH1cbiAgICAvLyBVcGRhdGFibGU6IG1hcmdpbiwgbGltaXQsIHBhZGRpbmcsIHN0ZXAsIHJhbmdlLCBhbmltYXRlLCBzbmFwXG4gICAgZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRpb25zVG9VcGRhdGUsIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAvLyBTcGVjdHJ1bSBpcyBjcmVhdGVkIHVzaW5nIHRoZSByYW5nZSwgc25hcCwgZGlyZWN0aW9uIGFuZCBzdGVwIG9wdGlvbnMuXG4gICAgICAgIC8vICdzbmFwJyBhbmQgJ3N0ZXAnIGNhbiBiZSB1cGRhdGVkLlxuICAgICAgICAvLyBJZiAnc25hcCcgYW5kICdzdGVwJyBhcmUgbm90IHBhc3NlZCwgdGhleSBzaG91bGQgcmVtYWluIHVuY2hhbmdlZC5cbiAgICAgICAgdmFyIHYgPSB2YWx1ZUdldCgpO1xuICAgICAgICB2YXIgdXBkYXRlQWJsZSA9IFtcbiAgICAgICAgICAgIFwibWFyZ2luXCIsXG4gICAgICAgICAgICBcImxpbWl0XCIsXG4gICAgICAgICAgICBcInBhZGRpbmdcIixcbiAgICAgICAgICAgIFwicmFuZ2VcIixcbiAgICAgICAgICAgIFwiYW5pbWF0ZVwiLFxuICAgICAgICAgICAgXCJzbmFwXCIsXG4gICAgICAgICAgICBcInN0ZXBcIixcbiAgICAgICAgICAgIFwiZm9ybWF0XCIsXG4gICAgICAgICAgICBcInBpcHNcIixcbiAgICAgICAgICAgIFwidG9vbHRpcHNcIixcbiAgICAgICAgICAgIFwiY29ubmVjdFwiLFxuICAgICAgICBdO1xuICAgICAgICAvLyBPbmx5IGNoYW5nZSBvcHRpb25zIHRoYXQgd2UncmUgYWN0dWFsbHkgcGFzc2VkIHRvIHVwZGF0ZS5cbiAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5kZWZpbmVkLiBudWxsIHJlbW92ZXMgdGhlIHZhbHVlLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxPcHRpb25zW25hbWVdID0gb3B0aW9uc1RvVXBkYXRlW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG5ld09wdGlvbnMgPSB0ZXN0T3B0aW9ucyhvcmlnaW5hbE9wdGlvbnMpO1xuICAgICAgICAvLyBMb2FkIG5ldyBvcHRpb25zIGludG8gdGhlIHNsaWRlciBzdGF0ZVxuICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBuZXdPcHRpb25zW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2NvcGVfU3BlY3RydW0gPSBuZXdPcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICAvLyBMaW1pdCwgbWFyZ2luIGFuZCBwYWRkaW5nIGRlcGVuZCBvbiB0aGUgc3BlY3RydW0gYnV0IGFyZSBzdG9yZWQgb3V0c2lkZSBvZiBpdC4gKCM2NzcpXG4gICAgICAgIG9wdGlvbnMubWFyZ2luID0gbmV3T3B0aW9ucy5tYXJnaW47XG4gICAgICAgIG9wdGlvbnMubGltaXQgPSBuZXdPcHRpb25zLmxpbWl0O1xuICAgICAgICBvcHRpb25zLnBhZGRpbmcgPSBuZXdPcHRpb25zLnBhZGRpbmc7XG4gICAgICAgIC8vIFVwZGF0ZSBwaXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICBwaXBzKG9wdGlvbnMucGlwcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVQaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIHRvb2x0aXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW52YWxpZGF0ZSB0aGUgY3VycmVudCBwb3NpdGlvbmluZyBzbyB2YWx1ZVNldCBmb3JjZXMgYW4gdXBkYXRlLlxuICAgICAgICBzY29wZV9Mb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgdmFsdWVTZXQoaXNTZXQob3B0aW9uc1RvVXBkYXRlLnN0YXJ0KSA/IG9wdGlvbnNUb1VwZGF0ZS5zdGFydCA6IHYsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIC8vIFVwZGF0ZSBjb25uZWN0cyBvbmx5IGlmIGl0IHdhcyBzZXRcbiAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZS5jb25uZWN0KSB7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0T3B0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlQ29ubmVjdE9wdGlvbigpIHtcbiAgICAgICAgLy8gSUUgc3VwcG9ydGVkIHdheSBvZiByZW1vdmluZyBjaGlsZHJlbiBpbmNsdWRpbmcgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgd2hpbGUgKHNjb3BlX0Nvbm5lY3RCYXNlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RCYXNlLnJlbW92ZUNoaWxkKHNjb3BlX0Nvbm5lY3RCYXNlLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZGluZyBuZXcgY29ubmVjdHMgYWNjb3JkaW5nIHRvIHRoZSBuZXcgY29ubmVjdCBvcHRpb25zXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IG9wdGlvbnMuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICBzY29wZV9Db25uZWN0c1tpXSA9IGFkZENvbm5lY3Qoc2NvcGVfQ29ubmVjdEJhc2UsIG9wdGlvbnMuY29ubmVjdFtpXSk7XG4gICAgICAgICAgICB1cGRhdGVDb25uZWN0KGkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlLWFkZGluZyBkcmFnIGV2ZW50cyBmb3IgdGhlIG5ldyBjb25uZWN0IGVsZW1lbnRzXG4gICAgICAgIC8vIHRvIGlnbm9yZSB0aGUgb3RoZXIgZXZlbnRzIHdlIGhhdmUgdG8gbmVnYXRlIHRoZSAnaWYgKCFiZWhhdmlvdXIuZml4ZWQpJyBjaGVja1xuICAgICAgICBiaW5kU2xpZGVyRXZlbnRzKHsgZHJhZzogb3B0aW9ucy5ldmVudHMuZHJhZywgZml4ZWQ6IHRydWUgfSk7XG4gICAgfVxuICAgIC8vIEludmVydCBvcHRpb25zIGZvciBjb25uZWN0IGhhbmRsZXNcbiAgICBmdW5jdGlvbiBpbnZlcnRDb25uZWN0cygpIHtcbiAgICAgICAgc2NvcGVfQ29ubmVjdHNJbnZlcnRlZCA9ICFzY29wZV9Db25uZWN0c0ludmVydGVkO1xuICAgICAgICB0ZXN0Q29ubmVjdChvcHRpb25zLCBcbiAgICAgICAgLy8gaW52ZXJzZSB0aGUgY29ubmVjdCBib29sZWFuIGFycmF5XG4gICAgICAgIG9wdGlvbnMuY29ubmVjdC5tYXAoZnVuY3Rpb24gKGIpIHsgcmV0dXJuICFiOyB9KSk7XG4gICAgICAgIHVwZGF0ZUNvbm5lY3RPcHRpb24oKTtcbiAgICB9XG4gICAgLy8gSW5pdGlhbGl6YXRpb24gc3RlcHNcbiAgICBmdW5jdGlvbiBzZXR1cFNsaWRlcigpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGVsZW1lbnQsIGluaXRpYWxpemUgSFRNTCBhbmQgc2V0IGNsYXNzZXMuXG4gICAgICAgIC8vIEFkZCBoYW5kbGVzIGFuZCBjb25uZWN0IGVsZW1lbnRzLlxuICAgICAgICBzY29wZV9CYXNlID0gYWRkU2xpZGVyKHNjb3BlX1RhcmdldCk7XG4gICAgICAgIGFkZEVsZW1lbnRzKG9wdGlvbnMuY29ubmVjdCwgc2NvcGVfQmFzZSk7XG4gICAgICAgIC8vIEF0dGFjaCB1c2VyIGV2ZW50cy5cbiAgICAgICAgYmluZFNsaWRlckV2ZW50cyhvcHRpb25zLmV2ZW50cyk7XG4gICAgICAgIC8vIFVzZSB0aGUgcHVibGljIHZhbHVlIG1ldGhvZCB0byBzZXQgdGhlIHN0YXJ0IHZhbHVlcy5cbiAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCk7XG4gICAgICAgIGlmIChvcHRpb25zLnBpcHMpIHtcbiAgICAgICAgICAgIHBpcHMob3B0aW9ucy5waXBzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwcykge1xuICAgICAgICAgICAgdG9vbHRpcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBhcmlhKCk7XG4gICAgfVxuICAgIHNldHVwU2xpZGVyKCk7XG4gICAgdmFyIHNjb3BlX1NlbGYgPSB7XG4gICAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICAgIHN0ZXBzOiBnZXROZXh0U3RlcHMsXG4gICAgICAgIG9uOiBiaW5kRXZlbnQsXG4gICAgICAgIG9mZjogcmVtb3ZlRXZlbnQsXG4gICAgICAgIGdldDogdmFsdWVHZXQsXG4gICAgICAgIHNldDogdmFsdWVTZXQsXG4gICAgICAgIHNldEhhbmRsZTogdmFsdWVTZXRIYW5kbGUsXG4gICAgICAgIHJlc2V0OiB2YWx1ZVJlc2V0LFxuICAgICAgICBkaXNhYmxlOiBkaXNhYmxlLFxuICAgICAgICBlbmFibGU6IGVuYWJsZSxcbiAgICAgICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICBfX21vdmVIYW5kbGVzOiBmdW5jdGlvbiAodXB3YXJkLCBwcm9wb3NhbCwgaGFuZGxlTnVtYmVycykge1xuICAgICAgICAgICAgbW92ZUhhbmRsZXModXB3YXJkLCBwcm9wb3NhbCwgc2NvcGVfTG9jYXRpb25zLCBoYW5kbGVOdW1iZXJzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczogb3JpZ2luYWxPcHRpb25zLFxuICAgICAgICB1cGRhdGVPcHRpb25zOiB1cGRhdGVPcHRpb25zLFxuICAgICAgICB0YXJnZXQ6IHNjb3BlX1RhcmdldCxcbiAgICAgICAgcmVtb3ZlUGlwczogcmVtb3ZlUGlwcyxcbiAgICAgICAgcmVtb3ZlVG9vbHRpcHM6IHJlbW92ZVRvb2x0aXBzLFxuICAgICAgICBnZXRQb3NpdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VG9vbHRpcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9Ub29sdGlwcztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0T3JpZ2luczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlX0hhbmRsZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHBpcHM6IHBpcHMsIC8vIElzc3VlICM1OTRcbiAgICB9O1xuICAgIHJldHVybiBzY29wZV9TZWxmO1xufVxuLy8gUnVuIHRoZSBzdGFuZGFyZCBpbml0aWFsaXplclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSh0YXJnZXQsIG9yaWdpbmFsT3B0aW9ucykge1xuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQubm9kZU5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogY3JlYXRlIHJlcXVpcmVzIGEgc2luZ2xlIGVsZW1lbnQsIGdvdDogXCIgKyB0YXJnZXQpO1xuICAgIH1cbiAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgc2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgIGlmICh0YXJnZXQubm9VaVNsaWRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBTbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xuICAgIH1cbiAgICAvLyBUZXN0IHRoZSBvcHRpb25zIGFuZCBjcmVhdGUgdGhlIHNsaWRlciBlbnZpcm9ubWVudDtcbiAgICB2YXIgb3B0aW9ucyA9IHRlc3RPcHRpb25zKG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgdmFyIGFwaSA9IHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKTtcbiAgICB0YXJnZXQubm9VaVNsaWRlciA9IGFwaTtcbiAgICByZXR1cm4gYXBpO1xufVxuZXhwb3J0IHsgaW5pdGlhbGl6ZSBhcyBjcmVhdGUgfTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMgfTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAgX19zcGVjdHJ1bTogU3BlY3RydW0sXG4gICAgLy8gQSByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQgY2xhc3NlcywgYWxsb3dzIGdsb2JhbCBjaGFuZ2VzLlxuICAgIC8vIFVzZSB0aGUgY3NzQ2xhc3NlcyBvcHRpb24gZm9yIGNoYW5nZXMgdG8gb25lIHNsaWRlci5cbiAgICBjc3NDbGFzc2VzOiBjc3NDbGFzc2VzLFxuICAgIGNyZWF0ZTogaW5pdGlhbGl6ZSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlc2hlZXRzL3N0eWxlcy5zY3NzJztcblxuaW1wb3J0ICcuL2phdmFzY3JpcHRzL3ByaWNpbmcuanMnO1xuaW1wb3J0ICcuL2phdmFzY3JpcHRzL3ByaWNpbmctc2xpZGVyLmpzJztcblxuY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZCEgSW5kZXguanMgaXMgcnVubmluZ1wiKTtcblxuIl0sIm5hbWVzIjpbImEiLCJiIiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsIkhhbmRsZWJhcnMiLCJkIiwiYyIsImUiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwicCIsInIiLCJjb21waWxlIiwiayIsInByZWNvbXBpbGUiLCJBU1QiLCJpIiwiQ29tcGlsZXIiLCJKYXZhU2NyaXB0Q29tcGlsZXIiLCJQYXJzZXIiLCJqIiwicGFyc2VyIiwicGFyc2UiLCJwYXJzZVdpdGhvdXRQcm9jZXNzaW5nIiwiX19lc01vZHVsZSIsImYiLCJnIiwiaCIsImwiLCJuIiwibyIsInEiLCJjcmVhdGUiLCJzIiwiVmlzaXRvciIsIkhhbmRsZWJhcnNFbnZpcm9ubWVudCIsImV4dGVuZCIsIlNhZmVTdHJpbmciLCJFeGNlcHRpb24iLCJVdGlscyIsImVzY2FwZUV4cHJlc3Npb24iLCJWTSIsInRlbXBsYXRlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJoZWxwZXJzIiwicGFydGlhbHMiLCJkZWNvcmF0b3JzIiwicmVnaXN0ZXJEZWZhdWx0SGVscGVycyIsInJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMiLCJWRVJTSU9OIiwiQ09NUElMRVJfUkVWSVNJT04iLCJMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04iLCJSRVZJU0lPTl9DSEFOR0VTIiwiY29uc3RydWN0b3IiLCJsb2dnZXIiLCJsb2ciLCJyZWdpc3RlckhlbHBlciIsInRvU3RyaW5nIiwidW5yZWdpc3RlckhlbHBlciIsInJlZ2lzdGVyUGFydGlhbCIsInVucmVnaXN0ZXJQYXJ0aWFsIiwicmVnaXN0ZXJEZWNvcmF0b3IiLCJ1bnJlZ2lzdGVyRGVjb3JhdG9yIiwicmVzZXRMb2dnZWRQcm9wZXJ0eUFjY2Vzc2VzIiwicmVzZXRMb2dnZWRQcm9wZXJ0aWVzIiwiY3JlYXRlRnJhbWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ0b0hUTUwiLCJ0ZXN0IiwicmVwbGFjZSIsIl9wYXJlbnQiLCJwYXRoIiwiaW5kZXhPZiIsImlzRW1wdHkiLCJibG9ja1BhcmFtcyIsImFwcGVuZENvbnRleHRQYXRoIiwiaXNGdW5jdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsImxvYyIsInN0YXJ0IiwibGluZSIsImVuZCIsImNvbHVtbiIsIkVycm9yIiwiY2FwdHVyZVN0YWNrVHJhY2UiLCJsaW5lTnVtYmVyIiwiZW5kTGluZU51bWJlciIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZW5kQ29sdW1uIiwic2V0RGVzYyIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJpc0VudW0iLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImdldERlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJzZXREZXNjcyIsImRlZmluZVByb3BlcnRpZXMiLCJnZXRLZXlzIiwia2V5cyIsImdldE5hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldFN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJlYWNoIiwiZm9yRWFjaCIsInQiLCJob29rcyIsIm1vdmVIZWxwZXJUb0hvb2tzIiwiaW52ZXJzZSIsImZuIiwiaWRzIiwibmFtZSIsImRhdGEiLCJjb250ZXh0UGF0aCIsImtleSIsImluZGV4IiwiZmlyc3QiLCJsYXN0IiwibmV4dCIsImRvbmUiLCJwdXNoIiwiU3ltYm9sIiwidSIsInYiLCJ3IiwieCIsInkiLCJnZXQiLCJ6IiwiQSIsIkpTT04iLCJCIiwic3RyaW5naWZ5IiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJLIiwiX2siLCJjb25maWd1cmFibGUiLCJzZXQiLCJMIiwiTSIsIk4iLCJPIiwiUCIsIlEiLCJSIiwiUyIsIlQiLCJhcHBseSIsIlUiLCJUeXBlRXJyb3IiLCJWIiwiZm9yIiwia2V5Rm9yIiwidXNlU2V0dGVyIiwidXNlU2ltcGxlIiwic3BsaXQiLCJXIiwiTWF0aCIsIndpbmRvdyIsInNlbGYiLCJGdW5jdGlvbiIsIl9fZyIsInZlcnNpb24iLCJfX2UiLCJ3cml0YWJsZSIsInJhbmRvbSIsImNvbmNhdCIsInNsaWNlIiwiU3RyaW5nIiwiX3QiLCJfaSIsImNoYXJDb2RlQXQiLCJjaGFyQXQiLCJjZWlsIiwiZmxvb3IiLCJpc05hTiIsInZhbHVlcyIsImVudHJpZXMiLCJOb2RlTGlzdCIsIkhUTUxDb2xsZWN0aW9uIiwiQXJndW1lbnRzIiwiZ2V0SXRlcmF0b3IiLCJnZXRJdGVyYXRvck1ldGhvZCIsImNhbGxlZSIsImhhc2giLCJpbmNsdWRlWmVybyIsImxldmVsIiwibG9va3VwUHJvcGVydHkiLCJhcmdzIiwibWV0aG9kTWFwIiwibG9va3VwTGV2ZWwiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlSW50IiwiY29uc29sZSIsIl9fZGVmaW5lR2V0dGVyX18iLCJfX2RlZmluZVNldHRlcl9fIiwiX19sb29rdXBHZXR0ZXJfXyIsIl9fcHJvdG9fXyIsInByb3BlcnRpZXMiLCJ3aGl0ZWxpc3QiLCJjcmVhdGVOZXdMb29rdXBPYmplY3QiLCJhbGxvd2VkUHJvdG9Qcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlIiwiYWxsb3dQcm90b1Byb3BlcnRpZXNCeURlZmF1bHQiLCJtZXRob2RzIiwiYWxsb3dlZFByb3RvTWV0aG9kcyIsImFsbG93UHJvdG9NZXRob2RzQnlEZWZhdWx0IiwiY3JlYXRlUHJvdG9BY2Nlc3NDb250cm9sIiwicmVzdWx0SXNBbGxvd2VkIiwic3RyaW5nIiwicmVzb2x2ZVBhcnRpYWwiLCJwcm90b0FjY2Vzc0NvbnRyb2wiLCJpbnZva2VQYXJ0aWFsIiwiY29tcGlsZXJPcHRpb25zIiwiaW5kZW50Iiwiam9pbiIsIm1haW4iLCJfc2V0dXAiLCJwYXJ0aWFsIiwidXNlRGF0YSIsInVzZUJsb2NrUGFyYW1zIiwidXNlRGVwdGhzIiwiZGVwdGhzIiwiZGVjb3JhdG9yIiwibWFpbl9kIiwiY2hlY2tSZXZpc2lvbiIsImNvbXBpbGVyIiwic3RyaWN0IiwibG9va3VwIiwibGFtYmRhIiwicHJvZ3JhbXMiLCJwcm9ncmFtIiwibWVyZ2VJZk5lZWRlZCIsIm51bGxDb250ZXh0Iiwibm9vcCIsImNvbXBpbGVySW5mbyIsImlzVG9wIiwidXNlUGFydGlhbCIsInVzZURlY29yYXRvcnMiLCJhbGxvd0NhbGxzVG9IZWxwZXJNaXNzaW5nIiwiX2NoaWxkIiwiZGVwdGgiLCJyb290Iiwid3JhcEhlbHBlciIsIndyYXBQcm9ncmFtIiwic2VhbCIsImdsb2JhbFRoaXMiLCJfX21hZ2ljX18iLCJub0NvbmZsaWN0IiwiaGVscGVyRXhwcmVzc2lvbiIsInR5cGUiLCJwYXJhbXMiLCJzY29wZWRJZCIsIm9yaWdpbmFsIiwic2ltcGxlSWQiLCJwYXJ0cyIsInl5IiwibG9jSW5mbyIsIlNvdXJjZUxvY2F0aW9uIiwic3JjTmFtZSIsImFjY2VwdCIsInRyYWNlIiwic3ltYm9sc18iLCJlcnJvciIsIkVPRiIsInByb2dyYW1fcmVwZXRpdGlvbjAiLCJzdGF0ZW1lbnQiLCJtdXN0YWNoZSIsImJsb2NrIiwicmF3QmxvY2siLCJwYXJ0aWFsQmxvY2siLCJjb250ZW50IiwiQ09NTUVOVCIsIkNPTlRFTlQiLCJvcGVuUmF3QmxvY2siLCJyYXdCbG9ja19yZXBldGl0aW9uMCIsIkVORF9SQVdfQkxPQ0siLCJPUEVOX1JBV19CTE9DSyIsImhlbHBlck5hbWUiLCJvcGVuUmF3QmxvY2tfcmVwZXRpdGlvbjAiLCJvcGVuUmF3QmxvY2tfb3B0aW9uMCIsIkNMT1NFX1JBV19CTE9DSyIsIm9wZW5CbG9jayIsImJsb2NrX29wdGlvbjAiLCJjbG9zZUJsb2NrIiwib3BlbkludmVyc2UiLCJibG9ja19vcHRpb24xIiwiT1BFTl9CTE9DSyIsIm9wZW5CbG9ja19yZXBldGl0aW9uMCIsIm9wZW5CbG9ja19vcHRpb24wIiwib3BlbkJsb2NrX29wdGlvbjEiLCJDTE9TRSIsIk9QRU5fSU5WRVJTRSIsIm9wZW5JbnZlcnNlX3JlcGV0aXRpb24wIiwib3BlbkludmVyc2Vfb3B0aW9uMCIsIm9wZW5JbnZlcnNlX29wdGlvbjEiLCJvcGVuSW52ZXJzZUNoYWluIiwiT1BFTl9JTlZFUlNFX0NIQUlOIiwib3BlbkludmVyc2VDaGFpbl9yZXBldGl0aW9uMCIsIm9wZW5JbnZlcnNlQ2hhaW5fb3B0aW9uMCIsIm9wZW5JbnZlcnNlQ2hhaW5fb3B0aW9uMSIsImludmVyc2VBbmRQcm9ncmFtIiwiSU5WRVJTRSIsImludmVyc2VDaGFpbiIsImludmVyc2VDaGFpbl9vcHRpb24wIiwiT1BFTl9FTkRCTE9DSyIsIk9QRU4iLCJtdXN0YWNoZV9yZXBldGl0aW9uMCIsIm11c3RhY2hlX29wdGlvbjAiLCJPUEVOX1VORVNDQVBFRCIsIm11c3RhY2hlX3JlcGV0aXRpb24xIiwibXVzdGFjaGVfb3B0aW9uMSIsIkNMT1NFX1VORVNDQVBFRCIsIk9QRU5fUEFSVElBTCIsInBhcnRpYWxOYW1lIiwicGFydGlhbF9yZXBldGl0aW9uMCIsInBhcnRpYWxfb3B0aW9uMCIsIm9wZW5QYXJ0aWFsQmxvY2siLCJPUEVOX1BBUlRJQUxfQkxPQ0siLCJvcGVuUGFydGlhbEJsb2NrX3JlcGV0aXRpb24wIiwib3BlblBhcnRpYWxCbG9ja19vcHRpb24wIiwicGFyYW0iLCJzZXhwciIsIk9QRU5fU0VYUFIiLCJzZXhwcl9yZXBldGl0aW9uMCIsInNleHByX29wdGlvbjAiLCJDTE9TRV9TRVhQUiIsImhhc2hfcmVwZXRpdGlvbl9wbHVzMCIsImhhc2hTZWdtZW50IiwiSUQiLCJFUVVBTFMiLCJPUEVOX0JMT0NLX1BBUkFNUyIsImJsb2NrUGFyYW1zX3JlcGV0aXRpb25fcGx1czAiLCJDTE9TRV9CTE9DS19QQVJBTVMiLCJkYXRhTmFtZSIsIlNUUklORyIsIk5VTUJFUiIsIkJPT0xFQU4iLCJVTkRFRklORUQiLCJOVUxMIiwiREFUQSIsInBhdGhTZWdtZW50cyIsIlNFUCIsIiRhY2NlcHQiLCIkZW5kIiwidGVybWluYWxzXyIsInByb2R1Y3Rpb25zXyIsInBlcmZvcm1BY3Rpb24iLCIkIiwicHJlcGFyZVByb2dyYW0iLCJzdHJpcENvbW1lbnQiLCJzdHJpcCIsInN0cmlwRmxhZ3MiLCJfJCIsInByZXBhcmVSYXdCbG9jayIsInByZXBhcmVCbG9jayIsIm9wZW4iLCJjaGFpbmVkIiwiY2hhaW4iLCJwcmVwYXJlTXVzdGFjaGUiLCJwcmVwYXJlUGFydGlhbEJsb2NrIiwicGFpcnMiLCJOdW1iZXIiLCJwcmVwYXJlUGF0aCIsInBhcnQiLCJzZXBhcmF0b3IiLCJ0YWJsZSIsImRlZmF1bHRBY3Rpb25zIiwicGFyc2VFcnJvciIsImxleGVyIiwibGV4Iiwic2V0SW5wdXQiLCJ5eWxsb2MiLCJvcHRpb25zIiwicmFuZ2VzIiwic2hvd1Bvc2l0aW9uIiwidGV4dCIsIm1hdGNoIiwidG9rZW4iLCJ5eWxpbmVubyIsImV4cGVjdGVkIiwieXl0ZXh0IiwieXlsZW5nIiwiZmlyc3RfbGluZSIsImxhc3RfbGluZSIsImZpcnN0X2NvbHVtbiIsImxhc3RfY29sdW1uIiwicmFuZ2UiLCJfaW5wdXQiLCJfbW9yZSIsIl9sZXNzIiwibWF0Y2hlZCIsImNvbmRpdGlvblN0YWNrIiwib2Zmc2V0IiwiaW5wdXQiLCJ1bnB1dCIsInN1YnN0ciIsIm1vcmUiLCJsZXNzIiwicGFzdElucHV0IiwidXBjb21pbmdJbnB1dCIsIl9jdXJyZW50UnVsZXMiLCJydWxlcyIsImZsZXgiLCJtYXRjaGVzIiwiYmVnaW4iLCJwb3BTdGF0ZSIsInBvcCIsImNvbmRpdGlvbnMiLCJ0b3BTdGF0ZSIsInB1c2hTdGF0ZSIsInN1YnN0cmluZyIsIm11IiwiaW5jbHVzaXZlIiwiZW11IiwiY29tIiwicmF3IiwiSU5JVElBTCIsInJpZ2h0U3RyaXBwZWQiLCJsZWZ0U3RyaXBwZWQiLCJQcm9ncmFtIiwiaWdub3JlU3RhbmRhbG9uZSIsImlzUm9vdFNlZW4iLCJib2R5Iiwib3BlblN0YW5kYWxvbmUiLCJjbG9zZVN0YW5kYWxvbmUiLCJpbmxpbmVTdGFuZGFsb25lIiwiY2xvc2UiLCJleGVjIiwiQmxvY2tTdGF0ZW1lbnQiLCJEZWNvcmF0b3JCbG9jayIsIlBhcnRpYWxCbG9ja1N0YXRlbWVudCIsIm9wZW5TdHJpcCIsImNsb3NlU3RyaXAiLCJpbnZlcnNlU3RyaXAiLCJEZWNvcmF0b3IiLCJNdXN0YWNoZVN0YXRlbWVudCIsIlBhcnRpYWxTdGF0ZW1lbnQiLCJDb21tZW50U3RhdGVtZW50IiwicGFyZW50cyIsImFjY2VwdFJlcXVpcmVkIiwiYWNjZXB0QXJyYXkiLCJhY2NlcHRLZXkiLCJtdXRhdGluZyIsInNwbGljZSIsImN1cnJlbnQiLCJ1bnNoaWZ0Iiwic2hpZnQiLCJDb250ZW50U3RhdGVtZW50IiwiU3ViRXhwcmVzc2lvbiIsIlBhdGhFeHByZXNzaW9uIiwiU3RyaW5nTGl0ZXJhbCIsIk51bWJlckxpdGVyYWwiLCJCb29sZWFuTGl0ZXJhbCIsIlVuZGVmaW5lZExpdGVyYWwiLCJOdWxsTGl0ZXJhbCIsIkhhc2giLCJIYXNoUGFpciIsInNvdXJjZSIsImVzY2FwZWQiLCJjb21wYXQiLCJlcXVhbHMiLCJvcGNvZGVzIiwib3Bjb2RlIiwiY2hpbGRyZW4iLCJndWlkIiwic291cmNlTm9kZSIsInN0cmluZ1BhcmFtcyIsInRyYWNrSWRzIiwia25vd25IZWxwZXJzIiwiaGVscGVyTWlzc2luZyIsImJsb2NrSGVscGVyTWlzc2luZyIsInVubGVzcyIsImNvbXBpbGVQcm9ncmFtIiwiaXNTaW1wbGUiLCJjbGFzc2lmeVNleHByIiwiaGVscGVyU2V4cHIiLCJzaW1wbGVTZXhwciIsImFtYmlndW91c1NleHByIiwic2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMiLCJleHBsaWNpdFBhcnRpYWxDb250ZXh0IiwicHJldmVudEluZGVudCIsIm5vRXNjYXBlIiwia25vd25IZWxwZXJzT25seSIsImZhbHN5IiwiYWRkRGVwdGgiLCJibG9ja1BhcmFtSW5kZXgiLCJwdXNoUGFyYW0iLCJwdXNoUGFyYW1zIiwicG9wU3RhY2siLCJuYW1lTG9va3VwIiwiYWxpYXNhYmxlIiwicXVvdGVkU3RyaW5nIiwiY3VycmVudExvY2F0aW9uIiwiaW50ZXJuYWxOYW1lTG9va3VwIiwiZGVwdGhlZExvb2t1cCIsImFwcGVuZFRvQnVmZmVyIiwid3JhcCIsImVudmlyb25tZW50IiwiaW5pdGlhbGl6ZUJ1ZmZlciIsImxvb2t1cFByb3BlcnR5RnVuY3Rpb25Jc1VzZWQiLCJpc0NoaWxkIiwiY29udGV4dCIsImVudmlyb25tZW50cyIsInByZWFtYmxlIiwic3RhY2tTbG90Iiwic3RhY2tWYXJzIiwiYWxpYXNlcyIsInJlZ2lzdGVycyIsImxpc3QiLCJoYXNoZXMiLCJjb21waWxlU3RhY2siLCJpbmxpbmVTdGFjayIsImNvbXBpbGVDaGlsZHJlbiIsInB1c2hTb3VyY2UiLCJwcmVwZW5kIiwibG9va3VwUHJvcGVydHlGdW5jdGlvblZhckRlY2xhcmF0aW9uIiwibWVyZ2UiLCJjcmVhdGVGdW5jdGlvbkNvbnRleHQiLCJvYmplY3RMaXRlcmFsIiwidG9TdHJpbmdXaXRoU291cmNlTWFwIiwiZmlsZSIsImRlc3ROYW1lIiwibWFwIiwibGFzdENvbnRleHQiLCJyZWZlcmVuY2VDb3VudCIsIm1lcmdlU291cmNlIiwiZm9yY2VCdWZmZXIiLCJhZGQiLCJ0cmltIiwiYmxvY2tWYWx1ZSIsImNvbnRleHROYW1lIiwic2V0dXBIZWxwZXJBcmdzIiwiZnVuY3Rpb25DYWxsIiwiYW1iaWd1b3VzQmxvY2tWYWx1ZSIsImZsdXNoSW5saW5lIiwidG9wU3RhY2siLCJsYXN0SGVscGVyIiwiYXBwZW5kQ29udGVudCIsInBlbmRpbmdDb250ZW50IiwicGVuZGluZ0xvY2F0aW9uIiwiYXBwZW5kIiwiaXNJbmxpbmUiLCJyZXBsYWNlU3RhY2siLCJhcHBlbmRFc2NhcGVkIiwiZ2V0Q29udGV4dCIsInB1c2hDb250ZXh0IiwicHVzaFN0YWNrTGl0ZXJhbCIsImxvb2t1cE9uQ29udGV4dCIsInJlc29sdmVQYXRoIiwibG9va3VwQmxvY2tQYXJhbSIsImxvb2t1cERhdGEiLCJhc3N1bWVPYmplY3RzIiwicmVzb2x2ZVBvc3NpYmxlTGFtYmRhIiwicHVzaFN0cmluZ1BhcmFtIiwicHVzaFN0cmluZyIsImVtcHR5SGFzaCIsInB1c2hIYXNoIiwidHlwZXMiLCJjb250ZXh0cyIsInBvcEhhc2giLCJwdXNoTGl0ZXJhbCIsInB1c2hQcm9ncmFtIiwicHJvZ3JhbUV4cHJlc3Npb24iLCJpbnZva2VIZWxwZXIiLCJzZXR1cEhlbHBlciIsIml0ZW1zU2VwYXJhdGVkQnkiLCJjYWxsUGFyYW1zIiwiaW52b2tlS25vd25IZWxwZXIiLCJpbnZva2VBbWJpZ3VvdXMiLCJ1c2VSZWdpc3RlciIsInBhcmFtc0luaXQiLCJzZXR1cFBhcmFtcyIsImFzc2lnblRvSGFzaCIsInB1c2hJZCIsIm1hdGNoRXhpc3RpbmdQcm9ncmFtIiwiaW5jclN0YWNrIiwidG9wU3RhY2tOYW1lIiwiaGFzaElkcyIsImhhc2hUeXBlcyIsImhhc2hDb250ZXh0cyIsImdlbmVyYXRlQXJyYXkiLCJSRVNFUlZFRF9XT1JEUyIsImlzVmFsaWRKYXZhU2NyaXB0VmFyaWFibGVOYW1lIiwic3JjRmlsZSIsInNyYyIsImNvZGUiLCJlbXB0eSIsImdlbmVyYXRlTGlzdCIsIm5vVWlTbGlkZXIiLCJQcmljaW5nIiwic2xpZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmxhbmtWaWV3IiwicmVzdWx0VmlldyIsImhpZ2hWb2x1bWVWaWV3IiwiaW5zdHJ1Y3Rpb25zVmlldyIsInJlc3VsdFRvdGFsIiwicmVzdWx0QnJlYWtkb3duIiwibW9iaWxlVG90YWwiLCJtaW5fdm9sdW1lIiwibWF4X3ZvbHVtZSIsInBsYW5zIiwidm9sdW1lIiwicHJpY2UiLCJvdmVyYWdlc1ByaWNlIiwiaW5jcmVtZW50IiwiaW5pdCIsImdlbmVyYXRlUmFuZ2UiLCJjb25uZWN0IiwidG9vbHRpcHMiLCJ0byIsImdlbmVyYXRlVG9vbHRpcCIsInBpcHMiLCJtb2RlIiwiZ2VuZXJhdGVWYWx1ZXMiLCJkZW5zaXR5IiwiZm9ybWF0IiwidG9Mb2NhbGVTdHJpbmciLCJmcm9tIiwiYmFzZSIsImFwcGVuZENoaWxkIiwib24iLCJzbGlkZVBsYW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibGFiZWwiLCJ0YXJnZXQiLCJ0ZXh0Q29udGVudCIsInBsYW4iLCJ2b2x1bWVMYWJlbCIsImxvd2VzdFBhaWRQbGFuIiwibWluIiwibWF4IiwidG90YWxNYXJrcyIsIml0ZW1QZXJjZW50YWdlIiwicG9zaXRpb24iLCJyb3VuZCIsInVwZGF0ZUNhcmRzIiwicmVzdWx0IiwiZmluZFBsYW5Gb3JWb2x1bWUiLCJwbGFuQ29zdERldGFpbHMiLCJjYWxjdWxhdGVNb250aGx5Q29zdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNob3dGcmVlUGxhbiIsImJyZWFrZG93blRlbXBsYXRlIiwiYnJlYWtkb3duSHRtbCIsInBsYW5Wb2x1bWUiLCJwbGFuUHJpY2UiLCJ0b0ZpeGVkIiwiaGFzT3ZlcmFnZXMiLCJvdmVyYWdlcyIsIm92ZXJhZ2VzQ29zdCIsInBsYW5PdmVyYWdlc1ByaWNlIiwidG90YWxDb3N0IiwiaW5uZXJIVE1MIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiY3VycmVudF92b2x1bWUiLCJ1cGRhdGVNb2JpbGVUb3RhbCIsInJvdW5kZWRWb2x1bWUiLCJjdXJyZW50X3BsYW4iLCJ1cGRhdGVTdW1tYXJ5IiwidG9vbHRpcCIsInNob3dIaWdoVm9sdW1lUHJvbW8iLCJ2b2x1bWVGb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiY3VycmVuY3lGb3JtYXR0ZXIiLCJzdHlsZSIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwic2VsZWN0ZWRQbGFuIiwidW5kZWZpbmVkIiwicGxhbkNvc3QiLCJsb3dlc3RQYWlkQWN0aXZlIiwiYmVzdFBsYW4iLCJoZWFkZXIiLCJtaW5pbWl6ZWRIZWFkZXIiLCJkZXRhaWxlZEhlYWRlciIsImhhc0hpZGRlbkNsYXNzQmVlblJlbW92ZWQiLCJ0b2dnbGVIZWFkZXJWaXNpYmlsaXR5IiwiaXNWaXNpYmxlIiwidG9nZ2xlIiwiaGFuZGxlU2Nyb2xsIiwibWluaW1pemVkUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYmxlUmVjdCIsInNob3VsZFNob3dEZXRhaWxlZEhlYWRlciIsImJvdHRvbSIsImZvcm0iLCJ2b2x1bWVJbnB1dCIsInJlc2V0QnV0dG9uIiwicGxhblJvd3MiLCJlbnRlcnByaXNlUm93IiwiYWRkT25UaWVyUm93cyIsImFkZE9ucyIsImZldGNoUGxhbnMiLCJmZXRjaEFkZE9ucyIsInZvbHVtZUZvcm1TdWJtaXR0ZWQiLCJyb3ciLCJzZWxlY3RQbGFuIiwic2VsZWN0QWRkT24iLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwiY2hlY2tlZCIsImZpbmQiLCJyZXNldFBsYW5Sb3dzIiwiYWRkT25JZCIsImFkZE9uIiwiZGlzYWJsZWQiLCJyZXNldEFkZE9uUm93c0ZvckFsaWFzIiwiYWxpYXMiLCJnZXRBdHRyaWJ1dGUiLCJwYXJzZUZsb2F0IiwiaW5jbHVkZWQiLCJjb250YWlucyIsInNlbGVjdGVkQWRkT25zIiwiYWRkT25zVG90YWwiLCJyZXNldEFkZE9uUm93cyIsImZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=