var e = getApp(), t = require("../../plugins/utils"), n = require("../../miniprogram_npm/keep-lite-login/config/config");

Page({
    data: {
        userinfo: {},
        images: {},
        checkValue: !1,
        checkColor: "",
        failed: !1,
        btnLock: !1
    },
    onLoad: function(n) {
        var a = this;
        wx.wxapis.getSetting(!1).then(function(e) {
            a.checkAuth(e);
        }), t.sensorTrack("page_miniprogram_detection_home", {});
        var i = {
            userinfo: e.loginjwt ? e.loginjwt : {},
            images: e.globalData.images
        };
        wx.getStorageSync("checkValue") && (i.checkValue = !0), this.setData(i);
    },
    checkAuth: function(e) {
        !1 === e.authSetting["scope.camera"] || !1 === e.authSetting["scope.record"] ? this.setData({
            failed: !0,
            btnLock: !1
        }) : this.setData({
            failed: !1,
            btnLock: !1
        });
    },
    onTapSetting: function(e) {
        this.setData({
            btnLock: !0
        });
    },
    onOpenSetting: function(e) {
        this.checkAuth(e.detail);
    },
    onReady: function() {},
    onShow: function() {
        var t = wx.getLaunchOptionsSync();
        e.loginjwt && e.loginjwt.userId || !t || 1069 != t.scene || wx.wxapis.navigateTo(!1, {
            url: "/miniprogram_npm/keep-lite-login/entry/index?jwtfail=1"
        });
    },
    onLoginstarted: function(t) {
        this.setData({
            userinfo: t.detail.startedInfo
        }), e.loginjwt = t.detail.startedInfo;
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    gotoQuiz: function() {
        wx.wxapis.navigateTo(!1, {
            url: "/pages/quiz/index"
        });
    },
    onShareAppMessage: function() {
        return wx.showShareMenu({
            withShareTicket: !0
        }), t.sensorTrack("miniprogram_detection_share_click", {
            page_sourse: "home",
            type: "miniprogram"
        }), {
            title: "基于 Keep AI 技术，测一测你的体态是否亚健康！",
            path: "/pages/home/index",
            imageUrl: "https://static1.keepcdn.com/2019/01/04/14/1546585155520_420x336.png"
        };
    },
    homeShare: function() {},
    checkChange: function() {
        wx.setStorageSync("checkValue", !this.data.checkValue), this.data.checkValue ? this.setData({
            checkValue: !this.data.checkValue
        }) : this.setData({
            checkValue: !this.data.checkValue,
            checkColor: "#24C789"
        });
    },
    onGotUserInfo: function(e) {
        var t = this, a = e.detail;
        a.userInfo && wx.request({
            method: "POST",
            url: n.userInfoUrl,
            data: {
                openid: this.data.userinfo.openid,
                encryptedData: a.encryptedData,
                iv: a.iv
            },
            success: function(e) {
                e.data.ok && t.setData({
                    userinfo: e.data.data
                });
            },
            fail: function(e) {
                console.error(e);
            }
        });
    }
});