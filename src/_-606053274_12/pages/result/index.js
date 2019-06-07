var t = require("../../plugins/qiniuSdk"), a = require("../../service/apiService"), o = require("../../config"), e = require("../../plugins/utils"), s = getApp();

Page({
    data: {
        photo: "",
        nextText: "",
        isLoading: !1,
        status: "",
        id: "",
        statusIndex: 1,
        step: 1,
        request: null,
        off: !1
    },
    onLoad: function(t) {
        this.setData({
            photo: s.dataStorage.photos.side || s.dataStorage.photos.front,
            nextText: s.dataStorage.photos.side ? "生成报告" : "拍摄侧面",
            statusIndex: 1
        }), wx.wxapis.setNavigationBarTitle(!1, {
            title: s.dataStorage.photos.side ? "侧面照预览" : "正面照预览"
        }), s.dataStorage.photos.side ? this.setData({
            step: 2
        }) : this.setData({
            step: 1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        var t = this;
        wx.wxapis.stopAccelerometer(!0, {
            complete: function(a) {
                s.stopAccelerometerLock = !0, 2 == t.data.step ? s.dataStorage.photos.side = null : 1 == t.data.step && (s.dataStorage.photos.front = null);
            }
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    rephoto: function() {
        s.dataStorage.photos.side ? s.dataStorage.photos.side = null : s.dataStorage.photos.front && (s.dataStorage.photos.front = null), 
        wx.wxapis.navigateBack(!1);
    },
    next: function() {
        s.dataStorage.photos.side ? this.uploadTap() : wx.wxapis.navigateTo(!1, {
            url: "/pages/index/index"
        }), e.sensorTrack("miniprogram_detection_shoot_click", {
            shoot_step: s.dataStorage.photos.side ? "side" : "front"
        });
    },
    qiniuUploadImage: function(a, e, i) {
        var n = this;
        t.upload(a, function(t) {
            "front" == e ? n.setData({
                rightPhoto: t.origin + t.imageURL
            }) : n.setData({
                leftPhoto: t.origin + t.imageURL
            }), i && i();
        }, function(t) {
            wx.wxapis.hideToast(!1), wx.wxapis.showModal(!1, {
                title: "上传失败",
                content: "上传失败，请重新拍照上传",
                success: function(t) {
                    t.confirm ? n.setData({
                        isLoading: !1
                    }) : t.cancel && n.setData({
                        isLoading: !1
                    });
                }
            });
        }, {
            region: "ECN",
            domain: "",
            resType: "image",
            key: "litetitai/" + e + "_" + s.loginjwt.unionId + "_" + Math.floor(Date.now()) + ".jpg",
            uptokenURL: o.apiHosts.openHost + "/butler/v1/upload/token?openId=" + s.loginjwt.openid + "&unionId=" + s.loginjwt.unionId + "&appId=" + o.appId
        }, function(t) {
            console.log("上传进度", t.progress);
        });
    },
    uploadTap: function() {
        var t = this;
        this.setData({
            isLoading: !0
        });
        var o = this;
        setTimeout(function() {
            o.setData({
                off: !0
            });
        }, 5e3), this.qiniuUploadImage(s.dataStorage.photos.front, "front", function() {
            wx.wxapis.hideToast(!1), t.qiniuUploadImage(s.dataStorage.photos.side, "side", function() {
                wx.wxapis.hideToast(!1), s.wxHttp({
                    url: s.config.host + "/x-vision/v1/executePoseEstimate",
                    method: "POST",
                    data: {
                        appId: "wxc96dc7ebd9bf61e8",
                        from: "wechat",
                        frontPoseImageUrl: t.data.rightPhoto,
                        sidePoseImageUrl: t.data.leftPhoto,
                        openId: s.loginjwt.openid,
                        unionId: s.loginjwt.unionId,
                        baseUserInfo: s.globalData.bodyData
                    }
                }).then(function(o) {
                    0 == o.data.errCode ? (t.setData({
                        id: o.data.data
                    }), a.getQueryResult(o.data.data).then(function(a) {
                        t.setData({
                            status: a.data.status
                        });
                    }), t.setData({
                        request: setInterval(t.getQueryResult(o.data.data), 500)
                    })) : (wx.wxapis.hideToast(!1), wx.wxapis.showModal(!1, {
                        title: "请求失败",
                        content: "请求报告生成失败，请检测网络，稍后再试",
                        success: function(a) {
                            a.confirm ? t.setData({
                                isLoading: !1
                            }) : a.cancel && t.setData({
                                isLoading: !1
                            });
                        }
                    }));
                }).catch(function(a) {
                    t.setData({
                        isLoading: !1
                    });
                });
            });
        });
    },
    getQueryResult: function(t) {
        var o = this;
        return function() {
            a.getQueryResult(o.data.id).then(function(t) {
                o.setData({
                    status: t.data.status
                }), "processing" != t.data.status ? (o.setData({
                    isLoading: !1
                }), clearInterval(o.data.request), wx.switchTab({
                    url: "/pages/papers/index"
                }), s.dataStorage.photos.side = null, s.dataStorage.photos.front = null) : "processing" == t.data.status && o.data.off && (clearInterval(o.data.request), 
                wx.switchTab({
                    url: "/pages/papers/index"
                }), o.setData({
                    isLoading: !1
                }), s.dataStorage.photos.side = null, s.dataStorage.photos.front = null);
            });
        };
    }
});