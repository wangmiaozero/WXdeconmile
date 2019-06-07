var t = getApp(), e = require("../../plugins/utils");

require("../../service/apiService");

Page({
    data: {
        keepLogin: !1,
        userinfo: {},
        plist: null,
        isLoading: !1,
        statusText: {
            processing: "报告生成中",
            success: "查看报告",
            failed: "报告失效",
            timeout: "报告失效",
            unqualified: "照片不合格"
        }
    },
    updateListStatusInter: null,
    interTimes: 0,
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var a = this;
        e.sensorTrack("page_detection_report_list", {}), this.setData({
            plist: null,
            isLoading: !0
        }), t.loginjwt ? this.setData({
            userinfo: t.loginjwt,
            keepLogin: !0
        }) : this.setData({
            keepLogin: !1
        }), t.loginjwt && (this.updateListStatus(), this.interTimes = 0, this.updateListStatusInter = setInterval(function() {
            a.interTimes++, console.log(a.interTimes), a.interTimes > 6 ? clearInterval(a.updateListStatusInter) : a.updateListStatus();
        }, 2e3));
    },
    updateListStatus: function() {
        var e = this;
        t.wxHttp({
            url: t.config.host + "/x-vision/v1/listResultSummary",
            method: "GET",
            data: {
                unionId: t.loginjwt.unionId
            }
        }).then(function(t) {
            if (0 == t.data.errCode) {
                t = t.data.data;
                for (var a = [], s = 0; s < t.length; s++) a.push({
                    uploadTime: t[s].uploadTime.substr(0, 19),
                    completeTime: t[s].completeTime ? t[s].completeTime.substr(0, 19) : "",
                    reportId: t[s].reportId,
                    shareStatus: t[s].shareStatus,
                    status: t[s].status,
                    score: t[s].score,
                    eachLevelNum: t[s].eachLevelNum,
                    frontHalfBodyUrl: t[s].frontHalfBodyUrl,
                    srcFrontImageUrl: t[s].srcFrontImageUrl,
                    key: s
                });
                e.setData({
                    plist: a,
                    isLoading: !1
                });
            }
        }).catch(function(t) {
            e.setData({
                isLoading: !1
            }), console.log("e", t);
        });
    },
    onHide: function() {},
    onUnload: function() {},
    showReport: function(t) {
        wx.wxapis.navigateTo(!1, {
            url: t.currentTarget.dataset.url
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    reportDetail: function(t) {
        "success" == t.currentTarget.dataset.status && ("unshare" == t.currentTarget.dataset.shareStatus ? wx.wxapis.navigateTo(!1, {
            url: "/pages/share/index?id=" + t.currentTarget.dataset.reportId
        }) : "shared" == t.currentTarget.dataset.shareStatus && wx.wxapis.navigateTo(!1, {
            url: "/pages/detail/index?id=" + t.currentTarget.dataset.reportId
        }));
    }
});