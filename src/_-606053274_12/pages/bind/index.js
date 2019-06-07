var e = require("../../service/apiService"), i = getApp();

Page({
    data: {
        reportData: {},
        report: {},
        gugeimgs: {},
        checkValue: !1,
        id: ""
    },
    onLoad: function(i) {
        var t = this;
        i && i.id && (this.setData({
            id: i.id
        }), e.getQueryResult(i.id).then(function(e) {
            0 == e.errorCode && t.setData({
                report: e.data,
                gugeimgs: {
                    front: e.data.frontDisplayUrl,
                    side: e.data.sideDisplayUrl
                }
            });
        }));
    },
    exitLogin: function() {
        wx.wxapis.navigateBack(!1, {
            delta: 1
        });
    },
    checkChange: function() {
        this.setData({
            checkValue: !this.data.checkValue
        });
    },
    onReady: function() {},
    onShow: function() {
        var e = wx.wxapis.getStorageSync(!0, "loginjwt");
        e.userId && (i.loginjwt = e, wx.wxapis.redirectTo(!1, {
            url: "/pages/detail/index?id=" + this.data.id
        }));
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(e) {},
    shareFile: function() {
        var e = wx.wxapis.getStorageSync(!0, "loginjwt");
        e.userId ? (i.loginjwt = e, wx.wxapis.redirectTo(!1, {
            url: "/pages/detail/index?id=" + this.data.id
        })) : wx.wxapis.navigateTo(!1, {
            url: "/miniprogram_npm/keep-lite-login/entry/index?jwtfail=1"
        });
    },
    shareNo: function() {
        wx.wxapis.redirectTo(!1, {
            url: "/pages/detail/index?id=" + this.data.id
        });
    }
});