function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var n = e(require("./plugins/images")), a = e(require("./miniprogram_npm/keep-wechatapp-common-header/index")), t = e(require("./miniprogram_npm/keep-wechatapp-sensorsdata/index")), o = (require("./plugins/wsApi.js"), 
require("./config.js")), i = require("./plugins/utils.js").getAuth;

a.default.init({
    "x-version-name": "1.0.0",
    "x-wechatapp-id": o.appId
}, function() {
    t.default.init({
        sensorsDataConf: o.sensorsDataConf,
        keepWechatappCommonHeader: a.default.getKeepCommonHeader()
    });
}), App({
    onLaunch: function(e) {
        t.default.track("web_miniprogram_launch", {
            appId: o.appId,
            scene: String(e.scene)
        }), this.globalData.sysinfo = wx.wxapis.getSystemInfoSync(!0), this.globalData.scene = e.scene;
        var n = wx.wxapis.getStorageSync(!0, "loginjwt");
        n && n.openid && (this.loginjwt = n);
    },
    onShow: function() {},
    onHide: function() {
        console.log("App Hide");
    },
    globalData: {
        openid: null,
        sysinfo: {},
        images: n.default,
        scene: null,
        bodyData: {},
        model: null
    },
    config: o,
    wxHttp: function(e) {
        return e.header = e.header || {}, e.header["content-type"] || (e.header["content-type"] = "application/json"), 
        e.header = Object.assign(e.header, a.default.getKeepCommonHeader()), i() && (e.header.Authorization = i()), 
        wx.wxapis.request(!1, e);
    },
    dataStorage: {
        photos: {
            front: "",
            side: ""
        }
    },
    keepLoginPlugin: {
        env: o.env,
        appId: o.appId,
        logo: "/images/logo-min.png",
        name: "Keep体态体脂评估",
        tokenKey: "loginjwt"
    }
});