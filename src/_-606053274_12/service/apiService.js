var t = require("../config"), e = getApp(), n = require("../plugins/utils"), r = n.handleHttpError, o = n.handleHttpStatusError, u = {
    getSolveData: function(n) {
        return e.wxHttp({
            url: t.host + "/social/v2/guide/" + n,
            method: "get"
        }).then(function(t) {
            return o(t), t.data;
        }).catch(function(t) {
            return r(t), Promise.reject(t);
        });
    },
    getArticleDetail: function(n) {
        return e.wxHttp({
            url: t.host + "/social/v2/entries/" + n,
            method: "get"
        }).then(function(t) {
            return o(t), t.data;
        }).catch(function(t) {
            return r(t), Promise.reject(t);
        });
    },
    getQueryResult: function(n) {
        return e.wxHttp({
            url: t.host + "/x-vision/v1/queryResult",
            method: "get",
            data: {
                reportId: n
            }
        }).then(function(t) {
            return o(t), t.data;
        }).catch(function(t) {
            return r(t), Promise.reject(t);
        });
    },
    postShare: function(n) {
        return e.wxHttp({
            url: t.host + "/x-vision/v1/updateSharedStatus?reportId=" + n,
            method: "POST",
            data: {}
        }).then(function(t) {
            return o(t), t.data;
        }).catch(function(t) {
            return r(t), Promise.reject(t);
        });
    },
    getRelation: function(n) {
        return e.wxHttp({
            url: t.host + "/social/v2/people/" + n + "/relation",
            method: "get"
        }).then(function(t) {
            return o(t), t.data;
        }).catch(function(t) {
            return r(t), Promise.reject(t);
        });
    },
    follow: function(n, u) {
        return e.wxHttp({
            url: t.host + "/social/v2/people/" + u + "/" + n,
            method: "post"
        }).then(function(t) {
            return o(t), t.data;
        }).catch(function(t) {
            return r(t), Promise.reject(t);
        });
    },
    getUserInfo: function(n) {
        return e.wxHttp({
            url: t.host + "/x-vision/v1/getUserInfo?unionId=" + n.unionId,
            method: "get"
        }).then(function(t) {
            return o(t), t.data;
        }).catch(function(t) {
            return r(t), Promise.reject(t);
        });
    },
    syncBody: function(n) {
        return e.wxHttp({
            url: t.host + "/pd/v2/bodyData",
            method: "post",
            data: n
        }).then(function(t) {
            return o(t), t.data;
        }).catch(function(t) {
            return r(t), Promise.reject(t);
        });
    },
    syncSilhouette: function(n) {
        return e.wxHttp({
            url: t.host + "/pd/v2/silhouette",
            method: "post",
            data: n
        }).then(function(t) {
            return o(t), t.data;
        }).catch(function(t) {
            return r(t), Promise.reject(t);
        });
    }
};

module.exports = u;