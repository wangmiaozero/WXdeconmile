var e = require("../../service/apiService"), a = require("../../plugins/utils");

getApp();

Page({
    data: {
        solveData: {},
        showData: !1,
        reportData: {},
        currentTab: 0,
        name: "",
        url: "",
        comparePic: "",
        harm: "",
        height: "",
        backColor: "",
        mustKeys: {
            headWarp: {
                desc: "颈椎侧偏，与水平面不垂直",
                name: "头部侧倾"
            },
            highLowSho: {
                desc: "两侧肩峰不在同一水平面上",
                name: "高低肩"
            },
            hipWarp: {
                desc: "两侧髂前上棘不在水平面上(左右髋关节不在同一水平面上)",
                name: "骨盆倾斜"
            },
            spineWarp: {
                desc: "脊柱侧弯，与水平面不垂直",
                name: "脊柱侧倾弯"
            },
            oLeftLeg: {
                desc: "踝关节并拢，膝关节无法并拢(左腿向外弯曲)",
                name: "左腿O型"
            },
            oRightLeg: {
                desc: "踝关节并拢，膝关节无法并拢(右腿向外弯曲)",
                name: "右腿O型"
            },
            xLeftLeg: {
                desc: "膝关节并拢，踝关节距离在1cm以上(左腿向内弯曲)",
                name: "左腿X型"
            },
            xRightLeg: {
                desc: "踝膝关节并拢，踝关节距离在1cm以上(右腿向内弯曲)",
                name: "右腿X型"
            },
            headLead: {
                desc: "耳朵与肩关节连线与水平面不垂直，耳朵靠前",
                name: "头部前引"
            },
            backKnee: {
                desc: "左腿膝关节位于左踝-左髋连线后侧",
                name: "膝盖过伸"
            }
        }
    },
    onLoad: function(a) {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    height: e.windowHeight + "px"
                });
            }
        }), a && t.setData({
            name: a.name,
            url: a.url,
            comparePic: a.comparePic,
            harm: a.harm
        }), e.getSolveData(a.id).then(function(e) {
            0 == e.errorCode && t.setData({
                solveData: e.data,
                showData: !0
            });
        });
    },
    exitLogin: function() {
        wx.wxapis.navigateBack(!1, {
            delta: 1
        });
    },
    onReady: function() {},
    onShow: function() {
        a.sensorTrack("page_detection_solution", {});
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(e) {},
    clickTab: function(e) {
        var a = this;
        if (this.data.currentTab === e.target.dataset.current) return !1;
        a.setData({
            currentTab: e.target.dataset.current
        });
    }
});