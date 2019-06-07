var e = getApp();

e.keepLoginPlugin || wx.showModal({
    content: "请在app中配置keeplogin插件信息",
    showCancel: !1,
    confirmText: "好的",
    success: function(e) {}
});

var n = "https://open.pre.gotokeep.com";

"online" == e.keepLoginPlugin.env && (n = "https://open.gotokeep.com");

var o = {};

o = {
    loginUrl: n + "/butler/v1/miniapp/login/" + e.keepLoginPlugin.appId,
    userInfoUrl: n + "/butler/v1/miniapp/userinfo/" + e.keepLoginPlugin.appId,
    phoneNumberUrl: n + "/butler/v2/miniapp/wechat/mobile/login/" + e.keepLoginPlugin.appId,
    mobileLoginUrl: n + "/butler/v2/miniapp/mobile/login/" + e.keepLoginPlugin.appId,
    chaCodeUrl: n + "/butler/v1/sms/" + e.keepLoginPlugin.appId,
    appIcon: e.keepLoginPlugin.logo,
    appName: e.keepLoginPlugin.name || "KEEP",
    tokenKey: e.keepLoginPlugin.tokenKey || "loginjwt"
}, module.exports = o;