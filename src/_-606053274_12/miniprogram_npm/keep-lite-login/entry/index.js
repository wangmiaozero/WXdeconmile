var e = require("../config/config"), o = require("../utils/utils"), n = getApp();

Page({
    data: {
        userInfo: {},
        pageInfo: {},
        showMobilePage: !1,
        showNav: !1
    },
    onLoad: function(a) {
        var t = this;
        n.sensors && n.sensors.track("page_miniprogram_login", {});
        var i = wx.getSystemInfoSync();
        1 != a.jwtfail ? this.setData({
            userInfo: n.keepLoginPlugin._tmp_userinfo_ || {},
            showNav: i.windowHeight == i.screenHeight,
            pageInfo: {
                icon: e.appIcon,
                name: e.appName
            }
        }) : o.wxLogin(function(o) {
            t.setData({
                userInfo: o,
                showNav: i.windowHeight == i.screenHeight,
                pageInfo: {
                    icon: e.appIcon,
                    name: e.appName
                }
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onGetPhoneNumber: function(o) {
        var a = this;
        n.sensors && n.sensors.track("page_miniprogram_login", {
            from: "miniprogram_login"
        });
        var t = o.detail;
        t.encryptedData && wx.request({
            method: "POST",
            url: e.phoneNumberUrl,
            data: {
                openid: this.data.userInfo.openid,
                encryptedData: t.encryptedData,
                iv: t.iv
            },
            success: function(e) {
                var o = e.data;
                0 == o.errorCode ? (a.setData({
                    userInfo: o.data
                }), a.loginCurrentUser(o.data)) : wx.showToast({
                    title: o.text,
                    icon: "none",
                    duration: 1500
                });
            },
            fail: function(e) {
                console.error(e);
            }
        });
    },
    loginCurrentUser: function(o) {
        var a = void 0;
        a = o && o.token ? o : o && o.detail && o.detail.userInfo ? o.detail.userInfo : this.data.userInfo, 
        n[e.tokenKey] = a, wx.setStorage({
            key: e.tokenKey,
            data: a,
            success: function(e) {
                n.keepCommonHeader && (n.keepCommonHeader.login(a.userId), n.sensors && n.sensors.updateKeepWechatappCommonHeader({
                    keepWechatappCommonHeader: n.keepCommonHeader.getKeepCommonHeader()
                })), wx.navigateBack();
            }
        });
    },
    onShareAppMessage: function() {},
    onShowMobilePage: function(e) {
        n.sensors && n.sensors.track("phone_login_method_click", {
            from: "miniprogram_login"
        }), this.setData({
            showMobilePage: !0
        });
    }
});