var t = require("../../service/apiService"), e = getApp();

Page({
    data: {
        reportData: {},
        report: {},
        gugeimgs: {},
        checkValue: !1,
        id: ""
    },
    onLoad: function(e) {
        var a = this;
        e && e.id && (this.setData({
            id: e.id
        }), t.getQueryResult(e.id).then(function(t) {
            0 == t.errorCode && a.setData({
                report: t.data,
                gugeimgs: {
                    front: t.data.frontDisplayUrl,
                    side: t.data.sideDisplayUrl
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
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        return wx.showShareMenu({
            withShareTicket: !0
        }), {
            success: function(t) {
                t.shareTickets && t.shareTickets[0] && wx.getShareInfo({
                    shareTicket: t.shareTickets[0],
                    success: function(t) {
                        wx.wxapis.navigateTo(!1, {
                            url: "/pages/papers/index"
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    },
                    complete: function(t) {
                        console.log(t);
                    }
                });
            },
            fail: function(t) {}
        };
    },
    replyChange: function(t) {
        var e = t.detail;
        this.data.replys[e.itemName] = {
            score: e.score,
            text: e.text
        };
    },
    shareFile: function() {
        var t = this;
        this.data.id && e.wxHttp({
            url: e.config.aiHost + "/x-vision/v1/updateSharedStatus?reportId=" + this.data.id,
            method: "POST",
            data: {}
        }).then(function(e) {
            0 == e.data.errCode && t.setData({
                reportData: e.data.data
            });
        }).catch(function(t) {
            console.log("e", t);
        });
    }
});