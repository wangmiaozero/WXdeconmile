module.exports = {
    formatTime: function(t) {
        if ("number" != typeof t || t < 0) return t;
        var n = parseInt(t / 3600);
        return t %= 3600, [ n, parseInt(t / 60), t %= 60 ].map(function(t) {
            return (t = t.toString())[1] ? t : "0" + t;
        }).join(":");
    },
    formatLocation: function(t, n) {
        return "string" == typeof t && "string" == typeof n && (t = parseFloat(t), n = parseFloat(n)), 
        t = t.toFixed(2), n = n.toFixed(2), {
            longitude: t.toString().split("."),
            latitude: n.toString().split(".")
        };
    },
    handleHttpError: function(t) {
        wx.wxapis.showToast(!1, {
            title: t.message || "网络异常",
            icon: "none"
        });
    },
    handleHttpStatusError: function(t) {
        if (200 !== t.statusCode) throw t.data;
    },
    getAuth: function() {
        var t = wx.wxapis.getStorageSync(!0, "loginjwt");
        return !(!t || !t.token) && "Bearer " + t.token;
    },
    wxLoginSuccess: function(t) {
        wx.wxapis.getStorageSync(!0, "wxids") || wx.wxapis.setStorageSync(!0, "wxids", t.detail.startedInfo);
    },
    sensorTrack: function(t, n) {
        var e = getApp();
        e.sensors && e.sensors.track(t, n);
    }
};