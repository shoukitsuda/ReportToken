(window.webpackJsonp = window.webpackJsonp || []).push([[8], {
  1224: function (t, e, o) {
    "use strict";
    o.r(e);
    o(57);
    var r = o(11), header = o(715), n = o(725), c = {
      components: {Header: header.default}, data: function () {
        return {input: "", searchWord: "", count: null, reports: []}
      }, methods: {
        getReport: function () {
          var t = this;
          return Object(r.a)(regeneratorRuntime.mark((function e() {
            return regeneratorRuntime.wrap((function (e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  return t.count = 0, t.searchWord = t.input, e.next = 4, n.a.collection("reports").where("subject", "==", t.searchWord).get().then((function (e) {
                    e.forEach((function (e) {
                      t.reports.push(e.data()), t.count++
                    }))
                  }));
                case 4:
                case"end":
                  return e.stop()
              }
            }), e)
          })))()
        }
      }
    }, l = (o(883), o(56)), component = Object(l.a)(c, (function () {
      var t = this, e = t.$createElement, o = t._self._c || e;
      return o("div", {staticClass: "app-layout"}, [o("Header"), t._v(" "), o("div", {staticClass: "main-contents"}, [o("div", {staticClass: "main-content"}, [o("div", {staticClass: "serch-content"}, [o("el-input", {
        staticClass: "serch-input",
        attrs: {placeholder: "レポート名で検索"},
        model: {
          value: t.input, callback: function (e) {
            t.input = e
          }, expression: "input"
        }
      }, [o("el-button", {
        attrs: {slot: "append", icon: "el-icon-search"},
        on: {click: t.getReport},
        slot: "append"
      })], 1), t._v(" "), null != t.searchWord ? o("div", {staticClass: "result-search"}, [0 == t.count ? o("h3", [t._v("Oops! " + t._s(t.searchWord) + "の検索結果は0でした。"), o("br"), t._v("あなたが最初の共有者になりませんか？")]) : t._e(), t._v(" "), null != t.count && 0 != t.count ? o("h3", [t._v(t._s(t.searchWord) + "の検索結果は" + t._s(t.count) + "件見つかりました。")]) : t._e(), t._v(" "), null != t.count && 0 != t.count ? o("div", {staticClass: "rank-content"}, [o("Filecards", {attrs: {reports: t.reports}})], 1) : t._e()]) : t._e()], 1)])]), t._v(" "), o("Upload"), t._v(" "), o("Footer")], 1)
    }), [], !1, null, "3418815c", null);
    e.default = component.exports;
    installComponents(component, {
      Header: o(715).default,
      Filecards: o(765).default,
      Upload: o(739).default,
      Footer: o(731).default
    })
  }, 713: function (t, e, o) {
    var content = o(721);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, o(104).default)("141f8560", content, !0, {sourceMap: !1})
  }, 715: function (t, e, o) {
    "use strict";
    o.r(e);
    var r = o(3), n = o(209), c = o.n(n), l = (o(349), o(724)), d = o.n(l), f = o(105);
    o.n(f).a.use(d.a), r.default.use(c.a);
    var v = {
      data: function () {
        return {}
      }
    }, x = (o(720), o(56)), component = Object(x.a)(v, (function () {
      var t = this.$createElement, e = this._self._c || t;
      return e("div", {staticClass: "header-content"}, [e("nuxt-link", {attrs: {to: "/"}}, [e("img", {
        staticClass: "reportoken-logo_header",
        attrs: {src: o(716)}
      })]), this._v(" "), e("div", {staticClass: "page-link"}, [e("nuxt-link", {
        staticClass: "link-detail",
        attrs: {to: "/serchPage"}
      }, [e("i", {staticClass: "el-icon-search"})]), this._v(" "), e("nuxt-link", {
        staticClass: "link-detail",
        attrs: {to: "/myPage"}
      }, [e("i", {staticClass: "el-icon-user"})])], 1)], 1)
    }), [], !1, null, null, null);
    e.default = component.exports
  }, 716: function (t, e, o) {
    t.exports = o.p + "img/reportoken-logo_header.274e63e.png"
  }, 719: function (t, e, o) {
    var content = o(729);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, o(104).default)("96b7bbe8", content, !0, {sourceMap: !1})
  }, 720: function (t, e, o) {
    "use strict";
    o(713)
  }, 721: function (t, e, o) {
    (e = o(103)(!1)).push([t.i, ".header-content{display:flex;width:100%;height:60px;background-color:#f4f4f4}.reportoken-logo_header{padding:5px 10px 10px;width:50px;height:50px;margin-left:50px}.page-link{position:absolute;right:30px;top:20px}.el-icon-message-solid{color:#fff}.link-detail,.link-detail_notification{text-decoration:none}.link-detail{color:#000;font-size:20px;padding:8px}", ""]), t.exports = e
  }, 722: function (t, e, o) {
    var content = o(737);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, o(104).default)("470a9ade", content, !0, {sourceMap: !1})
  }, 725: function (t, e, o) {
    "use strict";
    o.d(e, "a", (function () {
      return c
    }));
    var r = o(732), n = o.n(r);
    o.d(e, "b", (function () {
      return n.a
    }));
    o(750);
    if (!n.a.apps.length) {
      n.a.initializeApp({
        apiKey: "AIzaSyBotcmeQoR09-ZfunIrT7BojpQF9VxA4IQ",
        authDomain: "firestorepractice-c365c.firebaseapp.com",
        databaseURL: "https://firestorepractice-c365c.firebaseio.com",
        projectId: '"firestorepractice-c365c";',
        storageBucket: "firestorepractice-c365c.appspot.com",
        messagingSenderId: "728875149926"
      })
    }
    var c = n.a.firestore()
  }, 727: function (t, e, o) {
    var content = o(745);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, o(104).default)("22f38e0d", content, !0, {sourceMap: !1})
  }, 728: function (t, e, o) {
    "use strict";
    o(719)
  }, 729: function (t, e, o) {
    (e = o(103)(!1)).push([t.i, ".footer-main_content[data-v-f2fcc6fe]{height:200px}.footer-content[data-v-f2fcc6fe]{display:flex;background-color:#f4f4f4;height:180px}h5[data-v-f2fcc6fe]{color:#93a5b1}p[data-v-f2fcc6fe]{color:#000;font-size:.9rem;padding-top:15px}.reportoken-logo_footer[data-v-f2fcc6fe]{padding:10px;width:50px;height:50px;margin-left:50px}.footer-link[data-v-f2fcc6fe]{text-decoration:none}.footer-link[data-v-f2fcc6fe]:hover{text-decoration:underline}.footer-content_title[data-v-f2fcc6fe]{position:relative;margin-right:auto}.footer-content_title p[data-v-f2fcc6fe]{color:#93a5b1;width:150px;position:absolute;left:50px;top:50px;padding-top:5px;font-size:.8rem}.footer-content_about[data-v-f2fcc6fe],.footer-content_legal[data-v-f2fcc6fe],.footer-content_links[data-v-f2fcc6fe]{margin:0 auto}@media screen and (max-width:750px){.footer-content_title[data-v-f2fcc6fe]{opacity:0;z-index:-10;position:absolute}}.divider[data-v-f2fcc6fe]{padding:0;margin:0}.copyright-text[data-v-f2fcc6fe]{text-align:center;padding-bottom:10px;color:#93a5b1}", ""]), t.exports = e
  }, 731: function (t, e, o) {
    "use strict";
    o.r(e);
    var r = {
      data: function () {
        return {}
      }
    }, n = (o(728), o(56)), component = Object(n.a)(r, (function () {
      var t = this, e = t.$createElement, r = t._self._c || e;
      return r("div", {staticClass: "footer-main_content"}, [r("el-divider"), t._v(" "), r("div", {staticClass: "footer-content"}, [r("div", {staticClass: "footer-content_title"}, [r("nuxt-link", {attrs: {to: "/"}}, [r("img", {
        staticClass: "reportoken-logo_footer",
        attrs: {src: o(716)}
      })]), t._v(" "), t._m(0)], 1), t._v(" "), r("div", {staticClass: "footer-content_about"}, [r("h5", [t._v("About")]), t._v(" "), r("nuxt-link", {
        staticClass: "footer-link",
        attrs: {to: "/tutorialPage"}
      }, [r("p", [t._v("レポートークンについて")])]), t._v(" "), r("nuxt-link", {
        staticClass: "footer-link",
        attrs: {to: "/tutorialPage"}
      }, [r("p", [t._v("使い方")])])], 1), t._v(" "), r("div", {staticClass: "footer-content_legal"}, [r("h5", [t._v("Legal")]), t._v(" "), r("nuxt-link", {
        staticClass: "footer-link",
        attrs: {to: "/tutorialPage"}
      }, [r("p", [t._v("利用規約")])]), t._v(" "), r("nuxt-link", {
        staticClass: "footer-link",
        attrs: {to: "/tutorialPage"}
      }, [r("p", [t._v("プライバシーポリシー")])])], 1), t._v(" "), r("div", {staticClass: "footer-content_links"}, [r("h5", [t._v("Contact")]), t._v(" "), r("nuxt-link", {
        staticClass: "footer-link",
        attrs: {to: "/tutorialPage"}
      }, [r("p", [t._v("よくある質問")])])], 1)]), t._v(" "), r("el-divider", {staticClass: "divider"}), t._v(" "), t._m(1)], 1)
    }), [function () {
      var t = this.$createElement, e = this._self._c || t;
      return e("p", [this._v("全ての学生のための"), e("br"), this._v("レポート共有アプリ")])
    }, function () {
      var t = this.$createElement, e = this._self._c || t;
      return e("div", {staticClass: "copyright-text"}, [e("p", [this._v("© 2020 BitPickers.")])])
    }], !1, null, "f2fcc6fe", null);
    e.default = component.exports
  }, 736: function (t, e, o) {
    "use strict";
    o(722)
  }, 737: function (t, e, o) {
    (e = o(103)(!1)).push([t.i, ".upload_content[data-v-63671d62]{position:fixed;z-index:2;bottom:60px;right:60px}.upload_btn[data-v-63671d62]{width:100px;height:100px;box-shadow:5px 5px 37px #b8b8b8,-5px -5px 37px #fff}", ""]), t.exports = e
  }, 739: function (t, e, o) {
    "use strict";
    o.r(e);
    o(736);
    var r = o(56), component = Object(r.a)({}, (function () {
      var t = this.$createElement, e = this._self._c || t;
      return e("div", {staticClass: "upload_content"}, [e("nuxt-link", {
        staticClass: "link-detail",
        attrs: {to: "/uploadPage"}
      }, [e("el-button", {
        staticClass: "upload_btn",
        attrs: {type: "primary", circle: ""}
      }, [e("h3", [this._v("共有")]), this._v(" "), e("i", {staticClass: "el-icon-upload2"})])], 1)], 1)
    }), [], !1, null, "63671d62", null);
    e.default = component.exports
  }, 741: function (t, e, o) {
    var content = o(752);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, o(104).default)("ee9b1f9e", content, !0, {sourceMap: !1})
  }, 742: function (t, e, o) {
    "use strict";
    o.r(e);
    o(725);
    var r = {
      props: ["report"], data: function () {
        return {value: 3.7, reportIndex: 0, shareUserAddress: "", reports: [], Report: null}
      }
    }, n = (o(744), o(56)), component = Object(n.a)(r, (function () {
      var t = this, e = t.$createElement, r = t._self._c || e;
      return null != t.report ? r("div", {staticClass: "filecard-content"}, [r("h3", {staticClass: "report-subject"}, [t._v("科目:" + t._s(t.report.subject))]), t._v(" "), r("div", {staticClass: "file-card"}, [r("div", {staticClass: "report-details"}, [r("h5", {staticClass: "report-title"}, [t._v(t._s(t.report.detail))]), t._v(" "), r("img", {
        staticClass: "reportoken",
        staticStyle: {"text-align": "center"},
        attrs: {src: o(743)}
      })])])]) : t._e()
    }), [], !1, null, "057b405e", null);
    e.default = component.exports
  }, 743: function (t, e, o) {
    t.exports = o.p + "img/reportoken-logo.d95760d.png"
  }, 744: function (t, e, o) {
    "use strict";
    o(727)
  }, 745: function (t, e, o) {
    (e = o(103)(!1)).push([t.i, '.filecard-content[data-v-057b405e]{display:inline-block}.file-card[data-v-057b405e]{display:block;background-color:#fff;position:relative;width:200px;height:282px;margin:15px;border-radius:5px;overflow:hidden;box-shadow:10 10px 10px #000}.file-card[data-v-057b405e]:before{border-top:30px solid #f4f4f4;border-left:30px solid transparent;box-shadow:0 2px 2px rgba(0,0,0,.3),-2px 2px 2px rgba(0,0,0,.2)}.file-card[data-v-057b405e]:after,.file-card[data-v-057b405e]:before{height:0;position:absolute;right:0;content:""}.file-card[data-v-057b405e]:after{display:block;border-bottom:30px solid hsla(0,0%,100%,.8);border-right:30px solid transparent;top:0}.report-details[data-v-057b405e]{position:relative;padding:10px;text-align:center}.report-semester[data-v-057b405e]{position:absolute;top:-9px;right:-5px}.report-grade[data-v-057b405e]{position:absolute;top:-9px;right:50px}.report-exp[data-v-057b405e]{margin:0;padding:0;height:75px;overflow:scroll}.report-title[data-v-057b405e]{display:flex;justify-content:center;align-items:center}.reportoken[data-v-057b405e]{margin:100px auto 0;width:80px;height:auto}.report-subject[data-v-057b405e]{color:rgba(0,0,0,.38)}.download[data-v-057b405e]{position:absolute;display:flex;right:-10px;bottom:75px}', ""]), t.exports = e
  }, 751: function (t, e, o) {
    "use strict";
    o(741)
  }, 752: function (t, e, o) {
    (e = o(103)(!1)).push([t.i, ".filecards[data-v-f098eec8]{display:flex;justify-content:center;flex-wrap:wrap}", ""]), t.exports = e
  }, 765: function (t, e, o) {
    "use strict";
    o.r(e);
    var r = {
      props: ["reports"], data: function () {
        return {report: null}
      }
    }, n = (o(751), o(56)), component = Object(n.a)(r, (function () {
      var t = this.$createElement, e = this._self._c || t;
      return e("div", {staticClass: "filecards"}, this._l(this.reports, (function (t) {
        return e("div", {
          key: t.shareUser + t.index,
          staticClass: "filecard"
        }, [e("nuxt-link", {
          attrs: {
            to: {
              name: "folders-id",
              params: {id: t.shareUser + t.index}
            }
          }
        }, [e("Filecard", {attrs: {report: t}})], 1)], 1)
      })), 0)
    }), [], !1, null, "f098eec8", null);
    e.default = component.exports;
    installComponents(component, {Filecard: o(742).default})
  }, 806: function (t, e, o) {
    var content = o(884);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, o(104).default)("7d384ada", content, !0, {sourceMap: !1})
  }, 883: function (t, e, o) {
    "use strict";
    o(806)
  }, 884: function (t, e, o) {
    (e = o(103)(!1)).push([t.i, ".main-contents[data-v-3418815c]{min-height:600px}.serch-content[data-v-3418815c]{text-align:center}.serch-input[data-v-3418815c]{margin-right:0;padding:10px 0 0;width:400px}", ""]), t.exports = e
  }
}]);
