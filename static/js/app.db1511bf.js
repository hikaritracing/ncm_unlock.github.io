(function (e) {
  function t(t) {
    for (
      var n, o, c = t[0], s = t[1], u = t[2], f = 0, d = [];
      f < c.length;
      f++
    )
      (o = c[f]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && d.push(r[o][0]),
        (r[o] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    l && l(t);
    while (d.length) d.shift()();
    return i.push.apply(i, u || []), a();
  }

  function a() {
    for (var e, t = 0; t < i.length; t++) {
      for (var a = i[t], n = !0, c = 1; c < a.length; c++) {
        var s = a[c];
        0 !== r[s] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var n = {},
    r = {
      app: 0,
    },
    i = [];

  function o(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = {
      i: t,
      l: !1,
      exports: {},
    });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = n),
    (o.d = function (e, t, a) {
      o.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: a,
        });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          o.d(
            a,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var u = 0; u < c.length; u++) t(c[u]);
  var l = s;
  i.push([0, "chunk-vendors"]), a();
})({
  0: function (e, t, a) {
    e.exports = a("56d7");
  },
  "034f": function (e, t, a) {
    "use strict";
    var n = a("85ec"),
      r = a.n(n);
    r.a;
  },
  1: function (e, t) {},
  1020: function (e, t, a) {
    "use strict";
    a.r(t),
      a.d(t, "Decrypt", function () {
        return u;
      });
    a("4160"),
      a("a15b"),
      a("d81d"),
      a("fb6a"),
      a("ace4"),
      a("b420"),
      a("0d03"),
      a("d3b7"),
      a("ac1f"),
      a("25f0"),
      a("3ca3"),
      a("5319"),
      a("5cc6"),
      a("9a8c"),
      a("a975"),
      a("735e"),
      a("c1ac"),
      a("d139"),
      a("3a7b"),
      a("d5d6"),
      a("82f8"),
      a("e91f"),
      a("60bd"),
      a("5f96"),
      a("3280"),
      a("3fcc"),
      a("ca91"),
      a("25a1"),
      a("cd26"),
      a("3c5d"),
      a("2954"),
      a("649e"),
      a("219c"),
      a("170b"),
      a("b39a"),
      a("72f7"),
      a("159b"),
      a("ddb0"),
      a("2b3d");
    var n = a("3835"),
      r = (a("96cf"), a("3452")),
      i = a("7907"),
      o = r.enc.Hex.parse("687a4852416d736f356b496e62617857"),
      c = r.enc.Hex.parse("2331346C6A6B5F215C5D2630553C2728"),
      s = {
        mp3: "audio/mpeg",
        flac: "audio/flac",
      };

    function u(e) {
      var t, a, u, l, f, d, m, p, b, h, g, v, w, y, x, k, _, R, U, O, A, L;
      return regeneratorRuntime.async(
        function (D) {
          while (1)
            switch ((D.prev = D.next)) {
              case 0:
                return (
                  (D.next = 2),
                  regeneratorRuntime.awrap(
                    new Promise(function (t) {
                      var a = new FileReader();
                      (a.onload = function (e) {
                        t(e.target.result);
                      }),
                        a.readAsArrayBuffer(e);
                    })
                  )
                );
              case 2:
                if (
                  ((t = D.sent),
                  (a = new DataView(t)),
                  1313166403 === a.getUint32(0, !0) &&
                    1296122950 === a.getUint32(4, !0))
                ) {
                  D.next = 6;
                  break;
                }
                return D.abrupt("return", {
                  status: !1,
                  message: "此ncm文件已损坏",
                });
              case 6:
                for (
                  u = 10,
                    l = (function () {
                      var e = a.getUint32(u, !0);
                      u += 4;
                      var n = new Uint8Array(t, u, e).map(function (e) {
                        return 100 ^ e;
                      });
                      u += e;
                      for (
                        var i = r.AES.decrypt(
                            {
                              ciphertext: r.lib.WordArray.create(n),
                            },
                            o,
                            {
                              mode: r.mode.ECB,
                              padding: r.pad.Pkcs7,
                            }
                          ),
                          c = new Uint8Array(i.sigBytes),
                          s = i.words,
                          l = i.sigBytes,
                          f = 0;
                        f < l;
                        f++
                      )
                        c[f] = (s[f >>> 2] >>> (24 - (f % 4) * 8)) & 255;
                      return c.slice(17);
                    })(),
                    f = (function () {
                      for (
                        var e = new Uint8Array(Array(256).keys()),
                          t = l.length,
                          a = 0,
                          n = 0;
                        n < 256;
                        n++
                      ) {
                        a = (e[n] + a + l[n % t]) & 255;
                        var r = [e[a], e[n]];
                        (e[n] = r[0]), (e[a] = r[1]);
                      }
                      return e.map(function (e, t, a) {
                        t = (t + 1) & 255;
                        var n = a[t],
                          r = a[(t + n) & 255];
                        return a[(n + r) & 255];
                      });
                    })(),
                    d = (function () {
                      var e = a.getUint32(u, !0);
                      if (((u += 4), 0 === e)) return {};
                      var n = new Uint8Array(t, u, e).map(function (e) {
                        return 99 ^ e;
                      });
                      u += e;
                      var i = r.AES.decrypt(
                          {
                            ciphertext: r.enc.Base64.parse(
                              r.lib.WordArray.create(n.slice(22)).toString(
                                r.enc.Utf8
                              )
                            ),
                          },
                          c,
                          {
                            mode: r.mode.ECB,
                            padding: r.pad.Pkcs7,
                          }
                        ),
                        o = JSON.parse(i.toString(r.enc.Utf8).slice(6));
                      return (
                        (o.albumPic = o.albumPic.replace("http:", "https:")), o
                      );
                    })(),
                    u += a.getUint32(u + 5, !0) + 13,
                    m = new Uint8Array(t, u),
                    p = m.length,
                    b = 0;
                  b < p;
                  ++b
                )
                  m[b] ^= f[255 & b];
                if (
                  (void 0 === d.format &&
                    ((h = m),
                    (g = Object(n["a"])(h, 4)),
                    (v = g[0]),
                    (w = g[1]),
                    (y = g[2]),
                    (x = g[3]),
                    (d.format =
                      102 === v && 76 === w && 97 === y && 67 === x
                        ? "flac"
                        : "mp3")),
                  (k = s[d.format]),
                  (_ = []),
                  d.artist.forEach(function (e) {
                    _.push(e[0]);
                  }),
                  "mp3" !== d.format)
                ) {
                  D.next = 38;
                  break;
                }
                if (
                  ((R = new i(m)),
                  R.setFrame("TPE1", _)
                    .setFrame("TIT2", d.musicName)
                    .setFrame("TALB", d.album),
                  "" === d.albumPic)
                ) {
                  D.next = 36;
                  break;
                }
                return (
                  (D.prev = 22),
                  (D.t0 = regeneratorRuntime),
                  (D.next = 26),
                  regeneratorRuntime.awrap(fetch(d.albumPic))
                );
              case 26:
                return (
                  (D.t1 = D.sent.arrayBuffer()),
                  (D.next = 29),
                  D.t0.awrap.call(D.t0, D.t1)
                );
              case 29:
                (U = D.sent),
                  R.setFrame("APIC", {
                    type: 3,
                    data: U,
                    description: "Cover",
                  }),
                  (D.next = 36);
                break;
              case 33:
                (D.prev = 33),
                  (D.t2 = D["catch"](22)),
                  console.log("Fail to write cover image!");
              case 36:
                R.addTag(), (m = R.arrayBuffer);
              case 38:
                return (
                  (O = new Blob([m], {
                    type: k,
                  })),
                  (A = URL.createObjectURL(O)),
                  (L = _.join(" & ") + " - " + d.musicName + "." + d.format),
                  D.abrupt("return", {
                    status: !0,
                    filename: L,
                    title: d.musicName,
                    artist: _.join(" & "),
                    album: d.album,
                    picture: d.albumPic,
                    file: A,
                    mime: k,
                  })
                );
              case 42:
              case "end":
                return D.stop();
            }
        },
        null,
        null,
        [[22, 33]]
      );
    }
  },
  2: function (e, t) {},
  "56d7": function (e, t, a) {
    "use strict";
    a.r(t);
    a("e623"), a("e379"), a("5dc8"), a("37e1");
    var n = a("2b0e"),
      r = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "div",
          {
            attrs: {
              id: "app",
            },
          },
          [
            a(
              "el-container",
              [
                a(
                  "el-main",
                  [
                    a(
                      "el-upload",
                      {
                        attrs: {
                          "auto-upload": !1,
                          "on-change": e.handleFile,
                          "show-file-list": !1,
                          action: "",
                          drag: "",
                          multiple: "",
                        },
                      },
                      [
                        a("i", {
                          staticClass: "el-icon-upload",
                        }),
                        a(
                          "div",
                          {
                            staticClass: "el-upload__text",
                          },
                          [
                            e._v("将文件拖到此处，或"),
                            a("em", [e._v("点击选择")]),
                          ]
                        ),
                        a(
                          "div",
                          {
                            staticClass: "el-upload__tip",
                            attrs: {
                              slot: "tip",
                            },
                            slot: "tip",
                          },
                          [
                            e._v(
                              "本工具仅在浏览器内对文件进行解锁，无需上传服务器"
                            ),
                          ]
                        ),
                      ]
                    ),
                    a(
                      "el-row",
                      {
                        attrs: {
                          id: "app-control",
                        },
                      },
                      [
                        a(
                          "el-button",
                          {
                            attrs: {
                              icon: "el-icon-download",
                              plain: "",
                            },
                            on: {
                              click: e.handleDownloadAll,
                            },
                          },
                          [e._v("下载全部")]
                        ),
                        a(
                          "el-button",
                          {
                            attrs: {
                              icon: "el-icon-delete",
                              plain: "",
                              type: "danger",
                            },
                            on: {
                              click: e.handleDeleteAll,
                            },
                          },
                          [e._v("删除全部")]
                        ),
                      ],
                      1
                    ),
                    a("audio", {
                      attrs: {
                        autoplay: e.playing_auto,
                        src: e.playing_url,
                        controls: "",
                      },
                    }),
                    a(
                      "el-table",
                      {
                        staticStyle: {
                          width: "100%",
                        },
                        attrs: {
                          data: e.tableData,
                        },
                      },
                      [
                        a("el-table-column", {
                          attrs: {
                            label: "封面",
                          },
                          scopedSlots: e._u([
                            {
                              key: "default",
                              fn: function (t) {
                                return [
                                  a(
                                    "el-image",
                                    {
                                      staticStyle: {
                                        width: "100px",
                                        height: "100px",
                                      },
                                      attrs: {
                                        src: t.row.picture,
                                      },
                                    },
                                    [
                                      a(
                                        "div",
                                        {
                                          staticClass:
                                            "image-slot el-image__error",
                                          attrs: {
                                            slot: "error",
                                          },
                                          slot: "error",
                                        },
                                        [e._v(" 暂无封面 ")]
                                      ),
                                    ]
                                  ),
                                ];
                              },
                            },
                          ]),
                        }),
                        a("el-table-column", {
                          attrs: {
                            label: "歌曲",
                            sortable: "",
                          },
                          scopedSlots: e._u([
                            {
                              key: "default",
                              fn: function (t) {
                                return [
                                  a(
                                    "span",
                                    {
                                      staticStyle: {
                                        "margin-left": "10px",
                                      },
                                    },
                                    [e._v(e._s(t.row.title))]
                                  ),
                                ];
                              },
                            },
                          ]),
                        }),
                        a("el-table-column", {
                          attrs: {
                            label: "歌手",
                            sortable: "",
                          },
                          scopedSlots: e._u([
                            {
                              key: "default",
                              fn: function (t) {
                                return [a("p", [e._v(e._s(t.row.artist))])];
                              },
                            },
                          ]),
                        }),
                        a("el-table-column", {
                          attrs: {
                            label: "专辑",
                            sortable: "",
                          },
                          scopedSlots: e._u([
                            {
                              key: "default",
                              fn: function (t) {
                                return [a("p", [e._v(e._s(t.row.album))])];
                              },
                            },
                          ]),
                        }),
                        a("el-table-column", {
                          attrs: {
                            label: "操作",
                          },
                          scopedSlots: e._u([
                            {
                              key: "default",
                              fn: function (t) {
                                return [
                                  a("el-button", {
                                    attrs: {
                                      circle: "",
                                      icon: "el-icon-video-play",
                                      type: "success",
                                    },
                                    on: {
                                      click: function (a) {
                                        return e.handlePlay(t.$index, t.row);
                                      },
                                    },
                                  }),
                                  a("el-button", {
                                    attrs: {
                                      circle: "",
                                      icon: "el-icon-download",
                                    },
                                    on: {
                                      click: function (a) {
                                        return e.handleDownload(t.row);
                                      },
                                    },
                                  }),
                                  a("el-button", {
                                    attrs: {
                                      circle: "",
                                      icon: "el-icon-delete",
                                      type: "danger",
                                    },
                                    on: {
                                      click: function (a) {
                                        return e.handleDelete(t.$index, t.row);
                                      },
                                    },
                                  }),
                                ];
                              },
                            },
                          ]),
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                a(
                  "el-footer",
                  {
                    attrs: {
                      id: "app-footer",
                    },
                  },
                  [
                    a("el-row", [
                      e._v(" 网易云会员NCM格式解密工具 "),
                      //   a(
                      //     "a",
                      //     {
                      //       attrs: {
                      //         href: "",
                      //         target: "_blank",
                      //       },
                      //     },
                      //     [e._v("")]
                      //   ),
                    ]),
                    a("el-row", [
                      //   a("span", [e._v("  ")]),
                      //   a(
                      //     "a",
                      //     {
                      //       attrs: {
                      //         href: "https://blog.moecat.space/",
                      //         target: "_blank",
                      //       },
                      //     },
                      //     [e._v("我的博客")]
                      //   ),
                      //   e._v("  "),
                      //   a(
                      //     "a",
                      //     {
                      //       attrs: {
                      //         href: "",
                      //         target: "_blank",
                      //       },
                      //     },
                      //     [e._v("")]
                      //   ),
                      //   e._v("  "),
                      //   a(
                      //     "a",
                      //     {
                      //       attrs: {
                      //         href: "  ",
                      //         target: "_blank",
                      //       },
                      //     },
                      //     [e._v("")]
                      //   ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      i = [],
      o =
        (a("4160"),
        a("baa5"),
        a("a434"),
        a("b0c0"),
        a("d3b7"),
        a("3ca3"),
        a("159b"),
        a("ddb0"),
        a("2b3d"),
        a("96cf"),
        a("1020")),
      c = a("d26a"),
      s = a("b5de"),
      u = a("5fa2"),
      l = {
        name: "app",
        components: {},
        data: function () {
          return {
            activeIndex: "1",
            tableData: [],
            playing_url: "",
            playing_auto: !1,
          };
        },
        mounted: function () {
          this.$nextTick(function () {
            this.finishLoad();
          });
        },
        methods: {
          finishLoad: function () {
            document.getElementById("loader-mask").remove(),
              this.$notify.info({
                title: "NCM格式转换MP3",
                message:
                  '本工具仅在浏览器内对文件进行解锁，<br/>无需上传服务器<br/><a target="_blank" href="https://github.com/ix64/unlock-music/wiki/"></a>',
                dangerouslyUseHTMLString: !0,
                duration: 1e4,
                position: "top-left",
              });
          },
          handleFile: function (e) {
            var t = this,
              a = e.name
                .substring(e.name.lastIndexOf(".") + 1, e.name.length)
                .toLowerCase();
            (function () {
              var n, r;
              regeneratorRuntime.async(function (i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      (n = null),
                        (i.t0 = a),
                        (i.next =
                          "ncm" === i.t0
                            ? 4
                            : "mp3" === i.t0
                            ? 8
                            : "flac" === i.t0
                            ? 8
                            : "qmc3" === i.t0
                            ? 12
                            : "qmc0" === i.t0
                            ? 12
                            : "qmcflac" === i.t0
                            ? 12
                            : "qmcogg" === i.t0
                            ? 12
                            : "mflac" === i.t0
                            ? 16
                            : 20);
                      break;
                    case 4:
                      return (
                        (i.next = 6), regeneratorRuntime.awrap(o.Decrypt(e.raw))
                      );
                    case 6:
                      return (n = i.sent), i.abrupt("break", 22);
                    case 8:
                      return (
                        (i.next = 10),
                        regeneratorRuntime.awrap(s.Decrypt(e.raw))
                      );
                    case 10:
                      return (n = i.sent), i.abrupt("break", 22);
                    case 12:
                      return (
                        (i.next = 14),
                        regeneratorRuntime.awrap(c.Decrypt(e.raw))
                      );
                    case 14:
                      return (n = i.sent), i.abrupt("break", 22);
                    case 16:
                      return (
                        (i.next = 18),
                        regeneratorRuntime.awrap(u.Decrypt(e.raw))
                      );
                    case 18:
                      return (n = i.sent), i.abrupt("break", 22);
                    case 20:
                      return (
                        (n = {
                          status: !1,
                          message: "不支持此文件格式",
                        }),
                        i.abrupt("break", 22)
                      );
                    case 22:
                      n.status
                        ? (t.tableData.push(n),
                          t.$notify.success({
                            title: "解锁成功",
                            message: "成功解锁 " + n.title,
                            duration: 3e3,
                          }),
                          (r = [n.title, n.artist, n.album]),
                          console.log(n),
                          window._paq.push([
                            "trackEvent",
                            "Unlock",
                            a + "," + n.mime,
                            JSON.stringify(r),
                          ]))
                        : (t.$notify.error({
                            title: "出现问题",
                            message:
                              n.message +
                              "，" +
                              e.name +
                              '，仅支持ncm格式文件！<a target="_blank" href="#">刷新</a>',
                            dangerouslyUseHTMLString: !0,
                            duration: 6e3,
                          }),
                          window._paq.push([
                            "trackEvent",
                            "Error",
                            n.message,
                            e.name,
                          ]));
                    case 23:
                    case "end":
                      return i.stop();
                  }
              });
            })();
          },
          handlePlay: function (e, t) {
            (this.playing_url = t.file), (this.playing_auto = !0);
          },
          handleDelete: function (e, t) {
            console.log(e),
              URL.revokeObjectURL(t.file),
              URL.revokeObjectURL(t.picture),
              this.tableData.splice(e, 1);
          },
          handleDownload: function (e) {
            var t = document.createElement("a");
            (t.href = e.file),
              (t.download = e.filename),
              document.body.append(t),
              t.click(),
              t.remove();
          },
          handleDeleteAll: function () {
            this.tableData.forEach(function (e) {
              URL.revokeObjectURL(e.file), URL.revokeObjectURL(e.picture);
            }),
              (this.tableData = []);
          },
          handleDownloadAll: function () {
            var e = this,
              t = 0,
              a = setInterval(function () {
                t < e.tableData.length
                  ? (e.handleDownload(e.tableData[t]), t++)
                  : clearInterval(a);
              }, 1e3);
          },
        },
      },
      f = l,
      d = (a("034f"), a("2877")),
      m = Object(d["a"])(f, r, i, !1, null, null, null),
      p = m.exports,
      b = a("9483");
    Object(b["a"])("".concat("", "service-worker.js"), {
      ready: function () {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function () {
        console.log("Service worker has been registered.");
      },
      cached: function () {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function () {
        console.log("New content is downloading.");
      },
      updated: function () {
        console.log("New content is available; please refresh.");
      },
      offline: function () {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function (e) {
        console.error("Error during service worker registration:", e);
      },
    });
    var h = a("5c96");
    a("0fae");
    n["default"].use(h["Link"]),
      n["default"].use(h["Image"]),
      n["default"].use(h["Button"]),
      n["default"].use(h["Table"]),
      n["default"].use(h["TableColumn"]),
      n["default"].use(h["Main"]),
      n["default"].use(h["Footer"]),
      n["default"].use(h["Container"]),
      n["default"].use(h["Icon"]),
      n["default"].use(h["Row"]),
      n["default"].use(h["Col"]),
      n["default"].use(h["Upload"]),
      (n["default"].prototype.$notify = h["Notification"]),
      (n["default"].config.productionTip = !1),
      new n["default"]({
        render: function (e) {
          return e(p);
        },
      }).$mount("#app");
  },
  "5fa2": function (e, t, a) {
    "use strict";
    a.r(t),
      a.d(t, "Decrypt", function () {
        return c;
      });
    a("cb29"),
      a("baa5"),
      a("fb6a"),
      a("ace4"),
      a("b0c0"),
      a("d3b7"),
      a("ac1f"),
      a("3ca3"),
      a("1276"),
      a("498a"),
      a("5cc6"),
      a("9a8c"),
      a("a975"),
      a("735e"),
      a("c1ac"),
      a("d139"),
      a("3a7b"),
      a("d5d6"),
      a("82f8"),
      a("e91f"),
      a("60bd"),
      a("5f96"),
      a("3280"),
      a("3fcc"),
      a("ca91"),
      a("25a1"),
      a("cd26"),
      a("3c5d"),
      a("2954"),
      a("649e"),
      a("219c"),
      a("170b"),
      a("b39a"),
      a("72f7"),
      a("ddb0"),
      a("2b3d");
    var n = a("d4ec"),
      r = a("bee2"),
      i = a("ade3"),
      o = (a("96cf"), a("cb96"));

    function c(e) {
      var t, a, n, r, i, c, u, l, f, d, m, p, b, h, g, v;
      return regeneratorRuntime.async(function (w) {
        while (1)
          switch ((w.prev = w.next)) {
            case 0:
              if (
                ((t = e.name
                  .substring(e.name.lastIndexOf(".") + 1, e.name.length)
                  .toLowerCase()),
                "mflac" === t)
              ) {
                w.next = 3;
                break;
              }
              return w.abrupt("return", {
                status: !1,
                message: "文件类型不正确！",
              });
            case 3:
              return (
                (w.next = 5),
                regeneratorRuntime.awrap(
                  new Promise(function (t) {
                    var a = new FileReader();
                    (a.onload = function (e) {
                      t(e.target.result);
                    }),
                      a.readAsArrayBuffer(e);
                  })
                )
              );
            case 5:
              if (
                ((a = w.sent),
                (n = new Uint8Array(a.slice(0, -368))),
                (r = n.length),
                (i = new s()),
                i.DetectMask(n))
              ) {
                w.next = 11;
                break;
              }
              return w.abrupt("return", {
                status: !1,
                message: "此音乐无法解锁，目前mflac格式不提供完整支持",
              });
            case 11:
              for (c = 0; c < r; ++c) n[c] ^= i.NextMask();
              return (
                (u = new Blob([n], {
                  type: "audio/flac",
                })),
                (l = URL.createObjectURL(u)),
                (w.next = 16),
                regeneratorRuntime.awrap(o.parseBlob(u))
              );
            case 16:
              return (
                (f = w.sent),
                (d = e.name.substring(0, e.name.lastIndexOf(".")).split("-")),
                (m = f.common.title),
                (p = f.common.artist),
                d.length > 1
                  ? (void 0 === p && (p = d[0].trim()),
                    void 0 === m && (m = d[1].trim()))
                  : 1 === d.length && void 0 === m && (m = d[0].trim()),
                (b = p + " - " + m + ".flac"),
                (h = ""),
                void 0 !== f.common.picture &&
                  f.common.picture.length >= 1 &&
                  ((g = f.common.picture[0]),
                  (v = new Blob([g.data], {
                    type: g.format,
                  })),
                  (h = URL.createObjectURL(v))),
                w.abrupt("return", {
                  status: !0,
                  message: "",
                  filename: b,
                  title: m,
                  artist: p,
                  album: f.common.album,
                  picture: h,
                  file: l,
                  mime: "audio/flac",
                })
              );
            case 25:
            case "end":
              return w.stop();
          }
      });
    }
    var s = (function () {
      function e() {
        Object(n["a"])(this, e),
          Object(i["a"])(this, "FLAC_HEADER", [102, 76, 97, 67, 0]),
          (this.index = -1),
          (this.mask_index = -1),
          (this.mask = Array(128).fill(0));
      }
      return (
        Object(r["a"])(e, [
          {
            key: "DetectMask",
            value: function (e) {
              for (var t, a = e.length - 256, n = 0; n < a; n += 128) {
                var r = !0;
                t = e.slice(n, n + 128);
                for (var i = e.slice(n + 128, n + 256), o = 0; o < 128; o++)
                  if (t[o] !== i[o]) {
                    r = !1;
                    break;
                  }
                if (r) {
                  for (var c = 0; c < this.FLAC_HEADER.length; c++) {
                    var s = e[c] ^ t[c];
                    if (s !== this.FLAC_HEADER[c]) {
                      r = !1;
                      break;
                    }
                  }
                  if (r) return (this.mask = t), !0;
                }
              }
              return !1;
            },
          },
          {
            key: "NextMask",
            value: function () {
              return (
                this.index++,
                this.mask_index++,
                (32768 === this.index ||
                  (this.index > 32768 && (this.index + 1) % 32768 === 0)) &&
                  (this.index++, this.mask_index++),
                this.mask_index >= 128 && (this.mask_index -= 128),
                this.mask[this.mask_index]
              );
            },
          },
        ]),
        e
      );
    })();
  },
  "85ec": function (e, t, a) {},
  b5de: function (e, t, a) {
    "use strict";
    a.r(t),
      a.d(t, "Decrypt", function () {
        return i;
      });
    a("baa5"),
      a("b0c0"),
      a("d3b7"),
      a("ac1f"),
      a("3ca3"),
      a("1276"),
      a("498a"),
      a("ddb0"),
      a("2b3d"),
      a("96cf");
    var n = a("cb96"),
      r = {
        mp3: "audio/mpeg",
        flac: "audio/flac",
      };

    function i(e) {
      var t, a, i, o, c, s, u, l, f, d, m;
      return regeneratorRuntime.async(function (p) {
        while (1)
          switch ((p.prev = p.next)) {
            case 0:
              return (p.next = 2), regeneratorRuntime.awrap(n.parseBlob(e));
            case 2:
              return (
                (t = p.sent),
                (a = ""),
                void 0 !== t.common.picture &&
                  t.common.picture.length > 0 &&
                  ((i = new Blob([t.common.picture[0].data], {
                    type: t.common.picture[0].format,
                  })),
                  (a = URL.createObjectURL(i))),
                (o = URL.createObjectURL(e)),
                (c = e.name.substring(0, e.name.lastIndexOf("."))),
                (s = c.split("-")),
                (u = e.name
                  .substring(e.name.lastIndexOf(".") + 1, e.name.length)
                  .toLowerCase()),
                (l = r[u]),
                (f = t.common.title),
                (d = t.common.artist),
                s.length > 1
                  ? (void 0 === d && (d = s[0].trim()),
                    void 0 === f && (f = s[1].trim()))
                  : 1 === s.length && void 0 === f && (f = s[0].trim()),
                (m = d + " - " + f + "." + u),
                p.abrupt("return", {
                  status: !0,
                  filename: m,
                  title: f,
                  artist: d,
                  album: t.common.album,
                  picture: a,
                  file: o,
                  mime: l,
                })
              );
            case 15:
            case "end":
              return p.stop();
          }
      });
    }
  },
  d26a: function (e, t, a) {
    "use strict";
    a.r(t),
      a.d(t, "Decrypt", function () {
        return s;
      });
    a("baa5"),
      a("ace4"),
      a("b0c0"),
      a("d3b7"),
      a("ac1f"),
      a("3ca3"),
      a("1276"),
      a("498a"),
      a("5cc6"),
      a("9a8c"),
      a("a975"),
      a("735e"),
      a("c1ac"),
      a("d139"),
      a("3a7b"),
      a("d5d6"),
      a("82f8"),
      a("e91f"),
      a("60bd"),
      a("5f96"),
      a("3280"),
      a("3fcc"),
      a("ca91"),
      a("25a1"),
      a("cd26"),
      a("3c5d"),
      a("2954"),
      a("649e"),
      a("219c"),
      a("170b"),
      a("b39a"),
      a("72f7"),
      a("ddb0"),
      a("2b3d");
    var n = a("d4ec"),
      r = a("bee2"),
      i = (a("96cf"), a("cb96")),
      o = [
        [74, 214, 202, 144, 103, 247, 82],
        [94, 149, 35, 159, 19, 17, 126],
        [71, 116, 61, 144, 170, 63, 81],
        [198, 9, 213, 159, 250, 102, 249],
        [243, 214, 161, 144, 160, 247, 240],
        [29, 149, 222, 159, 132, 17, 244],
        [14, 116, 187, 144, 188, 63, 146],
        [0, 9, 91, 159, 98, 102, 161],
      ],
      c = {
        mp3: "audio/mpeg",
        flac: "audio/flac",
        ogg: "audio/ogg",
      };

    function s(e) {
      var t, a, n, r, o, s, l, f, d, m, p, b, h, g, v, w, y, x;
      return regeneratorRuntime.async(function (k) {
        while (1)
          switch ((k.prev = k.next)) {
            case 0:
              (t = e.name
                .substring(e.name.lastIndexOf(".") + 1, e.name.length)
                .toLowerCase()),
                (k.t0 = t),
                (k.next =
                  "qmc0" === k.t0
                    ? 4
                    : "qmc3" === k.t0
                    ? 4
                    : "qmcogg" === k.t0
                    ? 6
                    : "qmcflac" === k.t0
                    ? 8
                    : 10);
              break;
            case 4:
              return (a = "mp3"), k.abrupt("break", 11);
            case 6:
              return (a = "ogg"), k.abrupt("break", 11);
            case 8:
              return (a = "flac"), k.abrupt("break", 11);
            case 10:
              return k.abrupt("return", {
                status: !1,
                message: "File type is incorrect!",
              });
            case 11:
              return (
                (n = c[a]),
                (k.next = 14),
                regeneratorRuntime.awrap(
                  new Promise(function (t) {
                    var a = new FileReader();
                    (a.onload = function (e) {
                      t(e.target.result);
                    }),
                      a.readAsArrayBuffer(e);
                  })
                )
              );
            case 14:
              for (
                r = k.sent,
                  o = new Uint8Array(r),
                  s = o.length,
                  l = new u(),
                  f = 0;
                f < s;
                ++f
              )
                o[f] ^= l.NextMask();
              return (
                (d = new Blob([o], {
                  type: n,
                })),
                (m = URL.createObjectURL(d)),
                (k.next = 23),
                regeneratorRuntime.awrap(i.parseBlob(d))
              );
            case 23:
              return (
                (p = k.sent),
                (b = e.name.substring(0, e.name.lastIndexOf(".")).split("-")),
                (h = p.common.title),
                (g = p.common.artist),
                b.length > 1
                  ? (void 0 === g && (g = b[0].trim()),
                    void 0 === h && (h = b[1].trim()))
                  : 1 === b.length && void 0 === h && (h = b[0].trim()),
                (v = g + " - " + h + "." + a),
                (w = ""),
                void 0 !== p.common.picture &&
                  p.common.picture.length >= 1 &&
                  ((y = p.common.picture[0]),
                  (x = new Blob([y.data], {
                    type: y.format,
                  })),
                  (w = URL.createObjectURL(x))),
                k.abrupt("return", {
                  status: !0,
                  filename: v,
                  title: h,
                  artist: g,
                  album: p.common.album,
                  picture: w,
                  file: m,
                  mime: n,
                })
              );
            case 32:
            case "end":
              return k.stop();
          }
      });
    }
    var u = (function () {
      function e() {
        Object(n["a"])(this, e),
          (this.x = -1),
          (this.y = 8),
          (this.dx = 1),
          (this.index = -1);
      }
      return (
        Object(r["a"])(e, [
          {
            key: "NextMask",
            value: function () {
              var e;
              return (
                this.index++,
                this.x < 0
                  ? ((this.dx = 1), (this.y = (8 - this.y) % 8), (e = 195))
                  : this.x > 6
                  ? ((this.dx = -1), (this.y = 7 - this.y), (e = 216))
                  : (e = o[this.y][this.x]),
                (this.x += this.dx),
                32768 === this.index ||
                (this.index > 32768 && (this.index + 1) % 32768 === 0)
                  ? this.NextMask()
                  : e
              );
            },
          },
        ]),
        e
      );
    })();
  },
});
//# sourceMappingURL=app.db1511bf.js.map
