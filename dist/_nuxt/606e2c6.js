(window.webpackJsonp = window.webpackJsonp || []).push([[7], {
  1223: function (t, e, n) {
    "use strict";
    n.r(e);
    var o = {
      components: {Header: n(715).default}, data: function () {
        return {
          tableData: [{rank: "1", name: "Aoi", address: "0x1062Bb912a6D1B43D901DE9087E5B1200Db877f8"}, {
            rank: "2",
            name: "Oshita",
            address: "0x1062Bb912a6D1B43D901DE9087E5B1200Db877f8"
          }, {rank: "3", name: "Onishi", address: "0x1062Bb912a6D1B43D901DE9087E5B1200Db877f8"}, {
            rank: "4",
            name: "Nishino",
            address: "0x1062Bb912a6D1B43D901DE9087E5B1200Db877f8"
          }, {rank: "5", name: "Onishi", address: "0x1062Bb912a6D1B43D901DE9087E5B1200Db877f8"}, {
            rank: "6",
            name: "Konishi",
            address: "0x1062Bb912a6D1B43D901DE9087E5B1200Db877f8"
          }]
        }
      }, methods: {
        formatter: function (t, e) {
          return t.address
        }, inspection: function () {
          this.$notify({title: "検証しています...", message: "検証に成功するとご褒美としてETHが送信されます。", type: "info"})
        }
      }
    }, r = (n(881), n(56)), component = Object(r.a)(o, (function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("div", {staticClass: "app-layout"}, [n("Header"), t._v(" "), n("div", {staticClass: "main-contents"}, [n("div", {staticClass: "side-content"}, [n("Folder")], 1), t._v(" "), n("div", {staticClass: "main-content"}, [n("h1", [t._v("ご褒美")]), t._v(" "), n("div", {staticClass: "home-btn"}, [n("el-button", {attrs: {type: "primary"}}, [n("nuxt-link", {
        staticClass: "link-detail",
        attrs: {to: "/homePage"}
      }, [t._v("HOMEへ")])], 1)], 1), t._v(" "), n("div", {staticClass: "reward-content"}, [n("h2", [t._v("おめでとうございます🎉")]), t._v(" "), n("h3", [t._v("あなたはこのアプリに貢献したのでご褒美を贈呈します。下のボタンを押してください")]), t._v(" "), n("el-button", {
        on: {
          click: function (e) {
            return t.inspection()
          }
        }
      }, [t._v("検証する")])], 1), t._v(" "), n("h3", [t._v("今セメスターランキング")]), t._v(" "), n("div", {staticClass: "ranking-table_info"}, [n("el-table", {
        staticStyle: {width: "100%"},
        attrs: {data: t.tableData}
      }, [n("el-table-column", {
        attrs: {
          prop: "rank",
          label: "順位",
          width: "90"
        }
      }), t._v(" "), n("el-table-column", {
        attrs: {
          prop: "name",
          label: "ユーザー名",
          width: "180"
        }
      }), t._v(" "), n("el-table-column", {
        attrs: {
          prop: "address",
          label: "アドレス",
          formatter: t.formatter
        }
      })], 1)], 1)])])], 1)
    }), [], !1, null, "67bb3274", null);
    e.default = component.exports;
    installComponents(component, {Header: n(715).default, Folder: n(764).default})
  }, 713: function (t, e, n) {
    var content = n(721);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, n(104).default)("141f8560", content, !0, {sourceMap: !1})
  }, 715: function (t, e, n) {
    "use strict";
    n.r(e);
    var o = n(3), r = n(209), l = n.n(r), c = (n(349), n(724)), d = n.n(c), f = n(105);
    n.n(f).a.use(d.a), o.default.use(l.a);
    var h = {
      data: function () {
        return {}
      }
    }, m = (n(720), n(56)), component = Object(m.a)(h, (function () {
      var t = this.$createElement, e = this._self._c || t;
      return e("div", {staticClass: "header-content"}, [e("nuxt-link", {attrs: {to: "/"}}, [e("img", {
        staticClass: "reportoken-logo_header",
        attrs: {src: n(716)}
      })]), this._v(" "), e("div", {staticClass: "page-link"}, [e("nuxt-link", {
        staticClass: "link-detail",
        attrs: {to: "/serchPage"}
      }, [e("i", {staticClass: "el-icon-search"})]), this._v(" "), e("nuxt-link", {
        staticClass: "link-detail",
        attrs: {to: "/myPage"}
      }, [e("i", {staticClass: "el-icon-user"})])], 1)], 1)
    }), [], !1, null, null, null);
    e.default = component.exports
  }, 716: function (t, e, n) {
    t.exports = n.p + "img/reportoken-logo_header.274e63e.png"
  }, 720: function (t, e, n) {
    "use strict";
    n(713)
  }, 721: function (t, e, n) {
    (e = n(103)(!1)).push([t.i, ".header-content{display:flex;width:100%;height:60px;background-color:#f4f4f4}.reportoken-logo_header{padding:5px 10px 10px;width:50px;height:50px;margin-left:50px}.page-link{position:absolute;right:30px;top:20px}.el-icon-message-solid{color:#fff}.link-detail,.link-detail_notification{text-decoration:none}.link-detail{color:#000;font-size:20px;padding:8px}", ""]), t.exports = e
  }, 724: function (t, e, n) {
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
  }, 740: function (t, e, n) {
    var content = n(749);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, n(104).default)("e4adb8e4", content, !0, {sourceMap: !1})
  }, 748: function (t, e, n) {
    "use strict";
    n(740)
  }, 749: function (t, e, n) {
    (e = n(103)(!1)).push([t.i, "h4[data-v-24b72f1c]{text-align:center;padding:15px}.folder-content[data-v-24b72f1c]{overflow:scroll}.folder-repository[data-v-24b72f1c]{padding-left:20px;margin:10px}.side-contents[data-v-24b72f1c]{position:fixed;max-height:450px;min-width:200px;overflow:hidden;margin:30px 10px 10px;right:20px;padding-bottom:50px;border-radius:10px;background:#f4f4f4;box-shadow:8px 8px 25px #8b8b8b,-8px -8px 25px #fff}", ""]), t.exports = e
  }, 764: function (t, e, n) {
    "use strict";
    n.r(e);
    var o = {
      props: ["shareReports"], data: function () {
        return {}
      }
    }, r = (n(748), n(56)), component = Object(r.a)(o, (function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("div", {staticClass: "side-contents"}, [n("h4", [t._v("共有したレポート")]), t._v(" "), n("div", {staticClass: "folder-content"}, t._l(t.shareReports, (function (e) {
        return n("div", {key: e.index}, [n("nuxt-link", {
          attrs: {
            to: {
              name: "folders-id",
              params: {id: e.shareUser + e.index}
            }
          }
        }, [n("el-badge", {
          staticClass: "item folder-repository",
          attrs: {value: e.downloads, type: "primary"}
        }, [n("el-button", {attrs: {size: "small"}}, [t._v(t._s(e.subject))])], 1)], 1)], 1)
      })), 0)])
    }), [], !1, null, "24b72f1c", null);
    e.default = component.exports
  }, 805: function (t, e, n) {
    var content = n(882);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, n(104).default)("67d2bfa2", content, !0, {sourceMap: !1})
  }, 881: function (t, e, n) {
    "use strict";
    n(805)
  }, 882: function (t, e, n) {
    (e = n(103)(!1)).push([t.i, ".home-btn[data-v-67bb3274]{text-align:center;padding:10px}.ranking-table_info[data-v-67bb3274]{margin-left:10%;width:80%;text-align:center}.reward-content[data-v-67bb3274]{text-align:center;margin:20px}", ""]), t.exports = e
  }
}]);
