require("../../service/apiService");

var n = getApp();

Page({
    data: {
        url: "",
        visible: !1
    },
    onLoad: function(e) {
        this.setData({
            url: n.config.webHost + e.itemId + "/book/" + e.id + "?bookName=" + encodeURIComponent(e.title) + "&chapterIndex=" + e.chapterIndex,
            visible: !0
        });
    },
    onReady: function() {},
    onShow: function(n) {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(n) {}
});