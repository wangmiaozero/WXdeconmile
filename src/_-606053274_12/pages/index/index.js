var t = require("../../plugins/utils"), e = getApp();

Page({
    data: {
        cameraHeight: 0,
        rightDerection: !1,
        photoStep: 1,
        poseWarn: {
            img: "",
            desc: ""
        },
        sketchImage: "",
        sketchWidth: "",
        images: {},
        cameraShow: !0,
        contrast: 0
    },
    onLoad: function(a) {
        var o = this;
        t.sensorTrack("page_miniprogram_detection_shoot", {
            shoot_step: e.dataStorage.photos.front ? "side" : "front"
        }), this.setData({
            contrast: e.dataStorage.photos.front ? 1 : 0
        }), e.dataStorage.photos.front ? this.setData({
            photoStep: 2
        }) : this.setData({
            photoStep: 1
        }), wx.wxapis.setKeepScreenOn(!0, {
            keepScreenOn: !0
        }), wx.wxapis.createSelectorQuery(!0).select("#camera-screen").fields({
            size: !0
        }, function(t) {
            var a = e.globalData.sysinfo, s = a.windowHeight, r = a.windowWidth;
            85 * s / 100 < 4 * r / 3 ? r = (s = 85 * s / 100) / 4 * 3 : s = (85 * s / 100 + 4 * r / 3) / 2, 
            o.setData({
                cameraHeight: s,
                cameraWidth: r,
                images: e.globalData.images,
                sketchImage: e.dataStorage.photos.front ? e.globalData.images.peple_side : e.globalData.images.peple_front,
                sketchWidth: e.dataStorage.photos.front ? 156.3 : 376.5,
                btnHeight: t.height - s
            });
        }).exec(), this.startAcceler(), setInterval(function() {
            o.setData({
                rightDerection: e.rightDe || !1,
                poseWarn: e.pose || {}
            });
        }, 500), wx.wxapis.setNavigationBarTitle(!1, {
            title: e.dataStorage.photos.front ? "3/3 拍摄侧面" : "2/3 拍摄正面"
        });
    },
    cameraBind: function() {
        this.data.rightDerection ? (wx.wxapis.showLoading(!1, {}), setTimeout(function() {
            wx.wxapis.hideLoading(!1);
        }, 200), this.cameraCtx = wx.wxapis.createCameraContext(!0), this.cameraCtx.takePhoto({
            quality: "high",
            success: function(t) {
                e.dataStorage.photos.front ? e.dataStorage.photos.side || (e.dataStorage.photos.side = t.tempImagePath) : e.dataStorage.photos.front = t.tempImagePath, 
                wx.wxapis.navigateTo(!1, {
                    url: "/pages/result/index"
                });
            }
        })) : wx.wxapis.showToast(!1, {
            title: "请按界面提示调整手机位置",
            icon: "none"
        });
    },
    startAcceler: function() {
        var t = this;
        if (!e.startAccelerLock) {
            e.startAccelerLock = !0;
            var a = Date.now();
            wx.wxapis.onAccelerometerChange(!0, function(o) {
                if (e.stopAccelerometerLock) wx.wxapis.hideToast(); else if (!(Date.now() - a <= 200)) {
                    a = Date.now();
                    var s = 57.3 * Math.atan2(-o.x, Math.sqrt(o.y * o.y + o.z * o.z)), r = 57.3 * Math.atan2(o.y, o.z);
                    console.log("Roll: ", s, " Pitch:", r);
                    var i = !0, n = {
                        img: "",
                        desc: ""
                    };
                    s < -8 ? (i = !1, n = {
                        img: t.data.images.turn_left,
                        desc: "手机往左翻转一点"
                    }) : s > 8 ? (i = !1, n = {
                        img: t.data.images.turn_right,
                        desc: "手机往右翻转一点"
                    }) : r <= 0 && r > -80 || r > 0 && r < 90 ? (i = !1, n = {
                        img: t.data.images.turn_back,
                        desc: "手机往后翻转一点"
                    }) : r <= 0 && r < -110 || r > 0 && r >= 90 ? (i = !1, n = {
                        img: t.data.images.turn_forward,
                        desc: "手机往前翻转一点"
                    }) : (i = !0, n = {
                        img: "",
                        desc: ""
                    }), e.rightDe = i, e.pose = n;
                }
            });
        }
    },
    onReady: function() {},
    onShow: function() {
        wx.wxapis.startAccelerometer(!1, {
            complete: function(t) {
                e.stopAccelerometerLock = !1, console.log("startAccelerometer ==> ", t);
            }
        });
    },
    onHide: function() {
        wx.wxapis.stopAccelerometer(!0, {
            complete: function(t) {
                e.stopAccelerometerLock = !0;
            }
        });
    },
    onUnload: function() {
        wx.wxapis.stopAccelerometer(!0, {
            complete: function(t) {
                e.stopAccelerometerLock = !0;
            }
        }), e.dataStorage.photos.side && e.dataStorage.photos.front && (e.dataStorage.photos.side = null), 
        1 == this.data.photoStep && (e.dataStorage.photos.front = null);
    },
    cameraError: function(t) {
        console.log("cameraError", t);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    open: function() {
        this.setData({
            cameraShow: !0
        });
    }
});