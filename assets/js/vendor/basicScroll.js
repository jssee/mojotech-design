!(function(t) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
          ? self
          : this
    ).basicScroll = t();
  }
})(function() {
  return (function u(i, c, a) {
    function s(n, t) {
      if (!c[n]) {
        if (!i[n]) {
          var e = "function" == typeof require && require;
          if (!t && e) return e(n, !0);
          if (f) return f(n, !0);
          var r = new Error("Cannot find module '" + n + "'");
          throw ((r.code = "MODULE_NOT_FOUND"), r);
        }
        var o = (c[n] = { exports: {} });
        i[n][0].call(
          o.exports,
          function(t) {
            return s(i[n][1][t] || t);
          },
          o,
          o.exports,
          u,
          i,
          c,
          a
        );
      }
      return c[n].exports;
    }
    for (
      var f = "function" == typeof require && require, t = 0;
      t < a.length;
      t++
    )
      s(a[t]);
    return s;
  })(
    {
      1: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            var n = 2.5949095;
            return (t *= 2) < 1
              ? t * t * ((n + 1) * t - n) * 0.5
              : 0.5 * ((t -= 2) * t * ((n + 1) * t + n) + 2);
          };
        },
        {}
      ],
      2: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            var n = 1.70158;
            return t * t * ((n + 1) * t - n);
          };
        },
        {}
      ],
      3: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            var n = 1.70158;
            return --t * t * ((n + 1) * t + n) + 1;
          };
        },
        {}
      ],
      4: [
        function(t, n, e) {
          "use strict";
          var r = t("./bounce-out");
          n.exports = function(t) {
            return t < 0.5
              ? 0.5 * (1 - r(1 - 2 * t))
              : 0.5 * r(2 * t - 1) + 0.5;
          };
        },
        { "./bounce-out": 6 }
      ],
      5: [
        function(t, n, e) {
          "use strict";
          var r = t("./bounce-out");
          n.exports = function(t) {
            return 1 - r(1 - t);
          };
        },
        { "./bounce-out": 6 }
      ],
      6: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            var n = t * t;
            return t < 4 / 11
              ? 7.5625 * n
              : t < 8 / 11
                ? 9.075 * n - 9.9 * t + 3.4
                : t < 0.9
                  ? (4356 / 361) * n - (35442 / 1805) * t + 16061 / 1805
                  : 10.8 * t * t - 20.52 * t + 10.72;
          };
        },
        {}
      ],
      7: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return (t *= 2) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          };
        },
        {}
      ],
      8: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return 1 - Math.sqrt(1 - t * t);
          };
        },
        {}
      ],
      9: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return Math.sqrt(1 - --t * t);
          };
        },
        {}
      ],
      10: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
          };
        },
        {}
      ],
      11: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return t * t * t;
          };
        },
        {}
      ],
      12: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            var n = t - 1;
            return n * n * n + 1;
          };
        },
        {}
      ],
      13: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return t < 0.5
              ? 0.5 *
                  Math.sin(((13 * Math.PI) / 2) * 2 * t) *
                  Math.pow(2, 10 * (2 * t - 1))
              : 0.5 *
                  Math.sin(((-13 * Math.PI) / 2) * (2 * t - 1 + 1)) *
                  Math.pow(2, -10 * (2 * t - 1)) +
                  1;
          };
        },
        {}
      ],
      14: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return Math.sin((13 * t * Math.PI) / 2) * Math.pow(2, 10 * (t - 1));
          };
        },
        {}
      ],
      15: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return (
              Math.sin((-13 * (t + 1) * Math.PI) / 2) * Math.pow(2, -10 * t) + 1
            );
          };
        },
        {}
      ],
      16: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return 0 === t || 1 === t
              ? t
              : t < 0.5
                ? 0.5 * Math.pow(2, 20 * t - 10)
                : -0.5 * Math.pow(2, 10 - 20 * t) + 1;
          };
        },
        {}
      ],
      17: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return 0 === t ? t : Math.pow(2, 10 * (t - 1));
          };
        },
        {}
      ],
      18: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return 1 === t ? t : 1 - Math.pow(2, -10 * t);
          };
        },
        {}
      ],
      19: [
        function(t, n, e) {
          "use strict";
          n.exports = {
            backInOut: t("./back-in-out"),
            backIn: t("./back-in"),
            backOut: t("./back-out"),
            bounceInOut: t("./bounce-in-out"),
            bounceIn: t("./bounce-in"),
            bounceOut: t("./bounce-out"),
            circInOut: t("./circ-in-out"),
            circIn: t("./circ-in"),
            circOut: t("./circ-out"),
            cubicInOut: t("./cubic-in-out"),
            cubicIn: t("./cubic-in"),
            cubicOut: t("./cubic-out"),
            elasticInOut: t("./elastic-in-out"),
            elasticIn: t("./elastic-in"),
            elasticOut: t("./elastic-out"),
            expoInOut: t("./expo-in-out"),
            expoIn: t("./expo-in"),
            expoOut: t("./expo-out"),
            linear: t("./linear"),
            quadInOut: t("./quad-in-out"),
            quadIn: t("./quad-in"),
            quadOut: t("./quad-out"),
            quartInOut: t("./quart-in-out"),
            quartIn: t("./quart-in"),
            quartOut: t("./quart-out"),
            quintInOut: t("./quint-in-out"),
            quintIn: t("./quint-in"),
            quintOut: t("./quint-out"),
            sineInOut: t("./sine-in-out"),
            sineIn: t("./sine-in"),
            sineOut: t("./sine-out")
          };
        },
        {
          "./back-in": 2,
          "./back-in-out": 1,
          "./back-out": 3,
          "./bounce-in": 5,
          "./bounce-in-out": 4,
          "./bounce-out": 6,
          "./circ-in": 8,
          "./circ-in-out": 7,
          "./circ-out": 9,
          "./cubic-in": 11,
          "./cubic-in-out": 10,
          "./cubic-out": 12,
          "./elastic-in": 14,
          "./elastic-in-out": 13,
          "./elastic-out": 15,
          "./expo-in": 17,
          "./expo-in-out": 16,
          "./expo-out": 18,
          "./linear": 20,
          "./quad-in": 22,
          "./quad-in-out": 21,
          "./quad-out": 23,
          "./quart-in": 25,
          "./quart-in-out": 24,
          "./quart-out": 26,
          "./quint-in": 28,
          "./quint-in-out": 27,
          "./quint-out": 29,
          "./sine-in": 31,
          "./sine-in-out": 30,
          "./sine-out": 32
        }
      ],
      20: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return t;
          };
        },
        {}
      ],
      21: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
          };
        },
        {}
      ],
      22: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return t * t;
          };
        },
        {}
      ],
      23: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return -t * (t - 2);
          };
        },
        {}
      ],
      24: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return t < 0.5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1;
          };
        },
        {}
      ],
      25: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return Math.pow(t, 4);
          };
        },
        {}
      ],
      26: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return Math.pow(t - 1, 3) * (1 - t) + 1;
          };
        },
        {}
      ],
      27: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return (t *= 2) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2);
          };
        },
        {}
      ],
      28: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return t * t * t * t * t;
          };
        },
        {}
      ],
      29: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return --t * t * t * t * t + 1;
          };
        },
        {}
      ],
      30: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
          };
        },
        {}
      ],
      31: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            var n = Math.cos(t * Math.PI * 0.5);
            return Math.abs(n) < 1e-14 ? 1 : 1 - n;
          };
        },
        {}
      ],
      32: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t) {
            return Math.sin((t * Math.PI) / 2);
          };
        },
        {}
      ],
      33: [
        function(t, Xt, Yt) {
          (function(t) {
            "use strict";
            var s =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function(t) {
                      return typeof t;
                    }
                  : function(t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    },
              o = 200,
              r = "__lodash_hash_undefined__",
              e = 9007199254740991,
              x = "[object Arguments]",
              j = "[object Boolean]",
              O = "[object Date]",
              M = "[object Function]",
              q = "[object GeneratorFunction]",
              I = "[object Map]",
              E = "[object Number]",
              A = "[object Object]",
              u = "[object Promise]",
              k = "[object RegExp]",
              P = "[object Set]",
              S = "[object String]",
              $ = "[object Symbol]",
              i = "[object WeakMap]",
              F = "[object ArrayBuffer]",
              T = "[object DataView]",
              D = "[object Float32Array]",
              U = "[object Float64Array]",
              z = "[object Int8Array]",
              B = "[object Int16Array]",
              L = "[object Int32Array]",
              N = "[object Uint8Array]",
              C = "[object Uint8ClampedArray]",
              H = "[object Uint16Array]",
              R = "[object Uint32Array]",
              V = /\w*$/,
              c = /^\[object .+?Constructor\]$/,
              a = /^(?:0|[1-9]\d*)$/,
              W = {};
            (W[x] = W["[object Array]"] = W[F] = W[T] = W[j] = W[O] = W[D] = W[
              U
            ] = W[z] = W[B] = W[L] = W[I] = W[E] = W[A] = W[k] = W[P] = W[
              S
            ] = W[$] = W[N] = W[C] = W[H] = W[R] = !0),
              (W["[object Error]"] = W[M] = W[i] = !1);
            var n =
                "object" == (void 0 === t ? "undefined" : s(t)) &&
                t &&
                t.Object === Object &&
                t,
              f =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : s(self)) &&
                self &&
                self.Object === Object &&
                self,
              l = n || f || Function("return this")(),
              p =
                "object" == (void 0 === Yt ? "undefined" : s(Yt)) &&
                Yt &&
                !Yt.nodeType &&
                Yt,
              d =
                p &&
                "object" == (void 0 === Xt ? "undefined" : s(Xt)) &&
                Xt &&
                !Xt.nodeType &&
                Xt,
              h = d && d.exports === p;
            function G(t, n) {
              return t.set(n[0], n[1]), t;
            }
            function J(t, n) {
              return t.add(n), t;
            }
            function K(t, n, e, r) {
              var o = -1,
                u = t ? t.length : 0;
              for (r && u && (e = t[++o]); ++o < u; ) e = n(e, t[o], o, t);
              return e;
            }
            function Q(t) {
              var n = !1;
              if (null != t && "function" != typeof t.toString)
                try {
                  n = !!(t + "");
                } catch (t) {}
              return n;
            }
            function X(t) {
              var e = -1,
                r = Array(t.size);
              return (
                t.forEach(function(t, n) {
                  r[++e] = [n, t];
                }),
                r
              );
            }
            function v(n, e) {
              return function(t) {
                return n(e(t));
              };
            }
            function Y(t) {
              var n = -1,
                e = Array(t.size);
              return (
                t.forEach(function(t) {
                  e[++n] = t;
                }),
                e
              );
            }
            var b,
              y = Array.prototype,
              _ = Function.prototype,
              m = Object.prototype,
              g = l["__core-js_shared__"],
              w = (b = /[^.]+$/.exec((g && g.keys && g.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + b
                : "",
              Z = _.toString,
              tt = m.hasOwnProperty,
              nt = m.toString,
              et = RegExp(
                "^" +
                  Z.call(tt)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              rt = h ? l.Buffer : void 0,
              ot = l.Symbol,
              ut = l.Uint8Array,
              it = v(Object.getPrototypeOf, Object),
              ct = Object.create,
              at = m.propertyIsEnumerable,
              st = y.splice,
              ft = Object.getOwnPropertySymbols,
              lt = rt ? rt.isBuffer : void 0,
              pt = v(Object.keys, Object),
              dt = zt(l, "DataView"),
              ht = zt(l, "Map"),
              vt = zt(l, "Promise"),
              bt = zt(l, "Set"),
              yt = zt(l, "WeakMap"),
              _t = zt(Object, "create"),
              mt = Ht(dt),
              gt = Ht(ht),
              wt = Ht(vt),
              xt = Ht(bt),
              jt = Ht(yt),
              Ot = ot ? ot.prototype : void 0,
              Mt = Ot ? Ot.valueOf : void 0;
            function qt(t) {
              var n = -1,
                e = t ? t.length : 0;
              for (this.clear(); ++n < e; ) {
                var r = t[n];
                this.set(r[0], r[1]);
              }
            }
            function It(t) {
              var n = -1,
                e = t ? t.length : 0;
              for (this.clear(); ++n < e; ) {
                var r = t[n];
                this.set(r[0], r[1]);
              }
            }
            function Et(t) {
              var n = -1,
                e = t ? t.length : 0;
              for (this.clear(); ++n < e; ) {
                var r = t[n];
                this.set(r[0], r[1]);
              }
            }
            function At(t) {
              this.__data__ = new It(t);
            }
            function kt(t, n) {
              var e,
                r,
                o,
                u =
                  Vt(t) ||
                  ((o = r = e = t) &&
                    "object" == (void 0 === o ? "undefined" : s(o)) &&
                    Wt(r) &&
                    tt.call(e, "callee") &&
                    (!at.call(e, "callee") || nt.call(e) == x))
                    ? (function(t, n) {
                        for (var e = -1, r = Array(t); ++e < t; ) r[e] = n(e);
                        return r;
                      })(t.length, String)
                    : [],
                i = u.length,
                c = !!i;
              for (var a in t)
                (!n && !tt.call(t, a)) ||
                  (c && ("length" == a || Nt(a, i))) ||
                  u.push(a);
              return u;
            }
            function Pt(t, n, e) {
              var r = t[n];
              (tt.call(t, n) && Rt(r, e) && (void 0 !== e || n in t)) ||
                (t[n] = e);
            }
            function St(t, n) {
              for (var e = t.length; e--; ) if (Rt(t[e][0], n)) return e;
              return -1;
            }
            function $t(e, r, o, u, t, n, i) {
              var c;
              if ((u && (c = n ? u(e, t, n, i) : u(e)), void 0 !== c)) return c;
              if (!Kt(e)) return e;
              var a,
                s,
                f,
                l,
                p,
                d,
                h = Vt(e);
              if (h) {
                if (
                  ((c = (function(t) {
                    var n = t.length,
                      e = t.constructor(n);
                    n &&
                      "string" == typeof t[0] &&
                      tt.call(t, "index") &&
                      ((e.index = t.index), (e.input = t.input));
                    return e;
                  })(e)),
                  !r)
                )
                  return (function(t, n) {
                    var e = -1,
                      r = t.length;
                    n || (n = Array(r));
                    for (; ++e < r; ) n[e] = t[e];
                    return n;
                  })(e, c);
              } else {
                var v = Lt(e),
                  b = v == M || v == q;
                if (Gt(e))
                  return (function(t, n) {
                    if (n) return t.slice();
                    var e = new t.constructor(t.length);
                    return t.copy(e), e;
                  })(e, r);
                if (v == A || v == x || (b && !n)) {
                  if (Q(e)) return n ? e : {};
                  if (
                    ((c =
                      "function" != typeof (p = b ? {} : e).constructor || Ct(p)
                        ? {}
                        : Kt((d = it(p)))
                          ? ct(d)
                          : {}),
                    !r)
                  )
                    return (
                      (l = a = e),
                      (s = (f = c) && Dt(l, Qt(l), f)),
                      Dt(a, Bt(a), s)
                    );
                } else {
                  if (!W[v]) return n ? e : {};
                  c = (function(t, n, e, r) {
                    var o = t.constructor;
                    switch (n) {
                      case F:
                        return Tt(t);
                      case j:
                      case O:
                        return new o(+t);
                      case T:
                        return (
                          (h = t),
                          (v = r ? Tt(h.buffer) : h.buffer),
                          new h.constructor(v, h.byteOffset, h.byteLength)
                        );
                      case D:
                      case U:
                      case z:
                      case B:
                      case L:
                      case N:
                      case C:
                      case H:
                      case R:
                        return (
                          (p = t),
                          (d = r ? Tt(p.buffer) : p.buffer),
                          new p.constructor(d, p.byteOffset, p.length)
                        );
                      case I:
                        return (
                          (f = t),
                          (l = e),
                          K(r ? l(X(f), !0) : X(f), G, new f.constructor())
                        );
                      case E:
                      case S:
                        return new o(t);
                      case k:
                        return (
                          ((s = new (a = t).constructor(
                            a.source,
                            V.exec(a)
                          )).lastIndex =
                            a.lastIndex),
                          s
                        );
                      case P:
                        return (
                          (i = t),
                          (c = e),
                          K(r ? c(Y(i), !0) : Y(i), J, new i.constructor())
                        );
                      case $:
                        return (u = t), Mt ? Object(Mt.call(u)) : {};
                    }
                    var u;
                    var i, c;
                    var a, s;
                    var f, l;
                    var p, d;
                    var h, v;
                  })(e, v, $t, r);
                }
              }
              i || (i = new At());
              var y,
                _,
                m,
                g = i.get(e);
              if (g) return g;
              if ((i.set(e, c), !h))
                var w = o
                  ? ((_ = Bt),
                    (m = Qt((y = e))),
                    Vt(y)
                      ? m
                      : (function(t, n) {
                          for (
                            var e = -1, r = n.length, o = t.length;
                            ++e < r;

                          )
                            t[o + e] = n[e];
                          return t;
                        })(m, _(y)))
                  : Qt(e);
              return (
                (function(t, n) {
                  for (
                    var e = -1, r = t ? t.length : 0;
                    ++e < r && !1 !== n(t[e], e, t);

                  );
                })(w || e, function(t, n) {
                  w && (t = e[(n = t)]), Pt(c, n, $t(t, r, o, u, n, e, i));
                }),
                c
              );
            }
            function Ft(t) {
              return (
                !(!Kt(t) || ((n = t), w && w in n)) &&
                (Jt(t) || Q(t) ? et : c).test(Ht(t))
              );
              var n;
            }
            function Tt(t) {
              var n = new t.constructor(t.byteLength);
              return new ut(n).set(new ut(t)), n;
            }
            function Dt(t, n, e, r) {
              e || (e = {});
              for (var o = -1, u = n.length; ++o < u; ) {
                var i = n[o],
                  c = r ? r(e[i], t[i], i, e, t) : void 0;
                Pt(e, i, void 0 === c ? t[i] : c);
              }
              return e;
            }
            function Ut(t, n) {
              var e,
                r,
                o = t.__data__;
              return ("string" ==
                (r = void 0 === (e = n) ? "undefined" : s(e)) ||
              "number" == r ||
              "symbol" == r ||
              "boolean" == r
              ? "__proto__" !== e
              : null === e)
                ? o["string" == typeof n ? "string" : "hash"]
                : o.map;
            }
            function zt(t, n) {
              var e,
                r,
                o = ((r = n), null == (e = t) ? void 0 : e[r]);
              return Ft(o) ? o : void 0;
            }
            (qt.prototype.clear = function() {
              this.__data__ = _t ? _t(null) : {};
            }),
              (qt.prototype.delete = function(t) {
                return this.has(t) && delete this.__data__[t];
              }),
              (qt.prototype.get = function(t) {
                var n = this.__data__;
                if (_t) {
                  var e = n[t];
                  return e === r ? void 0 : e;
                }
                return tt.call(n, t) ? n[t] : void 0;
              }),
              (qt.prototype.has = function(t) {
                var n = this.__data__;
                return _t ? void 0 !== n[t] : tt.call(n, t);
              }),
              (qt.prototype.set = function(t, n) {
                return (this.__data__[t] = _t && void 0 === n ? r : n), this;
              }),
              (It.prototype.clear = function() {
                this.__data__ = [];
              }),
              (It.prototype.delete = function(t) {
                var n = this.__data__,
                  e = St(n, t);
                return !(
                  e < 0 || (e == n.length - 1 ? n.pop() : st.call(n, e, 1), 0)
                );
              }),
              (It.prototype.get = function(t) {
                var n = this.__data__,
                  e = St(n, t);
                return e < 0 ? void 0 : n[e][1];
              }),
              (It.prototype.has = function(t) {
                return -1 < St(this.__data__, t);
              }),
              (It.prototype.set = function(t, n) {
                var e = this.__data__,
                  r = St(e, t);
                return r < 0 ? e.push([t, n]) : (e[r][1] = n), this;
              }),
              (Et.prototype.clear = function() {
                this.__data__ = {
                  hash: new qt(),
                  map: new (ht || It)(),
                  string: new qt()
                };
              }),
              (Et.prototype.delete = function(t) {
                return Ut(this, t).delete(t);
              }),
              (Et.prototype.get = function(t) {
                return Ut(this, t).get(t);
              }),
              (Et.prototype.has = function(t) {
                return Ut(this, t).has(t);
              }),
              (Et.prototype.set = function(t, n) {
                return Ut(this, t).set(t, n), this;
              }),
              (At.prototype.clear = function() {
                this.__data__ = new It();
              }),
              (At.prototype.delete = function(t) {
                return this.__data__.delete(t);
              }),
              (At.prototype.get = function(t) {
                return this.__data__.get(t);
              }),
              (At.prototype.has = function(t) {
                return this.__data__.has(t);
              }),
              (At.prototype.set = function(t, n) {
                var e = this.__data__;
                if (e instanceof It) {
                  var r = e.__data__;
                  if (!ht || r.length < o - 1) return r.push([t, n]), this;
                  e = this.__data__ = new Et(r);
                }
                return e.set(t, n), this;
              });
            var Bt = ft
                ? v(ft, Object)
                : function() {
                    return [];
                  },
              Lt = function(t) {
                return nt.call(t);
              };
            function Nt(t, n) {
              return (
                !!(n = null == n ? e : n) &&
                ("number" == typeof t || a.test(t)) &&
                -1 < t &&
                t % 1 == 0 &&
                t < n
              );
            }
            function Ct(t) {
              var n = t && t.constructor;
              return t === (("function" == typeof n && n.prototype) || m);
            }
            function Ht(t) {
              if (null != t) {
                try {
                  return Z.call(t);
                } catch (t) {}
                try {
                  return t + "";
                } catch (t) {}
              }
              return "";
            }
            function Rt(t, n) {
              return t === n || (t != t && n != n);
            }
            ((dt && Lt(new dt(new ArrayBuffer(1))) != T) ||
              (ht && Lt(new ht()) != I) ||
              (vt && Lt(vt.resolve()) != u) ||
              (bt && Lt(new bt()) != P) ||
              (yt && Lt(new yt()) != i)) &&
              (Lt = function(t) {
                var n = nt.call(t),
                  e = n == A ? t.constructor : void 0,
                  r = e ? Ht(e) : void 0;
                if (r)
                  switch (r) {
                    case mt:
                      return T;
                    case gt:
                      return I;
                    case wt:
                      return u;
                    case xt:
                      return P;
                    case jt:
                      return i;
                  }
                return n;
              });
            var Vt = Array.isArray;
            function Wt(t) {
              return (
                null != t &&
                ("number" == typeof (n = t.length) &&
                  -1 < n &&
                  n % 1 == 0 &&
                  n <= e) &&
                !Jt(t)
              );
              var n;
            }
            var Gt =
              lt ||
              function() {
                return !1;
              };
            function Jt(t) {
              var n = Kt(t) ? nt.call(t) : "";
              return n == M || n == q;
            }
            function Kt(t) {
              var n = void 0 === t ? "undefined" : s(t);
              return !!t && ("object" == n || "function" == n);
            }
            function Qt(t) {
              return Wt(t)
                ? kt(t)
                : (function(t) {
                    if (!Ct(t)) return pt(t);
                    var n = [];
                    for (var e in Object(t))
                      tt.call(t, e) && "constructor" != e && n.push(e);
                    return n;
                  })(t);
            }
            Xt.exports = function(t) {
              return $t(t, !0, !0);
            };
          }.call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : {}
          ));
        },
        {}
      ],
      34: [
        function(t, n, e) {
          "use strict";
          n.exports = function(t, n) {
            n || (n = [0, ""]), (t = String(t));
            var e = parseFloat(t, 10);
            return (
              (n[0] = e), (n[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || ""), n
            );
          };
        },
        {}
      ],
      35: [
        function(t, n, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.create = void 0);
          var r = o(t("parse-unit")),
            u = o(t("lodash.clonedeep")),
            i = o(t("eases"));
          function o(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var c,
            a,
            s,
            f = [],
            l = function() {
              return (document.scrollingElement || document.documentElement)
                .scrollTop;
            },
            p = function(t) {
              return !1 === isNaN((0, r.default)(t)[0]);
            },
            d = function(t) {
              var n = (0, r.default)(t);
              return { value: n[0], unit: n[1] };
            },
            h = function(t) {
              return null !== String(t).match(/^[a-z]+-[a-z]+$/);
            },
            v = function(t, n) {
              var e =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : l(),
                r =
                  3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : window.innerHeight || window.outerHeight,
                o = n.getBoundingClientRect(),
                u = t.match(/^[a-z]+/)[0],
                i = t.match(/[a-z]+$/)[0],
                c = 0;
              return (
                "top" === i && (c -= 0),
                "middle" === i && (c -= r / 2),
                "bottom" === i && (c -= r),
                "top" === u && (c += o.top + e),
                "middle" === u && (c += o.top + e + o.height / 2),
                "bottom" === u && (c += o.top + e + o.height),
                c + "px"
              );
            },
            b = function(t) {
              var n,
                e,
                r =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : l(),
                a = t.getData(),
                o = a.to.value - a.from.value,
                u = (r - a.from.value) / (o / 100),
                s = Math.min(Math.max(u, 0), 100),
                i = ((n = a.direct),
                (e = {
                  global: document.documentElement,
                  elem: a.elem,
                  direct: a.direct
                }),
                !0 === n
                  ? e.elem
                  : n instanceof HTMLElement == 1
                    ? e.direct
                    : e.global),
                c = Object.keys(a.props).reduce(function(t, n) {
                  var e = a.props[n],
                    r = e.from.unit || e.to.unit,
                    o = e.from.value - e.to.value,
                    u = e.timing(s / 100),
                    i = e.from.value - o * u,
                    c = Math.round(1e4 * i) / 1e4;
                  return (t[n] = c + r), t;
                }, {}),
                f = u < 0 || 100 < u;
              return (
                !0 === (0 <= u && u <= 100) && a.inside(t, u, c),
                !0 === f && a.outside(t, u, c),
                { elem: i, props: c }
              );
            },
            y = function(r, o) {
              Object.keys(o).forEach(function(t) {
                return (
                  (n = r),
                  (e = { key: t, value: o[t] }),
                  void n.style.setProperty(e.key, e.value)
                );
                var n, e;
              });
            };
          e.create = function(t) {
            var n = null,
              e = !1,
              r = {
                isActive: function() {
                  return e;
                },
                getData: function() {
                  return n;
                },
                calculate: function() {
                  n = (function() {
                    var e =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    if (null == (e = (0, u.default)(e)).from)
                      throw new Error("Missing property `from`");
                    if (null == e.to) throw new Error("Missing property `to`");
                    if (
                      (null == e.inside && (e.inside = function() {}),
                      null == e.outside && (e.outside = function() {}),
                      !0 === e.direct && null == e.elem)
                    )
                      throw new Error(
                        "Property `elem` required when `direct` is true"
                      );
                    if (
                      (!0 !== e.direct &&
                        e.direct instanceof HTMLElement == 0 &&
                        (e.direct = !1),
                      !1 !== e.track && (e.track = !0),
                      "function" != typeof e.inside)
                    )
                      throw new Error("Property `inside` must be a function");
                    if ("function" != typeof e.outside)
                      throw new Error("Property `outside` must be a function");
                    if (null == e.elem) {
                      if (!1 === p(e.from))
                        throw new Error(
                          "Property `from` must be a absolute value when no `elem` has been provided"
                        );
                      if (!1 === p(e.to))
                        throw new Error(
                          "Property `to` must be a absolute value when no `elem` has been provided"
                        );
                    } else
                      !0 === h(e.from) && (e.from = v(e.from, e.elem)),
                        !0 === h(e.to) && (e.to = v(e.to, e.elem));
                    return (
                      (e.from = d(e.from)),
                      (e.to = d(e.to)),
                      null == e.props && (e.props = {}),
                      Object.keys(e.props).forEach(function(t) {
                        var n = e.props[t];
                        if (!1 === p(n.from))
                          throw new Error(
                            "Property `from` of prop must be a absolute value"
                          );
                        if (!1 === p(n.to))
                          throw new Error(
                            "Property `from` of prop must be a absolute value"
                          );
                        if (
                          ((n.from = d(n.from)),
                          (n.to = d(n.to)),
                          "string" == typeof n.timing &&
                            null == i.default[n.timing])
                        )
                          throw new Error(
                            "Unknown timing for property `timing` of prop"
                          );
                        null == n.timing && (n.timing = i.default.linear),
                          "string" == typeof n.timing &&
                            (n.timing = i.default[n.timing]);
                      }),
                      e
                    );
                  })(t);
                },
                update: function() {
                  var t = b(r),
                    n = t.elem,
                    e = t.props;
                  return y(n, e), e;
                },
                start: function() {
                  e = !0;
                },
                stop: function() {
                  e = !1;
                },
                destroy: function() {
                  f[o] = void 0;
                }
              },
              o = f.push(r) - 1;
            return r.calculate(), r;
          };
          !(function t(n, e) {
            var r = function() {
                requestAnimationFrame(function() {
                  return t(n, e);
                });
              },
              o = f.filter(function(t) {
                return null != t && t.isActive();
              });
            if (0 === o.length) return r();
            var u = l();
            if (e === u) return r();
            (e = u),
              o
                .map(function(t) {
                  return b(t, u);
                })
                .forEach(function(t) {
                  var n = t.elem,
                    e = t.props;
                  return y(n, e);
                }),
              r();
          })(),
            window.addEventListener(
              "resize",
              ((c = function() {
                f.filter(function(t) {
                  return null != t && t.getData().track;
                }).forEach(function(t) {
                  t.calculate(), t.update();
                });
              }),
              (a = 50),
              (s = null),
              function() {
                for (var t = arguments.length, n = Array(t), e = 0; e < t; e++)
                  n[e] = arguments[e];
                clearTimeout(s),
                  (s = setTimeout(function() {
                    return c.apply(void 0, n);
                  }, a));
              })
            );
        },
        { eases: 19, "lodash.clonedeep": 33, "parse-unit": 34 }
      ]
    },
    {},
    [35]
  )(35);
});
