var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
}, t = require("../../service/apiService"), o = getApp();

Page({
    data: {
        report: {},
        replys: {},
        gugeimgs: {},
        id: "",
        loopKeys: [ "headWarp", "highLowSho", "hipWarp", "spineWarp", "oleftLeg", "orightLeg", "xleftLeg", "xrightLeg", "headLead", "backKnee" ],
        levelKeys: [ "重度 高风险", "中度 潜在风险", "轻度", "正常" ],
        levelColors: [ "red", "yellow", "#333333", "green" ]
    },
    onLoad: function(e) {
        var o = this;
        e && e.id && (this.data.id = e.id, t.getQueryResult(e.id).then(function(e) {
            0 == e.errorCode && o.setData({
                report: e.data,
                gugeimgs: {
                    front: e.data.frontDisplayUrl,
                    side: e.data.sideDisplayUrl
                }
            });
        }));
    },
    formatReport: function(t) {
        var o = {};
        return this.data.loopKeys.forEach(function(a) {
            t[a] && (o[t[a].level] || (o[t[a].level] = []), o[t[a].level].push(e({
                key: a
            }, t[a])));
        }), console.log("re=====s", o), o;
    },
    exitLogin: function() {
        wx.wxapis.navigateBack(!1, {
            delta: 1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    replyChange: function(e) {
        var t = e.detail;
        this.data.replys[t.itemName] = {
            score: t.score,
            text: t.text
        };
    },
    submitReply: function(e) {
        var t = {
            appId: o.config.appId,
            feedbackData: this.data.replys,
            from: "wechat",
            userId: o.loginjwt.userId,
            reportId: this.data.id
        };
        o.wxHttp({
            url: o.config.aiHost + "/x-vision/v1/feedback",
            method: "post",
            data: t
        }).then(function(e) {
            wx.wxapis.showModal(!1, {
                content: "反馈成功，感谢你的宝贵意见",
                showCancel: !1,
                success: function(e) {}
            });
        }).catch(function(e) {
            console.log(e);
        });
    }
});