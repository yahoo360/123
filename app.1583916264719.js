(function (e) {
  function t(t) {
    for (var r, o, i = t[0], l = t[1], c = t[2], s = 0, d = []; s < i.length; s++) o = i[s], Object.prototype.hasOwnProperty.call(a, o) && a[o] && d.push(a[o][0]), a[o] = 0;
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    f && f(t);
    while (d.length) d.shift()();
    return u.push.apply(u, c || []), n()
  }

  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== a[i] && (r = !1)
      }
      r && (u.splice(t--, 1), e = l(l.s = n[0]))
    }
    return e
  }

  var r = {}, o = {app: 0}, a = {app: 0}, u = [];

  function i(e) {
    return l.p + "js/" + ({
      Health: "Health",
      areaid: "areaid",
      detail: "detail",
      login: "login",
      recipeList: "recipeList",
      viewdetail: "viewdetail"
    }[e] || e) + ".1583916264719.js"
  }

  function l(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {i: t, l: !1, exports: {}};
    return e[t].call(n.exports, n, n.exports, l), n.l = !0, n.exports
  }

  l.e = function (e) {
    var t = [], n = {Health: 1, detail: 1, login: 1, recipeList: 1, viewdetail: 1};
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = "css/" + ({
        Health: "Health",
        areaid: "areaid",
        detail: "detail",
        login: "login",
        recipeList: "recipeList",
        viewdetail: "viewdetail"
      }[e] || e) + "." + {
        Health: "02186591",
        areaid: "31d6cfe0",
        detail: "234a3410",
        login: "07dde090",
        recipeList: "bd6eca49",
        viewdetail: "827c1438"
      }[e] + ".css", a = l.p + r, u = document.getElementsByTagName("link"), i = 0; i < u.length; i++) {
        var c = u[i], s = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (s === r || s === a)) return t()
      }
      var d = document.getElementsByTagName("style");
      for (i = 0; i < d.length; i++) {
        c = d[i], s = c.getAttribute("data-href");
        if (s === r || s === a) return t()
      }
      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function (t) {
        var r = t && t.target && t.target.src || a, u = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        u.code = "CSS_CHUNK_LOAD_FAILED", u.request = r, delete o[e], f.parentNode.removeChild(f), n(u)
      }, f.href = a;
      var p = document.getElementsByTagName("head")[0];
      p.appendChild(f)
    }).then(function () {
      o[e] = 0
    }));
    var r = a[e];
    if (0 !== r) if (r) t.push(r[2]); else {
      var u = new Promise(function (t, n) {
        r = a[e] = [t, n]
      });
      t.push(r[2] = u);
      var c, s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, l.nc && s.setAttribute("nonce", l.nc), s.src = i(e);
      var d = new Error;
      c = function (t) {
        s.onerror = s.onload = null, clearTimeout(f);
        var n = a[e];
        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type), o = t && t.target && t.target.src;
            d.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")", d.name = "ChunkLoadError", d.type = r, d.request = o, n[1](d)
          }
          a[e] = void 0
        }
      };
      var f = setTimeout(function () {
        c({type: "timeout", target: s})
      }, 12e4);
      s.onerror = s.onload = c, document.head.appendChild(s)
    }
    return Promise.all(t)
  }, l.m = e, l.c = r, l.d = function (e, t, n) {
    l.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, l.t = function (e, t) {
    if (1 & t && (e = l(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (l.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) l.d(n, r, function (t) {
      return e[t]
    }.bind(null, r));
    return n
  }, l.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"]
    } : function () {
      return e
    };
    return l.d(t, "a", t), t
  }, l.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, l.p = "/", l.oe = function (e) {
    throw console.error(e), e
  };
  var c = window["webpackJsonp"] = window["webpackJsonp"] || [], s = c.push.bind(c);
  c.push = t, c = c.slice();
  for (var d = 0; d < c.length; d++) t(c[d]);
  var f = s;
  u.push([0, "chunk-vendors"]), n()
})({
  0: function (e, t, n) {
    e.exports = n("56d7")
  }, "034f": function (e, t, n) {
    "use strict";
    var r = n("64a9"), o = n.n(r);
    o.a
  }, "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    var r = {};
    n.r(r), n.d(r, "fpost", function () {
      return A
    }), n.d(r, "fget", function () {
      return C
    }), n.d(r, "deft", function () {
      return L
    }), n.d(r, "default", function () {
      return P
    });
    n("cadf"), n("551c"), n("f751"), n("097d");
    var o = n("2b0e"), a = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {attrs: {id: "app"}}, [n("keep-alive", [n("router-view")], 1)], 1)
      }, u = [], i = {name: "app"}, l = i, c = (n("034f"), n("2877")), s = Object(c["a"])(l, a, u, !1, null, null, null),
      d = s.exports, f = n("5c96"), p = (n("0fae"), n("8c4f")), h = [{
        path: "/", name: "/", component: d, children: [{
          path: "/", name: "/", component: function (e) {
            return n.e("login").then(function () {
              return e(n("1954"))
            }.bind(null, n)).catch(n.oe)
          }, meta: {auth: !0, keepAlive: !1}
        }, {
          path: "/health",
          name: "/health",
          component: function (e) {
            return n.e("Health").then(function () {
              return e(n("3dd5"))
            }.bind(null, n)).catch(n.oe)
          },
          meta: {auth: !0, keepAlive: !1},
          children: [{
            path: "/recipeList", name: "/recipeList", component: function (e) {
              return n.e("recipeList").then(function () {
                return e(n("2c23"))
              }.bind(null, n)).catch(n.oe)
            }, meta: {auth: !0, keepAlive: !1}
          }]
        }, {
          path: "/detail", name: "/detail:/data", component: function (e) {
            return n.e("detail").then(function () {
              return e(n("5358"))
            }.bind(null, n)).catch(n.oe)
          }, meta: {auth: !0, keepAlive: !0}
        }, {
          path: "/viewdetail", name: "/viewdetail:/data", component: function (e) {
            return n.e("viewdetail").then(function () {
              return e(n("63e1"))
            }.bind(null, n)).catch(n.oe)
          }, meta: {auth: !0, keepAlive: !0}
        }, {
          path: "/areaid", name: "/areaid", component: function (e) {
            return n.e("areaid").then(function () {
              return e(n("2c3f"))
            }.bind(null, n)).catch(n.oe)
          }, meta: {auth: !0, keepAlive: !0}
        }, {
          path: "/admin/login", name: "/admin/login", component: function (e) {
            return n.e("login").then(function () {
              return e(n("9848"))
            }.bind(null, n)).catch(n.oe)
          }, meta: {auth: !0, keepAlive: !0}
        }]
      }], g = n("bc3a"), m = n.n(g), v = n("4328"), y = n.n(v), b = "/school/v2", w = m.a.create({
        baseURL: b, transformRequest: [function (e) {
          return console.log(e), e = y.a.stringify(e), console.log(e), e
        }], headers: {"Content-Type": "application/x-www-form-urlencoded"}, responseType: "", timeout: 6e5
      });
    w.interceptors.request.use(function (e) {
      return console.log("configconfigconfigconfigconfig"), console.log(e), e
    }, function (e) {
      return Promise.reject(e)
    });
    var k = new o["default"];

    function A(e, t, n) {
      return k.$message.closeAll(), new Promise(function (r, o) {
        w.post(e, t, {headers: n}).then(function (e) {
          console.log(e.config.url), console.log(e), r(e)
        }, function (e) {
          console.log(e), k.$message({type: "error", message: "网络错误"}), o(e)
        }).catch(function (e) {
          console.log(e), k.$message({type: "error", message: "网络错误"}), o(e)
        })
      })
    }

    function C(e, t, n, r) {
      return k.$message.closeAll(), new Promise(function (o, a) {
        w.get(e, {params: t, headers: n, responseType: r}).then(function (e) {
          console.log(e.config.url), console.log(e), "blob" != e.config.responseType ? "0000" === e.data.detailCode && "0000" === e.data.resultCode ? o(e) : k.$message({
            type: "error",
            message: "网络错误"
          }) : o(e)
        }, function (e) {
          k.$message({type: "error", message: "网络错误"}), a(e)
        }).catch(function (e) {
          k.$message({type: "error", message: "网络错误"}), a(e)
        })
      })
    }

    function L() {
      return b
    }

    var P = {fpost: A, fget: C, deft: L};
    o["default"].config.productionTip = !1, o["default"].prototype.$message = f["Message"], o["default"].prototype.$MessageBox = f["MessageBox"], o["default"].prototype.$http = r, o["default"].prototype.$globalClick = function (e) {
      document.getElementById("app").onclick = function () {
        e()
      }
    }, o["default"].use(f["Button"]), o["default"].use(f["Select"]), o["default"].use(f["Dialog"]), o["default"].use(f["Option"]), o["default"].use(f["Card"]), o["default"].use(f["Input"]), o["default"].use(f["Container"]), o["default"].use(f["Header"]), o["default"].use(f["Aside"]), o["default"].use(f["Main"]), o["default"].use(f["Collapse"]), o["default"].use(f["Table"]), o["default"].use(f["TableColumn"]), o["default"].use(f["Divider"]), o["default"].use(p["a"]), o["default"].use(f["Row"]), o["default"].use(f["DatePicker"]), o["default"].use(f["Pagination"]), o["default"].use(f["Form"]), o["default"].use(f["FormItem"]), o["default"].use(f["Checkbox"]), o["default"].use(f["Popover"]), o["default"].use(f["Loading"]);
    var O = new p["a"]({routes: h});
    new o["default"]({
      router: O, render: function (e) {
        return e(d)
      }
    }).$mount("#app")
  }, "64a9": function (e, t, n) {
  }
});
//# sourceMappingURL=app.1583916264719.js.map