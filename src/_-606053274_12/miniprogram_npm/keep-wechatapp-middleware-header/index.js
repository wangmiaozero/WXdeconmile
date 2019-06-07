var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    var t = {}, o = function(o, r) {
        if (!t[o]) return require(r);
        if (!t[o].status) {
            var n = {
                exports: {}
            };
            t[o].status = 1, t[o].func(t[o].req, n, n.exports), "object" === e(n.exports) ? (Object.keys(n.exports).forEach(function(e) {
                t[o].m.exports[e] = n.exports[e];
            }), n.exports.__esModule && Object.defineProperty(t[o].m.exports, "__esModule", {
                value: !0
            })) : t[o].m.exports = n.exports;
        }
        return t[o].m.exports;
    };
    return function(e, o, r) {
        var n = {
            exports: {}
        };
        t[e] = {
            status: 0,
            func: o,
            req: r,
            m: n
        };
    }(1538281508624, function(e, t, o) {
        function r() {
            this.keepCommonHeader = n;
        }
        var n = {}, s = {}, i = App;
        App = function(e) {
            var t = e.onLaunch;
            e.onLaunch = function(e) {
                t.call(this, e), r.call(this, e);
            }, i(e);
        }, s.propsIsComplete = !1, s.properties = {
            "x-screen-width": "",
            "x-model": "",
            "x-os": "",
            "x-os-version": "",
            "x-locale": "",
            "x-version-name": "",
            "x-user-id": "",
            "x-screen-height": "",
            "x-network-type": "",
            "x-app-platform": "wechatapp",
            "x-wechatapp-wxversion": "",
            "x-wechatapp-sdk": "",
            "x-wechatapp-id": ""
        }, s.setKeepHeader = function() {
            this.propsIsComplete && wx.setStorageSync("keep-wechatapp-common-header", this.properties);
        }, n.init = function(e) {
            function t() {
                wx.getSystemInfo({
                    success: function(e) {
                        r["x-screen-width"] = e.screenWidth, r["x-model"] = e.model, r["x-os"] = e.system.split(" ")[0], 
                        r["x-os-version"] = e.system.split(" ")[1], r["x-locale"] = e.language, r["x-screen-height"] = e.screenHeight, 
                        r["x-wechatapp-wxversion"] = e.version, r["x-wechatapp-sdk"] = e.SDKVersion, o();
                    },
                    fail: function(e) {
                        console.error(e, "wx.getSystemInfo function is failed");
                    }
                });
            }
            function o() {
                if ("[object Object]" === e.toString()) {
                    for (var t in e) r.hasOwnProperty(t) && (r[t] = e[t]);
                    r["x-user-id"] = wx.getStorageSync("x-user-id") || "", s.propsIsComplete = !0, s.setKeepHeader();
                } else console.error("the parameter of function init is not an object!");
            }
            if (e) {
                var r = s.properties;
                wx.getNetworkType({
                    success: function(e) {
                        r["x-network-type"] = e.networkType, t();
                    }
                });
            } else console.error("the parameter of function init is necessary!");
        }, n.login = function(e) {
            e ? (s.properties["x-user-id"] = e, s.setKeepHeader(), wx.setStorageSync("x-user-id", e)) : console.error("the userId of function login is necessary!");
        }, t.exports = n;
    }, function(e) {
        return o({}[e], e);
    }), o(1538281508624);
}();