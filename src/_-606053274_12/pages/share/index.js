var e = require("../../service/apiService"), t = require("../../plugins/utils"), a = getApp();

Page({
    data: {
        reportData: {},
        report: {},
        gugeimgs: {},
        checkValue: !1,
        id: ""
    },
    onLoad: function(a) {
        var i = this;
        t.sensorTrack("page_detection_report_cover", {}), a && a.id && (this.setData({
            id: a.id
        }), e.getQueryResult(a.id).then(function(e) {
            0 == e.errCode && i.setData({
                report: e.data,
                gugeimgs: {
                    front: e.data.frontDisplayUrl,
                    side: e.data.sideDisplayUrl
                }
            });
        }));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(e) {
        return wx.showShareMenu({
            withShareTicket: !0
        }), this.shareFile(), {
            title: "基于 Keep AI 技术，测一测你的体态是否亚健康！",
            path: "/pages/home/index",
            imageUrl: "https://static1.keepcdn.com/2019/01/04/14/1546585155520_420x336.png"
        };
    },
    replyChange: function(e) {
        var t = e.detail;
        this.data.replys[t.itemName] = {
            score: t.score,
            text: t.text
        };
    },
    shareFile: function() {
        var e = this;
        t.sensorTrack("miniprogram_detection_share_click", {
            page_sourse: "report_cover",
            type: "report"
        }), this.data.id && a.wxHttp({
            url: a.config.aiHost + "/x-vision/v1/updateSharedStatus?reportId=" + this.data.id,
            method: "POST",
            data: {}
        }).then(function(t) {
            0 == t.data.errCode && (e.setData({
                reportData: t.data.data
            }), console.log(a.loginjwt), a.loginjwt.userId ? wx.wxapis.redirectTo(!1, {
                url: "/pages/detail/index?id=" + e.data.id
            }) : wx.wxapis.redirectTo(!1, {
                url: "/pages/bind/index?id=" + e.data.id
            }));
        }).catch(function(e) {
            console.log("e", e);
        });
    }
});