var C = Object.defineProperty;
var F = (n, _, t) => _ in n ? C(n, _, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[_] = t;
var c = (n, _, t) => (F(n, typeof _ != "symbol" ? _ + "" : _, t), t);
import { options as e, createContext as V } from "preact";
var q, a, h, H, T = 0, w = [], f = [], y = e.__b, E = e.__r, L = e.diffed, p = e.__c, b = e.unmount;
function k(n, _) {
  e.__h && e.__h(a, n, T || _), T = 0;
  var t = a.__H || (a.__H = { __: [], __h: [] });
  return n >= t.__.length && t.__.push({ __V: f }), t.__[n];
}
function P(n) {
  var _ = a.context[n.__c], t = k(q++, 9);
  return t.c = n, _ ? (t.__ == null && (t.__ = !0, _.sub(a)), _.props.value) : n.__;
}
function N() {
  for (var n; n = w.shift(); )
    if (n.__P && n.__H)
      try {
        n.__H.__h.forEach(g), n.__H.__h.forEach(d), n.__H.__h = [];
      } catch (_) {
        n.__H.__h = [], e.__e(_, n.__v);
      }
}
e.__b = function(n) {
  a = null, y && y(n);
}, e.__r = function(n) {
  E && E(n), q = 0;
  var _ = (a = n.__c).__H;
  _ && (h === a ? (_.__h = [], a.__h = [], _.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = f, t.__N = t.i = void 0;
  })) : (_.__h.forEach(g), _.__h.forEach(d), _.__h = [])), h = a;
}, e.diffed = function(n) {
  L && L(n);
  var _ = n.__c;
  _ && _.__H && (_.__H.__h.length && (w.push(_) !== 1 && H === e.requestAnimationFrame || ((H = e.requestAnimationFrame) || j)(N)), _.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== f && (t.__ = t.__V), t.i = void 0, t.__V = f;
  })), h = a = null;
}, e.__c = function(n, _) {
  _.some(function(t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function(o) {
        return !o.__ || d(o);
      });
    } catch (o) {
      _.some(function(i) {
        i.__h && (i.__h = []);
      }), _ = [], e.__e(o, t.__v);
    }
  }), p && p(n, _);
}, e.unmount = function(n) {
  b && b(n);
  var _, t = n.__c;
  t && t.__H && (t.__H.__.forEach(function(o) {
    try {
      g(o);
    } catch (i) {
      _ = i;
    }
  }), t.__H = void 0, _ && e.__e(_, t.__v));
};
var x = typeof requestAnimationFrame == "function";
function j(n) {
  var _, t = function() {
    clearTimeout(o), x && cancelAnimationFrame(_), setTimeout(n);
  }, o = setTimeout(t, 100);
  x && (_ = requestAnimationFrame(t));
}
function g(n) {
  var _ = a, t = n.__c;
  typeof t == "function" && (n.__c = void 0, t()), a = _;
}
function d(n) {
  var _ = a;
  n.__c = n.__(), a = _;
}
class A {
  constructor() {
    c(this, "name", "translationController");
    c(this, "_languages", []);
    c(this, "_selectedLanguage", "");
    // private _translations: Map<TranslationControllerLanguagesKeys, TranslationType>[] = []
    c(this, "_translations", {});
  }
  get languages() {
    return this._languages;
  }
  get translations() {
    return this._translations;
  }
  get selectedLanguage() {
    return this._selectedLanguage;
  }
  getTranslation(_, t) {
    return this._translations[_].get(t);
  }
  setLanguages(_) {
    this._languages = _;
  }
  setSelectedLanguage(_) {
    this._selectedLanguage = _;
  }
  setTranslations(_) {
    this._languages.length != _.length && this.handleErrors("languagesTranslationsDifference");
    for (let t = 0; t < this._languages.length; t++) {
      const o = /* @__PURE__ */ new Map(), i = this._languages[t], l = _[t];
      this._translations[i] = o;
      const s = Object.keys(l);
      for (const r of s) {
        const u = l[r];
        o.set(r, u);
      }
    }
  }
  handleErrors(_) {
    _ === "languagesTranslationsDifference" && console.error(`The number of languages and translations doesn't match! 
Cant' proceed with traduction`);
  }
}
var D = 0;
function S(n, _, t, o, i, l) {
  var s, r, u = {};
  for (r in _)
    r == "ref" ? s = _[r] : u[r] = _[r];
  var m = { type: n, props: u, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --D, __source: i, __self: l };
  if (typeof n == "function" && (s = n.defaultProps))
    for (r in s)
      u[r] === void 0 && (u[r] = s[r]);
  return e.vnode && e.vnode(m), m;
}
const v = V(new A());
function O(n) {
  console.log(v);
  const _ = new A();
  return _.setLanguages(n.languages), _.setTranslations(n.translations), _.setSelectedLanguage(n.selectedLanguage ?? n.languages[0]), S(v.Provider, {
    value: _,
    children: n.children
  });
}
function $() {
  const n = P(v);
  return (_, t) => n.getTranslation(n.selectedLanguage, _) || t || _;
}
export {
  O as TranslationProvider,
  $ as useTranslation
};
//# sourceMappingURL=preact-translation-hook.js.map
