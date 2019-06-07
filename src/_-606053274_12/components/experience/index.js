Component({
    properties: {
        itemData: {
            type: Object
        }
    },
    data: {
        score: null,
        text: "",
        backColor: ""
    },
    attached: function(t) {},
    methods: {
        gotoArticle: function() {
            var t = this;
            wx.navigateToMiniProgram({
                appId: "wxc96dc7ebd9bf61e8",
                path: "/pages/article/detail/detail?id=" + t.properties.itemData._id,
                success: function(t) {}
            });
        }
    }
});