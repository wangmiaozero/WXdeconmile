var o = require("../config/config");

module.exports = {
    wxLogin: function(e) {
        wx.login({
            timeout: 5e3,
            fail: function(o) {
                console.log(o);
            },
            success: function(n) {
                n.code ? wx.request({
                    method: "GET",
                    url: o.loginUrl,
                    data: {
                        code: n.code
                    },
                    success: function(o) {
                        var n = o.data;
                        "0" == n.errorCode ? e && e(n.data) : wx.showToast({
                            title: n.text,
                            icon: "none",
                            duration: 1500
                        });
                    },
                    fail: function(o) {
                        console.error(o);
                    }
                }) : console.log("登录失败:" + n.errMsg);
            }
        });
    }
};