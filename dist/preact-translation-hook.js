var w = Object.defineProperty;
var q = (t, n, _) => n in t ? w(t, n, { enumerable: !0, configurable: !0, writable: !0, value: _ }) : t[n] = _;
var l = (t, n, _) => (q(t, typeof n != "symbol" ? n + "" : n, _), _);
import { options as e, createContext as x } from "preact";
var d, r, h, y, H = 0, k = [], f = [], b = e.__b, L = e.__r, E = e.diffed, p = e.__c, A = e.unmount;
function C(t, n) {
  e.__h && e.__h(r, t, H || n), H = 0;
  var _ = r.__H || (r.__H = { __: [], __h: [] });
  return t >= _.__.length && _.__.push({ __V: f }), _.__[t];
}
function F(t) {
  var n = r.context[t.__c], _ = C(d++, 9);
  return _.c = t, n ? (_.__ == null && (_.__ = !0, n.sub(r)), n.props.value) : t.__;
}
function N() {
  for (var t; t = k.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(g), t.__H.__h.forEach(v), t.__H.__h = [];
      } catch (n) {
        t.__H.__h = [], e.__e(n, t.__v);
      }
}
e.__b = function(t) {
  r = null, b && b(t);
}, e.__r = function(t) {
  L && L(t), d = 0;
  var n = (r = t.__c).__H;
  n && (h === r ? (n.__h = [], r.__h = [], n.__.forEach(function(_) {
    _.__N && (_.__ = _.__N), _.__V = f, _.__N = _.i = void 0;
  })) : (n.__h.forEach(g), n.__h.forEach(v), n.__h = [], d = 0)), h = r;
}, e.diffed = function(t) {
  E && E(t);
  var n = t.__c;
  n && n.__H && (n.__H.__h.length && (k.push(n) !== 1 && y === e.requestAnimationFrame || ((y = e.requestAnimationFrame) || V)(N)), n.__H.__.forEach(function(_) {
    _.i && (_.__H = _.i), _.__V !== f && (_.__ = _.__V), _.i = void 0, _.__V = f;
  })), h = r = null;
}, e.__c = function(t, n) {
  n.some(function(_) {
    try {
      _.__h.forEach(g), _.__h = _.__h.filter(function(o) {
        return !o.__ || v(o);
      });
    } catch (o) {
      n.some(function(s) {
        s.__h && (s.__h = []);
      }), n = [], e.__e(o, _.__v);
    }
  }), p && p(t, n);
}, e.unmount = function(t) {
  A && A(t);
  var n, _ = t.__c;
  _ && _.__H && (_.__H.__.forEach(function(o) {
    try {
      g(o);
    } catch (s) {
      n = s;
    }
  }), _.__H = void 0, n && e.__e(n, _.__v));
};
var j = typeof requestAnimationFrame == "function";
function V(t) {
  var n, _ = function() {
    clearTimeout(o), j && cancelAnimationFrame(n), setTimeout(t);
  }, o = setTimeout(_, 100);
  j && (n = requestAnimationFrame(_));
}
function g(t) {
  var n = r, _ = t.__c;
  typeof _ == "function" && (t.__c = void 0, _()), r = n;
}
function v(t) {
  var n = r;
  t.__c = t.__(), r = n;
}
function P(t) {
  return typeof t == "object" && !Array.isArray(t);
}
class O {
  constructor() {
    l(this, "name", "translationController");
    l(this, "_languages", []);
    l(this, "_selectedLanguage", "");
    // private _translations: Map<TranslationControllerLanguagesKeys, TranslationType>[] = []
    l(this, "_translations", {});
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
  /*
  
    Se l'oggetto è nested (es: 
    {
      pippo: "franco", 
      amici: 
        {luca: "rossi"}
      }
    }
     ritorna un oggetto di tipo:
    {
      "pippo":"franco",
      "amici.luca": "rossi"
    }
  
  */
  flattenTranslationObject(n, _ = "") {
    const o = Object.keys(n);
    let s = {};
    for (const c of o) {
      const i = _ ? `${_}.${c}` : c, a = n[c];
      if (!P(a))
        s[i] = a;
      else {
        const u = this.flattenTranslationObject(a, i);
        s = {
          ...s,
          ...u
        };
      }
    }
    return s;
  }
  getTranslation(n, _) {
    return this._translations[n].get(_) ?? null;
  }
  setLanguages(n) {
    this._languages = n;
  }
  setSelectedLanguage(n) {
    this._selectedLanguage = n;
  }
  setTranslations(n) {
    this._languages.length != n.length && this.handleErrors("languagesTranslationsDifference");
    for (let _ = 0; _ < this._languages.length; _++) {
      const o = /* @__PURE__ */ new Map(), s = this._languages[_], c = this.flattenTranslationObject(n[_]);
      console.log("TRANSLATION = ", c), this._translations[s] = o;
      const i = Object.keys(c);
      for (const a of i) {
        const u = c[a];
        o.set(a, u);
      }
    }
  }
  handleErrors(n) {
    n === "languagesTranslationsDifference" && console.error(`The number of languages and translations doesn't match! 
Cant' proceed with traduction`);
  }
}
var S = 0;
function $(t, n, _, o, s, c) {
  var i, a, u = {};
  for (a in n)
    a == "ref" ? i = n[a] : u[a] = n[a];
  var T = { type: t, props: u, key: _, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --S, __source: s, __self: c };
  if (typeof t == "function" && (i = t.defaultProps))
    for (a in i)
      u[a] === void 0 && (u[a] = i[a]);
  return e.vnode && e.vnode(T), T;
}
const m = x(new O());
function I(t) {
  console.log(m);
  const n = new O();
  return n.setLanguages(t.languages), n.setTranslations(t.translations), n.setSelectedLanguage(t.selectedLanguage ?? t.languages[0]), $(m.Provider, {
    value: n,
    children: t.children
  });
}
function M() {
  const t = F(m);
  return (n, _) => t.getTranslation(t.selectedLanguage, n) || _ || n;
}
export {
  I as TranslationProvider,
  M as useTranslation
};
//# sourceMappingURL=preact-translation-hook.js.map
