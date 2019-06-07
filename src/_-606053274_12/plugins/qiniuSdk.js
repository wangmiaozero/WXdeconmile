!function() {
    function e(e) {
        console.log(e, "textqinniu"), e.region ? u.qiniuRegion = e.region : console.error("qiniu uploader need your bucket region"), 
        e.resType && (u.qiniuResType = e.resType), e.uptoken ? u.qiniuUploadToken = e.uptoken : e.uptokenURL ? u.qiniuUploadTokenURL = e.uptokenURL : e.uptokenFunc && (u.qiniuUploadTokenFunction = e.uptokenFunc), 
        e.domain && (u.qiniuImageURLPrefix = e.domain), u.qiniuShouldUseQiniuFileName = e.shouldUseQiniuFileName;
    }
    function n(e, n, i, a, r, l) {
        if (null == u.qiniuUploadToken && u.qiniuUploadToken.length > 0) console.error("qiniu UploadToken is null, please check the init config or networking"); else {
            var t = o(u.qiniuRegion), p = e.split("//")[1];
            a && a.key && (p = a.key);
            var s = {
                token: u.qiniuUploadToken
            };
            u.qiniuShouldUseQiniuFileName || (s.key = p);
            var c = wx.wxapis.uploadFile(!0, {
                url: t,
                filePath: e,
                name: "file",
                formData: s,
                success: function(e) {
                    var o = e.data;
                    e.data.hasOwnProperty("type") && "Buffer" === e.data.type && (o = String.fromCharCode.apply(null, e.data.data));
                    try {
                        var a = JSON.parse(o), r = u.qiniuImageURLPrefix + "/" + a.key;
                        a.imageURL = r, a.origin = u.qiniuUploadOrigin, console.log(a), n && n(a);
                    } catch (e) {
                        console.log("parse JSON failed, origin String is: " + o), i && i(e);
                    }
                },
                fail: function(e) {
                    console.error(e), i && i(e);
                }
            });
            c.onProgressUpdate(function(e) {
                r && r(e);
            }), l && l(function() {
                c.abort();
            });
        }
    }
    function i() {
        var e = getApp();
        return new Promise(function(n, i) {
            e.wxHttp({
                url: u.qiniuUploadTokenURL,
                method: "GET",
                success: function(e) {
                    if (0 !== (e = e.data).errorCode) return console.error("qiniuUploader cannot get your token, please check the uptokenURL or server"), 
                    void (i && i(e));
                    var o = void 0;
                    if (!(o = "image" == u.qiniuResType ? e.data.picture : e.data.video) || !o.token) return console.error("qiniuUploader cannot get your token, please check the uptokenURL or server"), 
                    void (i && i(e));
                    u.qiniuUploadToken = o.token, u.qiniuUploadOrigin = o.origin, n && n(e);
                },
                fail: function(e) {
                    console.error("qiniu UploadToken is null, please check the init config or networking: " + e), 
                    i && i(e);
                }
            });
        });
    }
    function o(e) {
        var n = null;
        switch (e) {
          case "ECN":
            n = "https://upload.qiniup.com";
            break;

          case "NCN":
            n = "https://up-z1.qbox.me";
            break;

          case "SCN":
            n = "https://up-z2.qbox.me";
            break;

          case "NA":
            n = "https://up-na0.qbox.me";
            break;

          case "ASG":
            n = "https://up-as0.qbox.me";
            break;

          default:
            console.error("please make the region is with one of [ECN, SCN, NCN, NA, ASG]");
        }
        return n;
    }
    var u = {
        qiniuRegion: "",
        qiniuImageURLPrefix: "",
        qiniuUploadToken: "",
        qiniuUploadTokenURL: "",
        qiniuUploadTokenFunction: null,
        qiniuShouldUseQiniuFileName: !1,
        qiniuResType: "image"
    };
    module.exports = {
        init: function(n) {
            console.log(n, "init"), u = {
                qiniuRegion: "",
                qiniuImageURLPrefix: "",
                qiniuUploadToken: "",
                qiniuUploadTokenURL: "",
                qiniuUploadTokenFunction: null,
                qiniuShouldUseQiniuFileName: !1,
                qiniuResType: "image"
            }, e(n);
        },
        upload: function(o, a, r, l, t, p) {
            if (null != o) if (console.log(l, "upload"), l && e(l), u.qiniuUploadToken) n(o, a, r, l, t, p); else if (u.qiniuUploadTokenURL) i().then(function() {
                n(o, a, r, l, t, p);
            }).catch(function(e) {
                r && r(e);
            }); else {
                if (!u.qiniuUploadTokenFunction) return void console.error("qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]");
                if (u.qiniuUploadToken = u.qiniuUploadTokenFunction(), null == u.qiniuUploadToken && u.qiniuUploadToken.length > 0) return void console.error("qiniu UploadTokenFunction result is null, please check the return value");
                n(o, a, r, l, t, p);
            } else console.error("qiniu uploader need filePath to upload");
        }
    };
}();