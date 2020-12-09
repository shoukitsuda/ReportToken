/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
  724: function (t, e, n) {
    "use strict";
    e.__esModule = !0, e.default = {
      el: {
        colorpicker: {confirm: "OK", clear: "クリア"},
        datepicker: {
          now: "現在",
          today: "今日",
          cancel: "キャンセル",
          clear: "クリア",
          confirm: "OK",
          selectDate: "日付を選択",
          selectTime: "時間を選択",
          startDate: "開始日",
          startTime: "開始時間",
          endDate: "終了日",
          endTime: "終了時間",
          prevYear: "前年",
          nextYear: "翌年",
          prevMonth: "前月",
          nextMonth: "翌月",
          year: "年",
          month1: "1月",
          month2: "2月",
          month3: "3月",
          month4: "4月",
          month5: "5月",
          month6: "6月",
          month7: "7月",
          month8: "8月",
          month9: "9月",
          month10: "10月",
          month11: "11月",
          month12: "12月",
          weeks: {sun: "日", mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土"},
          months: {
            jan: "1月",
            feb: "2月",
            mar: "3月",
            apr: "4月",
            may: "5月",
            jun: "6月",
            jul: "7月",
            aug: "8月",
            sep: "9月",
            oct: "10月",
            nov: "11月",
            dec: "12月"
          }
        },
        select: {loading: "ロード中", noMatch: "データなし", noData: "データなし", placeholder: "選択してください"},
        cascader: {noMatch: "データなし", loading: "ロード中", placeholder: "選択してください", noData: "データなし"},
        pagination: {goto: "", pagesize: "件/ページ", total: "総計 {total} 件", pageClassifier: "ページ目へ"},
        messagebox: {title: "メッセージ", confirm: "OK", cancel: "キャンセル", error: "正しくない入力"},
        upload: {deleteTip: "Delキーを押して削除する", delete: "削除する", preview: "プレビュー", continue: "続行する"},
        table: {emptyText: "データなし", confirmFilter: "確認", resetFilter: "初期化", clearFilter: "すべて", sumText: "合計"},
        tree: {emptyText: "データなし"},
        transfer: {
          noMatch: "データなし",
          noData: "データなし",
          titles: ["リスト 1", "リスト 2"],
          filterPlaceholder: "キーワードを入力",
          noCheckedFormat: "総計 {total} 件",
          hasCheckedFormat: "{checked}/{total} を選択した"
        },
        image: {error: "FAILED"},
        pageHeader: {title: "Back"},
        popconfirm: {confirmButtonText: "Yes", cancelButtonText: "No"}
      }
    }
  }, 732: function (t, e, n) {
    "use strict";

    function r(t) {
      return t && "object" == typeof t && "default" in t ? t : {default: t}
    }

    var o = r(n(801));
    o.default.registerVersion("firebase", "7.24.0", "app"), t.exports = o.default
  }, 750: function (t, e, n) {
    "use strict";
    n(877)
  }, 766: function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "__extends", (function () {
      return o
    })), n.d(e, "__assign", (function () {
      return c
    })), n.d(e, "__rest", (function () {
      return h
    })), n.d(e, "__decorate", (function () {
      return f
    })), n.d(e, "__param", (function () {
      return l
    })), n.d(e, "__metadata", (function () {
      return d
    })), n.d(e, "__awaiter", (function () {
      return v
    })), n.d(e, "__generator", (function () {
      return y
    })), n.d(e, "__createBinding", (function () {
      return m
    })), n.d(e, "__exportStar", (function () {
      return w
    })), n.d(e, "__values", (function () {
      return _
    })), n.d(e, "__read", (function () {
      return E
    })), n.d(e, "__spread", (function () {
      return I
    })), n.d(e, "__spreadArrays", (function () {
      return T
    })), n.d(e, "__await", (function () {
      return A
    })), n.d(e, "__asyncGenerator", (function () {
      return N
    })), n.d(e, "__asyncDelegator", (function () {
      return S
    })), n.d(e, "__asyncValues", (function () {
      return D
    })), n.d(e, "__makeTemplateObject", (function () {
      return x
    })), n.d(e, "__importStar", (function () {
      return O
    })), n.d(e, "__importDefault", (function () {
      return L
    })), n.d(e, "__classPrivateFieldGet", (function () {
      return k
    })), n.d(e, "__classPrivateFieldSet", (function () {
      return C
    }));
    var r = function (t, b) {
      return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, b) {
        t.__proto__ = b
      } || function (t, b) {
        for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p])
      })(t, b)
    };

    function o(t, b) {
      function e() {
        this.constructor = t
      }

      r(t, b), t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype, new e)
    }

    var c = function () {
      return (c = Object.assign || function (t) {
        for (var s, i = 1, e = arguments.length; i < e; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        return t
      }).apply(this, arguments)
    };

    function h(s, t) {
      var e = {};
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && t.indexOf(p) < 0 && (e[p] = s[p]);
      if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) t.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (e[p[i]] = s[p[i]])
      }
      return e
    }

    function f(t, e, n, desc) {
      var r, o = arguments.length, c = o < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc); else for (var i = t.length - 1; i >= 0; i--) (r = t[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(e, n, c) : r(e, n)) || c);
      return o > 3 && c && Object.defineProperty(e, n, c), c
    }

    function l(t, e) {
      return function (n, r) {
        e(n, r, t)
      }
    }

    function d(t, e) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
    }

    function v(t, e, n, r) {
      return new (n || (n = Promise))((function (o, c) {
        function h(t) {
          try {
            l(r.next(t))
          } catch (t) {
            c(t)
          }
        }

        function f(t) {
          try {
            l(r.throw(t))
          } catch (t) {
            c(t)
          }
        }

        function l(t) {
          var e;
          t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
            t(e)
          }))).then(h, f)
        }

        l((r = r.apply(t, e || [])).next())
      }))
    }

    function y(t, body) {
      var e, n, r, g, o = {
        label: 0, sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1]
        }, trys: [], ops: []
      };
      return g = {
        next: c(0),
        throw: c(1),
        return: c(2)
      }, "function" == typeof Symbol && (g[Symbol.iterator] = function () {
        return this
      }), g;

      function c(c) {
        return function (h) {
          return function (c) {
            if (e) throw new TypeError("Generator is already executing.");
            for (; o;) try {
              if (e = 1, n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, c[1])).done) return r;
              switch (n = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                case 0:
                case 1:
                  r = c;
                  break;
                case 4:
                  return o.label++, {value: c[1], done: !1};
                case 5:
                  o.label++, n = c[1], c = [0];
                  continue;
                case 7:
                  c = o.ops.pop(), o.trys.pop();
                  continue;
                default:
                  if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                    o = 0;
                    continue
                  }
                  if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                    o.label = c[1];
                    break
                  }
                  if (6 === c[0] && o.label < r[1]) {
                    o.label = r[1], r = c;
                    break
                  }
                  if (r && o.label < r[2]) {
                    o.label = r[2], o.ops.push(c);
                    break
                  }
                  r[2] && o.ops.pop(), o.trys.pop();
                  continue
              }
              c = body.call(t, o)
            } catch (t) {
              c = [6, t], n = 0
            } finally {
              e = r = 0
            }
            if (5 & c[0]) throw c[1];
            return {value: c[0] ? c[1] : void 0, done: !0}
          }([c, h])
        }
      }
    }

    function m(t, e, n, r) {
      void 0 === r && (r = n), t[r] = e[n]
    }

    function w(t, e) {
      for (var p in t) "default" === p || e.hasOwnProperty(p) || (e[p] = t[p])
    }

    function _(t) {
      var s = "function" == typeof Symbol && Symbol.iterator, e = s && t[s], i = 0;
      if (e) return e.call(t);
      if (t && "number" == typeof t.length) return {
        next: function () {
          return t && i >= t.length && (t = void 0), {value: t && t[i++], done: !t}
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function E(t, e) {
      var n = "function" == typeof Symbol && t[Symbol.iterator];
      if (!n) return t;
      var r, o, i = n.call(t), c = [];
      try {
        for (; (void 0 === e || e-- > 0) && !(r = i.next()).done;) c.push(r.value)
      } catch (t) {
        o = {error: t}
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return c
    }

    function I() {
      for (var t = [], i = 0; i < arguments.length; i++) t = t.concat(E(arguments[i]));
      return t
    }

    function T() {
      for (var s = 0, i = 0, t = arguments.length; i < t; i++) s += arguments[i].length;
      var e = Array(s), n = 0;
      for (i = 0; i < t; i++) for (var a = arguments[i], r = 0, o = a.length; r < o; r++, n++) e[n] = a[r];
      return e
    }

    function A(t) {
      return this instanceof A ? (this.v = t, this) : new A(t)
    }

    function N(t, e, n) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var i, g = n.apply(t, e || []), q = [];
      return i = {}, r("next"), r("throw"), r("return"), i[Symbol.asyncIterator] = function () {
        return this
      }, i;

      function r(t) {
        g[t] && (i[t] = function (e) {
          return new Promise((function (a, b) {
            q.push([t, e, a, b]) > 1 || o(t, e)
          }))
        })
      }

      function o(t, e) {
        try {
          (n = g[t](e)).value instanceof A ? Promise.resolve(n.value.v).then(c, h) : f(q[0][2], n)
        } catch (t) {
          f(q[0][3], t)
        }
        var n
      }

      function c(t) {
        o("next", t)
      }

      function h(t) {
        o("throw", t)
      }

      function f(t, e) {
        t(e), q.shift(), q.length && o(q[0][0], q[0][1])
      }
    }

    function S(t) {
      var i, p;
      return i = {}, e("next"), e("throw", (function (t) {
        throw t
      })), e("return"), i[Symbol.iterator] = function () {
        return this
      }, i;

      function e(e, n) {
        i[e] = t[e] ? function (r) {
          return (p = !p) ? {value: A(t[e](r)), done: "return" === e} : n ? n(r) : r
        } : n
      }
    }

    function D(t) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var i, e = t[Symbol.asyncIterator];
      return e ? e.call(t) : (t = _(t), i = {}, n("next"), n("throw"), n("return"), i[Symbol.asyncIterator] = function () {
        return this
      }, i);

      function n(e) {
        i[e] = t[e] && function (n) {
          return new Promise((function (r, o) {
            (function (t, e, n, r) {
              Promise.resolve(r).then((function (e) {
                t({value: e, done: n})
              }), e)
            })(r, o, (n = t[e](n)).done, n.value)
          }))
        }
      }
    }

    function x(t, e) {
      return Object.defineProperty ? Object.defineProperty(t, "raw", {value: e}) : t.raw = e, t
    }

    function O(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e.default = t, e
    }

    function L(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function k(t, e) {
      if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
      return e.get(t)
    }

    function C(t, e, n) {
      if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
      return e.set(t, n), n
    }
  }, 771: function (t, e, n) {
    "use strict";
    (function (t) {
      Object.defineProperty(e, "__esModule", {value: !0});
      var r = n(766), o = {NODE_CLIENT: !1, NODE_ADMIN: !1, SDK_VERSION: "${JSCORE_VERSION}"}, c = function (t, e) {
        if (!t) throw h(e)
      }, h = function (t) {
        return new Error("Firebase Database (" + o.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t)
      }, f = function (t) {
        for (var e = [], p = 0, i = 0; i < t.length; i++) {
          var n = t.charCodeAt(i);
          n < 128 ? e[p++] = n : n < 2048 ? (e[p++] = n >> 6 | 192, e[p++] = 63 & n | 128) : 55296 == (64512 & n) && i + 1 < t.length && 56320 == (64512 & t.charCodeAt(i + 1)) ? (n = 65536 + ((1023 & n) << 10) + (1023 & t.charCodeAt(++i)), e[p++] = n >> 18 | 240, e[p++] = n >> 12 & 63 | 128, e[p++] = n >> 6 & 63 | 128, e[p++] = 63 & n | 128) : (e[p++] = n >> 12 | 224, e[p++] = n >> 6 & 63 | 128, e[p++] = 63 & n | 128)
        }
        return e
      }, l = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: "function" == typeof atob,
        encodeByteArray: function (input, t) {
          if (!Array.isArray(input)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          for (var e = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, output = [], i = 0; i < input.length; i += 3) {
            var n = input[i], r = i + 1 < input.length, o = r ? input[i + 1] : 0, c = i + 2 < input.length,
              h = c ? input[i + 2] : 0, f = n >> 2, l = (3 & n) << 4 | o >> 4, d = (15 & o) << 2 | h >> 6, v = 63 & h;
            c || (v = 64, r || (d = 64)), output.push(e[f], e[l], e[d], e[v])
          }
          return output.join("")
        },
        encodeString: function (input, t) {
          return this.HAS_NATIVE_SUPPORT && !t ? btoa(input) : this.encodeByteArray(f(input), t)
        },
        decodeString: function (input, t) {
          return this.HAS_NATIVE_SUPPORT && !t ? atob(input) : function (t) {
            for (var e = [], n = 0, r = 0; n < t.length;) {
              var o = t[n++];
              if (o < 128) e[r++] = String.fromCharCode(o); else if (o > 191 && o < 224) {
                var c = t[n++];
                e[r++] = String.fromCharCode((31 & o) << 6 | 63 & c)
              } else if (o > 239 && o < 365) {
                var u = ((7 & o) << 18 | (63 & (c = t[n++])) << 12 | (63 & (h = t[n++])) << 6 | 63 & t[n++]) - 65536;
                e[r++] = String.fromCharCode(55296 + (u >> 10)), e[r++] = String.fromCharCode(56320 + (1023 & u))
              } else {
                c = t[n++];
                var h = t[n++];
                e[r++] = String.fromCharCode((15 & o) << 12 | (63 & c) << 6 | 63 & h)
              }
            }
            return e.join("")
          }(this.decodeStringToByteArray(input, t))
        },
        decodeStringToByteArray: function (input, t) {
          this.init_();
          for (var e = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, output = [], i = 0; i < input.length;) {
            var n = e[input.charAt(i++)], r = i < input.length ? e[input.charAt(i)] : 0,
              o = ++i < input.length ? e[input.charAt(i)] : 64, c = ++i < input.length ? e[input.charAt(i)] : 64;
            if (++i, null == n || null == r || null == o || null == c) throw Error();
            var h = n << 2 | r >> 4;
            if (output.push(h), 64 !== o) {
              var f = r << 4 & 240 | o >> 2;
              if (output.push(f), 64 !== c) {
                var l = o << 6 & 192 | c;
                output.push(l)
              }
            }
          }
          return output
        },
        init_: function () {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
            for (var i = 0; i < this.ENCODED_VALS.length; i++) this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i), this.charToByteMap_[this.byteToCharMap_[i]] = i, this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i, i >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i)
          }
        }
      }, d = function (t) {
        try {
          return l.decodeString(t, !0)
        } catch (t) {
          console.error("base64Decode failed: ", t)
        }
        return null
      };

      function v(t, source) {
        if (!(source instanceof Object)) return source;
        switch (source.constructor) {
          case Date:
            return new Date(source.getTime());
          case Object:
            void 0 === t && (t = {});
            break;
          case Array:
            t = [];
            break;
          default:
            return source
        }
        for (var e in source) source.hasOwnProperty(e) && (t[e] = v(t[e], source[e]));
        return t
      }

      var y = function () {
        function t() {
          var t = this;
          this.reject = function () {
          }, this.resolve = function () {
          }, this.promise = new Promise((function (e, n) {
            t.resolve = e, t.reject = n
          }))
        }

        return t.prototype.wrapCallback = function (t) {
          var e = this;
          return function (n, r) {
            n ? e.reject(n) : e.resolve(r), "function" == typeof t && (e.promise.catch((function () {
            })), 1 === t.length ? t(n) : t(n, r))
          }
        }, t
      }();

      function m() {
        return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
      }

      function w() {
        try {
          return "[object process]" === Object.prototype.toString.call(t.process)
        } catch (t) {
          return !1
        }
      }

      var _ = function (t) {
        function e(code, n) {
          var r = t.call(this, n) || this;
          return r.code = code, r.name = "FirebaseError", Object.setPrototypeOf(r, e.prototype), Error.captureStackTrace && Error.captureStackTrace(r, E.prototype.create), r
        }

        return r.__extends(e, t), e
      }(Error), E = function () {
        function t(t, e, n) {
          this.service = t, this.serviceName = e, this.errors = n
        }

        return t.prototype.create = function (code) {
          for (var data = [], t = 1; t < arguments.length; t++) data[t - 1] = arguments[t];
          for (var e = data[0] || {}, n = this.service + "/" + code, template = this.errors[code], r = template ? I(template, e) : "Error", o = this.serviceName + ": " + r + " (" + n + ").", c = new _(n, o), h = 0, f = Object.keys(e); h < f.length; h++) {
            var l = f[h];
            "_" !== l.slice(-1) && (l in c && console.warn('Overwriting FirebaseError base field "' + l + '" can cause unexpected behavior.'), c[l] = e[l])
          }
          return c
        }, t
      }();

      function I(template, data) {
        return template.replace(T, (function (t, e) {
          var n = data[e];
          return null != n ? String(n) : "<" + e + "?>"
        }))
      }

      var T = /\{\$([^}]+)}/g;

      function A(t) {
        return JSON.parse(t)
      }

      var N = function (t) {
        var header = {}, e = {}, data = {}, n = "";
        try {
          var r = t.split(".");
          header = A(d(r[0]) || ""), e = A(d(r[1]) || ""), n = r[2], data = e.d || {}, delete e.d
        } catch (t) {
        }
        return {header: header, claims: e, data: data, signature: n}
      };
      var S = function () {
        function t() {
          this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
          for (var i = 1; i < this.blockSize; ++i) this.pad_[i] = 0;
          this.reset()
        }

        return t.prototype.reset = function () {
          this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
        }, t.prototype.compress_ = function (t, e) {
          e || (e = 0);
          var n = this.W_;
          if ("string" == typeof t) for (var i = 0; i < 16; i++) n[i] = t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3), e += 4; else for (i = 0; i < 16; i++) n[i] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], e += 4;
          for (i = 16; i < 80; i++) {
            var r = n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16];
            n[i] = 4294967295 & (r << 1 | r >>> 31)
          }
          var o, c, a = this.chain_[0], b = this.chain_[1], h = this.chain_[2], f = this.chain_[3], l = this.chain_[4];
          for (i = 0; i < 80; i++) {
            i < 40 ? i < 20 ? (o = f ^ b & (h ^ f), c = 1518500249) : (o = b ^ h ^ f, c = 1859775393) : i < 60 ? (o = b & h | f & (b | h), c = 2400959708) : (o = b ^ h ^ f, c = 3395469782);
            r = (a << 5 | a >>> 27) + o + l + c + n[i] & 4294967295;
            l = f, f = h, h = 4294967295 & (b << 30 | b >>> 2), b = a, a = r
          }
          this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + b & 4294967295, this.chain_[2] = this.chain_[2] + h & 4294967295, this.chain_[3] = this.chain_[3] + f & 4294967295, this.chain_[4] = this.chain_[4] + l & 4294967295
        }, t.prototype.update = function (t, e) {
          if (null != t) {
            void 0 === e && (e = t.length);
            for (var n = e - this.blockSize, r = 0, o = this.buf_, c = this.inbuf_; r < e;) {
              if (0 === c) for (; r <= n;) this.compress_(t, r), r += this.blockSize;
              if ("string" == typeof t) {
                for (; r < e;) if (o[c] = t.charCodeAt(r), ++r, ++c === this.blockSize) {
                  this.compress_(o), c = 0;
                  break
                }
              } else for (; r < e;) if (o[c] = t[r], ++r, ++c === this.blockSize) {
                this.compress_(o), c = 0;
                break
              }
            }
            this.inbuf_ = c, this.total_ += e
          }
        }, t.prototype.digest = function () {
          var t = [], e = 8 * this.total_;
          this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          for (var i = this.blockSize - 1; i >= 56; i--) this.buf_[i] = 255 & e, e /= 256;
          this.compress_(this.buf_);
          var n = 0;
          for (i = 0; i < 5; i++) for (var r = 24; r >= 0; r -= 8) t[n] = this.chain_[i] >> r & 255, ++n;
          return t
        }, t
      }();
      var D = function () {
        function t(t, e) {
          var n = this;
          this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = e, this.task.then((function () {
            t(n)
          })).catch((function (t) {
            n.error(t)
          }))
        }

        return t.prototype.next = function (t) {
          this.forEachObserver((function (e) {
            e.next(t)
          }))
        }, t.prototype.error = function (t) {
          this.forEachObserver((function (e) {
            e.error(t)
          })), this.close(t)
        }, t.prototype.complete = function () {
          this.forEachObserver((function (t) {
            t.complete()
          })), this.close()
        }, t.prototype.subscribe = function (t, e, n) {
          var r, o = this;
          if (void 0 === t && void 0 === e && void 0 === n) throw new Error("Missing Observer.");
          void 0 === (r = function (t, e) {
            if ("object" != typeof t || null === t) return !1;
            for (var n = 0, r = e; n < r.length; n++) {
              var o = r[n];
              if (o in t && "function" == typeof t[o]) return !0
            }
            return !1
          }(t, ["next", "error", "complete"]) ? t : {
            next: t,
            error: e,
            complete: n
          }).next && (r.next = x), void 0 === r.error && (r.error = x), void 0 === r.complete && (r.complete = x);
          var c = this.unsubscribeOne.bind(this, this.observers.length);
          return this.finalized && this.task.then((function () {
            try {
              o.finalError ? r.error(o.finalError) : r.complete()
            } catch (t) {
            }
          })), this.observers.push(r), c
        }, t.prototype.unsubscribeOne = function (i) {
          void 0 !== this.observers && void 0 !== this.observers[i] && (delete this.observers[i], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
        }, t.prototype.forEachObserver = function (t) {
          if (!this.finalized) for (var i = 0; i < this.observers.length; i++) this.sendOne(i, t)
        }, t.prototype.sendOne = function (i, t) {
          var e = this;
          this.task.then((function () {
            if (void 0 !== e.observers && void 0 !== e.observers[i]) try {
              t(e.observers[i])
            } catch (t) {
              "undefined" != typeof console && console.error && console.error(t)
            }
          }))
        }, t.prototype.close = function (t) {
          var e = this;
          this.finalized || (this.finalized = !0, void 0 !== t && (this.finalError = t), this.task.then((function () {
            e.observers = void 0, e.onNoObservers = void 0
          })))
        }, t
      }();

      function x() {
      }

      function O(t, e, n) {
        var r = "";
        switch (e) {
          case 1:
            r = n ? "first" : "First";
            break;
          case 2:
            r = n ? "second" : "Second";
            break;
          case 3:
            r = n ? "third" : "Third";
            break;
          case 4:
            r = n ? "fourth" : "Fourth";
            break;
          default:
            throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
        }
        var o = t + " failed: ";
        return o += r + " argument "
      }

      e.CONSTANTS = o, e.Deferred = y, e.ErrorFactory = E, e.FirebaseError = _, e.MAX_VALUE_MILLIS = 144e5, e.RANDOM_FACTOR = .5, e.Sha1 = S, e.areCookiesEnabled = function () {
        return !(!navigator || !navigator.cookieEnabled)
      }, e.assert = c, e.assertionError = h, e.async = function (t, e) {
        return function () {
          for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          Promise.resolve(!0).then((function () {
            t.apply(void 0, n)
          })).catch((function (t) {
            e && e(t)
          }))
        }
      }, e.base64 = l, e.base64Decode = d, e.base64Encode = function (t) {
        var e = f(t);
        return l.encodeByteArray(e, !0)
      }, e.calculateBackoffMillis = function (t, e, n) {
        void 0 === e && (e = 1e3), void 0 === n && (n = 2);
        var r = e * Math.pow(n, t), o = Math.round(.5 * r * (Math.random() - .5) * 2);
        return Math.min(144e5, r + o)
      }, e.contains = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }, e.createSubscribe = function (t, e) {
        var n = new D(t, e);
        return n.subscribe.bind(n)
      }, e.decode = N, e.deepCopy = function (t) {
        return v(void 0, t)
      }, e.deepExtend = v, e.errorPrefix = O, e.getUA = m, e.isAdmin = function (t) {
        var e = N(t).claims;
        return "object" == typeof e && !0 === e.admin
      }, e.isBrowser = function () {
        return "object" == typeof self && self.self === self
      }, e.isBrowserExtension = function () {
        var t = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
        return "object" == typeof t && void 0 !== t.id
      }, e.isElectron = function () {
        return m().indexOf("Electron/") >= 0
      }, e.isEmpty = function (t) {
        for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0
      }, e.isIE = function () {
        var t = m();
        return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0
      }, e.isIndexedDBAvailable = function () {
        return "indexedDB" in self && null != indexedDB
      }, e.isMobileCordova = function () {
        return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())
      }, e.isNode = w, e.isNodeSdk = function () {
        return !0 === o.NODE_CLIENT || !0 === o.NODE_ADMIN
      }, e.isReactNative = function () {
        return "object" == typeof navigator && "ReactNative" === navigator.product
      }, e.isSafari = function () {
        return !w() && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
      }, e.isUWP = function () {
        return m().indexOf("MSAppHost/") >= 0
      }, e.isValidFormat = function (t) {
        var e = N(t).claims;
        return !!e && "object" == typeof e && e.hasOwnProperty("iat")
      }, e.isValidTimestamp = function (t) {
        var e = N(t).claims, n = Math.floor((new Date).getTime() / 1e3), r = 0, o = 0;
        return "object" == typeof e && (e.hasOwnProperty("nbf") ? r = e.nbf : e.hasOwnProperty("iat") && (r = e.iat), o = e.hasOwnProperty("exp") ? e.exp : r + 86400), !!n && !!r && !!o && n >= r && n <= o
      }, e.issuedAtTime = function (t) {
        var e = N(t).claims;
        return "object" == typeof e && e.hasOwnProperty("iat") ? e.iat : null
      }, e.jsonEval = A, e.map = function (t, e, n) {
        var r = {};
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = e.call(n, t[o], o, t));
        return r
      }, e.querystring = function (t) {
        for (var e = [], n = function (t, n) {
          Array.isArray(n) ? n.forEach((function (n) {
            e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n))
          })) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n))
        }, r = 0, o = Object.entries(t); r < o.length; r++) {
          var c = o[r];
          n(c[0], c[1])
        }
        return e.length ? "&" + e.join("&") : ""
      }, e.querystringDecode = function (t) {
        var e = {};
        return t.replace(/^\?/, "").split("&").forEach((function (t) {
          if (t) {
            var n = t.split("=");
            e[n[0]] = n[1]
          }
        })), e
      }, e.safeGet = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0
      }, e.stringLength = function (t) {
        for (var p = 0, i = 0; i < t.length; i++) {
          var e = t.charCodeAt(i);
          e < 128 ? p++ : e < 2048 ? p += 2 : e >= 55296 && e <= 56319 ? (p += 4, i++) : p += 3
        }
        return p
      }, e.stringToByteArray = function (t) {
        for (var e = [], p = 0, i = 0; i < t.length; i++) {
          var n = t.charCodeAt(i);
          if (n >= 55296 && n <= 56319) {
            var r = n - 55296;
            i++, c(i < t.length, "Surrogate pair missing trail surrogate."), n = 65536 + (r << 10) + (t.charCodeAt(i) - 56320)
          }
          n < 128 ? e[p++] = n : n < 2048 ? (e[p++] = n >> 6 | 192, e[p++] = 63 & n | 128) : n < 65536 ? (e[p++] = n >> 12 | 224, e[p++] = n >> 6 & 63 | 128, e[p++] = 63 & n | 128) : (e[p++] = n >> 18 | 240, e[p++] = n >> 12 & 63 | 128, e[p++] = n >> 6 & 63 | 128, e[p++] = 63 & n | 128)
        }
        return e
      }, e.stringify = function (data) {
        return JSON.stringify(data)
      }, e.validateArgCount = function (t, e, n, r) {
        var o;
        if (r < e ? o = "at least " + e : r > n && (o = 0 === n ? "none" : "no more than " + n), o) throw new Error(t + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + o + ".")
      }, e.validateCallback = function (t, e, n, r) {
        if ((!r || n) && "function" != typeof n) throw new Error(O(t, e, r) + "must be a valid function.")
      }, e.validateContextObject = function (t, e, n, r) {
        if ((!r || n) && ("object" != typeof n || null === n)) throw new Error(O(t, e, r) + "must be a valid context object.")
      }, e.validateIndexedDBOpenable = function () {
        return new Promise((function (t, e) {
          try {
            var n = !0, r = "validate-browser-context-for-indexeddb-analytics-module", o = window.indexedDB.open(r);
            o.onsuccess = function () {
              o.result.close(), n || window.indexedDB.deleteDatabase(r), t(!0)
            }, o.onupgradeneeded = function () {
              n = !1
            }, o.onerror = function () {
              var t;
              e((null === (t = o.error) || void 0 === t ? void 0 : t.message) || "")
            }
          } catch (t) {
            e(t)
          }
        }))
      }, e.validateNamespace = function (t, e, n, r) {
        if ((!r || n) && "string" != typeof n) throw new Error(O(t, e, r) + "must be a valid firebase namespace.")
      }
    }).call(this, n(9))
  }, 801: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r, o, c = n(766), h = n(771), component = n(802), f = n(803),
      l = ((r = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", r["bad-app-name"] = "Illegal App name: '{$appName}", r["duplicate-app"] = "Firebase App named '{$appName}' already exists", r["app-deleted"] = "Firebase App named '{$appName}' already deleted", r["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", r["invalid-log-argument"] = "First argument to `onLog` must be null or a function.", r),
      d = new h.ErrorFactory("app", "Firebase", l),
      v = ((o = {})["@firebase/app"] = "fire-core", o["@firebase/analytics"] = "fire-analytics", o["@firebase/auth"] = "fire-auth", o["@firebase/database"] = "fire-rtdb", o["@firebase/functions"] = "fire-fn", o["@firebase/installations"] = "fire-iid", o["@firebase/messaging"] = "fire-fcm", o["@firebase/performance"] = "fire-perf", o["@firebase/remote-config"] = "fire-rc", o["@firebase/storage"] = "fire-gcs", o["@firebase/firestore"] = "fire-fst", o["fire-js"] = "fire-js", o["firebase-wrapper"] = "fire-js-all", o),
      y = new f.Logger("@firebase/app"), m = function () {
        function t(t, e, n) {
          var r, o, f = this;
          this.firebase_ = n, this.isDeleted_ = !1, this.name_ = e.name, this.automaticDataCollectionEnabled_ = e.automaticDataCollectionEnabled || !1, this.options_ = h.deepCopy(t), this.container = new component.ComponentContainer(e.name), this._addComponent(new component.Component("app", (function () {
            return f
          }), "PUBLIC"));
          try {
            for (var l = c.__values(this.firebase_.INTERNAL.components.values()), d = l.next(); !d.done; d = l.next()) {
              var v = d.value;
              this._addComponent(v)
            }
          } catch (t) {
            r = {error: t}
          } finally {
            try {
              d && !d.done && (o = l.return) && o.call(l)
            } finally {
              if (r) throw r.error
            }
          }
        }

        return Object.defineProperty(t.prototype, "automaticDataCollectionEnabled", {
          get: function () {
            return this.checkDestroyed_(), this.automaticDataCollectionEnabled_
          }, set: function (t) {
            this.checkDestroyed_(), this.automaticDataCollectionEnabled_ = t
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "name", {
          get: function () {
            return this.checkDestroyed_(), this.name_
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "options", {
          get: function () {
            return this.checkDestroyed_(), this.options_
          }, enumerable: !1, configurable: !0
        }), t.prototype.delete = function () {
          var t = this;
          return new Promise((function (e) {
            t.checkDestroyed_(), e()
          })).then((function () {
            return t.firebase_.INTERNAL.removeApp(t.name_), Promise.all(t.container.getProviders().map((function (t) {
              return t.delete()
            })))
          })).then((function () {
            t.isDeleted_ = !0
          }))
        }, t.prototype._getService = function (t, e) {
          return void 0 === e && (e = "[DEFAULT]"), this.checkDestroyed_(), this.container.getProvider(t).getImmediate({identifier: e})
        }, t.prototype._removeServiceInstance = function (t, e) {
          void 0 === e && (e = "[DEFAULT]"), this.container.getProvider(t).clearInstance(e)
        }, t.prototype._addComponent = function (component) {
          try {
            this.container.addComponent(component)
          } catch (t) {
            y.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, t)
          }
        }, t.prototype._addOrOverwriteComponent = function (component) {
          this.container.addOrOverwriteComponent(component)
        }, t.prototype.checkDestroyed_ = function () {
          if (this.isDeleted_) throw d.create("app-deleted", {appName: this.name_})
        }, t
      }();
    m.prototype.name && m.prototype.options || m.prototype.delete || console.log("dc");
    var w = function t() {
      var e = function (t) {
        var e = {}, n = new Map, r = {
          __esModule: !0, initializeApp: function (n, o) {
            void 0 === o && (o = {});
            if ("object" != typeof o || null === o) {
              o = {name: o}
            }
            var c = o;
            void 0 === c.name && (c.name = "[DEFAULT]");
            var f = c.name;
            if ("string" != typeof f || !f) throw d.create("bad-app-name", {appName: String(f)});
            if (h.contains(e, f)) throw d.create("duplicate-app", {appName: f});
            var l = new t(n, c, r);
            return e[f] = l, l
          }, app: o, registerVersion: function (t, e, n) {
            var r, o = null !== (r = v[t]) && void 0 !== r ? r : t;
            n && (o += "-" + n);
            var c = o.match(/\s|\//), h = e.match(/\s|\//);
            if (c || h) {
              var f = ['Unable to register library "' + o + '" with version "' + e + '":'];
              return c && f.push('library name "' + o + '" contains illegal characters (whitespace or "/")'), c && h && f.push("and"), h && f.push('version name "' + e + '" contains illegal characters (whitespace or "/")'), void y.warn(f.join(" "))
            }
            l(new component.Component(o + "-version", (function () {
              return {library: o, version: e}
            }), "VERSION"))
          }, setLogLevel: f.setLogLevel, onLog: function (t, e) {
            if (null !== t && "function" != typeof t) throw d.create("invalid-log-argument", {appName: name});
            f.setUserLogHandler(t, e)
          }, apps: null, SDK_VERSION: "7.20.0", INTERNAL: {
            registerComponent: l, removeApp: function (t) {
              delete e[t]
            }, components: n, useAsService: function (t, e) {
              if ("serverAuth" === e) return null;
              return e
            }
          }
        };

        function o(t) {
          if (t = t || "[DEFAULT]", !h.contains(e, t)) throw d.create("no-app", {appName: t});
          return e[t]
        }

        function l(component) {
          var f, l, v = component.name;
          if (n.has(v)) return y.debug("There were multiple attempts to register component " + v + "."), "PUBLIC" === component.type ? r[v] : null;
          if (n.set(v, component), "PUBLIC" === component.type) {
            var m = function (t) {
              if (void 0 === t && (t = o()), "function" != typeof t[v]) throw d.create("invalid-app-argument", {appName: v});
              return t[v]()
            };
            void 0 !== component.serviceProps && h.deepExtend(m, component.serviceProps), r[v] = m, t.prototype[v] = function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              var n = this._getService.bind(this, v);
              return n.apply(this, component.multipleInstances ? t : [])
            }
          }
          try {
            for (var w = c.__values(Object.keys(e)), _ = w.next(); !_.done; _ = w.next()) {
              var E = _.value;
              e[E]._addComponent(component)
            }
          } catch (t) {
            f = {error: t}
          } finally {
            try {
              _ && !_.done && (l = w.return) && l.call(w)
            } finally {
              if (f) throw f.error
            }
          }
          return "PUBLIC" === component.type ? r[v] : null
        }

        return r.default = r, Object.defineProperty(r, "apps", {
          get: function () {
            return Object.keys(e).map((function (t) {
              return e[t]
            }))
          }
        }), o.App = t, r
      }(m);
      return e.INTERNAL = c.__assign(c.__assign({}, e.INTERNAL), {
        createFirebaseNamespace: t,
        extendNamespace: function (t) {
          h.deepExtend(e, t)
        },
        createSubscribe: h.createSubscribe,
        ErrorFactory: h.ErrorFactory,
        deepExtend: h.deepExtend
      }), e
    }(), _ = function () {
      function t(t) {
        this.container = t
      }

      return t.prototype.getPlatformInfoString = function () {
        return this.container.getProviders().map((function (t) {
          if (function (t) {
            var component = t.getComponent();
            return "VERSION" === (null == component ? void 0 : component.type)
          }(t)) {
            var e = t.getImmediate();
            return e.library + "/" + e.version
          }
          return null
        })).filter((function (t) {
          return t
        })).join(" ")
      }, t
    }();
    if (h.isBrowser() && void 0 !== self.firebase) {
      y.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
      var E = self.firebase.SDK_VERSION;
      E && E.indexOf("LITE") >= 0 && y.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
    }
    var I = w.initializeApp;
    w.initializeApp = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return h.isNode() && y.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '), I.apply(void 0, t)
    };
    var T = w;
    !function (t, e) {
      t.INTERNAL.registerComponent(new component.Component("platform-logger", (function (t) {
        return new _(t)
      }), "PRIVATE")), t.registerVersion("@firebase/app", "0.6.11", e), t.registerVersion("fire-js", "")
    }(T), e.default = T, e.firebase = T
  }, 802: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = n(766), o = n(771), c = function () {
      function t(t, e, n) {
        this.name = t, this.instanceFactory = e, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY"
      }

      return t.prototype.setInstantiationMode = function (t) {
        return this.instantiationMode = t, this
      }, t.prototype.setMultipleInstances = function (t) {
        return this.multipleInstances = t, this
      }, t.prototype.setServiceProps = function (t) {
        return this.serviceProps = t, this
      }, t
    }(), h = function () {
      function t(t, e) {
        this.name = t, this.container = e, this.component = null, this.instances = new Map, this.instancesDeferred = new Map
      }

      return t.prototype.get = function (t) {
        void 0 === t && (t = "[DEFAULT]");
        var e = this.normalizeInstanceIdentifier(t);
        if (!this.instancesDeferred.has(e)) {
          var n = new o.Deferred;
          this.instancesDeferred.set(e, n);
          try {
            var r = this.getOrInitializeService(e);
            r && n.resolve(r)
          } catch (t) {
          }
        }
        return this.instancesDeferred.get(e).promise
      }, t.prototype.getImmediate = function (t) {
        var e = r.__assign({identifier: "[DEFAULT]", optional: !1}, t), n = e.identifier, o = e.optional,
          c = this.normalizeInstanceIdentifier(n);
        try {
          var h = this.getOrInitializeService(c);
          if (!h) {
            if (o) return null;
            throw Error("Service " + this.name + " is not available")
          }
          return h
        } catch (t) {
          if (o) return null;
          throw t
        }
      }, t.prototype.getComponent = function () {
        return this.component
      }, t.prototype.setComponent = function (component) {
        var t, e;
        if (component.name !== this.name) throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        if (this.component) throw Error("Component for " + this.name + " has already been provided");
        if (this.component = component, function (component) {
          return "EAGER" === component.instantiationMode
        }(component)) try {
          this.getOrInitializeService("[DEFAULT]")
        } catch (t) {
        }
        try {
          for (var n = r.__values(this.instancesDeferred.entries()), o = n.next(); !o.done; o = n.next()) {
            var c = r.__read(o.value, 2), h = c[0], f = c[1], l = this.normalizeInstanceIdentifier(h);
            try {
              var d = this.getOrInitializeService(l);
              f.resolve(d)
            } catch (t) {
            }
          }
        } catch (e) {
          t = {error: e}
        } finally {
          try {
            o && !o.done && (e = n.return) && e.call(n)
          } finally {
            if (t) throw t.error
          }
        }
      }, t.prototype.clearInstance = function (t) {
        void 0 === t && (t = "[DEFAULT]"), this.instancesDeferred.delete(t), this.instances.delete(t)
      }, t.prototype.delete = function () {
        return r.__awaiter(this, void 0, void 0, (function () {
          var t;
          return r.__generator(this, (function (e) {
            switch (e.label) {
              case 0:
                return t = Array.from(this.instances.values()), [4, Promise.all(r.__spread(t.filter((function (t) {
                  return "INTERNAL" in t
                })).map((function (t) {
                  return t.INTERNAL.delete()
                })), t.filter((function (t) {
                  return "_delete" in t
                })).map((function (t) {
                  return t._delete()
                }))))];
              case 1:
                return e.sent(), [2]
            }
          }))
        }))
      }, t.prototype.isComponentSet = function () {
        return null != this.component
      }, t.prototype.getOrInitializeService = function (t) {
        var e = this.instances.get(t);
        return !e && this.component && (e = this.component.instanceFactory(this.container, function (t) {
          return "[DEFAULT]" === t ? void 0 : t
        }(t)), this.instances.set(t, e)), e || null
      }, t.prototype.normalizeInstanceIdentifier = function (t) {
        return this.component ? this.component.multipleInstances ? t : "[DEFAULT]" : t
      }, t
    }();
    var f = function () {
      function t(t) {
        this.name = t, this.providers = new Map
      }

      return t.prototype.addComponent = function (component) {
        var t = this.getProvider(component.name);
        if (t.isComponentSet()) throw new Error("Component " + component.name + " has already been registered with " + this.name);
        t.setComponent(component)
      }, t.prototype.addOrOverwriteComponent = function (component) {
        this.getProvider(component.name).isComponentSet() && this.providers.delete(component.name), this.addComponent(component)
      }, t.prototype.getProvider = function (t) {
        if (this.providers.has(t)) return this.providers.get(t);
        var e = new h(t, this);
        return this.providers.set(t, e), e
      }, t.prototype.getProviders = function () {
        return Array.from(this.providers.values())
      }, t
    }();
    e.Component = c, e.ComponentContainer = f, e.Provider = h
  }, 803: function (t, e, n) {
    "use strict";

    function r() {
      for (var s = 0, i = 0, t = arguments.length; i < t; i++) s += arguments[i].length;
      var e = Array(s), n = 0;
      for (i = 0; i < t; i++) for (var a = arguments[i], r = 0, o = a.length; r < o; r++, n++) e[n] = a[r];
      return e
    }

    var o;
    n.r(e), n.d(e, "LogLevel", (function () {
      return c
    })), n.d(e, "Logger", (function () {
      return y
    })), n.d(e, "setLogLevel", (function () {
      return m
    })), n.d(e, "setUserLogHandler", (function () {
      return w
    }));
    var c, h = [];
    !function (t) {
      t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT"
    }(c || (c = {}));
    var f = {debug: c.DEBUG, verbose: c.VERBOSE, info: c.INFO, warn: c.WARN, error: c.ERROR, silent: c.SILENT},
      l = c.INFO,
      d = ((o = {})[c.DEBUG] = "log", o[c.VERBOSE] = "log", o[c.INFO] = "info", o[c.WARN] = "warn", o[c.ERROR] = "error", o),
      v = function (t, e) {
        for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
        if (!(e < t.logLevel)) {
          var c = (new Date).toISOString(), h = d[e];
          if (!h) throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")");
          console[h].apply(console, r(["[" + c + "]  " + t.name + ":"], n))
        }
      }, y = function () {
        function t(t) {
          this.name = t, this._logLevel = l, this._logHandler = v, this._userLogHandler = null, h.push(this)
        }

        return Object.defineProperty(t.prototype, "logLevel", {
          get: function () {
            return this._logLevel
          }, set: function (t) {
            if (!(t in c)) throw new TypeError('Invalid value "' + t + '" assigned to `logLevel`');
            this._logLevel = t
          }, enumerable: !1, configurable: !0
        }), t.prototype.setLogLevel = function (t) {
          this._logLevel = "string" == typeof t ? f[t] : t
        }, Object.defineProperty(t.prototype, "logHandler", {
          get: function () {
            return this._logHandler
          }, set: function (t) {
            if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
            this._logHandler = t
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "userLogHandler", {
          get: function () {
            return this._userLogHandler
          }, set: function (t) {
            this._userLogHandler = t
          }, enumerable: !1, configurable: !0
        }), t.prototype.debug = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          this._userLogHandler && this._userLogHandler.apply(this, r([this, c.DEBUG], t)), this._logHandler.apply(this, r([this, c.DEBUG], t))
        }, t.prototype.log = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          this._userLogHandler && this._userLogHandler.apply(this, r([this, c.VERBOSE], t)), this._logHandler.apply(this, r([this, c.VERBOSE], t))
        }, t.prototype.info = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          this._userLogHandler && this._userLogHandler.apply(this, r([this, c.INFO], t)), this._logHandler.apply(this, r([this, c.INFO], t))
        }, t.prototype.warn = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          this._userLogHandler && this._userLogHandler.apply(this, r([this, c.WARN], t)), this._logHandler.apply(this, r([this, c.WARN], t))
        }, t.prototype.error = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          this._userLogHandler && this._userLogHandler.apply(this, r([this, c.ERROR], t)), this._logHandler.apply(this, r([this, c.ERROR], t))
        }, t
      }();

    function m(t) {
      h.forEach((function (e) {
        e.setLogLevel(t)
      }))
    }

    function w(t, e) {
      for (var n = function (n) {
        var r = null;
        e && e.level && (r = f[e.level]), n.userLogHandler = null === t ? null : function (e, n) {
          for (var o = [], h = 2; h < arguments.length; h++) o[h - 2] = arguments[h];
          var f = o.map((function (t) {
            if (null == t) return null;
            if ("string" == typeof t) return t;
            if ("number" == typeof t || "boolean" == typeof t) return t.toString();
            if (t instanceof Error) return t.message;
            try {
              return JSON.stringify(t)
            } catch (t) {
              return null
            }
          })).filter((function (t) {
            return t
          })).join(" ");
          n >= (null != r ? r : e.logLevel) && t({level: c[n].toLowerCase(), message: f, args: o, type: e.name})
        }
      }, r = 0, o = h; r < o.length; r++) {
        n(o[r])
      }
    }
  }, 877: function (t, e, n) {
    "use strict";
    (function (t) {
      Object.defineProperty(e, "__esModule", {value: !0});
      var r = n(766), o = n(801), c = n(803), h = n(771), i = n(878), f = n(802);
      var u = function (t) {
        return t && "object" == typeof t && "default" in t ? t : {default: t}
      }(o), a = {
        OK: "ok",
        CANCELLED: "cancelled",
        UNKNOWN: "unknown",
        INVALID_ARGUMENT: "invalid-argument",
        DEADLINE_EXCEEDED: "deadline-exceeded",
        NOT_FOUND: "not-found",
        ALREADY_EXISTS: "already-exists",
        PERMISSION_DENIED: "permission-denied",
        UNAUTHENTICATED: "unauthenticated",
        RESOURCE_EXHAUSTED: "resource-exhausted",
        FAILED_PRECONDITION: "failed-precondition",
        ABORTED: "aborted",
        OUT_OF_RANGE: "out-of-range",
        UNIMPLEMENTED: "unimplemented",
        INTERNAL: "internal",
        UNAVAILABLE: "unavailable",
        DATA_LOSS: "data-loss"
      }, l = function (t) {
        function e(e, n) {
          var r = this;
          return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", r.toString = function () {
            return r.name + ": [code=" + r.code + "]: " + r.message
          }, r
        }

        return r.__extends(e, t), e
      }(Error), d = new c.Logger("@firebase/firestore");

      function v() {
        return d.logLevel
      }

      function y(t) {
        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        if (d.logLevel <= c.LogLevel.DEBUG) {
          var n = e.map(w);
          d.debug.apply(d, r.__spreadArrays(["Firestore (7.24.0): " + t], n))
        }
      }

      function p(t) {
        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        if (d.logLevel <= c.LogLevel.ERROR) {
          var n = e.map(w);
          d.error.apply(d, r.__spreadArrays(["Firestore (7.24.0): " + t], n))
        }
      }

      function m(t) {
        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        if (d.logLevel <= c.LogLevel.WARN) {
          var n = e.map(w);
          d.warn.apply(d, r.__spreadArrays(["Firestore (7.24.0): " + t], n))
        }
      }

      function w(t) {
        if ("string" == typeof t) return t;
        try {
          return e = t, JSON.stringify(e)
        } catch (e) {
          return t
        }
        var e
      }

      function _(t) {
        void 0 === t && (t = "Unexpected state");
        var e = "FIRESTORE (7.24.0) INTERNAL ASSERTION FAILED: " + t;
        throw p(e), new Error(e)
      }

      function g(t, e) {
        t || _()
      }

      function E(t, e) {
        return t
      }

      function I(t) {
        var e = 0;
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
        return e
      }

      function T(t, e) {
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
      }

      function b(t) {
        for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0
      }

      var A = function () {
        function t(t, e, n) {
          void 0 === e ? e = 0 : e > t.length && _(), void 0 === n ? n = t.length - e : n > t.length - e && _(), this.segments = t, this.offset = e, this.t = n
        }

        return Object.defineProperty(t.prototype, "length", {
          get: function () {
            return this.t
          }, enumerable: !1, configurable: !0
        }), t.prototype.isEqual = function (e) {
          return 0 === t.i(this, e)
        }, t.prototype.child = function (e) {
          var n = this.segments.slice(this.offset, this.limit());
          return e instanceof t ? e.forEach((function (t) {
            n.push(t)
          })) : n.push(e), this.o(n)
        }, t.prototype.limit = function () {
          return this.offset + this.length
        }, t.prototype.u = function (t) {
          return t = void 0 === t ? 1 : t, this.o(this.segments, this.offset + t, this.length - t)
        }, t.prototype.h = function () {
          return this.o(this.segments, this.offset, this.length - 1)
        }, t.prototype.l = function () {
          return this.segments[this.offset]
        }, t.prototype._ = function () {
          return this.get(this.length - 1)
        }, t.prototype.get = function (t) {
          return this.segments[this.offset + t]
        }, t.prototype.m = function () {
          return 0 === this.length
        }, t.prototype.T = function (t) {
          if (t.length < this.length) return !1;
          for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
          return !0
        }, t.prototype.I = function (t) {
          if (this.length + 1 !== t.length) return !1;
          for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
          return !0
        }, t.prototype.forEach = function (t) {
          for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e])
        }, t.prototype.A = function () {
          return this.segments.slice(this.offset, this.limit())
        }, t.i = function (t, e) {
          for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1
          }
          return t.length < e.length ? -1 : t.length > e.length ? 1 : 0
        }, t
      }(), N = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this
        }

        return r.__extends(e, t), e.prototype.o = function (t, n, r) {
          return new e(t, n, r)
        }, e.prototype.R = function () {
          return this.A().join("/")
        }, e.prototype.toString = function () {
          return this.R()
        }, e.g = function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          for (var r = [], i = 0, o = t; i < o.length; i++) {
            var s = o[i];
            if (s.indexOf("//") >= 0) throw new l(a.INVALID_ARGUMENT, "Invalid segment (" + s + "). Paths must not contain // in them.");
            r.push.apply(r, s.split("/").filter((function (t) {
              return t.length > 0
            })))
          }
          return new e(r)
        }, e.P = function () {
          return new e([])
        }, e
      }(A), S = /^[_a-zA-Z][_a-zA-Z0-9]*$/, D = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this
        }

        return r.__extends(e, t), e.prototype.o = function (t, n, r) {
          return new e(t, n, r)
        }, e.V = function (t) {
          return S.test(t)
        }, e.prototype.R = function () {
          return this.A().map((function (t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), e.V(t) || (t = "`" + t + "`"), t
          })).join(".")
        }, e.prototype.toString = function () {
          return this.R()
        }, e.prototype.p = function () {
          return 1 === this.length && "__name__" === this.get(0)
        }, e.v = function () {
          return new e(["__name__"])
        }, e.S = function (t) {
          for (var n = [], r = "", i = 0, o = function () {
            if (0 === r.length) throw new l(a.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            n.push(r), r = ""
          }, s = !1; i < t.length;) {
            var u = t[i];
            if ("\\" === u) {
              if (i + 1 === t.length) throw new l(a.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
              var c = t[i + 1];
              if ("\\" !== c && "." !== c && "`" !== c) throw new l(a.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
              r += c, i += 2
            } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++)
          }
          if (o(), s) throw new l(a.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
          return new e(n)
        }, e.P = function () {
          return new e([])
        }, e
      }(A), x = function () {
        function t(t) {
          this.path = t
        }

        return t.D = function (e) {
          return new t(N.g(e))
        }, t.C = function (e) {
          return new t(N.g(e).u(5))
        }, t.prototype.N = function (t) {
          return this.path.length >= 2 && this.path.get(this.path.length - 2) === t
        }, t.prototype.isEqual = function (t) {
          return null !== t && 0 === N.i(this.path, t.path)
        }, t.prototype.toString = function () {
          return this.path.toString()
        }, t.i = function (t, e) {
          return N.i(t.path, e.path)
        }, t.F = function (t) {
          return t.length % 2 == 0
        }, t.$ = function (e) {
          return new t(new N(e.slice()))
        }, t
      }();

      function O(t, e) {
        if (0 !== e.length) throw new l(a.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + Q(e.length, "argument") + ".")
      }

      function L(t, e, n) {
        if (e.length !== n) throw new l(a.INVALID_ARGUMENT, "Function " + t + "() requires " + Q(n, "argument") + ", but was called with " + Q(e.length, "argument") + ".")
      }

      function k(t, e, n) {
        if (e.length < n) throw new l(a.INVALID_ARGUMENT, "Function " + t + "() requires at least " + Q(n, "argument") + ", but was called with " + Q(e.length, "argument") + ".")
      }

      function C(t, e, n, r) {
        if (e.length < n || e.length > r) throw new l(a.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + Q(e.length, "argument") + ".")
      }

      function R(t, e, n, r) {
        j(t, e, K(n) + " argument", r)
      }

      function P(t, e, n, r) {
        void 0 !== r && R(t, e, n, r)
      }

      function U(t, e, n, r) {
        j(t, e, n + " option", r)
      }

      function V(t, e, n, r) {
        void 0 !== r && U(t, e, n, r)
      }

      function M(t, e, n, r, i) {
        void 0 !== r && function (t, e, n, r, i) {
          for (var o = [], s = 0, u = i; s < u.length; s++) {
            var c = u[s];
            if (c === r) return;
            o.push(G(c))
          }
          var h = G(r);
          throw new l(a.INVALID_ARGUMENT, "Invalid value " + h + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "))
        }(t, 0, n, r, i)
      }

      function F(t, e, n, r) {
        if (!e.some((function (t) {
          return t === r
        }))) throw new l(a.INVALID_ARGUMENT, "Invalid value " + G(r) + " provided to function " + t + "() for its " + K(n) + " argument. Acceptable values: " + e.join(", "));
        return r
      }

      function j(t, e, n, r) {
        if (!("object" === e ? B(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
          var i = G(r);
          throw new l(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i)
        }
      }

      function B(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t))
      }

      function G(t) {
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
        if ("number" == typeof t || "boolean" == typeof t) return "" + t;
        if ("object" == typeof t) {
          if (t instanceof Array) return "an array";
          var e = function (t) {
            if (t.constructor) {
              var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
              if (e && e.length > 1) return e[1]
            }
            return null
          }(t);
          return e ? "a custom " + e + " object" : "an object"
        }
        return "function" == typeof t ? "a function" : _()
      }

      function q(t, e, n) {
        if (void 0 === n) throw new l(a.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + K(e) + " argument, but it was undefined.")
      }

      function z(t, e, n) {
        T(e, (function (e, r) {
          if (n.indexOf(e) < 0) throw new l(a.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "))
        }))
      }

      function W(t, e, n, r) {
        var i = G(r);
        return new l(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + K(n) + " argument to be a " + e + ", but it was: " + i)
      }

      function H(t, e, n) {
        if (n <= 0) throw new l(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + K(e) + " argument to be a positive number, but it was: " + n + ".")
      }

      function K(t) {
        switch (t) {
          case 1:
            return "first";
          case 2:
            return "second";
          case 3:
            return "third";
          default:
            return t + "th"
        }
      }

      function Q(t, e) {
        return t + " " + e + (1 === t ? "" : "s")
      }

      function X(t) {
        var e = "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
        if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
        return n
      }

      var Y = function () {
        function t() {
        }

        return t.k = function () {
          for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""; n.length < 20;) for (var r = X(40), i = 0; i < r.length; ++i) n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
          return n
        }, t
      }();

      function J(t, e) {
        return t < e ? -1 : t > e ? 1 : 0
      }

      function $(t, e, n) {
        return t.length === e.length && t.every((function (t, r) {
          return n(t, e[r])
        }))
      }

      function Z(t) {
        return t + "\0"
      }

      var tt = function () {
        function t(t) {
          this.M = t
        }

        return t.fromBase64String = function (e) {
          return new t(atob(e))
        }, t.fromUint8Array = function (e) {
          return new t(function (t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e
          }(e))
        }, t.prototype.toBase64 = function () {
          return t = this.M, btoa(t);
          var t
        }, t.prototype.toUint8Array = function () {
          return function (t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e
          }(this.M)
        }, t.prototype.O = function () {
          return 2 * this.M.length
        }, t.prototype.L = function (t) {
          return J(this.M, t.M)
        }, t.prototype.isEqual = function (t) {
          return this.M === t.M
        }, t
      }();
      tt.B = new tt("");
      var et = function () {
        function t(t) {
          this.q = t
        }

        return t.fromBase64String = function (e) {
          try {
            return new t(tt.fromBase64String(e))
          } catch (e) {
            throw new l(a.INVALID_ARGUMENT, "Failed to construct Bytes from Base64 string: " + e)
          }
        }, t.fromUint8Array = function (e) {
          return new t(tt.fromUint8Array(e))
        }, t.prototype.toBase64 = function () {
          return this.q.toBase64()
        }, t.prototype.toUint8Array = function () {
          return this.q.toUint8Array()
        }, t.prototype.toString = function () {
          return "Bytes(base64: " + this.toBase64() + ")"
        }, t.prototype.isEqual = function (t) {
          return this.q.isEqual(t.q)
        }, t
      }();

      function nt() {
        if ("undefined" == typeof Uint8Array) throw new l(a.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.")
      }

      function it() {
        if ("undefined" == typeof atob) throw new l(a.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.")
      }

      var ot = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this
        }

        return r.__extends(e, t), e.fromBase64String = function (t) {
          L("Blob.fromBase64String", arguments, 1), R("Blob.fromBase64String", "string", 1, t), it();
          try {
            return new e(tt.fromBase64String(t))
          } catch (t) {
            throw new l(a.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t)
          }
        }, e.fromUint8Array = function (t) {
          if (L("Blob.fromUint8Array", arguments, 1), nt(), !(t instanceof Uint8Array)) throw W("Blob.fromUint8Array", "Uint8Array", 1, t);
          return new e(tt.fromUint8Array(t))
        }, e.prototype.toBase64 = function () {
          return L("Blob.toBase64", arguments, 0), it(), t.prototype.toBase64.call(this)
        }, e.prototype.toUint8Array = function () {
          return L("Blob.toUint8Array", arguments, 0), nt(), t.prototype.toUint8Array.call(this)
        }, e.prototype.toString = function () {
          return "Blob(base64: " + this.toBase64() + ")"
        }, e
      }(et), st = function (t, e, n, r, i, o) {
        this.U = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i, this.W = o
      }, rt = function () {
        function t(t, e) {
          this.projectId = t, this.database = e || "(default)"
        }

        return Object.defineProperty(t.prototype, "j", {
          get: function () {
            return "(default)" === this.database
          }, enumerable: !1, configurable: !0
        }), t.prototype.isEqual = function (e) {
          return e instanceof t && e.projectId === this.projectId && e.database === this.database
        }, t.prototype.L = function (t) {
          return J(this.projectId, t.projectId) || J(this.database, t.database)
        }, t
      }(), ut = function () {
        function t(t, e) {
          this.K = t, this.G = e, this.H = {}
        }

        return t.prototype.get = function (t) {
          var e = this.K(t), n = this.H[e];
          if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], s = o[0], u = o[1];
            if (this.G(s, t)) return u
          }
        }, t.prototype.has = function (t) {
          return void 0 !== this.get(t)
        }, t.prototype.set = function (t, e) {
          var n = this.K(t), r = this.H[n];
          if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (this.G(r[i][0], t)) return void (r[i] = [t, e]);
            r.push([t, e])
          } else this.H[n] = [[t, e]]
        }, t.prototype.delete = function (t) {
          var e = this.K(t), n = this.H[e];
          if (void 0 === n) return !1;
          for (var r = 0; r < n.length; r++) if (this.G(n[r][0], t)) return 1 === n.length ? delete this.H[e] : n.splice(r, 1), !0;
          return !1
        }, t.prototype.forEach = function (t) {
          T(this.H, (function (e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
              var o = i[r], s = o[0], u = o[1];
              t(s, u)
            }
          }))
        }, t.prototype.m = function () {
          return b(this.H)
        }, t
      }(), at = function () {
        function t(t, e) {
          if (this.seconds = t, this.nanoseconds = e, e < 0) throw new l(a.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
          if (e >= 1e9) throw new l(a.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
          if (t < -62135596800) throw new l(a.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
          if (t >= 253402300800) throw new l(a.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t)
        }

        return t.now = function () {
          return t.fromMillis(Date.now())
        }, t.fromDate = function (e) {
          return t.fromMillis(e.getTime())
        }, t.fromMillis = function (e) {
          var n = Math.floor(e / 1e3);
          return new t(n, 1e6 * (e - 1e3 * n))
        }, t.prototype.toDate = function () {
          return new Date(this.toMillis())
        }, t.prototype.toMillis = function () {
          return 1e3 * this.seconds + this.nanoseconds / 1e6
        }, t.prototype.Y = function (t) {
          return this.seconds === t.seconds ? J(this.nanoseconds, t.nanoseconds) : J(this.seconds, t.seconds)
        }, t.prototype.isEqual = function (t) {
          return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
        }, t.prototype.toString = function () {
          return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
        }, t.prototype.toJSON = function () {
          return {seconds: this.seconds, nanoseconds: this.nanoseconds}
        }, t.prototype.valueOf = function () {
          var t = this.seconds - -62135596800;
          return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
        }, t
      }(), ct = function () {
        function t(t) {
          this.timestamp = t
        }

        return t.J = function (e) {
          return new t(e)
        }, t.min = function () {
          return new t(new at(0, 0))
        }, t.prototype.L = function (t) {
          return this.timestamp.Y(t.timestamp)
        }, t.prototype.isEqual = function (t) {
          return this.timestamp.isEqual(t.timestamp)
        }, t.prototype.X = function () {
          return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
        }, t.prototype.toString = function () {
          return "SnapshotVersion(" + this.timestamp.toString() + ")"
        }, t.prototype.Z = function () {
          return this.timestamp
        }, t
      }();

      function ht(t) {
        return null == t
      }

      function ft(t) {
        return 0 === t && 1 / t == -1 / 0
      }

      function lt(t) {
        return "number" == typeof t && Number.isInteger(t) && !ft(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER
      }

      var pt = function (t, e, n, r, i, o, s) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.tt = null
      };

      function vt(t, e, n, r, i, o, s) {
        return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), new pt(t, e, n, r, i, o, s)
      }

      function yt(t) {
        var e = E(t);
        if (null === e.tt) {
          var n = e.path.R();
          null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function (t) {
            return function (t) {
              return t.field.R() + t.op.toString() + oe(t.value)
            }(t)
          })).join(","), n += "|ob:", n += e.orderBy.map((function (t) {
            return (e = t).field.R() + e.dir;
            var e
          })).join(","), ht(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += ar(e.startAt)), e.endAt && (n += "|ub:", n += ar(e.endAt)), e.tt = n
        }
        return e.tt
      }

      function gt(t, e) {
        if (t.limit !== e.limit) return !1;
        if (t.orderBy.length !== e.orderBy.length) return !1;
        for (var n = 0; n < t.orderBy.length; n++) if (!pr(t.orderBy[n], e.orderBy[n])) return !1;
        if (t.filters.length !== e.filters.length) return !1;
        for (var r = 0; r < t.filters.length; r++) if (i = t.filters[r], o = e.filters[r], i.op !== o.op || !i.field.isEqual(o.field) || !ee(i.value, o.value)) return !1;
        var i, o;
        return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!hr(t.startAt, e.startAt) && hr(t.endAt, e.endAt)
      }

      function dt(t) {
        return x.F(t.path) && null === t.collectionGroup && 0 === t.filters.length
      }

      var mt, wt, bt = function () {
        function t(t, e, n, r, i, o, s) {
          void 0 === i && (i = ct.min()), void 0 === o && (o = ct.min()), void 0 === s && (s = tt.B), this.target = t, this.targetId = e, this.et = n, this.sequenceNumber = r, this.nt = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s
        }

        return t.prototype.st = function (e) {
          return new t(this.target, this.targetId, this.et, e, this.nt, this.lastLimboFreeSnapshotVersion, this.resumeToken)
        }, t.prototype.it = function (e, n) {
          return new t(this.target, this.targetId, this.et, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e)
        }, t.prototype.rt = function (e) {
          return new t(this.target, this.targetId, this.et, this.sequenceNumber, this.nt, e, this.resumeToken)
        }, t
      }(), _t = function (t) {
        this.count = t
      };

      function Et(t) {
        switch (t) {
          case a.OK:
            return _();
          case a.CANCELLED:
          case a.UNKNOWN:
          case a.DEADLINE_EXCEEDED:
          case a.RESOURCE_EXHAUSTED:
          case a.INTERNAL:
          case a.UNAVAILABLE:
          case a.UNAUTHENTICATED:
            return !1;
          case a.INVALID_ARGUMENT:
          case a.NOT_FOUND:
          case a.ALREADY_EXISTS:
          case a.PERMISSION_DENIED:
          case a.FAILED_PRECONDITION:
          case a.ABORTED:
          case a.OUT_OF_RANGE:
          case a.UNIMPLEMENTED:
          case a.DATA_LOSS:
            return !0;
          default:
            return _()
        }
      }

      function It(t) {
        if (void 0 === t) return p("GRPC error has no .code"), a.UNKNOWN;
        switch (t) {
          case mt.OK:
            return a.OK;
          case mt.CANCELLED:
            return a.CANCELLED;
          case mt.UNKNOWN:
            return a.UNKNOWN;
          case mt.DEADLINE_EXCEEDED:
            return a.DEADLINE_EXCEEDED;
          case mt.RESOURCE_EXHAUSTED:
            return a.RESOURCE_EXHAUSTED;
          case mt.INTERNAL:
            return a.INTERNAL;
          case mt.UNAVAILABLE:
            return a.UNAVAILABLE;
          case mt.UNAUTHENTICATED:
            return a.UNAUTHENTICATED;
          case mt.INVALID_ARGUMENT:
            return a.INVALID_ARGUMENT;
          case mt.NOT_FOUND:
            return a.NOT_FOUND;
          case mt.ALREADY_EXISTS:
            return a.ALREADY_EXISTS;
          case mt.PERMISSION_DENIED:
            return a.PERMISSION_DENIED;
          case mt.FAILED_PRECONDITION:
            return a.FAILED_PRECONDITION;
          case mt.ABORTED:
            return a.ABORTED;
          case mt.OUT_OF_RANGE:
            return a.OUT_OF_RANGE;
          case mt.UNIMPLEMENTED:
            return a.UNIMPLEMENTED;
          case mt.DATA_LOSS:
            return a.DATA_LOSS;
          default:
            return _()
        }
      }

      (wt = mt || (mt = {}))[wt.OK = 0] = "OK", wt[wt.CANCELLED = 1] = "CANCELLED", wt[wt.UNKNOWN = 2] = "UNKNOWN", wt[wt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", wt[wt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", wt[wt.NOT_FOUND = 5] = "NOT_FOUND", wt[wt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", wt[wt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", wt[wt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", wt[wt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", wt[wt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", wt[wt.ABORTED = 10] = "ABORTED", wt[wt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", wt[wt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", wt[wt.INTERNAL = 13] = "INTERNAL", wt[wt.UNAVAILABLE = 14] = "UNAVAILABLE", wt[wt.DATA_LOSS = 15] = "DATA_LOSS";
      var Tt = function () {
        function t(t, e) {
          this.i = t, this.root = e || Nt.EMPTY
        }

        return t.prototype.ot = function (e, n) {
          return new t(this.i, this.root.ot(e, n, this.i).copy(null, null, Nt.at, null, null))
        }, t.prototype.remove = function (e) {
          return new t(this.i, this.root.remove(e, this.i).copy(null, null, Nt.at, null, null))
        }, t.prototype.get = function (t) {
          for (var e = this.root; !e.m();) {
            var n = this.i(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right)
          }
          return null
        }, t.prototype.indexOf = function (t) {
          for (var e = 0, n = this.root; !n.m();) {
            var r = this.i(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (e += n.left.size + 1, n = n.right)
          }
          return -1
        }, t.prototype.m = function () {
          return this.root.m()
        }, Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.root.size
          }, enumerable: !1, configurable: !0
        }), t.prototype.ct = function () {
          return this.root.ct()
        }, t.prototype.ut = function () {
          return this.root.ut()
        }, t.prototype.ht = function (t) {
          return this.root.ht(t)
        }, t.prototype.forEach = function (t) {
          this.ht((function (e, n) {
            return t(e, n), !1
          }))
        }, t.prototype.toString = function () {
          var t = [];
          return this.ht((function (e, n) {
            return t.push(e + ":" + n), !1
          })), "{" + t.join(", ") + "}"
        }, t.prototype.lt = function (t) {
          return this.root.lt(t)
        }, t.prototype._t = function () {
          return new At(this.root, null, this.i, !1)
        }, t.prototype.ft = function (t) {
          return new At(this.root, t, this.i, !1)
        }, t.prototype.dt = function () {
          return new At(this.root, null, this.i, !0)
        }, t.prototype.wt = function (t) {
          return new At(this.root, t, this.i, !0)
        }, t
      }(), At = function () {
        function t(t, e, n, r) {
          this.Tt = r, this.Et = [];
          for (var i = 1; !t.m();) if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.Tt ? t.left : t.right; else {
            if (0 === i) {
              this.Et.push(t);
              break
            }
            this.Et.push(t), t = this.Tt ? t.right : t.left
          }
        }

        return t.prototype.It = function () {
          var t = this.Et.pop(), e = {key: t.key, value: t.value};
          if (this.Tt) for (t = t.left; !t.m();) this.Et.push(t), t = t.right; else for (t = t.right; !t.m();) this.Et.push(t), t = t.left;
          return e
        }, t.prototype.At = function () {
          return this.Et.length > 0
        }, t.prototype.Rt = function () {
          if (0 === this.Et.length) return null;
          var t = this.Et[this.Et.length - 1];
          return {key: t.key, value: t.value}
        }, t
      }(), Nt = function () {
        function t(e, n, r, i, o) {
          this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size
        }

        return t.prototype.copy = function (e, n, r, i, o) {
          return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right)
        }, t.prototype.m = function () {
          return !1
        }, t.prototype.ht = function (t) {
          return this.left.ht(t) || t(this.key, this.value) || this.right.ht(t)
        }, t.prototype.lt = function (t) {
          return this.right.lt(t) || t(this.key, this.value) || this.left.lt(t)
        }, t.prototype.min = function () {
          return this.left.m() ? this : this.left.min()
        }, t.prototype.ct = function () {
          return this.min().key
        }, t.prototype.ut = function () {
          return this.right.m() ? this.key : this.right.ut()
        }, t.prototype.ot = function (t, e, n) {
          var r = this, i = n(t, r.key);
          return (r = i < 0 ? r.copy(null, null, null, r.left.ot(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.ot(t, e, n))).gt()
        }, t.prototype.Pt = function () {
          if (this.left.m()) return t.EMPTY;
          var e = this;
          return e.left.yt() || e.left.left.yt() || (e = e.Vt()), (e = e.copy(null, null, null, e.left.Pt(), null)).gt()
        }, t.prototype.remove = function (e, n) {
          var r, i = this;
          if (n(e, i.key) < 0) i.left.m() || i.left.yt() || i.left.left.yt() || (i = i.Vt()), i = i.copy(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.yt() && (i = i.bt()), i.right.m() || i.right.yt() || i.right.left.yt() || (i = i.vt()), 0 === n(e, i.key)) {
              if (i.right.m()) return t.EMPTY;
              r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.Pt())
            }
            i = i.copy(null, null, null, null, i.right.remove(e, n))
          }
          return i.gt()
        }, t.prototype.yt = function () {
          return this.color
        }, t.prototype.gt = function () {
          var t = this;
          return t.right.yt() && !t.left.yt() && (t = t.St()), t.left.yt() && t.left.left.yt() && (t = t.bt()), t.left.yt() && t.right.yt() && (t = t.Dt()), t
        }, t.prototype.Vt = function () {
          var t = this.Dt();
          return t.right.left.yt() && (t = (t = (t = t.copy(null, null, null, null, t.right.bt())).St()).Dt()), t
        }, t.prototype.vt = function () {
          var t = this.Dt();
          return t.left.left.yt() && (t = (t = t.bt()).Dt()), t
        }, t.prototype.St = function () {
          var e = this.copy(null, null, t.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, e, null)
        }, t.prototype.bt = function () {
          var e = this.copy(null, null, t.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, e)
        }, t.prototype.Dt = function () {
          var t = this.left.copy(null, null, !this.left.color, null, null),
            e = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, t, e)
        }, t.prototype.Ct = function () {
          var t = this.Nt();
          return Math.pow(2, t) <= this.size + 1
        }, t.prototype.Nt = function () {
          if (this.yt() && this.left.yt()) throw _();
          if (this.right.yt()) throw _();
          var t = this.left.Nt();
          if (t !== this.right.Nt()) throw _();
          return t + (this.yt() ? 0 : 1)
        }, t
      }();
      Nt.EMPTY = null, Nt.RED = !0, Nt.at = !1, Nt.EMPTY = new (function () {
        function t() {
          this.size = 0
        }

        return Object.defineProperty(t.prototype, "key", {
          get: function () {
            throw _()
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "value", {
          get: function () {
            throw _()
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "color", {
          get: function () {
            throw _()
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "left", {
          get: function () {
            throw _()
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "right", {
          get: function () {
            throw _()
          }, enumerable: !1, configurable: !0
        }), t.prototype.copy = function (t, e, n, r, i) {
          return this
        }, t.prototype.ot = function (t, e, n) {
          return new Nt(t, e)
        }, t.prototype.remove = function (t, e) {
          return this
        }, t.prototype.m = function () {
          return !0
        }, t.prototype.ht = function (t) {
          return !1
        }, t.prototype.lt = function (t) {
          return !1
        }, t.prototype.ct = function () {
          return null
        }, t.prototype.ut = function () {
          return null
        }, t.prototype.yt = function () {
          return !1
        }, t.prototype.Ct = function () {
          return !0
        }, t.prototype.Nt = function () {
          return 0
        }, t
      }());
      var St = function () {
        function t(t) {
          this.i = t, this.data = new Tt(this.i)
        }

        return t.prototype.has = function (t) {
          return null !== this.data.get(t)
        }, t.prototype.first = function () {
          return this.data.ct()
        }, t.prototype.last = function () {
          return this.data.ut()
        }, Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.data.size
          }, enumerable: !1, configurable: !0
        }), t.prototype.indexOf = function (t) {
          return this.data.indexOf(t)
        }, t.prototype.forEach = function (t) {
          this.data.ht((function (e, n) {
            return t(e), !1
          }))
        }, t.prototype.Ft = function (t, e) {
          for (var n = this.data.ft(t[0]); n.At();) {
            var r = n.It();
            if (this.i(r.key, t[1]) >= 0) return;
            e(r.key)
          }
        }, t.prototype.xt = function (t, e) {
          var n;
          for (n = void 0 !== e ? this.data.ft(e) : this.data._t(); n.At();) if (!t(n.It().key)) return
        }, t.prototype.$t = function (t) {
          var e = this.data.ft(t);
          return e.At() ? e.It().key : null
        }, t.prototype._t = function () {
          return new Dt(this.data._t())
        }, t.prototype.ft = function (t) {
          return new Dt(this.data.ft(t))
        }, t.prototype.add = function (t) {
          return this.copy(this.data.remove(t).ot(t, !0))
        }, t.prototype.delete = function (t) {
          return this.has(t) ? this.copy(this.data.remove(t)) : this
        }, t.prototype.m = function () {
          return this.data.m()
        }, t.prototype.kt = function (t) {
          var e = this;
          return e.size < t.size && (e = t, t = this), t.forEach((function (t) {
            e = e.add(t)
          })), e
        }, t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) return !1;
          if (this.size !== e.size) return !1;
          for (var n = this.data._t(), r = e.data._t(); n.At();) {
            var i = n.It().key, o = r.It().key;
            if (0 !== this.i(i, o)) return !1
          }
          return !0
        }, t.prototype.A = function () {
          var t = [];
          return this.forEach((function (e) {
            t.push(e)
          })), t
        }, t.prototype.toString = function () {
          var t = [];
          return this.forEach((function (e) {
            return t.push(e)
          })), "SortedSet(" + t.toString() + ")"
        }, t.prototype.copy = function (e) {
          var n = new t(this.i);
          return n.data = e, n
        }, t
      }(), Dt = function () {
        function t(t) {
          this.Mt = t
        }

        return t.prototype.It = function () {
          return this.Mt.It().key
        }, t.prototype.At = function () {
          return this.Mt.At()
        }, t
      }(), xt = new Tt(x.i);

      function Ot() {
        return xt
      }

      function Lt() {
        return Ot()
      }

      var kt = new Tt(x.i);

      function Ct() {
        return kt
      }

      var Rt = new Tt(x.i), Pt = new St(x.i);

      function Ut() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = Pt, r = 0, i = t; r < i.length; r++) {
          var o = i[r];
          n = n.add(o)
        }
        return n
      }

      var Vt = new St(J);

      function Mt() {
        return Vt
      }

      var Ft = function () {
        function t(t) {
          this.i = t ? function (e, n) {
            return t(e, n) || x.i(e.key, n.key)
          } : function (t, e) {
            return x.i(t.key, e.key)
          }, this.Ot = Ct(), this.Lt = new Tt(this.i)
        }

        return t.Bt = function (e) {
          return new t(e.i)
        }, t.prototype.has = function (t) {
          return null != this.Ot.get(t)
        }, t.prototype.get = function (t) {
          return this.Ot.get(t)
        }, t.prototype.first = function () {
          return this.Lt.ct()
        }, t.prototype.last = function () {
          return this.Lt.ut()
        }, t.prototype.m = function () {
          return this.Lt.m()
        }, t.prototype.indexOf = function (t) {
          var e = this.Ot.get(t);
          return e ? this.Lt.indexOf(e) : -1
        }, Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.Lt.size
          }, enumerable: !1, configurable: !0
        }), t.prototype.forEach = function (t) {
          this.Lt.ht((function (e, n) {
            return t(e), !1
          }))
        }, t.prototype.add = function (t) {
          var e = this.delete(t.key);
          return e.copy(e.Ot.ot(t.key, t), e.Lt.ot(t, null))
        }, t.prototype.delete = function (t) {
          var e = this.get(t);
          return e ? this.copy(this.Ot.remove(t), this.Lt.remove(e)) : this
        }, t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) return !1;
          if (this.size !== e.size) return !1;
          for (var n = this.Lt._t(), r = e.Lt._t(); n.At();) {
            var i = n.It().key, o = r.It().key;
            if (!i.isEqual(o)) return !1
          }
          return !0
        }, t.prototype.toString = function () {
          var t = [];
          return this.forEach((function (e) {
            t.push(e.toString())
          })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)"
        }, t.prototype.copy = function (e, n) {
          var r = new t;
          return r.i = this.i, r.Ot = e, r.Lt = n, r
        }, t
      }(), jt = function () {
        function t() {
          this.qt = new Tt(x.i)
        }

        return t.prototype.track = function (t) {
          var e = t.doc.key, n = this.qt.get(e);
          n ? 0 !== t.type && 3 === n.type ? this.qt = this.qt.ot(e, t) : 3 === t.type && 1 !== n.type ? this.qt = this.qt.ot(e, {
            type: n.type,
            doc: t.doc
          }) : 2 === t.type && 2 === n.type ? this.qt = this.qt.ot(e, {
            type: 2,
            doc: t.doc
          }) : 2 === t.type && 0 === n.type ? this.qt = this.qt.ot(e, {
            type: 0,
            doc: t.doc
          }) : 1 === t.type && 0 === n.type ? this.qt = this.qt.remove(e) : 1 === t.type && 2 === n.type ? this.qt = this.qt.ot(e, {
            type: 1,
            doc: n.doc
          }) : 0 === t.type && 1 === n.type ? this.qt = this.qt.ot(e, {
            type: 2,
            doc: t.doc
          }) : _() : this.qt = this.qt.ot(e, t)
        }, t.prototype.Ut = function () {
          var t = [];
          return this.qt.ht((function (e, n) {
            t.push(n)
          })), t
        }, t
      }(), qt = function () {
        function t(t, e, n, r, i, o, s, u) {
          this.query = t, this.docs = e, this.Qt = n, this.docChanges = r, this.Wt = i, this.fromCache = o, this.jt = s, this.Kt = u
        }

        return t.Gt = function (e, n, r, i) {
          var o = [];
          return n.forEach((function (t) {
            o.push({type: 0, doc: t})
          })), new t(e, n, Ft.Bt(n), o, r, i, !0, !1)
        }, Object.defineProperty(t.prototype, "hasPendingWrites", {
          get: function () {
            return !this.Wt.m()
          }, enumerable: !1, configurable: !0
        }), t.prototype.isEqual = function (t) {
          if (!(this.fromCache === t.fromCache && this.jt === t.jt && this.Wt.isEqual(t.Wt) && Kn(this.query, t.query) && this.docs.isEqual(t.docs) && this.Qt.isEqual(t.Qt))) return !1;
          var e = this.docChanges, n = t.docChanges;
          if (e.length !== n.length) return !1;
          for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
          return !0
        }, t
      }(), Bt = function () {
        function t(t, e, n, r, i) {
          this.nt = t, this.zt = e, this.Ht = n, this.Yt = r, this.Jt = i
        }

        return t.Xt = function (e, n) {
          var r = new Map;
          return r.set(e, Gt.Zt(e, n)), new t(ct.min(), r, Mt(), Ot(), Ut())
        }, t
      }(), Gt = function () {
        function t(t, e, n, r, i) {
          this.resumeToken = t, this.te = e, this.ee = n, this.ne = r, this.se = i
        }

        return t.Zt = function (e, n) {
          return new t(tt.B, n, Ut(), Ut(), Ut())
        }, t
      }(), zt = function (t, e, n, r) {
        this.ie = t, this.removedTargetIds = e, this.key = n, this.re = r
      }, Wt = function (t, e) {
        this.targetId = t, this.oe = e
      }, Ht = function (t, e, n, r) {
        void 0 === n && (n = tt.B), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r
      }, Kt = function () {
        function t() {
          this.ae = 0, this.ce = Yt(), this.ue = tt.B, this.he = !1, this.le = !0
        }

        return Object.defineProperty(t.prototype, "te", {
          get: function () {
            return this.he
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "resumeToken", {
          get: function () {
            return this.ue
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "_e", {
          get: function () {
            return 0 !== this.ae
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "fe", {
          get: function () {
            return this.le
          }, enumerable: !1, configurable: !0
        }), t.prototype.de = function (t) {
          t.O() > 0 && (this.le = !0, this.ue = t)
        }, t.prototype.we = function () {
          var t = Ut(), e = Ut(), n = Ut();
          return this.ce.forEach((function (r, i) {
            switch (i) {
              case 0:
                t = t.add(r);
                break;
              case 2:
                e = e.add(r);
                break;
              case 1:
                n = n.add(r);
                break;
              default:
                _()
            }
          })), new Gt(this.ue, this.he, t, e, n)
        }, t.prototype.me = function () {
          this.le = !1, this.ce = Yt()
        }, t.prototype.Te = function (t, e) {
          this.le = !0, this.ce = this.ce.ot(t, e)
        }, t.prototype.Ee = function (t) {
          this.le = !0, this.ce = this.ce.remove(t)
        }, t.prototype.Ie = function () {
          this.ae += 1
        }, t.prototype.Ae = function () {
          this.ae -= 1
        }, t.prototype.Re = function () {
          this.le = !0, this.he = !0
        }, t
      }(), Qt = function () {
        function t(t) {
          this.ge = t, this.Pe = new Map, this.ye = Ot(), this.Ve = Xt(), this.pe = new St(J)
        }

        return t.prototype.be = function (t) {
          for (var e = 0, n = t.ie; e < n.length; e++) {
            var r = n[e];
            t.re instanceof Ln ? this.ve(r, t.re) : t.re instanceof kn && this.Se(r, t.key, t.re)
          }
          for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var s = o[i];
            this.Se(s, t.key, t.re)
          }
        }, t.prototype.De = function (t) {
          var e = this;
          this.Ce(t, (function (n) {
            var r = e.Ne(n);
            switch (t.state) {
              case 0:
                e.Fe(n) && r.de(t.resumeToken);
                break;
              case 1:
                r.Ae(), r._e || r.me(), r.de(t.resumeToken);
                break;
              case 2:
                r.Ae(), r._e || e.removeTarget(n);
                break;
              case 3:
                e.Fe(n) && (r.Re(), r.de(t.resumeToken));
                break;
              case 4:
                e.Fe(n) && (e.xe(n), r.de(t.resumeToken));
                break;
              default:
                _()
            }
          }))
        }, t.prototype.Ce = function (t, e) {
          var n = this;
          t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Pe.forEach((function (t, r) {
            n.Fe(r) && e(r)
          }))
        }, t.prototype.$e = function (t) {
          var e = t.targetId, n = t.oe.count, r = this.ke(e);
          if (r) {
            var i = r.target;
            if (dt(i)) if (0 === n) {
              var o = new x(i.path);
              this.Se(e, o, new kn(o, ct.min()))
            } else g(1 === n); else this.Me(e) !== n && (this.xe(e), this.pe = this.pe.add(e))
          }
        }, t.prototype.Oe = function (t) {
          var e = this, n = new Map;
          this.Pe.forEach((function (r, i) {
            var o = e.ke(i);
            if (o) {
              if (r.te && dt(o.target)) {
                var s = new x(o.target.path);
                null !== e.ye.get(s) || e.Le(i, s) || e.Se(i, s, new kn(s, t))
              }
              r.fe && (n.set(i, r.we()), r.me())
            }
          }));
          var r = Ut();
          this.Ve.forEach((function (t, n) {
            var i = !0;
            n.xt((function (t) {
              var n = e.ke(t);
              return !n || 2 === n.et || (i = !1, !1)
            })), i && (r = r.add(t))
          }));
          var i = new Bt(t, n, this.pe, this.ye, r);
          return this.ye = Ot(), this.Ve = Xt(), this.pe = new St(J), i
        }, t.prototype.ve = function (t, e) {
          if (this.Fe(t)) {
            var n = this.Le(t, e.key) ? 2 : 0;
            this.Ne(t).Te(e.key, n), this.ye = this.ye.ot(e.key, e), this.Ve = this.Ve.ot(e.key, this.Be(e.key).add(t))
          }
        }, t.prototype.Se = function (t, e, n) {
          if (this.Fe(t)) {
            var r = this.Ne(t);
            this.Le(t, e) ? r.Te(e, 1) : r.Ee(e), this.Ve = this.Ve.ot(e, this.Be(e).delete(t)), n && (this.ye = this.ye.ot(e, n))
          }
        }, t.prototype.removeTarget = function (t) {
          this.Pe.delete(t)
        }, t.prototype.Me = function (t) {
          var e = this.Ne(t).we();
          return this.ge.qe(t).size + e.ee.size - e.se.size
        }, t.prototype.Ie = function (t) {
          this.Ne(t).Ie()
        }, t.prototype.Ne = function (t) {
          var e = this.Pe.get(t);
          return e || (e = new Kt, this.Pe.set(t, e)), e
        }, t.prototype.Be = function (t) {
          var e = this.Ve.get(t);
          return e || (e = new St(J), this.Ve = this.Ve.ot(t, e)), e
        }, t.prototype.Fe = function (t) {
          var e = null !== this.ke(t);
          return e || y("WatchChangeAggregator", "Detected inactive target", t), e
        }, t.prototype.ke = function (t) {
          var e = this.Pe.get(t);
          return e && e._e ? null : this.ge.Ue(t)
        }, t.prototype.xe = function (t) {
          var e = this;
          this.Pe.set(t, new Kt), this.ge.qe(t).forEach((function (n) {
            e.Se(t, n, null)
          }))
        }, t.prototype.Le = function (t, e) {
          return this.ge.qe(t).has(e)
        }, t
      }();

      function Xt() {
        return new Tt(x.i)
      }

      function Yt() {
        return new Tt(x.i)
      }

      function Jt(t) {
        var e, n;
        return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue)
      }

      function $t(t) {
        var e = se(t.mapValue.fields.__local_write_time__.timestampValue);
        return new at(e.seconds, e.nanos)
      }

      var Zt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

      function te(t) {
        return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? Jt(t) ? 4 : 10 : _()
      }

      function ee(t, e) {
        var n = te(t);
        if (n !== te(e)) return !1;
        switch (n) {
          case 0:
            return !0;
          case 1:
            return t.booleanValue === e.booleanValue;
          case 4:
            return $t(t).isEqual($t(e));
          case 3:
            return function (t, e) {
              if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) return t.timestampValue === e.timestampValue;
              var n = se(t.timestampValue), r = se(e.timestampValue);
              return n.seconds === r.seconds && n.nanos === r.nanos
            }(t, e);
          case 5:
            return t.stringValue === e.stringValue;
          case 6:
            return function (t, e) {
              return ae(t.bytesValue).isEqual(ae(e.bytesValue))
            }(t, e);
          case 7:
            return t.referenceValue === e.referenceValue;
          case 8:
            return function (t, e) {
              return ue(t.geoPointValue.latitude) === ue(e.geoPointValue.latitude) && ue(t.geoPointValue.longitude) === ue(e.geoPointValue.longitude)
            }(t, e);
          case 2:
            return function (t, e) {
              if ("integerValue" in t && "integerValue" in e) return ue(t.integerValue) === ue(e.integerValue);
              if ("doubleValue" in t && "doubleValue" in e) {
                var n = ue(t.doubleValue), r = ue(e.doubleValue);
                return n === r ? ft(n) === ft(r) : isNaN(n) && isNaN(r)
              }
              return !1
            }(t, e);
          case 9:
            return $(t.arrayValue.values || [], e.arrayValue.values || [], ee);
          case 10:
            return function (t, e) {
              var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
              if (I(n) !== I(r)) return !1;
              for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !ee(n[i], r[i]))) return !1;
              return !0
            }(t, e);
          default:
            return _()
        }
      }

      function ne(t, e) {
        return void 0 !== (t.values || []).find((function (t) {
          return ee(t, e)
        }))
      }

      function re(t, e) {
        var n = te(t), r = te(e);
        if (n !== r) return J(n, r);
        switch (n) {
          case 0:
            return 0;
          case 1:
            return J(t.booleanValue, e.booleanValue);
          case 2:
            return function (t, e) {
              var n = ue(t.integerValue || t.doubleValue), r = ue(e.integerValue || e.doubleValue);
              return n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1
            }(t, e);
          case 3:
            return ie(t.timestampValue, e.timestampValue);
          case 4:
            return ie($t(t), $t(e));
          case 5:
            return J(t.stringValue, e.stringValue);
          case 6:
            return function (t, e) {
              var n = ae(t), r = ae(e);
              return n.L(r)
            }(t.bytesValue, e.bytesValue);
          case 7:
            return function (t, e) {
              for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = J(n[i], r[i]);
                if (0 !== o) return o
              }
              return J(n.length, r.length)
            }(t.referenceValue, e.referenceValue);
          case 8:
            return function (t, e) {
              var n = J(ue(t.latitude), ue(e.latitude));
              return 0 !== n ? n : J(ue(t.longitude), ue(e.longitude))
            }(t.geoPointValue, e.geoPointValue);
          case 9:
            return function (t, e) {
              for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = re(n[i], r[i]);
                if (o) return o
              }
              return J(n.length, r.length)
            }(t.arrayValue, e.arrayValue);
          case 10:
            return function (t, e) {
              var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
              r.sort(), o.sort();
              for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = J(r[s], o[s]);
                if (0 !== u) return u;
                var a = re(n[r[s]], i[o[s]]);
                if (0 !== a) return a
              }
              return J(r.length, o.length)
            }(t.mapValue, e.mapValue);
          default:
            throw _()
        }
      }

      function ie(t, e) {
        if ("string" == typeof t && "string" == typeof e && t.length === e.length) return J(t, e);
        var n = se(t), r = se(e), i = J(n.seconds, r.seconds);
        return 0 !== i ? i : J(n.nanos, r.nanos)
      }

      function oe(t) {
        return function t(e) {
          return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function (t) {
            var e = se(t);
            return "time(" + e.seconds + "," + e.nanos + ")"
          }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? ae(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, x.C(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function (e) {
            for (var n = "[", r = !0, o = 0, i = e.values || []; o < i.length; o++) r ? r = !1 : n += ",", n += t(i[o]);
            return n + "]"
          }(e.arrayValue) : "mapValue" in e ? function (e) {
            for (var n = "{", r = !0, o = 0, i = Object.keys(e.fields || {}).sort(); o < i.length; o++) {
              var c = i[o];
              r ? r = !1 : n += ",", n += c + ":" + t(e.fields[c])
            }
            return n + "}"
          }(e.mapValue) : _();
          var n, r
        }(t)
      }

      function se(t) {
        if (g(!!t), "string" == typeof t) {
          var e = 0, n = Zt.exec(t);
          if (g(!!n), n[1]) {
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r)
          }
          var i = new Date(t);
          return {seconds: Math.floor(i.getTime() / 1e3), nanos: e}
        }
        return {seconds: ue(t.seconds), nanos: ue(t.nanos)}
      }

      function ue(t) {
        return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0
      }

      function ae(t) {
        return "string" == typeof t ? tt.fromBase64String(t) : tt.fromUint8Array(t)
      }

      function ce(t, e) {
        return {referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.R()}
      }

      function he(t) {
        return !!t && "integerValue" in t
      }

      function fe(t) {
        return !!t && "arrayValue" in t
      }

      function le(t) {
        return !!t && "nullValue" in t
      }

      function pe(t) {
        return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue))
      }

      function de(t) {
        return !!t && "mapValue" in t
      }

      var ve = {asc: "ASCENDING", desc: "DESCENDING"}, ye = {
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "!=": "NOT_EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        in: "IN",
        "not-in": "NOT_IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
      }, ge = function (t, e) {
        this.U = t, this.Qe = e
      };

      function me(t) {
        return {integerValue: "" + t}
      }

      function we(t, e) {
        if (t.Qe) {
          if (isNaN(e)) return {doubleValue: "NaN"};
          if (e === 1 / 0) return {doubleValue: "Infinity"};
          if (e === -1 / 0) return {doubleValue: "-Infinity"}
        }
        return {doubleValue: ft(e) ? "-0" : e}
      }

      function be(t, e) {
        return lt(e) ? me(e) : we(t, e)
      }

      function _e(t, e) {
        return t.Qe ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
          seconds: "" + e.seconds,
          nanos: e.nanoseconds
        }
      }

      function Ee(t, e) {
        return t.Qe ? e.toBase64() : e.toUint8Array()
      }

      function Ie(t, e) {
        return _e(t, e.Z())
      }

      function Te(t) {
        return g(!!t), ct.J(function (t) {
          var e = se(t);
          return new at(e.seconds, e.nanos)
        }(t))
      }

      function Ae(t, e) {
        return function (t) {
          return new N(["projects", t.projectId, "databases", t.database])
        }(t).child("documents").child(e).R()
      }

      function Ne(t) {
        var e = N.g(t);
        return g(Qe(e)), e
      }

      function Se(t, e) {
        return Ae(t.U, e.path)
      }

      function De(t, e) {
        var n = Ne(e);
        return g(n.get(1) === t.U.projectId), g(!n.get(3) && !t.U.database || n.get(3) === t.U.database), new x(ke(n))
      }

      function xe(t, e) {
        return Ae(t.U, e)
      }

      function Oe(t) {
        var e = Ne(t);
        return 4 === e.length ? N.P() : ke(e)
      }

      function Le(t) {
        return new N(["projects", t.U.projectId, "databases", t.U.database]).R()
      }

      function ke(t) {
        return g(t.length > 4 && "documents" === t.get(4)), t.u(5)
      }

      function Ce(t, e, n) {
        return {name: Se(t, e), fields: n.proto.mapValue.fields}
      }

      function Re(t, e) {
        var n;
        if (e instanceof wn) n = {update: Ce(t, e.key, e.value)}; else if (e instanceof An) n = {delete: Se(t, e.key)}; else if (e instanceof bn) n = {
          update: Ce(t, e.key, e.data),
          updateMask: Ke(e.We)
        }; else if (e instanceof En) n = {
          transform: {
            document: Se(t, e.key),
            fieldTransforms: e.fieldTransforms.map((function (t) {
              return function (t, e) {
                var n = e.transform;
                if (n instanceof Ze) return {fieldPath: e.field.R(), setToServerValue: "REQUEST_TIME"};
                if (n instanceof tn) return {fieldPath: e.field.R(), appendMissingElements: {values: n.elements}};
                if (n instanceof nn) return {fieldPath: e.field.R(), removeAllFromArray: {values: n.elements}};
                if (n instanceof on) return {fieldPath: e.field.R(), increment: n.je};
                throw _()
              }(0, t)
            }))
          }
        }; else {
          if (!(e instanceof Nn)) return _();
          n = {verify: Se(t, e.key)}
        }
        return e.Ge.Ke || (n.currentDocument = function (t, e) {
          return void 0 !== e.updateTime ? {updateTime: Ie(t, e.updateTime)} : void 0 !== e.exists ? {exists: e.exists} : _()
        }(t, e.Ge)), n
      }

      function Pe(t, e) {
        var n = e.currentDocument ? function (t) {
          return void 0 !== t.updateTime ? fn.updateTime(Te(t.updateTime)) : void 0 !== t.exists ? fn.exists(t.exists) : fn.ze()
        }(e.currentDocument) : fn.ze();
        if (e.update) {
          e.update.name;
          var r = De(t, e.update.name), i = new Sn({mapValue: {fields: e.update.fields}});
          if (e.updateMask) {
            var o = function (t) {
              var e = t.fieldPaths || [];
              return new an(e.map((function (t) {
                return D.S(t)
              })))
            }(e.updateMask);
            return new bn(r, i, o, n)
          }
          return new wn(r, i, n)
        }
        if (e.delete) {
          var s = De(t, e.delete);
          return new An(s, n)
        }
        if (e.transform) {
          var u = De(t, e.transform.document), a = e.transform.fieldTransforms.map((function (e) {
            return function (t, e) {
              var n = null;
              if ("setToServerValue" in e) g("REQUEST_TIME" === e.setToServerValue), n = new Ze; else if ("appendMissingElements" in e) {
                var r = e.appendMissingElements.values || [];
                n = new tn(r)
              } else if ("removeAllFromArray" in e) {
                var i = e.removeAllFromArray.values || [];
                n = new nn(i)
              } else "increment" in e ? n = new on(t, e.increment) : _();
              var o = D.S(e.fieldPath);
              return new cn(o, n)
            }(t, e)
          }));
          return g(!0 === n.exists), new En(u, a)
        }
        if (e.verify) {
          var c = De(t, e.verify);
          return new Nn(c, n)
        }
        return _()
      }

      function Ue(t, e) {
        return {documents: [xe(t, e.path)]}
      }

      function Ve(t, e) {
        var n = {structuredQuery: {}}, r = e.path;
        null !== e.collectionGroup ? (n.parent = xe(t, r), n.structuredQuery.from = [{
          collectionId: e.collectionGroup,
          allDescendants: !0
        }]) : (n.parent = xe(t, r.h()), n.structuredQuery.from = [{collectionId: r._()}]);
        var i = function (t) {
          if (0 !== t.length) {
            var e = t.map((function (t) {
              return function (t) {
                if ("==" === t.op) {
                  if (pe(t.value)) return {unaryFilter: {field: Ge(t.field), op: "IS_NAN"}};
                  if (le(t.value)) return {unaryFilter: {field: Ge(t.field), op: "IS_NULL"}}
                } else if ("!=" === t.op) {
                  if (pe(t.value)) return {unaryFilter: {field: Ge(t.field), op: "IS_NOT_NAN"}};
                  if (le(t.value)) return {unaryFilter: {field: Ge(t.field), op: "IS_NOT_NULL"}}
                }
                return {fieldFilter: {field: Ge(t.field), op: Be(t.op), value: t.value}}
              }(t)
            }));
            return 1 === e.length ? e[0] : {compositeFilter: {op: "AND", filters: e}}
          }
        }(e.filters);
        i && (n.structuredQuery.where = i);
        var o = function (t) {
          if (0 !== t.length) return t.map((function (t) {
            return function (t) {
              return {field: Ge(t.field), direction: qe(t.dir)}
            }(t)
          }))
        }(e.orderBy);
        o && (n.structuredQuery.orderBy = o);
        var s = function (t, e) {
          return t.Qe || ht(e) ? e : {value: e}
        }(t, e.limit);
        return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = Fe(e.startAt)), e.endAt && (n.structuredQuery.endAt = Fe(e.endAt)), n
      }

      function Me(t) {
        var e = Oe(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
        if (r > 0) {
          g(1 === r);
          var o = n.from[0];
          o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId)
        }
        var s = [];
        n.where && (s = function t(e) {
          return e ? void 0 !== e.unaryFilter ? [He(e)] : void 0 !== e.fieldFilter ? [We(e)] : void 0 !== e.compositeFilter ? e.compositeFilter.filters.map((function (e) {
            return t(e)
          })).reduce((function (t, e) {
            return t.concat(e)
          })) : _() : []
        }(n.where));
        var u = [];
        n.orderBy && (u = n.orderBy.map((function (t) {
          return function (t) {
            return new fr(ze(t.field), function (t) {
              switch (t) {
                case"ASCENDING":
                  return "asc";
                case"DESCENDING":
                  return "desc";
                default:
                  return
              }
            }(t.direction))
          }(t)
        })));
        var a = null;
        n.limit && (a = function (t) {
          var e;
          return ht(e = "object" == typeof t ? t.value : t) ? null : e
        }(n.limit));
        var c = null;
        n.startAt && (c = je(n.startAt));
        var h = null;
        return n.endAt && (h = je(n.endAt)), Gn(Pn(e, i, u, s, a, "F", c, h))
      }

      function Fe(t) {
        return {before: t.before, values: t.position}
      }

      function je(t) {
        var e = !!t.before, n = t.values || [];
        return new ur(n, e)
      }

      function qe(t) {
        return ve[t]
      }

      function Be(t) {
        return ye[t]
      }

      function Ge(t) {
        return {fieldPath: t.R()}
      }

      function ze(t) {
        return D.S(t.fieldPath)
      }

      function We(t) {
        return $n.create(ze(t.fieldFilter.field), function (t) {
          switch (t) {
            case"EQUAL":
              return "==";
            case"NOT_EQUAL":
              return "!=";
            case"GREATER_THAN":
              return ">";
            case"GREATER_THAN_OR_EQUAL":
              return ">=";
            case"LESS_THAN":
              return "<";
            case"LESS_THAN_OR_EQUAL":
              return "<=";
            case"ARRAY_CONTAINS":
              return "array-contains";
            case"IN":
              return "in";
            case"NOT_IN":
              return "not-in";
            case"ARRAY_CONTAINS_ANY":
              return "array-contains-any";
            case"OPERATOR_UNSPECIFIED":
            default:
              return _()
          }
        }(t.fieldFilter.op), t.fieldFilter.value)
      }

      function He(t) {
        switch (t.unaryFilter.op) {
          case"IS_NAN":
            var e = ze(t.unaryFilter.field);
            return $n.create(e, "==", {doubleValue: NaN});
          case"IS_NULL":
            var n = ze(t.unaryFilter.field);
            return $n.create(n, "==", {nullValue: "NULL_VALUE"});
          case"IS_NOT_NAN":
            var r = ze(t.unaryFilter.field);
            return $n.create(r, "!=", {doubleValue: NaN});
          case"IS_NOT_NULL":
            var i = ze(t.unaryFilter.field);
            return $n.create(i, "!=", {nullValue: "NULL_VALUE"});
          case"OPERATOR_UNSPECIFIED":
          default:
            return _()
        }
      }

      function Ke(t) {
        var e = [];
        return t.fields.forEach((function (t) {
          return e.push(t.R())
        })), {fieldPaths: e}
      }

      function Qe(t) {
        return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2)
      }

      var Xe = function () {
        this.He = void 0
      };

      function Ye(t, e, n) {
        return t instanceof Ze ? function (t, e) {
          var n = {
            fields: {
              __type__: {stringValue: "server_timestamp"},
              __local_write_time__: {timestampValue: {seconds: t.seconds, nanos: t.nanoseconds}}
            }
          };
          return e && (n.fields.__previous_value__ = e), {mapValue: n}
        }(n, e) : t instanceof tn ? en(t, e) : t instanceof nn ? rn(t, e) : function (t, e) {
          var n = $e(t, e), r = sn(n) + sn(t.je);
          return he(n) && he(t.je) ? me(r) : we(t.serializer, r)
        }(t, e)
      }

      function Je(t, e, n) {
        return t instanceof tn ? en(t, e) : t instanceof nn ? rn(t, e) : n
      }

      function $e(t, e) {
        return t instanceof on ? he(n = e) || function (t) {
          return !!t && "doubleValue" in t
        }(n) ? e : {integerValue: 0} : null;
        var n
      }

      var Ze = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this
        }

        return r.__extends(e, t), e
      }(Xe), tn = function (t) {
        function e(e) {
          var n = this;
          return (n = t.call(this) || this).elements = e, n
        }

        return r.__extends(e, t), e
      }(Xe);

      function en(t, e) {
        for (var n = un(e), r = function (t) {
          n.some((function (e) {
            return ee(e, t)
          })) || n.push(t)
        }, i = 0, o = t.elements; i < o.length; i++) r(o[i]);
        return {arrayValue: {values: n}}
      }

      var nn = function (t) {
        function e(e) {
          var n = this;
          return (n = t.call(this) || this).elements = e, n
        }

        return r.__extends(e, t), e
      }(Xe);

      function rn(t, e) {
        for (var n = un(e), r = function (t) {
          n = n.filter((function (e) {
            return !ee(e, t)
          }))
        }, i = 0, o = t.elements; i < o.length; i++) r(o[i]);
        return {arrayValue: {values: n}}
      }

      var on = function (t) {
        function e(e, n) {
          var r = this;
          return (r = t.call(this) || this).serializer = e, r.je = n, r
        }

        return r.__extends(e, t), e
      }(Xe);

      function sn(t) {
        return ue(t.integerValue || t.doubleValue)
      }

      function un(t) {
        return fe(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
      }

      var an = function () {
        function t(t) {
          this.fields = t, t.sort(D.i)
        }

        return t.prototype.Ye = function (t) {
          for (var e = 0, n = this.fields; e < n.length; e++) if (n[e].T(t)) return !0;
          return !1
        }, t.prototype.isEqual = function (t) {
          return $(this.fields, t.fields, (function (t, e) {
            return t.isEqual(e)
          }))
        }, t
      }(), cn = function (t, e) {
        this.field = t, this.transform = e
      }, hn = function (t, e) {
        this.version = t, this.transformResults = e
      }, fn = function () {
        function t(t, e) {
          this.updateTime = t, this.exists = e
        }

        return t.ze = function () {
          return new t
        }, t.exists = function (e) {
          return new t(void 0, e)
        }, t.updateTime = function (e) {
          return new t(e)
        }, Object.defineProperty(t.prototype, "Ke", {
          get: function () {
            return void 0 === this.updateTime && void 0 === this.exists
          }, enumerable: !1, configurable: !0
        }), t.prototype.isEqual = function (t) {
          return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime)
        }, t
      }();

      function ln(t, e) {
        return void 0 !== t.updateTime ? e instanceof Ln && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof Ln
      }

      var pn = function () {
      };

      function dn(t, e, n) {
        return t instanceof wn ? function (t, e, n) {
          return new Ln(t.key, n.version, t.value, {hasCommittedMutations: !0})
        }(t, 0, n) : t instanceof bn ? function (t, e, n) {
          if (!ln(t.Ge, e)) return new Cn(t.key, n.version);
          var r = _n(t, e);
          return new Ln(t.key, n.version, r, {hasCommittedMutations: !0})
        }(t, e, n) : t instanceof En ? function (t, e, n) {
          if (g(null != n.transformResults), !ln(t.Ge, e)) return new Cn(t.key, n.version);
          var r = In(t, e), i = function (t, e, n) {
            var r = [];
            g(t.length === n.length);
            for (var i = 0; i < n.length; i++) {
              var o = t[i], s = o.transform, u = null;
              e instanceof Ln && (u = e.field(o.field)), r.push(Je(s, u, n[i]))
            }
            return r
          }(t.fieldTransforms, e, n.transformResults), o = n.version, s = Tn(t, r.data(), i);
          return new Ln(t.key, o, s, {hasCommittedMutations: !0})
        }(t, e, n) : function (t, e, n) {
          return new kn(t.key, n.version, {hasCommittedMutations: !0})
        }(t, 0, n)
      }

      function vn(t, e, n, r) {
        return t instanceof wn ? function (t, e) {
          if (!ln(t.Ge, e)) return e;
          var n = mn(e);
          return new Ln(t.key, n, t.value, {Je: !0})
        }(t, e) : t instanceof bn ? function (t, e) {
          if (!ln(t.Ge, e)) return e;
          var n = mn(e), r = _n(t, e);
          return new Ln(t.key, n, r, {Je: !0})
        }(t, e) : t instanceof En ? function (t, e, n, r) {
          if (!ln(t.Ge, e)) return e;
          var i = In(t, e), o = function (t, e, n, r) {
            for (var i = [], o = 0, s = t; o < s.length; o++) {
              var u = s[o], a = u.transform, c = null;
              n instanceof Ln && (c = n.field(u.field)), null === c && r instanceof Ln && (c = r.field(u.field)), i.push(Ye(a, c, e))
            }
            return i
          }(t.fieldTransforms, n, e, r), s = Tn(t, i.data(), o);
          return new Ln(t.key, i.version, s, {Je: !0})
        }(t, e, r, n) : function (t, e) {
          return ln(t.Ge, e) ? new kn(t.key, ct.min()) : e
        }(t, e)
      }

      function yn(t, e) {
        return t instanceof En ? function (t, e) {
          for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
            var o = i[r], s = e instanceof Ln ? e.field(o.field) : void 0, u = $e(o.transform, s || null);
            null != u && (n = null == n ? (new Dn).set(o.field, u) : n.set(o.field, u))
          }
          return n ? n.Xe() : null
        }(t, e) : null
      }

      function gn(t, e) {
        return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ge.isEqual(e.Ge) && (0 === t.type ? t.value.isEqual(e.value) : 1 === t.type ? t.data.isEqual(e.data) && t.We.isEqual(e.We) : 2 !== t.type || $(t.fieldTransforms, t.fieldTransforms, (function (t, e) {
          return function (t, e) {
            return t.field.isEqual(e.field) && function (t, e) {
              return t instanceof tn && e instanceof tn || t instanceof nn && e instanceof nn ? $(t.elements, e.elements, ee) : t instanceof on && e instanceof on ? ee(t.je, e.je) : t instanceof Ze && e instanceof Ze
            }(t.transform, e.transform)
          }(t, e)
        })))
      }

      function mn(t) {
        return t instanceof Ln ? t.version : ct.min()
      }

      var wn = function (t) {
        function e(e, n, r) {
          var i = this;
          return (i = t.call(this) || this).key = e, i.value = n, i.Ge = r, i.type = 0, i
        }

        return r.__extends(e, t), e
      }(pn), bn = function (t) {
        function e(e, n, r, i) {
          var o = this;
          return (o = t.call(this) || this).key = e, o.data = n, o.We = r, o.Ge = i, o.type = 1, o
        }

        return r.__extends(e, t), e
      }(pn);

      function _n(t, e) {
        return function (t, e) {
          var n = new Dn(e);
          return t.We.fields.forEach((function (e) {
            if (!e.m()) {
              var r = t.data.field(e);
              null !== r ? n.set(e, r) : n.delete(e)
            }
          })), n.Xe()
        }(t, e instanceof Ln ? e.data() : Sn.empty())
      }

      var En = function (t) {
        function e(e, n) {
          var r = this;
          return (r = t.call(this) || this).key = e, r.fieldTransforms = n, r.type = 2, r.Ge = fn.exists(!0), r
        }

        return r.__extends(e, t), e
      }(pn);

      function In(t, e) {
        return e
      }

      function Tn(t, e, n) {
        for (var r = new Dn(e), i = 0; i < t.fieldTransforms.length; i++) {
          var o = t.fieldTransforms[i];
          r.set(o.field, n[i])
        }
        return r.Xe()
      }

      var An = function (t) {
        function e(e, n) {
          var r = this;
          return (r = t.call(this) || this).key = e, r.Ge = n, r.type = 3, r
        }

        return r.__extends(e, t), e
      }(pn), Nn = function (t) {
        function e(e, n) {
          var r = this;
          return (r = t.call(this) || this).key = e, r.Ge = n, r.type = 4, r
        }

        return r.__extends(e, t), e
      }(pn), Sn = function () {
        function t(t) {
          this.proto = t
        }

        return t.empty = function () {
          return new t({mapValue: {}})
        }, t.prototype.field = function (t) {
          if (t.m()) return this.proto;
          for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!de(e = e.mapValue.fields[t.get(n)])) return null
          }
          return (e = (e.mapValue.fields || {})[t._()]) || null
        }, t.prototype.isEqual = function (t) {
          return ee(this.proto, t.proto)
        }, t
      }(), Dn = function () {
        function t(t) {
          void 0 === t && (t = Sn.empty()), this.Ze = t, this.tn = new Map
        }

        return t.prototype.set = function (t, e) {
          return this.en(t, e), this
        }, t.prototype.delete = function (t) {
          return this.en(t, null), this
        }, t.prototype.en = function (t, e) {
          for (var n = this.tn, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? n = o : o && 10 === te(o) ? (o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (o = new Map, n.set(i, o), n = o)
          }
          n.set(t._(), e)
        }, t.prototype.Xe = function () {
          var t = this.nn(D.P(), this.tn);
          return null != t ? new Sn(t) : this.Ze
        }, t.prototype.nn = function (t, e) {
          var n = this, r = !1, i = this.Ze.field(t), o = de(i) ? Object.assign({}, i.mapValue.fields) : {};
          return e.forEach((function (e, i) {
            if (e instanceof Map) {
              var s = n.nn(t.child(i), e);
              null != s && (o[i] = s, r = !0)
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0)
          })), r ? {mapValue: {fields: o}} : null
        }, t
      }();

      function xn(t) {
        var e = [];
        return T(t.fields || {}, (function (t, n) {
          var r = new D([t]);
          if (de(n)) {
            var i = xn(n.mapValue).fields;
            if (0 === i.length) e.push(r); else for (var o = 0, s = i; o < s.length; o++) {
              var u = s[o];
              e.push(r.child(u))
            }
          } else e.push(r)
        })), new an(e)
      }

      var On = function (t, e) {
        this.key = t, this.version = e
      }, Ln = function (t) {
        function e(e, n, r, i) {
          var o = this;
          return (o = t.call(this, e, n) || this).sn = r, o.Je = !!i.Je, o.hasCommittedMutations = !!i.hasCommittedMutations, o
        }

        return r.__extends(e, t), e.prototype.field = function (t) {
          return this.sn.field(t)
        }, e.prototype.data = function () {
          return this.sn
        }, e.prototype.rn = function () {
          return this.sn.proto
        }, e.prototype.isEqual = function (t) {
          return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Je === t.Je && this.hasCommittedMutations === t.hasCommittedMutations && this.sn.isEqual(t.sn)
        }, e.prototype.toString = function () {
          return "Document(" + this.key + ", " + this.version + ", " + this.sn.toString() + ", {hasLocalMutations: " + this.Je + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})"
        }, Object.defineProperty(e.prototype, "hasPendingWrites", {
          get: function () {
            return this.Je || this.hasCommittedMutations
          }, enumerable: !1, configurable: !0
        }), e
      }(On), kn = function (t) {
        function e(e, n, r) {
          var i = this;
          return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), i
        }

        return r.__extends(e, t), e.prototype.toString = function () {
          return "NoDocument(" + this.key + ", " + this.version + ")"
        }, Object.defineProperty(e.prototype, "hasPendingWrites", {
          get: function () {
            return this.hasCommittedMutations
          }, enumerable: !1, configurable: !0
        }), e.prototype.isEqual = function (t) {
          return t instanceof e && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key)
        }, e
      }(On), Cn = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this
        }

        return r.__extends(e, t), e.prototype.toString = function () {
          return "UnknownDocument(" + this.key + ", " + this.version + ")"
        }, Object.defineProperty(e.prototype, "hasPendingWrites", {
          get: function () {
            return !0
          }, enumerable: !1, configurable: !0
        }), e.prototype.isEqual = function (t) {
          return t instanceof e && t.version.isEqual(this.version) && t.key.isEqual(this.key)
        }, e
      }(On), Rn = function (t, e, n, r, i, o, s, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.on = n, this.filters = r, this.limit = i, this.an = o, this.startAt = s, this.endAt = u, this.cn = null, this.un = null, this.startAt, this.endAt
      };

      function Pn(t, e, n, r, i, o, s, u) {
        return new Rn(t, e, n, r, i, o, s, u)
      }

      function Un(t) {
        return new Rn(t)
      }

      function Vn(t) {
        return !ht(t.limit) && "F" === t.an
      }

      function Mn(t) {
        return !ht(t.limit) && "L" === t.an
      }

      function Fn(t) {
        return t.on.length > 0 ? t.on[0].field : null
      }

      function jn(t) {
        for (var e = 0, n = t.filters; e < n.length; e++) {
          var r = n[e];
          if (r.hn()) return r.field
        }
        return null
      }

      function qn(t) {
        return null !== t.collectionGroup
      }

      function Bn(t) {
        var e = E(t);
        if (null === e.cn) {
          e.cn = [];
          var n = jn(e), r = Fn(e);
          if (null !== n && null === r) n.p() || e.cn.push(new fr(n)), e.cn.push(new fr(D.v(), "asc")); else {
            for (var i = !1, o = 0, s = e.on; o < s.length; o++) {
              var u = s[o];
              e.cn.push(u), u.field.p() && (i = !0)
            }
            if (!i) {
              var a = e.on.length > 0 ? e.on[e.on.length - 1].dir : "asc";
              e.cn.push(new fr(D.v(), a))
            }
          }
        }
        return e.cn
      }

      function Gn(t) {
        var e = E(t);
        if (!e.un) if ("F" === e.an) e.un = vt(e.path, e.collectionGroup, Bn(e), e.filters, e.limit, e.startAt, e.endAt); else {
          for (var n = [], r = 0, i = Bn(e); r < i.length; r++) {
            var o = i[r], s = "desc" === o.dir ? "asc" : "desc";
            n.push(new fr(o.field, s))
          }
          var u = e.endAt ? new ur(e.endAt.position, !e.endAt.before) : null,
            a = e.startAt ? new ur(e.startAt.position, !e.startAt.before) : null;
          e.un = vt(e.path, e.collectionGroup, n, e.filters, e.limit, u, a)
        }
        return e.un
      }

      function zn(t, e, n) {
        return new Rn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), e, n, t.startAt, t.endAt)
      }

      function Wn(t, e) {
        return new Rn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), t.limit, t.an, e, t.endAt)
      }

      function Hn(t, e) {
        return new Rn(t.path, t.collectionGroup, t.on.slice(), t.filters.slice(), t.limit, t.an, t.startAt, e)
      }

      function Kn(t, e) {
        return gt(Gn(t), Gn(e)) && t.an === e.an
      }

      function Qn(t) {
        return yt(Gn(t)) + "|lt:" + t.an
      }

      function Xn(t) {
        return "Query(target=" + function (t) {
          var e = t.path.R();
          return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function (t) {
            return (e = t).field.R() + " " + e.op + " " + oe(e.value);
            var e
          })).join(", ") + "]"), ht(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function (t) {
            return (e = t).field.R() + " (" + e.dir + ")";
            var e
          })).join(", ") + "]"), t.startAt && (e += ", startAt: " + ar(t.startAt)), t.endAt && (e += ", endAt: " + ar(t.endAt)), "Target(" + e + ")"
        }(Gn(t)) + "; limitType=" + t.an + ")"
      }

      function Yn(t, e) {
        return function (t, e) {
          var n = e.key.path;
          return null !== t.collectionGroup ? e.key.N(t.collectionGroup) && t.path.T(n) : x.F(t.path) ? t.path.isEqual(n) : t.path.I(n)
        }(t, e) && function (t, e) {
          for (var n = 0, r = t.on; n < r.length; n++) {
            var i = r[n];
            if (!i.field.p() && null === e.field(i.field)) return !1
          }
          return !0
        }(t, e) && function (t, e) {
          for (var n = 0, r = t.filters; n < r.length; n++) if (!r[n].matches(e)) return !1;
          return !0
        }(t, e) && function (t, e) {
          return !(t.startAt && !cr(t.startAt, Bn(t), e) || t.endAt && cr(t.endAt, Bn(t), e))
        }(t, e)
      }

      function Jn(t) {
        return function (e, n) {
          for (var r = !1, i = 0, o = Bn(t); i < o.length; i++) {
            var s = o[i], u = lr(s, e, n);
            if (0 !== u) return u;
            r = r || s.field.p()
          }
          return 0
        }
      }

      var $n = function (t) {
        function e(e, n, r) {
          var i = this;
          return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i
        }

        return r.__extends(e, t), e.create = function (t, n, r) {
          if (t.p()) return "in" === n || "not-in" === n ? this.ln(t, n, r) : new Zn(t, n, r);
          if (le(r)) {
            if ("==" !== n && "!=" !== n) throw new l(a.INVALID_ARGUMENT, "Invalid query. Null only supports '==' and '!=' comparisons.");
            return new e(t, n, r)
          }
          if (pe(r)) {
            if ("==" !== n && "!=" !== n) throw new l(a.INVALID_ARGUMENT, "Invalid query. NaN only supports '==' and '!=' comparisons.");
            return new e(t, n, r)
          }
          return "array-contains" === n ? new rr(t, r) : "in" === n ? new ir(t, r) : "not-in" === n ? new or(t, r) : "array-contains-any" === n ? new sr(t, r) : new e(t, n, r)
        }, e.ln = function (t, e, n) {
          return "in" === e ? new tr(t, n) : new er(t, n)
        }, e.prototype.matches = function (t) {
          var e = t.field(this.field);
          return "!=" === this.op ? null !== e && this._n(re(e, this.value)) : null !== e && te(this.value) === te(e) && this._n(re(e, this.value))
        }, e.prototype._n = function (t) {
          switch (this.op) {
            case"<":
              return t < 0;
            case"<=":
              return t <= 0;
            case"==":
              return 0 === t;
            case"!=":
              return 0 !== t;
            case">":
              return t > 0;
            case">=":
              return t >= 0;
            default:
              return _()
          }
        }, e.prototype.hn = function () {
          return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
        }, e
      }((function () {
      })), Zn = function (t) {
        function e(e, n, r) {
          var i = this;
          return (i = t.call(this, e, n, r) || this).key = x.C(r.referenceValue), i
        }

        return r.__extends(e, t), e.prototype.matches = function (t) {
          var e = x.i(t.key, this.key);
          return this._n(e)
        }, e
      }($n), tr = function (t) {
        function e(e, n) {
          var r = this;
          return (r = t.call(this, e, "in", n) || this).keys = nr("in", n), r
        }

        return r.__extends(e, t), e.prototype.matches = function (t) {
          return this.keys.some((function (e) {
            return e.isEqual(t.key)
          }))
        }, e
      }($n), er = function (t) {
        function e(e, n) {
          var r = this;
          return (r = t.call(this, e, "not-in", n) || this).keys = nr("not-in", n), r
        }

        return r.__extends(e, t), e.prototype.matches = function (t) {
          return !this.keys.some((function (e) {
            return e.isEqual(t.key)
          }))
        }, e
      }($n);

      function nr(t, e) {
        var n;
        return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function (t) {
          return x.C(t.referenceValue)
        }))
      }

      var rr = function (t) {
        function e(e, n) {
          return t.call(this, e, "array-contains", n) || this
        }

        return r.__extends(e, t), e.prototype.matches = function (t) {
          var e = t.field(this.field);
          return fe(e) && ne(e.arrayValue, this.value)
        }, e
      }($n), ir = function (t) {
        function e(e, n) {
          return t.call(this, e, "in", n) || this
        }

        return r.__extends(e, t), e.prototype.matches = function (t) {
          var e = t.field(this.field);
          return null !== e && ne(this.value.arrayValue, e)
        }, e
      }($n), or = function (t) {
        function e(e, n) {
          return t.call(this, e, "not-in", n) || this
        }

        return r.__extends(e, t), e.prototype.matches = function (t) {
          if (ne(this.value.arrayValue, {nullValue: "NULL_VALUE"})) return !1;
          var e = t.field(this.field);
          return null !== e && !ne(this.value.arrayValue, e)
        }, e
      }($n), sr = function (t) {
        function e(e, n) {
          return t.call(this, e, "array-contains-any", n) || this
        }

        return r.__extends(e, t), e.prototype.matches = function (t) {
          var e = this, n = t.field(this.field);
          return !(!fe(n) || !n.arrayValue.values) && n.arrayValue.values.some((function (t) {
            return ne(e.value.arrayValue, t)
          }))
        }, e
      }($n), ur = function (t, e) {
        this.position = t, this.before = e
      };

      function ar(t) {
        return (t.before ? "b" : "a") + ":" + t.position.map((function (t) {
          return oe(t)
        })).join(",")
      }

      function cr(t, e, n) {
        for (var r = 0, i = 0; i < t.position.length; i++) {
          var o = e[i], s = t.position[i];
          if (r = o.field.p() ? x.i(x.C(s.referenceValue), n.key) : re(s, n.field(o.field)), "desc" === o.dir && (r *= -1), 0 !== r) break
        }
        return t.before ? r <= 0 : r < 0
      }

      function hr(t, e) {
        if (null === t) return null === e;
        if (null === e) return !1;
        if (t.before !== e.before || t.position.length !== e.position.length) return !1;
        for (var n = 0; n < t.position.length; n++) if (!ee(t.position[n], e.position[n])) return !1;
        return !0
      }

      var fr = function (t, e) {
        void 0 === e && (e = "asc"), this.field = t, this.dir = e
      };

      function lr(t, e, n) {
        var r = t.field.p() ? x.i(e.key, n.key) : function (t, e, n) {
          var r = e.field(t), i = n.field(t);
          return null !== r && null !== i ? re(r, i) : _()
        }(t.field, e, n);
        switch (t.dir) {
          case"asc":
            return r;
          case"desc":
            return -1 * r;
          default:
            return _()
        }
      }

      function pr(t, e) {
        return t.dir === e.dir && t.field.isEqual(e.field)
      }

      var dr = function () {
        var t = this;
        this.promise = new Promise((function (e, n) {
          t.resolve = e, t.reject = n
        }))
      }, vr = function () {
        function t(t, e, n, r, i) {
          void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.fn = t, this.dn = e, this.wn = n, this.mn = r, this.Tn = i, this.En = 0, this.In = null, this.An = Date.now(), this.reset()
        }

        return t.prototype.reset = function () {
          this.En = 0
        }, t.prototype.Rn = function () {
          this.En = this.Tn
        }, t.prototype.gn = function (t) {
          var e = this;
          this.cancel();
          var n = Math.floor(this.En + this.Pn()), r = Math.max(0, Date.now() - this.An), i = Math.max(0, n - r);
          i > 0 && y("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.En + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.In = this.fn.yn(this.dn, i, (function () {
            return e.An = Date.now(), t()
          })), this.En *= this.mn, this.En < this.wn && (this.En = this.wn), this.En > this.Tn && (this.En = this.Tn)
        }, t.prototype.Vn = function () {
          null !== this.In && (this.In.pn(), this.In = null)
        }, t.prototype.cancel = function () {
          null !== this.In && (this.In.cancel(), this.In = null)
        }, t.prototype.Pn = function () {
          return (Math.random() - .5) * this.En
        }, t
      }(), yr = function () {
        function t(t) {
          var e = this;
          this.bn = null, this.vn = null, this.result = void 0, this.error = void 0, this.Sn = !1, this.Dn = !1, t((function (t) {
            e.Sn = !0, e.result = t, e.bn && e.bn(t)
          }), (function (t) {
            e.Sn = !0, e.error = t, e.vn && e.vn(t)
          }))
        }

        return t.prototype.catch = function (t) {
          return this.next(void 0, t)
        }, t.prototype.next = function (e, n) {
          var r = this;
          return this.Dn && _(), this.Dn = !0, this.Sn ? this.error ? this.Cn(n, this.error) : this.Nn(e, this.result) : new t((function (t, i) {
            r.bn = function (n) {
              r.Nn(e, n).next(t, i)
            }, r.vn = function (e) {
              r.Cn(n, e).next(t, i)
            }
          }))
        }, t.prototype.Fn = function () {
          var t = this;
          return new Promise((function (e, n) {
            t.next(e, n)
          }))
        }, t.prototype.xn = function (e) {
          try {
            var n = e();
            return n instanceof t ? n : t.resolve(n)
          } catch (e) {
            return t.reject(e)
          }
        }, t.prototype.Nn = function (e, n) {
          return e ? this.xn((function () {
            return e(n)
          })) : t.resolve(n)
        }, t.prototype.Cn = function (e, n) {
          return e ? this.xn((function () {
            return e(n)
          })) : t.reject(n)
        }, t.resolve = function (e) {
          return new t((function (t, n) {
            t(e)
          }))
        }, t.reject = function (e) {
          return new t((function (t, n) {
            n(e)
          }))
        }, t.$n = function (e) {
          return new t((function (t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function (e) {
              ++r, e.next((function () {
                ++i, o && i === r && t()
              }), (function (t) {
                return n(t)
              }))
            })), o = !0, i === r && t()
          }))
        }, t.kn = function (e) {
          for (var n = t.resolve(!1), r = function (e) {
            n = n.next((function (n) {
              return n ? t.resolve(n) : e()
            }))
          }, i = 0, o = e; i < o.length; i++) r(o[i]);
          return n
        }, t.forEach = function (t, e) {
          var n = this, r = [];
          return t.forEach((function (t, i) {
            r.push(e.call(n, t, i))
          })), this.$n(r)
        }, t
      }(), gr = function () {
        function e(t, n, i) {
          this.name = t, this.version = n, this.Mn = i, 12.2 === e.On(h.getUA()) && p("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
        }

        return e.delete = function (t) {
          return y("SimpleDb", "Removing database:", t), Ir(window.indexedDB.deleteDatabase(t)).Fn()
        }, e.Ln = function () {
          if ("undefined" == typeof indexedDB) return !1;
          if (e.Bn()) return !0;
          var t = h.getUA(), n = e.On(t), i = 0 < n && n < 10, r = e.qn(t), s = 0 < r && r < 4.5;
          return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || i || s)
        }, e.Bn = function () {
          var e;
          return void 0 !== t && "YES" === (null === (e = t.env) || void 0 === e ? void 0 : e.Un)
        }, e.Qn = function (t, e) {
          return t.store(e)
        }, e.On = function (t) {
          var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
          return Number(n)
        }, e.qn = function (t) {
          var e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
          return Number(n)
        }, e.prototype.Wn = function (t) {
          return r.__awaiter(this, void 0, void 0, (function () {
            var e, n = this;
            return r.__generator(this, (function (r) {
              switch (r.label) {
                case 0:
                  return this.db ? [3, 2] : (y("SimpleDb", "Opening database:", this.name), e = this, [4, new Promise((function (e, r) {
                    var i = indexedDB.open(n.name, n.version);
                    i.onsuccess = function (t) {
                      var n = t.target.result;
                      e(n)
                    }, i.onblocked = function () {
                      r(new wr(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
                    }, i.onerror = function (e) {
                      var n = e.target.error;
                      "VersionError" === n.name ? r(new l(a.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(new wr(t, n))
                    }, i.onupgradeneeded = function (t) {
                      y("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', t.oldVersion);
                      var e = t.target.result;
                      n.Mn.createOrUpgrade(e, i.transaction, t.oldVersion, n.version).next((function () {
                        y("SimpleDb", "Database upgrade to version " + n.version + " complete")
                      }))
                    }
                  }))]);
                case 1:
                  e.db = r.sent(), r.label = 2;
                case 2:
                  return [2, (this.jn && (this.db.onversionchange = function (t) {
                    return n.jn(t)
                  }), this.db)]
              }
            }))
          }))
        }, e.prototype.Kn = function (t) {
          this.jn = t, this.db && (this.db.onversionchange = function (e) {
            return t(e)
          })
        }, e.prototype.runTransaction = function (t, e, n, i) {
          return r.__awaiter(this, void 0, void 0, (function () {
            var o, s, u, a, c;
            return r.__generator(this, (function (h) {
              switch (h.label) {
                case 0:
                  o = "readonly" === e, s = 0, u = function () {
                    var e, u, c, h, f;
                    return r.__generator(this, (function (r) {
                      switch (r.label) {
                        case 0:
                          ++s, r.label = 1;
                        case 1:
                          return r.trys.push([1, 4, , 5]), [4, a.Wn(t)];
                        case 2:
                          return a.db = r.sent(), e = br.open(a.db, t, o ? "readonly" : "readwrite", n), u = i(e).catch((function (t) {
                            return e.abort(t), yr.reject(t)
                          })).Fn(), c = {}, u.catch((function () {
                          })), [4, e.Gn];
                        case 3:
                          return [2, (c.value = (r.sent(), u), c)];
                        case 4:
                          return h = r.sent(), f = "FirebaseError" !== h.name && s < 3, y("SimpleDb", "Transaction failed with error:", h.message, "Retrying:", f), a.close(), f ? [3, 5] : [2, {value: Promise.reject(h)}];
                        case 5:
                          return [2]
                      }
                    }))
                  }, a = this, h.label = 1;
                case 1:
                  return [5, u()];
                case 2:
                  if ("object" == typeof (c = h.sent())) return [2, c.value];
                  h.label = 3;
                case 3:
                  return [3, 1];
                case 4:
                  return [2]
              }
            }))
          }))
        }, e.prototype.close = function () {
          this.db && this.db.close(), this.db = void 0
        }, e
      }(), mr = function () {
        function t(t) {
          this.zn = t, this.Hn = !1, this.Yn = null
        }

        return Object.defineProperty(t.prototype, "Sn", {
          get: function () {
            return this.Hn
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "Jn", {
          get: function () {
            return this.Yn
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "cursor", {
          set: function (t) {
            this.zn = t
          }, enumerable: !1, configurable: !0
        }), t.prototype.done = function () {
          this.Hn = !0
        }, t.prototype.Xn = function (t) {
          this.Yn = t
        }, t.prototype.delete = function () {
          return Ir(this.zn.delete())
        }, t
      }(), wr = function (t) {
        function e(e, n) {
          var r = this;
          return (r = t.call(this, a.UNAVAILABLE, "IndexedDB transaction '" + e + "' failed: " + n) || this).name = "IndexedDbTransactionError", r
        }

        return r.__extends(e, t), e
      }(l);

      function _r(t) {
        return "IndexedDbTransactionError" === t.name
      }

      var br = function () {
        function t(t, e) {
          var n = this;
          this.action = t, this.transaction = e, this.aborted = !1, this.Zn = new dr, this.transaction.oncomplete = function () {
            n.Zn.resolve()
          }, this.transaction.onabort = function () {
            e.error ? n.Zn.reject(new wr(t, e.error)) : n.Zn.resolve()
          }, this.transaction.onerror = function (e) {
            var r = Ar(e.target.error);
            n.Zn.reject(new wr(t, r))
          }
        }

        return t.open = function (e, n, r, i) {
          try {
            return new t(n, e.transaction(i, r))
          } catch (e) {
            throw new wr(n, e)
          }
        }, Object.defineProperty(t.prototype, "Gn", {
          get: function () {
            return this.Zn.promise
          }, enumerable: !1, configurable: !0
        }), t.prototype.abort = function (t) {
          t && this.Zn.reject(t), this.aborted || (y("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort())
        }, t.prototype.store = function (t) {
          var e = this.transaction.objectStore(t);
          return new Er(e)
        }, t
      }(), Er = function () {
        function t(t) {
          this.store = t
        }

        return t.prototype.put = function (t, e) {
          var n;
          return void 0 !== e ? (y("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (y("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), Ir(n)
        }, t.prototype.add = function (t) {
          return y("SimpleDb", "ADD", this.store.name, t, t), Ir(this.store.add(t))
        }, t.prototype.get = function (t) {
          var e = this;
          return Ir(this.store.get(t)).next((function (n) {
            return void 0 === n && (n = null), y("SimpleDb", "GET", e.store.name, t, n), n
          }))
        }, t.prototype.delete = function (t) {
          return y("SimpleDb", "DELETE", this.store.name, t), Ir(this.store.delete(t))
        }, t.prototype.count = function () {
          return y("SimpleDb", "COUNT", this.store.name), Ir(this.store.count())
        }, t.prototype.ts = function (t, e) {
          var n = this.cursor(this.options(t, e)), r = [];
          return this.es(n, (function (t, e) {
            r.push(e)
          })).next((function () {
            return r
          }))
        }, t.prototype.ns = function (t, e) {
          y("SimpleDb", "DELETE ALL", this.store.name);
          var n = this.options(t, e);
          n.ss = !1;
          var r = this.cursor(n);
          return this.es(r, (function (t, e, n) {
            return n.delete()
          }))
        }, t.prototype.rs = function (t, e) {
          var n;
          e ? n = t : (n = {}, e = t);
          var r = this.cursor(n);
          return this.es(r, e)
        }, t.prototype.os = function (t) {
          var e = this.cursor({});
          return new yr((function (n, r) {
            e.onerror = function (t) {
              var e = Ar(t.target.error);
              r(e)
            }, e.onsuccess = function (e) {
              var r = e.target.result;
              r ? t(r.primaryKey, r.value).next((function (t) {
                t ? r.continue() : n()
              })) : n()
            }
          }))
        }, t.prototype.es = function (t, e) {
          var n = [];
          return new yr((function (r, i) {
            t.onerror = function (t) {
              i(t.target.error)
            }, t.onsuccess = function (t) {
              var i = t.target.result;
              if (i) {
                var o = new mr(i), s = e(i.primaryKey, i.value, o);
                if (s instanceof yr) {
                  var u = s.catch((function (t) {
                    return o.done(), yr.reject(t)
                  }));
                  n.push(u)
                }
                o.Sn ? r() : null === o.Jn ? i.continue() : i.continue(o.Jn)
              } else r()
            }
          })).next((function () {
            return yr.$n(n)
          }))
        }, t.prototype.options = function (t, e) {
          var n = void 0;
          return void 0 !== t && ("string" == typeof t ? n = t : e = t), {index: n, range: e}
        }, t.prototype.cursor = function (t) {
          var e = "next";
          if (t.reverse && (e = "prev"), t.index) {
            var n = this.store.index(t.index);
            return t.ss ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e)
          }
          return this.store.openCursor(t.range, e)
        }, t
      }();

      function Ir(t) {
        return new yr((function (e, n) {
          t.onsuccess = function (t) {
            var n = t.target.result;
            e(n)
          }, t.onerror = function (t) {
            var e = Ar(t.target.error);
            n(e)
          }
        }))
      }

      var Tr = !1;

      function Ar(t) {
        var e = gr.On(h.getUA());
        if (e >= 12.2 && e < 13) {
          var n = "An internal error was encountered in the Indexed Database server";
          if (t.message.indexOf(n) >= 0) {
            var i = new l("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return Tr || (Tr = !0, setTimeout((function () {
              throw i
            }), 0)), i
          }
        }
        return t
      }

      function Nr() {
        return "undefined" != typeof window ? window : null
      }

      function Sr() {
        return "undefined" != typeof document ? document : null
      }

      var Dr = function () {
        function t(t, e, n, r, i) {
          this.cs = t, this.dn = e, this.us = n, this.op = r, this.hs = i, this.ls = new dr, this.then = this.ls.promise.then.bind(this.ls.promise), this.ls.promise.catch((function (t) {
          }))
        }

        return t._s = function (e, n, r, i, o) {
          var s = new t(e, n, Date.now() + r, i, o);
          return s.start(r), s
        }, t.prototype.start = function (t) {
          var e = this;
          this.fs = setTimeout((function () {
            return e.ds()
          }), t)
        }, t.prototype.pn = function () {
          return this.ds()
        }, t.prototype.cancel = function (t) {
          null !== this.fs && (this.clearTimeout(), this.ls.reject(new l(a.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))))
        }, t.prototype.ds = function () {
          var t = this;
          this.cs.ws((function () {
            return null !== t.fs ? (t.clearTimeout(), t.op().then((function (e) {
              return t.ls.resolve(e)
            }))) : Promise.resolve()
          }))
        }, t.prototype.clearTimeout = function () {
          null !== this.fs && (this.hs(this), clearTimeout(this.fs), this.fs = null)
        }, t
      }(), xr = function () {
        function t() {
          var t = this;
          this.Ts = Promise.resolve(), this.Es = [], this.Is = !1, this.As = [], this.Rs = null, this.gs = !1, this.Ps = [], this.ys = new vr(this, "async_queue_retry"), this.Vs = function () {
            var e = Sr();
            e && y("AsyncQueue", "Visibility state changed to  ", e.visibilityState), t.ys.Vn()
          };
          var e = Sr();
          e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Vs)
        }

        return Object.defineProperty(t.prototype, "ps", {
          get: function () {
            return this.Is
          }, enumerable: !1, configurable: !0
        }), t.prototype.ws = function (t) {
          this.enqueue(t)
        }, t.prototype.bs = function (t) {
          this.vs(), this.Ss(t)
        }, t.prototype.Ds = function () {
          if (!this.Is) {
            this.Is = !0;
            var t = Sr();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Vs)
          }
        }, t.prototype.enqueue = function (t) {
          return this.vs(), this.Is ? new Promise((function (t) {
          })) : this.Ss(t)
        }, t.prototype.Cs = function (t) {
          var e = this;
          this.ws((function () {
            return e.Es.push(t), e.Ns()
          }))
        }, t.prototype.Ns = function () {
          return r.__awaiter(this, void 0, void 0, (function () {
            var t, e = this;
            return r.__generator(this, (function (n) {
              switch (n.label) {
                case 0:
                  if (0 === this.Es.length) return [3, 5];
                  n.label = 1;
                case 1:
                  return n.trys.push([1, 3, , 4]), [4, this.Es[0]()];
                case 2:
                  return n.sent(), this.Es.shift(), this.ys.reset(), [3, 4];
                case 3:
                  if (!_r(t = n.sent())) throw t;
                  return y("AsyncQueue", "Operation failed with retryable error: " + t), [3, 4];
                case 4:
                  this.Es.length > 0 && this.ys.gn((function () {
                    return e.Ns()
                  })), n.label = 5;
                case 5:
                  return [2]
              }
            }))
          }))
        }, t.prototype.Ss = function (t) {
          var e = this, n = this.Ts.then((function () {
            return e.gs = !0, t().catch((function (t) {
              throw e.Rs = t, e.gs = !1, p("INTERNAL UNHANDLED ERROR: ", function (t) {
                var e = t.message || "";
                return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), e
              }(t)), t
            })).then((function (t) {
              return e.gs = !1, t
            }))
          }));
          return this.Ts = n, n
        }, t.prototype.yn = function (t, e, n) {
          var r = this;
          this.vs(), this.Ps.indexOf(t) > -1 && (e = 0);
          var i = Dr._s(this, t, e, n, (function (t) {
            return r.Fs(t)
          }));
          return this.As.push(i), i
        }, t.prototype.vs = function () {
          this.Rs && _()
        }, t.prototype.xs = function () {
        }, t.prototype.$s = function () {
          return r.__awaiter(this, void 0, void 0, (function () {
            var t;
            return r.__generator(this, (function (e) {
              switch (e.label) {
                case 0:
                  return [4, t = this.Ts];
                case 1:
                  e.sent(), e.label = 2;
                case 2:
                  if (t !== this.Ts) return [3, 0];
                  e.label = 3;
                case 3:
                  return [2]
              }
            }))
          }))
        }, t.prototype.ks = function (t) {
          for (var e = 0, n = this.As; e < n.length; e++) if (n[e].dn === t) return !0;
          return !1
        }, t.prototype.Ms = function (t) {
          var e = this;
          return this.$s().then((function () {
            e.As.sort((function (t, e) {
              return t.us - e.us
            }));
            for (var n = 0, r = e.As; n < r.length; n++) {
              var i = r[n];
              if (i.pn(), "all" !== t && i.dn === t) break
            }
            return e.$s()
          }))
        }, t.prototype.Os = function (t) {
          this.Ps.push(t)
        }, t.prototype.Fs = function (t) {
          var e = this.As.indexOf(t);
          this.As.splice(e, 1)
        }, t
      }();

      function Or(t, e) {
        if (p("AsyncQueue", e + ": " + t), _r(t)) return new l(a.UNAVAILABLE, e + ": " + t);
        throw t
      }

      var Lr = function () {
        this.Ls = void 0, this.listeners = []
      }, kr = function () {
        this.Bs = new ut((function (t) {
          return Qn(t)
        }), Kn), this.onlineState = "Unknown", this.qs = new Set
      };

      function Cr(t, e) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var n, i, o, s, u, a, c;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                if (n = E(t), i = e.query, o = !1, (s = n.Bs.get(i)) || (o = !0, s = new Lr), !o) return [3, 4];
                r.label = 1;
              case 1:
                return r.trys.push([1, 3, , 4]), u = s, [4, n.Us(i)];
              case 2:
                return u.Ls = r.sent(), [3, 4];
              case 3:
                return a = r.sent(), c = Or(a, "Initialization of query '" + Xn(e.query) + "' failed"), [2, void e.onError(c)];
              case 4:
                return n.Bs.set(i, s), s.listeners.push(e), e.Qs(n.onlineState), s.Ls && e.Ws(s.Ls) && Vr(n), [2]
            }
          }))
        }))
      }

      function Rr(t, e) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var n, i, o, s, u;
          return r.__generator(this, (function (r) {
            return n = E(t), i = e.query, o = !1, (s = n.Bs.get(i)) && (u = s.listeners.indexOf(e)) >= 0 && (s.listeners.splice(u, 1), o = 0 === s.listeners.length), o ? [2, (n.Bs.delete(i), n.js(i))] : [2]
          }))
        }))
      }

      function Pr(t, e) {
        for (var n = E(t), r = !1, i = 0, o = e; i < o.length; i++) {
          var s = o[i], u = s.query, a = n.Bs.get(u);
          if (a) {
            for (var c = 0, h = a.listeners; c < h.length; c++) h[c].Ws(s) && (r = !0);
            a.Ls = s
          }
        }
        r && Vr(n)
      }

      function Ur(t, e, n) {
        var r = E(t), i = r.Bs.get(e);
        if (i) for (var o = 0, s = i.listeners; o < s.length; o++) s[o].onError(n);
        r.Bs.delete(e)
      }

      function Vr(t) {
        t.qs.forEach((function (t) {
          t.next()
        }))
      }

      var Mr = function () {
        function t(t, e, n) {
          this.query = t, this.Ks = e, this.Gs = !1, this.zs = null, this.onlineState = "Unknown", this.options = n || {}
        }

        return t.prototype.Ws = function (t) {
          if (!this.options.includeMetadataChanges) {
            for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
              var i = r[n];
              3 !== i.type && e.push(i)
            }
            t = new qt(t.query, t.docs, t.Qt, e, t.Wt, t.fromCache, t.jt, !0)
          }
          var o = !1;
          return this.Gs ? this.Hs(t) && (this.Ks.next(t), o = !0) : this.Ys(t, this.onlineState) && (this.Js(t), o = !0), this.zs = t, o
        }, t.prototype.onError = function (t) {
          this.Ks.error(t)
        }, t.prototype.Qs = function (t) {
          this.onlineState = t;
          var e = !1;
          return this.zs && !this.Gs && this.Ys(this.zs, t) && (this.Js(this.zs), e = !0), e
        }, t.prototype.Ys = function (t, e) {
          if (!t.fromCache) return !0;
          var n = "Offline" !== e;
          return !(this.options.Xs && n || t.docs.m() && "Offline" !== e)
        }, t.prototype.Hs = function (t) {
          if (t.docChanges.length > 0) return !0;
          var e = this.zs && this.zs.hasPendingWrites !== t.hasPendingWrites;
          return !(!t.jt && !e) && !0 === this.options.includeMetadataChanges
        }, t.prototype.Js = function (t) {
          t = qt.Gt(t.query, t.docs, t.Wt, t.fromCache), this.Gs = !0, this.Ks.next(t)
        }, t
      }(), Fr = function () {
        function t(t) {
          this.uid = t
        }

        return t.prototype.Zs = function () {
          return null != this.uid
        }, t.prototype.ti = function () {
          return this.Zs() ? "uid:" + this.uid : "anonymous-user"
        }, t.prototype.isEqual = function (t) {
          return t.uid === this.uid
        }, t
      }();
      Fr.UNAUTHENTICATED = new Fr(null), Fr.ei = new Fr("google-credentials-uid"), Fr.ni = new Fr("first-party-uid");
      var jr = function () {
        function t(t, e) {
          var n = this;
          this.previousValue = t, e && (e.si = function (t) {
            return n.ii(t)
          }, this.ri = function (t) {
            return e.oi(t)
          })
        }

        return t.prototype.ii = function (t) {
          return this.previousValue = Math.max(t, this.previousValue), this.previousValue
        }, t.prototype.next = function () {
          var t = ++this.previousValue;
          return this.ri && this.ri(t), t
        }, t
      }();

      function qr(t, e) {
        return "firestore_clients_" + t + "_" + e
      }

      function Br(t, e, n) {
        var r = "firestore_mutations_" + t + "_" + n;
        return e.Zs() && (r += "_" + e.uid), r
      }

      function Gr(t, e) {
        return "firestore_targets_" + t + "_" + e
      }

      jr.ai = -1;
      var zr = function () {
          function t(t, e, n, r) {
            this.user = t, this.batchId = e, this.state = n, this.error = r
          }

          return t.ci = function (e, n, r) {
            var i = JSON.parse(r),
              o = "object" == typeof i && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error),
              s = void 0;
            return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (s = new l(i.error.code, i.error.message)), o ? new t(e, n, i.state, s) : (p("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), null)
          }, t.prototype.ui = function () {
            var t = {state: this.state, updateTimeMs: Date.now()};
            return this.error && (t.error = {code: this.error.code, message: this.error.message}), JSON.stringify(t)
          }, t
        }(), Wr = function () {
          function t(t, e, n) {
            this.targetId = t, this.state = e, this.error = n
          }

          return t.ci = function (e, n) {
            var r = JSON.parse(n),
              i = "object" == typeof r && -1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
              o = void 0;
            return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new l(r.error.code, r.error.message)), i ? new t(e, r.state, o) : (p("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), null)
          }, t.prototype.ui = function () {
            var t = {state: this.state, updateTimeMs: Date.now()};
            return this.error && (t.error = {code: this.error.code, message: this.error.message}), JSON.stringify(t)
          }, t
        }(), Hr = function () {
          function t(t, e) {
            this.clientId = t, this.activeTargetIds = e
          }

          return t.ci = function (e, n) {
            for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = Mt(), s = 0; i && s < r.activeTargetIds.length; ++s) i = lt(r.activeTargetIds[s]), o = o.add(r.activeTargetIds[s]);
            return i ? new t(e, o) : (p("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), null)
          }, t
        }(), Kr = function () {
          function t(t, e) {
            this.clientId = t, this.onlineState = e
          }

          return t.ci = function (e) {
            var n = JSON.parse(e);
            return "object" == typeof n && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (p("SharedClientState", "Failed to parse online state: " + e), null)
          }, t
        }(), Qr = function () {
          function t() {
            this.activeTargetIds = Mt()
          }

          return t.prototype.hi = function (t) {
            this.activeTargetIds = this.activeTargetIds.add(t)
          }, t.prototype.li = function (t) {
            this.activeTargetIds = this.activeTargetIds.delete(t)
          }, t.prototype.ui = function () {
            var t = {activeTargetIds: this.activeTargetIds.A(), updateTimeMs: Date.now()};
            return JSON.stringify(t)
          }, t
        }(), Xr = function () {
          function t(t, e, n, r, i) {
            this.window = t, this.fn = e, this.persistenceKey = n, this._i = r, this.fi = null, this.di = null, this.si = null, this.wi = this.mi.bind(this), this.Ti = new Tt(J), this.Ei = !1, this.Ii = [];
            var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            this.storage = this.window.localStorage, this.currentUser = i, this.Ai = qr(this.persistenceKey, this._i), this.Ri = function (t) {
              return "firestore_sequence_number_" + t
            }(this.persistenceKey), this.Ti = this.Ti.ot(this._i, new Qr), this.gi = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Pi = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.yi = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.Vi = function (t) {
              return "firestore_online_state_" + t
            }(this.persistenceKey), this.window.addEventListener("storage", this.wi)
          }

          return t.Ln = function (t) {
            return !(!t || !t.localStorage)
          }, t.prototype.start = function () {
            return r.__awaiter(this, void 0, void 0, (function () {
              var t, e, n, i, o, s, u, a, c, h, f, l = this;
              return r.__generator(this, (function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.fi.pi()];
                  case 1:
                    for (t = r.sent(), e = 0, n = t; e < n.length; e++) (i = n[e]) !== this._i && (o = this.getItem(qr(this.persistenceKey, i))) && (s = Hr.ci(i, o)) && (this.Ti = this.Ti.ot(s.clientId, s));
                    for (this.bi(), (u = this.storage.getItem(this.Vi)) && (a = this.vi(u)) && this.Si(a), c = 0, h = this.Ii; c < h.length; c++) f = h[c], this.mi(f);
                    return this.Ii = [], this.window.addEventListener("unload", (function () {
                      return l.Di()
                    })), this.Ei = !0, [2]
                }
              }))
            }))
          }, t.prototype.oi = function (t) {
            this.setItem(this.Ri, JSON.stringify(t))
          }, t.prototype.Ci = function () {
            return this.Ni(this.Ti)
          }, t.prototype.Fi = function (t) {
            var e = !1;
            return this.Ti.forEach((function (n, r) {
              r.activeTargetIds.has(t) && (e = !0)
            })), e
          }, t.prototype.xi = function (t) {
            this.$i(t, "pending")
          }, t.prototype.ki = function (t, e, n) {
            this.$i(t, e, n), this.Mi(t)
          }, t.prototype.Oi = function (t) {
            var e = "not-current";
            if (this.Fi(t)) {
              var n = this.storage.getItem(Gr(this.persistenceKey, t));
              if (n) {
                var r = Wr.ci(t, n);
                r && (e = r.state)
              }
            }
            return this.Li.hi(t), this.bi(), e
          }, t.prototype.Bi = function (t) {
            this.Li.li(t), this.bi()
          }, t.prototype.qi = function (t) {
            return this.Li.activeTargetIds.has(t)
          }, t.prototype.Ui = function (t) {
            this.removeItem(Gr(this.persistenceKey, t))
          }, t.prototype.Qi = function (t, e, n) {
            this.Wi(t, e, n)
          }, t.prototype.ji = function (t, e, n) {
            var r = this;
            e.forEach((function (t) {
              r.Mi(t)
            })), this.currentUser = t, n.forEach((function (t) {
              r.xi(t)
            }))
          }, t.prototype.Ki = function (t) {
            this.Gi(t)
          }, t.prototype.Di = function () {
            this.Ei && (this.window.removeEventListener("storage", this.wi), this.removeItem(this.Ai), this.Ei = !1)
          }, t.prototype.getItem = function (t) {
            var e = this.storage.getItem(t);
            return y("SharedClientState", "READ", t, e), e
          }, t.prototype.setItem = function (t, e) {
            y("SharedClientState", "SET", t, e), this.storage.setItem(t, e)
          }, t.prototype.removeItem = function (t) {
            y("SharedClientState", "REMOVE", t), this.storage.removeItem(t)
          }, t.prototype.mi = function (t) {
            var e = this, n = t;
            if (n.storageArea === this.storage) {
              if (y("SharedClientState", "EVENT", n.key, n.newValue), n.key === this.Ai) return void p("Received WebStorage notification for local change. Another client might have garbage-collected our state");
              this.fn.Cs((function () {
                return r.__awaiter(e, void 0, void 0, (function () {
                  var t, e, i, o, s, u;
                  return r.__generator(this, (function (r) {
                    if (this.Ei) {
                      if (null !== n.key) if (this.gi.test(n.key)) {
                        if (null == n.newValue) return t = this.zi(n.key), [2, this.Hi(t, null)];
                        if (e = this.Yi(n.key, n.newValue)) return [2, this.Hi(e.clientId, e)]
                      } else if (this.Pi.test(n.key)) {
                        if (null !== n.newValue && (i = this.Ji(n.key, n.newValue))) return [2, this.Xi(i)]
                      } else if (this.yi.test(n.key)) {
                        if (null !== n.newValue && (o = this.Zi(n.key, n.newValue))) return [2, this.tr(o)]
                      } else if (n.key === this.Vi) {
                        if (null !== n.newValue && (s = this.vi(n.newValue))) return [2, this.Si(s)]
                      } else n.key === this.Ri && (u = function (t) {
                        var e = jr.ai;
                        if (null != t) try {
                          var n = JSON.parse(t);
                          g("number" == typeof n), e = n
                        } catch (t) {
                          p("SharedClientState", "Failed to read sequence number from WebStorage", t)
                        }
                        return e
                      }(n.newValue)) !== jr.ai && this.si(u)
                    } else this.Ii.push(n);
                    return [2]
                  }))
                }))
              }))
            }
          }, Object.defineProperty(t.prototype, "Li", {
            get: function () {
              return this.Ti.get(this._i)
            }, enumerable: !1, configurable: !0
          }), t.prototype.bi = function () {
            this.setItem(this.Ai, this.Li.ui())
          }, t.prototype.$i = function (t, e, n) {
            var r = new zr(this.currentUser, t, e, n), i = Br(this.persistenceKey, this.currentUser, t);
            this.setItem(i, r.ui())
          }, t.prototype.Mi = function (t) {
            var e = Br(this.persistenceKey, this.currentUser, t);
            this.removeItem(e)
          }, t.prototype.Gi = function (t) {
            var e = {clientId: this._i, onlineState: t};
            this.storage.setItem(this.Vi, JSON.stringify(e))
          }, t.prototype.Wi = function (t, e, n) {
            var r = Gr(this.persistenceKey, t), i = new Wr(t, e, n);
            this.setItem(r, i.ui())
          }, t.prototype.zi = function (t) {
            var e = this.gi.exec(t);
            return e ? e[1] : null
          }, t.prototype.Yi = function (t, e) {
            var n = this.zi(t);
            return Hr.ci(n, e)
          }, t.prototype.Ji = function (t, e) {
            var n = this.Pi.exec(t), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
            return zr.ci(new Fr(i), r, e)
          }, t.prototype.Zi = function (t, e) {
            var n = this.yi.exec(t), r = Number(n[1]);
            return Wr.ci(r, e)
          }, t.prototype.vi = function (t) {
            return Kr.ci(t)
          }, t.prototype.Xi = function (t) {
            return r.__awaiter(this, void 0, void 0, (function () {
              return r.__generator(this, (function (e) {
                return t.user.uid === this.currentUser.uid ? [2, this.fi.er(t.batchId, t.state, t.error)] : (y("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), [2])
              }))
            }))
          }, t.prototype.tr = function (t) {
            return this.fi.nr(t.targetId, t.state, t.error)
          }, t.prototype.Hi = function (t, e) {
            var n = this, r = e ? this.Ti.ot(t, e) : this.Ti.remove(t), i = this.Ni(this.Ti), o = this.Ni(r), s = [],
              u = [];
            return o.forEach((function (t) {
              i.has(t) || s.push(t)
            })), i.forEach((function (t) {
              o.has(t) || u.push(t)
            })), this.fi.sr(s, u).then((function () {
              n.Ti = r
            }))
          }, t.prototype.Si = function (t) {
            this.Ti.get(t.clientId) && this.di(t.onlineState)
          }, t.prototype.Ni = function (t) {
            var e = Mt();
            return t.forEach((function (t, n) {
              e = e.kt(n.activeTargetIds)
            })), e
          }, t
        }(), Yr = function () {
          function t() {
            this.ir = new Qr, this.rr = {}, this.di = null, this.si = null
          }

          return t.prototype.xi = function (t) {
          }, t.prototype.ki = function (t, e, n) {
          }, t.prototype.Oi = function (t) {
            return this.ir.hi(t), this.rr[t] || "not-current"
          }, t.prototype.Qi = function (t, e, n) {
            this.rr[t] = e
          }, t.prototype.Bi = function (t) {
            this.ir.li(t)
          }, t.prototype.qi = function (t) {
            return this.ir.activeTargetIds.has(t)
          }, t.prototype.Ui = function (t) {
            delete this.rr[t]
          }, t.prototype.Ci = function () {
            return this.ir.activeTargetIds
          }, t.prototype.Fi = function (t) {
            return this.ir.activeTargetIds.has(t)
          }, t.prototype.start = function () {
            return this.ir = new Qr, Promise.resolve()
          }, t.prototype.ji = function (t, e, n) {
          }, t.prototype.Ki = function (t) {
          }, t.prototype.Di = function () {
          }, t.prototype.oi = function (t) {
          }, t
        }(), Jr = function () {
          function t(t, e, n, r) {
            this.batchId = t, this.ar = e, this.baseMutations = n, this.mutations = r
          }

          return t.prototype.cr = function (t, e, n) {
            for (var r = n.ur, i = 0; i < this.mutations.length; i++) {
              var o = this.mutations[i];
              o.key.isEqual(t) && (e = dn(o, e, r[i]))
            }
            return e
          }, t.prototype.hr = function (t, e) {
            for (var n = 0, r = this.baseMutations; n < r.length; n++) {
              var i = r[n];
              i.key.isEqual(t) && (e = vn(i, e, e, this.ar))
            }
            for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
              var a = u[s];
              a.key.isEqual(t) && (e = vn(a, e, o, this.ar))
            }
            return e
          }, t.prototype.lr = function (t) {
            var e = this, n = t;
            return this.mutations.forEach((function (r) {
              var i = e.hr(r.key, t.get(r.key));
              i && (n = n.ot(r.key, i))
            })), n
          }, t.prototype.keys = function () {
            return this.mutations.reduce((function (t, e) {
              return t.add(e.key)
            }), Ut())
          }, t.prototype.isEqual = function (t) {
            return this.batchId === t.batchId && $(this.mutations, t.mutations, (function (t, e) {
              return gn(t, e)
            })) && $(this.baseMutations, t.baseMutations, (function (t, e) {
              return gn(t, e)
            }))
          }, t
        }(), $r = function () {
          function t(t, e, n, r) {
            this.batch = t, this._r = e, this.ur = n, this.dr = r
          }

          return t.from = function (e, n, r) {
            g(e.mutations.length === r.length);
            for (var i = Rt, o = e.mutations, s = 0; s < o.length; s++) i = i.ot(o[s].key, r[s].version);
            return new t(e, n, r, i)
          }, t
        }(), Zr = function () {
          function t() {
            this.wr = new ut((function (t) {
              return t.toString()
            }), (function (t, e) {
              return t.isEqual(e)
            })), this.mr = !1
          }

          return Object.defineProperty(t.prototype, "readTime", {
            get: function () {
              return this.Tr
            }, set: function (t) {
              this.Tr = t
            }, enumerable: !1, configurable: !0
          }), t.prototype.Er = function (t, e) {
            this.Ir(), this.readTime = e, this.wr.set(t.key, t)
          }, t.prototype.Ar = function (t, e) {
            this.Ir(), e && (this.readTime = e), this.wr.set(t, null)
          }, t.prototype.Rr = function (t, e) {
            this.Ir();
            var n = this.wr.get(e);
            return void 0 !== n ? yr.resolve(n) : this.gr(t, e)
          }, t.prototype.getEntries = function (t, e) {
            return this.Pr(t, e)
          }, t.prototype.apply = function (t) {
            return this.Ir(), this.mr = !0, this.yr(t)
          }, t.prototype.Ir = function () {
          }, t
        }(),
        ti = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
        ei = function () {
          function t() {
            this.Vr = []
          }

          return t.prototype.pr = function (t) {
            this.Vr.push(t)
          }, t.prototype.br = function () {
            this.Vr.forEach((function (t) {
              return t()
            }))
          }, t
        }(), ni = function () {
          function t(t, e, n) {
            this.vr = t, this.Sr = e, this.Dr = n
          }

          return t.prototype.Cr = function (t, e) {
            var n = this;
            return this.Sr.Nr(t, e).next((function (r) {
              return n.Fr(t, e, r)
            }))
          }, t.prototype.Fr = function (t, e, n) {
            return this.vr.Rr(t, e).next((function (t) {
              for (var r = 0, i = n; r < i.length; r++) t = i[r].hr(e, t);
              return t
            }))
          }, t.prototype.$r = function (t, e, n) {
            var r = Lt();
            return e.forEach((function (t, e) {
              for (var i = 0, o = n; i < o.length; i++) e = o[i].hr(t, e);
              r = r.ot(t, e)
            })), r
          }, t.prototype.kr = function (t, e) {
            var n = this;
            return this.vr.getEntries(t, e).next((function (e) {
              return n.Mr(t, e)
            }))
          }, t.prototype.Mr = function (t, e) {
            var n = this;
            return this.Sr.Or(t, e).next((function (r) {
              var i = n.$r(t, e, r), o = Ot();
              return i.forEach((function (t, e) {
                e || (e = new kn(t, ct.min())), o = o.ot(t, e)
              })), o
            }))
          }, t.prototype.Lr = function (t, e, n) {
            return function (t) {
              return x.F(t.path) && null === t.collectionGroup && 0 === t.filters.length
            }(e) ? this.Br(t, e.path) : qn(e) ? this.qr(t, e, n) : this.Ur(t, e, n)
          }, t.prototype.Br = function (t, e) {
            return this.Cr(t, new x(e)).next((function (t) {
              var e = Ct();
              return t instanceof Ln && (e = e.ot(t.key, t)), e
            }))
          }, t.prototype.qr = function (t, e, n) {
            var r = this, i = e.collectionGroup, o = Ct();
            return this.Dr.Qr(t, i).next((function (s) {
              return yr.forEach(s, (function (s) {
                var u = function (t, e) {
                  return new Rn(e, null, t.on.slice(), t.filters.slice(), t.limit, t.an, t.startAt, t.endAt)
                }(e, s.child(i));
                return r.Ur(t, u, n).next((function (t) {
                  t.forEach((function (t, e) {
                    o = o.ot(t, e)
                  }))
                }))
              })).next((function () {
                return o
              }))
            }))
          }, t.prototype.Ur = function (t, e, n) {
            var r, i, o = this;
            return this.vr.Lr(t, e, n).next((function (n) {
              return r = n, o.Sr.Wr(t, e)
            })).next((function (e) {
              return i = e, o.jr(t, i, r).next((function (t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                  var a = u[s], c = a.key, h = r.get(c), f = vn(a, h, h, o.ar);
                  r = f instanceof Ln ? r.ot(c, f) : r.remove(c)
                }
              }))
            })).next((function () {
              return r.forEach((function (t, n) {
                Yn(e, n) || (r = r.remove(t))
              })), r
            }))
          }, t.prototype.jr = function (t, e, n) {
            for (var r = Ut(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
              var a = u[s];
              a instanceof bn && null === n.get(a.key) && (r = r.add(a.key))
            }
            var c = n;
            return this.vr.getEntries(t, r).next((function (t) {
              return t.forEach((function (t, e) {
                null !== e && e instanceof Ln && (c = c.ot(t, e))
              })), c
            }))
          }, t
        }(), ri = function () {
          function t(t, e, n, r) {
            this.targetId = t, this.fromCache = e, this.Kr = n, this.Gr = r
          }

          return t.zr = function (e, n) {
            for (var r = Ut(), i = Ut(), o = 0, s = n.docChanges; o < s.length; o++) {
              var u = s[o];
              switch (u.type) {
                case 0:
                  r = r.add(u.doc.key);
                  break;
                case 1:
                  i = i.add(u.doc.key)
              }
            }
            return new t(e, n.fromCache, r, i)
          }, t
        }();

      function ii(t, e) {
        var n = t[0], r = t[1], i = e[0], o = e[1], s = J(n, i);
        return 0 === s ? J(r, o) : s
      }

      var oi = function () {
        function t(t) {
          this.Hr = t, this.buffer = new St(ii), this.Yr = 0
        }

        return t.prototype.Jr = function () {
          return ++this.Yr
        }, t.prototype.Xr = function (t) {
          var e = [t, this.Jr()];
          if (this.buffer.size < this.Hr) this.buffer = this.buffer.add(e); else {
            var n = this.buffer.last();
            ii(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e))
          }
        }, Object.defineProperty(t.prototype, "maxValue", {
          get: function () {
            return this.buffer.last()[0]
          }, enumerable: !1, configurable: !0
        }), t
      }(), si = {Zr: !1, eo: 0, no: 0, so: 0}, ui = function () {
        function t(t, e, n) {
          this.io = t, this.ro = e, this.oo = n
        }

        return t.ao = function (e) {
          return new t(e, t.co, t.uo)
        }, t
      }();
      ui.ho = -1, ui.lo = 1048576, ui._o = 41943040, ui.co = 10, ui.uo = 1e3, ui.fo = new ui(ui._o, ui.co, ui.uo), ui.do = new ui(ui.ho, 0, 0);
      var ai = function () {
        function t(t, e) {
          this.wo = t, this.cs = e, this.mo = !1, this.To = null
        }

        return t.prototype.start = function (t) {
          this.wo.params.io !== ui.ho && this.Eo(t)
        }, t.prototype.stop = function () {
          this.To && (this.To.cancel(), this.To = null)
        }, Object.defineProperty(t.prototype, "Ei", {
          get: function () {
            return null !== this.To
          }, enumerable: !1, configurable: !0
        }), t.prototype.Eo = function (t) {
          var e = this, n = this.mo ? 3e5 : 6e4;
          y("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"), this.To = this.cs.yn("lru_garbage_collection", n, (function () {
            return r.__awaiter(e, void 0, void 0, (function () {
              var e;
              return r.__generator(this, (function (n) {
                switch (n.label) {
                  case 0:
                    this.To = null, this.mo = !0, n.label = 1;
                  case 1:
                    return n.trys.push([1, 3, , 7]), [4, t.Io(this.wo)];
                  case 2:
                    return n.sent(), [3, 7];
                  case 3:
                    return _r(e = n.sent()) ? (y("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3, 6]) : [3, 4];
                  case 4:
                    return [4, Do(e)];
                  case 5:
                    n.sent(), n.label = 6;
                  case 6:
                    return [3, 7];
                  case 7:
                    return [4, this.Eo(t)];
                  case 8:
                    return n.sent(), [2]
                }
              }))
            }))
          }))
        }, t
      }(), ci = function () {
        function t(t, e) {
          this.Ao = t, this.params = e
        }

        return t.prototype.Ro = function (t, e) {
          return this.Ao.Po(t).next((function (t) {
            return Math.floor(e / 100 * t)
          }))
        }, t.prototype.yo = function (t, e) {
          var n = this;
          if (0 === e) return yr.resolve(jr.ai);
          var r = new oi(e);
          return this.Ao.Ce(t, (function (t) {
            return r.Xr(t.sequenceNumber)
          })).next((function () {
            return n.Ao.Vo(t, (function (t) {
              return r.Xr(t)
            }))
          })).next((function () {
            return r.maxValue
          }))
        }, t.prototype.po = function (t, e, n) {
          return this.Ao.po(t, e, n)
        }, t.prototype.bo = function (t, e) {
          return this.Ao.bo(t, e)
        }, t.prototype.vo = function (t, e) {
          var n = this;
          return this.params.io === ui.ho ? (y("LruGarbageCollector", "Garbage collection skipped; disabled"), yr.resolve(si)) : this.So(t).next((function (r) {
            return r < n.params.io ? (y("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.io), si) : n.Do(t, e)
          }))
        }, t.prototype.So = function (t) {
          return this.Ao.So(t)
        }, t.prototype.Do = function (t, e) {
          var n, i, r, s, u, a, o, h = this, p = Date.now();
          return this.Ro(t, this.params.ro).next((function (e) {
            return e > h.params.oo ? (y("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.oo + " from " + e), i = h.params.oo) : i = e, s = Date.now(), h.yo(t, i)
          })).next((function (r) {
            return n = r, u = Date.now(), h.po(t, n, e)
          })).next((function (e) {
            return r = e, a = Date.now(), h.bo(t, n)
          })).next((function (t) {
            return o = Date.now(), v() <= c.LogLevel.DEBUG && y("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - p) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + r + " targets in " + (a - u) + "ms\n\tRemoved " + t + " documents in " + (o - a) + "ms\nTotal Duration: " + (o - p) + "ms"), yr.resolve({
              Zr: !0,
              eo: i,
              no: r,
              so: t
            })
          }))
        }, t
      }();

      function hi(t) {
        for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = li(e)), e = fi(t.get(n), e);
        return li(e)
      }

      function fi(t, e) {
        for (var n = e, r = t.length, i = 0; i < r; i++) {
          var o = t.charAt(i);
          switch (o) {
            case"\0":
              n += "";
              break;
            case"":
              n += "";
              break;
            default:
              n += o
          }
        }
        return n
      }

      function li(t) {
        return t + ""
      }

      function pi(t) {
        var e = t.length;
        if (g(e >= 2), 2 === e) return g("" === t.charAt(0) && "" === t.charAt(1)), N.P();
        for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
          var s = t.indexOf("", o);
          switch ((s < 0 || s > n) && _(), t.charAt(s + 1)) {
            case"":
              var u = t.substring(o, s), a = void 0;
              0 === i.length ? a = u : (a = i += u, i = ""), r.push(a);
              break;
            case"":
              i += t.substring(o, s), i += "\0";
              break;
            case"":
              i += t.substring(o, s + 1);
              break;
            default:
              _()
          }
          o = s + 2
        }
        return new N(r)
      }

      var di = function (t) {
        this.Co = t
      };

      function vi(t, e) {
        if (e.document) return function (t, e, n) {
          var r = De(t, e.name), i = Te(e.updateTime), o = new Sn({mapValue: {fields: e.fields}});
          return new Ln(r, i, o, {hasCommittedMutations: !!n})
        }(t.Co, e.document, !!e.hasCommittedMutations);
        if (e.noDocument) {
          var n = x.$(e.noDocument.path), r = bi(e.noDocument.readTime);
          return new kn(n, r, {hasCommittedMutations: !!e.hasCommittedMutations})
        }
        if (e.unknownDocument) {
          var i = x.$(e.unknownDocument.path), o = bi(e.unknownDocument.version);
          return new Cn(i, o)
        }
        return _()
      }

      function yi(t, e, n) {
        var r = gi(n), i = e.key.path.h().A();
        if (e instanceof Ln) {
          var o = function (t, e) {
            return {name: Se(t, e.key), fields: e.rn().mapValue.fields, updateTime: _e(t, e.version.Z())}
          }(t.Co, e), s = e.hasCommittedMutations;
          return new Hi(null, null, o, s, r, i)
        }
        if (e instanceof kn) {
          var u = e.key.path.A(), a = wi(e.version), c = e.hasCommittedMutations;
          return new Hi(null, new zi(u, a), null, c, r, i)
        }
        if (e instanceof Cn) {
          var h = e.key.path.A(), f = wi(e.version);
          return new Hi(new Wi(h, f), null, null, !0, r, i)
        }
        return _()
      }

      function gi(t) {
        var e = t.Z();
        return [e.seconds, e.nanoseconds]
      }

      function mi(t) {
        var e = new at(t[0], t[1]);
        return ct.J(e)
      }

      function wi(t) {
        var e = t.Z();
        return new Fi(e.seconds, e.nanoseconds)
      }

      function bi(t) {
        var e = new at(t.seconds, t.nanoseconds);
        return ct.J(e)
      }

      function _i(t, e) {
        var n = (e.baseMutations || []).map((function (e) {
          return Pe(t.Co, e)
        })), r = e.mutations.map((function (e) {
          return Pe(t.Co, e)
        })), i = at.fromMillis(e.localWriteTimeMs);
        return new Jr(e.batchId, i, n, r)
      }

      function Ei(t) {
        var e, n, r = bi(t.readTime),
          i = void 0 !== t.lastLimboFreeSnapshotVersion ? bi(t.lastLimboFreeSnapshotVersion) : ct.min();
        return void 0 !== t.query.documents ? (g(1 === (n = t.query).documents.length), e = Gn(Un(Oe(n.documents[0])))) : e = Me(t.query), new bt(e, t.targetId, 0, t.lastListenSequenceNumber, r, i, tt.fromBase64String(t.resumeToken))
      }

      function Ii(t, e) {
        var n, r = wi(e.nt), i = wi(e.lastLimboFreeSnapshotVersion);
        n = dt(e.target) ? Ue(t.Co, e.target) : Ve(t.Co, e.target);
        var o = e.resumeToken.toBase64();
        return new Qi(e.targetId, yt(e.target), r, o, e.sequenceNumber, i, n)
      }

      var Ti = function () {
        function t(t, e, n, r) {
          this.userId = t, this.serializer = e, this.Dr = n, this.No = r, this.Fo = {}
        }

        return t.xo = function (e, n, r, i) {
          return g("" !== e.uid), new t(e.Zs() ? e.uid : "", n, r, i)
        }, t.prototype.$o = function (t) {
          var e = !0,
            n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
          return Si(t).rs({index: Bi.userMutationsIndex, range: n}, (function (t, n, r) {
            e = !1, r.done()
          })).next((function () {
            return e
          }))
        }, t.prototype.ko = function (t, e, n, r) {
          var i = this, o = Di(t), s = Si(t);
          return s.add({}).next((function (u) {
            g("number" == typeof u);
            for (var a = new Jr(u, e, n, r), c = function (t, e, n) {
              var r = n.baseMutations.map((function (e) {
                return Re(t.Co, e)
              })), i = n.mutations.map((function (e) {
                return Re(t.Co, e)
              }));
              return new Bi(e, n.batchId, n.ar.toMillis(), r, i)
            }(i.serializer, i.userId, a), h = [], f = new St((function (t, e) {
              return J(t.R(), e.R())
            })), l = 0, p = r; l < p.length; l++) {
              var d = p[l], v = Gi.key(i.userId, d.key.path, u);
              f = f.add(d.key.path.h()), h.push(s.put(c)), h.push(o.put(v, Gi.PLACEHOLDER))
            }
            return f.forEach((function (e) {
              h.push(i.Dr.Mo(t, e))
            })), t.pr((function () {
              i.Fo[u] = a.keys()
            })), yr.$n(h).next((function () {
              return a
            }))
          }))
        }, t.prototype.Oo = function (t, e) {
          var n = this;
          return Si(t).get(e).next((function (t) {
            return t ? (g(t.userId === n.userId), _i(n.serializer, t)) : null
          }))
        }, t.prototype.Lo = function (t, e) {
          var n = this;
          return this.Fo[e] ? yr.resolve(this.Fo[e]) : this.Oo(t, e).next((function (t) {
            if (t) {
              var r = t.keys();
              return n.Fo[e] = r, r
            }
            return null
          }))
        }, t.prototype.Bo = function (t, e) {
          var n = this, r = e + 1, i = IDBKeyRange.lowerBound([this.userId, r]), o = null;
          return Si(t).rs({index: Bi.userMutationsIndex, range: i}, (function (t, e, i) {
            e.userId === n.userId && (g(e.batchId >= r), o = _i(n.serializer, e)), i.done()
          })).next((function () {
            return o
          }))
        }, t.prototype.qo = function (t) {
          var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]), n = -1;
          return Si(t).rs({index: Bi.userMutationsIndex, range: e, reverse: !0}, (function (t, e, r) {
            n = e.batchId, r.done()
          })).next((function () {
            return n
          }))
        }, t.prototype.Uo = function (t) {
          var e = this, n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
          return Si(t).ts(Bi.userMutationsIndex, n).next((function (t) {
            return t.map((function (t) {
              return _i(e.serializer, t)
            }))
          }))
        }, t.prototype.Nr = function (t, e) {
          var n = this, r = Gi.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r), o = [];
          return Di(t).rs({range: i}, (function (r, i, s) {
            var u = r[0], a = r[1], c = r[2], h = pi(a);
            if (u === n.userId && e.path.isEqual(h)) return Si(t).get(c).next((function (t) {
              if (!t) throw _();
              g(t.userId === n.userId), o.push(_i(n.serializer, t))
            }));
            s.done()
          })).next((function () {
            return o
          }))
        }, t.prototype.Or = function (t, e) {
          var n = this, r = new St(J), i = [];
          return e.forEach((function (e) {
            var o = Gi.prefixForPath(n.userId, e.path), s = IDBKeyRange.lowerBound(o),
              u = Di(t).rs({range: s}, (function (t, i, o) {
                var s = t[0], u = t[1], a = t[2], c = pi(u);
                s === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done()
              }));
            i.push(u)
          })), yr.$n(i).next((function () {
            return n.Qo(t, r)
          }))
        }, t.prototype.Wr = function (t, e) {
          var n = this, r = e.path, i = r.length + 1, o = Gi.prefixForPath(this.userId, r),
            s = IDBKeyRange.lowerBound(o), u = new St(J);
          return Di(t).rs({range: s}, (function (t, e, o) {
            var s = t[0], a = t[1], c = t[2], h = pi(a);
            s === n.userId && r.T(h) ? h.length === i && (u = u.add(c)) : o.done()
          })).next((function () {
            return n.Qo(t, u)
          }))
        }, t.prototype.Qo = function (t, e) {
          var n = this, r = [], i = [];
          return e.forEach((function (e) {
            i.push(Si(t).get(e).next((function (t) {
              if (null === t) throw _();
              g(t.userId === n.userId), r.push(_i(n.serializer, t))
            })))
          })), yr.$n(i).next((function () {
            return r
          }))
        }, t.prototype.Wo = function (t, e) {
          var n = this;
          return Ni(t.jo, this.userId, e).next((function (r) {
            return t.pr((function () {
              n.Ko(e.batchId)
            })), yr.forEach(r, (function (e) {
              return n.No.Go(t, e)
            }))
          }))
        }, t.prototype.Ko = function (t) {
          delete this.Fo[t]
        }, t.prototype.zo = function (t) {
          var e = this;
          return this.$o(t).next((function (n) {
            if (!n) return yr.resolve();
            var r = IDBKeyRange.lowerBound(Gi.prefixForUser(e.userId)), i = [];
            return Di(t).rs({range: r}, (function (t, n, r) {
              if (t[0] === e.userId) {
                var o = pi(t[1]);
                i.push(o)
              } else r.done()
            })).next((function () {
              g(0 === i.length)
            }))
          }))
        }, t.prototype.Ho = function (t, e) {
          return Ai(t, this.userId, e)
        }, t.prototype.Yo = function (t) {
          var e = this;
          return xi(t).get(this.userId).next((function (t) {
            return t || new qi(e.userId, -1, "")
          }))
        }, t
      }();

      function Ai(t, e, n) {
        var r = Gi.prefixForPath(e, n.path), i = r[1], o = IDBKeyRange.lowerBound(r), s = !1;
        return Di(t).rs({range: o, ss: !0}, (function (t, n, r) {
          var o = t[0], u = t[1];
          t[2], o === e && u === i && (s = !0), r.done()
        })).next((function () {
          return s
        }))
      }

      function Ni(t, e, n) {
        var r = t.store(Bi.store), i = t.store(Gi.store), o = [], s = IDBKeyRange.only(n.batchId), u = 0,
          a = r.rs({range: s}, (function (t, e, n) {
            return u++, n.delete()
          }));
        o.push(a.next((function () {
          g(1 === u)
        })));
        for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
          var l = f[h], p = Gi.key(e, l.key.path, n.batchId);
          o.push(i.delete(p)), c.push(l.key)
        }
        return yr.$n(o).next((function () {
          return c
        }))
      }

      function Si(t) {
        return ho.Qn(t, Bi.store)
      }

      function Di(t) {
        return ho.Qn(t, Gi.store)
      }

      function xi(t) {
        return ho.Qn(t, qi.store)
      }

      var Oi = function () {
        function t(t, e) {
          this.serializer = t, this.Dr = e
        }

        return t.prototype.Er = function (t, e, n) {
          return Ci(t).put(Ri(e), n)
        }, t.prototype.Ar = function (t, e) {
          var n = Ci(t), r = Ri(e);
          return n.delete(r)
        }, t.prototype.updateMetadata = function (t, e) {
          var n = this;
          return this.getMetadata(t).next((function (r) {
            return r.byteSize += e, n.Jo(t, r)
          }))
        }, t.prototype.Rr = function (t, e) {
          var n = this;
          return Ci(t).get(Ri(e)).next((function (t) {
            return n.Xo(t)
          }))
        }, t.prototype.Zo = function (t, e) {
          var n = this;
          return Ci(t).get(Ri(e)).next((function (t) {
            var e = n.Xo(t);
            return e ? {ta: e, size: Pi(t)} : null
          }))
        }, t.prototype.getEntries = function (t, e) {
          var n = this, r = Lt();
          return this.ea(t, e, (function (t, e) {
            var i = n.Xo(e);
            r = r.ot(t, i)
          })).next((function () {
            return r
          }))
        }, t.prototype.na = function (t, e) {
          var n = this, r = Lt(), i = new Tt(x.i);
          return this.ea(t, e, (function (t, e) {
            var o = n.Xo(e);
            o ? (r = r.ot(t, o), i = i.ot(t, Pi(e))) : (r = r.ot(t, null), i = i.ot(t, 0))
          })).next((function () {
            return {sa: r, ia: i}
          }))
        }, t.prototype.ea = function (t, e, n) {
          if (e.m()) return yr.resolve();
          var r = IDBKeyRange.bound(e.first().path.A(), e.last().path.A()), i = e._t(), o = i.It();
          return Ci(t).rs({range: r}, (function (t, e, r) {
            for (var s = x.$(t); o && x.i(o, s) < 0;) n(o, null), o = i.It();
            o && o.isEqual(s) && (n(o, e), o = i.At() ? i.It() : null), o ? r.Xn(o.path.A()) : r.done()
          })).next((function () {
            for (; o;) n(o, null), o = i.At() ? i.It() : null
          }))
        }, t.prototype.Lr = function (t, e, n) {
          var r = this, i = Ct(), o = e.path.length + 1, s = {};
          if (n.isEqual(ct.min())) {
            var u = e.path.A();
            s.range = IDBKeyRange.lowerBound(u)
          } else {
            var a = e.path.A(), c = gi(n);
            s.range = IDBKeyRange.lowerBound([a, c], !0), s.index = Hi.collectionReadTimeIndex
          }
          return Ci(t).rs(s, (function (t, n, s) {
            if (t.length === o) {
              var u = vi(r.serializer, n);
              e.path.T(u.key.path) ? u instanceof Ln && Yn(e, u) && (i = i.ot(u.key, u)) : s.done()
            }
          })).next((function () {
            return i
          }))
        }, t.prototype.ra = function (t) {
          return new Li(this, !!t && t.oa)
        }, t.prototype.aa = function (t) {
          return this.getMetadata(t).next((function (t) {
            return t.byteSize
          }))
        }, t.prototype.getMetadata = function (t) {
          return ki(t).get(Ki.key).next((function (t) {
            return g(!!t), t
          }))
        }, t.prototype.Jo = function (t, e) {
          return ki(t).put(Ki.key, e)
        }, t.prototype.Xo = function (t) {
          if (t) {
            var e = vi(this.serializer, t);
            return e instanceof kn && e.version.isEqual(ct.min()) ? null : e
          }
          return null
        }, t
      }(), Li = function (t) {
        function e(e, n) {
          var r = this;
          return (r = t.call(this) || this).ca = e, r.oa = n, r.ua = new ut((function (t) {
            return t.toString()
          }), (function (t, e) {
            return t.isEqual(e)
          })), r
        }

        return r.__extends(e, t), e.prototype.yr = function (t) {
          var e = this, n = [], r = 0, i = new St((function (t, e) {
            return J(t.R(), e.R())
          }));
          return this.wr.forEach((function (o, s) {
            var u = e.ua.get(o);
            if (s) {
              var a = yi(e.ca.serializer, s, e.readTime);
              i = i.add(o.path.h());
              var c = Pi(a);
              r += c - u, n.push(e.ca.Er(t, o, a))
            } else if (r -= u, e.oa) {
              var h = yi(e.ca.serializer, new kn(o, ct.min()), e.readTime);
              n.push(e.ca.Er(t, o, h))
            } else n.push(e.ca.Ar(t, o))
          })), i.forEach((function (r) {
            n.push(e.ca.Dr.Mo(t, r))
          })), n.push(this.ca.updateMetadata(t, r)), yr.$n(n)
        }, e.prototype.gr = function (t, e) {
          var n = this;
          return this.ca.Zo(t, e).next((function (t) {
            return null === t ? (n.ua.set(e, 0), null) : (n.ua.set(e, t.size), t.ta)
          }))
        }, e.prototype.Pr = function (t, e) {
          var n = this;
          return this.ca.na(t, e).next((function (t) {
            var e = t.sa;
            return t.ia.forEach((function (t, e) {
              n.ua.set(t, e)
            })), e
          }))
        }, e
      }(Zr);

      function ki(t) {
        return ho.Qn(t, Ki.store)
      }

      function Ci(t) {
        return ho.Qn(t, Hi.store)
      }

      function Ri(t) {
        return t.path.A()
      }

      function Pi(t) {
        var e;
        if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
          if (!t.noDocument) throw _();
          e = t.noDocument
        }
        return JSON.stringify(e).length
      }

      var Ui = function () {
        function t() {
          this.ha = new Vi
        }

        return t.prototype.Mo = function (t, e) {
          return this.ha.add(e), yr.resolve()
        }, t.prototype.Qr = function (t, e) {
          return yr.resolve(this.ha.getEntries(e))
        }, t
      }(), Vi = function () {
        function t() {
          this.index = {}
        }

        return t.prototype.add = function (t) {
          var e = t._(), n = t.h(), r = this.index[e] || new St(N.i), i = !r.has(n);
          return this.index[e] = r.add(n), i
        }, t.prototype.has = function (t) {
          var e = t._(), n = t.h(), r = this.index[e];
          return r && r.has(n)
        }, t.prototype.getEntries = function (t) {
          return (this.index[t] || new St(N.i)).A()
        }, t
      }(), Mi = function () {
        function t(t) {
          this.serializer = t
        }

        return t.prototype.createOrUpgrade = function (t, e, n, r) {
          var i = this;
          g(n < r && n >= 0 && r <= 10);
          var o = new br("createOrUpgrade", e);
          n < 1 && r >= 1 && (function (t) {
            t.createObjectStore(ji.store)
          }(t), function (t) {
            t.createObjectStore(qi.store, {keyPath: qi.keyPath}), t.createObjectStore(Bi.store, {
              keyPath: Bi.keyPath,
              autoIncrement: !0
            }).createIndex(Bi.userMutationsIndex, Bi.userMutationsKeyPath, {unique: !0}), t.createObjectStore(Gi.store)
          }(t), $i(t), function (t) {
            t.createObjectStore(Hi.store)
          }(t));
          var s = yr.resolve();
          return n < 3 && r >= 3 && (0 !== n && (function (t) {
            t.deleteObjectStore(Xi.store), t.deleteObjectStore(Qi.store), t.deleteObjectStore(Yi.store)
          }(t), $i(t)), s = s.next((function () {
            return function (t) {
              var e = t.store(Yi.store), n = new Yi(0, 0, ct.min().Z(), 0);
              return e.put(Yi.key, n)
            }(o)
          }))), n < 4 && r >= 4 && (0 !== n && (s = s.next((function () {
            return function (t, e) {
              return e.store(Bi.store).ts().next((function (n) {
                t.deleteObjectStore(Bi.store), t.createObjectStore(Bi.store, {
                  keyPath: Bi.keyPath,
                  autoIncrement: !0
                }).createIndex(Bi.userMutationsIndex, Bi.userMutationsKeyPath, {unique: !0});
                var r = e.store(Bi.store), i = n.map((function (t) {
                  return r.put(t)
                }));
                return yr.$n(i)
              }))
            }(t, o)
          }))), s = s.next((function () {
            !function (t) {
              t.createObjectStore(Zi.store, {keyPath: Zi.keyPath})
            }(t)
          }))), n < 5 && r >= 5 && (s = s.next((function () {
            return i.removeAcknowledgedMutations(o)
          }))), n < 6 && r >= 6 && (s = s.next((function () {
            return function (t) {
              t.createObjectStore(Ki.store)
            }(t), i.addDocumentGlobal(o)
          }))), n < 7 && r >= 7 && (s = s.next((function () {
            return i.ensureSequenceNumbers(o)
          }))), n < 8 && r >= 8 && (s = s.next((function () {
            return i.createCollectionParentIndex(t, o)
          }))), n < 9 && r >= 9 && (s = s.next((function () {
            !function (t) {
              t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges")
            }(t), function (t) {
              var e = t.objectStore(Hi.store);
              e.createIndex(Hi.readTimeIndex, Hi.readTimeIndexPath, {unique: !1}), e.createIndex(Hi.collectionReadTimeIndex, Hi.collectionReadTimeIndexPath, {unique: !1})
            }(e)
          }))), n < 10 && r >= 10 && (s = s.next((function () {
            return i.rewriteCanonicalIds(o)
          }))), s
        }, t.prototype.addDocumentGlobal = function (t) {
          var e = 0;
          return t.store(Hi.store).rs((function (t, n) {
            e += Pi(n)
          })).next((function () {
            var n = new Ki(e);
            return t.store(Ki.store).put(Ki.key, n)
          }))
        }, t.prototype.removeAcknowledgedMutations = function (t) {
          var e = this, n = t.store(qi.store), r = t.store(Bi.store);
          return n.ts().next((function (n) {
            return yr.forEach(n, (function (n) {
              var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
              return r.ts(Bi.userMutationsIndex, i).next((function (r) {
                return yr.forEach(r, (function (r) {
                  g(r.userId === n.userId);
                  var i = _i(e.serializer, r);
                  return Ni(t, n.userId, i).next((function () {
                  }))
                }))
              }))
            }))
          }))
        }, t.prototype.ensureSequenceNumbers = function (t) {
          var e = t.store(Xi.store), n = t.store(Hi.store);
          return t.store(Yi.store).get(Yi.key).next((function (t) {
            var r = [];
            return n.rs((function (n, i) {
              var o = new N(n), s = function (t) {
                return [0, hi(t)]
              }(o);
              r.push(e.get(s).next((function (n) {
                return n ? yr.resolve() : function (n) {
                  return e.put(new Xi(0, hi(n), t.highestListenSequenceNumber))
                }(o)
              })))
            })).next((function () {
              return yr.$n(r)
            }))
          }))
        }, t.prototype.createCollectionParentIndex = function (t, e) {
          t.createObjectStore(Ji.store, {keyPath: Ji.keyPath});
          var n = e.store(Ji.store), r = new Vi, i = function (t) {
            if (r.add(t)) {
              var e = t._(), i = t.h();
              return n.put({collectionId: e, parent: hi(i)})
            }
          };
          return e.store(Hi.store).rs({ss: !0}, (function (t, e) {
            var n = new N(t);
            return i(n.h())
          })).next((function () {
            return e.store(Gi.store).rs({ss: !0}, (function (t, e) {
              t[0];
              var n = t[1], r = (t[2], pi(n));
              return i(r.h())
            }))
          }))
        }, t.prototype.rewriteCanonicalIds = function (t) {
          var e = this, n = t.store(Qi.store);
          return n.rs((function (t, r) {
            var i = Ei(r), o = Ii(e.serializer, i);
            return n.put(o)
          }))
        }, t
      }(), Fi = function (t, e) {
        this.seconds = t, this.nanoseconds = e
      }, ji = function (t, e, n) {
        this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n
      };
      ji.store = "owner", ji.key = "owner";
      var qi = function (t, e, n) {
        this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n
      };
      qi.store = "mutationQueues", qi.keyPath = "userId";
      var Bi = function (t, e, n, r, i) {
        this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i
      };
      Bi.store = "mutations", Bi.keyPath = "batchId", Bi.userMutationsIndex = "userMutationsIndex", Bi.userMutationsKeyPath = ["userId", "batchId"];
      var Gi = function () {
        function t() {
        }

        return t.prefixForUser = function (t) {
          return [t]
        }, t.prefixForPath = function (t, e) {
          return [t, hi(e)]
        }, t.key = function (t, e, n) {
          return [t, hi(e), n]
        }, t
      }();
      Gi.store = "documentMutations", Gi.PLACEHOLDER = new Gi;
      var zi = function (t, e) {
        this.path = t, this.readTime = e
      }, Wi = function (t, e) {
        this.path = t, this.version = e
      }, Hi = function (t, e, n, r, i, o) {
        this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o
      };
      Hi.store = "remoteDocuments", Hi.readTimeIndex = "readTimeIndex", Hi.readTimeIndexPath = "readTime", Hi.collectionReadTimeIndex = "collectionReadTimeIndex", Hi.collectionReadTimeIndexPath = ["parentPath", "readTime"];
      var Ki = function (t) {
        this.byteSize = t
      };
      Ki.store = "remoteDocumentGlobal", Ki.key = "remoteDocumentGlobalKey";
      var Qi = function (t, e, n, r, i, o, s) {
        this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s
      };
      Qi.store = "targets", Qi.keyPath = "targetId", Qi.queryTargetsIndexName = "queryTargetsIndex", Qi.queryTargetsKeyPath = ["canonicalId", "targetId"];
      var Xi = function (t, e, n) {
        this.targetId = t, this.path = e, this.sequenceNumber = n
      };
      Xi.store = "targetDocuments", Xi.keyPath = ["targetId", "path"], Xi.documentTargetsIndex = "documentTargetsIndex", Xi.documentTargetsKeyPath = ["path", "targetId"];
      var Yi = function (t, e, n, r) {
        this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r
      };
      Yi.key = "targetGlobalKey", Yi.store = "targetGlobal";
      var Ji = function (t, e) {
        this.collectionId = t, this.parent = e
      };

      function $i(t) {
        t.createObjectStore(Xi.store, {keyPath: Xi.keyPath}).createIndex(Xi.documentTargetsIndex, Xi.documentTargetsKeyPath, {unique: !0}), t.createObjectStore(Qi.store, {keyPath: Qi.keyPath}).createIndex(Qi.queryTargetsIndexName, Qi.queryTargetsKeyPath, {unique: !0}), t.createObjectStore(Yi.store)
      }

      Ji.store = "collectionParents", Ji.keyPath = ["collectionId", "parent"];
      var Zi = function (t, e, n, r) {
        this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r
      };
      Zi.store = "clientMetadata", Zi.keyPath = "clientId";
      var to = r.__spreadArrays(r.__spreadArrays(r.__spreadArrays([qi.store, Bi.store, Gi.store, Hi.store, Qi.store, ji.store, Yi.store, Xi.store], [Zi.store]), [Ki.store]), [Ji.store]),
        eo = function () {
          function t() {
            this.la = new Vi
          }

          return t.prototype.Mo = function (t, e) {
            var n = this;
            if (!this.la.has(e)) {
              var r = e._(), i = e.h();
              t.pr((function () {
                n.la.add(e)
              }));
              var o = {collectionId: r, parent: hi(i)};
              return no(t).put(o)
            }
            return yr.resolve()
          }, t.prototype.Qr = function (t, e) {
            var n = [], r = IDBKeyRange.bound([e, ""], [Z(e), ""], !1, !0);
            return no(t).ts(r).next((function (t) {
              for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                if (o.collectionId !== e) break;
                n.push(pi(o.parent))
              }
              return n
            }))
          }, t
        }();

      function no(t) {
        return ho.Qn(t, Ji.store)
      }

      var ro = function () {
        function t(t) {
          this._a = t
        }

        return t.prototype.next = function () {
          return this._a += 2, this._a
        }, t.fa = function () {
          return new t(0)
        }, t.da = function () {
          return new t(-1)
        }, t
      }(), io = function () {
        function t(t, e) {
          this.No = t, this.serializer = e
        }

        return t.prototype.wa = function (t) {
          var e = this;
          return this.ma(t).next((function (n) {
            var r = new ro(n.highestTargetId);
            return n.highestTargetId = r.next(), e.Ta(t, n).next((function () {
              return n.highestTargetId
            }))
          }))
        }, t.prototype.Ea = function (t) {
          return this.ma(t).next((function (t) {
            return ct.J(new at(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds))
          }))
        }, t.prototype.Ia = function (t) {
          return this.ma(t).next((function (t) {
            return t.highestListenSequenceNumber
          }))
        }, t.prototype.Aa = function (t, e, n) {
          var r = this;
          return this.ma(t).next((function (i) {
            return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.Z()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Ta(t, i)
          }))
        }, t.prototype.Ra = function (t, e) {
          var n = this;
          return this.ga(t, e).next((function () {
            return n.ma(t).next((function (r) {
              return r.targetCount += 1, n.Pa(e, r), n.Ta(t, r)
            }))
          }))
        }, t.prototype.ya = function (t, e) {
          return this.ga(t, e)
        }, t.prototype.Va = function (t, e) {
          var n = this;
          return this.pa(t, e.targetId).next((function () {
            return oo(t).delete(e.targetId)
          })).next((function () {
            return n.ma(t)
          })).next((function (e) {
            return g(e.targetCount > 0), e.targetCount -= 1, n.Ta(t, e)
          }))
        }, t.prototype.po = function (t, e, n) {
          var r = this, i = 0, o = [];
          return oo(t).rs((function (s, u) {
            var a = Ei(u);
            a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.Va(t, a)))
          })).next((function () {
            return yr.$n(o)
          })).next((function () {
            return i
          }))
        }, t.prototype.Ce = function (t, e) {
          return oo(t).rs((function (t, n) {
            var r = Ei(n);
            e(r)
          }))
        }, t.prototype.ma = function (t) {
          return so(t).get(Yi.key).next((function (t) {
            return g(null !== t), t
          }))
        }, t.prototype.Ta = function (t, e) {
          return so(t).put(Yi.key, e)
        }, t.prototype.ga = function (t, e) {
          return oo(t).put(Ii(this.serializer, e))
        }, t.prototype.Pa = function (t, e) {
          var n = !1;
          return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n
        }, t.prototype.ba = function (t) {
          return this.ma(t).next((function (t) {
            return t.targetCount
          }))
        }, t.prototype.va = function (t, e) {
          var n = yt(e), r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]), i = null;
          return oo(t).rs({range: r, index: Qi.queryTargetsIndexName}, (function (t, n, r) {
            var o = Ei(n);
            gt(e, o.target) && (i = o, r.done())
          })).next((function () {
            return i
          }))
        }, t.prototype.Sa = function (t, e, n) {
          var r = this, i = [], o = uo(t);
          return e.forEach((function (e) {
            var s = hi(e.path);
            i.push(o.put(new Xi(n, s))), i.push(r.No.Da(t, n, e))
          })), yr.$n(i)
        }, t.prototype.Ca = function (t, e, n) {
          var r = this, i = uo(t);
          return yr.forEach(e, (function (e) {
            var o = hi(e.path);
            return yr.$n([i.delete([n, o]), r.No.Na(t, n, e)])
          }))
        }, t.prototype.pa = function (t, e) {
          var n = uo(t), r = IDBKeyRange.bound([e], [e + 1], !1, !0);
          return n.delete(r)
        }, t.prototype.Fa = function (t, e) {
          var n = IDBKeyRange.bound([e], [e + 1], !1, !0), r = uo(t), i = Ut();
          return r.rs({range: n, ss: !0}, (function (t, e, n) {
            var r = pi(t[1]), o = new x(r);
            i = i.add(o)
          })).next((function () {
            return i
          }))
        }, t.prototype.Ho = function (t, e) {
          var n = hi(e.path), r = IDBKeyRange.bound([n], [Z(n)], !1, !0), i = 0;
          return uo(t).rs({index: Xi.documentTargetsIndex, ss: !0, range: r}, (function (t, e, n) {
            var r = t[0];
            t[1], 0 !== r && (i++, n.done())
          })).next((function () {
            return i > 0
          }))
        }, t.prototype.Ue = function (t, e) {
          return oo(t).get(e).next((function (t) {
            return t ? Ei(t) : null
          }))
        }, t
      }();

      function oo(t) {
        return ho.Qn(t, Qi.store)
      }

      function so(t) {
        return ho.Qn(t, Yi.store)
      }

      function uo(t) {
        return ho.Qn(t, Xi.store)
      }

      var ao = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
        co = function (t) {
          function e(e, n) {
            var r = this;
            return (r = t.call(this) || this).jo = e, r.xa = n, r
          }

          return r.__extends(e, t), e
        }(ei), ho = function () {
          function t(e, n, r, i, o, s, u, c, h, f) {
            if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, this.fn = o, this.window = s, this.document = u, this.$a = h, this.ka = f, this.Ma = null, this.Oa = !1, this.isPrimary = !1, this.networkEnabled = !0, this.La = null, this.inForeground = !1, this.Ba = null, this.qa = null, this.Ua = Number.NEGATIVE_INFINITY, this.Qa = function (t) {
              return Promise.resolve()
            }, !t.Ln()) throw new l(a.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
            this.No = new po(this, i), this.Wa = n + "main", this.serializer = new di(c), this.ja = new gr(this.Wa, 10, new Mi(this.serializer)), this.Ka = new io(this.No, this.serializer), this.Dr = new eo, this.vr = function (t, e) {
              return new Oi(t, e)
            }(this.serializer, this.Dr), this.window && this.window.localStorage ? this.Ga = this.window.localStorage : (this.Ga = null, !1 === f && p("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))
          }

          return t.Qn = function (t, e) {
            if (t instanceof co) return gr.Qn(t.jo, e);
            throw _()
          }, t.prototype.start = function () {
            var t = this;
            return this.za().then((function () {
              if (!t.isPrimary && !t.allowTabSynchronization) throw new l(a.FAILED_PRECONDITION, ao);
              return t.Ha(), t.Ya(), t.Ja(), t.runTransaction("getHighestListenSequenceNumber", "readonly", (function (e) {
                return t.Ka.Ia(e)
              }))
            })).then((function (e) {
              t.Ma = new jr(e, t.$a)
            })).then((function () {
              t.Oa = !0
            })).catch((function (e) {
              return t.ja && t.ja.close(), Promise.reject(e)
            }))
          }, t.prototype.Xa = function (t) {
            var e = this;
            return this.Qa = function (n) {
              return r.__awaiter(e, void 0, void 0, (function () {
                return r.__generator(this, (function (e) {
                  return this.Ei ? [2, t(n)] : [2]
                }))
              }))
            }, t(this.isPrimary)
          }, t.prototype.Za = function (t) {
            var e = this;
            this.ja.Kn((function (n) {
              return r.__awaiter(e, void 0, void 0, (function () {
                return r.__generator(this, (function (e) {
                  switch (e.label) {
                    case 0:
                      return null === n.newVersion ? [4, t()] : [3, 2];
                    case 1:
                      e.sent(), e.label = 2;
                    case 2:
                      return [2]
                  }
                }))
              }))
            }))
          }, t.prototype.tc = function (t) {
            var e = this;
            this.networkEnabled !== t && (this.networkEnabled = t, this.fn.ws((function () {
              return r.__awaiter(e, void 0, void 0, (function () {
                return r.__generator(this, (function (t) {
                  switch (t.label) {
                    case 0:
                      return this.Ei ? [4, this.za()] : [3, 2];
                    case 1:
                      t.sent(), t.label = 2;
                    case 2:
                      return [2]
                  }
                }))
              }))
            })))
          }, t.prototype.za = function () {
            var t = this;
            return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function (e) {
              return lo(e).put(new Zi(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function () {
                if (t.isPrimary) return t.ec(e).next((function (e) {
                  e || (t.isPrimary = !1, t.fn.Cs((function () {
                    return t.Qa(!1)
                  })))
                }))
              })).next((function () {
                return t.nc(e)
              })).next((function (n) {
                return t.isPrimary && !n ? t.sc(e).next((function () {
                  return !1
                })) : !!n && t.ic(e).next((function () {
                  return !0
                }))
              }))
            })).catch((function (e) {
              if (_r(e)) return y("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
              if (!t.allowTabSynchronization) throw e;
              return y("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), !1
            })).then((function (e) {
              t.isPrimary !== e && t.fn.Cs((function () {
                return t.Qa(e)
              })), t.isPrimary = e
            }))
          }, t.prototype.ec = function (t) {
            var e = this;
            return fo(t).get(ji.key).next((function (t) {
              return yr.resolve(e.rc(t))
            }))
          }, t.prototype.oc = function (t) {
            return lo(t).delete(this.clientId)
          }, t.prototype.ac = function () {
            return r.__awaiter(this, void 0, void 0, (function () {
              var e, n, i, o, s = this;
              return r.__generator(this, (function (r) {
                switch (r.label) {
                  case 0:
                    return !this.isPrimary || this.cc(this.Ua, 18e5) ? [3, 2] : (this.Ua = Date.now(), [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function (e) {
                      var n = t.Qn(e, Zi.store);
                      return n.ts().next((function (t) {
                        var e = s.uc(t, 18e5), r = t.filter((function (t) {
                          return -1 === e.indexOf(t)
                        }));
                        return yr.forEach(r, (function (t) {
                          return n.delete(t.clientId)
                        })).next((function () {
                          return r
                        }))
                      }))
                    })).catch((function () {
                      return []
                    }))]);
                  case 1:
                    if (e = r.sent(), this.Ga) for (n = 0, i = e; n < i.length; n++) o = i[n], this.Ga.removeItem(this.hc(o.clientId));
                    r.label = 2;
                  case 2:
                    return [2]
                }
              }))
            }))
          }, t.prototype.Ja = function () {
            var t = this;
            this.qa = this.fn.yn("client_metadata_refresh", 4e3, (function () {
              return t.za().then((function () {
                return t.ac()
              })).then((function () {
                return t.Ja()
              }))
            }))
          }, t.prototype.rc = function (t) {
            return !!t && t.ownerId === this.clientId
          }, t.prototype.nc = function (t) {
            var e = this;
            return this.ka ? yr.resolve(!0) : fo(t).get(ji.key).next((function (n) {
              if (null !== n && e.cc(n.leaseTimestampMs, 5e3) && !e.lc(n.ownerId)) {
                if (e.rc(n) && e.networkEnabled) return !0;
                if (!e.rc(n)) {
                  if (!n.allowTabSynchronization) throw new l(a.FAILED_PRECONDITION, ao);
                  return !1
                }
              }
              return !(!e.networkEnabled || !e.inForeground) || lo(t).ts().next((function (t) {
                return void 0 === e.uc(t, 5e3).find((function (t) {
                  if (e.clientId !== t.clientId) {
                    var n = !e.networkEnabled && t.networkEnabled, r = !e.inForeground && t.inForeground,
                      i = e.networkEnabled === t.networkEnabled;
                    if (n || r && i) return !0
                  }
                  return !1
                }))
              }))
            })).next((function (t) {
              return e.isPrimary !== t && y("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t
            }))
          }, t.prototype.Di = function () {
            return r.__awaiter(this, void 0, void 0, (function () {
              var t = this;
              return r.__generator(this, (function (e) {
                switch (e.label) {
                  case 0:
                    return this.Oa = !1, this._c(), this.qa && (this.qa.cancel(), this.qa = null), this.fc(), this.dc(), [4, this.ja.runTransaction("shutdown", "readwrite", [ji.store, Zi.store], (function (e) {
                      var n = new co(e, jr.ai);
                      return t.sc(n).next((function () {
                        return t.oc(n)
                      }))
                    }))];
                  case 1:
                    return e.sent(), this.ja.close(), this.wc(), [2]
                }
              }))
            }))
          }, t.prototype.uc = function (t, e) {
            var n = this;
            return t.filter((function (t) {
              return n.cc(t.updateTimeMs, e) && !n.lc(t.clientId)
            }))
          }, t.prototype.pi = function () {
            var t = this;
            return this.runTransaction("getActiveClients", "readonly", (function (e) {
              return lo(e).ts().next((function (e) {
                return t.uc(e, 18e5).map((function (t) {
                  return t.clientId
                }))
              }))
            }))
          }, Object.defineProperty(t.prototype, "Ei", {
            get: function () {
              return this.Oa
            }, enumerable: !1, configurable: !0
          }), t.prototype.mc = function (t) {
            return Ti.xo(t, this.serializer, this.Dr, this.No)
          }, t.prototype.Tc = function () {
            return this.Ka
          }, t.prototype.Ec = function () {
            return this.vr
          }, t.prototype.Ic = function () {
            return this.Dr
          }, t.prototype.runTransaction = function (t, e, n) {
            var r = this;
            y("IndexedDbPersistence", "Starting transaction:", t);
            var i, o = "readonly" === e ? "readonly" : "readwrite";
            return this.ja.runTransaction(t, o, to, (function (o) {
              return i = new co(o, r.Ma ? r.Ma.next() : jr.ai), "readwrite-primary" === e ? r.ec(i).next((function (t) {
                return !!t || r.nc(i)
              })).next((function (e) {
                if (!e) throw p("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, r.fn.Cs((function () {
                  return r.Qa(!1)
                })), new l(a.FAILED_PRECONDITION, ti);
                return n(i)
              })).next((function (t) {
                return r.ic(i).next((function () {
                  return t
                }))
              })) : r.Ac(i).next((function () {
                return n(i)
              }))
            })).then((function (t) {
              return i.br(), t
            }))
          }, t.prototype.Ac = function (t) {
            var e = this;
            return fo(t).get(ji.key).next((function (t) {
              if (null !== t && e.cc(t.leaseTimestampMs, 5e3) && !e.lc(t.ownerId) && !e.rc(t) && !(e.ka || e.allowTabSynchronization && t.allowTabSynchronization)) throw new l(a.FAILED_PRECONDITION, ao)
            }))
          }, t.prototype.ic = function (t) {
            var e = new ji(this.clientId, this.allowTabSynchronization, Date.now());
            return fo(t).put(ji.key, e)
          }, t.Ln = function () {
            return gr.Ln()
          }, t.prototype.sc = function (t) {
            var e = this, n = fo(t);
            return n.get(ji.key).next((function (t) {
              return e.rc(t) ? (y("IndexedDbPersistence", "Releasing primary lease."), n.delete(ji.key)) : yr.resolve()
            }))
          }, t.prototype.cc = function (t, e) {
            var n = Date.now();
            return !(t < n - e || t > n && (p("Detected an update time that is in the future: " + t + " > " + n), 1))
          }, t.prototype.Ha = function () {
            var t = this;
            null !== this.document && "function" == typeof this.document.addEventListener && (this.Ba = function () {
              t.fn.ws((function () {
                return t.inForeground = "visible" === t.document.visibilityState, t.za()
              }))
            }, this.document.addEventListener("visibilitychange", this.Ba), this.inForeground = "visible" === this.document.visibilityState)
          }, t.prototype.fc = function () {
            this.Ba && (this.document.removeEventListener("visibilitychange", this.Ba), this.Ba = null)
          }, t.prototype.Ya = function () {
            var t, e = this;
            "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.La = function () {
              e._c(), e.fn.ws((function () {
                return e.Di()
              }))
            }, this.window.addEventListener("unload", this.La))
          }, t.prototype.dc = function () {
            this.La && (this.window.removeEventListener("unload", this.La), this.La = null)
          }, t.prototype.lc = function (t) {
            var e;
            try {
              var n = null !== (null === (e = this.Ga) || void 0 === e ? void 0 : e.getItem(this.hc(t)));
              return y("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), n
            } catch (t) {
              return p("IndexedDbPersistence", "Failed to get zombied client id.", t), !1
            }
          }, t.prototype._c = function () {
            if (this.Ga) try {
              this.Ga.setItem(this.hc(this.clientId), String(Date.now()))
            } catch (t) {
              p("Failed to set zombie client id.", t)
            }
          }, t.prototype.wc = function () {
            if (this.Ga) try {
              this.Ga.removeItem(this.hc(this.clientId))
            } catch (t) {
            }
          }, t.prototype.hc = function (t) {
            return "firestore_zombie_" + this.persistenceKey + "_" + t
          }, t
        }();

      function fo(t) {
        return ho.Qn(t, ji.store)
      }

      function lo(t) {
        return ho.Qn(t, Zi.store)
      }

      var po = function () {
        function t(t, e) {
          this.db = t, this.wo = new ci(this, e)
        }

        return t.prototype.Po = function (t) {
          var e = this.Rc(t);
          return this.db.Tc().ba(t).next((function (t) {
            return e.next((function (e) {
              return t + e
            }))
          }))
        }, t.prototype.Rc = function (t) {
          var e = 0;
          return this.Vo(t, (function (t) {
            e++
          })).next((function () {
            return e
          }))
        }, t.prototype.Ce = function (t, e) {
          return this.db.Tc().Ce(t, e)
        }, t.prototype.Vo = function (t, e) {
          return this.gc(t, (function (t, n) {
            return e(n)
          }))
        }, t.prototype.Da = function (t, e, n) {
          return vo(t, n)
        }, t.prototype.Na = function (t, e, n) {
          return vo(t, n)
        }, t.prototype.po = function (t, e, n) {
          return this.db.Tc().po(t, e, n)
        }, t.prototype.Go = function (t, e) {
          return vo(t, e)
        }, t.prototype.Pc = function (t, e) {
          return function (t, e) {
            var n = !1;
            return xi(t).os((function (r) {
              return Ai(t, r, e).next((function (t) {
                return t && (n = !0), yr.resolve(!t)
              }))
            })).next((function () {
              return n
            }))
          }(t, e)
        }, t.prototype.bo = function (t, e) {
          var n = this, r = this.db.Ec().ra(), i = [], o = 0;
          return this.gc(t, (function (s, u) {
            if (u <= e) {
              var a = n.Pc(t, s).next((function (e) {
                if (!e) return o++, r.Rr(t, s).next((function () {
                  return r.Ar(s), uo(t).delete([0, hi(s.path)])
                }))
              }));
              i.push(a)
            }
          })).next((function () {
            return yr.$n(i)
          })).next((function () {
            return r.apply(t)
          })).next((function () {
            return o
          }))
        }, t.prototype.removeTarget = function (t, e) {
          var n = e.st(t.xa);
          return this.db.Tc().ya(t, n)
        }, t.prototype.yc = function (t, e) {
          return vo(t, e)
        }, t.prototype.gc = function (t, e) {
          var n, r = uo(t), i = jr.ai;
          return r.rs({index: Xi.documentTargetsIndex}, (function (t, r) {
            var o = t[0], s = (t[1], r.path), u = r.sequenceNumber;
            0 === o ? (i !== jr.ai && e(new x(pi(n)), i), i = u, n = s) : i = jr.ai
          })).next((function () {
            i !== jr.ai && e(new x(pi(n)), i)
          }))
        }, t.prototype.So = function (t) {
          return this.db.Ec().aa(t)
        }, t
      }();

      function vo(t, e) {
        return uo(t).put(function (t, e) {
          return new Xi(0, hi(t.path), e)
        }(e, t.xa))
      }

      function yo(t, e) {
        var n = t.projectId;
        return t.j || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
      }

      var go = function () {
        function t(t, e, n) {
          this.persistence = t, this.Vc = e, this.bc = new Tt(J), this.vc = new ut((function (t) {
            return yt(t)
          }), gt), this.Sc = ct.min(), this.Sr = t.mc(n), this.Dc = t.Ec(), this.Ka = t.Tc(), this.Cc = new ni(this.Dc, this.Sr, this.persistence.Ic()), this.Vc.Nc(this.Cc)
        }

        return t.prototype.Io = function (t) {
          var e = this;
          return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function (n) {
            return t.vo(n, e.bc)
          }))
        }, t
      }();

      function mo(t, e) {
        var n = E(t);
        return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function (t) {
          var r = e.batch.keys(), i = n.Dc.ra({oa: !0});
          return function (t, e, n, r) {
            var i = n.batch, o = i.keys(), s = yr.resolve();
            return o.forEach((function (t) {
              s = s.next((function () {
                return r.Rr(e, t)
              })).next((function (e) {
                var o = e, s = n.dr.get(t);
                g(null !== s), (!o || o.version.L(s) < 0) && (o = i.cr(t, o, n)) && r.Er(o, n._r)
              }))
            })), s.next((function () {
              return t.Sr.Wo(e, i)
            }))
          }(n, t, e, i).next((function () {
            return i.apply(t)
          })).next((function () {
            return n.Sr.zo(t)
          })).next((function () {
            return n.Cc.kr(t, r)
          }))
        }))
      }

      function wo(t) {
        var e = E(t);
        return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function (t) {
          return e.Ka.Ea(t)
        }))
      }

      function bo(t, e) {
        var n = E(t), r = e.nt, i = n.bc;
        return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function (t) {
          var o = n.Dc.ra({oa: !0});
          i = n.bc;
          var s = [];
          e.zt.forEach((function (e, o) {
            var u = i.get(o);
            if (u) {
              s.push(n.Ka.Ca(t, e.se, o).next((function () {
                return n.Ka.Sa(t, e.ee, o)
              })));
              var a = e.resumeToken;
              if (a.O() > 0) {
                var c = u.it(a, r).st(t.xa);
                i = i.ot(o, c), function (t, e, n) {
                  return g(e.resumeToken.O() > 0), 0 === t.resumeToken.O() || e.nt.X() - t.nt.X() >= 3e8 || n.ee.size + n.ne.size + n.se.size > 0
                }(u, c, e) && s.push(n.Ka.ya(t, c))
              }
            }
          }));
          var u = Ot(), a = Ut();
          if (e.Yt.forEach((function (t, e) {
            a = a.add(t)
          })), s.push(o.getEntries(t, a).next((function (i) {
            e.Yt.forEach((function (a, c) {
              var h = i.get(a);
              c instanceof kn && c.version.isEqual(ct.min()) ? (o.Ar(a, r), u = u.ot(a, c)) : null == h || c.version.L(h.version) > 0 || 0 === c.version.L(h.version) && h.hasPendingWrites ? (o.Er(c, r), u = u.ot(a, c)) : y("LocalStore", "Ignoring outdated watch update for ", a, ". Current version:", h.version, " Watch version:", c.version), e.Jt.has(a) && s.push(n.persistence.No.yc(t, a))
            }))
          }))), !r.isEqual(ct.min())) {
            var c = n.Ka.Ea(t).next((function (e) {
              return n.Ka.Aa(t, t.xa, r)
            }));
            s.push(c)
          }
          return yr.$n(s).next((function () {
            return o.apply(t)
          })).next((function () {
            return n.Cc.Mr(t, u)
          }))
        })).then((function (t) {
          return n.bc = i, t
        }))
      }

      function _o(t, e) {
        var n = E(t);
        return n.persistence.runTransaction("Get next mutation batch", "readonly", (function (t) {
          return void 0 === e && (e = -1), n.Sr.Bo(t, e)
        }))
      }

      function Eo(t, e) {
        var n = E(t);
        return n.persistence.runTransaction("Allocate target", "readwrite", (function (t) {
          var r;
          return n.Ka.va(t, e).next((function (i) {
            return i ? (r = i, yr.resolve(r)) : n.Ka.wa(t).next((function (i) {
              return r = new bt(e, i, 0, t.xa), n.Ka.Ra(t, r).next((function () {
                return r
              }))
            }))
          }))
        })).then((function (t) {
          var r = n.bc.get(t.targetId);
          return (null === r || t.nt.L(r.nt) > 0) && (n.bc = n.bc.ot(t.targetId, t), n.vc.set(e, t.targetId)), t
        }))
      }

      function Io(t, e, n) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var i, o, s, u;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                i = E(t), o = i.bc.get(e), s = n ? "readwrite" : "readwrite-primary", r.label = 1;
              case 1:
                return r.trys.push([1, 4, , 5]), n ? [3, 3] : [4, i.persistence.runTransaction("Release target", s, (function (t) {
                  return i.persistence.No.removeTarget(t, o)
                }))];
              case 2:
                r.sent(), r.label = 3;
              case 3:
                return [3, 5];
              case 4:
                if (!_r(u = r.sent())) throw u;
                return y("LocalStore", "Failed to update sequence numbers for target " + e + ": " + u), [3, 5];
              case 5:
                return i.bc = i.bc.remove(e), i.vc.delete(o.target), [2]
            }
          }))
        }))
      }

      function To(t, e, n) {
        var r = E(t), i = ct.min(), o = Ut();
        return r.persistence.runTransaction("Execute query", "readonly", (function (t) {
          return function (t, e, n) {
            var r = E(t), i = r.vc.get(n);
            return void 0 !== i ? yr.resolve(r.bc.get(i)) : r.Ka.va(e, n)
          }(r, t, Gn(e)).next((function (e) {
            if (e) return i = e.lastLimboFreeSnapshotVersion, r.Ka.Fa(t, e.targetId).next((function (t) {
              o = t
            }))
          })).next((function () {
            return r.Vc.Lr(t, e, n ? i : ct.min(), n ? o : Ut())
          })).next((function (t) {
            return {documents: t, Fc: o}
          }))
        }))
      }

      function Ao(t, e) {
        var n = E(t), r = E(n.Ka), i = n.bc.get(e);
        return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (function (t) {
          return r.Ue(t, e).next((function (t) {
            return t ? t.target : null
          }))
        }))
      }

      function No(t) {
        var e = E(t);
        return e.persistence.runTransaction("Get new document changes", "readonly", (function (t) {
          return function (t, e, n) {
            var r = E(t), i = Ot(), o = gi(n), s = Ci(e), u = IDBKeyRange.lowerBound(o, !0);
            return s.rs({index: Hi.readTimeIndex, range: u}, (function (t, e) {
              var n = vi(r.serializer, e);
              i = i.ot(n.key, n), o = e.readTime
            })).next((function () {
              return {xc: i, readTime: mi(o)}
            }))
          }(e.Dc, t, e.Sc)
        })).then((function (t) {
          var n = t.xc, r = t.readTime;
          return e.Sc = r, n
        }))
      }

      function So(t) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var e;
          return r.__generator(this, (function (n) {
            return [2, (e = E(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", (function (t) {
              return function (t) {
                var e = Ci(t), n = ct.min();
                return e.rs({index: Hi.readTimeIndex, reverse: !0}, (function (t, e, r) {
                  e.readTime && (n = mi(e.readTime)), r.done()
                })).next((function () {
                  return n
                }))
              }(t)
            })).then((function (t) {
              e.Sc = t
            }))]
          }))
        }))
      }

      function Do(t) {
        return r.__awaiter(this, void 0, void 0, (function () {
          return r.__generator(this, (function (e) {
            if (t.code !== a.FAILED_PRECONDITION || t.message !== ti) throw t;
            return y("LocalStore", "Unexpectedly lost primary lease"), [2]
          }))
        }))
      }

      var xo = function () {
        function t() {
          this.$c = new St(Oo.kc), this.Mc = new St(Oo.Oc)
        }

        return t.prototype.m = function () {
          return this.$c.m()
        }, t.prototype.Da = function (t, e) {
          var n = new Oo(t, e);
          this.$c = this.$c.add(n), this.Mc = this.Mc.add(n)
        }, t.prototype.Lc = function (t, e) {
          var n = this;
          t.forEach((function (t) {
            return n.Da(t, e)
          }))
        }, t.prototype.Na = function (t, e) {
          this.Bc(new Oo(t, e))
        }, t.prototype.qc = function (t, e) {
          var n = this;
          t.forEach((function (t) {
            return n.Na(t, e)
          }))
        }, t.prototype.Uc = function (t) {
          var e = this, n = new x(new N([])), r = new Oo(n, t), i = new Oo(n, t + 1), o = [];
          return this.Mc.Ft([r, i], (function (t) {
            e.Bc(t), o.push(t.key)
          })), o
        }, t.prototype.Qc = function () {
          var t = this;
          this.$c.forEach((function (e) {
            return t.Bc(e)
          }))
        }, t.prototype.Bc = function (t) {
          this.$c = this.$c.delete(t), this.Mc = this.Mc.delete(t)
        }, t.prototype.Wc = function (t) {
          var e = new x(new N([])), n = new Oo(e, t), r = new Oo(e, t + 1), i = Ut();
          return this.Mc.Ft([n, r], (function (t) {
            i = i.add(t.key)
          })), i
        }, t.prototype.Ho = function (t) {
          var e = new Oo(t, 0), n = this.$c.$t(e);
          return null !== n && t.isEqual(n.key)
        }, t
      }(), Oo = function () {
        function t(t, e) {
          this.key = t, this.jc = e
        }

        return t.kc = function (t, e) {
          return x.i(t.key, e.key) || J(t.jc, e.jc)
        }, t.Oc = function (t, e) {
          return J(t.jc, e.jc) || x.i(t.key, e.key)
        }, t
      }(), Lo = function (t, e) {
        this.user = e, this.type = "OAuth", this.Kc = {}, this.Kc.Authorization = "Bearer " + t
      }, ko = function () {
        function t() {
          this.Gc = null
        }

        return t.prototype.getToken = function () {
          return Promise.resolve(null)
        }, t.prototype.zc = function () {
        }, t.prototype.Hc = function (t) {
          this.Gc = t, t(Fr.UNAUTHENTICATED)
        }, t.prototype.Yc = function () {
          this.Gc = null
        }, t
      }(), Co = function () {
        function t(t) {
          var e = this;
          this.Jc = null, this.currentUser = Fr.UNAUTHENTICATED, this.Xc = !1, this.Zc = 0, this.Gc = null, this.forceRefresh = !1, this.Jc = function () {
            e.Zc++, e.currentUser = e.tu(), e.Xc = !0, e.Gc && e.Gc(e.currentUser)
          }, this.Zc = 0, this.auth = t.getImmediate({optional: !0}), this.auth ? this.auth.addAuthTokenListener(this.Jc) : (this.Jc(null), t.get().then((function (t) {
            e.auth = t, e.Jc && e.auth.addAuthTokenListener(e.Jc)
          }), (function () {
          })))
        }

        return t.prototype.getToken = function () {
          var t = this, e = this.Zc, n = this.forceRefresh;
          return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function (n) {
            return t.Zc !== e ? (y("FirebaseCredentialsProvider", "getToken aborted due to token change."), t.getToken()) : n ? (g("string" == typeof n.accessToken), new Lo(n.accessToken, t.currentUser)) : null
          })) : Promise.resolve(null)
        }, t.prototype.zc = function () {
          this.forceRefresh = !0
        }, t.prototype.Hc = function (t) {
          this.Gc = t, this.Xc && t(this.currentUser)
        }, t.prototype.Yc = function () {
          this.auth && this.auth.removeAuthTokenListener(this.Jc), this.Jc = null, this.Gc = null
        }, t.prototype.tu = function () {
          var t = this.auth && this.auth.getUid();
          return g(null === t || "string" == typeof t), new Fr(t)
        }, t
      }(), Ro = function () {
        function t(t, e) {
          this.eu = t, this.nu = e, this.type = "FirstParty", this.user = Fr.ni
        }

        return Object.defineProperty(t.prototype, "Kc", {
          get: function () {
            var t = {"X-Goog-AuthUser": this.nu}, e = this.eu.auth.getAuthHeaderValueForFirstParty([]);
            return e && (t.Authorization = e), t
          }, enumerable: !1, configurable: !0
        }), t
      }(), Po = function () {
        function t(t, e) {
          this.eu = t, this.nu = e
        }

        return t.prototype.getToken = function () {
          return Promise.resolve(new Ro(this.eu, this.nu))
        }, t.prototype.Hc = function (t) {
          t(Fr.ni)
        }, t.prototype.Yc = function () {
        }, t.prototype.zc = function () {
        }, t
      }(), Uo = function () {
        function t(t, e, n, r, i, o) {
          this.fn = t, this.su = n, this.iu = r, this.ru = i, this.listener = o, this.state = 0, this.ou = 0, this.au = null, this.stream = null, this.ys = new vr(t, e)
        }

        return t.prototype.cu = function () {
          return 1 === this.state || 2 === this.state || 4 === this.state
        }, t.prototype.uu = function () {
          return 2 === this.state
        }, t.prototype.start = function () {
          3 !== this.state ? this.auth() : this.hu()
        }, t.prototype.stop = function () {
          return r.__awaiter(this, void 0, void 0, (function () {
            return r.__generator(this, (function (t) {
              switch (t.label) {
                case 0:
                  return this.cu() ? [4, this.close(0)] : [3, 2];
                case 1:
                  t.sent(), t.label = 2;
                case 2:
                  return [2]
              }
            }))
          }))
        }, t.prototype.lu = function () {
          this.state = 0, this.ys.reset()
        }, t.prototype._u = function () {
          var t = this;
          this.uu() && null === this.au && (this.au = this.fn.yn(this.su, 6e4, (function () {
            return t.fu()
          })))
        }, t.prototype.du = function (t) {
          this.wu(), this.stream.send(t)
        }, t.prototype.fu = function () {
          return r.__awaiter(this, void 0, void 0, (function () {
            return r.__generator(this, (function (t) {
              return this.uu() ? [2, this.close(0)] : [2]
            }))
          }))
        }, t.prototype.wu = function () {
          this.au && (this.au.cancel(), this.au = null)
        }, t.prototype.close = function (t, e) {
          return r.__awaiter(this, void 0, void 0, (function () {
            return r.__generator(this, (function (n) {
              switch (n.label) {
                case 0:
                  return this.wu(), this.ys.cancel(), this.ou++, 3 !== t ? this.ys.reset() : e && e.code === a.RESOURCE_EXHAUSTED ? (p(e.toString()), p("Using maximum backoff delay to prevent overloading the backend."), this.ys.Rn()) : e && e.code === a.UNAUTHENTICATED && this.ru.zc(), null !== this.stream && (this.mu(), this.stream.close(), this.stream = null), this.state = t, [4, this.listener.Tu(e)];
                case 1:
                  return n.sent(), [2]
              }
            }))
          }))
        }, t.prototype.mu = function () {
        }, t.prototype.auth = function () {
          var t = this;
          this.state = 1;
          var e = this.Eu(this.ou), n = this.ou;
          this.ru.getToken().then((function (e) {
            t.ou === n && t.Iu(e)
          }), (function (n) {
            e((function () {
              var e = new l(a.UNKNOWN, "Fetching auth token failed: " + n.message);
              return t.Au(e)
            }))
          }))
        }, t.prototype.Iu = function (t) {
          var e = this, n = this.Eu(this.ou);
          this.stream = this.Ru(t), this.stream.gu((function () {
            n((function () {
              return e.state = 2, e.listener.gu()
            }))
          })), this.stream.Tu((function (t) {
            n((function () {
              return e.Au(t)
            }))
          })), this.stream.onMessage((function (t) {
            n((function () {
              return e.onMessage(t)
            }))
          }))
        }, t.prototype.hu = function () {
          var t = this;
          this.state = 4, this.ys.gn((function () {
            return r.__awaiter(t, void 0, void 0, (function () {
              return r.__generator(this, (function (t) {
                return this.state = 0, this.start(), [2]
              }))
            }))
          }))
        }, t.prototype.Au = function (t) {
          return y("PersistentStream", "close with error: " + t), this.stream = null, this.close(3, t)
        }, t.prototype.Eu = function (t) {
          var e = this;
          return function (n) {
            e.fn.ws((function () {
              return e.ou === t ? n() : (y("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())
            }))
          }
        }, t
      }(), Vo = function (t) {
        function e(e, n, r, i, o) {
          var s = this;
          return (s = t.call(this, e, "listen_stream_connection_backoff", "listen_stream_idle", n, r, o) || this).serializer = i, s
        }

        return r.__extends(e, t), e.prototype.Ru = function (t) {
          return this.iu.Pu("Listen", t)
        }, e.prototype.onMessage = function (t) {
          this.ys.reset();
          var e = function (t, e) {
            var n;
            if ("targetChange" in e) {
              e.targetChange;
              var r = function (t) {
                  return "NO_CHANGE" === t ? 0 : "ADD" === t ? 1 : "REMOVE" === t ? 2 : "CURRENT" === t ? 3 : "RESET" === t ? 4 : _()
                }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [],
                o = function (t, e) {
                  return t.Qe ? (g(void 0 === e || "string" == typeof e), tt.fromBase64String(e || "")) : (g(void 0 === e || e instanceof Uint8Array), tt.fromUint8Array(e || new Uint8Array))
                }(t, e.targetChange.resumeToken), s = e.targetChange.cause, u = s && function (t) {
                  var e = void 0 === t.code ? a.UNKNOWN : It(t.code);
                  return new l(e, t.message || "")
                }(s);
              n = new Ht(r, i, o, u || null)
            } else if ("documentChange" in e) {
              e.documentChange;
              var c = e.documentChange;
              c.document, c.document.name, c.document.updateTime;
              var h = De(t, c.document.name), f = Te(c.document.updateTime),
                p = new Sn({mapValue: {fields: c.document.fields}}), d = new Ln(h, f, p, {}), v = c.targetIds || [],
                y = c.removedTargetIds || [];
              n = new zt(v, y, d.key, d)
            } else if ("documentDelete" in e) {
              e.documentDelete;
              var m = e.documentDelete;
              m.document;
              var w = De(t, m.document), b = m.readTime ? Te(m.readTime) : ct.min(), E = new kn(w, b),
                I = m.removedTargetIds || [];
              n = new zt([], I, E.key, E)
            } else if ("documentRemove" in e) {
              e.documentRemove;
              var T = e.documentRemove;
              T.document;
              var A = De(t, T.document), N = T.removedTargetIds || [];
              n = new zt([], N, A, null)
            } else {
              if (!("filter" in e)) return _();
              e.filter;
              var S = e.filter;
              S.targetId;
              var D = S.count || 0, x = new _t(D), O = S.targetId;
              n = new Wt(O, x)
            }
            return n
          }(this.serializer, t), n = function (t) {
            if (!("targetChange" in t)) return ct.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? ct.min() : e.readTime ? Te(e.readTime) : ct.min()
          }(t);
          return this.listener.yu(e, n)
        }, e.prototype.Vu = function (t) {
          var e = {};
          e.database = Le(this.serializer), e.addTarget = function (t, e) {
            var n, r = e.target;
            return (n = dt(r) ? {documents: Ue(t, r)} : {query: Ve(t, r)}).targetId = e.targetId, e.resumeToken.O() > 0 && (n.resumeToken = Ee(t, e.resumeToken)), n
          }(this.serializer, t);
          var n = function (t, e) {
            var n = function (t, e) {
              switch (e) {
                case 0:
                  return null;
                case 1:
                  return "existence-filter-mismatch";
                case 2:
                  return "limbo-document";
                default:
                  return _()
              }
            }(0, e.et);
            return null == n ? null : {"goog-listen-tags": n}
          }(this.serializer, t);
          n && (e.labels = n), this.du(e)
        }, e.prototype.pu = function (t) {
          var e = {};
          e.database = Le(this.serializer), e.removeTarget = t, this.du(e)
        }, e
      }(Uo), Mo = function (t) {
        function e(e, n, r, i, o) {
          var s = this;
          return (s = t.call(this, e, "write_stream_connection_backoff", "write_stream_idle", n, r, o) || this).serializer = i, s.bu = !1, s
        }

        return r.__extends(e, t), Object.defineProperty(e.prototype, "vu", {
          get: function () {
            return this.bu
          }, enumerable: !1, configurable: !0
        }), e.prototype.start = function () {
          this.bu = !1, this.lastStreamToken = void 0, t.prototype.start.call(this)
        }, e.prototype.mu = function () {
          this.bu && this.Su([])
        }, e.prototype.Ru = function (t) {
          return this.iu.Pu("Write", t)
        }, e.prototype.onMessage = function (t) {
          if (g(!!t.streamToken), this.lastStreamToken = t.streamToken, this.bu) {
            this.ys.reset();
            var e = function (t, e) {
              return t && t.length > 0 ? (g(void 0 !== e), t.map((function (t) {
                return function (t, e) {
                  var n = t.updateTime ? Te(t.updateTime) : Te(e);
                  n.isEqual(ct.min()) && (n = Te(e));
                  var r = null;
                  return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), new hn(n, r)
                }(t, e)
              }))) : []
            }(t.writeResults, t.commitTime), n = Te(t.commitTime);
            return this.listener.Du(n, e)
          }
          return g(!t.writeResults || 0 === t.writeResults.length), this.bu = !0, this.listener.Cu()
        }, e.prototype.Nu = function () {
          var t = {};
          t.database = Le(this.serializer), this.du(t)
        }, e.prototype.Su = function (t) {
          var e = this, n = {
            streamToken: this.lastStreamToken, writes: t.map((function (t) {
              return Re(e.serializer, t)
            }))
          };
          this.du(n)
        }, e
      }(Uo), Fo = function (t) {
        function e(e, n, r) {
          var i = this;
          return (i = t.call(this) || this).credentials = e, i.iu = n, i.serializer = r, i.Fu = !1, i
        }

        return r.__extends(e, t), e.prototype.xu = function () {
          if (this.Fu) throw new l(a.FAILED_PRECONDITION, "The client has already been terminated.")
        }, e.prototype.$u = function (t, e, n) {
          var r = this;
          return this.xu(), this.credentials.getToken().then((function (i) {
            return r.iu.$u(t, e, n, i)
          })).catch((function (t) {
            throw t.code === a.UNAUTHENTICATED && r.credentials.zc(), t
          }))
        }, e.prototype.ku = function (t, e, n) {
          var r = this;
          return this.xu(), this.credentials.getToken().then((function (i) {
            return r.iu.ku(t, e, n, i)
          })).catch((function (t) {
            throw t.code === a.UNAUTHENTICATED && r.credentials.zc(), t
          }))
        }, e.prototype.terminate = function () {
          this.Fu = !1
        }, e
      }((function () {
      })), jo = function () {
        function t(t, e) {
          this.cs = t, this.di = e, this.state = "Unknown", this.Mu = 0, this.Ou = null, this.Lu = !0
        }

        return t.prototype.Bu = function () {
          var t = this;
          0 === this.Mu && (this.qu("Unknown"), this.Ou = this.cs.yn("online_state_timeout", 1e4, (function () {
            return t.Ou = null, t.Uu("Backend didn't respond within 10 seconds."), t.qu("Offline"), Promise.resolve()
          })))
        }, t.prototype.Qu = function (t) {
          "Online" === this.state ? this.qu("Unknown") : (this.Mu++, this.Mu >= 1 && (this.Wu(), this.Uu("Connection failed 1 times. Most recent error: " + t.toString()), this.qu("Offline")))
        }, t.prototype.set = function (t) {
          this.Wu(), this.Mu = 0, "Online" === t && (this.Lu = !1), this.qu(t)
        }, t.prototype.qu = function (t) {
          t !== this.state && (this.state = t, this.di(t))
        }, t.prototype.Uu = function (t) {
          var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
          this.Lu ? (p(e), this.Lu = !1) : y("OnlineStateTracker", e)
        }, t.prototype.Wu = function () {
          null !== this.Ou && (this.Ou.cancel(), this.Ou = null)
        }, t
      }(), qo = function (t, e, n, i, o) {
        var s = this;
        this.ju = t, this.Ku = e, this.cs = n, this.Gu = {}, this.zu = [], this.Hu = new Map, this.Yu = new Set, this.Ju = [], this.Xu = o, this.Xu.Zu((function (t) {
          n.ws((function () {
            return r.__awaiter(s, void 0, void 0, (function () {
              return r.__generator(this, (function (t) {
                switch (t.label) {
                  case 0:
                    return Jo(this) ? (y("RemoteStore", "Restarting streams for network reachability change."), [4, function (t) {
                      return r.__awaiter(this, void 0, void 0, (function () {
                        var e;
                        return r.__generator(this, (function (n) {
                          switch (n.label) {
                            case 0:
                              return (e = E(t)).Yu.add(4), [4, Go(e)];
                            case 1:
                              return n.sent(), e.th.set("Unknown"), e.Yu.delete(4), [4, Bo(e)];
                            case 2:
                              return n.sent(), [2]
                          }
                        }))
                      }))
                    }(this)]) : [3, 2];
                  case 1:
                    t.sent(), t.label = 2;
                  case 2:
                    return [2]
                }
              }))
            }))
          }))
        })), this.th = new jo(n, i)
      };

      function Bo(t) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var e, n;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                if (!Jo(t)) return [3, 4];
                e = 0, n = t.Ju, r.label = 1;
              case 1:
                return e < n.length ? [4, (0, n[e])(!0)] : [3, 4];
              case 2:
                r.sent(), r.label = 3;
              case 3:
                return e++, [3, 1];
              case 4:
                return [2]
            }
          }))
        }))
      }

      function Go(t) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var e, n;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                e = 0, n = t.Ju, r.label = 1;
              case 1:
                return e < n.length ? [4, (0, n[e])(!1)] : [3, 4];
              case 2:
                r.sent(), r.label = 3;
              case 3:
                return e++, [3, 1];
              case 4:
                return [2]
            }
          }))
        }))
      }

      function zo(t) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var e;
          return r.__generator(this, (function (n) {
            switch (n.label) {
              case 0:
                return e = E(t), y("RemoteStore", "RemoteStore shutting down."), e.Yu.add(5), [4, Go(e)];
              case 1:
                return n.sent(), e.Xu.Di(), e.th.set("Unknown"), [2]
            }
          }))
        }))
      }

      function Wo(t, e) {
        var n = E(t);
        n.Hu.has(e.targetId) || (n.Hu.set(e.targetId, e), Yo(n) ? Xo(n) : ls(n).uu() && Ko(n, e))
      }

      function Ho(t, e) {
        var n = E(t), r = ls(n);
        n.Hu.delete(e), r.uu() && Qo(n, e), 0 === n.Hu.size && (r.uu() ? r._u() : Jo(n) && n.th.set("Unknown"))
      }

      function Ko(t, e) {
        t.eh.Ie(e.targetId), ls(t).Vu(e)
      }

      function Qo(t, e) {
        t.eh.Ie(e), ls(t).pu(e)
      }

      function Xo(t) {
        t.eh = new Qt({
          qe: function (e) {
            return t.Gu.qe(e)
          }, Ue: function (e) {
            return t.Hu.get(e) || null
          }
        }), ls(t).start(), t.th.Bu()
      }

      function Yo(t) {
        return Jo(t) && !ls(t).cu() && t.Hu.size > 0
      }

      function Jo(t) {
        return 0 === E(t).Yu.size
      }

      function $o(t) {
        t.eh = void 0
      }

      function Zo(t) {
        return r.__awaiter(this, void 0, void 0, (function () {
          return r.__generator(this, (function (e) {
            return t.Hu.forEach((function (e, n) {
              Ko(t, e)
            })), [2]
          }))
        }))
      }

      function ts(t, e) {
        return r.__awaiter(this, void 0, void 0, (function () {
          return r.__generator(this, (function (n) {
            return $o(t), Yo(t) ? (t.th.Qu(e), Xo(t)) : t.th.set("Unknown"), [2]
          }))
        }))
      }

      function es(t, e, n) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var i, o, s;
          return r.__generator(this, (function (u) {
            switch (u.label) {
              case 0:
                if (t.th.set("Online"), !(e instanceof Ht && 2 === e.state && e.cause)) return [3, 6];
                u.label = 1;
              case 1:
                return u.trys.push([1, 3, , 5]), [4, function (t, e) {
                  return r.__awaiter(this, void 0, void 0, (function () {
                    var n, i, o, s;
                    return r.__generator(this, (function (r) {
                      switch (r.label) {
                        case 0:
                          n = e.cause, i = 0, o = e.targetIds, r.label = 1;
                        case 1:
                          return i < o.length ? (s = o[i], t.Hu.has(s) ? [4, t.Gu.nh(s, n)] : [3, 3]) : [3, 5];
                        case 2:
                          r.sent(), t.Hu.delete(s), t.eh.removeTarget(s), r.label = 3;
                        case 3:
                          r.label = 4;
                        case 4:
                          return i++, [3, 1];
                        case 5:
                          return [2]
                      }
                    }))
                  }))
                }(t, e)];
              case 2:
                return u.sent(), [3, 5];
              case 3:
                return i = u.sent(), y("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), i), [4, ns(t, i)];
              case 4:
                return u.sent(), [3, 5];
              case 5:
                return [3, 13];
              case 6:
                if (e instanceof zt ? t.eh.be(e) : e instanceof Wt ? t.eh.$e(e) : t.eh.De(e), n.isEqual(ct.min())) return [3, 13];
                u.label = 7;
              case 7:
                return u.trys.push([7, 11, , 13]), [4, wo(t.ju)];
              case 8:
                return o = u.sent(), n.L(o) >= 0 ? [4, function (t, e) {
                  var n = t.eh.Oe(e);
                  return n.zt.forEach((function (n, r) {
                    if (n.resumeToken.O() > 0) {
                      var i = t.Hu.get(r);
                      i && t.Hu.set(r, i.it(n.resumeToken, e))
                    }
                  })), n.Ht.forEach((function (e) {
                    var n = t.Hu.get(e);
                    if (n) {
                      t.Hu.set(e, n.it(tt.B, n.nt)), Qo(t, e);
                      var r = new bt(n.target, e, 1, n.sequenceNumber);
                      Ko(t, r)
                    }
                  })), t.Gu.sh(n)
                }(t, n)] : [3, 10];
              case 9:
                u.sent(), u.label = 10;
              case 10:
                return [3, 13];
              case 11:
                return y("RemoteStore", "Failed to raise snapshot:", s = u.sent()), [4, ns(t, s)];
              case 12:
                return u.sent(), [3, 13];
              case 13:
                return [2]
            }
          }))
        }))
      }

      function ns(t, e, n) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var i = this;
          return r.__generator(this, (function (o) {
            switch (o.label) {
              case 0:
                if (!_r(e)) throw e;
                return t.Yu.add(1), [4, Go(t)];
              case 1:
                return o.sent(), t.th.set("Offline"), n || (n = function () {
                  return wo(t.ju)
                }), t.cs.Cs((function () {
                  return r.__awaiter(i, void 0, void 0, (function () {
                    return r.__generator(this, (function (e) {
                      switch (e.label) {
                        case 0:
                          return y("RemoteStore", "Retrying IndexedDB access"), [4, n()];
                        case 1:
                          return e.sent(), t.Yu.delete(1), [4, Bo(t)];
                        case 2:
                          return e.sent(), [2]
                      }
                    }))
                  }))
                })), [2]
            }
          }))
        }))
      }

      function rs(t, e) {
        return e().catch((function (n) {
          return ns(t, n, e)
        }))
      }

      function is(t) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var e, n, i, o, s;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                e = E(t), n = ps(e), i = e.zu.length > 0 ? e.zu[e.zu.length - 1].batchId : -1, r.label = 1;
              case 1:
                if (!function (t) {
                  return Jo(t) && t.zu.length < 10
                }(e)) return [3, 7];
                r.label = 2;
              case 2:
                return r.trys.push([2, 4, , 6]), [4, _o(e.ju, i)];
              case 3:
                return null === (o = r.sent()) ? (0 === e.zu.length && n._u(), [3, 7]) : (i = o.batchId, function (t, e) {
                  t.zu.push(e);
                  var n = ps(t);
                  n.uu() && n.vu && n.Su(e.mutations)
                }(e, o), [3, 6]);
              case 4:
                return s = r.sent(), [4, ns(e, s)];
              case 5:
                return r.sent(), [3, 6];
              case 6:
                return [3, 1];
              case 7:
                return os(e) && ss(e), [2]
            }
          }))
        }))
      }

      function os(t) {
        return Jo(t) && !ps(t).cu() && t.zu.length > 0
      }

      function ss(t) {
        ps(t).start()
      }

      function us(t) {
        return r.__awaiter(this, void 0, void 0, (function () {
          return r.__generator(this, (function (e) {
            return ps(t).Nu(), [2]
          }))
        }))
      }

      function as(t) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var e, n, i, o;
          return r.__generator(this, (function (r) {
            for (e = ps(t), n = 0, i = t.zu; n < i.length; n++) o = i[n], e.Su(o.mutations);
            return [2]
          }))
        }))
      }

      function cs(t, e, n) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var i, o;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                return i = t.zu.shift(), o = $r.from(i, e, n), [4, rs(t, (function () {
                  return t.Gu.ih(o)
                }))];
              case 1:
                return r.sent(), [4, is(t)];
              case 2:
                return r.sent(), [2]
            }
          }))
        }))
      }

      function hs(t, e) {
        return r.__awaiter(this, void 0, void 0, (function () {
          return r.__generator(this, (function (n) {
            switch (n.label) {
              case 0:
                return e && ps(t).vu ? [4, function (t, e) {
                  return r.__awaiter(this, void 0, void 0, (function () {
                    var n, i;
                    return r.__generator(this, (function (r) {
                      switch (r.label) {
                        case 0:
                          return Et(i = e.code) && i !== a.ABORTED ? (n = t.zu.shift(), ps(t).lu(), [4, rs(t, (function () {
                            return t.Gu.rh(n.batchId, e)
                          }))]) : [3, 3];
                        case 1:
                          return r.sent(), [4, is(t)];
                        case 2:
                          r.sent(), r.label = 3;
                        case 3:
                          return [2]
                      }
                    }))
                  }))
                }(t, e)] : [3, 2];
              case 1:
                n.sent(), n.label = 2;
              case 2:
                return os(t) && ss(t), [2]
            }
          }))
        }))
      }

      function fs(t, e) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var n;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                return n = E(t), e ? (n.Yu.delete(2), [4, Bo(n)]) : [3, 2];
              case 1:
                return r.sent(), [3, 5];
              case 2:
                return e ? [3, 4] : (n.Yu.add(2), [4, Go(n)]);
              case 3:
                r.sent(), n.th.set("Unknown"), r.label = 4;
              case 4:
                r.label = 5;
              case 5:
                return [2]
            }
          }))
        }))
      }

      function ls(t) {
        var e = this;
        return t.oh || (t.oh = function (t, e, n) {
          var r = E(t);
          return r.xu(), new Vo(e, r.iu, r.credentials, r.serializer, n)
        }(t.Ku, t.cs, {gu: Zo.bind(null, t), Tu: ts.bind(null, t), yu: es.bind(null, t)}), t.Ju.push((function (n) {
          return r.__awaiter(e, void 0, void 0, (function () {
            return r.__generator(this, (function (e) {
              switch (e.label) {
                case 0:
                  return n ? (t.oh.lu(), Yo(t) ? Xo(t) : t.th.set("Unknown"), [3, 3]) : [3, 1];
                case 1:
                  return [4, t.oh.stop()];
                case 2:
                  e.sent(), $o(t), e.label = 3;
                case 3:
                  return [2]
              }
            }))
          }))
        }))), t.oh
      }

      function ps(t) {
        var e = this;
        return t.ah || (t.ah = function (t, e, n) {
          var r = E(t);
          return r.xu(), new Mo(e, r.iu, r.credentials, r.serializer, n)
        }(t.Ku, t.cs, {
          gu: us.bind(null, t),
          Tu: hs.bind(null, t),
          Cu: as.bind(null, t),
          Du: cs.bind(null, t)
        }), t.Ju.push((function (n) {
          return r.__awaiter(e, void 0, void 0, (function () {
            return r.__generator(this, (function (e) {
              switch (e.label) {
                case 0:
                  return n ? (t.ah.lu(), [4, is(t)]) : [3, 2];
                case 1:
                  return e.sent(), [3, 4];
                case 2:
                  return [4, t.ah.stop()];
                case 3:
                  e.sent(), t.zu.length > 0 && (y("RemoteStore", "Stopping write stream with " + t.zu.length + " pending writes"), t.zu = []), e.label = 4;
                case 4:
                  return [2]
              }
            }))
          }))
        }))), t.ah
      }

      var ds = function (t) {
        this.key = t
      }, vs = function (t) {
        this.key = t
      }, ys = function () {
        function t(t, e) {
          this.query = t, this.uh = e, this.hh = null, this.te = !1, this.lh = Ut(), this.Wt = Ut(), this._h = Jn(t), this.fh = new Ft(this._h)
        }

        return Object.defineProperty(t.prototype, "dh", {
          get: function () {
            return this.uh
          }, enumerable: !1, configurable: !0
        }), t.prototype.wh = function (t, e) {
          var n = this, r = e ? e.mh : new jt, i = e ? e.fh : this.fh, o = e ? e.Wt : this.Wt, s = i, u = !1,
            a = Vn(this.query) && i.size === this.query.limit ? i.last() : null,
            c = Mn(this.query) && i.size === this.query.limit ? i.first() : null;
          if (t.ht((function (t, e) {
            var h = i.get(t), f = e instanceof Ln ? e : null;
            f && (f = Yn(n.query, f) ? f : null);
            var l = !!h && n.Wt.has(h.key), p = !!f && (f.Je || n.Wt.has(f.key) && f.hasCommittedMutations), d = !1;
            h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
              type: 3,
              doc: f
            }), d = !0) : n.Th(h, f) || (r.track({
              type: 2,
              doc: f
            }), d = !0, (a && n._h(f, a) > 0 || c && n._h(f, c) < 0) && (u = !0)) : !h && f ? (r.track({
              type: 0,
              doc: f
            }), d = !0) : h && !f && (r.track({
              type: 1,
              doc: h
            }), d = !0, (a || c) && (u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), o = o.delete(t)))
          })), Vn(this.query) || Mn(this.query)) for (; s.size > this.query.limit;) {
            var h = Vn(this.query) ? s.last() : s.first();
            s = s.delete(h.key), o = o.delete(h.key), r.track({type: 1, doc: h})
          }
          return {fh: s, mh: r, Eh: u, Wt: o}
        }, t.prototype.Th = function (t, e) {
          return t.Je && e.hasCommittedMutations && !e.Je
        }, t.prototype.yr = function (t, e, n) {
          var r = this, i = this.fh;
          this.fh = t.fh, this.Wt = t.Wt;
          var o = t.mh.Ut();
          o.sort((function (t, e) {
            return function (t, e) {
              var n = function (t) {
                switch (t) {
                  case 0:
                    return 1;
                  case 2:
                  case 3:
                    return 2;
                  case 1:
                    return 0;
                  default:
                    return _()
                }
              };
              return n(t) - n(e)
            }(t.type, e.type) || r._h(t.doc, e.doc)
          })), this.Ih(n);
          var s = e ? this.Ah() : [], u = 0 === this.lh.size && this.te ? 1 : 0, a = u !== this.hh;
          return this.hh = u, 0 !== o.length || a ? {
            snapshot: new qt(this.query, t.fh, i, o, t.Wt, 0 === u, a, !1),
            Rh: s
          } : {Rh: s}
        }, t.prototype.Qs = function (t) {
          return this.te && "Offline" === t ? (this.te = !1, this.yr({
            fh: this.fh,
            mh: new jt,
            Wt: this.Wt,
            Eh: !1
          }, !1)) : {Rh: []}
        }, t.prototype.gh = function (t) {
          return !this.uh.has(t) && !!this.fh.has(t) && !this.fh.get(t).Je
        }, t.prototype.Ih = function (t) {
          var e = this;
          t && (t.ee.forEach((function (t) {
            return e.uh = e.uh.add(t)
          })), t.ne.forEach((function (t) {
          })), t.se.forEach((function (t) {
            return e.uh = e.uh.delete(t)
          })), this.te = t.te)
        }, t.prototype.Ah = function () {
          var t = this;
          if (!this.te) return [];
          var e = this.lh;
          this.lh = Ut(), this.fh.forEach((function (e) {
            t.gh(e.key) && (t.lh = t.lh.add(e.key))
          }));
          var n = [];
          return e.forEach((function (e) {
            t.lh.has(e) || n.push(new vs(e))
          })), this.lh.forEach((function (t) {
            e.has(t) || n.push(new ds(t))
          })), n
        }, t.prototype.Ph = function (t) {
          this.uh = t.Fc, this.lh = Ut();
          var e = this.wh(t.documents);
          return this.yr(e, !0)
        }, t.prototype.yh = function () {
          return qt.Gt(this.query, this.fh, this.Wt, 0 === this.hh)
        }, t
      }(), gs = function (t, e, n) {
        this.query = t, this.targetId = e, this.view = n
      }, ms = function (t) {
        this.key = t, this.Vh = !1
      }, ws = function () {
        function t(t, e, n, r, i, o) {
          this.ju = t, this.ph = e, this.bh = n, this.Sh = r, this.currentUser = i, this.Dh = o, this.Ch = {}, this.Nh = new ut((function (t) {
            return Qn(t)
          }), Kn), this.Fh = new Map, this.xh = [], this.$h = new Tt(x.i), this.kh = new Map, this.Mh = new xo, this.Oh = {}, this.Lh = new Map, this.Bh = ro.da(), this.onlineState = "Unknown", this.qh = void 0
        }

        return Object.defineProperty(t.prototype, "Uh", {
          get: function () {
            return !0 === this.qh
          }, enumerable: !1, configurable: !0
        }), t
      }();

      function bs(t, e) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var n, i, o, s, u, a;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                return n = Hs(t), (s = n.Nh.get(e)) ? (i = s.targetId, n.Sh.Oi(i), o = s.view.yh(), [3, 4]) : [3, 1];
              case 1:
                return [4, Eo(n.ju, Gn(e))];
              case 2:
                return u = r.sent(), a = n.Sh.Oi(u.targetId), i = u.targetId, [4, _s(n, e, i, "current" === a)];
              case 3:
                o = r.sent(), n.Uh && Wo(n.ph, u), r.label = 4;
              case 4:
                return [2, o]
            }
          }))
        }))
      }

      function _s(t, e, n, i) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var o, s, u, a, c, h;
          return r.__generator(this, (function (f) {
            switch (f.label) {
              case 0:
                return t.Qh = function (e, n, i) {
                  return function (t, e, n, i) {
                    return r.__awaiter(this, void 0, void 0, (function () {
                      var o, s, u;
                      return r.__generator(this, (function (r) {
                        switch (r.label) {
                          case 0:
                            return (o = e.view.wh(n)).Eh ? [4, To(t.ju, e.query, !1).then((function (t) {
                              var n = t.documents;
                              return e.view.wh(n, o)
                            }))] : [3, 2];
                          case 1:
                            o = r.sent(), r.label = 2;
                          case 2:
                            return s = i && i.zt.get(e.targetId), u = e.view.yr(o, t.Uh, s), [2, (ks(t, e.targetId, u.Rh), u.snapshot)]
                        }
                      }))
                    }))
                  }(t, e, n, i)
                }, [4, To(t.ju, e, !0)];
              case 1:
                return o = f.sent(), s = new ys(e, o.Fc), u = s.wh(o.documents), a = Gt.Zt(n, i && "Offline" !== t.onlineState), c = s.yr(u, t.Uh, a), ks(t, n, c.Rh), h = new gs(e, n, s), [2, (t.Nh.set(e, h), t.Fh.has(n) ? t.Fh.get(n).push(e) : t.Fh.set(n, [e]), c.snapshot)]
            }
          }))
        }))
      }

      function Es(t, e) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var n, i, o;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                return n = E(t), i = n.Nh.get(e), (o = n.Fh.get(i.targetId)).length > 1 ? [2, (n.Fh.set(i.targetId, o.filter((function (t) {
                  return !Kn(t, e)
                }))), void n.Nh.delete(e))] : n.Uh ? (n.Sh.Bi(i.targetId), n.Sh.Fi(i.targetId) ? [3, 2] : [4, Io(n.ju, i.targetId, !1).then((function () {
                  n.Sh.Ui(i.targetId), Ho(n.ph, i.targetId), Os(n, i.targetId)
                })).catch(Do)]) : [3, 3];
              case 1:
                r.sent(), r.label = 2;
              case 2:
                return [3, 5];
              case 3:
                return Os(n, i.targetId), [4, Io(n.ju, i.targetId, !0)];
              case 4:
                r.sent(), r.label = 5;
              case 5:
                return [2]
            }
          }))
        }))
      }

      function Is(t, e) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var n, i;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                n = E(t), r.label = 1;
              case 1:
                return r.trys.push([1, 4, , 6]), [4, bo(n.ju, e)];
              case 2:
                return i = r.sent(), e.zt.forEach((function (t, e) {
                  var r = n.kh.get(e);
                  r && (g(t.ee.size + t.ne.size + t.se.size <= 1), t.ee.size > 0 ? r.Vh = !0 : t.ne.size > 0 ? g(r.Vh) : t.se.size > 0 && (g(r.Vh), r.Vh = !1))
                })), [4, Ps(n, i, e)];
              case 3:
                return r.sent(), [3, 6];
              case 4:
                return [4, Do(r.sent())];
              case 5:
                return r.sent(), [3, 6];
              case 6:
                return [2]
            }
          }))
        }))
      }

      function Ts(t, e, n) {
        var r = E(t);
        if (r.Uh && 0 === n || !r.Uh && 1 === n) {
          var i = [];
          r.Nh.forEach((function (t, n) {
            var r = n.view.Qs(e);
            r.snapshot && i.push(r.snapshot)
          })), function (t, e) {
            var n = E(t);
            n.onlineState = e;
            var r = !1;
            n.Bs.forEach((function (t, n) {
              for (var i = 0, o = n.listeners; i < o.length; i++) o[i].Qs(e) && (r = !0)
            })), r && Vr(n)
          }(r.bh, e), i.length && r.Ch.yu(i), r.onlineState = e, r.Uh && r.Sh.Ki(e)
        }
      }

      function As(t, e, n) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var i, o, s, u, a, c;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                return (i = E(t)).Sh.Qi(e, "rejected", n), o = i.kh.get(e), (s = o && o.key) ? (u = (u = new Tt(x.i)).ot(s, new kn(s, ct.min())), a = Ut().add(s), c = new Bt(ct.min(), new Map, new St(J), u, a), [4, Is(i, c)]) : [3, 2];
              case 1:
                return r.sent(), i.$h = i.$h.remove(s), i.kh.delete(e), Rs(i), [3, 4];
              case 2:
                return [4, Io(i.ju, e, !1).then((function () {
                  return Os(i, e, n)
                })).catch(Do)];
              case 3:
                r.sent(), r.label = 4;
              case 4:
                return [2]
            }
          }))
        }))
      }

      function Ns(t, e) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var n, i, o;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                n = E(t), i = e.batch.batchId, r.label = 1;
              case 1:
                return r.trys.push([1, 4, , 6]), [4, mo(n.ju, e)];
              case 2:
                return o = r.sent(), xs(n, i, null), Ds(n, i), n.Sh.ki(i, "acknowledged"), [4, Ps(n, o)];
              case 3:
                return r.sent(), [3, 6];
              case 4:
                return [4, Do(r.sent())];
              case 5:
                return r.sent(), [3, 6];
              case 6:
                return [2]
            }
          }))
        }))
      }

      function Ss(t, e, n) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var i, o;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                i = E(t), r.label = 1;
              case 1:
                return r.trys.push([1, 4, , 6]), [4, function (t, e) {
                  var n = E(t);
                  return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function (t) {
                    var r;
                    return n.Sr.Oo(t, e).next((function (e) {
                      return g(null !== e), r = e.keys(), n.Sr.Wo(t, e)
                    })).next((function () {
                      return n.Sr.zo(t)
                    })).next((function () {
                      return n.Cc.kr(t, r)
                    }))
                  }))
                }(i.ju, e)];
              case 2:
                return o = r.sent(), xs(i, e, n), Ds(i, e), i.Sh.ki(e, "rejected", n), [4, Ps(i, o)];
              case 3:
                return r.sent(), [3, 6];
              case 4:
                return [4, Do(r.sent())];
              case 5:
                return r.sent(), [3, 6];
              case 6:
                return [2]
            }
          }))
        }))
      }

      function Ds(t, e) {
        (t.Lh.get(e) || []).forEach((function (t) {
          t.resolve()
        })), t.Lh.delete(e)
      }

      function xs(t, e, n) {
        var r = E(t), i = r.Oh[r.currentUser.ti()];
        if (i) {
          var o = i.get(e);
          o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.Oh[r.currentUser.ti()] = i
        }
      }

      function Os(t, e, n) {
        void 0 === n && (n = null), t.Sh.Bi(e);
        for (var r = 0, i = t.Fh.get(e); r < i.length; r++) {
          var o = i[r];
          t.Nh.delete(o), n && t.Ch.Wh(o, n)
        }
        t.Fh.delete(e), t.Uh && t.Mh.Uc(e).forEach((function (e) {
          t.Mh.Ho(e) || Ls(t, e)
        }))
      }

      function Ls(t, e) {
        var n = t.$h.get(e);
        null !== n && (Ho(t.ph, n), t.$h = t.$h.remove(e), t.kh.delete(n), Rs(t))
      }

      function ks(t, e, n) {
        for (var r = 0, i = n; r < i.length; r++) {
          var o = i[r];
          o instanceof ds ? (t.Mh.Da(o.key, e), Cs(t, o)) : o instanceof vs ? (y("SyncEngine", "Document no longer in limbo: " + o.key), t.Mh.Na(o.key, e), t.Mh.Ho(o.key) || Ls(t, o.key)) : _()
        }
      }

      function Cs(t, e) {
        var n = e.key;
        t.$h.get(n) || (y("SyncEngine", "New document in limbo: " + n), t.xh.push(n), Rs(t))
      }

      function Rs(t) {
        for (; t.xh.length > 0 && t.$h.size < t.Dh;) {
          var e = t.xh.shift(), n = t.Bh.next();
          t.kh.set(n, new ms(e)), t.$h = t.$h.ot(e, n), Wo(t.ph, new bt(Gn(Un(e.path)), n, 2, jr.ai))
        }
      }

      function Ps(t, e, n) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var i, o, s, u;
          return r.__generator(this, (function (a) {
            switch (a.label) {
              case 0:
                return i = E(t), o = [], s = [], u = [], i.Nh.m() ? [3, 3] : (i.Nh.forEach((function (t, r) {
                  u.push(i.Qh(r, e, n).then((function (t) {
                    if (t) {
                      i.Uh && i.Sh.Qi(r.targetId, t.fromCache ? "not-current" : "current"), o.push(t);
                      var e = ri.zr(r.targetId, t);
                      s.push(e)
                    }
                  })))
                })), [4, Promise.all(u)]);
              case 1:
                return a.sent(), i.Ch.yu(o), [4, function (t, e) {
                  return r.__awaiter(this, void 0, void 0, (function () {
                    var n, i, o, s, u, a, c, h, f;
                    return r.__generator(this, (function (r) {
                      switch (r.label) {
                        case 0:
                          n = E(t), r.label = 1;
                        case 1:
                          return r.trys.push([1, 3, , 4]), [4, n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function (t) {
                            return yr.forEach(e, (function (e) {
                              return yr.forEach(e.Kr, (function (r) {
                                return n.persistence.No.Da(t, e.targetId, r)
                              })).next((function () {
                                return yr.forEach(e.Gr, (function (r) {
                                  return n.persistence.No.Na(t, e.targetId, r)
                                }))
                              }))
                            }))
                          }))];
                        case 2:
                          return r.sent(), [3, 4];
                        case 3:
                          if (!_r(i = r.sent())) throw i;
                          return y("LocalStore", "Failed to update sequence numbers: " + i), [3, 4];
                        case 4:
                          for (o = 0, s = e; o < s.length; o++) u = s[o], a = u.targetId, u.fromCache || (c = n.bc.get(a), h = c.nt, f = c.rt(h), n.bc = n.bc.ot(a, f));
                          return [2]
                      }
                    }))
                  }))
                }(i.ju, s)];
              case 2:
                a.sent(), a.label = 3;
              case 3:
                return [2]
            }
          }))
        }))
      }

      function Us(t, e) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var n, i;
          return r.__generator(this, (function (o) {
            switch (o.label) {
              case 0:
                return (n = E(t)).currentUser.isEqual(e) ? [3, 3] : (y("SyncEngine", "User change. New user:", e.ti()), [4, function (t, e) {
                  return r.__awaiter(this, void 0, void 0, (function () {
                    var n, i, o, s;
                    return r.__generator(this, (function (r) {
                      switch (r.label) {
                        case 0:
                          return n = E(t), i = n.Sr, o = n.Cc, [4, n.persistence.runTransaction("Handle user change", "readonly", (function (t) {
                            var r;
                            return n.Sr.Uo(t).next((function (s) {
                              return r = s, i = n.persistence.mc(e), o = new ni(n.Dc, i, n.persistence.Ic()), i.Uo(t)
                            })).next((function (e) {
                              for (var n = [], i = [], s = Ut(), u = 0, a = r; u < a.length; u++) {
                                var c = a[u];
                                n.push(c.batchId);
                                for (var h = 0, f = c.mutations; h < f.length; h++) {
                                  var l = f[h];
                                  s = s.add(l.key)
                                }
                              }
                              for (var p = 0, d = e; p < d.length; p++) {
                                var v = d[p];
                                i.push(v.batchId);
                                for (var y = 0, g = v.mutations; y < g.length; y++) {
                                  var m = g[y];
                                  s = s.add(m.key)
                                }
                              }
                              return o.kr(t, s).next((function (t) {
                                return {jh: t, Kh: n, Gh: i}
                              }))
                            }))
                          }))];
                        case 1:
                          return s = r.sent(), [2, (n.Sr = i, n.Cc = o, n.Vc.Nc(n.Cc), s)]
                      }
                    }))
                  }))
                }(n.ju, e)]);
              case 1:
                return i = o.sent(), n.currentUser = e, function (t, e) {
                  t.Lh.forEach((function (t) {
                    t.forEach((function (t) {
                      t.reject(new l(a.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."))
                    }))
                  })), t.Lh.clear()
                }(n), n.Sh.ji(e, i.Kh, i.Gh), [4, Ps(n, i.jh)];
              case 2:
                o.sent(), o.label = 3;
              case 3:
                return [2]
            }
          }))
        }))
      }

      function Vs(t, e) {
        var n = E(t), r = n.kh.get(e);
        if (r && r.Vh) return Ut().add(r.key);
        var i = Ut(), o = n.Fh.get(e);
        if (!o) return i;
        for (var s = 0, u = o; s < u.length; s++) {
          var a = u[s], c = n.Nh.get(a);
          i = i.kt(c.view.dh)
        }
        return i
      }

      function Ms(t, e) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var n, i, o;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                return [4, To((n = E(t)).ju, e.query, !0)];
              case 1:
                return i = r.sent(), o = e.view.Ph(i), [2, (n.Uh && ks(n, e.targetId, o.Rh), o)]
            }
          }))
        }))
      }

      function Fs(t, e, n, i) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var o, s;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                return [4, function (t, e) {
                  var n = E(t), r = E(n.Sr);
                  return n.persistence.runTransaction("Lookup mutation documents", "readonly", (function (t) {
                    return r.Lo(t, e).next((function (e) {
                      return e ? n.Cc.kr(t, e) : yr.resolve(null)
                    }))
                  }))
                }((o = E(t)).ju, e)];
              case 1:
                return null === (s = r.sent()) ? [3, 6] : "pending" !== n ? [3, 3] : [4, is(o.ph)];
              case 2:
                return r.sent(), [3, 4];
              case 3:
                "acknowledged" === n || "rejected" === n ? (xs(o, e, i || null), Ds(o, e), function (t, e) {
                  E(E(t).Sr).Ko(e)
                }(o.ju, e)) : _(), r.label = 4;
              case 4:
                return [4, Ps(o, s)];
              case 5:
                return r.sent(), [3, 7];
              case 6:
                y("SyncEngine", "Cannot apply mutation batch with id: " + e), r.label = 7;
              case 7:
                return [2]
            }
          }))
        }))
      }

      function js(t, e) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var n, i, o, s, u, a, c, h;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                return Hs(n = E(t)), Ks(n), !0 !== e || !0 === n.qh ? [3, 3] : (i = n.Sh.Ci(), [4, qs(n, i.A())]);
              case 1:
                return o = r.sent(), n.qh = !0, [4, fs(n.ph, !0)];
              case 2:
                for (r.sent(), s = 0, u = o; s < u.length; s++) a = u[s], Wo(n.ph, a);
                return [3, 7];
              case 3:
                return !1 !== e || !1 === n.qh ? [3, 7] : (c = [], h = Promise.resolve(), n.Fh.forEach((function (t, e) {
                  n.Sh.qi(e) ? c.push(e) : h = h.then((function () {
                    return Os(n, e), Io(n.ju, e, !0)
                  })), Ho(n.ph, e)
                })), [4, h]);
              case 4:
                return r.sent(), [4, qs(n, c)];
              case 5:
                return r.sent(), function (t) {
                  var e = E(t);
                  e.kh.forEach((function (t, n) {
                    Ho(e.ph, n)
                  })), e.Mh.Qc(), e.kh = new Map, e.$h = new Tt(x.i)
                }(n), n.qh = !1, [4, fs(n.ph, !1)];
              case 6:
                r.sent(), r.label = 7;
              case 7:
                return [2]
            }
          }))
        }))
      }

      function qs(t, e, n) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var n, i, o, s, u, a, c, h, f, l, p, d, v, y;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                n = E(t), i = [], o = [], s = 0, u = e, r.label = 1;
              case 1:
                return s < u.length ? (a = u[s], c = void 0, (h = n.Fh.get(a)) && 0 !== h.length ? [4, Eo(n.ju, Gn(h[0]))] : [3, 7]) : [3, 13];
              case 2:
                c = r.sent(), f = 0, l = h, r.label = 3;
              case 3:
                return f < l.length ? (p = l[f], d = n.Nh.get(p), [4, Ms(n, d)]) : [3, 6];
              case 4:
                (v = r.sent()).snapshot && o.push(v.snapshot), r.label = 5;
              case 5:
                return f++, [3, 3];
              case 6:
                return [3, 11];
              case 7:
                return [4, Ao(n.ju, a)];
              case 8:
                return y = r.sent(), [4, Eo(n.ju, y)];
              case 9:
                return c = r.sent(), [4, _s(n, Bs(y), a, !1)];
              case 10:
                r.sent(), r.label = 11;
              case 11:
                i.push(c), r.label = 12;
              case 12:
                return s++, [3, 1];
              case 13:
                return [2, (n.Ch.yu(o), i)]
            }
          }))
        }))
      }

      function Bs(t) {
        return Pn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt)
      }

      function Gs(t) {
        var e = E(t);
        return E(E(e.ju).persistence).pi()
      }

      function zs(t, e, n, i) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var o, s, u;
          return r.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                return (o = E(t)).qh ? (y("SyncEngine", "Ignoring unexpected query state notification."), [3, 8]) : [3, 1];
              case 1:
                if (!o.Fh.has(e)) return [3, 8];
                switch (n) {
                  case"current":
                  case"not-current":
                    return [3, 2];
                  case"rejected":
                    return [3, 5]
                }
                return [3, 7];
              case 2:
                return [4, No(o.ju)];
              case 3:
                return s = r.sent(), u = Bt.Xt(e, "current" === n), [4, Ps(o, s, u)];
              case 4:
                return r.sent(), [3, 8];
              case 5:
                return [4, Io(o.ju, e, !0)];
              case 6:
                return r.sent(), Os(o, e, i), [3, 8];
              case 7:
                _(), r.label = 8;
              case 8:
                return [2]
            }
          }))
        }))
      }

      function Ws(t, e, n) {
        return r.__awaiter(this, void 0, void 0, (function () {
          var i, o, s, u, a, c, h, f, p, l;
          return r.__generator(this, (function (d) {
            switch (d.label) {
              case 0:
                if (!(i = Hs(t)).qh) return [3, 10];
                o = 0, s = e, d.label = 1;
              case 1:
                return o < s.length ? (u = s[o], i.Fh.has(u) ? (y("SyncEngine", "Adding an already active target " + u), [3, 5]) : [4, Ao(i.ju, u)]) : [3, 6];
              case 2:
                return a = d.sent(), [4, Eo(i.ju, a)];
              case 3:
                return c = d.sent(), [4, _s(i, Bs(a), c.targetId, !1)];
              case 4:
                d.sent(), Wo(i.ph, c), d.label = 5;
              case 5:
                return o++, [3, 1];
              case 6:
                h = function (t) {
                  return r.__generator(this, (function (e) {
                    switch (e.label) {
                      case 0:
                        return i.Fh.has(t) ? [4, Io(i.ju, t, !1).then((function () {
                          Ho(i.ph, t), Os(i, t)
                        })).catch(Do)] : [3, 2];
                      case 1:
                        e.sent(), e.label = 2;
                      case 2:
                        return [2]
                    }
                  }))
                }, f = 0, p = n, d.label = 7;
              case 7:
                return f < p.length ? (l = p[f], [5, h(l)]) : [3, 10];
              case 8:
                d.sent(), d.label = 9;
              case 9:
                return f++, [3, 7];
              case 10:
                return [2]
            }
          }))
        }))
      }

      function Hs(t) {
        var e = E(t);
        return e.ph.Gu.sh = Is.bind(null, e), e.ph.Gu.qe = Vs.bind(null, e), e.ph.Gu.nh = As.bind(null, e), e.Ch.yu = Pr.bind(null, e.bh), e.Ch.Wh = Ur.bind(null, e.bh), e
      }

      function Ks(t) {
        var e = E(t);
        return e.ph.Gu.ih = Ns.bind(null, e), e.ph.Gu.rh = Ss.bind(null, e), e
      }

      var Qs = function () {
        function t() {
        }

        return t.prototype.Nc = function (t) {
          this.zh = t
        }, t.prototype.Lr = function (t, e, n, i) {
          var r = this;
          return function (t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.on.length || 1 === t.on.length && t.on[0].field.p())
          }(e) || n.isEqual(ct.min()) ? this.Hh(t, e) : this.zh.kr(t, i).next((function (s) {
            var u = r.Yh(e, s);
            return (Vn(e) || Mn(e)) && r.Eh(e.an, u, i, n) ? r.Hh(t, e) : (v() <= c.LogLevel.DEBUG && y("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), Xn(e)), r.zh.Lr(t, e, n).next((function (t) {
              return u.forEach((function (e) {
                t = t.ot(e.key, e)
              })), t
            })))
          }))
        }, t.prototype.Yh = function (t, e) {
          var n = new St(Jn(t));
          return e.forEach((function (e, r) {
            r instanceof Ln && Yn(t, r) && (n = n.add(r))
          })), n
        }, t.prototype.Eh = function (t, e, n, r) {
          if (n.size !== e.size) return !0;
          var i = "F" === t ? e.last() : e.first();
          return !!i && (i.hasPendingWrites || i.version.L(r) > 0)
        }, t.prototype.Hh = function (t, e) {
          return v() <= c.LogLevel.DEBUG && y("IndexFreeQueryEngine", "Using full collection scan to execute query:", Xn(e)), this.zh.Lr(t, e, ct.min())
        }, t
      }(), Xs = function () {
        function t(t, e) {
          this.Dr = t, this.No = e, this.Sr = [], this.Jh = 1, this.Xh = new St(Oo.kc)
        }

        return t.prototype.$o = function (t) {
          return yr.resolve(0 === this.Sr.length)
        }, t.prototype.ko = function (t, e, n, r) {
          var i = this.Jh;
          this.Jh++, this.Sr.length > 0 && this.Sr[this.Sr.length - 1];
          var o = new Jr(i, e, n, r);
          this.Sr.push(o);
          for (var s = 0, u = r; s < u.length; s++) {
            var a = u[s];
            this.Xh = this.Xh.add(new Oo(a.key, i)), this.Dr.Mo(t, a.key.path.h())
          }
          return yr.resolve(o)
        }, t.prototype.Oo = function (t, e) {
          return yr.resolve(this.Zh(e))
        }, t.prototype.Bo = function (t, e) {
          var n = e + 1, r = this.tl(n), i = r < 0 ? 0 : r;
          return yr.resolve(this.Sr.length > i ? this.Sr[i] : null)
        }, t.prototype.qo = function () {
          return yr.resolve(0 === this.Sr.length ? -1 : this.Jh - 1)
        }, t.prototype.Uo = function (t) {
          return yr.resolve(this.Sr.slice())
        }, t.prototype.Nr = function (t, e) {
          var n = this, r = new Oo(e, 0), i = new Oo(e, Number.POSITIVE_INFINITY), o = [];
          return this.Xh.Ft([r, i], (function (t) {
            var e = n.Zh(t.jc);
            o.push(e)
          })), yr.resolve(o)
        }, t.prototype.Or = function (t, e) {
          var n = this, r = new St(J);
          return e.forEach((function (t) {
            var e = new Oo(t, 0), i = new Oo(t, Number.POSITIVE_INFINITY);
            n.Xh.Ft([e, i], (function (t) {
              r = r.add(t.jc)
            }))
          })), yr.resolve(this.el(r))
        }, t.prototype.Wr = function (t, e) {
          var n = e.path, r = n.length + 1, i = n;
          x.F(i) || (i = i.child(""));
          var o = new Oo(new x(i), 0), s = new St(J);
          return this.Xh.xt((function (t) {
            var e = t.key.path;
            return !!n.T(e) && (e.length === r && (s = s.add(t.jc)), !0)
          }), o), yr.resolve(this.el(s))
        }, t.prototype.el = function (t) {
          var e = this, n = [];
          return t.forEach((function (t) {
            var r = e.Zh(t);
            null !== r && n.push(r)
          })), n
        }, t.prototype.Wo = function (t, e) {
          var n = this;
          g(0 === this.nl(e.batchId, "removed")), this.Sr.shift();
          var r = this.Xh;
          return yr.forEach(e.mutations, (function (i) {
            var o = new Oo(i.key, e.batchId);
            return r = r.delete(o), n.No.Go(t, i.key)
          })).next((function () {
            n.Xh = r
          }))
        }, t.prototype.Ko = function (t) {
        }, t.prototype.Ho = function (t, e) {
          var n = new Oo(e, 0), r = this.Xh.$t(n);
          return yr.resolve(e.isEqual(r && r.key))
        }, t.prototype.zo = function (t) {
          return this.Sr.length, yr.resolve()
        }, t.prototype.nl = function (t, e) {
          return this.tl(t)
        }, t.prototype.tl = function (t) {
          return 0 === this.Sr.length ? 0 : t - this.Sr[0].batchId
        }, t.prototype.Zh = function (t) {
          var e = this.tl(t);
          return e < 0 || e >= this.Sr.length ? null : this.Sr[e]
        }, t
      }(), Ys = function () {
        function t(t, e) {
          this.Dr = t, this.sl = e, this.docs = new Tt(x.i), this.size = 0
        }

        return t.prototype.Er = function (t, e, n) {
          var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.sl(e);
          return this.docs = this.docs.ot(r, {
            ta: e,
            size: s,
            readTime: n
          }), this.size += s - o, this.Dr.Mo(t, r.path.h())
        }, t.prototype.Ar = function (t) {
          var e = this.docs.get(t);
          e && (this.docs = this.docs.remove(t), this.size -= e.size)
        }, t.prototype.Rr = function (t, e) {
          var n = this.docs.get(e);
          return yr.resolve(n ? n.ta : null)
        }, t.prototype.getEntries = function (t, e) {
          var n = this, r = Lt();
          return e.forEach((function (t) {
            var e = n.docs.get(t);
            r = r.ot(t, e ? e.ta : null)
          })), yr.resolve(r)
        }, t.prototype.Lr = function (t, e, n) {
          for (var r = Ct(), i = new x(e.path.child("")), o = this.docs.ft(i); o.At();) {
            var s = o.It(), u = s.key, a = s.value, c = a.ta, h = a.readTime;
            if (!e.path.T(u.path)) break;
            h.L(n) <= 0 || c instanceof Ln && Yn(e, c) && (r = r.ot(c.key, c))
          }
          return yr.resolve(r)
        }, t.prototype.il = function (t, e) {
          return yr.forEach(this.docs, (function (t) {
            return e(t)
          }))
        }, t.prototype.ra = function (t) {
          return new Js(this)
        }, t.prototype.aa = function (t) {
          return yr.resolve(this.size)
        }, t
      }(), Js = function (t) {
        function e(e) {
          var n = this;
          return (n = t.call(this) || this).ca = e, n
        }

        return r.__extends(e, t), e.prototype.yr = function (t) {
          var e = this, n = [];
          return this.wr.forEach((function (r, i) {
            i ? n.push(e.ca.Er(t, i, e.readTime)) : e.ca.Ar(r)
          })), yr.$n(n)
        }, e.prototype.gr = function (t, e) {
          return this.ca.Rr(t, e)
        }, e.prototype.Pr = function (t, e) {
          return this.ca.getEntries(t, e)
        }, e
      }(Zr), $s = function () {
        function t(t) {
          this.persistence = t, this.rl = new ut((function (t) {
            return yt(t)
          }), gt), this.lastRemoteSnapshotVersion = ct.min(), this.highestTargetId = 0, this.ol = 0, this.al = new xo, this.targetCount = 0, this.cl = ro.fa()
        }

        return t.prototype.Ce = function (t, e) {
          return this.rl.forEach((function (t, n) {
            return e(n)
          })), yr.resolve()
        }, t.prototype.Ea = function (t) {
          return yr.resolve(this.lastRemoteSnapshotVersion)
        }, t.prototype.Ia = function (t) {
          return yr.resolve(this.ol)
        }, t.prototype.wa = function (t) {
          return this.highestTargetId = this.cl.next(), yr.resolve(this.highestTargetId)
        }, t.prototype.Aa = function (t, e, n) {
          return n && (this.lastRemoteSnapshotVersion = n), e > this.ol && (this.ol = e), yr.resolve()
        }, t.prototype.ga = function (t) {
          this.rl.set(t.target, t);
          var e = t.targetId;
          e > this.highestTargetId && (this.cl = new ro(e), this.highestTargetId = e), t.sequenceNumber > this.ol && (this.ol = t.sequenceNumber)
        }, t.prototype.Ra = function (t, e) {
          return this.ga(e), this.targetCount += 1, yr.resolve()
        }, t.prototype.ya = function (t, e) {
          return this.ga(e), yr.resolve()
        }, t.prototype.Va = function (t, e) {
          return this.rl.delete(e.target), this.al.Uc(e.targetId), this.targetCount -= 1, yr.resolve()
        }, t.prototype.po = function (t, e, n) {
          var r = this, i = 0, o = [];
          return this.rl.forEach((function (s, u) {
            u.sequenceNumber <= e && null === n.get(u.targetId) && (r.rl.delete(s), o.push(r.pa(t, u.targetId)), i++)
          })), yr.$n(o).next((function () {
            return i
          }))
        }, t.prototype.ba = function (t) {
          return yr.resolve(this.targetCount)
        }, t.prototype.va = function (t, e) {
          var n = this.rl.get(e) || null;
          return yr.resolve(n)
        }, t.prototype.Sa = function (t, e, n) {
          return this.al.Lc(e, n), yr.resolve()
        }, t.prototype.Ca = function (t, e, n) {
          this.al.qc(e, n);
          var r = this.persistence.No, i = [];
          return r && e.forEach((function (e) {
            i.push(r.Go(t, e))
          })), yr.$n(i)
        }, t.prototype.pa = function (t, e) {
          return this.al.Uc(e), yr.resolve()
        }, t.prototype.Fa = function (t, e) {
          var n = this.al.Wc(e);
          return yr.resolve(n)
        }, t.prototype.Ho = function (t, e) {
          return yr.resolve(this.al.Ho(e))
        }, t
      }(), Zs = function () {
        function t(t) {
          var e = this;
          this.ul = {}, this.Ma = new jr(0), this.Oa = !1, this.Oa = !0, this.No = t(this), this.Ka = new $s(this), this.Dr = new Ui, this.vr = function (t, n) {
            return new Ys(t, (function (t) {
              return e.No.hl(t)
            }))
          }(this.Dr)
        }

        return t.prototype.start = function () {
          return Promise.resolve()
        }, t.prototype.Di = function () {
          return this.Oa = !1, Promise.resolve()
        }, Object.defineProperty(t.prototype, "Ei", {
          get: function () {
            return this.Oa
          }, enumerable: !1, configurable: !0
        }), t.prototype.Za = function () {
        }, t.prototype.tc = function () {
        }, t.prototype.Ic = function () {
          return this.Dr
        }, t.prototype.mc = function (t) {
          var e = this.ul[t.ti()];
          return e || (e = new Xs(this.Dr, this.No), this.ul[t.ti()] = e), e
        }, t.prototype.Tc = function () {
          return this.Ka
        }, t.prototype.Ec = function () {
          return this.vr
        }, t.prototype.runTransaction = function (t, e, n) {
          var r = this;
          y("MemoryPersistence", "Starting transaction:", t);
          var i = new tu(this.Ma.next());
          return this.No.ll(), n(i).next((function (t) {
            return r.No._l(i).next((function () {
              return t
            }))
          })).Fn().then((function (t) {
            return i.br(), t
          }))
        }, t.prototype.fl = function (t, e) {
          return yr.kn(Object.values(this.ul).map((function (n) {
            return function () {
              return n.Ho(t, e)
            }
          })))
        }, t
      }(), tu = function (t) {
        function e(e) {
          var n = this;
          return (n = t.call(this) || this).xa = e, n
        }

        return r.__extends(e, t), e
      }(ei), eu = function () {
        function t(t) {
          this.persistence = t, this.dl = new xo, this.wl = null
        }

        return t.ml = function (e) {
          return new t(e)
        }, Object.defineProperty(t.prototype, "Tl", {
          get: function () {
            if (this.wl) return this.wl;
            throw _()
          }, enumerable: !1, configurable: !0
        }), t.prototype.Da = function (t, e, n) {
          return this.dl.Da(n, e), this.Tl.delete(n.toString()), yr.resolve()
        }, t.prototype.Na = function (t, e, n) {
          return this.dl.Na(n, e), this.Tl.add(n.toString()), yr.resolve()
        }, t.prototype.Go = function (t, e) {
          return this.Tl.add(e.toString()), yr.resolve()
        }, t.prototype.removeTarget = function (t, e) {
          var n = this;
          this.dl.Uc(e.targetId).forEach((function (t) {
            return n.Tl.add(t.toString())
          }));
          var r = this.persistence.Tc();
          return r.Fa(t, e.targetId).next((function (t) {
            t.forEach((function (t) {
              return n.Tl.add(t.toString())
            }))
          })).next((function () {
            return r.Va(t, e)
          }))
        }, t.prototype.ll = function () {
          this.wl = new Set
        }, t.prototype._l = function (t) {
          var e = this, n = this.persistence.Ec().ra();
          return yr.forEach(this.Tl, (function (r) {
            var i = x.D(r);
            return e.El(t, i).next((function (t) {
              t || n.Ar(i)
            }))
          })).next((function () {
            return e.wl = null, n.apply(t)
          }))
        }, t.prototype.yc = function (t, e) {
          var n = this;
          return this.El(t, e).next((function (t) {
            t ? n.Tl.delete(e.toString()) : n.Tl.add(e.toString())
          }))
        }, t.prototype.hl = function (t) {
          return 0
        }, t.prototype.El = function (t, e) {
          var n = this;
          return yr.kn([function () {
            return yr.resolve(n.dl.Ho(e))
          }, function () {
            return n.persistence.Tc().Ho(t, e)
          }, function () {
            return n.persistence.fl(t, e)
          }])
        }, t
      }(), nu = function () {
        function t(t) {
          this.Il = t.Il, this.Al = t.Al
        }

        return t.prototype.gu = function (t) {
          this.Rl = t
        }, t.prototype.Tu = function (t) {
          this.gl = t
        }, t.prototype.onMessage = function (t) {
          this.Pl = t
        }, t.prototype.close = function () {
          this.Al()
        }, t.prototype.send = function (t) {
          this.Il(t)
        }, t.prototype.yl = function () {
          this.Rl()
        }, t.prototype.Vl = function (t) {
          this.gl(t)
        }, t.prototype.pl = function (t) {
          this.Pl(t)
        }, t
      }(), ru = {BatchGetDocuments: "batchGet", Commit: "commit", RunQuery: "runQuery"}, iu = function (t) {
        function e(e) {
          var n = this;
          return (n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling, n.W = e.W, n
        }

        return r.__extends(e, t), e.prototype.Nl = function (t, e, n, r) {
          return new Promise((function (o, s) {
            var u = new i.XhrIo;
            u.listenOnce(i.EventType.COMPLETE, (function () {
              try {
                switch (u.getLastErrorCode()) {
                  case i.ErrorCode.NO_ERROR:
                    var e = u.getResponseJson();
                    y("Connection", "XHR received:", JSON.stringify(e)), o(e);
                    break;
                  case i.ErrorCode.TIMEOUT:
                    y("Connection", 'RPC "' + t + '" timed out'), s(new l(a.DEADLINE_EXCEEDED, "Request time out"));
                    break;
                  case i.ErrorCode.HTTP_ERROR:
                    var n = u.getStatus();
                    if (y("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), n > 0) {
                      var r = u.getResponseJson().error;
                      if (r && r.status && r.message) {
                        var c = function (t) {
                          var e = t.toLowerCase().replace("_", "-");
                          return Object.values(a).indexOf(e) >= 0 ? e : a.UNKNOWN
                        }(r.status);
                        s(new l(c, r.message))
                      } else s(new l(a.UNKNOWN, "Server responded with status " + u.getStatus()))
                    } else s(new l(a.UNAVAILABLE, "Connection failed."));
                    break;
                  default:
                    _()
                }
              } finally {
                y("Connection", 'RPC "' + t + '" completed.')
              }
            }));
            var c = JSON.stringify(r);
            u.send(e, "POST", c, n, 15)
          }))
        }, e.prototype.Pu = function (t, e) {
          var n = [this.vl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
            r = i.createWebChannelTransport(), s = {
              httpSessionIdParam: "gsessionid",
              initMessageHeaders: {},
              messageUrlParams: {database: "projects/" + this.U.projectId + "/databases/" + this.U.database},
              sendRawJson: !0,
              supportsCrossDomainXhr: !0,
              internalChannelParams: {forwardChannelRequestTimeoutMs: 6e5},
              forceLongPolling: this.forceLongPolling,
              detectBufferingProxy: this.W
            };
          this.Cl(s.initMessageHeaders, e), h.isMobileCordova() || h.isReactNative() || h.isElectron() || h.isIE() || h.isUWP() || h.isBrowserExtension() || (s.httpHeadersOverwriteParam = "$httpHeaders");
          var u = n.join("");
          y("Connection", "Creating WebChannel: " + u, s);
          var o = r.createWebChannel(u, s), c = !1, p = !1, f = new nu({
            Il: function (t) {
              p ? y("Connection", "Not sending because WebChannel is closed:", t) : (c || (y("Connection", "Opening WebChannel transport."), o.open(), c = !0), y("Connection", "WebChannel sending:", t), o.send(t))
            }, Al: function () {
              return o.close()
            }
          }), d = function (t, e) {
            o.listen(t, (function (t) {
              try {
                e(t)
              } catch (t) {
                setTimeout((function () {
                  throw t
                }), 0)
              }
            }))
          };
          return d(i.WebChannel.EventType.OPEN, (function () {
            p || y("Connection", "WebChannel transport opened.")
          })), d(i.WebChannel.EventType.CLOSE, (function () {
            p || (p = !0, y("Connection", "WebChannel transport closed"), f.Vl())
          })), d(i.WebChannel.EventType.ERROR, (function (t) {
            p || (p = !0, m("Connection", "WebChannel transport errored:", t), f.Vl(new l(a.UNAVAILABLE, "The operation could not be completed")))
          })), d(i.WebChannel.EventType.MESSAGE, (function (t) {
            var e;
            if (!p) {
              var n = t.data[0];
              g(!!n);
              var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
              if (i) {
                y("Connection", "WebChannel received error:", i);
                var c = i.status, s = function (t) {
                  var e = mt[t];
                  if (void 0 !== e) return It(e)
                }(c), u = i.message;
                void 0 === s && (s = a.INTERNAL, u = "Unknown error status: " + c + " with message " + i.message), p = !0, f.Vl(new l(s, u)), o.close()
              } else y("Connection", "WebChannel received:", n), f.pl(n)
            }
          })), setTimeout((function () {
            f.yl()
          }), 0), f
        }, e
      }(function () {
        function t(t) {
          this.bl = t, this.U = t.U;
          var e = t.ssl ? "https" : "http";
          this.vl = e + "://" + t.host, this.Sl = "projects/" + this.U.projectId + "/databases/" + this.U.database + "/documents"
        }

        return t.prototype.$u = function (t, e, n, r) {
          var i = this.Dl(t, e);
          y("RestConnection", "Sending: ", i, n);
          var o = {};
          return this.Cl(o, r), this.Nl(t, i, o, n).then((function (t) {
            return y("RestConnection", "Received: ", t), t
          }), (function (e) {
            throw m("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), e
          }))
        }, t.prototype.ku = function (t, e, n, r) {
          return this.$u(t, e, n, r)
        }, t.prototype.Cl = function (t, e) {
          if (t["X-Goog-Api-Client"] = "gl-js/ fire/7.24.0", t["Content-Type"] = "text/plain", e) for (var n in e.Kc) e.Kc.hasOwnProperty(n) && (t[n] = e.Kc[n])
        }, t.prototype.Dl = function (t, e) {
          var n = ru[t];
          return this.vl + "/v1/" + e + ":" + n
        }, t
      }()), ou = function () {
        function t() {
          var t = this;
          this.Fl = function () {
            return t.xl()
          }, this.$l = function () {
            return t.kl()
          }, this.Ml = [], this.Ol()
        }

        return t.prototype.Zu = function (t) {
          this.Ml.push(t)
        }, t.prototype.Di = function () {
          window.removeEventListener("online", this.Fl), window.removeEventListener("offline", this.$l)
        }, t.prototype.Ol = function () {
          window.addEventListener("online", this.Fl), window.addEventListener("offline", this.$l)
        }, t.prototype.xl = function () {
          y("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
          for (var t = 0, e = this.Ml; t < e.length; t++) (0, e[t])(0)
        }, t.prototype.kl = function () {
          y("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
          for (var t = 0, e = this.Ml; t < e.length; t++) (0, e[t])(1)
        }, t.Ln = function () {
          return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener
        }, t
      }(), su = function () {
        function t() {
        }

        return t.prototype.Zu = function (t) {
        }, t.prototype.Di = function () {
        }, t
      }();

      function uu(t) {
        return new ge(t, !0)
      }

      var au = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.",
        cu = function () {
          function t() {
          }

          return t.prototype.initialize = function (t) {
            return r.__awaiter(this, void 0, void 0, (function () {
              return r.__generator(this, (function (e) {
                switch (e.label) {
                  case 0:
                    return this.Sh = this.Ll(t), this.persistence = this.Bl(t), [4, this.persistence.start()];
                  case 1:
                    return e.sent(), this.ql = this.Ul(t), this.ju = this.Ql(t), [2]
                }
              }))
            }))
          }, t.prototype.Ul = function (t) {
            return null
          }, t.prototype.Ql = function (t) {
            return e = this.persistence, n = new Qs, r = t.Wl, new go(e, n, r);
            var e, n, r
          }, t.prototype.Bl = function (t) {
            if (t.persistenceSettings.jl) throw new l(a.FAILED_PRECONDITION, au);
            return new Zs(eu.ml)
          }, t.prototype.Ll = function (t) {
            return new Yr
          }, t.prototype.terminate = function () {
            return r.__awaiter(this, void 0, void 0, (function () {
              return r.__generator(this, (function (t) {
                switch (t.label) {
                  case 0:
                    return this.ql && this.ql.stop(), [4, this.Sh.Di()];
                  case 1:
                    return t.sent(), [4, this.persistence.Di()];
                  case 2:
                    return t.sent(), [2]
                }
              }))
            }))
          }, t.prototype.clearPersistence = function (t, e) {
            throw new l(a.FAILED_PRECONDITION, au)
          }, t
        }(), hu = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }

          return r.__extends(e, t), e.prototype.initialize = function (e) {
            return r.__awaiter(this, void 0, void 0, (function () {
              var n, i = this;
              return r.__generator(this, (function (o) {
                switch (o.label) {
                  case 0:
                    return [4, t.prototype.initialize.call(this, e)];
                  case 1:
                    return o.sent(), n = this.Kl.fi, this.Sh instanceof Xr ? (this.Sh.fi = {
                      er: Fs.bind(null, n),
                      nr: zs.bind(null, n),
                      sr: Ws.bind(null, n),
                      pi: Gs.bind(null, n)
                    }, [4, this.Sh.start()]) : [3, 3];
                  case 2:
                    o.sent(), o.label = 3;
                  case 3:
                    return [4, this.persistence.Xa((function (t) {
                      return r.__awaiter(i, void 0, void 0, (function () {
                        return r.__generator(this, (function (e) {
                          switch (e.label) {
                            case 0:
                              return [4, js(this.Kl.fi, t)];
                            case 1:
                              return e.sent(), this.ql && (t && !this.ql.Ei ? this.ql.start(this.ju) : t || this.ql.stop()), [2]
                          }
                        }))
                      }))
                    }))];
                  case 4:
                    return o.sent(), [2]
                }
              }))
            }))
          }, e.prototype.Ll = function (t) {
            if (t.persistenceSettings.jl && t.persistenceSettings.synchronizeTabs) {
              var e = Nr();
              if (!Xr.Ln(e)) throw new l(a.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
              var n = yo(t.bl.U, t.bl.persistenceKey);
              return new Xr(e, t.cs, n, t.clientId, t.Wl)
            }
            return new Yr
          }, e
        }(function (t) {
          function e(e) {
            var n = this;
            return (n = t.call(this) || this).Kl = e, n
          }

          return r.__extends(e, t), e.prototype.initialize = function (e) {
            return r.__awaiter(this, void 0, void 0, (function () {
              return r.__generator(this, (function (n) {
                switch (n.label) {
                  case 0:
                    return [4, t.prototype.initialize.call(this, e)];
                  case 1:
                    return n.sent(), [4, So(this.ju)];
                  case 2:
                    return n.sent(), [4, this.Kl.initialize(this, e)];
                  case 3:
                    return n.sent(), [4, Ks(this.Kl.fi)];
                  case 4:
                    return n.sent(), [4, is(this.Kl.ph)];
                  case 5:
                    return n.sent(), [2]
                }
              }))
            }))
          }, e.prototype.Ul = function (t) {
            var e = this.persistence.No.wo;
            return new ai(e, t.cs)
          }, e.prototype.Bl = function (t) {
            var e = yo(t.bl.U, t.bl.persistenceKey), n = uu(t.bl.U);
            return new ho(t.persistenceSettings.synchronizeTabs, e, t.clientId, ui.ao(t.persistenceSettings.cacheSizeBytes), t.cs, Nr(), Sr(), n, this.Sh, t.persistenceSettings.ka)
          }, e.prototype.Ll = function (t) {
            return new Yr
          }, e.prototype.clearPersistence = function (t, e) {
            return function (t) {
              return r.__awaiter(this, void 0, void 0, (function () {
                var e;
                return r.__generator(this, (function (n) {
                  switch (n.label) {
                    case 0:
                      return gr.Ln() ? (e = t + "main", [4, gr.delete(e)]) : [2, Promise.resolve()];
                    case 1:
                      return n.sent(), [2]
                  }
                }))
              }))
            }(yo(t, e))
          }, e
        }(cu)), fu = function () {
          function t() {
          }

          return t.prototype.initialize = function (t, e) {
            return r.__awaiter(this, void 0, void 0, (function () {
              var n = this;
              return r.__generator(this, (function (r) {
                switch (r.label) {
                  case 0:
                    return this.ju ? [3, 2] : (this.ju = t.ju, this.Sh = t.Sh, this.Ku = this.Gl(e), this.ph = this.zl(e), this.bh = this.Hl(e), this.fi = this.Yl(e), this.Sh.di = function (t) {
                      return Ts(n.fi, t, 1)
                    }, this.ph.Gu.Jl = Us.bind(null, this.fi), [4, fs(this.ph, this.fi.Uh)]);
                  case 1:
                    r.sent(), r.label = 2;
                  case 2:
                    return [2]
                }
              }))
            }))
          }, t.prototype.Hl = function (t) {
            return new kr
          }, t.prototype.Gl = function (t) {
            var e, n = uu(t.bl.U), r = (e = t.bl, new iu(e));
            return function (t, e, n) {
              return new Fo(t, e, n)
            }(t.credentials, r, n)
          }, t.prototype.zl = function (t) {
            var e, n, r, i, o, s = this;
            return e = this.ju, n = this.Ku, r = t.cs, i = function (t) {
              return Ts(s.fi, t, 0)
            }, o = ou.Ln() ? new ou : new su, new qo(e, n, r, i, o)
          }, t.prototype.Yl = function (t) {
            return function (t, e, n, r, i, o, s) {
              var u = new ws(t, e, n, r, i, o);
              return s && (u.qh = !0), u
            }(this.ju, this.ph, this.bh, this.Sh, t.Wl, t.Dh, !t.persistenceSettings.jl || !t.persistenceSettings.synchronizeTabs)
          }, t.prototype.terminate = function () {
            return zo(this.ph)
          }, t
        }(), lu = function () {
          function t(t) {
            this.observer = t, this.muted = !1
          }

          return t.prototype.next = function (t) {
            this.observer.next && this.Xl(this.observer.next, t)
          }, t.prototype.error = function (t) {
            this.observer.error ? this.Xl(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t)
          }, t.prototype.Zl = function () {
            this.muted = !0
          }, t.prototype.Xl = function (t, e) {
            var n = this;
            this.muted || setTimeout((function () {
              n.muted || t(e)
            }), 0)
          }, t
        }(), pu = function (t) {
          !function (t, e, n, r) {
            if (!(e instanceof Array) || e.length < 1) throw new l(a.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + Q(1, "element") + ".")
          }(0, t);
          for (var e = 0; e < t.length; ++e) if (R("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new l(a.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
          this.t_ = new D(t)
        }, du = function (t) {
          function e() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return t.call(this, e) || this
          }

          return r.__extends(e, t), e.documentId = function () {
            return new e(D.v().R())
          }, e.prototype.isEqual = function (t) {
            if (!(t instanceof e)) throw W("isEqual", "FieldPath", 1, t);
            return this.t_.isEqual(t.t_)
          }, e
        }(pu), vu = new RegExp("[~\\*/\\[\\]]"), yu = function (t) {
          this.e_ = t
        }, gu = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }

          return r.__extends(e, t), e.prototype.n_ = function (t) {
            if (2 !== t.s_) throw 1 === t.s_ ? t.i_(this.e_ + "() can only appear at the top level of your update data") : t.i_(this.e_ + "() cannot be used with set() unless you pass {merge:true}");
            return t.We.push(t.path), null
          }, e.prototype.isEqual = function (t) {
            return t instanceof e
          }, e
        }(yu);

      function mu(t, e, n) {
        return new Ou({
          s_: 3,
          r_: e.settings.r_,
          methodName: t.e_,
          o_: n
        }, e.U, e.serializer, e.ignoreUndefinedProperties)
      }

      var wu = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this
        }

        return r.__extends(e, t), e.prototype.n_ = function (t) {
          return new cn(t.path, new Ze)
        }, e.prototype.isEqual = function (t) {
          return t instanceof e
        }, e
      }(yu), bu = function (t) {
        function e(e, n) {
          var r = this;
          return (r = t.call(this, e) || this).a_ = n, r
        }

        return r.__extends(e, t), e.prototype.n_ = function (t) {
          var e = mu(this, t, !0), n = this.a_.map((function (t) {
            return Uu(t, e)
          })), r = new tn(n);
          return new cn(t.path, r)
        }, e.prototype.isEqual = function (t) {
          return this === t
        }, e
      }(yu), _u = function (t) {
        function e(e, n) {
          var r = this;
          return (r = t.call(this, e) || this).a_ = n, r
        }

        return r.__extends(e, t), e.prototype.n_ = function (t) {
          var e = mu(this, t, !0), n = this.a_.map((function (t) {
            return Uu(t, e)
          })), r = new nn(n);
          return new cn(t.path, r)
        }, e.prototype.isEqual = function (t) {
          return this === t
        }, e
      }(yu), Eu = function (t) {
        function e(e, n) {
          var r = this;
          return (r = t.call(this, e) || this).c_ = n, r
        }

        return r.__extends(e, t), e.prototype.n_ = function (t) {
          var e = new on(t.serializer, be(t.serializer, this.c_));
          return new cn(t.path, e)
        }, e.prototype.isEqual = function (t) {
          return this === t
        }, e
      }(yu), Iu = function () {
        function t(t, e) {
          if (L("GeoPoint", arguments, 2), R("GeoPoint", "number", 1, t), R("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || t > 90) throw new l(a.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
          if (!isFinite(e) || e < -180 || e > 180) throw new l(a.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
          this.u_ = t, this.h_ = e
        }

        return Object.defineProperty(t.prototype, "latitude", {
          get: function () {
            return this.u_
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "longitude", {
          get: function () {
            return this.h_
          }, enumerable: !1, configurable: !0
        }), t.prototype.isEqual = function (t) {
          return this.u_ === t.u_ && this.h_ === t.h_
        }, t.prototype.toJSON = function () {
          return {latitude: this.u_, longitude: this.h_}
        }, t.prototype.Y = function (t) {
          return J(this.u_, t.u_) || J(this.h_, t.h_)
        }, t
      }(), Tu = function (t) {
        this.l_ = t
      }, Au = /^__.*__$/, Nu = function (t, e, n) {
        this.__ = t, this.f_ = e, this.d_ = n
      }, Su = function () {
        function t(t, e, n) {
          this.data = t, this.We = e, this.fieldTransforms = n
        }

        return t.prototype.w_ = function (t, e) {
          var n = [];
          return null !== this.We ? n.push(new bn(t, this.data, this.We, e)) : n.push(new wn(t, this.data, e)), this.fieldTransforms.length > 0 && n.push(new En(t, this.fieldTransforms)), n
        }, t
      }(), Du = function () {
        function t(t, e, n) {
          this.data = t, this.We = e, this.fieldTransforms = n
        }

        return t.prototype.w_ = function (t, e) {
          var n = [new bn(t, this.data, this.We, e)];
          return this.fieldTransforms.length > 0 && n.push(new En(t, this.fieldTransforms)), n
        }, t
      }();

      function xu(t) {
        switch (t) {
          case 0:
          case 2:
          case 1:
            return !0;
          case 3:
          case 4:
            return !1;
          default:
            throw _()
        }
      }

      var Ou = function () {
        function t(t, e, n, r, i, o) {
          this.settings = t, this.U = e, this.serializer = n, this.ignoreUndefinedProperties = r, void 0 === i && this.m_(), this.fieldTransforms = i || [], this.We = o || []
        }

        return Object.defineProperty(t.prototype, "path", {
          get: function () {
            return this.settings.path
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "s_", {
          get: function () {
            return this.settings.s_
          }, enumerable: !1, configurable: !0
        }), t.prototype.T_ = function (e) {
          return new t(Object.assign(Object.assign({}, this.settings), e), this.U, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.We)
        }, t.prototype.E_ = function (t) {
          var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.T_({path: n, o_: !1});
          return r.I_(t), r
        }, t.prototype.A_ = function (t) {
          var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.T_({path: n, o_: !1});
          return r.m_(), r
        }, t.prototype.R_ = function (t) {
          return this.T_({path: void 0, o_: !0})
        }, t.prototype.i_ = function (t) {
          return Bu(t, this.settings.methodName, this.settings.g_ || !1, this.path, this.settings.r_)
        }, t.prototype.contains = function (t) {
          return void 0 !== this.We.find((function (e) {
            return t.T(e)
          })) || void 0 !== this.fieldTransforms.find((function (e) {
            return t.T(e.field)
          }))
        }, t.prototype.m_ = function () {
          if (this.path) for (var t = 0; t < this.path.length; t++) this.I_(this.path.get(t))
        }, t.prototype.I_ = function (t) {
          if (0 === t.length) throw this.i_("Document fields must not be empty");
          if (xu(this.s_) && Au.test(t)) throw this.i_('Document fields cannot begin and end with "__"')
        }, t
      }(), Lu = function () {
        function t(t, e, n) {
          this.U = t, this.ignoreUndefinedProperties = e, this.serializer = n || uu(t)
        }

        return t.prototype.P_ = function (t, e, n, r) {
          return void 0 === r && (r = !1), new Ou({
            s_: t,
            methodName: e,
            r_: n,
            path: D.P(),
            o_: !1,
            g_: r
          }, this.U, this.serializer, this.ignoreUndefinedProperties)
        }, t
      }();

      function ku(t, e, n, r, i, o) {
        void 0 === o && (o = {});
        var s = t.P_(o.merge || o.mergeFields ? 2 : 0, e, n, i);
        Fu("Data must be an object, but it was:", s, r);
        var u, c, h = Vu(r, s);
        if (o.merge) u = new an(s.We), c = s.fieldTransforms; else if (o.mergeFields) {
          for (var f = [], p = 0, d = o.mergeFields; p < d.length; p++) {
            var v = d[p], g = void 0;
            if (v instanceof pu) g = v.t_; else {
              if ("string" != typeof v) throw _();
              g = qu(e, v, n)
            }
            if (!s.contains(g)) throw new l(a.INVALID_ARGUMENT, "Field '" + g + "' is specified in your field mask but missing from your input data.");
            Gu(f, g) || f.push(g)
          }
          u = new an(f), c = s.fieldTransforms.filter((function (t) {
            return u.Ye(t.field)
          }))
        } else u = null, c = s.fieldTransforms;
        return new Su(new Sn(h), u, c)
      }

      function Cu(t, e, n, r) {
        var i = t.P_(1, e, n);
        Fu("Data must be an object, but it was:", i, r);
        var o = [], s = new Dn;
        T(r, (function (t, r) {
          var u = qu(e, t, n), a = i.A_(u);
          if (r instanceof gu || r instanceof Tu && r.l_ instanceof gu) o.push(u); else {
            var c = Uu(r, a);
            null != c && (o.push(u), s.set(u, c))
          }
        }));
        var u = new an(o);
        return new Du(s.Xe(), u, i.fieldTransforms)
      }

      function Ru(t, e, n, r, i, o) {
        var s = t.P_(1, e, n), u = [ju(e, r, n)], c = [i];
        if (o.length % 2 != 0) throw new l(a.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
        for (var h = 0; h < o.length; h += 2) u.push(ju(e, o[h])), c.push(o[h + 1]);
        for (var f = [], p = new Dn, d = u.length - 1; d >= 0; --d) if (!Gu(f, u[d])) {
          var v = u[d], y = c[d], g = s.A_(v);
          if (y instanceof gu || y instanceof Tu && y.l_ instanceof gu) f.push(v); else {
            var m = Uu(y, g);
            null != m && (f.push(v), p.set(v, m))
          }
        }
        var w = new an(f);
        return new Du(p.Xe(), w, s.fieldTransforms)
      }

      function Pu(t, e, n, r) {
        return void 0 === r && (r = !1), Uu(n, t.P_(r ? 4 : 3, e))
      }

      function Uu(t, e) {
        if (t instanceof Tu && (t = t.l_), Mu(t)) return Fu("Unsupported field value:", e, t), Vu(t, e);
        if (t instanceof yu) return function (t, e) {
          if (!xu(e.s_)) throw e.i_(t.e_ + "() can only be used with update() and set()");
          if (!e.path) throw e.i_(t.e_ + "() is not currently supported inside arrays");
          var n = t.n_(e);
          n && e.fieldTransforms.push(n)
        }(t, e), null;
        if (e.path && e.We.push(e.path), t instanceof Array) {
          if (e.settings.o_ && 4 !== e.s_) throw e.i_("Nested arrays are not supported");
          return function (t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
              var s = Uu(o[i], e.R_(r));
              null == s && (s = {nullValue: "NULL_VALUE"}), n.push(s), r++
            }
            return {arrayValue: {values: n}}
          }(t, e)
        }
        return function (t, e) {
          if (null === t) return {nullValue: "NULL_VALUE"};
          if ("number" == typeof t) return be(e.serializer, t);
          if ("boolean" == typeof t) return {booleanValue: t};
          if ("string" == typeof t) return {stringValue: t};
          if (t instanceof Date) {
            var n = at.fromDate(t);
            return {timestampValue: _e(e.serializer, n)}
          }
          if (t instanceof at) {
            var r = new at(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {timestampValue: _e(e.serializer, r)}
          }
          if (t instanceof Iu) return {geoPointValue: {latitude: t.latitude, longitude: t.longitude}};
          if (t instanceof et) return {bytesValue: Ee(e.serializer, t.q)};
          if (t instanceof Nu) {
            var i = e.U, o = t.__;
            if (!o.isEqual(i)) throw e.i_("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
            return {referenceValue: Ae(t.__ || e.U, t.f_.path)}
          }
          if (void 0 === t && e.ignoreUndefinedProperties) return null;
          throw e.i_("Unsupported field value: " + G(t))
        }(t, e)
      }

      function Vu(t, e) {
        var n = {};
        return b(t) ? e.path && e.path.length > 0 && e.We.push(e.path) : T(t, (function (t, r) {
          var i = Uu(r, e.E_(t));
          null != i && (n[t] = i)
        })), {mapValue: {fields: n}}
      }

      function Mu(t) {
        return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof at || t instanceof Iu || t instanceof et || t instanceof Nu || t instanceof yu)
      }

      function Fu(t, e, n) {
        if (!Mu(n) || !B(n)) {
          var r = G(n);
          throw"an object" === r ? e.i_(t + " a custom object") : e.i_(t + " " + r)
        }
      }

      function ju(t, e, n) {
        if (e instanceof pu) return e.t_;
        if ("string" == typeof e) return qu(t, e);
        throw Bu("Field path arguments must be of type string or FieldPath.", t, !1, void 0, n)
      }

      function qu(t, e, n) {
        try {
          return function (t) {
            if (t.search(vu) >= 0) throw new l(a.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
              return new (du.bind.apply(du, r.__spreadArrays([void 0], t.split("."))))
            } catch (e) {
              throw new l(a.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'")
            }
          }(e).t_
        } catch (e) {
          throw Bu((i = e) instanceof Error ? i.message : i.toString(), t, !1, void 0, n)
        }
        var i
      }

      function Bu(t, e, n, r, i) {
        var o = r && !r.m(), s = void 0 !== i, u = "Function " + e + "() called with invalid data";
        n && (u += " (via `toFirestore()`)");
        var c = "";
        return (o || s) && (c += " (found", o && (c += " in field " + r), s && (c += " in document " + i), c += ")"), new l(a.INVALID_ARGUMENT, (u += ". ") + t + c)
      }

      function Gu(t, e) {
        return t.some((function (t) {
          return t.isEqual(e)
        }))
      }

      var zu = function () {
        function t(t) {
          this.Ku = t, this.y_ = new Map, this.mutations = [], this.V_ = !1, this.p_ = null, this.b_ = new Set
        }

        return t.prototype.v_ = function (t) {
          return r.__awaiter(this, void 0, void 0, (function () {
            var e, n = this;
            return r.__generator(this, (function (i) {
              switch (i.label) {
                case 0:
                  if (this.S_(), this.mutations.length > 0) throw new l(a.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                  return [4, function (t, e) {
                    return r.__awaiter(this, void 0, void 0, (function () {
                      var n, i, o, s, u, a;
                      return r.__generator(this, (function (r) {
                        switch (r.label) {
                          case 0:
                            return n = E(t), i = Le(n.serializer) + "/documents", o = {
                              documents: e.map((function (t) {
                                return Se(n.serializer, t)
                              }))
                            }, [4, n.ku("BatchGetDocuments", i, o)];
                          case 1:
                            return s = r.sent(), u = new Map, s.forEach((function (t) {
                              var e = function (t, e) {
                                return "found" in e ? function (t, e) {
                                  g(!!e.found), e.found.name, e.found.updateTime;
                                  var n = De(t, e.found.name), r = Te(e.found.updateTime),
                                    i = new Sn({mapValue: {fields: e.found.fields}});
                                  return new Ln(n, r, i, {})
                                }(t, e) : "missing" in e ? function (t, e) {
                                  g(!!e.missing), g(!!e.readTime);
                                  var n = De(t, e.missing), r = Te(e.readTime);
                                  return new kn(n, r)
                                }(t, e) : _()
                              }(n.serializer, t);
                              u.set(e.key.toString(), e)
                            })), a = [], [2, (e.forEach((function (t) {
                              var e = u.get(t.toString());
                              g(!!e), a.push(e)
                            })), a)]
                        }
                      }))
                    }))
                  }(this.Ku, t)];
                case 1:
                  return [2, ((e = i.sent()).forEach((function (t) {
                    t instanceof kn || t instanceof Ln ? n.D_(t) : _()
                  })), e)]
              }
            }))
          }))
        }, t.prototype.set = function (t, e) {
          this.write(e.w_(t, this.Ge(t))), this.b_.add(t.toString())
        }, t.prototype.update = function (t, e) {
          try {
            this.write(e.w_(t, this.C_(t)))
          } catch (t) {
            this.p_ = t
          }
          this.b_.add(t.toString())
        }, t.prototype.delete = function (t) {
          this.write([new An(t, this.Ge(t))]), this.b_.add(t.toString())
        }, t.prototype.commit = function () {
          return r.__awaiter(this, void 0, void 0, (function () {
            var t, e = this;
            return r.__generator(this, (function (n) {
              switch (n.label) {
                case 0:
                  if (this.S_(), this.p_) throw this.p_;
                  return t = this.y_, this.mutations.forEach((function (e) {
                    t.delete(e.key.toString())
                  })), t.forEach((function (t, n) {
                    var r = x.D(n);
                    e.mutations.push(new Nn(r, e.Ge(r)))
                  })), [4, function (t, e) {
                    return r.__awaiter(this, void 0, void 0, (function () {
                      var n, i, o;
                      return r.__generator(this, (function (r) {
                        switch (r.label) {
                          case 0:
                            return n = E(t), i = Le(n.serializer) + "/documents", o = {
                              writes: e.map((function (t) {
                                return Re(n.serializer, t)
                              }))
                            }, [4, n.$u("Commit", i, o)];
                          case 1:
                            return r.sent(), [2]
                        }
                      }))
                    }))
                  }(this.Ku, this.mutations)];
                case 1:
                  return n.sent(), this.V_ = !0, [2]
              }
            }))
          }))
        }, t.prototype.D_ = function (t) {
          var e;
          if (t instanceof Ln) e = t.version; else {
            if (!(t instanceof kn)) throw _();
            e = ct.min()
          }
          var n = this.y_.get(t.key.toString());
          if (n) {
            if (!e.isEqual(n)) throw new l(a.ABORTED, "Document version changed between two reads.")
          } else this.y_.set(t.key.toString(), e)
        }, t.prototype.Ge = function (t) {
          var e = this.y_.get(t.toString());
          return !this.b_.has(t.toString()) && e ? fn.updateTime(e) : fn.ze()
        }, t.prototype.C_ = function (t) {
          var e = this.y_.get(t.toString());
          if (!this.b_.has(t.toString()) && e) {
            if (e.isEqual(ct.min())) throw new l(a.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            return fn.updateTime(e)
          }
          return fn.exists(!0)
        }, t.prototype.write = function (t) {
          this.S_(), this.mutations = this.mutations.concat(t)
        }, t.prototype.S_ = function () {
        }, t
      }(), Wu = function () {
        function t(t, e, n, r) {
          this.cs = t, this.Ku = e, this.updateFunction = n, this.ls = r, this.N_ = 5, this.ys = new vr(this.cs, "transaction_retry")
        }

        return t.prototype.run = function () {
          this.F_()
        }, t.prototype.F_ = function () {
          var t = this;
          this.ys.gn((function () {
            return r.__awaiter(t, void 0, void 0, (function () {
              var t, e, n = this;
              return r.__generator(this, (function (r) {
                return t = new zu(this.Ku), (e = this.x_(t)) && e.then((function (e) {
                  n.cs.ws((function () {
                    return t.commit().then((function () {
                      n.ls.resolve(e)
                    })).catch((function (t) {
                      n.k_(t)
                    }))
                  }))
                })).catch((function (t) {
                  n.k_(t)
                })), [2]
              }))
            }))
          }))
        }, t.prototype.x_ = function (t) {
          try {
            var e = this.updateFunction(t);
            return !ht(e) && e.catch && e.then ? e : (this.ls.reject(Error("Transaction callback must return a Promise")), null)
          } catch (t) {
            return this.ls.reject(t), null
          }
        }, t.prototype.k_ = function (t) {
          var e = this;
          this.N_ > 0 && this.M_(t) ? (this.N_ -= 1, this.cs.ws((function () {
            return e.F_(), Promise.resolve()
          }))) : this.ls.reject(t)
        }, t.prototype.M_ = function (t) {
          if ("FirebaseError" === t.name) {
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !Et(e)
          }
          return !1
        }, t
      }(), Hu = function () {
        function t(t, e) {
          this.credentials = t, this.cs = e, this.clientId = Y.k(), this.O_ = new dr
        }

        return t.prototype.start = function (t, e, n, i) {
          var o = this;
          this.L_(), this.bl = t;
          var s = new dr, u = !1;
          return this.credentials.Hc((function (t) {
            if (!u) return u = !0, y("FirestoreClient", "Initializing. user=", t.uid), o.B_(e, n, i, t, s).then(o.O_.resolve, o.O_.reject);
            o.cs.Cs((function () {
              return function (t, e) {
                return r.__awaiter(this, void 0, void 0, (function () {
                  var n, i;
                  return r.__generator(this, (function (r) {
                    switch (r.label) {
                      case 0:
                        return (n = E(t)).cs.xs(), y("RemoteStore", "RemoteStore received new credentials"), i = Jo(n), n.Yu.add(3), [4, Go(n)];
                      case 1:
                        return r.sent(), i && n.th.set("Unknown"), [4, n.Gu.Jl(e)];
                      case 2:
                        return r.sent(), n.Yu.delete(3), [4, Bo(n)];
                      case 3:
                        return r.sent(), [2]
                    }
                  }))
                }))
              }(o.ph, t)
            }))
          })), this.cs.ws((function () {
            return o.O_.promise
          })), s.promise
        }, t.prototype.enableNetwork = function () {
          var t = this;
          return this.L_(), this.cs.enqueue((function () {
            return t.persistence.tc(!0), function (t) {
              var e = E(t);
              return e.Yu.delete(0), Bo(e)
            }(t.ph)
          }))
        }, t.prototype.B_ = function (t, e, n, i, o) {
          return r.__awaiter(this, void 0, void 0, (function () {
            var s, u, a = this;
            return r.__generator(this, (function (c) {
              switch (c.label) {
                case 0:
                  return c.trys.push([0, 3, , 4]), s = {
                    cs: this.cs,
                    bl: this.bl,
                    clientId: this.clientId,
                    credentials: this.credentials,
                    Wl: i,
                    Dh: 100,
                    persistenceSettings: n
                  }, [4, t.initialize(s)];
                case 1:
                  return c.sent(), [4, e.initialize(t, s)];
                case 2:
                  return c.sent(), this.persistence = t.persistence, this.Sh = t.Sh, this.ju = t.ju, this.ql = t.ql, this.Ku = e.Ku, this.ph = e.ph, this.fi = e.fi, this.q_ = e.bh, this.q_.Us = bs.bind(null, this.fi), this.q_.js = Es.bind(null, this.fi), this.persistence.Za((function () {
                    return r.__awaiter(a, void 0, void 0, (function () {
                      return r.__generator(this, (function (t) {
                        switch (t.label) {
                          case 0:
                            return [4, this.terminate()];
                          case 1:
                            return t.sent(), [2]
                        }
                      }))
                    }))
                  })), o.resolve(), [3, 4];
                case 3:
                  if (u = c.sent(), o.reject(u), !this.U_(u)) throw u;
                  return [2, (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + u), this.B_(new cu, new fu, {jl: !1}, i, o))];
                case 4:
                  return [2]
              }
            }))
          }))
        }, t.prototype.U_ = function (t) {
          return "FirebaseError" === t.name ? t.code === a.FAILED_PRECONDITION || t.code === a.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 22 === t.code || 20 === t.code || 11 === t.code
        }, t.prototype.L_ = function () {
          if (this.cs.ps) throw new l(a.FAILED_PRECONDITION, "The client has already been terminated.")
        }, t.prototype.disableNetwork = function () {
          var t = this;
          return this.L_(), this.cs.enqueue((function () {
            return t.persistence.tc(!1), function (t) {
              return r.__awaiter(this, void 0, void 0, (function () {
                var e;
                return r.__generator(this, (function (n) {
                  switch (n.label) {
                    case 0:
                      return (e = E(t)).Yu.add(0), [4, Go(e)];
                    case 1:
                      return n.sent(), e.th.set("Offline"), [2]
                  }
                }))
              }))
            }(t.ph)
          }))
        }, t.prototype.terminate = function () {
          var t = this;
          this.cs.Ds();
          var e = new dr;
          return this.cs.bs((function () {
            return r.__awaiter(t, void 0, void 0, (function () {
              var t, n;
              return r.__generator(this, (function (r) {
                switch (r.label) {
                  case 0:
                    return r.trys.push([0, 4, , 5]), this.ql && this.ql.stop(), [4, zo(this.ph)];
                  case 1:
                    return r.sent(), [4, this.Sh.Di()];
                  case 2:
                    return r.sent(), [4, this.persistence.Di()];
                  case 3:
                    return r.sent(), this.credentials.Yc(), e.resolve(), [3, 5];
                  case 4:
                    return t = r.sent(), n = Or(t, "Failed to shutdown persistence"), e.reject(n), [3, 5];
                  case 5:
                    return [2]
                }
              }))
            }))
          })), e.promise
        }, t.prototype.waitForPendingWrites = function () {
          var t = this;
          this.L_();
          var e = new dr;
          return this.cs.ws((function () {
            return function (t, e) {
              return r.__awaiter(this, void 0, void 0, (function () {
                var n, i, o, s, u;
                return r.__generator(this, (function (r) {
                  switch (r.label) {
                    case 0:
                      Jo((n = E(t)).ph) || y("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), r.label = 1;
                    case 1:
                      return r.trys.push([1, 3, , 4]), [4, function (t) {
                        var e = E(t);
                        return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function (t) {
                          return e.Sr.qo(t)
                        }))
                      }(n.ju)];
                    case 2:
                      return -1 === (i = r.sent()) ? [2, void e.resolve()] : ((o = n.Lh.get(i) || []).push(e), n.Lh.set(i, o), [3, 4]);
                    case 3:
                      return s = r.sent(), u = Or(s, "Initialization of waitForPendingWrites() operation failed"), e.reject(u), [3, 4];
                    case 4:
                      return [2]
                  }
                }))
              }))
            }(t.fi, e)
          })), e.promise
        }, t.prototype.listen = function (t, e, n) {
          var r = this;
          this.L_();
          var i = new lu(n), o = new Mr(t, i, e);
          return this.cs.ws((function () {
            return Cr(r.q_, o)
          })), function () {
            i.Zl(), r.cs.ws((function () {
              return Rr(r.q_, o)
            }))
          }
        }, t.prototype.Q_ = function (t) {
          return r.__awaiter(this, void 0, void 0, (function () {
            var e, n = this;
            return r.__generator(this, (function (i) {
              switch (i.label) {
                case 0:
                  return this.L_(), [4, this.O_.promise];
                case 1:
                  return i.sent(), e = new dr, [2, (this.cs.ws((function () {
                    return function (t, e, n) {
                      return r.__awaiter(this, void 0, void 0, (function () {
                        var i, o, s;
                        return r.__generator(this, (function (r) {
                          switch (r.label) {
                            case 0:
                              return r.trys.push([0, 2, , 3]), [4, function (t, e) {
                                var n = E(t);
                                return n.persistence.runTransaction("read document", "readonly", (function (t) {
                                  return n.Cc.Cr(t, e)
                                }))
                              }(t, e)];
                            case 1:
                              return (i = r.sent()) instanceof Ln ? n.resolve(i) : i instanceof kn ? n.resolve(null) : n.reject(new l(a.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3, 3];
                            case 2:
                              return o = r.sent(), s = Or(o, "Failed to get document '" + e + " from cache"), n.reject(s), [3, 3];
                            case 3:
                              return [2]
                          }
                        }))
                      }))
                    }(n.ju, t, e)
                  })), e.promise)]
              }
            }))
          }))
        }, t.prototype.W_ = function (t, e) {
          return void 0 === e && (e = {}), r.__awaiter(this, void 0, void 0, (function () {
            var n, i = this;
            return r.__generator(this, (function (r) {
              switch (r.label) {
                case 0:
                  return this.L_(), [4, this.O_.promise];
                case 1:
                  return r.sent(), n = new dr, [2, (this.cs.ws((function () {
                    return function (t, e, n, r, i) {
                      var o = new lu({
                        next: function (o) {
                          e.ws((function () {
                            return Rr(t, s)
                          }));
                          var u = o.docs.has(n);
                          !u && o.fromCache ? i.reject(new l(a.UNAVAILABLE, "Failed to get document because the client is offline.")) : u && o.fromCache && r && "server" === r.source ? i.reject(new l(a.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o)
                        }, error: function (t) {
                          return i.reject(t)
                        }
                      }), s = new Mr(Un(n.path), o, {includeMetadataChanges: !0, Xs: !0});
                      return Cr(t, s)
                    }(i.q_, i.cs, t, e, n)
                  })), n.promise)]
              }
            }))
          }))
        }, t.prototype.j_ = function (t) {
          return r.__awaiter(this, void 0, void 0, (function () {
            var e, n = this;
            return r.__generator(this, (function (i) {
              switch (i.label) {
                case 0:
                  return this.L_(), [4, this.O_.promise];
                case 1:
                  return i.sent(), e = new dr, [2, (this.cs.ws((function () {
                    return function (t, e, n) {
                      return r.__awaiter(this, void 0, void 0, (function () {
                        var i, o, s, u, a, c;
                        return r.__generator(this, (function (r) {
                          switch (r.label) {
                            case 0:
                              return r.trys.push([0, 2, , 3]), [4, To(t, e, !0)];
                            case 1:
                              return i = r.sent(), o = new ys(e, i.Fc), s = o.wh(i.documents), u = o.yr(s, !1), n.resolve(u.snapshot), [3, 3];
                            case 2:
                              return a = r.sent(), c = Or(a, "Failed to execute query '" + e + " against cache"), n.reject(c), [3, 3];
                            case 3:
                              return [2]
                          }
                        }))
                      }))
                    }(n.ju, t, e)
                  })), e.promise)]
              }
            }))
          }))
        }, t.prototype.K_ = function (t, e) {
          return void 0 === e && (e = {}), r.__awaiter(this, void 0, void 0, (function () {
            var n, i = this;
            return r.__generator(this, (function (r) {
              switch (r.label) {
                case 0:
                  return this.L_(), [4, this.O_.promise];
                case 1:
                  return r.sent(), n = new dr, [2, (this.cs.ws((function () {
                    return function (t, e, n, r, i) {
                      var o = new lu({
                        next: function (n) {
                          e.ws((function () {
                            return Rr(t, s)
                          })), n.fromCache && "server" === r.source ? i.reject(new l(a.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n)
                        }, error: function (t) {
                          return i.reject(t)
                        }
                      }), s = new Mr(n, o, {includeMetadataChanges: !0, Xs: !0});
                      return Cr(t, s)
                    }(i.q_, i.cs, t, e, n)
                  })), n.promise)]
              }
            }))
          }))
        }, t.prototype.write = function (t) {
          var e = this;
          this.L_();
          var n = new dr;
          return this.cs.ws((function () {
            return function (t, e, n) {
              return r.__awaiter(this, void 0, void 0, (function () {
                var i, o, s, u;
                return r.__generator(this, (function (r) {
                  switch (r.label) {
                    case 0:
                      i = Ks(t), r.label = 1;
                    case 1:
                      return r.trys.push([1, 5, , 6]), [4, function (t, e) {
                        var n, r = E(t), i = at.now(), o = e.reduce((function (t, e) {
                          return t.add(e.key)
                        }), Ut());
                        return r.persistence.runTransaction("Locally write mutations", "readwrite", (function (t) {
                          return r.Cc.kr(t, o).next((function (o) {
                            n = o;
                            for (var s = [], u = 0, a = e; u < a.length; u++) {
                              var c = a[u], h = yn(c, n.get(c.key));
                              null != h && s.push(new bn(c.key, h, xn(h.proto.mapValue), fn.exists(!0)))
                            }
                            return r.Sr.ko(t, i, s, e)
                          }))
                        })).then((function (t) {
                          var e = t.lr(n);
                          return {batchId: t.batchId, wr: e}
                        }))
                      }(i.ju, e)];
                    case 2:
                      return o = r.sent(), i.Sh.xi(o.batchId), function (t, e, n) {
                        var r = t.Oh[t.currentUser.ti()];
                        r || (r = new Tt(J)), r = r.ot(e, n), t.Oh[t.currentUser.ti()] = r
                      }(i, o.batchId, n), [4, Ps(i, o.wr)];
                    case 3:
                      return r.sent(), [4, is(i.ph)];
                    case 4:
                      return r.sent(), [3, 6];
                    case 5:
                      return s = r.sent(), u = Or(s, "Failed to persist write"), n.reject(u), [3, 6];
                    case 6:
                      return [2]
                  }
                }))
              }))
            }(e.fi, t, n)
          })), n.promise
        }, t.prototype.U = function () {
          return this.bl.U
        }, t.prototype.G_ = function (t) {
          var e = this;
          this.L_();
          var n = new lu(t);
          return this.cs.ws((function () {
            return r.__awaiter(e, void 0, void 0, (function () {
              return r.__generator(this, (function (t) {
                return [2, function (t, e) {
                  E(t).qs.add(e), e.next()
                }(this.q_, n)]
              }))
            }))
          })), function () {
            n.Zl(), e.cs.ws((function () {
              return r.__awaiter(e, void 0, void 0, (function () {
                return r.__generator(this, (function (t) {
                  return [2, function (t, e) {
                    E(t).qs.delete(e)
                  }(this.q_, n)]
                }))
              }))
            }))
          }
        }, Object.defineProperty(t.prototype, "z_", {
          get: function () {
            return this.cs.ps
          }, enumerable: !1, configurable: !0
        }), t.prototype.transaction = function (t) {
          var e = this;
          this.L_();
          var n = new dr;
          return this.cs.ws((function () {
            return new Wu(e.cs, e.Ku, t, n).run(), Promise.resolve()
          })), n.promise
        }, t
      }();

      function Ku(t) {
        return function (t, e) {
          if ("object" != typeof t || null === t) return !1;
          for (var n = t, r = 0, i = ["next", "error", "complete"]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0
          }
          return !1
        }(t)
      }

      var Qu = function () {
        function t(t, e, n, r, i) {
          this.U = t, this.timestampsInSnapshots = e, this.H_ = n, this.Y_ = r, this.J_ = i
        }

        return t.prototype.X_ = function (t) {
          switch (te(t)) {
            case 0:
              return null;
            case 1:
              return t.booleanValue;
            case 2:
              return ue(t.integerValue || t.doubleValue);
            case 3:
              return this.Z_(t.timestampValue);
            case 4:
              return this.tf(t);
            case 5:
              return t.stringValue;
            case 6:
              return this.J_(ae(t.bytesValue));
            case 7:
              return this.ef(t.referenceValue);
            case 8:
              return this.nf(t.geoPointValue);
            case 9:
              return this.sf(t.arrayValue);
            case 10:
              return this.if(t.mapValue);
            default:
              throw _()
          }
        }, t.prototype.if = function (t) {
          var e = this, n = {};
          return T(t.fields || {}, (function (t, r) {
            n[t] = e.X_(r)
          })), n
        }, t.prototype.nf = function (t) {
          return new Iu(ue(t.latitude), ue(t.longitude))
        }, t.prototype.sf = function (t) {
          var e = this;
          return (t.values || []).map((function (t) {
            return e.X_(t)
          }))
        }, t.prototype.tf = function (t) {
          switch (this.H_) {
            case"previous":
              var e = function t(e) {
                var n = e.mapValue.fields.__previous_value__;
                return Jt(n) ? t(n) : n
              }(t);
              return null == e ? null : this.X_(e);
            case"estimate":
              return this.Z_($t(t));
            default:
              return null
          }
        }, t.prototype.Z_ = function (t) {
          var e = se(t), n = new at(e.seconds, e.nanos);
          return this.timestampsInSnapshots ? n : n.toDate()
        }, t.prototype.ef = function (t) {
          var e = N.g(t);
          g(Qe(e));
          var n = new rt(e.get(1), e.get(3)), r = new x(e.u(5));
          return n.isEqual(this.U) || p("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.U.projectId + "/" + this.U.database + ") instead."), this.Y_(r)
        }, t
      }(), Xu = ui.ho, Yu = function () {
        function t(t) {
          var e, n, r, i, o;
          if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new l(a.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0
          } else U("settings", "non-empty string", "host", t.host), this.host = t.host, V("settings", "boolean", "ssl", t.ssl), this.ssl = null === (e = t.ssl) || void 0 === e || e;
          if (z("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "experimentalAutoDetectLongPolling", "ignoreUndefinedProperties"]), V("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, V("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), V("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), !0 === t.timestampsInSnapshots ? p("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && p("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, V("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = ui._o; else {
            if (t.cacheSizeBytes !== Xu && t.cacheSizeBytes < ui.lo) throw new l(a.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + ui.lo);
            this.cacheSizeBytes = t.cacheSizeBytes
          }
          V("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), this.experimentalForceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i, V("settings", "boolean", "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling), this.experimentalAutoDetectLongPolling = null !== (o = t.experimentalAutoDetectLongPolling) && void 0 !== o && o, function (t, e, n, r) {
            if (!0 === e && !0 === r) throw new l(a.INVALID_ARGUMENT, "experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")
          }(0, t.experimentalForceLongPolling, 0, t.experimentalAutoDetectLongPolling)
        }

        return t.prototype.isEqual = function (t) {
          return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties
        }, t
      }(), Ju = function () {
        function t(e, n, i, o) {
          var s = this;
          if (void 0 === i && (i = new cu), void 0 === o && (o = new fu), this.rf = i, this.af = o, this.cf = null, this.uf = new xr, this.INTERNAL = {
            delete: function () {
              return r.__awaiter(s, void 0, void 0, (function () {
                return r.__generator(this, (function (t) {
                  switch (t.label) {
                    case 0:
                      return this.hf(), [4, this.lf.terminate()];
                    case 1:
                      return t.sent(), [2]
                  }
                }))
              }))
            }
          }, "object" == typeof e.options) {
            var u = e;
            this.cf = u, this.__ = t._f(u), this.ff = u.name, this.df = new Co(n)
          } else {
            var c = e;
            if (!c.projectId) throw new l(a.INVALID_ARGUMENT, "Must provide projectId");
            this.__ = new rt(c.projectId, c.database), this.ff = "[DEFAULT]", this.df = new ko
          }
          this.wf = new Yu({})
        }

        return Object.defineProperty(t.prototype, "mf", {
          get: function () {
            return this.Tf || (this.Tf = new Lu(this.__, this.wf.ignoreUndefinedProperties)), this.Tf
          }, enumerable: !1, configurable: !0
        }), t.prototype.settings = function (t) {
          L("Firestore.settings", arguments, 1), R("Firestore.settings", "object", 1, t), t.merge && delete (t = Object.assign(Object.assign({}, this.wf), t)).merge;
          var e = new Yu(t);
          if (this.lf && !this.wf.isEqual(e)) throw new l(a.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
          this.wf = e, void 0 !== e.credentials && (this.df = function (t) {
            if (!t) return new ko;
            switch (t.type) {
              case"gapi":
                var e = t.client;
                return g(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new Po(e, t.sessionIndex || "0");
              case"provider":
                return t.client;
              default:
                throw new l(a.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type")
            }
          }(e.credentials))
        }, t.prototype.enableNetwork = function () {
          return this.hf(), this.lf.enableNetwork()
        }, t.prototype.disableNetwork = function () {
          return this.hf(), this.lf.disableNetwork()
        }, t.prototype.enablePersistence = function (t) {
          var e, n;
          if (this.lf) throw new l(a.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
          var r = !1, i = !1;
          if (t && (void 0 !== t.experimentalTabSynchronization && p("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, r && i)) throw new l(a.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
          return this.Ef(this.rf, this.af, {jl: !0, cacheSizeBytes: this.wf.cacheSizeBytes, synchronizeTabs: r, ka: i})
        }, t.prototype.clearPersistence = function () {
          return r.__awaiter(this, void 0, void 0, (function () {
            var t, e = this;
            return r.__generator(this, (function (n) {
              if (void 0 !== this.lf && !this.lf.z_) throw new l(a.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
              return t = new dr, [2, (this.uf.bs((function () {
                return r.__awaiter(e, void 0, void 0, (function () {
                  var e;
                  return r.__generator(this, (function (n) {
                    switch (n.label) {
                      case 0:
                        return n.trys.push([0, 2, , 3]), [4, this.rf.clearPersistence(this.__, this.ff)];
                      case 1:
                        return n.sent(), t.resolve(), [3, 3];
                      case 2:
                        return e = n.sent(), t.reject(e), [3, 3];
                      case 3:
                        return [2]
                    }
                  }))
                }))
              })), t.promise)]
            }))
          }))
        }, t.prototype.terminate = function () {
          return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete()
        }, Object.defineProperty(t.prototype, "If", {
          get: function () {
            return this.hf(), this.lf.z_
          }, enumerable: !1, configurable: !0
        }), t.prototype.waitForPendingWrites = function () {
          return this.hf(), this.lf.waitForPendingWrites()
        }, t.prototype.onSnapshotsInSync = function (t) {
          if (this.hf(), Ku(t)) return this.lf.G_(t);
          R("Firestore.onSnapshotsInSync", "function", 1, t);
          var e = {next: t};
          return this.lf.G_(e)
        }, t.prototype.hf = function () {
          return this.lf || this.Ef(new cu, new fu, {jl: !1}), this.lf
        }, t.prototype.Af = function () {
          return new st(this.__, this.ff, this.wf.host, this.wf.ssl, this.wf.experimentalForceLongPolling, this.wf.experimentalAutoDetectLongPolling)
        }, t.prototype.Ef = function (t, e, n) {
          var r = this.Af();
          return this.lf = new Hu(this.df, this.uf), this.lf.start(r, t, e, n)
        }, t._f = function (t) {
          if (e = t.options, !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new l(a.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
          var e, n = t.options.projectId;
          if (!n || "string" != typeof n) throw new l(a.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
          return new rt(n)
        }, Object.defineProperty(t.prototype, "app", {
          get: function () {
            if (!this.cf) throw new l(a.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.cf
          }, enumerable: !1, configurable: !0
        }), t.prototype.collection = function (t) {
          return L("Firestore.collection", arguments, 1), R("Firestore.collection", "non-empty string", 1, t), this.hf(), new la(N.g(t), this, null)
        }, t.prototype.doc = function (t) {
          return L("Firestore.doc", arguments, 1), R("Firestore.doc", "non-empty string", 1, t), this.hf(), ta.Rf(N.g(t), this, null)
        }, t.prototype.collectionGroup = function (t) {
          if (L("Firestore.collectionGroup", arguments, 1), R("Firestore.collectionGroup", "non-empty string", 1, t), t.indexOf("/") >= 0) throw new l(a.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
          return this.hf(), new ha(function (t) {
            return new Rn(N.P(), t)
          }(t), this, null)
        }, t.prototype.runTransaction = function (t) {
          var e = this;
          return L("Firestore.runTransaction", arguments, 1), R("Firestore.runTransaction", "function", 1, t), this.hf().transaction((function (n) {
            return t(new $u(e, n))
          }))
        }, t.prototype.batch = function () {
          return this.hf(), new Zu(this)
        }, Object.defineProperty(t, "logLevel", {
          get: function () {
            switch (v()) {
              case c.LogLevel.DEBUG:
                return "debug";
              case c.LogLevel.ERROR:
                return "error";
              case c.LogLevel.SILENT:
                return "silent";
              case c.LogLevel.WARN:
                return "warn";
              case c.LogLevel.INFO:
                return "info";
              case c.LogLevel.VERBOSE:
                return "verbose";
              default:
                return "error"
            }
          }, enumerable: !1, configurable: !0
        }), t.setLogLevel = function (t) {
          var e;
          L("Firestore.setLogLevel", arguments, 1), F("setLogLevel", ["debug", "error", "silent", "warn", "info", "verbose"], 1, t), e = t, d.setLogLevel(e)
        }, t.prototype.gf = function () {
          return this.wf.timestampsInSnapshots
        }, t.prototype.Pf = function () {
          return this.wf
        }, t
      }(), $u = function () {
        function t(t, e) {
          this.yf = t, this.Vf = e
        }

        return t.prototype.get = function (t) {
          var e = this;
          L("Transaction.get", arguments, 1);
          var n = ya("Transaction.get", t, this.yf);
          return this.Vf.v_([n.f_]).then((function (t) {
            if (!t || 1 !== t.length) return _();
            var r = t[0];
            if (r instanceof kn) return new na(e.yf, n.f_, null, !1, !1, n.d_);
            if (r instanceof Ln) return new na(e.yf, n.f_, r, !1, !1, n.d_);
            throw _()
          }))
        }, t.prototype.set = function (t, e, n) {
          C("Transaction.set", arguments, 2, 3);
          var r = ya("Transaction.set", t, this.yf);
          n = pa("Transaction.set", n);
          var i = ma(r.d_, e, n), o = ku(this.yf.mf, "Transaction.set", r.f_, i, null !== r.d_, n);
          return this.Vf.set(r.f_, o), this
        }, t.prototype.update = function (t, e, n) {
          for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
          return "string" == typeof e || e instanceof du ? (k("Transaction.update", arguments, 3), r = ya("Transaction.update", t, this.yf), i = Ru(this.yf.mf, "Transaction.update", r.f_, e, n, o)) : (L("Transaction.update", arguments, 2), r = ya("Transaction.update", t, this.yf), i = Cu(this.yf.mf, "Transaction.update", r.f_, e)), this.Vf.update(r.f_, i), this
        }, t.prototype.delete = function (t) {
          L("Transaction.delete", arguments, 1);
          var e = ya("Transaction.delete", t, this.yf);
          return this.Vf.delete(e.f_), this
        }, t
      }(), Zu = function () {
        function t(t) {
          this.yf = t, this.pf = [], this.bf = !1
        }

        return t.prototype.set = function (t, e, n) {
          C("WriteBatch.set", arguments, 2, 3), this.vf();
          var r = ya("WriteBatch.set", t, this.yf);
          n = pa("WriteBatch.set", n);
          var i = ma(r.d_, e, n), o = ku(this.yf.mf, "WriteBatch.set", r.f_, i, null !== r.d_, n);
          return this.pf = this.pf.concat(o.w_(r.f_, fn.ze())), this
        }, t.prototype.update = function (t, e, n) {
          for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
          return this.vf(), "string" == typeof e || e instanceof du ? (k("WriteBatch.update", arguments, 3), r = ya("WriteBatch.update", t, this.yf), i = Ru(this.yf.mf, "WriteBatch.update", r.f_, e, n, o)) : (L("WriteBatch.update", arguments, 2), r = ya("WriteBatch.update", t, this.yf), i = Cu(this.yf.mf, "WriteBatch.update", r.f_, e)), this.pf = this.pf.concat(i.w_(r.f_, fn.exists(!0))), this
        }, t.prototype.delete = function (t) {
          L("WriteBatch.delete", arguments, 1), this.vf();
          var e = ya("WriteBatch.delete", t, this.yf);
          return this.pf = this.pf.concat(new An(e.f_, fn.ze())), this
        }, t.prototype.commit = function () {
          return this.vf(), this.bf = !0, this.pf.length > 0 ? this.yf.hf().write(this.pf) : Promise.resolve()
        }, t.prototype.vf = function () {
          if (this.bf) throw new l(a.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
        }, t
      }(), ta = function (t) {
        function e(e, n, r) {
          var i = this;
          return (i = t.call(this, n.__, e, r) || this).f_ = e, i.firestore = n, i.d_ = r, i.lf = i.firestore.hf(), i
        }

        return r.__extends(e, t), e.Rf = function (t, n, r) {
          if (t.length % 2 != 0) throw new l(a.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.R() + " has " + t.length);
          return new e(new x(t), n, r)
        }, Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this.f_.path._()
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "parent", {
          get: function () {
            return new la(this.f_.path.h(), this.firestore, this.d_)
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "path", {
          get: function () {
            return this.f_.path.R()
          }, enumerable: !1, configurable: !0
        }), e.prototype.collection = function (t) {
          if (L("DocumentReference.collection", arguments, 1), R("DocumentReference.collection", "non-empty string", 1, t), !t) throw new l(a.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
          var e = N.g(t);
          return new la(this.f_.path.child(e), this.firestore, null)
        }, e.prototype.isEqual = function (t) {
          if (!(t instanceof e)) throw W("isEqual", "DocumentReference", 1, t);
          return this.firestore === t.firestore && this.f_.isEqual(t.f_) && this.d_ === t.d_
        }, e.prototype.set = function (t, e) {
          C("DocumentReference.set", arguments, 1, 2), e = pa("DocumentReference.set", e);
          var n = ma(this.d_, t, e),
            r = ku(this.firestore.mf, "DocumentReference.set", this.f_, n, null !== this.d_, e);
          return this.lf.write(r.w_(this.f_, fn.ze()))
        }, e.prototype.update = function (t, e) {
          for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
          return "string" == typeof t || t instanceof du ? (k("DocumentReference.update", arguments, 2), n = Ru(this.firestore.mf, "DocumentReference.update", this.f_, t, e, r)) : (L("DocumentReference.update", arguments, 1), n = Cu(this.firestore.mf, "DocumentReference.update", this.f_, t)), this.lf.write(n.w_(this.f_, fn.exists(!0)))
        }, e.prototype.delete = function () {
          return L("DocumentReference.delete", arguments, 0), this.lf.write([new An(this.f_, fn.ze())])
        }, e.prototype.onSnapshot = function () {
          for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
          C("DocumentReference.onSnapshot", arguments, 1, 4);
          var s = {includeMetadataChanges: !1}, u = 0;
          "object" != typeof i[u] || Ku(i[u]) || (z("DocumentReference.onSnapshot", s = i[u], ["includeMetadataChanges"]), V("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u++);
          var a = {includeMetadataChanges: s.includeMetadataChanges};
          if (Ku(i[u])) {
            var c = i[u];
            i[u] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c), i[u + 1] = null === (e = c.error) || void 0 === e ? void 0 : e.bind(c), i[u + 2] = null === (n = c.complete) || void 0 === n ? void 0 : n.bind(c)
          } else R("DocumentReference.onSnapshot", "function", u, i[u]), P("DocumentReference.onSnapshot", "function", u + 1, i[u + 1]), P("DocumentReference.onSnapshot", "function", u + 2, i[u + 2]);
          var h = {
            next: function (t) {
              i[u] && i[u](r.Sf(t))
            }, error: i[u + 1], complete: i[u + 2]
          };
          return this.lf.listen(Un(this.f_.path), a, h)
        }, e.prototype.get = function (t) {
          var e = this;
          C("DocumentReference.get", arguments, 0, 1), va("DocumentReference.get", t);
          var n = this.firestore.hf();
          return t && "cache" === t.source ? n.Q_(this.f_).then((function (t) {
            return new na(e.firestore, e.f_, t, !0, t instanceof Ln && t.Je, e.d_)
          })) : n.W_(this.f_, t).then((function (t) {
            return e.Sf(t)
          }))
        }, e.prototype.withConverter = function (t) {
          return new e(this.f_, this.firestore, t)
        }, e.prototype.Sf = function (t) {
          var e = t.docs.get(this.f_);
          return new na(this.firestore, this.f_, e, t.fromCache, t.hasPendingWrites, this.d_)
        }, e
      }(Nu), ea = function () {
        function t(t, e) {
          this.hasPendingWrites = t, this.fromCache = e
        }

        return t.prototype.isEqual = function (t) {
          return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache
        }, t
      }(), na = function () {
        function t(t, e, n, r, i, o) {
          this.yf = t, this.f_ = e, this.Df = n, this.Cf = r, this.Nf = i, this.d_ = o
        }

        return t.prototype.data = function (t) {
          var e = this;
          if (C("DocumentSnapshot.data", arguments, 0, 1), t = da("DocumentSnapshot.data", t), this.Df) {
            if (this.d_) {
              var n = new ra(this.yf, this.f_, this.Df, this.Cf, this.Nf, null);
              return this.d_.fromFirestore(n, t)
            }
            return new Qu(this.yf.__, this.yf.gf(), t.serverTimestamps || "none", (function (t) {
              return new ta(t, e.yf, null)
            }), (function (t) {
              return new ot(t)
            })).X_(this.Df.rn())
          }
        }, t.prototype.get = function (t, e) {
          var n = this;
          if (C("DocumentSnapshot.get", arguments, 1, 2), e = da("DocumentSnapshot.get", e), this.Df) {
            var r = this.Df.data().field(ju("DocumentSnapshot.get", t, this.f_));
            if (null !== r) return new Qu(this.yf.__, this.yf.gf(), e.serverTimestamps || "none", (function (t) {
              return new ta(t, n.yf, n.d_)
            }), (function (t) {
              return new ot(t)
            })).X_(r)
          }
        }, Object.defineProperty(t.prototype, "id", {
          get: function () {
            return this.f_.path._()
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "ref", {
          get: function () {
            return new ta(this.f_, this.yf, this.d_)
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "exists", {
          get: function () {
            return null !== this.Df
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "metadata", {
          get: function () {
            return new ea(this.Nf, this.Cf)
          }, enumerable: !1, configurable: !0
        }), t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) throw W("isEqual", "DocumentSnapshot", 1, e);
          return this.yf === e.yf && this.Cf === e.Cf && this.f_.isEqual(e.f_) && (null === this.Df ? null === e.Df : this.Df.isEqual(e.Df)) && this.d_ === e.d_
        }, t
      }(), ra = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this
        }

        return r.__extends(e, t), e.prototype.data = function (e) {
          return t.prototype.data.call(this, e)
        }, e
      }(na);

      function ia(t, e, n, r, i, o, s) {
        var u;
        if (i.p()) {
          if ("array-contains" === o || "array-contains-any" === o) throw new l(a.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
          if ("in" === o || "not-in" === o) {
            ua(s, o);
            for (var c = [], h = 0, f = s; h < f.length; h++) {
              var p = f[h];
              c.push(sa(r, t, p))
            }
            u = {arrayValue: {values: c}}
          } else u = sa(r, t, s)
        } else "in" !== o && "not-in" !== o && "array-contains-any" !== o || ua(s, o), u = Pu(n, e, s, "in" === o || "not-in" === o);
        var d = $n.create(i, o, u);
        return function (t, e) {
          if (e.hn()) {
            var n = jn(t);
            if (null !== n && !n.isEqual(e.field)) throw new l(a.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
            var r = Fn(t);
            null !== r && aa(t, e.field, r)
          }
          var i = function (t, e) {
            for (var n = 0, r = t.filters; n < r.length; n++) {
              var i = r[n];
              if (e.indexOf(i.op) >= 0) return i.op
            }
            return null
          }(t, function (t) {
            switch (t) {
              case"!=":
                return ["!=", "not-in"];
              case"array-contains":
                return ["array-contains", "array-contains-any", "not-in"];
              case"in":
                return ["array-contains-any", "in", "not-in"];
              case"array-contains-any":
                return ["array-contains", "array-contains-any", "in", "not-in"];
              case"not-in":
                return ["array-contains", "array-contains-any", "in", "not-in", "!="];
              default:
                return []
            }
          }(e.op));
          if (null !== i) throw i === e.op ? new l(a.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new l(a.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.")
        }(t, d), d
      }

      function oa(t, e, n) {
        if (null !== t.startAt) throw new l(a.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
        if (null !== t.endAt) throw new l(a.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
        var r = new fr(e, n);
        return function (t, e) {
          if (null === Fn(t)) {
            var n = jn(t);
            null !== n && aa(t, n, e.field)
          }
        }(t, r), r
      }

      function sa(t, e, n) {
        if ("string" == typeof n) {
          if ("" === n) throw new l(a.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
          if (!qn(e) && -1 !== n.indexOf("/")) throw new l(a.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
          var r = e.path.child(N.g(n));
          if (!x.F(r)) throw new l(a.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
          return ce(t, new x(r))
        }
        if (n instanceof Nu) return ce(t, n.f_);
        throw new l(a.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + G(n) + ".")
      }

      function ua(t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new l(a.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
        if (t.length > 10) throw new l(a.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
        if ("in" === e || "array-contains-any" === e) {
          if (t.indexOf(null) >= 0) throw new l(a.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
          if (t.filter((function (t) {
            return Number.isNaN(t)
          })).length > 0) throw new l(a.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.")
        }
      }

      function aa(t, e, n) {
        if (!n.isEqual(e)) throw new l(a.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.")
      }

      function ca(t) {
        if (Mn(t) && 0 === t.on.length) throw new l(a.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause")
      }

      var ha = function () {
        function t(t, e, n) {
          this.Ff = t, this.firestore = e, this.d_ = n
        }

        return t.prototype.where = function (e, n, r) {
          L("Query.where", arguments, 3), q("Query.where", 3, r);
          var i = F("Query.where", ["<", "<=", "==", "!=", ">=", ">", "array-contains", "in", "array-contains-any", "not-in"], 2, n),
            o = ju("Query.where", e), s = ia(this.Ff, "Query.where", this.firestore.mf, this.firestore.__, o, i, r);
          return new t(function (t, e) {
            var n = t.filters.concat([e]);
            return new Rn(t.path, t.collectionGroup, t.on.slice(), n, t.limit, t.an, t.startAt, t.endAt)
          }(this.Ff, s), this.firestore, this.d_)
        }, t.prototype.orderBy = function (e, n) {
          var r;
          if (C("Query.orderBy", arguments, 1, 2), P("Query.orderBy", "non-empty string", 2, n), void 0 === n || "asc" === n) r = "asc"; else {
            if ("desc" !== n) throw new l(a.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
            r = "desc"
          }
          var i = ju("Query.orderBy", e), o = oa(this.Ff, i, r);
          return new t(function (t, e) {
            var n = t.on.concat([e]);
            return new Rn(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.an, t.startAt, t.endAt)
          }(this.Ff, o), this.firestore, this.d_)
        }, t.prototype.limit = function (e) {
          return L("Query.limit", arguments, 1), R("Query.limit", "number", 1, e), H("Query.limit", 1, e), new t(zn(this.Ff, e, "F"), this.firestore, this.d_)
        }, t.prototype.limitToLast = function (e) {
          return L("Query.limitToLast", arguments, 1), R("Query.limitToLast", "number", 1, e), H("Query.limitToLast", 1, e), new t(zn(this.Ff, e, "L"), this.firestore, this.d_)
        }, t.prototype.startAt = function (e) {
          for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
          k("Query.startAt", arguments, 1);
          var i = this.xf("Query.startAt", e, n, !0);
          return new t(Wn(this.Ff, i), this.firestore, this.d_)
        }, t.prototype.startAfter = function (e) {
          for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
          k("Query.startAfter", arguments, 1);
          var i = this.xf("Query.startAfter", e, n, !1);
          return new t(Wn(this.Ff, i), this.firestore, this.d_)
        }, t.prototype.endBefore = function (e) {
          for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
          k("Query.endBefore", arguments, 1);
          var i = this.xf("Query.endBefore", e, n, !0);
          return new t(Hn(this.Ff, i), this.firestore, this.d_)
        }, t.prototype.endAt = function (e) {
          for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
          k("Query.endAt", arguments, 1);
          var i = this.xf("Query.endAt", e, n, !1);
          return new t(Hn(this.Ff, i), this.firestore, this.d_)
        }, t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) throw W("isEqual", "Query", 1, e);
          return this.firestore === e.firestore && Kn(this.Ff, e.Ff) && this.d_ === e.d_
        }, t.prototype.withConverter = function (e) {
          return new t(this.Ff, this.firestore, e)
        }, t.prototype.xf = function (t, e, n, i) {
          if (q(t, 1, e), e instanceof na) return L(t, r.__spreadArrays([e], n), 1), function (t, e, n, r, i) {
            if (!r) throw new l(a.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
            for (var o = [], s = 0, u = Bn(t); s < u.length; s++) {
              var c = u[s];
              if (c.field.p()) o.push(ce(e, r.key)); else {
                var h = r.field(c.field);
                if (Jt(h)) throw new l(a.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + c.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === h) {
                  var f = c.field.R();
                  throw new l(a.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + f + "' (used as the orderBy) does not exist.")
                }
                o.push(h)
              }
            }
            return new ur(o, i)
          }(this.Ff, this.firestore.__, t, e.Df, i);
          var o = [e].concat(n);
          return function (t, e, n, r, i, o) {
            var s = t.on;
            if (i.length > s.length) throw new l(a.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
            for (var u = [], c = 0; c < i.length; c++) {
              var h = i[c];
              if (s[c].field.p()) {
                if ("string" != typeof h) throw new l(a.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof h);
                if (!qn(t) && -1 !== h.indexOf("/")) throw new l(a.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + h + "' contains a slash.");
                var f = t.path.child(N.g(h));
                if (!x.F(f)) throw new l(a.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + f + "' is not because it contains an odd number of segments.");
                var p = new x(f);
                u.push(ce(e, p))
              } else {
                var d = Pu(n, r, h);
                u.push(d)
              }
            }
            return new ur(u, o)
          }(this.Ff, this.firestore.__, this.firestore.mf, t, o, i)
        }, t.prototype.onSnapshot = function () {
          for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
          C("Query.onSnapshot", arguments, 1, 4);
          var s = {}, u = 0;
          if ("object" != typeof i[u] || Ku(i[u]) || (z("Query.onSnapshot", s = i[u], ["includeMetadataChanges"]), V("Query.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u++), Ku(i[u])) {
            var a = i[u];
            i[u] = null === (t = a.next) || void 0 === t ? void 0 : t.bind(a), i[u + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a), i[u + 2] = null === (n = a.complete) || void 0 === n ? void 0 : n.bind(a)
          } else R("Query.onSnapshot", "function", u, i[u]), P("Query.onSnapshot", "function", u + 1, i[u + 1]), P("Query.onSnapshot", "function", u + 2, i[u + 2]);
          var c = {
            next: function (t) {
              i[u] && i[u](new fa(r.firestore, r.Ff, t, r.d_))
            }, error: i[u + 1], complete: i[u + 2]
          };
          return ca(this.Ff), this.firestore.hf().listen(this.Ff, s, c)
        }, t.prototype.get = function (t) {
          var e = this;
          C("Query.get", arguments, 0, 1), va("Query.get", t), ca(this.Ff);
          var n = this.firestore.hf();
          return (t && "cache" === t.source ? n.j_(this.Ff) : n.K_(this.Ff, t)).then((function (t) {
            return new fa(e.firestore, e.Ff, t, e.d_)
          }))
        }, t
      }(), fa = function () {
        function t(t, e, n, r) {
          this.yf = t, this.$f = e, this.kf = n, this.d_ = r, this.Mf = null, this.Of = null, this.metadata = new ea(n.hasPendingWrites, n.fromCache)
        }

        return Object.defineProperty(t.prototype, "docs", {
          get: function () {
            var t = [];
            return this.forEach((function (e) {
              return t.push(e)
            })), t
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "empty", {
          get: function () {
            return this.kf.docs.m()
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.kf.docs.size
          }, enumerable: !1, configurable: !0
        }), t.prototype.forEach = function (t, e) {
          var n = this;
          C("QuerySnapshot.forEach", arguments, 1, 2), R("QuerySnapshot.forEach", "function", 1, t), this.kf.docs.forEach((function (r) {
            t.call(e, n.Lf(r, n.metadata.fromCache, n.kf.Wt.has(r.key)))
          }))
        }, Object.defineProperty(t.prototype, "query", {
          get: function () {
            return new ha(this.$f, this.yf, this.d_)
          }, enumerable: !1, configurable: !0
        }), t.prototype.docChanges = function (t) {
          t && (z("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), V("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
          var e = !(!t || !t.includeMetadataChanges);
          if (e && this.kf.Kt) throw new l(a.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
          return this.Mf && this.Of === e || (this.Mf = function (t, e, n) {
            if (t.Qt.m()) {
              var r = 0;
              return t.docChanges.map((function (e) {
                var i = n(e.doc, t.fromCache, t.Wt.has(e.doc.key));
                return e.doc, {type: "added", doc: i, oldIndex: -1, newIndex: r++}
              }))
            }
            var i = t.Qt;
            return t.docChanges.filter((function (t) {
              return e || 3 !== t.type
            })).map((function (e) {
              var r = n(e.doc, t.fromCache, t.Wt.has(e.doc.key)), o = -1, s = -1;
              return 0 !== e.type && (o = i.indexOf(e.doc.key), i = i.delete(e.doc.key)), 1 !== e.type && (s = (i = i.add(e.doc)).indexOf(e.doc.key)), {
                type: ga(e.type),
                doc: r,
                oldIndex: o,
                newIndex: s
              }
            }))
          }(this.kf, e, this.Lf.bind(this)), this.Of = e), this.Mf
        }, t.prototype.isEqual = function (e) {
          if (!(e instanceof t)) throw W("isEqual", "QuerySnapshot", 1, e);
          return this.yf === e.yf && Kn(this.$f, e.$f) && this.kf.isEqual(e.kf) && this.d_ === e.d_
        }, t.prototype.Lf = function (t, e, n) {
          return new ra(this.yf, t.key, t, e, n, this.d_)
        }, t
      }(), la = function (t) {
        function e(e, n, r) {
          var i = this;
          if ((i = t.call(this, Un(e), n, r) || this).Bf = e, e.length % 2 != 1) throw new l(a.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + e.R() + " has " + e.length);
          return i
        }

        return r.__extends(e, t), Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this.Ff.path._()
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "parent", {
          get: function () {
            var t = this.Ff.path.h();
            return t.m() ? null : new ta(new x(t), this.firestore, null)
          }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "path", {
          get: function () {
            return this.Ff.path.R()
          }, enumerable: !1, configurable: !0
        }), e.prototype.doc = function (t) {
          C("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (t = Y.k()), R("CollectionReference.doc", "non-empty string", 1, t);
          var e = N.g(t);
          return ta.Rf(this.Ff.path.child(e), this.firestore, this.d_)
        }, e.prototype.add = function (t) {
          L("CollectionReference.add", arguments, 1);
          var e = this.d_ ? this.d_.toFirestore(t) : t;
          R("CollectionReference.add", "object", 1, e);
          var n = this.doc();
          return new ta(n.f_, this.firestore, null).set(e).then((function () {
            return n
          }))
        }, e.prototype.withConverter = function (t) {
          return new e(this.Bf, this.firestore, t)
        }, e
      }(ha);

      function pa(t, e) {
        if (void 0 === e) return {merge: !1};
        if (z(t, e, ["merge", "mergeFields"]), V(t, "boolean", "merge", e.merge), function (t, e, n, r, i) {
          void 0 !== r && function (t, e, n, r, i) {
            if (!(r instanceof Array)) throw new l(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + G(r));
            for (var o = 0; o < r.length; ++o) if (!i(r[o])) throw new l(a.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be a string or a FieldPath, but the value at index " + o + " was: " + G(r[o]))
          }(t, "mergeFields", 0, r, (function (t) {
            return "string" == typeof t || t instanceof du
          }))
        }(t, 0, 0, e.mergeFields), void 0 !== e.mergeFields && void 0 !== e.merge) throw new l(a.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
        return e
      }

      function da(t, e) {
        return void 0 === e ? {} : (z(t, e, ["serverTimestamps"]), M(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e)
      }

      function va(t, e) {
        P(t, "object", 1, e), e && (z(t, e, ["source"]), M(t, 0, "source", e.source, ["default", "server", "cache"]))
      }

      function ya(t, e, n) {
        if (e instanceof Nu) {
          if (e.firestore !== n) throw new l(a.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
          return e
        }
        throw W(t, "DocumentReference", 1, e)
      }

      function ga(t) {
        switch (t) {
          case 0:
            return "added";
          case 2:
          case 3:
            return "modified";
          case 1:
            return "removed";
          default:
            return _()
        }
      }

      function ma(t, e, n) {
        return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e
      }

      var wa = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this
        }

        return r.__extends(e, t), e.serverTimestamp = function () {
          O("FieldValue.serverTimestamp", arguments);
          var t = new wu("serverTimestamp");
          return t.e_ = "FieldValue.serverTimestamp", new e(t)
        }, e.delete = function () {
          O("FieldValue.delete", arguments);
          var t = new gu("deleteField");
          return t.e_ = "FieldValue.delete", new e(t)
        }, e.arrayUnion = function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          k("FieldValue.arrayUnion", arguments, 1);
          var r = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return k("arrayUnion()", arguments, 1), new bu("arrayUnion", t)
          }.apply(void 0, t);
          return r.e_ = "FieldValue.arrayUnion", new e(r)
        }, e.arrayRemove = function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          k("FieldValue.arrayRemove", arguments, 1);
          var r = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return k("arrayRemove()", arguments, 1), new _u("arrayRemove", t)
          }.apply(void 0, t);
          return r.e_ = "FieldValue.arrayRemove", new e(r)
        }, e.increment = function (t) {
          R("FieldValue.increment", "number", 1, t), L("FieldValue.increment", arguments, 1);
          var n = function (t) {
            return new Eu("increment", t)
          }(t);
          return n.e_ = "FieldValue.increment", new e(n)
        }, e.prototype.isEqual = function (t) {
          return this.l_.isEqual(t.l_)
        }, e
      }(Tu), ba = {
        Firestore: Ju,
        GeoPoint: Iu,
        Timestamp: at,
        Blob: ot,
        Transaction: $u,
        WriteBatch: Zu,
        DocumentReference: ta,
        DocumentSnapshot: na,
        Query: ha,
        QueryDocumentSnapshot: ra,
        QuerySnapshot: fa,
        CollectionReference: la,
        FieldPath: du,
        FieldValue: wa,
        setLogLevel: Ju.setLogLevel,
        CACHE_SIZE_UNLIMITED: Xu
      };

      function _a(t) {
        !function (t, e) {
          t.INTERNAL.registerComponent(new f.Component("firestore", (function (t) {
            return function (t, e) {
              var n = new fu, r = new hu(n);
              return new Ju(t, e, r, n)
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"))
          }), "PUBLIC").setServiceProps(Object.assign({}, ba)))
        }(t), t.registerVersion("@firebase/firestore", "1.18.0")
      }

      _a(u.default), e.__PRIVATE_registerFirestore = _a
    }).call(this, n(10))
  }, 878: function (t, e, n) {
    "use strict";
    n.r(e), function (t) {
      n.d(e, "ErrorCode", (function () {
        return or
      })), n.d(e, "EventType", (function () {
        return sr
      })), n.d(e, "WebChannel", (function () {
        return ur
      })), n.d(e, "XhrIo", (function () {
        return ar
      })), n.d(e, "createWebChannelTransport", (function () {
        return ir
      }));
      var r = function (t, b) {
        return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, b) {
          t.__proto__ = b
        } || function (t, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (t[p] = b[p])
        })(t, b)
      };

      function o(t) {
        var s = "function" == typeof Symbol && Symbol.iterator, e = s && t[s], i = 0;
        if (e) return e.call(t);
        if (t && "number" == typeof t.length) return {
          next: function () {
            return t && i >= t.length && (t = void 0), {value: t && t[i++], done: !t}
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      var g,
        c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
        h = h || {}, f = c || self;

      function l() {
      }

      function d(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
      }

      function v(a) {
        var b = d(a);
        return "array" == b || "object" == b && "number" == typeof a.length
      }

      function y(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
      }

      var m = "closure_uid_" + (1e9 * Math.random() >>> 0), w = 0;

      function _(a, b, t) {
        return a.call.apply(a.bind, arguments)
      }

      function E(a, b, t) {
        if (!a) throw Error();
        if (2 < arguments.length) {
          var e = Array.prototype.slice.call(arguments, 2);
          return function () {
            var t = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(t, e), a.apply(b, t)
          }
        }
        return function () {
          return a.apply(b, arguments)
        }
      }

      function p(a, b, t) {
        return (p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _ : E).apply(null, arguments)
      }

      function I(a, b) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function () {
          var e = t.slice();
          return e.push.apply(e, arguments), a.apply(this, e)
        }
      }

      var q = Date.now;

      function T(a, b) {
        function t() {
        }

        t.prototype = b.prototype, a.S = b.prototype, a.prototype = new t, a.prototype.constructor = a
      }

      function u() {
        this.j = this.j, this.i = this.i
      }

      u.prototype.j = !1, u.prototype.ja = function () {
        if (!this.j && (this.j = !0, this.G(), 0)) (function (a) {
          Object.prototype.hasOwnProperty.call(a, m) && a[m] || (a[m] = ++w)
        })(this)
      }, u.prototype.G = function () {
        if (this.i) for (; this.i.length;) this.i.shift()()
      };
      var A = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
      } : function (a, b) {
        if ("string" == typeof a) return "string" != typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var t = 0; t < a.length; t++) if (t in a && a[t] === b) return t;
        return -1
      }, N = Array.prototype.forEach ? function (a, b, t) {
        Array.prototype.forEach.call(a, b, t)
      } : function (a, b, t) {
        for (var e = a.length, n = "string" == typeof a ? a.split("") : a, r = 0; r < e; r++) r in n && b.call(t, n[r], r, a)
      };

      function S(a) {
        return Array.prototype.concat.apply([], arguments)
      }

      function D(a) {
        var b = a.length;
        if (0 < b) {
          for (var t = Array(b), e = 0; e < b; e++) t[e] = a[e];
          return t
        }
        return []
      }

      function x(a) {
        return /^[\s\xa0]*$/.test(a)
      }

      var O, L = String.prototype.trim ? function (a) {
        return a.trim()
      } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
      };

      function k(a, b) {
        return -1 != a.indexOf(b)
      }

      function C(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
      }

      t:{
        var R = f.navigator;
        if (R) {
          var P = R.userAgent;
          if (P) {
            O = P;
            break t
          }
        }
        O = ""
      }

      function U(a, b, t) {
        for (var e in a) b.call(t, a[e], e, a)
      }

      function V(a) {
        var b = {};
        for (var t in a) b[t] = a[t];
        return b
      }

      var M = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

      function F(a, b) {
        for (var t, e, n = 1; n < arguments.length; n++) {
          for (t in e = arguments[n]) a[t] = e[t];
          for (var r = 0; r < M.length; r++) t = M[r], Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t])
        }
      }

      function j(a) {
        return j[" "](a), a
      }

      j[" "] = l;
      var B, a, G = k(O, "Opera"), z = k(O, "Trident") || k(O, "MSIE"), W = k(O, "Edge"), H = W || z,
        K = k(O, "Gecko") && !(k(O.toLowerCase(), "webkit") && !k(O, "Edge")) && !(k(O, "Trident") || k(O, "MSIE")) && !k(O, "Edge"),
        Q = k(O.toLowerCase(), "webkit") && !k(O, "Edge");

      function X() {
        var a = f.document;
        return a ? a.documentMode : void 0
      }

      t:{
        var Y = "",
          J = (a = O, K ? /rv:([^\);]+)(\)|;)/.exec(a) : W ? /Edge\/([\d\.]+)/.exec(a) : z ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a) : Q ? /WebKit\/(\S+)/.exec(a) : G ? /(?:Version)[ \/]?(\S+)/.exec(a) : void 0);
        if (J && (Y = J ? J[1] : ""), z) {
          var $ = X();
          if (null != $ && $ > parseFloat(Y)) {
            B = String($);
            break t
          }
        }
        B = Y
      }
      var Z, tt = {};

      function et(a) {
        return function (a, b) {
          var t = tt;
          return Object.prototype.hasOwnProperty.call(t, a) ? t[a] : t[a] = b(a)
        }(a, (function () {
          for (var b = 0, t = L(String(B)).split("."), e = L(String(a)).split("."), n = Math.max(t.length, e.length), r = 0; 0 == b && r < n; r++) {
            var o = t[r] || "", c = e[r] || "";
            do {
              if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""], 0 == o[0].length && 0 == c[0].length) break;
              b = C(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == c[1].length ? 0 : parseInt(c[1], 10)) || C(0 == o[2].length, 0 == c[2].length) || C(o[2], c[2]), o = o[3], c = c[3]
            } while (0 == b)
          }
          return 0 <= b
        }))
      }

      if (f.document && z) {
        var nt = X();
        Z = nt || (parseInt(B, 10) || void 0)
      } else Z = void 0;
      var it = Z, ot = !z || 9 <= Number(it), st = z && !et("9"), ut = function () {
        if (!f.addEventListener || !Object.defineProperty) return !1;
        var a = !1, b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0
          }
        });
        try {
          f.addEventListener("test", l, b), f.removeEventListener("test", l, b)
        } catch (t) {
        }
        return a
      }();

      function at(a, b) {
        this.type = a, this.a = this.target = b, this.defaultPrevented = !1
      }

      function ct(a, b) {
        if (at.call(this, a ? a.type : ""), this.relatedTarget = this.a = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.c = null, a) {
          var t = this.type = a.type, e = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
          if (this.target = a.target || a.srcElement, this.a = b, b = a.relatedTarget) {
            if (K) {
              t:{
                try {
                  j(b.nodeName);
                  var n = !0;
                  break t
                } catch (t) {
                }
                n = !1
              }
              n || (b = null)
            }
          } else "mouseover" == t ? b = a.fromElement : "mouseout" == t && (b = a.toElement);
          this.relatedTarget = b, e ? (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0), this.button = a.button, this.key = a.key || "", this.ctrlKey = a.ctrlKey, this.altKey = a.altKey, this.shiftKey = a.shiftKey, this.metaKey = a.metaKey, this.pointerId = a.pointerId || 0, this.pointerType = "string" == typeof a.pointerType ? a.pointerType : ht[a.pointerType] || "", this.c = a, a.defaultPrevented && this.b()
        }
      }

      at.prototype.b = function () {
        this.defaultPrevented = !0
      }, T(ct, at);
      var ht = {2: "touch", 3: "pen", 4: "mouse"};
      ct.prototype.b = function () {
        ct.S.b.call(this);
        var a = this.c;
        if (a.preventDefault) a.preventDefault(); else if (a.returnValue = !1, st) try {
          (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) && (a.keyCode = -1)
        } catch (t) {
        }
      };
      var ft = "closure_listenable_" + (1e6 * Math.random() | 0), lt = 0;

      function pt(a, b, t, e, n) {
        this.listener = a, this.proxy = null, this.src = b, this.type = t, this.capture = !!e, this.ca = n, this.key = ++lt, this.Y = this.Z = !1
      }

      function vt(a) {
        a.Y = !0, a.listener = null, a.proxy = null, a.src = null, a.ca = null
      }

      function yt(a) {
        this.src = a, this.a = {}, this.b = 0
      }

      function gt(a, b) {
        var t = b.type;
        if (t in a.a) {
          var e, n = a.a[t], r = A(n, b);
          (e = 0 <= r) && Array.prototype.splice.call(n, r, 1), e && (vt(b), 0 == a.a[t].length && (delete a.a[t], a.b--))
        }
      }

      function mt(a, b, t, e) {
        for (var n = 0; n < a.length; ++n) {
          var r = a[n];
          if (!r.Y && r.listener == b && r.capture == !!t && r.ca == e) return n
        }
        return -1
      }

      yt.prototype.add = function (a, b, t, e, n) {
        var r = a.toString();
        (a = this.a[r]) || (a = this.a[r] = [], this.b++);
        var o = mt(a, b, e, n);
        return -1 < o ? (b = a[o], t || (b.Z = !1)) : ((b = new pt(b, this.src, r, !!e, n)).Z = t, a.push(b)), b
      };
      var wt = "closure_lm_" + (1e6 * Math.random() | 0), bt = {};

      function _t(a, b, t, e, n) {
        if (e && e.once) return function t(a, b, e, n, r) {
          if (Array.isArray(b)) {
            for (var o = 0; o < b.length; o++) t(a, b[o], e, n, r);
            return null
          }
          return e = xt(e), a && a[ft] ? a.wa(b, e, y(n) ? !!n.capture : !!n, r) : Et(a, b, e, !0, n, r)
        }(a, b, t, e, n);
        if (Array.isArray(b)) {
          for (var r = 0; r < b.length; r++) _t(a, b[r], t, e, n);
          return null
        }
        return t = xt(t), a && a[ft] ? a.va(b, t, y(e) ? !!e.capture : !!e, n) : Et(a, b, t, !1, e, n)
      }

      function Et(a, b, t, e, n, r) {
        if (!b) throw Error("Invalid event type");
        var o = y(n) ? !!n.capture : !!n;
        if (o && !ot) return null;
        var c = St(a);
        if (c || (a[wt] = c = new yt(a)), (t = c.add(b, t, e, o, r)).proxy) return t;
        if (e = function () {
          var a = Nt, b = ot ? function (t) {
            return a.call(b.src, b.listener, t)
          } : function (t) {
            if (!(t = a.call(b.src, b.listener, t))) return t
          };
          return b
        }(), t.proxy = e, e.src = a, e.listener = t, a.addEventListener) ut || (n = o), void 0 === n && (n = !1), a.addEventListener(b.toString(), e, n); else if (a.attachEvent) a.attachEvent(Tt(b.toString()), e); else {
          if (!a.addListener || !a.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
          a.addListener(e)
        }
        return t
      }

      function It(a) {
        if ("number" != typeof a && a && !a.Y) {
          var b = a.src;
          if (b && b[ft]) gt(b.c, a); else {
            var t = a.type, e = a.proxy;
            b.removeEventListener ? b.removeEventListener(t, e, a.capture) : b.detachEvent ? b.detachEvent(Tt(t), e) : b.addListener && b.removeListener && b.removeListener(e), (t = St(b)) ? (gt(t, a), 0 == t.b && (t.src = null, b[wt] = null)) : vt(a)
          }
        }
      }

      function Tt(a) {
        return a in bt ? bt[a] : bt[a] = "on" + a
      }

      function At(a, b) {
        var t = a.listener, e = a.ca || a.src;
        return a.Z && It(a), t.call(e, b)
      }

      function Nt(a, b) {
        if (a.Y) return !0;
        if (!ot) {
          if (!b) t:{
            b = ["window", "event"];
            for (var t = f, e = 0; e < b.length; e++) if (null == (t = t[b[e]])) {
              b = null;
              break t
            }
            b = t
          }
          return At(a, b = new ct(b, this))
        }
        return At(a, new ct(b, this))
      }

      function St(a) {
        return (a = a[wt]) instanceof yt ? a : null
      }

      var Dt = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

      function xt(a) {
        return "function" == d(a) ? a : (a[Dt] || (a[Dt] = function (b) {
          return a.handleEvent(b)
        }), a[Dt])
      }

      function Ot() {
        u.call(this), this.c = new yt(this), this.J = this, this.C = null
      }

      function Lt(a, b, t, e) {
        if (!(b = a.c.a[String(b)])) return !0;
        b = b.concat();
        for (var n = !0, r = 0; r < b.length; ++r) {
          var o = b[r];
          if (o && !o.Y && o.capture == t) {
            var c = o.listener, h = o.ca || o.src;
            o.Z && gt(a.c, o), n = !1 !== c.call(h, e) && n
          }
        }
        return n && !e.defaultPrevented
      }

      T(Ot, u), Ot.prototype[ft] = !0, (g = Ot.prototype).addEventListener = function (a, b, t, e) {
        _t(this, a, b, t, e)
      }, g.removeEventListener = function (a, b, t, e) {
        !function t(a, b, e, n, r) {
          if (Array.isArray(b)) for (var o = 0; o < b.length; o++) t(a, b[o], e, n, r); else n = y(n) ? !!n.capture : !!n, e = xt(e), a && a[ft] ? (a = a.c, (b = String(b).toString()) in a.a && (-1 < (e = mt(o = a.a[b], e, n, r)) && (vt(o[e]), Array.prototype.splice.call(o, e, 1), 0 == o.length && (delete a.a[b], a.b--)))) : a && (a = St(a)) && (b = a.a[b.toString()], a = -1, b && (a = mt(b, e, n, r)), (e = -1 < a ? b[a] : null) && It(e))
        }(this, a, b, t, e)
      }, g.dispatchEvent = function (a) {
        var b, t = this.C;
        if (t) for (b = []; t; t = t.C) b.push(t);
        t = this.J;
        var e = a.type || a;
        if ("string" == typeof a) a = new at(a, t); else if (a instanceof at) a.target = a.target || t; else {
          var n = a;
          F(a = new at(e, t), n)
        }
        if (n = !0, b) for (var r = b.length - 1; 0 <= r; r--) {
          var o = a.a = b[r];
          n = Lt(o, e, !0, a) && n
        }
        if (n = Lt(o = a.a = t, e, !0, a) && n, n = Lt(o, e, !1, a) && n, b) for (r = 0; r < b.length; r++) n = Lt(o = a.a = b[r], e, !1, a) && n;
        return n
      }, g.G = function () {
        if (Ot.S.G.call(this), this.c) {
          var t, a = this.c;
          for (t in a.a) {
            for (var e = a.a[t], n = 0; n < e.length; n++) vt(e[n]);
            delete a.a[t], a.b--
          }
        }
        this.C = null
      }, g.va = function (a, b, t, e) {
        return this.c.add(String(a), b, !1, t, e)
      }, g.wa = function (a, b, t, e) {
        return this.c.add(String(a), b, !0, t, e)
      };
      var kt = f.JSON.stringify;

      function Ct() {
        this.b = this.a = null
      }

      var Rt, Pt = new (function () {
        function t(a, b, t) {
          this.f = t, this.c = a, this.g = b, this.b = 0, this.a = null
        }

        return t.prototype.get = function () {
          var a;
          return 0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c(), a
        }, t
      }())((function () {
        return new Vt
      }), (function (a) {
        a.reset()
      }), 100);

      function Ut() {
        var a = qt, b = null;
        return a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null), b
      }

      function Vt() {
        this.next = this.b = this.a = null
      }

      function Mt(a) {
        f.setTimeout((function () {
          throw a
        }), 0)
      }

      function Ft(a, b) {
        Rt || function () {
          var a = f.Promise.resolve(void 0);
          Rt = function () {
            a.then(Bt)
          }
        }(), jt || (Rt(), jt = !0), qt.add(a, b)
      }

      Ct.prototype.add = function (a, b) {
        var t = Pt.get();
        t.set(a, b), this.b ? this.b.next = t : this.a = t, this.b = t
      }, Vt.prototype.set = function (a, b) {
        this.a = a, this.b = b, this.next = null
      }, Vt.prototype.reset = function () {
        this.next = this.b = this.a = null
      };
      var jt = !1, qt = new Ct;

      function Bt() {
        for (var a; a = Ut();) {
          try {
            a.a.call(a.b)
          } catch (t) {
            Mt(t)
          }
          var b = Pt;
          b.g(a), b.b < b.f && (b.b++, a.next = b.a, b.a = a)
        }
        jt = !1
      }

      function Gt(a, b) {
        Ot.call(this), this.b = a || 1, this.a = b || f, this.f = p(this.Ya, this), this.g = q()
      }

      function zt(a) {
        a.aa = !1, a.M && (a.a.clearTimeout(a.M), a.M = null)
      }

      function Wt(a, b, t) {
        if ("function" == d(a)) t && (a = p(a, t)); else {
          if (!a || "function" != typeof a.handleEvent) throw Error("Invalid listener argument");
          a = p(a.handleEvent, a)
        }
        return 2147483647 < Number(b) ? -1 : f.setTimeout(a, b || 0)
      }

      function Ht(a) {
        a.a = Wt((function () {
          a.a = null, a.c && (a.c = !1, Ht(a))
        }), a.h);
        var b = a.b;
        a.b = null, a.g.apply(null, b)
      }

      T(Gt, Ot), (g = Gt.prototype).aa = !1, g.M = null, g.Ya = function () {
        if (this.aa) {
          var a = q() - this.g;
          0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), this.dispatchEvent("tick"), this.aa && (zt(this), this.start()))
        }
      }, g.start = function () {
        this.aa = !0, this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q())
      }, g.G = function () {
        Gt.S.G.call(this), zt(this), delete this.a
      };
      var Kt = function (t) {
        function e(a, b, e) {
          var n = t.call(this) || this;
          return n.g = null != e ? a.bind(e) : a, n.h = b, n.b = null, n.c = !1, n.a = null, n
        }

        return function (t, b) {
          function e() {
            this.constructor = t
          }

          r(t, b), t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype, new e)
        }(e, t), e.prototype.f = function (a) {
          this.b = arguments, this.a ? this.c = !0 : Ht(this)
        }, e.prototype.G = function () {
          t.prototype.G.call(this), this.a && (f.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null)
        }, e
      }(u);

      function Qt(a) {
        u.call(this), this.b = a, this.a = {}
      }

      T(Qt, u);
      var Xt = [];

      function Yt(a, b, t, e) {
        Array.isArray(t) || (t && (Xt[0] = t.toString()), t = Xt);
        for (var n = 0; n < t.length; n++) {
          var r = _t(b, t[n], e || a.handleEvent, !1, a.b || a);
          if (!r) break;
          a.a[r.key] = r
        }
      }

      function Jt(a) {
        U(a.a, (function (b, t) {
          this.a.hasOwnProperty(t) && It(b)
        }), a), a.a = {}
      }

      function $t() {
        this.a = !0
      }

      function Zt(a, b, t, e) {
        a.info((function () {
          return "XMLHTTP TEXT (" + b + "): " + function (a, b) {
            if (!a.a) return b;
            if (!b) return null;
            try {
              var t = JSON.parse(b);
              if (t) for (a = 0; a < t.length; a++) if (Array.isArray(t[a])) {
                var e = t[a];
                if (!(2 > e.length)) {
                  var n = e[1];
                  if (Array.isArray(n) && !(1 > n.length)) {
                    var r = n[0];
                    if ("noop" != r && "stop" != r && "close" != r) for (var o = 1; o < n.length; o++) n[o] = ""
                  }
                }
              }
              return kt(t)
            } catch (t) {
              return b
            }
          }(a, t) + (e ? " " + e : "")
        }))
      }

      Qt.prototype.G = function () {
        Qt.S.G.call(this), Jt(this)
      }, Qt.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented")
      }, $t.prototype.info = function () {
      };
      var te = null;

      function ee() {
        return te = te || new Ot
      }

      function ne(a) {
        at.call(this, "serverreachability", a)
      }

      function re(a) {
        var b = ee();
        b.dispatchEvent(new ne(b, a))
      }

      function ie(a) {
        at.call(this, "statevent", a)
      }

      function oe(a) {
        var b = ee();
        b.dispatchEvent(new ie(b, a))
      }

      function se(a) {
        at.call(this, "timingevent", a)
      }

      function ue(a, b) {
        if ("function" != d(a)) throw Error("Fn must not be null and must be a function");
        return f.setTimeout((function () {
          a()
        }), b)
      }

      T(ne, at), T(ie, at), T(se, at);
      var ae = {NO_ERROR: 0, Za: 1, gb: 2, fb: 3, bb: 4, eb: 5, hb: 6, Da: 7, TIMEOUT: 8, kb: 9}, ce = {
        ab: "complete",
        ob: "success",
        Ea: "error",
        Da: "abort",
        mb: "ready",
        nb: "readystatechange",
        TIMEOUT: "timeout",
        ib: "incrementaldata",
        lb: "progress",
        cb: "downloadprogress",
        pb: "uploadprogress"
      };

      function he() {
      }

      function fe(a) {
        var b;
        return (b = a.a) || (b = a.a = {}), b
      }

      function le() {
      }

      he.prototype.a = null;
      var pe, de = {OPEN: "a", $a: "b", Ea: "c", jb: "d"};

      function ve() {
        at.call(this, "d")
      }

      function ye() {
        at.call(this, "c")
      }

      function ge() {
      }

      function me(a, b, t, e) {
        this.g = a, this.c = b, this.f = t, this.T = e || 1, this.J = new Qt(this), this.P = we, a = H ? 125 : void 0, this.R = new Gt(a), this.B = null, this.b = !1, this.j = this.l = this.i = this.H = this.u = this.U = this.o = null, this.s = [], this.a = null, this.D = 0, this.h = this.m = null, this.N = -1, this.A = !1, this.O = 0, this.F = null, this.W = this.C = this.V = this.I = !1
      }

      T(ve, at), T(ye, at), T(ge, he), pe = new ge;
      var we = 45e3, be = {}, _e = {};

      function Ee(a, b, t) {
        a.H = 1, a.i = ze(Me(b)), a.j = t, a.I = !0, Ie(a, null)
      }

      function Ie(a, b) {
        a.u = q(), Ne(a), a.l = Me(a.i);
        var t = a.l, e = a.T;
        Array.isArray(e) || (e = [String(e)]), nn(t.b, "t", e), a.D = 0, a.a = Yn(a.g, a.g.C ? b : null), 0 < a.O && (a.F = new Kt(p(a.Ca, a, a.a), a.O)), Yt(a.J, a.a, "readystatechange", a.Wa), b = a.B ? V(a.B) : {}, a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b)), re(1), function (a, b, t, e, n, r) {
          a.info((function () {
            if (a.a) if (r) for (var o = "", c = r.split("&"), h = 0; h < c.length; h++) {
              var f = c[h].split("=");
              if (1 < f.length) {
                var l = f[0];
                f = f[1];
                var d = l.split("_");
                o = 2 <= d.length && "type" == d[1] ? o + (l + "=") + f + "&" : o + (l + "=redacted&")
              }
            } else o = null; else o = r;
            return "XMLHTTP REQ (" + e + ") [attempt " + n + "]: " + b + "\n" + t + "\n" + o
          }))
        }(a.c, a.m, a.l, a.f, a.T, a.j)
      }

      function Te(a, b, t) {
        for (var e = !0; !a.A && a.D < t.length;) {
          var n = Ae(a, t);
          if (n == _e) {
            4 == b && (a.h = 4, oe(14), e = !1), Zt(a.c, a.f, null, "[Incomplete Response]");
            break
          }
          if (n == be) {
            a.h = 4, oe(15), Zt(a.c, a.f, t, "[Invalid Chunk]"), e = !1;
            break
          }
          Zt(a.c, a.f, n, null), Le(a, n)
        }
        4 == b && 0 == t.length && (a.h = 1, oe(16), e = !1), a.b = a.b && e, e ? 0 < t.length && !a.W && (a.W = !0, (b = a.g).a == a && b.V && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + t.length), Bn(b), b.F = !0)) : (Zt(a.c, a.f, t, "[Invalid Chunked Response]"), Oe(a), xe(a))
      }

      function Ae(a, b) {
        var t = a.D, e = b.indexOf("\n", t);
        return -1 == e ? _e : (t = Number(b.substring(t, e)), isNaN(t) ? be : (e += 1) + t > b.length ? _e : (b = b.substr(e, t), a.D = e + t, b))
      }

      function Ne(a) {
        a.U = q() + a.P, Se(a, a.P)
      }

      function Se(a, b) {
        if (null != a.o) throw Error("WatchDog timer not null");
        a.o = ue(p(a.Ua, a), b)
      }

      function De(a) {
        a.o && (f.clearTimeout(a.o), a.o = null)
      }

      function xe(a) {
        0 == a.g.v || a.A || Wn(a.g, a)
      }

      function Oe(a) {
        De(a);
        var b = a.F;
        b && "function" == typeof b.ja && b.ja(), a.F = null, zt(a.R), Jt(a.J), a.a && (b = a.a, a.a = null, b.abort(), b.ja())
      }

      function Le(a, b) {
        try {
          var t = a.g;
          if (0 != t.v && (t.a == a || hn(t.b, a))) if (t.I = a.N, !a.C && hn(t.b, a) && 3 == t.v) {
            try {
              var e = t.ka.a.parse(b)
            } catch (t) {
              e = null
            }
            if (Array.isArray(e) && 3 == e.length) {
              var n = e;
              if (0 == n[0]) {
                t:if (!t.j) {
                  if (t.a) {
                    if (!(t.a.u + 3e3 < a.u)) break t;
                    zn(t), Cn(t)
                  }
                  qn(t), oe(18)
                }
              } else t.oa = n[1], 0 < t.oa - t.P && 37500 > n[2] && t.H && 0 == t.o && !t.m && (t.m = ue(p(t.Ra, t), 6e3));
              if (1 >= cn(t.b) && t.ea) {
                try {
                  t.ea()
                } catch (t) {
                }
                t.ea = void 0
              }
            } else Kn(t, 11)
          } else if ((a.C || t.a == a) && zn(t), !x(b)) for (b = e = t.ka.a.parse(b), e = 0; e < b.length; e++) if (n = b[e], t.P = n[0], n = n[1], 2 == t.v) if ("c" == n[0]) {
            t.J = n[1], t.ga = n[2];
            var r = n[3];
            null != r && (t.ha = r, t.c.info("VER=" + t.ha));
            var o = n[4];
            null != o && (t.pa = o, t.c.info("SVER=" + t.pa));
            var c = n[5];
            if (null != c && "number" == typeof c && 0 < c) {
              var h = 1.5 * c;
              t.D = h, t.c.info("backChannelRequestTimeoutMs_=" + h)
            }
            h = t;
            var f = a.a;
            if (f) {
              var l = f.a ? f.a.getResponseHeader("X-Client-Wire-Protocol") : null;
              if (l) {
                var d = h.b;
                !d.a && (k(l, "spdy") || k(l, "quic") || k(l, "h2")) && (d.f = d.g, d.a = new Set, d.b && (fn(d, d.b), d.b = null))
              }
              if (h.A) {
                var v = f.a ? f.a.getResponseHeader("X-HTTP-Session-Id") : null;
                v && (h.na = v, Ge(h.B, h.A, v))
              }
            }
            t.v = 3, t.f && t.f.ta(), t.V && (t.N = q() - a.u, t.c.info("Handshake RTT: " + t.N + "ms"));
            var y = a;
            if ((h = t).la = Xn(h, h.C ? h.ga : null, h.fa), y.C) {
              ln(h.b, y);
              var m = y, w = h.D;
              w && m.setTimeout(w), m.o && (De(m), Ne(m)), h.a = y
            } else jn(h);
            0 < t.g.length && Un(t)
          } else "stop" != n[0] && "close" != n[0] || Kn(t, 7); else 3 == t.v && ("stop" == n[0] || "close" == n[0] ? "stop" == n[0] ? Kn(t, 7) : kn(t) : "noop" != n[0] && t.f && t.f.sa(n), t.o = 0);
          re(4)
        } catch (t) {
        }
      }

      function ke(a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0); else if (v(a) || "string" == typeof a) N(a, b, void 0); else {
          if (a.L && "function" == typeof a.L) var t = a.L(); else if (a.K && "function" == typeof a.K) t = void 0; else if (v(a) || "string" == typeof a) {
            t = [];
            for (var e = a.length, n = 0; n < e; n++) t.push(n)
          } else for (n in t = [], e = 0, a) t[e++] = n;
          n = (e = function (a) {
            if (a.K && "function" == typeof a.K) return a.K();
            if ("string" == typeof a) return a.split("");
            if (v(a)) {
              for (var b = [], t = a.length, e = 0; e < t; e++) b.push(a[e]);
              return b
            }
            for (e in b = [], t = 0, a) b[t++] = a[e];
            return b
          }(a)).length;
          for (var r = 0; r < n; r++) b.call(void 0, e[r], t && t[r], a)
        }
      }

      function Ce(a, b) {
        this.b = {}, this.a = [], this.c = 0;
        var t = arguments.length;
        if (1 < t) {
          if (t % 2) throw Error("Uneven number of arguments");
          for (var e = 0; e < t; e += 2) this.set(arguments[e], arguments[e + 1])
        } else if (a) if (a instanceof Ce) for (t = a.L(), e = 0; e < t.length; e++) this.set(t[e], a.get(t[e])); else for (e in a) this.set(e, a[e])
      }

      function Re(a) {
        if (a.c != a.a.length) {
          for (var b = 0, t = 0; b < a.a.length;) {
            var e = a.a[b];
            Pe(a.b, e) && (a.a[t++] = e), b++
          }
          a.a.length = t
        }
        if (a.c != a.a.length) {
          var n = {};
          for (t = b = 0; b < a.a.length;) Pe(n, e = a.a[b]) || (a.a[t++] = e, n[e] = 1), b++;
          a.a.length = t
        }
      }

      function Pe(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
      }

      (g = me.prototype).setTimeout = function (a) {
        this.P = a
      }, g.Wa = function (a) {
        a = a.target;
        var b = this.F;
        b && 3 == Dn(a) ? b.f() : this.Ca(a)
      }, g.Ca = function (a) {
        try {
          if (a == this.a) t:{
            var b = Dn(this.a), t = this.a.ua(), e = this.a.X();
            if (!(3 > b || 3 == b && !H && !this.a.$())) {
              this.A || 4 != b || 7 == t || re(8 == t || 0 >= e ? 3 : 2), De(this);
              var n = this.a.X();
              this.N = n;
              var r = this.a.$();
              if (this.b = 200 == n, function (a, b, t, e, n, r, o) {
                a.info((function () {
                  return "XMLHTTP RESP (" + e + ") [ attempt " + n + "]: " + b + "\n" + t + "\n" + r + " " + o
                }))
              }(this.c, this.m, this.l, this.f, this.T, b, n), this.b) {
                if (this.V && !this.C) {
                  e:{
                    if (this.a) {
                      var o, c = this.a;
                      if ((o = c.a ? c.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !x(o)) {
                        var h = o;
                        break e
                      }
                    }
                    h = null
                  }
                  if (!h) {
                    this.b = !1, this.h = 3, oe(12), Oe(this), xe(this);
                    break t
                  }
                  Zt(this.c, this.f, h, "Initial handshake response via X-HTTP-Initial-Response"), this.C = !0, Le(this, h)
                }
                this.I ? (Te(this, b, r), H && this.b && 3 == b && (Yt(this.J, this.R, "tick", this.Va), this.R.start())) : (Zt(this.c, this.f, r, null), Le(this, r)), 4 == b && Oe(this), this.b && !this.A && (4 == b ? Wn(this.g, this) : (this.b = !1, Ne(this)))
              } else 400 == n && 0 < r.indexOf("Unknown SID") ? (this.h = 3, oe(12)) : (this.h = 0, oe(13)), Oe(this), xe(this)
            }
          }
        } catch (t) {
        }
      }, g.Va = function () {
        if (this.a) {
          var a = Dn(this.a), b = this.a.$();
          this.D < b.length && (De(this), Te(this, a, b), this.b && 4 != a && Ne(this))
        }
      }, g.cancel = function () {
        this.A = !0, Oe(this)
      }, g.Ua = function () {
        this.o = null;
        var a = q();
        0 <= a - this.U ? (function (a, b) {
          a.info((function () {
            return "TIMEOUT: " + b
          }))
        }(this.c, this.l), 2 != this.H && (re(3), oe(17)), Oe(this), this.h = 2, xe(this)) : Se(this, this.U - a)
      }, (g = Ce.prototype).K = function () {
        Re(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
      }, g.L = function () {
        return Re(this), this.a.concat()
      }, g.get = function (a, b) {
        return Pe(this.b, a) ? this.b[a] : b
      }, g.set = function (a, b) {
        Pe(this.b, a) || (this.c++, this.a.push(a)), this.b[a] = b
      }, g.forEach = function (a, b) {
        for (var t = this.L(), e = 0; e < t.length; e++) {
          var n = t[e], r = this.get(n);
          a.call(b, r, n, this)
        }
      };
      var Ue = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

      function Ve(a, b) {
        if (this.c = this.j = this.f = "", this.h = null, this.i = this.g = "", this.a = !1, a instanceof Ve) {
          this.a = void 0 !== b ? b : a.a, Fe(this, a.f), this.j = a.j, je(this, a.c), qe(this, a.h), this.g = a.g, b = a.b;
          var t = new Ze;
          t.c = b.c, b.a && (t.a = new Ce(b.a), t.b = b.b), Be(this, t), this.i = a.i
        } else a && (t = String(a).match(Ue)) ? (this.a = !!b, Fe(this, t[1] || "", !0), this.j = We(t[2] || ""), je(this, t[3] || "", !0), qe(this, t[4]), this.g = We(t[5] || "", !0), Be(this, t[6] || "", !0), this.i = We(t[7] || "")) : (this.a = !!b, this.b = new Ze(null, this.a))
      }

      function Me(a) {
        return new Ve(a)
      }

      function Fe(a, b, t) {
        a.f = t ? We(b, !0) : b, a.f && (a.f = a.f.replace(/:$/, ""))
      }

      function je(a, b, t) {
        a.c = t ? We(b, !0) : b
      }

      function qe(a, b) {
        if (b) {
          if (b = Number(b), isNaN(b) || 0 > b) throw Error("Bad port number " + b);
          a.h = b
        } else a.h = null
      }

      function Be(a, b, t) {
        b instanceof Ze ? (a.b = b, function (a, b) {
          b && !a.f && (tn(a), a.c = null, a.a.forEach((function (t, e) {
            var n = e.toLowerCase();
            e != n && (dd(this, e), nn(this, n, t))
          }), a)), a.f = b
        }(a.b, a.a)) : (t || (b = He(b, Je)), a.b = new Ze(b, a.a))
      }

      function Ge(a, b, t) {
        a.b.set(b, t)
      }

      function ze(a) {
        return Ge(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36)), a
      }

      function We(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
      }

      function He(a, b, t) {
        return "string" == typeof a ? (a = encodeURI(a).replace(b, Ke), t && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
      }

      function Ke(a) {
        return "%" + ((a = a.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & a).toString(16)
      }

      Ve.prototype.toString = function () {
        var a = [], b = this.f;
        b && a.push(He(b, Qe, !0), ":");
        var t = this.c;
        return (t || "file" == b) && (a.push("//"), (b = this.j) && a.push(He(b, Qe, !0), "@"), a.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (t = this.h) && a.push(":", String(t))), (t = this.g) && (this.c && "/" != t.charAt(0) && a.push("/"), a.push(He(t, "/" == t.charAt(0) ? Ye : Xe, !0))), (t = this.b.toString()) && a.push("?", t), (t = this.i) && a.push("#", He(t, $e)), a.join("")
      };
      var Qe = /[#\/\?@]/g, Xe = /[#\?:]/g, Ye = /[#\?]/g, Je = /[#\?@]/g, $e = /#/g;

      function Ze(a, b) {
        this.b = this.a = null, this.c = a || null, this.f = !!b
      }

      function tn(a) {
        a.a || (a.a = new Ce, a.b = 0, a.c && function (a, b) {
          if (a) {
            a = a.split("&");
            for (var t = 0; t < a.length; t++) {
              var e = a[t].indexOf("="), n = null;
              if (0 <= e) {
                var r = a[t].substring(0, e);
                n = a[t].substring(e + 1)
              } else r = a[t];
              b(r, n ? decodeURIComponent(n.replace(/\+/g, " ")) : "")
            }
          }
        }(a.c, (function (b, t) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), t)
        })))
      }

      function dd(a, b) {
        tn(a), b = rn(a, b), Pe(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, Pe((a = a.a).b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Re(a)))
      }

      function en(a, b) {
        return tn(a), b = rn(a, b), Pe(a.a.b, b)
      }

      function nn(a, b, t) {
        dd(a, b), 0 < t.length && (a.c = null, a.a.set(rn(a, b), D(t)), a.b += t.length)
      }

      function rn(a, b) {
        return b = String(b), a.f && (b = b.toLowerCase()), b
      }

      function on(a, b) {
        this.b = a, this.a = b
      }

      function sn(a) {
        this.g = a || un, f.PerformanceNavigationTiming ? a = 0 < (a = f.performance.getEntriesByType("navigation")).length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol) : a = !!(f.ia && f.ia.ya && f.ia.ya() && f.ia.ya().qb), this.f = a ? this.g : 1, this.a = null, 1 < this.f && (this.a = new Set), this.b = null, this.c = []
      }

      (g = Ze.prototype).add = function (a, b) {
        tn(this), this.c = null, a = rn(this, a);
        var t = this.a.get(a);
        return t || this.a.set(a, t = []), t.push(b), this.b += 1, this
      }, g.forEach = function (a, b) {
        tn(this), this.a.forEach((function (t, e) {
          N(t, (function (t) {
            a.call(b, t, e, this)
          }), this)
        }), this)
      }, g.L = function () {
        tn(this);
        for (var a = this.a.K(), b = this.a.L(), t = [], e = 0; e < b.length; e++) for (var n = a[e], r = 0; r < n.length; r++) t.push(b[e]);
        return t
      }, g.K = function (a) {
        tn(this);
        var b = [];
        if ("string" == typeof a) en(this, a) && (b = S(b, this.a.get(rn(this, a)))); else {
          a = this.a.K();
          for (var t = 0; t < a.length; t++) b = S(b, a[t])
        }
        return b
      }, g.set = function (a, b) {
        return tn(this), this.c = null, en(this, a = rn(this, a)) && (this.b -= this.a.get(a).length), this.a.set(a, [b]), this.b += 1, this
      }, g.get = function (a, b) {
        return a && 0 < (a = this.K(a)).length ? String(a[0]) : b
      }, g.toString = function () {
        if (this.c) return this.c;
        if (!this.a) return "";
        for (var a = [], b = this.a.L(), t = 0; t < b.length; t++) {
          var e = b[t], n = encodeURIComponent(String(e));
          e = this.K(e);
          for (var r = 0; r < e.length; r++) {
            var o = n;
            "" !== e[r] && (o += "=" + encodeURIComponent(String(e[r]))), a.push(o)
          }
        }
        return this.c = a.join("&")
      };
      var un = 10;

      function an(a) {
        return !!a.b || !!a.a && a.a.size >= a.f
      }

      function cn(a) {
        return a.b ? 1 : a.a ? a.a.size : 0
      }

      function hn(a, b) {
        return a.b ? a.b == b : !!a.a && a.a.has(b)
      }

      function fn(a, b) {
        a.a ? a.a.add(b) : a.b = b
      }

      function ln(a, b) {
        a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b)
      }

      function pn(a) {
        var t, e;
        if (null != a.b) return a.c.concat(a.b.s);
        if (null != a.a && 0 !== a.a.size) {
          var b = a.c;
          try {
            for (var n = o(a.a.values()), r = n.next(); !r.done; r = n.next()) {
              var c = r.value;
              b = b.concat(c.s)
            }
          } catch (e) {
            t = {error: e}
          } finally {
            try {
              r && !r.done && (e = n.return) && e.call(n)
            } finally {
              if (t) throw t.error
            }
          }
          return b
        }
        return D(a.c)
      }

      function dn() {
      }

      function vn() {
        this.a = new dn
      }

      function yn(a, b, t) {
        var e = t || "";
        try {
          ke(a, (function (t, n) {
            var r = t;
            y(t) && (r = kt(t)), b.push(e + n + "=" + encodeURIComponent(r))
          }))
        } catch (t) {
          throw b.push(e + "type=" + encodeURIComponent("_badmap")), t
        }
      }

      function gn(a, b, t, e, n) {
        try {
          b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, n(e)
        } catch (t) {
        }
      }

      sn.prototype.cancel = function () {
        var t, e;
        if (this.c = pn(this), this.b) this.b.cancel(), this.b = null; else if (this.a && 0 !== this.a.size) {
          try {
            for (var n = o(this.a.values()), r = n.next(); !r.done; r = n.next()) {
              r.value.cancel()
            }
          } catch (e) {
            t = {error: e}
          } finally {
            try {
              r && !r.done && (e = n.return) && e.call(n)
            } finally {
              if (t) throw t.error
            }
          }
          this.a.clear()
        }
      }, dn.prototype.stringify = function (a) {
        return f.JSON.stringify(a, void 0)
      }, dn.prototype.parse = function (a) {
        return f.JSON.parse(a, void 0)
      };
      var mn = f.JSON.parse;

      function wn(a) {
        Ot.call(this), this.headers = new Ce, this.H = a || null, this.b = !1, this.s = this.a = null, this.B = "", this.h = 0, this.f = "", this.g = this.A = this.l = this.u = !1, this.o = 0, this.m = null, this.I = bn, this.D = this.F = !1
      }

      T(wn, Ot);
      var bn = "", _n = /^https?$/i, En = ["POST", "PUT"];

      function In(a) {
        return "content-type" == a.toLowerCase()
      }

      function td(a, b) {
        a.b = !1, a.a && (a.g = !0, a.a.abort(), a.g = !1), a.f = b, a.h = 5, Tn(a), Nn(a)
      }

      function Tn(a) {
        a.u || (a.u = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
      }

      function An(a) {
        if (a.b && void 0 !== h && (!a.s[1] || 4 != Dn(a) || 2 != a.X())) if (a.l && 4 == Dn(a)) Wt(a.za, 0, a); else if (a.dispatchEvent("readystatechange"), 4 == Dn(a)) {
          a.b = !1;
          try {
            var t, b = a.X();
            t:switch (b) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var e = !0;
                break t;
              default:
                e = !1
            }
            if (!(t = e)) {
              var n;
              if (n = 0 === b) {
                var r = String(a.B).match(Ue)[1] || null;
                if (!r && f.self && f.self.location) {
                  var o = f.self.location.protocol;
                  r = o.substr(0, o.length - 1)
                }
                n = !_n.test(r ? r.toLowerCase() : "")
              }
              t = n
            }
            if (t) a.dispatchEvent("complete"), a.dispatchEvent("success"); else {
              a.h = 6;
              try {
                var c = 2 < Dn(a) ? a.a.statusText : ""
              } catch (t) {
                c = ""
              }
              a.f = c + " [" + a.X() + "]", Tn(a)
            }
          } finally {
            Nn(a)
          }
        }
      }

      function Nn(a, b) {
        if (a.a) {
          Sn(a);
          var t = a.a, e = a.s[0] ? l : null;
          a.a = null, a.s = null, b || a.dispatchEvent("ready");
          try {
            t.onreadystatechange = e
          } catch (t) {
          }
        }
      }

      function Sn(a) {
        a.a && a.D && (a.a.ontimeout = null), a.m && (f.clearTimeout(a.m), a.m = null)
      }

      function Dn(a) {
        return a.a ? a.a.readyState : 0
      }

      function xn(a, b, t) {
        t:{
          for (e in t) {
            var e = !1;
            break t
          }
          e = !0
        }
        e || (t = function (a) {
          var b = "";
          return U(a, (function (t, e) {
            b += e, b += ":", b += t, b += "\r\n"
          })), b
        }(t), "string" == typeof a ? null != t && encodeURIComponent(String(t)) : Ge(a, b, t))
      }

      function On(a, b, t) {
        return t && t.internalChannelParams && t.internalChannelParams[a] || b
      }

      function Ln(a) {
        this.pa = 0, this.g = [], this.c = new $t, this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.W = this.i = this.O = this.l = null, this.La = this.R = 0, this.Ia = On("failFast", !1, a), this.H = this.m = this.j = this.h = this.f = null, this.T = !0, this.I = this.oa = this.P = -1, this.U = this.o = this.u = 0, this.Fa = On("baseRetryDelayMs", 5e3, a), this.Ma = On("retryDelaySeedMs", 1e4, a), this.Ja = On("forwardChannelMaxRetries", 2, a), this.ma = On("forwardChannelRequestTimeoutMs", 2e4, a), this.Ka = a && a.g || void 0, this.D = void 0, this.C = a && a.supportsCrossDomainXhr || !1, this.J = "", this.b = new sn(a && a.concurrentRequestLimit), this.ka = new vn, this.da = a && a.fastHandshake || !1, this.Ga = a && a.b || !1, a && a.f && (this.c.a = !1), a && a.forceLongPolling && (this.T = !1), this.V = !this.da && this.T && a && a.c || !1, this.ea = void 0, this.N = 0, this.F = !1, this.s = null
      }

      function kn(a) {
        if (Rn(a), 3 == a.v) {
          var b = a.R++, t = Me(a.B);
          Ge(t, "SID", a.J), Ge(t, "RID", b), Ge(t, "TYPE", "terminate"), Mn(a, t), (b = new me(a, a.c, b, void 0)).H = 2, b.i = ze(Me(t)), t = !1, f.navigator && f.navigator.sendBeacon && (t = f.navigator.sendBeacon(b.i.toString(), "")), !t && f.Image && ((new Image).src = b.i, t = !0), t || (b.a = Yn(b.g, null), b.a.ba(b.i)), b.u = q(), Ne(b)
        }
        Qn(a)
      }

      function Cn(a) {
        a.a && (Bn(a), a.a.cancel(), a.a = null)
      }

      function Rn(a) {
        Cn(a), a.j && (f.clearTimeout(a.j), a.j = null), zn(a), a.b.cancel(), a.h && ("number" == typeof a.h && f.clearTimeout(a.h), a.h = null)
      }

      function Pn(a, b) {
        a.g.push(new on(a.La++, b)), 3 == a.v && Un(a)
      }

      function Un(a) {
        an(a.b) || a.h || (a.h = !0, Ft(a.Ba, a), a.u = 0)
      }

      function Vn(a, b) {
        var t;
        t = b ? b.f : a.R++;
        var e = Me(a.B);
        Ge(e, "SID", a.J), Ge(e, "RID", t), Ge(e, "AID", a.P), Mn(a, e), a.i && a.l && xn(e, a.i, a.l), t = new me(a, a.c, t, a.u + 1), null === a.i && (t.B = a.l), b && (a.g = b.s.concat(a.g)), b = Fn(a, t, 1e3), t.setTimeout(Math.round(.5 * a.ma) + Math.round(.5 * a.ma * Math.random())), fn(a.b, t), Ee(t, e, b)
      }

      function Mn(a, b) {
        a.f && ke({}, (function (t, e) {
          Ge(b, e, t)
        }))
      }

      function Fn(a, b, t) {
        t = Math.min(a.g.length, t);
        var e = a.f ? p(a.f.Ha, a.f, a) : null;
        t:for (var n = a.g, r = -1; ;) {
          var o = ["count=" + t];
          -1 == r ? 0 < t ? (r = n[0].b, o.push("ofs=" + r)) : r = 0 : o.push("ofs=" + r);
          for (var c = !0, h = 0; h < t; h++) {
            var f = n[h].b, l = n[h].a;
            if (0 > (f -= r)) r = Math.max(0, n[h].b - 100), c = !1; else try {
              yn(l, o, "req" + f + "_")
            } catch (t) {
              e && e(l)
            }
          }
          if (c) {
            e = o.join("&");
            break t
          }
        }
        return a = a.g.splice(0, t), b.s = a, e
      }

      function jn(a) {
        a.a || a.j || (a.U = 1, Ft(a.Aa, a), a.o = 0)
      }

      function qn(a) {
        return !(a.a || a.j || 3 <= a.o) && (a.U++, a.j = ue(p(a.Aa, a), Hn(a, a.o)), a.o++, !0)
      }

      function Bn(a) {
        null != a.s && (f.clearTimeout(a.s), a.s = null)
      }

      function Gn(a) {
        a.a = new me(a, a.c, "rpc", a.U), null === a.i && (a.a.B = a.l), a.a.O = 0;
        var b = Me(a.la);
        Ge(b, "RID", "rpc"), Ge(b, "SID", a.J), Ge(b, "CI", a.H ? "0" : "1"), Ge(b, "AID", a.P), Mn(a, b), Ge(b, "TYPE", "xmlhttp"), a.i && a.l && xn(b, a.i, a.l), a.D && a.a.setTimeout(a.D);
        var t = a.a;
        a = a.ga, t.H = 1, t.i = ze(Me(b)), t.j = null, t.I = !0, Ie(t, a)
      }

      function zn(a) {
        null != a.m && (f.clearTimeout(a.m), a.m = null)
      }

      function Wn(a, b) {
        var t = null;
        if (a.a == b) {
          zn(a), Bn(a), a.a = null;
          var e = 2
        } else {
          if (!hn(a.b, b)) return;
          t = b.s, ln(a.b, b), e = 1
        }
        if (a.I = b.N, 0 != a.v) if (b.b) if (1 == e) {
          t = b.j ? b.j.length : 0, b = q() - b.u;
          var n = a.u;
          (e = ee()).dispatchEvent(new se(e, t, b, n)), Un(a)
        } else jn(a); else if (3 == (n = b.h) || 0 == n && 0 < a.I || !(1 == e && function (a, b) {
          return !(cn(a.b) >= a.b.f - (a.h ? 1 : 0)) && (a.h ? (a.g = b.s.concat(a.g), !0) : !(1 == a.v || 2 == a.v || a.u >= (a.Ia ? 0 : a.Ja)) && (a.h = ue(p(a.Ba, a, b), Hn(a, a.u)), a.u++, !0))
        }(a, b) || 2 == e && qn(a))) switch (t && 0 < t.length && (b = a.b, b.c = b.c.concat(t)), n) {
          case 1:
            Kn(a, 5);
            break;
          case 4:
            Kn(a, 10);
            break;
          case 3:
            Kn(a, 6);
            break;
          default:
            Kn(a, 2)
        }
      }

      function Hn(a, b) {
        var t = a.Fa + Math.floor(Math.random() * a.Ma);
        return a.f || (t *= 2), t * b
      }

      function Kn(a, b) {
        if (a.c.info("Error code " + b), 2 == b) {
          var t = null;
          a.f && (t = null);
          var e = p(a.Xa, a);
          t || (t = new Ve("//www.google.com/images/cleardot.gif"), f.location && "http" == f.location.protocol || Fe(t, "https"), ze(t)), function (a, b) {
            var t = new $t;
            if (f.Image) {
              var e = new Image;
              e.onload = I(gn, t, e, "TestLoadImage: loaded", !0, b), e.onerror = I(gn, t, e, "TestLoadImage: error", !1, b), e.onabort = I(gn, t, e, "TestLoadImage: abort", !1, b), e.ontimeout = I(gn, t, e, "TestLoadImage: timeout", !1, b), f.setTimeout((function () {
                e.ontimeout && e.ontimeout()
              }), 1e4), e.src = a
            } else b(!1)
          }(t.toString(), e)
        } else oe(2);
        a.v = 0, a.f && a.f.ra(b), Qn(a), Rn(a)
      }

      function Qn(a) {
        a.v = 0, a.I = -1, a.f && (0 == pn(a.b).length && 0 == a.g.length || (a.b.c.length = 0, D(a.g), a.g.length = 0), a.f.qa())
      }

      function Xn(a, b, t) {
        var e = function (a) {
          return a instanceof Ve ? Me(a) : new Ve(a, void 0)
        }(t);
        if ("" != e.c) b && je(e, b + "." + e.c), qe(e, e.h); else {
          var n = f.location;
          e = function (a, b, t, e) {
            var n = new Ve(null, void 0);
            return a && Fe(n, a), b && je(n, b), t && qe(n, t), e && (n.g = e), n
          }(n.protocol, b ? b + "." + n.hostname : n.hostname, +n.port, t)
        }
        return a.W && U(a.W, (function (t, n) {
          Ge(e, n, t)
        })), b = a.A, t = a.na, b && t && Ge(e, b, t), Ge(e, "VER", a.ha), Mn(a, e), e
      }

      function Yn(a, b) {
        if (b && !a.C) throw Error("Can't create secondary domain capable XhrIo object.");
        return (b = new wn(a.Ka)).F = a.C, b
      }

      function Jn() {
      }

      function $n() {
        if (z && !(10 <= Number(it))) throw Error("Environmental error: no available transport.")
      }

      function Zn(a, b) {
        Ot.call(this), this.a = new Ln(b), this.l = a, this.b = b && b.messageUrlParams || null, a = b && b.messageHeaders || null, b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {"X-Client-Protocol": "webchannel"}), this.a.l = a, a = b && b.initMessageHeaders || null, b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = {"X-WebChannel-Content-Type": b.messageContentType}), b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = {"X-WebChannel-Client-Profile": b.a}), this.a.O = a, (a = b && b.httpHeadersOverwriteParam) && !x(a) && (this.a.i = a), this.h = b && b.supportsCrossDomainXhr || !1, this.g = b && b.sendRawJson || !1, (b = b && b.httpSessionIdParam) && !x(b) && (this.a.A = b, null !== (a = this.b) && b in a && (b in (a = this.b) && delete a[b])), this.f = new rr(this)
      }

      function er(a) {
        ve.call(this);
        var b = a.__sm__;
        if (b) {
          t:{
            for (var t in b) {
              a = t;
              break t
            }
            a = void 0
          }
          (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b
        } else this.data = a
      }

      function nr() {
        ye.call(this), this.status = 1
      }

      function rr(a) {
        this.a = a
      }

      (g = wn.prototype).ba = function (a, b, t, e) {
        if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET", this.B = a, this.f = "", this.h = 0, this.u = !1, this.b = !0, this.a = new XMLHttpRequest, this.s = this.H ? fe(this.H) : fe(pe), this.a.onreadystatechange = p(this.za, this);
        try {
          this.A = !0, this.a.open(b, String(a), !0), this.A = !1
        } catch (t) {
          return void td(this, t)
        }
        a = t || "";
        var n = new Ce(this.headers);
        e && ke(e, (function (t, e) {
          n.set(e, t)
        })), e = function (a) {
          t:{
            for (var b = In, t = a.length, e = "string" == typeof a ? a.split("") : a, n = 0; n < t; n++) if (n in e && b.call(void 0, e[n], n, a)) {
              b = n;
              break t
            }
            b = -1
          }
          return 0 > b ? null : "string" == typeof a ? a.charAt(b) : a[b]
        }(n.L()), t = f.FormData && a instanceof f.FormData, !(0 <= A(En, b)) || e || t || n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), n.forEach((function (t, e) {
          this.a.setRequestHeader(e, t)
        }), this), this.I && (this.a.responseType = this.I), "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
        try {
          Sn(this), 0 < this.o && ((this.D = function (a) {
            return z && et(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout
          }(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Wt(this.xa, this.o, this)), this.l = !0, this.a.send(a), this.l = !1
        } catch (t) {
          td(this, t)
        }
      }, g.xa = function () {
        void 0 !== h && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8))
      }, g.abort = function (a) {
        this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Nn(this))
      }, g.G = function () {
        this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), Nn(this, !0)), wn.S.G.call(this)
      }, g.za = function () {
        this.j || (this.A || this.l || this.g ? An(this) : this.Ta())
      }, g.Ta = function () {
        An(this)
      }, g.X = function () {
        try {
          return 2 < Dn(this) ? this.a.status : -1
        } catch (t) {
          return -1
        }
      }, g.$ = function () {
        try {
          return this.a ? this.a.responseText : ""
        } catch (t) {
          return ""
        }
      }, g.Na = function (a) {
        if (this.a) {
          var b = this.a.responseText;
          return a && 0 == b.indexOf(a) && (b = b.substring(a.length)), mn(b)
        }
      }, g.ua = function () {
        return this.h
      }, g.Qa = function () {
        return "string" == typeof this.f ? this.f : String(this.f)
      }, (g = Ln.prototype).ha = 8, g.v = 1, g.Ba = function (a) {
        if (this.h) if (this.h = null, 1 == this.v) {
          if (!a) {
            this.R = Math.floor(1e5 * Math.random()), a = this.R++;
            var t, b = new me(this, this.c, a, void 0), e = this.l;
            if (this.O && (e ? F(e = V(e), this.O) : e = this.O), null === this.i && (b.B = e), this.da) t:{
              for (var n = t = 0; n < this.g.length; n++) {
                var r = this.g[n];
                if (void 0 === (r = "__data__" in r.a && "string" == typeof (r = r.a.__data__) ? r.length : void 0)) break;
                if (4096 < (t += r)) {
                  t = n;
                  break t
                }
                if (4096 === t || n === this.g.length - 1) {
                  t = n + 1;
                  break t
                }
              }
              t = 1e3
            } else t = 1e3;
            t = Fn(this, b, t), Ge(n = Me(this.B), "RID", a), Ge(n, "CVER", 22), this.A && Ge(n, "X-HTTP-Session-Id", this.A), Mn(this, n), this.i && e && xn(n, this.i, e), fn(this.b, b), this.Ga && Ge(n, "TYPE", "init"), this.da ? (Ge(n, "$req", t), Ge(n, "SID", "null"), b.V = !0, Ee(b, n, null)) : Ee(b, n, t), this.v = 2
          }
        } else 3 == this.v && (a ? Vn(this, a) : 0 == this.g.length || an(this.b) || Vn(this))
      }, g.Aa = function () {
        if (this.j = null, Gn(this), this.V && !(this.F || null == this.a || 0 >= this.N)) {
          var a = 2 * this.N;
          this.c.info("BP detection timer enabled: " + a), this.s = ue(p(this.Sa, this), a)
        }
      }, g.Sa = function () {
        this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, Cn(this), Gn(this))
      }, g.Ra = function () {
        null != this.m && (this.m = null, Cn(this), qn(this), oe(19))
      }, g.Xa = function (a) {
        a ? (this.c.info("Successfully pinged google.com"), oe(2)) : (this.c.info("Failed to ping google.com"), oe(1))
      }, (g = Jn.prototype).ta = function () {
      }, g.sa = function () {
      }, g.ra = function () {
      }, g.qa = function () {
      }, g.Ha = function () {
      }, $n.prototype.a = function (a, b) {
        return new Zn(a, b)
      }, T(Zn, Ot), (g = Zn.prototype).addEventListener = function (a, b, t, e) {
        Zn.S.addEventListener.call(this, a, b, t, e)
      }, g.removeEventListener = function (a, b, t, e) {
        Zn.S.removeEventListener.call(this, a, b, t, e)
      }, g.Oa = function () {
        this.a.f = this.f, this.h && (this.a.C = !0);
        var a = this.a, b = this.l, t = this.b || void 0;
        oe(0), a.fa = b, a.W = t || {}, a.H = a.T, a.B = Xn(a, null, a.fa), Un(a)
      }, g.close = function () {
        kn(this.a)
      }, g.Pa = function (a) {
        if ("string" == typeof a) {
          var b = {};
          b.__data__ = a, Pn(this.a, b)
        } else this.g ? ((b = {}).__data__ = kt(a), Pn(this.a, b)) : Pn(this.a, a)
      }, g.G = function () {
        this.a.f = null, delete this.f, kn(this.a), delete this.a, Zn.S.G.call(this)
      }, T(er, ve), T(nr, ye), T(rr, Jn), rr.prototype.ta = function () {
        this.a.dispatchEvent("a")
      }, rr.prototype.sa = function (a) {
        this.a.dispatchEvent(new er(a))
      }, rr.prototype.ra = function (a) {
        this.a.dispatchEvent(new nr(a))
      }, rr.prototype.qa = function () {
        this.a.dispatchEvent("b")
      }, $n.prototype.createWebChannel = $n.prototype.a, Zn.prototype.send = Zn.prototype.Pa, Zn.prototype.open = Zn.prototype.Oa, Zn.prototype.close = Zn.prototype.close, ae.NO_ERROR = 0, ae.TIMEOUT = 8, ae.HTTP_ERROR = 6, ce.COMPLETE = "complete", le.EventType = de, de.OPEN = "a", de.CLOSE = "b", de.ERROR = "c", de.MESSAGE = "d", Ot.prototype.listen = Ot.prototype.va, wn.prototype.listenOnce = wn.prototype.wa, wn.prototype.getLastError = wn.prototype.Qa, wn.prototype.getLastErrorCode = wn.prototype.ua, wn.prototype.getStatus = wn.prototype.X, wn.prototype.getResponseJson = wn.prototype.Na, wn.prototype.getResponseText = wn.prototype.$, wn.prototype.send = wn.prototype.ba;
      var ir = function () {
          return new $n
        }, or = ae, sr = ce, ur = le, ar = wn,
        cr = {createWebChannelTransport: ir, ErrorCode: or, EventType: sr, WebChannel: ur, XhrIo: ar};
      e.default = cr
    }.call(this, n(9))
  }
}]);
