var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    var o = {}, t = function(t, r) {
        if (!o[t]) return require(r);
        if (!o[t].status) {
            var n = {
                exports: {}
            };
            o[t].status = 1, o[t].func(o[t].req, n, n.exports), "object" === e(n.exports) ? (Object.keys(n.exports).forEach(function(e) {
                o[t].m.exports[e] = n.exports[e];
            }), n.exports.__esModule && Object.defineProperty(o[t].m.exports, "__esModule", {
                value: !0
            })) : o[t].m.exports = n.exports;
        }
        return o[t].m.exports;
    };
    return function(e, t, r) {
        var n = {
            exports: {}
        };
        o[e] = {
            status: 0,
            func: t,
            req: r,
            m: n
        };
    }(1544079737657, function(e, o, t) {
        function r() {
            this.keepCommonHeader = n;
        }
        var n = {}, s = {}, i = App;
        App = function(e) {
            var o = e.onLaunch;
            e.onLaunch = function(e) {
                o.call(this, e), r.call(this, e);
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
        }, n.init = function(e, o) {
            function t() {
                wx.getSystemInfo({
                    success: function(e) {
                        n["x-screen-width"] = e.screenWidth, n["x-model"] = e.model, n["x-os"] = e.system.split(" ")[0], 
                        n["x-os-version"] = e.system.split(" ")[1], n["x-locale"] = e.language, n["x-screen-height"] = e.screenHeight, 
                        n["x-wechatapp-wxversion"] = e.version, n["x-wechatapp-sdk"] = e.SDKVersion;
                    },
                    fail: function(e) {
                        console.error(e, "wx.getSystemInfo function is failed");
                    },
                    complete: function() {
                        r();
                    }
                });
            }
            function r() {
                for (var t in e) n.hasOwnProperty(t) && (n[t] = e[t]);
                n["x-user-id"] = wx.getStorageSync("keepCommonHeader_x-user-id") || "", s.propsIsComplete = !0, 
                s.setKeepHeader(), o && o();
            }
            if (e) if ("[object Object]" === e.toString()) {
                var n = s.properties;
                wx.getNetworkType({
                    success: function(e) {
                        n["x-network-type"] = e.networkType;
                    },
                    fail: function(e) {
                        console.error(e, "wx.getNetworkType function is failed");
                    },
                    complete: function() {
                        t();
                    }
                });
            } else console.error("the parameter of function init is not an object!"); else console.error("the parameter of function init is necessary!");
        }, n.login = function(e) {
            e ? (s.properties["x-user-id"] = e, s.setKeepHeader(), wx.setStorageSync("keepCommonHeader_x-user-id", e)) : console.error("the userId of function login is necessary!");
        }, n.signOut = function() {
            s.properties["x-user-id"] = "", s.setKeepHeader(), wx.removeStorageSync("keepCommonHeader_x-user-id");
        }, n.getKeepCommonHeader = function(e) {
            return wx.getStorageSync("keep-wechatapp-common-header") || {};
        }, o.exports = n;
    }, function(e) {
        return t({}[e], e);
    }), t(1544079737657);
}();