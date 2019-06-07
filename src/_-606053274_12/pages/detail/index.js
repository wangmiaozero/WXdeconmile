var e = require("../../service/apiService"), t = require("../../plugins/utils"), a = getApp();

Page({
    data: {
        reportData: {},
        report: {},
        normalData: [],
        height: "",
        backColor: "",
        imgSrc: "",
        text: "",
        gugeimgs: {},
        checkValue: !1,
        bigImg: !1,
        bigImg2: !1,
        id: "",
        shareType: "",
        currentTab: 0,
        showSyncConfirm: !1,
        bodyParts: {},
        requestInterval: null
    },
    onLoad: function(e) {
        t.sensorTrack("page_detection_report_conclusion", {
            type: "posture"
        });
        var a = this;
        wx.getSystemInfo({
            success: function(e) {
                a.setData({
                    height: e.windowHeight + "px"
                });
            }
        }), e && e.id && (this.setData({
            id: e.id
        }), this.loadInfo(e.id));
    },
    loadInfo: function(t) {
        var r = this;
        e.getQueryResult(t).then(function(e) {
            var o = [];
            e.data.levelToDetail[0] && e.data.levelToDetail[1] ? o = e.data.levelToDetail[1].concat(e.data.levelToDetail[0]) : e.data.levelToDetail[0] && !e.data.levelToDetail[1] ? o = e.data.levelToDetail[0] : !e.data.levelToDetail[0] && e.data.levelToDetail[1] && (o = e.data.levelToDetail[1]), 
            0 == e.errCode && (e.data.poseDataResponse && e.data.poseDataResponse.report && (e.data.poseDataResponse.report.bmi = e.data.poseDataResponse.report.bmi.toFixed(2), 
            e.data.poseDataResponse.report.whr = e.data.poseDataResponse.report.whr.toFixed(2), 
            e.data.poseDataResponse.report.bf = e.data.poseDataResponse.report.bf.toFixed(1), 
            e.data.poseDataResponse.report.bmr = e.data.poseDataResponse.report.bmr.toFixed(1), 
            a.globalData.model = e.data.poseDataResponse.report.modelUrl, r.getModelData(e.data.poseDataResponse.report)), 
            clearTimeout(r.requestInterval), e.data.poseDataResponse && !e.data.poseDataResponse.report && "failed" != !e.data.poseDataResponse.status && (r.drawProgressbg(), 
            r.drawCircle(e.data.percentageSecond / 50), r.requestInterval = setTimeout(function() {
                r.loadInfo(t);
            }, 1e3)), r.setData({
                report: e.data,
                normalData: o,
                gugeimgs: {
                    front: e.data.frontDisplayUrl,
                    side: e.data.sideDisplayUrl
                }
            }), r.getStatus(e.data.score));
        });
    },
    getModelData: function(e) {
        var t = {
            left: [ {
                class: "arm-wrapper",
                name: "上臂",
                value: e.leftArm.toFixed(1) + "cm"
            }, {
                class: "waist-wrapper",
                name: "腰围",
                value: e.waistConvex.toFixed(1) + "cm"
            }, {
                class: "left-thigh-wrapper",
                name: "左大腿",
                value: e.leftThigh.toFixed(1) + "cm"
            }, {
                class: "left-crus-wrapper",
                name: "左小腿",
                value: e.leftCrus.toFixed(1) + "cm"
            } ],
            right: [ {
                class: "bust-wrapper",
                name: "胸围",
                value: e.bustConvex.toFixed(1) + "cm"
            }, {
                class: "hips-wrapper",
                name: "臀围",
                value: e.hipsConvex.toFixed(1) + "cm"
            }, {
                class: "right-thigh-wrapper",
                name: "右大腿",
                value: e.rightThigh.toFixed(1) + "cm"
            }, {
                class: "right-crus-wrapper",
                name: "右小腿",
                value: e.rightCrus.toFixed(1) + "cm"
            } ]
        };
        this.setData({
            bodyParts: t
        });
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
    drawProgressbg: function() {
        var e = wx.createCanvasContext("canvasProgressbg");
        e.setLineWidth(4), e.setStrokeStyle("#333333"), e.beginPath(), e.arc(24, 24, 20, 0, 2 * Math.PI, !1), 
        e.stroke(), e.draw();
    },
    drawCircle: function(e) {
        var t = wx.createCanvasContext("canvasProgress");
        t.setLineWidth(5), t.setStrokeStyle("#ffffff"), t.beginPath(), t.arc(24, 24, 20, -Math.PI / 2, e * Math.PI - Math.PI / 2, !1), 
        t.stroke(), t.draw();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        clearTimeout(this.requestInterval);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(e) {
        return wx.showShareMenu({
            withShareTicket: !0
        }), "indexShare" === e.target.dataset.shareType ? (t.sensorTrack("miniprogram_detection_share_click", {
            page_sourse: "report_conclusion",
            type: "miniprogram"
        }), {
            title: "基于 Keep AI 技术，测一测你的体态是否亚健康！",
            path: "/pages/home/index",
            imageUrl: "https://static1.keepcdn.com/2019/01/04/14/1546585155520_420x336.png"
        }) : "report" === e.target.dataset.shareType ? (t.sensorTrack("miniprogram_detection_share_click", {
            page_sourse: "report_conclusion",
            type: "report"
        }), {
            title: a.loginjwt.userName + "的体态检测报告",
            path: "/pages/detail/index?id=" + this.data.id,
            imageUrl: this.data.gugeimgs.front
        }) : void 0;
    },
    replyChange: function(e) {
        var t = e.detail;
        this.data.replys[t.itemName] = {
            score: t.score,
            text: t.text
        };
    },
    getStatus: function(e) {
        e >= 0 && e < 60 ? this.setData({
            backColor: "#FF5363",
            imgSrc: "../../images/ic_serious@2x.png",
            text: "非常严重"
        }) : e >= 60 && e <= 90 ? this.setData({
            backColor: "#FF8F0E",
            imgSrc: "../../images/ic_risk@2x.png",
            text: "需要警惕"
        }) : e > 90 && e <= 100 && this.setData({
            backColor: "#24C789",
            imgSrc: "../../images/ic_normal@2x.png",
            text: "继续保持"
        });
    },
    showBig: function(e) {
        wx.previewImage({
            current: e.currentTarget.dataset.src,
            urls: [ this.data.gugeimgs.front, this.data.gugeimgs.side ]
        });
    },
    bindChange: function(e) {
        0 == e.detail.current ? t.sensorTrack("page_detection_report_conclusion", {
            type: "posture"
        }) : t.sensorTrack("page_detection_report_conclusion", {
            type: "model"
        }), this.setData({
            currentTab: e.detail.current
        });
    },
    swichNav: function(e) {
        if (this.data.currentTab === e.target.dataset.current) return !1;
        this.setData({
            currentTab: e.target.dataset.current
        });
    },
    syncKeep: function() {
        t.sensorTrack("upload_to_keep_click", {}), this.setData({
            showSyncConfirm: !0
        });
    },
    clickModel: function() {
        wx.wxapis.navigateTo(!1, {
            url: "/pages/model/index"
        });
    },
    modalConfirm: function() {
        if (wx.wxapis.getStorageSync(!0, "loginjwt").userId) {
            var t = new Date(), r = t.getMonth() + 1, o = t.getDate(), s = t.getFullYear() + "-" + (r > 9 ? r : "0" + r) + "-" + (o > 9 ? o : "0" + o), i = {
                user: a.loginjwt.userId,
                height: parseFloat(this.data.report.baseUserInfo.height),
                weight: parseFloat(this.data.report.baseUserInfo.weight),
                bust: parseFloat(this.data.report.poseDataResponse.report.bustConvex.toFixed(1)),
                waistline: parseFloat(this.data.report.poseDataResponse.report.waistConvex.toFixed(1)),
                hipline: parseFloat(this.data.report.poseDataResponse.report.hipsConvex.toFixed(1)),
                bmi: parseFloat(this.data.report.poseDataResponse.report.bmi),
                thigh: parseFloat(this.data.report.poseDataResponse.report.leftThigh.toFixed(1)),
                calf: parseFloat(this.data.report.poseDataResponse.report.leftCrus.toFixed(1)),
                arm: parseFloat(this.data.report.poseDataResponse.report.leftArm.toFixed(1)),
                basalMetabolicCapacity: parseFloat(this.data.report.poseDataResponse.report.bmr),
                buttockWaistRatio: parseFloat(this.data.report.poseDataResponse.report.whr),
                body_fat: parseFloat(this.data.report.poseDataResponse.report.bf),
                source: "keep",
                date: s
            };
            Promise.all([ e.syncBody(i), e.syncSilhouette({
                picUrl: this.data.report.srcFrontImageUrl,
                timestamp: t.getTime()
            }), e.syncSilhouette({
                picUrl: this.data.report.srcSideImageUrl,
                timestamp: t.getTime()
            }) ]).then(function(e) {
                wx.showToast({
                    title: "同步成功",
                    icon: "success",
                    duration: 2e3
                });
            }, function(e) {
                wx.showToast({
                    title: e.text || "同步失败",
                    icon: "none",
                    duration: 2e3
                });
            });
        } else wx.wxapis.navigateTo(!1, {
            url: "/miniprogram_npm/keep-lite-login/entry/index?jwtfail=1"
        });
    }
});