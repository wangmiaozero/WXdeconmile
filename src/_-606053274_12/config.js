var o = "wxa920d7344140ffce", e = "https://api.pre.gotokeep.com", p = "https://open.pre.gotokeep.com", t = "https://show.pre.gotokeep.com/guide/", s = "https://api.pre.gotokeep.com", a = "https://apm.pre.gotokeep.com/v1.1/log/client/wechatapp?format=json", h = "https://m.pre.gotokeep.com", m = {
    env: "online",
    host: e = "https://api.gotokeep.com",
    aiHost: s = "https://api.gotokeep.com",
    webHost: t = "https://show.gotokeep.com/guide/",
    mHost: h = "https://m.gotokeep.com",
    appId: o,
    apiHosts: {
        openHost: p = "https://open.gotokeep.com"
    },
    sensorsDataConf: {
        name: "sensors",
        appid: o,
        server_url: a = "https://apm.gotokeep.com/v1.1/log/client/wechatapp?format=json",
        send_timeout: 1e3,
        max_string_length: 300,
        show_log: !0,
        allow_amend_share_path: !1,
        autoTrack: {
            appLaunch: !1,
            appShow: !1,
            appHide: !1,
            pageShow: !1,
            pageShare: !1
        }
    }
};

module.exports = m;