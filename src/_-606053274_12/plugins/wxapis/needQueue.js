function e(e) {
    if (Array.isArray(e)) {
        for (var r = 0, u = Array(e.length); r < e.length; r++) u[r] = e[r];
        return u;
    }
    return Array.from(e);
}

var r = require("../../config"), u = {
    rcount: 0,
    queue: [],
    add: function(e) {
        var t = e.data.length > 0 ? e.data[0] : {}, n = t.complete;
        t.header = t.header || {}, t.header["x-keep-id"] = "from-keep-lite", t.complete = function(e) {
            a.checkQueue(), n && n(e);
        };
        var o = r.maxRequestNum || 8;
        return this.rcount >= o ? (this.queue.push(e), !1) : (u.rcount++, !0);
    }
}, t = [ "request", "uploadFile", "downloadFile" ], a = {
    checkQueue: function() {
        if (u.rcount >= 1 && u.rcount--, u.queue.length > 0) {
            var r, t = u.queue.pop();
            (r = wx)[t.apiName].apply(r, e(t.data));
        }
    }
};

module.exports = {
    list: u,
    queueNames: t
};