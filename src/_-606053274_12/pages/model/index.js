var n = getApp(), o = require("../../plugins/utils");

Page({
    data: {
        url: null
    },
    onLoad: function(e) {
        o.sensorTrack("page_miniprogram_detection_model", {}), this.setData({
            url: n.config.mHost + "/carnival/ai/model?model=" + encodeURIComponent(n.globalData.model)
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