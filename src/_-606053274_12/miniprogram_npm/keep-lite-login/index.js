var e = require("./config/config"), o = require("./utils/utils"), t = getApp();

Component({
    externalClasses: [ "login-btn-class" ],
    properties: {
        loginBtnText: String,
        entryPageUrl: String,
        loginBtnStyle: String
    },
    data: {
        userInfo: {},
        initShowLock: !1
    },
    attached: function(o) {
        if (t[e.tokenKey] && t[e.tokenKey].token) this.setData({
            initShowLock: !1
        }); else {
            var n = wx.getStorageSync(e.tokenKey);
            n && n.token ? (t[e.tokenKey] = n, this.setData({
                initShowLock: !1
            })) : t.__keeplogin_rcodeLock ? 1 == t.__keeplogin_rcodeLock ? (t.__keeplogin_rcodeList || (t.__keeplogin_rcodeList = []), 
            t.__keeplogin_rcodeList.push(this)) : this.setData({
                userInfo: t.__keeplogin_tmpUserInfo,
                initShowLock: !0
            }) : (t.__keeplogin_rcodeLock = 1, this.freshLogin());
        }
    },
    pageLifetimes: {
        show: function() {
            t[e.tokenKey] && t[e.tokenKey].token && this.setData({
                initShowLock: !1
            });
        }
    },
    methods: {
        clearRcodeList: function() {
            t.__keeplogin_rcodeList = null;
        },
        loopRcodeList: function(e) {
            t.__keeplogin_rcodeList && (t.__keeplogin_rcodeList.forEach(function(o) {
                o.setData({
                    userInfo: e,
                    initShowLock: !0
                });
            }), t.__keeplogin_rcodeList = []);
        },
        onGotUserInfo: function(o) {
            var t = this, n = o.detail;
            n.userInfo && wx.request({
                method: "POST",
                url: e.userInfoUrl,
                data: {
                    openid: this.data.userInfo.openid,
                    encryptedData: n.encryptedData,
                    iv: n.iv
                },
                success: function(e) {
                    var o = e.data;
                    "0" == o.errorCode ? t.storageUserInfo(o.data, !0) : 4000013 == o.errorCode ? t.freshLogin() : wx.showToast({
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
        freshLogin: function(n) {
            var i = this;
            o.wxLogin(function(o) {
                i.triggerEvent("keeploginstarted", {
                    startedInfo: o
                }, {
                    bubbles: !0,
                    composed: !0
                }), t.__keeplogin_rcodeLock = 2, o.bindMobile ? (t[e.tokenKey] = o, wx.setStorage({
                    key: e.tokenKey,
                    data: o,
                    success: function() {
                        i.clearRcodeList(), t.keepCommonHeader && (t.keepCommonHeader.login(o.userId), t.sensors && t.sensors.updateKeepWechatappCommonHeader({
                            keepWechatappCommonHeader: t.keepCommonHeader.getKeepCommonHeader()
                        })), i.triggerEvent("keeploginsuccess", {}, {
                            bubbles: !0,
                            composed: !0
                        });
                    }
                })) : (t.__keeplogin_tmpUserInfo = o, i.setData({
                    userInfo: o,
                    initShowLock: !0
                }), i.loopRcodeList(o));
            });
        },
        storageUserInfo: function(e, o) {
            t.keepLoginPlugin._tmp_userinfo_ = o ? e : this.data.userInfo, wx.navigateTo({
                url: "/" + this.data.entryPageUrl
            });
        }
    }
});