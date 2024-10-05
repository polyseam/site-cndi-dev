/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var GE = Object.create;
  var Pn = Object.defineProperty;
  var XE = Object.getOwnPropertyDescriptor;
  var kE = Object.getOwnPropertyNames;
  var UE = Object.getPrototypeOf, VE = Object.prototype.hasOwnProperty;
  var ve = (e, t) => () => (e && (t = e(e = 0)), t);
  var f = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Le = (e, t) => {
      for (var n in t) Pn(e, n, { get: t[n], enumerable: !0 });
    },
    ca = (e, t, n, r) => {
      if (t && typeof t == "object" || typeof t == "function") {
        for (let i of kE(t)) {
          !VE.call(e, i) && i !== n && Pn(e, i, {
            get: () => t[i],
            enumerable: !(r = XE(t, i)) || r.enumerable,
          });
        }
      }
      return e;
    };
  var fe = (
      e,
      t,
      n,
    ) => (n = e != null ? GE(UE(e)) : {},
      ca(
        t || !e || !e.__esModule
          ? Pn(n, "default", { value: e, enumerable: !0 })
          : n,
        e,
      )),
    je = (e) => ca(Pn({}, "__esModule", { value: !0 }), e);
  var zr = f(() => {
    "use strict";
    window.tram = function (e) {
      function t(c, y) {
        var I = new G.Bare();
        return I.init(c, y);
      }
      function n(c) {
        return c.replace(/[A-Z]/g, function (y) {
          return "-" + y.toLowerCase();
        });
      }
      function r(c) {
        var y = parseInt(c.slice(1), 16),
          I = y >> 16 & 255,
          O = y >> 8 & 255,
          _ = 255 & y;
        return [I, O, _];
      }
      function i(c, y, I) {
        return "#" + (1 << 24 | c << 16 | y << 8 | I).toString(16).slice(1);
      }
      function o() {}
      function a(c, y) {
        l("Type warning: Expected: [" + c + "] Got: [" + typeof y + "] " + y);
      }
      function s(c, y, I) {
        l("Units do not match [" + c + "]: " + y + ", " + I);
      }
      function u(c, y, I) {
        if (y !== void 0 && (I = y), c === void 0) return I;
        var O = I;
        return ht.test(c) || !nt.test(c)
          ? O = parseInt(c, 10)
          : nt.test(c) && (O = 1e3 * parseFloat(c)),
          0 > O && (O = 0),
          O === O ? O : I;
      }
      function l(c) {
        ae.debug && window && window.console.warn(c);
      }
      function v(c) {
        for (var y = -1, I = c ? c.length : 0, O = []; ++y < I;) {
          var _ = c[y];
          _ && O.push(_);
        }
        return O;
      }
      var p = function (c, y, I) {
          function O(oe) {
            return typeof oe == "object";
          }
          function _(oe) {
            return typeof oe == "function";
          }
          function w() {}
          function Z(oe, ge) {
            function k() {
              var we = new se();
              return _(we.init) && we.init.apply(we, arguments), we;
            }
            function se() {}
            ge === I && (ge = oe, oe = Object), k.Bare = se;
            var ue, _e = w[c] = oe[c], Ke = se[c] = k[c] = new w();
            return Ke.constructor = k,
              k.mixin = function (we) {
                return se[c] = k[c] = Z(k, we)[c], k;
              },
              k.open = function (we) {
                if (
                  ue = {},
                    _(we) ? ue = we.call(k, Ke, _e, k, oe) : O(we) && (ue = we),
                    O(ue)
                ) { for (var en in ue) y.call(ue, en) && (Ke[en] = ue[en]); }
                return _(Ke.init) || (Ke.init = oe), k;
              },
              k.open(ge);
          }
          return Z;
        }("prototype", {}.hasOwnProperty),
        d = {
          ease: ["ease", function (c, y, I, O) {
            var _ = (c /= O) * c, w = _ * c;
            return y +
              I * (-2.75 * w * _ + 11 * _ * _ + -15.5 * w + 8 * _ + .25 * c);
          }],
          "ease-in": ["ease-in", function (c, y, I, O) {
            var _ = (c /= O) * c, w = _ * c;
            return y + I * (-1 * w * _ + 3 * _ * _ + -3 * w + 2 * _);
          }],
          "ease-out": ["ease-out", function (c, y, I, O) {
            var _ = (c /= O) * c, w = _ * c;
            return y +
              I * (.3 * w * _ + -1.6 * _ * _ + 2.2 * w + -1.8 * _ + 1.9 * c);
          }],
          "ease-in-out": ["ease-in-out", function (c, y, I, O) {
            var _ = (c /= O) * c, w = _ * c;
            return y + I * (2 * w * _ + -5 * _ * _ + 2 * w + 2 * _);
          }],
          linear: ["linear", function (c, y, I, O) {
            return I * c / O + y;
          }],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (c, y, I, O) {
              return I * (c /= O) * c + y;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (c, y, I, O) {
              return -I * (c /= O) * (c - 2) + y;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (c, y, I, O) {
              return (c /= O / 2) < 1
                ? I / 2 * c * c + y
                : -I / 2 * (--c * (c - 2) - 1) + y;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (c, y, I, O) {
              return I * (c /= O) * c * c + y;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (c, y, I, O) {
              return I * ((c = c / O - 1) * c * c + 1) + y;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (c, y, I, O) {
              return (c /= O / 2) < 1
                ? I / 2 * c * c * c + y
                : I / 2 * ((c -= 2) * c * c + 2) + y;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (c, y, I, O) {
              return I * (c /= O) * c * c * c + y;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (c, y, I, O) {
              return -I * ((c = c / O - 1) * c * c * c - 1) + y;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (c, y, I, O) {
              return (c /= O / 2) < 1
                ? I / 2 * c * c * c * c + y
                : -I / 2 * ((c -= 2) * c * c * c - 2) + y;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (c, y, I, O) {
              return I * (c /= O) * c * c * c * c + y;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (c, y, I, O) {
              return I * ((c = c / O - 1) * c * c * c * c + 1) + y;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (c, y, I, O) {
              return (c /= O / 2) < 1
                ? I / 2 * c * c * c * c * c + y
                : I / 2 * ((c -= 2) * c * c * c * c + 2) + y;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (c, y, I, O) {
              return -I * Math.cos(c / O * (Math.PI / 2)) + I + y;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (c, y, I, O) {
              return I * Math.sin(c / O * (Math.PI / 2)) + y;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (c, y, I, O) {
              return -I / 2 * (Math.cos(Math.PI * c / O) - 1) + y;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (c, y, I, O) {
              return c === 0 ? y : I * Math.pow(2, 10 * (c / O - 1)) + y;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (c, y, I, O) {
              return c === O ? y + I : I * (-Math.pow(2, -10 * c / O) + 1) + y;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (c, y, I, O) {
              return c === 0
                ? y
                : c === O
                ? y + I
                : (c /= O / 2) < 1
                ? I / 2 * Math.pow(2, 10 * (c - 1)) + y
                : I / 2 * (-Math.pow(2, -10 * --c) + 2) + y;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (c, y, I, O) {
              return -I * (Math.sqrt(1 - (c /= O) * c) - 1) + y;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (c, y, I, O) {
              return I * Math.sqrt(1 - (c = c / O - 1) * c) + y;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (c, y, I, O) {
              return (c /= O / 2) < 1
                ? -I / 2 * (Math.sqrt(1 - c * c) - 1) + y
                : I / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + y;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (c, y, I, O, _) {
              return _ === void 0 && (_ = 1.70158),
                I * (c /= O) * c * ((_ + 1) * c - _) + y;
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (c, y, I, O, _) {
              return _ === void 0 && (_ = 1.70158),
                I * ((c = c / O - 1) * c * ((_ + 1) * c + _) + 1) + y;
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (c, y, I, O, _) {
              return _ === void 0 && (_ = 1.70158),
                (c /= O / 2) < 1
                  ? I / 2 * c * c * (((_ *= 1.525) + 1) * c - _) + y
                  : I / 2 * ((c -= 2) * c * (((_ *= 1.525) + 1) * c + _) + 2) +
                    y;
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        T = document,
        b = window,
        S = "bkwld-tram",
        m = /[\-\.0-9]/g,
        C = /[A-Z]/,
        x = "number",
        D = /^(rgb|#)/,
        F = /(em|cm|mm|in|pt|pc|px)$/,
        P = /(em|cm|mm|in|pt|pc|px|%)$/,
        W = /(deg|rad|turn)$/,
        z = "unitless",
        Y = /(all|none) 0s ease 0s/,
        J = /^(width|height)$/,
        te = " ",
        N = T.createElement("a"),
        A = ["Webkit", "Moz", "O", "ms"],
        L = ["-webkit-", "-moz-", "-o-", "-ms-"],
        K = function (c) {
          if (c in N.style) return { dom: c, css: c };
          var y, I, O = "", _ = c.split("-");
          for (y = 0; y < _.length; y++) {
            O += _[y].charAt(0).toUpperCase() + _[y].slice(1);
          }
          for (y = 0; y < A.length; y++) {
            if (I = A[y] + O, I in N.style) return { dom: I, css: L[y] + c };
          }
        },
        V = t.support = {
          bind: Function.prototype.bind,
          transform: K("transform"),
          transition: K("transition"),
          backface: K("backface-visibility"),
          timing: K("transition-timing-function"),
        };
      if (V.transition) {
        var re = V.timing.dom;
        if (N.style[re] = d["ease-in-back"][0], !N.style[re]) {
          for (var ie in E) {
            d[ie][0] = E[ie];
          }
        }
      }
      var M = t.frame = function () {
          var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame ||
            b.mozRequestAnimationFrame || b.oRequestAnimationFrame ||
            b.msRequestAnimationFrame;
          return c && V.bind ? c.bind(b) : function (y) {
            b.setTimeout(y, 16);
          };
        }(),
        H = t.now = function () {
          var c = b.performance,
            y = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
          return y && V.bind ? y.bind(c) : Date.now || function () {
            return +new Date();
          };
        }(),
        j = p(function (c) {
          function y(ne, le) {
            var ye = v(("" + ne).split(te)), de = ye[0];
            le = le || {};
            var Se = B[de];
            if (!Se) return l("Unsupported property: " + de);
            if (!le.weak || !this.props[de]) {
              var Ge = Se[0], Pe = this.props[de];
              return Pe || (Pe = this.props[de] = new Ge.Bare()),
                Pe.init(this.$el, ye, Se, le),
                Pe;
            }
          }
          function I(ne, le, ye) {
            if (ne) {
              var de = typeof ne;
              if (
                le ||
                (this.timer && this.timer.destroy(),
                  this.queue = [],
                  this.active = !1), de == "number" && le
              ) {
                return this.timer = new ee({
                  duration: ne,
                  context: this,
                  complete: w,
                }),
                  void (this.active = !0);
              }
              if (de == "string" && le) {
                switch (ne) {
                  case "hide":
                    k.call(this);
                    break;
                  case "stop":
                    Z.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    y.call(this, ne, ye && ye[1]);
                }
                return w.call(this);
              }
              if (de == "function") return void ne.call(this, this);
              if (de == "object") {
                var Se = 0;
                Ke.call(this, ne, function (Ie, qE) {
                  Ie.span > Se && (Se = Ie.span), Ie.stop(), Ie.animate(qE);
                }, function (Ie) {
                  "wait" in Ie && (Se = u(Ie.wait, 0));
                }),
                  _e.call(this),
                  Se > 0 &&
                  (this.timer = new ee({ duration: Se, context: this }),
                    this.active = !0,
                    le && (this.timer.complete = w));
                var Ge = this, Pe = !1, Cn = {};
                M(function () {
                  Ke.call(Ge, ne, function (Ie) {
                    Ie.active && (Pe = !0, Cn[Ie.name] = Ie.nextStyle);
                  }), Pe && Ge.$el.css(Cn);
                });
              }
            }
          }
          function O(ne) {
            ne = u(ne, 0),
              this.active
                ? this.queue.push({ options: ne })
                : (this.timer = new ee({
                  duration: ne,
                  context: this,
                  complete: w,
                }),
                  this.active = !0);
          }
          function _(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = w))
              : l(
                "No active transition timer. Use start() or wait() before then().",
              );
          }
          function w() {
            if (
              this.timer && this.timer.destroy(),
                this.active = !1,
                this.queue.length
            ) {
              var ne = this.queue.shift();
              I.call(this, ne.options, !0, ne.args);
            }
          }
          function Z(ne) {
            this.timer && this.timer.destroy(),
              this.queue = [],
              this.active = !1;
            var le;
            typeof ne == "string"
              ? (le = {}, le[ne] = 1)
              : le = typeof ne == "object" && ne != null ? ne : this.props,
              Ke.call(this, le, we),
              _e.call(this);
          }
          function oe(ne) {
            Z.call(this, ne), Ke.call(this, ne, en, ME);
          }
          function ge(ne) {
            typeof ne != "string" && (ne = "block"), this.el.style.display = ne;
          }
          function k() {
            Z.call(this), this.el.style.display = "none";
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            Z.call(this), e.removeData(this.el, S), this.$el = this.el = null;
          }
          function _e() {
            var ne, le, ye = [];
            this.upstream && ye.push(this.upstream);
            for (ne in this.props) {
              le = this.props[ne], le.active && ye.push(le.string);
            }
            ye = ye.join(","),
              this.style !== ye &&
              (this.style = ye, this.el.style[V.transition.dom] = ye);
          }
          function Ke(ne, le, ye) {
            var de, Se, Ge, Pe, Cn = le !== we, Ie = {};
            for (de in ne) {
              Ge = ne[de],
                de in he
                  ? (Ie.transform || (Ie.transform = {}), Ie.transform[de] = Ge)
                  : (C.test(de) && (de = n(de)),
                    de in B ? Ie[de] = Ge : (Pe || (Pe = {}), Pe[de] = Ge));
            }
            for (de in Ie) {
              if (Ge = Ie[de], Se = this.props[de], !Se) {
                if (!Cn) continue;
                Se = y.call(this, de);
              }
              le.call(this, Se, Ge);
            }
            ye && Pe && ye.call(this, Pe);
          }
          function we(ne) {
            ne.stop();
          }
          function en(ne, le) {
            ne.set(le);
          }
          function ME(ne) {
            this.$el.css(ne);
          }
          function qe(ne, le) {
            c[ne] = function () {
              return this.children
                ? FE.call(this, le, arguments)
                : (this.el && le.apply(this, arguments), this);
            };
          }
          function FE(ne, le) {
            var ye, de = this.children.length;
            for (ye = 0; de > ye; ye++) ne.apply(this.children[ye], le);
            return this;
          }
          c.init = function (ne) {
            if (
              this.$el = e(ne),
                this.el = this.$el[0],
                this.props = {},
                this.queue = [],
                this.style = "",
                this.active = !1,
                ae.keepInherited && !ae.fallback
            ) {
              var le = X(this.el, "transition");
              le && !Y.test(le) && (this.upstream = le);
            }
            V.backface && ae.hideBackface &&
              h(this.el, V.backface.css, "hidden");
          },
            qe("add", y),
            qe("start", I),
            qe("wait", O),
            qe("then", _),
            qe("next", w),
            qe("stop", Z),
            qe("set", oe),
            qe("show", ge),
            qe("hide", k),
            qe("redraw", se),
            qe("destroy", ue);
        }),
        G = p(j, function (c) {
          function y(I, O) {
            var _ = e.data(I, S) || e.data(I, S, new j.Bare());
            return _.el || _.init(I), O ? _.start(O) : _;
          }
          c.init = function (I, O) {
            var _ = e(I);
            if (!_.length) return this;
            if (_.length === 1) return y(_[0], O);
            var w = [];
            return _.each(function (Z, oe) {
              w.push(y(oe, O));
            }),
              this.children = w,
              this;
          };
        }),
        q = p(function (c) {
          function y() {
            var w = this.get();
            this.update("auto");
            var Z = this.get();
            return this.update(w), Z;
          }
          function I(w, Z, oe) {
            return Z !== void 0 && (oe = Z), w in d ? w : oe;
          }
          function O(w) {
            var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(w);
            return (Z ? i(Z[1], Z[2], Z[3]) : w).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3",
            );
          }
          var _ = { duration: 500, ease: "ease", delay: 0 };
          c.init = function (w, Z, oe, ge) {
            this.$el = w, this.el = w[0];
            var k = Z[0];
            oe[2] && (k = oe[2]),
              Q[k] && (k = Q[k]),
              this.name = k,
              this.type = oe[1],
              this.duration = u(Z[1], this.duration, _.duration),
              this.ease = I(Z[2], this.ease, _.ease),
              this.delay = u(Z[3], this.delay, _.delay),
              this.span = this.duration + this.delay,
              this.active = !1,
              this.nextStyle = null,
              this.auto = J.test(this.name),
              this.unit = ge.unit || this.unit || ae.defaultUnit,
              this.angle = ge.angle || this.angle || ae.defaultAngle,
              ae.fallback || ge.fallback
                ? this.animate = this.fallback
                : (this.animate = this.transition,
                  this.string = this.name + te + this.duration + "ms" +
                    (this.ease != "ease" ? te + d[this.ease][0] : "") +
                    (this.delay ? te + this.delay + "ms" : ""));
          },
            c.set = function (w) {
              w = this.convert(w, this.type), this.update(w), this.redraw();
            },
            c.transition = function (w) {
              this.active = !0,
                w = this.convert(w, this.type),
                this.auto &&
                (this.el.style[this.name] == "auto" &&
                  (this.update(this.get()), this.redraw()),
                  w == "auto" && (w = y.call(this))),
                this.nextStyle = w;
            },
            c.fallback = function (w) {
              var Z = this.el.style[this.name] ||
                this.convert(this.get(), this.type);
              w = this.convert(w, this.type),
                this.auto &&
                (Z == "auto" && (Z = this.convert(this.get(), this.type)),
                  w == "auto" && (w = y.call(this))),
                this.tween = new R({
                  from: Z,
                  to: w,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
            },
            c.get = function () {
              return X(this.el, this.name);
            },
            c.update = function (w) {
              h(this.el, this.name, w);
            },
            c.stop = function () {
              (this.active || this.nextStyle) &&
                (this.active = !1,
                  this.nextStyle = null,
                  h(this.el, this.name, this.get()));
              var w = this.tween;
              w && w.context && w.destroy();
            },
            c.convert = function (w, Z) {
              if (w == "auto" && this.auto) return w;
              var oe, ge = typeof w == "number", k = typeof w == "string";
              switch (Z) {
                case x:
                  if (ge) return w;
                  if (k && w.replace(m, "") === "") return +w;
                  oe = "number(unitless)";
                  break;
                case D:
                  if (k) {
                    if (w === "" && this.original) return this.original;
                    if (Z.test(w)) {
                      return w.charAt(0) == "#" && w.length == 7 ? w : O(w);
                    }
                  }
                  oe = "hex or rgb string";
                  break;
                case F:
                  if (ge) return w + this.unit;
                  if (k && Z.test(w)) return w;
                  oe = "number(px) or string(unit)";
                  break;
                case P:
                  if (ge) return w + this.unit;
                  if (k && Z.test(w)) return w;
                  oe = "number(px) or string(unit or %)";
                  break;
                case W:
                  if (ge) return w + this.angle;
                  if (k && Z.test(w)) return w;
                  oe = "number(deg) or string(angle)";
                  break;
                case z:
                  if (ge || k && P.test(w)) return w;
                  oe = "number(unitless) or string(unit or %)";
              }
              return a(oe, w), w;
            },
            c.redraw = function () {
              this.el.offsetHeight;
            };
        }),
        g = p(q, function (c, y) {
          c.init = function () {
            y.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), D));
          };
        }),
        U = p(q, function (c, y) {
          c.init = function () {
            y.init.apply(this, arguments), this.animate = this.fallback;
          },
            c.get = function () {
              return this.$el[this.name]();
            },
            c.update = function (I) {
              this.$el[this.name](I);
            };
        }),
        $ = p(q, function (c, y) {
          function I(O, _) {
            var w, Z, oe, ge, k;
            for (w in O) {
              ge = he[w],
                oe = ge[0],
                Z = ge[1] || w,
                k = this.convert(O[w], oe),
                _.call(this, Z, k, oe);
            }
          }
          c.init = function () {
            y.init.apply(this, arguments),
              this.current ||
              (this.current = {},
                he.perspective && ae.perspective &&
                (this.current.perspective = ae.perspective,
                  h(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          },
            c.set = function (O) {
              I.call(this, O, function (_, w) {
                this.current[_] = w;
              }),
                h(this.el, this.name, this.style(this.current)),
                this.redraw();
            },
            c.transition = function (O) {
              var _ = this.values(O);
              this.tween = new ce({
                current: this.current,
                values: _,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var w, Z = {};
              for (w in this.current) Z[w] = w in _ ? _[w] : this.current[w];
              this.active = !0, this.nextStyle = this.style(Z);
            },
            c.fallback = function (O) {
              var _ = this.values(O);
              this.tween = new ce({
                current: this.current,
                values: _,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            },
            c.update = function () {
              h(this.el, this.name, this.style(this.current));
            },
            c.style = function (O) {
              var _, w = "";
              for (_ in O) w += _ + "(" + O[_] + ") ";
              return w;
            },
            c.values = function (O) {
              var _, w = {};
              return I.call(this, O, function (Z, oe, ge) {
                w[Z] = oe,
                  this.current[Z] === void 0 &&
                  (_ = 0,
                    ~Z.indexOf("scale") && (_ = 1),
                    this.current[Z] = this.convert(_, ge));
              }),
                w;
            };
        }),
        R = p(function (c) {
          function y(k) {
            oe.push(k) === 1 && M(I);
          }
          function I() {
            var k, se, ue, _e = oe.length;
            if (_e) {
              for (M(I), se = H(), k = _e; k--;) {
                ue = oe[k], ue && ue.render(se);
              }
            }
          }
          function O(k) {
            var se, ue = e.inArray(k, oe);
            ue >= 0 &&
              (se = oe.slice(ue + 1),
                oe.length = ue,
                se.length && (oe = oe.concat(se)));
          }
          function _(k) {
            return Math.round(k * ge) / ge;
          }
          function w(k, se, ue) {
            return i(
              k[0] + ue * (se[0] - k[0]),
              k[1] + ue * (se[1] - k[1]),
              k[2] + ue * (se[2] - k[2]),
            );
          }
          var Z = { ease: d.ease[1], from: 0, to: 1 };
          c.init = function (k) {
            this.duration = k.duration || 0, this.delay = k.delay || 0;
            var se = k.ease || Z.ease;
            d[se] && (se = d[se][1]),
              typeof se != "function" && (se = Z.ease),
              this.ease = se,
              this.update = k.update || o,
              this.complete = k.complete || o,
              this.context = k.context || this,
              this.name = k.name;
            var ue = k.from, _e = k.to;
            ue === void 0 && (ue = Z.from),
              _e === void 0 && (_e = Z.to),
              this.unit = k.unit || "",
              typeof ue == "number" && typeof _e == "number"
                ? (this.begin = ue, this.change = _e - ue)
                : this.format(_e, ue),
              this.value = this.begin + this.unit,
              this.start = H(),
              k.autoplay !== !1 && this.play();
          },
            c.play = function () {
              this.active ||
                (this.start || (this.start = H()), this.active = !0, y(this));
            },
            c.stop = function () {
              this.active && (this.active = !1, O(this));
            },
            c.render = function (k) {
              var se, ue = k - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var _e = this.ease(ue, 0, 1, this.duration);
                return se = this.startRGB
                  ? w(this.startRGB, this.endRGB, _e)
                  : _(this.begin + _e * this.change),
                  this.value = se + this.unit,
                  void this.update.call(this.context, this.value);
              }
              se = this.endHex || this.begin + this.change,
                this.value = se + this.unit,
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            },
            c.format = function (k, se) {
              if (se += "", k += "", k.charAt(0) == "#") {
                return this.startRGB = r(se),
                  this.endRGB = r(k),
                  this.endHex = k,
                  this.begin = 0,
                  void (this.change = 1);
              }
              if (!this.unit) {
                var ue = se.replace(m, ""), _e = k.replace(m, "");
                ue !== _e && s("tween", se, k), this.unit = ue;
              }
              se = parseFloat(se),
                k = parseFloat(k),
                this.begin = this.value = se,
                this.change = k - se;
            },
            c.destroy = function () {
              this.stop(),
                this.context = null,
                this.ease = this.update = this.complete = o;
            };
          var oe = [], ge = 1e3;
        }),
        ee = p(R, function (c) {
          c.init = function (y) {
            this.duration = y.duration || 0,
              this.complete = y.complete || o,
              this.context = y.context,
              this.play();
          },
            c.render = function (y) {
              var I = y - this.start;
              I < this.duration ||
                (this.complete.call(this.context), this.destroy());
            };
        }),
        ce = p(R, function (c, y) {
          c.init = function (I) {
            this.context = I.context,
              this.update = I.update,
              this.tweens = [],
              this.current = I.current;
            var O, _;
            for (O in I.values) {
              _ = I.values[O],
                this.current[O] !== _ &&
                this.tweens.push(
                  new R({
                    name: O,
                    from: this.current[O],
                    to: _,
                    duration: I.duration,
                    delay: I.delay,
                    ease: I.ease,
                    autoplay: !1,
                  }),
                );
            }
            this.play();
          },
            c.render = function (I) {
              var O, _, w = this.tweens.length, Z = !1;
              for (O = w; O--;) {
                _ = this.tweens[O],
                  _.context &&
                  (_.render(I), this.current[_.name] = _.value, Z = !0);
              }
              return Z
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            },
            c.destroy = function () {
              if (y.destroy.call(this), this.tweens) {
                var I, O = this.tweens.length;
                for (I = O; I--;) this.tweens[I].destroy();
                this.tweens = null, this.current = null;
              }
            };
        }),
        ae = t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !V.transition,
          agentTests: [],
        };
      t.fallback = function (c) {
        if (!V.transition) return ae.fallback = !0;
        ae.agentTests.push("(" + c + ")");
        var y = new RegExp(ae.agentTests.join("|"), "i");
        ae.fallback = y.test(navigator.userAgent);
      },
        t.fallback("6.0.[2-5] Safari"),
        t.tween = function (c) {
          return new R(c);
        },
        t.delay = function (c, y, I) {
          return new ee({ complete: y, duration: c, context: I });
        },
        e.fn.tram = function (c) {
          return t.call(null, this, c);
        };
      var h = e.style,
        X = e.css,
        Q = { transform: V.transform && V.transform.css },
        B = {
          color: [g, D],
          background: [g, D, "background-color"],
          "outline-color": [g, D],
          "border-color": [g, D],
          "border-top-color": [g, D],
          "border-right-color": [g, D],
          "border-bottom-color": [g, D],
          "border-left-color": [g, D],
          "border-width": [q, F],
          "border-top-width": [q, F],
          "border-right-width": [q, F],
          "border-bottom-width": [q, F],
          "border-left-width": [q, F],
          "border-spacing": [q, F],
          "letter-spacing": [q, F],
          margin: [q, F],
          "margin-top": [q, F],
          "margin-right": [q, F],
          "margin-bottom": [q, F],
          "margin-left": [q, F],
          padding: [q, F],
          "padding-top": [q, F],
          "padding-right": [q, F],
          "padding-bottom": [q, F],
          "padding-left": [q, F],
          "outline-width": [q, F],
          opacity: [q, x],
          top: [q, P],
          right: [q, P],
          bottom: [q, P],
          left: [q, P],
          "font-size": [q, P],
          "text-indent": [q, P],
          "word-spacing": [q, P],
          width: [q, P],
          "min-width": [q, P],
          "max-width": [q, P],
          height: [q, P],
          "min-height": [q, P],
          "max-height": [q, P],
          "line-height": [q, z],
          "scroll-top": [U, x, "scrollTop"],
          "scroll-left": [U, x, "scrollLeft"],
        },
        he = {};
      V.transform &&
      (B.transform = [$],
        he = {
          x: [P, "translateX"],
          y: [P, "translateY"],
          rotate: [W],
          rotateX: [W],
          rotateY: [W],
          scale: [x],
          scaleX: [x],
          scaleY: [x],
          skew: [W],
          skewX: [W],
          skewY: [W],
        }),
        V.transform && V.backface &&
        (he.z = [P, "translateZ"],
          he.rotateZ = [W],
          he.scaleZ = [x],
          he.perspective = [F]);
      var ht = /ms/, nt = /s|\./;
      return e.tram = t;
    }(window.jQuery);
  });
  var fa = f((TF, la) => {
    "use strict";
    var HE = window.$, BE = zr() && HE.tram;
    la.exports = function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        n = Array.prototype,
        r = Object.prototype,
        i = Function.prototype,
        o = n.push,
        a = n.slice,
        s = n.concat,
        u = r.toString,
        l = r.hasOwnProperty,
        v = n.forEach,
        p = n.map,
        d = n.reduce,
        E = n.reduceRight,
        T = n.filter,
        b = n.every,
        S = n.some,
        m = n.indexOf,
        C = n.lastIndexOf,
        x = Array.isArray,
        D = Object.keys,
        F = i.bind,
        P = e.each = e.forEach = function (A, L, K) {
          if (A == null) return A;
          if (v && A.forEach === v) A.forEach(L, K);
          else if (A.length === +A.length) {
            for (var V = 0, re = A.length; V < re; V++) {
              if (L.call(K, A[V], V, A) === t) return;
            }
          } else {for (var ie = e.keys(A), V = 0, re = ie.length; V < re; V++) {
              if (L.call(K, A[ie[V]], ie[V], A) === t) return;
            }}
          return A;
        };
      e.map = e.collect = function (A, L, K) {
        var V = [];
        return A == null
          ? V
          : p && A.map === p
          ? A.map(L, K)
          : (P(A, function (re, ie, M) {
            V.push(L.call(K, re, ie, M));
          }),
            V);
      },
        e.find = e.detect = function (A, L, K) {
          var V;
          return W(A, function (re, ie, M) {
            if (L.call(K, re, ie, M)) return V = re, !0;
          }),
            V;
        },
        e.filter = e.select = function (A, L, K) {
          var V = [];
          return A == null
            ? V
            : T && A.filter === T
            ? A.filter(L, K)
            : (P(A, function (re, ie, M) {
              L.call(K, re, ie, M) && V.push(re);
            }),
              V);
        };
      var W = e.some = e.any = function (A, L, K) {
        L || (L = e.identity);
        var V = !1;
        return A == null
          ? V
          : S && A.some === S
          ? A.some(L, K)
          : (P(A, function (re, ie, M) {
            if (V || (V = L.call(K, re, ie, M))) return t;
          }),
            !!V);
      };
      e.contains = e.include = function (A, L) {
        return A == null
          ? !1
          : m && A.indexOf === m
          ? A.indexOf(L) != -1
          : W(A, function (K) {
            return K === L;
          });
      },
        e.delay = function (A, L) {
          var K = a.call(arguments, 2);
          return setTimeout(function () {
            return A.apply(null, K);
          }, L);
        },
        e.defer = function (A) {
          return e.delay.apply(e, [A, 1].concat(a.call(arguments, 1)));
        },
        e.throttle = function (A) {
          var L, K, V;
          return function () {
            L || (L = !0,
              K = arguments,
              V = this,
              BE.frame(function () {
                L = !1, A.apply(V, K);
              }));
          };
        },
        e.debounce = function (A, L, K) {
          var V,
            re,
            ie,
            M,
            H,
            j = function () {
              var G = e.now() - M;
              G < L
                ? V = setTimeout(j, L - G)
                : (V = null, K || (H = A.apply(ie, re), ie = re = null));
            };
          return function () {
            ie = this, re = arguments, M = e.now();
            var G = K && !V;
            return V || (V = setTimeout(j, L)),
              G && (H = A.apply(ie, re), ie = re = null),
              H;
          };
        },
        e.defaults = function (A) {
          if (!e.isObject(A)) return A;
          for (var L = 1, K = arguments.length; L < K; L++) {
            var V = arguments[L];
            for (var re in V) A[re] === void 0 && (A[re] = V[re]);
          }
          return A;
        },
        e.keys = function (A) {
          if (!e.isObject(A)) return [];
          if (D) return D(A);
          var L = [];
          for (var K in A) e.has(A, K) && L.push(K);
          return L;
        },
        e.has = function (A, L) {
          return l.call(A, L);
        },
        e.isObject = function (A) {
          return A === Object(A);
        },
        e.now = Date.now || function () {
          return new Date().getTime();
        },
        e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        };
      var z = /(.)^/,
        Y = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        J = /\\|'|\r|\n|\u2028|\u2029/g,
        te = function (A) {
          return "\\" + Y[A];
        },
        N = /^\s*(\w|\$)+\s*$/;
      return e.template = function (A, L, K) {
        !L && K && (L = K), L = e.defaults({}, L, e.templateSettings);
        var V = RegExp(
            [
              (L.escape || z).source,
              (L.interpolate || z).source,
              (L.evaluate || z).source,
            ].join("|") + "|$",
            "g",
          ),
          re = 0,
          ie = "__p+='";
        A.replace(V, function (G, q, g, U, $) {
          return ie += A.slice(re, $).replace(J, te),
            re = $ + G.length,
            q
              ? ie += `'+
((__t=(` + q + `))==null?'':_.escape(__t))+
'`
              : g
              ? ie += `'+
((__t=(` + g + `))==null?'':__t)+
'`
              : U && (ie += `';
` + U + `
__p+='`),
            G;
        }),
          ie += `';
`;
        var M = L.variable;
        if (M) {
          if (!N.test(M)) {
            throw new Error("variable is not a bare identifier: " + M);
          }
        } else {ie = `with(obj||{}){
` + ie + `}
`,
            M = "obj";}
        ie =
          `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ie + `return __p;
`;
        var H;
        try {
          H = new Function(L.variable || "obj", "_", ie);
        } catch (G) {
          throw G.source = ie, G;
        }
        var j = function (G) {
          return H.call(this, G, e);
        };
        return j.source = "function(" + M + `){
` + ie + "}",
          j;
      },
        e;
    }();
  });
  var Ue = f((bF, ma) => {
    "use strict";
    var pe = {},
      Ot = {},
      wt = [],
      jr = window.Webflow || [],
      ut = window.jQuery,
      ke = ut(window),
      WE = ut(document),
      Ye = ut.isFunction,
      Xe = pe._ = fa(),
      pa = pe.tram = zr() && ut.tram,
      Nn = !1,
      Yr = !1;
    pa.config.hideBackface = !1;
    pa.config.keepInherited = !0;
    pe.define = function (e, t, n) {
      Ot[e] && ha(Ot[e]);
      var r = Ot[e] = t(ut, Xe, n) || {};
      return ga(r), r;
    };
    pe.require = function (e) {
      return Ot[e];
    };
    function ga(e) {
      pe.env() &&
      (Ye(e.design) && ke.on("__wf_design", e.design),
        Ye(e.preview) && ke.on("__wf_preview", e.preview)),
        Ye(e.destroy) && ke.on("__wf_destroy", e.destroy),
        e.ready && Ye(e.ready) && zE(e);
    }
    function zE(e) {
      if (Nn) {
        e.ready();
        return;
      }
      Xe.contains(wt, e.ready) || wt.push(e.ready);
    }
    function ha(e) {
      Ye(e.design) && ke.off("__wf_design", e.design),
        Ye(e.preview) && ke.off("__wf_preview", e.preview),
        Ye(e.destroy) && ke.off("__wf_destroy", e.destroy),
        e.ready && Ye(e.ready) && KE(e);
    }
    function KE(e) {
      wt = Xe.filter(wt, function (t) {
        return t !== e.ready;
      });
    }
    pe.push = function (e) {
      if (Nn) {
        Ye(e) && e();
        return;
      }
      jr.push(e);
    };
    pe.env = function (e) {
      var t = window.__wf_design, n = typeof t < "u";
      if (!e) return n;
      if (e === "design") return n && t;
      if (e === "preview") return n && !t;
      if (e === "slug") return n && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Ln = navigator.userAgent.toLowerCase(),
      Ea = pe.env.touch = "ontouchstart" in window ||
        window.DocumentTouch && document instanceof window.DocumentTouch,
      jE = pe.env.chrome = /chrome/.test(Ln) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Ln.match(/chrome\/(\d+)\./)[1], 10),
      YE = pe.env.ios = /(ipod|iphone|ipad)/.test(Ln);
    pe.env.safari = /safari/.test(Ln) && !jE && !YE;
    var Kr;
    Ea && WE.on("touchstart mousedown", function (e) {
      Kr = e.target;
    });
    pe.validClick = Ea
      ? function (e) {
        return e === Kr || ut.contains(e, Kr);
      }
      : function () {
        return !0;
      };
    var va = "resize.webflow orientationchange.webflow load.webflow",
      $E = "scroll.webflow " + va;
    pe.resize = $r(ke, va);
    pe.scroll = $r(ke, $E);
    pe.redraw = $r();
    function $r(e, t) {
      var n = [], r = {};
      return r.up = Xe.throttle(function (i) {
        Xe.each(n, function (o) {
          o(i);
        });
      }),
        e && t && e.on(t, r.up),
        r.on = function (i) {
          typeof i == "function" && (Xe.contains(n, i) || n.push(i));
        },
        r.off = function (i) {
          if (!arguments.length) {
            n = [];
            return;
          }
          n = Xe.filter(n, function (o) {
            return o !== i;
          });
        },
        r;
    }
    pe.location = function (e) {
      window.location = e;
    };
    pe.env() && (pe.location = function () {});
    pe.ready = function () {
      Nn = !0, Yr ? QE() : Xe.each(wt, da), Xe.each(jr, da), pe.resize.up();
    };
    function da(e) {
      Ye(e) && e();
    }
    function QE() {
      Yr = !1, Xe.each(Ot, ga);
    }
    var Et;
    pe.load = function (e) {
      Et.then(e);
    };
    function ya() {
      Et && (Et.reject(), ke.off("load", Et.resolve)),
        Et = new ut.Deferred(),
        ke.on("load", Et.resolve);
    }
    pe.destroy = function (e) {
      e = e || {},
        Yr = !0,
        ke.triggerHandler("__wf_destroy"),
        e.domready != null && (Nn = e.domready),
        Xe.each(Ot, ha),
        pe.resize.off(),
        pe.scroll.off(),
        pe.redraw.off(),
        wt = [],
        jr = [],
        Et.state() === "pending" && ya();
    };
    ut(pe.ready);
    ya();
    ma.exports = window.Webflow = pe;
  });
  var Ta = f((AF, Ia) => {
    "use strict";
    var _a = Ue();
    _a.define(
      "brand",
      Ia.exports = function (e) {
        var t = {},
          n = document,
          r = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          l;
        t.ready = function () {
          var E = r.attr("data-wf-status"), T = r.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(T) && a.hostname !== T && (E = !0),
            E && !s &&
            (l = l || p(), d(), setTimeout(d, 500), e(n).off(u, v).on(u, v));
        };
        function v() {
          var E = n.fullScreen || n.mozFullScreen || n.webkitIsFullScreen ||
            n.msFullscreenElement || !!n.webkitFullscreenElement;
          e(l).attr("style", E ? "display: none !important;" : "");
        }
        function p() {
          var E = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs",
            ),
            T = e("<img>").attr(
              "src",
              "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg",
            ).attr("alt", "").css({ marginRight: "4px", width: "26px" }),
            b = e("<img>").attr(
              "src",
              "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg",
            ).attr("alt", "Made in Webflow");
          return E.append(T, b), E[0];
        }
        function d() {
          var E = i.children(o),
            T = E.length && E.get(0) === l,
            b = _a.env("editor");
          if (T) {
            b && E.remove();
            return;
          }
          E.length && E.remove(), b || i.append(l);
        }
        return t;
      },
    );
  });
  var Aa = f((OF, ba) => {
    "use strict";
    var ZE = Ue();
    ZE.define(
      "focus-visible",
      ba.exports = function () {
        function e(n) {
          var r = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(x) {
            return !!(x && x !== document && x.nodeName !== "HTML" &&
              x.nodeName !== "BODY" && "classList" in x &&
              "contains" in x.classList);
          }
          function u(x) {
            var D = x.type, F = x.tagName;
            return !!(F === "INPUT" && a[D] && !x.readOnly ||
              F === "TEXTAREA" && !x.readOnly || x.isContentEditable);
          }
          function l(x) {
            x.getAttribute("data-wf-focus-visible") ||
              x.setAttribute("data-wf-focus-visible", "true");
          }
          function v(x) {
            x.getAttribute("data-wf-focus-visible") &&
              x.removeAttribute("data-wf-focus-visible");
          }
          function p(x) {
            x.metaKey || x.altKey || x.ctrlKey ||
              (s(n.activeElement) && l(n.activeElement), r = !0);
          }
          function d() {
            r = !1;
          }
          function E(x) {
            s(x.target) && (r || u(x.target)) && l(x.target);
          }
          function T(x) {
            s(x.target) && x.target.hasAttribute("data-wf-focus-visible") &&
              (i = !0,
                window.clearTimeout(o),
                o = window.setTimeout(function () {
                  i = !1;
                }, 100),
                v(x.target));
          }
          function b() {
            document.visibilityState === "hidden" && (i && (r = !0), S());
          }
          function S() {
            document.addEventListener("mousemove", C),
              document.addEventListener("mousedown", C),
              document.addEventListener("mouseup", C),
              document.addEventListener("pointermove", C),
              document.addEventListener("pointerdown", C),
              document.addEventListener("pointerup", C),
              document.addEventListener("touchmove", C),
              document.addEventListener("touchstart", C),
              document.addEventListener("touchend", C);
          }
          function m() {
            document.removeEventListener("mousemove", C),
              document.removeEventListener("mousedown", C),
              document.removeEventListener("mouseup", C),
              document.removeEventListener("pointermove", C),
              document.removeEventListener("pointerdown", C),
              document.removeEventListener("pointerup", C),
              document.removeEventListener("touchmove", C),
              document.removeEventListener("touchstart", C),
              document.removeEventListener("touchend", C);
          }
          function C(x) {
            x.target.nodeName && x.target.nodeName.toLowerCase() === "html" ||
              (r = !1, m());
          }
          document.addEventListener("keydown", p, !0),
            document.addEventListener("mousedown", d, !0),
            document.addEventListener("pointerdown", d, !0),
            document.addEventListener("touchstart", d, !0),
            document.addEventListener("visibilitychange", b, !0),
            S(),
            n.addEventListener("focus", E, !0),
            n.addEventListener("blur", T, !0);
        }
        function t() {
          if (typeof document < "u") {
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
          }
        }
        return { ready: t };
      },
    );
  });
  var Sa = f((wF, wa) => {
    "use strict";
    var Oa = Ue();
    Oa.define(
      "focus",
      wa.exports = function () {
        var e = [], t = !1;
        function n(a) {
          t &&
            (a.preventDefault(),
              a.stopPropagation(),
              a.stopImmediatePropagation(),
              e.unshift(a));
        }
        function r(a) {
          var s = a.target, u = s.tagName;
          return /^a$/i.test(u) && s.href != null ||
            /^(button|textarea)$/i.test(u) && s.disabled !== !0 ||
            /^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled ||
            !/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex)) ||
            /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0;
        }
        function i(a) {
          r(a) && (t = !0,
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0;) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Oa.env.safari &&
            (document.addEventListener("mousedown", i, !0),
              document.addEventListener("mouseup", n, !0),
              document.addEventListener("click", n, !0));
        }
        return { ready: o };
      },
    );
  });
  var Ca = f((SF, Ra) => {
    "use strict";
    var Qr = window.jQuery,
      $e = {},
      Dn = [],
      xa = ".w-ix",
      Mn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            (t.__wf_intro = !0, Qr(t).triggerHandler($e.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            (t.__wf_intro = null, Qr(t).triggerHandler($e.types.OUTRO));
        },
      };
    $e.triggers = {};
    $e.types = { INTRO: "w-ix-intro" + xa, OUTRO: "w-ix-outro" + xa };
    $e.init = function () {
      for (var e = Dn.length, t = 0; t < e; t++) {
        var n = Dn[t];
        n[0](0, n[1]);
      }
      Dn = [], Qr.extend($e.triggers, Mn);
    };
    $e.async = function () {
      for (var e in Mn) {
        var t = Mn[e];
        Mn.hasOwnProperty(e) && ($e.triggers[e] = function (n, r) {
          Dn.push([t, r]);
        });
      }
    };
    $e.async();
    Ra.exports = $e;
  });
  var qn = f((xF, Na) => {
    "use strict";
    var Zr = Ca();
    function Pa(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var JE = window.jQuery,
      Fn = {},
      La = ".w-ix",
      ev = {
        reset: function (e, t) {
          Zr.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Zr.triggers.intro(e, t), Pa(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Zr.triggers.outro(e, t), Pa(t, "COMPONENT_INACTIVE");
        },
      };
    Fn.triggers = {};
    Fn.types = { INTRO: "w-ix-intro" + La, OUTRO: "w-ix-outro" + La };
    JE.extend(Fn.triggers, ev);
    Na.exports = Fn;
  });
  var Jr = f((RF, Da) => {
    var tv = typeof global == "object" && global && global.Object === Object &&
      global;
    Da.exports = tv;
  });
  var Ve = f((CF, Ma) => {
    var nv = Jr(),
      rv = typeof self == "object" && self && self.Object === Object && self,
      iv = nv || rv || Function("return this")();
    Ma.exports = iv;
  });
  var St = f((PF, Fa) => {
    var ov = Ve(), av = ov.Symbol;
    Fa.exports = av;
  });
  var ka = f((LF, Xa) => {
    var qa = St(),
      Ga = Object.prototype,
      sv = Ga.hasOwnProperty,
      uv = Ga.toString,
      tn = qa ? qa.toStringTag : void 0;
    function cv(e) {
      var t = sv.call(e, tn), n = e[tn];
      try {
        e[tn] = void 0;
        var r = !0;
      } catch {}
      var i = uv.call(e);
      return r && (t ? e[tn] = n : delete e[tn]), i;
    }
    Xa.exports = cv;
  });
  var Va = f((NF, Ua) => {
    var lv = Object.prototype, fv = lv.toString;
    function dv(e) {
      return fv.call(e);
    }
    Ua.exports = dv;
  });
  var ct = f((DF, Wa) => {
    var Ha = St(),
      pv = ka(),
      gv = Va(),
      hv = "[object Null]",
      Ev = "[object Undefined]",
      Ba = Ha ? Ha.toStringTag : void 0;
    function vv(e) {
      return e == null
        ? e === void 0 ? Ev : hv
        : Ba && Ba in Object(e)
        ? pv(e)
        : gv(e);
    }
    Wa.exports = vv;
  });
  var ei = f((MF, za) => {
    function yv(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    za.exports = yv;
  });
  var ti = f((FF, Ka) => {
    var mv = ei(), _v = mv(Object.getPrototypeOf, Object);
    Ka.exports = _v;
  });
  var rt = f((qF, ja) => {
    function Iv(e) {
      return e != null && typeof e == "object";
    }
    ja.exports = Iv;
  });
  var ni = f((GF, $a) => {
    var Tv = ct(),
      bv = ti(),
      Av = rt(),
      Ov = "[object Object]",
      wv = Function.prototype,
      Sv = Object.prototype,
      Ya = wv.toString,
      xv = Sv.hasOwnProperty,
      Rv = Ya.call(Object);
    function Cv(e) {
      if (!Av(e) || Tv(e) != Ov) return !1;
      var t = bv(e);
      if (t === null) return !0;
      var n = xv.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && Ya.call(n) == Rv;
    }
    $a.exports = Cv;
  });
  var Qa = f((ri) => {
    "use strict";
    Object.defineProperty(ri, "__esModule", { value: !0 });
    ri.default = Pv;
    function Pv(e) {
      var t, n = e.Symbol;
      return typeof n == "function"
        ? n.observable
          ? t = n.observable
          : (t = n("observable"), n.observable = t)
        : t = "@@observable",
        t;
    }
  });
  var Za = f((oi, ii) => {
    "use strict";
    Object.defineProperty(oi, "__esModule", { value: !0 });
    var Lv = Qa(), Nv = Dv(Lv);
    function Dv(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var xt;
    typeof self < "u"
      ? xt = self
      : typeof window < "u"
      ? xt = window
      : typeof global < "u"
      ? xt = global
      : typeof ii < "u"
      ? xt = ii
      : xt = Function("return this")();
    var Mv = (0, Nv.default)(xt);
    oi.default = Mv;
  });
  var ai = f((nn) => {
    "use strict";
    nn.__esModule = !0;
    nn.ActionTypes = void 0;
    nn.default = ns;
    var Fv = ni(), qv = ts(Fv), Gv = Za(), Ja = ts(Gv);
    function ts(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var es = nn.ActionTypes = { INIT: "@@redux/INIT" };
    function ns(e, t, n) {
      var r;
      if (
        typeof t == "function" && typeof n > "u" && (n = t, t = void 0),
          typeof n < "u"
      ) {
        if (typeof n != "function") {
          throw new Error("Expected the enhancer to be a function.");
        }
        return n(ns)(e, t);
      }
      if (typeof e != "function") {
        throw new Error("Expected the reducer to be a function.");
      }
      var i = e, o = t, a = [], s = a, u = !1;
      function l() {
        s === a && (s = a.slice());
      }
      function v() {
        return o;
      }
      function p(b) {
        if (typeof b != "function") {
          throw new Error("Expected listener to be a function.");
        }
        var S = !0;
        return l(), s.push(b), function () {
          if (S) {
            S = !1, l();
            var C = s.indexOf(b);
            s.splice(C, 1);
          }
        };
      }
      function d(b) {
        if (!(0, qv.default)(b)) {
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions.",
          );
        }
        if (typeof b.type > "u") {
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?',
          );
        }
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          u = !0, o = i(o, b);
        } finally {
          u = !1;
        }
        for (var S = a = s, m = 0; m < S.length; m++) S[m]();
        return b;
      }
      function E(b) {
        if (typeof b != "function") {
          throw new Error("Expected the nextReducer to be a function.");
        }
        i = b, d({ type: es.INIT });
      }
      function T() {
        var b, S = p;
        return b = {
          subscribe: function (C) {
            if (typeof C != "object") {
              throw new TypeError("Expected the observer to be an object.");
            }
            function x() {
              C.next && C.next(v());
            }
            x();
            var D = S(x);
            return { unsubscribe: D };
          },
        },
          b[Ja.default] = function () {
            return this;
          },
          b;
      }
      return d({ type: es.INIT }),
        r = { dispatch: d, subscribe: p, getState: v, replaceReducer: E },
        r[Ja.default] = T,
        r;
    }
  });
  var ui = f((si) => {
    "use strict";
    si.__esModule = !0;
    si.default = Xv;
    function Xv(e) {
      typeof console < "u" && typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var os = f((ci) => {
    "use strict";
    ci.__esModule = !0;
    ci.default = Bv;
    var rs = ai(), kv = ni(), VF = is(kv), Uv = ui(), HF = is(Uv);
    function is(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Vv(e, t) {
      var n = t && t.type, r = n && '"' + n.toString() + '"' || "an action";
      return "Given action " + r + ', reducer "' + e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.';
    }
    function Hv(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t], r = n(void 0, { type: rs.ActionTypes.INIT });
        if (typeof r > "u") {
          throw new Error(
            'Reducer "' + t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.',
          );
        }
        var i = "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(void 0, { type: i }) > "u") {
          throw new Error(
            'Reducer "' + t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " + rs.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.",
          );
        }
      });
    }
    function Bv(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        typeof e[i] == "function" && (n[i] = e[i]);
      }
      var o = Object.keys(n);
      if (!1) { var a; }
      var s;
      try {
        Hv(n);
      } catch (u) {
        s = u;
      }
      return function () {
        var l = arguments.length <= 0 || arguments[0] === void 0
            ? {}
            : arguments[0],
          v = arguments[1];
        if (s) throw s;
        if (!1) { var p; }
        for (var d = !1, E = {}, T = 0; T < o.length; T++) {
          var b = o[T], S = n[b], m = l[b], C = S(m, v);
          if (typeof C > "u") {
            var x = Vv(b, v);
            throw new Error(x);
          }
          E[b] = C, d = d || C !== m;
        }
        return d ? E : l;
      };
    }
  });
  var ss = f((li) => {
    "use strict";
    li.__esModule = !0;
    li.default = Wv;
    function as(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Wv(e, t) {
      if (typeof e == "function") return as(e, t);
      if (typeof e != "object" || e === null) {
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?',
        );
      }
      for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
        var o = n[i], a = e[o];
        typeof a == "function" && (r[o] = as(a, t));
      }
      return r;
    }
  });
  var di = f((fi) => {
    "use strict";
    fi.__esModule = !0;
    fi.default = zv;
    function zv() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
        t[n] = arguments[n];
      }
      if (t.length === 0) {
        return function (o) {
          return o;
        };
      }
      if (t.length === 1) return t[0];
      var r = t[t.length - 1], i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, r.apply(void 0, arguments));
      };
    }
  });
  var us = f((pi) => {
    "use strict";
    pi.__esModule = !0;
    var Kv = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
      }
      return e;
    };
    pi.default = Qv;
    var jv = di(), Yv = $v(jv);
    function $v(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Qv() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
        t[n] = arguments[n];
      }
      return function (r) {
        return function (i, o, a) {
          var s = r(i, o, a),
            u = s.dispatch,
            l = [],
            v = {
              getState: s.getState,
              dispatch: function (d) {
                return u(d);
              },
            };
          return l = t.map(function (p) {
            return p(v);
          }),
            u = Yv.default.apply(void 0, l)(s.dispatch),
            Kv({}, s, { dispatch: u });
        };
      };
    }
  });
  var gi = f((Fe) => {
    "use strict";
    Fe.__esModule = !0;
    Fe.compose =
      Fe.applyMiddleware =
      Fe.bindActionCreators =
      Fe.combineReducers =
      Fe.createStore =
        void 0;
    var Zv = ai(),
      Jv = Rt(Zv),
      ey = os(),
      ty = Rt(ey),
      ny = ss(),
      ry = Rt(ny),
      iy = us(),
      oy = Rt(iy),
      ay = di(),
      sy = Rt(ay),
      uy = ui(),
      jF = Rt(uy);
    function Rt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Fe.createStore = Jv.default;
    Fe.combineReducers = ty.default;
    Fe.bindActionCreators = ry.default;
    Fe.applyMiddleware = oy.default;
    Fe.compose = sy.default;
  });
  var He,
    hi,
    Qe,
    cy,
    ly,
    Gn,
    fy,
    Ei = ve(() => {
      "use strict";
      He = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      },
        hi = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        Qe = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        cy = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        ly = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        Gn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        fy = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    });
  var xe,
    dy,
    Xn = ve(() => {
      "use strict";
      xe = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      },
        dy = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    });
  var py,
    cs = ve(() => {
      "use strict";
      py = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var gy,
    hy,
    Ey,
    vy,
    yy,
    my,
    _y,
    vi,
    ls = ve(() => {
      "use strict";
      Xn();
      ({
        TRANSFORM_MOVE: gy,
        TRANSFORM_SCALE: hy,
        TRANSFORM_ROTATE: Ey,
        TRANSFORM_SKEW: vy,
        STYLE_SIZE: yy,
        STYLE_FILTER: my,
        STYLE_FONT_VARIATION: _y,
      } = xe),
        vi = {
          [gy]: !0,
          [hy]: !0,
          [Ey]: !0,
          [vy]: !0,
          [yy]: !0,
          [my]: !0,
          [_y]: !0,
        };
    });
  var Te = {};
  Le(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => qy,
    IX2_ANIMATION_FRAME_CHANGED: () => Py,
    IX2_CLEAR_REQUESTED: () => xy,
    IX2_ELEMENT_STATE_CHANGED: () => Fy,
    IX2_EVENT_LISTENER_ADDED: () => Ry,
    IX2_EVENT_STATE_CHANGED: () => Cy,
    IX2_INSTANCE_ADDED: () => Ny,
    IX2_INSTANCE_REMOVED: () => My,
    IX2_INSTANCE_STARTED: () => Dy,
    IX2_MEDIA_QUERIES_DEFINED: () => Xy,
    IX2_PARAMETER_CHANGED: () => Ly,
    IX2_PLAYBACK_REQUESTED: () => wy,
    IX2_PREVIEW_REQUESTED: () => Oy,
    IX2_RAW_DATA_IMPORTED: () => Iy,
    IX2_SESSION_INITIALIZED: () => Ty,
    IX2_SESSION_STARTED: () => by,
    IX2_SESSION_STOPPED: () => Ay,
    IX2_STOP_REQUESTED: () => Sy,
    IX2_TEST_FRAME_RENDERED: () => ky,
    IX2_VIEWPORT_WIDTH_CHANGED: () => Gy,
  });
  var Iy,
    Ty,
    by,
    Ay,
    Oy,
    wy,
    Sy,
    xy,
    Ry,
    Cy,
    Py,
    Ly,
    Ny,
    Dy,
    My,
    Fy,
    qy,
    Gy,
    Xy,
    ky,
    fs = ve(() => {
      "use strict";
      Iy = "IX2_RAW_DATA_IMPORTED",
        Ty = "IX2_SESSION_INITIALIZED",
        by = "IX2_SESSION_STARTED",
        Ay = "IX2_SESSION_STOPPED",
        Oy = "IX2_PREVIEW_REQUESTED",
        wy = "IX2_PLAYBACK_REQUESTED",
        Sy = "IX2_STOP_REQUESTED",
        xy = "IX2_CLEAR_REQUESTED",
        Ry = "IX2_EVENT_LISTENER_ADDED",
        Cy = "IX2_EVENT_STATE_CHANGED",
        Py = "IX2_ANIMATION_FRAME_CHANGED",
        Ly = "IX2_PARAMETER_CHANGED",
        Ny = "IX2_INSTANCE_ADDED",
        Dy = "IX2_INSTANCE_STARTED",
        My = "IX2_INSTANCE_REMOVED",
        Fy = "IX2_ELEMENT_STATE_CHANGED",
        qy = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        Gy = "IX2_VIEWPORT_WIDTH_CHANGED",
        Xy = "IX2_MEDIA_QUERIES_DEFINED",
        ky = "IX2_TEST_FRAME_RENDERED";
    });
  var Oe = {};
  Le(Oe, {
    ABSTRACT_NODE: () => Gm,
    AUTO: () => Sm,
    BACKGROUND: () => Im,
    BACKGROUND_COLOR: () => _m,
    BAR_DELIMITER: () => Cm,
    BORDER_COLOR: () => Tm,
    BOUNDARY_SELECTOR: () => Wy,
    CHILDREN: () => Pm,
    COLON_DELIMITER: () => Rm,
    COLOR: () => bm,
    COMMA_DELIMITER: () => xm,
    CONFIG_UNIT: () => Jy,
    CONFIG_VALUE: () => Yy,
    CONFIG_X_UNIT: () => $y,
    CONFIG_X_VALUE: () => zy,
    CONFIG_Y_UNIT: () => Qy,
    CONFIG_Y_VALUE: () => Ky,
    CONFIG_Z_UNIT: () => Zy,
    CONFIG_Z_VALUE: () => jy,
    DISPLAY: () => Am,
    FILTER: () => Em,
    FLEX: () => Om,
    FONT_VARIATION_SETTINGS: () => vm,
    HEIGHT: () => mm,
    HTML_ELEMENT: () => Fm,
    IMMEDIATE_CHILDREN: () => Lm,
    IX2_ID_DELIMITER: () => Uy,
    OPACITY: () => hm,
    PARENT: () => Dm,
    PLAIN_OBJECT: () => qm,
    PRESERVE_3D: () => Mm,
    RENDER_GENERAL: () => km,
    RENDER_PLUGIN: () => Vm,
    RENDER_STYLE: () => Um,
    RENDER_TRANSFORM: () => Xm,
    ROTATE_X: () => cm,
    ROTATE_Y: () => lm,
    ROTATE_Z: () => fm,
    SCALE_3D: () => um,
    SCALE_X: () => om,
    SCALE_Y: () => am,
    SCALE_Z: () => sm,
    SIBLINGS: () => Nm,
    SKEW: () => dm,
    SKEW_X: () => pm,
    SKEW_Y: () => gm,
    TRANSFORM: () => em,
    TRANSLATE_3D: () => im,
    TRANSLATE_X: () => tm,
    TRANSLATE_Y: () => nm,
    TRANSLATE_Z: () => rm,
    WF_PAGE: () => Vy,
    WIDTH: () => ym,
    WILL_CHANGE: () => wm,
    W_MOD_IX: () => By,
    W_MOD_JS: () => Hy,
  });
  var Uy,
    Vy,
    Hy,
    By,
    Wy,
    zy,
    Ky,
    jy,
    Yy,
    $y,
    Qy,
    Zy,
    Jy,
    em,
    tm,
    nm,
    rm,
    im,
    om,
    am,
    sm,
    um,
    cm,
    lm,
    fm,
    dm,
    pm,
    gm,
    hm,
    Em,
    vm,
    ym,
    mm,
    _m,
    Im,
    Tm,
    bm,
    Am,
    Om,
    wm,
    Sm,
    xm,
    Rm,
    Cm,
    Pm,
    Lm,
    Nm,
    Dm,
    Mm,
    Fm,
    qm,
    Gm,
    Xm,
    km,
    Um,
    Vm,
    ds = ve(() => {
      "use strict";
      Uy = "|",
        Vy = "data-wf-page",
        Hy = "w-mod-js",
        By = "w-mod-ix",
        Wy = ".w-dyn-item",
        zy = "xValue",
        Ky = "yValue",
        jy = "zValue",
        Yy = "value",
        $y = "xUnit",
        Qy = "yUnit",
        Zy = "zUnit",
        Jy = "unit",
        em = "transform",
        tm = "translateX",
        nm = "translateY",
        rm = "translateZ",
        im = "translate3d",
        om = "scaleX",
        am = "scaleY",
        sm = "scaleZ",
        um = "scale3d",
        cm = "rotateX",
        lm = "rotateY",
        fm = "rotateZ",
        dm = "skew",
        pm = "skewX",
        gm = "skewY",
        hm = "opacity",
        Em = "filter",
        vm = "font-variation-settings",
        ym = "width",
        mm = "height",
        _m = "backgroundColor",
        Im = "background",
        Tm = "borderColor",
        bm = "color",
        Am = "display",
        Om = "flex",
        wm = "willChange",
        Sm = "AUTO",
        xm = ",",
        Rm = ":",
        Cm = "|",
        Pm = "CHILDREN",
        Lm = "IMMEDIATE_CHILDREN",
        Nm = "SIBLINGS",
        Dm = "PARENT",
        Mm = "preserve-3d",
        Fm = "HTML_ELEMENT",
        qm = "PLAIN_OBJECT",
        Gm = "ABSTRACT_NODE",
        Xm = "RENDER_TRANSFORM",
        km = "RENDER_GENERAL",
        Um = "RENDER_STYLE",
        Vm = "RENDER_PLUGIN";
    });
  var ps = {};
  Le(ps, {
    ActionAppliesTo: () => dy,
    ActionTypeConsts: () => xe,
    EventAppliesTo: () => hi,
    EventBasedOn: () => Qe,
    EventContinuousMouseAxes: () => cy,
    EventLimitAffectedElements: () => ly,
    EventTypeConsts: () => He,
    IX2EngineActionTypes: () => Te,
    IX2EngineConstants: () => Oe,
    InteractionTypeConsts: () => py,
    QuickEffectDirectionConsts: () => fy,
    QuickEffectIds: () => Gn,
    ReducedMotionTypes: () => vi,
  });
  var Ne = ve(() => {
    "use strict";
    Ei();
    Xn();
    cs();
    ls();
    fs();
    ds();
    Xn();
    Ei();
  });
  var Hm,
    gs,
    hs = ve(() => {
      "use strict";
      Ne();
      ({ IX2_RAW_DATA_IMPORTED: Hm } = Te),
        gs = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case Hm:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        };
    });
  var Ct = f((me) => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    var Bm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
        return typeof e;
      }
      : function (e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol &&
            e !== Symbol.prototype
          ? "symbol"
          : typeof e;
      };
    me.clone = Un;
    me.addLast = ys;
    me.addFirst = ms;
    me.removeLast = _s;
    me.removeFirst = Is;
    me.insert = Ts;
    me.removeAt = bs;
    me.replaceAt = As;
    me.getIn = Vn;
    me.set = Hn;
    me.setIn = Bn;
    me.update = ws;
    me.updateIn = Ss;
    me.merge = xs;
    me.mergeDeep = Rs;
    me.mergeIn = Cs;
    me.omit = Ps;
    me.addDefaults = Ls;
    var Es = "INVALID_ARGS";
    function vs(e) {
      throw new Error(e);
    }
    function yi(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var Wm = {}.hasOwnProperty;
    function Un(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = yi(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        n[i] = e[i];
      }
      return n;
    }
    function De(e, t, n) {
      var r = n;
      r == null && vs(Es);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      ) a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var l = a[u];
        if (l != null) {
          var v = yi(l);
          if (v.length) {
            for (var p = 0; p <= v.length; p++) {
              var d = v[p];
              if (!(e && r[d] !== void 0)) {
                var E = l[d];
                t && kn(r[d]) && kn(E) && (E = De(e, t, r[d], E)),
                  !(E === void 0 || E === r[d]) &&
                  (i || (i = !0, r = Un(r)), r[d] = E);
              }
            }
          }
        }
      }
      return r;
    }
    function kn(e) {
      var t = typeof e > "u" ? "undefined" : Bm(e);
      return e != null && (t === "object" || t === "function");
    }
    function ys(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function ms(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function _s(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Is(e) {
      return e.length ? e.slice(1) : e;
    }
    function Ts(e, t, n) {
      return e.slice(0, t).concat(Array.isArray(n) ? n : [n]).concat(
        e.slice(t),
      );
    }
    function bs(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function As(e, t, n) {
      if (e[t] === n) return e;
      for (var r = e.length, i = Array(r), o = 0; o < r; o++) i[o] = e[o];
      return i[t] = n, i;
    }
    function Vn(e, t) {
      if (!Array.isArray(t) && vs(Es), e != null) {
        for (var n = e, r = 0; r < t.length; r++) {
          var i = t[r];
          if (n = n?.[i], n === void 0) return n;
        }
        return n;
      }
    }
    function Hn(e, t, n) {
      var r = typeof t == "number" ? [] : {}, i = e ?? r;
      if (i[t] === n) return i;
      var o = Un(i);
      return o[t] = n, o;
    }
    function Os(e, t, n, r) {
      var i = void 0, o = t[r];
      if (r === t.length - 1) i = n;
      else {
        var a = kn(e) && kn(e[o])
          ? e[o]
          : typeof t[r + 1] == "number"
          ? []
          : {};
        i = Os(a, t, n, r + 1);
      }
      return Hn(e, o, i);
    }
    function Bn(e, t, n) {
      return t.length ? Os(e, t, n, 0) : n;
    }
    function ws(e, t, n) {
      var r = e?.[t], i = n(r);
      return Hn(e, t, i);
    }
    function Ss(e, t, n) {
      var r = Vn(e, t), i = n(r);
      return Bn(e, t, i);
    }
    function xs(e, t, n, r, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      ) s[u - 6] = arguments[u];
      return s.length
        ? De.call.apply(De, [null, !1, !1, e, t, n, r, i, o].concat(s))
        : De(!1, !1, e, t, n, r, i, o);
    }
    function Rs(e, t, n, r, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      ) s[u - 6] = arguments[u];
      return s.length
        ? De.call.apply(De, [null, !1, !0, e, t, n, r, i, o].concat(s))
        : De(!1, !0, e, t, n, r, i, o);
    }
    function Cs(e, t, n, r, i, o, a) {
      var s = Vn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          l = arguments.length,
          v = Array(l > 7 ? l - 7 : 0),
          p = 7;
        p < l;
        p++
      ) v[p - 7] = arguments[p];
      return v.length
        ? u = De.call.apply(De, [null, !1, !1, s, n, r, i, o, a].concat(v))
        : u = De(!1, !1, s, n, r, i, o, a),
        Bn(e, t, u);
    }
    function Ps(e, t) {
      for (
        var n = Array.isArray(t) ? t : [t], r = !1, i = 0;
        i < n.length;
        i++
      ) {
        if (Wm.call(e, n[i])) {
          r = !0;
          break;
        }
      }
      if (!r) return e;
      for (var o = {}, a = yi(e), s = 0; s < a.length; s++) {
        var u = a[s];
        n.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Ls(e, t, n, r, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      ) s[u - 6] = arguments[u];
      return s.length
        ? De.call.apply(De, [null, !0, !1, e, t, n, r, i, o].concat(s))
        : De(!0, !1, e, t, n, r, i, o);
    }
    var zm = {
      clone: Un,
      addLast: ys,
      addFirst: ms,
      removeLast: _s,
      removeFirst: Is,
      insert: Ts,
      removeAt: bs,
      replaceAt: As,
      getIn: Vn,
      set: Hn,
      setIn: Bn,
      update: ws,
      updateIn: Ss,
      merge: xs,
      mergeDeep: Rs,
      mergeIn: Cs,
      omit: Ps,
      addDefaults: Ls,
    };
    me.default = zm;
  });
  var Ds,
    Km,
    jm,
    Ym,
    $m,
    Qm,
    Ns,
    Ms,
    Fs = ve(() => {
      "use strict";
      Ne();
      Ds = fe(Ct()),
        {
          IX2_PREVIEW_REQUESTED: Km,
          IX2_PLAYBACK_REQUESTED: jm,
          IX2_STOP_REQUESTED: Ym,
          IX2_CLEAR_REQUESTED: $m,
        } = Te,
        Qm = { preview: {}, playback: {}, stop: {}, clear: {} },
        Ns = Object.create(null, {
          [Km]: { value: "preview" },
          [jm]: { value: "playback" },
          [Ym]: { value: "stop" },
          [$m]: { value: "clear" },
        }),
        Ms = (e = Qm, t) => {
          if (t.type in Ns) {
            let n = [Ns[t.type]];
            return (0, Ds.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    });
  var Re,
    Zm,
    Jm,
    e_,
    t_,
    n_,
    r_,
    i_,
    o_,
    a_,
    s_,
    qs,
    u_,
    Gs,
    Xs = ve(() => {
      "use strict";
      Ne();
      Re = fe(Ct()),
        {
          IX2_SESSION_INITIALIZED: Zm,
          IX2_SESSION_STARTED: Jm,
          IX2_TEST_FRAME_RENDERED: e_,
          IX2_SESSION_STOPPED: t_,
          IX2_EVENT_LISTENER_ADDED: n_,
          IX2_EVENT_STATE_CHANGED: r_,
          IX2_ANIMATION_FRAME_CHANGED: i_,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: o_,
          IX2_VIEWPORT_WIDTH_CHANGED: a_,
          IX2_MEDIA_QUERIES_DEFINED: s_,
        } = Te,
        qs = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        u_ = 20,
        Gs = (e = qs, t) => {
          switch (t.type) {
            case Zm: {
              let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
              return (0, Re.merge)(e, {
                hasBoundaryNodes: n,
                reducedMotion: r,
              });
            }
            case Jm:
              return (0, Re.set)(e, "active", !0);
            case e_: {
              let { payload: { step: n = u_ } } = t;
              return (0, Re.set)(e, "tick", e.tick + n);
            }
            case t_:
              return qs;
            case i_: {
              let { payload: { now: n } } = t;
              return (0, Re.set)(e, "tick", n);
            }
            case n_: {
              let n = (0, Re.addLast)(e.eventListeners, t.payload);
              return (0, Re.set)(e, "eventListeners", n);
            }
            case r_: {
              let { stateKey: n, newState: r } = t.payload;
              return (0, Re.setIn)(e, ["eventState", n], r);
            }
            case o_: {
              let { actionListId: n, isPlaying: r } = t.payload;
              return (0, Re.setIn)(e, ["playbackState", n], r);
            }
            case a_: {
              let { width: n, mediaQueries: r } = t.payload,
                i = r.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: l } = r[a];
                if (n >= u && n <= l) {
                  o = s;
                  break;
                }
              }
              return (0, Re.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case s_:
              return (0, Re.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    });
  var Us = f((g2, ks) => {
    function c_() {
      this.__data__ = [], this.size = 0;
    }
    ks.exports = c_;
  });
  var Wn = f((h2, Vs) => {
    function l_(e, t) {
      return e === t || e !== e && t !== t;
    }
    Vs.exports = l_;
  });
  var rn = f((E2, Hs) => {
    var f_ = Wn();
    function d_(e, t) {
      for (var n = e.length; n--;) if (f_(e[n][0], t)) return n;
      return -1;
    }
    Hs.exports = d_;
  });
  var Ws = f((v2, Bs) => {
    var p_ = rn(), g_ = Array.prototype, h_ = g_.splice;
    function E_(e) {
      var t = this.__data__, n = p_(t, e);
      if (n < 0) return !1;
      var r = t.length - 1;
      return n == r ? t.pop() : h_.call(t, n, 1), --this.size, !0;
    }
    Bs.exports = E_;
  });
  var Ks = f((y2, zs) => {
    var v_ = rn();
    function y_(e) {
      var t = this.__data__, n = v_(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    zs.exports = y_;
  });
  var Ys = f((m2, js) => {
    var m_ = rn();
    function __(e) {
      return m_(this.__data__, e) > -1;
    }
    js.exports = __;
  });
  var Qs = f((_2, $s) => {
    var I_ = rn();
    function T_(e, t) {
      var n = this.__data__, r = I_(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
    }
    $s.exports = T_;
  });
  var on = f((I2, Zs) => {
    var b_ = Us(), A_ = Ws(), O_ = Ks(), w_ = Ys(), S_ = Qs();
    function Pt(e) {
      var t = -1, n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Pt.prototype.clear = b_;
    Pt.prototype.delete = A_;
    Pt.prototype.get = O_;
    Pt.prototype.has = w_;
    Pt.prototype.set = S_;
    Zs.exports = Pt;
  });
  var eu = f((T2, Js) => {
    var x_ = on();
    function R_() {
      this.__data__ = new x_(), this.size = 0;
    }
    Js.exports = R_;
  });
  var nu = f((b2, tu) => {
    function C_(e) {
      var t = this.__data__, n = t.delete(e);
      return this.size = t.size, n;
    }
    tu.exports = C_;
  });
  var iu = f((A2, ru) => {
    function P_(e) {
      return this.__data__.get(e);
    }
    ru.exports = P_;
  });
  var au = f((O2, ou) => {
    function L_(e) {
      return this.__data__.has(e);
    }
    ou.exports = L_;
  });
  var Ze = f((w2, su) => {
    function N_(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    su.exports = N_;
  });
  var mi = f((S2, uu) => {
    var D_ = ct(),
      M_ = Ze(),
      F_ = "[object AsyncFunction]",
      q_ = "[object Function]",
      G_ = "[object GeneratorFunction]",
      X_ = "[object Proxy]";
    function k_(e) {
      if (!M_(e)) return !1;
      var t = D_(e);
      return t == q_ || t == G_ || t == F_ || t == X_;
    }
    uu.exports = k_;
  });
  var lu = f((x2, cu) => {
    var U_ = Ve(), V_ = U_["__core-js_shared__"];
    cu.exports = V_;
  });
  var pu = f((R2, du) => {
    var _i = lu(),
      fu = function () {
        var e = /[^.]+$/.exec(_i && _i.keys && _i.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }();
    function H_(e) {
      return !!fu && fu in e;
    }
    du.exports = H_;
  });
  var Ii = f((C2, gu) => {
    var B_ = Function.prototype, W_ = B_.toString;
    function z_(e) {
      if (e != null) {
        try {
          return W_.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    gu.exports = z_;
  });
  var Eu = f((P2, hu) => {
    var K_ = mi(),
      j_ = pu(),
      Y_ = Ze(),
      $_ = Ii(),
      Q_ = /[\\^$.*+?()[\]{}|]/g,
      Z_ = /^\[object .+?Constructor\]$/,
      J_ = Function.prototype,
      eI = Object.prototype,
      tI = J_.toString,
      nI = eI.hasOwnProperty,
      rI = RegExp(
        "^" +
          tI.call(nI).replace(Q_, "\\$&").replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) + "$",
      );
    function iI(e) {
      if (!Y_(e) || j_(e)) return !1;
      var t = K_(e) ? rI : Z_;
      return t.test($_(e));
    }
    hu.exports = iI;
  });
  var yu = f((L2, vu) => {
    function oI(e, t) {
      return e?.[t];
    }
    vu.exports = oI;
  });
  var lt = f((N2, mu) => {
    var aI = Eu(), sI = yu();
    function uI(e, t) {
      var n = sI(e, t);
      return aI(n) ? n : void 0;
    }
    mu.exports = uI;
  });
  var zn = f((D2, _u) => {
    var cI = lt(), lI = Ve(), fI = cI(lI, "Map");
    _u.exports = fI;
  });
  var an = f((M2, Iu) => {
    var dI = lt(), pI = dI(Object, "create");
    Iu.exports = pI;
  });
  var Au = f((F2, bu) => {
    var Tu = an();
    function gI() {
      this.__data__ = Tu ? Tu(null) : {}, this.size = 0;
    }
    bu.exports = gI;
  });
  var wu = f((q2, Ou) => {
    function hI(e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t;
    }
    Ou.exports = hI;
  });
  var xu = f((G2, Su) => {
    var EI = an(),
      vI = "__lodash_hash_undefined__",
      yI = Object.prototype,
      mI = yI.hasOwnProperty;
    function _I(e) {
      var t = this.__data__;
      if (EI) {
        var n = t[e];
        return n === vI ? void 0 : n;
      }
      return mI.call(t, e) ? t[e] : void 0;
    }
    Su.exports = _I;
  });
  var Cu = f((X2, Ru) => {
    var II = an(), TI = Object.prototype, bI = TI.hasOwnProperty;
    function AI(e) {
      var t = this.__data__;
      return II ? t[e] !== void 0 : bI.call(t, e);
    }
    Ru.exports = AI;
  });
  var Lu = f((k2, Pu) => {
    var OI = an(), wI = "__lodash_hash_undefined__";
    function SI(e, t) {
      var n = this.__data__;
      return this.size += this.has(e) ? 0 : 1,
        n[e] = OI && t === void 0 ? wI : t,
        this;
    }
    Pu.exports = SI;
  });
  var Du = f((U2, Nu) => {
    var xI = Au(), RI = wu(), CI = xu(), PI = Cu(), LI = Lu();
    function Lt(e) {
      var t = -1, n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Lt.prototype.clear = xI;
    Lt.prototype.delete = RI;
    Lt.prototype.get = CI;
    Lt.prototype.has = PI;
    Lt.prototype.set = LI;
    Nu.exports = Lt;
  });
  var qu = f((V2, Fu) => {
    var Mu = Du(), NI = on(), DI = zn();
    function MI() {
      this.size = 0,
        this.__data__ = {
          hash: new Mu(),
          map: new (DI || NI)(),
          string: new Mu(),
        };
    }
    Fu.exports = MI;
  });
  var Xu = f((H2, Gu) => {
    function FI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Gu.exports = FI;
  });
  var sn = f((B2, ku) => {
    var qI = Xu();
    function GI(e, t) {
      var n = e.__data__;
      return qI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    ku.exports = GI;
  });
  var Vu = f((W2, Uu) => {
    var XI = sn();
    function kI(e) {
      var t = XI(this, e).delete(e);
      return this.size -= t ? 1 : 0, t;
    }
    Uu.exports = kI;
  });
  var Bu = f((z2, Hu) => {
    var UI = sn();
    function VI(e) {
      return UI(this, e).get(e);
    }
    Hu.exports = VI;
  });
  var zu = f((K2, Wu) => {
    var HI = sn();
    function BI(e) {
      return HI(this, e).has(e);
    }
    Wu.exports = BI;
  });
  var ju = f((j2, Ku) => {
    var WI = sn();
    function zI(e, t) {
      var n = WI(this, e), r = n.size;
      return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
    }
    Ku.exports = zI;
  });
  var Kn = f((Y2, Yu) => {
    var KI = qu(), jI = Vu(), YI = Bu(), $I = zu(), QI = ju();
    function Nt(e) {
      var t = -1, n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Nt.prototype.clear = KI;
    Nt.prototype.delete = jI;
    Nt.prototype.get = YI;
    Nt.prototype.has = $I;
    Nt.prototype.set = QI;
    Yu.exports = Nt;
  });
  var Qu = f(($2, $u) => {
    var ZI = on(), JI = zn(), eT = Kn(), tT = 200;
    function nT(e, t) {
      var n = this.__data__;
      if (n instanceof ZI) {
        var r = n.__data__;
        if (!JI || r.length < tT - 1) {
          return r.push([e, t]), this.size = ++n.size, this;
        }
        n = this.__data__ = new eT(r);
      }
      return n.set(e, t), this.size = n.size, this;
    }
    $u.exports = nT;
  });
  var Ti = f((Q2, Zu) => {
    var rT = on(), iT = eu(), oT = nu(), aT = iu(), sT = au(), uT = Qu();
    function Dt(e) {
      var t = this.__data__ = new rT(e);
      this.size = t.size;
    }
    Dt.prototype.clear = iT;
    Dt.prototype.delete = oT;
    Dt.prototype.get = aT;
    Dt.prototype.has = sT;
    Dt.prototype.set = uT;
    Zu.exports = Dt;
  });
  var ec = f((Z2, Ju) => {
    var cT = "__lodash_hash_undefined__";
    function lT(e) {
      return this.__data__.set(e, cT), this;
    }
    Ju.exports = lT;
  });
  var nc = f((J2, tc) => {
    function fT(e) {
      return this.__data__.has(e);
    }
    tc.exports = fT;
  });
  var ic = f((e1, rc) => {
    var dT = Kn(), pT = ec(), gT = nc();
    function jn(e) {
      var t = -1, n = e == null ? 0 : e.length;
      for (this.__data__ = new dT(); ++t < n;) this.add(e[t]);
    }
    jn.prototype.add = jn.prototype.push = pT;
    jn.prototype.has = gT;
    rc.exports = jn;
  });
  var ac = f((t1, oc) => {
    function hT(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) {
        if (t(e[n], n, e)) return !0;
      }
      return !1;
    }
    oc.exports = hT;
  });
  var uc = f((n1, sc) => {
    function ET(e, t) {
      return e.has(t);
    }
    sc.exports = ET;
  });
  var bi = f((r1, cc) => {
    var vT = ic(), yT = ac(), mT = uc(), _T = 1, IT = 2;
    function TT(e, t, n, r, i, o) {
      var a = n & _T, s = e.length, u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var l = o.get(e), v = o.get(t);
      if (l && v) return l == t && v == e;
      var p = -1, d = !0, E = n & IT ? new vT() : void 0;
      for (o.set(e, t), o.set(t, e); ++p < s;) {
        var T = e[p], b = t[p];
        if (r) { var S = a ? r(b, T, p, t, e, o) : r(T, b, p, e, t, o); }
        if (S !== void 0) {
          if (S) continue;
          d = !1;
          break;
        }
        if (E) {
          if (
            !yT(t, function (m, C) {
              if (!mT(E, C) && (T === m || i(T, m, n, r, o))) return E.push(C);
            })
          ) {
            d = !1;
            break;
          }
        } else if (!(T === b || i(T, b, n, r, o))) {
          d = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), d;
    }
    cc.exports = TT;
  });
  var fc = f((i1, lc) => {
    var bT = Ve(), AT = bT.Uint8Array;
    lc.exports = AT;
  });
  var pc = f((o1, dc) => {
    function OT(e) {
      var t = -1, n = Array(e.size);
      return e.forEach(function (r, i) {
        n[++t] = [i, r];
      }),
        n;
    }
    dc.exports = OT;
  });
  var hc = f((a1, gc) => {
    function wT(e) {
      var t = -1, n = Array(e.size);
      return e.forEach(function (r) {
        n[++t] = r;
      }),
        n;
    }
    gc.exports = wT;
  });
  var _c = f((s1, mc) => {
    var Ec = St(),
      vc = fc(),
      ST = Wn(),
      xT = bi(),
      RT = pc(),
      CT = hc(),
      PT = 1,
      LT = 2,
      NT = "[object Boolean]",
      DT = "[object Date]",
      MT = "[object Error]",
      FT = "[object Map]",
      qT = "[object Number]",
      GT = "[object RegExp]",
      XT = "[object Set]",
      kT = "[object String]",
      UT = "[object Symbol]",
      VT = "[object ArrayBuffer]",
      HT = "[object DataView]",
      yc = Ec ? Ec.prototype : void 0,
      Ai = yc ? yc.valueOf : void 0;
    function BT(e, t, n, r, i, o, a) {
      switch (n) {
        case HT:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
            return !1;
          }
          e = e.buffer, t = t.buffer;
        case VT:
          return !(e.byteLength != t.byteLength || !o(new vc(e), new vc(t)));
        case NT:
        case DT:
        case qT:
          return ST(+e, +t);
        case MT:
          return e.name == t.name && e.message == t.message;
        case GT:
        case kT:
          return e == t + "";
        case FT:
          var s = RT;
        case XT:
          var u = r & PT;
          if (s || (s = CT), e.size != t.size && !u) return !1;
          var l = a.get(e);
          if (l) return l == t;
          r |= LT, a.set(e, t);
          var v = xT(s(e), s(t), r, i, o, a);
          return a.delete(e), v;
        case UT:
          if (Ai) return Ai.call(e) == Ai.call(t);
      }
      return !1;
    }
    mc.exports = BT;
  });
  var Yn = f((u1, Ic) => {
    function WT(e, t) {
      for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
      return e;
    }
    Ic.exports = WT;
  });
  var be = f((c1, Tc) => {
    var zT = Array.isArray;
    Tc.exports = zT;
  });
  var Oi = f((l1, bc) => {
    var KT = Yn(), jT = be();
    function YT(e, t, n) {
      var r = t(e);
      return jT(e) ? r : KT(r, n(e));
    }
    bc.exports = YT;
  });
  var Oc = f((f1, Ac) => {
    function $T(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r;) {
        var a = e[n];
        t(a, n, e) && (o[i++] = a);
      }
      return o;
    }
    Ac.exports = $T;
  });
  var wi = f((d1, wc) => {
    function QT() {
      return [];
    }
    wc.exports = QT;
  });
  var Si = f((p1, xc) => {
    var ZT = Oc(),
      JT = wi(),
      eb = Object.prototype,
      tb = eb.propertyIsEnumerable,
      Sc = Object.getOwnPropertySymbols,
      nb = Sc
        ? function (e) {
          return e == null ? [] : (e = Object(e),
            ZT(Sc(e), function (t) {
              return tb.call(e, t);
            }));
        }
        : JT;
    xc.exports = nb;
  });
  var Cc = f((g1, Rc) => {
    function rb(e, t) {
      for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
      return r;
    }
    Rc.exports = rb;
  });
  var Lc = f((h1, Pc) => {
    var ib = ct(), ob = rt(), ab = "[object Arguments]";
    function sb(e) {
      return ob(e) && ib(e) == ab;
    }
    Pc.exports = sb;
  });
  var un = f((E1, Mc) => {
    var Nc = Lc(),
      ub = rt(),
      Dc = Object.prototype,
      cb = Dc.hasOwnProperty,
      lb = Dc.propertyIsEnumerable,
      fb = Nc(function () {
          return arguments;
        }())
        ? Nc
        : function (e) {
          return ub(e) && cb.call(e, "callee") && !lb.call(e, "callee");
        };
    Mc.exports = fb;
  });
  var qc = f((v1, Fc) => {
    function db() {
      return !1;
    }
    Fc.exports = db;
  });
  var $n = f((cn, Mt) => {
    var pb = Ve(),
      gb = qc(),
      kc = typeof cn == "object" && cn && !cn.nodeType && cn,
      Gc = kc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
      hb = Gc && Gc.exports === kc,
      Xc = hb ? pb.Buffer : void 0,
      Eb = Xc ? Xc.isBuffer : void 0,
      vb = Eb || gb;
    Mt.exports = vb;
  });
  var Qn = f((y1, Uc) => {
    var yb = 9007199254740991, mb = /^(?:0|[1-9]\d*)$/;
    function _b(e, t) {
      var n = typeof e;
      return t = t ?? yb,
        !!t && (n == "number" || n != "symbol" && mb.test(e)) && e > -1 &&
        e % 1 == 0 && e < t;
    }
    Uc.exports = _b;
  });
  var Zn = f((m1, Vc) => {
    var Ib = 9007199254740991;
    function Tb(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ib;
    }
    Vc.exports = Tb;
  });
  var Bc = f((_1, Hc) => {
    var bb = ct(),
      Ab = Zn(),
      Ob = rt(),
      wb = "[object Arguments]",
      Sb = "[object Array]",
      xb = "[object Boolean]",
      Rb = "[object Date]",
      Cb = "[object Error]",
      Pb = "[object Function]",
      Lb = "[object Map]",
      Nb = "[object Number]",
      Db = "[object Object]",
      Mb = "[object RegExp]",
      Fb = "[object Set]",
      qb = "[object String]",
      Gb = "[object WeakMap]",
      Xb = "[object ArrayBuffer]",
      kb = "[object DataView]",
      Ub = "[object Float32Array]",
      Vb = "[object Float64Array]",
      Hb = "[object Int8Array]",
      Bb = "[object Int16Array]",
      Wb = "[object Int32Array]",
      zb = "[object Uint8Array]",
      Kb = "[object Uint8ClampedArray]",
      jb = "[object Uint16Array]",
      Yb = "[object Uint32Array]",
      Ee = {};
    Ee[Ub] =
      Ee[Vb] =
      Ee[Hb] =
      Ee[Bb] =
      Ee[Wb] =
      Ee[zb] =
      Ee[Kb] =
      Ee[jb] =
      Ee[Yb] =
        !0;
    Ee[wb] =
      Ee[Sb] =
      Ee[Xb] =
      Ee[xb] =
      Ee[kb] =
      Ee[Rb] =
      Ee[Cb] =
      Ee[Pb] =
      Ee[Lb] =
      Ee[Nb] =
      Ee[Db] =
      Ee[Mb] =
      Ee[Fb] =
      Ee[qb] =
      Ee[Gb] =
        !1;
    function $b(e) {
      return Ob(e) && Ab(e.length) && !!Ee[bb(e)];
    }
    Hc.exports = $b;
  });
  var zc = f((I1, Wc) => {
    function Qb(e) {
      return function (t) {
        return e(t);
      };
    }
    Wc.exports = Qb;
  });
  var jc = f((ln, Ft) => {
    var Zb = Jr(),
      Kc = typeof ln == "object" && ln && !ln.nodeType && ln,
      fn = Kc && typeof Ft == "object" && Ft && !Ft.nodeType && Ft,
      Jb = fn && fn.exports === Kc,
      xi = Jb && Zb.process,
      eA = function () {
        try {
          var e = fn && fn.require && fn.require("util").types;
          return e || xi && xi.binding && xi.binding("util");
        } catch {}
      }();
    Ft.exports = eA;
  });
  var Jn = f((T1, Qc) => {
    var tA = Bc(),
      nA = zc(),
      Yc = jc(),
      $c = Yc && Yc.isTypedArray,
      rA = $c ? nA($c) : tA;
    Qc.exports = rA;
  });
  var Ri = f((b1, Zc) => {
    var iA = Cc(),
      oA = un(),
      aA = be(),
      sA = $n(),
      uA = Qn(),
      cA = Jn(),
      lA = Object.prototype,
      fA = lA.hasOwnProperty;
    function dA(e, t) {
      var n = aA(e),
        r = !n && oA(e),
        i = !n && !r && sA(e),
        o = !n && !r && !i && cA(e),
        a = n || r || i || o,
        s = a ? iA(e.length, String) : [],
        u = s.length;
      for (var l in e) {
        (t || fA.call(e, l)) &&
          !(a &&
            (l == "length" || i && (l == "offset" || l == "parent") ||
              o && (l == "buffer" || l == "byteLength" || l == "byteOffset") ||
              uA(l, u))) &&
          s.push(l);
      }
      return s;
    }
    Zc.exports = dA;
  });
  var er = f((A1, Jc) => {
    var pA = Object.prototype;
    function gA(e) {
      var t = e && e.constructor,
        n = typeof t == "function" && t.prototype || pA;
      return e === n;
    }
    Jc.exports = gA;
  });
  var tl = f((O1, el) => {
    var hA = ei(), EA = hA(Object.keys, Object);
    el.exports = EA;
  });
  var tr = f((w1, nl) => {
    var vA = er(), yA = tl(), mA = Object.prototype, _A = mA.hasOwnProperty;
    function IA(e) {
      if (!vA(e)) return yA(e);
      var t = [];
      for (var n in Object(e)) _A.call(e, n) && n != "constructor" && t.push(n);
      return t;
    }
    nl.exports = IA;
  });
  var vt = f((S1, rl) => {
    var TA = mi(), bA = Zn();
    function AA(e) {
      return e != null && bA(e.length) && !TA(e);
    }
    rl.exports = AA;
  });
  var dn = f((x1, il) => {
    var OA = Ri(), wA = tr(), SA = vt();
    function xA(e) {
      return SA(e) ? OA(e) : wA(e);
    }
    il.exports = xA;
  });
  var al = f((R1, ol) => {
    var RA = Oi(), CA = Si(), PA = dn();
    function LA(e) {
      return RA(e, PA, CA);
    }
    ol.exports = LA;
  });
  var cl = f((C1, ul) => {
    var sl = al(), NA = 1, DA = Object.prototype, MA = DA.hasOwnProperty;
    function FA(e, t, n, r, i, o) {
      var a = n & NA, s = sl(e), u = s.length, l = sl(t), v = l.length;
      if (u != v && !a) return !1;
      for (var p = u; p--;) {
        var d = s[p];
        if (!(a ? d in t : MA.call(t, d))) return !1;
      }
      var E = o.get(e), T = o.get(t);
      if (E && T) return E == t && T == e;
      var b = !0;
      o.set(e, t), o.set(t, e);
      for (var S = a; ++p < u;) {
        d = s[p];
        var m = e[d], C = t[d];
        if (r) { var x = a ? r(C, m, d, t, e, o) : r(m, C, d, e, t, o); }
        if (!(x === void 0 ? m === C || i(m, C, n, r, o) : x)) {
          b = !1;
          break;
        }
        S || (S = d == "constructor");
      }
      if (b && !S) {
        var D = e.constructor, F = t.constructor;
        D != F && "constructor" in e && "constructor" in t &&
          !(typeof D == "function" && D instanceof D &&
            typeof F == "function" && F instanceof F) &&
          (b = !1);
      }
      return o.delete(e), o.delete(t), b;
    }
    ul.exports = FA;
  });
  var fl = f((P1, ll) => {
    var qA = lt(), GA = Ve(), XA = qA(GA, "DataView");
    ll.exports = XA;
  });
  var pl = f((L1, dl) => {
    var kA = lt(), UA = Ve(), VA = kA(UA, "Promise");
    dl.exports = VA;
  });
  var hl = f((N1, gl) => {
    var HA = lt(), BA = Ve(), WA = HA(BA, "Set");
    gl.exports = WA;
  });
  var Ci = f((D1, El) => {
    var zA = lt(), KA = Ve(), jA = zA(KA, "WeakMap");
    El.exports = jA;
  });
  var nr = f((M1, bl) => {
    var Pi = fl(),
      Li = zn(),
      Ni = pl(),
      Di = hl(),
      Mi = Ci(),
      Tl = ct(),
      qt = Ii(),
      vl = "[object Map]",
      YA = "[object Object]",
      yl = "[object Promise]",
      ml = "[object Set]",
      _l = "[object WeakMap]",
      Il = "[object DataView]",
      $A = qt(Pi),
      QA = qt(Li),
      ZA = qt(Ni),
      JA = qt(Di),
      e0 = qt(Mi),
      yt = Tl;
    (Pi && yt(new Pi(new ArrayBuffer(1))) != Il || Li && yt(new Li()) != vl ||
      Ni && yt(Ni.resolve()) != yl || Di && yt(new Di()) != ml ||
      Mi && yt(new Mi()) != _l) && (yt = function (e) {
        var t = Tl(e), n = t == YA ? e.constructor : void 0, r = n ? qt(n) : "";
        if (r) {
          switch (r) {
            case $A:
              return Il;
            case QA:
              return vl;
            case ZA:
              return yl;
            case JA:
              return ml;
            case e0:
              return _l;
          }
        }
        return t;
      });
    bl.exports = yt;
  });
  var Pl = f((F1, Cl) => {
    var Fi = Ti(),
      t0 = bi(),
      n0 = _c(),
      r0 = cl(),
      Al = nr(),
      Ol = be(),
      wl = $n(),
      i0 = Jn(),
      o0 = 1,
      Sl = "[object Arguments]",
      xl = "[object Array]",
      rr = "[object Object]",
      a0 = Object.prototype,
      Rl = a0.hasOwnProperty;
    function s0(e, t, n, r, i, o) {
      var a = Ol(e), s = Ol(t), u = a ? xl : Al(e), l = s ? xl : Al(t);
      u = u == Sl ? rr : u, l = l == Sl ? rr : l;
      var v = u == rr, p = l == rr, d = u == l;
      if (d && wl(e)) {
        if (!wl(t)) return !1;
        a = !0, v = !1;
      }
      if (d && !v) {
        return o || (o = new Fi()),
          a || i0(e) ? t0(e, t, n, r, i, o) : n0(e, t, u, n, r, i, o);
      }
      if (!(n & o0)) {
        var E = v && Rl.call(e, "__wrapped__"),
          T = p && Rl.call(t, "__wrapped__");
        if (E || T) {
          var b = E ? e.value() : e, S = T ? t.value() : t;
          return o || (o = new Fi()), i(b, S, n, r, o);
        }
      }
      return d ? (o || (o = new Fi()), r0(e, t, n, r, i, o)) : !1;
    }
    Cl.exports = s0;
  });
  var qi = f((q1, Dl) => {
    var u0 = Pl(), Ll = rt();
    function Nl(e, t, n, r, i) {
      return e === t
        ? !0
        : e == null || t == null || !Ll(e) && !Ll(t)
        ? e !== e && t !== t
        : u0(e, t, n, r, Nl, i);
    }
    Dl.exports = Nl;
  });
  var Fl = f((G1, Ml) => {
    var c0 = Ti(), l0 = qi(), f0 = 1, d0 = 2;
    function p0(e, t, n, r) {
      var i = n.length, o = i, a = !r;
      if (e == null) return !o;
      for (e = Object(e); i--;) {
        var s = n[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o;) {
        s = n[i];
        var u = s[0], l = e[u], v = s[1];
        if (a && s[2]) { if (l === void 0 && !(u in e)) return !1; }
        else {
          var p = new c0();
          if (r) { var d = r(l, v, u, e, t, p); }
          if (!(d === void 0 ? l0(v, l, f0 | d0, r, p) : d)) return !1;
        }
      }
      return !0;
    }
    Ml.exports = p0;
  });
  var Gi = f((X1, ql) => {
    var g0 = Ze();
    function h0(e) {
      return e === e && !g0(e);
    }
    ql.exports = h0;
  });
  var Xl = f((k1, Gl) => {
    var E0 = Gi(), v0 = dn();
    function y0(e) {
      for (var t = v0(e), n = t.length; n--;) {
        var r = t[n], i = e[r];
        t[n] = [r, i, E0(i)];
      }
      return t;
    }
    Gl.exports = y0;
  });
  var Xi = f((U1, kl) => {
    function m0(e, t) {
      return function (n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
      };
    }
    kl.exports = m0;
  });
  var Vl = f((V1, Ul) => {
    var _0 = Fl(), I0 = Xl(), T0 = Xi();
    function b0(e) {
      var t = I0(e);
      return t.length == 1 && t[0][2] ? T0(t[0][0], t[0][1]) : function (n) {
        return n === e || _0(n, e, t);
      };
    }
    Ul.exports = b0;
  });
  var pn = f((H1, Hl) => {
    var A0 = ct(), O0 = rt(), w0 = "[object Symbol]";
    function S0(e) {
      return typeof e == "symbol" || O0(e) && A0(e) == w0;
    }
    Hl.exports = S0;
  });
  var ir = f((B1, Bl) => {
    var x0 = be(),
      R0 = pn(),
      C0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      P0 = /^\w*$/;
    function L0(e, t) {
      if (x0(e)) return !1;
      var n = typeof e;
      return n == "number" || n == "symbol" || n == "boolean" || e == null ||
          R0(e)
        ? !0
        : P0.test(e) || !C0.test(e) || t != null && e in Object(t);
    }
    Bl.exports = L0;
  });
  var Kl = f((W1, zl) => {
    var Wl = Kn(), N0 = "Expected a function";
    function ki(e, t) {
      if (typeof e != "function" || t != null && typeof t != "function") {
        throw new TypeError(N0);
      }
      var n = function () {
        var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, r);
        return n.cache = o.set(i, a) || o, a;
      };
      return n.cache = new (ki.Cache || Wl)(), n;
    }
    ki.Cache = Wl;
    zl.exports = ki;
  });
  var Yl = f((z1, jl) => {
    var D0 = Kl(), M0 = 500;
    function F0(e) {
      var t = D0(e, function (r) {
          return n.size === M0 && n.clear(), r;
        }),
        n = t.cache;
      return t;
    }
    jl.exports = F0;
  });
  var Ql = f((K1, $l) => {
    var q0 = Yl(),
      G0 =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      X0 = /\\(\\)?/g,
      k0 = q0(function (e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""),
          e.replace(G0, function (n, r, i, o) {
            t.push(i ? o.replace(X0, "$1") : r || n);
          }),
          t;
      });
    $l.exports = k0;
  });
  var Ui = f((j1, Zl) => {
    function U0(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) {
        i[n] = t(e[n], n, e);
      }
      return i;
    }
    Zl.exports = U0;
  });
  var of = f((Y1, rf) => {
    var Jl = St(),
      V0 = Ui(),
      H0 = be(),
      B0 = pn(),
      W0 = 1 / 0,
      ef = Jl ? Jl.prototype : void 0,
      tf = ef ? ef.toString : void 0;
    function nf(e) {
      if (typeof e == "string") return e;
      if (H0(e)) return V0(e, nf) + "";
      if (B0(e)) return tf ? tf.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -W0 ? "-0" : t;
    }
    rf.exports = nf;
  });
  var sf = f(($1, af) => {
    var z0 = of();
    function K0(e) {
      return e == null ? "" : z0(e);
    }
    af.exports = K0;
  });
  var gn = f((Q1, uf) => {
    var j0 = be(), Y0 = ir(), $0 = Ql(), Q0 = sf();
    function Z0(e, t) {
      return j0(e) ? e : Y0(e, t) ? [e] : $0(Q0(e));
    }
    uf.exports = Z0;
  });
  var Gt = f((Z1, cf) => {
    var J0 = pn(), eO = 1 / 0;
    function tO(e) {
      if (typeof e == "string" || J0(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -eO ? "-0" : t;
    }
    cf.exports = tO;
  });
  var or = f((J1, lf) => {
    var nO = gn(), rO = Gt();
    function iO(e, t) {
      t = nO(t, e);
      for (var n = 0, r = t.length; e != null && n < r;) e = e[rO(t[n++])];
      return n && n == r ? e : void 0;
    }
    lf.exports = iO;
  });
  var ar = f((eq, ff) => {
    var oO = or();
    function aO(e, t, n) {
      var r = e == null ? void 0 : oO(e, t);
      return r === void 0 ? n : r;
    }
    ff.exports = aO;
  });
  var pf = f((tq, df) => {
    function sO(e, t) {
      return e != null && t in Object(e);
    }
    df.exports = sO;
  });
  var hf = f((nq, gf) => {
    var uO = gn(), cO = un(), lO = be(), fO = Qn(), dO = Zn(), pO = Gt();
    function gO(e, t, n) {
      t = uO(t, e);
      for (var r = -1, i = t.length, o = !1; ++r < i;) {
        var a = pO(t[r]);
        if (!(o = e != null && n(e, a))) break;
        e = e[a];
      }
      return o || ++r != i
        ? o
        : (i = e == null ? 0 : e.length,
          !!i && dO(i) && fO(a, i) && (lO(e) || cO(e)));
    }
    gf.exports = gO;
  });
  var vf = f((rq, Ef) => {
    var hO = pf(), EO = hf();
    function vO(e, t) {
      return e != null && EO(e, t, hO);
    }
    Ef.exports = vO;
  });
  var mf = f((iq, yf) => {
    var yO = qi(),
      mO = ar(),
      _O = vf(),
      IO = ir(),
      TO = Gi(),
      bO = Xi(),
      AO = Gt(),
      OO = 1,
      wO = 2;
    function SO(e, t) {
      return IO(e) && TO(t) ? bO(AO(e), t) : function (n) {
        var r = mO(n, e);
        return r === void 0 && r === t ? _O(n, e) : yO(t, r, OO | wO);
      };
    }
    yf.exports = SO;
  });
  var sr = f((oq, _f) => {
    function xO(e) {
      return e;
    }
    _f.exports = xO;
  });
  var Vi = f((aq, If) => {
    function RO(e) {
      return function (t) {
        return t?.[e];
      };
    }
    If.exports = RO;
  });
  var bf = f((sq, Tf) => {
    var CO = or();
    function PO(e) {
      return function (t) {
        return CO(t, e);
      };
    }
    Tf.exports = PO;
  });
  var Of = f((uq, Af) => {
    var LO = Vi(), NO = bf(), DO = ir(), MO = Gt();
    function FO(e) {
      return DO(e) ? LO(MO(e)) : NO(e);
    }
    Af.exports = FO;
  });
  var ft = f((cq, wf) => {
    var qO = Vl(), GO = mf(), XO = sr(), kO = be(), UO = Of();
    function VO(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? XO
        : typeof e == "object"
        ? kO(e) ? GO(e[0], e[1]) : qO(e)
        : UO(e);
    }
    wf.exports = VO;
  });
  var Hi = f((lq, Sf) => {
    var HO = ft(), BO = vt(), WO = dn();
    function zO(e) {
      return function (t, n, r) {
        var i = Object(t);
        if (!BO(t)) {
          var o = HO(n, 3);
          t = WO(t),
            n = function (s) {
              return o(i[s], s, i);
            };
        }
        var a = e(t, n, r);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Sf.exports = zO;
  });
  var Bi = f((fq, xf) => {
    function KO(e, t, n, r) {
      for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) {
        if (t(e[o], o, e)) return o;
      }
      return -1;
    }
    xf.exports = KO;
  });
  var Cf = f((dq, Rf) => {
    var jO = /\s/;
    function YO(e) {
      for (var t = e.length; t-- && jO.test(e.charAt(t)););
      return t;
    }
    Rf.exports = YO;
  });
  var Lf = f((pq, Pf) => {
    var $O = Cf(), QO = /^\s+/;
    function ZO(e) {
      return e && e.slice(0, $O(e) + 1).replace(QO, "");
    }
    Pf.exports = ZO;
  });
  var ur = f((gq, Mf) => {
    var JO = Lf(),
      Nf = Ze(),
      ew = pn(),
      Df = 0 / 0,
      tw = /^[-+]0x[0-9a-f]+$/i,
      nw = /^0b[01]+$/i,
      rw = /^0o[0-7]+$/i,
      iw = parseInt;
    function ow(e) {
      if (typeof e == "number") return e;
      if (ew(e)) return Df;
      if (Nf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Nf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = JO(e);
      var n = nw.test(e);
      return n || rw.test(e) ? iw(e.slice(2), n ? 2 : 8) : tw.test(e) ? Df : +e;
    }
    Mf.exports = ow;
  });
  var Gf = f((hq, qf) => {
    var aw = ur(), Ff = 1 / 0, sw = 17976931348623157e292;
    function uw(e) {
      if (!e) return e === 0 ? e : 0;
      if (e = aw(e), e === Ff || e === -Ff) {
        var t = e < 0 ? -1 : 1;
        return t * sw;
      }
      return e === e ? e : 0;
    }
    qf.exports = uw;
  });
  var Wi = f((Eq, Xf) => {
    var cw = Gf();
    function lw(e) {
      var t = cw(e), n = t % 1;
      return t === t ? n ? t - n : t : 0;
    }
    Xf.exports = lw;
  });
  var Uf = f((vq, kf) => {
    var fw = Bi(), dw = ft(), pw = Wi(), gw = Math.max;
    function hw(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var i = n == null ? 0 : pw(n);
      return i < 0 && (i = gw(r + i, 0)), fw(e, dw(t, 3), i);
    }
    kf.exports = hw;
  });
  var zi = f((yq, Vf) => {
    var Ew = Hi(), vw = Uf(), yw = Ew(vw);
    Vf.exports = yw;
  });
  var Wf = {};
  Le(Wf, {
    ELEMENT_MATCHES: () => mw,
    FLEX_PREFIXED: () => Ki,
    IS_BROWSER_ENV: () => Be,
    TRANSFORM_PREFIXED: () => dt,
    TRANSFORM_STYLE_PREFIXED: () => lr,
    withBrowser: () => cr,
  });
  var Bf,
    Be,
    cr,
    mw,
    Ki,
    dt,
    Hf,
    lr,
    fr = ve(() => {
      "use strict";
      Bf = fe(zi()),
        Be = typeof window < "u",
        cr = (e, t) => Be ? e() : t,
        mw = cr(() =>
          (0, Bf.default)([
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector",
          ], (e) => e in Element.prototype)
        ),
        Ki = cr(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            n = "";
          try {
            let { length: r } = t;
            for (let i = 0; i < r; i++) {
              let o = t[i];
              if (e.style.display = o, e.style.display === o) return o;
            }
            return n;
          } catch {
            return n;
          }
        }, "flex"),
        dt = cr(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"], n = "Transform", { length: r } = t;
            for (let i = 0; i < r; i++) {
              let o = t[i] + n;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform"),
        Hf = dt.split("transform")[0],
        lr = Hf ? Hf + "TransformStyle" : "transformStyle";
    });
  var ji = f((mq, $f) => {
    var _w = 4,
      Iw = .001,
      Tw = 1e-7,
      bw = 10,
      hn = 11,
      dr = 1 / (hn - 1),
      Aw = typeof Float32Array == "function";
    function zf(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Kf(e, t) {
      return 3 * t - 6 * e;
    }
    function jf(e) {
      return 3 * e;
    }
    function pr(e, t, n) {
      return ((zf(t, n) * e + Kf(t, n)) * e + jf(t)) * e;
    }
    function Yf(e, t, n) {
      return 3 * zf(t, n) * e * e + 2 * Kf(t, n) * e + jf(t);
    }
    function Ow(e, t, n, r, i) {
      var o, a, s = 0;
      do a = t + (n - t) / 2,
        o = pr(a, r, i) - e,
        o > 0 ? n = a : t = a; while (Math.abs(o) > Tw && ++s < bw);
      return a;
    }
    function ww(e, t, n, r) {
      for (var i = 0; i < _w; ++i) {
        var o = Yf(t, n, r);
        if (o === 0) return t;
        var a = pr(t, n, r) - e;
        t -= a / o;
      }
      return t;
    }
    $f.exports = function (t, n, r, i) {
      if (!(0 <= t && t <= 1 && 0 <= r && r <= 1)) {
        throw new Error("bezier x values must be in [0, 1] range");
      }
      var o = Aw ? new Float32Array(hn) : new Array(hn);
      if (t !== n || r !== i) {
        for (var a = 0; a < hn; ++a) o[a] = pr(a * dr, t, r);
      }
      function s(u) {
        for (var l = 0, v = 1, p = hn - 1; v !== p && o[v] <= u; ++v) l += dr;
        --v;
        var d = (u - o[v]) / (o[v + 1] - o[v]), E = l + d * dr, T = Yf(E, t, r);
        return T >= Iw ? ww(u, E, t, r) : T === 0 ? E : Ow(u, l, l + dr, t, r);
      }
      return function (l) {
        return t === n && r === i
          ? l
          : l === 0
          ? 0
          : l === 1
          ? 1
          : pr(s(l), n, i);
      };
    };
  });
  var vn = {};
  Le(vn, {
    bounce: () => uS,
    bouncePast: () => cS,
    ease: () => Sw,
    easeIn: () => xw,
    easeInOut: () => Cw,
    easeOut: () => Rw,
    inBack: () => Jw,
    inCirc: () => Yw,
    inCubic: () => Dw,
    inElastic: () => nS,
    inExpo: () => zw,
    inOutBack: () => tS,
    inOutCirc: () => Qw,
    inOutCubic: () => Fw,
    inOutElastic: () => iS,
    inOutExpo: () => jw,
    inOutQuad: () => Nw,
    inOutQuart: () => Xw,
    inOutQuint: () => Vw,
    inOutSine: () => Ww,
    inQuad: () => Pw,
    inQuart: () => qw,
    inQuint: () => kw,
    inSine: () => Hw,
    outBack: () => eS,
    outBounce: () => Zw,
    outCirc: () => $w,
    outCubic: () => Mw,
    outElastic: () => rS,
    outExpo: () => Kw,
    outQuad: () => Lw,
    outQuart: () => Gw,
    outQuint: () => Uw,
    outSine: () => Bw,
    swingFrom: () => aS,
    swingFromTo: () => oS,
    swingTo: () => sS,
  });
  function Pw(e) {
    return Math.pow(e, 2);
  }
  function Lw(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function Nw(e) {
    return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2);
  }
  function Dw(e) {
    return Math.pow(e, 3);
  }
  function Mw(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function Fw(e) {
    return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2);
  }
  function qw(e) {
    return Math.pow(e, 4);
  }
  function Gw(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function Xw(e) {
    return (e /= .5) < 1
      ? .5 * Math.pow(e, 4)
      : -.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function kw(e) {
    return Math.pow(e, 5);
  }
  function Uw(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function Vw(e) {
    return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2);
  }
  function Hw(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Bw(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Ww(e) {
    return -.5 * (Math.cos(Math.PI * e) - 1);
  }
  function zw(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Kw(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function jw(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= .5) < 1
      ? .5 * Math.pow(2, 10 * (e - 1))
      : .5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Yw(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function $w(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Qw(e) {
    return (e /= .5) < 1
      ? -.5 * (Math.sqrt(1 - e * e) - 1)
      : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Zw(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + .75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + .984375;
  }
  function Jw(e) {
    let t = it;
    return e * e * ((t + 1) * e - t);
  }
  function eS(e) {
    let t = it;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function tS(e) {
    let t = it;
    return (e /= .5) < 1
      ? .5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function nS(e) {
    let t = it, n = 0, r = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (n || (n = .3),
        r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        -(r * Math.pow(2, 10 * (e -= 1)) *
          Math.sin((e - t) * (2 * Math.PI) / n)));
  }
  function rS(e) {
    let t = it, n = 0, r = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (n || (n = .3),
        r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1);
  }
  function iS(e) {
    let t = it, n = 0, r = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (n || (n = .3 * 1.5),
        r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r),
        e < 1
          ? -.5 *
            (r * Math.pow(2, 10 * (e -= 1)) *
              Math.sin((e - t) * (2 * Math.PI) / n))
          : r * Math.pow(2, -10 * (e -= 1)) *
              Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1);
  }
  function oS(e) {
    let t = it;
    return (e /= .5) < 1
      ? .5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function aS(e) {
    let t = it;
    return e * e * ((t + 1) * e - t);
  }
  function sS(e) {
    let t = it;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function uS(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + .75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + .984375;
  }
  function cS(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375);
  }
  var En,
    it,
    Sw,
    xw,
    Rw,
    Cw,
    Yi = ve(() => {
      "use strict";
      En = fe(ji()),
        it = 1.70158,
        Sw = (0, En.default)(.25, .1, .25, 1),
        xw = (0, En.default)(.42, 0, 1, 1),
        Rw = (0, En.default)(0, 0, .58, 1),
        Cw = (0, En.default)(.42, 0, .58, 1);
    });
  var Zf = {};
  Le(Zf, {
    applyEasing: () => fS,
    createBezierEasing: () => lS,
    optimizeFloat: () => yn,
  });
  function yn(e, t = 5, n = 10) {
    let r = Math.pow(n, t), i = Number(Math.round(e * r) / r);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function lS(e) {
    return (0, Qf.default)(...e);
  }
  function fS(e, t, n) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : yn(n ? t > 0 ? n(t) : t : t > 0 && e && vn[e] ? vn[e](t) : t);
  }
  var Qf,
    $i = ve(() => {
      "use strict";
      Yi();
      Qf = fe(ji());
    });
  var td = {};
  Le(td, {
    createElementState: () => ed,
    ixElements: () => OS,
    mergeActionState: () => Qi,
  });
  function ed(e, t, n, r, i) {
    let o = n === dS
      ? (0, Xt.getIn)(i, ["config", "target", "objectId"])
      : null;
    return (0, Xt.mergeIn)(e, [r], { id: r, ref: t, refId: o, refType: n });
  }
  function Qi(e, t, n, r, i) {
    let o = SS(i);
    return (0, Xt.mergeIn)(e, [t, AS, n], r, o);
  }
  function SS(e) {
    let { config: t } = e;
    return wS.reduce((n, r) => {
      let i = r[0], o = r[1], a = t[i], s = t[o];
      return a != null && s != null && (n[o] = s), n;
    }, {});
  }
  var Xt,
    Iq,
    dS,
    Tq,
    pS,
    gS,
    hS,
    ES,
    vS,
    yS,
    mS,
    _S,
    IS,
    TS,
    bS,
    Jf,
    AS,
    OS,
    wS,
    nd = ve(() => {
      "use strict";
      Xt = fe(Ct());
      Ne();
      ({
        HTML_ELEMENT: Iq,
        PLAIN_OBJECT: dS,
        ABSTRACT_NODE: Tq,
        CONFIG_X_VALUE: pS,
        CONFIG_Y_VALUE: gS,
        CONFIG_Z_VALUE: hS,
        CONFIG_VALUE: ES,
        CONFIG_X_UNIT: vS,
        CONFIG_Y_UNIT: yS,
        CONFIG_Z_UNIT: mS,
        CONFIG_UNIT: _S,
      } = Oe),
        {
          IX2_SESSION_STOPPED: IS,
          IX2_INSTANCE_ADDED: TS,
          IX2_ELEMENT_STATE_CHANGED: bS,
        } = Te,
        Jf = {},
        AS = "refState",
        OS = (e = Jf, t = {}) => {
          switch (t.type) {
            case IS:
              return Jf;
            case TS: {
              let {
                  elementId: n,
                  element: r,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (0, Xt.getIn)(u, [n, r]) !== r && (u = ed(u, r, a, n, o)),
                Qi(u, n, s, i, o);
            }
            case bS: {
              let { elementId: n, actionTypeId: r, current: i, actionItem: o } =
                t.payload;
              return Qi(e, n, r, i, o);
            }
            default:
              return e;
          }
        };
      wS = [[pS, vS], [gS, yS], [hS, mS], [ES, _S]];
    });
  var rd = f((Zi) => {
    "use strict";
    Object.defineProperty(Zi, "__esModule", { value: !0 });
    function xS(e, t) {
      for (var n in t) {
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }
    }
    xS(Zi, {
      clearPlugin: function () {
        return MS;
      },
      createPluginInstance: function () {
        return NS;
      },
      getPluginConfig: function () {
        return RS;
      },
      getPluginDestination: function () {
        return LS;
      },
      getPluginDuration: function () {
        return CS;
      },
      getPluginOrigin: function () {
        return PS;
      },
      renderPlugin: function () {
        return DS;
      },
    });
    var RS = (e) => e.value,
      CS = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let n = parseFloat(e.getAttribute("data-duration"));
        return n > 0
          ? n * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      PS = (e) => e || { value: 0 },
      LS = (e) => ({ value: e.value }),
      NS = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      DS = (e, t, n) => {
        if (!e) return;
        let r = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * r);
      },
      MS = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var od = f((Ji) => {
    "use strict";
    Object.defineProperty(Ji, "__esModule", { value: !0 });
    function FS(e, t) {
      for (var n in t) {
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }
    }
    FS(Ji, {
      clearPlugin: function () {
        return zS;
      },
      createPluginInstance: function () {
        return BS;
      },
      getPluginConfig: function () {
        return kS;
      },
      getPluginDestination: function () {
        return HS;
      },
      getPluginDuration: function () {
        return US;
      },
      getPluginOrigin: function () {
        return VS;
      },
      renderPlugin: function () {
        return WS;
      },
    });
    var qS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      GS = () => window.Webflow.require("spline"),
      XS = (e, t) => e.filter((n) => !t.includes(n)),
      kS = (e, t) => e.value[t],
      US = () => null,
      id = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      VS = (e, t) => {
        let n = t.config.value, r = Object.keys(n);
        if (e) {
          let o = Object.keys(e), a = XS(r, o);
          return a.length ? a.reduce((u, l) => (u[l] = id[l], u), e) : e;
        }
        return r.reduce((o, a) => (o[a] = id[a], o), {});
      },
      HS = (e) => e.value,
      BS = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? qS(n) : null;
      },
      WS = (e, t, n) => {
        let r = GS(),
          i = r.getInstance(e),
          o = n.config.target.objectId,
          a = (s) => {
            if (!s) {
              throw new Error("Invalid spline app passed to renderSpline");
            }
            let u = o && s.findObjectById(o);
            if (!u) return;
            let { PLUGIN_SPLINE: l } = t;
            l.positionX != null && (u.position.x = l.positionX),
              l.positionY != null && (u.position.y = l.positionY),
              l.positionZ != null && (u.position.z = l.positionZ),
              l.rotationX != null && (u.rotation.x = l.rotationX),
              l.rotationY != null && (u.rotation.y = l.rotationY),
              l.rotationZ != null && (u.rotation.z = l.rotationZ),
              l.scaleX != null && (u.scale.x = l.scaleX),
              l.scaleY != null && (u.scale.y = l.scaleY),
              l.scaleZ != null && (u.scale.z = l.scaleZ);
          };
        i ? a(i.spline) : r.setLoadHandler(e, a);
      },
      zS = () => null;
  });
  var ad = f((no) => {
    "use strict";
    Object.defineProperty(no, "__esModule", { value: !0 });
    function KS(e, t) {
      for (var n in t) {
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }
    }
    KS(no, {
      clearPlugin: function () {
        return nx;
      },
      createPluginInstance: function () {
        return ex;
      },
      getPluginConfig: function () {
        return $S;
      },
      getPluginDestination: function () {
        return JS;
      },
      getPluginDuration: function () {
        return QS;
      },
      getPluginOrigin: function () {
        return ZS;
      },
      renderPlugin: function () {
        return tx;
      },
    });
    var eo = "--wf-rive-fit",
      to = "--wf-rive-alignment",
      jS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      YS = () => window.Webflow.require("rive"),
      $S = (e, t) => e.value.inputs[t],
      QS = () => null,
      ZS = (e, t) => {
        if (e) return e;
        let n = {}, { inputs: r = {} } = t.config.value;
        for (let i in r) r[i] == null && (n[i] = 0);
        return n;
      },
      JS = (e) => e.value.inputs ?? {},
      ex = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let r = t?.config?.target?.pluginElement;
        return r ? jS(r) : null;
      },
      tx = (e, { PLUGIN_RIVE: t }, n) => {
        let r = YS(),
          i = r.getInstance(e),
          o = r.rive.StateMachineInputType,
          { name: a, inputs: s = {} } = n.config.value || {};
        function u(l) {
          if (l.loaded) v();
          else {
            let p = () => {
              v(), l?.off("load", p);
            };
            l?.on("load", p);
          }
          function v() {
            let p = l.stateMachineInputs(a);
            if (p != null) {
              if (l.isPlaying || l.play(a, !1), eo in s || to in s) {
                let d = l.layout, E = s[eo] ?? d.fit, T = s[to] ?? d.alignment;
                (E !== d.fit || T !== d.alignment) &&
                  (l.layout = d.copyWith({ fit: E, alignment: T }));
              }
              for (let d in s) {
                if (d === eo || d === to) continue;
                let E = p.find((T) => T.name === d);
                if (E != null) {
                  switch (E.type) {
                    case o.Boolean: {
                      if (s[d] != null) {
                        let T = !!s[d];
                        E.value = T;
                      }
                      break;
                    }
                    case o.Number: {
                      let T = t[d];
                      T != null && (E.value = T);
                      break;
                    }
                    case o.Trigger: {
                      s[d] && E.fire();
                      break;
                    }
                  }
                }
              }
            }
          }
        }
        i?.rive ? u(i.rive) : r.setLoadHandler(e, u);
      },
      nx = (e, t) => null;
  });
  var io = f((ro) => {
    "use strict";
    Object.defineProperty(ro, "__esModule", { value: !0 });
    Object.defineProperty(ro, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return rx;
      },
    });
    var sd = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function rx(e) {
      let t,
        n,
        r,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof sd[o] == "string" ? sd[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3 || u.length === 4
          ? (t = parseInt(u[0] + u[0], 16),
            n = parseInt(u[1] + u[1], 16),
            r = parseInt(u[2] + u[2], 16),
            u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255))
          : (u.length === 6 || u.length === 8) &&
            (t = parseInt(u.substring(0, 2), 16),
              n = parseInt(u.substring(2, 4), 16),
              r = parseInt(u.substring(4, 6), 16),
              u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        t = parseInt(u[0], 10),
          n = parseInt(u[1], 10),
          r = parseInt(u[2], 10),
          i = parseFloat(u[3]);
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        t = parseInt(u[0], 10), n = parseInt(u[1], 10), r = parseInt(u[2], 10);
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          v = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let d = (1 - Math.abs(2 * p - 1)) * v,
          E = d * (1 - Math.abs(l / 60 % 2 - 1)),
          T = p - d / 2,
          b,
          S,
          m;
        l >= 0 && l < 60
          ? (b = d, S = E, m = 0)
          : l >= 60 && l < 120
          ? (b = E, S = d, m = 0)
          : l >= 120 && l < 180
          ? (b = 0, S = d, m = E)
          : l >= 180 && l < 240
          ? (b = 0, S = E, m = d)
          : l >= 240 && l < 300
          ? (b = E, S = 0, m = d)
          : (b = d, S = 0, m = E),
          t = Math.round((b + T) * 255),
          n = Math.round((S + T) * 255),
          r = Math.round((m + T) * 255);
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          v = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100,
          d = (1 - Math.abs(2 * p - 1)) * v,
          E = d * (1 - Math.abs(l / 60 % 2 - 1)),
          T = p - d / 2,
          b,
          S,
          m;
        l >= 0 && l < 60
          ? (b = d, S = E, m = 0)
          : l >= 60 && l < 120
          ? (b = E, S = d, m = 0)
          : l >= 120 && l < 180
          ? (b = 0, S = d, m = E)
          : l >= 180 && l < 240
          ? (b = 0, S = E, m = d)
          : l >= 240 && l < 300
          ? (b = E, S = 0, m = d)
          : (b = d, S = 0, m = E),
          t = Math.round((b + T) * 255),
          n = Math.round((S + T) * 255),
          r = Math.round((m + T) * 255);
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r)) {
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`,
        );
      }
      return { red: t, green: n, blue: r, alpha: i };
    }
  });
  var ud = f((oo) => {
    "use strict";
    Object.defineProperty(oo, "__esModule", { value: !0 });
    function ix(e, t) {
      for (var n in t) {
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }
    }
    ix(oo, {
      clearPlugin: function () {
        return dx;
      },
      createPluginInstance: function () {
        return lx;
      },
      getPluginConfig: function () {
        return ax;
      },
      getPluginDestination: function () {
        return cx;
      },
      getPluginDuration: function () {
        return sx;
      },
      getPluginOrigin: function () {
        return ux;
      },
      renderPlugin: function () {
        return fx;
      },
    });
    var ox = io(),
      ax = (e, t) => e.value[t],
      sx = () => null,
      ux = (e, t) => {
        if (e) return e;
        let n = t.config.value,
          r = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(r);
        if (n.size != null) return { size: parseInt(i, 10) };
        if (n.red != null && n.green != null && n.blue != null) {
          return (0, ox.normalizeColor)(i);
        }
      },
      cx = (e) => e.value,
      lx = () => null,
      fx = (e, t, n) => {
        let r = n.config.target.objectId,
          i = n.config.value.unit,
          { PLUGIN_VARIABLE: o } = t,
          { size: a, red: s, green: u, blue: l, alpha: v } = o,
          p;
        a != null && (p = a + i),
          s != null && l != null && u != null && v != null &&
          (p = `rgba(${s}, ${u}, ${l}, ${v})`),
          p != null && document.documentElement.style.setProperty(r, p);
      },
      dx = (e, t) => {
        let n = t.config.target.objectId;
        document.documentElement.style.removeProperty(n);
      };
  });
  var ld = f((ao) => {
    "use strict";
    Object.defineProperty(ao, "__esModule", { value: !0 });
    Object.defineProperty(ao, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return vx;
      },
    });
    var gr = (Ne(), je(ps)),
      px = hr(rd()),
      gx = hr(od()),
      hx = hr(ad()),
      Ex = hr(ud());
    function cd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(), n = new WeakMap();
      return (cd = function (r) {
        return r ? n : t;
      })(e);
    }
    function hr(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") {
        return { default: e };
      }
      var n = cd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e) {
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o];
        }
      }
      return r.default = e, n && n.set(e, r), r;
    }
    var vx = new Map([
      [gr.ActionTypeConsts.PLUGIN_LOTTIE, { ...px }],
      [gr.ActionTypeConsts.PLUGIN_SPLINE, { ...gx }],
      [gr.ActionTypeConsts.PLUGIN_RIVE, { ...hx }],
      [gr.ActionTypeConsts.PLUGIN_VARIABLE, { ...Ex }],
    ]);
  });
  var fd = {};
  Le(fd, {
    clearPlugin: () => po,
    createPluginInstance: () => mx,
    getPluginConfig: () => uo,
    getPluginDestination: () => lo,
    getPluginDuration: () => yx,
    getPluginOrigin: () => co,
    isPluginType: () => mt,
    renderPlugin: () => fo,
  });
  function mt(e) {
    return so.pluginMethodMap.has(e);
  }
  var so,
    _t,
    uo,
    co,
    yx,
    lo,
    mx,
    fo,
    po,
    go = ve(() => {
      "use strict";
      fr();
      so = fe(ld());
      _t = (e) => (t) => {
        if (!Be) return () => null;
        let n = so.pluginMethodMap.get(t);
        if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
        let r = n[e];
        if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
        return r;
      },
        uo = _t("getPluginConfig"),
        co = _t("getPluginOrigin"),
        yx = _t("getPluginDuration"),
        lo = _t("getPluginDestination"),
        mx = _t("createPluginInstance"),
        fo = _t("renderPlugin"),
        po = _t("clearPlugin");
    });
  var pd = f((Cq, dd) => {
    function _x(e, t) {
      return e == null || e !== e ? t : e;
    }
    dd.exports = _x;
  });
  var hd = f((Pq, gd) => {
    function Ix(e, t, n, r) {
      var i = -1, o = e == null ? 0 : e.length;
      for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
      return n;
    }
    gd.exports = Ix;
  });
  var vd = f((Lq, Ed) => {
    function Tx(e) {
      return function (t, n, r) {
        for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
          var u = a[e ? s : ++i];
          if (n(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Ed.exports = Tx;
  });
  var md = f((Nq, yd) => {
    var bx = vd(), Ax = bx();
    yd.exports = Ax;
  });
  var ho = f((Dq, _d) => {
    var Ox = md(), wx = dn();
    function Sx(e, t) {
      return e && Ox(e, t, wx);
    }
    _d.exports = Sx;
  });
  var Td = f((Mq, Id) => {
    var xx = vt();
    function Rx(e, t) {
      return function (n, r) {
        if (n == null) return n;
        if (!xx(n)) return e(n, r);
        for (
          var i = n.length, o = t ? i : -1, a = Object(n);
          (t ? o-- : ++o < i) && r(a[o], o, a) !== !1;
        );
        return n;
      };
    }
    Id.exports = Rx;
  });
  var Eo = f((Fq, bd) => {
    var Cx = ho(), Px = Td(), Lx = Px(Cx);
    bd.exports = Lx;
  });
  var Od = f((qq, Ad) => {
    function Nx(e, t, n, r, i) {
      return i(e, function (o, a, s) {
        n = r ? (r = !1, o) : t(n, o, a, s);
      }),
        n;
    }
    Ad.exports = Nx;
  });
  var Sd = f((Gq, wd) => {
    var Dx = hd(), Mx = Eo(), Fx = ft(), qx = Od(), Gx = be();
    function Xx(e, t, n) {
      var r = Gx(e) ? Dx : qx, i = arguments.length < 3;
      return r(e, Fx(t, 4), n, i, Mx);
    }
    wd.exports = Xx;
  });
  var Rd = f((Xq, xd) => {
    var kx = Bi(), Ux = ft(), Vx = Wi(), Hx = Math.max, Bx = Math.min;
    function Wx(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var i = r - 1;
      return n !== void 0 &&
        (i = Vx(n), i = n < 0 ? Hx(r + i, 0) : Bx(i, r - 1)),
        kx(e, Ux(t, 3), i, !0);
    }
    xd.exports = Wx;
  });
  var Pd = f((kq, Cd) => {
    var zx = Hi(), Kx = Rd(), jx = zx(Kx);
    Cd.exports = jx;
  });
  function Ld(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function Yx(e, t) {
    if (Ld(e, t)) return !0;
    if (
      typeof e != "object" || e === null || typeof t != "object" || t === null
    ) return !1;
    let n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++) {
      if (!Object.hasOwn(t, n[i]) || !Ld(e[n[i]], t[n[i]])) return !1;
    }
    return !0;
  }
  var vo,
    Nd = ve(() => {
      "use strict";
      vo = Yx;
    });
  var Qd = {};
  Le(Qd, {
    cleanupHTMLElement: () => zR,
    clearAllStyles: () => WR,
    clearObjectCache: () => dR,
    getActionListProgress: () => jR,
    getAffectedElements: () => To,
    getComputedStyle: () => _R,
    getDestinationValues: () => SR,
    getElementId: () => ER,
    getInstanceId: () => gR,
    getInstanceOrigin: () => bR,
    getItemConfigByKey: () => wR,
    getMaxDurationItemIndex: () => $d,
    getNamespacedParameterId: () => QR,
    getRenderType: () => Kd,
    getStyleProp: () => xR,
    mediaQueriesEqual: () => JR,
    observeStore: () => mR,
    reduceListToGroup: () => YR,
    reifyState: () => vR,
    renderHTMLElement: () => RR,
    shallowEqual: () => vo,
    shouldAllowMediaQuery: () => ZR,
    shouldNamespaceEventParameter: () => $R,
    stringifyTarget: () => eC,
  });
  function dR() {
    Er.clear();
  }
  function gR() {
    return "i" + pR++;
  }
  function ER(e, t) {
    for (let n in e) {
      let r = e[n];
      if (r && r.ref === t) return r.id;
    }
    return "e" + hR++;
  }
  function vR({ events: e, actionLists: t, site: n } = {}) {
    let r = (0, _r.default)(e, (a, s) => {
        let { eventTypeId: u } = s;
        return a[u] || (a[u] = {}), a[u][s.id] = s, a;
      }, {}),
      i = n && n.mediaQueries,
      o = [];
    return i
      ? o = i.map((a) => a.key)
      : (i = [], console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: r,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      };
  }
  function mR({ store: e, select: t, onChange: n, comparator: r = yR }) {
    let { getState: i, subscribe: o } = e, a = o(u), s = t(i());
    function u() {
      let l = t(i());
      if (l == null) {
        a();
        return;
      }
      r(l, s) || (s = l, n(s, e));
    }
    return a;
  }
  function Fd(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: n,
        objectId: r,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: n,
        objectId: r,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function To(
    { config: e, event: t, eventTarget: n, elementRoot: r, elementApi: i },
  ) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0) {
      return o.reduce((N, A) =>
        N.concat(
          To({
            config: { target: A },
            event: t,
            eventTarget: n,
            elementRoot: r,
            elementApi: i,
          }),
        ), []);
    }
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: l,
        getSiblingElements: v,
        matchSelector: p,
        elementContains: d,
        isSiblingNode: E,
      } = i,
      { target: T } = e;
    if (!T) return [];
    let {
      id: b,
      objectId: S,
      selector: m,
      selectorGuids: C,
      appliesTo: x,
      useEventTarget: D,
    } = Fd(T);
    if (S) return [Er.has(S) ? Er.get(S) : Er.set(S, {}).get(S)];
    if (x === hi.PAGE) {
      let N = a(b);
      return N ? [N] : [];
    }
    let P = (t?.action?.config?.affectedElements ?? {})[b || m] || {},
      W = !!(P.id || P.selector),
      z,
      Y,
      J,
      te = t && s(Fd(t.target));
    if (
      W
        ? (z = P.limitAffectedElements, Y = te, J = s(P))
        : Y = J = s({ id: b, selector: m, selectorGuids: C }), t && D
    ) {
      let N = n && (J || D === !0) ? [n] : u(te);
      if (J) {
        if (D === cR) return u(J).filter((A) => N.some((L) => d(A, L)));
        if (D === Dd) return u(J).filter((A) => N.some((L) => d(L, A)));
        if (D === Md) return u(J).filter((A) => N.some((L) => E(L, A)));
      }
      return N;
    }
    return Y == null || J == null
      ? []
      : Be && r
      ? u(J).filter((N) => r.contains(N))
      : z === Dd
      ? u(Y, J)
      : z === uR
      ? l(u(Y)).filter(p(J))
      : z === Md
      ? v(u(Y)).filter(p(J))
      : u(J);
  }
  function _R({ element: e, actionItem: t }) {
    if (!Be) return {};
    let { actionTypeId: n } = t;
    switch (n) {
      case Bt:
      case Wt:
      case zt:
      case Kt:
      case Tr:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function bR(e, t = {}, n = {}, r, i) {
    let { getStyle: o } = i, { actionTypeId: a } = r;
    if (mt(a)) return co(a)(t[a], r);
    switch (r.actionTypeId) {
      case Ut:
      case Vt:
      case Ht:
      case Tn:
        return t[r.actionTypeId] || bo[r.actionTypeId];
      case bn:
        return IR(t[r.actionTypeId], r.config.filters);
      case An:
        return TR(t[r.actionTypeId], r.config.fontVariations);
      case Bd:
        return { value: (0, ot.default)(parseFloat(o(e, yr)), 1) };
      case Bt: {
        let s = o(e, Je), u = o(e, et), l, v;
        return r.config.widthUnit === pt
          ? l = qd.test(s) ? parseFloat(s) : parseFloat(n.width)
          : l = (0, ot.default)(parseFloat(s), parseFloat(n.width)),
          r.config.heightUnit === pt
            ? v = qd.test(u) ? parseFloat(u) : parseFloat(n.height)
            : v = (0, ot.default)(parseFloat(u), parseFloat(n.height)),
          { widthValue: l, heightValue: v };
      }
      case Wt:
      case zt:
      case Kt:
        return VR({
          element: e,
          actionTypeId: r.actionTypeId,
          computedStyle: n,
          getStyle: o,
        });
      case Tr:
        return { value: (0, ot.default)(o(e, mr), n.display) };
      case fR:
        return t[r.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function SR({ element: e, actionItem: t, elementApi: n }) {
    if (mt(t.actionTypeId)) return lo(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case Ut:
      case Vt:
      case Ht:
      case Tn: {
        let { xValue: r, yValue: i, zValue: o } = t.config;
        return { xValue: r, yValue: i, zValue: o };
      }
      case Bt: {
        let { getStyle: r, setStyle: i, getProperty: o } = n,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: l } = t.config;
        if (!Be) return { widthValue: u, heightValue: l };
        if (a === pt) {
          let v = r(e, Je);
          i(e, Je, ""), u = o(e, "offsetWidth"), i(e, Je, v);
        }
        if (s === pt) {
          let v = r(e, et);
          i(e, et, ""), l = o(e, "offsetHeight"), i(e, et, v);
        }
        return { widthValue: u, heightValue: l };
      }
      case Wt:
      case zt:
      case Kt: {
        let { rValue: r, gValue: i, bValue: o, aValue: a, globalSwatchId: s } =
          t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = n, l = u(e, s), v = (0, kd.normalizeColor)(l);
          return {
            rValue: v.red,
            gValue: v.green,
            bValue: v.blue,
            aValue: v.alpha,
          };
        }
        return { rValue: r, gValue: i, bValue: o, aValue: a };
      }
      case bn:
        return t.config.filters.reduce(AR, {});
      case An:
        return t.config.fontVariations.reduce(OR, {});
      default: {
        let { value: r } = t.config;
        return { value: r };
      }
    }
  }
  function Kd(e) {
    if (/^TRANSFORM_/.test(e)) return Vd;
    if (/^STYLE_/.test(e)) return _o;
    if (/^GENERAL_/.test(e)) return mo;
    if (/^PLUGIN_/.test(e)) return Hd;
  }
  function xR(e, t) {
    return e === _o ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function RR(e, t, n, r, i, o, a, s, u) {
    switch (s) {
      case Vd:
        return DR(e, t, n, i, a);
      case _o:
        return HR(e, t, n, i, o, a);
      case mo:
        return BR(e, i, a);
      case Hd: {
        let { actionTypeId: l } = i;
        if (mt(l)) return fo(l)(u, t, i);
      }
    }
  }
  function DR(e, t, n, r, i) {
    let o = NR.map((s) => {
        let u = bo[s],
          {
            xValue: l = u.xValue,
            yValue: v = u.yValue,
            zValue: p = u.zValue,
            xUnit: d = "",
            yUnit: E = "",
            zUnit: T = "",
          } = t[s] || {};
        switch (s) {
          case Ut:
            return `${Zx}(${l}${d}, ${v}${E}, ${p}${T})`;
          case Vt:
            return `${Jx}(${l}${d}, ${v}${E}, ${p}${T})`;
          case Ht:
            return `${eR}(${l}${d}) ${tR}(${v}${E}) ${nR}(${p}${T})`;
          case Tn:
            return `${rR}(${l}${d}, ${v}${E})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    It(e, dt, i), a(e, dt, o), qR(r, n) && a(e, lr, iR);
  }
  function MR(e, t, n, r) {
    let i = (0, _r.default)(t, (a, s, u) => `${a} ${u}(${s}${LR(u, n)})`, ""),
      { setStyle: o } = r;
    It(e, mn, r), o(e, mn, i);
  }
  function FR(e, t, n, r) {
    let i = (0, _r.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), [])
        .join(", "),
      { setStyle: o } = r;
    It(e, _n, r), o(e, _n, i);
  }
  function qR({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
    return e === Ut && r !== void 0 || e === Vt && r !== void 0 ||
      e === Ht && (t !== void 0 || n !== void 0);
  }
  function UR(e, t) {
    let n = e.exec(t);
    return n ? n[1] : "";
  }
  function VR({ element: e, actionTypeId: t, computedStyle: n, getStyle: r }) {
    let i = Io[t],
      o = r(e, i),
      a = XR.test(o) ? o : n[i],
      s = UR(kR, a).split(In);
    return {
      rValue: (0, ot.default)(parseInt(s[0], 10), 255),
      gValue: (0, ot.default)(parseInt(s[1], 10), 255),
      bValue: (0, ot.default)(parseInt(s[2], 10), 255),
      aValue: (0, ot.default)(parseFloat(s[3]), 1),
    };
  }
  function HR(e, t, n, r, i, o) {
    let { setStyle: a } = o;
    switch (r.actionTypeId) {
      case Bt: {
        let { widthUnit: s = "", heightUnit: u = "" } = r.config,
          { widthValue: l, heightValue: v } = n;
        l !== void 0 && (s === pt && (s = "px"), It(e, Je, o), a(e, Je, l + s)),
          v !== void 0 &&
          (u === pt && (u = "px"), It(e, et, o), a(e, et, v + u));
        break;
      }
      case bn: {
        MR(e, n, r.config, o);
        break;
      }
      case An: {
        FR(e, n, r.config, o);
        break;
      }
      case Wt:
      case zt:
      case Kt: {
        let s = Io[r.actionTypeId],
          u = Math.round(n.rValue),
          l = Math.round(n.gValue),
          v = Math.round(n.bValue),
          p = n.aValue;
        It(e, s, o),
          a(e, s, p >= 1 ? `rgb(${u},${l},${v})` : `rgba(${u},${l},${v},${p})`);
        break;
      }
      default: {
        let { unit: s = "" } = r.config;
        It(e, i, o), a(e, i, n.value + s);
        break;
      }
    }
  }
  function BR(e, t, n) {
    let { setStyle: r } = n;
    switch (t.actionTypeId) {
      case Tr: {
        let { value: i } = t.config;
        i === oR && Be ? r(e, mr, Ki) : r(e, mr, i);
        return;
      }
    }
  }
  function It(e, t, n) {
    if (!Be) return;
    let r = zd[t];
    if (!r) return;
    let { getStyle: i, setStyle: o } = n, a = i(e, kt);
    if (!a) {
      o(e, kt, r);
      return;
    }
    let s = a.split(In).map(Wd);
    s.indexOf(r) === -1 && o(e, kt, s.concat(r).join(In));
  }
  function jd(e, t, n) {
    if (!Be) return;
    let r = zd[t];
    if (!r) return;
    let { getStyle: i, setStyle: o } = n, a = i(e, kt);
    !a || a.indexOf(r) === -1 ||
      o(e, kt, a.split(In).map(Wd).filter((s) => s !== r).join(In));
  }
  function WR({ store: e, elementApi: t }) {
    let { ixData: n } = e.getState(),
      { events: r = {}, actionLists: i = {} } = n;
    Object.keys(r).forEach((o) => {
      let a = r[o], { config: s } = a.action, { actionListId: u } = s, l = i[u];
      l && Gd({ actionList: l, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Gd({ actionList: i[o], elementApi: t });
      });
  }
  function Gd({ actionList: e = {}, event: t, elementApi: n }) {
    let { actionItemGroups: r, continuousParameterGroups: i } = e;
    r && r.forEach((o) => {
      Xd({ actionGroup: o, event: t, elementApi: n });
    }),
      i && i.forEach((o) => {
        let { continuousActionGroups: a } = o;
        a.forEach((s) => {
          Xd({ actionGroup: s, event: t, elementApi: n });
        });
      });
  }
  function Xd({ actionGroup: e, event: t, elementApi: n }) {
    let { actionItems: r } = e;
    r.forEach((i) => {
      let { actionTypeId: o, config: a } = i, s;
      mt(o)
        ? s = (u) => po(o)(u, i)
        : s = Yd({ effect: KR, actionTypeId: o, elementApi: n }),
        To({ config: a, event: t, elementApi: n }).forEach(s);
    });
  }
  function zR(e, t, n) {
    let { setStyle: r, getStyle: i } = n, { actionTypeId: o } = t;
    if (o === Bt) {
      let { config: a } = t;
      a.widthUnit === pt && r(e, Je, ""), a.heightUnit === pt && r(e, et, "");
    }
    i(e, kt) && Yd({ effect: jd, actionTypeId: o, elementApi: n })(e);
  }
  function KR(e, t, n) {
    let { setStyle: r } = n;
    jd(e, t, n), r(e, t, ""), t === dt && r(e, lr, "");
  }
  function $d(e) {
    let t = 0, n = 0;
    return e.forEach((r, i) => {
      let { config: o } = r, a = o.delay + o.duration;
      a >= t && (t = a, n = i);
    }),
      n;
  }
  function jR(e, t) {
    let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return n.forEach((u, l) => {
      if (r && l === 0) return;
      let { actionItems: v } = u,
        p = v[$d(v)],
        { config: d, actionTypeId: E } = p;
      i.id === p.id && (s = a + o);
      let T = Kd(E) === mo ? 0 : d.duration;
      a += d.delay + T;
    }),
      a > 0 ? yn(s / a) : 0;
  }
  function YR({ actionList: e, actionItemId: t, rawData: n }) {
    let { actionItemGroups: r, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (o.push(
        (0, Ir.mergeIn)(s, ["config"], { delay: 0, duration: 0 }),
      ),
        s.id === t);
    return r && r.some(({ actionItems: s }) => s.some(a)),
      i && i.some((s) => {
        let { continuousActionGroups: u } = s;
        return u.some(({ actionItems: l }) => l.some(a));
      }),
      (0, Ir.setIn)(n, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      });
  }
  function $R(e, { basedOn: t }) {
    return e === He.SCROLLING_IN_VIEW && (t === Qe.ELEMENT || t == null) ||
      e === He.MOUSE_MOVE && t === Qe.ELEMENT;
  }
  function QR(e, t) {
    return e + lR + t;
  }
  function ZR(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function JR(e, t) {
    return vo(e && e.sort(), t && t.sort());
  }
  function eC(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + yo + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
    return t + yo + n + yo + r;
  }
  var ot,
    _r,
    vr,
    Ir,
    kd,
    $x,
    Qx,
    Zx,
    Jx,
    eR,
    tR,
    nR,
    rR,
    iR,
    oR,
    yr,
    mn,
    _n,
    Je,
    et,
    Ud,
    aR,
    sR,
    Dd,
    uR,
    Md,
    cR,
    mr,
    kt,
    pt,
    In,
    lR,
    yo,
    Vd,
    mo,
    _o,
    Hd,
    Ut,
    Vt,
    Ht,
    Tn,
    Bd,
    bn,
    An,
    Bt,
    Wt,
    zt,
    Kt,
    Tr,
    fR,
    Wd,
    Io,
    zd,
    Er,
    pR,
    hR,
    yR,
    qd,
    IR,
    TR,
    AR,
    OR,
    wR,
    bo,
    CR,
    PR,
    LR,
    NR,
    GR,
    XR,
    kR,
    Yd,
    Zd = ve(() => {
      "use strict";
      ot = fe(pd()), _r = fe(Sd()), vr = fe(Pd()), Ir = fe(Ct());
      Ne();
      Nd();
      $i();
      kd = fe(io());
      go();
      fr();
      ({
        BACKGROUND: $x,
        TRANSFORM: Qx,
        TRANSLATE_3D: Zx,
        SCALE_3D: Jx,
        ROTATE_X: eR,
        ROTATE_Y: tR,
        ROTATE_Z: nR,
        SKEW: rR,
        PRESERVE_3D: iR,
        FLEX: oR,
        OPACITY: yr,
        FILTER: mn,
        FONT_VARIATION_SETTINGS: _n,
        WIDTH: Je,
        HEIGHT: et,
        BACKGROUND_COLOR: Ud,
        BORDER_COLOR: aR,
        COLOR: sR,
        CHILDREN: Dd,
        IMMEDIATE_CHILDREN: uR,
        SIBLINGS: Md,
        PARENT: cR,
        DISPLAY: mr,
        WILL_CHANGE: kt,
        AUTO: pt,
        COMMA_DELIMITER: In,
        COLON_DELIMITER: lR,
        BAR_DELIMITER: yo,
        RENDER_TRANSFORM: Vd,
        RENDER_GENERAL: mo,
        RENDER_STYLE: _o,
        RENDER_PLUGIN: Hd,
      } = Oe),
        {
          TRANSFORM_MOVE: Ut,
          TRANSFORM_SCALE: Vt,
          TRANSFORM_ROTATE: Ht,
          TRANSFORM_SKEW: Tn,
          STYLE_OPACITY: Bd,
          STYLE_FILTER: bn,
          STYLE_FONT_VARIATION: An,
          STYLE_SIZE: Bt,
          STYLE_BACKGROUND_COLOR: Wt,
          STYLE_BORDER: zt,
          STYLE_TEXT_COLOR: Kt,
          GENERAL_DISPLAY: Tr,
          OBJECT_VALUE: fR,
        } = xe,
        Wd = (e) => e.trim(),
        Io = Object.freeze({ [Wt]: Ud, [zt]: aR, [Kt]: sR }),
        zd = Object.freeze({
          [dt]: Qx,
          [Ud]: $x,
          [yr]: yr,
          [mn]: mn,
          [Je]: Je,
          [et]: et,
          [_n]: _n,
        }),
        Er = new Map();
      pR = 1;
      hR = 1;
      yR = (e, t) => e === t;
      qd = /px/,
        IR = (e, t) =>
          t.reduce(
            (n, r) => (n[r.type] == null && (n[r.type] = CR[r.type]), n),
            e || {},
          ),
        TR = (e, t) =>
          t.reduce(
            (
              n,
              r,
            ) => (n[r.type] == null &&
              (n[r.type] = PR[r.type] || r.defaultValue || 0),
              n),
            e || {},
          );
      AR = (e, t) => (t && (e[t.type] = t.value || 0), e),
        OR = (e, t) => (t && (e[t.type] = t.value || 0), e),
        wR = (e, t, n) => {
          if (mt(e)) return uo(e)(n, t);
          switch (e) {
            case bn: {
              let r = (0, vr.default)(n.filters, ({ type: i }) => i === t);
              return r ? r.value : 0;
            }
            case An: {
              let r = (0, vr.default)(
                n.fontVariations,
                ({ type: i }) => i === t,
              );
              return r ? r.value : 0;
            }
            default:
              return n[t];
          }
        };
      bo = {
        [Ut]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Vt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Ht]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Tn]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
        CR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        PR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        LR = (e, t) => {
          let n = (0, vr.default)(t.filters, ({ type: r }) => r === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        NR = Object.keys(bo);
      GR = "\\(([^)]+)\\)", XR = /^rgb/, kR = RegExp(`rgba?${GR}`);
      Yd = ({ effect: e, actionTypeId: t, elementApi: n }) => (r) => {
        switch (t) {
          case Ut:
          case Vt:
          case Ht:
          case Tn:
            e(r, dt, n);
            break;
          case bn:
            e(r, mn, n);
            break;
          case An:
            e(r, _n, n);
            break;
          case Bd:
            e(r, yr, n);
            break;
          case Bt:
            e(r, Je, n), e(r, et, n);
            break;
          case Wt:
          case zt:
          case Kt:
            e(r, Io[t], n);
            break;
          case Tr:
            e(r, mr, n);
            break;
        }
      };
    });
  var Tt = f((Ao) => {
    "use strict";
    Object.defineProperty(Ao, "__esModule", { value: !0 });
    function tC(e, t) {
      for (var n in t) {
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }
    }
    tC(Ao, {
      IX2BrowserSupport: function () {
        return nC;
      },
      IX2EasingUtils: function () {
        return iC;
      },
      IX2Easings: function () {
        return rC;
      },
      IX2ElementsReducer: function () {
        return oC;
      },
      IX2VanillaPlugins: function () {
        return aC;
      },
      IX2VanillaUtils: function () {
        return sC;
      },
    });
    var nC = jt((fr(), je(Wf))),
      rC = jt((Yi(), je(vn))),
      iC = jt(($i(), je(Zf))),
      oC = jt((nd(), je(td))),
      aC = jt((go(), je(fd))),
      sC = jt((Zd(), je(Qd)));
    function Jd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(), n = new WeakMap();
      return (Jd = function (r) {
        return r ? n : t;
      })(e);
    }
    function jt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") {
        return { default: e };
      }
      var n = Jd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e) {
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o];
        }
      }
      return r.default = e, n && n.set(e, r), r;
    }
  });
  var Ar,
    at,
    uC,
    cC,
    lC,
    fC,
    dC,
    pC,
    br,
    ep,
    gC,
    hC,
    Oo,
    EC,
    vC,
    yC,
    mC,
    tp,
    np = ve(() => {
      "use strict";
      Ne();
      Ar = fe(Tt()),
        at = fe(Ct()),
        {
          IX2_RAW_DATA_IMPORTED: uC,
          IX2_SESSION_STOPPED: cC,
          IX2_INSTANCE_ADDED: lC,
          IX2_INSTANCE_STARTED: fC,
          IX2_INSTANCE_REMOVED: dC,
          IX2_ANIMATION_FRAME_CHANGED: pC,
        } = Te,
        { optimizeFloat: br, applyEasing: ep, createBezierEasing: gC } =
          Ar.IX2EasingUtils,
        { RENDER_GENERAL: hC } = Oe,
        { getItemConfigByKey: Oo, getRenderType: EC, getStyleProp: vC } =
          Ar.IX2VanillaUtils,
        yC = (e, t) => {
          let {
              position: n,
              parameterId: r,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: l,
              skipMotion: v,
              skipToValue: p,
            } = e,
            { parameters: d } = t.payload,
            E = Math.max(1 - a, .01),
            T = d[r];
          T == null && (E = 1, T = s);
          let b = Math.max(T, 0) || 0,
            S = br(b - n),
            m = v ? p : br(n + S * E),
            C = m * 100;
          if (m === n && e.current) return e;
          let x, D, F, P;
          for (let z = 0, { length: Y } = i; z < Y; z++) {
            let { keyframe: J, actionItems: te } = i[z];
            if (z === 0 && (x = te[0]), C >= J) {
              x = te[0];
              let N = i[z + 1], A = N && C !== J;
              D = A ? N.actionItems[0] : null,
                A && (F = J / 100, P = (N.keyframe - J) / 100);
            }
          }
          let W = {};
          if (x && !D) {
            for (let z = 0, { length: Y } = o; z < Y; z++) {
              let J = o[z];
              W[J] = Oo(u, J, x.config);
            }
          } else if (x && D && F !== void 0 && P !== void 0) {
            let z = (m - F) / P, Y = x.config.easing, J = ep(Y, z, l);
            for (let te = 0, { length: N } = o; te < N; te++) {
              let A = o[te],
                L = Oo(u, A, x.config),
                re = (Oo(u, A, D.config) - L) * J + L;
              W[A] = re;
            }
          }
          return (0, at.merge)(e, { position: m, current: W });
        },
        mC = (e, t) => {
          let {
              active: n,
              origin: r,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: l,
              destinationKeys: v,
              pluginDuration: p,
              instanceDelay: d,
              customEasingFn: E,
              skipMotion: T,
            } = e,
            b = u.config.easing,
            { duration: S, delay: m } = u.config;
          p != null && (S = p),
            m = d ?? m,
            a === hC ? S = 0 : (o || T) && (S = m = 0);
          let { now: C } = t.payload;
          if (n && r) {
            let x = C - (i + m);
            if (s) {
              let z = C - i, Y = S + m, J = br(Math.min(Math.max(0, z / Y), 1));
              e = (0, at.set)(e, "verboseTimeElapsed", Y * J);
            }
            if (x < 0) return e;
            let D = br(Math.min(Math.max(0, x / S), 1)),
              F = ep(b, D, E),
              P = {},
              W = null;
            return v.length && (W = v.reduce((z, Y) => {
              let J = l[Y],
                te = parseFloat(r[Y]) || 0,
                A = (parseFloat(J) - te) * F + te;
              return z[Y] = A, z;
            }, {})),
              P.current = W,
              P.position = D,
              D === 1 && (P.active = !1, P.complete = !0),
              (0, at.merge)(e, P);
          }
          return e;
        },
        tp = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case uC:
              return t.payload.ixInstances || Object.freeze({});
            case cC:
              return Object.freeze({});
            case lC: {
              let {
                  instanceId: n,
                  elementId: r,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: l,
                  isCarrier: v,
                  origin: p,
                  destination: d,
                  immediate: E,
                  verbose: T,
                  continuous: b,
                  parameterId: S,
                  actionGroups: m,
                  smoothing: C,
                  restingValue: x,
                  pluginInstance: D,
                  pluginDuration: F,
                  instanceDelay: P,
                  skipMotion: W,
                  skipToValue: z,
                } = t.payload,
                { actionTypeId: Y } = i,
                J = EC(Y),
                te = vC(J, Y),
                N = Object.keys(d).filter((L) =>
                  d[L] != null && typeof d[L] != "string"
                ),
                { easing: A } = i.config;
              return (0, at.set)(e, n, {
                id: n,
                elementId: r,
                active: !1,
                position: 0,
                start: 0,
                origin: p,
                destination: d,
                destinationKeys: N,
                immediate: E,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: Y,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: l,
                renderType: J,
                isCarrier: v,
                styleProp: te,
                continuous: b,
                parameterId: S,
                actionGroups: m,
                smoothing: C,
                restingValue: x,
                pluginInstance: D,
                pluginDuration: F,
                instanceDelay: P,
                skipMotion: W,
                skipToValue: z,
                customEasingFn: Array.isArray(A) && A.length === 4
                  ? gC(A)
                  : void 0,
              });
            }
            case fC: {
              let { instanceId: n, time: r } = t.payload;
              return (0, at.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: r,
              });
            }
            case dC: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let r = {}, i = Object.keys(e), { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== n && (r[s] = e[s]);
              }
              return r;
            }
            case pC: {
              let n = e, r = Object.keys(e), { length: i } = r;
              for (let o = 0; o < i; o++) {
                let a = r[o], s = e[a], u = s.continuous ? yC : mC;
                n = (0, at.set)(n, a, u(s, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    });
  var _C,
    IC,
    TC,
    rp,
    ip = ve(() => {
      "use strict";
      Ne();
      ({
        IX2_RAW_DATA_IMPORTED: _C,
        IX2_SESSION_STOPPED: IC,
        IX2_PARAMETER_CHANGED: TC,
      } = Te),
        rp = (e = {}, t) => {
          switch (t.type) {
            case _C:
              return t.payload.ixParameters || {};
            case IC:
              return {};
            case TC: {
              let { key: n, value: r } = t.payload;
              return e[n] = r, e;
            }
            default:
              return e;
          }
        };
    });
  var sp = {};
  Le(sp, { default: () => AC });
  var op,
    ap,
    bC,
    AC,
    up = ve(() => {
      "use strict";
      op = fe(gi());
      hs();
      Fs();
      Xs();
      ap = fe(Tt());
      np();
      ip();
      ({ ixElements: bC } = ap.IX2ElementsReducer),
        AC = (0, op.combineReducers)({
          ixData: gs,
          ixRequest: Ms,
          ixSession: Gs,
          ixElements: bC,
          ixInstances: tp,
          ixParameters: rp,
        });
    });
  var lp = f((iG, cp) => {
    var OC = ct(), wC = be(), SC = rt(), xC = "[object String]";
    function RC(e) {
      return typeof e == "string" || !wC(e) && SC(e) && OC(e) == xC;
    }
    cp.exports = RC;
  });
  var dp = f((oG, fp) => {
    var CC = Vi(), PC = CC("length");
    fp.exports = PC;
  });
  var gp = f((aG, pp) => {
    var LC = "\\ud800-\\udfff",
      NC = "\\u0300-\\u036f",
      DC = "\\ufe20-\\ufe2f",
      MC = "\\u20d0-\\u20ff",
      FC = NC + DC + MC,
      qC = "\\ufe0e\\ufe0f",
      GC = "\\u200d",
      XC = RegExp("[" + GC + LC + FC + qC + "]");
    function kC(e) {
      return XC.test(e);
    }
    pp.exports = kC;
  });
  var bp = f((sG, Tp) => {
    var Ep = "\\ud800-\\udfff",
      UC = "\\u0300-\\u036f",
      VC = "\\ufe20-\\ufe2f",
      HC = "\\u20d0-\\u20ff",
      BC = UC + VC + HC,
      WC = "\\ufe0e\\ufe0f",
      zC = "[" + Ep + "]",
      wo = "[" + BC + "]",
      So = "\\ud83c[\\udffb-\\udfff]",
      KC = "(?:" + wo + "|" + So + ")",
      vp = "[^" + Ep + "]",
      yp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      mp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      jC = "\\u200d",
      _p = KC + "?",
      Ip = "[" + WC + "]?",
      YC = "(?:" + jC + "(?:" + [vp, yp, mp].join("|") + ")" + Ip + _p + ")*",
      $C = Ip + _p + YC,
      QC = "(?:" + [vp + wo + "?", wo, yp, mp, zC].join("|") + ")",
      hp = RegExp(So + "(?=" + So + ")|" + QC + $C, "g");
    function ZC(e) {
      for (var t = hp.lastIndex = 0; hp.test(e);) ++t;
      return t;
    }
    Tp.exports = ZC;
  });
  var Op = f((uG, Ap) => {
    var JC = dp(), eP = gp(), tP = bp();
    function nP(e) {
      return eP(e) ? tP(e) : JC(e);
    }
    Ap.exports = nP;
  });
  var Sp = f((cG, wp) => {
    var rP = tr(),
      iP = nr(),
      oP = vt(),
      aP = lp(),
      sP = Op(),
      uP = "[object Map]",
      cP = "[object Set]";
    function lP(e) {
      if (e == null) return 0;
      if (oP(e)) return aP(e) ? sP(e) : e.length;
      var t = iP(e);
      return t == uP || t == cP ? e.size : rP(e).length;
    }
    wp.exports = lP;
  });
  var Rp = f((lG, xp) => {
    var fP = "Expected a function";
    function dP(e) {
      if (typeof e != "function") throw new TypeError(fP);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    xp.exports = dP;
  });
  var xo = f((fG, Cp) => {
    var pP = lt(),
      gP = function () {
        try {
          var e = pP(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      }();
    Cp.exports = gP;
  });
  var Ro = f((dG, Lp) => {
    var Pp = xo();
    function hP(e, t, n) {
      t == "__proto__" && Pp
        ? Pp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : e[t] = n;
    }
    Lp.exports = hP;
  });
  var Dp = f((pG, Np) => {
    var EP = Ro(), vP = Wn(), yP = Object.prototype, mP = yP.hasOwnProperty;
    function _P(e, t, n) {
      var r = e[t];
      (!(mP.call(e, t) && vP(r, n)) || n === void 0 && !(t in e)) &&
        EP(e, t, n);
    }
    Np.exports = _P;
  });
  var qp = f((gG, Fp) => {
    var IP = Dp(), TP = gn(), bP = Qn(), Mp = Ze(), AP = Gt();
    function OP(e, t, n, r) {
      if (!Mp(e)) return e;
      t = TP(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
        var u = AP(t[i]), l = n;
        if (u === "__proto__" || u === "constructor" || u === "prototype") {
          return e;
        }
        if (i != a) {
          var v = s[u];
          l = r ? r(v, u, s) : void 0,
            l === void 0 && (l = Mp(v) ? v : bP(t[i + 1]) ? [] : {});
        }
        IP(s, u, l), s = s[u];
      }
      return e;
    }
    Fp.exports = OP;
  });
  var Xp = f((hG, Gp) => {
    var wP = or(), SP = qp(), xP = gn();
    function RP(e, t, n) {
      for (var r = -1, i = t.length, o = {}; ++r < i;) {
        var a = t[r], s = wP(e, a);
        n(s, a) && SP(o, xP(a, e), s);
      }
      return o;
    }
    Gp.exports = RP;
  });
  var Up = f((EG, kp) => {
    var CP = Yn(),
      PP = ti(),
      LP = Si(),
      NP = wi(),
      DP = Object.getOwnPropertySymbols,
      MP = DP
        ? function (e) {
          for (var t = []; e;) CP(t, LP(e)), e = PP(e);
          return t;
        }
        : NP;
    kp.exports = MP;
  });
  var Hp = f((vG, Vp) => {
    function FP(e) {
      var t = [];
      if (e != null) { for (var n in Object(e)) t.push(n); }
      return t;
    }
    Vp.exports = FP;
  });
  var Wp = f((yG, Bp) => {
    var qP = Ze(),
      GP = er(),
      XP = Hp(),
      kP = Object.prototype,
      UP = kP.hasOwnProperty;
    function VP(e) {
      if (!qP(e)) return XP(e);
      var t = GP(e), n = [];
      for (var r in e) r == "constructor" && (t || !UP.call(e, r)) || n.push(r);
      return n;
    }
    Bp.exports = VP;
  });
  var Kp = f((mG, zp) => {
    var HP = Ri(), BP = Wp(), WP = vt();
    function zP(e) {
      return WP(e) ? HP(e, !0) : BP(e);
    }
    zp.exports = zP;
  });
  var Yp = f((_G, jp) => {
    var KP = Oi(), jP = Up(), YP = Kp();
    function $P(e) {
      return KP(e, YP, jP);
    }
    jp.exports = $P;
  });
  var Qp = f((IG, $p) => {
    var QP = Ui(), ZP = ft(), JP = Xp(), eL = Yp();
    function tL(e, t) {
      if (e == null) return {};
      var n = QP(eL(e), function (r) {
        return [r];
      });
      return t = ZP(t),
        JP(e, n, function (r, i) {
          return t(r, i[0]);
        });
    }
    $p.exports = tL;
  });
  var Jp = f((TG, Zp) => {
    var nL = ft(), rL = Rp(), iL = Qp();
    function oL(e, t) {
      return iL(e, rL(nL(t)));
    }
    Zp.exports = oL;
  });
  var tg = f((bG, eg) => {
    var aL = tr(),
      sL = nr(),
      uL = un(),
      cL = be(),
      lL = vt(),
      fL = $n(),
      dL = er(),
      pL = Jn(),
      gL = "[object Map]",
      hL = "[object Set]",
      EL = Object.prototype,
      vL = EL.hasOwnProperty;
    function yL(e) {
      if (e == null) return !0;
      if (
        lL(e) &&
        (cL(e) || typeof e == "string" || typeof e.splice == "function" ||
          fL(e) || pL(e) || uL(e))
      ) return !e.length;
      var t = sL(e);
      if (t == gL || t == hL) return !e.size;
      if (dL(e)) return !aL(e).length;
      for (var n in e) if (vL.call(e, n)) return !1;
      return !0;
    }
    eg.exports = yL;
  });
  var rg = f((AG, ng) => {
    var mL = Ro(), _L = ho(), IL = ft();
    function TL(e, t) {
      var n = {};
      return t = IL(t, 3),
        _L(e, function (r, i, o) {
          mL(n, i, t(r, i, o));
        }),
        n;
    }
    ng.exports = TL;
  });
  var og = f((OG, ig) => {
    function bL(e, t) {
      for (
        var n = -1, r = e == null ? 0 : e.length;
        ++n < r && t(e[n], n, e) !== !1;
      );
      return e;
    }
    ig.exports = bL;
  });
  var sg = f((wG, ag) => {
    var AL = sr();
    function OL(e) {
      return typeof e == "function" ? e : AL;
    }
    ag.exports = OL;
  });
  var cg = f((SG, ug) => {
    var wL = og(), SL = Eo(), xL = sg(), RL = be();
    function CL(e, t) {
      var n = RL(e) ? wL : SL;
      return n(e, xL(t));
    }
    ug.exports = CL;
  });
  var fg = f((xG, lg) => {
    var PL = Ve(),
      LL = function () {
        return PL.Date.now();
      };
    lg.exports = LL;
  });
  var gg = f((RG, pg) => {
    var NL = Ze(),
      Co = fg(),
      dg = ur(),
      DL = "Expected a function",
      ML = Math.max,
      FL = Math.min;
    function qL(e, t, n) {
      var r, i, o, a, s, u, l = 0, v = !1, p = !1, d = !0;
      if (typeof e != "function") throw new TypeError(DL);
      t = dg(t) || 0,
        NL(n) &&
        (v = !!n.leading,
          p = "maxWait" in n,
          o = p ? ML(dg(n.maxWait) || 0, t) : o,
          d = "trailing" in n ? !!n.trailing : d);
      function E(P) {
        var W = r, z = i;
        return r = i = void 0, l = P, a = e.apply(z, W), a;
      }
      function T(P) {
        return l = P, s = setTimeout(m, t), v ? E(P) : a;
      }
      function b(P) {
        var W = P - u, z = P - l, Y = t - W;
        return p ? FL(Y, o - z) : Y;
      }
      function S(P) {
        var W = P - u, z = P - l;
        return u === void 0 || W >= t || W < 0 || p && z >= o;
      }
      function m() {
        var P = Co();
        if (S(P)) return C(P);
        s = setTimeout(m, b(P));
      }
      function C(P) {
        return s = void 0, d && r ? E(P) : (r = i = void 0, a);
      }
      function x() {
        s !== void 0 && clearTimeout(s),
          l = 0,
          r =
            u =
            i =
            s =
              void 0;
      }
      function D() {
        return s === void 0 ? a : C(Co());
      }
      function F() {
        var P = Co(), W = S(P);
        if (r = arguments, i = this, u = P, W) {
          if (s === void 0) return T(u);
          if (p) return clearTimeout(s), s = setTimeout(m, t), E(u);
        }
        return s === void 0 && (s = setTimeout(m, t)), a;
      }
      return F.cancel = x, F.flush = D, F;
    }
    pg.exports = qL;
  });
  var Eg = f((CG, hg) => {
    var GL = gg(), XL = Ze(), kL = "Expected a function";
    function UL(e, t, n) {
      var r = !0, i = !0;
      if (typeof e != "function") throw new TypeError(kL);
      return XL(n) &&
        (r = "leading" in n ? !!n.leading : r,
          i = "trailing" in n ? !!n.trailing : i),
        GL(e, t, { leading: r, maxWait: t, trailing: i });
    }
    hg.exports = UL;
  });
  var yg = {};
  Le(yg, {
    actionListPlaybackChanged: () => $t,
    animationFrameChanged: () => wr,
    clearRequested: () => dN,
    elementStateChanged: () => Go,
    eventListenerAdded: () => Or,
    eventStateChanged: () => Mo,
    instanceAdded: () => Fo,
    instanceRemoved: () => qo,
    instanceStarted: () => Sr,
    mediaQueriesDefined: () => ko,
    parameterChanged: () => Yt,
    playbackRequested: () => lN,
    previewRequested: () => cN,
    rawDataImported: () => Po,
    sessionInitialized: () => Lo,
    sessionStarted: () => No,
    sessionStopped: () => Do,
    stopRequested: () => fN,
    testFrameRendered: () => pN,
    viewportWidthChanged: () => Xo,
  });
  var vg,
    VL,
    HL,
    BL,
    WL,
    zL,
    KL,
    jL,
    YL,
    $L,
    QL,
    ZL,
    JL,
    eN,
    tN,
    nN,
    rN,
    iN,
    oN,
    aN,
    sN,
    uN,
    Po,
    Lo,
    No,
    Do,
    cN,
    lN,
    fN,
    dN,
    Or,
    pN,
    Mo,
    wr,
    Yt,
    Fo,
    Sr,
    qo,
    Go,
    $t,
    Xo,
    ko,
    xr = ve(() => {
      "use strict";
      Ne();
      vg = fe(Tt()),
        {
          IX2_RAW_DATA_IMPORTED: VL,
          IX2_SESSION_INITIALIZED: HL,
          IX2_SESSION_STARTED: BL,
          IX2_SESSION_STOPPED: WL,
          IX2_PREVIEW_REQUESTED: zL,
          IX2_PLAYBACK_REQUESTED: KL,
          IX2_STOP_REQUESTED: jL,
          IX2_CLEAR_REQUESTED: YL,
          IX2_EVENT_LISTENER_ADDED: $L,
          IX2_TEST_FRAME_RENDERED: QL,
          IX2_EVENT_STATE_CHANGED: ZL,
          IX2_ANIMATION_FRAME_CHANGED: JL,
          IX2_PARAMETER_CHANGED: eN,
          IX2_INSTANCE_ADDED: tN,
          IX2_INSTANCE_STARTED: nN,
          IX2_INSTANCE_REMOVED: rN,
          IX2_ELEMENT_STATE_CHANGED: iN,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: oN,
          IX2_VIEWPORT_WIDTH_CHANGED: aN,
          IX2_MEDIA_QUERIES_DEFINED: sN,
        } = Te,
        { reifyState: uN } = vg.IX2VanillaUtils,
        Po = (e) => ({ type: VL, payload: { ...uN(e) } }),
        Lo = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: HL,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        No = () => ({ type: BL }),
        Do = () => ({ type: WL }),
        cN = ({ rawData: e, defer: t }) => ({
          type: zL,
          payload: { defer: t, rawData: e },
        }),
        lN = (
          {
            actionTypeId: e = xe.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: n,
            eventId: r,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: s,
            rawData: u,
          },
        ) => ({
          type: KL,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: a,
            eventId: r,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        }),
        fN = (e) => ({ type: jL, payload: { actionListId: e } }),
        dN = () => ({ type: YL }),
        Or = (e, t) => ({
          type: $L,
          payload: { target: e, listenerParams: t },
        }),
        pN = (e = 1) => ({ type: QL, payload: { step: e } }),
        Mo = (e, t) => ({ type: ZL, payload: { stateKey: e, newState: t } }),
        wr = (e, t) => ({ type: JL, payload: { now: e, parameters: t } }),
        Yt = (e, t) => ({ type: eN, payload: { key: e, value: t } }),
        Fo = (e) => ({ type: tN, payload: { ...e } }),
        Sr = (e, t) => ({ type: nN, payload: { instanceId: e, time: t } }),
        qo = (e) => ({ type: rN, payload: { instanceId: e } }),
        Go = (e, t, n, r) => ({
          type: iN,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: r },
        }),
        $t = ({ actionListId: e, isPlaying: t }) => ({
          type: oN,
          payload: { actionListId: e, isPlaying: t },
        }),
        Xo = ({ width: e, mediaQueries: t }) => ({
          type: aN,
          payload: { width: e, mediaQueries: t },
        }),
        ko = () => ({ type: sN });
    });
  var Ce = {};
  Le(Ce, {
    elementContains: () => Ho,
    getChildElements: () => bN,
    getClosestElement: () => On,
    getProperty: () => yN,
    getQuerySelector: () => Vo,
    getRefType: () => Bo,
    getSiblingElements: () => AN,
    getStyle: () => vN,
    getValidDocument: () => _N,
    isSiblingNode: () => TN,
    matchSelector: () => mN,
    queryDocument: () => IN,
    setStyle: () => EN,
  });
  function EN(e, t, n) {
    e.style[t] = n;
  }
  function vN(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function yN(e, t) {
    return e[t];
  }
  function mN(e) {
    return (t) => t[Uo](e);
  }
  function Vo({ id: e, selector: t }) {
    if (e) {
      let n = e;
      if (e.indexOf(mg) !== -1) {
        let r = e.split(mg), i = r[0];
        if (n = r[1], i !== document.documentElement.getAttribute(Ig)) {
          return null;
        }
      }
      return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
    }
    return t;
  }
  function _N(e) {
    return e == null || e === document.documentElement.getAttribute(Ig)
      ? document
      : null;
  }
  function IN(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e),
    );
  }
  function Ho(e, t) {
    return e.contains(t);
  }
  function TN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function bN(e) {
    let t = [];
    for (let n = 0, { length: r } = e || []; n < r; n++) {
      let { children: i } = e[n], { length: o } = i;
      if (o) { for (let a = 0; a < o; a++) t.push(i[a]); }
    }
    return t;
  }
  function AN(e = []) {
    let t = [], n = [];
    for (let r = 0, { length: i } = e; r < i; r++) {
      let { parentNode: o } = e[r];
      if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1) {
        continue;
      }
      n.push(o);
      let a = o.firstElementChild;
      for (; a != null;) {
        e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling;
      }
    }
    return t;
  }
  function Bo(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element ? gN : hN
      : null;
  }
  var _g,
    Uo,
    mg,
    gN,
    hN,
    Ig,
    On,
    Tg = ve(() => {
      "use strict";
      _g = fe(Tt());
      Ne();
      ({ ELEMENT_MATCHES: Uo } = _g.IX2BrowserSupport),
        {
          IX2_ID_DELIMITER: mg,
          HTML_ELEMENT: gN,
          PLAIN_OBJECT: hN,
          WF_PAGE: Ig,
        } = Oe;
      On = Element.prototype.closest
        ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null
        : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let n = e;
          do {
            if (n[Uo] && n[Uo](t)) return n;
            n = n.parentNode;
          } while (n != null);
          return null;
        };
    });
  var Wo = f((NG, Ag) => {
    var ON = Ze(),
      bg = Object.create,
      wN = function () {
        function e() {}
        return function (t) {
          if (!ON(t)) return {};
          if (bg) return bg(t);
          e.prototype = t;
          var n = new e();
          return e.prototype = void 0, n;
        };
      }();
    Ag.exports = wN;
  });
  var Rr = f((DG, Og) => {
    function SN() {}
    Og.exports = SN;
  });
  var Pr = f((MG, wg) => {
    var xN = Wo(), RN = Rr();
    function Cr(e, t) {
      this.__wrapped__ = e,
        this.__actions__ = [],
        this.__chain__ = !!t,
        this.__index__ = 0,
        this.__values__ = void 0;
    }
    Cr.prototype = xN(RN.prototype);
    Cr.prototype.constructor = Cr;
    wg.exports = Cr;
  });
  var Cg = f((FG, Rg) => {
    var Sg = St(),
      CN = un(),
      PN = be(),
      xg = Sg ? Sg.isConcatSpreadable : void 0;
    function LN(e) {
      return PN(e) || CN(e) || !!(xg && e && e[xg]);
    }
    Rg.exports = LN;
  });
  var Ng = f((qG, Lg) => {
    var NN = Yn(), DN = Cg();
    function Pg(e, t, n, r, i) {
      var o = -1, a = e.length;
      for (n || (n = DN), i || (i = []); ++o < a;) {
        var s = e[o];
        t > 0 && n(s)
          ? t > 1 ? Pg(s, t - 1, n, r, i) : NN(i, s)
          : r || (i[i.length] = s);
      }
      return i;
    }
    Lg.exports = Pg;
  });
  var Mg = f((GG, Dg) => {
    var MN = Ng();
    function FN(e) {
      var t = e == null ? 0 : e.length;
      return t ? MN(e, 1) : [];
    }
    Dg.exports = FN;
  });
  var qg = f((XG, Fg) => {
    function qN(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    Fg.exports = qN;
  });
  var kg = f((kG, Xg) => {
    var GN = qg(), Gg = Math.max;
    function XN(e, t, n) {
      return t = Gg(t === void 0 ? e.length - 1 : t, 0), function () {
        for (
          var r = arguments, i = -1, o = Gg(r.length - t, 0), a = Array(o);
          ++i < o;
        ) a[i] = r[t + i];
        i = -1;
        for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
        return s[t] = n(a), GN(e, this, s);
      };
    }
    Xg.exports = XN;
  });
  var Vg = f((UG, Ug) => {
    function kN(e) {
      return function () {
        return e;
      };
    }
    Ug.exports = kN;
  });
  var Wg = f((VG, Bg) => {
    var UN = Vg(),
      Hg = xo(),
      VN = sr(),
      HN = Hg
        ? function (e, t) {
          return Hg(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: UN(t),
            writable: !0,
          });
        }
        : VN;
    Bg.exports = HN;
  });
  var Kg = f((HG, zg) => {
    var BN = 800, WN = 16, zN = Date.now;
    function KN(e) {
      var t = 0, n = 0;
      return function () {
        var r = zN(), i = WN - (r - n);
        if (n = r, i > 0) { if (++t >= BN) return arguments[0]; }
        else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    zg.exports = KN;
  });
  var Yg = f((BG, jg) => {
    var jN = Wg(), YN = Kg(), $N = YN(jN);
    jg.exports = $N;
  });
  var Qg = f((WG, $g) => {
    var QN = Mg(), ZN = kg(), JN = Yg();
    function eD(e) {
      return JN(ZN(e, void 0, QN), e + "");
    }
    $g.exports = eD;
  });
  var eh = f((zG, Jg) => {
    var Zg = Ci(), tD = Zg && new Zg();
    Jg.exports = tD;
  });
  var nh = f((KG, th) => {
    function nD() {}
    th.exports = nD;
  });
  var zo = f((jG, ih) => {
    var rh = eh(),
      rD = nh(),
      iD = rh
        ? function (e) {
          return rh.get(e);
        }
        : rD;
    ih.exports = iD;
  });
  var ah = f((YG, oh) => {
    var oD = {};
    oh.exports = oD;
  });
  var Ko = f(($G, uh) => {
    var sh = ah(), aD = Object.prototype, sD = aD.hasOwnProperty;
    function uD(e) {
      for (
        var t = e.name + "", n = sh[t], r = sD.call(sh, t) ? n.length : 0;
        r--;
      ) {
        var i = n[r], o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    uh.exports = uD;
  });
  var Nr = f((QG, ch) => {
    var cD = Wo(), lD = Rr(), fD = 4294967295;
    function Lr(e) {
      this.__wrapped__ = e,
        this.__actions__ = [],
        this.__dir__ = 1,
        this.__filtered__ = !1,
        this.__iteratees__ = [],
        this.__takeCount__ = fD,
        this.__views__ = [];
    }
    Lr.prototype = cD(lD.prototype);
    Lr.prototype.constructor = Lr;
    ch.exports = Lr;
  });
  var fh = f((ZG, lh) => {
    function dD(e, t) {
      var n = -1, r = e.length;
      for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
      return t;
    }
    lh.exports = dD;
  });
  var ph = f((JG, dh) => {
    var pD = Nr(), gD = Pr(), hD = fh();
    function ED(e) {
      if (e instanceof pD) return e.clone();
      var t = new gD(e.__wrapped__, e.__chain__);
      return t.__actions__ = hD(e.__actions__),
        t.__index__ = e.__index__,
        t.__values__ = e.__values__,
        t;
    }
    dh.exports = ED;
  });
  var Eh = f((eX, hh) => {
    var vD = Nr(),
      gh = Pr(),
      yD = Rr(),
      mD = be(),
      _D = rt(),
      ID = ph(),
      TD = Object.prototype,
      bD = TD.hasOwnProperty;
    function Dr(e) {
      if (_D(e) && !mD(e) && !(e instanceof vD)) {
        if (e instanceof gh) return e;
        if (bD.call(e, "__wrapped__")) return ID(e);
      }
      return new gh(e);
    }
    Dr.prototype = yD.prototype;
    Dr.prototype.constructor = Dr;
    hh.exports = Dr;
  });
  var yh = f((tX, vh) => {
    var AD = Nr(), OD = zo(), wD = Ko(), SD = Eh();
    function xD(e) {
      var t = wD(e), n = SD[t];
      if (typeof n != "function" || !(t in AD.prototype)) return !1;
      if (e === n) return !0;
      var r = OD(n);
      return !!r && e === r[0];
    }
    vh.exports = xD;
  });
  var Th = f((nX, Ih) => {
    var mh = Pr(),
      RD = Qg(),
      CD = zo(),
      jo = Ko(),
      PD = be(),
      _h = yh(),
      LD = "Expected a function",
      ND = 8,
      DD = 32,
      MD = 128,
      FD = 256;
    function qD(e) {
      return RD(function (t) {
        var n = t.length, r = n, i = mh.prototype.thru;
        for (e && t.reverse(); r--;) {
          var o = t[r];
          if (typeof o != "function") throw new TypeError(LD);
          if (i && !a && jo(o) == "wrapper") { var a = new mh([], !0); }
        }
        for (r = a ? r : n; ++r < n;) {
          o = t[r];
          var s = jo(o), u = s == "wrapper" ? CD(o) : void 0;
          u && _h(u[0]) && u[1] == (MD | ND | DD | FD) && !u[4].length &&
            u[9] == 1
            ? a = a[jo(u[0])].apply(a, u[3])
            : a = o.length == 1 && _h(o) ? a[s]() : a.thru(o);
        }
        return function () {
          var l = arguments, v = l[0];
          if (a && l.length == 1 && PD(v)) return a.plant(v).value();
          for (var p = 0, d = n ? t[p].apply(this, l) : v; ++p < n;) {
            d = t[p].call(this, d);
          }
          return d;
        };
      });
    }
    Ih.exports = qD;
  });
  var Ah = f((rX, bh) => {
    var GD = Th(), XD = GD();
    bh.exports = XD;
  });
  var wh = f((iX, Oh) => {
    function kD(e, t, n) {
      return e === e &&
        (n !== void 0 && (e = e <= n ? e : n),
          t !== void 0 && (e = e >= t ? e : t)),
        e;
    }
    Oh.exports = kD;
  });
  var xh = f((oX, Sh) => {
    var UD = wh(), Yo = ur();
    function VD(e, t, n) {
      return n === void 0 && (n = t, t = void 0),
        n !== void 0 && (n = Yo(n), n = n === n ? n : 0),
        t !== void 0 && (t = Yo(t), t = t === t ? t : 0),
        UD(Yo(e), t, n);
    }
    Sh.exports = VD;
  });
  var qh,
    Gh,
    Xh,
    kh,
    HD,
    BD,
    WD,
    zD,
    KD,
    jD,
    YD,
    $D,
    QD,
    ZD,
    JD,
    eM,
    tM,
    nM,
    rM,
    Uh,
    Vh,
    iM,
    oM,
    aM,
    Hh,
    sM,
    uM,
    Bh,
    cM,
    $o,
    Wh,
    Rh,
    Ch,
    zh,
    Sn,
    lM,
    tt,
    Kh,
    fM,
    Me,
    We,
    xn,
    jh,
    Qo,
    Ph,
    Zo,
    dM,
    wn,
    pM,
    gM,
    hM,
    Yh,
    Lh,
    EM,
    Nh,
    vM,
    yM,
    mM,
    Dh,
    Mr,
    Fr,
    Mh,
    Fh,
    $h,
    Qh = ve(() => {
      "use strict";
      qh = fe(Ah()), Gh = fe(ar()), Xh = fe(xh());
      Ne();
      Jo();
      xr();
      kh = fe(Tt()),
        {
          MOUSE_CLICK: HD,
          MOUSE_SECOND_CLICK: BD,
          MOUSE_DOWN: WD,
          MOUSE_UP: zD,
          MOUSE_OVER: KD,
          MOUSE_OUT: jD,
          DROPDOWN_CLOSE: YD,
          DROPDOWN_OPEN: $D,
          SLIDER_ACTIVE: QD,
          SLIDER_INACTIVE: ZD,
          TAB_ACTIVE: JD,
          TAB_INACTIVE: eM,
          NAVBAR_CLOSE: tM,
          NAVBAR_OPEN: nM,
          MOUSE_MOVE: rM,
          PAGE_SCROLL_DOWN: Uh,
          SCROLL_INTO_VIEW: Vh,
          SCROLL_OUT_OF_VIEW: iM,
          PAGE_SCROLL_UP: oM,
          SCROLLING_IN_VIEW: aM,
          PAGE_FINISH: Hh,
          ECOMMERCE_CART_CLOSE: sM,
          ECOMMERCE_CART_OPEN: uM,
          PAGE_START: Bh,
          PAGE_SCROLL: cM,
        } = He,
        $o = "COMPONENT_ACTIVE",
        Wh = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: Rh } = Oe,
        { getNamespacedParameterId: Ch } = kh.IX2VanillaUtils,
        zh = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
        Sn = zh(({ element: e, nativeEvent: t }) => e === t.target),
        lM = zh(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        tt = (0, qh.default)([Sn, lM]),
        Kh = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(), { events: r } = n, i = r[t];
            if (i && !dM[i.eventTypeId]) return i;
          }
          return null;
        },
        fM = ({ store: e, event: t }) => {
          let { action: n } = t, { autoStopEventId: r } = n.config;
          return !!Kh(e, r);
        },
        Me = ({ store: e, event: t, element: n, eventStateKey: r }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            l = Kh(e, u);
          return l &&
            Qt({
              store: e,
              eventId: u,
              eventTarget: n,
              eventStateKey: u + Rh + r.split(Rh)[1],
              actionListId: (0, Gh.default)(l, "action.config.actionListId"),
            }),
            Qt({
              store: e,
              eventId: a,
              eventTarget: n,
              eventStateKey: r,
              actionListId: s,
            }),
            Rn({
              store: e,
              eventId: a,
              eventTarget: n,
              eventStateKey: r,
              actionListId: s,
            }),
            i;
        },
        We = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r,
        xn = { handler: We(tt, Me) },
        jh = { ...xn, types: [$o, Wh].join(" ") },
        Qo = [{
          target: window,
          types: "resize orientationchange",
          throttle: !0,
        }, {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        }],
        Ph = "mouseover mouseout",
        Zo = { types: Qo },
        dM = { PAGE_START: Bh, PAGE_FINISH: Hh },
        wn = (() => {
          let e = window.pageXOffset !== void 0,
            n = document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : n.scrollLeft,
            scrollTop: e ? window.pageYOffset : n.scrollTop,
            stiffScrollTop: (0, Xh.default)(
              e ? window.pageYOffset : n.scrollTop,
              0,
              n.scrollHeight - window.innerHeight,
            ),
            scrollWidth: n.scrollWidth,
            scrollHeight: n.scrollHeight,
            clientWidth: n.clientWidth,
            clientHeight: n.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        pM = (e, t) =>
          !(e.left > t.right || e.right < t.left || e.top > t.bottom ||
            e.bottom < t.top),
        gM = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: r, relatedTarget: i } = t, o = e.contains(r);
          if (n === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(n === "mouseout" && o && a);
        },
        hM = (e) => {
          let { element: t, event: { config: n } } = e,
            { clientWidth: r, clientHeight: i } = wn(),
            o = n.scrollOffsetValue,
            u = n.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
          return pM(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: r,
            bottom: i - u,
          });
        },
        Yh = (e) => (t, n) => {
          let { type: r } = t.nativeEvent,
            i = [$o, Wh].indexOf(r) !== -1 ? r === $o : n.isActive,
            o = { ...n, isActive: i };
          return (!n || o.isActive !== n.isActive) && e(t, o) || o;
        },
        Lh = (e) => (t, n) => {
          let r = { elementHovered: gM(t) };
          return (n
                ? r.elementHovered !== n.elementHovered
                : r.elementHovered) && e(t, r) || r;
        },
        EM = (e) => (t, n) => {
          let r = { ...n, elementVisible: hM(t) };
          return (n
                ? r.elementVisible !== n.elementVisible
                : r.elementVisible) && e(t, r) || r;
        },
        Nh = (e) => (t, n = {}) => {
          let { stiffScrollTop: r, scrollHeight: i, innerHeight: o } = wn(),
            { event: { config: a, eventTypeId: s } } = t,
            { scrollOffsetValue: u, scrollOffsetUnit: l } = a,
            v = l === "PX",
            p = i - o,
            d = Number((r / p).toFixed(2));
          if (n && n.percentTop === d) return n;
          let E = (v ? u : o * (u || 0) / 100) / p, T, b, S = 0;
          n &&
            (T = d > n.percentTop,
              b = n.scrollingDown !== T,
              S = b ? d : n.anchorTop);
          let m = s === Uh ? d >= S + E : d <= S - E,
            C = {
              ...n,
              percentTop: d,
              inBounds: m,
              anchorTop: S,
              scrollingDown: T,
            };
          return n && m && (b || C.inBounds !== n.inBounds) && e(t, C) || C;
        },
        vM = (e, t) =>
          e.left > t.left && e.left < t.right && e.top > t.top &&
          e.top < t.bottom,
        yM = (e) => (t, n) => {
          let r = { finished: document.readyState === "complete" };
          return r.finished && !(n && n.finshed) && e(t), r;
        },
        mM = (e) => (t, n) => {
          let r = { started: !0 };
          return n || e(t), r;
        },
        Dh = (e) => (t, n = { clickCount: 0 }) => {
          let r = { clickCount: n.clickCount % 2 + 1 };
          return r.clickCount !== n.clickCount && e(t, r) || r;
        },
        Mr = (e = !0) => ({
          ...jh,
          handler: We(
            e ? tt : Sn,
            Yh((t, n) => n.isActive ? xn.handler(t, n) : n),
          ),
        }),
        Fr = (e = !0) => ({
          ...jh,
          handler: We(
            e ? tt : Sn,
            Yh((t, n) => n.isActive ? n : xn.handler(t, n)),
          ),
        }),
        Mh = {
          ...Zo,
          handler: EM((e, t) => {
            let { elementVisible: n } = t,
              { event: r, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[r.action.config.autoStopEventId] && t.triggered
              ? t
              : r.eventTypeId === Vh === n
              ? (Me(e), { ...t, triggered: !0 })
              : t;
          }),
        },
        Fh = .05,
        $h = {
          [QD]: Mr(),
          [ZD]: Fr(),
          [$D]: Mr(),
          [YD]: Fr(),
          [nM]: Mr(!1),
          [tM]: Fr(!1),
          [JD]: Mr(),
          [eM]: Fr(),
          [uM]: { types: "ecommerce-cart-open", handler: We(tt, Me) },
          [sM]: { types: "ecommerce-cart-close", handler: We(tt, Me) },
          [HD]: {
            types: "click",
            handler: We(
              tt,
              Dh((e, { clickCount: t }) => {
                fM(e) ? t === 1 && Me(e) : Me(e);
              }),
            ),
          },
          [BD]: {
            types: "click",
            handler: We(
              tt,
              Dh((e, { clickCount: t }) => {
                t === 2 && Me(e);
              }),
            ),
          },
          [WD]: { ...xn, types: "mousedown" },
          [zD]: { ...xn, types: "mouseup" },
          [KD]: {
            types: Ph,
            handler: We(
              tt,
              Lh((e, t) => {
                t.elementHovered && Me(e);
              }),
            ),
          },
          [jD]: {
            types: Ph,
            handler: We(
              tt,
              Lh((e, t) => {
                t.elementHovered || Me(e);
              }),
            ),
          },
          [rM]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: r,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: l,
                  restingState: v = 0,
                } = n,
                {
                  clientX: p = o.clientX,
                  clientY: d = o.clientY,
                  pageX: E = o.pageX,
                  pageY: T = o.pageY,
                } = r,
                b = s === "X_AXIS",
                S = r.type === "mouseout",
                m = v / 100,
                C = u,
                x = !1;
              switch (a) {
                case Qe.VIEWPORT: {
                  m = b
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(d, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Qe.PAGE: {
                  let {
                    scrollLeft: D,
                    scrollTop: F,
                    scrollWidth: P,
                    scrollHeight: W,
                  } = wn();
                  m = b ? Math.min(D + E, P) / P : Math.min(F + T, W) / W;
                  break;
                }
                case Qe.ELEMENT:
                default: {
                  C = Ch(i, u);
                  let D = r.type.indexOf("mouse") === 0;
                  if (D && tt({ element: t, nativeEvent: r }) !== !0) break;
                  let F = t.getBoundingClientRect(),
                    { left: P, top: W, width: z, height: Y } = F;
                  if (!D && !vM({ left: p, top: d }, F)) break;
                  x = !0, m = b ? (p - P) / z : (d - W) / Y;
                  break;
                }
              }
              return S && (m > 1 - Fh || m < Fh) && (m = Math.round(m)),
                (a !== Qe.ELEMENT || x || x !== o.elementHovered) &&
                (m = l ? 1 - m : m, e.dispatch(Yt(C, m))),
                {
                  elementHovered: x,
                  clientX: p,
                  clientY: d,
                  pageX: E,
                  pageY: T,
                };
            },
          },
          [cM]: {
            types: Qo,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: r } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = wn(),
                s = i / (o - a);
              s = r ? 1 - s : s, e.dispatch(Yt(n, s));
            },
          },
          [aM]: {
            types: Qo,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: r },
              i = { scrollPercent: 0 },
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: l,
                } = wn(),
                {
                  basedOn: v,
                  selectedAxis: p,
                  continuousParameterGroupId: d,
                  startsEntering: E,
                  startsExiting: T,
                  addEndOffset: b,
                  addStartOffset: S,
                  addOffsetValue: m = 0,
                  endOffsetValue: C = 0,
                } = n,
                x = p === "X_AXIS";
              if (v === Qe.VIEWPORT) {
                let D = x ? o / s : a / u;
                return D !== i.scrollPercent && t.dispatch(Yt(d, D)),
                  { scrollPercent: D };
              } else {
                let D = Ch(r, d),
                  F = e.getBoundingClientRect(),
                  P = (S ? m : 0) / 100,
                  W = (b ? C : 0) / 100;
                P = E ? P : 1 - P, W = T ? W : 1 - W;
                let z = F.top + Math.min(F.height * P, l),
                  J = F.top + F.height * W - z,
                  te = Math.min(l + J, u),
                  A = Math.min(Math.max(0, l - z), te) / te;
                return A !== i.scrollPercent && t.dispatch(Yt(D, A)),
                  { scrollPercent: A };
              }
            },
          },
          [Vh]: Mh,
          [iM]: Mh,
          [Uh]: {
            ...Zo,
            handler: Nh((e, t) => {
              t.scrollingDown && Me(e);
            }),
          },
          [oM]: {
            ...Zo,
            handler: Nh((e, t) => {
              t.scrollingDown || Me(e);
            }),
          },
          [Hh]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: We(Sn, yM(Me)),
          },
          [Bh]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: We(Sn, mM(Me)),
          },
        };
    });
  var gE = {};
  Le(gE, {
    observeRequests: () => XM,
    startActionGroup: () => Rn,
    startEngine: () => Vr,
    stopActionGroup: () => Qt,
    stopAllActionGroups: () => fE,
    stopEngine: () => Hr,
  });
  function XM(e) {
    bt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: VM }),
      bt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: HM }),
      bt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: BM }),
      bt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: WM });
  }
  function kM(e) {
    bt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Hr(e),
          sE({ store: e, elementApi: Ce }),
          Vr({ store: e, allowEvents: !0 }),
          uE();
      },
    });
  }
  function UM(e, t) {
    let n = bt({
      store: e,
      select: ({ ixSession: r }) => r.tick,
      onChange: (r) => {
        t(r), n();
      },
    });
  }
  function VM({ rawData: e, defer: t }, n) {
    let r = () => {
      Vr({ store: n, rawData: e, allowEvents: !0 }), uE();
    };
    t ? setTimeout(r, 0) : r();
  }
  function uE() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function HM(e, t) {
    let {
        actionTypeId: n,
        actionListId: r,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: l = !0,
      } = e,
      { rawData: v } = e;
    if (r && i && v && s) {
      let p = v.actionLists[r];
      p && (v = xM({ actionList: p, actionItemId: i, rawData: v }));
    }
    if (
      Vr({ store: t, rawData: v, allowEvents: a, testManual: u }),
        r && n === xe.GENERAL_START_ACTION || ea(n)
    ) {
      Qt({ store: t, actionListId: r }),
        lE({ store: t, actionListId: r, eventId: o });
      let p = Rn({
        store: t,
        eventId: o,
        actionListId: r,
        immediate: s,
        verbose: l,
      });
      l && p && t.dispatch($t({ actionListId: r, isPlaying: !s }));
    }
  }
  function BM({ actionListId: e }, t) {
    e ? Qt({ store: t, actionListId: e }) : fE({ store: t }), Hr(t);
  }
  function WM(e, t) {
    Hr(t), sE({ store: t, elementApi: Ce });
  }
  function Vr({ store: e, rawData: t, allowEvents: n, testManual: r }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Po(t)),
      i.active || (e.dispatch(Lo({
        hasBoundaryNodes: !!document.querySelector(Gr),
        reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") &&
          window.matchMedia("(prefers-reduced-motion)").matches,
      })),
        n &&
        (QM(e), zM(), e.getState().ixSession.hasDefinedMediaQueries && kM(e)),
        e.dispatch(No()),
        KM(e, r));
  }
  function zM() {
    let { documentElement: e } = document;
    e.className.indexOf(Zh) === -1 && (e.className += ` ${Zh}`);
  }
  function KM(e, t) {
    let n = (r) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(wr(r, o)), t ? UM(e, n) : requestAnimationFrame(n));
    };
    n(window.performance.now());
  }
  function Hr(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: n } = t;
      n.forEach(jM), LM(), e.dispatch(Do());
    }
  }
  function jM({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function YM(
    {
      store: e,
      eventStateKey: t,
      eventTarget: n,
      eventId: r,
      eventConfig: i,
      actionListId: o,
      parameterGroup: a,
      smoothing: s,
      restingValue: u,
    },
  ) {
    let { ixData: l, ixSession: v } = e.getState(),
      { events: p } = l,
      d = p[r],
      { eventTypeId: E } = d,
      T = {},
      b = {},
      S = [],
      { continuousActionGroups: m } = a,
      { id: C } = a;
    RM(E, i) && (C = CM(t, C));
    let x = v.hasBoundaryNodes && n ? On(n, Gr) : null;
    m.forEach((D) => {
      let { keyframe: F, actionItems: P } = D;
      P.forEach((W) => {
        let { actionTypeId: z } = W, { target: Y } = W.config;
        if (!Y) return;
        let J = Y.boundaryMode ? x : null, te = NM(Y) + ta + z;
        if (b[te] = $M(b[te], F, W), !T[te]) {
          T[te] = !0;
          let { config: N } = W;
          Xr({
            config: N,
            event: d,
            eventTarget: n,
            elementRoot: J,
            elementApi: Ce,
          }).forEach((A) => {
            S.push({ element: A, key: te });
          });
        }
      });
    }),
      S.forEach(({ element: D, key: F }) => {
        let P = b[F],
          W = (0, st.default)(P, "[0].actionItems[0]", {}),
          { actionTypeId: z } = W,
          J = (z === xe.PLUGIN_RIVE
              ? (W.config?.target?.selectorGuids || []).length === 0
              : Ur(z))
            ? ra(z)(D, W)
            : null,
          te = na({ element: D, actionItem: W, elementApi: Ce }, J);
        ia({
          store: e,
          element: D,
          eventId: r,
          actionListId: o,
          actionItem: W,
          destination: te,
          continuous: !0,
          parameterId: C,
          actionGroups: P,
          smoothing: s,
          restingValue: u,
          pluginInstance: J,
        });
      });
  }
  function $M(e = [], t, n) {
    let r = [...e], i;
    return r.some((o, a) => o.keyframe === t ? (i = a, !0) : !1),
      i == null && (i = r.length, r.push({ keyframe: t, actionItems: [] })),
      r[i].actionItems.push(n),
      r;
  }
  function QM(e) {
    let { ixData: t } = e.getState(), { eventTypeMap: n } = t;
    cE(e),
      (0, Zt.default)(n, (i, o) => {
        let a = $h[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        rF({ logic: a, store: e, events: i });
      });
    let { ixSession: r } = e.getState();
    r.eventListeners.length && JM(e);
  }
  function JM(e) {
    let t = () => {
      cE(e);
    };
    ZM.forEach((n) => {
      window.addEventListener(n, t), e.dispatch(Or(window, [n, t]));
    }), t();
  }
  function cE(e) {
    let { ixSession: t, ixData: n } = e.getState(), r = window.innerWidth;
    if (r !== t.viewportWidth) {
      let { mediaQueries: i } = n;
      e.dispatch(Xo({ width: r, mediaQueries: i }));
    }
  }
  function rF({ logic: e, store: t, events: n }) {
    iF(n);
    let { types: r, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = eF(n, nF);
    if (!(0, tE.default)(s)) return;
    (0, Zt.default)(s, (p, d) => {
      let E = n[d],
        { action: T, id: b, mediaQueries: S = o.mediaQueryKeys } = E,
        { actionListId: m } = T.config;
      DM(S, o.mediaQueryKeys) || t.dispatch(ko()),
        T.actionTypeId === xe.GENERAL_CONTINUOUS_ACTION &&
        (Array.isArray(E.config) ? E.config : [E.config]).forEach((x) => {
          let { continuousParameterGroupId: D } = x,
            F = (0, st.default)(a, `${m}.continuousParameterGroups`, []),
            P = (0, eE.default)(F, ({ id: Y }) => Y === D),
            W = (x.smoothing || 0) / 100,
            z = (x.restingState || 0) / 100;
          P && p.forEach((Y, J) => {
            let te = b + ta + J;
            YM({
              store: t,
              eventStateKey: te,
              eventTarget: Y,
              eventId: b,
              eventConfig: x,
              actionListId: m,
              parameterGroup: P,
              smoothing: W,
              restingValue: z,
            });
          });
        }),
        (T.actionTypeId === xe.GENERAL_START_ACTION || ea(T.actionTypeId)) &&
        lE({ store: t, actionListId: m, eventId: b });
    });
    let u = (p) => {
        let { ixSession: d } = t.getState();
        tF(s, (E, T, b) => {
          let S = n[T],
            m = d.eventState[b],
            { action: C, mediaQueries: x = o.mediaQueryKeys } = S;
          if (!kr(x, d.mediaQueryKey)) return;
          let D = (F = {}) => {
            let P = i({
              store: t,
              element: E,
              event: S,
              eventConfig: F,
              nativeEvent: p,
              eventStateKey: b,
            }, m);
            MM(P, m) || t.dispatch(Mo(b, P));
          };
          C.actionTypeId === xe.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(S.config) ? S.config : [S.config]).forEach(D)
            : D();
        });
      },
      l = (0, oE.default)(u, GM),
      v = ({ target: p = document, types: d, throttle: E }) => {
        d.split(" ").filter(Boolean).forEach((T) => {
          let b = E ? l : u;
          p.addEventListener(T, b), t.dispatch(Or(p, [T, b]));
        });
      };
    Array.isArray(r) ? r.forEach(v) : typeof r == "string" && v(e);
  }
  function iF(e) {
    if (!qM) return;
    let t = {}, n = "";
    for (let r in e) {
      let { eventTypeId: i, target: o } = e[r], a = Vo(o);
      t[a] ||
        (i === He.MOUSE_CLICK || i === He.MOUSE_SECOND_CLICK) &&
          (t[a] = !0, n += a + "{cursor: pointer;touch-action: manipulation;}");
    }
    if (n) {
      let r = document.createElement("style");
      r.textContent = n, document.body.appendChild(r);
    }
  }
  function lE({ store: e, actionListId: t, eventId: n }) {
    let { ixData: r, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = r,
      s = a[n],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let l = (0, st.default)(u, "actionItemGroups[0].actionItems", []),
        v = (0, st.default)(s, "mediaQueries", r.mediaQueryKeys);
      if (!kr(v, i.mediaQueryKey)) return;
      l.forEach((p) => {
        let { config: d, actionTypeId: E } = p,
          T = d?.target?.useEventTarget === !0 && d?.target?.objectId == null
            ? { target: s.target, targets: s.targets }
            : d,
          b = Xr({ config: T, event: s, elementApi: Ce }),
          S = Ur(E);
        b.forEach((m) => {
          let C = S ? ra(E)(m, p) : null;
          ia({
            destination: na({ element: m, actionItem: p, elementApi: Ce }, C),
            immediate: !0,
            store: e,
            element: m,
            eventId: n,
            actionItem: p,
            actionListId: t,
            pluginInstance: C,
          });
        });
      });
    }
  }
  function fE({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, Zt.default)(t, (n) => {
      if (!n.continuous) {
        let { actionListId: r, verbose: i } = n;
        oa(n, e), i && e.dispatch($t({ actionListId: r, isPlaying: !1 }));
      }
    });
  }
  function Qt(
    { store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: i },
  ) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && n ? On(n, Gr) : null;
    (0, Zt.default)(o, (u) => {
      let l = (0, st.default)(u, "actionItem.config.target.boundaryMode"),
        v = r ? u.eventStateKey === r : !0;
      if (u.actionListId === i && u.eventId === t && v) {
        if (s && l && !Ho(s, u.element)) return;
        oa(u, e),
          u.verbose && e.dispatch($t({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function Rn(
    {
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: i,
      groupIndex: o = 0,
      immediate: a,
      verbose: s,
    },
  ) {
    let { ixData: u, ixSession: l } = e.getState(),
      { events: v } = u,
      p = v[t] || {},
      { mediaQueries: d = u.mediaQueryKeys } = p,
      E = (0, st.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: T, useFirstGroupAsInitialState: b } = E;
    if (!T || !T.length) return !1;
    o >= T.length && (0, st.default)(p, "config.loop") && (o = 0),
      o === 0 && b && o++;
    let m = (o === 0 || o === 1 && b) && ea(p.action?.actionTypeId)
        ? p.config.delay
        : void 0,
      C = (0, st.default)(T, [o, "actionItems"], []);
    if (!C.length || !kr(d, l.mediaQueryKey)) return !1;
    let x = l.hasBoundaryNodes && n ? On(n, Gr) : null, D = OM(C), F = !1;
    return C.forEach((P, W) => {
      let { config: z, actionTypeId: Y } = P, J = Ur(Y), { target: te } = z;
      if (!te) return;
      let N = te.boundaryMode ? x : null;
      Xr({
        config: z,
        event: p,
        eventTarget: n,
        elementRoot: N,
        elementApi: Ce,
      }).forEach((L, K) => {
        let V = J ? ra(Y)(L, P) : null, re = J ? FM(Y)(L, P) : null;
        F = !0;
        let ie = D === W && K === 0,
          M = wM({ element: L, actionItem: P }),
          H = na({ element: L, actionItem: P, elementApi: Ce }, V);
        ia({
          store: e,
          element: L,
          actionItem: P,
          eventId: t,
          eventTarget: n,
          eventStateKey: r,
          actionListId: i,
          groupIndex: o,
          isCarrier: ie,
          computedStyle: M,
          destination: H,
          immediate: a,
          verbose: s,
          pluginInstance: V,
          pluginDuration: re,
          instanceDelay: m,
        });
      });
    }),
      F;
  }
  function ia(e) {
    let { store: t, computedStyle: n, ...r } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: l,
        eventId: v,
      } = r,
      p = !u,
      d = bM(),
      { ixElements: E, ixSession: T, ixData: b } = t.getState(),
      S = TM(E, i),
      { refState: m } = E[S] || {},
      C = Bo(i),
      x = T.reducedMotion && vi[o.actionTypeId],
      D;
    if (x && u) {
      switch (b.events[v]?.eventTypeId) {
        case He.MOUSE_MOVE:
        case He.MOUSE_MOVE_IN_VIEWPORT:
          D = l;
          break;
        default:
          D = .5;
          break;
      }
    }
    let F = SM(i, m, n, o, Ce, s);
    if (
      t.dispatch(
        Fo({
          instanceId: d,
          elementId: S,
          origin: F,
          refType: C,
          skipMotion: x,
          skipToValue: D,
          ...r,
        }),
      ),
        dE(document.body, "ix2-animation-started", d),
        a
    ) {
      oF(t, d);
      return;
    }
    bt({ store: t, select: ({ ixInstances: P }) => P[d], onChange: pE }),
      p && t.dispatch(Sr(d, T.tick));
  }
  function oa(e, t) {
    dE(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: n, actionItem: r } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[n] || {};
    a === aE && PM(o, r, Ce), t.dispatch(qo(e.id));
  }
  function dE(e, t, n) {
    let r = document.createEvent("CustomEvent");
    r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
  }
  function oF(e, t) {
    let { ixParameters: n } = e.getState();
    e.dispatch(Sr(t, 0)), e.dispatch(wr(performance.now(), n));
    let { ixInstances: r } = e.getState();
    pE(r[t], e);
  }
  function pE(e, t) {
    let {
        active: n,
        continuous: r,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: l,
        groupIndex: v,
        eventId: p,
        eventTarget: d,
        eventStateKey: E,
        actionListId: T,
        isCarrier: b,
        styleProp: S,
        verbose: m,
        pluginInstance: C,
      } = e,
      { ixData: x, ixSession: D } = t.getState(),
      { events: F } = x,
      P = F && F[p] ? F[p] : {},
      { mediaQueries: W = x.mediaQueryKeys } = P;
    if (kr(W, D.mediaQueryKey) && (r || n || i)) {
      if (l || u === IM && i) {
        t.dispatch(Go(o, s, l, a));
        let { ixElements: z } = t.getState(),
          { ref: Y, refType: J, refState: te } = z[o] || {},
          N = te && te[s];
        (J === aE || Ur(s)) && AM(Y, te, N, p, a, S, Ce, u, C);
      }
      if (i) {
        if (b) {
          let z = Rn({
            store: t,
            eventId: p,
            eventTarget: d,
            eventStateKey: E,
            actionListId: T,
            groupIndex: v + 1,
            verbose: m,
          });
          m && !z && t.dispatch($t({ actionListId: T, isPlaying: !1 }));
        }
        oa(e, t);
      }
    }
  }
  var eE,
    st,
    tE,
    nE,
    rE,
    iE,
    Zt,
    oE,
    qr,
    _M,
    ea,
    ta,
    Gr,
    aE,
    IM,
    Zh,
    Xr,
    TM,
    na,
    bt,
    bM,
    AM,
    sE,
    OM,
    wM,
    SM,
    xM,
    RM,
    CM,
    kr,
    PM,
    LM,
    NM,
    DM,
    MM,
    Ur,
    ra,
    FM,
    Jh,
    qM,
    GM,
    ZM,
    eF,
    tF,
    nF,
    Jo = ve(() => {
      "use strict";
      eE = fe(zi()),
        st = fe(ar()),
        tE = fe(Sp()),
        nE = fe(Jp()),
        rE = fe(tg()),
        iE = fe(rg()),
        Zt = fe(cg()),
        oE = fe(Eg());
      Ne();
      qr = fe(Tt());
      xr();
      Tg();
      Qh();
      _M = Object.keys(Gn),
        ea = (e) => _M.includes(e),
        {
          COLON_DELIMITER: ta,
          BOUNDARY_SELECTOR: Gr,
          HTML_ELEMENT: aE,
          RENDER_GENERAL: IM,
          W_MOD_IX: Zh,
        } = Oe,
        {
          getAffectedElements: Xr,
          getElementId: TM,
          getDestinationValues: na,
          observeStore: bt,
          getInstanceId: bM,
          renderHTMLElement: AM,
          clearAllStyles: sE,
          getMaxDurationItemIndex: OM,
          getComputedStyle: wM,
          getInstanceOrigin: SM,
          reduceListToGroup: xM,
          shouldNamespaceEventParameter: RM,
          getNamespacedParameterId: CM,
          shouldAllowMediaQuery: kr,
          cleanupHTMLElement: PM,
          clearObjectCache: LM,
          stringifyTarget: NM,
          mediaQueriesEqual: DM,
          shallowEqual: MM,
        } = qr.IX2VanillaUtils,
        { isPluginType: Ur, createPluginInstance: ra, getPluginDuration: FM } =
          qr.IX2VanillaPlugins,
        Jh = navigator.userAgent,
        qM = Jh.match(/iPad/i) || Jh.match(/iPhone/),
        GM = 12;
      ZM = ["resize", "orientationchange"];
      eF = (e, t) => (0, nE.default)((0, iE.default)(e, t), rE.default),
        tF = (e, t) => {
          (0, Zt.default)(e, (n, r) => {
            n.forEach((i, o) => {
              let a = r + ta + o;
              t(i, r, a);
            });
          });
        },
        nF = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Xr({ config: t, elementApi: Ce });
        };
    });
  var vE = f((sa) => {
    "use strict";
    Object.defineProperty(sa, "__esModule", { value: !0 });
    function aF(e, t) {
      for (var n in t) {
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }
    }
    aF(sa, {
      actions: function () {
        return cF;
      },
      destroy: function () {
        return EE;
      },
      init: function () {
        return pF;
      },
      setEnv: function () {
        return dF;
      },
      store: function () {
        return Br;
      },
    });
    var sF = gi(),
      uF = lF((up(), je(sp))),
      aa = (Jo(), je(gE)),
      cF = fF((xr(), je(yg)));
    function lF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function hE(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(), n = new WeakMap();
      return (hE = function (r) {
        return r ? n : t;
      })(e);
    }
    function fF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") {
        return { default: e };
      }
      var n = hE(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e) {
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o];
        }
      }
      return r.default = e, n && n.set(e, r), r;
    }
    var Br = (0, sF.createStore)(uF.default);
    function dF(e) {
      e() && (0, aa.observeRequests)(Br);
    }
    function pF(e) {
      EE(), (0, aa.startEngine)({ store: Br, rawData: e, allowEvents: !0 });
    }
    function EE() {
      (0, aa.stopEngine)(Br);
    }
  });
  var IE = f((hX, _E) => {
    "use strict";
    var yE = Ue(), mE = vE();
    mE.setEnv(yE.env);
    yE.define(
      "ix2",
      _E.exports = function () {
        return mE;
      },
    );
  });
  var bE = f((EX, TE) => {
    "use strict";
    var Jt = Ue();
    Jt.define(
      "links",
      TE.exports = function (e, t) {
        var n = {},
          r = e(window),
          i,
          o = Jt.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          l = /index\.(html|php)$/,
          v = /\/$/,
          p,
          d;
        n.ready = n.design = n.preview = E;
        function E() {
          i = o && Jt.env("design"),
            d = Jt.env("slug") || a.pathname || "",
            Jt.scroll.off(b),
            p = [];
          for (var m = document.links, C = 0; C < m.length; ++C) T(m[C]);
          p.length && (Jt.scroll.on(b), b());
        }
        function T(m) {
          if (!m.getAttribute("hreflang")) {
            var C = i && m.getAttribute("href-disabled") ||
              m.getAttribute("href");
            if (s.href = C, !(C.indexOf(":") >= 0)) {
              var x = e(m);
              if (
                s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var D = e(s.hash);
                D.length && p.push({ link: x, sec: D, active: !1 });
                return;
              }
              if (!(C === "#" || C === "")) {
                var F = s.href === a.href || C === d || l.test(C) && v.test(d);
                S(x, u, F);
              }
            }
          }
        }
        function b() {
          var m = r.scrollTop(), C = r.height();
          t.each(p, function (x) {
            if (!x.link.attr("hreflang")) {
              var D = x.link,
                F = x.sec,
                P = F.offset().top,
                W = F.outerHeight(),
                z = C * .5,
                Y = F.is(":visible") && P + W - z >= m && P + z <= m + C;
              x.active !== Y && (x.active = Y, S(D, u, Y));
            }
          });
        }
        function S(m, C, x) {
          var D = m.hasClass(C);
          x && D || !x && !D || (x ? m.addClass(C) : m.removeClass(C));
        }
        return n;
      },
    );
  });
  var OE = f((vX, AE) => {
    "use strict";
    var Wr = Ue();
    Wr.define(
      "scroll",
      AE.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          n = window.location,
          r = T() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || function (N) {
            window.setTimeout(N, 15);
          },
          u = Wr.env("editor") ? ".w-editor-body" : "body",
          l = "header, " + u + " > .header, " + u +
            " > .w-nav:not([data-no-scroll])",
          v = 'a[href="#"]',
          p = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")",
          d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(d));
        function T() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var b = /^#[a-zA-Z0-9][\w:.-]*$/;
        function S(N) {
          return b.test(N.hash) && N.host + N.pathname === n.host + n.pathname;
        }
        let m = typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function C() {
          return document.body.getAttribute("data-wf-scroll-motion") ===
              "none" || m.matches;
        }
        function x(N, A) {
          var L;
          switch (A) {
            case "add":
              L = N.attr("tabindex"),
                L
                  ? N.attr("data-wf-tabindex-swap", L)
                  : N.attr("tabindex", "-1");
              break;
            case "remove":
              L = N.attr("data-wf-tabindex-swap"),
                L
                  ? (N.attr("tabindex", L),
                    N.removeAttr("data-wf-tabindex-swap"))
                  : N.removeAttr("tabindex");
              break;
          }
          N.toggleClass("wf-force-outline-none", A === "add");
        }
        function D(N) {
          var A = N.currentTarget;
          if (
            !(Wr.env("design") ||
              window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(A.className))
          ) {
            var L = S(A) ? A.hash : "";
            if (L !== "") {
              var K = e(L);
              K.length &&
                (N && (N.preventDefault(), N.stopPropagation()),
                  F(L, N),
                  window.setTimeout(function () {
                    P(K, function () {
                      x(K, "add"),
                        K.get(0).focus({ preventScroll: !0 }),
                        x(K, "remove");
                    });
                  }, N ? 0 : 300));
            }
          }
        }
        function F(N) {
          if (
            n.hash !== N && r && r.pushState &&
            !(Wr.env.chrome && n.protocol === "file:")
          ) {
            var A = r.state && r.state.hash;
            A !== N && r.pushState({ hash: N }, "", N);
          }
        }
        function P(N, A) {
          var L = i.scrollTop(), K = W(N);
          if (L !== K) {
            var V = z(N, L, K),
              re = Date.now(),
              ie = function () {
                var M = Date.now() - re;
                window.scroll(0, Y(L, K, M, V)),
                  M <= V ? s(ie) : typeof A == "function" && A();
              };
            s(ie);
          }
        }
        function W(N) {
          var A = e(l),
            L = A.css("position") === "fixed" ? A.outerHeight() : 0,
            K = N.offset().top - L;
          if (N.data("scroll") === "mid") {
            var V = i.height() - L, re = N.outerHeight();
            re < V && (K -= Math.round((V - re) / 2));
          }
          return K;
        }
        function z(N, A, L) {
          if (C()) return 0;
          var K = 1;
          return a.add(N).each(function (V, re) {
            var ie = parseFloat(re.getAttribute("data-scroll-time"));
            !isNaN(ie) && ie >= 0 && (K = ie);
          }),
            (472.143 * Math.log(Math.abs(A - L) + 125) - 2e3) * K;
        }
        function Y(N, A, L, K) {
          return L > K ? A : N + (A - N) * J(L / K);
        }
        function J(N) {
          return N < .5
            ? 4 * N * N * N
            : (N - 1) * (2 * N - 2) * (2 * N - 2) + 1;
        }
        function te() {
          var { WF_CLICK_EMPTY: N, WF_CLICK_SCROLL: A } = t;
          o.on(A, p, D),
            o.on(N, v, function (L) {
              L.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: te };
      },
    );
  });
  var SE = f((yX, wE) => {
    "use strict";
    var gF = Ue();
    gF.define(
      "touch",
      wE.exports = function (e) {
        var t = {}, n = window.getSelection;
        e.event.special.tap = { bindType: "click", delegateType: "click" },
          t.init = function (o) {
            return o = typeof o == "string" ? e(o).get(0) : o,
              o ? new r(o) : null;
          };
        function r(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * .04), 40),
            l,
            v;
          o.addEventListener("touchstart", p, !1),
            o.addEventListener("touchmove", d, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", T, !1),
            o.addEventListener("mousedown", p, !1),
            o.addEventListener("mousemove", d, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", T, !1);
          function p(S) {
            var m = S.touches;
            m && m.length > 1 ||
              (a = !0, m ? (s = !0, l = m[0].clientX) : l = S.clientX, v = l);
          }
          function d(S) {
            if (a) {
              if (s && S.type === "mousemove") {
                S.preventDefault(), S.stopPropagation();
                return;
              }
              var m = S.touches, C = m ? m[0].clientX : S.clientX, x = C - v;
              v = C,
                Math.abs(x) > u && n && String(n()) === "" &&
                (i("swipe", S, { direction: x > 0 ? "right" : "left" }), T());
            }
          }
          function E(S) {
            if (a && (a = !1, s && S.type === "mouseup")) {
              S.preventDefault(), S.stopPropagation(), s = !1;
              return;
            }
          }
          function T() {
            a = !1;
          }
          function b() {
            o.removeEventListener("touchstart", p, !1),
              o.removeEventListener("touchmove", d, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", T, !1),
              o.removeEventListener("mousedown", p, !1),
              o.removeEventListener("mousemove", d, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", T, !1),
              o = null;
          }
          this.destroy = b;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return t.instance = t.init(document), t;
      },
    );
  });
  var CE = f((mX, RE) => {
    "use strict";
    var At = Ue(),
      hF = qn(),
      ze = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      xE = !0,
      EF = /^#[a-zA-Z0-9\-_]+$/;
    At.define(
      "dropdown",
      RE.exports = function (e, t) {
        var n = t.debounce,
          r = {},
          i = At.env(),
          o = !1,
          a,
          s = At.env.touch,
          u = ".w-dropdown",
          l = "w--open",
          v = hF.triggers,
          p = 900,
          d = "focusout" + u,
          E = "keydown" + u,
          T = "mouseenter" + u,
          b = "mousemove" + u,
          S = "mouseleave" + u,
          m = (s ? "click" : "mouseup") + u,
          C = "w-close" + u,
          x = "setting" + u,
          D = e(document),
          F;
        r.ready = P,
          r.design = function () {
            o && A(), o = !1, P();
          },
          r.preview = function () {
            o = !0, P();
          };
        function P() {
          a = i && At.env("design"), F = D.find(u), F.each(W);
        }
        function W(g, U) {
          var $ = e(U), R = e.data(U, u);
          R ||
          (R = e.data(U, u, { open: !1, el: $, config: {}, selectedIdx: -1 })),
            R.toggle = R.el.children(".w-dropdown-toggle"),
            R.list = R.el.children(".w-dropdown-list"),
            R.links = R.list.find("a:not(.w-dropdown .w-dropdown a)"),
            R.complete = V(R),
            R.mouseLeave = ie(R),
            R.mouseUpOutside = K(R),
            R.mouseMoveOutside = M(R),
            z(R);
          var ee = R.toggle.attr("id"), ce = R.list.attr("id");
          ee || (ee = "w-dropdown-toggle-" + g),
            ce || (ce = "w-dropdown-list-" + g),
            R.toggle.attr("id", ee),
            R.toggle.attr("aria-controls", ce),
            R.toggle.attr("aria-haspopup", "menu"),
            R.toggle.attr("aria-expanded", "false"),
            R.toggle.find(".w-icon-dropdown-toggle").attr(
              "aria-hidden",
              "true",
            ),
            R.toggle.prop("tagName") !== "BUTTON" &&
            (R.toggle.attr("role", "button"),
              R.toggle.attr("tabindex") || R.toggle.attr("tabindex", "0")),
            R.list.attr("id", ce),
            R.list.attr("aria-labelledby", ee),
            R.links.each(function (h, X) {
              X.hasAttribute("tabindex") || X.setAttribute("tabindex", "0"),
                EF.test(X.hash) && X.addEventListener("click", N.bind(null, R));
            }),
            R.el.off(u),
            R.toggle.off(u),
            R.nav && R.nav.off(u);
          var ae = J(R, xE);
          a && R.el.on(x, Y(R)),
            a ||
            (i && (R.hovering = !1, N(R)),
              R.config.hover && R.toggle.on(T, re(R)),
              R.el.on(C, ae),
              R.el.on(E, H(R)),
              R.el.on(d, q(R)),
              R.toggle.on(m, ae),
              R.toggle.on(E, G(R)),
              R.nav = R.el.closest(".w-nav"),
              R.nav.on(C, ae));
        }
        function z(g) {
          var U = Number(g.el.css("z-index"));
          g.manageZ = U === p || U === p + 1,
            g.config = {
              hover: g.el.attr("data-hover") === "true" && !s,
              delay: g.el.attr("data-delay"),
            };
        }
        function Y(g) {
          return function (U, $) {
            $ = $ || {},
              z(g),
              $.open === !0 && te(g, !0),
              $.open === !1 && N(g, { immediate: !0 });
          };
        }
        function J(g, U) {
          return n(function ($) {
            if (g.open || $ && $.type === "w-close") {
              return N(g, { forceClose: U });
            }
            te(g);
          });
        }
        function te(g) {
          if (!g.open) {
            L(g),
              g.open = !0,
              g.list.addClass(l),
              g.toggle.addClass(l),
              g.toggle.attr("aria-expanded", "true"),
              v.intro(0, g.el[0]),
              At.redraw.up(),
              g.manageZ && g.el.css("z-index", p + 1);
            var U = At.env("editor");
            a || D.on(m, g.mouseUpOutside),
              g.hovering && !U && g.el.on(S, g.mouseLeave),
              g.hovering && U && D.on(b, g.mouseMoveOutside),
              window.clearTimeout(g.delayId);
          }
        }
        function N(g, { immediate: U, forceClose: $ } = {}) {
          if (g.open && !(g.config.hover && g.hovering && !$)) {
            g.toggle.attr("aria-expanded", "false"), g.open = !1;
            var R = g.config;
            if (
              v.outro(0, g.el[0]),
                D.off(m, g.mouseUpOutside),
                D.off(b, g.mouseMoveOutside),
                g.el.off(S, g.mouseLeave),
                window.clearTimeout(g.delayId),
                !R.delay || U
            ) return g.complete();
            g.delayId = window.setTimeout(g.complete, R.delay);
          }
        }
        function A() {
          D.find(u).each(function (g, U) {
            e(U).triggerHandler(C);
          });
        }
        function L(g) {
          var U = g.el[0];
          F.each(function ($, R) {
            var ee = e(R);
            ee.is(U) || ee.has(U).length || ee.triggerHandler(C);
          });
        }
        function K(g) {
          return g.mouseUpOutside && D.off(m, g.mouseUpOutside),
            n(function (U) {
              if (g.open) {
                var $ = e(U.target);
                if (!$.closest(".w-dropdown-toggle").length) {
                  var R = e.inArray(g.el[0], $.parents(u)) === -1,
                    ee = At.env("editor");
                  if (R) {
                    if (ee) {
                      var ce = $.parents().length === 1 &&
                          $.parents("svg").length === 1,
                        ae =
                          $.parents(".w-editor-bem-EditorHoverControls").length;
                      if (ce || ae) return;
                    }
                    N(g);
                  }
                }
              }
            });
        }
        function V(g) {
          return function () {
            g.list.removeClass(l),
              g.toggle.removeClass(l),
              g.manageZ && g.el.css("z-index", "");
          };
        }
        function re(g) {
          return function () {
            g.hovering = !0, te(g);
          };
        }
        function ie(g) {
          return function () {
            g.hovering = !1, g.links.is(":focus") || N(g);
          };
        }
        function M(g) {
          return n(function (U) {
            if (g.open) {
              var $ = e(U.target), R = e.inArray(g.el[0], $.parents(u)) === -1;
              if (R) {
                var ee = $.parents(".w-editor-bem-EditorHoverControls").length,
                  ce = $.parents(".w-editor-bem-RTToolbar").length,
                  ae = e(".w-editor-bem-EditorOverlay"),
                  h = ae.find(".w-editor-edit-outline").length ||
                    ae.find(".w-editor-bem-RTToolbar").length;
                if (ee || ce || h) return;
                g.hovering = !1, N(g);
              }
            }
          });
        }
        function H(g) {
          return function (U) {
            if (!(a || !g.open)) {
              switch (
                g.selectedIdx = g.links.index(document.activeElement), U.keyCode
              ) {
                case ze.HOME:
                  return g.open
                    ? (g.selectedIdx = 0, j(g), U.preventDefault())
                    : void 0;
                case ze.END:
                  return g.open
                    ? (g.selectedIdx = g.links.length - 1,
                      j(g),
                      U.preventDefault())
                    : void 0;
                case ze.ESCAPE:
                  return N(g), g.toggle.focus(), U.stopPropagation();
                case ze.ARROW_RIGHT:
                case ze.ARROW_DOWN:
                  return g.selectedIdx = Math.min(
                    g.links.length - 1,
                    g.selectedIdx + 1,
                  ),
                    j(g),
                    U.preventDefault();
                case ze.ARROW_LEFT:
                case ze.ARROW_UP:
                  return g.selectedIdx = Math.max(-1, g.selectedIdx - 1),
                    j(g),
                    U.preventDefault();
              }
            }
          };
        }
        function j(g) {
          g.links[g.selectedIdx] && g.links[g.selectedIdx].focus();
        }
        function G(g) {
          var U = J(g, xE);
          return function ($) {
            if (!a) {
              if (!g.open) {
                switch ($.keyCode) {
                  case ze.ARROW_UP:
                  case ze.ARROW_DOWN:
                    return $.stopPropagation();
                }
              }
              switch ($.keyCode) {
                case ze.SPACE:
                case ze.ENTER:
                  return U(), $.stopPropagation(), $.preventDefault();
              }
            }
          };
        }
        function q(g) {
          return n(function (U) {
            var { relatedTarget: $, target: R } = U,
              ee = g.el[0],
              ce = ee.contains($) || ee.contains(R);
            return ce || N(g), U.stopPropagation();
          });
        }
        return r;
      },
    );
  });
  var LE = f((_X, PE) => {
    "use strict";
    var ua = Ue(),
      vF = (e, t, n, r) => {
        let i = document.createElement("div");
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (o) {
              return n(o);
            },
            "error-callback": function () {
              r();
            },
          });
      };
    ua.define(
      "forms",
      PE.exports = function (e, t) {
        var n = {},
          r = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          l = /e(-)?mail/i,
          v = /^\S+@\S+$/,
          p = window.alert,
          d = ua.env(),
          E,
          T,
          b,
          S = /list-manage[1-9]?.com/i,
          m = t.debounce(function () {
            p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
          }, 100);
        n.ready = n.design = n.preview = function () {
          C(), !d && !E && D();
        };
        function C() {
          u = e("html").attr("data-wf-site"),
            T = "https://webflow.com/api/v1/form/" + u,
            a && T.indexOf("https://webflow.com") >= 0 &&
            (T = T.replace(
              "https://webflow.com",
              "https://formdata.webflow.com",
            )),
            b = `${T}/signFile`,
            i = e(s + " form"),
            i.length && i.each(x);
        }
        function x(M, H) {
          var j = e(H), G = e.data(H, s);
          G || (G = e.data(H, s, { form: j })), F(G);
          var q = j.closest("div.w-form");
          G.done = q.find("> .w-form-done"),
            G.fail = q.find("> .w-form-fail"),
            G.fileUploads = q.find(".w-file-upload"),
            G.fileUploads.each(function ($) {
              V($, G);
            });
          var g = G.form.attr("aria-label") || G.form.attr("data-name") ||
            "Form";
          G.done.attr("aria-label") || G.form.attr("aria-label", g),
            G.done.attr("tabindex", "-1"),
            G.done.attr("role", "region"),
            G.done.attr("aria-label") ||
            G.done.attr("aria-label", g + " success"),
            G.fail.attr("tabindex", "-1"),
            G.fail.attr("role", "region"),
            G.fail.attr("aria-label") ||
            G.fail.attr("aria-label", g + " failure");
          var U = G.action = j.attr("action");
          if (
            G.handler = null, G.redirect = j.attr("data-redirect"), S.test(U)
          ) {
            G.handler = A;
            return;
          }
          if (!U) {
            if (u) {
              G.handler = N;
              return;
            }
            m();
          }
        }
        function D() {
          E = !0;
          let M = r.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          if (M) {
            let R = document.createElement("script");
            R.src = "https://challenges.cloudflare.com/turnstile/v0/api.js",
              document.head.appendChild(R),
              R.onload = () => {
                r.on("submit", s + " form", function (ee) {
                  var ce = e.data(this, s);
                  P(ce),
                    ce.handler &&
                    (ce.evt = ee,
                      ee.preventDefault(),
                      vF(
                        M,
                        this,
                        (ae) => ce.handler({ ...ce, turnstileToken: ae }),
                        () => {
                          ce.fail.toggle(!0), ce.fail.focus(), F(ce);
                        },
                      ));
                });
              };
          } else {r.on("submit", s + " form", function (R) {
              var ee = e.data(this, s);
              ee.handler && (ee.evt = R, ee.handler(ee));
            });}
          let H = ".w-checkbox-input",
            j = ".w-radio-input",
            G = "w--redirected-checked",
            q = "w--redirected-focus",
            g = "w--redirected-focus-visible",
            U = ":focus-visible, [data-wf-focus-visible]",
            $ = [["checkbox", H], ["radio", j]];
          r.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + H + ")",
            (R) => {
              e(R.target).siblings(H).toggleClass(G);
            },
          ),
            r.on("change", s + ' form input[type="radio"]', (R) => {
              e(`input[name="${R.target.name}"]:not(${H})`).map((ce, ae) =>
                e(ae).siblings(j).removeClass(G)
              );
              let ee = e(R.target);
              ee.hasClass("w-radio-input") || ee.siblings(j).addClass(G);
            }),
            $.forEach(([R, ee]) => {
              r.on(
                "focus",
                s + ` form input[type="${R}"]:not(` + ee + ")",
                (ce) => {
                  e(ce.target).siblings(ee).addClass(q),
                    e(ce.target).filter(U).siblings(ee).addClass(g);
                },
              ),
                r.on(
                  "blur",
                  s + ` form input[type="${R}"]:not(` + ee + ")",
                  (ce) => {
                    e(ce.target).siblings(ee).removeClass(`${q} ${g}`);
                  },
                );
            });
        }
        function F(M) {
          var H = M.btn = M.form.find(':input[type="submit"]');
          M.wait = M.btn.attr("data-wait") || null,
            M.success = !1,
            H.prop("disabled", !1),
            M.label && H.val(M.label);
        }
        function P(M) {
          var H = M.btn, j = M.wait;
          H.prop("disabled", !0), j && (M.label = H.val(), H.val(j));
        }
        function W(M, H) {
          var j = null;
          return H = H || {},
            M.find(':input:not([type="submit"]):not([type="file"])').each(
              function (G, q) {
                var g = e(q),
                  U = g.attr("type"),
                  $ = g.attr("data-name") || g.attr("name") ||
                    "Field " + (G + 1);
                $ = encodeURIComponent($);
                var R = g.val();
                if (U === "checkbox") R = g.is(":checked");
                else if (U === "radio") {
                  if (H[$] === null || typeof H[$] == "string") return;
                  R = M.find('input[name="' + g.attr("name") + '"]:checked')
                    .val() || null;
                }
                typeof R == "string" && (R = e.trim(R)),
                  H[$] = R,
                  j = j || te(g, U, $, R);
              },
            ),
            j;
        }
        function z(M) {
          var H = {};
          return M.find(':input[type="file"]').each(function (j, G) {
            var q = e(G),
              g = q.attr("data-name") || q.attr("name") || "File " + (j + 1),
              U = q.attr("data-value");
            typeof U == "string" && (U = e.trim(U)), H[g] = U;
          }),
            H;
        }
        let Y = { _mkto_trk: "marketo" };
        function J() {
          return document.cookie.split("; ").reduce(function (H, j) {
            let G = j.split("="), q = G[0];
            if (q in Y) {
              let g = Y[q], U = G.slice(1).join("=");
              H[g] = U;
            }
            return H;
          }, {});
        }
        function te(M, H, j, G) {
          var q = null;
          return H === "password"
            ? q = "Passwords cannot be submitted."
            : M.attr("required")
            ? G
              ? l.test(M.attr("type")) &&
                (v.test(G) ||
                  (q = "Please enter a valid email address for: " + j))
              : q = "Please fill out the required field: " + j
            : j === "g-recaptcha-response" && !G &&
              (q = "Please confirm you\u2019re not a robot."),
            q;
        }
        function N(M) {
          K(M), L(M);
        }
        function A(M) {
          F(M);
          var H = M.form, j = {};
          if (/^https/.test(o.href) && !/^https/.test(M.action)) {
            H.attr("method", "post");
            return;
          }
          K(M);
          var G = W(H, j);
          if (G) return p(G);
          P(M);
          var q;
          t.each(j, function (R, ee) {
            l.test(ee) && (j.EMAIL = R),
              /^((full[ _-]?)?name)$/i.test(ee) && (q = R),
              /^(first[ _-]?name)$/i.test(ee) && (j.FNAME = R),
              /^(last[ _-]?name)$/i.test(ee) && (j.LNAME = R);
          }),
            q && !j.FNAME &&
            (q = q.split(" "), j.FNAME = q[0], j.LNAME = j.LNAME || q[1]);
          var g = M.action.replace("/post?", "/post-json?") + "&c=?",
            U = g.indexOf("u=") + 2;
          U = g.substring(U, g.indexOf("&", U));
          var $ = g.indexOf("id=") + 3;
          $ = g.substring($, g.indexOf("&", $)),
            j["b_" + U + "_" + $] = "",
            e.ajax({ url: g, data: j, dataType: "jsonp" }).done(function (R) {
              M.success = R.result === "success" || /already/.test(R.msg),
                M.success || console.info("MailChimp error: " + R.msg),
                L(M);
            }).fail(function () {
              L(M);
            });
        }
        function L(M) {
          var H = M.form, j = M.redirect, G = M.success;
          if (G && j) {
            ua.location(j);
            return;
          }
          M.done.toggle(G),
            M.fail.toggle(!G),
            G ? M.done.focus() : M.fail.focus(),
            H.toggle(!G),
            F(M);
        }
        function K(M) {
          M.evt && M.evt.preventDefault(), M.evt = null;
        }
        function V(M, H) {
          if (!H.fileUploads || !H.fileUploads[M]) return;
          var j,
            G = e(H.fileUploads[M]),
            q = G.find("> .w-file-upload-default"),
            g = G.find("> .w-file-upload-uploading"),
            U = G.find("> .w-file-upload-success"),
            $ = G.find("> .w-file-upload-error"),
            R = q.find(".w-file-upload-input"),
            ee = q.find(".w-file-upload-label"),
            ce = ee.children(),
            ae = $.find(".w-file-upload-error-msg"),
            h = U.find(".w-file-upload-file"),
            X = U.find(".w-file-remove-link"),
            Q = h.find(".w-file-upload-file-name"),
            B = ae.attr("data-w-size-error"),
            he = ae.attr("data-w-type-error"),
            ht = ae.attr("data-w-generic-error");
          if (
            d || ee.on("click keydown", function (_) {
              _.type === "keydown" && _.which !== 13 && _.which !== 32 ||
                (_.preventDefault(), R.click());
            }),
              ee.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
              X.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
              d
          ) {
            R.on("click", function (_) {
              _.preventDefault();
            }),
              ee.on("click", function (_) {
                _.preventDefault();
              }),
              ce.on("click", function (_) {
                _.preventDefault();
              });
          } else {
            X.on("click keydown", function (_) {
              if (_.type === "keydown") {
                if (_.which !== 13 && _.which !== 32) return;
                _.preventDefault();
              }
              R.removeAttr("data-value"),
                R.val(""),
                Q.html(""),
                q.toggle(!0),
                U.toggle(!1),
                ee.focus();
            }),
              R.on("change", function (_) {
                j = _.target && _.target.files && _.target.files[0],
                  j &&
                  (q.toggle(!1),
                    $.toggle(!1),
                    g.toggle(!0),
                    g.focus(),
                    Q.text(j.name),
                    O() || P(H),
                    H.fileUploads[M].uploading = !0,
                    re(j, y));
              });
            var nt = ee.outerHeight();
            R.height(nt), R.width(1);
          }
          function c(_) {
            var w = _.responseJSON && _.responseJSON.msg, Z = ht;
            typeof w == "string" && w.indexOf("InvalidFileTypeError") === 0
              ? Z = he
              : typeof w == "string" && w.indexOf("MaxFileSizeError") === 0 &&
                (Z = B),
              ae.text(Z),
              R.removeAttr("data-value"),
              R.val(""),
              g.toggle(!1),
              q.toggle(!0),
              $.toggle(!0),
              $.focus(),
              H.fileUploads[M].uploading = !1,
              O() || F(H);
          }
          function y(_, w) {
            if (_) return c(_);
            var Z = w.fileName, oe = w.postData, ge = w.fileId, k = w.s3Url;
            R.attr("data-value", ge), ie(k, oe, j, Z, I);
          }
          function I(_) {
            if (_) return c(_);
            g.toggle(!1),
              U.css("display", "inline-block"),
              U.focus(),
              H.fileUploads[M].uploading = !1,
              O() || F(H);
          }
          function O() {
            var _ = H.fileUploads && H.fileUploads.toArray() || [];
            return _.some(function (w) {
              return w.uploading;
            });
          }
        }
        function re(M, H) {
          var j = new URLSearchParams({ name: M.name, size: M.size });
          e.ajax({ type: "GET", url: `${b}?${j}`, crossDomain: !0 }).done(
            function (G) {
              H(null, G);
            },
          ).fail(function (G) {
            H(G);
          });
        }
        function ie(M, H, j, G, q) {
          var g = new FormData();
          for (var U in H) g.append(U, H[U]);
          g.append("file", j, G),
            e.ajax({
              type: "POST",
              url: M,
              data: g,
              processData: !1,
              contentType: !1,
            }).done(function () {
              q(null);
            }).fail(function ($) {
              q($);
            });
        }
        return n;
      },
    );
  });
  var DE = f((IX, NE) => {
    "use strict";
    var gt = Ue(),
      yF = qn(),
      Ae = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    gt.define(
      "navbar",
      NE.exports = function (e, t) {
        var n = {},
          r = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          l,
          v,
          p = gt.env(),
          d = '<div class="w-nav-overlay" data-wf-ignore />',
          E = ".w-nav",
          T = "w--open",
          b = "w--nav-dropdown-open",
          S = "w--nav-dropdown-toggle-open",
          m = "w--nav-dropdown-list-open",
          C = "w--nav-link-open",
          x = yF.triggers,
          D = e();
        n.ready = n.design = n.preview = F,
          n.destroy = function () {
            D = e(), P(), u && u.length && u.each(J);
          };
        function F() {
          l = p && gt.env("design"),
            v = gt.env("editor"),
            s = e(document.body),
            u = o.find(E),
            u.length && (u.each(Y), P(), W());
        }
        function P() {
          gt.resize.off(z);
        }
        function W() {
          gt.resize.on(z);
        }
        function z() {
          u.each(q);
        }
        function Y(h, X) {
          var Q = e(X), B = e.data(X, E);
          B ||
          (B = e.data(X, E, { open: !1, el: Q, config: {}, selectedIdx: -1 })),
            B.menu = Q.find(".w-nav-menu"),
            B.links = B.menu.find(".w-nav-link"),
            B.dropdowns = B.menu.find(".w-dropdown"),
            B.dropdownToggle = B.menu.find(".w-dropdown-toggle"),
            B.dropdownList = B.menu.find(".w-dropdown-list"),
            B.button = Q.find(".w-nav-button"),
            B.container = Q.find(".w-container"),
            B.overlayContainerId = "w-nav-overlay-" + h,
            B.outside = j(B);
          var he = Q.find(".w-nav-brand");
          he && he.attr("href") === "/" && he.attr("aria-label") == null &&
          he.attr("aria-label", "home"),
            B.button.attr("style", "-webkit-user-select: text;"),
            B.button.attr("aria-label") == null &&
            B.button.attr("aria-label", "menu"),
            B.button.attr("role", "button"),
            B.button.attr("tabindex", "0"),
            B.button.attr("aria-controls", B.overlayContainerId),
            B.button.attr("aria-haspopup", "menu"),
            B.button.attr("aria-expanded", "false"),
            B.el.off(E),
            B.button.off(E),
            B.menu.off(E),
            A(B),
            l
              ? (te(B), B.el.on("setting" + E, L(B)))
              : (N(B),
                B.button.on("click" + E, M(B)),
                B.menu.on("click" + E, "a", H(B)),
                B.button.on("keydown" + E, K(B)),
                B.el.on("keydown" + E, V(B))),
            q(h, X);
        }
        function J(h, X) {
          var Q = e.data(X, E);
          Q && (te(Q), e.removeData(X, E));
        }
        function te(h) {
          h.overlay && (ae(h, !0), h.overlay.remove(), h.overlay = null);
        }
        function N(h) {
          h.overlay ||
            (h.overlay = e(d).appendTo(h.el),
              h.overlay.attr("id", h.overlayContainerId),
              h.parent = h.menu.parent(),
              ae(h, !0));
        }
        function A(h) {
          var X = {},
            Q = h.config || {},
            B = X.animation = h.el.attr("data-animation") || "default";
          X.animOver = /^over/.test(B),
            X.animDirect = /left$/.test(B) ? -1 : 1,
            Q.animation !== B && h.open && t.defer(ie, h),
            X.easing = h.el.attr("data-easing") || "ease",
            X.easing2 = h.el.attr("data-easing2") || "ease";
          var he = h.el.attr("data-duration");
          X.duration = he != null ? Number(he) : 400,
            X.docHeight = h.el.attr("data-doc-height"),
            h.config = X;
        }
        function L(h) {
          return function (X, Q) {
            Q = Q || {};
            var B = i.width();
            A(h),
              Q.open === !0 && ee(h, !0),
              Q.open === !1 && ae(h, !0),
              h.open && t.defer(function () {
                B !== i.width() && ie(h);
              });
          };
        }
        function K(h) {
          return function (X) {
            switch (X.keyCode) {
              case Ae.SPACE:
              case Ae.ENTER:
                return M(h)(), X.preventDefault(), X.stopPropagation();
              case Ae.ESCAPE:
                return ae(h), X.preventDefault(), X.stopPropagation();
              case Ae.ARROW_RIGHT:
              case Ae.ARROW_DOWN:
              case Ae.HOME:
              case Ae.END:
                return h.open
                  ? (X.keyCode === Ae.END
                    ? h.selectedIdx = h.links.length - 1
                    : h.selectedIdx = 0,
                    re(h),
                    X.preventDefault(),
                    X.stopPropagation())
                  : (X.preventDefault(), X.stopPropagation());
            }
          };
        }
        function V(h) {
          return function (X) {
            if (h.open) {
              switch (
                h.selectedIdx = h.links.index(document.activeElement), X.keyCode
              ) {
                case Ae.HOME:
                case Ae.END:
                  return X.keyCode === Ae.END
                    ? h.selectedIdx = h.links.length - 1
                    : h.selectedIdx = 0,
                    re(h),
                    X.preventDefault(),
                    X.stopPropagation();
                case Ae.ESCAPE:
                  return ae(h),
                    h.button.focus(),
                    X.preventDefault(),
                    X.stopPropagation();
                case Ae.ARROW_LEFT:
                case Ae.ARROW_UP:
                  return h.selectedIdx = Math.max(-1, h.selectedIdx - 1),
                    re(h),
                    X.preventDefault(),
                    X.stopPropagation();
                case Ae.ARROW_RIGHT:
                case Ae.ARROW_DOWN:
                  return h.selectedIdx = Math.min(
                    h.links.length - 1,
                    h.selectedIdx + 1,
                  ),
                    re(h),
                    X.preventDefault(),
                    X.stopPropagation();
              }
            }
          };
        }
        function re(h) {
          if (h.links[h.selectedIdx]) {
            var X = h.links[h.selectedIdx];
            X.focus(), H(X);
          }
        }
        function ie(h) {
          h.open && (ae(h, !0), ee(h, !0));
        }
        function M(h) {
          return a(function () {
            h.open ? ae(h) : ee(h);
          });
        }
        function H(h) {
          return function (X) {
            var Q = e(this), B = Q.attr("href");
            if (!gt.validClick(X.currentTarget)) {
              X.preventDefault();
              return;
            }
            B && B.indexOf("#") === 0 && h.open && ae(h);
          };
        }
        function j(h) {
          return h.outside && o.off("click" + E, h.outside), function (X) {
            var Q = e(X.target);
            v && Q.closest(".w-editor-bem-EditorOverlay").length || G(h, Q);
          };
        }
        var G = a(function (h, X) {
          if (h.open) {
            var Q = X.closest(".w-nav-menu");
            h.menu.is(Q) || ae(h);
          }
        });
        function q(h, X) {
          var Q = e.data(X, E),
            B = Q.collapsed = Q.button.css("display") !== "none";
          if (Q.open && !B && !l && ae(Q, !0), Q.container.length) {
            var he = U(Q);
            Q.links.each(he), Q.dropdowns.each(he);
          }
          Q.open && ce(Q);
        }
        var g = "max-width";
        function U(h) {
          var X = h.container.css(g);
          return X === "none" && (X = ""), function (Q, B) {
            B = e(B), B.css(g, ""), B.css(g) === "none" && B.css(g, X);
          };
        }
        function $(h, X) {
          X.setAttribute("data-nav-menu-open", "");
        }
        function R(h, X) {
          X.removeAttribute("data-nav-menu-open");
        }
        function ee(h, X) {
          if (h.open) return;
          h.open = !0,
            h.menu.each($),
            h.links.addClass(C),
            h.dropdowns.addClass(b),
            h.dropdownToggle.addClass(S),
            h.dropdownList.addClass(m),
            h.button.addClass(T);
          var Q = h.config, B = Q.animation;
          (B === "none" || !r.support.transform || Q.duration <= 0) && (X = !0);
          var he = ce(h),
            ht = h.menu.outerHeight(!0),
            nt = h.menu.outerWidth(!0),
            c = h.el.height(),
            y = h.el[0];
          if (
            q(0, y),
              x.intro(0, y),
              gt.redraw.up(),
              l || o.on("click" + E, h.outside),
              X
          ) {
            _();
            return;
          }
          var I = "transform " + Q.duration + "ms " + Q.easing;
          if (
            h.overlay && (D = h.menu.prev(), h.overlay.show().append(h.menu)),
              Q.animOver
          ) {
            r(h.menu).add(I).set({ x: Q.animDirect * nt, height: he }).start({
              x: 0,
            }).then(_), h.overlay && h.overlay.width(nt);
            return;
          }
          var O = c + ht;
          r(h.menu).add(I).set({ y: -O }).start({ y: 0 }).then(_);
          function _() {
            h.button.attr("aria-expanded", "true");
          }
        }
        function ce(h) {
          var X = h.config, Q = X.docHeight ? o.height() : s.height();
          return X.animOver
            ? h.menu.height(Q)
            : h.el.css("position") !== "fixed" && (Q -= h.el.outerHeight(!0)),
            h.overlay && h.overlay.height(Q),
            Q;
        }
        function ae(h, X) {
          if (!h.open) return;
          h.open = !1, h.button.removeClass(T);
          var Q = h.config;
          if (
            (Q.animation === "none" || !r.support.transform ||
              Q.duration <= 0) && (X = !0),
              x.outro(0, h.el[0]),
              o.off("click" + E, h.outside),
              X
          ) {
            r(h.menu).stop(), y();
            return;
          }
          var B = "transform " + Q.duration + "ms " + Q.easing2,
            he = h.menu.outerHeight(!0),
            ht = h.menu.outerWidth(!0),
            nt = h.el.height();
          if (Q.animOver) {
            r(h.menu).add(B).start({ x: ht * Q.animDirect }).then(y);
            return;
          }
          var c = nt + he;
          r(h.menu).add(B).start({ y: -c }).then(y);
          function y() {
            h.menu.height(""),
              r(h.menu).set({ x: 0, y: 0 }),
              h.menu.each(R),
              h.links.removeClass(C),
              h.dropdowns.removeClass(b),
              h.dropdownToggle.removeClass(S),
              h.dropdownList.removeClass(m),
              h.overlay && h.overlay.children().length &&
              (D.length ? h.menu.insertAfter(D) : h.menu.prependTo(h.parent),
                h.overlay.attr("style", "").hide()),
              h.el.triggerHandler("w-close"),
              h.button.attr("aria-expanded", "false");
          }
        }
        return n;
      },
    );
  });
  Ta();
  Aa();
  Sa();
  qn();
  IE();
  bE();
  OE();
  SE();
  CE();
  LE();
  DE();
})();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init(
  {
    "events": {
      "e": {
        "id": "e",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "MOUSE_CLICK",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-2",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".fs-cc-manager_trigger",
          "originalId": "5ce188a9-a792-4c9d-705c-312d4bc6a37d",
          "appliesTo": "CLASS",
        },
        "targets": [{
          "selector": ".fs-cc-manager_trigger",
          "originalId": "5ce188a9-a792-4c9d-705c-312d4bc6a37d",
          "appliesTo": "CLASS",
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1615730156825,
      },
      "e-2": {
        "id": "e-2",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "MOUSE_SECOND_CLICK",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-2",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-9",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".fs-cc-manager_trigger",
          "originalId": "5ce188a9-a792-4c9d-705c-312d4bc6a37d",
          "appliesTo": "CLASS",
        },
        "targets": [{
          "selector": ".fs-cc-manager_trigger",
          "originalId": "5ce188a9-a792-4c9d-705c-312d4bc6a37d",
          "appliesTo": "CLASS",
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1615730156825,
      },
      "e-3": {
        "id": "e-3",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_CLICK",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-3",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-4",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".fs-cc-banner_trigger",
          "originalId":
            "604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a",
          "appliesTo": "CLASS",
        },
        "targets": [{
          "selector": ".fs-cc-banner_trigger",
          "originalId":
            "604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a",
          "appliesTo": "CLASS",
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1615288220024,
      },
      "e-4": {
        "id": "e-4",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_SECOND_CLICK",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-4",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-3",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".fs-cc-banner_trigger",
          "originalId":
            "604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a",
          "appliesTo": "CLASS",
        },
        "targets": [{
          "selector": ".fs-cc-banner_trigger",
          "originalId":
            "604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a",
          "appliesTo": "CLASS",
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1615288220027,
      },
      "e-5": {
        "id": "e-5",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_CLICK",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-5",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-6",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".fs-cc-prefs_checkbox",
          "originalId":
            "604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e",
          "appliesTo": "CLASS",
        },
        "targets": [{
          "selector": ".fs-cc-prefs_checkbox",
          "originalId":
            "604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e",
          "appliesTo": "CLASS",
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1615343217594,
      },
      "e-6": {
        "id": "e-6",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_SECOND_CLICK",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-6",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-10",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".fs-cc-prefs_checkbox",
          "originalId":
            "604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e",
          "appliesTo": "CLASS",
        },
        "targets": [{
          "selector": ".fs-cc-prefs_checkbox",
          "originalId":
            "604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e",
          "appliesTo": "CLASS",
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1615343217595,
      },
      "e-7": {
        "id": "e-7",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_CLICK",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-7",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-8",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".fs-cc-prefs_trigger",
          "originalId": "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
          "appliesTo": "CLASS",
        },
        "targets": [{
          "selector": ".fs-cc-prefs_trigger",
          "originalId": "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
          "appliesTo": "CLASS",
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1615393093699,
      },
      "e-8": {
        "id": "e-8",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_SECOND_CLICK",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-8",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-7",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".fs-cc-prefs_trigger",
          "originalId": "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
          "appliesTo": "CLASS",
        },
        "targets": [{
          "selector": ".fs-cc-prefs_trigger",
          "originalId": "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
          "appliesTo": "CLASS",
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1615393093699,
      },
      "e-9": {
        "id": "e-9",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "MOUSE_CLICK",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-9",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-10",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".fs-cc-manager_trigger",
          "originalId": "2ed64635-d5b0-7c5b-3f0f-723ada8e9d65",
          "appliesTo": "CLASS",
        },
        "targets": [{
          "selector": ".fs-cc-manager_trigger",
          "originalId": "2ed64635-d5b0-7c5b-3f0f-723ada8e9d65",
          "appliesTo": "CLASS",
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1615730156825,
      },
      "e-10": {
        "id": "e-10",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "MOUSE_SECOND_CLICK",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-10",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-9",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".fs-cc-manager_trigger",
          "originalId": "2ed64635-d5b0-7c5b-3f0f-723ada8e9d65",
          "appliesTo": "CLASS",
        },
        "targets": [{
          "selector": ".fs-cc-manager_trigger",
          "originalId": "2ed64635-d5b0-7c5b-3f0f-723ada8e9d65",
          "appliesTo": "CLASS",
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1615730156825,
      },
      "e-11": {
        "id": "e-11",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_CLICK",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-11",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-12",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".fs-cc-prefs_trigger",
          "originalId": "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
          "appliesTo": "CLASS",
        },
        "targets": [{
          "selector": ".fs-cc-prefs_trigger",
          "originalId": "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
          "appliesTo": "CLASS",
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1615393093699,
      },
      "e-12": {
        "id": "e-12",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_SECOND_CLICK",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-12",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-11",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".fs-cc-prefs_trigger",
          "originalId": "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
          "appliesTo": "CLASS",
        },
        "targets": [{
          "selector": ".fs-cc-prefs_trigger",
          "originalId": "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
          "appliesTo": "CLASS",
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1615393093699,
      },
      "e-15": {
        "id": "e-15",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLLING_IN_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
          "config": {
            "actionListId": "a-14",
            "affectedElements": {},
            "duration": 0,
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "63068f0fdc776cddf6848bac|63068f0fdc776c101f848bad",
          "appliesTo": "ELEMENT",
          "styleBlockIds": [],
        },
        "targets": [{
          "id": "63068f0fdc776cddf6848bac|63068f0fdc776c101f848bad",
          "appliesTo": "ELEMENT",
          "styleBlockIds": [],
        }],
        "config": [{
          "continuousParameterGroupId": "a-14-p",
          "smoothing": 50,
          "startsEntering": true,
          "addStartOffset": false,
          "addOffsetValue": 50,
          "startsExiting": false,
          "addEndOffset": false,
          "endOffsetValue": 50,
        }],
        "createdOn": 1690569067928,
      },
      "e-16": {
        "id": "e-16",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "PAGE_START",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-15",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-17",
          },
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "63068f0fdc776cddf6848bac",
          "appliesTo": "PAGE",
          "styleBlockIds": [],
        },
        "targets": [{
          "id": "63068f0fdc776cddf6848bac",
          "appliesTo": "PAGE",
          "styleBlockIds": [],
        }],
        "config": {
          "loop": true,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null,
        },
        "createdOn": 1727137151011,
      },
    },
    "actionLists": {
      "a": {
        "id": "a",
        "title": "Manager [SHOW]",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component",
                "selectorGuids": ["11111633-491e-6785-10f9-8580eca923c5"],
              },
              "value": 0,
              "unit": "",
            },
          }, {
            "id": "a-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component",
                "selectorGuids": ["11111633-491e-6785-10f9-8580eca923c5"],
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "%",
              "zUnit": "PX",
            },
          }, {
            "id": "a-n-3",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component",
                "selectorGuids": ["11111633-491e-6785-10f9-8580eca923c5"],
              },
              "value": "none",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-n-4",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component",
                "selectorGuids": ["11111633-491e-6785-10f9-8580eca923c5"],
              },
              "value": "block",
            },
          }, {
            "id": "a-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component",
                "selectorGuids": ["11111633-491e-6785-10f9-8580eca923c5"],
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "PX",
            },
          }, {
            "id": "a-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component",
                "selectorGuids": ["11111633-491e-6785-10f9-8580eca923c5"],
              },
              "value": 1,
              "unit": "",
            },
          }],
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1615340734554,
      },
      "a-2": {
        "id": "a-2",
        "title": "Manager [HIDE]",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-2-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component",
                "selectorGuids": ["11111633-491e-6785-10f9-8580eca923c5"],
              },
              "value": 0,
              "unit": "",
            },
          }, {
            "id": "a-2-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component",
                "selectorGuids": ["11111633-491e-6785-10f9-8580eca923c5"],
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "%",
              "zUnit": "PX",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-2-n-3",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component",
                "selectorGuids": ["11111633-491e-6785-10f9-8580eca923c5"],
              },
              "value": "none",
            },
          }],
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1615340734554,
      },
      "a-3": {
        "id": "a-3",
        "title": "Cookie Banner [SHOW]",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-3-n",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-banner_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723dc"],
              },
              "value": "none",
            },
          }, {
            "id": "a-3-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-banner_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723dc"],
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "%",
              "zUnit": "PX",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-3-n-3",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-banner_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723dc"],
              },
              "value": "flex",
            },
          }, {
            "id": "a-3-n-4",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-banner_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723dc"],
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "PX",
            },
          }],
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1615288223878,
      },
      "a-4": {
        "id": "a-4",
        "title": "Cookie Banner [HIDE]",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-4-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-banner_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723dc"],
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "%",
              "zUnit": "PX",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-4-n-2",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-banner_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723dc"],
              },
              "value": "none",
            },
          }],
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1615288223878,
      },
      "a-5": {
        "id": "a-5",
        "title": "Preferences Checkbox [CHECK]",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-5-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 250,
              "target": {
                "useEventTarget": "SIBLINGS",
                "selector": ".fs-cc-prefs_toggle",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723d5"],
              },
              "xValue": 20,
              "xUnit": "px",
              "yUnit": "PX",
              "zUnit": "PX",
            },
          }, {
            "id": "a-5-n-2",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 200,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_checkbox-field",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723e0"],
              },
              "globalSwatchId": "",
              "rValue": 67,
              "bValue": 255,
              "gValue": 83,
              "aValue": 1,
            },
          }],
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1615343221337,
      },
      "a-6": {
        "id": "a-6",
        "title": "Preferences Checkbox [UNCHECK]",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-6-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 250,
              "target": {
                "useEventTarget": "SIBLINGS",
                "selector": ".fs-cc-prefs_toggle",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723d5"],
              },
              "xValue": 0,
              "xUnit": "px",
              "yUnit": "PX",
              "zUnit": "PX",
            },
          }, {
            "id": "a-6-n-2",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 200,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_checkbox-field",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723e0"],
              },
              "globalSwatchId": "",
              "rValue": 204,
              "bValue": 204,
              "gValue": 204,
              "aValue": 1,
            },
          }],
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1615343221337,
      },
      "a-7": {
        "id": "a-7",
        "title": "Preferences Popup [SHOW]",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-7-n",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723d4"],
              },
              "value": "none",
            },
          }, {
            "id": "a-7-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723d4"],
              },
              "yValue": 20,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "PX",
            },
          }, {
            "id": "a-7-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723d4"],
              },
              "value": 0,
              "unit": "",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-7-n-4",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723d4"],
              },
              "value": "flex",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-7-n-5",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723d4"],
              },
              "value": 1,
              "unit": "",
            },
          }, {
            "id": "a-7-n-6",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723d4"],
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "PX",
            },
          }],
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1615393118761,
      },
      "a-8": {
        "id": "a-8",
        "title": "Preferences Popup [HIDE]",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-8-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 500,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723d4"],
              },
              "value": 0,
              "unit": "",
            },
          }, {
            "id": "a-8-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723d4"],
              },
              "yValue": 20,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "PX",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-8-n-3",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component",
                "selectorGuids": ["27321245-a687-0e00-ed6e-90ab16f723d4"],
              },
              "value": "none",
            },
          }],
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1615393118761,
      },
      "a-9": {
        "id": "a-9",
        "title": "Manager [SHOW] 2",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-9-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773a"],
              },
              "value": 0,
              "unit": "",
            },
          }, {
            "id": "a-9-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773a"],
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "%",
              "zUnit": "PX",
            },
          }, {
            "id": "a-9-n-3",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773a"],
              },
              "value": "none",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-9-n-4",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773a"],
              },
              "value": "block",
            },
          }, {
            "id": "a-9-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773a"],
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "PX",
            },
          }, {
            "id": "a-9-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773a"],
              },
              "value": 1,
              "unit": "",
            },
          }],
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1615340734554,
      },
      "a-10": {
        "id": "a-10",
        "title": "Manager [HIDE] 2",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-10-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773a"],
              },
              "value": 0,
              "unit": "",
            },
          }, {
            "id": "a-10-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773a"],
              },
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "%",
              "zUnit": "PX",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-10-n-3",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-manager_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773a"],
              },
              "value": "none",
            },
          }],
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1615340734554,
      },
      "a-11": {
        "id": "a-11",
        "title": "Preferences Popup [SHOW] 2",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-11-n",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773f"],
              },
              "value": "none",
            },
          }, {
            "id": "a-11-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773f"],
              },
              "yValue": 20,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "PX",
            },
          }, {
            "id": "a-11-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773f"],
              },
              "value": 0,
              "unit": "",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-11-n-4",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773f"],
              },
              "value": "flex",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-11-n-5",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773f"],
              },
              "value": 1,
              "unit": "",
            },
          }, {
            "id": "a-11-n-6",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773f"],
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "PX",
            },
          }],
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1615393118761,
      },
      "a-12": {
        "id": "a-12",
        "title": "Preferences Popup [HIDE] 2",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-12-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 500,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773f"],
              },
              "value": 0,
              "unit": "",
            },
          }, {
            "id": "a-12-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773f"],
              },
              "yValue": 20,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "PX",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-12-n-3",
            "actionTypeId": "GENERAL_DISPLAY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "PARENT",
                "selector": ".fs-cc-prefs_component-2",
                "selectorGuids": ["c73d3800-055d-9f46-d384-31f73098773f"],
              },
              "value": "none",
            },
          }],
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1615393118761,
      },
      "a-14": {
        "id": "a-14",
        "title": "New Scroll Animation",
        "continuousParameterGroups": [{
          "id": "a-14-p",
          "type": "SCROLL_PROGRESS",
          "parameterLabel": "Scroll",
          "continuousActionGroups": [],
        }],
        "createdOn": 1690569102210,
      },
      "a-15": {
        "id": "a-15",
        "title": "infiniti-loop",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-15-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "selector": ".logo-container",
                "selectorGuids": ["b88e7d26-6256-97ea-2ff9-403676c3fd32"],
              },
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX",
            },
          }],
        }, {
          "actionItems": [{
            "id": "a-15-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 25000,
              "target": {
                "selector": ".logo-container",
                "selectorGuids": ["b88e7d26-6256-97ea-2ff9-403676c3fd32"],
              },
              "xValue": -100,
              "xUnit": "%",
              "yUnit": "PX",
              "zUnit": "PX",
            },
          }],
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1727137236576,
      },
    },
    "site": {
      "mediaQueries": [
        { "key": "main", "min": 992, "max": 10000 },
        { "key": "medium", "min": 768, "max": 991 },
        { "key": "small", "min": 480, "max": 767 },
        { "key": "tiny", "min": 0, "max": 479 },
      ],
    },
  },
);
