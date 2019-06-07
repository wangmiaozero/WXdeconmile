function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var t = getApp(), n = require("../../service/apiService"), a = require("../../plugins/utils");

Page({
    data: {
        genderList: [ "男生", "女生" ],
        genderIndex: null,
        ageList: [],
        ageIndex: 12,
        heightList: [],
        heightIndex: 55,
        weightList: [],
        weightIndex: 40
    },
    bindPickerChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value), this.setData(e({}, t.target.dataset.type, t.detail.value));
    },
    getRange: function(e, t) {
        for (var n = [], a = e; a <= t; ) n.push(a), a++;
        return n;
    },
    gotoCamera: function() {
        var e = this, n = [ "m", "f" ];
        t.globalData.bodyData = {
            gender: n[this.data.genderIndex],
            age: this.data.ageList[this.data.ageIndex],
            height: this.data.heightList[this.data.heightIndex],
            weight: this.data.weightList[this.data.weightIndex]
        }, wx.authorize({
            scope: "scope.camera",
            success: function(t) {
                var n = wx.getRecorderManager();
                n.start({
                    duration: 1
                }), n.onStart(function(e) {
                    n.stop();
                }), n.onError(function(t) {
                    wx.wxapis.getSetting(!1, {}).then(function(t) {
                        !1 === t.authSetting["scope.record"] && e.setData({
                            failed: !0
                        });
                    });
                }), n.onStop(function(e) {
                    console.log("res stop ==>", e), wx.wxapis.navigateTo(!1, {
                        url: "/pages/index/index"
                    });
                });
            },
            fail: function(t) {
                console.info("gotoCamera fail"), e.setData({
                    failed: !0
                });
            }
        });
    },
    handleDefault: function(e) {
        var t = {
            m: 0,
            f: 1
        };
        this.setData({
            genderIndex: e.gender ? t[e.gender] : null,
            ageIndex: e.age - 12,
            heightIndex: e.height - 120,
            weightIndex: e.weight - 30
        });
    },
    onLoad: function(e) {
        var i = this;
        a.sensorTrack("page_miniprogram_detection_info", {}), this.setData({
            ageList: this.getRange(12, 100),
            heightList: this.getRange(120, 230),
            weightList: this.getRange(30, 150)
        }), n.getUserInfo({
            unionId: t.loginjwt.unionId
        }).then(function(e) {
            i.handleDefault(e.data);
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});