/*! For license information please see main.775dab64.js.LICENSE.txt */

(window.webpackJsonp = window.webpackJsonp || []).push(
    [   [79], 
        [function(e, t, n) {
    "use strict";
    e.exports = n(81)
}
, function(e, t, n) {
    "use strict";
    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    n.d(t, "a", (function() {
        return r
    }
    ))
}
, function(e, t, n) {
    var r = n(39)("wks")
      , i = n(41)
      , o = n(5).Symbol
      , a = "function" == typeof o;
    (e.exports = function(e) {
        return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
    }
    ).store = r
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return C
    }
    )),
    n.d(t, "b", (function() {
        return E
    }
    )),
    n.d(t, "c", (function() {
        return I
    }
    )),
    n.d(t, "d", (function() {
        return x
    }
    )),
    n.d(t, "e", (function() {
        return _
    }
    )),
    n.d(t, "f", (function() {
        return F
    }
    )),
    n.d(t, "g", (function() {
        return j
    }
    )),
    n.d(t, "h", (function() {
        return L
    }
    ));
    var r = n(6)
      , i = n(0)
      , o = n.n(i)
      , a = n(15)
      , l = n.n(a)
      , u = n(7)
      , c = n(48)
      , s = n.n(c)
      , f = n(68)
      , d = n.n(f);
    function p(e) {
        var t = [];
        return {
            on: function(e) {
                t.push(e)
            },
            off: function(e) {
                t = t.filter((function(t) {
                    return t !== e
                }
                ))
            },
            get: function() {
                return e
            },
            set: function(n, r) {
                e = n,
                t.forEach((function(t) {
                    return t(e, r)
                }
                ))
            }
        }
    }
    var m = o.a.createContext || function(e, t) {
        var n, r, o = "__create-react-context-" + d()() + "__", a = function(e) {
            function n() {
                var t;
                return (t = e.apply(this, arguments) || this).emitter = p(t.props.value),
                t
            }
            s()(n, e);
            var r = n.prototype;
            return r.getChildContext = function() {
                var e;
                return (e = {})[o] = this.emitter,
                e
            }
            ,
            r.componentWillReceiveProps = function(e) {
                if (this.props.value !== e.value) {
                    var n, r = this.props.value, i = e.value;
                    ((o = r) === (a = i) ? 0 !== o || 1 / o == 1 / a : o != o && a != a) ? n = 0 : (n = "function" == typeof t ? t(r, i) : 1073741823,
                    0 !== (n |= 0) && this.emitter.set(e.value, n))
                }
                var o, a
            }
            ,
            r.render = function() {
                return this.props.children
            }
            ,
            n
        }(i.Component);
        a.childContextTypes = ((n = {})[o] = l.a.object.isRequired,
        n);
        var u = function(t) {
            function n() {
                var e;
                return (e = t.apply(this, arguments) || this).state = {
                    value: e.getValue()
                },
                e.onUpdate = function(t, n) {
                    0 != ((0 | e.observedBits) & n) && e.setState({
                        value: e.getValue()
                    })
                }
                ,
                e
            }
            s()(n, t);
            var r = n.prototype;
            return r.componentWillReceiveProps = function(e) {
                var t = e.observedBits;
                this.observedBits = null == t ? 1073741823 : t
            }
            ,
            r.componentDidMount = function() {
                this.context[o] && this.context[o].on(this.onUpdate);
                var e = this.props.observedBits;
                this.observedBits = null == e ? 1073741823 : e
            }
            ,
            r.componentWillUnmount = function() {
                this.context[o] && this.context[o].off(this.onUpdate)
            }
            ,
            r.getValue = function() {
                return this.context[o] ? this.context[o].get() : e
            }
            ,
            r.render = function() {
                return (e = this.props.children,
                Array.isArray(e) ? e[0] : e)(this.state.value);
                var e
            }
            ,
            n
        }(i.Component);
        return u.contextTypes = ((r = {})[o] = l.a.object,
        r),
        {
            Provider: a,
            Consumer: u
        }
    }
      , h = n(4)
      , g = n(1)
      , v = n(49)
      , b = n.n(v)
      , y = (n(62),
    n(9))
      , w = n(69)
      , k = n.n(w)
      , x = function(e) {
        var t = m();
        return t.displayName = e,
        t
    }("Router")
      , E = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t) || this).state = {
                location: t.history.location
            },
            n._isMounted = !1,
            n._pendingLocation = null,
            t.staticContext || (n.unlisten = t.history.listen((function(e) {
                n._isMounted ? n.setState({
                    location: e
                }) : n._pendingLocation = e
            }
            ))),
            n
        }
        Object(r.a)(t, e),
        t.computeRootMatch = function(e) {
            return {
                path: "/",
                url: "/",
                params: {},
                isExact: "/" === e
            }
        }
        ;
        var n = t.prototype;
        return n.componentDidMount = function() {
            this._isMounted = !0,
            this._pendingLocation && this.setState({
                location: this._pendingLocation
            })
        }
        ,
        n.componentWillUnmount = function() {
            this.unlisten && this.unlisten()
        }
        ,
        n.render = function() {
            return o.a.createElement(x.Provider, {
                children: this.props.children || null,
                value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext
                }
            })
        }
        ,
        t
    }(o.a.Component);
    o.a.Component;
    o.a.Component;
    var S = {}
      , T = 0;
    function _(e, t) {
        void 0 === t && (t = {}),
        ("string" == typeof t || Array.isArray(t)) && (t = {
            path: t
        });
        var n = t
          , r = n.path
          , i = n.exact
          , o = void 0 !== i && i
          , a = n.strict
          , l = void 0 !== a && a
          , u = n.sensitive
          , c = void 0 !== u && u;
        return [].concat(r).reduce((function(t, n) {
            if (!n && "" !== n)
                return null;
            if (t)
                return t;
            var r = function(e, t) {
                var n = "" + t.end + t.strict + t.sensitive
                  , r = S[n] || (S[n] = {});
                if (r[e])
                    return r[e];
                var i = []
                  , o = {
                    regexp: b()(e, i, t),
                    keys: i
                };
                return T < 1e4 && (r[e] = o,
                T++),
                o
            }(n, {
                end: o,
                strict: l,
                sensitive: c
            })
              , i = r.regexp
              , a = r.keys
              , u = i.exec(e);
            if (!u)
                return null;
            var s = u[0]
              , f = u.slice(1)
              , d = e === s;
            return o && !d ? null : {
                path: n,
                url: "/" === n && "" === s ? "/" : s,
                isExact: d,
                params: a.reduce((function(e, t, n) {
                    return e[t.name] = f[n],
                    e
                }
                ), {})
            }
        }
        ), null)
    }
    var C = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return Object(r.a)(t, e),
        t.prototype.render = function() {
            var e = this;
            return o.a.createElement(x.Consumer, null, (function(t) {
                t || Object(h.a)(!1);
                var n = e.props.location || t.location
                  , r = e.props.computedMatch ? e.props.computedMatch : e.props.path ? _(n.pathname, e.props) : t.match
                  , i = Object(g.a)({}, t, {
                    location: n,
                    match: r
                })
                  , a = e.props
                  , l = a.children
                  , u = a.component
                  , c = a.render;
                return Array.isArray(l) && 0 === l.length && (l = null),
                o.a.createElement(x.Provider, {
                    value: i
                }, i.match ? l ? "function" == typeof l ? l(i) : l : u ? o.a.createElement(u, i) : c ? c(i) : null : "function" == typeof l ? l(i) : null)
            }
            ))
        }
        ,
        t
    }(o.a.Component);
    function O(e) {
        return "/" === e.charAt(0) ? e : "/" + e
    }
    function P(e, t) {
        if (!e)
            return t;
        var n = O(e);
        return 0 !== t.pathname.indexOf(n) ? t : Object(g.a)({}, t, {
            pathname: t.pathname.substr(n.length)
        })
    }
    function R(e) {
        return "string" == typeof e ? e : Object(u.e)(e)
    }
    function A(e) {
        return function() {
            Object(h.a)(!1)
        }
    }
    function N() {}
    o.a.Component;
    var I = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return Object(r.a)(t, e),
        t.prototype.render = function() {
            var e = this;
            return o.a.createElement(x.Consumer, null, (function(t) {
                t || Object(h.a)(!1);
                var n, r, i = e.props.location || t.location;
                return o.a.Children.forEach(e.props.children, (function(e) {
                    if (null == r && o.a.isValidElement(e)) {
                        n = e;
                        var a = e.props.path || e.props.from;
                        r = a ? _(i.pathname, Object(g.a)({}, e.props, {
                            path: a
                        })) : t.match
                    }
                }
                )),
                r ? o.a.cloneElement(n, {
                    location: i,
                    computedMatch: r
                }) : null
            }
            ))
        }
        ,
        t
    }(o.a.Component);
    function L(e) {
        var t = "withRouter(" + (e.displayName || e.name) + ")"
          , n = function(t) {
            var n = t.wrappedComponentRef
              , r = Object(y.a)(t, ["wrappedComponentRef"]);
            return o.a.createElement(x.Consumer, null, (function(t) {
                return t || Object(h.a)(!1),
                o.a.createElement(e, Object(g.a)({}, r, t, {
                    ref: n
                }))
            }
            ))
        };
        return n.displayName = t,
        n.WrappedComponent = e,
        k()(n, e)
    }
    var D = o.a.useContext;
    function F() {
        return D(x).history
    }
    function j() {
        return D(x).location
    }
}
, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        if (!e)
            throw new Error("Invariant failed")
    }
}
, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e.__proto__ = t
    }
    n.d(t, "a", (function() {
        return r
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return k
    }
    )),
    n.d(t, "b", (function() {
        return _
    }
    )),
    n.d(t, "d", (function() {
        return O
    }
    )),
    n.d(t, "c", (function() {
        return h
    }
    )),
    n.d(t, "f", (function() {
        return g
    }
    )),
    n.d(t, "e", (function() {
        return m
    }
    ));
    var r = n(1);
    function i(e) {
        return "/" === e.charAt(0)
    }
    function o(e, t) {
        for (var n = t, r = n + 1, i = e.length; r < i; n += 1,
        r += 1)
            e[n] = e[r];
        e.pop()
    }
    var a = function(e, t) {
        void 0 === t && (t = "");
        var n, r = e && e.split("/") || [], a = t && t.split("/") || [], l = e && i(e), u = t && i(t), c = l || u;
        if (e && i(e) ? a = r : r.length && (a.pop(),
        a = a.concat(r)),
        !a.length)
            return "/";
        if (a.length) {
            var s = a[a.length - 1];
            n = "." === s || ".." === s || "" === s
        } else
            n = !1;
        for (var f = 0, d = a.length; d >= 0; d--) {
            var p = a[d];
            "." === p ? o(a, d) : ".." === p ? (o(a, d),
            f++) : f && (o(a, d),
            f--)
        }
        if (!c)
            for (; f--; f)
                a.unshift("..");
        !c || "" === a[0] || a[0] && i(a[0]) || a.unshift("");
        var m = a.join("/");
        return n && "/" !== m.substr(-1) && (m += "/"),
        m
    };
    function l(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e)
    }
    var u = function e(t, n) {
        if (t === n)
            return !0;
        if (null == t || null == n)
            return !1;
        if (Array.isArray(t))
            return Array.isArray(n) && t.length === n.length && t.every((function(t, r) {
                return e(t, n[r])
            }
            ));
        if ("object" == typeof t || "object" == typeof n) {
            var r = l(t)
              , i = l(n);
            return r !== t || i !== n ? e(r, i) : Object.keys(Object.assign({}, t, n)).every((function(r) {
                return e(t[r], n[r])
            }
            ))
        }
        return !1
    }
      , c = n(4);
    function s(e) {
        return "/" === e.charAt(0) ? e : "/" + e
    }
    function f(e) {
        return "/" === e.charAt(0) ? e.substr(1) : e
    }
    function d(e, t) {
        return function(e, t) {
            return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length))
        }(e, t) ? e.substr(t.length) : e
    }
    function p(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e
    }
    function m(e) {
        var t = e.pathname
          , n = e.search
          , r = e.hash
          , i = t || "/";
        return n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n),
        r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r),
        i
    }
    function h(e, t, n, i) {
        var o;
        "string" == typeof e ? (o = function(e) {
            var t = e || "/"
              , n = ""
              , r = ""
              , i = t.indexOf("#");
            -1 !== i && (r = t.substr(i),
            t = t.substr(0, i));
            var o = t.indexOf("?");
            return -1 !== o && (n = t.substr(o),
            t = t.substr(0, o)),
            {
                pathname: t,
                search: "?" === n ? "" : n,
                hash: "#" === r ? "" : r
            }
        }(e)).state = t : (void 0 === (o = Object(r.a)({}, e)).pathname && (o.pathname = ""),
        o.search ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search) : o.search = "",
        o.hash ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash) : o.hash = "",
        void 0 !== t && void 0 === o.state && (o.state = t));
        try {
            o.pathname = decodeURI(o.pathname)
        } catch (l) {
            throw l instanceof URIError ? new URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : l
        }
        return n && (o.key = n),
        i ? o.pathname ? "/" !== o.pathname.charAt(0) && (o.pathname = a(o.pathname, i.pathname)) : o.pathname = i.pathname : o.pathname || (o.pathname = "/"),
        o
    }
    function g(e, t) {
        return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && u(e.state, t.state)
    }
    function v() {
        var e = null;
        var t = [];
        return {
            setPrompt: function(t) {
                return e = t,
                function() {
                    e === t && (e = null)
                }
            },
            confirmTransitionTo: function(t, n, r, i) {
                if (null != e) {
                    var o = "function" == typeof e ? e(t, n) : e;
                    "string" == typeof o ? "function" == typeof r ? r(o, i) : i(!0) : i(!1 !== o)
                } else
                    i(!0)
            },
            appendListener: function(e) {
                var n = !0;
                function r() {
                    n && e.apply(void 0, arguments)
                }
                return t.push(r),
                function() {
                    n = !1,
                    t = t.filter((function(e) {
                        return e !== r
                    }
                    ))
                }
            },
            notifyListeners: function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                t.forEach((function(e) {
                    return e.apply(void 0, n)
                }
                ))
            }
        }
    }
    var b = !("undefined" == typeof window || !window.document || !window.document.createElement);
    function y(e, t) {
        t(window.confirm(e))
    }
    function w() {
        try {
            return window.history.state || {}
        } catch (e) {
            return {}
        }
    }
    function k(e) {
        void 0 === e && (e = {}),
        b || Object(c.a)(!1);
        var t, n = window.history, i = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState"in window.history, o = !(-1 === window.navigator.userAgent.indexOf("Trident")), a = e, l = a.forceRefresh, u = void 0 !== l && l, f = a.getUserConfirmation, g = void 0 === f ? y : f, k = a.keyLength, x = void 0 === k ? 6 : k, E = e.basename ? p(s(e.basename)) : "";
        function S(e) {
            var t = e || {}
              , n = t.key
              , r = t.state
              , i = window.location
              , o = i.pathname + i.search + i.hash;
            return E && (o = d(o, E)),
            h(o, r, n)
        }
        function T() {
            return Math.random().toString(36).substr(2, x)
        }
        var _ = v();
        function C(e) {
            Object(r.a)(z, e),
            z.length = n.length,
            _.notifyListeners(z.location, z.action)
        }
        function O(e) {
            (function(e) {
                return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
            }
            )(e) || A(S(e.state))
        }
        function P() {
            A(S(w()))
        }
        var R = !1;
        function A(e) {
            if (R)
                R = !1,
                C();
            else {
                _.confirmTransitionTo(e, "POP", g, (function(t) {
                    t ? C({
                        action: "POP",
                        location: e
                    }) : function(e) {
                        var t = z.location
                          , n = I.indexOf(t.key);
                        -1 === n && (n = 0);
                        var r = I.indexOf(e.key);
                        -1 === r && (r = 0);
                        var i = n - r;
                        i && (R = !0,
                        D(i))
                    }(e)
                }
                ))
            }
        }
        var N = S(w())
          , I = [N.key];
        function L(e) {
            return E + m(e)
        }
        function D(e) {
            n.go(e)
        }
        var F = 0;
        function j(e) {
            1 === (F += e) && 1 === e ? (window.addEventListener("popstate", O),
            o && window.addEventListener("hashchange", P)) : 0 === F && (window.removeEventListener("popstate", O),
            o && window.removeEventListener("hashchange", P))
        }
        var M = !1;
        var z = {
            length: n.length,
            action: "POP",
            location: N,
            createHref: L,
            push: function(e, t) {
                var r = h(e, t, T(), z.location);
                _.confirmTransitionTo(r, "PUSH", g, (function(e) {
                    if (e) {
                        var t = L(r)
                          , o = r.key
                          , a = r.state;
                        if (i)
                            if (n.pushState({
                                key: o,
                                state: a
                            }, null, t),
                            u)
                                window.location.href = t;
                            else {
                                var l = I.indexOf(z.location.key)
                                  , c = I.slice(0, l + 1);
                                c.push(r.key),
                                I = c,
                                C({
                                    action: "PUSH",
                                    location: r
                                })
                            }
                        else
                            window.location.href = t
                    }
                }
                ))
            },
            replace: function(e, t) {
                var r = h(e, t, T(), z.location);
                _.confirmTransitionTo(r, "REPLACE", g, (function(e) {
                    if (e) {
                        var t = L(r)
                          , o = r.key
                          , a = r.state;
                        if (i)
                            if (n.replaceState({
                                key: o,
                                state: a
                            }, null, t),
                            u)
                                window.location.replace(t);
                            else {
                                var l = I.indexOf(z.location.key);
                                -1 !== l && (I[l] = r.key),
                                C({
                                    action: "REPLACE",
                                    location: r
                                })
                            }
                        else
                            window.location.replace(t)
                    }
                }
                ))
            },
            go: D,
            goBack: function() {
                D(-1)
            },
            goForward: function() {
                D(1)
            },
            block: function(e) {
                void 0 === e && (e = !1);
                var t = _.setPrompt(e);
                return M || (j(1),
                M = !0),
                function() {
                    return M && (M = !1,
                    j(-1)),
                    t()
                }
            },
            listen: function(e) {
                var t = _.appendListener(e);
                return j(1),
                function() {
                    j(-1),
                    t()
                }
            }
        };
        return z
    }
    var x = {
        hashbang: {
            encodePath: function(e) {
                return "!" === e.charAt(0) ? e : "!/" + f(e)
            },
            decodePath: function(e) {
                return "!" === e.charAt(0) ? e.substr(1) : e
            }
        },
        noslash: {
            encodePath: f,
            decodePath: s
        },
        slash: {
            encodePath: s,
            decodePath: s
        }
    };
    function E(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.slice(0, t)
    }
    function S() {
        var e = window.location.href
          , t = e.indexOf("#");
        return -1 === t ? "" : e.substring(t + 1)
    }
    function T(e) {
        window.location.replace(E(window.location.href) + "#" + e)
    }
    function _(e) {
        void 0 === e && (e = {}),
        b || Object(c.a)(!1);
        var t = window.history
          , n = (window.navigator.userAgent.indexOf("Firefox"),
        e)
          , i = n.getUserConfirmation
          , o = void 0 === i ? y : i
          , a = n.hashType
          , l = void 0 === a ? "slash" : a
          , u = e.basename ? p(s(e.basename)) : ""
          , f = x[l]
          , g = f.encodePath
          , w = f.decodePath;
        function k() {
            var e = w(S());
            return u && (e = d(e, u)),
            h(e)
        }
        var _ = v();
        function C(e) {
            Object(r.a)(z, e),
            z.length = t.length,
            _.notifyListeners(z.location, z.action)
        }
        var O = !1
          , P = null;
        function R() {
            var e, t, n = S(), r = g(n);
            if (n !== r)
                T(r);
            else {
                var i = k()
                  , a = z.location;
                if (!O && (t = i,
                (e = a).pathname === t.pathname && e.search === t.search && e.hash === t.hash))
                    return;
                if (P === m(i))
                    return;
                P = null,
                function(e) {
                    if (O)
                        O = !1,
                        C();
                    else {
                        _.confirmTransitionTo(e, "POP", o, (function(t) {
                            t ? C({
                                action: "POP",
                                location: e
                            }) : function(e) {
                                var t = z.location
                                  , n = L.lastIndexOf(m(t));
                                -1 === n && (n = 0);
                                var r = L.lastIndexOf(m(e));
                                -1 === r && (r = 0);
                                var i = n - r;
                                i && (O = !0,
                                D(i))
                            }(e)
                        }
                        ))
                    }
                }(i)
            }
        }
        var A = S()
          , N = g(A);
        A !== N && T(N);
        var I = k()
          , L = [m(I)];
        function D(e) {
            t.go(e)
        }
        var F = 0;
        function j(e) {
            1 === (F += e) && 1 === e ? window.addEventListener("hashchange", R) : 0 === F && window.removeEventListener("hashchange", R)
        }
        var M = !1;
        var z = {
            length: t.length,
            action: "POP",
            location: I,
            createHref: function(e) {
                var t = document.querySelector("base")
                  , n = "";
                return t && t.getAttribute("href") && (n = E(window.location.href)),
                n + "#" + g(u + m(e))
            },
            push: function(e, t) {
                var n = h(e, void 0, void 0, z.location);
                _.confirmTransitionTo(n, "PUSH", o, (function(e) {
                    if (e) {
                        var t = m(n)
                          , r = g(u + t);
                        if (S() !== r) {
                            P = t,
                            function(e) {
                                window.location.hash = e
                            }(r);
                            var i = L.lastIndexOf(m(z.location))
                              , o = L.slice(0, i + 1);
                            o.push(t),
                            L = o,
                            C({
                                action: "PUSH",
                                location: n
                            })
                        } else
                            C()
                    }
                }
                ))
            },
            replace: function(e, t) {
                var n = h(e, void 0, void 0, z.location);
                _.confirmTransitionTo(n, "REPLACE", o, (function(e) {
                    if (e) {
                        var t = m(n)
                          , r = g(u + t);
                        S() !== r && (P = t,
                        T(r));
                        var i = L.indexOf(m(z.location));
                        -1 !== i && (L[i] = t),
                        C({
                            action: "REPLACE",
                            location: n
                        })
                    }
                }
                ))
            },
            go: D,
            goBack: function() {
                D(-1)
            },
            goForward: function() {
                D(1)
            },
            block: function(e) {
                void 0 === e && (e = !1);
                var t = _.setPrompt(e);
                return M || (j(1),
                M = !0),
                function() {
                    return M && (M = !1,
                    j(-1)),
                    t()
                }
            },
            listen: function(e) {
                var t = _.appendListener(e);
                return j(1),
                function() {
                    j(-1),
                    t()
                }
            }
        };
        return z
    }
    function C(e, t, n) {
        return Math.min(Math.max(e, t), n)
    }
    function O(e) {
        void 0 === e && (e = {});
        var t = e
          , n = t.getUserConfirmation
          , i = t.initialEntries
          , o = void 0 === i ? ["/"] : i
          , a = t.initialIndex
          , l = void 0 === a ? 0 : a
          , u = t.keyLength
          , c = void 0 === u ? 6 : u
          , s = v();
        function f(e) {
            Object(r.a)(w, e),
            w.length = w.entries.length,
            s.notifyListeners(w.location, w.action)
        }
        function d() {
            return Math.random().toString(36).substr(2, c)
        }
        var p = C(l, 0, o.length - 1)
          , g = o.map((function(e) {
            return h(e, void 0, "string" == typeof e ? d() : e.key || d())
        }
        ))
          , b = m;
        function y(e) {
            var t = C(w.index + e, 0, w.entries.length - 1)
              , r = w.entries[t];
            s.confirmTransitionTo(r, "POP", n, (function(e) {
                e ? f({
                    action: "POP",
                    location: r,
                    index: t
                }) : f()
            }
            ))
        }
        var w = {
            length: g.length,
            action: "POP",
            location: g[p],
            index: p,
            entries: g,
            createHref: b,
            push: function(e, t) {
                var r = h(e, t, d(), w.location);
                s.confirmTransitionTo(r, "PUSH", n, (function(e) {
                    if (e) {
                        var t = w.index + 1
                          , n = w.entries.slice(0);
                        n.length > t ? n.splice(t, n.length - t, r) : n.push(r),
                        f({
                            action: "PUSH",
                            location: r,
                            index: t,
                            entries: n
                        })
                    }
                }
                ))
            },
            replace: function(e, t) {
                var r = h(e, t, d(), w.location);
                s.confirmTransitionTo(r, "REPLACE", n, (function(e) {
                    e && (w.entries[w.index] = r,
                    f({
                        action: "REPLACE",
                        location: r
                    }))
                }
                ))
            },
            go: y,
            goBack: function() {
                y(-1)
            },
            goForward: function() {
                y(1)
            },
            canGo: function(e) {
                var t = w.index + e;
                return t >= 0 && t < w.entries.length
            },
            block: function(e) {
                return void 0 === e && (e = !1),
                s.setPrompt(e)
            },
            listen: function(e) {
                return s.appendListener(e)
            }
        };
        return w
    }
}
, function(e, t, n) {
    var r = n(11);
    e.exports = function(e) {
        if (!r(e))
            throw TypeError(e + " is not an object!");
        return e
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (null == e)
            return {};
        var n, r, i = {}, o = Object.keys(e);
        for (r = 0; r < o.length; r++)
            n = o[r],
            t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
    }
    n.d(t, "a", (function() {
        return r
    }
    ))
}
, function(e, t, n) {
    var r = n(28)
      , i = n(57);
    e.exports = n(13) ? function(e, t, n) {
        return r.f(e, t, i(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t) {
    var n = e.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = n)
}
, function(e, t, n) {
    e.exports = !n(21)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, n) {
    var r = n(5)
      , i = n(10)
      , o = n(29)
      , a = n(41)("src")
      , l = n(90)
      , u = ("" + l).split("toString");
    n(12).inspectSource = function(e) {
        return l.call(e)
    }
    ,
    (e.exports = function(e, t, n, l) {
        var c = "function" == typeof n;
        c && (o(n, "name") || i(n, "name", t)),
        e[t] !== n && (c && (o(n, a) || i(n, a, e[t] ? "" + e[t] : u.join(String(t)))),
        e === r ? e[t] = n : l ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t],
        i(e, t, n)))
    }
    )(Function.prototype, "toString", (function() {
        return "function" == typeof this && this[a] || l.call(this)
    }
    ))
}
, function(e, t, n) {
    e.exports = n(99)()
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return l
    }
    )),
    n.d(t, "b", (function() {
        return u
    }
    ));
    var r = n(3)
      , i = n(1)
      , o = n(0)
      , a = n.n(o);
    function l(e, t, n) {
        return void 0 === n && (n = []),
        e.some((function(e) {
            var i = e.path ? Object(r.e)(t, e) : n.length ? n[n.length - 1].match : r.b.computeRootMatch(t);
            return i && (n.push({
                route: e,
                match: i
            }),
            e.routes && l(e.routes, t, n)),
            i
        }
        )),
        n
    }
    function u(e, t, n) {
        return void 0 === t && (t = {}),
        void 0 === n && (n = {}),
        e ? a.a.createElement(r.c, n, e.map((function(e, n) {
            return a.a.createElement(r.a, {
                key: e.key || n,
                path: e.path,
                exact: e.exact,
                strict: e.strict,
                render: function(n) {
                    return e.render ? e.render(Object(i.a)({}, n, {}, t, {
                        route: e
                    })) : a.a.createElement(e.component, Object(i.a)({}, n, t, {
                        route: e
                    }))
                }
            })
        }
        ))) : null
    }
}
, function(e, t, n) {
    var r = n(5)
      , i = n(12)
      , o = n(10)
      , a = n(14)
      , l = n(25)
      , u = function(e, t, n) {
        var c, s, f, d, p = e & u.F, m = e & u.G, h = e & u.S, g = e & u.P, v = e & u.B, b = m ? r : h ? r[t] || (r[t] = {}) : (r[t] || {}).prototype, y = m ? i : i[t] || (i[t] = {}), w = y.prototype || (y.prototype = {});
        for (c in m && (n = t),
        n)
            f = ((s = !p && b && void 0 !== b[c]) ? b : n)[c],
            d = v && s ? l(f, r) : g && "function" == typeof f ? l(Function.call, f) : f,
            b && a(b, c, f, e & u.U),
            y[c] != f && o(y, c, d),
            g && w[c] != f && (w[c] = f)
    };
    r.core = i,
    u.F = 1,
    u.G = 2,
    u.S = 4,
    u.P = 8,
    u.B = 16,
    u.W = 32,
    u.U = 64,
    u.R = 128,
    e.exports = u
}
, function(e, t, n) {
    "use strict";
    var r = n(75)
      , i = n(91)
      , o = n(22)
      , a = n(30);
    e.exports = n(58)(Array, "Array", (function(e, t) {
        this._t = a(e),
        this._i = 0,
        this._k = t
    }
    ), (function() {
        var e = this._t
          , t = this._k
          , n = this._i++;
        return !e || n >= e.length ? (this._t = void 0,
        i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }
    ), "values"),
    o.Arguments = o.Array,
    r("keys"),
    r("values"),
    r("entries")
}
, function(e, t, n) {
    "use strict";
    var r = n(27)
      , i = {};
    i[n(2)("toStringTag")] = "z",
    i + "" != "[object z]" && n(14)(Object.prototype, "toString", (function() {
        return "[object " + r(this) + "]"
    }
    ), !0)
}
, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (t) {
            return !0
        }
    }
}
, function(e, t) {
    e.exports = {}
}
, function(e, t) {
    e.exports = function(e) {
        if (null == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
}
, function(e, t, n) {
    for (var r = n(18), i = n(31), o = n(14), a = n(5), l = n(10), u = n(22), c = n(2), s = c("iterator"), f = c("toStringTag"), d = u.Array, p = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, m = i(p), h = 0; h < m.length; h++) {
        var g, v = m[h], b = p[v], y = a[v], w = y && y.prototype;
        if (w && (w[s] || l(w, s, d),
        w[f] || l(w, f, v),
        u[v] = d,
        b))
            for (g in r)
                w[g] || o(w, g, r[g], !0)
    }
}
, function(e, t, n) {
    var r = n(26);
    e.exports = function(e, t, n) {
        if (r(e),
        void 0 === t)
            return e;
        switch (n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, i) {
                return e.call(t, n, r, i)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
}
, function(e, t, n) {
    var r = n(20)
      , i = n(2)("toStringTag")
      , o = "Arguments" == r(function() {
        return arguments
    }());
    e.exports = function(e) {
        var t, n, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (n) {}
        }(t = Object(e), i)) ? n : o ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
}
, function(e, t, n) {
    var r = n(8)
      , i = n(88)
      , o = n(89)
      , a = Object.defineProperty;
    t.f = n(13) ? Object.defineProperty : function(e, t, n) {
        if (r(e),
        t = o(t, !0),
        r(n),
        i)
            try {
                return a(e, t, n)
            } catch (l) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}
, function(e, t, n) {
    var r = n(77)
      , i = n(23);
    e.exports = function(e) {
        return r(i(e))
    }
}
, function(e, t, n) {
    var r = n(95)
      , i = n(59);
    e.exports = Object.keys || function(e) {
        return r(e, i)
    }
}
, function(e) {
    e.exports = JSON.parse('{"/":{"component":"c4f5d8e4"},"/:route":{"component":"1be78505","docsMetadata":"ec1ed54d"},"/advanced/advanced-tutorial":{"component":"17896441","content":"8508c49a"},"/advanced/async-actions":{"component":"17896441","content":"191f58d6"},"/advanced/async-flow":{"component":"17896441","content":"a20760ff"},"/advanced/example-reddit-api":{"component":"17896441","content":"5e78bcaf"},"/advanced/middleware":{"component":"17896441","content":"33f27551"},"/advanced/next-steps":{"component":"17896441","content":"2450ddda"},"/advanced/usage-with-react-router":{"component":"17896441","content":"0424279f"},"/api/api-reference":{"component":"17896441","content":"41bfb974"},"/api/applymiddleware":{"component":"17896441","content":"90b8c979"},"/api/bindactioncreators":{"component":"17896441","content":"7cb726bf"},"/api/combinereducers":{"component":"17896441","content":"a5a415a2"},"/api/compose":{"component":"17896441","content":"24ad1718"},"/api/createstore":{"component":"17896441","content":"5a142dc0"},"/api/store":{"component":"17896441","content":"acff2704"},"/basics/actions":{"component":"17896441","content":"6b4fb4f8"},"/basics/basic-tutorial":{"component":"17896441","content":"ec516920"},"/basics/data-flow":{"component":"17896441","content":"f75e8fd4"},"/basics/example":{"component":"17896441","content":"5f85532a"},"/basics/reducers":{"component":"17896441","content":"0ce1fe67"},"/basics/store":{"component":"17896441","content":"a0806a44"},"/basics/usage-with-react":{"component":"17896441","content":"3b067476"},"/faq":{"component":"17896441","content":"b67e346f"},"/faq/actions":{"component":"17896441","content":"f1e47877"},"/faq/code-structure":{"component":"17896441","content":"fab39a19"},"/faq/design-decisions":{"component":"17896441","content":"23b8105f"},"/faq/general":{"component":"17896441","content":"18332a75"},"/faq/immutable-data":{"component":"17896441","content":"0604ec41"},"/faq/miscellaneous":{"component":"17896441","content":"0d70b181"},"/faq/organizing-state":{"component":"17896441","content":"6f3ed655"},"/faq/performance":{"component":"17896441","content":"73514cec"},"/faq/react-redux":{"component":"17896441","content":"a7ea628c"},"/faq/reducers":{"component":"17896441","content":"97a57d04"},"/faq/store-setup":{"component":"17896441","content":"85a2cf2c"},"/glossary":{"component":"17896441","content":"991d1f05"},"/introduction/README":{"component":"17896441","content":"cd1a63fa"},"/introduction/core-concepts":{"component":"17896441","content":"53675c58"},"/introduction/ecosystem":{"component":"17896441","content":"8bbeb6cd"},"/introduction/examples":{"component":"17896441","content":"e63ccefe"},"/introduction/getting-started":{"component":"17896441","content":"5d5abd3d"},"/introduction/installation":{"component":"17896441","content":"9cedbede"},"/introduction/learning-resources":{"component":"17896441","content":"4a989b5d"},"/introduction/motivation":{"component":"17896441","content":"1d3485ba"},"/introduction/prior-art":{"component":"17896441","content":"f1c6b27a"},"/introduction/three-principles":{"component":"17896441","content":"2cc353b8"},"/recipes/code-splitting":{"component":"17896441","content":"7d94cdb2"},"/recipes/computing-derived-data":{"component":"17896441","content":"fcc2861d"},"/recipes/configuring-your-store":{"component":"17896441","content":"4e97a8e5"},"/recipes/implementing-undo-history":{"component":"17896441","content":"8e532af9"},"/recipes/isolating-redux-sub-apps":{"component":"17896441","content":"5a81eb9b"},"/recipes/migrating-to-redux":{"component":"17896441","content":"8e4e2783"},"/recipes/recipe-index":{"component":"17896441","content":"6fb1842e"},"/recipes/reducing-boilerplate":{"component":"17896441","content":"56989e19"},"/recipes/server-rendering":{"component":"17896441","content":"6d12da77"},"/recipes/structuring-reducers/basic-reducer-structure":{"component":"17896441","content":"9b9fc3a2"},"/recipes/structuring-reducers/beyond-combinereducers":{"component":"17896441","content":"540d324d"},"/recipes/structuring-reducers/immutable-update-patterns":{"component":"17896441","content":"f65c68cc"},"/recipes/structuring-reducers/initializing-state":{"component":"17896441","content":"37697993"},"/recipes/structuring-reducers/normalizing-state-shape":{"component":"17896441","content":"a7578db5"},"/recipes/structuring-reducers/prerequisite-concepts":{"component":"17896441","content":"8351d53d"},"/recipes/structuring-reducers/refactoring-reducer-example":{"component":"17896441","content":"db3abe63"},"/recipes/structuring-reducers/reusing-reducer-logic":{"component":"17896441","content":"a2902d4d"},"/recipes/structuring-reducers/splitting-reducer-logic":{"component":"17896441","content":"28a0238b"},"/recipes/structuring-reducers/structuring-reducers":{"component":"17896441","content":"f1ad62c2"},"/recipes/structuring-reducers/updating-normalized-data":{"component":"17896441","content":"19c44ca4"},"/recipes/structuring-reducers/using-combinereducers":{"component":"17896441","content":"740c6f4e"},"/recipes/usage-with-typescript":{"component":"17896441","content":"b1380c1e"},"/recipes/using-immutablejs-with-redux":{"component":"17896441","content":"faadf69e"},"/recipes/using-object-spread-operator":{"component":"17896441","content":"94f24d71"},"/recipes/writing-tests":{"component":"17896441","content":"bfd7c810"},"/redux-toolkit/overview":{"component":"17896441","content":"a885273f"},"/style-guide/style-guide":{"component":"17896441","content":"8281e42f"},"/troubleshooting":{"component":"17896441","content":"ba92a0db"}}')
}
, function(e, t, n) {
    "use strict";
    t.a = {
        plugins: [],
        themes: [],
        customFields: {},
        themeConfig: {
            disableDarkMode: !1,
            prism: {
                theme: {
                    plain: {
                        color: "#f8f8f2",
                        backgroundColor: "#272822"
                    },
                    styles: [{
                        types: ["comment", "prolog", "doctype", "cdata"],
                        style: {
                            color: "#778090"
                        }
                    }, {
                        types: ["punctuation"],
                        style: {
                            color: "#F8F8F2"
                        }
                    }, {
                        types: ["property", "tag", "constant", "symbol", "deleted"],
                        style: {
                            color: "#F92672"
                        }
                    }, {
                        types: ["boolean", "number"],
                        style: {
                            color: "#AE81FF"
                        }
                    }, {
                        types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
                        style: {
                            color: "#a6e22e"
                        }
                    }, {
                        types: ["operator", "entity", "url", "variable"],
                        style: {
                            color: "#F8F8F2"
                        }
                    }, {
                        types: ["atrule", "attr-value", "function"],
                        style: {
                            color: "#E6D874"
                        }
                    }, {
                        types: ["keyword"],
                        style: {
                            color: "#F92672"
                        }
                    }, {
                        types: ["regex", "important"],
                        style: {
                            color: "#FD971F"
                        }
                    }]
                }
            },
            navbar: {
                title: "Redux",
                image: "img/redux-logo-landscape.png",
                logo: {
                    alt: "Redux Logo",
                    src: "img/redux.svg"
                },
                links: [{
                    label: "Getting Started",
                    to: "introduction/getting-started",
                    position: "right"
                }, {
                    label: "API",
                    to: "api/api-reference",
                    position: "right"
                }, {
                    label: "FAQ",
                    to: "faq",
                    position: "right"
                }, {
                    label: "GitHub",
                    href: "https://www.github.com/reduxjs/redux",
                    position: "right"
                }, {
                    label: "Need help?",
                    to: "introduction/getting-started#help-and-discussion",
                    position: "right"
                }]
            },
            footer: {
                style: "light",
                links: [{
                    title: "Docs",
                    items: [{
                        label: "Getting Started",
                        to: "introduction/getting-started"
                    }, {
                        label: "FAQ",
                        to: "faq"
                    }, {
                        label: "Tutorial",
                        to: "basics/basic-tutorial"
                    }, {
                        label: "API Reference",
                        to: "api/api-reference"
                    }]
                }, {
                    title: "Community",
                    items: [{
                        label: "Stack Overflow",
                        href: "http://stackoverflow.com/questions/tagged/redux"
                    }, {
                        label: "Feedback",
                        to: "introduction/getting-started#help-and-discussion"
                    }]
                }, {
                    title: "More",
                    items: [{
                        label: "GitHub",
                        href: "https://github.com/reduxjs/redux"
                    }, {
                        html: '\n                <a href="https://www.netlify.com">\n                  <img\n                    src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"\n                    alt="Deploys by Netlify"\n                  />\n                </a>\n              '
                    }]
                }],
                logo: {
                    alt: "Redux Logo",
                    src: "img/redux.svg",
                    href: "https://redux.js.org/"
                },
                copyright: "Copyright \xa9 2015\u20132020 Dan Abramov and the Redux documentation authors."
            },
            algolia: {
                apiKey: "518c6e3c629811d8daa1d21dc8bcfa37",
                indexName: "redux",
                algoliaOptions: {}
            },
            googleAnalytics: {
                trackingID: "UA-130598673-1"
            }
        },
        title: "Redux",
        tagline: "A Predictable State Container for JS Apps",
        url: "https://redux.js.org",
        baseUrl: "/",
        favicon: "img/favicon/favicon.ico",
        organizationName: "reduxjs",
        projectName: "redux",
        presets: [["@docusaurus/preset-classic", {
            docs: {
                path: "../docs",
                routeBasePath: "/",
                sidebarPath: "/opt/build/repo/website/sidebars.js"
            },
            theme: {
                customCss: "/opt/build/repo/website/src/css/custom.css"
            }
        }]]
    }
}
, function(e, t, n) {
    var r, i;
    void 0 === (i = "function" == typeof (r = function() {
        var e, t, n = {
            version: "0.2.0"
        }, r = n.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        function i(e, t, n) {
            return e < t ? t : e > n ? n : e
        }
        function o(e) {
            return 100 * (-1 + e)
        }
        n.configure = function(e) {
            var t, n;
            for (t in e)
                void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
            return this
        }
        ,
        n.status = null,
        n.set = function(e) {
            var t = n.isStarted();
            e = i(e, r.minimum, 1),
            n.status = 1 === e ? null : e;
            var u = n.render(!t)
              , c = u.querySelector(r.barSelector)
              , s = r.speed
              , f = r.easing;
            return u.offsetWidth,
            a((function(t) {
                "" === r.positionUsing && (r.positionUsing = n.getPositioningCSS()),
                l(c, function(e, t, n) {
                    var i;
                    return (i = "translate3d" === r.positionUsing ? {
                        transform: "translate3d(" + o(e) + "%,0,0)"
                    } : "translate" === r.positionUsing ? {
                        transform: "translate(" + o(e) + "%,0)"
                    } : {
                        "margin-left": o(e) + "%"
                    }).transition = "all " + t + "ms " + n,
                    i
                }(e, s, f)),
                1 === e ? (l(u, {
                    transition: "none",
                    opacity: 1
                }),
                u.offsetWidth,
                setTimeout((function() {
                    l(u, {
                        transition: "all " + s + "ms linear",
                        opacity: 0
                    }),
                    setTimeout((function() {
                        n.remove(),
                        t()
                    }
                    ), s)
                }
                ), s)) : setTimeout(t, s)
            }
            )),
            this
        }
        ,
        n.isStarted = function() {
            return "number" == typeof n.status
        }
        ,
        n.start = function() {
            n.status || n.set(0);
            var e = function() {
                setTimeout((function() {
                    n.status && (n.trickle(),
                    e())
                }
                ), r.trickleSpeed)
            };
            return r.trickle && e(),
            this
        }
        ,
        n.done = function(e) {
            return e || n.status ? n.inc(.3 + .5 * Math.random()).set(1) : this
        }
        ,
        n.inc = function(e) {
            var t = n.status;
            return t ? ("number" != typeof e && (e = (1 - t) * i(Math.random() * t, .1, .95)),
            t = i(t + e, 0, .994),
            n.set(t)) : n.start()
        }
        ,
        n.trickle = function() {
            return n.inc(Math.random() * r.trickleRate)
        }
        ,
        e = 0,
        t = 0,
        n.promise = function(r) {
            return r && "resolved" !== r.state() ? (0 === t && n.start(),
            e++,
            t++,
            r.always((function() {
                0 == --t ? (e = 0,
                n.done()) : n.set((e - t) / e)
            }
            )),
            this) : this
        }
        ,
        n.render = function(e) {
            if (n.isRendered())
                return document.getElementById("nprogress");
            c(document.documentElement, "nprogress-busy");
            var t = document.createElement("div");
            t.id = "nprogress",
            t.innerHTML = r.template;
            var i, a = t.querySelector(r.barSelector), u = e ? "-100" : o(n.status || 0), s = document.querySelector(r.parent);
            return l(a, {
                transition: "all 0 linear",
                transform: "translate3d(" + u + "%,0,0)"
            }),
            r.showSpinner || (i = t.querySelector(r.spinnerSelector)) && d(i),
            s != document.body && c(s, "nprogress-custom-parent"),
            s.appendChild(t),
            t
        }
        ,
        n.remove = function() {
            s(document.documentElement, "nprogress-busy"),
            s(document.querySelector(r.parent), "nprogress-custom-parent");
            var e = document.getElementById("nprogress");
            e && d(e)
        }
        ,
        n.isRendered = function() {
            return !!document.getElementById("nprogress")
        }
        ,
        n.getPositioningCSS = function() {
            var e = document.body.style
              , t = "WebkitTransform"in e ? "Webkit" : "MozTransform"in e ? "Moz" : "msTransform"in e ? "ms" : "OTransform"in e ? "O" : "";
            return t + "Perspective"in e ? "translate3d" : t + "Transform"in e ? "translate" : "margin"
        }
        ;
        var a = function() {
            var e = [];
            function t() {
                var n = e.shift();
                n && n(t)
            }
            return function(n) {
                e.push(n),
                1 == e.length && t()
            }
        }()
          , l = function() {
            var e = ["Webkit", "O", "Moz", "ms"]
              , t = {};
            function n(n) {
                return n = n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (function(e, t) {
                    return t.toUpperCase()
                }
                )),
                t[n] || (t[n] = function(t) {
                    var n = document.body.style;
                    if (t in n)
                        return t;
                    for (var r, i = e.length, o = t.charAt(0).toUpperCase() + t.slice(1); i--; )
                        if ((r = e[i] + o)in n)
                            return r;
                    return t
                }(n))
            }
            function r(e, t, r) {
                t = n(t),
                e.style[t] = r
            }
            return function(e, t) {
                var n, i, o = arguments;
                if (2 == o.length)
                    for (n in t)
                        void 0 !== (i = t[n]) && t.hasOwnProperty(n) && r(e, n, i);
                else
                    r(e, o[1], o[2])
            }
        }();
        function u(e, t) {
            return ("string" == typeof e ? e : f(e)).indexOf(" " + t + " ") >= 0
        }
        function c(e, t) {
            var n = f(e)
              , r = n + t;
            u(n, t) || (e.className = r.substring(1))
        }
        function s(e, t) {
            var n, r = f(e);
            u(e, t) && (n = r.replace(" " + t + " ", " "),
            e.className = n.substring(1, n.length - 1))
        }
        function f(e) {
            return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
        }
        function d(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }
        return n
    }
    ) ? r.call(t, n, t, e) : r) || (e.exports = i)
}
, function(e, t, n) {
    var r = n(37)
      , i = Math.min;
    e.exports = function(e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return f
    }
    )),
    n.d(t, "b", (function() {
        return w
    }
    ));
    var r = n(3);
    n.d(t, "c", (function() {
        return r.e
    }
    )),
    n.d(t, "d", (function() {
        return r.f
    }
    )),
    n.d(t, "e", (function() {
        return r.g
    }
    ));
    var i = n(6)
      , o = n(0)
      , a = n.n(o)
      , l = n(7)
      , u = (n(15),
    n(1))
      , c = n(9)
      , s = n(4)
      , f = function(e) {
        function t() {
            for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                r[i] = arguments[i];
            return (t = e.call.apply(e, [this].concat(r)) || this).history = Object(l.a)(t.props),
            t
        }
        return Object(i.a)(t, e),
        t.prototype.render = function() {
            return a.a.createElement(r.b, {
                history: this.history,
                children: this.props.children
            })
        }
        ,
        t
    }(a.a.Component);
    a.a.Component;
    var d = function(e, t) {
        return "function" == typeof e ? e(t) : e
    }
      , p = function(e, t) {
        return "string" == typeof e ? Object(l.c)(e, null, null, t) : e
    }
      , m = function(e) {
        return e
    }
      , h = a.a.forwardRef;
    void 0 === h && (h = m);
    var g = h((function(e, t) {
        var n = e.innerRef
          , r = e.navigate
          , i = e.onClick
          , o = Object(c.a)(e, ["innerRef", "navigate", "onClick"])
          , l = o.target
          , s = Object(u.a)({}, o, {
            onClick: function(e) {
                try {
                    i && i(e)
                } catch (t) {
                    throw e.preventDefault(),
                    t
                }
                e.defaultPrevented || 0 !== e.button || l && "_self" !== l || function(e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                }(e) || (e.preventDefault(),
                r())
            }
        });
        return s.ref = m !== h && t || n,
        a.a.createElement("a", s)
    }
    ));
    var v = h((function(e, t) {
        var n = e.component
          , i = void 0 === n ? g : n
          , o = e.replace
          , l = e.to
          , f = e.innerRef
          , v = Object(c.a)(e, ["component", "replace", "to", "innerRef"]);
        return a.a.createElement(r.d.Consumer, null, (function(e) {
            e || Object(s.a)(!1);
            var n = e.history
              , r = p(d(l, e.location), e.location)
              , c = r ? n.createHref(r) : ""
              , g = Object(u.a)({}, v, {
                href: c,
                navigate: function() {
                    var t = d(l, e.location);
                    (o ? n.replace : n.push)(t)
                }
            });
            return m !== h ? g.ref = t || f : g.innerRef = f,
            a.a.createElement(i, g)
        }
        ))
    }
    ))
      , b = function(e) {
        return e
    }
      , y = a.a.forwardRef;
    void 0 === y && (y = b);
    var w = y((function(e, t) {
        var n = e["aria-current"]
          , i = void 0 === n ? "page" : n
          , o = e.activeClassName
          , l = void 0 === o ? "active" : o
          , f = e.activeStyle
          , m = e.className
          , h = e.exact
          , g = e.isActive
          , w = e.location
          , k = e.strict
          , x = e.style
          , E = e.to
          , S = e.innerRef
          , T = Object(c.a)(e, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to", "innerRef"]);
        return a.a.createElement(r.d.Consumer, null, (function(e) {
            e || Object(s.a)(!1);
            var n = w || e.location
              , o = p(d(E, n), n)
              , c = o.pathname
              , _ = c && c.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
              , C = _ ? Object(r.e)(n.pathname, {
                path: _,
                exact: h,
                strict: k
            }) : null
              , O = !!(g ? g(C, n) : C)
              , P = O ? function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return t.filter((function(e) {
                    return e
                }
                )).join(" ")
            }(m, l) : m
              , R = O ? Object(u.a)({}, x, {}, f) : x
              , A = Object(u.a)({
                "aria-current": O && i || null,
                className: P,
                style: R,
                to: o
            }, T);
            return b !== y ? A.ref = t || S : A.innerRef = S,
            a.a.createElement(v, A)
        }
        ))
    }
    ))
}
, function(e, t) {
    var n = Math.ceil
      , r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}
, , function(e, t, n) {
    var r = n(12)
      , i = n(5)
      , o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: r.version,
        mode: n(40) ? "pure" : "global",
        copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
    })
}
, function(e, t) {
    e.exports = !1
}
, function(e, t) {
    var n = 0
      , r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}
, function(e, t, n) {
    "use strict";
    var r, i, o = n(86), a = RegExp.prototype.exec, l = String.prototype.replace, u = a, c = (r = /a/,
    i = /b*/g,
    a.call(r, "a"),
    a.call(i, "a"),
    0 !== r.lastIndex || 0 !== i.lastIndex), s = void 0 !== /()??/.exec("")[1];
    (c || s) && (u = function(e) {
        var t, n, r, i, u = this;
        return s && (n = new RegExp("^" + u.source + "$(?!\\s)",o.call(u))),
        c && (t = u.lastIndex),
        r = a.call(u, e),
        c && r && (u.lastIndex = u.global ? r.index + r[0].length : t),
        s && r && r.length > 1 && l.call(r[0], n, (function() {
            for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0)
        }
        )),
        r
    }
    ),
    e.exports = u
}
, function(e, t, n) {
    var r = n(11)
      , i = n(5).document
      , o = r(i) && r(i.createElement);
    e.exports = function(e) {
        return o ? i.createElement(e) : {}
    }
}
, function(e, t, n) {
    var r = n(39)("keys")
      , i = n(41);
    e.exports = function(e) {
        return r[e] || (r[e] = i(e))
    }
}
, function(e, t, n) {
    var r = n(28).f
      , i = n(29)
      , o = n(2)("toStringTag");
    e.exports = function(e, t, n) {
        e && !i(e = n ? e : e.prototype, o) && r(e, o, {
            configurable: !0,
            value: t
        })
    }
}
, function(e, t, n) {
    var r = {
        "./": 106
    };
    function i(e) {
        var t = o(e);
        return n(t)
    }
    function o(e) {
        if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND",
            t
        }
        return r[e]
    }
    i.keys = function() {
        return Object.keys(r)
    }
    ,
    i.resolve = o,
    e.exports = i,
    i.id = 46
}
, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var l = n(0)
      , u = n(15)
      , c = []
      , s = [];
    function f(e) {
        var t = e()
          , n = {
            loading: !0,
            loaded: null,
            error: null
        };
        return n.promise = t.then((function(e) {
            return n.loading = !1,
            n.loaded = e,
            e
        }
        )).catch((function(e) {
            throw n.loading = !1,
            n.error = e,
            e
        }
        )),
        n
    }
    function d(e) {
        var t = {
            loading: !1,
            loaded: {},
            error: null
        }
          , n = [];
        try {
            Object.keys(e).forEach((function(r) {
                var i = f(e[r]);
                i.loading ? t.loading = !0 : (t.loaded[r] = i.loaded,
                t.error = i.error),
                n.push(i.promise),
                i.promise.then((function(e) {
                    t.loaded[r] = e
                }
                )).catch((function(e) {
                    t.error = e
                }
                ))
            }
            ))
        } catch (r) {
            t.error = r
        }
        return t.promise = Promise.all(n).then((function(e) {
            return t.loading = !1,
            e
        }
        )).catch((function(e) {
            throw t.loading = !1,
            e
        }
        )),
        t
    }
    function p(e, t) {
        return l.createElement((n = e) && n.__esModule ? n.default : n, t);
        var n
    }
    function m(e, t) {
        var f, d;
        if (!t.loading)
            throw new Error("react-loadable requires a `loading` component");
        var m = Object.assign({
            loader: null,
            loading: null,
            delay: 200,
            timeout: null,
            render: p,
            webpack: null,
            modules: null
        }, t)
          , h = null;
        function g() {
            return h || (h = e(m.loader)),
            h.promise
        }
        return c.push(g),
        "function" == typeof m.webpack && s.push((function() {
            if (e = m.webpack,
            "object" === r(n.m) && e().every((function(e) {
                return void 0 !== e && void 0 !== n.m[e]
            }
            )))
                return g();
            var e
        }
        )),
        d = f = function(t) {
            function n(r) {
                i(this, n);
                var a = o(this, t.call(this, r));
                return a.retry = function() {
                    a.setState({
                        error: null,
                        loading: !0,
                        timedOut: !1
                    }),
                    h = e(m.loader),
                    a._loadModule()
                }
                ,
                g(),
                a.state = {
                    error: h.error,
                    pastDelay: !1,
                    timedOut: !1,
                    loading: h.loading,
                    loaded: h.loaded
                },
                a
            }
            return a(n, t),
            n.preload = function() {
                return g()
            }
            ,
            n.prototype.componentWillMount = function() {
                this._mounted = !0,
                this._loadModule()
            }
            ,
            n.prototype._loadModule = function() {
                var e = this;
                if (this.context.loadable && Array.isArray(m.modules) && m.modules.forEach((function(t) {
                    e.context.loadable.report(t)
                }
                )),
                h.loading) {
                    "number" == typeof m.delay && (0 === m.delay ? this.setState({
                        pastDelay: !0
                    }) : this._delay = setTimeout((function() {
                        e.setState({
                            pastDelay: !0
                        })
                    }
                    ), m.delay)),
                    "number" == typeof m.timeout && (this._timeout = setTimeout((function() {
                        e.setState({
                            timedOut: !0
                        })
                    }
                    ), m.timeout));
                    var t = function() {
                        e._mounted && (e.setState({
                            error: h.error,
                            loaded: h.loaded,
                            loading: h.loading
                        }),
                        e._clearTimeouts())
                    };
                    h.promise.then((function() {
                        t()
                    }
                    )).catch((function(e) {
                        t()
                    }
                    ))
                }
            }
            ,
            n.prototype.componentWillUnmount = function() {
                this._mounted = !1,
                this._clearTimeouts()
            }
            ,
            n.prototype._clearTimeouts = function() {
                clearTimeout(this._delay),
                clearTimeout(this._timeout)
            }
            ,
            n.prototype.render = function() {
                return this.state.loading || this.state.error ? l.createElement(m.loading, {
                    isLoading: this.state.loading,
                    pastDelay: this.state.pastDelay,
                    timedOut: this.state.timedOut,
                    error: this.state.error,
                    retry: this.retry
                }) : this.state.loaded ? m.render(this.state.loaded, this.props) : null
            }
            ,
            n
        }(l.Component),
        f.contextTypes = {
            loadable: u.shape({
                report: u.func.isRequired
            })
        },
        d
    }
    function h(e) {
        return m(f, e)
    }
    h.Map = function(e) {
        if ("function" != typeof e.render)
            throw new Error("LoadableMap requires a `render(loaded, props)` function");
        return m(d, e)
    }
    ;
    var g = function(e) {
        function t() {
            return i(this, t),
            o(this, e.apply(this, arguments))
        }
        return a(t, e),
        t.prototype.getChildContext = function() {
            return {
                loadable: {
                    report: this.props.report
                }
            }
        }
        ,
        t.prototype.render = function() {
            return l.Children.only(this.props.children)
        }
        ,
        t
    }(l.Component);
    function v(e) {
        for (var t = []; e.length; ) {
            var n = e.pop();
            t.push(n())
        }
        return Promise.all(t).then((function() {
            if (e.length)
                return v(e)
        }
        ))
    }
    g.propTypes = {
        report: u.func.isRequired
    },
    g.childContextTypes = {
        loadable: u.shape({
            report: u.func.isRequired
        }).isRequired
    },
    h.Capture = g,
    h.preloadAll = function() {
        return new Promise((function(e, t) {
            v(c).then(e, t)
        }
        ))
    }
    ,
    h.preloadReady = function() {
        return new Promise((function(e, t) {
            v(s).then(e, e)
        }
        ))
    }
    ,
    e.exports = h
}
, function(e, t) {
    e.exports = function(e, t) {
        e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e.__proto__ = t
    }
}
, function(e, t, n) {
    var r = n(101);
    e.exports = p,
    e.exports.parse = o,
    e.exports.compile = function(e, t) {
        return l(o(e, t), t)
    }
    ,
    e.exports.tokensToFunction = l,
    e.exports.tokensToRegExp = d;
    var i = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
    function o(e, t) {
        for (var n, r = [], o = 0, a = 0, l = "", s = t && t.delimiter || "/"; null != (n = i.exec(e)); ) {
            var f = n[0]
              , d = n[1]
              , p = n.index;
            if (l += e.slice(a, p),
            a = p + f.length,
            d)
                l += d[1];
            else {
                var m = e[a]
                  , h = n[2]
                  , g = n[3]
                  , v = n[4]
                  , b = n[5]
                  , y = n[6]
                  , w = n[7];
                l && (r.push(l),
                l = "");
                var k = null != h && null != m && m !== h
                  , x = "+" === y || "*" === y
                  , E = "?" === y || "*" === y
                  , S = n[2] || s
                  , T = v || b;
                r.push({
                    name: g || o++,
                    prefix: h || "",
                    delimiter: S,
                    optional: E,
                    repeat: x,
                    partial: k,
                    asterisk: !!w,
                    pattern: T ? c(T) : w ? ".*" : "[^" + u(S) + "]+?"
                })
            }
        }
        return a < e.length && (l += e.substr(a)),
        l && r.push(l),
        r
    }
    function a(e) {
        return encodeURI(e).replace(/[\/?#]/g, (function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        }
        ))
    }
    function l(e, t) {
        for (var n = new Array(e.length), i = 0; i < e.length; i++)
            "object" == typeof e[i] && (n[i] = new RegExp("^(?:" + e[i].pattern + ")$",f(t)));
        return function(t, i) {
            for (var o = "", l = t || {}, u = (i || {}).pretty ? a : encodeURIComponent, c = 0; c < e.length; c++) {
                var s = e[c];
                if ("string" != typeof s) {
                    var f, d = l[s.name];
                    if (null == d) {
                        if (s.optional) {
                            s.partial && (o += s.prefix);
                            continue
                        }
                        throw new TypeError('Expected "' + s.name + '" to be defined')
                    }
                    if (r(d)) {
                        if (!s.repeat)
                            throw new TypeError('Expected "' + s.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                        if (0 === d.length) {
                            if (s.optional)
                                continue;
                            throw new TypeError('Expected "' + s.name + '" to not be empty')
                        }
                        for (var p = 0; p < d.length; p++) {
                            if (f = u(d[p]),
                            !n[c].test(f))
                                throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '", but received `' + JSON.stringify(f) + "`");
                            o += (0 === p ? s.prefix : s.delimiter) + f
                        }
                    } else {
                        if (f = s.asterisk ? encodeURI(d).replace(/[?#]/g, (function(e) {
                            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                        }
                        )) : u(d),
                        !n[c].test(f))
                            throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but received "' + f + '"');
                        o += s.prefix + f
                    }
                } else
                    o += s
            }
            return o
        }
    }
    function u(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
    }
    function c(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1")
    }
    function s(e, t) {
        return e.keys = t,
        e
    }
    function f(e) {
        return e && e.sensitive ? "" : "i"
    }
    function d(e, t, n) {
        r(t) || (n = t || n,
        t = []);
        for (var i = (n = n || {}).strict, o = !1 !== n.end, a = "", l = 0; l < e.length; l++) {
            var c = e[l];
            if ("string" == typeof c)
                a += u(c);
            else {
                var d = u(c.prefix)
                  , p = "(?:" + c.pattern + ")";
                t.push(c),
                c.repeat && (p += "(?:" + d + p + ")*"),
                a += p = c.optional ? c.partial ? d + "(" + p + ")?" : "(?:" + d + "(" + p + "))?" : d + "(" + p + ")"
            }
        }
        var m = u(n.delimiter || "/")
          , h = a.slice(-m.length) === m;
        return i || (a = (h ? a.slice(0, -m.length) : a) + "(?:" + m + "(?=$))?"),
        a += o ? "$" : i && h ? "" : "(?=" + m + "|$)",
        s(new RegExp("^" + a,f(n)), t)
    }
    function p(e, t, n) {
        return r(t) || (n = t || n,
        t = []),
        n = n || {},
        e instanceof RegExp ? function(e, t) {
            var n = e.source.match(/\((?!\?)/g);
            if (n)
                for (var r = 0; r < n.length; r++)
                    t.push({
                        name: r,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        partial: !1,
                        asterisk: !1,
                        pattern: null
                    });
            return s(e, t)
        }(e, t) : r(e) ? function(e, t, n) {
            for (var r = [], i = 0; i < e.length; i++)
                r.push(p(e[i], t, n).source);
            return s(new RegExp("(?:" + r.join("|") + ")",f(n)), t)
        }(e, t, n) : function(e, t, n) {
            return d(o(e, n), t, n)
        }(e, t, n)
    }
}
, function(e, t, n) {
    var r = n(23);
    e.exports = function(e) {
        return Object(r(e))
    }
}
, function(e, t, n) {
    "use strict";
    var r, i, o, a = (r = 0,
    i = {
        util: {
            encode: function(e) {
                return e instanceof o ? new o(e.type,i.util.encode(e.content),e.alias) : "Array" === i.util.type(e) ? e.map(i.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            },
            type: function(e) {
                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
            },
            objId: function(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                    value: ++r
                }),
                e.__id
            },
            clone: function(e, t) {
                var n = i.util.type(e);
                switch (t = t || {},
                n) {
                case "Object":
                    if (t[i.util.objId(e)])
                        return t[i.util.objId(e)];
                    var r = {};
                    for (var o in t[i.util.objId(e)] = r,
                    e)
                        e.hasOwnProperty(o) && (r[o] = i.util.clone(e[o], t));
                    return r;
                case "Array":
                    return t[i.util.objId(e)] ? t[i.util.objId(e)] : (r = [],
                    t[i.util.objId(e)] = r,
                    e.forEach((function(e, n) {
                        r[n] = i.util.clone(e, t)
                    }
                    )),
                    r)
                }
                return e
            }
        },
        languages: {
            extend: function(e, t) {
                var n = i.util.clone(i.languages[e]);
                for (var r in t)
                    n[r] = t[r];
                return n
            },
            insertBefore: function(e, t, n, r) {
                var o = (r = r || i.languages)[e];
                if (2 == arguments.length) {
                    for (var a in n = arguments[1])
                        n.hasOwnProperty(a) && (o[a] = n[a]);
                    return o
                }
                var l = {};
                for (var u in o)
                    if (o.hasOwnProperty(u)) {
                        if (u == t)
                            for (var a in n)
                                n.hasOwnProperty(a) && (l[a] = n[a]);
                        l[u] = o[u]
                    }
                return i.languages.DFS(i.languages, (function(t, n) {
                    n === r[e] && t != e && (this[t] = l)
                }
                )),
                r[e] = l
            },
            DFS: function(e, t, n, r) {
                for (var o in r = r || {},
                e)
                    e.hasOwnProperty(o) && (t.call(e, o, e[o], n || o),
                    "Object" !== i.util.type(e[o]) || r[i.util.objId(e[o])] ? "Array" !== i.util.type(e[o]) || r[i.util.objId(e[o])] || (r[i.util.objId(e[o])] = !0,
                    i.languages.DFS(e[o], t, o, r)) : (r[i.util.objId(e[o])] = !0,
                    i.languages.DFS(e[o], t, null, r)))
            }
        },
        plugins: {},
        highlight: function(e, t, n) {
            var r = {
                code: e,
                grammar: t,
                language: n
            };
            return r.tokens = i.tokenize(r.code, r.grammar),
            o.stringify(i.util.encode(r.tokens), r.language)
        },
        matchGrammar: function(e, t, n, r, o, a, l) {
            var u = i.Token;
            for (var c in n)
                if (n.hasOwnProperty(c) && n[c]) {
                    if (c == l)
                        return;
                    var s = n[c];
                    s = "Array" === i.util.type(s) ? s : [s];
                    for (var f = 0; f < s.length; ++f) {
                        var d = s[f]
                          , p = d.inside
                          , m = !!d.lookbehind
                          , h = !!d.greedy
                          , g = 0
                          , v = d.alias;
                        if (h && !d.pattern.global) {
                            var b = d.pattern.toString().match(/[imuy]*$/)[0];
                            d.pattern = RegExp(d.pattern.source, b + "g")
                        }
                        d = d.pattern || d;
                        for (var y = r, w = o; y < t.length; w += t[y].length,
                        ++y) {
                            var k = t[y];
                            if (t.length > e.length)
                                return;
                            if (!(k instanceof u)) {
                                if (h && y != t.length - 1) {
                                    if (d.lastIndex = w,
                                    !(C = d.exec(e)))
                                        break;
                                    for (var x = C.index + (m ? C[1].length : 0), E = C.index + C[0].length, S = y, T = w, _ = t.length; S < _ && (T < E || !t[S].type && !t[S - 1].greedy); ++S)
                                        x >= (T += t[S].length) && (++y,
                                        w = T);
                                    if (t[y]instanceof u)
                                        continue;
                                    O = S - y,
                                    k = e.slice(w, T),
                                    C.index -= w
                                } else {
                                    d.lastIndex = 0;
                                    var C = d.exec(k)
                                      , O = 1
                                }
                                if (C) {
                                    m && (g = C[1] ? C[1].length : 0),
                                    E = (x = C.index + g) + (C = C[0].slice(g)).length;
                                    var P = k.slice(0, x)
                                      , R = k.slice(E)
                                      , A = [y, O];
                                    P && (++y,
                                    w += P.length,
                                    A.push(P));
                                    var N = new u(c,p ? i.tokenize(C, p) : C,v,C,h);
                                    if (A.push(N),
                                    R && A.push(R),
                                    Array.prototype.splice.apply(t, A),
                                    1 != O && i.matchGrammar(e, t, n, y, w, !0, c),
                                    a)
                                        break
                                } else if (a)
                                    break
                            }
                        }
                    }
                }
        },
        hooks: {
            add: function() {}
        },
        tokenize: function(e, t, n) {
            var r = [e]
              , o = t.rest;
            if (o) {
                for (var a in o)
                    t[a] = o[a];
                delete t.rest
            }
            return i.matchGrammar(e, r, t, 0, 0, !1),
            r
        }
    },
    (o = i.Token = function(e, t, n, r, i) {
        this.type = e,
        this.content = t,
        this.alias = n,
        this.length = 0 | (r || "").length,
        this.greedy = !!i
    }
    ).stringify = function(e, t, n) {
        if ("string" == typeof e)
            return e;
        if ("Array" === i.util.type(e))
            return e.map((function(n) {
                return o.stringify(n, t, e)
            }
            )).join("");
        var r = {
            type: e.type,
            content: o.stringify(e.content, t, n),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: t,
            parent: n
        };
        if (e.alias) {
            var a = "Array" === i.util.type(e.alias) ? e.alias : [e.alias];
            Array.prototype.push.apply(r.classes, a)
        }
        var l = Object.keys(r.attributes).map((function(e) {
            return e + '="' + (r.attributes[e] || "").replace(/"/g, "&quot;") + '"'
        }
        )).join(" ");
        return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + (l ? " " + l : "") + ">" + r.content + "</" + r.tag + ">"
    }
    ,
    i);
    a.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
            greedy: !0
        },
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
            greedy: !0,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "attr-value": {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                    inside: {
                        punctuation: [/^=/, {
                            pattern: /^(\s*)["']|["']$/,
                            lookbehind: !0
                        }]
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: /&#?[\da-z]{1,8};/i
    },
    a.languages.markup.tag.inside["attr-value"].inside.entity = a.languages.markup.entity,
    a.hooks.add("wrap", (function(e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    }
    )),
    Object.defineProperty(a.languages.markup.tag, "addInlined", {
        value: function(e, t) {
            var n = {};
            n["language-" + t] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: a.languages[t]
            },
            n.cdata = /^<!\[CDATA\[|\]\]>$/i;
            var r = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: n
                }
            };
            r["language-" + t] = {
                pattern: /[\s\S]+/,
                inside: a.languages[t]
            };
            var i = {};
            i[e] = {
                pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function() {
                    return e
                }
                )), "i"),
                lookbehind: !0,
                greedy: !0,
                inside: r
            },
            a.languages.insertBefore("markup", "cdata", i)
        }
    }),
    a.languages.xml = a.languages.extend("markup", {}),
    a.languages.html = a.languages.markup,
    a.languages.mathml = a.languages.markup,
    a.languages.svg = a.languages.markup,
    function(e) {
        var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b"
          , n = {
            environment: {
                pattern: RegExp("\\$" + t),
                alias: "constant"
            },
            variable: [{
                pattern: /\$?\(\([\s\S]+?\)\)/,
                greedy: !0,
                inside: {
                    variable: [{
                        pattern: /(^\$\(\([\s\S]+)\)\)/,
                        lookbehind: !0
                    }, /^\$\(\(/],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                    punctuation: /\(\(?|\)\)?|,|;/
                }
            }, {
                pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                greedy: !0,
                inside: {
                    variable: /^\$\(|^`|\)$|`$/
                }
            }, {
                pattern: /\$\{[^}]+\}/,
                greedy: !0,
                inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                        pattern: RegExp("(\\{)" + t),
                        lookbehind: !0,
                        alias: "constant"
                    }
                }
            }, /\$(?:\w+|[#?*!@$])/],
            entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
        };
        e.languages.bash = {
            shebang: {
                pattern: /^#!\s*\/.*/,
                alias: "important"
            },
            comment: {
                pattern: /(^|[^"{\\$])#.*/,
                lookbehind: !0
            },
            "function-name": [{
                pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function"
            }, {
                pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
                alias: "function"
            }],
            "for-or-select": {
                pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
                alias: "variable",
                lookbehind: !0
            },
            "assign-left": {
                pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
                inside: {
                    environment: {
                        pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                        lookbehind: !0,
                        alias: "constant"
                    }
                },
                alias: "variable",
                lookbehind: !0
            },
            string: [{
                pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: n
            }, {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0
            }, {
                pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/,
                lookbehind: !0,
                greedy: !0,
                inside: n
            }],
            environment: {
                pattern: RegExp("\\$?" + t),
                alias: "constant"
            },
            variable: n.variable,
            function: {
                pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
                lookbehind: !0
            },
            keyword: {
                pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
                lookbehind: !0
            },
            builtin: {
                pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
                lookbehind: !0,
                alias: "class-name"
            },
            boolean: {
                pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
                lookbehind: !0
            },
            "file-descriptor": {
                pattern: /\B&\d\b/,
                alias: "important"
            },
            operator: {
                pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
                inside: {
                    "file-descriptor": {
                        pattern: /^\d/,
                        alias: "important"
                    }
                }
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
                pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
                lookbehind: !0
            }
        };
        for (var r = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], i = n.variable[1].inside, o = 0; o < r.length; o++)
            i[r[o]] = e.languages.bash[r[o]];
        e.languages.shell = e.languages.bash
    }(a),
    a.languages.clike = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(?:true|false)\b/,
        function: /\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/
    },
    a.languages.c = a.languages.extend("clike", {
        comment: {
            pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0
        },
        "class-name": {
            pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+/,
            lookbehind: !0
        },
        keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
        function: /[a-z_]\w*(?=\s*\()/i,
        operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
    }),
    a.languages.insertBefore("c", "string", {
        macro: {
            pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            alias: "property",
            inside: {
                string: {
                    pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
                    lookbehind: !0
                },
                directive: {
                    pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                    lookbehind: !0,
                    alias: "keyword"
                }
            }
        },
        constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
    }),
    delete a.languages.c.boolean,
    a.languages.cpp = a.languages.extend("c", {
        "class-name": {
            pattern: /(\b(?:class|enum|struct)\s+)\w+/,
            lookbehind: !0
        },
        keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
        number: {
            pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
            greedy: !0
        },
        operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:true|false)\b/
    }),
    a.languages.insertBefore("cpp", "string", {
        "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0
        }
    }),
    function(e) {
        var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
        e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
                inside: {
                    rule: /^@[\w-]+/,
                    "selector-function-argument": {
                        pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
                        lookbehind: !0,
                        alias: "selector"
                    }
                }
            },
            url: {
                pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
                greedy: !0,
                inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/
                }
            },
            selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
            string: {
                pattern: t,
                greedy: !0
            },
            property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/
        },
        e.languages.css.atrule.inside.rest = e.languages.css;
        var n = e.languages.markup;
        n && (n.tag.addInlined("style", "css"),
        e.languages.insertBefore("inside", "attr-value", {
            "style-attr": {
                pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                inside: {
                    "attr-name": {
                        pattern: /^\s*style/i,
                        inside: n.tag.inside
                    },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    "attr-value": {
                        pattern: /.+/i,
                        inside: e.languages.css
                    }
                },
                alias: "language-css"
            }
        }, n.tag))
    }(a),
    function(e) {
        var t, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
        e.languages.css.selector = {
            pattern: e.languages.css.selector,
            inside: t = {
                "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                "pseudo-class": /:[-\w]+/,
                class: /\.[-:.\w]+/,
                id: /#[-:.\w]+/,
                attribute: {
                    pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                    greedy: !0,
                    inside: {
                        punctuation: /^\[|\]$/,
                        "case-sensitivity": {
                            pattern: /(\s)[si]$/i,
                            lookbehind: !0,
                            alias: "keyword"
                        },
                        namespace: {
                            pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
                            lookbehind: !0,
                            inside: {
                                punctuation: /\|$/
                            }
                        },
                        attribute: {
                            pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
                            lookbehind: !0
                        },
                        value: [n, {
                            pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
                            lookbehind: !0
                        }],
                        operator: /[|~*^$]?=/
                    }
                },
                "n-th": [{
                    pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                    lookbehind: !0,
                    inside: {
                        number: /[\dn]+/,
                        operator: /[+-]/
                    }
                }, {
                    pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                    lookbehind: !0
                }],
                punctuation: /[()]/
            }
        },
        e.languages.css.atrule.inside["selector-function-argument"].inside = t,
        e.languages.insertBefore("css", "property", {
            variable: {
                pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
                lookbehind: !0
            }
        });
        var r = {
            pattern: /(\d)(?:%|[a-z]+)/,
            lookbehind: !0
        }
          , i = {
            pattern: /(^|[^\w.-])-?\d*\.?\d+/,
            lookbehind: !0
        };
        e.languages.insertBefore("css", "function", {
            operator: {
                pattern: /(\s)[+\-*\/](?=\s)/,
                lookbehind: !0
            },
            hexcode: {
                pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i,
                alias: "color"
            },
            color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
                pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                    unit: r,
                    number: i,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/
                }
            }],
            entity: /\\[\da-f]{1,8}/i,
            unit: r,
            number: i
        })
    }(a),
    a.languages.javascript = a.languages.extend("clike", {
        "class-name": [a.languages.clike["class-name"], {
            pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
            lookbehind: !0
        }],
        keyword: [{
            pattern: /((?:^|})\s*)(?:catch|finally)\b/,
            lookbehind: !0
        }, {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }],
        number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
    }),
    a.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,
    a.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0
        },
        "function-variable": {
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: "function"
        },
        parameter: [{
            pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
            lookbehind: !0,
            inside: a.languages.javascript
        }, {
            pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
            inside: a.languages.javascript
        }, {
            pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: a.languages.javascript
        }, {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: a.languages.javascript
        }],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }),
    a.languages.insertBefore("javascript", "string", {
        "template-string": {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\${|}$/,
                            alias: "punctuation"
                        },
                        rest: a.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        }
    }),
    a.languages.markup && a.languages.markup.tag.addInlined("script", "javascript"),
    a.languages.js = a.languages.javascript,
    function(e) {
        var t = e.util.clone(e.languages.javascript);
        e.languages.jsx = e.languages.extend("markup", t),
        e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,
        e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i,
        e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,
        e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/,
        e.languages.insertBefore("inside", "attr-name", {
            spread: {
                pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
                inside: {
                    punctuation: /\.{3}|[{}.]/,
                    "attr-value": /\w+/
                }
            }
        }, e.languages.jsx.tag),
        e.languages.insertBefore("inside", "attr-value", {
            script: {
                pattern: /=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
                inside: {
                    "script-punctuation": {
                        pattern: /^=(?={)/,
                        alias: "punctuation"
                    },
                    rest: e.languages.jsx
                },
                alias: "language-javascript"
            }
        }, e.languages.jsx.tag);
        var n = function(e) {
            return e ? "string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(n).join("") : ""
        }
          , r = function(t) {
            for (var i = [], o = 0; o < t.length; o++) {
                var a = t[o]
                  , l = !1;
                if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? i.length > 0 && i[i.length - 1].tagName === n(a.content[0].content[1]) && i.pop() : "/>" === a.content[a.content.length - 1].content || i.push({
                    tagName: n(a.content[0].content[1]),
                    openedBraces: 0
                }) : i.length > 0 && "punctuation" === a.type && "{" === a.content ? i[i.length - 1].openedBraces++ : i.length > 0 && i[i.length - 1].openedBraces > 0 && "punctuation" === a.type && "}" === a.content ? i[i.length - 1].openedBraces-- : l = !0),
                (l || "string" == typeof a) && i.length > 0 && 0 === i[i.length - 1].openedBraces) {
                    var u = n(a);
                    o < t.length - 1 && ("string" == typeof t[o + 1] || "plain-text" === t[o + 1].type) && (u += n(t[o + 1]),
                    t.splice(o + 1, 1)),
                    o > 0 && ("string" == typeof t[o - 1] || "plain-text" === t[o - 1].type) && (u = n(t[o - 1]) + u,
                    t.splice(o - 1, 1),
                    o--),
                    t[o] = new e.Token("plain-text",u,null,u)
                }
                a.content && "string" != typeof a.content && r(a.content)
            }
        };
        e.hooks.add("after-tokenize", (function(e) {
            "jsx" !== e.language && "tsx" !== e.language || r(e.tokens)
        }
        ))
    }(a),
    function(e) {
        e.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
                pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source),
                lookbehind: !0,
                alias: ["function-variable", "method", "function", "property-access"]
            }
        }),
        e.languages.insertBefore("javascript", "function", {
            method: {
                pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source),
                lookbehind: !0,
                alias: ["function", "property-access"]
            }
        }),
        e.languages.insertBefore("javascript", "constant", {
            "known-class-name": [{
                pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                alias: "class-name"
            }, {
                pattern: /\b(?:[A-Z]\w*)Error\b/,
                alias: "class-name"
            }]
        }),
        e.languages.javascript.keyword.unshift({
            pattern: /\b(?:as|default|export|from|import)\b/,
            alias: "module"
        }, {
            pattern: /\bnull\b/,
            alias: ["null", "nil"]
        }, {
            pattern: /\bundefined\b/,
            alias: "nil"
        }),
        e.languages.insertBefore("javascript", "operator", {
            spread: {
                pattern: /\.{3}/,
                alias: "operator"
            },
            arrow: {
                pattern: /=>/,
                alias: "operator"
            }
        }),
        e.languages.insertBefore("javascript", "punctuation", {
            "property-access": {
                pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
                lookbehind: !0
            },
            "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0
            },
            dom: {
                pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                alias: "variable"
            },
            console: {
                pattern: /\bconsole(?=\s*\.)/,
                alias: "class-name"
            }
        });
        for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], n = 0; n < t.length; n++) {
            var r = t[n]
              , i = e.languages.javascript[r];
            "RegExp" === e.util.type(i) && (i = e.languages.javascript[r] = {
                pattern: i
            });
            var o = i.inside || {};
            i.inside = o,
            o["maybe-class-name"] = /^[A-Z][\s\S]*/
        }
    }(a),
    function(e) {
        var t = /#(?!\{).+/
          , n = {
            pattern: /#\{[^}]+\}/,
            alias: "variable"
        };
        e.languages.coffeescript = e.languages.extend("javascript", {
            comment: t,
            string: [{
                pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                greedy: !0
            }, {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: {
                    interpolation: n
                }
            }],
            keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            "class-member": {
                pattern: /@(?!\d)\w+/,
                alias: "variable"
            }
        }),
        e.languages.insertBefore("coffeescript", "comment", {
            "multiline-comment": {
                pattern: /###[\s\S]+?###/,
                alias: "comment"
            },
            "block-regex": {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: "regex",
                inside: {
                    comment: t,
                    interpolation: n
                }
            }
        }),
        e.languages.insertBefore("coffeescript", "string", {
            "inline-javascript": {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                    delimiter: {
                        pattern: /^`|`$/,
                        alias: "punctuation"
                    },
                    rest: e.languages.javascript
                }
            },
            "multiline-string": [{
                pattern: /'''[\s\S]*?'''/,
                greedy: !0,
                alias: "string"
            }, {
                pattern: /"""[\s\S]*?"""/,
                greedy: !0,
                alias: "string",
                inside: {
                    interpolation: n
                }
            }]
        }),
        e.languages.insertBefore("coffeescript", "keyword", {
            property: /(?!\d)\w+(?=\s*:(?!:))/
        }),
        delete e.languages.coffeescript["template-string"],
        e.languages.coffee = e.languages.coffeescript
    }(a),
    function(e) {
        e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m]
        };
        var t = {
            "deleted-sign": "-",
            "deleted-arrow": "<",
            "inserted-sign": "+",
            "inserted-arrow": ">",
            unchanged: " ",
            diff: "!"
        };
        Object.keys(t).forEach((function(n) {
            var r = t[n]
              , i = [];
            /^\w+$/.test(n) || i.push(/\w+/.exec(n)[0]),
            "diff" === n && i.push("bold"),
            e.languages.diff[n] = {
                pattern: RegExp("^(?:[" + r + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
                alias: i
            }
        }
        )),
        Object.defineProperty(e.languages.diff, "PREFIXES", {
            value: t
        })
    }(a),
    a.languages.git = {
        comment: /^#.*/m,
        deleted: /^[-\u2013].*/m,
        inserted: /^\+.*/m,
        string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
        command: {
            pattern: /^.*\$ git .*$/m,
            inside: {
                parameter: /\s--?\w+/m
            }
        },
        coord: /^@@.*@@$/m,
        commit_sha1: /^commit \w{40}$/m
    },
    a.languages.go = a.languages.extend("clike", {
        keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
        builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
        boolean: /\b(?:_|iota|nil|true|false)\b/,
        operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
        number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
        string: {
            pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
            greedy: !0
        }
    }),
    delete a.languages.go["class-name"],
    a.languages.graphql = {
        comment: /#.*/,
        string: {
            pattern: /"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0
        },
        number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        boolean: /\b(?:true|false)\b/,
        variable: /\$[a-z_]\w*/i,
        directive: {
            pattern: /@[a-z_]\w*/i,
            alias: "function"
        },
        "attr-name": {
            pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0
        },
        "class-name": {
            pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
            lookbehind: !0
        },
        fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function"
        },
        keyword: /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
        operator: /[!=|]|\.{3}/,
        punctuation: /[!(){}\[\]:=,]/,
        constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
    },
    function(e) {
        function t(e, t) {
            return "___" + e.toUpperCase() + t + "___"
        }
        Object.defineProperties(e.languages["markup-templating"] = {}, {
            buildPlaceholders: {
                value: function(n, r, i, o) {
                    if (n.language === r) {
                        var a = n.tokenStack = [];
                        n.code = n.code.replace(i, (function(e) {
                            if ("function" == typeof o && !o(e))
                                return e;
                            for (var i, l = a.length; -1 !== n.code.indexOf(i = t(r, l)); )
                                ++l;
                            return a[l] = e,
                            i
                        }
                        )),
                        n.grammar = e.languages.markup
                    }
                }
            },
            tokenizePlaceholders: {
                value: function(n, r) {
                    if (n.language === r && n.tokenStack) {
                        n.grammar = e.languages[r];
                        var i = 0
                          , o = Object.keys(n.tokenStack);
                        !function a(l) {
                            for (var u = 0; u < l.length && !(i >= o.length); u++) {
                                var c = l[u];
                                if ("string" == typeof c || c.content && "string" == typeof c.content) {
                                    var s = o[i]
                                      , f = n.tokenStack[s]
                                      , d = "string" == typeof c ? c : c.content
                                      , p = t(r, s)
                                      , m = d.indexOf(p);
                                    if (m > -1) {
                                        ++i;
                                        var h = d.substring(0, m)
                                          , g = new e.Token(r,e.tokenize(f, n.grammar),"language-" + r,f)
                                          , v = d.substring(m + p.length)
                                          , b = [];
                                        h && b.push.apply(b, a([h])),
                                        b.push(g),
                                        v && b.push.apply(b, a([v])),
                                        "string" == typeof c ? l.splice.apply(l, [u, 1].concat(b)) : c.content = b
                                    }
                                } else
                                    c.content && a(c.content)
                            }
                            return l
                        }(n.tokens)
                    }
                }
            }
        })
    }(a),
    function(e) {
        e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: {
                pattern: /^\{\{\{?|\}\}\}?$/i,
                alias: "punctuation"
            },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: {
                pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
                lookbehind: !0,
                alias: "keyword"
            },
            brackets: {
                pattern: /\[[^\]]+\]/,
                inside: {
                    punctuation: /\[|\]/,
                    variable: /[\s\S]+/
                }
            },
            punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
        },
        e.hooks.add("before-tokenize", (function(t) {
            e.languages["markup-templating"].buildPlaceholders(t, "handlebars", /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)
        }
        )),
        e.hooks.add("after-tokenize", (function(t) {
            e.languages["markup-templating"].tokenizePlaceholders(t, "handlebars")
        }
        ))
    }(a),
    a.languages.json = {
        property: {
            pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            greedy: !0
        },
        string: {
            pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            greedy: !0
        },
        comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        number: /-?\d+\.?\d*(?:e[+-]?\d+)?/i,
        punctuation: /[{}[\],]/,
        operator: /:/,
        boolean: /\b(?:true|false)\b/,
        null: {
            pattern: /\bnull\b/,
            alias: "keyword"
        }
    },
    a.languages.less = a.languages.extend("css", {
        comment: [/\/\*[\s\S]*?\*\//, {
            pattern: /(^|[^\\])\/\/.*/,
            lookbehind: !0
        }],
        atrule: {
            pattern: /@[\w-]+?(?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};])*?(?=\s*\{)/,
            inside: {
                punctuation: /[:()]/
            }
        },
        selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/,
            inside: {
                variable: /@+[\w-]+/
            }
        },
        property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
        operator: /[+\-*\/]/
    }),
    a.languages.insertBefore("less", "property", {
        variable: [{
            pattern: /@[\w-]+\s*:/,
            inside: {
                punctuation: /:/
            }
        }, /@@?[\w-]+/],
        "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
            lookbehind: !0,
            alias: "function"
        }
    }),
    a.languages.makefile = {
        comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0
        },
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
        symbol: {
            pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
            inside: {
                variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/
            }
        },
        variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
        keyword: [/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, {
            pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
            lookbehind: !0
        }],
        operator: /(?:::|[?:+!])?=|[|@]/,
        punctuation: /[:;(){}]/
    },
    function(e) {
        var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source;
        function n(e, n) {
            return e = e.replace(/<inner>/g, (function() {
                return t
            }
            )),
            n && (e = e + "|" + e.replace(/_/g, "\\*")),
            RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
        }
        var r = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source
          , i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|$)/.source.replace(/__/g, (function() {
            return r
        }
        ))
          , o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
        e.languages.markdown = e.languages.extend("markup", {}),
        e.languages.insertBefore("markdown", "prolog", {
            blockquote: {
                pattern: /^>(?:[\t ]*>)*/m,
                alias: "punctuation"
            },
            table: {
                pattern: RegExp("^" + i + o + "(?:" + i + ")*", "m"),
                inside: {
                    "table-data-rows": {
                        pattern: RegExp("^(" + i + o + ")(?:" + i + ")*$"),
                        lookbehind: !0,
                        inside: {
                            "table-data": {
                                pattern: RegExp(r),
                                inside: e.languages.markdown
                            },
                            punctuation: /\|/
                        }
                    },
                    "table-line": {
                        pattern: RegExp("^(" + i + ")" + o + "$"),
                        lookbehind: !0,
                        inside: {
                            punctuation: /\||:?-{3,}:?/
                        }
                    },
                    "table-header-row": {
                        pattern: RegExp("^" + i + "$"),
                        inside: {
                            "table-header": {
                                pattern: RegExp(r),
                                alias: "important",
                                inside: e.languages.markdown
                            },
                            punctuation: /\|/
                        }
                    }
                }
            },
            code: [{
                pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                lookbehind: !0,
                alias: "keyword"
            }, {
                pattern: /``.+?``|`[^`\r\n]+`/,
                alias: "keyword"
            }, {
                pattern: /^```[\s\S]*?^```$/m,
                greedy: !0,
                inside: {
                    "code-block": {
                        pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                        lookbehind: !0
                    },
                    "code-language": {
                        pattern: /^(```).+/,
                        lookbehind: !0
                    },
                    punctuation: /```/
                }
            }],
            title: [{
                pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                alias: "important",
                inside: {
                    punctuation: /==+$|--+$/
                }
            }, {
                pattern: /(^\s*)#+.+/m,
                lookbehind: !0,
                alias: "important",
                inside: {
                    punctuation: /^#+|#+$/
                }
            }],
            hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation"
            },
            list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation"
            },
            "url-reference": {
                pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                    variable: {
                        pattern: /^(!?\[)[^\]]+/,
                        lookbehind: !0
                    },
                    string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                    punctuation: /^[\[\]!:]|[<>]/
                },
                alias: "url"
            },
            bold: {
                pattern: n(/__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source, !0),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    content: {
                        pattern: /(^..)[\s\S]+(?=..$)/,
                        lookbehind: !0,
                        inside: {}
                    },
                    punctuation: /\*\*|__/
                }
            },
            italic: {
                pattern: n(/_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source, !0),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    content: {
                        pattern: /(^.)[\s\S]+(?=.$)/,
                        lookbehind: !0,
                        inside: {}
                    },
                    punctuation: /[*_]/
                }
            },
            strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+?\2/.source, !1),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    content: {
                        pattern: /(^~~?)[\s\S]+(?=\1$)/,
                        lookbehind: !0,
                        inside: {}
                    },
                    punctuation: /~~?/
                }
            },
            url: {
                pattern: n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/.source, !1),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    variable: {
                        pattern: /(\[)[^\]]+(?=\]$)/,
                        lookbehind: !0
                    },
                    content: {
                        pattern: /(^!?\[)[^\]]+(?=\])/,
                        lookbehind: !0,
                        inside: {}
                    },
                    string: {
                        pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
                    }
                }
            }
        }),
        ["url", "bold", "italic", "strike"].forEach((function(t) {
            ["url", "bold", "italic", "strike"].forEach((function(n) {
                t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n])
            }
            ))
        }
        )),
        e.hooks.add("after-tokenize", (function(e) {
            "markdown" !== e.language && "md" !== e.language || function e(t) {
                if (t && "string" != typeof t)
                    for (var n = 0, r = t.length; n < r; n++) {
                        var i = t[n];
                        if ("code" === i.type) {
                            var o = i.content[1]
                              , a = i.content[3];
                            if (o && a && "code-language" === o.type && "code-block" === a.type && "string" == typeof o.content) {
                                var l = o.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp")
                                  , u = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                                a.alias ? "string" == typeof a.alias ? a.alias = [a.alias, u] : a.alias.push(u) : a.alias = [u]
                            }
                        } else
                            e(i.content)
                    }
            }(e.tokens)
        }
        )),
        e.hooks.add("wrap", (function(t) {
            if ("code-block" === t.type) {
                for (var n = "", r = 0, i = t.classes.length; r < i; r++) {
                    var o = t.classes[r]
                      , a = /language-(.+)/.exec(o);
                    if (a) {
                        n = a[1];
                        break
                    }
                }
                var l = e.languages[n];
                if (l) {
                    var u = t.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
                    t.content = e.highlight(u, l, n)
                } else if (n && "none" !== n && e.plugins.autoloader) {
                    var c = "md-" + (new Date).valueOf() + "-" + Math.floor(1e16 * Math.random());
                    t.attributes.id = c,
                    e.plugins.autoloader.loadLanguages(n, (function() {
                        var t = document.getElementById(c);
                        t && (t.innerHTML = e.highlight(t.textContent, e.languages[n], n))
                    }
                    ))
                }
            }
        }
        )),
        e.languages.md = e.languages.markdown
    }(a),
    a.languages.objectivec = a.languages.extend("c", {
        keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
        string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
    }),
    delete a.languages.objectivec["class-name"],
    a.languages.ocaml = {
        comment: /\(\*[\s\S]*?\*\)/,
        string: [{
            pattern: /"(?:\\.|[^\\\r\n"])*"/,
            greedy: !0
        }, {
            pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
            greedy: !0
        }],
        number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
        directive: {
            pattern: /\B#\w+/,
            alias: "important"
        },
        label: {
            pattern: /\B~\w+/,
            alias: "function"
        },
        type_variable: {
            pattern: /\B'\w+/,
            alias: "function"
        },
        variant: {
            pattern: /`\w+/,
            alias: "variable"
        },
        module: {
            pattern: /\b[A-Z]\w+/,
            alias: "variable"
        },
        keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
        boolean: /\b(?:false|true)\b/,
        operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
        punctuation: /[(){}\[\]|_.,:;]/
    },
    a.languages.python = {
        comment: {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0
        },
        "string-interpolation": {
            pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                    lookbehind: !0,
                    inside: {
                        "format-spec": {
                            pattern: /(:)[^:(){}]+(?=}$)/,
                            lookbehind: !0
                        },
                        "conversion-option": {
                            pattern: /![sra](?=[:}]$)/,
                            alias: "punctuation"
                        },
                        rest: null
                    }
                },
                string: /[\s\S]+/
            }
        },
        "triple-quoted-string": {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
            greedy: !0,
            alias: "string"
        },
        string: {
            pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0
        },
        function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0
        },
        "class-name": {
            pattern: /(\bclass\s+)\w+/i,
            lookbehind: !0
        },
        decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/im,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: {
                punctuation: /\./
            }
        },
        keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
        builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
        boolean: /\b(?:True|False|None)\b/,
        number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
        operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
        punctuation: /[{}[\];(),.:]/
    },
    a.languages.python["string-interpolation"].inside.interpolation.inside.rest = a.languages.python,
    a.languages.py = a.languages.python,
    a.languages.reason = a.languages.extend("clike", {
        string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0
        },
        "class-name": /\b[A-Z]\w*/,
        keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
        operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
    }),
    a.languages.insertBefore("reason", "class-name", {
        character: {
            pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            alias: "string"
        },
        constructor: {
            pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
            alias: "variable"
        },
        label: {
            pattern: /\b[a-z]\w*(?=::)/,
            alias: "symbol"
        }
    }),
    delete a.languages.reason.function,
    function(e) {
        e.languages.sass = e.languages.extend("css", {
            comment: {
                pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
                lookbehind: !0
            }
        }),
        e.languages.insertBefore("sass", "atrule", {
            "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: {
                    atrule: /(?:@[\w-]+|[+=])/m
                }
            }
        }),
        delete e.languages.sass.atrule;
        var t = /\$[-\w]+|#\{\$[-\w]+\}/
          , n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
            pattern: /(\s+)-(?=\s)/,
            lookbehind: !0
        }];
        e.languages.insertBefore("sass", "property", {
            "variable-line": {
                pattern: /^[ \t]*\$.+/m,
                inside: {
                    punctuation: /:/,
                    variable: t,
                    operator: n
                }
            },
            "property-line": {
                pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
                inside: {
                    property: [/[^:\s]+(?=\s*:)/, {
                        pattern: /(:)[^:\s]+/,
                        lookbehind: !0
                    }],
                    punctuation: /:/,
                    variable: t,
                    operator: n,
                    important: e.languages.sass.important
                }
            }
        }),
        delete e.languages.sass.property,
        delete e.languages.sass.important,
        e.languages.insertBefore("sass", "punctuation", {
            selector: {
                pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0
            }
        })
    }(a),
    a.languages.scss = a.languages.extend("css", {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0
        },
        atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /(?:[-a-z]+-)?url(?=\()/i,
        selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
                parent: {
                    pattern: /&/,
                    alias: "important"
                },
                placeholder: /%[-\w]+/,
                variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }
        },
        property: {
            pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: {
                variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }
        }
    }),
    a.languages.insertBefore("scss", "atrule", {
        keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
            pattern: /( +)(?:from|through)(?= )/,
            lookbehind: !0
        }]
    }),
    a.languages.insertBefore("scss", "important", {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }),
    a.languages.insertBefore("scss", "function", {
        placeholder: {
            pattern: /%[-\w]+/,
            alias: "selector"
        },
        statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword"
        },
        boolean: /\b(?:true|false)\b/,
        null: {
            pattern: /\bnull\b/,
            alias: "keyword"
        },
        operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0
        }
    }),
    a.languages.scss.atrule.inside.rest = a.languages.scss,
    a.languages.sql = {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0
        },
        variable: [{
            pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
            greedy: !0
        }, /@[\w.$]+/],
        string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0
        },
        function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
        keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
        boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
        number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
        operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
        punctuation: /[;[\]()`,.]/
    },
    function(e) {
        var t = {
            url: /url\((["']?).*?\1\)/i,
            string: {
                pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                greedy: !0
            },
            interpolation: null,
            func: null,
            important: /\B!(?:important|optional)\b/i,
            keyword: {
                pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
                lookbehind: !0
            },
            hexcode: /#[\da-f]{3,6}/i,
            number: /\b\d+(?:\.\d+)?%?/,
            boolean: /\b(?:true|false)\b/,
            operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
            punctuation: /[{}()\[\];:,]/
        };
        t.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: "variable",
            inside: {
                delimiter: {
                    pattern: /^{|}$/,
                    alias: "punctuation"
                },
                rest: t
            }
        },
        t.func = {
            pattern: /[\w-]+\([^)]*\).*/,
            inside: {
                function: /^[^(]+/,
                rest: t
            }
        },
        e.languages.stylus = {
            comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0
            },
            "atrule-declaration": {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: {
                    atrule: /^@[\w-]+/,
                    rest: t
                }
            },
            "variable-declaration": {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
                lookbehind: !0,
                inside: {
                    variable: /^\S+/,
                    rest: t
                }
            },
            statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
                lookbehind: !0,
                inside: {
                    keyword: /^\S+/,
                    rest: t
                }
            },
            "property-declaration": {
                pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                    property: {
                        pattern: /^[^\s:]+/,
                        inside: {
                            interpolation: t.interpolation
                        }
                    },
                    rest: t
                }
            },
            selector: {
                pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                    interpolation: t.interpolation,
                    punctuation: /[{},]/
                }
            },
            func: t.func,
            string: t.string,
            interpolation: t.interpolation,
            punctuation: /[{}()\[\];:.]/
        }
    }(a),
    a.languages.typescript = a.languages.extend("javascript", {
        keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
        builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
    }),
    a.languages.ts = a.languages.typescript;
    var l = a.util.clone(a.languages.typescript);
    a.languages.tsx = a.languages.extend("jsx", l),
    a.languages.wasm = {
        comment: [/\(;[\s\S]*?;\)/, {
            pattern: /;;.*/,
            greedy: !0
        }],
        string: {
            pattern: /"(?:\\[\s\S]|[^"\\])*"/,
            greedy: !0
        },
        keyword: [{
            pattern: /\b(?:align|offset)=/,
            inside: {
                operator: /=/
            }
        }, {
            pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
            inside: {
                punctuation: /\./
            }
        }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
        variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
        number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
        punctuation: /[()]/
    },
    function(e) {
        var t = /[*&][^\s[\]{},]+/
          , n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/
          , r = "(?:" + n.source + "(?:[ \t]+" + t.source + ")?|" + t.source + "(?:[ \t]+" + n.source + ")?)";
        function i(e, t) {
            t = (t || "").replace(/m/g, "") + "m";
            var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|\s*#))/.source.replace(/<<prop>>/g, (function() {
                return r
            }
            )).replace(/<<value>>/g, (function() {
                return e
            }
            ));
            return RegExp(n, t)
        }
        e.languages.yaml = {
            scalar: {
                pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, (function() {
                    return r
                }
                ))),
                lookbehind: !0,
                alias: "string"
            },
            comment: /#.*/,
            key: {
                pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)[^\r\n{[\]},#\s]+?(?=\s*:\s)/.source.replace(/<<prop>>/g, (function() {
                    return r
                }
                ))),
                lookbehind: !0,
                alias: "atrule"
            },
            directive: {
                pattern: /(^[ \t]*)%.+/m,
                lookbehind: !0,
                alias: "important"
            },
            datetime: {
                pattern: i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                lookbehind: !0,
                alias: "number"
            },
            boolean: {
                pattern: i(/true|false/.source, "i"),
                lookbehind: !0,
                alias: "important"
            },
            null: {
                pattern: i(/null|~/.source, "i"),
                lookbehind: !0,
                alias: "important"
            },
            string: {
                pattern: i(/("|')(?:(?!\2)[^\\\r\n]|\\.)*\2/.source),
                lookbehind: !0,
                greedy: !0
            },
            number: {
                pattern: i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
                lookbehind: !0
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
        },
        e.languages.yml = e.languages.yaml
    }(a),
    t.a = a
}
, function(e, t, n) {
    "use strict";
    var r = Object.getOwnPropertySymbols
      , i = Object.prototype.hasOwnProperty
      , o = Object.prototype.propertyIsEnumerable;
    function a(e) {
        if (null == e)
            throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    e.exports = function() {
        try {
            if (!Object.assign)
                return !1;
            var e = new String("abc");
            if (e[5] = "de",
            "5" === Object.getOwnPropertyNames(e)[0])
                return !1;
            for (var t = {}, n = 0; n < 10; n++)
                t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                return t[e]
            }
            )).join(""))
                return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                r[e] = e
            }
            )),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (i) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, l, u = a(e), c = 1; c < arguments.length; c++) {
            for (var s in n = Object(arguments[c]))
                i.call(n, s) && (u[s] = n[s]);
            if (r) {
                l = r(n);
                for (var f = 0; f < l.length; f++)
                    o.call(n, l[f]) && (u[l[f]] = n[l[f]])
            }
        }
        return u
    }
}
, function(e, t, n) {
    var r = n(50)
      , i = n(31);
    n(98)("keys", (function() {
        return function(e) {
            return i(r(e))
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    var r, i, o, a, l = n(40), u = n(5), c = n(25), s = n(27), f = n(17), d = n(11), p = n(26), m = n(110), h = n(111), g = n(55), v = n(65).set, b = n(116)(), y = n(66), w = n(117), k = n(118), x = n(119), E = u.TypeError, S = u.process, T = S && S.versions, _ = T && T.v8 || "", C = u.Promise, O = "process" == s(S), P = function() {}, R = i = y.f, A = !!function() {
        try {
            var e = C.resolve(1)
              , t = (e.constructor = {})[n(2)("species")] = function(e) {
                e(P, P)
            }
            ;
            return (O || "function" == typeof PromiseRejectionEvent) && e.then(P)instanceof t && 0 !== _.indexOf("6.6") && -1 === k.indexOf("Chrome/66")
        } catch (r) {}
    }(), N = function(e) {
        var t;
        return !(!d(e) || "function" != typeof (t = e.then)) && t
    }, I = function(e, t) {
        if (!e._n) {
            e._n = !0;
            var n = e._c;
            b((function() {
                for (var r = e._v, i = 1 == e._s, o = 0, a = function(t) {
                    var n, o, a, l = i ? t.ok : t.fail, u = t.resolve, c = t.reject, s = t.domain;
                    try {
                        l ? (i || (2 == e._h && F(e),
                        e._h = 1),
                        !0 === l ? n = r : (s && s.enter(),
                        n = l(r),
                        s && (s.exit(),
                        a = !0)),
                        n === t.promise ? c(E("Promise-chain cycle")) : (o = N(n)) ? o.call(n, u, c) : u(n)) : c(r)
                    } catch (f) {
                        s && !a && s.exit(),
                        c(f)
                    }
                }; n.length > o; )
                    a(n[o++]);
                e._c = [],
                e._n = !1,
                t && !e._h && L(e)
            }
            ))
        }
    }, L = function(e) {
        v.call(u, (function() {
            var t, n, r, i = e._v, o = D(e);
            if (o && (t = w((function() {
                O ? S.emit("unhandledRejection", i, e) : (n = u.onunhandledrejection) ? n({
                    promise: e,
                    reason: i
                }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
            }
            )),
            e._h = O || D(e) ? 2 : 1),
            e._a = void 0,
            o && t.e)
                throw t.v
        }
        ))
    }, D = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length
    }, F = function(e) {
        v.call(u, (function() {
            var t;
            O ? S.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                promise: e,
                reason: e._v
            })
        }
        ))
    }, j = function(e) {
        var t = this;
        t._d || (t._d = !0,
        (t = t._w || t)._v = e,
        t._s = 2,
        t._a || (t._a = t._c.slice()),
        I(t, !0))
    }, M = function(e) {
        var t, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === e)
                    throw E("Promise can't be resolved itself");
                (t = N(e)) ? b((function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        t.call(e, c(M, r, 1), c(j, r, 1))
                    } catch (i) {
                        j.call(r, i)
                    }
                }
                )) : (n._v = e,
                n._s = 1,
                I(n, !1))
            } catch (r) {
                j.call({
                    _w: n,
                    _d: !1
                }, r)
            }
        }
    };
    A || (C = function(e) {
        m(this, C, "Promise", "_h"),
        p(e),
        r.call(this);
        try {
            e(c(M, this, 1), c(j, this, 1))
        } catch (t) {
            j.call(this, t)
        }
    }
    ,
    (r = function(e) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ).prototype = n(120)(C.prototype, {
        then: function(e, t) {
            var n = R(g(this, C));
            return n.ok = "function" != typeof e || e,
            n.fail = "function" == typeof t && t,
            n.domain = O ? S.domain : void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && I(this, !1),
            n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    o = function() {
        var e = new r;
        this.promise = e,
        this.resolve = c(M, e, 1),
        this.reject = c(j, e, 1)
    }
    ,
    y.f = R = function(e) {
        return e === C || e === a ? new o(e) : i(e)
    }
    ),
    f(f.G + f.W + f.F * !A, {
        Promise: C
    }),
    n(45)(C, "Promise"),
    n(121)("Promise"),
    a = n(12).Promise,
    f(f.S + f.F * !A, "Promise", {
        reject: function(e) {
            var t = R(this);
            return (0,
            t.reject)(e),
            t.promise
        }
    }),
    f(f.S + f.F * (l || !A), "Promise", {
        resolve: function(e) {
            return x(l && this === a ? C : this, e)
        }
    }),
    f(f.S + f.F * !(A && n(122)((function(e) {
        C.all(e).catch(P)
    }
    ))), "Promise", {
        all: function(e) {
            var t = this
              , n = R(t)
              , r = n.resolve
              , i = n.reject
              , o = w((function() {
                var n = []
                  , o = 0
                  , a = 1;
                h(e, !1, (function(e) {
                    var l = o++
                      , u = !1;
                    n.push(void 0),
                    a++,
                    t.resolve(e).then((function(e) {
                        u || (u = !0,
                        n[l] = e,
                        --a || r(n))
                    }
                    ), i)
                }
                )),
                --a || r(n)
            }
            ));
            return o.e && i(o.v),
            n.promise
        },
        race: function(e) {
            var t = this
              , n = R(t)
              , r = n.reject
              , i = w((function() {
                h(e, !1, (function(e) {
                    t.resolve(e).then(n.resolve, r)
                }
                ))
            }
            ));
            return i.e && r(i.v),
            n.promise
        }
    })
}
, function(e, t, n) {
    var r = n(8)
      , i = n(26)
      , o = n(2)("species");
    e.exports = function(e, t) {
        var n, a = r(e).constructor;
        return void 0 === a || null == (n = r(a)[o]) ? t : i(n)
    }
}
, function(e, t, n) {
    var r = n(37)
      , i = n(23);
    e.exports = function(e) {
        return function(t, n) {
            var o, a, l = String(i(t)), u = r(n), c = l.length;
            return u < 0 || u >= c ? e ? "" : void 0 : (o = l.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (a = l.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? l.charAt(u) : o : e ? l.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(40)
      , i = n(17)
      , o = n(14)
      , a = n(10)
      , l = n(22)
      , u = n(92)
      , c = n(45)
      , s = n(97)
      , f = n(2)("iterator")
      , d = !([].keys && "next"in [].keys())
      , p = function() {
        return this
    };
    e.exports = function(e, t, n, m, h, g, v) {
        u(n, t, m);
        var b, y, w, k = function(e) {
            if (!d && e in T)
                return T[e];
            switch (e) {
            case "keys":
            case "values":
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this,e)
            }
        }, x = t + " Iterator", E = "values" == h, S = !1, T = e.prototype, _ = T[f] || T["@@iterator"] || h && T[h], C = _ || k(h), O = h ? E ? k("entries") : C : void 0, P = "Array" == t && T.entries || _;
        if (P && (w = s(P.call(new e))) !== Object.prototype && w.next && (c(w, x, !0),
        r || "function" == typeof w[f] || a(w, f, p)),
        E && _ && "values" !== _.name && (S = !0,
        C = function() {
            return _.call(this)
        }
        ),
        r && !v || !d && !S && T[f] || a(T, f, C),
        l[t] = C,
        l[x] = p,
        h)
            if (b = {
                values: E ? C : k("values"),
                keys: g ? C : k("keys"),
                entries: O
            },
            v)
                for (y in b)
                    y in T || o(T, y, b[y]);
            else
                i(i.P + i.F * (d || S), t, b);
        return b
    }
}
, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(e, t, n) {
    var r = n(5).document;
    e.exports = r && r.documentElement
}
, function(e, t, n) {
    "use strict";
    var r = n(16);
    t.a = r.b
}
, function(e, t, n) {
    "use strict";
    e.exports = n(102)
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , i = n.n(r);
    t.a = i.a.createContext({})
}
, , function(e, t, n) {
    var r, i, o, a = n(25), l = n(115), u = n(60), c = n(43), s = n(5), f = s.process, d = s.setImmediate, p = s.clearImmediate, m = s.MessageChannel, h = s.Dispatch, g = 0, v = {}, b = function() {
        var e = +this;
        if (v.hasOwnProperty(e)) {
            var t = v[e];
            delete v[e],
            t()
        }
    }, y = function(e) {
        b.call(e.data)
    };
    d && p || (d = function(e) {
        for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
        return v[++g] = function() {
            l("function" == typeof e ? e : Function(e), t)
        }
        ,
        r(g),
        g
    }
    ,
    p = function(e) {
        delete v[e]
    }
    ,
    "process" == n(20)(f) ? r = function(e) {
        f.nextTick(a(b, e, 1))
    }
    : h && h.now ? r = function(e) {
        h.now(a(b, e, 1))
    }
    : m ? (o = (i = new m).port2,
    i.port1.onmessage = y,
    r = a(o.postMessage, o, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts ? (r = function(e) {
        s.postMessage(e + "", "*")
    }
    ,
    s.addEventListener("message", y, !1)) : r = "onreadystatechange"in c("script") ? function(e) {
        u.appendChild(c("script")).onreadystatechange = function() {
            u.removeChild(this),
            b.call(e)
        }
    }
    : function(e) {
        setTimeout(a(b, e, 1), 0)
    }
    ),
    e.exports = {
        set: d,
        clear: p
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(26);
    function i(e) {
        var t, n;
        this.promise = new e((function(e, r) {
            if (void 0 !== t || void 0 !== n)
                throw TypeError("Bad Promise constructor");
            t = e,
            n = r
        }
        )),
        this.resolve = r(t),
        this.reject = r(n)
    }
    e.exports.f = function(e) {
        return new i(e)
    }
}
, function(e, t, n) {
    "use strict";
    !function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
            0;
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {
                console.error(t)
            }
        }
    }(),
    e.exports = n(82)
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        var n = "__global_unique_id__";
        e.exports = function() {
            return t[n] = (t[n] || 0) + 1
        }
    }
    ).call(this, n(71))
}
, function(e, t, n) {
    "use strict";
    var r = n(62)
      , i = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    }
      , o = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    }
      , a = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    }
      , l = {};
    function u(e) {
        return r.isMemo(e) ? a : l[e.$$typeof] || i
    }
    l[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    },
    l[r.Memo] = a;
    var c = Object.defineProperty
      , s = Object.getOwnPropertyNames
      , f = Object.getOwnPropertySymbols
      , d = Object.getOwnPropertyDescriptor
      , p = Object.getPrototypeOf
      , m = Object.prototype;
    e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
            if (m) {
                var i = p(n);
                i && i !== m && e(t, i, r)
            }
            var a = s(n);
            f && (a = a.concat(f(n)));
            for (var l = u(t), h = u(n), g = 0; g < a.length; ++g) {
                var v = a[g];
                if (!(o[v] || r && r[v] || h && h[v] || l && l[v])) {
                    var b = d(n, v);
                    try {
                        c(t, v, b)
                    } catch (y) {}
                }
            }
        }
        return t
    }
}
, function(e, t) {
    var n = !("undefined" == typeof window || !window.document || !window.document.createElement)
      , r = {
        canUseDOM: n,
        canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent),
        canUseIntersectionObserver: n && "IntersectionObserver"in window,
        canUseViewport: n && !!window.screen
    };
    e.exports = r
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (r) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    var r = n(56)(!0);
    e.exports = function(e, t, n) {
        return t + (n ? r(e, t).length : 1)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(27)
      , i = RegExp.prototype.exec;
    e.exports = function(e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var o = n.call(e, t);
            if ("object" != typeof o)
                throw new TypeError("RegExp exec method returned something other than an Object or null");
            return o
        }
        if ("RegExp" !== r(e))
            throw new TypeError("RegExp#exec called on incompatible receiver");
        return i.call(e, t)
    }
}
, function(e, t, n) {
    "use strict";
    n(87);
    var r = n(14)
      , i = n(10)
      , o = n(21)
      , a = n(23)
      , l = n(2)
      , u = n(42)
      , c = l("species")
      , s = !o((function() {
        var e = /./;
        return e.exec = function() {
            var e = [];
            return e.groups = {
                a: "7"
            },
            e
        }
        ,
        "7" !== "".replace(e, "$<a>")
    }
    ))
      , f = function() {
        var e = /(?:)/
          , t = e.exec;
        e.exec = function() {
            return t.apply(this, arguments)
        }
        ;
        var n = "ab".split(e);
        return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
    e.exports = function(e, t, n) {
        var d = l(e)
          , p = !o((function() {
            var t = {};
            return t[d] = function() {
                return 7
            }
            ,
            7 != ""[e](t)
        }
        ))
          , m = p ? !o((function() {
            var t = !1
              , n = /a/;
            return n.exec = function() {
                return t = !0,
                null
            }
            ,
            "split" === e && (n.constructor = {},
            n.constructor[c] = function() {
                return n
            }
            ),
            n[d](""),
            !t
        }
        )) : void 0;
        if (!p || !m || "replace" === e && !s || "split" === e && !f) {
            var h = /./[d]
              , g = n(a, d, ""[e], (function(e, t, n, r, i) {
                return t.exec === u ? p && !i ? {
                    done: !0,
                    value: h.call(t, n, r)
                } : {
                    done: !0,
                    value: e.call(n, t, r)
                } : {
                    done: !1
                }
            }
            ))
              , v = g[0]
              , b = g[1];
            r(String.prototype, e, v),
            i(RegExp.prototype, d, 2 == t ? function(e, t) {
                return b.call(e, this, t)
            }
            : function(e) {
                return b.call(e, this)
            }
            )
        }
    }
}
, function(e, t, n) {
    var r = n(2)("unscopables")
      , i = Array.prototype;
    null == i[r] && n(10)(i, r, {}),
    e.exports = function(e) {
        i[r][e] = !0
    }
}
, function(e, t, n) {
    var r = n(11)
      , i = n(20)
      , o = n(2)("match");
    e.exports = function(e) {
        var t;
        return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
    }
}
, function(e, t, n) {
    var r = n(20);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}
, function(e, t, n) {
    var r = n(30)
      , i = n(35)
      , o = n(96);
    e.exports = function(e) {
        return function(t, n, a) {
            var l, u = r(t), c = i(u.length), s = o(a, c);
            if (e && n != n) {
                for (; c > s; )
                    if ((l = u[s++]) != l)
                        return !0
            } else
                for (; c > s; s++)
                    if ((e || s in u) && u[s] === n)
                        return e || s || 0;
            return !e && -1
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(56)(!0);
    n(58)(String, "String", (function(e) {
        this._t = String(e),
        this._i = 0
    }
    ), (function() {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n),
        this._i += e.length,
        {
            value: e,
            done: !1
        })
    }
    ))
}
, function(e, t, n) {
    e.exports = n(127)
}
, function(e, t, n) {
    "use strict";
    var r = n(52)
      , i = "function" == typeof Symbol && Symbol.for
      , o = i ? Symbol.for("react.element") : 60103
      , a = i ? Symbol.for("react.portal") : 60106
      , l = i ? Symbol.for("react.fragment") : 60107
      , u = i ? Symbol.for("react.strict_mode") : 60108
      , c = i ? Symbol.for("react.profiler") : 60114
      , s = i ? Symbol.for("react.provider") : 60109
      , f = i ? Symbol.for("react.context") : 60110
      , d = i ? Symbol.for("react.forward_ref") : 60112
      , p = i ? Symbol.for("react.suspense") : 60113
      , m = i ? Symbol.for("react.memo") : 60115
      , h = i ? Symbol.for("react.lazy") : 60116
      , g = "function" == typeof Symbol && Symbol.iterator;
    function v(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var b = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , y = {};
    function w(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = y,
        this.updater = n || b
    }
    function k() {}
    function x(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = y,
        this.updater = n || b
    }
    w.prototype.isReactComponent = {},
    w.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(v(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }
    ,
    w.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }
    ,
    k.prototype = w.prototype;
    var E = x.prototype = new k;
    E.constructor = x,
    r(E, w.prototype),
    E.isPureReactComponent = !0;
    var S = {
        current: null
    }
      , T = Object.prototype.hasOwnProperty
      , _ = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function C(e, t, n) {
        var r, i = {}, a = null, l = null;
        if (null != t)
            for (r in void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t)
                T.call(t, r) && !_.hasOwnProperty(r) && (i[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u)
            i.children = n;
        else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++)
                c[s] = arguments[s + 2];
            i.children = c
        }
        if (e && e.defaultProps)
            for (r in u = e.defaultProps)
                void 0 === i[r] && (i[r] = u[r]);
        return {
            $$typeof: o,
            type: e,
            key: a,
            ref: l,
            props: i,
            _owner: S.current
        }
    }
    function O(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }
    var P = /\/+/g
      , R = [];
    function A(e, t, n, r) {
        if (R.length) {
            var i = R.pop();
            return i.result = e,
            i.keyPrefix = t,
            i.func = n,
            i.context = r,
            i.count = 0,
            i
        }
        return {
            result: e,
            keyPrefix: t,
            func: n,
            context: r,
            count: 0
        }
    }
    function N(e) {
        e.result = null,
        e.keyPrefix = null,
        e.func = null,
        e.context = null,
        e.count = 0,
        10 > R.length && R.push(e)
    }
    function I(e, t, n) {
        return null == e ? 0 : function e(t, n, r, i) {
            var l = typeof t;
            "undefined" !== l && "boolean" !== l || (t = null);
            var u = !1;
            if (null === t)
                u = !0;
            else
                switch (l) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                    case o:
                    case a:
                        u = !0
                    }
                }
            if (u)
                return r(i, t, "" === n ? "." + L(t, 0) : n),
                1;
            if (u = 0,
            n = "" === n ? "." : n + ":",
            Array.isArray(t))
                for (var c = 0; c < t.length; c++) {
                    var s = n + L(l = t[c], c);
                    u += e(l, s, r, i)
                }
            else if (null === t || "object" != typeof t ? s = null : s = "function" == typeof (s = g && t[g] || t["@@iterator"]) ? s : null,
            "function" == typeof s)
                for (t = s.call(t),
                c = 0; !(l = t.next()).done; )
                    u += e(l = l.value, s = n + L(l, c++), r, i);
            else if ("object" === l)
                throw r = "" + t,
                Error(v(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, ""));
            return u
        }(e, "", t, n)
    }
    function L(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + e).replace(/[=:]/g, (function(e) {
                return t[e]
            }
            ))
        }(e.key) : t.toString(36)
    }
    function D(e, t) {
        e.func.call(e.context, t, e.count++)
    }
    function F(e, t, n) {
        var r = e.result
          , i = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++),
        Array.isArray(e) ? j(e, r, n, (function(e) {
            return e
        }
        )) : null != e && (O(e) && (e = function(e, t) {
            return {
                $$typeof: o,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(P, "$&/") + "/") + n)),
        r.push(e))
    }
    function j(e, t, n, r, i) {
        var o = "";
        null != n && (o = ("" + n).replace(P, "$&/") + "/"),
        I(e, F, t = A(t, o, r, i)),
        N(t)
    }
    var M = {
        current: null
    };
    function z() {
        var e = M.current;
        if (null === e)
            throw Error(v(321));
        return e
    }
    var B = {
        ReactCurrentDispatcher: M,
        ReactCurrentBatchConfig: {
            suspense: null
        },
        ReactCurrentOwner: S,
        IsSomeRendererActing: {
            current: !1
        },
        assign: r
    };
    t.Children = {
        map: function(e, t, n) {
            if (null == e)
                return e;
            var r = [];
            return j(e, r, null, t, n),
            r
        },
        forEach: function(e, t, n) {
            if (null == e)
                return e;
            I(e, D, t = A(null, null, t, n)),
            N(t)
        },
        count: function(e) {
            return I(e, (function() {
                return null
            }
            ), null)
        },
        toArray: function(e) {
            var t = [];
            return j(e, t, null, (function(e) {
                return e
            }
            )),
            t
        },
        only: function(e) {
            if (!O(e))
                throw Error(v(143));
            return e
        }
    },
    t.Component = w,
    t.Fragment = l,
    t.Profiler = c,
    t.PureComponent = x,
    t.StrictMode = u,
    t.Suspense = p,
    t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B,
    t.cloneElement = function(e, t, n) {
        if (null == e)
            throw Error(v(267, e));
        var i = r({}, e.props)
          , a = e.key
          , l = e.ref
          , u = e._owner;
        if (null != t) {
            if (void 0 !== t.ref && (l = t.ref,
            u = S.current),
            void 0 !== t.key && (a = "" + t.key),
            e.type && e.type.defaultProps)
                var c = e.type.defaultProps;
            for (s in t)
                T.call(t, s) && !_.hasOwnProperty(s) && (i[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s])
        }
        var s = arguments.length - 2;
        if (1 === s)
            i.children = n;
        else if (1 < s) {
            c = Array(s);
            for (var f = 0; f < s; f++)
                c[f] = arguments[f + 2];
            i.children = c
        }
        return {
            $$typeof: o,
            type: e.type,
            key: a,
            ref: l,
            props: i,
            _owner: u
        }
    }
    ,
    t.createContext = function(e, t) {
        return void 0 === t && (t = null),
        (e = {
            $$typeof: f,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = {
            $$typeof: s,
            _context: e
        },
        e.Consumer = e
    }
    ,
    t.createElement = C,
    t.createFactory = function(e) {
        var t = C.bind(null, e);
        return t.type = e,
        t
    }
    ,
    t.createRef = function() {
        return {
            current: null
        }
    }
    ,
    t.forwardRef = function(e) {
        return {
            $$typeof: d,
            render: e
        }
    }
    ,
    t.isValidElement = O,
    t.lazy = function(e) {
        return {
            $$typeof: h,
            _ctor: e,
            _status: -1,
            _result: null
        }
    }
    ,
    t.memo = function(e, t) {
        return {
            $$typeof: m,
            type: e,
            compare: void 0 === t ? null : t
        }
    }
    ,
    t.useCallback = function(e, t) {
        return z().useCallback(e, t)
    }
    ,
    t.useContext = function(e, t) {
        return z().useContext(e, t)
    }
    ,
    t.useDebugValue = function() {}
    ,
    t.useEffect = function(e, t) {
        return z().useEffect(e, t)
    }
    ,
    t.useImperativeHandle = function(e, t, n) {
        return z().useImperativeHandle(e, t, n)
    }
    ,
    t.useLayoutEffect = function(e, t) {
        return z().useLayoutEffect(e, t)
    }
    ,
    t.useMemo = function(e, t) {
        return z().useMemo(e, t)
    }
    ,
    t.useReducer = function(e, t, n) {
        return z().useReducer(e, t, n)
    }
    ,
    t.useRef = function(e) {
        return z().useRef(e)
    }
    ,
    t.useState = function(e) {
        return z().useState(e)
    }
    ,
    t.version = "16.13.0"
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , i = n(52)
      , o = n(83);
    function a(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    if (!r)
        throw Error(a(227));
    function l(e, t, n, r, i, o, a, l, u) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, c)
        } catch (s) {
            this.onError(s)
        }
    }
    var u = !1
      , c = null
      , s = !1
      , f = null
      , d = {
        onError: function(e) {
            u = !0,
            c = e
        }
    };
    function p(e, t, n, r, i, o, a, s, f) {
        u = !1,
        c = null,
        l.apply(d, arguments)
    }
    var m = null
      , h = null
      , g = null;
    function v(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = g(n),
        function(e, t, n, r, i, o, l, d, m) {
            if (p.apply(this, arguments),
            u) {
                if (!u)
                    throw Error(a(198));
                var h = c;
                u = !1,
                c = null,
                s || (s = !0,
                f = h)
            }
        }(r, t, void 0, e),
        e.currentTarget = null
    }
    var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    b.hasOwnProperty("ReactCurrentDispatcher") || (b.ReactCurrentDispatcher = {
        current: null
    }),
    b.hasOwnProperty("ReactCurrentBatchConfig") || (b.ReactCurrentBatchConfig = {
        suspense: null
    });
    var y = /^(.*)[\\\/]/
      , w = "function" == typeof Symbol && Symbol.for
      , k = w ? Symbol.for("react.element") : 60103
      , x = w ? Symbol.for("react.portal") : 60106
      , E = w ? Symbol.for("react.fragment") : 60107
      , S = w ? Symbol.for("react.strict_mode") : 60108
      , T = w ? Symbol.for("react.profiler") : 60114
      , _ = w ? Symbol.for("react.provider") : 60109
      , C = w ? Symbol.for("react.context") : 60110
      , O = w ? Symbol.for("react.concurrent_mode") : 60111
      , P = w ? Symbol.for("react.forward_ref") : 60112
      , R = w ? Symbol.for("react.suspense") : 60113
      , A = w ? Symbol.for("react.suspense_list") : 60120
      , N = w ? Symbol.for("react.memo") : 60115
      , I = w ? Symbol.for("react.lazy") : 60116
      , L = w ? Symbol.for("react.block") : 60121
      , D = "function" == typeof Symbol && Symbol.iterator;
    function F(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof (e = D && e[D] || e["@@iterator"]) ? e : null
    }
    function j(e) {
        if (null == e)
            return null;
        if ("function" == typeof e)
            return e.displayName || e.name || null;
        if ("string" == typeof e)
            return e;
        switch (e) {
        case E:
            return "Fragment";
        case x:
            return "Portal";
        case T:
            return "Profiler";
        case S:
            return "StrictMode";
        case R:
            return "Suspense";
        case A:
            return "SuspenseList"
        }
        if ("object" == typeof e)
            switch (e.$$typeof) {
            case C:
                return "Context.Consumer";
            case _:
                return "Context.Provider";
            case P:
                var t = e.render;
                return t = t.displayName || t.name || "",
                e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case N:
                return j(e.type);
            case L:
                return j(e.render);
            case I:
                if (e = 1 === e._status ? e._result : null)
                    return j(e)
            }
        return null
    }
    function M(e) {
        var t = "";
        do {
            e: switch (e.tag) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
                var n = "";
                break e;
            default:
                var r = e._debugOwner
                  , i = e._debugSource
                  , o = j(e.type);
                n = null,
                r && (n = j(r.type)),
                r = o,
                o = "",
                i ? o = " (at " + i.fileName.replace(y, "") + ":" + i.lineNumber + ")" : n && (o = " (created by " + n + ")"),
                n = "\n    in " + (r || "Unknown") + o
            }
            t += n,
            e = e.return
        } while (e);return t
    }
    var z = null
      , B = {};
    function U() {
        if (z)
            for (var e in B) {
                var t = B[e]
                  , n = z.indexOf(e);
                if (!(-1 < n))
                    throw Error(a(96, e));
                if (!$[n]) {
                    if (!t.extractEvents)
                        throw Error(a(97, e));
                    for (var r in $[n] = t,
                    n = t.eventTypes) {
                        var i = void 0
                          , o = n[r]
                          , l = t
                          , u = r;
                        if (G.hasOwnProperty(u))
                            throw Error(a(99, u));
                        G[u] = o;
                        var c = o.phasedRegistrationNames;
                        if (c) {
                            for (i in c)
                                c.hasOwnProperty(i) && q(c[i], l, u);
                            i = !0
                        } else
                            o.registrationName ? (q(o.registrationName, l, u),
                            i = !0) : i = !1;
                        if (!i)
                            throw Error(a(98, r, e))
                    }
                }
            }
    }
    function q(e, t, n) {
        if (H[e])
            throw Error(a(100, e));
        H[e] = t,
        W[e] = t.eventTypes[n].dependencies
    }
    var $ = []
      , G = {}
      , H = {}
      , W = {};
    function V(e) {
        var t, n = !1;
        for (t in e)
            if (e.hasOwnProperty(t)) {
                var r = e[t];
                if (!B.hasOwnProperty(t) || B[t] !== r) {
                    if (B[t])
                        throw Error(a(102, t));
                    B[t] = r,
                    n = !0
                }
            }
        n && U()
    }
    var K = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement)
      , Q = null
      , Y = null
      , X = null;
    function J(e) {
        if (e = h(e)) {
            if ("function" != typeof Q)
                throw Error(a(280));
            var t = e.stateNode;
            t && (t = m(t),
            Q(e.stateNode, e.type, t))
        }
    }
    function Z(e) {
        Y ? X ? X.push(e) : X = [e] : Y = e
    }
    function ee() {
        if (Y) {
            var e = Y
              , t = X;
            if (X = Y = null,
            J(e),
            t)
                for (e = 0; e < t.length; e++)
                    J(t[e])
        }
    }
    function te(e, t) {
        return e(t)
    }
    function ne(e, t, n, r, i) {
        return e(t, n, r, i)
    }
    function re() {}
    var ie = te
      , oe = !1
      , ae = !1;
    function le() {
        null === Y && null === X || (re(),
        ee())
    }
    function ue(e, t, n) {
        if (ae)
            return e(t, n);
        ae = !0;
        try {
            return ie(e, t, n)
        } finally {
            ae = !1,
            le()
        }
    }
    var ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , se = Object.prototype.hasOwnProperty
      , fe = {}
      , de = {};
    function pe(e, t, n, r, i, o) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
        this.attributeName = r,
        this.attributeNamespace = i,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = o
    }
    var me = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
        me[e] = new pe(e,0,!1,e,null,!1)
    }
    )),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
        var t = e[0];
        me[t] = new pe(t,1,!1,e[1],null,!1)
    }
    )),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
        me[e] = new pe(e,2,!1,e.toLowerCase(),null,!1)
    }
    )),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
        me[e] = new pe(e,2,!1,e,null,!1)
    }
    )),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
        me[e] = new pe(e,3,!1,e.toLowerCase(),null,!1)
    }
    )),
    ["checked", "multiple", "muted", "selected"].forEach((function(e) {
        me[e] = new pe(e,3,!0,e,null,!1)
    }
    )),
    ["capture", "download"].forEach((function(e) {
        me[e] = new pe(e,4,!1,e,null,!1)
    }
    )),
    ["cols", "rows", "size", "span"].forEach((function(e) {
        me[e] = new pe(e,6,!1,e,null,!1)
    }
    )),
    ["rowSpan", "start"].forEach((function(e) {
        me[e] = new pe(e,5,!1,e.toLowerCase(),null,!1)
    }
    ));
    var he = /[\-:]([a-z])/g;
    function ge(e) {
        return e[1].toUpperCase()
    }
    function ve(e, t, n, r) {
        var i = me.hasOwnProperty(t) ? me[t] : null;
        (null !== i ? 0 === i.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
            if (null == t || function(e, t, n, r) {
                if (null !== n && 0 === n.type)
                    return !1;
                switch (typeof t) {
                case "function":
                case "symbol":
                    return !0;
                case "boolean":
                    return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                default:
                    return !1
                }
            }(e, t, n, r))
                return !0;
            if (r)
                return !1;
            if (null !== n)
                switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
                }
            return !1
        }(t, n, i, r) && (n = null),
        r || null === i ? function(e) {
            return !!se.call(de, e) || !se.call(fe, e) && (ce.test(e) ? de[e] = !0 : (fe[e] = !0,
            !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName,
        r = i.attributeNamespace,
        null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n,
        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    function be(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
            return e;
        default:
            return ""
        }
    }
    function ye(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }
    function we(e) {
        e._valueTracker || (e._valueTracker = function(e) {
            var t = ye(e) ? "checked" : "value"
              , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
              , r = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var i = n.get
                  , o = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return i.call(this)
                    },
                    set: function(e) {
                        r = "" + e,
                        o.call(this, e)
                    }
                }),
                Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }),
                {
                    getValue: function() {
                        return r
                    },
                    setValue: function(e) {
                        r = "" + e
                    },
                    stopTracking: function() {
                        e._valueTracker = null,
                        delete e[t]
                    }
                }
            }
        }(e))
    }
    function ke(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , r = "";
        return e && (r = ye(e) ? e.checked ? "true" : "false" : e.value),
        (e = r) !== n && (t.setValue(e),
        !0)
    }
    function xe(e, t) {
        var n = t.checked;
        return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }
    function Ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue
          , r = null != t.checked ? t.checked : t.defaultChecked;
        n = be(null != t.value ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }
    function Se(e, t) {
        null != (t = t.checked) && ve(e, "checked", t, !1)
    }
    function Te(e, t) {
        Se(e, t);
        var n = be(t.value)
          , r = t.type;
        if (null != n)
            "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? Ce(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ce(e, t.type, be(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }
    function _e(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                return;
            t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        "" !== n && (e.name = n)
    }
    function Ce(e, t, n) {
        "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    function Oe(e, t) {
        return e = i({
            children: void 0
        }, t),
        (t = function(e) {
            var t = "";
            return r.Children.forEach(e, (function(e) {
                null != e && (t += e)
            }
            )),
            t
        }(t.children)) && (e.children = t),
        e
    }
    function Pe(e, t, n, r) {
        if (e = e.options,
        t) {
            t = {};
            for (var i = 0; i < n.length; i++)
                t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                i = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + be(n),
            t = null,
            i = 0; i < e.length; i++) {
                if (e[i].value === n)
                    return e[i].selected = !0,
                    void (r && (e[i].defaultSelected = !0));
                null !== t || e[i].disabled || (t = e[i])
            }
            null !== t && (t.selected = !0)
        }
    }
    function Re(e, t) {
        if (null != t.dangerouslySetInnerHTML)
            throw Error(a(91));
        return i({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function Ae(e, t) {
        var n = t.value;
        if (null == n) {
            if (n = t.children,
            t = t.defaultValue,
            null != n) {
                if (null != t)
                    throw Error(a(92));
                if (Array.isArray(n)) {
                    if (!(1 >= n.length))
                        throw Error(a(93));
                    n = n[0]
                }
                t = n
            }
            null == t && (t = ""),
            n = t
        }
        e._wrapperState = {
            initialValue: be(n)
        }
    }
    function Ne(e, t) {
        var n = be(t.value)
          , r = be(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = "" + r)
    }
    function Ie(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
        var t = e.replace(he, ge);
        me[t] = new pe(t,1,!1,e,null,!1)
    }
    )),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
        var t = e.replace(he, ge);
        me[t] = new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)
    }
    )),
    ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
        var t = e.replace(he, ge);
        me[t] = new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)
    }
    )),
    ["tabIndex", "crossOrigin"].forEach((function(e) {
        me[e] = new pe(e,1,!1,e.toLowerCase(),null,!1)
    }
    )),
    me.xlinkHref = new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),
    ["src", "href", "action", "formAction"].forEach((function(e) {
        me[e] = new pe(e,1,!1,e.toLowerCase(),null,!0)
    }
    ));
    var Le = "http://www.w3.org/1999/xhtml"
      , De = "http://www.w3.org/2000/svg";
    function Fe(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function je(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? Fe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }
    var Me, ze = function(e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
            MSApp.execUnsafeLocalFunction((function() {
                return e(t, n)
            }
            ))
        }
        : e
    }((function(e, t) {
        if (e.namespaceURI !== De || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for ((Me = Me || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Me.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    }
    ));
    function Be(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t)
        }
        e.textContent = t
    }
    function Ue(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var qe = {
        animationend: Ue("Animation", "AnimationEnd"),
        animationiteration: Ue("Animation", "AnimationIteration"),
        animationstart: Ue("Animation", "AnimationStart"),
        transitionend: Ue("Transition", "TransitionEnd")
    }
      , $e = {}
      , Ge = {};
    function He(e) {
        if ($e[e])
            return $e[e];
        if (!qe[e])
            return e;
        var t, n = qe[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in Ge)
                return $e[e] = n[t];
        return e
    }
    K && (Ge = document.createElement("div").style,
    "AnimationEvent"in window || (delete qe.animationend.animation,
    delete qe.animationiteration.animation,
    delete qe.animationstart.animation),
    "TransitionEvent"in window || delete qe.transitionend.transition);
    var We = He("animationend")
      , Ve = He("animationiteration")
      , Ke = He("animationstart")
      , Qe = He("transitionend")
      , Ye = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Xe = new ("function" == typeof WeakMap ? WeakMap : Map);
    function Je(e) {
        var t = Xe.get(e);
        return void 0 === t && (t = new Map,
        Xe.set(e, t)),
        t
    }
    function Ze(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do {
                0 != (1026 & (t = e).effectTag) && (n = t.return),
                e = t.return
            } while (e)
        }
        return 3 === t.tag ? n : null
    }
    function et(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)),
            null !== t)
                return t.dehydrated
        }
        return null
    }
    function tt(e) {
        if (Ze(e) !== e)
            throw Error(a(188))
    }
    function nt(e) {
        if (!(e = function(e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = Ze(e)))
                    throw Error(a(188));
                return t !== e ? null : e
            }
            for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i)
                    break;
                var o = i.alternate;
                if (null === o) {
                    if (null !== (r = i.return)) {
                        n = r;
                        continue
                    }
                    break
                }
                if (i.child === o.child) {
                    for (o = i.child; o; ) {
                        if (o === n)
                            return tt(i),
                            e;
                        if (o === r)
                            return tt(i),
                            t;
                        o = o.sibling
                    }
                    throw Error(a(188))
                }
                if (n.return !== r.return)
                    n = i,
                    r = o;
                else {
                    for (var l = !1, u = i.child; u; ) {
                        if (u === n) {
                            l = !0,
                            n = i,
                            r = o;
                            break
                        }
                        if (u === r) {
                            l = !0,
                            r = i,
                            n = o;
                            break
                        }
                        u = u.sibling
                    }
                    if (!l) {
                        for (u = o.child; u; ) {
                            if (u === n) {
                                l = !0,
                                n = o,
                                r = i;
                                break
                            }
                            if (u === r) {
                                l = !0,
                                r = o,
                                n = i;
                                break
                            }
                            u = u.sibling
                        }
                        if (!l)
                            throw Error(a(189))
                    }
                }
                if (n.alternate !== r)
                    throw Error(a(190))
            }
            if (3 !== n.tag)
                throw Error(a(188));
            return n.stateNode.current === n ? e : t
        }(e)))
            return null;
        for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag)
                return t;
            if (t.child)
                t.child.return = t,
                t = t.child;
            else {
                if (t === e)
                    break;
                for (; !t.sibling; ) {
                    if (!t.return || t.return === e)
                        return null;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return null
    }
    function rt(e, t) {
        if (null == t)
            throw Error(a(30));
        return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t),
        e) : (e.push(t),
        e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }
    function it(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }
    var ot = null;
    function at(e) {
        if (e) {
            var t = e._dispatchListeners
              , n = e._dispatchInstances;
            if (Array.isArray(t))
                for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                    v(e, t[r], n[r]);
            else
                t && v(e, t, n);
            e._dispatchListeners = null,
            e._dispatchInstances = null,
            e.isPersistent() || e.constructor.release(e)
        }
    }
    function lt(e) {
        if (null !== e && (ot = rt(ot, e)),
        e = ot,
        ot = null,
        e) {
            if (it(e, at),
            ot)
                throw Error(a(95));
            if (s)
                throw e = f,
                s = !1,
                f = null,
                e
        }
    }
    function ut(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    }
    function ct(e) {
        if (!K)
            return !1;
        var t = (e = "on" + e)in document;
        return t || ((t = document.createElement("div")).setAttribute(e, "return;"),
        t = "function" == typeof t[e]),
        t
    }
    var st = [];
    function ft(e) {
        e.topLevelType = null,
        e.nativeEvent = null,
        e.targetInst = null,
        e.ancestors.length = 0,
        10 > st.length && st.push(e)
    }
    function dt(e, t, n, r) {
        if (st.length) {
            var i = st.pop();
            return i.topLevelType = e,
            i.eventSystemFlags = r,
            i.nativeEvent = t,
            i.targetInst = n,
            i
        }
        return {
            topLevelType: e,
            eventSystemFlags: r,
            nativeEvent: t,
            targetInst: n,
            ancestors: []
        }
    }
    function pt(e) {
        var t = e.targetInst
          , n = t;
        do {
            if (!n) {
                e.ancestors.push(n);
                break
            }
            var r = n;
            if (3 === r.tag)
                r = r.stateNode.containerInfo;
            else {
                for (; r.return; )
                    r = r.return;
                r = 3 !== r.tag ? null : r.stateNode.containerInfo
            }
            if (!r)
                break;
            5 !== (t = n.tag) && 6 !== t || e.ancestors.push(n),
            n = Cn(r)
        } while (n);for (n = 0; n < e.ancestors.length; n++) {
            t = e.ancestors[n];
            var i = ut(e.nativeEvent);
            r = e.topLevelType;
            var o = e.nativeEvent
              , a = e.eventSystemFlags;
            0 === n && (a |= 64);
            for (var l = null, u = 0; u < $.length; u++) {
                var c = $[u];
                c && (c = c.extractEvents(r, t, o, i, a)) && (l = rt(l, c))
            }
            lt(l)
        }
    }
    function mt(e, t, n) {
        if (!n.has(e)) {
            switch (e) {
            case "scroll":
                Kt(t, "scroll", !0);
                break;
            case "focus":
            case "blur":
                Kt(t, "focus", !0),
                Kt(t, "blur", !0),
                n.set("blur", null),
                n.set("focus", null);
                break;
            case "cancel":
            case "close":
                ct(e) && Kt(t, e, !0);
                break;
            case "invalid":
            case "submit":
            case "reset":
                break;
            default:
                -1 === Ye.indexOf(e) && Vt(e, t)
            }
            n.set(e, null)
        }
    }
    var ht, gt, vt, bt = !1, yt = [], wt = null, kt = null, xt = null, Et = new Map, St = new Map, Tt = [], _t = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "), Ct = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
    function Ot(e, t, n, r, i) {
        return {
            blockedOn: e,
            topLevelType: t,
            eventSystemFlags: 32 | n,
            nativeEvent: i,
            container: r
        }
    }
    function Pt(e, t) {
        switch (e) {
        case "focus":
        case "blur":
            wt = null;
            break;
        case "dragenter":
        case "dragleave":
            kt = null;
            break;
        case "mouseover":
        case "mouseout":
            xt = null;
            break;
        case "pointerover":
        case "pointerout":
            Et.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            St.delete(t.pointerId)
        }
    }
    function Rt(e, t, n, r, i, o) {
        return null === e || e.nativeEvent !== o ? (e = Ot(t, n, r, i, o),
        null !== t && (null !== (t = On(t)) && gt(t)),
        e) : (e.eventSystemFlags |= r,
        e)
    }
    function At(e) {
        var t = Cn(e.target);
        if (null !== t) {
            var n = Ze(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = et(n)))
                        return e.blockedOn = t,
                        void o.unstable_runWithPriority(e.priority, (function() {
                            vt(n)
                        }
                        ))
                } else if (3 === t && n.stateNode.hydrate)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
    }
    function Nt(e) {
        if (null !== e.blockedOn)
            return !1;
        var t = Jt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
        if (null !== t) {
            var n = On(t);
            return null !== n && gt(n),
            e.blockedOn = t,
            !1
        }
        return !0
    }
    function It(e, t, n) {
        Nt(e) && n.delete(t)
    }
    function Lt() {
        for (bt = !1; 0 < yt.length; ) {
            var e = yt[0];
            if (null !== e.blockedOn) {
                null !== (e = On(e.blockedOn)) && ht(e);
                break
            }
            var t = Jt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
            null !== t ? e.blockedOn = t : yt.shift()
        }
        null !== wt && Nt(wt) && (wt = null),
        null !== kt && Nt(kt) && (kt = null),
        null !== xt && Nt(xt) && (xt = null),
        Et.forEach(It),
        St.forEach(It)
    }
    function Dt(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        bt || (bt = !0,
        o.unstable_scheduleCallback(o.unstable_NormalPriority, Lt)))
    }
    function Ft(e) {
        function t(t) {
            return Dt(t, e)
        }
        if (0 < yt.length) {
            Dt(yt[0], e);
            for (var n = 1; n < yt.length; n++) {
                var r = yt[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (null !== wt && Dt(wt, e),
        null !== kt && Dt(kt, e),
        null !== xt && Dt(xt, e),
        Et.forEach(t),
        St.forEach(t),
        n = 0; n < Tt.length; n++)
            (r = Tt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn; )
            At(n),
            null === n.blockedOn && Tt.shift()
    }
    var jt = {}
      , Mt = new Map
      , zt = new Map
      , Bt = ["abort", "abort", We, "animationEnd", Ve, "animationIteration", Ke, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Qe, "transitionEnd", "waiting", "waiting"];
    function Ut(e, t) {
        for (var n = 0; n < e.length; n += 2) {
            var r = e[n]
              , i = e[n + 1]
              , o = "on" + (i[0].toUpperCase() + i.slice(1));
            o = {
                phasedRegistrationNames: {
                    bubbled: o,
                    captured: o + "Capture"
                },
                dependencies: [r],
                eventPriority: t
            },
            zt.set(r, t),
            Mt.set(r, o),
            jt[i] = o
        }
    }
    Ut("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0),
    Ut("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1),
    Ut(Bt, 2);
    for (var qt = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), $t = 0; $t < qt.length; $t++)
        zt.set(qt[$t], 0);
    var Gt = o.unstable_UserBlockingPriority
      , Ht = o.unstable_runWithPriority
      , Wt = !0;
    function Vt(e, t) {
        Kt(t, e, !1)
    }
    function Kt(e, t, n) {
        var r = zt.get(t);
        switch (void 0 === r ? 2 : r) {
        case 0:
            r = Qt.bind(null, t, 1, e);
            break;
        case 1:
            r = Yt.bind(null, t, 1, e);
            break;
        default:
            r = Xt.bind(null, t, 1, e)
        }
        n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1)
    }
    function Qt(e, t, n, r) {
        console.log('Qt(e, t, n, r)', e, t, n, r);
        oe || re();
        var i = Xt
          , o = oe;
        oe = !0;
        try {
            ne(i, e, t, n, r)
        } finally {
            (oe = o) || le()
        }
    }
    function Yt(e, t, n, r) {
        Ht(Gt, Xt.bind(null, e, t, n, r))
    }
    function Xt(e, t, n, r) {
        if (Wt)
            if (0 < yt.length && -1 < _t.indexOf(e))
                e = Ot(null, e, t, n, r),
                yt.push(e);
            else {
                var i = Jt(e, t, n, r);
                if (null === i)
                    Pt(e, r);
                else if (-1 < _t.indexOf(e))
                    e = Ot(i, e, t, n, r),
                    yt.push(e);
                else if (!function(e, t, n, r, i) {
                    switch (t) {
                    case "focus":
                        return wt = Rt(wt, e, t, n, r, i),
                        !0;
                    case "dragenter":
                        return kt = Rt(kt, e, t, n, r, i),
                        !0;
                    case "mouseover":
                        return xt = Rt(xt, e, t, n, r, i),
                        !0;
                    case "pointerover":
                        var o = i.pointerId;
                        return Et.set(o, Rt(Et.get(o) || null, e, t, n, r, i)),
                        !0;
                    case "gotpointercapture":
                        return o = i.pointerId,
                        St.set(o, Rt(St.get(o) || null, e, t, n, r, i)),
                        !0
                    }
                    return !1
                }(i, e, t, n, r)) {
                    Pt(e, r),
                    e = dt(e, r, null, t);
                    try {
                        ue(pt, e)
                    } finally {
                        ft(e)
                    }
                }
            }
    }
    function Jt(e, t, n, r) {
        if (null !== (n = Cn(n = ut(r)))) {
            var i = Ze(n);
            if (null === i)
                n = null;
            else {
                var o = i.tag;
                if (13 === o) {
                    if (null !== (n = et(i)))
                        return n;
                    n = null
                } else if (3 === o) {
                    if (i.stateNode.hydrate)
                        return 3 === i.tag ? i.stateNode.containerInfo : null;
                    n = null
                } else
                    i !== n && (n = null)
            }
        }
        e = dt(e, r, n, t);
        try {
            ue(pt, e)
        } finally {
            ft(e)
        }
        return null
    }
    var Zt = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , en = ["Webkit", "ms", "Moz", "O"];
    function tn(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || Zt.hasOwnProperty(e) && Zt[e] ? ("" + t).trim() : t + "px"
    }
    function nn(e, t) {
        for (var n in e = e.style,
        t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--")
                  , i = tn(n, t[n], r);
                "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : e[n] = i
            }
    }
    Object.keys(Zt).forEach((function(e) {
        en.forEach((function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Zt[t] = Zt[e]
        }
        ))
    }
    ));
    var rn = i({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function on(e, t) {
        if (t) {
            if (rn[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                throw Error(a(137, e, ""));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children)
                    throw Error(a(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(a(61))
            }
            if (null != t.style && "object" != typeof t.style)
                throw Error(a(62, ""))
        }
    }
    function an(e, t) {
        if (-1 === e.indexOf("-"))
            return "string" == typeof t.is;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var ln = Le;
    function un(e, t) {
        var n = Je(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = W[t];
        for (var r = 0; r < t.length; r++)
            mt(t[r], e, n)
    }
    function cn() {}
    function sn(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
            return null;
        try {
            return e.activeElement || e.body
        } catch (Wu) {
            return e.body
        }
    }
    function fn(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function dn(e, t) {
        var n, r = fn(e);
        for (e = 0; r; ) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length,
                e <= t && n >= t)
                    return {
                        node: r,
                        offset: t - e
                    };
                e = n
            }
            e: {
                for (; r; ) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = fn(r)
        }
    }
    function pn() {
        for (var e = window, t = sn(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = "string" == typeof t.contentWindow.location.href
            } catch (r) {
                n = !1
            }
            if (!n)
                break;
            t = sn((e = t.contentWindow).document)
        }
        return t
    }
    function mn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    var hn = null
      , gn = null;
    function vn(e, t) {
        switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
            return !!t.autoFocus
        }
        return !1
    }
    function bn(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var yn = "function" == typeof setTimeout ? setTimeout : void 0
      , wn = "function" == typeof clearTimeout ? clearTimeout : void 0;
    function kn(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break
        }
        return e
    }
    function xn(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--
                } else
                    "/$" === n && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var En = Math.random().toString(36).slice(2)
      , Sn = "__reactInternalInstance$" + En
      , Tn = "__reactEventHandlers$" + En
      , _n = "__reactContainere$" + En;
    function Cn(e) {
        var t = e[Sn];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[_n] || n[Sn]) {
                if (n = t.alternate,
                null !== t.child || null !== n && null !== n.child)
                    for (e = xn(e); null !== e; ) {
                        if (n = e[Sn])
                            return n;
                        e = xn(e)
                    }
                return t
            }
            n = (e = n).parentNode
        }
        return null
    }
    function On(e) {
        return !(e = e[Sn] || e[_n]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
    }
    function Pn(e) {
        if (5 === e.tag || 6 === e.tag)
            return e.stateNode;
        throw Error(a(33))
    }
    function Rn(e) {
        return e[Tn] || null
    }
    function An(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);return e || null
    }
    function Nn(e, t) {
        var n = e.stateNode;
        if (!n)
            return null;
        var r = m(n);
        if (!r)
            return null;
        n = r[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
            e = !r;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && "function" != typeof n)
            throw Error(a(231, t, typeof n));
        return n
    }
    function In(e, t, n) {
        (t = Nn(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = rt(n._dispatchListeners, t),
        n._dispatchInstances = rt(n._dispatchInstances, e))
    }
    function Ln(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t; )
                n.push(t),
                t = An(t);
            for (t = n.length; 0 < t--; )
                In(n[t], "captured", e);
            for (t = 0; t < n.length; t++)
                In(n[t], "bubbled", e)
        }
    }
    function Dn(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = Nn(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = rt(n._dispatchListeners, t),
        n._dispatchInstances = rt(n._dispatchInstances, e))
    }
    function Fn(e) {
        e && e.dispatchConfig.registrationName && Dn(e._targetInst, null, e)
    }
    function jn(e) {
        it(e, Ln)
    }
    var Mn = null
      , zn = null
      , Bn = null;
    function Un() {
        if (Bn)
            return Bn;
        var e, t, n = zn, r = n.length, i = "value"in Mn ? Mn.value : Mn.textContent, o = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++)
            ;
        var a = r - e;
        for (t = 1; t <= a && n[r - t] === i[o - t]; t++)
            ;
        return Bn = i.slice(e, 1 < t ? 1 - t : void 0)
    }
    function qn() {
        return !0
    }
    function $n() {
        return !1
    }
    function Gn(e, t, n, r) {
        for (var i in this.dispatchConfig = e,
        this._targetInst = t,
        this.nativeEvent = n,
        e = this.constructor.Interface)
            e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(n) : "target" === i ? this.target = r : this[i] = n[i]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? qn : $n,
        this.isPropagationStopped = $n,
        this
    }
    function Hn(e, t, n, r) {
        if (this.eventPool.length) {
            var i = this.eventPool.pop();
            return this.call(i, e, t, n, r),
            i
        }
        return new this(e,t,n,r)
    }
    function Wn(e) {
        if (!(e instanceof this))
            throw Error(a(279));
        e.destructor(),
        10 > this.eventPool.length && this.eventPool.push(e)
    }
    function Vn(e) {
        e.eventPool = [],
        e.getPooled = Hn,
        e.release = Wn
    }
    i(Gn.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            this.isDefaultPrevented = qn)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            this.isPropagationStopped = qn)
        },
        persist: function() {
            this.isPersistent = qn
        },
        isPersistent: $n,
        destructor: function() {
            var e, t = this.constructor.Interface;
            for (e in t)
                this[e] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null,
            this.isPropagationStopped = this.isDefaultPrevented = $n,
            this._dispatchInstances = this._dispatchListeners = null
        }
    }),
    Gn.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
            return null
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    },
    Gn.extend = function(e) {
        function t() {}
        function n() {
            return r.apply(this, arguments)
        }
        var r = this;
        t.prototype = r.prototype;
        var o = new t;
        return i(o, n.prototype),
        n.prototype = o,
        n.prototype.constructor = n,
        n.Interface = i({}, r.Interface, e),
        n.extend = r.extend,
        Vn(n),
        n
    }
    ,
    Vn(Gn);
    var Kn = Gn.extend({
        data: null
    })
      , Qn = Gn.extend({
        data: null
    })
      , Yn = [9, 13, 27, 32]
      , Xn = K && "CompositionEvent"in window
      , Jn = null;
    K && "documentMode"in document && (Jn = document.documentMode);
    var Zn = K && "TextEvent"in window && !Jn
      , er = K && (!Xn || Jn && 8 < Jn && 11 >= Jn)
      , tr = String.fromCharCode(32)
      , nr = {
        beforeInput: {
            phasedRegistrationNames: {
                bubbled: "onBeforeInput",
                captured: "onBeforeInputCapture"
            },
            dependencies: ["compositionend", "keypress", "textInput", "paste"]
        },
        compositionEnd: {
            phasedRegistrationNames: {
                bubbled: "onCompositionEnd",
                captured: "onCompositionEndCapture"
            },
            dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
        },
        compositionStart: {
            phasedRegistrationNames: {
                bubbled: "onCompositionStart",
                captured: "onCompositionStartCapture"
            },
            dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
        },
        compositionUpdate: {
            phasedRegistrationNames: {
                bubbled: "onCompositionUpdate",
                captured: "onCompositionUpdateCapture"
            },
            dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
        }
    }
      , rr = !1;
    function ir(e, t) {
        switch (e) {
        case "keyup":
            return -1 !== Yn.indexOf(t.keyCode);
        case "keydown":
            return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "blur":
            return !0;
        default:
            return !1
        }
    }
    function or(e) {
        return "object" == typeof (e = e.detail) && "data"in e ? e.data : null
    }
    var ar = !1;
    var lr = {
        eventTypes: nr,
        extractEvents: function(e, t, n, r) {
            var i;
            if (Xn)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var o = nr.compositionStart;
                        break e;
                    case "compositionend":
                        o = nr.compositionEnd;
                        break e;
                    case "compositionupdate":
                        o = nr.compositionUpdate;
                        break e
                    }
                    o = void 0
                }
            else
                ar ? ir(e, n) && (o = nr.compositionEnd) : "keydown" === e && 229 === n.keyCode && (o = nr.compositionStart);
            return o ? (er && "ko" !== n.locale && (ar || o !== nr.compositionStart ? o === nr.compositionEnd && ar && (i = Un()) : (zn = "value"in (Mn = r) ? Mn.value : Mn.textContent,
            ar = !0)),
            o = Kn.getPooled(o, t, n, r),
            i ? o.data = i : null !== (i = or(n)) && (o.data = i),
            jn(o),
            i = o) : i = null,
            (e = Zn ? function(e, t) {
                switch (e) {
                case "compositionend":
                    return or(t);
                case "keypress":
                    return 32 !== t.which ? null : (rr = !0,
                    tr);
                case "textInput":
                    return (e = t.data) === tr && rr ? null : e;
                default:
                    return null
                }
            }(e, n) : function(e, t) {
                if (ar)
                    return "compositionend" === e || !Xn && ir(e, t) ? (e = Un(),
                    Bn = zn = Mn = null,
                    ar = !1,
                    e) : null;
                switch (e) {
                case "paste":
                    return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which)
                    }
                    return null;
                case "compositionend":
                    return er && "ko" !== t.locale ? null : t.data;
                default:
                    return null
                }
            }(e, n)) ? ((t = Qn.getPooled(nr.beforeInput, t, n, r)).data = e,
            jn(t)) : t = null,
            null === i ? t : null === t ? i : [i, t]
        }
    }
      , ur = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function cr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!ur[e.type] : "textarea" === t
    }
    var sr = {
        change: {
            phasedRegistrationNames: {
                bubbled: "onChange",
                captured: "onChangeCapture"
            },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };
    function fr(e, t, n) {
        return (e = Gn.getPooled(sr.change, e, t, n)).type = "change",
        Z(n),
        jn(e),
        e
    }
    var dr = null
      , pr = null;
    function mr(e) {
        lt(e)
    }
    function hr(e) {
        if (ke(Pn(e)))
            return e
    }
    function gr(e, t) {
        if ("change" === e)
            return t
    }
    var vr = !1;
    function br() {
        dr && (dr.detachEvent("onpropertychange", yr),
        pr = dr = null)
    }
    function yr(e) {
        if ("value" === e.propertyName && hr(pr))
            if (e = fr(pr, e, ut(e)),
            oe)
                lt(e);
            else {
                oe = !0;
                try {
                    te(mr, e)
                } finally {
                    oe = !1,
                    le()
                }
            }
    }
    function wr(e, t, n) {
        "focus" === e ? (br(),
        pr = n,
        (dr = t).attachEvent("onpropertychange", yr)) : "blur" === e && br()
    }
    function kr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return hr(pr)
    }
    function xr(e, t) {
        if ("click" === e)
            return hr(t)
    }
    function Er(e, t) {
        if ("input" === e || "change" === e)
            return hr(t)
    }
    K && (vr = ct("input") && (!document.documentMode || 9 < document.documentMode));
    var Sr = {
        eventTypes: sr,
        _isInputEventSupported: vr,
        extractEvents: function(e, t, n, r) {
            var i = t ? Pn(t) : window
              , o = i.nodeName && i.nodeName.toLowerCase();
            if ("select" === o || "input" === o && "file" === i.type)
                var a = gr;
            else if (cr(i))
                if (vr)
                    a = Er;
                else {
                    a = kr;
                    var l = wr
                }
            else
                (o = i.nodeName) && "input" === o.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (a = xr);
            if (a && (a = a(e, t)))
                return fr(a, n, r);
            l && l(e, i, t),
            "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && Ce(i, "number", i.value)
        }
    }
      , Tr = Gn.extend({
        view: null,
        detail: null
    })
      , _r = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Cr(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = _r[e]) && !!t[e]
    }
    function Or() {
        return Cr
    }
    var Pr = 0
      , Rr = 0
      , Ar = !1
      , Nr = !1
      , Ir = Tr.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: Or,
        button: null,
        buttons: null,
        relatedTarget: function(e) {
            return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
        },
        movementX: function(e) {
            if ("movementX"in e)
                return e.movementX;
            var t = Pr;
            return Pr = e.screenX,
            Ar ? "mousemove" === e.type ? e.screenX - t : 0 : (Ar = !0,
            0)
        },
        movementY: function(e) {
            if ("movementY"in e)
                return e.movementY;
            var t = Rr;
            return Rr = e.screenY,
            Nr ? "mousemove" === e.type ? e.screenY - t : 0 : (Nr = !0,
            0)
        }
    })
      , Lr = Ir.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null
    })
      , Dr = {
        mouseEnter: {
            registrationName: "onMouseEnter",
            dependencies: ["mouseout", "mouseover"]
        },
        mouseLeave: {
            registrationName: "onMouseLeave",
            dependencies: ["mouseout", "mouseover"]
        },
        pointerEnter: {
            registrationName: "onPointerEnter",
            dependencies: ["pointerout", "pointerover"]
        },
        pointerLeave: {
            registrationName: "onPointerLeave",
            dependencies: ["pointerout", "pointerover"]
        }
    }
      , Fr = {
        eventTypes: Dr,
        extractEvents: function(e, t, n, r, i) {
            var o = "mouseover" === e || "pointerover" === e
              , a = "mouseout" === e || "pointerout" === e;
            if (o && 0 == (32 & i) && (n.relatedTarget || n.fromElement) || !a && !o)
                return null;
            (o = r.window === r ? r : (o = r.ownerDocument) ? o.defaultView || o.parentWindow : window,
            a) ? (a = t,
            null !== (t = (t = n.relatedTarget || n.toElement) ? Cn(t) : null) && (t !== Ze(t) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : a = null;
            if (a === t)
                return null;
            if ("mouseout" === e || "mouseover" === e)
                var l = Ir
                  , u = Dr.mouseLeave
                  , c = Dr.mouseEnter
                  , s = "mouse";
            else
                "pointerout" !== e && "pointerover" !== e || (l = Lr,
                u = Dr.pointerLeave,
                c = Dr.pointerEnter,
                s = "pointer");
            if (e = null == a ? o : Pn(a),
            o = null == t ? o : Pn(t),
            (u = l.getPooled(u, a, n, r)).type = s + "leave",
            u.target = e,
            u.relatedTarget = o,
            (n = l.getPooled(c, t, n, r)).type = s + "enter",
            n.target = o,
            n.relatedTarget = e,
            s = t,
            (r = a) && s)
                e: {
                    for (c = s,
                    a = 0,
                    e = l = r; e; e = An(e))
                        a++;
                    for (e = 0,
                    t = c; t; t = An(t))
                        e++;
                    for (; 0 < a - e; )
                        l = An(l),
                        a--;
                    for (; 0 < e - a; )
                        c = An(c),
                        e--;
                    for (; a--; ) {
                        if (l === c || l === c.alternate)
                            break e;
                        l = An(l),
                        c = An(c)
                    }
                    l = null
                }
            else
                l = null;
            for (c = l,
            l = []; r && r !== c && (null === (a = r.alternate) || a !== c); )
                l.push(r),
                r = An(r);
            for (r = []; s && s !== c && (null === (a = s.alternate) || a !== c); )
                r.push(s),
                s = An(s);
            for (s = 0; s < l.length; s++)
                Dn(l[s], "bubbled", u);
            for (s = r.length; 0 < s--; )
                Dn(r[s], "captured", n);
            return 0 == (64 & i) ? [u] : [u, n]
        }
    };
    var jr = "function" == typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    }
      , Mr = Object.prototype.hasOwnProperty;
    function zr(e, t) {
        if (jr(e, t))
            return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1;
        var n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (r = 0; r < n.length; r++)
            if (!Mr.call(t, n[r]) || !jr(e[n[r]], t[n[r]]))
                return !1;
        return !0
    }
    var Br = K && "documentMode"in document && 11 >= document.documentMode
      , Ur = {
        select: {
            phasedRegistrationNames: {
                bubbled: "onSelect",
                captured: "onSelectCapture"
            },
            dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
        }
    }
      , qr = null
      , $r = null
      , Gr = null
      , Hr = !1;
    function Wr(e, t) {
        var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return Hr || null == qr || qr !== sn(n) ? null : ("selectionStart"in (n = qr) && mn(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : n = {
            anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        },
        Gr && zr(Gr, n) ? null : (Gr = n,
        (e = Gn.getPooled(Ur.select, $r, e, t)).type = "select",
        e.target = qr,
        jn(e),
        e))
    }
    var Vr = {
        eventTypes: Ur,
        extractEvents: function(e, t, n, r, i, o) {
            if (!(o = !(i = o || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
                e: {
                    i = Je(i),
                    o = W.onSelect;
                    for (var a = 0; a < o.length; a++)
                        if (!i.has(o[a])) {
                            i = !1;
                            break e
                        }
                    i = !0
                }
                o = !i
            }
            if (o)
                return null;
            switch (i = t ? Pn(t) : window,
            e) {
            case "focus":
                (cr(i) || "true" === i.contentEditable) && (qr = i,
                $r = t,
                Gr = null);
                break;
            case "blur":
                Gr = $r = qr = null;
                break;
            case "mousedown":
                Hr = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                return Hr = !1,
                Wr(n, r);
            case "selectionchange":
                if (Br)
                    break;
            case "keydown":
            case "keyup":
                return Wr(n, r)
            }
            return null
        }
    }
      , Kr = Gn.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
    })
      , Qr = Gn.extend({
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    })
      , Yr = Tr.extend({
        relatedTarget: null
    });
    function Xr(e) {
        var t = e.keyCode;
        return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
    }
    var Jr = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }
      , Zr = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }
      , ei = Tr.extend({
        key: function(e) {
            if (e.key) {
                var t = Jr[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t
            }
            return "keypress" === e.type ? 13 === (e = Xr(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Zr[e.keyCode] || "Unidentified" : ""
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: Or,
        charCode: function(e) {
            return "keypress" === e.type ? Xr(e) : 0
        },
        keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function(e) {
            return "keypress" === e.type ? Xr(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
    })
      , ti = Ir.extend({
        dataTransfer: null
    })
      , ni = Tr.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: Or
    })
      , ri = Gn.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null
    })
      , ii = Ir.extend({
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: null,
        deltaMode: null
    })
      , oi = {
        eventTypes: jt,
        extractEvents: function(e, t, n, r) {
            var i = Mt.get(e);
            if (!i)
                return null;
            switch (e) {
            case "keypress":
                if (0 === Xr(n))
                    return null;
            case "keydown":
            case "keyup":
                e = ei;
                break;
            case "blur":
            case "focus":
                e = Yr;
                break;
            case "click":
                if (2 === n.button)
                    return null;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                e = Ir;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                e = ti;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                e = ni;
                break;
            case We:
            case Ve:
            case Ke:
                e = Kr;
                break;
            case Qe:
                e = ri;
                break;
            case "scroll":
                e = Tr;
                break;
            case "wheel":
                e = ii;
                break;
            case "copy":
            case "cut":
            case "paste":
                e = Qr;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
                e = Lr;
                break;
            default:
                e = Gn
            }
            return jn(t = e.getPooled(i, t, n, r)),
            t
        }
    };
    if (z)
        throw Error(a(101));
    z = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),
    U(),
    m = Rn,
    h = On,
    g = Pn,
    V({
        SimpleEventPlugin: oi,
        EnterLeaveEventPlugin: Fr,
        ChangeEventPlugin: Sr,
        SelectEventPlugin: Vr,
        BeforeInputEventPlugin: lr
    });
    var ai = []
      , li = -1;
    function ui(e) {
        0 > li || (e.current = ai[li],
        ai[li] = null,
        li--)
    }
    function ci(e, t) {
        li++,
        ai[li] = e.current,
        e.current = t
    }
    var si = {}
      , fi = {
        current: si
    }
      , di = {
        current: !1
    }
      , pi = si;
    function mi(e, t) {
        var n = e.type.contextTypes;
        if (!n)
            return si;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
        var i, o = {};
        for (i in n)
            o[i] = t[i];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = o),
        o
    }
    function hi(e) {
        return null != (e = e.childContextTypes)
    }
    function gi() {
        ui(di),
        ui(fi)
    }
    function vi(e, t, n) {
        if (fi.current !== si)
            throw Error(a(168));
        ci(fi, t),
        ci(di, n)
    }
    function bi(e, t, n) {
        var r = e.stateNode;
        if (e = t.childContextTypes,
        "function" != typeof r.getChildContext)
            return n;
        for (var o in r = r.getChildContext())
            if (!(o in e))
                throw Error(a(108, j(t) || "Unknown", o));
        return i({}, n, {}, r)
    }
    function yi(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || si,
        pi = fi.current,
        ci(fi, e),
        ci(di, di.current),
        !0
    }
    function wi(e, t, n) {
        var r = e.stateNode;
        if (!r)
            throw Error(a(169));
        n ? (e = bi(e, t, pi),
        r.__reactInternalMemoizedMergedChildContext = e,
        ui(di),
        ui(fi),
        ci(fi, e)) : ui(di),
        ci(di, n)
    }
    var ki = o.unstable_runWithPriority
      , xi = o.unstable_scheduleCallback
      , Ei = o.unstable_cancelCallback
      , Si = o.unstable_requestPaint
      , Ti = o.unstable_now
      , _i = o.unstable_getCurrentPriorityLevel
      , Ci = o.unstable_ImmediatePriority
      , Oi = o.unstable_UserBlockingPriority
      , Pi = o.unstable_NormalPriority
      , Ri = o.unstable_LowPriority
      , Ai = o.unstable_IdlePriority
      , Ni = {}
      , Ii = o.unstable_shouldYield
      , Li = void 0 !== Si ? Si : function() {}
      , Di = null
      , Fi = null
      , ji = !1
      , Mi = Ti()
      , zi = 1e4 > Mi ? Ti : function() {
        return Ti() - Mi
    }
    ;
    function Bi() {
        switch (_i()) {
        case Ci:
            return 99;
        case Oi:
            return 98;
        case Pi:
            return 97;
        case Ri:
            return 96;
        case Ai:
            return 95;
        default:
            throw Error(a(332))
        }
    }
    function Ui(e) {
        switch (e) {
        case 99:
            return Ci;
        case 98:
            return Oi;
        case 97:
            return Pi;
        case 96:
            return Ri;
        case 95:
            return Ai;
        default:
            throw Error(a(332))
        }
    }
    function qi(e, t) {
        return e = Ui(e),
        ki(e, t)
    }
    function $i(e, t, n) {
        return e = Ui(e),
        xi(e, t, n)
    }
    function Gi(e) {
        return null === Di ? (Di = [e],
        Fi = xi(Ci, Wi)) : Di.push(e),
        Ni
    }
    function Hi() {
        if (null !== Fi) {
            var e = Fi;
            Fi = null,
            Ei(e)
        }
        Wi()
    }
    function Wi() {
        if (!ji && null !== Di) {
            ji = !0;
            var e = 0;
            try {
                var t = Di;
                qi(99, (function() {
                    for (; e < t.length; e++) {
                        var n = t[e];
                        do {
                            n = n(!0)
                        } while (null !== n)
                    }
                }
                )),
                Di = null
            } catch (n) {
                throw null !== Di && (Di = Di.slice(e + 1)),
                xi(Ci, Hi),
                n
            } finally {
                ji = !1
            }
        }
    }
    function Vi(e, t, n) {
        return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n
    }
    function Ki(e, t) {
        if (e && e.defaultProps)
            for (var n in t = i({}, t),
            e = e.defaultProps)
                void 0 === t[n] && (t[n] = e[n]);
        return t
    }
    var Qi = {
        current: null
    }
      , Yi = null
      , Xi = null
      , Ji = null;
    function Zi() {
        Ji = Xi = Yi = null
    }
    function eo(e) {
        var t = Qi.current;
        ui(Qi),
        e.type._context._currentValue = t
    }
    function to(e, t) {
        for (; null !== e; ) {
            var n = e.alternate;
            if (e.childExpirationTime < t)
                e.childExpirationTime = t,
                null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
            else {
                if (!(null !== n && n.childExpirationTime < t))
                    break;
                n.childExpirationTime = t
            }
            e = e.return
        }
    }
    function no(e, t) {
        Yi = e,
        Ji = Xi = null,
        null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Ra = !0),
        e.firstContext = null)
    }
    function ro(e, t) {
        if (Ji !== e && !1 !== t && 0 !== t)
            if ("number" == typeof t && 1073741823 !== t || (Ji = e,
            t = 1073741823),
            t = {
                context: e,
                observedBits: t,
                next: null
            },
            null === Xi) {
                if (null === Yi)
                    throw Error(a(308));
                Xi = t,
                Yi.dependencies = {
                    expirationTime: 0,
                    firstContext: t,
                    responders: null
                }
            } else
                Xi = Xi.next = t;
        return e._currentValue
    }
    var io = !1;
    function oo(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            baseQueue: null,
            shared: {
                pending: null
            },
            effects: null
        }
    }
    function ao(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            baseQueue: e.baseQueue,
            shared: e.shared,
            effects: e.effects
        })
    }
    function lo(e, t) {
        return (e = {
            expirationTime: e,
            suspenseConfig: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }).next = e
    }
    function uo(e, t) {
        if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? t.next = t : (t.next = n.next,
            n.next = t),
            e.pending = t
        }
    }
    function co(e, t) {
        var n = e.alternate;
        null !== n && ao(n, e),
        null === (n = (e = e.updateQueue).baseQueue) ? (e.baseQueue = t.next = t,
        t.next = t) : (t.next = n.next,
        n.next = t)
    }
    function so(e, t, n, r) {
        var o = e.updateQueue;
        io = !1;
        var a = o.baseQueue
          , l = o.shared.pending;
        if (null !== l) {
            if (null !== a) {
                var u = a.next;
                a.next = l.next,
                l.next = u
            }
            a = l,
            o.shared.pending = null,
            null !== (u = e.alternate) && (null !== (u = u.updateQueue) && (u.baseQueue = l))
        }
        if (null !== a) {
            u = a.next;
            var c = o.baseState
              , s = 0
              , f = null
              , d = null
              , p = null;
            if (null !== u)
                for (var m = u; ; ) {
                    if ((l = m.expirationTime) < r) {
                        var h = {
                            expirationTime: m.expirationTime,
                            suspenseConfig: m.suspenseConfig,
                            tag: m.tag,
                            payload: m.payload,
                            callback: m.callback,
                            next: null
                        };
                        null === p ? (d = p = h,
                        f = c) : p = p.next = h,
                        l > s && (s = l)
                    } else {
                        null !== p && (p = p.next = {
                            expirationTime: 1073741823,
                            suspenseConfig: m.suspenseConfig,
                            tag: m.tag,
                            payload: m.payload,
                            callback: m.callback,
                            next: null
                        }),
                        ou(l, m.suspenseConfig);
                        e: {
                            var g = e
                              , v = m;
                            switch (l = t,
                            h = n,
                            v.tag) {
                            case 1:
                                if ("function" == typeof (g = v.payload)) {
                                    c = g.call(h, c, l);
                                    break e
                                }
                                c = g;
                                break e;
                            case 3:
                                g.effectTag = -4097 & g.effectTag | 64;
                            case 0:
                                if (null == (l = "function" == typeof (g = v.payload) ? g.call(h, c, l) : g))
                                    break e;
                                c = i({}, c, l);
                                break e;
                            case 2:
                                io = !0
                            }
                        }
                        null !== m.callback && (e.effectTag |= 32,
                        null === (l = o.effects) ? o.effects = [m] : l.push(m))
                    }
                    if (null === (m = m.next) || m === u) {
                        if (null === (l = o.shared.pending))
                            break;
                        m = a.next = l.next,
                        l.next = u,
                        o.baseQueue = a = l,
                        o.shared.pending = null
                    }
                }
            null === p ? f = c : p.next = d,
            o.baseState = f,
            o.baseQueue = p,
            au(s),
            e.expirationTime = s,
            e.memoizedState = c
        }
    }
    function fo(e, t, n) {
        if (e = t.effects,
        t.effects = null,
        null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t]
                  , i = r.callback;
                if (null !== i) {
                    if (r.callback = null,
                    r = i,
                    i = n,
                    "function" != typeof r)
                        throw Error(a(191, r));
                    r.call(i)
                }
            }
    }
    var po = b.ReactCurrentBatchConfig
      , mo = (new r.Component).refs;
    function ho(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : i({}, t, n),
        e.memoizedState = n,
        0 === e.expirationTime && (e.updateQueue.baseState = n)
    }
    var go = {
        isMounted: function(e) {
            return !!(e = e._reactInternalFiber) && Ze(e) === e
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternalFiber;
            var r = Wl()
              , i = po.suspense;
            (i = lo(r = Vl(r, e, i), i)).payload = t,
            null != n && (i.callback = n),
            uo(e, i),
            Kl(e, r)
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternalFiber;
            var r = Wl()
              , i = po.suspense;
            (i = lo(r = Vl(r, e, i), i)).tag = 1,
            i.payload = t,
            null != n && (i.callback = n),
            uo(e, i),
            Kl(e, r)
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternalFiber;
            var n = Wl()
              , r = po.suspense;
            (r = lo(n = Vl(n, e, r), r)).tag = 2,
            null != t && (r.callback = t),
            uo(e, r),
            Kl(e, n)
        }
    };
    function vo(e, t, n, r, i, o, a) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, a) : !t.prototype || !t.prototype.isPureReactComponent || (!zr(n, r) || !zr(i, o))
    }
    function bo(e, t, n) {
        var r = !1
          , i = si
          , o = t.contextType;
        return "object" == typeof o && null !== o ? o = ro(o) : (i = hi(t) ? pi : fi.current,
        o = (r = null != (r = t.contextTypes)) ? mi(e, i) : si),
        t = new t(n,o),
        e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
        t.updater = go,
        e.stateNode = t,
        t._reactInternalFiber = e,
        r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i,
        e.__reactInternalMemoizedMaskedChildContext = o),
        t
    }
    function yo(e, t, n, r) {
        e = t.state,
        "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && go.enqueueReplaceState(t, t.state, null)
    }
    function wo(e, t, n, r) {
        var i = e.stateNode;
        i.props = n,
        i.state = e.memoizedState,
        i.refs = mo,
        oo(e);
        var o = t.contextType;
        "object" == typeof o && null !== o ? i.context = ro(o) : (o = hi(t) ? pi : fi.current,
        i.context = mi(e, o)),
        so(e, n, i, r),
        i.state = e.memoizedState,
        "function" == typeof (o = t.getDerivedStateFromProps) && (ho(e, t, o, n),
        i.state = e.memoizedState),
        "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state,
        "function" == typeof i.componentWillMount && i.componentWillMount(),
        "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
        t !== i.state && go.enqueueReplaceState(i, i.state, null),
        so(e, n, i, r),
        i.state = e.memoizedState),
        "function" == typeof i.componentDidMount && (e.effectTag |= 4)
    }
    var ko = Array.isArray;
    function xo(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag)
                        throw Error(a(309));
                    var r = n.stateNode
                }
                if (!r)
                    throw Error(a(147, e));
                var i = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function(e) {
                    var t = r.refs;
                    t === mo && (t = r.refs = {}),
                    null === e ? delete t[i] : t[i] = e
                }
                )._stringRef = i,
                t)
            }
            if ("string" != typeof e)
                throw Error(a(284));
            if (!n._owner)
                throw Error(a(290, e))
        }
        return e
    }
    function Eo(e, t) {
        if ("textarea" !== e.type)
            throw Error(a(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
    }
    function So(e) {
        function t(t, n) {
            if (e) {
                var r = t.lastEffect;
                null !== r ? (r.nextEffect = n,
                t.lastEffect = n) : t.firstEffect = t.lastEffect = n,
                n.nextEffect = null,
                n.effectTag = 8
            }
        }
        function n(n, r) {
            if (!e)
                return null;
            for (; null !== r; )
                t(n, r),
                r = r.sibling;
            return null
        }
        function r(e, t) {
            for (e = new Map; null !== t; )
                null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                t = t.sibling;
            return e
        }
        function i(e, t) {
            return (e = _u(e, t)).index = 0,
            e.sibling = null,
            e
        }
        function o(t, n, r) {
            return t.index = r,
            e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2,
            n) : r : (t.effectTag = 2,
            n) : n
        }
        function l(t) {
            return e && null === t.alternate && (t.effectTag = 2),
            t
        }
        function u(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = Pu(n, e.mode, r)).return = e,
            t) : ((t = i(t, n)).return = e,
            t)
        }
        function c(e, t, n, r) {
            return null !== t && t.elementType === n.type ? ((r = i(t, n.props)).ref = xo(e, t, n),
            r.return = e,
            r) : ((r = Cu(n.type, n.key, n.props, null, e.mode, r)).ref = xo(e, t, n),
            r.return = e,
            r)
        }
        function s(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ru(n, e.mode, r)).return = e,
            t) : ((t = i(t, n.children || [])).return = e,
            t)
        }
        function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag ? ((t = Ou(n, e.mode, r, o)).return = e,
            t) : ((t = i(t, n)).return = e,
            t)
        }
        function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t)
                return (t = Pu("" + t, e.mode, n)).return = e,
                t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                case k:
                    return (n = Cu(t.type, t.key, t.props, null, e.mode, n)).ref = xo(e, null, t),
                    n.return = e,
                    n;
                case x:
                    return (t = Ru(t, e.mode, n)).return = e,
                    t
                }
                if (ko(t) || F(t))
                    return (t = Ou(t, e.mode, n, null)).return = e,
                    t;
                Eo(e, t)
            }
            return null
        }
        function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n)
                return null !== i ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                case k:
                    return n.key === i ? n.type === E ? f(e, t, n.props.children, r, i) : c(e, t, n, r) : null;
                case x:
                    return n.key === i ? s(e, t, n, r) : null
                }
                if (ko(n) || F(n))
                    return null !== i ? null : f(e, t, n, r, null);
                Eo(e, n)
            }
            return null
        }
        function m(e, t, n, r, i) {
            if ("string" == typeof r || "number" == typeof r)
                return u(t, e = e.get(n) || null, "" + r, i);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                case k:
                    return e = e.get(null === r.key ? n : r.key) || null,
                    r.type === E ? f(t, e, r.props.children, i, r.key) : c(t, e, r, i);
                case x:
                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, i)
                }
                if (ko(r) || F(r))
                    return f(t, e = e.get(n) || null, r, i, null);
                Eo(t, r)
            }
            return null
        }
        function h(i, a, l, u) {
            for (var c = null, s = null, f = a, h = a = 0, g = null; null !== f && h < l.length; h++) {
                f.index > h ? (g = f,
                f = null) : g = f.sibling;
                var v = p(i, f, l[h], u);
                if (null === v) {
                    null === f && (f = g);
                    break
                }
                e && f && null === v.alternate && t(i, f),
                a = o(v, a, h),
                null === s ? c = v : s.sibling = v,
                s = v,
                f = g
            }
            if (h === l.length)
                return n(i, f),
                c;
            if (null === f) {
                for (; h < l.length; h++)
                    null !== (f = d(i, l[h], u)) && (a = o(f, a, h),
                    null === s ? c = f : s.sibling = f,
                    s = f);
                return c
            }
            for (f = r(i, f); h < l.length; h++)
                null !== (g = m(f, i, h, l[h], u)) && (e && null !== g.alternate && f.delete(null === g.key ? h : g.key),
                a = o(g, a, h),
                null === s ? c = g : s.sibling = g,
                s = g);
            return e && f.forEach((function(e) {
                return t(i, e)
            }
            )),
            c
        }
        function g(i, l, u, c) {
            var s = F(u);
            if ("function" != typeof s)
                throw Error(a(150));
            if (null == (u = s.call(u)))
                throw Error(a(151));
            for (var f = s = null, h = l, g = l = 0, v = null, b = u.next(); null !== h && !b.done; g++,
            b = u.next()) {
                h.index > g ? (v = h,
                h = null) : v = h.sibling;
                var y = p(i, h, b.value, c);
                if (null === y) {
                    null === h && (h = v);
                    break
                }
                e && h && null === y.alternate && t(i, h),
                l = o(y, l, g),
                null === f ? s = y : f.sibling = y,
                f = y,
                h = v
            }
            if (b.done)
                return n(i, h),
                s;
            if (null === h) {
                for (; !b.done; g++,
                b = u.next())
                    null !== (b = d(i, b.value, c)) && (l = o(b, l, g),
                    null === f ? s = b : f.sibling = b,
                    f = b);
                return s
            }
            for (h = r(i, h); !b.done; g++,
            b = u.next())
                null !== (b = m(h, i, g, b.value, c)) && (e && null !== b.alternate && h.delete(null === b.key ? g : b.key),
                l = o(b, l, g),
                null === f ? s = b : f.sibling = b,
                f = b);
            return e && h.forEach((function(e) {
                return t(i, e)
            }
            )),
            s
        }
        return function(e, r, o, u) {
            var c = "object" == typeof o && null !== o && o.type === E && null === o.key;
            c && (o = o.props.children);
            var s = "object" == typeof o && null !== o;
            if (s)
                switch (o.$$typeof) {
                case k:
                    e: {
                        for (s = o.key,
                        c = r; null !== c; ) {
                            if (c.key === s) {
                                switch (c.tag) {
                                case 7:
                                    if (o.type === E) {
                                        n(e, c.sibling),
                                        (r = i(c, o.props.children)).return = e,
                                        e = r;
                                        break e
                                    }
                                    break;
                                default:
                                    if (c.elementType === o.type) {
                                        n(e, c.sibling),
                                        (r = i(c, o.props)).ref = xo(e, c, o),
                                        r.return = e,
                                        e = r;
                                        break e
                                    }
                                }
                                n(e, c);
                                break
                            }
                            t(e, c),
                            c = c.sibling
                        }
                        o.type === E ? ((r = Ou(o.props.children, e.mode, u, o.key)).return = e,
                        e = r) : ((u = Cu(o.type, o.key, o.props, null, e.mode, u)).ref = xo(e, r, o),
                        u.return = e,
                        e = u)
                    }
                    return l(e);
                case x:
                    e: {
                        for (c = o.key; null !== r; ) {
                            if (r.key === c) {
                                if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                    n(e, r.sibling),
                                    (r = i(r, o.children || [])).return = e,
                                    e = r;
                                    break e
                                }
                                n(e, r);
                                break
                            }
                            t(e, r),
                            r = r.sibling
                        }
                        (r = Ru(o, e.mode, u)).return = e,
                        e = r
                    }
                    return l(e)
                }
            if ("string" == typeof o || "number" == typeof o)
                return o = "" + o,
                null !== r && 6 === r.tag ? (n(e, r.sibling),
                (r = i(r, o)).return = e,
                e = r) : (n(e, r),
                (r = Pu(o, e.mode, u)).return = e,
                e = r),
                l(e);
            if (ko(o))
                return h(e, r, o, u);
            if (F(o))
                return g(e, r, o, u);
            if (s && Eo(e, o),
            void 0 === o && !c)
                switch (e.tag) {
                case 1:
                case 0:
                    throw e = e.type,
                    Error(a(152, e.displayName || e.name || "Component"))
                }
            return n(e, r)
        }
    }
    var To = So(!0)
      , _o = So(!1)
      , Co = {}
      , Oo = {
        current: Co
    }
      , Po = {
        current: Co
    }
      , Ro = {
        current: Co
    };
    function Ao(e) {
        if (e === Co)
            throw Error(a(174));
        return e
    }
    function No(e, t) {
        switch (ci(Ro, t),
        ci(Po, e),
        ci(Oo, Co),
        e = t.nodeType) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : je(null, "");
            break;
        default:
            t = je(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
        }
        ui(Oo),
        ci(Oo, t)
    }
    function Io() {
        ui(Oo),
        ui(Po),
        ui(Ro)
    }
    function Lo(e) {
        Ao(Ro.current);
        var t = Ao(Oo.current)
          , n = je(t, e.type);
        t !== n && (ci(Po, e),
        ci(Oo, n))
    }
    function Do(e) {
        Po.current === e && (ui(Oo),
        ui(Po))
    }
    var Fo = {
        current: 0
    };
    function jo(e) {
        for (var t = e; null !== t; ) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                    return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (64 & t.effectTag))
                    return t
            } else if (null !== t.child) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; null === t.sibling; ) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    function Mo(e, t) {
        return {
            responder: e,
            props: t
        }
    }
    var zo = b.ReactCurrentDispatcher
      , Bo = b.ReactCurrentBatchConfig
      , Uo = 0
      , qo = null
      , $o = null
      , Go = null
      , Ho = !1;
    function Wo() {
        throw Error(a(321))
    }
    function Vo(e, t) {
        if (null === t)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!jr(e[n], t[n]))
                return !1;
        return !0
    }
    function Ko(e, t, n, r, i, o) {
        if (Uo = o,
        qo = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.expirationTime = 0,
        zo.current = null === e || null === e.memoizedState ? va : ba,
        e = n(r, i),
        t.expirationTime === Uo) {
            o = 0;
            do {
                if (t.expirationTime = 0,
                !(25 > o))
                    throw Error(a(301));
                o += 1,
                Go = $o = null,
                t.updateQueue = null,
                zo.current = ya,
                e = n(r, i)
            } while (t.expirationTime === Uo)
        }
        if (zo.current = ga,
        t = null !== $o && null !== $o.next,
        Uo = 0,
        Go = $o = qo = null,
        Ho = !1,
        t)
            throw Error(a(300));
        return e
    }
    function Qo() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return null === Go ? qo.memoizedState = Go = e : Go = Go.next = e,
        Go
    }
    function Yo() {
        if (null === $o) {
            var e = qo.alternate;
            e = null !== e ? e.memoizedState : null
        } else
            e = $o.next;
        var t = null === Go ? qo.memoizedState : Go.next;
        if (null !== t)
            Go = t,
            $o = e;
        else {
            if (null === e)
                throw Error(a(310));
            e = {
                memoizedState: ($o = e).memoizedState,
                baseState: $o.baseState,
                baseQueue: $o.baseQueue,
                queue: $o.queue,
                next: null
            },
            null === Go ? qo.memoizedState = Go = e : Go = Go.next = e
        }
        return Go
    }
    function Xo(e, t) {
        return "function" == typeof t ? t(e) : t
    }
    function Jo(e) {
        var t = Yo()
          , n = t.queue;
        if (null === n)
            throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = $o
          , i = r.baseQueue
          , o = n.pending;
        if (null !== o) {
            if (null !== i) {
                var l = i.next;
                i.next = o.next,
                o.next = l
            }
            r.baseQueue = i = o,
            n.pending = null
        }
        if (null !== i) {
            i = i.next,
            r = r.baseState;
            var u = l = o = null
              , c = i;
            do {
                var s = c.expirationTime;
                if (s < Uo) {
                    var f = {
                        expirationTime: c.expirationTime,
                        suspenseConfig: c.suspenseConfig,
                        action: c.action,
                        eagerReducer: c.eagerReducer,
                        eagerState: c.eagerState,
                        next: null
                    };
                    null === u ? (l = u = f,
                    o = r) : u = u.next = f,
                    s > qo.expirationTime && (qo.expirationTime = s,
                    au(s))
                } else
                    null !== u && (u = u.next = {
                        expirationTime: 1073741823,
                        suspenseConfig: c.suspenseConfig,
                        action: c.action,
                        eagerReducer: c.eagerReducer,
                        eagerState: c.eagerState,
                        next: null
                    }),
                    ou(s, c.suspenseConfig),
                    r = c.eagerReducer === e ? c.eagerState : e(r, c.action);
                c = c.next
            } while (null !== c && c !== i);null === u ? o = r : u.next = l,
            jr(r, t.memoizedState) || (Ra = !0),
            t.memoizedState = r,
            t.baseState = o,
            t.baseQueue = u,
            n.lastRenderedState = r
        }
        return [t.memoizedState, n.dispatch]
    }
    function Zo(e) {
        var t = Yo()
          , n = t.queue;
        if (null === n)
            throw Error(a(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch
          , i = n.pending
          , o = t.memoizedState;
        if (null !== i) {
            n.pending = null;
            var l = i = i.next;
            do {
                o = e(o, l.action),
                l = l.next
            } while (l !== i);jr(o, t.memoizedState) || (Ra = !0),
            t.memoizedState = o,
            null === t.baseQueue && (t.baseState = o),
            n.lastRenderedState = o
        }
        return [o, r]
    }
    function ea(e) {
        var t = Qo();
        return "function" == typeof e && (e = e()),
        t.memoizedState = t.baseState = e,
        e = (e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: Xo,
            lastRenderedState: e
        }).dispatch = ha.bind(null, qo, e),
        [t.memoizedState, e]
    }
    function ta(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        },
        null === (t = qo.updateQueue) ? (t = {
            lastEffect: null
        },
        qo.updateQueue = t,
        t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
        n.next = e,
        e.next = r,
        t.lastEffect = e),
        e
    }
    function na() {
        return Yo().memoizedState
    }
    function ra(e, t, n, r) {
        var i = Qo();
        qo.effectTag |= e,
        i.memoizedState = ta(1 | t, n, void 0, void 0 === r ? null : r)
    }
    function ia(e, t, n, r) {
        var i = Yo();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== $o) {
            var a = $o.memoizedState;
            if (o = a.destroy,
            null !== r && Vo(r, a.deps))
                return void ta(t, n, o, r)
        }
        qo.effectTag |= e,
        i.memoizedState = ta(1 | t, n, o, r)
    }
    function oa(e, t) {
        return ra(516, 4, e, t)
    }
    function aa(e, t) {
        return ia(516, 4, e, t)
    }
    function la(e, t) {
        return ia(4, 2, e, t)
    }
    function ua(e, t) {
        return "function" == typeof t ? (e = e(),
        t(e),
        function() {
            t(null)
        }
        ) : null != t ? (e = e(),
        t.current = e,
        function() {
            t.current = null
        }
        ) : void 0
    }
    function ca(e, t, n) {
        return n = null != n ? n.concat([e]) : null,
        ia(4, 2, ua.bind(null, t, e), n)
    }
    function sa() {}
    function fa(e, t) {
        return Qo().memoizedState = [e, void 0 === t ? null : t],
        e
    }
    function da(e, t) {
        var n = Yo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && Vo(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
    }
    function pa(e, t) {
        var n = Yo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && Vo(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
    }
    function ma(e, t, n) {
        var r = Bi();
        qi(98 > r ? 98 : r, (function() {
            e(!0)
        }
        )),
        qi(97 < r ? 97 : r, (function() {
            var r = Bo.suspense;
            Bo.suspense = void 0 === t ? null : t;
            try {
                e(!1),
                n()
            } finally {
                Bo.suspense = r
            }
        }
        ))
    }
    function ha(e, t, n) {
        var r = Wl()
          , i = po.suspense;
        i = {
            expirationTime: r = Vl(r, e, i),
            suspenseConfig: i,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
        };
        var o = t.pending;
        if (null === o ? i.next = i : (i.next = o.next,
        o.next = i),
        t.pending = i,
        o = e.alternate,
        e === qo || null !== o && o === qo)
            Ho = !0,
            i.expirationTime = Uo,
            qo.expirationTime = Uo;
        else {
            if (0 === e.expirationTime && (null === o || 0 === o.expirationTime) && null !== (o = t.lastRenderedReducer))
                try {
                    var a = t.lastRenderedState
                      , l = o(a, n);
                    if (i.eagerReducer = o,
                    i.eagerState = l,
                    jr(l, a))
                        return
                } catch (u) {}
            Kl(e, r)
        }
    }
    var ga = {
        readContext: ro,
        useCallback: Wo,
        useContext: Wo,
        useEffect: Wo,
        useImperativeHandle: Wo,
        useLayoutEffect: Wo,
        useMemo: Wo,
        useReducer: Wo,
        useRef: Wo,
        useState: Wo,
        useDebugValue: Wo,
        useResponder: Wo,
        useDeferredValue: Wo,
        useTransition: Wo
    }
      , va = {
        readContext: ro,
        useCallback: fa,
        useContext: ro,
        useEffect: oa,
        useImperativeHandle: function(e, t, n) {
            return n = null != n ? n.concat([e]) : null,
            ra(4, 2, ua.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return ra(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Qo();
            return t = void 0 === t ? null : t,
            e = e(),
            n.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, n) {
            var r = Qo();
            return t = void 0 !== n ? n(t) : t,
            r.memoizedState = r.baseState = t,
            e = (e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }).dispatch = ha.bind(null, qo, e),
            [r.memoizedState, e]
        },
        useRef: function(e) {
            return e = {
                current: e
            },
            Qo().memoizedState = e
        },
        useState: ea,
        useDebugValue: sa,
        useResponder: Mo,
        useDeferredValue: function(e, t) {
            var n = ea(e)
              , r = n[0]
              , i = n[1];
            return oa((function() {
                var n = Bo.suspense;
                Bo.suspense = void 0 === t ? null : t;
                try {
                    i(e)
                } finally {
                    Bo.suspense = n
                }
            }
            ), [e, t]),
            r
        },
        useTransition: function(e) {
            var t = ea(!1)
              , n = t[0];
            return t = t[1],
            [fa(ma.bind(null, t, e), [t, e]), n]
        }
    }
      , ba = {
        readContext: ro,
        useCallback: da,
        useContext: ro,
        useEffect: aa,
        useImperativeHandle: ca,
        useLayoutEffect: la,
        useMemo: pa,
        useReducer: Jo,
        useRef: na,
        useState: function() {
            return Jo(Xo)
        },
        useDebugValue: sa,
        useResponder: Mo,
        useDeferredValue: function(e, t) {
            var n = Jo(Xo)
              , r = n[0]
              , i = n[1];
            return aa((function() {
                var n = Bo.suspense;
                Bo.suspense = void 0 === t ? null : t;
                try {
                    i(e)
                } finally {
                    Bo.suspense = n
                }
            }
            ), [e, t]),
            r
        },
        useTransition: function(e) {
            var t = Jo(Xo)
              , n = t[0];
            return t = t[1],
            [da(ma.bind(null, t, e), [t, e]), n]
        }
    }
      , ya = {
        readContext: ro,
        useCallback: da,
        useContext: ro,
        useEffect: aa,
        useImperativeHandle: ca,
        useLayoutEffect: la,
        useMemo: pa,
        useReducer: Zo,
        useRef: na,
        useState: function() {
            return Zo(Xo)
        },
        useDebugValue: sa,
        useResponder: Mo,
        useDeferredValue: function(e, t) {
            var n = Zo(Xo)
              , r = n[0]
              , i = n[1];
            return aa((function() {
                var n = Bo.suspense;
                Bo.suspense = void 0 === t ? null : t;
                try {
                    i(e)
                } finally {
                    Bo.suspense = n
                }
            }
            ), [e, t]),
            r
        },
        useTransition: function(e) {
            var t = Zo(Xo)
              , n = t[0];
            return t = t[1],
            [da(ma.bind(null, t, e), [t, e]), n]
        }
    }
      , wa = null
      , ka = null
      , xa = !1;
    function Ea(e, t) {
        var n = Su(5, null, null, 0);
        n.elementType = "DELETED",
        n.type = "DELETED",
        n.stateNode = t,
        n.return = e,
        n.effectTag = 8,
        null !== e.lastEffect ? (e.lastEffect.nextEffect = n,
        e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }
    function Sa(e, t) {
        switch (e.tag) {
        case 5:
            var n = e.type;
            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t,
            !0);
        case 6:
            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t,
            !0);
        case 13:
        default:
            return !1
        }
    }
    function Ta(e) {
        if (xa) {
            var t = ka;
            if (t) {
                var n = t;
                if (!Sa(e, t)) {
                    if (!(t = kn(n.nextSibling)) || !Sa(e, t))
                        return e.effectTag = -1025 & e.effectTag | 2,
                        xa = !1,
                        void (wa = e);
                    Ea(wa, n)
                }
                wa = e,
                ka = kn(t.firstChild)
            } else
                e.effectTag = -1025 & e.effectTag | 2,
                xa = !1,
                wa = e
        }
    }
    function _a(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
            e = e.return;
        wa = e
    }
    function Ca(e) {
        if (e !== wa)
            return !1;
        if (!xa)
            return _a(e),
            xa = !0,
            !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !bn(t, e.memoizedProps))
            for (t = ka; t; )
                Ea(e, t),
                t = kn(t.nextSibling);
        if (_a(e),
        13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(a(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                ka = kn(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            "$" !== n && "$!" !== n && "$?" !== n || t++
                    }
                    e = e.nextSibling
                }
                ka = null
            }
        } else
            ka = wa ? kn(e.stateNode.nextSibling) : null;
        return !0
    }
    function Oa() {
        ka = wa = null,
        xa = !1
    }
    var Pa = b.ReactCurrentOwner
      , Ra = !1;
    function Aa(e, t, n, r) {
        t.child = null === e ? _o(t, null, n, r) : To(t, e.child, n, r)
    }
    function Na(e, t, n, r, i) {
        n = n.render;
        var o = t.ref;
        return no(t, i),
        r = Ko(e, t, n, r, o, i),
        null === e || Ra ? (t.effectTag |= 1,
        Aa(e, t, r, i),
        t.child) : (t.updateQueue = e.updateQueue,
        t.effectTag &= -517,
        e.expirationTime <= i && (e.expirationTime = 0),
        Ka(e, t, i))
    }
    function Ia(e, t, n, r, i, o) {
        if (null === e) {
            var a = n.type;
            return "function" != typeof a || Tu(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Cu(n.type, null, r, null, t.mode, o)).ref = t.ref,
            e.return = t,
            t.child = e) : (t.tag = 15,
            t.type = a,
            La(e, t, a, r, i, o))
        }
        return a = e.child,
        i < o && (i = a.memoizedProps,
        (n = null !== (n = n.compare) ? n : zr)(i, r) && e.ref === t.ref) ? Ka(e, t, o) : (t.effectTag |= 1,
        (e = _u(a, r)).ref = t.ref,
        e.return = t,
        t.child = e)
    }
    function La(e, t, n, r, i, o) {
        return null !== e && zr(e.memoizedProps, r) && e.ref === t.ref && (Ra = !1,
        i < o) ? (t.expirationTime = e.expirationTime,
        Ka(e, t, o)) : Fa(e, t, n, r, o)
    }
    function Da(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
    }
    function Fa(e, t, n, r, i) {
        var o = hi(n) ? pi : fi.current;
        return o = mi(t, o),
        no(t, i),
        n = Ko(e, t, n, r, o, i),
        null === e || Ra ? (t.effectTag |= 1,
        Aa(e, t, n, i),
        t.child) : (t.updateQueue = e.updateQueue,
        t.effectTag &= -517,
        e.expirationTime <= i && (e.expirationTime = 0),
        Ka(e, t, i))
    }
    function ja(e, t, n, r, i) {
        if (hi(n)) {
            var o = !0;
            yi(t)
        } else
            o = !1;
        if (no(t, i),
        null === t.stateNode)
            null !== e && (e.alternate = null,
            t.alternate = null,
            t.effectTag |= 2),
            bo(t, n, r),
            wo(t, n, r, i),
            r = !0;
        else if (null === e) {
            var a = t.stateNode
              , l = t.memoizedProps;
            a.props = l;
            var u = a.context
              , c = n.contextType;
            "object" == typeof c && null !== c ? c = ro(c) : c = mi(t, c = hi(n) ? pi : fi.current);
            var s = n.getDerivedStateFromProps
              , f = "function" == typeof s || "function" == typeof a.getSnapshotBeforeUpdate;
            f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (l !== r || u !== c) && yo(t, a, r, c),
            io = !1;
            var d = t.memoizedState;
            a.state = d,
            so(t, r, a, i),
            u = t.memoizedState,
            l !== r || d !== u || di.current || io ? ("function" == typeof s && (ho(t, n, s, r),
            u = t.memoizedState),
            (l = io || vo(t, n, l, r, d, u, c)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(),
            "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
            "function" == typeof a.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4),
            t.memoizedProps = r,
            t.memoizedState = u),
            a.props = r,
            a.state = u,
            a.context = c,
            r = l) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4),
            r = !1)
        } else
            a = t.stateNode,
            ao(e, t),
            l = t.memoizedProps,
            a.props = t.type === t.elementType ? l : Ki(t.type, l),
            u = a.context,
            "object" == typeof (c = n.contextType) && null !== c ? c = ro(c) : c = mi(t, c = hi(n) ? pi : fi.current),
            (f = "function" == typeof (s = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (l !== r || u !== c) && yo(t, a, r, c),
            io = !1,
            u = t.memoizedState,
            a.state = u,
            so(t, r, a, i),
            d = t.memoizedState,
            l !== r || u !== d || di.current || io ? ("function" == typeof s && (ho(t, n, s, r),
            d = t.memoizedState),
            (s = io || vo(t, n, l, r, u, d, c)) ? (f || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, d, c),
            "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, d, c)),
            "function" == typeof a.componentDidUpdate && (t.effectTag |= 4),
            "function" == typeof a.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof a.componentDidUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4),
            "function" != typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256),
            t.memoizedProps = r,
            t.memoizedState = d),
            a.props = r,
            a.state = d,
            a.context = c,
            r = s) : ("function" != typeof a.componentDidUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4),
            "function" != typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256),
            r = !1);
        return Ma(e, t, n, r, o, i)
    }
    function Ma(e, t, n, r, i, o) {
        Da(e, t);
        var a = 0 != (64 & t.effectTag);
        if (!r && !a)
            return i && wi(t, n, !1),
            Ka(e, t, o);
        r = t.stateNode,
        Pa.current = t;
        var l = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.effectTag |= 1,
        null !== e && a ? (t.child = To(t, e.child, null, o),
        t.child = To(t, null, l, o)) : Aa(e, t, l, o),
        t.memoizedState = r.state,
        i && wi(t, n, !0),
        t.child
    }
    function za(e) {
        var t = e.stateNode;
        t.pendingContext ? vi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && vi(0, t.context, !1),
        No(e, t.containerInfo)
    }
    var Ba, Ua, qa, $a = {
        dehydrated: null,
        retryTime: 0
    };
    function Ga(e, t, n) {
        var r, i = t.mode, o = t.pendingProps, a = Fo.current, l = !1;
        if ((r = 0 != (64 & t.effectTag)) || (r = 0 != (2 & a) && (null === e || null !== e.memoizedState)),
        r ? (l = !0,
        t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (a |= 1),
        ci(Fo, 1 & a),
        null === e) {
            if (void 0 !== o.fallback && Ta(t),
            l) {
                if (l = o.fallback,
                (o = Ou(null, i, 0, null)).return = t,
                0 == (2 & t.mode))
                    for (e = null !== t.memoizedState ? t.child.child : t.child,
                    o.child = e; null !== e; )
                        e.return = o,
                        e = e.sibling;
                return (n = Ou(l, i, n, null)).return = t,
                o.sibling = n,
                t.memoizedState = $a,
                t.child = o,
                n
            }
            return i = o.children,
            t.memoizedState = null,
            t.child = _o(t, null, i, n)
        }
        if (null !== e.memoizedState) {
            if (i = (e = e.child).sibling,
            l) {
                if (o = o.fallback,
                (n = _u(e, e.pendingProps)).return = t,
                0 == (2 & t.mode) && (l = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
                    for (n.child = l; null !== l; )
                        l.return = n,
                        l = l.sibling;
                return (i = _u(i, o)).return = t,
                n.sibling = i,
                n.childExpirationTime = 0,
                t.memoizedState = $a,
                t.child = n,
                i
            }
            return n = To(t, e.child, o.children, n),
            t.memoizedState = null,
            t.child = n
        }
        if (e = e.child,
        l) {
            if (l = o.fallback,
            (o = Ou(null, i, 0, null)).return = t,
            o.child = e,
            null !== e && (e.return = o),
            0 == (2 & t.mode))
                for (e = null !== t.memoizedState ? t.child.child : t.child,
                o.child = e; null !== e; )
                    e.return = o,
                    e = e.sibling;
            return (n = Ou(l, i, n, null)).return = t,
            o.sibling = n,
            n.effectTag |= 2,
            o.childExpirationTime = 0,
            t.memoizedState = $a,
            t.child = o,
            n
        }
        return t.memoizedState = null,
        t.child = To(t, e, o.children, n)
    }
    function Ha(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t),
        to(e.return, t)
    }
    function Wa(e, t, n, r, i, o) {
        var a = e.memoizedState;
        null === a ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: i,
            lastEffect: o
        } : (a.isBackwards = t,
        a.rendering = null,
        a.renderingStartTime = 0,
        a.last = r,
        a.tail = n,
        a.tailExpiration = 0,
        a.tailMode = i,
        a.lastEffect = o)
    }
    function Va(e, t, n) {
        var r = t.pendingProps
          , i = r.revealOrder
          , o = r.tail;
        if (Aa(e, t, r.children, n),
        0 != (2 & (r = Fo.current)))
            r = 1 & r | 2,
            t.effectTag |= 64;
        else {
            if (null !== e && 0 != (64 & e.effectTag))
                e: for (e = t.child; null !== e; ) {
                    if (13 === e.tag)
                        null !== e.memoizedState && Ha(e, n);
                    else if (19 === e.tag)
                        Ha(e, n);
                    else if (null !== e.child) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling; ) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            r &= 1
        }
        if (ci(Fo, r),
        0 == (2 & t.mode))
            t.memoizedState = null;
        else
            switch (i) {
            case "forwards":
                for (n = t.child,
                i = null; null !== n; )
                    null !== (e = n.alternate) && null === jo(e) && (i = n),
                    n = n.sibling;
                null === (n = i) ? (i = t.child,
                t.child = null) : (i = n.sibling,
                n.sibling = null),
                Wa(t, !1, i, n, o, t.lastEffect);
                break;
            case "backwards":
                for (n = null,
                i = t.child,
                t.child = null; null !== i; ) {
                    if (null !== (e = i.alternate) && null === jo(e)) {
                        t.child = i;
                        break
                    }
                    e = i.sibling,
                    i.sibling = n,
                    n = i,
                    i = e
                }
                Wa(t, !0, n, null, o, t.lastEffect);
                break;
            case "together":
                Wa(t, !1, null, null, void 0, t.lastEffect);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function Ka(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if (0 !== r && au(r),
        t.childExpirationTime < n)
            return null;
        if (null !== e && t.child !== e.child)
            throw Error(a(153));
        if (null !== t.child) {
            for (n = _u(e = t.child, e.pendingProps),
            t.child = n,
            n.return = t; null !== e.sibling; )
                e = e.sibling,
                (n = n.sibling = _u(e, e.pendingProps)).return = t;
            n.sibling = null
        }
        return t.child
    }
    function Qa(e, t) {
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; null !== t; )
                null !== t.alternate && (n = t),
                t = t.sibling;
            null === n ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; null !== n; )
                null !== n.alternate && (r = n),
                n = n.sibling;
            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }
    function Ya(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return null;
        case 1:
            return hi(t.type) && gi(),
            null;
        case 3:
            return Io(),
            ui(di),
            ui(fi),
            (n = t.stateNode).pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            null !== e && null !== e.child || !Ca(t) || (t.effectTag |= 4),
            null;
        case 5:
            Do(t),
            n = Ao(Ro.current);
            var o = t.type;
            if (null !== e && null != t.stateNode)
                Ua(e, t, o, r, n),
                e.ref !== t.ref && (t.effectTag |= 128);
            else {
                if (!r) {
                    if (null === t.stateNode)
                        throw Error(a(166));
                    return null
                }
                if (e = Ao(Oo.current),
                Ca(t)) {
                    r = t.stateNode,
                    o = t.type;
                    var l = t.memoizedProps;
                    switch (r[Sn] = t,
                    r[Tn] = l,
                    o) {
                    case "iframe":
                    case "object":
                    case "embed":
                        Vt("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (e = 0; e < Ye.length; e++)
                            Vt(Ye[e], r);
                        break;
                    case "source":
                        Vt("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Vt("error", r),
                        Vt("load", r);
                        break;
                    case "form":
                        Vt("reset", r),
                        Vt("submit", r);
                        break;
                    case "details":
                        Vt("toggle", r);
                        break;
                    case "input":
                        Ee(r, l),
                        Vt("invalid", r),
                        un(n, "onChange");
                        break;
                    case "select":
                        r._wrapperState = {
                            wasMultiple: !!l.multiple
                        },
                        Vt("invalid", r),
                        un(n, "onChange");
                        break;
                    case "textarea":
                        Ae(r, l),
                        Vt("invalid", r),
                        un(n, "onChange")
                    }
                    for (var u in on(o, l),
                    e = null,
                    l)
                        if (l.hasOwnProperty(u)) {
                            var c = l[u];
                            "children" === u ? "string" == typeof c ? r.textContent !== c && (e = ["children", c]) : "number" == typeof c && r.textContent !== "" + c && (e = ["children", "" + c]) : H.hasOwnProperty(u) && null != c && un(n, u)
                        }
                    switch (o) {
                    case "input":
                        we(r),
                        _e(r, l, !0);
                        break;
                    case "textarea":
                        we(r),
                        Ie(r);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        "function" == typeof l.onClick && (r.onclick = cn)
                    }
                    n = e,
                    t.updateQueue = n,
                    null !== n && (t.effectTag |= 4)
                } else {
                    switch (u = 9 === n.nodeType ? n : n.ownerDocument,
                    e === ln && (e = Fe(o)),
                    e === ln ? "script" === o ? ((e = u.createElement("div")).innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(o, {
                        is: r.is
                    }) : (e = u.createElement(o),
                    "select" === o && (u = e,
                    r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, o),
                    e[Sn] = t,
                    e[Tn] = r,
                    Ba(e, t),
                    t.stateNode = e,
                    u = an(o, r),
                    o) {
                    case "iframe":
                    case "object":
                    case "embed":
                        Vt("load", e),
                        c = r;
                        break;
                    case "video":
                    case "audio":
                        for (c = 0; c < Ye.length; c++)
                            Vt(Ye[c], e);
                        c = r;
                        break;
                    case "source":
                        Vt("error", e),
                        c = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Vt("error", e),
                        Vt("load", e),
                        c = r;
                        break;
                    case "form":
                        Vt("reset", e),
                        Vt("submit", e),
                        c = r;
                        break;
                    case "details":
                        Vt("toggle", e),
                        c = r;
                        break;
                    case "input":
                        Ee(e, r),
                        c = xe(e, r),
                        Vt("invalid", e),
                        un(n, "onChange");
                        break;
                    case "option":
                        c = Oe(e, r);
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        c = i({}, r, {
                            value: void 0
                        }),
                        Vt("invalid", e),
                        un(n, "onChange");
                        break;
                    case "textarea":
                        Ae(e, r),
                        c = Re(e, r),
                        Vt("invalid", e),
                        un(n, "onChange");
                        break;
                    default:
                        c = r
                    }
                    on(o, c);
                    var s = c;
                    for (l in s)
                        if (s.hasOwnProperty(l)) {
                            var f = s[l];
                            "style" === l ? nn(e, f) : "dangerouslySetInnerHTML" === l ? null != (f = f ? f.__html : void 0) && ze(e, f) : "children" === l ? "string" == typeof f ? ("textarea" !== o || "" !== f) && Be(e, f) : "number" == typeof f && Be(e, "" + f) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (H.hasOwnProperty(l) ? null != f && un(n, l) : null != f && ve(e, l, f, u))
                        }
                    switch (o) {
                    case "input":
                        we(e),
                        _e(e, r, !1);
                        break;
                    case "textarea":
                        we(e),
                        Ie(e);
                        break;
                    case "option":
                        null != r.value && e.setAttribute("value", "" + be(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        null != (n = r.value) ? Pe(e, !!r.multiple, n, !1) : null != r.defaultValue && Pe(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        "function" == typeof c.onClick && (e.onclick = cn)
                    }
                    vn(o, r) && (t.effectTag |= 4)
                }
                null !== t.ref && (t.effectTag |= 128)
            }
            return null;
        case 6:
            if (e && null != t.stateNode)
                qa(0, t, e.memoizedProps, r);
            else {
                if ("string" != typeof r && null === t.stateNode)
                    throw Error(a(166));
                n = Ao(Ro.current),
                Ao(Oo.current),
                Ca(t) ? (n = t.stateNode,
                r = t.memoizedProps,
                n[Sn] = t,
                n.nodeValue !== r && (t.effectTag |= 4)) : ((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Sn] = t,
                t.stateNode = n)
            }
            return null;
        case 13:
            return ui(Fo),
            r = t.memoizedState,
            0 != (64 & t.effectTag) ? (t.expirationTime = n,
            t) : (n = null !== r,
            r = !1,
            null === e ? void 0 !== t.memoizedProps.fallback && Ca(t) : (r = null !== (o = e.memoizedState),
            n || null === o || null !== (o = e.child.sibling) && (null !== (l = t.firstEffect) ? (t.firstEffect = o,
            o.nextEffect = l) : (t.firstEffect = t.lastEffect = o,
            o.nextEffect = null),
            o.effectTag = 8)),
            n && !r && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Fo.current) ? Cl === wl && (Cl = kl) : (Cl !== wl && Cl !== kl || (Cl = xl),
            0 !== Nl && null !== Sl && (Iu(Sl, _l),
            Lu(Sl, Nl)))),
            (n || r) && (t.effectTag |= 4),
            null);
        case 4:
            return Io(),
            null;
        case 10:
            return eo(t),
            null;
        case 17:
            return hi(t.type) && gi(),
            null;
        case 19:
            if (ui(Fo),
            null === (r = t.memoizedState))
                return null;
            if (o = 0 != (64 & t.effectTag),
            null === (l = r.rendering)) {
                if (o)
                    Qa(r, !1);
                else if (Cl !== wl || null !== e && 0 != (64 & e.effectTag))
                    for (l = t.child; null !== l; ) {
                        if (null !== (e = jo(l))) {
                            for (t.effectTag |= 64,
                            Qa(r, !1),
                            null !== (o = e.updateQueue) && (t.updateQueue = o,
                            t.effectTag |= 4),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = t.child; null !== r; )
                                l = n,
                                (o = r).effectTag &= 2,
                                o.nextEffect = null,
                                o.firstEffect = null,
                                o.lastEffect = null,
                                null === (e = o.alternate) ? (o.childExpirationTime = 0,
                                o.expirationTime = l,
                                o.child = null,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null) : (o.childExpirationTime = e.childExpirationTime,
                                o.expirationTime = e.expirationTime,
                                o.child = e.child,
                                o.memoizedProps = e.memoizedProps,
                                o.memoizedState = e.memoizedState,
                                o.updateQueue = e.updateQueue,
                                l = e.dependencies,
                                o.dependencies = null === l ? null : {
                                    expirationTime: l.expirationTime,
                                    firstContext: l.firstContext,
                                    responders: l.responders
                                }),
                                r = r.sibling;
                            return ci(Fo, 1 & Fo.current | 2),
                            t.child
                        }
                        l = l.sibling
                    }
            } else {
                if (!o)
                    if (null !== (e = jo(l))) {
                        if (t.effectTag |= 64,
                        o = !0,
                        null !== (n = e.updateQueue) && (t.updateQueue = n,
                        t.effectTag |= 4),
                        Qa(r, !0),
                        null === r.tail && "hidden" === r.tailMode && !l.alternate)
                            return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null),
                            null
                    } else
                        2 * zi() - r.renderingStartTime > r.tailExpiration && 1 < n && (t.effectTag |= 64,
                        o = !0,
                        Qa(r, !1),
                        t.expirationTime = t.childExpirationTime = n - 1);
                r.isBackwards ? (l.sibling = t.child,
                t.child = l) : (null !== (n = r.last) ? n.sibling = l : t.child = l,
                r.last = l)
            }
            return null !== r.tail ? (0 === r.tailExpiration && (r.tailExpiration = zi() + 500),
            n = r.tail,
            r.rendering = n,
            r.tail = n.sibling,
            r.lastEffect = t.lastEffect,
            r.renderingStartTime = zi(),
            n.sibling = null,
            t = Fo.current,
            ci(Fo, o ? 1 & t | 2 : 1 & t),
            n) : null
        }
        throw Error(a(156, t.tag))
    }
    function Xa(e) {
        switch (e.tag) {
        case 1:
            hi(e.type) && gi();
            var t = e.effectTag;
            return 4096 & t ? (e.effectTag = -4097 & t | 64,
            e) : null;
        case 3:
            if (Io(),
            ui(di),
            ui(fi),
            0 != (64 & (t = e.effectTag)))
                throw Error(a(285));
            return e.effectTag = -4097 & t | 64,
            e;
        case 5:
            return Do(e),
            null;
        case 13:
            return ui(Fo),
            4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64,
            e) : null;
        case 19:
            return ui(Fo),
            null;
        case 4:
            return Io(),
            null;
        case 10:
            return eo(e),
            null;
        default:
            return null
        }
    }
    function Ja(e, t) {
        return {
            value: e,
            source: t,
            stack: M(t)
        }
    }
    Ba = function(e, t) {
        for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag)
                e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === t)
                break;
            for (; null === n.sibling; ) {
                if (null === n.return || n.return === t)
                    return;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
    ,
    Ua = function(e, t, n, r, o) {
        var a = e.memoizedProps;
        if (a !== r) {
            var l, u, c = t.stateNode;
            switch (Ao(Oo.current),
            e = null,
            n) {
            case "input":
                a = xe(c, a),
                r = xe(c, r),
                e = [];
                break;
            case "option":
                a = Oe(c, a),
                r = Oe(c, r),
                e = [];
                break;
            case "select":
                a = i({}, a, {
                    value: void 0
                }),
                r = i({}, r, {
                    value: void 0
                }),
                e = [];
                break;
            case "textarea":
                a = Re(c, a),
                r = Re(c, r),
                e = [];
                break;
            default:
                "function" != typeof a.onClick && "function" == typeof r.onClick && (c.onclick = cn)
            }
            for (l in on(n, r),
            n = null,
            a)
                if (!r.hasOwnProperty(l) && a.hasOwnProperty(l) && null != a[l])
                    if ("style" === l)
                        for (u in c = a[l])
                            c.hasOwnProperty(u) && (n || (n = {}),
                            n[u] = "");
                    else
                        "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (H.hasOwnProperty(l) ? e || (e = []) : (e = e || []).push(l, null));
            for (l in r) {
                var s = r[l];
                if (c = null != a ? a[l] : void 0,
                r.hasOwnProperty(l) && s !== c && (null != s || null != c))
                    if ("style" === l)
                        if (c) {
                            for (u in c)
                                !c.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (n || (n = {}),
                                n[u] = "");
                            for (u in s)
                                s.hasOwnProperty(u) && c[u] !== s[u] && (n || (n = {}),
                                n[u] = s[u])
                        } else
                            n || (e || (e = []),
                            e.push(l, n)),
                            n = s;
                    else
                        "dangerouslySetInnerHTML" === l ? (s = s ? s.__html : void 0,
                        c = c ? c.__html : void 0,
                        null != s && c !== s && (e = e || []).push(l, s)) : "children" === l ? c === s || "string" != typeof s && "number" != typeof s || (e = e || []).push(l, "" + s) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (H.hasOwnProperty(l) ? (null != s && un(o, l),
                        e || c === s || (e = [])) : (e = e || []).push(l, s))
            }
            n && (e = e || []).push("style", n),
            o = e,
            (t.updateQueue = o) && (t.effectTag |= 4)
        }
    }
    ,
    qa = function(e, t, n, r) {
        n !== r && (t.effectTag |= 4)
    }
    ;
    var Za = "function" == typeof WeakSet ? WeakSet : Set;
    function el(e, t) {
        var n = t.source
          , r = t.stack;
        null === r && null !== n && (r = M(n)),
        null !== n && j(n.type),
        t = t.value,
        null !== e && 1 === e.tag && j(e.type);
        try {
            console.error(t)
        } catch (i) {
            setTimeout((function() {
                throw i
            }
            ))
        }
    }
    function tl(e) {
        var t = e.ref;
        if (null !== t)
            if ("function" == typeof t)
                try {
                    t(null)
                } catch (n) {
                    bu(e, n)
                }
            else
                t.current = null
    }
    function nl(e, t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
            return;
        case 1:
            if (256 & t.effectTag && null !== e) {
                var n = e.memoizedProps
                  , r = e.memoizedState;
                t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Ki(t.type, n), r),
                e.__reactInternalSnapshotBeforeUpdate = t
            }
            return;
        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
            return
        }
        throw Error(a(163))
    }
    function rl(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.destroy;
                    n.destroy = void 0,
                    void 0 !== r && r()
                }
                n = n.next
            } while (n !== t)
        }
    }
    function il(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }
    function ol(e, t, n) {
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
            return void il(3, n);
        case 1:
            if (e = n.stateNode,
            4 & n.effectTag)
                if (null === t)
                    e.componentDidMount();
                else {
                    var r = n.elementType === n.type ? t.memoizedProps : Ki(n.type, t.memoizedProps);
                    e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate)
                }
            return void (null !== (t = n.updateQueue) && fo(n, t, e));
        case 3:
            if (null !== (t = n.updateQueue)) {
                if (e = null,
                null !== n.child)
                    switch (n.child.tag) {
                    case 5:
                        e = n.child.stateNode;
                        break;
                    case 1:
                        e = n.child.stateNode
                    }
                fo(n, t, e)
            }
            return;
        case 5:
            return e = n.stateNode,
            void (null === t && 4 & n.effectTag && vn(n.type, n.memoizedProps) && e.focus());
        case 6:
        case 4:
        case 12:
            return;
        case 13:
            return void (null === n.memoizedState && (n = n.alternate,
            null !== n && (n = n.memoizedState,
            null !== n && (n = n.dehydrated,
            null !== n && Ft(n)))));
        case 19:
        case 17:
        case 20:
        case 21:
            return
        }
        throw Error(a(163))
    }
    function al(e, t, n) {
        switch ("function" == typeof xu && xu(t),
        t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var r = e.next;
                qi(97 < n ? 97 : n, (function() {
                    var e = r;
                    do {
                        var n = e.destroy;
                        if (void 0 !== n) {
                            var i = t;
                            try {
                                n()
                            } catch (o) {
                                bu(i, o)
                            }
                        }
                        e = e.next
                    } while (e !== r)
                }
                ))
            }
            break;
        case 1:
            tl(t),
            "function" == typeof (n = t.stateNode).componentWillUnmount && function(e, t) {
                try {
                    t.props = e.memoizedProps,
                    t.state = e.memoizedState,
                    t.componentWillUnmount()
                } catch (n) {
                    bu(e, n)
                }
            }(t, n);
            break;
        case 5:
            tl(t);
            break;
        case 4:
            sl(e, t, n)
        }
    }
    function ll(e) {
        var t = e.alternate;
        e.return = null,
        e.child = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.alternate = null,
        e.firstEffect = null,
        e.lastEffect = null,
        e.pendingProps = null,
        e.memoizedProps = null,
        e.stateNode = null,
        null !== t && ll(t)
    }
    function ul(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }
    function cl(e) {
        e: {
            for (var t = e.return; null !== t; ) {
                if (ul(t)) {
                    var n = t;
                    break e
                }
                t = t.return
            }
            throw Error(a(160))
        }
        switch (t = n.stateNode,
        n.tag) {
        case 5:
            var r = !1;
            break;
        case 3:
        case 4:
            t = t.containerInfo,
            r = !0;
            break;
        default:
            throw Error(a(161))
        }
        16 & n.effectTag && (Be(t, ""),
        n.effectTag &= -17);
        e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
                if (null === n.return || ul(n.return)) {
                    n = null;
                    break e
                }
                n = n.return
            }
            for (n.sibling.return = n.return,
            n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
                if (2 & n.effectTag)
                    continue t;
                if (null === n.child || 4 === n.tag)
                    continue t;
                n.child.return = n,
                n = n.child
            }
            if (!(2 & n.effectTag)) {
                n = n.stateNode;
                break e
            }
        }
        r ? function e(t, n, r) {
            var i = t.tag
              , o = 5 === i || 6 === i;
            if (o)
                t = o ? t.stateNode : t.stateNode.instance,
                n ? 8 === r.nodeType ? r.parentNode.insertBefore(t, n) : r.insertBefore(t, n) : (8 === r.nodeType ? (n = r.parentNode).insertBefore(t, r) : (n = r).appendChild(t),
                null !== (r = r._reactRootContainer) && void 0 !== r || null !== n.onclick || (n.onclick = cn));
            else if (4 !== i && null !== (t = t.child))
                for (e(t, n, r),
                t = t.sibling; null !== t; )
                    e(t, n, r),
                    t = t.sibling
        }(e, n, t) : function e(t, n, r) {
            var i = t.tag
              , o = 5 === i || 6 === i;
            if (o)
                t = o ? t.stateNode : t.stateNode.instance,
                n ? r.insertBefore(t, n) : r.appendChild(t);
            else if (4 !== i && null !== (t = t.child))
                for (e(t, n, r),
                t = t.sibling; null !== t; )
                    e(t, n, r),
                    t = t.sibling
        }(e, n, t)
    }
    function sl(e, t, n) {
        for (var r, i, o = t, l = !1; ; ) {
            if (!l) {
                l = o.return;
                e: for (; ; ) {
                    if (null === l)
                        throw Error(a(160));
                    switch (r = l.stateNode,
                    l.tag) {
                    case 5:
                        i = !1;
                        break e;
                    case 3:
                    case 4:
                        r = r.containerInfo,
                        i = !0;
                        break e
                    }
                    l = l.return
                }
                l = !0
            }
            if (5 === o.tag || 6 === o.tag) {
                e: for (var u = e, c = o, s = n, f = c; ; )
                    if (al(u, f, s),
                    null !== f.child && 4 !== f.tag)
                        f.child.return = f,
                        f = f.child;
                    else {
                        if (f === c)
                            break e;
                        for (; null === f.sibling; ) {
                            if (null === f.return || f.return === c)
                                break e;
                            f = f.return
                        }
                        f.sibling.return = f.return,
                        f = f.sibling
                    }
                i ? (u = r,
                c = o.stateNode,
                8 === u.nodeType ? u.parentNode.removeChild(c) : u.removeChild(c)) : r.removeChild(o.stateNode)
            } else if (4 === o.tag) {
                if (null !== o.child) {
                    r = o.stateNode.containerInfo,
                    i = !0,
                    o.child.return = o,
                    o = o.child;
                    continue
                }
            } else if (al(e, o, n),
            null !== o.child) {
                o.child.return = o,
                o = o.child;
                continue
            }
            if (o === t)
                break;
            for (; null === o.sibling; ) {
                if (null === o.return || o.return === t)
                    return;
                4 === (o = o.return).tag && (l = !1)
            }
            o.sibling.return = o.return,
            o = o.sibling
        }
    }
    function fl(e, t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            return void rl(3, t);
        case 1:
            return;
        case 5:
            var n = t.stateNode;
            if (null != n) {
                var r = t.memoizedProps
                  , i = null !== e ? e.memoizedProps : r;
                e = t.type;
                var o = t.updateQueue;
                if (t.updateQueue = null,
                null !== o) {
                    for (n[Tn] = r,
                    "input" === e && "radio" === r.type && null != r.name && Se(n, r),
                    an(e, i),
                    t = an(e, r),
                    i = 0; i < o.length; i += 2) {
                        var l = o[i]
                          , u = o[i + 1];
                        "style" === l ? nn(n, u) : "dangerouslySetInnerHTML" === l ? ze(n, u) : "children" === l ? Be(n, u) : ve(n, l, u, t)
                    }
                    switch (e) {
                    case "input":
                        Te(n, r);
                        break;
                    case "textarea":
                        Ne(n, r);
                        break;
                    case "select":
                        t = n._wrapperState.wasMultiple,
                        n._wrapperState.wasMultiple = !!r.multiple,
                        null != (e = r.value) ? Pe(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Pe(n, !!r.multiple, r.defaultValue, !0) : Pe(n, !!r.multiple, r.multiple ? [] : "", !1))
                    }
                }
            }
            return;
        case 6:
            if (null === t.stateNode)
                throw Error(a(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
        case 3:
            return void ((t = t.stateNode).hydrate && (t.hydrate = !1,
            Ft(t.containerInfo)));
        case 12:
            return;
        case 13:
            if (n = t,
            null === t.memoizedState ? r = !1 : (r = !0,
            n = t.child,
            Ll = zi()),
            null !== n)
                e: for (e = n; ; ) {
                    if (5 === e.tag)
                        o = e.stateNode,
                        r ? "function" == typeof (o = o.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (o = e.stateNode,
                        i = null != (i = e.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null,
                        o.style.display = tn("display", i));
                    else if (6 === e.tag)
                        e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                    else {
                        if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                            (o = e.child.sibling).return = e,
                            e = o;
                            continue
                        }
                        if (null !== e.child) {
                            e.child.return = e,
                            e = e.child;
                            continue
                        }
                    }
                    if (e === n)
                        break;
                    for (; null === e.sibling; ) {
                        if (null === e.return || e.return === n)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            return void dl(t);
        case 19:
            return void dl(t);
        case 17:
            return
        }
        throw Error(a(163))
    }
    function dl(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Za),
            t.forEach((function(t) {
                var r = wu.bind(null, e, t);
                n.has(t) || (n.add(t),
                t.then(r, r))
            }
            ))
        }
    }
    var pl = "function" == typeof WeakMap ? WeakMap : Map;
    function ml(e, t, n) {
        (n = lo(n, null)).tag = 3,
        n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Fl || (Fl = !0,
            jl = r),
            el(e, t)
        }
        ,
        n
    }
    function hl(e, t, n) {
        (n = lo(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
            var i = t.value;
            n.payload = function() {
                return el(e, t),
                r(i)
            }
        }
        var o = e.stateNode;
        return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
            "function" != typeof r && (null === Ml ? Ml = new Set([this]) : Ml.add(this),
            el(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: null !== n ? n : ""
            })
        }
        ),
        n
    }
    var gl, vl = Math.ceil, bl = b.ReactCurrentDispatcher, yl = b.ReactCurrentOwner, wl = 0, kl = 3, xl = 4, El = 0, Sl = null, Tl = null, _l = 0, Cl = wl, Ol = null, Pl = 1073741823, Rl = 1073741823, Al = null, Nl = 0, Il = !1, Ll = 0, Dl = null, Fl = !1, jl = null, Ml = null, zl = !1, Bl = null, Ul = 90, ql = null, $l = 0, Gl = null, Hl = 0;
    function Wl() {
        return 0 != (48 & El) ? 1073741821 - (zi() / 10 | 0) : 0 !== Hl ? Hl : Hl = 1073741821 - (zi() / 10 | 0)
    }
    function Vl(e, t, n) {
        if (0 == (2 & (t = t.mode)))
            return 1073741823;
        var r = Bi();
        if (0 == (4 & t))
            return 99 === r ? 1073741823 : 1073741822;
        if (0 != (16 & El))
            return _l;
        if (null !== n)
            e = Vi(e, 0 | n.timeoutMs || 5e3, 250);
        else
            switch (r) {
            case 99:
                e = 1073741823;
                break;
            case 98:
                e = Vi(e, 150, 100);
                break;
            case 97:
            case 96:
                e = Vi(e, 5e3, 250);
                break;
            case 95:
                e = 2;
                break;
            default:
                throw Error(a(326))
            }
        return null !== Sl && e === _l && --e,
        e
    }
    function Kl(e, t) {
        if (50 < $l)
            throw $l = 0,
            Gl = null,
            Error(a(185));
        if (null !== (e = Ql(e, t))) {
            var n = Bi();
            1073741823 === t ? 0 != (8 & El) && 0 == (48 & El) ? Zl(e) : (Xl(e),
            0 === El && Hi()) : Xl(e),
            0 == (4 & El) || 98 !== n && 99 !== n || (null === ql ? ql = new Map([[e, t]]) : (void 0 === (n = ql.get(e)) || n > t) && ql.set(e, t))
        }
    }
    function Ql(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return
          , i = null;
        if (null === r && 3 === e.tag)
            i = e.stateNode;
        else
            for (; null !== r; ) {
                if (n = r.alternate,
                r.childExpirationTime < t && (r.childExpirationTime = t),
                null !== n && n.childExpirationTime < t && (n.childExpirationTime = t),
                null === r.return && 3 === r.tag) {
                    i = r.stateNode;
                    break
                }
                r = r.return
            }
        return null !== i && (Sl === i && (au(t),
        Cl === xl && Iu(i, _l)),
        Lu(i, t)),
        i
    }
    function Yl(e) {
        var t = e.lastExpiredTime;
        if (0 !== t)
            return t;
        if (!Nu(e, t = e.firstPendingTime))
            return t;
        var n = e.lastPingedTime;
        return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e
    }
    function Xl(e) {
        if (0 !== e.lastExpiredTime)
            e.callbackExpirationTime = 1073741823,
            e.callbackPriority = 99,
            e.callbackNode = Gi(Zl.bind(null, e));
        else {
            var t = Yl(e)
              , n = e.callbackNode;
            if (0 === t)
                null !== n && (e.callbackNode = null,
                e.callbackExpirationTime = 0,
                e.callbackPriority = 90);
            else {
                var r = Wl();
                if (1073741823 === t ? r = 99 : 1 === t || 2 === t ? r = 95 : r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95,
                null !== n) {
                    var i = e.callbackPriority;
                    if (e.callbackExpirationTime === t && i >= r)
                        return;
                    n !== Ni && Ei(n)
                }
                e.callbackExpirationTime = t,
                e.callbackPriority = r,
                t = 1073741823 === t ? Gi(Zl.bind(null, e)) : $i(r, Jl.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - zi()
                }),
                e.callbackNode = t
            }
        }
    }
    function Jl(e, t) {
        if (Hl = 0,
        t)
            return Du(e, t = Wl()),
            Xl(e),
            null;
        var n = Yl(e);
        if (0 !== n) {
            if (t = e.callbackNode,
            0 != (48 & El))
                throw Error(a(327));
            if (hu(),
            e === Sl && n === _l || nu(e, n),
            null !== Tl) {
                var r = El;
                El |= 16;
                for (var i = iu(); ; )
                    try {
                        uu();
                        break
                    } catch (u) {
                        ru(e, u)
                    }
                if (Zi(),
                El = r,
                bl.current = i,
                1 === Cl)
                    throw t = Ol,
                    nu(e, n),
                    Iu(e, n),
                    Xl(e),
                    t;
                if (null === Tl)
                    switch (i = e.finishedWork = e.current.alternate,
                    e.finishedExpirationTime = n,
                    r = Cl,
                    Sl = null,
                    r) {
                    case wl:
                    case 1:
                        throw Error(a(345));
                    case 2:
                        Du(e, 2 < n ? 2 : n);
                        break;
                    case kl:
                        if (Iu(e, n),
                        n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fu(i)),
                        1073741823 === Pl && 10 < (i = Ll + 500 - zi())) {
                            if (Il) {
                                var o = e.lastPingedTime;
                                if (0 === o || o >= n) {
                                    e.lastPingedTime = n,
                                    nu(e, n);
                                    break
                                }
                            }
                            if (0 !== (o = Yl(e)) && o !== n)
                                break;
                            if (0 !== r && r !== n) {
                                e.lastPingedTime = r;
                                break
                            }
                            e.timeoutHandle = yn(du.bind(null, e), i);
                            break
                        }
                        du(e);
                        break;
                    case xl:
                        if (Iu(e, n),
                        n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fu(i)),
                        Il && (0 === (i = e.lastPingedTime) || i >= n)) {
                            e.lastPingedTime = n,
                            nu(e, n);
                            break
                        }
                        if (0 !== (i = Yl(e)) && i !== n)
                            break;
                        if (0 !== r && r !== n) {
                            e.lastPingedTime = r;
                            break
                        }
                        if (1073741823 !== Rl ? r = 10 * (1073741821 - Rl) - zi() : 1073741823 === Pl ? r = 0 : (r = 10 * (1073741821 - Pl) - 5e3,
                        0 > (r = (i = zi()) - r) && (r = 0),
                        (n = 10 * (1073741821 - n) - i) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vl(r / 1960)) - r) && (r = n)),
                        10 < r) {
                            e.timeoutHandle = yn(du.bind(null, e), r);
                            break
                        }
                        du(e);
                        break;
                    case 5:
                        if (1073741823 !== Pl && null !== Al) {
                            o = Pl;
                            var l = Al;
                            if (0 >= (r = 0 | l.busyMinDurationMs) ? r = 0 : (i = 0 | l.busyDelayMs,
                            r = (o = zi() - (10 * (1073741821 - o) - (0 | l.timeoutMs || 5e3))) <= i ? 0 : i + r - o),
                            10 < r) {
                                Iu(e, n),
                                e.timeoutHandle = yn(du.bind(null, e), r);
                                break
                            }
                        }
                        du(e);
                        break;
                    default:
                        throw Error(a(329))
                    }
                if (Xl(e),
                e.callbackNode === t)
                    return Jl.bind(null, e)
            }
        }
        return null
    }
    function Zl(e) {
        var t = e.lastExpiredTime;
        if (t = 0 !== t ? t : 1073741823,
        0 != (48 & El))
            throw Error(a(327));
        if (hu(),
        e === Sl && t === _l || nu(e, t),
        null !== Tl) {
            var n = El;
            El |= 16;
            for (var r = iu(); ; )
                try {
                    lu();
                    break
                } catch (i) {
                    ru(e, i)
                }
            if (Zi(),
            El = n,
            bl.current = r,
            1 === Cl)
                throw n = Ol,
                nu(e, t),
                Iu(e, t),
                Xl(e),
                n;
            if (null !== Tl)
                throw Error(a(261));
            e.finishedWork = e.current.alternate,
            e.finishedExpirationTime = t,
            Sl = null,
            du(e),
            Xl(e)
        }
        return null
    }
    function eu(e, t) {
        var n = El;
        El |= 1;
        try {
            return e(t)
        } finally {
            0 === (El = n) && Hi()
        }
    }
    function tu(e, t) {
        var n = El;
        El &= -2,
        El |= 8;
        try {
            return e(t)
        } finally {
            0 === (El = n) && Hi()
        }
    }
    function nu(e, t) {
        e.finishedWork = null,
        e.finishedExpirationTime = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1,
        wn(n)),
        null !== Tl)
            for (n = Tl.return; null !== n; ) {
                var r = n;
                switch (r.tag) {
                case 1:
                    null != (r = r.type.childContextTypes) && gi();
                    break;
                case 3:
                    Io(),
                    ui(di),
                    ui(fi);
                    break;
                case 5:
                    Do(r);
                    break;
                case 4:
                    Io();
                    break;
                case 13:
                case 19:
                    ui(Fo);
                    break;
                case 10:
                    eo(r)
                }
                n = n.return
            }
        Sl = e,
        Tl = _u(e.current, null),
        _l = t,
        Cl = wl,
        Ol = null,
        Rl = Pl = 1073741823,
        Al = null,
        Nl = 0,
        Il = !1
    }
    function ru(e, t) {
        for (; ; ) {
            try {
                if (Zi(),
                zo.current = ga,
                Ho)
                    for (var n = qo.memoizedState; null !== n; ) {
                        var r = n.queue;
                        null !== r && (r.pending = null),
                        n = n.next
                    }
                if (Uo = 0,
                Go = $o = qo = null,
                Ho = !1,
                null === Tl || null === Tl.return)
                    return Cl = 1,
                    Ol = t,
                    Tl = null;
                e: {
                    var i = e
                      , o = Tl.return
                      , a = Tl
                      , l = t;
                    if (t = _l,
                    a.effectTag |= 2048,
                    a.firstEffect = a.lastEffect = null,
                    null !== l && "object" == typeof l && "function" == typeof l.then) {
                        var u = l;
                        if (0 == (2 & a.mode)) {
                            var c = a.alternate;
                            c ? (a.memoizedState = c.memoizedState,
                            a.expirationTime = c.expirationTime) : a.memoizedState = null
                        }
                        var s = 0 != (1 & Fo.current)
                          , f = o;
                        do {
                            var d;
                            if (d = 13 === f.tag) {
                                var p = f.memoizedState;
                                if (null !== p)
                                    d = null !== p.dehydrated;
                                else {
                                    var m = f.memoizedProps;
                                    d = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !s)
                                }
                            }
                            if (d) {
                                var h = f.updateQueue;
                                if (null === h) {
                                    var g = new Set;
                                    g.add(u),
                                    f.updateQueue = g
                                } else
                                    h.add(u);
                                if (0 == (2 & f.mode)) {
                                    if (f.effectTag |= 64,
                                    a.effectTag &= -2981,
                                    1 === a.tag)
                                        if (null === a.alternate)
                                            a.tag = 17;
                                        else {
                                            var v = lo(1073741823, null);
                                            v.tag = 2,
                                            uo(a, v)
                                        }
                                    a.expirationTime = 1073741823;
                                    break e
                                }
                                l = void 0,
                                a = t;
                                var b = i.pingCache;
                                if (null === b ? (b = i.pingCache = new pl,
                                l = new Set,
                                b.set(u, l)) : void 0 === (l = b.get(u)) && (l = new Set,
                                b.set(u, l)),
                                !l.has(a)) {
                                    l.add(a);
                                    var y = yu.bind(null, i, u, a);
                                    u.then(y, y)
                                }
                                f.effectTag |= 4096,
                                f.expirationTime = t;
                                break e
                            }
                            f = f.return
                        } while (null !== f);l = Error((j(a.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + M(a))
                    }
                    5 !== Cl && (Cl = 2),
                    l = Ja(l, a),
                    f = o;
                    do {
                        switch (f.tag) {
                        case 3:
                            u = l,
                            f.effectTag |= 4096,
                            f.expirationTime = t,
                            co(f, ml(f, u, t));
                            break e;
                        case 1:
                            u = l;
                            var w = f.type
                              , k = f.stateNode;
                            if (0 == (64 & f.effectTag) && ("function" == typeof w.getDerivedStateFromError || null !== k && "function" == typeof k.componentDidCatch && (null === Ml || !Ml.has(k)))) {
                                f.effectTag |= 4096,
                                f.expirationTime = t,
                                co(f, hl(f, u, t));
                                break e
                            }
                        }
                        f = f.return
                    } while (null !== f)
                }
                Tl = su(Tl)
            } catch (x) {
                t = x;
                continue
            }
            break
        }
    }
    function iu() {
        var e = bl.current;
        return bl.current = ga,
        null === e ? ga : e
    }
    function ou(e, t) {
        e < Pl && 2 < e && (Pl = e),
        null !== t && e < Rl && 2 < e && (Rl = e,
        Al = t)
    }
    function au(e) {
        e > Nl && (Nl = e)
    }
    function lu() {
        for (; null !== Tl; )
            Tl = cu(Tl)
    }
    function uu() {
        for (; null !== Tl && !Ii(); )
            Tl = cu(Tl)
    }
    function cu(e) {
        var t = gl(e.alternate, e, _l);
        return e.memoizedProps = e.pendingProps,
        null === t && (t = su(e)),
        yl.current = null,
        t
    }
    function su(e) {
        Tl = e;
        do {
            var t = Tl.alternate;
            if (e = Tl.return,
            0 == (2048 & Tl.effectTag)) {
                if (t = Ya(t, Tl, _l),
                1 === _l || 1 !== Tl.childExpirationTime) {
                    for (var n = 0, r = Tl.child; null !== r; ) {
                        var i = r.expirationTime
                          , o = r.childExpirationTime;
                        i > n && (n = i),
                        o > n && (n = o),
                        r = r.sibling
                    }
                    Tl.childExpirationTime = n
                }
                if (null !== t)
                    return t;
                null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = Tl.firstEffect),
                null !== Tl.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Tl.firstEffect),
                e.lastEffect = Tl.lastEffect),
                1 < Tl.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Tl : e.firstEffect = Tl,
                e.lastEffect = Tl))
            } else {
                if (null !== (t = Xa(Tl)))
                    return t.effectTag &= 2047,
                    t;
                null !== e && (e.firstEffect = e.lastEffect = null,
                e.effectTag |= 2048)
            }
            if (null !== (t = Tl.sibling))
                return t;
            Tl = e
        } while (null !== Tl);return Cl === wl && (Cl = 5),
        null
    }
    function fu(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e
    }
    function du(e) {
        var t = Bi();
        return qi(99, pu.bind(null, e, t)),
        null
    }
    function pu(e, t) {
        do {
            hu()
        } while (null !== Bl);if (0 != (48 & El))
            throw Error(a(327));
        var n = e.finishedWork
          , r = e.finishedExpirationTime;
        if (null === n)
            return null;
        if (e.finishedWork = null,
        e.finishedExpirationTime = 0,
        n === e.current)
            throw Error(a(177));
        e.callbackNode = null,
        e.callbackExpirationTime = 0,
        e.callbackPriority = 90,
        e.nextKnownPendingLevel = 0;
        var i = fu(n);
        if (e.firstPendingTime = i,
        r <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
        r <= e.lastPingedTime && (e.lastPingedTime = 0),
        r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
        e === Sl && (Tl = Sl = null,
        _l = 0),
        1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n,
        i = n.firstEffect) : i = n : i = n.firstEffect,
        null !== i) {
            var o = El;
            El |= 32,
            yl.current = null,
            hn = Wt;
            var l = pn();
            if (mn(l)) {
                if ("selectionStart"in l)
                    var u = {
                        start: l.selectionStart,
                        end: l.selectionEnd
                    };
                else
                    e: {
                        var c = (u = (u = l.ownerDocument) && u.defaultView || window).getSelection && u.getSelection();
                        if (c && 0 !== c.rangeCount) {
                            u = c.anchorNode;
                            var s = c.anchorOffset
                              , f = c.focusNode;
                            c = c.focusOffset;
                            try {
                                u.nodeType,
                                f.nodeType
                            } catch (_) {
                                u = null;
                                break e
                            }
                            var d = 0
                              , p = -1
                              , m = -1
                              , h = 0
                              , g = 0
                              , v = l
                              , b = null;
                            t: for (; ; ) {
                                for (var y; v !== u || 0 !== s && 3 !== v.nodeType || (p = d + s),
                                v !== f || 0 !== c && 3 !== v.nodeType || (m = d + c),
                                3 === v.nodeType && (d += v.nodeValue.length),
                                null !== (y = v.firstChild); )
                                    b = v,
                                    v = y;
                                for (; ; ) {
                                    if (v === l)
                                        break t;
                                    if (b === u && ++h === s && (p = d),
                                    b === f && ++g === c && (m = d),
                                    null !== (y = v.nextSibling))
                                        break;
                                    b = (v = b).parentNode
                                }
                                v = y
                            }
                            u = -1 === p || -1 === m ? null : {
                                start: p,
                                end: m
                            }
                        } else
                            u = null
                    }
                u = u || {
                    start: 0,
                    end: 0
                }
            } else
                u = null;
            gn = {
                activeElementDetached: null,
                focusedElem: l,
                selectionRange: u
            },
            Wt = !1,
            Dl = i;
            do {
                try {
                    mu()
                } catch (_) {
                    if (null === Dl)
                        throw Error(a(330));
                    bu(Dl, _),
                    Dl = Dl.nextEffect
                }
            } while (null !== Dl);Dl = i;
            do {
                try {
                    for (l = e,
                    u = t; null !== Dl; ) {
                        var w = Dl.effectTag;
                        if (16 & w && Be(Dl.stateNode, ""),
                        128 & w) {
                            var k = Dl.alternate;
                            if (null !== k) {
                                var x = k.ref;
                                null !== x && ("function" == typeof x ? x(null) : x.current = null)
                            }
                        }
                        switch (1038 & w) {
                        case 2:
                            cl(Dl),
                            Dl.effectTag &= -3;
                            break;
                        case 6:
                            cl(Dl),
                            Dl.effectTag &= -3,
                            fl(Dl.alternate, Dl);
                            break;
                        case 1024:
                            Dl.effectTag &= -1025;
                            break;
                        case 1028:
                            Dl.effectTag &= -1025,
                            fl(Dl.alternate, Dl);
                            break;
                        case 4:
                            fl(Dl.alternate, Dl);
                            break;
                        case 8:
                            sl(l, s = Dl, u),
                            ll(s)
                        }
                        Dl = Dl.nextEffect
                    }
                } catch (_) {
                    if (null === Dl)
                        throw Error(a(330));
                    bu(Dl, _),
                    Dl = Dl.nextEffect
                }
            } while (null !== Dl);if (x = gn,
            k = pn(),
            w = x.focusedElem,
            u = x.selectionRange,
            k !== w && w && w.ownerDocument && function e(t, n) {
                return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains"in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
            }(w.ownerDocument.documentElement, w)) {
                null !== u && mn(w) && (k = u.start,
                void 0 === (x = u.end) && (x = k),
                "selectionStart"in w ? (w.selectionStart = k,
                w.selectionEnd = Math.min(x, w.value.length)) : (x = (k = w.ownerDocument || document) && k.defaultView || window).getSelection && (x = x.getSelection(),
                s = w.textContent.length,
                l = Math.min(u.start, s),
                u = void 0 === u.end ? l : Math.min(u.end, s),
                !x.extend && l > u && (s = u,
                u = l,
                l = s),
                s = dn(w, l),
                f = dn(w, u),
                s && f && (1 !== x.rangeCount || x.anchorNode !== s.node || x.anchorOffset !== s.offset || x.focusNode !== f.node || x.focusOffset !== f.offset) && ((k = k.createRange()).setStart(s.node, s.offset),
                x.removeAllRanges(),
                l > u ? (x.addRange(k),
                x.extend(f.node, f.offset)) : (k.setEnd(f.node, f.offset),
                x.addRange(k))))),
                k = [];
                for (x = w; x = x.parentNode; )
                    1 === x.nodeType && k.push({
                        element: x,
                        left: x.scrollLeft,
                        top: x.scrollTop
                    });
                for ("function" == typeof w.focus && w.focus(),
                w = 0; w < k.length; w++)
                    (x = k[w]).element.scrollLeft = x.left,
                    x.element.scrollTop = x.top
            }
            Wt = !!hn,
            gn = hn = null,
            e.current = n,
            Dl = i;
            do {
                try {
                    for (w = e; null !== Dl; ) {
                        var E = Dl.effectTag;
                        if (36 & E && ol(w, Dl.alternate, Dl),
                        128 & E) {
                            k = void 0;
                            var S = Dl.ref;
                            if (null !== S) {
                                var T = Dl.stateNode;
                                switch (Dl.tag) {
                                case 5:
                                    k = T;
                                    break;
                                default:
                                    k = T
                                }
                                "function" == typeof S ? S(k) : S.current = k
                            }
                        }
                        Dl = Dl.nextEffect
                    }
                } catch (_) {
                    if (null === Dl)
                        throw Error(a(330));
                    bu(Dl, _),
                    Dl = Dl.nextEffect
                }
            } while (null !== Dl);Dl = null,
            Li(),
            El = o
        } else
            e.current = n;
        if (zl)
            zl = !1,
            Bl = e,
            Ul = t;
        else
            for (Dl = i; null !== Dl; )
                t = Dl.nextEffect,
                Dl.nextEffect = null,
                Dl = t;
        if (0 === (t = e.firstPendingTime) && (Ml = null),
        1073741823 === t ? e === Gl ? $l++ : ($l = 0,
        Gl = e) : $l = 0,
        "function" == typeof ku && ku(n.stateNode, r),
        Xl(e),
        Fl)
            throw Fl = !1,
            e = jl,
            jl = null,
            e;
        return 0 != (8 & El) || Hi(),
        null
    }
    function mu() {
        for (; null !== Dl; ) {
            var e = Dl.effectTag;
            0 != (256 & e) && nl(Dl.alternate, Dl),
            0 == (512 & e) || zl || (zl = !0,
            $i(97, (function() {
                return hu(),
                null
            }
            ))),
            Dl = Dl.nextEffect
        }
    }
    function hu() {
        if (90 !== Ul) {
            var e = 97 < Ul ? 97 : Ul;
            return Ul = 90,
            qi(e, gu)
        }
    }
    function gu() {
        if (null === Bl)
            return !1;
        var e = Bl;
        if (Bl = null,
        0 != (48 & El))
            throw Error(a(331));
        var t = El;
        for (El |= 32,
        e = e.current.firstEffect; null !== e; ) {
            try {
                var n = e;
                if (0 != (512 & n.effectTag))
                    switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        rl(5, n),
                        il(5, n)
                    }
            } catch (r) {
                if (null === e)
                    throw Error(a(330));
                bu(e, r)
            }
            n = e.nextEffect,
            e.nextEffect = null,
            e = n
        }
        return El = t,
        Hi(),
        !0
    }
    function vu(e, t, n) {
        uo(e, t = ml(e, t = Ja(n, t), 1073741823)),
        null !== (e = Ql(e, 1073741823)) && Xl(e)
    }
    function bu(e, t) {
        if (3 === e.tag)
            vu(e, e, t);
        else
            for (var n = e.return; null !== n; ) {
                if (3 === n.tag) {
                    vu(n, e, t);
                    break
                }
                if (1 === n.tag) {
                    var r = n.stateNode;
                    if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Ml || !Ml.has(r))) {
                        uo(n, e = hl(n, e = Ja(t, e), 1073741823)),
                        null !== (n = Ql(n, 1073741823)) && Xl(n);
                        break
                    }
                }
                n = n.return
            }
    }
    function yu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
        Sl === e && _l === n ? Cl === xl || Cl === kl && 1073741823 === Pl && zi() - Ll < 500 ? nu(e, _l) : Il = !0 : Nu(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n,
        Xl(e)))
    }
    function wu(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
        0 === (t = 0) && (t = Vl(t = Wl(), e, null)),
        null !== (e = Ql(e, t)) && Xl(e)
    }
    gl = function(e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
            var i = t.pendingProps;
            if (e.memoizedProps !== i || di.current)
                Ra = !0;
            else {
                if (r < n) {
                    switch (Ra = !1,
                    t.tag) {
                    case 3:
                        za(t),
                        Oa();
                        break;
                    case 5:
                        if (Lo(t),
                        4 & t.mode && 1 !== n && i.hidden)
                            return t.expirationTime = t.childExpirationTime = 1,
                            null;
                        break;
                    case 1:
                        hi(t.type) && yi(t);
                        break;
                    case 4:
                        No(t, t.stateNode.containerInfo);
                        break;
                    case 10:
                        r = t.memoizedProps.value,
                        i = t.type._context,
                        ci(Qi, i._currentValue),
                        i._currentValue = r;
                        break;
                    case 13:
                        if (null !== t.memoizedState)
                            return 0 !== (r = t.child.childExpirationTime) && r >= n ? Ga(e, t, n) : (ci(Fo, 1 & Fo.current),
                            null !== (t = Ka(e, t, n)) ? t.sibling : null);
                        ci(Fo, 1 & Fo.current);
                        break;
                    case 19:
                        if (r = t.childExpirationTime >= n,
                        0 != (64 & e.effectTag)) {
                            if (r)
                                return Va(e, t, n);
                            t.effectTag |= 64
                        }
                        if (null !== (i = t.memoizedState) && (i.rendering = null,
                        i.tail = null),
                        ci(Fo, Fo.current),
                        !r)
                            return null
                    }
                    return Ka(e, t, n)
                }
                Ra = !1
            }
        } else
            Ra = !1;
        switch (t.expirationTime = 0,
        t.tag) {
        case 2:
            if (r = t.type,
            null !== e && (e.alternate = null,
            t.alternate = null,
            t.effectTag |= 2),
            e = t.pendingProps,
            i = mi(t, fi.current),
            no(t, n),
            i = Ko(null, t, r, e, i, n),
            t.effectTag |= 1,
            "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
                if (t.tag = 1,
                t.memoizedState = null,
                t.updateQueue = null,
                hi(r)) {
                    var o = !0;
                    yi(t)
                } else
                    o = !1;
                t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null,
                oo(t);
                var l = r.getDerivedStateFromProps;
                "function" == typeof l && ho(t, r, l, e),
                i.updater = go,
                t.stateNode = i,
                i._reactInternalFiber = t,
                wo(t, r, e, n),
                t = Ma(null, t, r, !0, o, n)
            } else
                t.tag = 0,
                Aa(null, t, i, n),
                t = t.child;
            return t;
        case 16:
            e: {
                if (i = t.elementType,
                null !== e && (e.alternate = null,
                t.alternate = null,
                t.effectTag |= 2),
                e = t.pendingProps,
                function(e) {
                    if (-1 === e._status) {
                        e._status = 0;
                        var t = e._ctor;
                        t = t(),
                        e._result = t,
                        t.then((function(t) {
                            0 === e._status && (t = t.default,
                            e._status = 1,
                            e._result = t)
                        }
                        ), (function(t) {
                            0 === e._status && (e._status = 2,
                            e._result = t)
                        }
                        ))
                    }
                }(i),
                1 !== i._status)
                    throw i._result;
                switch (i = i._result,
                t.type = i,
                o = t.tag = function(e) {
                    if ("function" == typeof e)
                        return Tu(e) ? 1 : 0;
                    if (null != e) {
                        if ((e = e.$$typeof) === P)
                            return 11;
                        if (e === N)
                            return 14
                    }
                    return 2
                }(i),
                e = Ki(i, e),
                o) {
                case 0:
                    t = Fa(null, t, i, e, n);
                    break e;
                case 1:
                    t = ja(null, t, i, e, n);
                    break e;
                case 11:
                    t = Na(null, t, i, e, n);
                    break e;
                case 14:
                    t = Ia(null, t, i, Ki(i.type, e), r, n);
                    break e
                }
                throw Error(a(306, i, ""))
            }
            return t;
        case 0:
            return r = t.type,
            i = t.pendingProps,
            Fa(e, t, r, i = t.elementType === r ? i : Ki(r, i), n);
        case 1:
            return r = t.type,
            i = t.pendingProps,
            ja(e, t, r, i = t.elementType === r ? i : Ki(r, i), n);
        case 3:
            if (za(t),
            r = t.updateQueue,
            null === e || null === r)
                throw Error(a(282));
            if (r = t.pendingProps,
            i = null !== (i = t.memoizedState) ? i.element : null,
            ao(e, t),
            so(t, r, null, n),
            (r = t.memoizedState.element) === i)
                Oa(),
                t = Ka(e, t, n);
            else {
                if ((i = t.stateNode.hydrate) && (ka = kn(t.stateNode.containerInfo.firstChild),
                wa = t,
                i = xa = !0),
                i)
                    for (n = _o(t, null, r, n),
                    t.child = n; n; )
                        n.effectTag = -3 & n.effectTag | 1024,
                        n = n.sibling;
                else
                    Aa(e, t, r, n),
                    Oa();
                t = t.child
            }
            return t;
        case 5:
            return Lo(t),
            null === e && Ta(t),
            r = t.type,
            i = t.pendingProps,
            o = null !== e ? e.memoizedProps : null,
            l = i.children,
            bn(r, i) ? l = null : null !== o && bn(r, o) && (t.effectTag |= 16),
            Da(e, t),
            4 & t.mode && 1 !== n && i.hidden ? (t.expirationTime = t.childExpirationTime = 1,
            t = null) : (Aa(e, t, l, n),
            t = t.child),
            t;
        case 6:
            return null === e && Ta(t),
            null;
        case 13:
            return Ga(e, t, n);
        case 4:
            return No(t, t.stateNode.containerInfo),
            r = t.pendingProps,
            null === e ? t.child = To(t, null, r, n) : Aa(e, t, r, n),
            t.child;
        case 11:
            return r = t.type,
            i = t.pendingProps,
            Na(e, t, r, i = t.elementType === r ? i : Ki(r, i), n);
        case 7:
            return Aa(e, t, t.pendingProps, n),
            t.child;
        case 8:
        case 12:
            return Aa(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            e: {
                r = t.type._context,
                i = t.pendingProps,
                l = t.memoizedProps,
                o = i.value;
                var u = t.type._context;
                if (ci(Qi, u._currentValue),
                u._currentValue = o,
                null !== l)
                    if (u = l.value,
                    0 === (o = jr(u, o) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, o) : 1073741823))) {
                        if (l.children === i.children && !di.current) {
                            t = Ka(e, t, n);
                            break e
                        }
                    } else
                        for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                            var c = u.dependencies;
                            if (null !== c) {
                                l = u.child;
                                for (var s = c.firstContext; null !== s; ) {
                                    if (s.context === r && 0 != (s.observedBits & o)) {
                                        1 === u.tag && ((s = lo(n, null)).tag = 2,
                                        uo(u, s)),
                                        u.expirationTime < n && (u.expirationTime = n),
                                        null !== (s = u.alternate) && s.expirationTime < n && (s.expirationTime = n),
                                        to(u.return, n),
                                        c.expirationTime < n && (c.expirationTime = n);
                                        break
                                    }
                                    s = s.next
                                }
                            } else
                                l = 10 === u.tag && u.type === t.type ? null : u.child;
                            if (null !== l)
                                l.return = u;
                            else
                                for (l = u; null !== l; ) {
                                    if (l === t) {
                                        l = null;
                                        break
                                    }
                                    if (null !== (u = l.sibling)) {
                                        u.return = l.return,
                                        l = u;
                                        break
                                    }
                                    l = l.return
                                }
                            u = l
                        }
                Aa(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type,
            r = (o = t.pendingProps).children,
            no(t, n),
            r = r(i = ro(i, o.unstable_observedBits)),
            t.effectTag |= 1,
            Aa(e, t, r, n),
            t.child;
        case 14:
            return o = Ki(i = t.type, t.pendingProps),
            Ia(e, t, i, o = Ki(i.type, o), r, n);
        case 15:
            return La(e, t, t.type, t.pendingProps, r, n);
        case 17:
            return r = t.type,
            i = t.pendingProps,
            i = t.elementType === r ? i : Ki(r, i),
            null !== e && (e.alternate = null,
            t.alternate = null,
            t.effectTag |= 2),
            t.tag = 1,
            hi(r) ? (e = !0,
            yi(t)) : e = !1,
            no(t, n),
            bo(t, r, i),
            wo(t, r, i, n),
            Ma(null, t, r, !0, e, n);
        case 19:
            return Va(e, t, n)
        }
        throw Error(a(156, t.tag))
    }
    ;
    var ku = null
      , xu = null;
    function Eu(e, t, n, r) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.effectTag = 0,
        this.lastEffect = this.firstEffect = this.nextEffect = null,
        this.childExpirationTime = this.expirationTime = 0,
        this.alternate = null
    }
    function Su(e, t, n, r) {
        return new Eu(e,t,n,r)
    }
    function Tu(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }
    function _u(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Su(e.tag, t, e.key, e.mode)).elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.effectTag = 0,
        n.nextEffect = null,
        n.firstEffect = null,
        n.lastEffect = null),
        n.childExpirationTime = e.childExpirationTime,
        n.expirationTime = e.expirationTime,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = null === t ? null : {
            expirationTime: t.expirationTime,
            firstContext: t.firstContext,
            responders: t.responders
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
    }
    function Cu(e, t, n, r, i, o) {
        var l = 2;
        if (r = e,
        "function" == typeof e)
            Tu(e) && (l = 1);
        else if ("string" == typeof e)
            l = 5;
        else
            e: switch (e) {
            case E:
                return Ou(n.children, i, o, t);
            case O:
                l = 8,
                i |= 7;
                break;
            case S:
                l = 8,
                i |= 1;
                break;
            case T:
                return (e = Su(12, n, t, 8 | i)).elementType = T,
                e.type = T,
                e.expirationTime = o,
                e;
            case R:
                return (e = Su(13, n, t, i)).type = R,
                e.elementType = R,
                e.expirationTime = o,
                e;
            case A:
                return (e = Su(19, n, t, i)).elementType = A,
                e.expirationTime = o,
                e;
            default:
                if ("object" == typeof e && null !== e)
                    switch (e.$$typeof) {
                    case _:
                        l = 10;
                        break e;
                    case C:
                        l = 9;
                        break e;
                    case P:
                        l = 11;
                        break e;
                    case N:
                        l = 14;
                        break e;
                    case I:
                        l = 16,
                        r = null;
                        break e;
                    case L:
                        l = 22;
                        break e
                    }
                throw Error(a(130, null == e ? e : typeof e, ""))
            }
        return (t = Su(l, n, t, i)).elementType = e,
        t.type = r,
        t.expirationTime = o,
        t
    }
    function Ou(e, t, n, r) {
        return (e = Su(7, e, r, t)).expirationTime = n,
        e
    }
    function Pu(e, t, n) {
        return (e = Su(6, e, null, t)).expirationTime = n,
        e
    }
    function Ru(e, t, n) {
        return (t = Su(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function Au(e, t, n) {
        this.tag = t,
        this.current = null,
        this.containerInfo = e,
        this.pingCache = this.pendingChildren = null,
        this.finishedExpirationTime = 0,
        this.finishedWork = null,
        this.timeoutHandle = -1,
        this.pendingContext = this.context = null,
        this.hydrate = n,
        this.callbackNode = null,
        this.callbackPriority = 90,
        this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
    }
    function Nu(e, t) {
        var n = e.firstSuspendedTime;
        return e = e.lastSuspendedTime,
        0 !== n && n >= t && e <= t
    }
    function Iu(e, t) {
        var n = e.firstSuspendedTime
          , r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t),
        (r > t || 0 === n) && (e.lastSuspendedTime = t),
        t <= e.lastPingedTime && (e.lastPingedTime = 0),
        t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
    }
    function Lu(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
        t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
    }
    function Du(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t)
    }
    function Fu(e, t, n, r) {
        var i = t.current
          , o = Wl()
          , l = po.suspense;
        o = Vl(o, i, l);
        e: if (n) {
            t: {
                if (Ze(n = n._reactInternalFiber) !== n || 1 !== n.tag)
                    throw Error(a(170));
                var u = n;
                do {
                    switch (u.tag) {
                    case 3:
                        u = u.stateNode.context;
                        break t;
                    case 1:
                        if (hi(u.type)) {
                            u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                            break t
                        }
                    }
                    u = u.return
                } while (null !== u);throw Error(a(171))
            }
            if (1 === n.tag) {
                var c = n.type;
                if (hi(c)) {
                    n = bi(n, c, u);
                    break e
                }
            }
            n = u
        } else
            n = si;
        return null === t.context ? t.context = n : t.pendingContext = n,
        (t = lo(o, l)).payload = {
            element: e
        },
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        uo(i, t),
        Kl(i, o),
        o
    }
    function ju(e) {
        if (!(e = e.current).child)
            return null;
        switch (e.child.tag) {
        case 5:
        default:
            return e.child.stateNode
        }
    }
    function Mu(e, t) {
        null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
    }
    function zu(e, t) {
        Mu(e, t),
        (e = e.alternate) && Mu(e, t)
    }
    function Bu(e, t, n) {
        var r = new Au(e,t,n = null != n && !0 === n.hydrate)
          , i = Su(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        r.current = i,
        i.stateNode = r,
        oo(i),
        e[_n] = r.current,
        n && 0 !== t && function(e, t) {
            var n = Je(t);
            _t.forEach((function(e) {
                mt(e, t, n)
            }
            )),
            Ct.forEach((function(e) {
                mt(e, t, n)
            }
            ))
        }(0, 9 === e.nodeType ? e : e.ownerDocument),
        this._internalRoot = r
    }
    function Uu(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }
    function qu(e, t, n, r, i) {
        var o = n._reactRootContainer;
        if (o) {
            var a = o._internalRoot;
            if ("function" == typeof i) {
                var l = i;
                i = function() {
                    var e = ju(a);
                    l.call(e)
                }
            }
            Fu(t, a, e, i)
        } else {
            if (o = n._reactRootContainer = function(e, t) {
                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))),
                !t)
                    for (var n; n = e.lastChild; )
                        e.removeChild(n);
                return new Bu(e,0,t ? {
                    hydrate: !0
                } : void 0)
            }(n, r),
            a = o._internalRoot,
            "function" == typeof i) {
                var u = i;
                i = function() {
                    var e = ju(a);
                    u.call(e)
                }
            }
            tu((function() {
                Fu(t, a, e, i)
            }
            ))
        }
        return ju(a)
    }
    function $u(e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: x,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    function Gu(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Uu(t))
            throw Error(a(200));
        return $u(e, t, null, n)
    }
    Bu.prototype.render = function(e) {
        Fu(e, this._internalRoot, null, null)
    }
    ,
    Bu.prototype.unmount = function() {
        var e = this._internalRoot
          , t = e.containerInfo;
        Fu(null, e, null, (function() {
            t[_n] = null
        }
        ))
    }
    ,
    ht = function(e) {
        if (13 === e.tag) {
            var t = Vi(Wl(), 150, 100);
            Kl(e, t),
            zu(e, t)
        }
    }
    ,
    gt = function(e) {
        13 === e.tag && (Kl(e, 3),
        zu(e, 3))
    }
    ,
    vt = function(e) {
        if (13 === e.tag) {
            var t = Wl();
            Kl(e, t = Vl(t, e, null)),
            zu(e, t)
        }
    }
    ,
    Q = function(e, t, n) {
        switch (t) {
        case "input":
            if (Te(e, n),
            t = n.name,
            "radio" === n.type && null != t) {
                for (n = e; n.parentNode; )
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Rn(r);
                        if (!i)
                            throw Error(a(90));
                        ke(r),
                        Te(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Ne(e, n);
            break;
        case "select":
            null != (t = n.value) && Pe(e, !!n.multiple, t, !1)
        }
    }
    ,
    te = eu,
    ne = function(e, t, n, r, i) {
        var o = El;
        El |= 4;
        try {
            return qi(98, e.bind(null, t, n, r, i))
        } finally {
            0 === (El = o) && Hi()
        }
    }
    ,
    re = function() {
        0 == (49 & El) && (function() {
            if (null !== ql) {
                var e = ql;
                ql = null,
                e.forEach((function(e, t) {
                    Du(t, e),
                    Xl(t)
                }
                )),
                Hi()
            }
        }(),
        hu())
    }
    ,
    ie = function(e, t) {
        var n = El;
        El |= 2;
        try {
            return e(t)
        } finally {
            0 === (El = n) && Hi()
        }
    }
    ;
    var Hu, Wu, Vu = {
        Events: [On, Pn, Rn, V, G, jn, function(e) {
            it(e, Fn)
        }
        , Z, ee, Xt, lt, hu, {
            current: !1
        }]
    };
    Wu = (Hu = {
        findFiberByHostInstance: Cn,
        bundleType: 0,
        version: "16.13.0",
        rendererPackageName: "react-dom"
    }).findFiberByHostInstance,
    function(e) {
        if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
            return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber)
            return !0;
        try {
            var n = t.inject(e);
            ku = function(e) {
                try {
                    t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
                } catch (r) {}
            }
            ,
            xu = function(e) {
                try {
                    t.onCommitFiberUnmount(n, e)
                } catch (r) {}
            }
        } catch (r) {}
    }(i({}, Hu, {
        overrideHookState: null,
        overrideProps: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: b.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return null === (e = nt(e)) ? null : e.stateNode
        },
        findFiberByHostInstance: function(e) {
            return Wu ? Wu(e) : null
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
    })),
    t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vu,
    t.createPortal = Gu,
    t.findDOMNode = function(e) {
        if (null == e)
            return null;
        if (1 === e.nodeType)
            return e;
        var t = e._reactInternalFiber;
        if (void 0 === t) {
            if ("function" == typeof e.render)
                throw Error(a(188));
            throw Error(a(268, Object.keys(e)))
        }
        return e = null === (e = nt(t)) ? null : e.stateNode
    }
    ,
    t.flushSync = function(e, t) {
        if (0 != (48 & El))
            throw Error(a(187));
        var n = El;
        El |= 1;
        try {
            return qi(99, e.bind(null, t))
        } finally {
            El = n,
            Hi()
        }
    }
    ,
    t.hydrate = function(e, t, n) {
        if (!Uu(t))
            throw Error(a(200));
        return qu(null, e, t, !0, n)
    }
    ,
    t.render = function(e, t, n) {
        if (!Uu(t))
            throw Error(a(200));
        return qu(null, e, t, !1, n)
    }
    ,
    t.unmountComponentAtNode = function(e) {
        if (!Uu(e))
            throw Error(a(40));
        return !!e._reactRootContainer && (tu((function() {
            qu(null, null, e, !1, (function() {
                e._reactRootContainer = null,
                e[_n] = null
            }
            ))
        }
        )),
        !0)
    }
    ,
    t.unstable_batchedUpdates = eu,
    t.unstable_createPortal = function(e, t) {
        return Gu(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
    }
    ,
    t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Uu(n))
            throw Error(a(200));
        if (null == e || void 0 === e._reactInternalFiber)
            throw Error(a(38));
        return qu(e, t, n, !1, r)
    }
    ,
    t.version = "16.13.0"
}
, function(e, t, n) {
    "use strict";
    e.exports = n(84)
}
, function(e, t, n) {
    "use strict";
    var r, i, o, a, l;
    if ("undefined" == typeof window || "function" != typeof MessageChannel) {
        var u = null
          , c = null
          , s = function() {
            if (null !== u)
                try {
                    var e = t.unstable_now();
                    u(!0, e),
                    u = null
                } catch (n) {
                    throw setTimeout(s, 0),
                    n
                }
        }
          , f = Date.now();
        t.unstable_now = function() {
            return Date.now() - f
        }
        ,
        r = function(e) {
            null !== u ? setTimeout(r, 0, e) : (u = e,
            setTimeout(s, 0))
        }
        ,
        i = function(e, t) {
            c = setTimeout(e, t)
        }
        ,
        o = function() {
            clearTimeout(c)
        }
        ,
        a = function() {
            return !1
        }
        ,
        l = t.unstable_forceFrameRate = function() {}
    } else {
        var d = window.performance
          , p = window.Date
          , m = window.setTimeout
          , h = window.clearTimeout;
        if ("undefined" != typeof console) {
            var g = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
            "function" != typeof g && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
        }
        if ("object" == typeof d && "function" == typeof d.now)
            t.unstable_now = function() {
                return d.now()
            }
            ;
        else {
            var v = p.now();
            t.unstable_now = function() {
                return p.now() - v
            }
        }
        var b = !1
          , y = null
          , w = -1
          , k = 5
          , x = 0;
        a = function() {
            return t.unstable_now() >= x
        }
        ,
        l = function() {}
        ,
        t.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : k = 0 < e ? Math.floor(1e3 / e) : 5
        }
        ;
        var E = new MessageChannel
          , S = E.port2;
        E.port1.onmessage = function() {
            if (null !== y) {
                var e = t.unstable_now();
                x = e + k;
                try {
                    y(!0, e) ? S.postMessage(null) : (b = !1,
                    y = null)
                } catch (n) {
                    throw S.postMessage(null),
                    n
                }
            } else
                b = !1
        }
        ,
        r = function(e) {
            y = e,
            b || (b = !0,
            S.postMessage(null))
        }
        ,
        i = function(e, n) {
            w = m((function() {
                e(t.unstable_now())
            }
            ), n)
        }
        ,
        o = function() {
            h(w),
            w = -1
        }
    }
    function T(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; ; ) {
            var r = n - 1 >>> 1
              , i = e[r];
            if (!(void 0 !== i && 0 < O(i, t)))
                break e;
            e[r] = t,
            e[n] = i,
            n = r
        }
    }
    function _(e) {
        return void 0 === (e = e[0]) ? null : e
    }
    function C(e) {
        var t = e[0];
        if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, i = e.length; r < i; ) {
                    var o = 2 * (r + 1) - 1
                      , a = e[o]
                      , l = o + 1
                      , u = e[l];
                    if (void 0 !== a && 0 > O(a, n))
                        void 0 !== u && 0 > O(u, a) ? (e[r] = u,
                        e[l] = n,
                        r = l) : (e[r] = a,
                        e[o] = n,
                        r = o);
                    else {
                        if (!(void 0 !== u && 0 > O(u, n)))
                            break e;
                        e[r] = u,
                        e[l] = n,
                        r = l
                    }
                }
            }
            return t
        }
        return null
    }
    function O(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
    }
    var P = []
      , R = []
      , A = 1
      , N = null
      , I = 3
      , L = !1
      , D = !1
      , F = !1;
    function j(e) {
        for (var t = _(R); null !== t; ) {
            if (null === t.callback)
                C(R);
            else {
                if (!(t.startTime <= e))
                    break;
                C(R),
                t.sortIndex = t.expirationTime,
                T(P, t)
            }
            t = _(R)
        }
    }
    function M(e) {
        if (F = !1,
        j(e),
        !D)
            if (null !== _(P))
                D = !0,
                r(z);
            else {
                var t = _(R);
                null !== t && i(M, t.startTime - e)
            }
    }
    function z(e, n) {
        D = !1,
        F && (F = !1,
        o()),
        L = !0;
        var r = I;
        try {
            for (j(n),
            N = _(P); null !== N && (!(N.expirationTime > n) || e && !a()); ) {
                var l = N.callback;
                if (null !== l) {
                    N.callback = null,
                    I = N.priorityLevel;
                    var u = l(N.expirationTime <= n);
                    n = t.unstable_now(),
                    "function" == typeof u ? N.callback = u : N === _(P) && C(P),
                    j(n)
                } else
                    C(P);
                N = _(P)
            }
            if (null !== N)
                var c = !0;
            else {
                var s = _(R);
                null !== s && i(M, s.startTime - n),
                c = !1
            }
            return c
        } finally {
            N = null,
            I = r,
            L = !1
        }
    }
    function B(e) {
        switch (e) {
        case 1:
            return -1;
        case 2:
            return 250;
        case 5:
            return 1073741823;
        case 4:
            return 1e4;
        default:
            return 5e3
        }
    }
    var U = l;
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(e) {
        e.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        D || L || (D = !0,
        r(z))
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return I
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return _(P)
    }
    ,
    t.unstable_next = function(e) {
        switch (I) {
        case 1:
        case 2:
        case 3:
            var t = 3;
            break;
        default:
            t = I
        }
        var n = I;
        I = t;
        try {
            return e()
        } finally {
            I = n
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = U,
    t.unstable_runWithPriority = function(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            e = 3
        }
        var n = I;
        I = e;
        try {
            return t()
        } finally {
            I = n
        }
    }
    ,
    t.unstable_scheduleCallback = function(e, n, a) {
        var l = t.unstable_now();
        if ("object" == typeof a && null !== a) {
            var u = a.delay;
            u = "number" == typeof u && 0 < u ? l + u : l,
            a = "number" == typeof a.timeout ? a.timeout : B(e)
        } else
            a = B(e),
            u = l;
        return e = {
            id: A++,
            callback: n,
            priorityLevel: e,
            startTime: u,
            expirationTime: a = u + a,
            sortIndex: -1
        },
        u > l ? (e.sortIndex = u,
        T(R, e),
        null === _(P) && e === _(R) && (F ? o() : F = !0,
        i(M, u - l))) : (e.sortIndex = a,
        T(P, e),
        D || L || (D = !0,
        r(z))),
        e
    }
    ,
    t.unstable_shouldYield = function() {
        var e = t.unstable_now();
        j(e);
        var n = _(P);
        return n !== N && null !== N && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < N.expirationTime || a()
    }
    ,
    t.unstable_wrapCallback = function(e) {
        var t = I;
        return function() {
            var n = I;
            I = t;
            try {
                return e.apply(this, arguments)
            } finally {
                I = n
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(76)
      , i = n(8)
      , o = n(55)
      , a = n(72)
      , l = n(35)
      , u = n(73)
      , c = n(42)
      , s = n(21)
      , f = Math.min
      , d = [].push
      , p = "length"
      , m = !s((function() {
        RegExp(4294967295, "y")
    }
    ));
    n(74)("split", 2, (function(e, t, n, s) {
        var h;
        return h = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p] ? function(e, t) {
            var i = String(this);
            if (void 0 === e && 0 === t)
                return [];
            if (!r(e))
                return n.call(i, e, t);
            for (var o, a, l, u = [], s = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), f = 0, m = void 0 === t ? 4294967295 : t >>> 0, h = new RegExp(e.source,s + "g"); (o = c.call(h, i)) && !((a = h.lastIndex) > f && (u.push(i.slice(f, o.index)),
            o[p] > 1 && o.index < i[p] && d.apply(u, o.slice(1)),
            l = o[0][p],
            f = a,
            u[p] >= m)); )
                h.lastIndex === o.index && h.lastIndex++;
            return f === i[p] ? !l && h.test("") || u.push("") : u.push(i.slice(f)),
            u[p] > m ? u.slice(0, m) : u
        }
        : "0".split(void 0, 0)[p] ? function(e, t) {
            return void 0 === e && 0 === t ? [] : n.call(this, e, t)
        }
        : n,
        [function(n, r) {
            var i = e(this)
              , o = null == n ? void 0 : n[t];
            return void 0 !== o ? o.call(n, i, r) : h.call(String(i), n, r)
        }
        , function(e, t) {
            var r = s(h, e, this, t, h !== n);
            if (r.done)
                return r.value;
            var c = i(e)
              , d = String(this)
              , p = o(c, RegExp)
              , g = c.unicode
              , v = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (m ? "y" : "g")
              , b = new p(m ? c : "^(?:" + c.source + ")",v)
              , y = void 0 === t ? 4294967295 : t >>> 0;
            if (0 === y)
                return [];
            if (0 === d.length)
                return null === u(b, d) ? [d] : [];
            for (var w = 0, k = 0, x = []; k < d.length; ) {
                b.lastIndex = m ? k : 0;
                var E, S = u(b, m ? d : d.slice(k));
                if (null === S || (E = f(l(b.lastIndex + (m ? 0 : k)), d.length)) === w)
                    k = a(d, k, g);
                else {
                    if (x.push(d.slice(w, k)),
                    x.length === y)
                        return x;
                    for (var T = 1; T <= S.length - 1; T++)
                        if (x.push(S[T]),
                        x.length === y)
                            return x;
                    k = w = E
                }
            }
            return x.push(d.slice(w)),
            x
        }
        ]
    }
    ))
}
, function(e, t, n) {
    "use strict";
    var r = n(8);
    e.exports = function() {
        var e = r(this)
          , t = "";
        return e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(42);
    n(17)({
        target: "RegExp",
        proto: !0,
        forced: r !== /./.exec
    }, {
        exec: r
    })
}
, function(e, t, n) {
    e.exports = !n(13) && !n(21)((function() {
        return 7 != Object.defineProperty(n(43)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, n) {
    var r = n(11);
    e.exports = function(e, t) {
        if (!r(e))
            return e;
        var n, i;
        if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e)))
            return i;
        if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e)))
            return i;
        if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e)))
            return i;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t, n) {
    e.exports = n(39)("native-function-to-string", Function.toString)
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(93)
      , i = n(57)
      , o = n(45)
      , a = {};
    n(10)(a, n(2)("iterator"), (function() {
        return this
    }
    )),
    e.exports = function(e, t, n) {
        e.prototype = r(a, {
            next: i(1, n)
        }),
        o(e, t + " Iterator")
    }
}
, function(e, t, n) {
    var r = n(8)
      , i = n(94)
      , o = n(59)
      , a = n(44)("IE_PROTO")
      , l = function() {}
      , u = function() {
        var e, t = n(43)("iframe"), r = o.length;
        for (t.style.display = "none",
        n(60).appendChild(t),
        t.src = "javascript:",
        (e = t.contentWindow.document).open(),
        e.write("<script>document.F=Object<\/script>"),
        e.close(),
        u = e.F; r--; )
            delete u.prototype[o[r]];
        return u()
    };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (l.prototype = r(e),
        n = new l,
        l.prototype = null,
        n[a] = e) : n = u(),
        void 0 === t ? n : i(n, t)
    }
}
, function(e, t, n) {
    var r = n(28)
      , i = n(8)
      , o = n(31);
    e.exports = n(13) ? Object.defineProperties : function(e, t) {
        i(e);
        for (var n, a = o(t), l = a.length, u = 0; l > u; )
            r.f(e, n = a[u++], t[n]);
        return e
    }
}
, function(e, t, n) {
    var r = n(29)
      , i = n(30)
      , o = n(78)(!1)
      , a = n(44)("IE_PROTO");
    e.exports = function(e, t) {
        var n, l = i(e), u = 0, c = [];
        for (n in l)
            n != a && r(l, n) && c.push(n);
        for (; t.length > u; )
            r(l, n = t[u++]) && (~o(c, n) || c.push(n));
        return c
    }
}
, function(e, t, n) {
    var r = n(37)
      , i = Math.max
      , o = Math.min;
    e.exports = function(e, t) {
        return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
    }
}
, function(e, t, n) {
    var r = n(29)
      , i = n(50)
      , o = n(44)("IE_PROTO")
      , a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = i(e),
        r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}
, function(e, t, n) {
    var r = n(17)
      , i = n(12)
      , o = n(21);
    e.exports = function(e, t) {
        var n = (i.Object || {})[e] || Object[e]
          , a = {};
        a[e] = t(n),
        r(r.S + r.F * o((function() {
            n(1)
        }
        )), "Object", a)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(100);
    function i() {}
    function o() {}
    o.resetWarningCache = i,
    e.exports = function() {
        function e(e, t, n, i, o, a) {
            if (a !== r) {
                var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw l.name = "Invariant Violation",
                l
            }
        }
        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: i
        };
        return n.PropTypes = n,
        n
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}
, function(e, t) {
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }
}
, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && Symbol.for
      , i = r ? Symbol.for("react.element") : 60103
      , o = r ? Symbol.for("react.portal") : 60106
      , a = r ? Symbol.for("react.fragment") : 60107
      , l = r ? Symbol.for("react.strict_mode") : 60108
      , u = r ? Symbol.for("react.profiler") : 60114
      , c = r ? Symbol.for("react.provider") : 60109
      , s = r ? Symbol.for("react.context") : 60110
      , f = r ? Symbol.for("react.async_mode") : 60111
      , d = r ? Symbol.for("react.concurrent_mode") : 60111
      , p = r ? Symbol.for("react.forward_ref") : 60112
      , m = r ? Symbol.for("react.suspense") : 60113
      , h = r ? Symbol.for("react.suspense_list") : 60120
      , g = r ? Symbol.for("react.memo") : 60115
      , v = r ? Symbol.for("react.lazy") : 60116
      , b = r ? Symbol.for("react.block") : 60121
      , y = r ? Symbol.for("react.fundamental") : 60117
      , w = r ? Symbol.for("react.responder") : 60118
      , k = r ? Symbol.for("react.scope") : 60119;
    function x(e) {
        if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
            case i:
                switch (e = e.type) {
                case f:
                case d:
                case a:
                case u:
                case l:
                case m:
                    return e;
                default:
                    switch (e = e && e.$$typeof) {
                    case s:
                    case p:
                    case v:
                    case g:
                    case c:
                        return e;
                    default:
                        return t
                    }
                }
            case o:
                return t
            }
        }
    }
    function E(e) {
        return x(e) === d
    }
    t.AsyncMode = f,
    t.ConcurrentMode = d,
    t.ContextConsumer = s,
    t.ContextProvider = c,
    t.Element = i,
    t.ForwardRef = p,
    t.Fragment = a,
    t.Lazy = v,
    t.Memo = g,
    t.Portal = o,
    t.Profiler = u,
    t.StrictMode = l,
    t.Suspense = m,
    t.isAsyncMode = function(e) {
        return E(e) || x(e) === f
    }
    ,
    t.isConcurrentMode = E,
    t.isContextConsumer = function(e) {
        return x(e) === s
    }
    ,
    t.isContextProvider = function(e) {
        return x(e) === c
    }
    ,
    t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === i
    }
    ,
    t.isForwardRef = function(e) {
        return x(e) === p
    }
    ,
    t.isFragment = function(e) {
        return x(e) === a
    }
    ,
    t.isLazy = function(e) {
        return x(e) === v
    }
    ,
    t.isMemo = function(e) {
        return x(e) === g
    }
    ,
    t.isPortal = function(e) {
        return x(e) === o
    }
    ,
    t.isProfiler = function(e) {
        return x(e) === u
    }
    ,
    t.isStrictMode = function(e) {
        return x(e) === l
    }
    ,
    t.isSuspense = function(e) {
        return x(e) === m
    }
    ,
    t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === d || e === u || e === l || e === m || e === h || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === g || e.$$typeof === c || e.$$typeof === s || e.$$typeof === p || e.$$typeof === y || e.$$typeof === w || e.$$typeof === k || e.$$typeof === b)
    }
    ,
    t.typeOf = x
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    t.default = "undefined" == typeof window ? null : {
        onRouteUpdate: function(e) {
            var t = e.location;
            window.ga("set", "page", t.pathname),
            window.ga("send", "pageview")
        }
    }
}
, , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(51)
      , i = n(70)
      , o = n.n(i)
      , a = n(33);
    !function() {
        if (o.a.canUseDOM) {
            var e = a.a.themeConfig.prism
              , t = (e = void 0 === e ? {} : e).additionalLanguages
              , i = void 0 === t ? [] : t;
            window.Prism = r.a,
            i.forEach((function(e) {
                n(46)("./prism-" + e)
            }
            )),
            delete window.Prism
        }
    }()
}
, function(e, t, n) {
    const r = n(107)
      , i = n(108)
      , o = new Set;
    function a(e) {
        void 0 === e ? e = Object.keys(r.languages).filter(e=>"meta" != e) : Array.isArray(e) || (e = [e]);
        const t = [...o, ...Object.keys(Prism.languages)];
        i(r, e, t).load(e=>{
            if (!(e in r.languages))
                return void (a.silent || console.warn("Language does not exist: " + e));
            const t = "./prism-" + e;
            delete n.c[n(46).resolve(t)],
            delete Prism.languages[e],
            n(46)(t),
            o.add(e)
        }
        )
    }
    a.silent = !1,
    e.exports = a
}
, function(e, t, n) {
    e.exports && (e.exports = {
        core: {
            meta: {
                path: "components/prism-core.js",
                option: "mandatory"
            },
            core: "Core"
        },
        themes: {
            meta: {
                path: "themes/{id}.css",
                link: "index.html?theme={id}",
                exclusive: !0
            },
            prism: {
                title: "Default",
                option: "default"
            },
            "prism-dark": "Dark",
            "prism-funky": "Funky",
            "prism-okaidia": {
                title: "Okaidia",
                owner: "ocodia"
            },
            "prism-twilight": {
                title: "Twilight",
                owner: "remybach"
            },
            "prism-coy": {
                title: "Coy",
                owner: "tshedor"
            },
            "prism-solarizedlight": {
                title: "Solarized Light",
                owner: "hectormatos2011 "
            },
            "prism-tomorrow": {
                title: "Tomorrow Night",
                owner: "Rosey"
            }
        },
        languages: {
            meta: {
                path: "components/prism-{id}",
                noCSS: !0,
                examplesPath: "examples/prism-{id}",
                addCheckAll: !0
            },
            markup: {
                title: "Markup",
                alias: ["html", "xml", "svg", "mathml"],
                aliasTitles: {
                    html: "HTML",
                    xml: "XML",
                    svg: "SVG",
                    mathml: "MathML"
                },
                option: "default"
            },
            css: {
                title: "CSS",
                option: "default",
                modify: "markup"
            },
            clike: {
                title: "C-like",
                option: "default"
            },
            javascript: {
                title: "JavaScript",
                require: "clike",
                modify: "markup",
                alias: "js",
                option: "default"
            },
            abap: {
                title: "ABAP",
                owner: "dellagustin"
            },
            abnf: {
                title: "Augmented Backus\u2013Naur form",
                owner: "RunDevelopment"
            },
            actionscript: {
                title: "ActionScript",
                require: "javascript",
                modify: "markup",
                owner: "Golmote"
            },
            ada: {
                title: "Ada",
                owner: "Lucretia"
            },
            antlr4: {
                title: "ANTLR4",
                alias: "g4",
                owner: "RunDevelopment"
            },
            apacheconf: {
                title: "Apache Configuration",
                owner: "GuiTeK"
            },
            apl: {
                title: "APL",
                owner: "ngn"
            },
            applescript: {
                title: "AppleScript",
                owner: "Golmote"
            },
            aql: {
                title: "AQL",
                owner: "RunDevelopment"
            },
            arduino: {
                title: "Arduino",
                require: "cpp",
                owner: "eisbehr-"
            },
            arff: {
                title: "ARFF",
                owner: "Golmote"
            },
            asciidoc: {
                alias: "adoc",
                title: "AsciiDoc",
                owner: "Golmote"
            },
            asm6502: {
                title: "6502 Assembly",
                owner: "kzurawel"
            },
            aspnet: {
                title: "ASP.NET (C#)",
                require: ["markup", "csharp"],
                owner: "nauzilus"
            },
            autohotkey: {
                title: "AutoHotkey",
                owner: "aviaryan"
            },
            autoit: {
                title: "AutoIt",
                owner: "Golmote"
            },
            bash: {
                title: "Bash",
                alias: "shell",
                aliasTitles: {
                    shell: "Shell"
                },
                owner: "zeitgeist87"
            },
            basic: {
                title: "BASIC",
                owner: "Golmote"
            },
            batch: {
                title: "Batch",
                owner: "Golmote"
            },
            bbcode: {
                title: "BBcode",
                alias: "shortcode",
                aliasTitles: {
                    shortcode: "Shortcode"
                },
                owner: "RunDevelopment"
            },
            bison: {
                title: "Bison",
                require: "c",
                owner: "Golmote"
            },
            bnf: {
                title: "Backus\u2013Naur form",
                alias: "rbnf",
                aliasTitles: {
                    rbnf: "Routing Backus\u2013Naur form"
                },
                owner: "RunDevelopment"
            },
            brainfuck: {
                title: "Brainfuck",
                owner: "Golmote"
            },
            brightscript: {
                title: "BrightScript",
                owner: "RunDevelopment"
            },
            bro: {
                title: "Bro",
                owner: "wayward710"
            },
            c: {
                title: "C",
                require: "clike",
                owner: "zeitgeist87"
            },
            concurnas: {
                title: "Concurnas",
                alias: "conc",
                owner: "jasontatton"
            },
            csharp: {
                title: "C#",
                require: "clike",
                alias: ["cs", "dotnet"],
                owner: "mvalipour"
            },
            cpp: {
                title: "C++",
                require: "c",
                owner: "zeitgeist87"
            },
            cil: {
                title: "CIL",
                owner: "sbrl"
            },
            coffeescript: {
                title: "CoffeeScript",
                require: "javascript",
                alias: "coffee",
                owner: "R-osey"
            },
            cmake: {
                title: "CMake",
                owner: "mjrogozinski"
            },
            clojure: {
                title: "Clojure",
                owner: "troglotit"
            },
            crystal: {
                title: "Crystal",
                require: "ruby",
                owner: "MakeNowJust"
            },
            csp: {
                title: "Content-Security-Policy",
                owner: "ScottHelme"
            },
            "css-extras": {
                title: "CSS Extras",
                require: "css",
                modify: "css",
                owner: "milesj"
            },
            d: {
                title: "D",
                require: "clike",
                owner: "Golmote"
            },
            dart: {
                title: "Dart",
                require: "clike",
                owner: "Golmote"
            },
            dax: {
                title: "DAX",
                owner: "peterbud"
            },
            diff: {
                title: "Diff",
                owner: "uranusjr"
            },
            django: {
                title: "Django/Jinja2",
                require: "markup-templating",
                alias: "jinja2",
                owner: "romanvm"
            },
            "dns-zone-file": {
                title: "DNS zone file",
                owner: "RunDevelopment",
                alias: "dns-zone"
            },
            docker: {
                title: "Docker",
                alias: "dockerfile",
                owner: "JustinBeckwith"
            },
            ebnf: {
                title: "Extended Backus\u2013Naur form",
                owner: "RunDevelopment"
            },
            eiffel: {
                title: "Eiffel",
                owner: "Conaclos"
            },
            ejs: {
                title: "EJS",
                require: ["javascript", "markup-templating"],
                owner: "RunDevelopment"
            },
            elixir: {
                title: "Elixir",
                owner: "Golmote"
            },
            elm: {
                title: "Elm",
                owner: "zwilias"
            },
            etlua: {
                title: "Embedded Lua templating",
                require: ["lua", "markup-templating"],
                owner: "RunDevelopment"
            },
            erb: {
                title: "ERB",
                require: ["ruby", "markup-templating"],
                owner: "Golmote"
            },
            erlang: {
                title: "Erlang",
                owner: "Golmote"
            },
            "excel-formula": {
                title: "Excel Formula",
                alias: ["xlsx", "xls"],
                owner: "RunDevelopment"
            },
            fsharp: {
                title: "F#",
                require: "clike",
                owner: "simonreynolds7"
            },
            factor: {
                title: "Factor",
                owner: "catb0t"
            },
            "firestore-security-rules": {
                title: "Firestore security rules",
                require: "clike",
                owner: "RunDevelopment"
            },
            flow: {
                title: "Flow",
                require: "javascript",
                owner: "Golmote"
            },
            fortran: {
                title: "Fortran",
                owner: "Golmote"
            },
            ftl: {
                title: "FreeMarker Template Language",
                require: "markup-templating",
                owner: "RunDevelopment"
            },
            gcode: {
                title: "G-code",
                owner: "RunDevelopment"
            },
            gdscript: {
                title: "GDScript",
                owner: "RunDevelopment"
            },
            gedcom: {
                title: "GEDCOM",
                owner: "Golmote"
            },
            gherkin: {
                title: "Gherkin",
                owner: "hason"
            },
            git: {
                title: "Git",
                owner: "lgiraudel"
            },
            glsl: {
                title: "GLSL",
                require: "clike",
                owner: "Golmote"
            },
            gml: {
                title: "GameMaker Language",
                alias: "gamemakerlanguage",
                require: "clike",
                owner: "LiarOnce"
            },
            go: {
                title: "Go",
                require: "clike",
                owner: "arnehormann"
            },
            graphql: {
                title: "GraphQL",
                owner: "Golmote"
            },
            groovy: {
                title: "Groovy",
                require: "clike",
                owner: "robfletcher"
            },
            haml: {
                title: "Haml",
                require: "ruby",
                optional: ["css", "css-extras", "coffeescript", "erb", "javascript", "less", "markdown", "scss", "textile"],
                owner: "Golmote"
            },
            handlebars: {
                title: "Handlebars",
                require: "markup-templating",
                owner: "Golmote"
            },
            haskell: {
                title: "Haskell",
                alias: "hs",
                owner: "bholst"
            },
            haxe: {
                title: "Haxe",
                require: "clike",
                owner: "Golmote"
            },
            hcl: {
                title: "HCL",
                owner: "outsideris"
            },
            http: {
                title: "HTTP",
                optional: ["css", "javascript", "json", "markup"],
                owner: "danielgtaylor"
            },
            hpkp: {
                title: "HTTP Public-Key-Pins",
                owner: "ScottHelme"
            },
            hsts: {
                title: "HTTP Strict-Transport-Security",
                owner: "ScottHelme"
            },
            ichigojam: {
                title: "IchigoJam",
                owner: "BlueCocoa"
            },
            icon: {
                title: "Icon",
                owner: "Golmote"
            },
            inform7: {
                title: "Inform 7",
                owner: "Golmote"
            },
            ini: {
                title: "Ini",
                owner: "aviaryan"
            },
            io: {
                title: "Io",
                owner: "AlesTsurko"
            },
            j: {
                title: "J",
                owner: "Golmote"
            },
            java: {
                title: "Java",
                require: "clike",
                owner: "sherblot"
            },
            javadoc: {
                title: "JavaDoc",
                require: ["markup", "java", "javadoclike"],
                modify: "java",
                optional: "scala",
                owner: "RunDevelopment"
            },
            javadoclike: {
                title: "JavaDoc-like",
                modify: ["java", "javascript", "php"],
                owner: "RunDevelopment"
            },
            javastacktrace: {
                title: "Java stack trace",
                owner: "RunDevelopment"
            },
            jolie: {
                title: "Jolie",
                require: "clike",
                owner: "thesave"
            },
            jq: {
                title: "JQ",
                owner: "RunDevelopment"
            },
            jsdoc: {
                title: "JSDoc",
                require: ["javascript", "javadoclike"],
                modify: "javascript",
                optional: ["actionscript", "coffeescript"],
                owner: "RunDevelopment"
            },
            "js-extras": {
                title: "JS Extras",
                require: "javascript",
                modify: "javascript",
                optional: ["actionscript", "coffeescript", "flow", "n4js", "typescript"],
                owner: "RunDevelopment"
            },
            "js-templates": {
                title: "JS Templates",
                require: "javascript",
                modify: "javascript",
                optional: ["css", "css-extras", "graphql", "markdown", "markup"],
                owner: "RunDevelopment"
            },
            json: {
                title: "JSON",
                owner: "CupOfTea696"
            },
            jsonp: {
                title: "JSONP",
                require: "json",
                owner: "RunDevelopment"
            },
            json5: {
                title: "JSON5",
                require: "json",
                owner: "RunDevelopment"
            },
            julia: {
                title: "Julia",
                owner: "cdagnino"
            },
            keyman: {
                title: "Keyman",
                owner: "mcdurdin"
            },
            kotlin: {
                title: "Kotlin",
                require: "clike",
                owner: "Golmote"
            },
            latex: {
                title: "LaTeX",
                alias: ["tex", "context"],
                aliasTitles: {
                    tex: "TeX",
                    context: "ConTeXt"
                },
                owner: "japborst"
            },
            latte: {
                title: "Latte",
                require: ["clike", "markup-templating", "php"],
                owner: "nette"
            },
            less: {
                title: "Less",
                require: "css",
                optional: "css-extras",
                owner: "Golmote"
            },
            lilypond: {
                title: "LilyPond",
                require: "scheme",
                alias: "ly",
                owner: "RunDevelopment"
            },
            liquid: {
                title: "Liquid",
                owner: "cinhtau"
            },
            lisp: {
                title: "Lisp",
                alias: ["emacs", "elisp", "emacs-lisp"],
                owner: "JuanCaicedo"
            },
            livescript: {
                title: "LiveScript",
                owner: "Golmote"
            },
            llvm: {
                title: "LLVM IR",
                owner: "porglezomp"
            },
            lolcode: {
                title: "LOLCODE",
                owner: "Golmote"
            },
            lua: {
                title: "Lua",
                owner: "Golmote"
            },
            makefile: {
                title: "Makefile",
                owner: "Golmote"
            },
            markdown: {
                title: "Markdown",
                require: "markup",
                alias: "md",
                owner: "Golmote"
            },
            "markup-templating": {
                title: "Markup templating",
                require: "markup",
                owner: "Golmote"
            },
            matlab: {
                title: "MATLAB",
                owner: "Golmote"
            },
            mel: {
                title: "MEL",
                owner: "Golmote"
            },
            mizar: {
                title: "Mizar",
                owner: "Golmote"
            },
            monkey: {
                title: "Monkey",
                owner: "Golmote"
            },
            moonscript: {
                title: "MoonScript",
                alias: "moon",
                owner: "RunDevelopment"
            },
            n1ql: {
                title: "N1QL",
                owner: "TMWilds"
            },
            n4js: {
                title: "N4JS",
                require: "javascript",
                optional: "jsdoc",
                alias: "n4jsd",
                owner: "bsmith-n4"
            },
            "nand2tetris-hdl": {
                title: "Nand To Tetris HDL",
                owner: "stephanmax"
            },
            nasm: {
                title: "NASM",
                owner: "rbmj"
            },
            neon: {
                title: "NEON",
                owner: "nette"
            },
            nginx: {
                title: "nginx",
                owner: "westonganger",
                require: "clike"
            },
            nim: {
                title: "Nim",
                owner: "Golmote"
            },
            nix: {
                title: "Nix",
                owner: "Golmote"
            },
            nsis: {
                title: "NSIS",
                owner: "idleberg"
            },
            objectivec: {
                title: "Objective-C",
                require: "c",
                owner: "uranusjr"
            },
            ocaml: {
                title: "OCaml",
                owner: "Golmote"
            },
            opencl: {
                title: "OpenCL",
                require: "c",
                modify: ["c", "cpp"],
                owner: "Milania1"
            },
            oz: {
                title: "Oz",
                owner: "Golmote"
            },
            parigp: {
                title: "PARI/GP",
                owner: "Golmote"
            },
            parser: {
                title: "Parser",
                require: "markup",
                owner: "Golmote"
            },
            pascal: {
                title: "Pascal",
                alias: "objectpascal",
                aliasTitles: {
                    objectpascal: "Object Pascal"
                },
                owner: "Golmote"
            },
            pascaligo: {
                title: "Pascaligo",
                owner: "DefinitelyNotAGoat"
            },
            pcaxis: {
                title: "PC-Axis",
                alias: "px",
                owner: "RunDevelopment"
            },
            perl: {
                title: "Perl",
                owner: "Golmote"
            },
            php: {
                title: "PHP",
                require: ["clike", "markup-templating"],
                owner: "milesj"
            },
            phpdoc: {
                title: "PHPDoc",
                require: ["php", "javadoclike"],
                modify: "php",
                owner: "RunDevelopment"
            },
            "php-extras": {
                title: "PHP Extras",
                require: "php",
                modify: "php",
                owner: "milesj"
            },
            plsql: {
                title: "PL/SQL",
                require: "sql",
                owner: "Golmote"
            },
            powerquery: {
                title: "PowerQuery",
                alias: ["pq", "mscript"],
                owner: "peterbud"
            },
            powershell: {
                title: "PowerShell",
                owner: "nauzilus"
            },
            processing: {
                title: "Processing",
                require: "clike",
                owner: "Golmote"
            },
            prolog: {
                title: "Prolog",
                owner: "Golmote"
            },
            properties: {
                title: ".properties",
                owner: "Golmote"
            },
            protobuf: {
                title: "Protocol Buffers",
                require: "clike",
                owner: "just-boris"
            },
            pug: {
                title: "Pug",
                require: ["markup", "javascript"],
                optional: ["coffeescript", "ejs", "handlebars", "less", "livescript", "markdown", "scss", "stylus", "twig"],
                owner: "Golmote"
            },
            puppet: {
                title: "Puppet",
                owner: "Golmote"
            },
            pure: {
                title: "Pure",
                optional: ["c", "cpp", "fortran"],
                owner: "Golmote"
            },
            python: {
                title: "Python",
                alias: "py",
                owner: "multipetros"
            },
            q: {
                title: "Q (kdb+ database)",
                owner: "Golmote"
            },
            qml: {
                title: "QML",
                require: "javascript",
                owner: "RunDevelopment"
            },
            qore: {
                title: "Qore",
                require: "clike",
                owner: "temnroegg"
            },
            r: {
                title: "R",
                owner: "Golmote"
            },
            jsx: {
                title: "React JSX",
                require: ["markup", "javascript"],
                optional: ["jsdoc", "js-extras", "js-templates"],
                owner: "vkbansal"
            },
            tsx: {
                title: "React TSX",
                require: ["jsx", "typescript"]
            },
            renpy: {
                title: "Ren'py",
                owner: "HyuchiaDiego"
            },
            reason: {
                title: "Reason",
                require: "clike",
                owner: "Golmote"
            },
            regex: {
                title: "Regex",
                modify: ["actionscript", "coffeescript", "flow", "javascript", "typescript", "vala"],
                owner: "RunDevelopment"
            },
            rest: {
                title: "reST (reStructuredText)",
                owner: "Golmote"
            },
            rip: {
                title: "Rip",
                owner: "ravinggenius"
            },
            roboconf: {
                title: "Roboconf",
                owner: "Golmote"
            },
            robotframework: {
                title: "Robot Framework",
                alias: "robot",
                owner: "RunDevelopment"
            },
            ruby: {
                title: "Ruby",
                require: "clike",
                alias: "rb",
                owner: "samflores"
            },
            rust: {
                title: "Rust",
                owner: "Golmote"
            },
            sas: {
                title: "SAS",
                optional: ["groovy", "lua", "sql"],
                owner: "Golmote"
            },
            sass: {
                title: "Sass (Sass)",
                require: "css",
                owner: "Golmote"
            },
            scss: {
                title: "Sass (Scss)",
                require: "css",
                optional: "css-extras",
                owner: "MoOx"
            },
            scala: {
                title: "Scala",
                require: "java",
                owner: "jozic"
            },
            scheme: {
                title: "Scheme",
                owner: "bacchus123"
            },
            "shell-session": {
                title: "Shell session",
                require: "bash",
                owner: "RunDevelopment"
            },
            smalltalk: {
                title: "Smalltalk",
                owner: "Golmote"
            },
            smarty: {
                title: "Smarty",
                require: "markup-templating",
                owner: "Golmote"
            },
            solidity: {
                title: "Solidity (Ethereum)",
                require: "clike",
                owner: "glachaud"
            },
            "solution-file": {
                title: "Solution file",
                alias: "sln",
                owner: "RunDevelopment"
            },
            soy: {
                title: "Soy (Closure Template)",
                require: "markup-templating",
                owner: "Golmote"
            },
            sparql: {
                title: "SPARQL",
                require: "turtle",
                owner: "Triply-Dev",
                alias: "rq"
            },
            "splunk-spl": {
                title: "Splunk SPL",
                owner: "RunDevelopment"
            },
            sqf: {
                title: "SQF: Status Quo Function (Arma 3)",
                require: "clike",
                owner: "RunDevelopment"
            },
            sql: {
                title: "SQL",
                owner: "multipetros"
            },
            stylus: {
                title: "Stylus",
                owner: "vkbansal"
            },
            swift: {
                title: "Swift",
                require: "clike",
                owner: "chrischares"
            },
            tap: {
                title: "TAP",
                owner: "isaacs",
                require: "yaml"
            },
            tcl: {
                title: "Tcl",
                owner: "PeterChaplin"
            },
            textile: {
                title: "Textile",
                require: "markup",
                optional: "css",
                owner: "Golmote"
            },
            toml: {
                title: "TOML",
                owner: "RunDevelopment"
            },
            tt2: {
                title: "Template Toolkit 2",
                require: ["clike", "markup-templating"],
                owner: "gflohr"
            },
            turtle: {
                title: "Turtle",
                alias: "trig",
                aliasTitles: {
                    trig: "TriG"
                },
                owner: "jakubklimek"
            },
            twig: {
                title: "Twig",
                require: "markup",
                owner: "brandonkelly"
            },
            typescript: {
                title: "TypeScript",
                require: "javascript",
                optional: "js-templates",
                alias: "ts",
                owner: "vkbansal"
            },
            "t4-cs": {
                title: "T4 Text Templates (C#)",
                require: ["t4-templating", "csharp"],
                alias: "t4",
                owner: "RunDevelopment"
            },
            "t4-vb": {
                title: "T4 Text Templates (VB)",
                require: ["t4-templating", "visual-basic"],
                owner: "RunDevelopment"
            },
            "t4-templating": {
                title: "T4 templating",
                owner: "RunDevelopment"
            },
            vala: {
                title: "Vala",
                require: "clike",
                owner: "TemplarVolk"
            },
            vbnet: {
                title: "VB.Net",
                require: "basic",
                owner: "Bigsby"
            },
            velocity: {
                title: "Velocity",
                require: "markup",
                owner: "Golmote"
            },
            verilog: {
                title: "Verilog",
                owner: "a-rey"
            },
            vhdl: {
                title: "VHDL",
                owner: "a-rey"
            },
            vim: {
                title: "vim",
                owner: "westonganger"
            },
            "visual-basic": {
                title: "Visual Basic",
                alias: "vb",
                owner: "Golmote"
            },
            wasm: {
                title: "WebAssembly",
                owner: "Golmote"
            },
            wiki: {
                title: "Wiki markup",
                require: "markup",
                owner: "Golmote"
            },
            xeora: {
                title: "Xeora",
                require: "markup",
                alias: "xeoracube",
                aliasTitles: {
                    xeoracube: "XeoraCube"
                },
                owner: "freakmaxi"
            },
            xojo: {
                title: "Xojo (REALbasic)",
                owner: "Golmote"
            },
            xquery: {
                title: "XQuery",
                require: "markup",
                owner: "Golmote"
            },
            yaml: {
                title: "YAML",
                alias: "yml",
                owner: "hason"
            },
            zig: {
                title: "Zig",
                owner: "RunDevelopment"
            }
        },
        plugins: {
            meta: {
                path: "plugins/{id}/prism-{id}",
                link: "plugins/{id}/"
            },
            "line-highlight": {
                title: "Line Highlight",
                description: "Highlights specific lines and/or line ranges."
            },
            "line-numbers": {
                title: "Line Numbers",
                description: "Line number at the beginning of code lines.",
                owner: "kuba-kubula"
            },
            "show-invisibles": {
                title: "Show Invisibles",
                description: "Show hidden characters such as tabs and line breaks.",
                optional: ["autolinker", "data-uri-highlight"]
            },
            autolinker: {
                title: "Autolinker",
                description: "Converts URLs and emails in code to clickable links. Parses Markdown links in comments."
            },
            wpd: {
                title: "WebPlatform Docs",
                description: 'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.'
            },
            "custom-class": {
                title: "Custom Class",
                description: "This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.",
                owner: "dvkndn",
                noCSS: !0
            },
            "file-highlight": {
                title: "File Highlight",
                description: "Fetch external files and highlight them with Prism. Used on the Prism website itself.",
                noCSS: !0
            },
            "show-language": {
                title: "Show Language",
                description: "Display the highlighted language in code blocks (inline code does not show the label).",
                owner: "nauzilus",
                noCSS: !0,
                require: "toolbar"
            },
            "jsonp-highlight": {
                title: "JSONP Highlight",
                description: "Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).",
                noCSS: !0,
                owner: "nauzilus"
            },
            "highlight-keywords": {
                title: "Highlight Keywords",
                description: "Adds special CSS classes for each keyword matched in the code. For example, the keyword <code>if</code> will have the class <code>keyword-if</code> as well. You can have fine grained control over the appearance of each keyword by providing your own CSS rules.",
                owner: "vkbansal",
                noCSS: !0
            },
            "remove-initial-line-feed": {
                title: "Remove initial line feed",
                description: "Removes the initial line feed in code blocks.",
                owner: "Golmote",
                noCSS: !0
            },
            "inline-color": {
                title: "Inline color",
                description: "Adds a small inline preview for colors in style sheets.",
                require: "css-extras",
                owner: "RunDevelopment"
            },
            previewers: {
                title: "Previewers",
                description: "Previewers for angles, colors, gradients, easing and time.",
                require: "css-extras",
                owner: "Golmote"
            },
            autoloader: {
                title: "Autoloader",
                description: "Automatically loads the needed languages to highlight the code blocks.",
                owner: "Golmote",
                noCSS: !0
            },
            "keep-markup": {
                title: "Keep Markup",
                description: "Prevents custom markup from being dropped out during highlighting.",
                owner: "Golmote",
                optional: "normalize-whitespace",
                noCSS: !0
            },
            "command-line": {
                title: "Command Line",
                description: "Display a command line with a prompt and, optionally, the output/response from the commands.",
                owner: "chriswells0"
            },
            "unescaped-markup": {
                title: "Unescaped Markup",
                description: "Write markup without having to escape anything."
            },
            "normalize-whitespace": {
                title: "Normalize Whitespace",
                description: "Supports multiple operations to normalize whitespace in code blocks.",
                owner: "zeitgeist87",
                optional: "unescaped-markup",
                noCSS: !0
            },
            "data-uri-highlight": {
                title: "Data-URI Highlight",
                description: "Highlights data-URI contents.",
                owner: "Golmote",
                noCSS: !0
            },
            toolbar: {
                title: "Toolbar",
                description: "Attach a toolbar for plugins to easily register buttons on the top of a code block.",
                owner: "mAAdhaTTah"
            },
            "copy-to-clipboard": {
                title: "Copy to Clipboard Button",
                description: "Add a button that copies the code block to the clipboard when clicked.",
                owner: "mAAdhaTTah",
                require: "toolbar",
                noCSS: !0
            },
            "download-button": {
                title: "Download Button",
                description: "A button in the toolbar of a code block adding a convenient way to download a code file.",
                owner: "Golmote",
                require: "toolbar",
                noCSS: !0
            },
            "match-braces": {
                title: "Match braces",
                description: "Highlights matching braces.",
                owner: "RunDevelopment"
            },
            "diff-highlight": {
                title: "Diff Highlight",
                description: "Highlights the code inside diff blocks.",
                owner: "RunDevelopment",
                require: "diff"
            },
            "filter-highlight-all": {
                title: "Filter highlightAll",
                description: "Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.",
                owner: "RunDevelopment",
                noCSS: !0
            },
            treeview: {
                title: "Treeview",
                description: "A language with special styles to highlight file system tree structures.",
                owner: "Golmote"
            }
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = function() {
        var e = function() {};
        function t(e, t) {
            Array.isArray(e) ? e.forEach(t) : null != e && t(e, 0)
        }
        function n(e) {
            for (var t = {}, n = 0, r = e.length; n < r; n++)
                t[e[n]] = !0;
            return t
        }
        function r(e) {
            var n = {}
              , r = [];
            return function(i) {
                var o = n[i];
                return o || (!function r(i, o) {
                    if (!(i in n)) {
                        o.push(i);
                        var a = o.indexOf(i);
                        if (a < o.length - 1)
                            throw new Error("Circular dependency: " + o.slice(a).join(" -> "));
                        var l = {}
                          , u = e[i];
                        if (u) {
                            function c(t) {
                                if (!(t in e))
                                    throw new Error(i + " depends on an unknown component " + t);
                                if (!(t in l))
                                    for (var a in r(t, o),
                                    l[t] = !0,
                                    n[t])
                                        l[a] = !0
                            }
                            t(u.require, c),
                            t(u.optional, c),
                            t(u.modify, c)
                        }
                        n[i] = l,
                        o.pop()
                    }
                }(i, r),
                o = n[i]),
                o
            }
        }
        function i(e) {
            for (var t in e)
                return !0;
            return !1
        }
        return function(o, a, l) {
            var u = function(e) {
                var t = {};
                for (var n in e) {
                    var r = e[n];
                    for (var i in r)
                        if ("meta" != i) {
                            var o = r[i];
                            t[i] = "string" == typeof o ? {
                                title: o
                            } : o
                        }
                }
                return t
            }(o)
              , c = function(e) {
                var n;
                return function(r) {
                    if (r in e)
                        return r;
                    if (!n)
                        for (var i in n = {},
                        e) {
                            var o = e[i];
                            t(o && o.alias, (function(t) {
                                if (t in n)
                                    throw new Error(t + " cannot be alias for both " + i + " and " + n[t]);
                                if (t in e)
                                    throw new Error(t + " cannot be alias of " + i + " because it is a component.");
                                n[t] = i
                            }
                            ))
                        }
                    return n[r] || r
                }
            }(u);
            a = a.map(c),
            l = (l || []).map(c);
            var s = n(a)
              , f = n(l);
            a.forEach((function e(n) {
                var r = u[n];
                t(r && r.require, (function(t) {
                    t in f || (s[t] = !0,
                    e(t))
                }
                ))
            }
            ));
            for (var d, p = r(u), m = s; i(m); ) {
                for (var h in d = {},
                m) {
                    var g = u[h];
                    t(g && g.modify, (function(e) {
                        e in f && (d[e] = !0)
                    }
                    ))
                }
                for (var v in f)
                    if (!(v in s))
                        for (var b in p(v))
                            if (b in s) {
                                d[v] = !0;
                                break
                            }
                for (var y in m = d)
                    s[y] = !0
            }
            var w = {
                getIds: function() {
                    var e = [];
                    return w.load((function(t) {
                        e.push(t)
                    }
                    )),
                    e
                },
                load: function(t, n) {
                    return function(t, n, r, i) {
                        const o = i ? i.series : void 0
                          , a = i ? i.parallel : e;
                        var l = {}
                          , u = {};
                        function c(e) {
                            if (e in l)
                                return l[e];
                            u[e] = !0;
                            var i, s = [];
                            for (var f in t(e))
                                f in n && s.push(f);
                            if (0 === s.length)
                                i = r(e);
                            else {
                                var d = a(s.map((function(e) {
                                    var t = c(e);
                                    return delete u[e],
                                    t
                                }
                                )));
                                o ? i = o(d, (function() {
                                    return r(e)
                                }
                                )) : r(e)
                            }
                            return l[e] = i
                        }
                        for (var s in n)
                            c(s);
                        var f = [];
                        for (var d in u)
                            f.push(l[d]);
                        return a(f)
                    }(p, s, t, n)
                }
            };
            return w
        }
    }();
    e.exports = r
}
, , function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e)
            throw TypeError(n + ": incorrect invocation!");
        return e
    }
}
, function(e, t, n) {
    var r = n(25)
      , i = n(112)
      , o = n(113)
      , a = n(8)
      , l = n(35)
      , u = n(114)
      , c = {}
      , s = {};
    (t = e.exports = function(e, t, n, f, d) {
        var p, m, h, g, v = d ? function() {
            return e
        }
        : u(e), b = r(n, f, t ? 2 : 1), y = 0;
        if ("function" != typeof v)
            throw TypeError(e + " is not iterable!");
        if (o(v)) {
            for (p = l(e.length); p > y; y++)
                if ((g = t ? b(a(m = e[y])[0], m[1]) : b(e[y])) === c || g === s)
                    return g
        } else
            for (h = v.call(e); !(m = h.next()).done; )
                if ((g = i(h, b, m.value, t)) === c || g === s)
                    return g
    }
    ).BREAK = c,
    t.RETURN = s
}
, function(e, t, n) {
    var r = n(8);
    e.exports = function(e, t, n, i) {
        try {
            return i ? t(r(n)[0], n[1]) : t(n)
        } catch (a) {
            var o = e.return;
            throw void 0 !== o && r(o.call(e)),
            a
        }
    }
}
, function(e, t, n) {
    var r = n(22)
      , i = n(2)("iterator")
      , o = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || o[i] === e)
    }
}
, function(e, t, n) {
    var r = n(27)
      , i = n(2)("iterator")
      , o = n(22);
    e.exports = n(12).getIteratorMethod = function(e) {
        if (null != e)
            return e[i] || e["@@iterator"] || o[r(e)]
    }
}
, function(e, t) {
    e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
        case 0:
            return r ? e() : e.call(n);
        case 1:
            return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
            return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}
, function(e, t, n) {
    var r = n(5)
      , i = n(65).set
      , o = r.MutationObserver || r.WebKitMutationObserver
      , a = r.process
      , l = r.Promise
      , u = "process" == n(20)(a);
    e.exports = function() {
        var e, t, n, c = function() {
            var r, i;
            for (u && (r = a.domain) && r.exit(); e; ) {
                i = e.fn,
                e = e.next;
                try {
                    i()
                } catch (o) {
                    throw e ? n() : t = void 0,
                    o
                }
            }
            t = void 0,
            r && r.enter()
        };
        if (u)
            n = function() {
                a.nextTick(c)
            }
            ;
        else if (!o || r.navigator && r.navigator.standalone)
            if (l && l.resolve) {
                var s = l.resolve(void 0);
                n = function() {
                    s.then(c)
                }
            } else
                n = function() {
                    i.call(r, c)
                }
                ;
        else {
            var f = !0
              , d = document.createTextNode("");
            new o(c).observe(d, {
                characterData: !0
            }),
            n = function() {
                d.data = f = !f
            }
        }
        return function(r) {
            var i = {
                fn: r,
                next: void 0
            };
            t && (t.next = i),
            e || (e = i,
            n()),
            t = i
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}
, function(e, t, n) {
    var r = n(5).navigator;
    e.exports = r && r.userAgent || ""
}
, function(e, t, n) {
    var r = n(8)
      , i = n(11)
      , o = n(66);
    e.exports = function(e, t) {
        if (r(e),
        i(t) && t.constructor === e)
            return t;
        var n = o.f(e);
        return (0,
        n.resolve)(t),
        n.promise
    }
}
, function(e, t, n) {
    var r = n(14);
    e.exports = function(e, t, n) {
        for (var i in t)
            r(e, i, t[i], n);
        return e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(5)
      , i = n(28)
      , o = n(13)
      , a = n(2)("species");
    e.exports = function(e) {
        var t = r[e];
        o && t && !t[a] && i.f(t, a, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}
, function(e, t, n) {
    var r = n(2)("iterator")
      , i = !1;
    try {
        var o = [7][r]();
        o.return = function() {
            i = !0
        }
        ,
        Array.from(o, (function() {
            throw 2
        }
        ))
    } catch (a) {}
    e.exports = function(e, t) {
        if (!t && !i)
            return !1;
        var n = !1;
        try {
            var o = [7]
              , l = o[r]();
            l.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            o[r] = function() {
                return l
            }
            ,
            e(o)
        } catch (a) {}
        return n
    }
}
, , function(e, t, n) {
    var r = n(17)
      , i = n(125)(!1);
    r(r.S, "Object", {
        values: function(e) {
            return i(e)
        }
    })
}
, function(e, t, n) {
    var r = n(13)
      , i = n(31)
      , o = n(30)
      , a = n(126).f;
    e.exports = function(e) {
        return function(t) {
            for (var n, l = o(t), u = i(l), c = u.length, s = 0, f = []; c > s; )
                n = u[s++],
                r && !a.call(l, n) || f.push(e ? [n, l[n]] : l[n]);
            return f
        }
    }
}
, function(e, t) {
    t.f = {}.propertyIsEnumerable
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0)
      , i = n.n(r)
      , o = n(67)
      , a = n(36)
      , l = n(1)
      , u = (n(85),
    n(24),
    n(18),
    n(19),
    n(53),
    n(47))
      , c = n.n(u)
      , s = function(e) {
        var t = e.error
          , n = e.retry
          , r = e.pastDelay;
        return t ? i.a.createElement("div", {
            style: {
                align: "center",
                color: "#fff",
                backgroundColor: "#fa383e",
                borderColor: "#fa383e",
                borderStyle: "solid",
                borderRadius: "0.25rem",
                borderWidth: "1px",
                boxSizing: "border-box",
                display: "block",
                padding: "1rem",
                flex: "0 0 50%",
                marginLeft: "25%",
                marginRight: "25%",
                marginTop: "5rem",
                maxWidth: "50%",
                width: "100%"
            }
        }, i.a.createElement("p", null, t.message), i.a.createElement("div", null, i.a.createElement("button", {
            type: "button",
            onClick: n
        }, "Retry"))) : r ? i.a.createElement("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }
        }, i.a.createElement("svg", {
            id: "loader",
            style: {
                width: 128,
                height: 110,
                position: "absolute",
                top: "calc(100vh - 64%)"
            },
            viewBox: "0 0 45 45",
            xmlns: "http://www.w3.org/2000/svg",
            stroke: "#61dafb"
        }, i.a.createElement("g", {
            fill: "none",
            fillRule: "evenodd",
            transform: "translate(1 1)",
            strokeWidth: "2"
        }, i.a.createElement("circle", {
            cx: "22",
            cy: "22",
            r: "6",
            strokeOpacity: "0"
        }, i.a.createElement("animate", {
            attributeName: "r",
            begin: "1.5s",
            dur: "3s",
            values: "6;22",
            calcMode: "linear",
            repeatCount: "indefinite"
        }), i.a.createElement("animate", {
            attributeName: "stroke-opacity",
            begin: "1.5s",
            dur: "3s",
            values: "1;0",
            calcMode: "linear",
            repeatCount: "indefinite"
        }), i.a.createElement("animate", {
            attributeName: "stroke-width",
            begin: "1.5s",
            dur: "3s",
            values: "2;0",
            calcMode: "linear",
            repeatCount: "indefinite"
        })), i.a.createElement("circle", {
            cx: "22",
            cy: "22",
            r: "6",
            strokeOpacity: "0"
        }, i.a.createElement("animate", {
            attributeName: "r",
            begin: "3s",
            dur: "3s",
            values: "6;22",
            calcMode: "linear",
            repeatCount: "indefinite"
        }), i.a.createElement("animate", {
            attributeName: "stroke-opacity",
            begin: "3s",
            dur: "3s",
            values: "1;0",
            calcMode: "linear",
            repeatCount: "indefinite"
        }), i.a.createElement("animate", {
            attributeName: "stroke-width",
            begin: "3s",
            dur: "3s",
            values: "2;0",
            calcMode: "linear",
            repeatCount: "indefinite"
        })), i.a.createElement("circle", {
            cx: "22",
            cy: "22",
            r: "8"
        }, i.a.createElement("animate", {
            attributeName: "r",
            begin: "0s",
            dur: "1.5s",
            values: "6;1;2;3;4;5;6",
            calcMode: "linear",
            repeatCount: "indefinite"
        }))))) : null
    }
      , f = n(32)
      , d = {
        "0424279f": [function() {
            return n.e(3).then(n.bind(null, 133))
        }
        , "@site/../docs/advanced/UsageWithReactRouter.md", 133],
        "0604ec41": [function() {
            return n.e(4).then(n.bind(null, 134))
        }
        , "@site/../docs/faq/ImmutableData.md", 134],
        "0ce1fe67": [function() {
            return n.e(5).then(n.bind(null, 135))
        }
        , "@site/../docs/basics/Reducers.md", 135],
        "0d70b181": [function() {
            return n.e(6).then(n.bind(null, 136))
        }
        , "@site/../docs/faq/Miscellaneous.md", 136],
        17896441: [function() {
            return Promise.all([n.e(0), n.e(1), n.e(7)]).then(n.bind(null, 216))
        }
        , "@theme/DocItem", 216],
        "18332a75": [function() {
            return n.e(8).then(n.bind(null, 138))
        }
        , "@site/../docs/faq/General.md", 138],
        "191f58d6": [function() {
            return n.e(9).then(n.bind(null, 139))
        }
        , "@site/../docs/advanced/AsyncActions.md", 139],
        "19c44ca4": [function() {
            return n.e(10).then(n.bind(null, 140))
        }
        , "@site/../docs/recipes/structuring-reducers/UpdatingNormalizedData.md", 140],
        "1be78505": [function() {
            return Promise.all([n.e(0), n.e(1), n.e(2), n.e(82)]).then(n.bind(null, 215))
        }
        , "@theme/DocPage", 215],
        "1d3485ba": [function() {
            return n.e(11).then(n.bind(null, 147))
        }
        , "@site/../docs/introduction/Motivation.md", 147],
        "23b8105f": [function() {
            return n.e(12).then(n.bind(null, 148))
        }
        , "@site/../docs/faq/DesignDecisions.md", 148],
        "2450ddda": [function() {
            return n.e(13).then(n.bind(null, 149))
        }
        , "@site/../docs/advanced/NextSteps.md", 149],
        "24ad1718": [function() {
            return n.e(14).then(n.bind(null, 150))
        }
        , "@site/../docs/api/compose.md", 150],
        "28a0238b": [function() {
            return n.e(15).then(n.bind(null, 151))
        }
        , "@site/../docs/recipes/structuring-reducers/SplittingReducerLogic.md", 151],
        "2cc353b8": [function() {
            return n.e(16).then(n.bind(null, 152))
        }
        , "@site/../docs/introduction/ThreePrinciples.md", 152],
        "33f27551": [function() {
            return n.e(17).then(n.bind(null, 153))
        }
        , "@site/../docs/advanced/Middleware.md", 153],
        37697993: [function() {
            return n.e(18).then(n.bind(null, 154))
        }
        , "@site/../docs/recipes/structuring-reducers/InitializingState.md", 154],
        "3b067476": [function() {
            return n.e(19).then(n.bind(null, 155))
        }
        , "@site/../docs/basics/UsageWithReact.md", 155],
        "41bfb974": [function() {
            return n.e(20).then(n.bind(null, 156))
        }
        , "@site/../docs/api/README.md", 156],
        "4a989b5d": [function() {
            return n.e(21).then(n.bind(null, 157))
        }
        , "@site/../docs/introduction/LearningResources.md", 157],
        "4e97a8e5": [function() {
            return n.e(22).then(n.bind(null, 158))
        }
        , "@site/../docs/recipes/ConfiguringYourStore.md", 158],
        "53675c58": [function() {
            return n.e(23).then(n.bind(null, 159))
        }
        , "@site/../docs/introduction/CoreConcepts.md", 159],
        "540d324d": [function() {
            return n.e(24).then(n.bind(null, 160))
        }
        , "@site/../docs/recipes/structuring-reducers/BeyondCombineReducers.md", 160],
        "56989e19": [function() {
            return n.e(25).then(n.bind(null, 161))
        }
        , "@site/../docs/recipes/ReducingBoilerplate.md", 161],
        "5a142dc0": [function() {
            return n.e(26).then(n.bind(null, 162))
        }
        , "@site/../docs/api/createStore.md", 162],
        "5a81eb9b": [function() {
            return n.e(27).then(n.bind(null, 163))
        }
        , "@site/../docs/recipes/IsolatingSubapps.md", 163],
        "5d5abd3d": [function() {
            return n.e(28).then(n.bind(null, 164))
        }
        , "@site/../docs/introduction/GettingStarted.md", 164],
        "5e78bcaf": [function() {
            return n.e(29).then(n.bind(null, 165))
        }
        , "@site/../docs/advanced/ExampleRedditAPI.md", 165],
        "5f85532a": [function() {
            return n.e(30).then(n.bind(null, 166))
        }
        , "@site/../docs/basics/ExampleTodoList.md", 166],
        "6b4fb4f8": [function() {
            return n.e(31).then(n.bind(null, 167))
        }
        , "@site/../docs/basics/Actions.md", 167],
        "6d12da77": [function() {
            return n.e(32).then(n.bind(null, 168))
        }
        , "@site/../docs/recipes/ServerRendering.md", 168],
        "6f3ed655": [function() {
            return n.e(33).then(n.bind(null, 169))
        }
        , "@site/../docs/faq/OrganizingState.md", 169],
        "6fb1842e": [function() {
            return n.e(34).then(n.bind(null, 170))
        }
        , "@site/../docs/recipes/README.md", 170],
        "73514cec": [function() {
            return n.e(35).then(n.bind(null, 171))
        }
        , "@site/../docs/faq/Performance.md", 171],
        "740c6f4e": [function() {
            return n.e(36).then(n.bind(null, 172))
        }
        , "@site/../docs/recipes/structuring-reducers/UsingCombineReducers.md", 172],
        "7cb726bf": [function() {
            return n.e(37).then(n.bind(null, 173))
        }
        , "@site/../docs/api/bindActionCreators.md", 173],
        "7d94cdb2": [function() {
            return n.e(38).then(n.bind(null, 174))
        }
        , "@site/../docs/recipes/CodeSplitting.md", 174],
        "8281e42f": [function() {
            return n.e(39).then(n.bind(null, 175))
        }
        , "@site/../docs/style-guide/style-guide.md", 175],
        "8351d53d": [function() {
            return n.e(40).then(n.bind(null, 176))
        }
        , "@site/../docs/recipes/structuring-reducers/PrerequisiteConcepts.md", 176],
        "8508c49a": [function() {
            return n.e(41).then(n.bind(null, 177))
        }
        , "@site/../docs/advanced/README.md", 177],
        "85a2cf2c": [function() {
            return n.e(42).then(n.bind(null, 178))
        }
        , "@site/../docs/faq/StoreSetup.md", 178],
        "8bbeb6cd": [function() {
            return n.e(43).then(n.bind(null, 179))
        }
        , "@site/../docs/introduction/Ecosystem.md", 179],
        "8e4e2783": [function() {
            return n.e(44).then(n.bind(null, 180))
        }
        , "@site/../docs/recipes/MigratingToRedux.md", 180],
        "8e532af9": [function() {
            return n.e(45).then(n.bind(null, 181))
        }
        , "@site/../docs/recipes/ImplementingUndoHistory.md", 181],
        "90b8c979": [function() {
            return n.e(46).then(n.bind(null, 182))
        }
        , "@site/../docs/api/applyMiddleware.md", 182],
        "94f24d71": [function() {
            return n.e(47).then(n.bind(null, 183))
        }
        , "@site/../docs/recipes/UsingObjectSpreadOperator.md", 183],
        "97a57d04": [function() {
            return n.e(48).then(n.bind(null, 184))
        }
        , "@site/../docs/faq/Reducers.md", 184],
        "991d1f05": [function() {
            return n.e(49).then(n.bind(null, 185))
        }
        , "@site/../docs/Glossary.md", 185],
        "9b9fc3a2": [function() {
            return n.e(50).then(n.bind(null, 186))
        }
        , "@site/../docs/recipes/structuring-reducers/BasicReducerStructure.md", 186],
        "9cedbede": [function() {
            return n.e(51).then(n.bind(null, 187))
        }
        , "@site/../docs/introduction/Installation.md", 187],
        a0806a44: [function() {
            return n.e(52).then(n.bind(null, 188))
        }
        , "@site/../docs/basics/Store.md", 188],
        a20760ff: [function() {
            return n.e(53).then(n.bind(null, 189))
        }
        , "@site/../docs/advanced/AsyncFlow.md", 189],
        a2902d4d: [function() {
            return n.e(54).then(n.bind(null, 190))
        }
        , "@site/../docs/recipes/structuring-reducers/ReusingReducerLogic.md", 190],
        a5a415a2: [function() {
            return n.e(55).then(n.bind(null, 191))
        }
        , "@site/../docs/api/combineReducers.md", 191],
        a7578db5: [function() {
            return n.e(56).then(n.bind(null, 192))
        }
        , "@site/../docs/recipes/structuring-reducers/NormalizingStateShape.md", 192],
        a7ea628c: [function() {
            return n.e(57).then(n.bind(null, 193))
        }
        , "@site/../docs/faq/ReactRedux.md", 193],
        a885273f: [function() {
            return n.e(58).then(n.bind(null, 194))
        }
        , "@site/../docs/redux-toolkit/overview.md", 194],
        acff2704: [function() {
            return n.e(59).then(n.bind(null, 195))
        }
        , "@site/../docs/api/Store.md", 195],
        b1380c1e: [function() {
            return n.e(61).then(n.bind(null, 196))
        }
        , "@site/../docs/recipes/UsageWithTypescript.md", 196],
        b67e346f: [function() {
            return n.e(62).then(n.bind(null, 197))
        }
        , "@site/../docs/FAQ.md", 197],
        ba92a0db: [function() {
            return n.e(63).then(n.bind(null, 198))
        }
        , "@site/../docs/Troubleshooting.md", 198],
        bfd7c810: [function() {
            return n.e(64).then(n.bind(null, 199))
        }
        , "@site/../docs/recipes/WritingTests.md", 199],
        c4f5d8e4: [function() {
            return Promise.all([n.e(0), n.e(1), n.e(2), n.e(65)]).then(n.bind(null, 200))
        }
        , "@site/src/pages/index.js", 200],
        cd1a63fa: [function() {
            return n.e(66).then(n.bind(null, 202))
        }
        , "@site/../docs/introduction/README.md", 202],
        db3abe63: [function() {
            return n.e(67).then(n.bind(null, 203))
        }
        , "@site/../docs/recipes/structuring-reducers/RefactoringReducersExample.md", 203],
        e63ccefe: [function() {
            return n.e(68).then(n.bind(null, 204))
        }
        , "@site/../docs/introduction/Examples.md", 204],
        ec1ed54d: [function() {
            return n.e(69).then(n.t.bind(null, 205, 3))
        }
        , "~docs/route-9ee.json", 205],
        ec516920: [function() {
            return n.e(70).then(n.bind(null, 206))
        }
        , "@site/../docs/basics/README.md", 206],
        f1ad62c2: [function() {
            return n.e(71).then(n.bind(null, 207))
        }
        , "@site/../docs/recipes/structuring-reducers/StructuringReducers.md", 207],
        f1c6b27a: [function() {
            return n.e(72).then(n.bind(null, 208))
        }
        , "@site/../docs/introduction/PriorArt.md", 208],
        f1e47877: [function() {
            return n.e(73).then(n.bind(null, 209))
        }
        , "@site/../docs/faq/Actions.md", 209],
        f65c68cc: [function() {
            return n.e(74).then(n.bind(null, 210))
        }
        , "@site/../docs/recipes/structuring-reducers/ImmutableUpdatePatterns.md", 210],
        f75e8fd4: [function() {
            return n.e(75).then(n.bind(null, 211))
        }
        , "@site/../docs/basics/DataFlow.md", 211],
        faadf69e: [function() {
            return n.e(76).then(n.bind(null, 212))
        }
        , "@site/../docs/recipes/UsingImmutableJS.md", 212],
        fab39a19: [function() {
            return n.e(77).then(n.bind(null, 213))
        }
        , "@site/../docs/faq/CodeStructure.md", 213],
        fcc2861d: [function() {
            return n.e(78).then(n.bind(null, 214))
        }
        , "@site/../docs/recipes/ComputingDerivedData.md", 214]
    };
    var p = function(e) {
        var t = {};
        return function e(n, r) {
            Object.keys(n).forEach((function(i) {
                var o = n[i]
                  , a = r ? r + "." + i : i;
                "object" === typeof o && !!o && Object.keys(o).length ? e(o, a) : t[a] = o
            }
            ))
        }(e),
        t
    };
    var m = function(e) {
        if ("*" === e)
            return c()({
                loading: s,
                loader: function() {
                    return Promise.all([n.e(0), n.e(1), n.e(2), n.e(83)]).then(n.bind(null, 235))
                }
            });
        var t = f[e]
          , r = []
          , o = []
          , a = {}
          , u = p(t);
        return Object.keys(u).forEach((function(e) {
            var t = d[u[e]];
            t && (a[e] = t[0],
            r.push(t[1]),
            o.push(t[2]))
        }
        )),
        c.a.Map({
            loading: s,
            loader: a,
            modules: r,
            webpack: function() {
                return o
            },
            render: function(e, n) {
                var r = JSON.parse(JSON.stringify(t));
                Object.keys(e).forEach((function(t) {
                    for (var n = r, i = t.split("."), o = 0; o < i.length - 1; o += 1)
                        n = n[i[o]];
                    n[i[i.length - 1]] = e[t].default;
                    var a = Object.keys(e[t]).filter((function(e) {
                        return "default" !== e
                    }
                    ));
                    a && a.length && a.forEach((function(r) {
                        n[i[i.length - 1]][r] = e[t][r]
                    }
                    ))
                }
                ));
                var o = r.component;
                return delete r.component,
                i.a.createElement(o, Object(l.a)({}, r, n))
            }
        })
    }
      , h = [{
        path: "/",
        component: m("/"),
        exact: !0
    }, {
        path: "/:route",
        component: m("/:route"),
        routes: [{
            path: "/advanced/advanced-tutorial",
            component: m("/advanced/advanced-tutorial"),
            exact: !0
        }, {
            path: "/advanced/async-actions",
            component: m("/advanced/async-actions"),
            exact: !0
        }, {
            path: "/advanced/async-flow",
            component: m("/advanced/async-flow"),
            exact: !0
        }, {
            path: "/advanced/example-reddit-api",
            component: m("/advanced/example-reddit-api"),
            exact: !0
        }, {
            path: "/advanced/middleware",
            component: m("/advanced/middleware"),
            exact: !0
        }, {
            path: "/advanced/next-steps",
            component: m("/advanced/next-steps"),
            exact: !0
        }, {
            path: "/advanced/usage-with-react-router",
            component: m("/advanced/usage-with-react-router"),
            exact: !0
        }, {
            path: "/api/api-reference",
            component: m("/api/api-reference"),
            exact: !0
        }, {
            path: "/api/applymiddleware",
            component: m("/api/applymiddleware"),
            exact: !0
        }, {
            path: "/api/bindactioncreators",
            component: m("/api/bindactioncreators"),
            exact: !0
        }, {
            path: "/api/combinereducers",
            component: m("/api/combinereducers"),
            exact: !0
        }, {
            path: "/api/compose",
            component: m("/api/compose"),
            exact: !0
        }, {
            path: "/api/createstore",
            component: m("/api/createstore"),
            exact: !0
        }, {
            path: "/api/store",
            component: m("/api/store"),
            exact: !0
        }, {
            path: "/basics/actions",
            component: m("/basics/actions"),
            exact: !0
        }, {
            path: "/basics/basic-tutorial",
            component: m("/basics/basic-tutorial"),
            exact: !0
        }, {
            path: "/basics/data-flow",
            component: m("/basics/data-flow"),
            exact: !0
        }, {
            path: "/basics/example",
            component: m("/basics/example"),
            exact: !0
        }, {
            path: "/basics/reducers",
            component: m("/basics/reducers"),
            exact: !0
        }, {
            path: "/basics/store",
            component: m("/basics/store"),
            exact: !0
        }, {
            path: "/basics/usage-with-react",
            component: m("/basics/usage-with-react"),
            exact: !0
        }, {
            path: "/faq",
            component: m("/faq"),
            exact: !0
        }, {
            path: "/faq/actions",
            component: m("/faq/actions"),
            exact: !0
        }, {
            path: "/faq/code-structure",
            component: m("/faq/code-structure"),
            exact: !0
        }, {
            path: "/faq/design-decisions",
            component: m("/faq/design-decisions"),
            exact: !0
        }, {
            path: "/faq/general",
            component: m("/faq/general"),
            exact: !0
        }, {
            path: "/faq/immutable-data",
            component: m("/faq/immutable-data"),
            exact: !0
        }, {
            path: "/faq/miscellaneous",
            component: m("/faq/miscellaneous"),
            exact: !0
        }, {
            path: "/faq/organizing-state",
            component: m("/faq/organizing-state"),
            exact: !0
        }, {
            path: "/faq/performance",
            component: m("/faq/performance"),
            exact: !0
        }, {
            path: "/faq/react-redux",
            component: m("/faq/react-redux"),
            exact: !0
        }, {
            path: "/faq/reducers",
            component: m("/faq/reducers"),
            exact: !0
        }, {
            path: "/faq/store-setup",
            component: m("/faq/store-setup"),
            exact: !0
        }, {
            path: "/glossary",
            component: m("/glossary"),
            exact: !0
        }, {
            path: "/introduction/README",
            component: m("/introduction/README"),
            exact: !0
        }, {
            path: "/introduction/core-concepts",
            component: m("/introduction/core-concepts"),
            exact: !0
        }, {
            path: "/introduction/ecosystem",
            component: m("/introduction/ecosystem"),
            exact: !0
        }, {
            path: "/introduction/examples",
            component: m("/introduction/examples"),
            exact: !0
        }, {
            path: "/introduction/getting-started",
            component: m("/introduction/getting-started"),
            exact: !0
        }, {
            path: "/introduction/installation",
            component: m("/introduction/installation"),
            exact: !0
        }, {
            path: "/introduction/learning-resources",
            component: m("/introduction/learning-resources"),
            exact: !0
        }, {
            path: "/introduction/motivation",
            component: m("/introduction/motivation"),
            exact: !0
        }, {
            path: "/introduction/prior-art",
            component: m("/introduction/prior-art"),
            exact: !0
        }, {
            path: "/introduction/three-principles",
            component: m("/introduction/three-principles"),
            exact: !0
        }, {
            path: "/recipes/code-splitting",
            component: m("/recipes/code-splitting"),
            exact: !0
        }, {
            path: "/recipes/computing-derived-data",
            component: m("/recipes/computing-derived-data"),
            exact: !0
        }, {
            path: "/recipes/configuring-your-store",
            component: m("/recipes/configuring-your-store"),
            exact: !0
        }, {
            path: "/recipes/implementing-undo-history",
            component: m("/recipes/implementing-undo-history"),
            exact: !0
        }, {
            path: "/recipes/isolating-redux-sub-apps",
            component: m("/recipes/isolating-redux-sub-apps"),
            exact: !0
        }, {
            path: "/recipes/migrating-to-redux",
            component: m("/recipes/migrating-to-redux"),
            exact: !0
        }, {
            path: "/recipes/recipe-index",
            component: m("/recipes/recipe-index"),
            exact: !0
        }, {
            path: "/recipes/reducing-boilerplate",
            component: m("/recipes/reducing-boilerplate"),
            exact: !0
        }, {
            path: "/recipes/server-rendering",
            component: m("/recipes/server-rendering"),
            exact: !0
        }, {
            path: "/recipes/structuring-reducers/basic-reducer-structure",
            component: m("/recipes/structuring-reducers/basic-reducer-structure"),
            exact: !0
        }, {
            path: "/recipes/structuring-reducers/beyond-combinereducers",
            component: m("/recipes/structuring-reducers/beyond-combinereducers"),
            exact: !0
        }, {
            path: "/recipes/structuring-reducers/immutable-update-patterns",
            component: m("/recipes/structuring-reducers/immutable-update-patterns"),
            exact: !0
        }, {
            path: "/recipes/structuring-reducers/initializing-state",
            component: m("/recipes/structuring-reducers/initializing-state"),
            exact: !0
        }, {
            path: "/recipes/structuring-reducers/normalizing-state-shape",
            component: m("/recipes/structuring-reducers/normalizing-state-shape"),
            exact: !0
        }, {
            path: "/recipes/structuring-reducers/prerequisite-concepts",
            component: m("/recipes/structuring-reducers/prerequisite-concepts"),
            exact: !0
        }, {
            path: "/recipes/structuring-reducers/refactoring-reducer-example",
            component: m("/recipes/structuring-reducers/refactoring-reducer-example"),
            exact: !0
        }, {
            path: "/recipes/structuring-reducers/reusing-reducer-logic",
            component: m("/recipes/structuring-reducers/reusing-reducer-logic"),
            exact: !0
        }, {
            path: "/recipes/structuring-reducers/splitting-reducer-logic",
            component: m("/recipes/structuring-reducers/splitting-reducer-logic"),
            exact: !0
        }, {
            path: "/recipes/structuring-reducers/structuring-reducers",
            component: m("/recipes/structuring-reducers/structuring-reducers"),
            exact: !0
        }, {
            path: "/recipes/structuring-reducers/updating-normalized-data",
            component: m("/recipes/structuring-reducers/updating-normalized-data"),
            exact: !0
        }, {
            path: "/recipes/structuring-reducers/using-combinereducers",
            component: m("/recipes/structuring-reducers/using-combinereducers"),
            exact: !0
        }, {
            path: "/recipes/usage-with-typescript",
            component: m("/recipes/usage-with-typescript"),
            exact: !0
        }, {
            path: "/recipes/using-immutablejs-with-redux",
            component: m("/recipes/using-immutablejs-with-redux"),
            exact: !0
        }, {
            path: "/recipes/using-object-spread-operator",
            component: m("/recipes/using-object-spread-operator"),
            exact: !0
        }, {
            path: "/recipes/writing-tests",
            component: m("/recipes/writing-tests"),
            exact: !0
        }, {
            path: "/redux-toolkit/overview",
            component: m("/redux-toolkit/overview"),
            exact: !0
        }, {
            path: "/style-guide/style-guide",
            component: m("/style-guide/style-guide"),
            exact: !0
        }, {
            path: "/troubleshooting",
            component: m("/troubleshooting"),
            exact: !0
        }]
    }, {
        path: "*",
        component: m("*")
    }]
      , g = n(33)
      , v = n(61)
      , b = n(63)
      , y = n(6)
      , w = n(3)
      , k = n(34)
      , x = n.n(k)
      , E = [n(64), n(64), n(103), n(104), n(105), n(109)];
    function S(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        E.forEach((function(t) {
            var r = t.__esModule ? t.default : t;
            r && r[e] && r[e].apply(r, n)
        }
        ))
    }
    var T = ["onRouteUpdate", "onRouteUpdateDelayed"].reduce((function(e, t) {
        return e[t] = function() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                n[r] = arguments[r];
            S.apply(void 0, [t].concat(n))
        }
        ,
        e
    }
    ), {})
      , _ = (n(54),
    n(79),
    n(16));
    function C(e, t) {
        var n = Object(_.a)(e, t);
        return Promise.all(n.map((function(e) {
            var t = e.route.component;
            if (t && t.preload)
                return t.preload()
        }
        )))
    }
    n(123);
    x.a.configure({
        showSpinner: !1
    });
    var O = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t) || this).previousLocation = null,
            n.progressBarTimeout = null,
            n.state = {
                nextRouteHasLoaded: !0
            },
            n
        }
        Object(y.a)(t, e);
        var n = t.prototype;
        return n.shouldComponentUpdate = function(e, t) {
            var n = this
              , r = e.location !== this.props.location
              , i = this.props
              , o = i.routes
              , a = i.delay
              , l = void 0 === a ? 1e3 : a;
            return r ? (this.startProgressBar(l),
            this.previousLocation = this.props.location,
            this.setState({
                nextRouteHasLoaded: !1
            }),
            C(o, e.location.pathname).then((function() {
                T.onRouteUpdate({
                    previousLocation: n.previousLocation,
                    location: e.location
                }),
                n.previousLocation = null,
                n.setState({
                    nextRouteHasLoaded: !0
                }, n.stopProgressBar);
                var t = e.location.hash;
                if (t) {
                    var r = t.substring(1)
                      , i = document.getElementById(r);
                    i && i.scrollIntoView()
                } else
                    window.scrollTo(0, 0)
            }
            )).catch((function(e) {
                return console.warn(e)
            }
            )),
            !1) : !!t.nextRouteHasLoaded
        }
        ,
        n.clearProgressBarTimeout = function() {
            this.progressBarTimeout && (clearTimeout(this.progressBarTimeout),
            this.progressBarTimeout = null)
        }
        ,
        n.startProgressBar = function(e) {
            var t = this;
            this.clearProgressBarTimeout(),
            this.progressBarTimeout = setTimeout((function() {
                T.onRouteUpdateDelayed({
                    location: t.props.location
                }),
                x.a.start()
            }
            ), e)
        }
        ,
        n.stopProgressBar = function() {
            this.clearProgressBarTimeout(),
            x.a.done()
        }
        ,
        n.render = function() {
            var e = this.props
              , t = e.children
              , n = e.location;
            return i.a.createElement(w.a, {
                location: n,
                render: function() {
                    return t
                }
            })
        }
        ,
        t
    }(i.a.Component)
      , P = Object(w.h)(O);
    var R = function() {
        var e = Object(r.useState)(!1)
          , t = e[0]
          , n = e[1];
        return Object(r.useEffect)((function() {
            n(!0)
        }
        ), []),
        i.a.createElement(b.a.Provider, {
            value: {
                siteConfig: g.a,
                isClient: t
            }
        }, i.a.createElement(P, {
            routes: h
        }, Object(v.a)(h)))
    }
      , A = (n(124),
    function(e) {
        if ("undefined" == typeof document)
            return !1;
        var t = document.createElement("link");
        try {
            if (t.relList && "function" == typeof t.relList.supports)
                return t.relList.supports(e)
        } catch (n) {
            return !1
        }
        return !1
    }("prefetch") ? function(e) {
        return new Promise((function(t, n) {
            if ("undefined" != typeof document) {
                var r = document.createElement("link");
                r.setAttribute("rel", "prefetch"),
                r.setAttribute("href", e),
                r.onload = t,
                r.onerror = n,
                (document.getElementsByTagName("head")[0] || document.getElementsByName("script")[0].parentNode).appendChild(r)
            } else
                n()
        }
        ))
    }
    : function(e) {
        return new Promise((function(t, n) {
            var r = new XMLHttpRequest;
            r.open("GET", e, !0),
            r.withCredentials = !0,
            r.onload = function() {
                200 === r.status ? t() : n()
            }
            ,
            r.send(null)
        }
        ))
    }
    )
      , N = {}
      , I = function(e) {
        return new Promise((function(t) {
            N[e] ? t() : A(e).then((function() {
                t(),
                N[e] = !0
            }
            )).catch((function() {}
            ))
        }
        ))
    }
      , L = {}
      , D = {}
      , F = function() {
        return !(!("connection"in navigator) || -1 === (navigator.connection.effectiveType || "").indexOf("2g") || !navigator.connection.saveData)
    }
      , j = {
        prefetch: function(e) {
            return !!function(e) {
                return !F() && !D[e] && !L[e]
            }(e) && (L[e] = !0,
            Object(_.a)(h, e).reduce((function(e, t) {
                var n = f[t.route.path];
                if (!n)
                    return e;
                var r = Object.values(p(n));
                return e.concat(r)
            }
            ), []).forEach((function(e) {
                var t = n.gca(e);
                t && !/undefined/.test(t) && I(t)
            }
            )),
            !0)
        },
        preload: function(e) {
            return !!function(e) {
                return !F() && !D[e]
            }(e) && (D[e] = !0,
            C(h, e),
            !0)
        }
    };
    if ("undefined" != typeof window && "undefined" != typeof document) {
        window.docusaurus = j;
        var M = o.hydrate;
        C(h, window.location.pathname).then((function() {
            M(i.a.createElement(a.a, null, i.a.createElement(R, null)), document.getElementById("__docusaurus"))
        }
        ))
    }
}
        ], 
        [[80, 80, 0]]
    ]);


console.log('main.775... run end');