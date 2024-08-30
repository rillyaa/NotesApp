/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      148: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, i, o) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var u = this[s][0];
                  null != u && (a[u] = !0);
                }
              for (var c = 0; c < t.length; c++) {
                var l = [].concat(t[c]);
                (r && a[l[0]]) ||
                  (void 0 !== o &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = o)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  i &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = i))
                      : (l[4] = "".concat(i))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      507: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      210: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t) {
          var o = "function" == typeof Map ? new Map() : void 0;
          return (
            (e = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== o) {
                if (o.has(t)) return o.get(t);
                o.set(t, e);
              }
              function e() {
                return (function (t, e, i) {
                  if (n()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, e);
                  var a = new (t.bind.apply(t, o))();
                  return i && r(a, i.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(e, t)
              );
            }),
            e(t)
          );
        }
        function n() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (n = function () {
            return !!t;
          })();
        }
        function r(t, e) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            r(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        var o = (function (e) {
          function o() {
            var e, r, a, s;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
              (r = this),
              (a = i((a = o))),
              (e = (function (e, n) {
                if (n && ("object" === t(n) || "function" == typeof n))
                  return n;
                if (void 0 !== n)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(e);
              })(
                r,
                n()
                  ? Reflect.construct(a, s || [], i(r).constructor)
                  : a.apply(r, s),
              ));
            var u = document.createElement("nav");
            u.innerHTML =
              '\n        <div class="nav-logo">Notes App.</div>\n        <div class="search">\n            <input type="text-search" class="searchTerm" placeholder="What Note Today?">\n            <button type="search-submit" class="searchButton">\n            <box-icon name=\'search-alt\' size=\'20px\' color=\'#430A5D\'></box-icon>\n            </button>\n        </div>\n      ';
            var c = document.createElement("style");
            return (
              (c.textContent =
                "\n        nav {\n          display: grid;\n          grid-template-columns: 1fr auto; /* Satu kolom untuk logo dan satu kolom untuk pencarian */\n          align-items: center;\n          padding: 0 20px;\n          background-color: #A367B1;\n        }\n\n        .nav-logo {\n          display: flex;\n          text-decoration: none;\n          font-size: 24px;\n          font-weight: bold;\n          color: white;\n          margin-left: 30px;\n          margin-top: 15px;\n          margin-bottom: 15px;\n        }\n  \n        .search {\n          display: flex;\n          align-items: center;\n          border-radius: 50px;\n          margin-right: 25px;\n        }\n  \n        .searchTerm {\n          height: 30px;\n          padding: 8px;\n          border: 1px solid transparent;\n          border-radius: 13px;\n          width: 100%;\n          box-sizing: border-box;\n          margin-top: 5px;\n          outline: none;\n        }\n  \n        .searchTerm:focus {\n          outline: 2px solid #be01e4;\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n  \n        ::placeholder {\n          padding-left: 5px;\n        }\n  \n        .searchButton {\n          background-color: white;\n          margin-left: -14%;\n          margin-top: 5px;\n          border-radius: 50%;\n          width: 30px;\n          height: 30px;\n          border: none;\n          align-items: center;\n          font-size: 15px;\n        }\n  \n        .searchButton:hover {\n          background-color: rgba(0, 0, 0, 0.1);\n        }\n      "),
              e.attachShadow({ mode: "open" }),
              e.shadowRoot.appendChild(u),
              e.shadowRoot.appendChild(c),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && r(t, e);
            })(o, e),
            (a = o),
            Object.defineProperty(a, "prototype", { writable: !1 }),
            a
          );
          var a;
        })(e(HTMLElement));
        customElements.define("app-bar", o);
      },
      213: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, n(i.key), i);
          }
        }
        function n(e) {
          var n = (function (e, n) {
            if ("object" != t(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var i = r.call(e, "string");
              if ("object" != t(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        function r(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (i()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, e);
                  var a = new (t.bind.apply(t, r))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, a(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            r(t)
          );
        }
        function i() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (i = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            a(t)
          );
        }
        var s = (function (n) {
          function r() {
            var e, n, o, s;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
              (n = this),
              (o = a((o = r))),
              (e = (function (e, n) {
                if (n && ("object" === t(n) || "function" == typeof n))
                  return n;
                if (void 0 !== n)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(e);
              })(
                n,
                i()
                  ? Reflect.construct(o, s || [], a(n).constructor)
                  : o.apply(n, s),
              ));
            var u = document.createElement("banner");
            u.innerHTML =
              '\n            <div class="container-banner">\n              <div class="image">\n                <img src="img/notes.png" alt="book-img">\n              </div>\n              <section class="section-main" id="home">\n                  <form id="input-notes">\n                      <div class="input-item col">\n                          <label for="titleNote">Title</label>\n                          <input id="titleNote" type="text" placeholder="Add your title note" required/>\n                          <span id="titleError" class="error-message"></span>\n                      </div>\n                      <div class="input-item col">\n                          <label for="note">Your Note</label>\n                          <textarea id="note" rows="10"  placeholder="Tell me, how\'s your day?" required></textarea>\n                          <span id="contentError" class="error-message"></span>\n                      </div>\n                      <button id="noteSubmit" type="submit">Add Note</button>\n                  </form>\n              </section>\n            </div>\n        ';
            var c = document.createElement("style");
            (c.textContent =
              '\n        * {\n            font-family: \'Poppins\';\n          }\n\n        .container-banner {\n            display: grid;\n            grid-template-columns: 1fr 2fr; /* Dua kolom dengan lebar yang sama */\n            max-width: 90%;\n          }\n          \n          .image img {\n            width: 400px; /* Lebar gambar 100% dari kontainer */\n            padding: 0px 50px 0px 50px;\n          }\n          \n          .section-main {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n          }\n          \n          #input-notes {\n            background-color: #BB9CC0;\n            border-radius: 15px;\n            padding: 20px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n            grid-column: span 2; \n          }\n          \n          .input-item {\n            margin-bottom: 12px;\n          }\n          \n          label {\n            font-weight: bold;\n            margin-bottom: 5px;\n            padding-right: 10px;\n          }\n          \n          input[type="text"],\n          textarea {\n            padding: 8px;\n            border: 1px solid #5D3587;\n            border-radius: 7px;\n            width: 100%;\n            box-sizing: border-box;\n            margin-top: 5px;\n            outline: none;\n          }\n\n          input[type="text"]:focus,\n          textarea:focus {\n            outline: 1px solid #392467;\n          }\n          \n          button[type="submit"] {\n            background-color: #5D3587;\n            color: white;\n            border: none;\n            border-radius: 50px;\n            padding: 10px 20px;\n            cursor: pointer;\n            font-size: 16px;\n            width: 50%;\n            margin-bottom: 5px;\n            justify-self: end; \n          }\n          \n          button[type="submit"]:hover {\n            background-color: #5B0888;\n          }\n          \n          ::placeholder {\n            font-family: \'Poppins\';\n          }          \n\n          @media screen and (max-width: 768px) {\n            .container-banner {\n                grid-template-columns: 1fr; /* Ubah menjadi satu kolom pada layar yang lebih kecil */\n            }\n      \n            .image img {\n                width: 100%; /* Lebar gambar 100% dari kontainer */\n                padding: 0; /* Hapus padding */\n                margin-top: 0;\n            }\n        \n            #input-notes {\n                width: 90%; /* Lebar form di layar kecil */\n            }\n        '),
              e.attachShadow({ mode: "open" }),
              e.shadowRoot.appendChild(c),
              e.shadowRoot.appendChild(u),
              e.shadowRoot
                .getElementById("input-notes")
                .addEventListener("submit", e.handleSubmit.bind(e));
            var l = e.shadowRoot.getElementById("titleNote");
            return (
              e.shadowRoot
                .getElementById("note")
                .addEventListener("click", function () {
                  var t = l.value,
                    n = e.shadowRoot.getElementById("titleError");
                  "" === t
                    ? ((n.textContent = "Judul harus diisi"),
                      (n.style.color = "red"))
                    : (n.textContent = "");
                }),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(r, n),
            (s = r),
            (u = [
              {
                key: "handleSubmit",
                value: function (t) {
                  t.preventDefault();
                  var e = this.shadowRoot.getElementById("titleNote").value,
                    n = this.shadowRoot.getElementById("note").value,
                    r = document.querySelector("notes-collection");
                  r
                    ? r.addNote(e, n)
                    : console.error(
                        "Element 'notes-collection' not found in the DOM.",
                      ),
                    (this.shadowRoot.getElementById("titleNote").value = ""),
                    (this.shadowRoot.getElementById("note").value = "");
                },
              },
            ]) && e(s.prototype, u),
            Object.defineProperty(s, "prototype", { writable: !1 }),
            s
          );
          var s, u;
        })(r(HTMLElement));
        customElements.define("jumbotron-section", s);
      },
      621: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => s });
        var r = n(507),
          i = n.n(r),
          o = n(148),
          a = n.n(o)()(i());
        a.push([
          t.id,
          '* {\n  font-family: "Poppins";\n  margin: 0;\n}\n\n.header-text {\n  background-color: #e5d4ff;\n  text-align: center;\n  padding: 20px;\n}\n\n.jumbotron {\n  background-color: #e5d4ff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n}\n\nh3 {\n  padding: 20px;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n}\n\nhr {\n  position: relative;\n  width: 95%;\n  margin: 0 auto;\n  border: none;\n  height: 1px;\n  color: #392467;\n  background-color: #392467;\n}\n\n.notes-header {\n  background-color: #f1eaff;\n}\n\nfooter {\n  text-align: center;\n  background-color: #a367b1;\n  padding: 20px;\n}\n',
          "",
        ]);
        const s = a;
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var o = {}, a = [], s = 0; s < t.length; s++) {
            var u = t[s],
              c = r.base ? u[0] + r.base : u[0],
              l = o[c] || 0,
              f = "".concat(c, " ").concat(l);
            o[c] = l + 1;
            var h = n(f),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== h) e[h].references++, e[h].updater(p);
            else {
              var d = i(p, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: f, updater: d, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function i(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, i) {
          var o = r((t = t || []), (i = i || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < o.length; a++) {
              var s = n(o[a]);
              e[s].references--;
            }
            for (var u = r(t, i), c = 0; c < o.length; c++) {
              var l = n(o[c]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            o = u;
          };
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var i = void 0 !== n.layer;
                i &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  i && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var o = (e[r] = { id: r, exports: {} });
    return t[r](o, o.exports, n), o.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var t = n(72),
        e = n.n(t),
        r = n(825),
        i = n.n(r),
        o = n(659),
        a = n.n(o),
        s = n(56),
        u = n.n(s),
        c = n(540),
        l = n.n(c),
        f = n(113),
        h = n.n(f),
        p = n(621),
        d = {};
      function m(t) {
        return (
          (m =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          m(t)
        );
      }
      function v(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function y(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      (d.styleTagTransform = h()),
        (d.setAttributes = u()),
        (d.insert = a().bind(null, "head")),
        (d.domAPI = i()),
        (d.insertStyleElement = l()),
        e()(p.A, d),
        p.A && p.A.locals && p.A.locals;
      var g,
        _,
        b,
        x,
        w,
        T,
        k,
        E,
        O,
        S,
        C,
        A,
        M,
        P,
        L,
        F,
        j,
        R = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        D = { duration: 0.5, overwrite: !1, delay: 0 },
        N = 1e8,
        z = 1e-8,
        B = 2 * Math.PI,
        I = B / 4,
        q = 0,
        Y = Math.sqrt,
        G = Math.cos,
        U = Math.sin,
        X = function (t) {
          return "string" == typeof t;
        },
        H = function (t) {
          return "function" == typeof t;
        },
        V = function (t) {
          return "number" == typeof t;
        },
        W = function (t) {
          return void 0 === t;
        },
        Q = function (t) {
          return "object" === m(t);
        },
        Z = function (t) {
          return !1 !== t;
        },
        $ = function () {
          return "undefined" != typeof window;
        },
        J = function (t) {
          return H(t) || X(t);
        },
        K =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        tt = Array.isArray,
        et = /(?:-?\.?\d|\.)+/gi,
        nt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        ot = /[+-]=-?[.\d]+/,
        at = /[^,'"\[\]\s]+/gi,
        st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ut = {},
        ct = {},
        lt = function (t) {
          return (ct = Bt(t, ut)) && In;
        },
        ft = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()",
          );
        },
        ht = function (t, e) {
          return !e && console.warn(t);
        },
        pt = function (t, e) {
          return (t && (ut[t] = e) && ct && (ct[t] = e)) || ut;
        },
        dt = function () {
          return 0;
        },
        mt = { suppressEvents: !0, isStart: !0, kill: !1 },
        vt = { suppressEvents: !0, kill: !1 },
        yt = { suppressEvents: !0 },
        gt = {},
        _t = [],
        bt = {},
        xt = {},
        wt = {},
        Tt = 30,
        kt = [],
        Et = "",
        Ot = function (t) {
          var e,
            n,
            r = t[0];
          if ((Q(r) || H(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
            for (n = kt.length; n-- && !kt[n].targetTest(r); );
            e = kt[n];
          }
          for (n = t.length; n--; )
            (t[n] && (t[n]._gsap || (t[n]._gsap = new Ke(t[n], e)))) ||
              t.splice(n, 1);
          return t;
        },
        St = function (t) {
          return t._gsap || Ot(ve(t))[0]._gsap;
        },
        Ct = function (t, e, n) {
          return (n = t[e]) && H(n)
            ? t[e]()
            : (W(n) && t.getAttribute && t.getAttribute(e)) || n;
        },
        At = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        Mt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        Pt = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        Lt = function (t, e) {
          var n = e.charAt(0),
            r = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r
          );
        },
        Ft = function (t, e) {
          for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
          return r < n;
        },
        jt = function () {
          var t,
            e,
            n = _t.length,
            r = _t.slice(0);
          for (bt = {}, _t.length = 0, t = 0; t < n; t++)
            (e = r[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        Rt = function (t, e, n, r) {
          _t.length && !_ && jt(),
            t.render(e, n, r || (_ && e < 0 && (t._initted || t._startAt))),
            _t.length && !_ && jt();
        },
        Dt = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(at).length < 2
            ? e
            : X(t)
              ? t.trim()
              : t;
        },
        Nt = function (t) {
          return t;
        },
        zt = function (t, e) {
          for (var n in e) n in t || (t[n] = e[n]);
          return t;
        },
        Bt = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        It = function t(e, n) {
          for (var r in n)
            "__proto__" !== r &&
              "constructor" !== r &&
              "prototype" !== r &&
              (e[r] = Q(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
          return e;
        },
        qt = function (t, e) {
          var n,
            r = {};
          for (n in t) n in e || (r[n] = t[n]);
          return r;
        },
        Yt = function (t) {
          var e,
            n = t.parent || x,
            r = t.keyframes
              ? ((e = tt(t.keyframes)),
                function (t, n) {
                  for (var r in n)
                    r in t ||
                      ("duration" === r && e) ||
                      "ease" === r ||
                      (t[r] = n[r]);
                })
              : zt;
          if (Z(t.inherit))
            for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp);
          return t;
        },
        Gt = function (t, e, n, r, i) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var o,
            a = t[r];
          if (i) for (o = e[i]; a && a[i] > o; ) a = a._prev;
          return (
            a
              ? ((e._next = a._next), (a._next = e))
              : ((e._next = t[n]), (t[n] = e)),
            e._next ? (e._next._prev = e) : (t[r] = e),
            (e._prev = a),
            (e.parent = e._dp = t),
            e
          );
        },
        Ut = function (t, e, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i = e._prev,
            o = e._next;
          i ? (i._next = o) : t[n] === e && (t[n] = o),
            o ? (o._prev = i) : t[r] === e && (t[r] = i),
            (e._next = e._prev = e.parent = null);
        },
        Xt = function (t, e) {
          t.parent &&
            (!e || t.parent.autoRemoveChildren) &&
            t.parent.remove &&
            t.parent.remove(t),
            (t._act = 0);
        },
        Ht = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
          return t;
        },
        Vt = function (t, e, n, r) {
          return (
            t._startAt &&
            (_
              ? t._startAt.revert(vt)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, r))
          );
        },
        Wt = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        Qt = function (t) {
          return t._repeat
            ? Zt(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        Zt = function (t, e) {
          var n = Math.floor((t /= e));
          return t && n === t ? n - 1 : n;
        },
        $t = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        Jt = function (t) {
          return (t._end = Pt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || z) || 0),
          ));
        },
        Kt = function (t, e) {
          var n = t._dp;
          return (
            n &&
              n.smoothChildTiming &&
              t._ts &&
              ((t._start = Pt(
                n._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
              )),
              Jt(t),
              n._dirty || Ht(n, t)),
            t
          );
        },
        te = function (t, e) {
          var n;
          if (
            ((e._time ||
              (!e._dur && e._initted) ||
              (e._start < t._time && (e._dur || !e.add))) &&
              ((n = $t(t.rawTime(), e)),
              (!e._dur || he(0, e.totalDuration(), n) - e._tTime > z) &&
                e.render(n, !0)),
            Ht(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (n = t; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            t._zTime = -1e-8;
          }
        },
        ee = function (t, e, n, r) {
          return (
            e.parent && Xt(e),
            (e._start = Pt(
              (V(n) ? n : n || t !== x ? ce(t, n, e) : t._time) + e._delay,
            )),
            (e._end = Pt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
            )),
            Gt(t, e, "_first", "_last", t._sort ? "_start" : 0),
            oe(e) || (t._recent = e),
            r || te(t, e),
            t._ts < 0 && Kt(t, t._tTime),
            t
          );
        },
        ne = function (t, e) {
          return (
            (ut.ScrollTrigger || ft("scrollTrigger", e)) &&
            ut.ScrollTrigger.create(e, t)
          );
        },
        re = function (t, e, n, r, i) {
          return (
            un(t, e, i),
            t._initted
              ? !n &&
                t._pt &&
                !_ &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                O !== Ie.frame
                ? (_t.push(t), (t._lazy = [i, r]), 1)
                : void 0
              : 1
          );
        },
        ie = function t(e) {
          var n = e.parent;
          return (
            n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
          );
        },
        oe = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        ae = function (t, e, n, r) {
          var i = t._repeat,
            o = Pt(e) || 0,
            a = t._tTime / t._tDur;
          return (
            a && !r && (t._time *= o / t._dur),
            (t._dur = o),
            (t._tDur = i
              ? i < 0
                ? 1e10
                : Pt(o * (i + 1) + t._rDelay * i)
              : o),
            a > 0 && !r && Kt(t, (t._tTime = t._tDur * a)),
            t.parent && Jt(t),
            n || Ht(t.parent, t),
            t
          );
        },
        se = function (t) {
          return t instanceof en ? Ht(t) : ae(t, t._dur);
        },
        ue = { _start: 0, endTime: dt, totalDuration: dt },
        ce = function t(e, n, r) {
          var i,
            o,
            a,
            s = e.labels,
            u = e._recent || ue,
            c = e.duration() >= N ? u.endTime(!1) : e._dur;
          return X(n) && (isNaN(n) || n in s)
            ? ((o = n.charAt(0)),
              (a = "%" === n.substr(-1)),
              (i = n.indexOf("=")),
              "<" === o || ">" === o
                ? (i >= 0 && (n = n.replace(/=/, "")),
                  ("<" === o ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (a ? (i < 0 ? u : r).totalDuration() / 100 : 1))
                : i < 0
                  ? (n in s || (s[n] = c), s[n])
                  : ((o = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                    a &&
                      r &&
                      (o = (o / 100) * (tt(r) ? r[0] : r).totalDuration()),
                    i > 1 ? t(e, n.substr(0, i - 1), r) + o : c + o))
            : null == n
              ? c
              : +n;
        },
        le = function (t, e, n) {
          var r,
            i,
            o = V(e[1]),
            a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
            s = e[a];
          if ((o && (s.duration = e[1]), (s.parent = n), t)) {
            for (r = s, i = n; i && !("immediateRender" in r); )
              (r = i.vars.defaults || {}), (i = Z(i.vars.inherit) && i.parent);
            (s.immediateRender = Z(r.immediateRender)),
              t < 2 ? (s.runBackwards = 1) : (s.startAt = e[a - 1]);
          }
          return new pn(e[0], s, e[a + 1]);
        },
        fe = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        he = function (t, e, n) {
          return n < t ? t : n > e ? e : n;
        },
        pe = function (t, e) {
          return X(t) && (e = st.exec(t)) ? e[1] : "";
        },
        de = [].slice,
        me = function (t, e) {
          return (
            t &&
            Q(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && Q(t[0]))) &&
            !t.nodeType &&
            t !== w
          );
        },
        ve = function (t, e, n) {
          return b && !e && b.selector
            ? b.selector(t)
            : !X(t) || n || (!T && qe())
              ? tt(t)
                ? (function (t, e, n) {
                    return (
                      void 0 === n && (n = []),
                      t.forEach(function (t) {
                        var r;
                        return (X(t) && !e) || me(t, 1)
                          ? (r = n).push.apply(r, ve(t))
                          : n.push(t);
                      }) || n
                    );
                  })(t, n)
                : me(t)
                  ? de.call(t, 0)
                  : t
                    ? [t]
                    : []
              : de.call((e || k).querySelectorAll(t), 0);
        },
        ye = function (t) {
          return (
            (t = ve(t)[0] || ht("Invalid scope") || {}),
            function (e) {
              var n = t.current || t.nativeElement || t;
              return ve(
                e,
                n.querySelectorAll
                  ? n
                  : n === t
                    ? ht("Invalid scope") || k.createElement("div")
                    : t,
              );
            }
          );
        },
        ge = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        _e = function (t) {
          if (H(t)) return t;
          var e = Q(t) ? t : { each: t },
            n = We(e.ease),
            r = e.from || 0,
            i = parseFloat(e.base) || 0,
            o = {},
            a = r > 0 && r < 1,
            s = isNaN(r) || a,
            u = e.axis,
            c = r,
            l = r;
          return (
            X(r)
              ? (c = l = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
              : !a && s && ((c = r[0]), (l = r[1])),
            function (t, a, f) {
              var h,
                p,
                d,
                m,
                v,
                y,
                g,
                _,
                b,
                x = (f || e).length,
                w = o[x];
              if (!w) {
                if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, N])[1])) {
                  for (
                    g = -N;
                    g < (g = f[b++].getBoundingClientRect().left) && b < x;

                  );
                  b < x && b--;
                }
                for (
                  w = o[x] = [],
                    h = s ? Math.min(b, x) * c - 0.5 : r % b,
                    p = b === N ? 0 : s ? (x * l) / b - 0.5 : (r / b) | 0,
                    g = 0,
                    _ = N,
                    y = 0;
                  y < x;
                  y++
                )
                  (d = (y % b) - h),
                    (m = p - ((y / b) | 0)),
                    (w[y] = v =
                      u ? Math.abs("y" === u ? m : d) : Y(d * d + m * m)),
                    v > g && (g = v),
                    v < _ && (_ = v);
                "random" === r && ge(w),
                  (w.max = g - _),
                  (w.min = _),
                  (w.v = x =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (b > x
                          ? x - 1
                          : u
                            ? "y" === u
                              ? x / b
                              : b
                            : Math.max(b, x / b)) ||
                      0) * ("edges" === r ? -1 : 1)),
                  (w.b = x < 0 ? i - x : i),
                  (w.u = pe(e.amount || e.each) || 0),
                  (n = n && x < 0 ? He(n) : n);
              }
              return (
                (x = (w[t] - w.min) / w.max || 0),
                Pt(w.b + (n ? n(x) : x) * w.v) + w.u
              );
            }
          );
        },
        be = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (n) {
            var r = Pt(Math.round(parseFloat(n) / t) * t * e);
            return (r - (r % 1)) / e + (V(n) ? 0 : pe(n));
          };
        },
        xe = function (t, e) {
          var n,
            r,
            i = tt(t);
          return (
            !i &&
              Q(t) &&
              ((n = i = t.radius || N),
              t.values
                ? ((t = ve(t.values)), (r = !V(t[0])) && (n *= n))
                : (t = be(t.increment))),
            fe(
              e,
              i
                ? H(t)
                  ? function (e) {
                      return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                    }
                  : function (e) {
                      for (
                        var i,
                          o,
                          a = parseFloat(r ? e.x : e),
                          s = parseFloat(r ? e.y : 0),
                          u = N,
                          c = 0,
                          l = t.length;
                        l--;

                      )
                        (i = r
                          ? (i = t[l].x - a) * i + (o = t[l].y - s) * o
                          : Math.abs(t[l] - a)) < u && ((u = i), (c = l));
                      return (
                        (c = !n || u <= n ? t[c] : e),
                        r || c === e || V(e) ? c : c + pe(e)
                      );
                    }
                : be(t),
            )
          );
        },
        we = function (t, e, n, r) {
          return fe(tt(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
            return tt(t)
              ? t[~~(Math.random() * t.length)]
              : (n = n || 1e-5) &&
                  (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n,
                    ) *
                      n *
                      r,
                  ) / r;
          });
        },
        Te = function (t, e, n) {
          return fe(n, function (n) {
            return t[~~e(n)];
          });
        },
        ke = function (t) {
          for (var e, n, r, i, o = 0, a = ""; ~(e = t.indexOf("random(", o)); )
            (r = t.indexOf(")", e)),
              (i = "[" === t.charAt(e + 7)),
              (n = t.substr(e + 7, r - e - 7).match(i ? at : et)),
              (a +=
                t.substr(o, e - o) +
                we(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
              (o = r + 1);
          return a + t.substr(o, t.length - o);
        },
        Ee = function (t, e, n, r, i) {
          var o = e - t,
            a = r - n;
          return fe(i, function (e) {
            return n + (((e - t) / o) * a || 0);
          });
        },
        Oe = function (t, e, n) {
          var r,
            i,
            o,
            a = t.labels,
            s = N;
          for (r in a)
            (i = a[r] - e) < 0 == !!n &&
              i &&
              s > (i = Math.abs(i)) &&
              ((o = r), (s = i));
          return o;
        },
        Se = function (t, e, n) {
          var r,
            i,
            o,
            a = t.vars,
            s = a[e],
            u = b,
            c = t._ctx;
          if (s)
            return (
              (r = a[e + "Params"]),
              (i = a.callbackScope || t),
              n && _t.length && jt(),
              c && (b = c),
              (o = r ? s.apply(i, r) : s.call(i)),
              (b = u),
              o
            );
        },
        Ce = function (t) {
          return (
            Xt(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!_),
            t.progress() < 1 && Se(t, "onInterrupt"),
            t
          );
        },
        Ae = [],
        Me = function (t) {
          if (t)
            if (((t = (!t.name && t.default) || t), $() || t.headless)) {
              var e = t.name,
                n = H(t),
                r =
                  e && !n && t.init
                    ? function () {
                        this._props = [];
                      }
                    : t,
                i = {
                  init: dt,
                  render: wn,
                  add: an,
                  kill: kn,
                  modifier: Tn,
                  rawVars: 0,
                },
                o = {
                  targetTest: 0,
                  get: 0,
                  getSetter: gn,
                  aliases: {},
                  register: 0,
                };
              if ((qe(), t !== r)) {
                if (xt[e]) return;
                zt(r, zt(qt(t, i), o)),
                  Bt(r.prototype, Bt(i, qt(t, o))),
                  (xt[(r.prop = e)] = r),
                  t.targetTest && (kt.push(r), (gt[e] = 1)),
                  (e =
                    ("css" === e
                      ? "CSS"
                      : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
              }
              pt(e, r), t.register && t.register(In, r, Sn);
            } else Ae.push(t);
        },
        Pe = 255,
        Le = {
          aqua: [0, Pe, Pe],
          lime: [0, Pe, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, Pe],
          navy: [0, 0, 128],
          white: [Pe, Pe, Pe],
          olive: [128, 128, 0],
          yellow: [Pe, Pe, 0],
          orange: [Pe, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [Pe, 0, 0],
          pink: [Pe, 192, 203],
          cyan: [0, Pe, Pe],
          transparent: [Pe, Pe, Pe, 0],
        },
        Fe = function (t, e, n) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (n - e) * t * 6
              : t < 0.5
                ? n
                : 3 * t < 2
                  ? e + (n - e) * (2 / 3 - t) * 6
                  : e) *
              Pe +
              0.5) |
            0
          );
        },
        je = function (t, e, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            h,
            p = t ? (V(t) ? [t >> 16, (t >> 8) & Pe, t & Pe] : 0) : Le.black;
          if (!p) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Le[t])
            )
              p = Le[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((r = t.charAt(1)),
                  (i = t.charAt(2)),
                  (o = t.charAt(3)),
                  (t =
                    "#" +
                    r +
                    r +
                    i +
                    i +
                    o +
                    o +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                9 === t.length)
              )
                return [
                  (p = parseInt(t.substr(1, 6), 16)) >> 16,
                  (p >> 8) & Pe,
                  p & Pe,
                  parseInt(t.substr(7), 16) / 255,
                ];
              p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & Pe,
                t & Pe,
              ];
            } else if ("hsl" === t.substr(0, 3))
              if (((p = h = t.match(et)), e)) {
                if (~t.indexOf("="))
                  return (p = t.match(nt)), n && p.length < 4 && (p[3] = 1), p;
              } else
                (a = (+p[0] % 360) / 360),
                  (s = +p[1] / 100),
                  (r =
                    2 * (u = +p[2] / 100) -
                    (i = u <= 0.5 ? u * (s + 1) : u + s - u * s)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = Fe(a + 1 / 3, r, i)),
                  (p[1] = Fe(a, r, i)),
                  (p[2] = Fe(a - 1 / 3, r, i));
            else p = t.match(et) || Le.transparent;
            p = p.map(Number);
          }
          return (
            e &&
              !h &&
              ((r = p[0] / Pe),
              (i = p[1] / Pe),
              (o = p[2] / Pe),
              (u = ((c = Math.max(r, i, o)) + (l = Math.min(r, i, o))) / 2),
              c === l
                ? (a = s = 0)
                : ((f = c - l),
                  (s = u > 0.5 ? f / (2 - c - l) : f / (c + l)),
                  (a =
                    c === r
                      ? (i - o) / f + (i < o ? 6 : 0)
                      : c === i
                        ? (o - r) / f + 2
                        : (r - i) / f + 4),
                  (a *= 60)),
              (p[0] = ~~(a + 0.5)),
              (p[1] = ~~(100 * s + 0.5)),
              (p[2] = ~~(100 * u + 0.5))),
            n && p.length < 4 && (p[3] = 1),
            p
          );
        },
        Re = function (t) {
          var e = [],
            n = [],
            r = -1;
          return (
            t.split(Ne).forEach(function (t) {
              var i = t.match(rt) || [];
              e.push.apply(e, i), n.push((r += i.length + 1));
            }),
            (e.c = n),
            e
          );
        },
        De = function (t, e, n) {
          var r,
            i,
            o,
            a,
            s = "",
            u = (t + s).match(Ne),
            c = e ? "hsla(" : "rgba(",
            l = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = je(t, e, 1)) &&
                c +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            n && ((o = Re(t)), (r = n.c).join(s) !== o.c.join(s)))
          )
            for (a = (i = t.replace(Ne, "1").split(rt)).length - 1; l < a; l++)
              s +=
                i[l] +
                (~r.indexOf(l)
                  ? u.shift() || c + "0,0,0,0)"
                  : (o.length ? o : u.length ? u : n).shift());
          if (!i)
            for (a = (i = t.split(Ne)).length - 1; l < a; l++) s += i[l] + u[l];
          return s + i[a];
        },
        Ne = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in Le) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        ze = /hsl[a]?\(/,
        Be = function (t) {
          var e,
            n = t.join(" ");
          if (((Ne.lastIndex = 0), Ne.test(n)))
            return (
              (e = ze.test(n)),
              (t[1] = De(t[1], e)),
              (t[0] = De(t[0], e, Re(t[1]))),
              !0
            );
        },
        Ie = (function () {
          var t,
            e,
            n,
            r,
            i,
            o,
            a = Date.now,
            s = 500,
            u = 33,
            c = a(),
            l = c,
            f = 1e3 / 240,
            h = f,
            p = [],
            d = function n(d) {
              var m,
                v,
                y,
                g,
                _ = a() - l,
                b = !0 === d;
              if (
                ((_ > s || _ < 0) && (c += _ - u),
                ((m = (y = (l += _) - c) - h) > 0 || b) &&
                  ((g = ++r.frame),
                  (i = y - 1e3 * r.time),
                  (r.time = y /= 1e3),
                  (h += m + (m >= f ? 4 : f - m)),
                  (v = 1)),
                b || (t = e(n)),
                v)
              )
                for (o = 0; o < p.length; o++) p[o](y, i, g, d);
            };
          return (r = {
            time: 0,
            frame: 0,
            tick: function () {
              d(!0);
            },
            deltaRatio: function (t) {
              return i / (1e3 / (t || 60));
            },
            wake: function () {
              E &&
                (!T &&
                  $() &&
                  ((w = T = window),
                  (k = w.document || {}),
                  (ut.gsap = In),
                  (w.gsapVersions || (w.gsapVersions = [])).push(In.version),
                  lt(ct || w.GreenSockGlobals || (!w.gsap && w) || {}),
                  Ae.forEach(Me)),
                (n =
                  "undefined" != typeof requestAnimationFrame &&
                  requestAnimationFrame),
                t && r.sleep(),
                (e =
                  n ||
                  function (t) {
                    return setTimeout(t, (h - 1e3 * r.time + 1) | 0);
                  }),
                (C = 1),
                d(2));
            },
            sleep: function () {
              (n ? cancelAnimationFrame : clearTimeout)(t), (C = 0), (e = dt);
            },
            lagSmoothing: function (t, e) {
              (s = t || 1 / 0), (u = Math.min(e || 33, s));
            },
            fps: function (t) {
              (f = 1e3 / (t || 240)), (h = 1e3 * r.time + f);
            },
            add: function (t, e, n) {
              var i = e
                ? function (e, n, o, a) {
                    t(e, n, o, a), r.remove(i);
                  }
                : t;
              return r.remove(t), p[n ? "unshift" : "push"](i), qe(), i;
            },
            remove: function (t, e) {
              ~(e = p.indexOf(t)) && p.splice(e, 1) && o >= e && o--;
            },
            _listeners: p,
          });
        })(),
        qe = function () {
          return !C && Ie.wake();
        },
        Ye = {},
        Ge = /^[\d.\-M][\d.\-,\s]/,
        Ue = /["']/g,
        Xe = function (t) {
          for (
            var e,
              n,
              r,
              i = {},
              o = t.substr(1, t.length - 3).split(":"),
              a = o[0],
              s = 1,
              u = o.length;
            s < u;
            s++
          )
            (n = o[s]),
              (e = s !== u - 1 ? n.lastIndexOf(",") : n.length),
              (r = n.substr(0, e)),
              (i[a] = isNaN(r) ? r.replace(Ue, "").trim() : +r),
              (a = n.substr(e + 1).trim());
          return i;
        },
        He = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        Ve = function t(e, n) {
          for (var r, i = e._first; i; )
            i instanceof en
              ? t(i, n)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === n ||
                (i.timeline
                  ? t(i.timeline, n)
                  : ((r = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = r),
                    (i._yoyo = n))),
              (i = i._next);
        },
        We = function (t, e) {
          return (
            (t &&
              (H(t)
                ? t
                : Ye[t] ||
                  (function (t) {
                    var e,
                      n,
                      r,
                      i,
                      o = (t + "").split("("),
                      a = Ye[o[0]];
                    return a && o.length > 1 && a.config
                      ? a.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [Xe(o[1])]
                            : ((e = t),
                              (n = e.indexOf("(") + 1),
                              (r = e.indexOf(")")),
                              (i = e.indexOf("(", n)),
                              e.substring(
                                n,
                                ~i && i < r ? e.indexOf(")", r + 1) : r,
                              ))
                                .split(",")
                                .map(Dt),
                        )
                      : Ye._CE && Ge.test(t)
                        ? Ye._CE("", t)
                        : a;
                  })(t))) ||
            e
          );
        },
        Qe = function (t, e, n, r) {
          void 0 === n &&
            (n = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === r &&
              (r = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var i,
            o = { easeIn: e, easeOut: n, easeInOut: r };
          return (
            At(t, function (t) {
              for (var e in ((Ye[t] = ut[t] = o),
              (Ye[(i = t.toLowerCase())] = n),
              o))
                Ye[
                  i +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                        ? ".out"
                        : ".inOut")
                ] = Ye[t + "." + e] = o[e];
            }),
            o
          );
        },
        Ze = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        $e = function t(e, n, r) {
          var i = n >= 1 ? n : 1,
            o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            a = (o / B) * (Math.asin(1 / i) || 0),
            s = function (t) {
              return 1 === t
                ? 1
                : i * Math.pow(2, -10 * t) * U((t - a) * o) + 1;
            },
            u =
              "out" === e
                ? s
                : "in" === e
                  ? function (t) {
                      return 1 - s(1 - t);
                    }
                  : Ze(s);
          return (
            (o = B / o),
            (u.config = function (n, r) {
              return t(e, n, r);
            }),
            u
          );
        },
        Je = function t(e, n) {
          void 0 === n && (n = 1.70158);
          var r = function (t) {
              return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
            },
            i =
              "out" === e
                ? r
                : "in" === e
                  ? function (t) {
                      return 1 - r(1 - t);
                    }
                  : Ze(r);
          return (
            (i.config = function (n) {
              return t(e, n);
            }),
            i
          );
        };
      At("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var n = e < 5 ? e + 1 : e;
        Qe(
          t + ",Power" + (n - 1),
          e
            ? function (t) {
                return Math.pow(t, n);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, n);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, n) / 2
              : 1 - Math.pow(2 * (1 - t), n) / 2;
          },
        );
      }),
        (Ye.Linear.easeNone = Ye.none = Ye.Linear.easeIn),
        Qe("Elastic", $e("in"), $e("out"), $e()),
        (A = 7.5625),
        (L = 2 * (P = 1 / (M = 2.75))),
        (F = 2.5 * P),
        Qe(
          "Bounce",
          function (t) {
            return 1 - j(1 - t);
          },
          (j = function (t) {
            return t < P
              ? A * t * t
              : t < L
                ? A * Math.pow(t - 1.5 / M, 2) + 0.75
                : t < F
                  ? A * (t -= 2.25 / M) * t + 0.9375
                  : A * Math.pow(t - 2.625 / M, 2) + 0.984375;
          }),
        ),
        Qe("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        Qe("Circ", function (t) {
          return -(Y(1 - t * t) - 1);
        }),
        Qe("Sine", function (t) {
          return 1 === t ? 1 : 1 - G(t * I);
        }),
        Qe("Back", Je("in"), Je("out"), Je()),
        (Ye.SteppedEase =
          Ye.steps =
          ut.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t,
                  r = t + (e ? 0 : 1),
                  i = e ? 1 : 0;
                return function (t) {
                  return (((r * he(0, 0.99999999, t)) | 0) + i) * n;
                };
              },
            }),
        (D.ease = Ye["quad.out"]),
        At(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (Et += t + "," + t + "Params,");
          },
        );
      var Ke = function (t, e) {
          (this.id = q++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : Ct),
            (this.set = e ? e.getSetter : gn);
        },
        tn = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              ae(this, +t.duration, 1, 1),
              (this.data = t.data),
              b && ((this._ctx = b), b.data.push(this)),
              C || Ie.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0
                      ? t + (t + this._rDelay) * this._repeat
                      : t,
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  ae(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1),
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((qe(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (
                  Kt(this, t), !n._dp || n.parent || te(n, this);
                  n && n.parent;

                )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  ee(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === z) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), Rt(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Qt(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e,
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.rawTime() > 0
                    ? 1
                    : 0;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      Qt(this),
                    e,
                  )
                : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.rawTime() > 0
                    ? 1
                    : 0;
            }),
            (e.iteration = function (t, e) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * n, e)
                : this._repeat
                  ? Zt(this._tTime, n) + 1
                  : 1;
            }),
            (e.timeScale = function (t, e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var n =
                this.parent && this._ts
                  ? $t(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(
                  he(-Math.abs(this._delay), this._tDur, n),
                  !1 !== e,
                ),
                Jt(this),
                (function (t) {
                  for (var e = t.parent; e && e.parent; )
                    (e._dirty = 1), e.totalDuration(), (e = e.parent);
                  return t;
                })(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (qe(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== z &&
                            (this._tTime -= z),
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    ee(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (Z(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                    ? $t(e.rawTime(t), this)
                    : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = yt);
              var e = _;
              return (
                (_ = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                (_ = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                (n = e._start + n / (Math.abs(e._ts) || 1)), (e = e._dp);
              return !this.parent && this._sat ? this._sat.globalTime(t) : n;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), se(this))
                : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), se(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(ce(this, t), Z(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, Z(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                n = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= n &&
                  t < this.endTime(!0) - z
                )
              );
            }),
            (e.eventCallback = function (t, e, n) {
              var r = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((r[t] = e),
                      n && (r[t + "Params"] = n),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete r[t],
                  this)
                : r[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (n) {
                var r = H(t) ? t : Nt,
                  i = function () {
                    var t = e.then;
                    (e.then = null),
                      H(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                      n(r),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? i()
                  : (e._prom = i);
              });
            }),
            (e.kill = function () {
              Ce(this);
            }),
            t
          );
        })();
      zt(tn.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var en = (function (t) {
        function e(e, n) {
          var r;
          return (
            void 0 === e && (e = {}),
            ((r = t.call(this, e) || this).labels = {}),
            (r.smoothChildTiming = !!e.smoothChildTiming),
            (r.autoRemoveChildren = !!e.autoRemoveChildren),
            (r._sort = Z(e.sortChildren)),
            x && ee(e.parent || x, v(r), n),
            e.reversed && r.reverse(),
            e.paused && r.paused(!0),
            e.scrollTrigger && ne(v(r), e.scrollTrigger),
            r
          );
        }
        y(e, t);
        var n = e.prototype;
        return (
          (n.to = function (t, e, n) {
            return le(0, arguments, this), this;
          }),
          (n.from = function (t, e, n) {
            return le(1, arguments, this), this;
          }),
          (n.fromTo = function (t, e, n, r) {
            return le(2, arguments, this), this;
          }),
          (n.set = function (t, e, n) {
            return (
              (e.duration = 0),
              (e.parent = this),
              Yt(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new pn(t, e, ce(this, n), 1),
              this
            );
          }),
          (n.call = function (t, e, n) {
            return ee(this, pn.delayedCall(0, t, e), n);
          }),
          (n.staggerTo = function (t, e, n, r, i, o, a) {
            return (
              (n.duration = e),
              (n.stagger = n.stagger || r),
              (n.onComplete = o),
              (n.onCompleteParams = a),
              (n.parent = this),
              new pn(t, n, ce(this, i)),
              this
            );
          }),
          (n.staggerFrom = function (t, e, n, r, i, o, a) {
            return (
              (n.runBackwards = 1),
              (Yt(n).immediateRender = Z(n.immediateRender)),
              this.staggerTo(t, e, n, r, i, o, a)
            );
          }),
          (n.staggerFromTo = function (t, e, n, r, i, o, a, s) {
            return (
              (r.startAt = n),
              (Yt(r).immediateRender = Z(r.immediateRender)),
              this.staggerTo(t, e, r, i, o, a, s)
            );
          }),
          (n.render = function (t, e, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              h,
              p,
              d,
              m = this._time,
              v = this._dirty ? this.totalDuration() : this._tDur,
              y = this._dur,
              g = t <= 0 ? 0 : Pt(t),
              b = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (
              (this !== x && g > v && t >= 0 && (g = v),
              g !== this._tTime || n || b)
            ) {
              if (
                (m !== this._time &&
                  y &&
                  ((g += this._time - m), (t += this._time - m)),
                (r = g),
                (f = this._start),
                (u = !(l = this._ts)),
                b && (y || (m = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((p = this._yoyo),
                  (s = y + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * s + t, e, n);
                if (
                  ((r = Pt(g % s)),
                  g === v
                    ? ((a = this._repeat), (r = y))
                    : ((a = ~~(g / s)) && a === g / s && ((r = y), a--),
                      r > y && (r = y)),
                  (h = Zt(this._tTime, s)),
                  !m &&
                    this._tTime &&
                    h !== a &&
                    this._tTime - h * s - this._dur <= 0 &&
                    (h = a),
                  p && 1 & a && ((r = y - r), (d = 1)),
                  a !== h && !this._lock)
                ) {
                  var w = p && 1 & h,
                    T = w === (p && 1 & a);
                  if (
                    (a < h && (w = !w),
                    (m = w ? 0 : g % y ? y : g),
                    (this._lock = 1),
                    (this.render(m || (d ? 0 : Pt(a * s)), e, !y)._lock = 0),
                    (this._tTime = g),
                    !e && this.parent && Se(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !d &&
                      (this.invalidate()._lock = 1),
                    (m && m !== this._time) ||
                      u !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((y = this._dur),
                    (v = this._tDur),
                    T &&
                      ((this._lock = 2),
                      (m = w ? y : -1e-4),
                      this.render(m, !0),
                      this.vars.repeatRefresh && !d && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !u)
                  )
                    return this;
                  Ve(this, d);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((c = (function (t, e, n) {
                    var r;
                    if (n > e)
                      for (r = t._first; r && r._start <= n; ) {
                        if ("isPause" === r.data && r._start > e) return r;
                        r = r._next;
                      }
                    else
                      for (r = t._last; r && r._start >= n; ) {
                        if ("isPause" === r.data && r._start < e) return r;
                        r = r._prev;
                      }
                  })(this, Pt(m), Pt(r))),
                  c && (g -= r - (r = c._start))),
                (this._tTime = g),
                (this._time = r),
                (this._act = !l),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (m = 0)),
                !m && r && !e && !a && (Se(this, "onStart"), this._tTime !== g))
              )
                return this;
              if (r >= m && t >= 0)
                for (i = this._first; i; ) {
                  if (
                    ((o = i._next),
                    (i._act || r >= i._start) && i._ts && c !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (r - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (r - i._start) * i._ts,
                        e,
                        n,
                      ),
                      r !== this._time || (!this._ts && !u))
                    ) {
                      (c = 0), o && (g += this._zTime = -1e-8);
                      break;
                    }
                  }
                  i = o;
                }
              else {
                i = this._last;
                for (var k = t < 0 ? t : r; i; ) {
                  if (
                    ((o = i._prev), (i._act || k <= i._end) && i._ts && c !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, n);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (k - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (k - i._start) * i._ts,
                        e,
                        n || (_ && (i._initted || i._startAt)),
                      ),
                      r !== this._time || (!this._ts && !u))
                    ) {
                      (c = 0), o && (g += this._zTime = k ? -1e-8 : z);
                      break;
                    }
                  }
                  i = o;
                }
              }
              if (
                c &&
                !e &&
                (this.pause(),
                (c.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1),
                this._ts)
              )
                return (this._start = f), Jt(this), this.render(t, e, n);
              this._onUpdate && !e && Se(this, "onUpdate", !0),
                ((g === v && this._tTime >= this.totalDuration()) ||
                  (!g && m)) &&
                  ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !y) &&
                      ((g === v && this._ts > 0) || (!g && this._ts < 0)) &&
                      Xt(this, 1),
                    e ||
                      (t < 0 && !m) ||
                      (!g && !m && v) ||
                      (Se(
                        this,
                        g === v && t >= 0 ? "onComplete" : "onReverseComplete",
                        !0,
                      ),
                      this._prom &&
                        !(g < v && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (n.add = function (t, e) {
            var n = this;
            if ((V(e) || (e = ce(this, e, t)), !(t instanceof tn))) {
              if (tt(t))
                return (
                  t.forEach(function (t) {
                    return n.add(t, e);
                  }),
                  this
                );
              if (X(t)) return this.addLabel(t, e);
              if (!H(t)) return this;
              t = pn.delayedCall(0, t);
            }
            return this !== t ? ee(this, t, e) : this;
          }),
          (n.getChildren = function (t, e, n, r) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === n && (n = !0),
              void 0 === r && (r = -N);
            for (var i = [], o = this._first; o; )
              o._start >= r &&
                (o instanceof pn
                  ? e && i.push(o)
                  : (n && i.push(o),
                    t && i.push.apply(i, o.getChildren(!0, e, n)))),
                (o = o._next);
            return i;
          }),
          (n.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
              if (e[n].vars.id === t) return e[n];
          }),
          (n.remove = function (t) {
            return X(t)
              ? this.removeLabel(t)
              : H(t)
                ? this.killTweensOf(t)
                : (Ut(this, t),
                  t === this._recent && (this._recent = this._last),
                  Ht(this));
          }),
          (n.totalTime = function (e, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = Pt(
                    Ie.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts),
                  )),
                t.prototype.totalTime.call(this, e, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (t, e) {
            return (this.labels[t] = ce(this, e)), this;
          }),
          (n.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (n.addPause = function (t, e, n) {
            var r = pn.delayedCall(0, e || dt, n);
            return (
              (r.data = "isPause"),
              (this._hasPause = 1),
              ee(this, r, ce(this, t))
            );
          }),
          (n.removePause = function (t) {
            var e = this._first;
            for (t = ce(this, t); e; )
              e._start === t && "isPause" === e.data && Xt(e), (e = e._next);
          }),
          (n.killTweensOf = function (t, e, n) {
            for (var r = this.getTweensOf(t, n), i = r.length; i--; )
              nn !== r[i] && r[i].kill(t, e);
            return this;
          }),
          (n.getTweensOf = function (t, e) {
            for (var n, r = [], i = ve(t), o = this._first, a = V(e); o; )
              o instanceof pn
                ? Ft(o._targets, i) &&
                  (a
                    ? (!nn || (o._initted && o._ts)) &&
                      o.globalTime(0) <= e &&
                      o.globalTime(o.totalDuration()) > e
                    : !e || o.isActive()) &&
                  r.push(o)
                : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
                (o = o._next);
            return r;
          }),
          (n.tweenTo = function (t, e) {
            e = e || {};
            var n,
              r = this,
              i = ce(r, t),
              o = e,
              a = o.startAt,
              s = o.onStart,
              u = o.onStartParams,
              c = o.immediateRender,
              l = pn.to(
                r,
                zt(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (a && "time" in a ? a.time : r._time)) /
                          r.timeScale(),
                      ) ||
                      z,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (i - (a && "time" in a ? a.time : r._time)) /
                              r.timeScale(),
                          );
                        l._dur !== t && ae(l, t, 0, 1).render(l._time, !0, !0),
                          (n = 1);
                      }
                      s && s.apply(l, u || []);
                    },
                  },
                  e,
                ),
              );
            return c ? l.render(0) : l;
          }),
          (n.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, zt({ startAt: { time: ce(this, t) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (t) {
            return void 0 === t && (t = this._time), Oe(this, ce(this, t));
          }),
          (n.previousLabel = function (t) {
            return void 0 === t && (t = this._time), Oe(this, ce(this, t), 1);
          }),
          (n.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + z);
          }),
          (n.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, o = this.labels; i; )
              i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
            if (e) for (r in o) o[r] >= n && (o[r] += t);
            return Ht(this);
          }),
          (n.invalidate = function (e) {
            var n = this._first;
            for (this._lock = 0; n; ) n.invalidate(e), (n = n._next);
            return t.prototype.invalidate.call(this, e);
          }),
          (n.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n; )
              (e = n._next), this.remove(n), (n = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              Ht(this)
            );
          }),
          (n.totalDuration = function (t) {
            var e,
              n,
              r,
              i = 0,
              o = this,
              a = o._last,
              s = N;
            if (arguments.length)
              return o.timeScale(
                (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                  (o.reversed() ? -t : t),
              );
            if (o._dirty) {
              for (r = o.parent; a; )
                (e = a._prev),
                  a._dirty && a.totalDuration(),
                  (n = a._start) > s && o._sort && a._ts && !o._lock
                    ? ((o._lock = 1), (ee(o, a, n - a._delay, 1)._lock = 0))
                    : (s = n),
                  n < 0 &&
                    a._ts &&
                    ((i -= n),
                    ((!r && !o._dp) || (r && r.smoothChildTiming)) &&
                      ((o._start += n / o._ts),
                      (o._time -= n),
                      (o._tTime -= n)),
                    o.shiftChildren(-n, !1, -Infinity),
                    (s = 0)),
                  a._end > i && a._ts && (i = a._end),
                  (a = e);
              ae(o, o === x && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
            }
            return o._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((x._ts && (Rt(x, $t(t, x)), (O = Ie.frame)), Ie.frame >= Tt)) {
              Tt += R.autoSleep || 120;
              var e = x._first;
              if ((!e || !e._ts) && R.autoSleep && Ie._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || Ie.sleep();
              }
            }
          }),
          e
        );
      })(tn);
      zt(en.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var nn,
        rn,
        on = function (t, e, n, r, i, o, a) {
          var s,
            u,
            c,
            l,
            f,
            h,
            p,
            d,
            m = new Sn(this._pt, t, e, 0, 1, xn, null, i),
            v = 0,
            y = 0;
          for (
            m.b = n,
              m.e = r,
              n += "",
              (p = ~(r += "").indexOf("random(")) && (r = ke(r)),
              o && (o((d = [n, r]), t, e), (n = d[0]), (r = d[1])),
              u = n.match(it) || [];
            (s = it.exec(r));

          )
            (l = s[0]),
              (f = r.substring(v, s.index)),
              c ? (c = (c + 1) % 5) : "rgba(" === f.substr(-5) && (c = 1),
              l !== u[y++] &&
                ((h = parseFloat(u[y - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: f || 1 === y ? f : ",",
                  s: h,
                  c: "=" === l.charAt(1) ? Lt(h, l) - h : parseFloat(l) - h,
                  m: c && c < 4 ? Math.round : 0,
                }),
                (v = it.lastIndex));
          return (
            (m.c = v < r.length ? r.substring(v, r.length) : ""),
            (m.fp = a),
            (ot.test(r) || p) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        an = function (t, e, n, r, i, o, a, s, u, c) {
          H(r) && (r = r(i || 0, t, o));
          var l,
            f = t[e],
            h =
              "get" !== n
                ? n
                : H(f)
                  ? u
                    ? t[
                        e.indexOf("set") || !H(t["get" + e.substr(3)])
                          ? e
                          : "get" + e.substr(3)
                      ](u)
                    : t[e]()
                  : f,
            p = H(f) ? (u ? vn : mn) : dn;
          if (
            (X(r) &&
              (~r.indexOf("random(") && (r = ke(r)),
              "=" === r.charAt(1) &&
                ((l = Lt(h, r) + (pe(h) || 0)) || 0 === l) &&
                (r = l)),
            !c || h !== r || rn)
          )
            return isNaN(h * r) || "" === r
              ? (!f && !(e in t) && ft(e, r),
                on.call(this, t, e, h, r, p, s || R.stringFilter, u))
              : ((l = new Sn(
                  this._pt,
                  t,
                  e,
                  +h || 0,
                  r - (h || 0),
                  "boolean" == typeof f ? bn : _n,
                  0,
                  p,
                )),
                u && (l.fp = u),
                a && l.modifier(a, this, t),
                (this._pt = l));
        },
        sn = function (t, e, n, r, i, o) {
          var a, s, u, c;
          if (
            xt[t] &&
            !1 !==
              (a = new xt[t]()).init(
                i,
                a.rawVars
                  ? e[t]
                  : (function (t, e, n, r, i) {
                      if (
                        (H(t) && (t = ln(t, i, e, n, r)),
                        !Q(t) || (t.style && t.nodeType) || tt(t) || K(t))
                      )
                        return X(t) ? ln(t, i, e, n, r) : t;
                      var o,
                        a = {};
                      for (o in t) a[o] = ln(t[o], i, e, n, r);
                      return a;
                    })(e[t], r, i, o, n),
                n,
                r,
                o,
              ) &&
            ((n._pt = s =
              new Sn(n._pt, i, t, 0, 1, a.render, a, 0, a.priority)),
            n !== S)
          )
            for (
              u = n._ptLookup[n._targets.indexOf(i)], c = a._props.length;
              c--;

            )
              u[a._props[c]] = s;
          return a;
        },
        un = function t(e, n, r) {
          var i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            h,
            p,
            d,
            m,
            v,
            y = e.vars,
            b = y.ease,
            w = y.startAt,
            T = y.immediateRender,
            k = y.lazy,
            E = y.onUpdate,
            O = y.runBackwards,
            S = y.yoyoEase,
            C = y.keyframes,
            A = y.autoRevert,
            M = e._dur,
            P = e._startAt,
            L = e._targets,
            F = e.parent,
            j = F && "nested" === F.data ? F.vars.targets : L,
            R = "auto" === e._overwrite && !g,
            B = e.timeline;
          if (
            (B && (!C || !b) && (b = "none"),
            (e._ease = We(b, D.ease)),
            (e._yEase = S ? He(We(!0 === S ? b : S, D.ease)) : 0),
            S &&
              e._yoyo &&
              !e._repeat &&
              ((S = e._yEase), (e._yEase = e._ease), (e._ease = S)),
            (e._from = !B && !!y.runBackwards),
            !B || (C && !y.stagger))
          ) {
            if (
              ((m = (f = L[0] ? St(L[0]).harness : 0) && y[f.prop]),
              (i = qt(y, gt)),
              P &&
                (P._zTime < 0 && P.progress(1),
                n < 0 && O && T && !A
                  ? P.render(-1, !0)
                  : P.revert(O && M ? vt : mt),
                (P._lazy = 0)),
              w)
            ) {
              if (
                (Xt(
                  (e._startAt = pn.set(
                    L,
                    zt(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: F,
                        immediateRender: !0,
                        lazy: !P && Z(k),
                        startAt: null,
                        delay: 0,
                        onUpdate:
                          E &&
                          function () {
                            return Se(e, "onUpdate");
                          },
                        stagger: 0,
                      },
                      w,
                    ),
                  )),
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                n < 0 && (_ || (!T && !A)) && e._startAt.revert(vt),
                T && M && n <= 0 && r <= 0)
              )
                return void (n && (e._zTime = n));
            } else if (O && M && !P)
              if (
                (n && (T = !1),
                (a = zt(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: T && !P && Z(k),
                    immediateRender: T,
                    stagger: 0,
                    parent: F,
                  },
                  i,
                )),
                m && (a[f.prop] = m),
                Xt((e._startAt = pn.set(L, a))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                n < 0 &&
                  (_ ? e._startAt.revert(vt) : e._startAt.render(-1, !0)),
                (e._zTime = n),
                T)
              ) {
                if (!n) return;
              } else t(e._startAt, z, z);
            for (
              e._pt = e._ptCache = 0, k = (M && Z(k)) || (k && !M), o = 0;
              o < L.length;
              o++
            ) {
              if (
                ((l = (u = L[o])._gsap || Ot(L)[o]._gsap),
                (e._ptLookup[o] = p = {}),
                bt[l.id] && _t.length && jt(),
                (d = j === L ? o : j.indexOf(u)),
                f &&
                  !1 !== (h = new f()).init(u, m || i, e, d, j) &&
                  ((e._pt = s =
                    new Sn(e._pt, u, h.name, 0, 1, h.render, h, 0, h.priority)),
                  h._props.forEach(function (t) {
                    p[t] = s;
                  }),
                  h.priority && (c = 1)),
                !f || m)
              )
                for (a in i)
                  xt[a] && (h = sn(a, i, e, d, u, j))
                    ? h.priority && (c = 1)
                    : (p[a] = s =
                        an.call(e, u, a, "get", i[a], d, j, 0, y.stringFilter));
              e._op && e._op[o] && e.kill(u, e._op[o]),
                R &&
                  e._pt &&
                  ((nn = e),
                  x.killTweensOf(u, p, e.globalTime(n)),
                  (v = !e.parent),
                  (nn = 0)),
                e._pt && k && (bt[l.id] = 1);
            }
            c && On(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = E),
            (e._initted = (!e._op || e._pt) && !v),
            C && n <= 0 && B.render(N, !0, !0);
        },
        cn = function (t, e, n, r) {
          var i,
            o,
            a = e.ease || r || "power1.inOut";
          if (tt(e))
            (o = n[t] || (n[t] = [])),
              e.forEach(function (t, n) {
                return o.push({ t: (n / (e.length - 1)) * 100, v: t, e: a });
              });
          else
            for (i in e)
              (o = n[i] || (n[i] = [])),
                "ease" === i || o.push({ t: parseFloat(t), v: e[i], e: a });
        },
        ln = function (t, e, n, r, i) {
          return H(t)
            ? t.call(e, n, r, i)
            : X(t) && ~t.indexOf("random(")
              ? ke(t)
              : t;
        },
        fn = Et + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        hn = {};
      At(fn + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (hn[t] = 1);
      });
      var pn = (function (t) {
        function e(e, n, r, i) {
          var o;
          "number" == typeof n && ((r.duration = n), (n = r), (r = null));
          var a,
            s,
            u,
            c,
            l,
            f,
            h,
            p,
            d = (o = t.call(this, i ? n : Yt(n)) || this).vars,
            m = d.duration,
            y = d.delay,
            _ = d.immediateRender,
            b = d.stagger,
            w = d.overwrite,
            T = d.keyframes,
            k = d.defaults,
            E = d.scrollTrigger,
            O = d.yoyoEase,
            S = n.parent || x,
            C = (tt(e) || K(e) ? V(e[0]) : "length" in n) ? [e] : ve(e);
          if (
            ((o._targets = C.length
              ? Ot(C)
              : ht(
                  "GSAP target " + e + " not found. https://gsap.com",
                  !R.nullTargetWarn,
                ) || []),
            (o._ptLookup = []),
            (o._overwrite = w),
            T || b || J(m) || J(y))
          ) {
            if (
              ((n = o.vars),
              (a = o.timeline =
                new en({
                  data: "nested",
                  defaults: k || {},
                  targets: S && "nested" === S.data ? S.vars.targets : C,
                })).kill(),
              (a.parent = a._dp = v(o)),
              (a._start = 0),
              b || J(m) || J(y))
            ) {
              if (((c = C.length), (h = b && _e(b)), Q(b)))
                for (l in b) ~fn.indexOf(l) && (p || (p = {}), (p[l] = b[l]));
              for (s = 0; s < c; s++)
                ((u = qt(n, hn)).stagger = 0),
                  O && (u.yoyoEase = O),
                  p && Bt(u, p),
                  (f = C[s]),
                  (u.duration = +ln(m, v(o), s, f, C)),
                  (u.delay = (+ln(y, v(o), s, f, C) || 0) - o._delay),
                  !b &&
                    1 === c &&
                    u.delay &&
                    ((o._delay = y = u.delay), (o._start += y), (u.delay = 0)),
                  a.to(f, u, h ? h(s, f, C) : 0),
                  (a._ease = Ye.none);
              a.duration() ? (m = y = 0) : (o.timeline = 0);
            } else if (T) {
              Yt(zt(a.vars.defaults, { ease: "none" })),
                (a._ease = We(T.ease || n.ease || "none"));
              var A,
                M,
                P,
                L = 0;
              if (tt(T))
                T.forEach(function (t) {
                  return a.to(C, t, ">");
                }),
                  a.duration();
              else {
                for (l in ((u = {}), T))
                  "ease" === l ||
                    "easeEach" === l ||
                    cn(l, T[l], u, T.easeEach);
                for (l in u)
                  for (
                    A = u[l].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                      L = 0,
                      s = 0;
                    s < A.length;
                    s++
                  )
                    ((P = {
                      ease: (M = A[s]).e,
                      duration: ((M.t - (s ? A[s - 1].t : 0)) / 100) * m,
                    })[l] = M.v),
                      a.to(C, P, L),
                      (L += P.duration);
                a.duration() < m && a.to({}, { duration: m - a.duration() });
              }
            }
            m || o.duration((m = a.duration()));
          } else o.timeline = 0;
          return (
            !0 !== w || g || ((nn = v(o)), x.killTweensOf(C), (nn = 0)),
            ee(S, v(o), r),
            n.reversed && o.reverse(),
            n.paused && o.paused(!0),
            (_ ||
              (!m &&
                !T &&
                o._start === Pt(S._time) &&
                Z(_) &&
                Wt(v(o)) &&
                "nested" !== S.data)) &&
              ((o._tTime = -1e-8), o.render(Math.max(0, -y) || 0)),
            E && ne(v(o), E),
            o
          );
        }
        y(e, t);
        var n = e.prototype;
        return (
          (n.render = function (t, e, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              h = this._time,
              p = this._tDur,
              d = this._dur,
              m = t < 0,
              v = t > p - z && !m ? p : t < z ? 0 : t;
            if (d) {
              if (
                v !== this._tTime ||
                !t ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== m)
              ) {
                if (((r = v), (l = this.timeline), this._repeat)) {
                  if (((a = d + this._rDelay), this._repeat < -1 && m))
                    return this.totalTime(100 * a + t, e, n);
                  if (
                    ((r = Pt(v % a)),
                    v === p
                      ? ((o = this._repeat), (r = d))
                      : ((o = ~~(v / a)) && o === Pt(v / a) && ((r = d), o--),
                        r > d && (r = d)),
                    (u = this._yoyo && 1 & o) &&
                      ((f = this._yEase), (r = d - r)),
                    (s = Zt(this._tTime, a)),
                    r === h && !n && this._initted && o === s)
                  )
                    return (this._tTime = v), this;
                  o !== s &&
                    (l && this._yEase && Ve(l, u),
                    this.vars.repeatRefresh &&
                      !u &&
                      !this._lock &&
                      this._time !== a &&
                      this._initted &&
                      ((this._lock = n = 1),
                      (this.render(Pt(a * o), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (re(this, m ? t : r, n, e, v))
                    return (this._tTime = 0), this;
                  if (
                    !(
                      h === this._time ||
                      (n && this.vars.repeatRefresh && o !== s)
                    )
                  )
                    return this;
                  if (d !== this._dur) return this.render(t, e, n);
                }
                if (
                  ((this._tTime = v),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = c = (f || this._ease)(r / d)),
                  this._from && (this.ratio = c = 1 - c),
                  r &&
                    !h &&
                    !e &&
                    !o &&
                    (Se(this, "onStart"), this._tTime !== v))
                )
                  return this;
                for (i = this._pt; i; ) i.r(c, i.d), (i = i._next);
                (l &&
                  l.render(
                    t < 0 ? t : l._dur * l._ease(r / this._dur),
                    e,
                    n,
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (m && Vt(this, t, 0, n), Se(this, "onUpdate")),
                  this._repeat &&
                    o !== s &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    Se(this, "onRepeat"),
                  (v !== this._tDur && v) ||
                    this._tTime !== v ||
                    (m && !this._onUpdate && Vt(this, t, 0, !0),
                    (t || !d) &&
                      ((v === this._tDur && this._ts > 0) ||
                        (!v && this._ts < 0)) &&
                      Xt(this, 1),
                    e ||
                      (m && !h) ||
                      !(v || h || u) ||
                      (Se(
                        this,
                        v === p ? "onComplete" : "onReverseComplete",
                        !0,
                      ),
                      this._prom &&
                        !(v < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, n, r) {
                var i,
                  o,
                  a,
                  s = t.ratio,
                  u =
                    e < 0 ||
                    (!e &&
                      ((!t._start && ie(t) && (t._initted || !oe(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !oe(t))))
                      ? 0
                      : 1,
                  c = t._rDelay,
                  l = 0;
                if (
                  (c &&
                    t._repeat &&
                    ((l = he(0, t._tDur, e)),
                    (o = Zt(l, c)),
                    t._yoyo && 1 & o && (u = 1 - u),
                    o !== Zt(t._tTime, c) &&
                      ((s = 1 - u),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  u !== s || _ || r || t._zTime === z || (!e && t._zTime))
                ) {
                  if (!t._initted && re(t, e, r, n, l)) return;
                  for (
                    a = t._zTime,
                      t._zTime = e || (n ? z : 0),
                      n || (n = e && !a),
                      t.ratio = u,
                      t._from && (u = 1 - u),
                      t._time = 0,
                      t._tTime = l,
                      i = t._pt;
                    i;

                  )
                    i.r(u, i.d), (i = i._next);
                  e < 0 && Vt(t, e, 0, !0),
                    t._onUpdate && !n && Se(t, "onUpdate"),
                    l && t._repeat && !n && t.parent && Se(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === u &&
                      (u && Xt(t, 1),
                      n ||
                        _ ||
                        (Se(t, u ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function (e) {
            return (
              (!e || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            );
          }),
          (n.resetTo = function (t, e, n, r, i) {
            C || Ie.wake(), this._ts || this.play();
            var o = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts,
            );
            return (
              this._initted || un(this, o),
              (function (t, e, n, r, i, o, a, s) {
                var u,
                  c,
                  l,
                  f,
                  h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                if (!h)
                  for (
                    h = t._ptCache[e] = [],
                      l = t._ptLookup,
                      f = t._targets.length;
                    f--;

                  ) {
                    if ((u = l[f][e]) && u.d && u.d._pt)
                      for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
                        u = u._next;
                    if (!u)
                      return (
                        (rn = 1),
                        (t.vars[e] = "+=0"),
                        un(t, a),
                        (rn = 0),
                        s ? ht(e + " not eligible for reset") : 1
                      );
                    h.push(u);
                  }
                for (f = h.length; f--; )
                  ((u = (c = h[f])._pt || c).s =
                    (!r && 0 !== r) || i ? u.s + (r || 0) + o * u.c : r),
                    (u.c = n - u.s),
                    c.e && (c.e = Mt(n) + pe(c.e)),
                    c.b && (c.b = u.s + pe(c.b));
              })(this, t, e, n, r, this._ease(o / this._dur), o, i)
                ? this.resetTo(t, e, n, r, 1)
                : (Kt(this, 0),
                  this.parent ||
                    Gt(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0,
                    ),
                  this.render(0))
            );
          }),
          (n.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
              return (this._lazy = this._pt = 0), this.parent ? Ce(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, nn && !0 !== nn.vars.overwrite)
                  ._first || Ce(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  ae(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var r,
              i,
              o,
              a,
              s,
              u,
              c,
              l = this._targets,
              f = t ? ve(t) : l,
              h = this._ptLookup,
              p = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var n = t.length, r = n === e.length;
                  r && n-- && t[n] === e[n];

                );
                return n < 0;
              })(l, f)
            )
              return "all" === e && (this._pt = 0), Ce(this);
            for (
              r = this._op = this._op || [],
                "all" !== e &&
                  (X(e) &&
                    ((s = {}),
                    At(e, function (t) {
                      return (s[t] = 1);
                    }),
                    (e = s)),
                  (e = (function (t, e) {
                    var n,
                      r,
                      i,
                      o,
                      a = t[0] ? St(t[0]).harness : 0,
                      s = a && a.aliases;
                    if (!s) return e;
                    for (r in ((n = Bt({}, e)), s))
                      if ((r in n))
                        for (i = (o = s[r].split(",")).length; i--; )
                          n[o[i]] = n[r];
                    return n;
                  })(l, e))),
                c = l.length;
              c--;

            )
              if (~f.indexOf(l[c]))
                for (s in ((i = h[c]),
                "all" === e
                  ? ((r[c] = e), (a = i), (o = {}))
                  : ((o = r[c] = r[c] || {}), (a = e)),
                a))
                  (u = i && i[s]) &&
                    (("kill" in u.d && !0 !== u.d.kill(s)) ||
                      Ut(this, u, "_pt"),
                    delete i[s]),
                    "all" !== o && (o[s] = 1);
            return this._initted && !this._pt && p && Ce(this), this;
          }),
          (e.to = function (t, n) {
            return new e(t, n, arguments[2]);
          }),
          (e.from = function (t, e) {
            return le(1, arguments);
          }),
          (e.delayedCall = function (t, n, r, i) {
            return new e(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: i,
            });
          }),
          (e.fromTo = function (t, e, n) {
            return le(2, arguments);
          }),
          (e.set = function (t, n) {
            return (
              (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n)
            );
          }),
          (e.killTweensOf = function (t, e, n) {
            return x.killTweensOf(t, e, n);
          }),
          e
        );
      })(tn);
      zt(pn.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        At("staggerTo,staggerFrom,staggerFromTo", function (t) {
          pn[t] = function () {
            var e = new en(),
              n = de.call(arguments, 0);
            return (
              n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
            );
          };
        });
      var dn = function (t, e, n) {
          return (t[e] = n);
        },
        mn = function (t, e, n) {
          return t[e](n);
        },
        vn = function (t, e, n, r) {
          return t[e](r.fp, n);
        },
        yn = function (t, e, n) {
          return t.setAttribute(e, n);
        },
        gn = function (t, e) {
          return H(t[e]) ? mn : W(t[e]) && t.setAttribute ? yn : dn;
        },
        _n = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        bn = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        xn = function (t, e) {
          var n = e._pt,
            r = "";
          if (!t && e.b) r = e.b;
          else if (1 === t && e.e) r = e.e;
          else {
            for (; n; )
              (r =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * t)
                  : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
                r),
                (n = n._next);
            r += e.c;
          }
          e.set(e.t, e.p, r, e);
        },
        wn = function (t, e) {
          for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
        },
        Tn = function (t, e, n, r) {
          for (var i, o = this._pt; o; )
            (i = o._next), o.p === r && o.modifier(t, e, n), (o = i);
        },
        kn = function (t) {
          for (var e, n, r = this._pt; r; )
            (n = r._next),
              (r.p === t && !r.op) || r.op === t
                ? Ut(this, r, "_pt")
                : r.dep || (e = 1),
              (r = n);
          return !e;
        },
        En = function (t, e, n, r) {
          r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
        },
        On = function (t) {
          for (var e, n, r, i, o = t._pt; o; ) {
            for (e = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
            (o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o),
              (o._next = n) ? (n._prev = o) : (i = o),
              (o = e);
          }
          t._pt = r;
        },
        Sn = (function () {
          function t(t, e, n, r, i, o, a, s, u) {
            (this.t = e),
              (this.s = r),
              (this.c = i),
              (this.p = n),
              (this.r = o || _n),
              (this.d = a || this),
              (this.set = s || dn),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = En),
                (this.m = t),
                (this.mt = n),
                (this.tween = e);
            }),
            t
          );
        })();
      At(
        Et +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (gt[t] = 1);
        },
      ),
        (ut.TweenMax = ut.TweenLite = pn),
        (ut.TimelineLite = ut.TimelineMax = en),
        (x = new en({
          sortChildren: !1,
          defaults: D,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (R.stringFilter = Be);
      var Cn = [],
        An = {},
        Mn = [],
        Pn = 0,
        Ln = 0,
        Fn = function (t) {
          return (An[t] || Mn).map(function (t) {
            return t();
          });
        },
        jn = function () {
          var t = Date.now(),
            e = [];
          t - Pn > 2 &&
            (Fn("matchMediaInit"),
            Cn.forEach(function (t) {
              var n,
                r,
                i,
                o,
                a = t.queries,
                s = t.conditions;
              for (r in a)
                (n = w.matchMedia(a[r]).matches) && (i = 1),
                  n !== s[r] && ((s[r] = n), (o = 1));
              o && (t.revert(), i && e.push(t));
            }),
            Fn("matchMediaRevert"),
            e.forEach(function (t) {
              return t.onMatch(t, function (e) {
                return t.add(null, e);
              });
            }),
            (Pn = t),
            Fn("matchMedia"));
        },
        Rn = (function () {
          function t(t, e) {
            (this.selector = e && ye(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = Ln++),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, n) {
              H(t) && ((n = e), (e = t), (t = H));
              var r = this,
                i = function () {
                  var t,
                    i = b,
                    o = r.selector;
                  return (
                    i && i !== r && i.data.push(r),
                    n && (r.selector = ye(n)),
                    (b = r),
                    (t = e.apply(r, arguments)),
                    H(t) && r._r.push(t),
                    (b = i),
                    (r.selector = o),
                    (r.isReverted = !1),
                    t
                  );
                };
              return (
                (r.last = i),
                t === H
                  ? i(r, function (t) {
                      return r.add(null, t);
                    })
                  : t
                    ? (r[t] = i)
                    : i
              );
            }),
            (e.ignore = function (t) {
              var e = b;
              (b = null), t(this), (b = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (n) {
                  return n instanceof t
                    ? e.push.apply(e, n.getTweens())
                    : n instanceof pn &&
                        !(n.parent && "nested" === n.parent.data) &&
                        e.push(n);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var n = this;
              if (
                (t
                  ? (function () {
                      for (var e, r = n.getTweens(), i = n.data.length; i--; )
                        "isFlip" === (e = n.data[i]).data &&
                          (e.revert(),
                          e.getChildren(!0, !0, !1).forEach(function (t) {
                            return r.splice(r.indexOf(t), 1);
                          }));
                      for (
                        r
                          .map(function (t) {
                            return {
                              g:
                                t._dur ||
                                t._delay ||
                                (t._sat && !t._sat.vars.immediateRender)
                                  ? t.globalTime(0)
                                  : -1 / 0,
                              t,
                            };
                          })
                          .sort(function (t, e) {
                            return e.g - t.g || -1 / 0;
                          })
                          .forEach(function (e) {
                            return e.t.revert(t);
                          }),
                          i = n.data.length;
                        i--;

                      )
                        (e = n.data[i]) instanceof en
                          ? "nested" !== e.data &&
                            (e.scrollTrigger && e.scrollTrigger.revert(),
                            e.kill())
                          : !(e instanceof pn) && e.revert && e.revert(t);
                      n._r.forEach(function (e) {
                        return e(t, n);
                      }),
                        (n.isReverted = !0);
                    })()
                  : this.data.forEach(function (t) {
                      return t.kill && t.kill();
                    }),
                this.clear(),
                e)
              )
                for (var r = Cn.length; r--; )
                  Cn[r].id === this.id && Cn.splice(r, 1);
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        Dn = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t), b && b.data.push(this);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, n) {
              Q(t) || (t = { matches: t });
              var r,
                i,
                o,
                a = new Rn(0, n || this.scope),
                s = (a.conditions = {});
              for (i in (b && !a.selector && (a.selector = b.selector),
              this.contexts.push(a),
              (e = a.add("onMatch", e)),
              (a.queries = t),
              t))
                "all" === i
                  ? (o = 1)
                  : (r = w.matchMedia(t[i])) &&
                    (Cn.indexOf(a) < 0 && Cn.push(a),
                    (s[i] = r.matches) && (o = 1),
                    r.addListener
                      ? r.addListener(jn)
                      : r.addEventListener("change", jn));
              return (
                o &&
                  e(a, function (t) {
                    return a.add(null, t);
                  }),
                this
              );
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        Nn = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            e.forEach(function (t) {
              return Me(t);
            });
          },
          timeline: function (t) {
            return new en(t);
          },
          getTweensOf: function (t, e) {
            return x.getTweensOf(t, e);
          },
          getProperty: function (t, e, n, r) {
            X(t) && (t = ve(t)[0]);
            var i = St(t || {}).get,
              o = n ? Nt : Dt;
            return (
              "native" === n && (n = ""),
              t
                ? e
                  ? o(((xt[e] && xt[e].get) || i)(t, e, n, r))
                  : function (e, n, r) {
                      return o(((xt[e] && xt[e].get) || i)(t, e, n, r));
                    }
                : t
            );
          },
          quickSetter: function (t, e, n) {
            if ((t = ve(t)).length > 1) {
              var r = t.map(function (t) {
                  return In.quickSetter(t, e, n);
                }),
                i = r.length;
              return function (t) {
                for (var e = i; e--; ) r[e](t);
              };
            }
            t = t[0] || {};
            var o = xt[e],
              a = St(t),
              s = (a.harness && (a.harness.aliases || {})[e]) || e,
              u = o
                ? function (e) {
                    var r = new o();
                    (S._pt = 0),
                      r.init(t, n ? e + n : e, S, 0, [t]),
                      r.render(1, r),
                      S._pt && wn(1, S);
                  }
                : a.set(t, s);
            return o
              ? u
              : function (e) {
                  return u(t, s, n ? e + n : e, a, 1);
                };
          },
          quickTo: function (t, e, n) {
            var r,
              i = In.to(
                t,
                Bt((((r = {})[e] = "+=0.1"), (r.paused = !0), r), n || {}),
              ),
              o = function (t, n, r) {
                return i.resetTo(e, t, n, r);
              };
            return (o.tween = i), o;
          },
          isTweening: function (t) {
            return x.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = We(t.ease, D.ease)), It(D, t || {});
          },
          config: function (t) {
            return It(R, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              n = t.effect,
              r = t.plugins,
              i = t.defaults,
              o = t.extendTimeline;
            (r || "").split(",").forEach(function (t) {
              return (
                t &&
                !xt[t] &&
                !ut[t] &&
                ht(e + " effect requires " + t + " plugin.")
              );
            }),
              (wt[e] = function (t, e, r) {
                return n(ve(t), zt(e || {}, i), r);
              }),
              o &&
                (en.prototype[e] = function (t, n, r) {
                  return this.add(wt[e](t, Q(n) ? n : (r = n) && {}, this), r);
                });
          },
          registerEase: function (t, e) {
            Ye[t] = We(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? We(t, e) : Ye;
          },
          getById: function (t) {
            return x.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n,
              r,
              i = new en(t);
            for (
              i.smoothChildTiming = Z(t.smoothChildTiming),
                x.remove(i),
                i._dp = 0,
                i._time = i._tTime = x._time,
                n = x._first;
              n;

            )
              (r = n._next),
                (!e &&
                  !n._dur &&
                  n instanceof pn &&
                  n.vars.onComplete === n._targets[0]) ||
                  ee(i, n, n._start - n._delay),
                (n = r);
            return ee(x, i, 0), i;
          },
          context: function (t, e) {
            return t ? new Rn(t, e) : b;
          },
          matchMedia: function (t) {
            return new Dn(t);
          },
          matchMediaRefresh: function () {
            return (
              Cn.forEach(function (t) {
                var e,
                  n,
                  r = t.conditions;
                for (n in r) r[n] && ((r[n] = !1), (e = 1));
                e && t.revert();
              }) || jn()
            );
          },
          addEventListener: function (t, e) {
            var n = An[t] || (An[t] = []);
            ~n.indexOf(e) || n.push(e);
          },
          removeEventListener: function (t, e) {
            var n = An[t],
              r = n && n.indexOf(e);
            r >= 0 && n.splice(r, 1);
          },
          utils: {
            wrap: function t(e, n, r) {
              var i = n - e;
              return tt(e)
                ? Te(e, t(0, e.length), n)
                : fe(r, function (t) {
                    return ((i + ((t - e) % i)) % i) + e;
                  });
            },
            wrapYoyo: function t(e, n, r) {
              var i = n - e,
                o = 2 * i;
              return tt(e)
                ? Te(e, t(0, e.length - 1), n)
                : fe(r, function (t) {
                    return (
                      e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t)
                    );
                  });
            },
            distribute: _e,
            random: we,
            snap: xe,
            normalize: function (t, e, n) {
              return Ee(t, e, 0, 1, n);
            },
            getUnit: pe,
            clamp: function (t, e, n) {
              return fe(n, function (n) {
                return he(t, e, n);
              });
            },
            splitColor: je,
            toArray: ve,
            selector: ye,
            mapRange: Ee,
            pipe: function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (n) {
                return t(parseFloat(n)) + (e || pe(n));
              };
            },
            interpolate: function t(e, n, r, i) {
              var o = isNaN(e + n)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * n;
                  };
              if (!o) {
                var a,
                  s,
                  u,
                  c,
                  l,
                  f = X(e),
                  h = {};
                if ((!0 === r && (i = 1) && (r = null), f))
                  (e = { p: e }), (n = { p: n });
                else if (tt(e) && !tt(n)) {
                  for (u = [], c = e.length, l = c - 2, s = 1; s < c; s++)
                    u.push(t(e[s - 1], e[s]));
                  c--,
                    (o = function (t) {
                      t *= c;
                      var e = Math.min(l, ~~t);
                      return u[e](t - e);
                    }),
                    (r = n);
                } else i || (e = Bt(tt(e) ? [] : {}, e));
                if (!u) {
                  for (a in n) an.call(h, e, a, "get", n[a]);
                  o = function (t) {
                    return wn(t, h) || (f ? e.p : e);
                  };
                }
              }
              return fe(r, o);
            },
            shuffle: ge,
          },
          install: lt,
          effects: wt,
          ticker: Ie,
          updateRoot: en.updateRoot,
          plugins: xt,
          globalTimeline: x,
          core: {
            PropTween: Sn,
            globals: pt,
            Tween: pn,
            Timeline: en,
            Animation: tn,
            getCache: St,
            _removeLinkedListItem: Ut,
            reverting: function () {
              return _;
            },
            context: function (t) {
              return t && b && (b.data.push(t), (t._ctx = b)), b;
            },
            suppressOverwrites: function (t) {
              return (g = t);
            },
          },
        };
      At("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (Nn[t] = pn[t]);
      }),
        Ie.add(en.updateRoot),
        (S = Nn.to({}, { duration: 0 }));
      var zn = function (t, e) {
          for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
            n = n._next;
          return n;
        },
        Bn = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, n, r) {
              r._onInit = function (t) {
                var r, i;
                if (
                  (X(n) &&
                    ((r = {}),
                    At(n, function (t) {
                      return (r[t] = 1);
                    }),
                    (n = r)),
                  e)
                ) {
                  for (i in ((r = {}), n)) r[i] = e(n[i]);
                  n = r;
                }
                !(function (t, e) {
                  var n,
                    r,
                    i,
                    o = t._targets;
                  for (n in e)
                    for (r = o.length; r--; )
                      (i = t._ptLookup[r][n]) &&
                        (i = i.d) &&
                        (i._pt && (i = zn(i, n)),
                        i && i.modifier && i.modifier(e[n], t, o[r], n));
                })(t, n);
              };
            },
          };
        },
        In =
          Nn.registerPlugin(
            {
              name: "attr",
              init: function (t, e, n, r, i) {
                var o, a, s;
                for (o in ((this.tween = n), e))
                  (s = t.getAttribute(o) || ""),
                    ((a = this.add(
                      t,
                      "setAttribute",
                      (s || 0) + "",
                      e[o],
                      r,
                      i,
                      0,
                      0,
                      o,
                    )).op = o),
                    (a.b = s),
                    this._props.push(o);
              },
              render: function (t, e) {
                for (var n = e._pt; n; )
                  _ ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var n = e.length; n--; )
                  this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
              },
            },
            Bn("roundProps", be),
            Bn("modifiers"),
            Bn("snap", xe),
          ) || Nn;
      function qn(t) {
        return (
          (qn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          qn(t)
        );
      }
      (pn.version = en.version = In.version = "3.12.5"),
        (E = 1),
        $() && qe(),
        Ye.Power0,
        Ye.Power1,
        Ye.Power2,
        Ye.Power3,
        Ye.Power4,
        Ye.Linear,
        Ye.Quad,
        Ye.Cubic,
        Ye.Quart,
        Ye.Quint,
        Ye.Strong,
        Ye.Elastic,
        Ye.Back,
        Ye.SteppedEase,
        Ye.Bounce,
        Ye.Sine,
        Ye.Expo,
        Ye.Circ;
      var Yn,
        Gn,
        Un,
        Xn,
        Hn,
        Vn,
        Wn,
        Qn,
        Zn = {},
        $n = 180 / Math.PI,
        Jn = Math.PI / 180,
        Kn = Math.atan2,
        tr = /([A-Z])/g,
        er = /(left|right|width|margin|padding|x)/i,
        nr = /[\s,\(]\S/,
        rr = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        ir = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e,
          );
        },
        or = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e,
          );
        },
        ar = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e,
          );
        },
        sr = function (t, e) {
          var n = e.s + e.c * t;
          e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        ur = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        cr = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        lr = function (t, e, n) {
          return (t.style[e] = n);
        },
        fr = function (t, e, n) {
          return t.style.setProperty(e, n);
        },
        hr = function (t, e, n) {
          return (t._gsap[e] = n);
        },
        pr = function (t, e, n) {
          return (t._gsap.scaleX = t._gsap.scaleY = n);
        },
        dr = function (t, e, n, r, i) {
          var o = t._gsap;
          (o.scaleX = o.scaleY = n), o.renderTransform(i, o);
        },
        mr = function (t, e, n, r, i) {
          var o = t._gsap;
          (o[e] = n), o.renderTransform(i, o);
        },
        vr = "transform",
        yr = vr + "Origin",
        gr = function t(e, n) {
          var r = this,
            i = this.target,
            o = i.style,
            a = i._gsap;
          if (e in Zn && o) {
            if (((this.tfm = this.tfm || {}), "transform" === e))
              return rr.transform.split(",").forEach(function (e) {
                return t.call(r, e, n);
              });
            if (
              (~(e = rr[e] || e).indexOf(",")
                ? e.split(",").forEach(function (t) {
                    return (r.tfm[t] = Dr(i, t));
                  })
                : (this.tfm[e] = a.x ? a[e] : Dr(i, e)),
              e === yr && (this.tfm.zOrigin = a.zOrigin),
              this.props.indexOf(vr) >= 0)
            )
              return;
            a.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(yr, n, "")),
              (e = vr);
          }
          (o || n) && this.props.push(e, n, o[e]);
        },
        _r = function (t) {
          t.translate &&
            (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"));
        },
        br = function () {
          var t,
            e,
            n = this.props,
            r = this.target,
            i = r.style,
            o = r._gsap;
          for (t = 0; t < n.length; t += 3)
            n[t + 1]
              ? (r[n[t]] = n[t + 2])
              : n[t + 2]
                ? (i[n[t]] = n[t + 2])
                : i.removeProperty(
                    "--" === n[t].substr(0, 2)
                      ? n[t]
                      : n[t].replace(tr, "-$1").toLowerCase(),
                  );
          if (this.tfm) {
            for (e in this.tfm) o[e] = this.tfm[e];
            o.svg &&
              (o.renderTransform(),
              r.setAttribute("data-svg-origin", this.svgo || "")),
              ((t = Wn()) && t.isStart) ||
                i[vr] ||
                (_r(i),
                o.zOrigin &&
                  i[yr] &&
                  ((i[yr] += " " + o.zOrigin + "px"),
                  (o.zOrigin = 0),
                  o.renderTransform()),
                (o.uncache = 1));
          }
        },
        xr = function (t, e) {
          var n = { target: t, props: [], revert: br, save: gr };
          return (
            t._gsap || In.core.getCache(t),
            e &&
              e.split(",").forEach(function (t) {
                return n.save(t);
              }),
            n
          );
        },
        wr = function (t, e) {
          var n = Gn.createElementNS
            ? Gn.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t,
              )
            : Gn.createElement(t);
          return n && n.style ? n : Gn.createElement(t);
        },
        Tr = function t(e, n, r) {
          var i = getComputedStyle(e);
          return (
            i[n] ||
            i.getPropertyValue(n.replace(tr, "-$1").toLowerCase()) ||
            i.getPropertyValue(n) ||
            (!r && t(e, Er(n) || n, 1)) ||
            ""
          );
        },
        kr = "O,Moz,ms,Ms,Webkit".split(","),
        Er = function (t, e, n) {
          var r = (e || Hn).style,
            i = 5;
          if (t in r && !n) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(kr[i] + t in r);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? kr[i] : "") + t;
        },
        Or = function () {
          "undefined" != typeof window &&
            window.document &&
            ((Yn = window),
            (Gn = Yn.document),
            (Un = Gn.documentElement),
            (Hn = wr("div") || { style: {} }),
            wr("div"),
            (vr = Er(vr)),
            (yr = vr + "Origin"),
            (Hn.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (Qn = !!Er("perspective")),
            (Wn = In.core.reverting),
            (Xn = 1));
        },
        Sr = function t(e) {
          var n,
            r = wr(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg",
            ),
            i = this.parentNode,
            o = this.nextSibling,
            a = this.style.cssText;
          if (
            (Un.appendChild(r),
            r.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
            Un.removeChild(r),
            (this.style.cssText = a),
            n
          );
        },
        Cr = function (t, e) {
          for (var n = e.length; n--; )
            if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
        },
        Ar = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (n) {
            e = Sr.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === Sr ||
              (e = Sr.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +Cr(t, ["x", "cx", "x1"]) || 0,
                  y: +Cr(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Mr = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Ar(t));
        },
        Pr = function (t, e) {
          if (e) {
            var n,
              r = t.style;
            e in Zn && e !== yr && (e = vr),
              r.removeProperty
                ? (("ms" !== (n = e.substr(0, 2)) &&
                    "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  r.removeProperty(
                    "--" === n ? e : e.replace(tr, "-$1").toLowerCase(),
                  ))
                : r.removeAttribute(e);
          }
        },
        Lr = function (t, e, n, r, i, o) {
          var a = new Sn(t._pt, e, n, 0, 1, o ? cr : ur);
          return (t._pt = a), (a.b = r), (a.e = i), t._props.push(n), a;
        },
        Fr = { deg: 1, rad: 1, turn: 1 },
        jr = { grid: 1, flex: 1 },
        Rr = function t(e, n, r, i) {
          var o,
            a,
            s,
            u,
            c = parseFloat(r) || 0,
            l = (r + "").trim().substr((c + "").length) || "px",
            f = Hn.style,
            h = er.test(n),
            p = "svg" === e.tagName.toLowerCase(),
            d = (p ? "client" : "offset") + (h ? "Width" : "Height"),
            m = 100,
            v = "px" === i,
            y = "%" === i;
          if (i === l || !c || Fr[i] || Fr[l]) return c;
          if (
            ("px" !== l && !v && (c = t(e, n, r, "px")),
            (u = e.getCTM && Mr(e)),
            (y || "%" === l) && (Zn[n] || ~n.indexOf("adius")))
          )
            return (
              (o = u ? e.getBBox()[h ? "width" : "height"] : e[d]),
              Mt(y ? (c / o) * m : (c / 100) * o)
            );
          if (
            ((f[h ? "width" : "height"] = m + (v ? l : i)),
            (a =
              ~n.indexOf("adius") || ("em" === i && e.appendChild && !p)
                ? e
                : e.parentNode),
            u && (a = (e.ownerSVGElement || {}).parentNode),
            (a && a !== Gn && a.appendChild) || (a = Gn.body),
            (s = a._gsap) &&
              y &&
              s.width &&
              h &&
              s.time === Ie.time &&
              !s.uncache)
          )
            return Mt((c / s.width) * m);
          if (!y || ("height" !== n && "width" !== n))
            (y || "%" === l) &&
              !jr[Tr(a, "display")] &&
              (f.position = Tr(e, "position")),
              a === e && (f.position = "static"),
              a.appendChild(Hn),
              (o = Hn[d]),
              a.removeChild(Hn),
              (f.position = "absolute");
          else {
            var g = e.style[n];
            (e.style[n] = m + i), (o = e[d]), g ? (e.style[n] = g) : Pr(e, n);
          }
          return (
            h && y && (((s = St(a)).time = Ie.time), (s.width = a[d])),
            Mt(v ? (o * c) / m : o && c ? (m / o) * c : 0)
          );
        },
        Dr = function (t, e, n, r) {
          var i;
          return (
            Xn || Or(),
            e in rr &&
              "transform" !== e &&
              ~(e = rr[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            Zn[e] && "transform" !== e
              ? ((i = Vr(t, r)),
                (i =
                  "transformOrigin" !== e
                    ? i[e]
                    : i.svg
                      ? i.origin
                      : Wr(Tr(t, yr)) + " " + i.zOrigin + "px"))
              : (!(i = t.style[e]) ||
                  "auto" === i ||
                  r ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (Ir[e] && Ir[e](t, e, n)) ||
                  Tr(t, e) ||
                  Ct(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            n && !~(i + "").trim().indexOf(" ") ? Rr(t, e, i, n) + n : i
          );
        },
        Nr = function (t, e, n, r) {
          if (!n || "none" === n) {
            var i = Er(e, t, 1),
              o = i && Tr(t, i, 1);
            o && o !== n
              ? ((e = i), (n = o))
              : "borderColor" === e && (n = Tr(t, "borderTopColor"));
          }
          var a,
            s,
            u,
            c,
            l,
            f,
            h,
            p,
            d,
            m,
            v,
            y = new Sn(this._pt, t.style, e, 0, 1, xn),
            g = 0,
            _ = 0;
          if (
            ((y.b = n),
            (y.e = r),
            (n += ""),
            "auto" == (r += "") &&
              ((f = t.style[e]),
              (t.style[e] = r),
              (r = Tr(t, e) || r),
              f ? (t.style[e] = f) : Pr(t, e)),
            Be((a = [n, r])),
            (r = a[1]),
            (u = (n = a[0]).match(rt) || []),
            (r.match(rt) || []).length)
          ) {
            for (; (s = rt.exec(r)); )
              (h = s[0]),
                (d = r.substring(g, s.index)),
                l
                  ? (l = (l + 1) % 5)
                  : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) ||
                    (l = 1),
                h !== (f = u[_++] || "") &&
                  ((c = parseFloat(f) || 0),
                  (v = f.substr((c + "").length)),
                  "=" === h.charAt(1) && (h = Lt(c, h) + v),
                  (p = parseFloat(h)),
                  (m = h.substr((p + "").length)),
                  (g = rt.lastIndex - m.length),
                  m ||
                    ((m = m || R.units[e] || v),
                    g === r.length && ((r += m), (y.e += m))),
                  v !== m && (c = Rr(t, e, f, m) || 0),
                  (y._pt = {
                    _next: y._pt,
                    p: d || 1 === _ ? d : ",",
                    s: c,
                    c: p - c,
                    m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            y.c = g < r.length ? r.substring(g, r.length) : "";
          } else y.r = "display" === e && "none" === r ? cr : ur;
          return ot.test(r) && (y.e = 0), (this._pt = y), y;
        },
        zr = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        Br = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var n,
              r,
              i,
              o = e.t,
              a = o.style,
              s = e.u,
              u = o._gsap;
            if ("all" === s || !0 === s) (a.cssText = ""), (r = 1);
            else
              for (i = (s = s.split(",")).length; --i > -1; )
                (n = s[i]),
                  Zn[n] && ((r = 1), (n = "transformOrigin" === n ? yr : vr)),
                  Pr(o, n);
            r &&
              (Pr(o, vr),
              u &&
                (u.svg && o.removeAttribute("transform"),
                Vr(o, 1),
                (u.uncache = 1),
                _r(a)));
          }
        },
        Ir = {
          clearProps: function (t, e, n, r, i) {
            if ("isFromStart" !== i.data) {
              var o = (t._pt = new Sn(t._pt, e, n, 0, 0, Br));
              return (
                (o.u = r), (o.pr = -10), (o.tween = i), t._props.push(n), 1
              );
            }
          },
        },
        qr = [1, 0, 0, 1, 0, 0],
        Yr = {},
        Gr = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        Ur = function (t) {
          var e = Tr(t, vr);
          return Gr(e) ? qr : e.substr(7).match(nt).map(Mt);
        },
        Xr = function (t, e) {
          var n,
            r,
            i,
            o,
            a = t._gsap || St(t),
            s = t.style,
            u = Ur(t);
          return a.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (i = t.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? qr
              : u
            : (u !== qr ||
                t.offsetParent ||
                t === Un ||
                a.svg ||
                ((i = s.display),
                (s.display = "block"),
                ((n = t.parentNode) && t.offsetParent) ||
                  ((o = 1), (r = t.nextElementSibling), Un.appendChild(t)),
                (u = Ur(t)),
                i ? (s.display = i) : Pr(t, "display"),
                o &&
                  (r
                    ? n.insertBefore(t, r)
                    : n
                      ? n.appendChild(t)
                      : Un.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        Hr = function (t, e, n, r, i, o) {
          var a,
            s,
            u,
            c = t._gsap,
            l = i || Xr(t, !0),
            f = c.xOrigin || 0,
            h = c.yOrigin || 0,
            p = c.xOffset || 0,
            d = c.yOffset || 0,
            m = l[0],
            v = l[1],
            y = l[2],
            g = l[3],
            _ = l[4],
            b = l[5],
            x = e.split(" "),
            w = parseFloat(x[0]) || 0,
            T = parseFloat(x[1]) || 0;
          n
            ? l !== qr &&
              (s = m * g - v * y) &&
              ((u = w * (-v / s) + T * (m / s) - (m * b - v * _) / s),
              (w = w * (g / s) + T * (-y / s) + (y * b - g * _) / s),
              (T = u))
            : ((w =
                (a = Ar(t)).x + (~x[0].indexOf("%") ? (w / 100) * a.width : w)),
              (T =
                a.y +
                (~(x[1] || x[0]).indexOf("%") ? (T / 100) * a.height : T))),
            r || (!1 !== r && c.smooth)
              ? ((_ = w - f),
                (b = T - h),
                (c.xOffset = p + (_ * m + b * y) - _),
                (c.yOffset = d + (_ * v + b * g) - b))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = w),
            (c.yOrigin = T),
            (c.smooth = !!r),
            (c.origin = e),
            (c.originIsAbsolute = !!n),
            (t.style[yr] = "0px 0px"),
            o &&
              (Lr(o, c, "xOrigin", f, w),
              Lr(o, c, "yOrigin", h, T),
              Lr(o, c, "xOffset", p, c.xOffset),
              Lr(o, c, "yOffset", d, c.yOffset)),
            t.setAttribute("data-svg-origin", w + " " + T);
        },
        Vr = function (t, e) {
          var n = t._gsap || new Ke(t);
          if ("x" in n && !e && !n.uncache) return n;
          var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            h,
            p,
            d,
            m,
            v,
            y,
            g,
            _,
            b,
            x,
            w,
            T,
            k,
            E,
            O,
            S,
            C,
            A,
            M,
            P,
            L,
            F,
            j,
            D = t.style,
            N = n.scaleX < 0,
            z = "px",
            B = "deg",
            I = getComputedStyle(t),
            q = Tr(t, yr) || "0";
          return (
            (r = i = o = u = c = l = f = h = p = 0),
            (a = s = 1),
            (n.svg = !(!t.getCTM || !Mr(t))),
            I.translate &&
              (("none" === I.translate &&
                "none" === I.scale &&
                "none" === I.rotate) ||
                (D[vr] =
                  ("none" !== I.translate
                    ? "translate3d(" +
                      (I.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== I.rotate ? "rotate(" + I.rotate + ") " : "") +
                  ("none" !== I.scale
                    ? "scale(" + I.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== I[vr] ? I[vr] : "")),
              (D.scale = D.rotate = D.translate = "none")),
            (v = Xr(t, n.svg)),
            n.svg &&
              (n.uncache
                ? ((S = t.getBBox()),
                  (q = n.xOrigin - S.x + "px " + (n.yOrigin - S.y) + "px"),
                  (O = ""))
                : (O = !e && t.getAttribute("data-svg-origin")),
              Hr(t, O || q, !!O || n.originIsAbsolute, !1 !== n.smooth, v)),
            (d = n.xOrigin || 0),
            (m = n.yOrigin || 0),
            v !== qr &&
              ((b = v[0]),
              (x = v[1]),
              (w = v[2]),
              (T = v[3]),
              (r = k = v[4]),
              (i = E = v[5]),
              6 === v.length
                ? ((a = Math.sqrt(b * b + x * x)),
                  (s = Math.sqrt(T * T + w * w)),
                  (u = b || x ? Kn(x, b) * $n : 0),
                  (f = w || T ? Kn(w, T) * $n + u : 0) &&
                    (s *= Math.abs(Math.cos(f * Jn))),
                  n.svg &&
                    ((r -= d - (d * b + m * w)), (i -= m - (d * x + m * T))))
                : ((j = v[6]),
                  (L = v[7]),
                  (A = v[8]),
                  (M = v[9]),
                  (P = v[10]),
                  (F = v[11]),
                  (r = v[12]),
                  (i = v[13]),
                  (o = v[14]),
                  (c = (y = Kn(j, P)) * $n),
                  y &&
                    ((O = k * (g = Math.cos(-y)) + A * (_ = Math.sin(-y))),
                    (S = E * g + M * _),
                    (C = j * g + P * _),
                    (A = k * -_ + A * g),
                    (M = E * -_ + M * g),
                    (P = j * -_ + P * g),
                    (F = L * -_ + F * g),
                    (k = O),
                    (E = S),
                    (j = C)),
                  (l = (y = Kn(-w, P)) * $n),
                  y &&
                    ((g = Math.cos(-y)),
                    (F = T * (_ = Math.sin(-y)) + F * g),
                    (b = O = b * g - A * _),
                    (x = S = x * g - M * _),
                    (w = C = w * g - P * _)),
                  (u = (y = Kn(x, b)) * $n),
                  y &&
                    ((O = b * (g = Math.cos(y)) + x * (_ = Math.sin(y))),
                    (S = k * g + E * _),
                    (x = x * g - b * _),
                    (E = E * g - k * _),
                    (b = O),
                    (k = S)),
                  c &&
                    Math.abs(c) + Math.abs(u) > 359.9 &&
                    ((c = u = 0), (l = 180 - l)),
                  (a = Mt(Math.sqrt(b * b + x * x + w * w))),
                  (s = Mt(Math.sqrt(E * E + j * j))),
                  (y = Kn(k, E)),
                  (f = Math.abs(y) > 2e-4 ? y * $n : 0),
                  (p = F ? 1 / (F < 0 ? -F : F) : 0)),
              n.svg &&
                ((O = t.getAttribute("transform")),
                (n.forceCSS =
                  t.setAttribute("transform", "") || !Gr(Tr(t, vr))),
                O && t.setAttribute("transform", O))),
            Math.abs(f) > 90 &&
              Math.abs(f) < 270 &&
              (N
                ? ((a *= -1),
                  (f += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((s *= -1), (f += f <= 0 ? 180 : -180))),
            (e = e || n.uncache),
            (n.x =
              r -
              ((n.xPercent =
                r &&
                ((!e && n.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (t.offsetWidth * n.xPercent) / 100
                : 0) +
              z),
            (n.y =
              i -
              ((n.yPercent =
                i &&
                ((!e && n.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * n.yPercent) / 100
                : 0) +
              z),
            (n.z = o + z),
            (n.scaleX = Mt(a)),
            (n.scaleY = Mt(s)),
            (n.rotation = Mt(u) + B),
            (n.rotationX = Mt(c) + B),
            (n.rotationY = Mt(l) + B),
            (n.skewX = f + B),
            (n.skewY = h + B),
            (n.transformPerspective = p + z),
            (n.zOrigin =
              parseFloat(q.split(" ")[2]) || (!e && n.zOrigin) || 0) &&
              (D[yr] = Wr(q)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = R.force3D),
            (n.renderTransform = n.svg ? ei : Qn ? ti : Zr),
            (n.uncache = 0),
            n
          );
        },
        Wr = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        Qr = function (t, e, n) {
          var r = pe(e);
          return Mt(parseFloat(e) + parseFloat(Rr(t, "x", n + "px", r))) + r;
        },
        Zr = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            ti(t, e);
        },
        $r = "0deg",
        Jr = "0px",
        Kr = ") ",
        ti = function (t, e) {
          var n = e || this,
            r = n.xPercent,
            i = n.yPercent,
            o = n.x,
            a = n.y,
            s = n.z,
            u = n.rotation,
            c = n.rotationY,
            l = n.rotationX,
            f = n.skewX,
            h = n.skewY,
            p = n.scaleX,
            d = n.scaleY,
            m = n.transformPerspective,
            v = n.force3D,
            y = n.target,
            g = n.zOrigin,
            _ = "",
            b = ("auto" === v && t && 1 !== t) || !0 === v;
          if (g && (l !== $r || c !== $r)) {
            var x,
              w = parseFloat(c) * Jn,
              T = Math.sin(w),
              k = Math.cos(w);
            (w = parseFloat(l) * Jn),
              (x = Math.cos(w)),
              (o = Qr(y, o, T * x * -g)),
              (a = Qr(y, a, -Math.sin(w) * -g)),
              (s = Qr(y, s, k * x * -g + g));
          }
          m !== Jr && (_ += "perspective(" + m + Kr),
            (r || i) && (_ += "translate(" + r + "%, " + i + "%) "),
            (b || o !== Jr || a !== Jr || s !== Jr) &&
              (_ +=
                s !== Jr || b
                  ? "translate3d(" + o + ", " + a + ", " + s + ") "
                  : "translate(" + o + ", " + a + Kr),
            u !== $r && (_ += "rotate(" + u + Kr),
            c !== $r && (_ += "rotateY(" + c + Kr),
            l !== $r && (_ += "rotateX(" + l + Kr),
            (f === $r && h === $r) || (_ += "skew(" + f + ", " + h + Kr),
            (1 === p && 1 === d) || (_ += "scale(" + p + ", " + d + Kr),
            (y.style[vr] = _ || "translate(0, 0)");
        },
        ei = function (t, e) {
          var n,
            r,
            i,
            o,
            a,
            s = e || this,
            u = s.xPercent,
            c = s.yPercent,
            l = s.x,
            f = s.y,
            h = s.rotation,
            p = s.skewX,
            d = s.skewY,
            m = s.scaleX,
            v = s.scaleY,
            y = s.target,
            g = s.xOrigin,
            _ = s.yOrigin,
            b = s.xOffset,
            x = s.yOffset,
            w = s.forceCSS,
            T = parseFloat(l),
            k = parseFloat(f);
          (h = parseFloat(h)),
            (p = parseFloat(p)),
            (d = parseFloat(d)) && ((p += d = parseFloat(d)), (h += d)),
            h || p
              ? ((h *= Jn),
                (p *= Jn),
                (n = Math.cos(h) * m),
                (r = Math.sin(h) * m),
                (i = Math.sin(h - p) * -v),
                (o = Math.cos(h - p) * v),
                p &&
                  ((d *= Jn),
                  (a = Math.tan(p - d)),
                  (i *= a = Math.sqrt(1 + a * a)),
                  (o *= a),
                  d &&
                    ((a = Math.tan(d)),
                    (n *= a = Math.sqrt(1 + a * a)),
                    (r *= a))),
                (n = Mt(n)),
                (r = Mt(r)),
                (i = Mt(i)),
                (o = Mt(o)))
              : ((n = m), (o = v), (r = i = 0)),
            ((T && !~(l + "").indexOf("px")) ||
              (k && !~(f + "").indexOf("px"))) &&
              ((T = Rr(y, "x", l, "px")), (k = Rr(y, "y", f, "px"))),
            (g || _ || b || x) &&
              ((T = Mt(T + g - (g * n + _ * i) + b)),
              (k = Mt(k + _ - (g * r + _ * o) + x))),
            (u || c) &&
              ((a = y.getBBox()),
              (T = Mt(T + (u / 100) * a.width)),
              (k = Mt(k + (c / 100) * a.height))),
            (a =
              "matrix(" +
              n +
              "," +
              r +
              "," +
              i +
              "," +
              o +
              "," +
              T +
              "," +
              k +
              ")"),
            y.setAttribute("transform", a),
            w && (y.style[vr] = a);
        },
        ni = function (t, e, n, r, i) {
          var o,
            a,
            s = 360,
            u = X(i),
            c = parseFloat(i) * (u && ~i.indexOf("rad") ? $n : 1) - r,
            l = r + c + "deg";
          return (
            u &&
              ("short" === (o = i.split("_")[1]) &&
                (c %= s) != c % 180 &&
                (c += c < 0 ? s : -360),
              "cw" === o && c < 0
                ? (c = ((c + 36e9) % s) - ~~(c / s) * s)
                : "ccw" === o &&
                  c > 0 &&
                  (c = ((c - 36e9) % s) - ~~(c / s) * s)),
            (t._pt = a = new Sn(t._pt, e, n, r, c, or)),
            (a.e = l),
            (a.u = "deg"),
            t._props.push(n),
            a
          );
        },
        ri = function (t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        },
        ii = function (t, e, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l = ri({}, n._gsap),
            f = n.style;
          for (i in (l.svg
            ? ((o = n.getAttribute("transform")),
              n.setAttribute("transform", ""),
              (f[vr] = e),
              (r = Vr(n, 1)),
              Pr(n, vr),
              n.setAttribute("transform", o))
            : ((o = getComputedStyle(n)[vr]),
              (f[vr] = e),
              (r = Vr(n, 1)),
              (f[vr] = o)),
          Zn))
            (o = l[i]) !== (a = r[i]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
              ((s = pe(o) !== (c = pe(a)) ? Rr(n, i, o, c) : parseFloat(o)),
              (u = parseFloat(a)),
              (t._pt = new Sn(t._pt, r, i, s, u - s, ir)),
              (t._pt.u = c || 0),
              t._props.push(i));
          ri(r, l);
        };
      At("padding,margin,Width,Radius", function (t, e) {
        var n = "Top",
          r = "Right",
          i = "Bottom",
          o = "Left",
          a = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(
            function (n) {
              return e < 2 ? t + n : "border" + n + t;
            },
          );
        Ir[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
          var o, s;
          if (arguments.length < 4)
            return (
              (o = a.map(function (e) {
                return Dr(t, e, n);
              })),
              5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s
            );
          (o = (r + "").split(" ")),
            (s = {}),
            a.forEach(function (t, e) {
              return (s[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
            }),
            t.init(e, s, i);
        };
      });
      var oi,
        ai,
        si = {
          name: "css",
          register: Or,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, n, r, i) {
            var o,
              a,
              s,
              u,
              c,
              l,
              f,
              h,
              p,
              d,
              m,
              v,
              y,
              g,
              _,
              b,
              x,
              w,
              T,
              k,
              E = this._props,
              O = t.style,
              S = n.vars.startAt;
            for (f in (Xn || Or(),
            (this.styles = this.styles || xr(t)),
            (b = this.styles.props),
            (this.tween = n),
            e))
              if (
                "autoRound" !== f &&
                ((a = e[f]), !xt[f] || !sn(f, e, n, r, t, i))
              )
                if (
                  ((c = qn(a)),
                  (l = Ir[f]),
                  "function" === c && (c = qn((a = a.call(n, r, t, i)))),
                  "string" === c && ~a.indexOf("random(") && (a = ke(a)),
                  l)
                )
                  l(this, t, f, a, n) && (_ = 1);
                else if ("--" === f.substr(0, 2))
                  (o = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
                    (a += ""),
                    (Ne.lastIndex = 0),
                    Ne.test(o) || ((h = pe(o)), (p = pe(a))),
                    p ? h !== p && (o = Rr(t, f, o, p) + p) : h && (a += h),
                    this.add(O, "setProperty", o, a, r, i, 0, 0, f),
                    E.push(f),
                    b.push(f, 0, O[f]);
                else if ("undefined" !== c) {
                  if (
                    (S && f in S
                      ? ((o =
                          "function" == typeof S[f]
                            ? S[f].call(n, r, t, i)
                            : S[f]),
                        X(o) && ~o.indexOf("random(") && (o = ke(o)),
                        pe(o + "") ||
                          "auto" === o ||
                          (o += R.units[f] || pe(Dr(t, f)) || ""),
                        "=" === (o + "").charAt(1) && (o = Dr(t, f)))
                      : (o = Dr(t, f)),
                    (u = parseFloat(o)),
                    (d =
                      "string" === c &&
                      "=" === a.charAt(1) &&
                      a.substr(0, 2)) && (a = a.substr(2)),
                    (s = parseFloat(a)),
                    f in rr &&
                      ("autoAlpha" === f &&
                        (1 === u &&
                          "hidden" === Dr(t, "visibility") &&
                          s &&
                          (u = 0),
                        b.push("visibility", 0, O.visibility),
                        Lr(
                          this,
                          O,
                          "visibility",
                          u ? "inherit" : "hidden",
                          s ? "inherit" : "hidden",
                          !s,
                        )),
                      "scale" !== f &&
                        "transform" !== f &&
                        ~(f = rr[f]).indexOf(",") &&
                        (f = f.split(",")[0])),
                    (m = f in Zn))
                  )
                    if (
                      (this.styles.save(f),
                      v ||
                        (((y = t._gsap).renderTransform && !e.parseTransform) ||
                          Vr(t, e.parseTransform),
                        (g = !1 !== e.smoothOrigin && y.smooth),
                        ((v = this._pt =
                          new Sn(
                            this._pt,
                            O,
                            vr,
                            0,
                            1,
                            y.renderTransform,
                            y,
                            0,
                            -1,
                          )).dep = 1)),
                      "scale" === f)
                    )
                      (this._pt = new Sn(
                        this._pt,
                        y,
                        "scaleY",
                        y.scaleY,
                        (d ? Lt(y.scaleY, d + s) : s) - y.scaleY || 0,
                        ir,
                      )),
                        (this._pt.u = 0),
                        E.push("scaleY", f),
                        (f += "X");
                    else {
                      if ("transformOrigin" === f) {
                        b.push(yr, 0, O[yr]),
                          (w = void 0),
                          (T = void 0),
                          (k = void 0),
                          (T = (w = (x = a).split(" "))[0]),
                          (k = w[1] || "50%"),
                          ("top" !== T &&
                            "bottom" !== T &&
                            "left" !== k &&
                            "right" !== k) ||
                            ((x = T), (T = k), (k = x)),
                          (w[0] = zr[T] || T),
                          (w[1] = zr[k] || k),
                          (a = w.join(" ")),
                          y.svg
                            ? Hr(t, a, 0, g, 0, this)
                            : ((p = parseFloat(a.split(" ")[2]) || 0) !==
                                y.zOrigin &&
                                Lr(this, y, "zOrigin", y.zOrigin, p),
                              Lr(this, O, f, Wr(o), Wr(a)));
                        continue;
                      }
                      if ("svgOrigin" === f) {
                        Hr(t, a, 1, g, 0, this);
                        continue;
                      }
                      if (f in Yr) {
                        ni(this, y, f, u, d ? Lt(u, d + a) : a);
                        continue;
                      }
                      if ("smoothOrigin" === f) {
                        Lr(this, y, "smooth", y.smooth, a);
                        continue;
                      }
                      if ("force3D" === f) {
                        y[f] = a;
                        continue;
                      }
                      if ("transform" === f) {
                        ii(this, a, t);
                        continue;
                      }
                    }
                  else f in O || (f = Er(f) || f);
                  if (
                    m ||
                    ((s || 0 === s) && (u || 0 === u) && !nr.test(a) && f in O)
                  )
                    s || (s = 0),
                      (h = (o + "").substr((u + "").length)) !==
                        (p = pe(a) || (f in R.units ? R.units[f] : h)) &&
                        (u = Rr(t, f, o, p)),
                      (this._pt = new Sn(
                        this._pt,
                        m ? y : O,
                        f,
                        u,
                        (d ? Lt(u, d + s) : s) - u,
                        m ||
                        ("px" !== p && "zIndex" !== f) ||
                        !1 === e.autoRound
                          ? ir
                          : sr,
                      )),
                      (this._pt.u = p || 0),
                      h !== p &&
                        "%" !== p &&
                        ((this._pt.b = o), (this._pt.r = ar));
                  else if (f in O) Nr.call(this, t, f, o, d ? d + a : a);
                  else if (f in t)
                    this.add(t, f, o || t[f], d ? d + a : a, r, i);
                  else if ("parseTransform" !== f) {
                    ft(f, a);
                    continue;
                  }
                  m || (f in O ? b.push(f, 0, O[f]) : b.push(f, 1, o || t[f])),
                    E.push(f);
                }
            _ && On(this);
          },
          render: function (t, e) {
            if (e.tween._time || !Wn())
              for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
            else e.styles.revert();
          },
          get: Dr,
          aliases: rr,
          getSetter: function (t, e, n) {
            var r = rr[e];
            return (
              r && r.indexOf(",") < 0 && (e = r),
              e in Zn && e !== yr && (t._gsap.x || Dr(t, "x"))
                ? n && Vn === n
                  ? "scale" === e
                    ? pr
                    : hr
                  : (Vn = n || {}) && ("scale" === e ? dr : mr)
                : t.style && !W(t.style[e])
                  ? lr
                  : ~e.indexOf("-")
                    ? fr
                    : gn(t, e)
            );
          },
          core: { _removeProperty: Pr, _getMatrix: Xr },
        };
      (In.utils.checkPrefix = Er),
        (In.core.getStyleSaver = xr),
        (ai = At(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
            "," +
            (oi = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            Zn[t] = 1;
          },
        )),
        At(oi, function (t) {
          (R.units[t] = "deg"), (Yr[t] = 1);
        }),
        (rr[ai[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + oi),
        At(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            rr[e[1]] = ai[e[0]];
          },
        ),
        At(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            R.units[t] = "px";
          },
        ),
        In.registerPlugin(si);
      var ui = In.registerPlugin(si) || In;
      function ci(t) {
        return (
          (ci =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ci(t)
        );
      }
      function li() {
        li = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          s = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (t) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, "_invoke", { value: O(t, n, s) }), a;
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var h = "suspendedStart",
          p = "suspendedYield",
          d = "executing",
          m = "completed",
          v = {};
        function y() {}
        function g() {}
        function _() {}
        var b = {};
        c(b, a, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          w = x && x(x(P([])));
        w && w !== n && r.call(w, a) && (b = w);
        var T = (_.prototype = y.prototype = Object.create(b));
        function k(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          function n(i, o, a, s) {
            var u = f(t[i], t, o);
            if ("throw" !== u.type) {
              var c = u.arg,
                l = c.value;
              return l && "object" == ci(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    },
                  );
            }
            s(u.arg);
          }
          var o;
          i(this, "_invoke", {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function O(e, n, r) {
          var i = h;
          return function (o, a) {
            if (i === d) throw Error("Generator is already running");
            if (i === m) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var u = S(s, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === h) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = d;
              var c = f(e, n, r);
              if ("normal" === c.type) {
                if (((i = r.done ? m : p), c.arg === v)) continue;
                return { value: c.arg, done: r.done };
              }
              "throw" === c.type &&
                ((i = m), (r.method = "throw"), (r.arg = c.arg));
            }
          };
        }
        function S(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                S(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              v
            );
          var o = f(i, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), v
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function C(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function A(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(C, this),
            this.reset(!0);
        }
        function P(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(ci(e) + " is not iterable");
        }
        return (
          (g.prototype = _),
          i(T, "constructor", { value: _, configurable: !0 }),
          i(_, "constructor", { value: g, configurable: !0 }),
          (g.displayName = c(_, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, _)
                : ((t.__proto__ = _), c(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(T)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          k(E.prototype),
          c(E.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new E(l(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          k(T),
          c(T, u, "Generator"),
          c(T, a, function () {
            return this;
          }),
          c(T, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = P),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    c = r.call(a, "finallyLoc");
                  if (u && c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), A(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    A(n);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: P(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function fi(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            u = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(u) : Promise.resolve(u).then(r, i);
      }
      function hi(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              fi(o, r, i, a, s, "next", t);
            }
            function s(t) {
              fi(o, r, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      ui.core.Tween, n(210), n(213);
      var pi = "https://notes-api.dicoding.dev/v2",
        di = (function () {
          var t = hi(
            li().mark(function t() {
              var e, n;
              return li().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          fetch("".concat(pi, "/notes"))
                        );
                      case 3:
                        if ((e = t.sent).ok) {
                          t.next = 6;
                          break;
                        }
                        throw new Error("Failed to fetch unarchived notes");
                      case 6:
                        return (t.next = 8), e.json();
                      case 8:
                        return (n = t.sent), t.abrupt("return", n);
                      case 12:
                        throw (
                          ((t.prev = 12),
                          (t.t0 = t.catch(0)),
                          console.error("Error:", t.t0),
                          t.t0)
                        );
                      case 16:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 12]],
              );
            }),
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        mi = (function () {
          var t = hi(
            li().mark(function t() {
              var e, n;
              return li().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          fetch("".concat(pi, "/notes/archived"))
                        );
                      case 3:
                        if ((e = t.sent).ok) {
                          t.next = 6;
                          break;
                        }
                        throw new Error("Failed to fetch archived notes");
                      case 6:
                        return (t.next = 8), e.json();
                      case 8:
                        return (n = t.sent), t.abrupt("return", n);
                      case 12:
                        throw (
                          ((t.prev = 12),
                          (t.t0 = t.catch(0)),
                          console.error("Error:", t.t0),
                          t.t0)
                        );
                      case 16:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 12]],
              );
            }),
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        vi = (function () {
          var t = hi(
            li().mark(function t(e) {
              var n, r, i, o;
              return li().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (n = {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(e),
                          }),
                          (t.next = 4),
                          fetch("".concat(pi, "/notes"), n)
                        );
                      case 4:
                        if ((r = t.sent).ok) {
                          t.next = 10;
                          break;
                        }
                        return (t.next = 8), r.json();
                      case 8:
                        throw (
                          ((i = t.sent),
                          new Error(
                            "Failed to add note: ".concat(
                              i.message || "Unknown error",
                            ),
                          ))
                        );
                      case 10:
                        return (t.next = 12), r.json();
                      case 12:
                        return (o = t.sent), t.abrupt("return", o);
                      case 16:
                        throw (
                          ((t.prev = 16),
                          (t.t0 = t.catch(0)),
                          console.error("Error:", t.t0),
                          t.t0)
                        );
                      case 20:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 16]],
              );
            }),
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        yi = (function () {
          var t = hi(
            li().mark(function t(e) {
              var n, r;
              return li().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          fetch("".concat(pi, "/notes/").concat(e))
                        );
                      case 3:
                        if ((n = t.sent).ok) {
                          t.next = 6;
                          break;
                        }
                        throw new Error("Failed to fetch single note");
                      case 6:
                        return (t.next = 8), n.json();
                      case 8:
                        return (r = t.sent), t.abrupt("return", r);
                      case 12:
                        throw (
                          ((t.prev = 12),
                          (t.t0 = t.catch(0)),
                          console.error("Error fetching single note:", t.t0),
                          new Error("Failed to fetch single note"))
                        );
                      case 16:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 12]],
              );
            }),
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        gi = (function () {
          var t = hi(
            li().mark(function t(e) {
              var n, r;
              return li().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          fetch("".concat(pi, "/notes/").concat(e), {
                            method: "DELETE",
                          })
                        );
                      case 3:
                        return (n = t.sent), (t.next = 6), n.json();
                      case 6:
                        return (r = t.sent), t.abrupt("return", r);
                      case 10:
                        throw (
                          ((t.prev = 10),
                          (t.t0 = t.catch(0)),
                          console.error("Error:", t.t0),
                          t.t0)
                        );
                      case 14:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 10]],
              );
            }),
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        _i = (function () {
          var t = hi(
            li().mark(function t(e) {
              var n, r, i;
              return li().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (n = {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                          }),
                          (t.next = 4),
                          fetch(
                            "".concat(pi, "/notes/").concat(e, "/archive"),
                            n,
                          )
                        );
                      case 4:
                        return (r = t.sent), (t.next = 7), r.json();
                      case 7:
                        return (i = t.sent), t.abrupt("return", i);
                      case 11:
                        throw (
                          ((t.prev = 11),
                          (t.t0 = t.catch(0)),
                          console.error("Error:", t.t0),
                          t.t0)
                        );
                      case 15:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 11]],
              );
            }),
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        bi = (function () {
          var t = hi(
            li().mark(function t(e) {
              var n, r, i;
              return li().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (n = {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                          }),
                          (t.next = 4),
                          fetch(
                            "".concat(pi, "/notes/").concat(e, "/unarchive"),
                            n,
                          )
                        );
                      case 4:
                        return (r = t.sent), (t.next = 7), r.json();
                      case 7:
                        return (i = t.sent), t.abrupt("return", i);
                      case 11:
                        throw (
                          ((t.prev = 11),
                          (t.t0 = t.catch(0)),
                          console.error("Error:", t.t0),
                          t.t0)
                        );
                      case 15:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 11]],
              );
            }),
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      function xi(t) {
        return (
          (xi =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          xi(t)
        );
      }
      function wi() {
        wi = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          s = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (t) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function l(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, "_invoke", { value: O(t, n, s) }), a;
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = l;
        var h = "suspendedStart",
          p = "suspendedYield",
          d = "executing",
          m = "completed",
          v = {};
        function y() {}
        function g() {}
        function _() {}
        var b = {};
        c(b, a, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          w = x && x(x(P([])));
        w && w !== n && r.call(w, a) && (b = w);
        var T = (_.prototype = y.prototype = Object.create(b));
        function k(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          function n(i, o, a, s) {
            var u = f(t[i], t, o);
            if ("throw" !== u.type) {
              var c = u.arg,
                l = c.value;
              return l && "object" == xi(l) && r.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, a, s);
                    },
                    function (t) {
                      n("throw", t, a, s);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return n("throw", t, a, s);
                    },
                  );
            }
            s(u.arg);
          }
          var o;
          i(this, "_invoke", {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function O(e, n, r) {
          var i = h;
          return function (o, a) {
            if (i === d) throw Error("Generator is already running");
            if (i === m) {
              if ("throw" === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var u = S(s, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (i === h) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              i = d;
              var c = f(e, n, r);
              if ("normal" === c.type) {
                if (((i = r.done ? m : p), c.arg === v)) continue;
                return { value: c.arg, done: r.done };
              }
              "throw" === c.type &&
                ((i = m), (r.method = "throw"), (r.arg = c.arg));
            }
          };
        }
        function S(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                S(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              v
            );
          var o = f(i, e.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), v
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function C(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function A(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(C, this),
            this.reset(!0);
        }
        function P(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(xi(e) + " is not iterable");
        }
        return (
          (g.prototype = _),
          i(T, "constructor", { value: _, configurable: !0 }),
          i(_, "constructor", { value: g, configurable: !0 }),
          (g.displayName = c(_, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, _)
                : ((t.__proto__ = _), c(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(T)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          k(E.prototype),
          c(E.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new E(l(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          k(T),
          c(T, u, "Generator"),
          c(T, a, function () {
            return this;
          }),
          c(T, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = P),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = "next"), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    c = r.call(a, "finallyLoc");
                  if (u && c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), A(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    A(n);
                  }
                  return i;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: P(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function Ti(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            u = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(u) : Promise.resolve(u).then(r, i);
      }
      function ki(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              Ti(o, r, i, a, s, "next", t);
            }
            function s(t) {
              Ti(o, r, i, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function Ei(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Oi(r.key), r);
        }
      }
      function Oi(t) {
        var e = (function (t, e) {
          if ("object" != xi(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != xi(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == xi(e) ? e : e + "";
      }
      function Si(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (Si = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (Ci()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var i = new (t.bind.apply(t, r))();
                return n && Ai(i, n.prototype), i;
              })(t, arguments, Mi(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              Ai(n, t)
            );
          }),
          Si(t)
        );
      }
      function Ci() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Ci = function () {
          return !!t;
        })();
      }
      function Ai(t, e) {
        return (
          (Ai = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Ai(t, e)
        );
      }
      function Mi(t) {
        return (
          (Mi = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Mi(t)
        );
      }
      var Pi = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var n,
            r,
            i,
            o = ((n = this),
            (r = e),
            (r = Mi(r)),
            (t = (function (t, e) {
              if (e && ("object" === xi(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(
              n,
              Ci()
                ? Reflect.construct(r, i || [], Mi(n).constructor)
                : r.apply(n, i),
            ))).attachShadow({ mode: "open" }),
            a = document.createElement("style");
          a.textContent =
            "\n            * {\n                font-family: 'Poppins';\n            }\n\n            .notes-collection {\n                background-color: #F1EAFF;\n                display: grid;\n                grid-template-columns: 1fr 1fr 1fr 1fr;\n                padding: 20px; \n            }\n\n            .note {\n                margin-left: 10px;\n                margin-bottom: 20px;\n                border: 1px solid #392467;\n                padding: 10px;\n                border-radius: 7px;\n                overflow: hidden; \n                max-height: 150px; \n                display: flex; /* Menggunakan flexbox */\n                flex-direction: column; /* Menentukan arah kolom */\n            }\n            .note h3 {\n                margin: 0; \n                margin-bottom: 5px; \n            }\n            \n            .note p {\n                margin-bottom: 10px;\n                overflow: hidden;\n                display: -webkit-box; /* Menentukan tata letak teks menggunakan box model */\n                -webkit-box-orient: vertical; /* Mengatur orientasi box model ke vertikal */\n                -webkit-line-clamp: 3; /* Mengatur jumlah maksimum baris yang akan ditampilkan */\n                max-height: 54px;\n            }\n\n            .note-buttons {\n                display: flex;\n                margin-top: auto;\n                justify-content: end;\n            }\n\n            .archive-btn {\n                margin-right: 3px;\n            }\n\n            .edit-btn, .remove-btn, .archive-btn {\n                border-radius: 50%;\n                border: none;\n                padding: 1px;\n            }\n\n            box-icon {\n                padding: 3px;\n                justify-content: center;\n                 \n            }\n\n            #showAllNotes, #showArchivedNotes {\n              padding-inline: 10px;\n              border: 1px solid gray;\n            }\n\n            .filter-buttons {\n              display: flex;\n              justify-content: center;\n              background-color: #F1EAFF;\n              padding: 10px;\n            }\n\n            /* CSS untuk dialog konfirmasi */\n            .custom-dialog {\n                position: fixed;\n                top: 50%; \n                left: 50%; \n                transform: translate(-50%, -50%);\n                background-color: #D20062;\n                border-radius: 15px;\n                color: white;\n                text-align: center;\n                padding: 20px;\n                z-index: 1000; \n                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); \n                width: 250px; \n            }\n\n            .custom-dialog p {\n                margin-bottom: 10px;\n            }\n\n            .custom-dialog button {\n                padding: 8px 16px;\n                margin-right: 10px;\n                border: none;\n                border-radius: 5px;\n                cursor: pointer;\n                font-weight: 700;\n            }\n\n            .custom-dialog button:first-child {\n                color: white;\n            }\n\n            .custom-dialog button:last-child {\n                background-color: #ddd; \n            }\n\n            @media screen and (max-width: 768px) {\n                .notes-collection {\n                    grid-template-columns: 1fr; /* Mengubah menjadi satu kolom pada layar yang lebih kecil */\n                    align-items: center;\n                }\n            \n                .note {\n                    margin-left: 10px; /* Menghapus margin kiri pada layar yang lebih kecil */\n                    margin-bottom: 10px; /* Mengurangi margin bawah pada layar yang lebih kecil */\n                    width: 85%;\n                    \n                }\n            \n                .custom-dialog {\n                    width: 70%; /* Lebar dialog diatur ulang untuk layar yang lebih kecil */ \n                    position: fixed;\n                    top: 50%; \n                    left: 50%; \n                    transform: translate(-50%, -50%);\n                }\n            }\n        ";
          var s = document.createElement("div");
          s.classList.add("filter-buttons");
          var u = document.createElement("button");
          (u.textContent = "Semua Catatan"), (u.id = "showAllNotes");
          var c = document.createElement("button");
          (c.textContent = "Catatan Diarsipkan"),
            (c.id = "showArchivedNotes"),
            s.appendChild(u),
            s.appendChild(c),
            u.addEventListener(
              "click",
              ki(
                wi().mark(function e() {
                  return wi().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t.displayNotes();
                        case 2:
                          (u.style.backgroundColor = "#5D3587"),
                            (u.style.color = "#FFFFFF"),
                            (c.style.backgroundColor = "#F1EAFF"),
                            (c.style.color = "#000000");
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            c.addEventListener(
              "click",
              ki(
                wi().mark(function e() {
                  return wi().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t.displayArchivedNotes();
                        case 2:
                          (c.style.backgroundColor = "#5D3587"),
                            (c.style.color = "#FFFFFF"),
                            (u.style.backgroundColor = "#F1EAFF"),
                            (u.style.color = "#000000");
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            ),
            o.appendChild(s),
            o.appendChild(a);
          var l = document.createElement("div");
          return (
            l.classList.add("notes-collection"), o.appendChild(l), t.init(), t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Ai(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "clearNotes",
              value: function () {
                this.shadowRoot.querySelector(".notes-collection").innerHTML =
                  "";
              },
            },
            {
              key: "init",
              value:
                ((l = ki(
                  wi().mark(function t() {
                    var e;
                    return wi().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), di();
                            case 3:
                              (e = t.sent),
                                Array.isArray(e) ||
                                  (e = e.hasOwnProperty("data")
                                    ? e.data
                                    : Array.from(e)),
                                (this.shadowRoot.querySelector(
                                  ".notes-collection",
                                ).innerHTML = ""),
                                this.renderAllNotes(e),
                                (t.next = 13);
                              break;
                            case 10:
                              (t.prev = 10),
                                (t.t0 = t.catch(0)),
                                console.error("Error:", t.t0);
                            case 13:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[0, 10]],
                    );
                  }),
                )),
                function () {
                  return l.apply(this, arguments);
                }),
            },
            {
              key: "renderAllNotes",
              value: function (t) {
                var e = this,
                  n = this.shadowRoot.querySelector(".notes-collection");
                (n.innerHTML = ""),
                  t.forEach(function (t) {
                    var r = e.renderNote(t);
                    if (r) {
                      n.appendChild(r),
                        r.addEventListener("click", function (n) {
                          n.target.closest(".note-buttons") ||
                            e.showNotePopup(t.id);
                        });
                      var i = r.querySelector(".archive-btn");
                      i &&
                        (i.innerHTML =
                          "\n            <box-icon type='solid' name='".concat(
                            t.archived ? "archive-out" : "archive-in",
                            "' color='#5D3587'></box-icon>\n          ",
                          ));
                    }
                  });
              },
            },
            {
              key: "renderNote",
              value: function (t) {
                var e = this;
                if (!(t && t.title && t.body && t.id))
                  return console.error("Invalid note data:", t), null;
                var n = document.createElement("div");
                n.classList.add("note"),
                  (n.id = t.id),
                  (n.innerHTML = "\n        <h3>"
                    .concat(t.title, "</h3>\n        <p>")
                    .concat(
                      t.body,
                      "</p>\n        <div class=\"note-buttons\">\n            <button class=\"archive-btn\">\n                <box-icon type='solid' name='archive-in' color='#5D3587'></box-icon>\n            </button>\n            <button class=\"remove-btn\">\n                <box-icon type='solid' name='trash-alt' color='#5D3587'></box-icon>\n            </button>\n        </div>\n    ",
                    ));
                var r = ["#FFA1F5", "#AD88C6", "#D1FFF3", "#ACBCFF", "#FFE7C1"],
                  i = r[Math.floor(Math.random() * r.length)];
                n.style.backgroundColor = i;
                var o = n.querySelector(".remove-btn"),
                  a = n.querySelector(".archive-btn");
                return (
                  o.addEventListener(
                    "click",
                    ki(
                      wi().mark(function r() {
                        return wi().wrap(function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                e.showDeleteConfirmationAndRemove(
                                  t.title,
                                  n,
                                  t,
                                );
                              case 1:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                      }),
                    ),
                  ),
                  a.addEventListener(
                    "click",
                    ki(
                      wi().mark(function n() {
                        return wi().wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  if (((n.prev = 0), !t.archived)) {
                                    n.next = 6;
                                    break;
                                  }
                                  return (n.next = 4), e.unarchiveNoteAPI(t.id);
                                case 4:
                                  n.next = 8;
                                  break;
                                case 6:
                                  return (n.next = 8), e.archiveNoteAPI(t.id);
                                case 8:
                                  n.next = 14;
                                  break;
                                case 10:
                                  (n.prev = 10),
                                    (n.t0 = n.catch(0)),
                                    console.error(
                                      "Error toggling archive status:",
                                      n.t0,
                                    ),
                                    alert(
                                      "Failed to toggle archive status. Please try again.",
                                    );
                                case 14:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          null,
                          [[0, 10]],
                        );
                      }),
                    ),
                  ),
                  n
                );
              },
            },
            {
              key: "displayNotes",
              value:
                ((c = ki(
                  wi().mark(function t() {
                    var e;
                    return wi().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                document
                                  .querySelector("loading-indicator")
                                  .showLoading(),
                                (t.next = 5),
                                di()
                              );
                            case 5:
                              (e = t.sent),
                                Array.isArray(e)
                                  ? this.renderAllNotes(e)
                                  : e.hasOwnProperty("data") &&
                                      Array.isArray(e.data)
                                    ? this.renderAllNotes(e.data)
                                    : console.error(
                                        "Invalid response format:",
                                        e,
                                      ),
                                (t.next = 12);
                              break;
                            case 9:
                              (t.prev = 9),
                                (t.t0 = t.catch(0)),
                                console.error("Error displaying notes:", t.t0);
                            case 12:
                              return (
                                (t.prev = 12),
                                document
                                  .querySelector("loading-indicator")
                                  .hideLoading(),
                                t.finish(12)
                              );
                            case 16:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[0, 9, 12, 16]],
                    );
                  }),
                )),
                function () {
                  return c.apply(this, arguments);
                }),
            },
            {
              key: "displayArchivedNotes",
              value:
                ((u = ki(
                  wi().mark(function t() {
                    var e;
                    return wi().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                document
                                  .querySelector("loading-indicator")
                                  .showLoading(),
                                (t.next = 5),
                                mi()
                              );
                            case 5:
                              (e = t.sent),
                                Array.isArray(e) && e.length > 0
                                  ? this.renderAllNotes(e)
                                  : e.hasOwnProperty("data") &&
                                      Array.isArray(e.data) &&
                                      e.data.length > 0
                                    ? this.renderAllNotes(e.data)
                                    : this.renderEmptyNotesMessage(),
                                (t.next = 12);
                              break;
                            case 9:
                              (t.prev = 9),
                                (t.t0 = t.catch(0)),
                                console.error(
                                  "Error displaying archived notes:",
                                  t.t0,
                                );
                            case 12:
                              return (
                                (t.prev = 12),
                                document
                                  .querySelector("loading-indicator")
                                  .hideLoading(),
                                t.finish(12)
                              );
                            case 16:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[0, 9, 12, 16]],
                    );
                  }),
                )),
                function () {
                  return u.apply(this, arguments);
                }),
            },
            {
              key: "archiveNoteAPI",
              value:
                ((s = ki(
                  wi().mark(function t(e) {
                    return wi().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), _i(e);
                            case 3:
                              return (t.next = 5), this.displayNotes();
                            case 5:
                              t.next = 10;
                              break;
                            case 7:
                              (t.prev = 7),
                                (t.t0 = t.catch(0)),
                                console.error("Error archiving note:", t.t0);
                            case 10:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[0, 7]],
                    );
                  }),
                )),
                function (t) {
                  return s.apply(this, arguments);
                }),
            },
            {
              key: "unarchiveNoteAPI",
              value:
                ((a = ki(
                  wi().mark(function t(e) {
                    return wi().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), bi(e);
                            case 3:
                              return (t.next = 5), this.displayNotes();
                            case 5:
                              t.next = 10;
                              break;
                            case 7:
                              (t.prev = 7),
                                (t.t0 = t.catch(0)),
                                console.error("Error unarchiving note:", t.t0);
                            case 10:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[0, 7]],
                    );
                  }),
                )),
                function (t) {
                  return a.apply(this, arguments);
                }),
            },
            {
              key: "renderEmptyNotesMessage",
              value: function () {
                var t = this.shadowRoot.querySelector(".notes-collection");
                t.innerHTML = "";
                var e = document.createElement("div");
                (e.textContent = "Tidak ada catatan yang diarsipkan"),
                  (e.style.textAlign = "center"),
                  (e.style.fontSize = "15px"),
                  t.appendChild(e);
              },
            },
            {
              key: "addNote",
              value:
                ((o = ki(
                  wi().mark(function t(e, n) {
                    var r, i, o, a, s;
                    return wi().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                vi({ title: e, body: n })
                              );
                            case 3:
                              (r = t.sent).hasOwnProperty("data") &&
                              null !== r.data
                                ? ((i = r.data),
                                  (o = [
                                    "#FFA1F5",
                                    "#AD88C6",
                                    "#D1FFF3",
                                    "#ACBCFF",
                                    "#FFE7C1",
                                  ]),
                                  (i.backgroundColor =
                                    o[Math.floor(Math.random() * o.length)]),
                                  (a = this.renderNote(i)),
                                  (s =
                                    this.shadowRoot.querySelector(
                                      ".notes-collection",
                                    )),
                                  ui.from(a, {
                                    opacity: 0,
                                    duration: 2,
                                    ease: "power2.out",
                                  }),
                                  s.appendChild(a))
                                : (console.error(
                                    "Invalid note data in response:",
                                    r,
                                  ),
                                  alert(
                                    "Gagal menambahkan catatan. Respons tidak valid dari server.",
                                  )),
                                (t.next = 11);
                              break;
                            case 7:
                              (t.prev = 7),
                                (t.t0 = t.catch(0)),
                                console.error("Error adding note:", t.t0),
                                alert(
                                  "Gagal menambahkan catatan. Silakan coba lagi.",
                                );
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[0, 7]],
                    );
                  }),
                )),
                function (t, e) {
                  return o.apply(this, arguments);
                }),
            },
            {
              key: "showNotePopup",
              value:
                ((i = ki(
                  wi().mark(function t(e) {
                    var n, r;
                    return wi().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), yi(e);
                            case 3:
                              (n = t.sent).hasOwnProperty("data") &&
                              null !== n.data
                                ? ((r = n.data),
                                  alert(
                                    "ID: "
                                      .concat(r.id, "\nTitle: ")
                                      .concat(r.title, "\nBody: ")
                                      .concat(r.body, "\nCreated At: ")
                                      .concat(r.createdAt, "\nArchived: ")
                                      .concat(r.archived),
                                  ))
                                : (console.error(
                                    "Invalid note data in response:",
                                    n,
                                  ),
                                  alert(
                                    "Gagal mendapatkan detail catatan. Respons tidak valid dari server.",
                                  )),
                                (t.next = 11);
                              break;
                            case 7:
                              (t.prev = 7),
                                (t.t0 = t.catch(0)),
                                console.error(
                                  "Error getting note details:",
                                  t.t0,
                                ),
                                alert(
                                  "Gagal mendapatkan detail catatan. Silakan coba lagi.",
                                );
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 7]],
                    );
                  }),
                )),
                function (t) {
                  return i.apply(this, arguments);
                }),
            },
            {
              key: "showDeleteConfirmationAndRemove",
              value: function (t, e, n) {
                var r = this,
                  i = document.createElement("div");
                i.classList.add("custom-dialog");
                var o = document.createElement("p");
                o.textContent =
                  "Apakah Anda yakin ingin menghapus catatan ini?";
                var a = document.createElement("button");
                (a.textContent = "Hapus"),
                  a.addEventListener(
                    "click",
                    ki(
                      wi().mark(function t() {
                        return wi().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                try {
                                  ui.to(e, {
                                    opacity: 0,
                                    duration: 2,
                                    ease: "power2.out",
                                    onComplete: (function () {
                                      var t = ki(
                                        wi().mark(function t() {
                                          return wi().wrap(function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  return (t.next = 2), gi(n.id);
                                                case 2:
                                                  e.remove();
                                                case 3:
                                                case "end":
                                                  return t.stop();
                                              }
                                          }, t);
                                        }),
                                      );
                                      return function () {
                                        return t.apply(this, arguments);
                                      };
                                    })(),
                                  }),
                                    r.shadowRoot.removeChild(i);
                                } catch (t) {
                                  console.error("Error deleting note:", t),
                                    alert(
                                      "Failed to delete the note. Please try again.",
                                    );
                                }
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      }),
                    ),
                  );
                var s = document.createElement("button");
                (s.textContent = "Batal"),
                  s.addEventListener("click", function () {
                    r.shadowRoot.removeChild(i);
                  }),
                  i.appendChild(o),
                  i.appendChild(a),
                  i.appendChild(s),
                  this.shadowRoot.appendChild(i);
              },
            },
          ]),
          r && Ei(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r, i, o, a, s, u, c, l;
      })(Si(HTMLElement));
      function Li(t) {
        return (
          (Li =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Li(t)
        );
      }
      function Fi(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, ji(r.key), r);
        }
      }
      function ji(t) {
        var e = (function (t, e) {
          if ("object" != Li(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, "string");
            if ("object" != Li(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == Li(e) ? e : e + "";
      }
      function Ri(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (Ri = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (Di()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var i = new (t.bind.apply(t, r))();
                return n && Ni(i, n.prototype), i;
              })(t, arguments, zi(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              Ni(n, t)
            );
          }),
          Ri(t)
        );
      }
      function Di() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Di = function () {
          return !!t;
        })();
      }
      function Ni(t, e) {
        return (
          (Ni = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Ni(t, e)
        );
      }
      function zi(t) {
        return (
          (zi = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          zi(t)
        );
      }
      customElements.define("notes-collection", Pi);
      var Bi = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var n,
            r,
            i,
            o = ((n = this),
            (r = e),
            (r = zi(r)),
            (t = (function (t, e) {
              if (e && ("object" === Li(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(t);
            })(
              n,
              Di()
                ? Reflect.construct(r, i || [], zi(n).constructor)
                : r.apply(n, i),
            ))).attachShadow({ mode: "open" }),
            a = document.createElement("style");
          a.textContent =
            "\n        .loading-container {\n          display: none; /* Awalnya sembunyi */\n          position: fixed;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          background-color: rgba(255, 255, 255, 0.8);\n          padding: 20px;\n          border-radius: 10px;\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n          z-index: 1000;\n        }\n  \n        .loading-text {\n          font-size: 18px;\n          text-align: center;\n        }\n  \n        .loader {\n          border: 8px solid #f3f3f3;\n          border-top: 8px solid #3498db;\n          border-radius: 50%;\n          width: 50px;\n          height: 50px;\n          animation: spin 1s linear infinite;\n          margin: 0 auto;\n        }\n  \n        @keyframes spin {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n      ";
          var s = document.createElement("div");
          s.classList.add("loading-container");
          var u = document.createElement("div");
          (u.textContent = "Loading..."), u.classList.add("loading-text");
          var c = document.createElement("div");
          return (
            c.classList.add("loader"),
            s.appendChild(u),
            s.appendChild(c),
            o.appendChild(a),
            o.appendChild(s),
            (t.loading = !1),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Ni(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "showLoading",
              value: function () {
                (this.shadowRoot.querySelector(
                  ".loading-container",
                ).style.display = "block"),
                  (this.loading = !0);
              },
            },
            {
              key: "hideLoading",
              value: function () {
                (this.shadowRoot.querySelector(
                  ".loading-container",
                ).style.display = "none"),
                  (this.loading = !1);
              },
            },
          ]) && Fi(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(Ri(HTMLElement));
      customElements.define("loading-indicator", Bi), ui.registerPlugin(si);
    })();
})();
