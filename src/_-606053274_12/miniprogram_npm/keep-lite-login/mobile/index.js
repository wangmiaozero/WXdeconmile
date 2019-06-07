var t = require("../utils/country.js"), o = require("../config/config"), e = getApp();

Component({
    properties: {
        userInfo: Object,
        showNav: Boolean
    },
    data: {
        protectShow: !1,
        privacyShow: !1,
        countryArray: [],
        countryIndex: 0,
        countryCodes: [],
        logoShow: !0,
        toastError: {
            title: "",
            show: !1
        },
        sendBtnLock: "locked",
        submitBtnLock: "locked",
        mobileCursor: 0,
        chaCode: "",
        sendBtnText: "获取验证码"
    },
    attached: function() {
        var o = [], e = 0, i = [], r = t.data.all;
        for (var a in r) i.push("+" + r[a].countryCode), o.push("+" + r[a].countryCode + " " + r[a].countryName), 
        "86" == r[a].countryCode && (e = a);
        this.setData({
            countryArray: o,
            countryIndex: e,
            countryCodes: i
        });
    },
    methods: {
        formatCode: function(t) {
            return t || (t = this.data.countryCodes[this.data.countryIndex]), "+" == t[0] ? t.substr(1) : t;
        },
        bindPickerChange: function(t) {
            this.setData({
                countryIndex: t.detail.value
            });
        },
        onPrivacyShow: function(t) {
            this.setData({
                privacyShow: !0
            });
        },
        onProtectShow: function(t) {
            this.setData({
                protectShow: !0
            });
        },
        onCloseRules: function(t) {
            this.setData({
                protectShow: !1,
                privacyShow: !1
            });
        },
        logoShow: function() {
            this.setData({
                logoShow: !0
            });
        },
        logoHide: function() {
            this.setData({
                logoShow: !1
            });
        },
        inputMobile: function(t) {
            var o = t.detail, e = o.value;
            this.data.mobileCursor > o.cursor ? 4 != e.length && (e.length - 4) % 5 != 0 || (e = e.substr(0, e.length - 1)) : 4 != e.length && (e.length - 4) % 5 != 0 || (e = e.slice(0, e.length - 1) + " " + e.slice(e.length - 1)), 
            this.data.mobileCursor = e.length, this.verifyMobile(e) ? this.verifyChaCode() ? this.setData({
                mobile: e,
                sendBtnLock: "",
                submitBtnLock: ""
            }) : this.setData({
                mobile: e,
                sendBtnLock: "",
                submitBtnLock: "locked"
            }) : this.setData({
                mobile: e,
                sendBtnLock: "locked",
                submitBtnLock: "locked"
            });
        },
        verifyChaCode: function() {
            return !!this.data.chaCode && !(this.data.chaCode.length < 4);
        },
        verifyMobile: function(t) {
            return !!t && (!((t = t.replace(/\s/g, "")).length < 4) && ("+86" != this.data.countryCodes[this.data.countryIndex] || 11 == t.length) && t);
        },
        inputChaCode: function(t) {
            this.data.chaCode = t.detail.value, this.verifyChaCode() && this.verifyMobile(this.data.mobile) ? this.setData({
                submitBtnLock: ""
            }) : this.setData({
                submitBtnLock: "locked"
            });
        },
        formSubmit: function(t) {
            var i = this;
            if (e.sensors && e.sensors.track("login_click", {
                from: "phone_login"
            }), !this.data.submitBtnLock && !this.data.formLock) {
                this.data.formLock = !0;
                var r = this.verifyMobile(this.data.mobile);
                return r ? this.verifyChaCode() ? void wx.request({
                    method: "POST",
                    url: o.mobileLoginUrl,
                    data: {
                        openid: this.data.userInfo.openid,
                        mobile: r,
                        code: this.data.chaCode,
                        countryCode: this.formatCode()
                    },
                    success: function(t) {
                        var o = t.data;
                        "0" == o.errorCode ? (wx.showToast({
                            title: "登录成功",
                            icon: "none",
                            duration: 1e3
                        }), i.triggerEvent("mobileLoginSuccess", {
                            userInfo: o.data
                        }, {
                            bubbles: !0,
                            composed: !0
                        })) : (i.errorTip(o.text), i.data.formLock = !1);
                    },
                    fail: function(t) {
                        console.error(t), i.data.formLock = !1, i.errorTip("网络请求出错");
                    }
                }) : (this.data.formLock = !1, void this.errorTip("验证码不能为空")) : (this.data.formLock = !1, 
                void this.errorTip("手机号格式不正确"));
            }
        },
        getVerifyCode: function(t) {
            var e = this;
            if (!this.data.sendBtnLock && !this.data.sendFormLock) {
                this.data.sendFormLock = !0;
                var i = this.verifyMobile(this.data.mobile);
                if (!i) return this.data.sendFormLock = !1, void this.errorTip("手机号输入错误");
                wx.request({
                    method: "POST",
                    url: o.chaCodeUrl,
                    data: {
                        openid: this.data.userInfo.openid,
                        mobile: i,
                        countryCode: this.formatCode()
                    },
                    success: function(t) {
                        var o = t.data;
                        if ("0" == o.errorCode) {
                            wx.showToast({
                                title: "验证码已发送，请查收",
                                icon: "none",
                                duration: 2e3
                            });
                            var i = 60;
                            e.setData({
                                sendBtnLock: "locked",
                                sendBtnText: "重新获取 " + i
                            });
                            var r = setInterval(function() {
                                if (i <= 1) return e.setData({
                                    sendBtnLock: "",
                                    sendBtnText: "获取验证码"
                                }), void clearInterval(r);
                                e.setData({
                                    sendBtnText: "重新获取 " + --i
                                });
                            }, 1e3);
                        } else e.errorTip(o.text);
                        e.data.sendFormLock = !1;
                    },
                    fail: function(t) {
                        e.data.sendFormLock = !1, e.errorTip("网络请求出错");
                    }
                });
            }
        },
        errorTip: function(t, o) {
            var e = this;
            this.data.errorlock && clearTimeout(this.data.errorlock), o || (o = 1.5), this.setData({
                toastError: {
                    title: t,
                    show: !0
                }
            }), this.data.errorlock = setTimeout(function() {
                e.setData({
                    toastError: {
                        show: !1
                    }
                });
            }, 1e3 * o);
        }
    }
});