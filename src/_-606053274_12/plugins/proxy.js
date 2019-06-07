var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

module.exports = function() {
    function e(e) {
        return !!e && ("object" === (void 0 === e ? "undefined" : t(e)) || "function" == typeof e);
    }
    var o = null, n = void 0;
    return n = function(t, n) {
        if (!e(t) || !e(n)) throw new TypeError("Cannot create proxy with a non-object as target or handler");
        var r = function() {};
        o = function() {
            r = function(t) {
                throw new TypeError("Cannot perform '" + t + "' on a proxy that has been revoked");
            };
        };
        var i = n;
        n = {
            get: null,
            set: null,
            apply: null,
            construct: null
        };
        for (var c in i) {
            if (!(c in n)) throw new TypeError("Proxy polyfill does not support trap '" + c + "'");
            n[c] = i[c];
        }
        "function" == typeof i && (n.apply = i.apply.bind(i));
        var p = this, u = !1, f = !1;
        "function" == typeof t ? (p = function() {
            var e = this && this.constructor === p, o = Array.prototype.slice.call(arguments);
            return r(e ? "construct" : "apply"), e && n.construct ? n.construct.call(this, t, o) : !e && n.apply ? n.apply(t, this, o) : e ? (o.unshift(t), 
            new (t.bind.apply(t, o))()) : t.apply(this, o);
        }, u = !0) : t instanceof Array && (p = [], f = !0);
        var a = n.get ? function(t) {
            return r("get"), n.get(this, t, p);
        } : function(t) {
            return r("get"), this[t];
        }, y = n.set ? function(t, e) {
            r("set");
            n.set(this, t, e, p);
        } : function(t, e) {
            r("set"), this[t] = e;
        }, l = {};
        Object.getOwnPropertyNames(t).forEach(function(e) {
            if (!((u || f) && e in p)) {
                var o = {
                    enumerable: !!Object.getOwnPropertyDescriptor(t, e).enumerable,
                    get: a.bind(t, e),
                    set: y.bind(t, e)
                };
                Object.defineProperty(p, e, o), l[e] = !0;
            }
        });
        var s = !0;
        if (Object.setPrototypeOf ? Object.setPrototypeOf(p, Object.getPrototypeOf(t)) : p.__proto__ ? p.__proto__ = t.__proto__ : s = !1, 
        n.get || !s) for (var b in t) l[b] || Object.defineProperty(p, b, {
            get: a.bind(t, b)
        });
        return Object.seal(p), p;
    }, n.revocable = function(t, e) {
        return {
            proxy: new n(t, e),
            revoke: o
        };
    }, n;
};