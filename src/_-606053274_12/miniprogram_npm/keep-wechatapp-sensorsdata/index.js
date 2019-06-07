var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    var t = {}, r = function(e, r, n) {
        var i = {
            exports: {}
        };
        t[e] = {
            status: 0,
            func: r,
            req: n,
            m: i
        };
    }, n = function(r, n) {
        if (!t[r]) return require(n);
        if (!t[r].status) {
            var i = {
                exports: {}
            };
            t[r].status = 1, t[r].func(t[r].req, i, i.exports), "object" === e(i.exports) ? (Object.keys(i.exports).forEach(function(e) {
                t[r].m.exports[e] = i.exports[e];
            }), i.exports.__esModule && Object.defineProperty(t[r].m.exports, "__esModule", {
                value: !0
            })) : t[r].m.exports = i.exports;
        }
        return t[r].m.exports;
    };
    return r(1544079737658, function(t, r, n) {
        var i = {}, o = {};
        o.para = t("./sensorsdata_conf.js"), o.keepWechatappCommonHeader = {}, o.para.openid_url || (o.para.openid_url = o.para.server_url.replace(/\/sa(\.gif){0,1}/, "/mp_login")), 
        "number" != typeof o.para.send_timeout && (o.para.send_timeout = 1e3);
        var a = Array.prototype, s = Function.prototype, c = Object.prototype, u = a.slice, p = c.toString, f = c.hasOwnProperty, l = "utm_source utm_medium utm_campaign utm_content utm_term", h = {
            1001: "发现栏小程序主入口，“最近使用”列表",
            1005: "顶部搜索框的搜索结果页",
            1006: "发现栏小程序主入口搜索框的搜索结果页",
            1007: "单人聊天会话中的小程序消息卡片",
            1008: "群聊会话中的小程序消息卡片",
            1011: "扫描二维码",
            1012: "长按图片识别二维码",
            1013: "手机相册选取二维码",
            1014: "小程序模版消息",
            1017: "前往体验版的入口页",
            1019: "微信钱包",
            1020: "公众号 profile 页相关小程序列表",
            1022: "聊天顶部置顶小程序入口",
            1023: "安卓系统桌面图标",
            1024: "小程序 profile 页",
            1025: "扫描一维码",
            1026: "附近小程序列表",
            1027: "顶部搜索框搜索结果页“使用过的小程序”列表",
            1028: "我的卡包",
            1029: "卡券详情页",
            1030: "自动化测试下打开小程序",
            1031: "长按图片识别一维码",
            1032: "手机相册选取一维码",
            1034: "微信支付完成页",
            1035: "公众号自定义菜单",
            1036: "App 分享消息卡片",
            1037: "小程序打开小程序",
            1038: "从另一个小程序返回",
            1039: "摇电视",
            1042: "添加好友搜索框的搜索结果页",
            1043: "公众号模板消息",
            1044: "带 shareTicket 的小程序消息卡片（详情)",
            1045: "朋友圈广告",
            1046: "朋友圈广告详情页",
            1047: "扫描小程序码",
            1048: "长按图片识别小程序码",
            1049: "手机相册选取小程序码",
            1052: "卡券的适用门店列表",
            1053: "搜一搜的结果页",
            1054: "顶部搜索框小程序快捷入口",
            1056: "音乐播放器菜单",
            1057: "钱包中的银行卡详情页",
            1058: "公众号文章",
            1059: "体验版小程序绑定邀请页",
            1064: "微信连Wi-Fi状态栏",
            1067: "公众号文章广告",
            1068: "附近小程序列表广告",
            1069: "移动应用",
            1071: "钱包中的银行卡列表页",
            1072: "二维码收款页面",
            1073: "客服消息列表下发的小程序消息卡片",
            1074: "公众号会话下发的小程序消息卡片",
            1077: "摇周边",
            1078: "连Wi-Fi成功页",
            1079: "微信游戏中心",
            1081: "客服消息下发的文字链",
            1082: "公众号会话下发的文字链",
            1084: "朋友圈广告原生页",
            1089: "微信聊天主界面下拉",
            1090: "长按小程序右上角菜单唤出最近使用历史",
            1091: "公众号文章商品卡片",
            1092: "城市服务入口",
            1095: "小程序广告组件",
            1096: "聊天记录",
            1097: "微信支付签约页",
            1099: "页面内嵌插件",
            1102: "公众号 profile 页服务预览",
            1103: "发现栏小程序主入口，“我的小程序”列表",
            1104: "微信聊天主界面下拉，“我的小程序”栏"
        }, d = "直接打开", g = null, m = 0, _ = "", v = !1;
        o.lib_version = "1.10.3";
        var y = "object" === (void 0 === y ? "undefined" : e(y)) ? y : {};
        if (y.info = function() {
            if (o.para.show_log && "object" === ("undefined" == typeof console ? "undefined" : e(console)) && console.log) try {
                return console.log.apply(console, arguments);
            } catch (e) {
                console.log(arguments[0]);
            }
        }, function() {
            s.bind;
            var e = a.forEach, t = a.indexOf, r = Array.isArray, n = {}, o = i.each = function(t, r, i) {
                if (null == t) return !1;
                if (e && t.forEach === e) t.forEach(r, i); else if (t.length === +t.length) {
                    for (var o = 0, a = t.length; o < a; o++) if (o in t && r.call(i, t[o], o, t) === n) return !1;
                } else for (var s in t) if (f.call(t, s) && r.call(i, t[s], s, t) === n) return !1;
            };
            i.logger = y, i.extend = function(e) {
                return o(u.call(arguments, 1), function(t) {
                    for (var r in t) void 0 !== t[r] && (e[r] = t[r]);
                }), e;
            }, i.extend2Lev = function(e) {
                return o(u.call(arguments, 1), function(t) {
                    for (var r in t) void 0 !== t[r] && (i.isObject(t[r]) && i.isObject(e[r]) ? i.extend(e[r], t[r]) : e[r] = t[r]);
                }), e;
            }, i.coverExtend = function(e) {
                return o(u.call(arguments, 1), function(t) {
                    for (var r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r]);
                }), e;
            }, i.isArray = r || function(e) {
                return "[object Array]" === p.call(e);
            }, i.isFunction = function(e) {
                try {
                    return /^\s*\bfunction\b/.test(e);
                } catch (e) {
                    return !1;
                }
            }, i.isArguments = function(e) {
                return !(!e || !f.call(e, "callee"));
            }, i.toArray = function(e) {
                return e ? e.toArray ? e.toArray() : i.isArray(e) ? u.call(e) : i.isArguments(e) ? u.call(e) : i.values(e) : [];
            }, i.values = function(e) {
                var t = [];
                return null == e ? t : (o(e, function(e) {
                    t[t.length] = e;
                }), t);
            }, i.include = function(e, r) {
                var i = !1;
                return null == e ? i : t && e.indexOf === t ? -1 != e.indexOf(r) : (o(e, function(e) {
                    if (i || (i = e === r)) return n;
                }), i);
            };
        }(), i.trim = function(e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }, i.isObject = function(e) {
            return "[object Object]" == p.call(e) && null != e;
        }, i.isEmptyObject = function(e) {
            if (i.isObject(e)) {
                for (var t in e) if (f.call(e, t)) return !1;
                return !0;
            }
            return !1;
        }, i.isUndefined = function(e) {
            return void 0 === e;
        }, i.isString = function(e) {
            return "[object String]" == p.call(e);
        }, i.isDate = function(e) {
            return "[object Date]" == p.call(e);
        }, i.isBoolean = function(e) {
            return "[object Boolean]" == p.call(e);
        }, i.isNumber = function(e) {
            return "[object Number]" == p.call(e) && /[\d\.]+/.test(String(e));
        }, i.isJSONString = function(e) {
            try {
                JSON.parse(e);
            } catch (e) {
                return !1;
            }
            return !0;
        }, i.decodeURIComponent = function(e) {
            var t = "";
            try {
                t = decodeURIComponent(e);
            } catch (r) {
                t = e;
            }
            return t;
        }, i.encodeDates = function(e) {
            return i.each(e, function(t, r) {
                i.isDate(t) ? e[r] = i.formatDate(t) : i.isObject(t) && (e[r] = i.encodeDates(t));
            }), e;
        }, i.formatDate = function(e) {
            function t(e) {
                return e < 10 ? "0" + e : e;
            }
            return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds());
        }, i.searchObjDate = function(e) {
            i.isObject(e) && i.each(e, function(t, r) {
                i.isObject(t) ? i.searchObjDate(e[r]) : i.isDate(t) && (e[r] = i.formatDate(t));
            });
        }, i.formatString = function(e) {
            return e.length > o.para.max_string_length ? (y.info("字符串长度超过限制，已经做截取--" + e), e.slice(0, o.para.max_string_length)) : e;
        }, i.searchObjString = function(e) {
            i.isObject(e) && i.each(e, function(t, r) {
                i.isObject(t) ? i.searchObjString(e[r]) : i.isString(t) && (e[r] = i.formatString(t));
            });
        }, i.unique = function(e) {
            for (var t, r = [], n = {}, i = 0; i < e.length; i++) (t = e[i]) in n || (n[t] = !0, 
            r.push(t));
            return r;
        }, i.strip_sa_properties = function(e) {
            return i.isObject(e) ? (i.each(e, function(t, r) {
                if (i.isArray(t)) {
                    var n = [];
                    i.each(t, function(e) {
                        i.isString(e) ? n.push(e) : y.info("您的数据-", t, "的数组里的值必须是字符串,已经将其删除");
                    }), 0 !== n.length ? e[r] = n : (delete e[r], y.info("已经删除空的数组"));
                }
                i.isString(t) || i.isNumber(t) || i.isDate(t) || i.isBoolean(t) || i.isArray(t) || (y.info("您的数据-", t, "-格式不满足要求，我们已经将其删除"), 
                delete e[r]);
            }), e) : e;
        }, i.strip_empty_properties = function(e) {
            var t = {};
            return i.each(e, function(e, r) {
                null != e && (t[r] = e);
            }), t;
        }, i.utf8Encode = function(e) {
            var t, r, n, i = "", o = 0;
            for (t = r = 0, o = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, 
            n = 0; n < o; n++) {
                var a = e.charCodeAt(n), s = null;
                a < 128 ? r++ : s = a > 127 && a < 2048 ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128), 
                null !== s && (r > t && (i += e.substring(t, r)), i += s, t = r = n + 1);
            }
            return r > t && (i += e.substring(t, e.length)), i;
        }, i.base64Encode = function(e) {
            var t, r, n, o, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = 0, u = 0, p = "", f = [];
            if (!e) return e;
            e = i.utf8Encode(e);
            do {
                t = (a = e.charCodeAt(c++) << 16 | e.charCodeAt(c++) << 8 | e.charCodeAt(c++)) >> 18 & 63, 
                r = a >> 12 & 63, n = a >> 6 & 63, o = 63 & a, f[u++] = s.charAt(t) + s.charAt(r) + s.charAt(n) + s.charAt(o);
            } while (c < e.length);
            switch (p = f.join(""), e.length % 3) {
              case 1:
                p = p.slice(0, -2) + "==";
                break;

              case 2:
                p = p.slice(0, -1) + "=";
            }
            return p;
        }, i.getCurrentPath = function() {
            var e = "未取到";
            try {
                var t = getCurrentPages();
                e = t[t.length - 1].route;
            } catch (e) {
                y.info(e);
            }
            return e;
        }, i.getQueryParam = function(e, t) {
            var r = "[\\?&]" + t + "=([^&#]*)", n = new RegExp(r).exec(e);
            return null === n || n && "string" != typeof n[1] && n[1].length ? "" : i.decodeURIComponent(n[1]);
        }, o.initialState = {
            queue: [],
            isComplete: !1,
            systemIsComplete: !1,
            storeIsComplete: !1,
            checkIsComplete: function() {
                this.systemIsComplete && this.storeIsComplete && (this.isComplete = !0, this.queue.length > 0 && (i.each(this.queue, function(e) {
                    o[e[0]].apply(o, u.call(e[1]));
                }), o.queue = []));
            }
        }, i.getPrefixUtm = function(e, t, r) {
            if (t = t || "", r = r || "_", !i.isObject(e)) return {};
            var n = {}, o = {};
            for (var a in e) -1 !== (" " + l + " ").indexOf(" " + a + " ") ? n[t + a] = e[a] : o[r + a] = e[a];
            return {
                $utms: n,
                otherUtms: o
            };
        }, i.convertObjToParam = function(e) {
            var t = [];
            for (var r in e) t.push(r + "=" + e[r]);
            return t.join("&");
        }, i.getSource = function(e) {
            if (i.isObject(e)) {
                if (i.isEmptyObject(e)) return {};
                for (var t in e) -1 === (" " + l + " ").indexOf(" " + t + " ") ? delete e[t] : e[t] = e[t].replace("?", "*");
                e = i.convertObjToParam(e), e = "?" + e;
            } else e = i.decodeURIComponent(e);
            var r = l.split(" "), n = l.split(" "), a = "", s = {};
            return 2 !== (e = e.split("?")).length ? {} : (e = e[1], e = "?" + e, i.isArray(o.para.source_channel) && o.para.source_channel.length > 0 && (n = n.concat(o.para.source_channel), 
            n = i.unique(n)), i.each(n, function(t) {
                a = i.getQueryParam(e, t), (a = i.decodeURIComponent(a)).length && i.include(r, t) && (s[t] = a);
            }), s);
        }, i.getObjFromQuery = function(e) {
            var t = e.split("?"), r = {};
            return t && t[1] ? (i.each(t[1].split("&"), function(e) {
                var t = e.split("=");
                t[0] && t[1] && (r[t[0]] = t[1]);
            }), r) : {};
        }, i.getUtm = function(e, t, r) {
            var n = i.getSource(e);
            return void 0 === r && t ? {
                pre1: i.getPrefixUtm(n, t).$utms || {},
                pre2: {}
            } : void 0 !== r && t ? {
                pre1: i.getPrefixUtm(n, t).$utms || {},
                pre2: i.getPrefixUtm(n, r).$utms || {}
            } : {
                pre1: {},
                pre2: {}
            };
        }, i.getMPScene = function(e) {
            return "number" == typeof e || "string" == typeof e && "" !== e ? (e = String(e), 
            h[e] || e) : "未取到值";
        }, i.getShareDepth = function() {
            if ("number" == typeof m && 0 !== m) {
                var e = o.store.getDistinctId(), t = o.store.getFirstId(), r = _;
                return !r || r !== e && r !== t ? m + 1 : m;
            }
            return 1;
        }, i.setShareInfo = function(e, t) {
            var r = {};
            if (!(e && i.isObject(e.query) && e.query.sampshare)) return {};
            if (r = i.decodeURIComponent(e.query.sampshare), !i.isJSONString(r)) return {};
            var n = (r = JSON.parse(r)).d, o = r.p, a = r.i;
            "string" == typeof a ? (t.$share_distinct_id = a, _ = a) : t.$share_distinct_id = "取值异常", 
            "number" == typeof n ? (t.$share_depth = n, m = n) : t.$share_depth = "取值异常", t.$share_url_path = "string" == typeof o ? o : "取值异常";
        }, i.getShareInfo = function() {
            return JSON.stringify({
                i: o.store.getDistinctId() || "取值异常",
                p: i.getCurrentPath(),
                d: i.getShareDepth()
            });
        }, i.setUtm = function(e, t) {
            var r = {};
            if (e && i.isObject(e.query)) {
                var n = (r = i.extend({}, e.query)).scene;
                n && (n = -1 !== (n = i.decodeURIComponent(n)).indexOf("?") ? "?" + n.replace(/\?/g, "") : "?" + n, 
                i.extend(r, i.getObjFromQuery(n))), e.query.q && i.extend(r, i.getObjFromQuery(i.decodeURIComponent(e.query.q)));
            }
            if (e && i.isObject(e.referrerInfo) && e.referrerInfo.extraData) {
                var o = {};
                i.isObject(e.referrerInfo.extraData) && !i.isEmptyObject(e.referrerInfo.extraData) ? o = e.referrerInfo.extraData : i.isJSONString(e.referrerInfo.extraData) && (o = JSON.parse(e.referrerInfo.extraData)), 
                i.extend(r, o);
            }
            var a = i.getUtm(r, "$", "$latest_");
            return i.extend(t, a.pre1), a;
        }, i.info = {
            properties: {
                $lib: "MiniProgram",
                $lib_version: String("1.10.3")
            },
            getSystem: function() {
                function e() {
                    wx.getSystemInfo({
                        success: function(e) {
                            t.$model = e.model, t.$screen_width = Number(e.windowWidth), t.$screen_height = Number(e.windowHeight), 
                            t.$os = e.system.split(" ")[0], t.$os_version = e.system.split(" ")[1];
                        },
                        complete: function() {
                            o.initialState.systemIsComplete = !0, o.initialState.checkIsComplete();
                        }
                    });
                }
                var t = this.properties;
                wx.getNetworkType({
                    success: function(e) {
                        t.$network_type = e.networkType;
                    },
                    complete: e
                });
            }
        }, o._ = i, o.prepareData = function(t, r) {
            var n = {
                distinct_id: this.store.getDistinctId(),
                lib: {
                    $lib: "MiniProgram",
                    $lib_method: "code",
                    $lib_version: String("1.10.3")
                },
                properties: {}
            };
            i.extend(n, t), i.isObject(t.properties) && !i.isEmptyObject(t.properties) && i.extend(n.properties, t.properties), 
            t.type && "profile" === t.type.slice(0, 7) || (n.properties = i.extend({}, i.info.properties, o.store.getProps(), n.properties), 
            "object" === e(o.store._state) && "number" == typeof o.store._state.first_visit_day_time && o.store._state.first_visit_day_time > new Date().getTime() ? n.properties.$is_first_day = !0 : n.properties.$is_first_day = !1), 
            n.properties.$time && i.isDate(n.properties.$time) ? (n.time = 1 * n.properties.$time, 
            delete n.properties.$time) : o.para.use_client_time && (n.time = 1 * new Date()), 
            i.searchObjDate(n), i.searchObjString(n), o.send(n, r);
        }, o.store = {
            storageInfo: null,
            getUUID: function() {
                return Date.now() + "-" + Math.floor(1e7 * Math.random()) + "-" + Math.random().toString(16).replace(".", "") + "-" + String(31242 * Math.random()).replace(".", "").slice(0, 8);
            },
            getStorage: function() {
                return this.storageInfo ? this.storageInfo : (this.storageInfo = wx.getStorageSync("sensorsdata2015_wechat") || "", 
                this.storageInfo);
            },
            _state: {},
            toState: function(e) {
                var t = null;
                i.isJSONString(e) ? (t = JSON.parse(e)).distinct_id ? this._state = t : this.set("distinct_id", this.getUUID()) : i.isObject(e) && (t = e).distinct_id ? this._state = t : this.set("distinct_id", this.getUUID());
            },
            getFirstId: function() {
                return this._state.first_id;
            },
            getDistinctId: function() {
                return this._state.distinct_id;
            },
            getProps: function() {
                return this._state.props || {};
            },
            setProps: function(e, t) {
                var r = this._state.props || {};
                t ? this.set("props", e) : (i.extend(r, e), this.set("props", r));
            },
            set: function(t, r) {
                var n = {};
                "string" == typeof t ? n[t] = r : "object" === (void 0 === t ? "undefined" : e(t)) && (n = t), 
                this._state = this._state || {};
                for (var i in n) this._state[i] = n[i];
                this.save();
            },
            change: function(e, t) {
                this._state[e] = t;
            },
            save: function() {
                wx.setStorageSync("sensorsdata2015_wechat", this._state);
            },
            init: function() {
                var e = this.getStorage();
                if (e) this.toState(e); else {
                    v = !0;
                    var t = new Date(), r = t.getTime();
                    t.setHours(23), t.setMinutes(59), t.setSeconds(60), this.set({
                        distinct_id: this.getUUID(),
                        first_visit_time: r,
                        first_visit_day_time: t.getTime()
                    });
                }
            }
        }, o.setProfile = function(e, t) {
            o.prepareData({
                type: "profile_set",
                properties: e
            }, t);
        }, o.setOnceProfile = function(e, t) {
            o.prepareData({
                type: "profile_set_once",
                properties: e
            }, t);
        }, o.track = function(e, t, r) {
            this.prepareData({
                type: "track",
                event: e,
                properties: t
            }, r);
        }, o.identify = function(e, t) {
            if ("number" == typeof e) e = String(e); else if ("string" != typeof e) return !1;
            var r = o.store.getFirstId();
            !0 === t ? r ? o.store.set("first_id", e) : o.store.set("distinct_id", e) : r ? o.store.change("first_id", e) : o.store.change("distinct_id", e);
        }, o.trackSignup = function(e, t, r, n) {
            o.prepareData({
                original_id: o.store.getFirstId() || o.store.getDistinctId(),
                distinct_id: e,
                type: "track_signup",
                event: t,
                properties: r
            }, n), o.store.set("distinct_id", e);
        }, o.registerApp = function(e) {
            i.isObject(e) && !i.isEmptyObject(e) && (i.info.properties = i.extend(i.info.properties, e));
        }, o.register = function(e) {
            i.isObject(e) && !i.isEmptyObject(e) && o.store.setProps(e);
        }, o.clearAllRegister = function() {
            o.store.setProps({}, !0);
        }, o.login = function(e) {
            var t = o.store.getFirstId(), r = o.store.getDistinctId();
            e !== r && (t ? o.trackSignup(e, "$SignUp") : (o.store.set("first_id", r), o.trackSignup(e, "$SignUp")));
        }, o.openid = {
            getRequest: function(e) {
                wx.login({
                    success: function(t) {
                        t.code && o.para.appid && o.para.openid_url ? wx.request({
                            url: o.para.openid_url + "&code=" + t.code + "&appid=" + o.para.appid,
                            method: "GET",
                            complete: function(t) {
                                i.isObject(t) && i.isObject(t.data) && t.data.openid ? e(t.data.openid) : e();
                            }
                        }) : e();
                    }
                });
            },
            getWXStorage: function() {
                var e = o.store.getStorage();
                if (e && i.isObject(e)) return e.openid;
            },
            getOpenid: function(e) {
                if (!o.para.appid) return e(), !1;
                var t = this.getWXStorage();
                t ? e(t) : this.getRequest(e);
            }
        }, o.initial = function() {
            this._.info.getSystem(), this.store.init(), i.isObject(this.para.register) && (i.info.properties = i.extend(i.info.properties, this.para.register));
        }, o.init = function(e) {
            i.isObject(e) ? (i.isObject(e.sensorsDataConf) ? (o.para = i.extend(o.para, e.sensorsDataConf), 
            e.sensorsDataConf.appid ? o.registerApp({
                wechat_app_id: e.sensorsDataConf.appid
            }) : y.info("小程序 appid 不能为空！")) : y.info("请传配置信息！"), o.updateKeepWechatappCommonHeader(e.keepWechatappCommonHeader)) : y.info("初始化参数不能为空，且为 object 类型！"), 
            o.initialState.storeIsComplete = !0, o.initialState.checkIsComplete();
        }, o.getPresetProperties = function() {
            if (i.info && i.info.properties && i.info.properties.$lib) {
                var e = i.extend({
                    $url_path: i.getCurrentPath()
                }, i.info.properties, o.store.getProps());
                return delete e.$lib, e;
            }
            return {};
        }, o.updateKeepWechatappCommonHeader = function(e) {
            i.isObject(e) ? o.keepWechatappCommonHeader = e : y.info("请传通用头，且通用头为 object 类型！");
        }, i.autoExeQueue = function() {
            return {
                items: [],
                enqueue: function(e) {
                    this.items.push(e), this.start();
                },
                dequeue: function() {
                    return this.items.shift();
                },
                getCurrentItem: function() {
                    return this.items[0];
                },
                isRun: !1,
                start: function() {
                    this.items.length > 0 && !this.isRun && (this.isRun = !0, this.getCurrentItem().start());
                },
                close: function() {
                    this.dequeue(), this.isRun = !1, this.start();
                }
            };
        }, o.requestQueue = function(e) {
            this.url = e.url, this.logData = e.logData;
        }, o.requestQueue.prototype.isEnd = function() {
            this.received || (this.received = !0, this.close());
        }, o.requestQueue.prototype.start = function() {
            var e = this;
            setTimeout(function() {
                e.isEnd();
            }, o.para.send_timeout), wx.request({
                url: this.url,
                method: "POST",
                data: this.logData,
                header: o.keepWechatappCommonHeader,
                complete: function() {
                    e.isEnd();
                }
            });
        }, o.dataQueue = i.autoExeQueue(), o.send = function(e) {
            var t = "", r = e.distinct_id;
            e._nocache = (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15), 
            y.info(e), e = JSON.stringify([ e ]), t = -1 !== o.para.server_url.indexOf("?") ? o.para.server_url + "&userId=" + encodeURIComponent(r) : o.para.server_url + "?userId=" + encodeURIComponent(r);
            var n = new o.requestQueue({
                url: t,
                logData: i.base64Encode(e)
            });
            n.close = function() {
                o.dataQueue.close();
            }, o.dataQueue.enqueue(n);
        }, o.autoTrackCustom = function(e, t, r) {
            var n = o.para.autoTrack[e], a = "";
            o.para.autoTrack && n && ("function" == typeof n ? (a = n(), i.isObject(a) && i.extend(t, a)) : i.isObject(n) && (i.extend(t, n), 
            o.para.autoTrack[e] = !0), o.track(r, t));
        }, o.setOpenid = function(e, t) {
            o.store.set("openid", e), t ? o.store.set("distinct_id", e) : o.identify(e, !0);
        }, o.initWithOpenid = function(e) {
            e = e || {}, o.openid.getOpenid(function(t) {
                t && o.setOpenid(t, e.isCoverLogin), o.init(e);
            });
        }, i.each([ "setProfile", "setOnceProfile", "track", "register", "clearAllRegister", "autoTrackCustom", "registerApp" ], function(e) {
            var t = o[e];
            o[e] = function() {
                o.initialState.isComplete ? t.apply(o, arguments) : o.initialState.queue.push([ e, arguments ]);
            };
        }), !1 !== o.para.autoTrack) {
            var b = function(e, t, r) {
                if (e[t]) {
                    var n = e[t];
                    e[t] = function(e) {
                        n.call(this, e), r.call(this, e, t);
                    };
                } else e[t] = function(e) {
                    r.call(this, e, t);
                };
            }, S = function(e) {
                this[o.para.name] = o;
                var t = {};
                e && e.path && (t.$url_path = e.path), i.setShareInfo(e, t);
                var r = i.setUtm(e, t);
                v ? (t.$is_first_time = !0, i.isEmptyObject(r.pre1) || o.setOnceProfile(r.pre1)) : t.$is_first_time = !1, 
                i.isEmptyObject(r.pre2) || o.registerApp(r.pre2), e.scene = e.scene || "未取到值", t.$scene = i.getMPScene(e.scene), 
                o.registerApp({
                    $latest_scene: t.$scene
                }), o.para.autoTrack && o.para.autoTrack.appLaunch && o.autoTrackCustom("appLaunch", t, "$MPLaunch");
            }, O = function(e) {
                var t = {};
                g = new Date().getTime(), e && e.path && (t.$url_path = e.path), i.setShareInfo(e, t);
                var r = i.setUtm(e, t);
                i.isEmptyObject(r.pre2) || o.registerApp(r.pre2), e.scene = e.scene || "未取到值", t.$scene = i.getMPScene(e.scene), 
                o.registerApp({
                    $latest_scene: t.$scene
                }), o.para.autoTrack && o.para.autoTrack.appShow && o.autoTrackCustom("appShow", t, "$MPShow");
            }, j = function() {
                var e = new Date().getTime(), t = {};
                t.$url_path = i.getCurrentPath(), g && e - g > 0 && (e - g) / 36e5 < 24 && (t.event_duration = (e - g) / 1e3), 
                o.para.autoTrack && o.para.autoTrack.appHide && o.autoTrackCustom("appHide", t, "$MPHide");
            }, x = App;
            App = function(e) {
                b(e, "onLaunch", S), b(e, "onShow", O), b(e, "onHide", j), x(e);
            };
            var C = Page;
            Page = function(t) {
                if (b(t, "onLoad", function(e) {
                    if (e && i.isObject(e)) {
                        var t = i.extend({}, e);
                        if (e.q && i.extend(t, i.getObjFromQuery(i.decodeURIComponent(e.q))), e.scene) {
                            var r = e.scene;
                            r = -1 !== (r = i.decodeURIComponent(r)).indexOf("?") ? "?" + r.replace(/\?/g, "") : "?" + r, 
                            i.extend(t, i.getObjFromQuery(r));
                        }
                        var n = i.getUtm(t, "$", "$latest_");
                        this.sensors_mp_load_utm = n.pre1;
                    }
                }), b(t, "onShow", function() {
                    var t = "系统没有取到值";
                    "object" === e(this) && ("string" == typeof this.route ? t = this.route : "string" == typeof this.__route__ && (t = this.__route__));
                    var r = {};
                    r.$referrer = d, r.$url_path = t, this.sensors_mp_load_utm && (i.extend(r, this.sensors_mp_load_utm), 
                    this.sensors_mp_load_utm = null), o.para.onshow ? o.para.onshow(o, t, this) : o.autoTrackCustom("pageShow", r, "$MPViewScreen"), 
                    d = t;
                }), "function" == typeof t.onShareAppMessage) {
                    var r = t.onShareAppMessage;
                    t.onShareAppMessage = function() {
                        o.para.autoTrack && o.para.autoTrack.pageShare && o.autoTrackCustom("pageShare", {
                            $url_path: i.getCurrentPath(),
                            $share_depth: i.getShareDepth()
                        }, "$MPShare");
                        var e = r.apply(this, arguments);
                        return o.para.allow_amend_share_path && "string" == typeof e.path && -1 !== e.path.indexOf("/") && (-1 === e.path.indexOf("?") ? e.path = e.path + "?" : "&" !== e.path.slice(-1) && (e.path = e.path + "&"), 
                        e.path = e.path + "sampshare=" + encodeURIComponent(i.getShareInfo())), e;
                    };
                }
                C.apply(this, arguments);
            };
        }
        o.initial(), r.exports = o;
    }, function(e) {
        return n({
            "./sensorsdata_conf.js": 1544079737659
        }[e], e);
    }), r(1544079737659, function(e, t, r) {
        var n = {
            name: "sensors",
            appid: "",
            server_url: "",
            send_timeout: 1e3,
            max_string_length: 300,
            use_client_time: !0,
            show_log: !0,
            allow_amend_share_path: !1,
            autoTrack: {
                appLaunch: !1,
                appShow: !1,
                appHide: !1,
                pageShow: !1,
                pageShare: !1
            }
        };
        t.exports = n;
    }, function(e) {
        return n({}[e], e);
    }), n(1544079737658);
}();