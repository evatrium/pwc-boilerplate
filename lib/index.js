var n, l, t, i, e, u = {}, r = [], o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;

function s(n, l) {
    for (var t in l) n[t] = l[t];
    return n
}

function f(n) {
    var l = n.parentNode;
    l && l.removeChild(n)
}

function c(n, l, t) {
    var i, e, u, r, o = arguments;
    if (l = s({}, l), arguments.length > 3) for (t = [t], i = 3; i < arguments.length; i++) t.push(o[i]);
    if (null != t && (l.children = t), null != n && null != n.defaultProps) for (e in n.defaultProps) void 0 === l[e] && (l[e] = n.defaultProps[e]);
    return r = l.key, null != (u = l.ref) && delete l.ref, null != r && delete l.key, h(n, l, r, u)
}

function h(l, t, i, e) {
    var u = {type: l, props: t, key: i, ref: e, p: null, v: null, m: 0, g: null, l: null, k: null, constructor: void 0};
    return n.vnode && n.vnode(u), u
}

function a(n) {
    return n.children
}

function p(n, l) {
    this.props = n, this.context = l
}

function y(n, l) {
    if (null == l) return n.v ? y(n.v, n.v.p.indexOf(n) + 1) : null;
    for (var t; l < n.p.length; l++) if (null != (t = n.p[l]) && null != t.g) return t.g;
    return "function" == typeof n.type ? y(n) : null
}

function b(e) {
    (!e._ && (e._ = !0) && 1 === l.push(e) || i !== n.debounceRendering) && (i = n.debounceRendering, (n.debounceRendering || t)(v))
}

function v() {
    var n;
    for (l.sort(function (n, l) {
        return l.N.m - n.N.m
    }); n = l.pop();) n._ && n.forceUpdate(!1)
}

function d(n, l, t, i, e, o, s, c, h) {
    var a, p, b, v, d, g, w, x = t && t.p || r, _ = x.length;
    if (c == u && (c = null != o ? o[0] : _ ? y(t, 0) : null), a = 0, l.p = m(l.p, function (t) {
        if (null != t) {
            if (t.v = l, t.m = l.m + 1, null === (b = x[a]) || b && t.key == b.key && t.type === b.type) x[a] = void 0; else for (p = 0; p < _; p++) {
                if ((b = x[p]) && t.key == b.key && t.type === b.type) {
                    x[p] = void 0;
                    break
                }
                b = null
            }
            if (v = k(n, t, b = b || u, i, e, o, s, null, c, h), (p = t.ref) && b.ref != p && (w || (w = [])).push(p, t.k || v, t), null != v) {
                if (null == g && (g = v), null != t.l) v = t.l, t.l = null; else if (o == b || v != c || null == v.parentNode) {
                    n:if (null == c || c.parentNode !== n) n.appendChild(v); else {
                        for (d = c, p = 0; (d = d.nextSibling) && p < _; p += 2) if (d == v) break n;
                        n.insertBefore(v, c)
                    }
                    "option" == l.type && (n.value = "")
                }
                c = v.nextSibling, "function" == typeof l.type && (l.l = v)
            }
        }
        return a++, t
    }), l.g = g, null != o && "function" != typeof l.type) for (a = o.length; a--;) null != o[a] && f(o[a]);
    for (a = _; a--;) null != x[a] && j(x[a], x[a]);
    if (w) for (a = 0; a < w.length; a++) $(w[a], w[++a], w[++a])
}

function m(n, l, t) {
    if (null == t && (t = []), null == n || "boolean" == typeof n) l && t.push(l(null)); else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) m(n[i], l, t); else t.push(l ? l(function (n) {
        if (null == n || "boolean" == typeof n) return null;
        if ("string" == typeof n || "number" == typeof n) return h(null, n, null, null);
        if (null != n.g || null != n.k) {
            var l = h(n.type, n.props, n.key, null);
            return l.g = n.g, l
        }
        return n
    }(n)) : n);
    return t
}

function g(n, l, t) {
    "-" === l[0] ? n.setProperty(l, t) : n[l] = "number" == typeof t && !1 === o.test(l) ? t + "px" : t || ""
}

function w(n, l, t, i, e) {
    var u, r, o, s, f;
    if ("key" === (l = e ? "className" === l ? "class" : l : "class" === l ? "className" : l) || "children" === l) ; else if ("style" === l) if (u = n.style, "string" == typeof t) u.cssText = t; else {
        if ("string" == typeof i && (u.cssText = "", i = null), i) for (r in i) t && r in t || g(u, r, "");
        if (t) for (o in t) i && t[o] === i[o] || g(u, o, t[o])
    } else "o" === l[0] && "n" === l[1] ? (s = l !== (l = l.replace(/Capture$/, "")), f = l.toLowerCase(), l = (f in n ? f : l).slice(2), t ? (i || n.addEventListener(l, x, s), (n.u || (n.u = {}))[l] = t) : n.removeEventListener(l, x, s)) : "list" !== l && "tagName" !== l && "form" !== l && !e && l in n ? n[l] = null == t ? "" : t : "function" != typeof t && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == t || !1 === t ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), t) : null == t || !1 === t ? n.removeAttribute(l) : n.setAttribute(l, t))
}

function x(l) {
    return this.u[l.type](n.event ? n.event(l) : l)
}

function k(l, t, i, e, u, r, o, f, c, h) {
    var y, b, v, m, g, w, x, k, _, $, j = t.type;
    if (void 0 !== t.constructor) return null;
    (y = n.m) && y(t);
    try {
        n:if ("function" == typeof j) {
            if (k = t.props, _ = (y = j.contextType) && e[y.k], $ = y ? _ ? _.props.value : y.v : e, i.k ? x = (b = t.k = i.k).v = b.$ : ("prototype" in j && j.prototype.render ? t.k = b = new j(k, $) : (t.k = b = new p(k, $), b.constructor = j, b.render = A), _ && _.sub(b), b.props = k, b.state || (b.state = {}), b.context = $, b.j = e, v = b._ = !0, b.A = []), null == b.O && (b.O = b.state), null != j.getDerivedStateFromProps && s(b.O == b.state ? b.O = s({}, b.O) : b.O, j.getDerivedStateFromProps(k, b.O)), v) null == j.getDerivedStateFromProps && null != b.componentWillMount && b.componentWillMount(), null != b.componentDidMount && o.push(b); else {
                if (null == j.getDerivedStateFromProps && null == f && null != b.componentWillReceiveProps && b.componentWillReceiveProps(k, $), !f && null != b.shouldComponentUpdate && !1 === b.shouldComponentUpdate(k, b.O, $)) {
                    for (b.props = k, b.state = b.O, b._ = !1, b.N = t, t.g = null != c ? c !== i.g ? c : i.g : null, t.p = i.p, y = 0; y < t.p.length; y++) t.p[y] && (t.p[y].v = t);
                    break n
                }
                null != b.componentWillUpdate && b.componentWillUpdate(k, b.O, $)
            }
            for (m = b.props, g = b.state, b.context = $, b.props = k, b.state = b.O, (y = n.S) && y(t), b._ = !1, b.N = t, b.C = l, y = b.render(b.props, b.state, b.context), t.p = null != y && y.type == a && null == y.key ? y.props.children : y, null != b.getChildContext && (e = s(s({}, e), b.getChildContext())), v || null == b.getSnapshotBeforeUpdate || (w = b.getSnapshotBeforeUpdate(m, g)), d(l, t, i, e, u, r, o, c, h), b.base = t.g; y = b.A.pop();) b.O && (b.state = b.O), y.call(b);
            v || null == m || null == b.componentDidUpdate || b.componentDidUpdate(m, g, w), x && (b.$ = b.v = null)
        } else t.g = N(i.g, t, i, e, u, r, o, h);
        (y = n.diffed) && y(t)
    } catch (l) {
        n.g(l, t, i)
    }
    return t.g
}

function _(l, t) {
    for (var i; i = l.pop();) try {
        i.componentDidMount()
    } catch (l) {
        n.g(l, i.N)
    }
    n.k && n.k(t)
}

function N(n, l, t, i, e, o, s, f) {
    var c, h, a, p, y = t.props, b = l.props;
    if (e = "svg" === l.type || e, null == n && null != o) for (c = 0; c < o.length; c++) if (null != (h = o[c]) && (null === l.type ? 3 === h.nodeType : h.localName === l.type)) {
        n = h, o[c] = null;
        break
    }
    if (null == n) {
        if (null === l.type) return document.createTextNode(b);
        n = e ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), o = null
    }
    return null === l.type ? y !== b && (null != o && (o[o.indexOf(n)] = null), n.data = b) : l !== t && (null != o && (o = r.slice.call(n.childNodes)), a = (y = t.props || u).dangerouslySetInnerHTML, p = b.dangerouslySetInnerHTML, f || (p || a) && (p && a && p.P == a.P || (n.innerHTML = p && p.P || "")), function (n, l, t, i, e) {
        var u;
        for (u in t) u in l || w(n, u, null, t[u], i);
        for (u in l) e && "function" != typeof l[u] || "value" === u || "checked" === u || t[u] === l[u] || w(n, u, l[u], t[u], i)
    }(n, b, y, e, f), l.p = l.props.children, p || d(n, l, t, i, "foreignObject" !== l.type && e, o, s, u, f), f || ("value" in b && void 0 !== b.value && b.value !== n.value && (n.value = null == b.value ? "" : b.value), "checked" in b && void 0 !== b.checked && b.checked !== n.checked && (n.checked = b.checked))), n
}

function $(l, t, i) {
    try {
        "function" == typeof l ? l(t) : l.current = t
    } catch (l) {
        n.g(l, i)
    }
}

function j(l, t, i) {
    var e, u, r;
    if (n.unmount && n.unmount(l), (e = l.ref) && $(e, null, t), i || "function" == typeof l.type || (i = null != (u = l.g)), l.g = l.l = null, null != (e = l.k)) {
        if (e.componentWillUnmount) try {
            e.componentWillUnmount()
        } catch (l) {
            n.g(l, t)
        }
        e.base = e.C = null
    }
    if (e = l.p) for (r = 0; r < e.length; r++) e[r] && j(e[r], t, i);
    null != u && f(u)
}

function A(n, l, t) {
    return this.constructor(n, t)
}

function O(l, t, i) {
    var o, s, f;
    n.v && n.v(l, t), s = (o = i === e) ? null : i && i.p || t.p, l = c(a, null, [l]), f = [], k(t, o ? t.p = l : (i || t).p = l, s || u, u, void 0 !== t.ownerSVGElement, i && !o ? [i] : s ? null : r.slice.call(t.childNodes), f, !1, i || u, o), _(f, l)
}

n = {}, p.prototype.setState = function (n, l) {
    var t = this.O !== this.state && this.O || (this.O = s({}, this.state));
    ("function" != typeof n || (n = n(t, this.props))) && s(t, n), null != n && this.N && (l && this.A.push(l), b(this))
}, p.prototype.forceUpdate = function (n) {
    var l, t, i, e = this.N, u = this.N.g, r = this.C;
    r && (l = !1 !== n, t = [], i = k(r, e, s({}, e), this.j, void 0 !== r.ownerSVGElement, null, t, l, null == u ? y(e) : u), _(t, e), i != u && function n(l) {
        var t, i;
        if (null != (l = l.v) && null != l.k) {
            for (l.g = l.k.base = null, t = 0; t < l.p.length; t++) if (null != (i = l.p[t]) && null != i.g) {
                l.g = l.k.base = i.g;
                break
            }
            return n(l)
        }
    }(e)), n && n()
}, p.prototype.render = a, l = [], t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, i = n.debounceRendering, n.g = function (n, l, t) {
    for (var i; l = l.v;) if ((i = l.k) && !i.v) try {
        if (i.constructor && null != i.constructor.getDerivedStateFromError) i.setState(i.constructor.getDerivedStateFromError(n)); else {
            if (null == i.componentDidCatch) continue;
            i.componentDidCatch(n)
        }
        return b(i.$ = i)
    } catch (l) {
        n = l
    }
    throw n
}, e = u;
const S = (n, l, t) => Object.defineProperty(n, l, t), C = Array.isArray;
let P = document, T = !1,
    z = n => (n = P.createElement("style"), P.head.appendChild(n), l => (n.appendChild(P.createTextNode(l)), n)),
    E = (z(), z()), B = (n, l) => {
        l = l || String;
        try {
            if (l == Boolean ? n = [!0, 1, "", "1", "true"].includes(n) : "string" == typeof n && (n = l == Number ? Number(n) : l == Object || l == Array ? JSON.parse(n) : n), {}.toString.call(n) == `[object ${l.name}]`) return {
                value: n,
                error: l == Number && Number.isNaN(n)
            }
        } catch (n) {
        }
        return {value: n, error: !0}
    }, H = (n, l, t) => {
        null === t || !1 === t ? n.removeAttribute(l) : n.setAttribute(l, (n => "object" == typeof n && n instanceof Object)(t) || C(t) ? JSON.stringify(t) : t)
    }, J = n => n.replace(/([A-Z])/g, "-$1").toLowerCase(), L = n => n.replace(/-(\w)/g, (n, l) => l.toUpperCase());
E(" .___ {visibility: inherit;}", !0);
let M = Symbol(), q = Symbol(), F = {}, I = (n, l, t) => {
    var i, e;
    return (n => E(`${n} {visibility:hidden}`))(n), customElements.define(n, (e = i = class extends Z {
        constructor(...n) {
            super(...n), this.render = n => c(l, n)
        }
    }, i.propTypes = l.propTypes || t, e)), l => c(n, l, l.children)
};

class Z extends HTMLElement {
    constructor() {
        super(), this.context = F, this.update = () => (this.t || (this.t = this.i.then(n => {
            O(this.render(function (n, l) {
                for (let t in l) n[t] = l[t];
                return n
            }({host: this}, this[M])), this.s), !this.h && !T && requestAnimationFrame(() => this.classList.add("___")), this.h = !0, this.t = !1
        })), this.t), this.emit = (n, l, t) => (t || this).dispatchEvent(new CustomEvent(n, {
            detail: l,
            bubbles: !0,
            composed: !0
        })), this.s = this.attachShadow({mode: "open"}), this[M] = {}, this.i = new Promise(n => this.o = n), this.update();
        let {l: n} = this.constructor, l = n.length;
        for (; l--;) n[l](this)
    }

    connectedCallback() {
        !this.h && this.o()
    }

    attributeChangedCallback(n, l, t) {
        n !== this[q] && l !== t && (this[L(n)] = t)
    }

    static get observedAttributes() {
        let {propTypes: n, prototype: l} = this;
        return this.l = [], n ? Object.keys(n).map(t => {
            let i = J(t), e = n[t].name ? {type: n[t]} : n[t];
            return t in l || S(l, t, {
                get() {
                    return this[M][t]
                }, set(n) {
                    let {value: l, error: u} = B(n, e.type);
                    if (u && null != l) throw`[${t}] must be type [${e.type.name}]`;
                    l !== this[M][t] && (e.reflect && this.i.then(() => {
                        this[q] = i, H(this, i, e.type !== Boolean || l ? l : null), this[q] = !1
                    }), this[M][t] = l, this.update())
                }
            }), e.value && this.l.push(n => n[t] = e.value), i
        }) : []
    }

    disconnectedCallback() {
        !this.isConnected && O(() => null, this.s)
    }
}

let D = ["0px 4px 19px 1px rgba(150, 160, 229, 0.18)"], G = ":host,*,*::before,*::after{box-sizing:border-box}";
const K = I("awesome-box", ({message: n}) => c(a, null, c("style", null, G + ":host{display:flex;height:100px;width:100%;background:#f0f8ff}"), c("h1", null, "Awesome box says: ", n || "...set my message attribute to some awesome string value"), c("slot", null)), {message: String}),
    Q = ((n, l, t) => I("x-nav", () => c("nav", null, c("style", null, G + `:host,nav{display:flex;position:fixed;top:0;width:100%;left:0;right:0;z-index:7000;flex-shrink:0}nav{border-bottom:1px solid #f0f8ff;height:56;background:#fff;box-shadow:${D[0]}}`), c("slot", null)), void 0))();
export {K as AwesomeBox, Q as Nav};
//# sourceMappingURL=index.js.map
