function e(e) {
    this.message = "No Such API [" + e + "]", this.name = "IllegalAPIException";
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = require("./wxapis/needQueue"), n = void 0, i = new (n = "undefined" == typeof Proxy ? require("./proxy.js")() : Proxy)(wx, {
    get: function(n, i) {
        if (i in n) return "navigateTo" === i && getCurrentPages().length >= 8 && (i = "redirectTo"), 
        function(e) {
            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++) a[u - 1] = arguments[u];
            if (!(t.queueNames.indexOf(i) > -1 && e) || t.list.add({
                apiName: i,
                data: a,
                needRes: e
            })) return e ? n[i].apply(n, a) : new Promise(function(r, u) {
                var p = void 0;
                if ("object" == (void 0 === (p = a && 0 != a.length ? a[0] : p || {}) ? "undefined" : o(p))) {
                    var s = p.success, f = p.fail;
                    p.success = function() {
                        s && s.apply(void 0, arguments), r && r.apply(void 0, arguments);
                    }, p.fail = function() {
                        f && f.apply(void 0, arguments), u && u.apply(void 0, arguments);
                    };
                }
                t.queueNames.indexOf(i) > -1 && !t.list.add({
                    apiName: i,
                    data: a,
                    needRes: e
                }) || n[i].apply(n, a);
            });
        };
        throw new e(i);
    }
});

wx.wxapis = i, module.exports = i;