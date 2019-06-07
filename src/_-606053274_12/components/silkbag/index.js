Component({
    properties: {
        itemData: {
            type: Object
        },
        itemId: {
            type: String
        }
    },
    data: {
        score: null,
        text: "",
        backColor: "",
        detailVisible: !1
    },
    attached: function(t) {},
    methods: {
        showDetail: function(t) {
            this.setData({
                detailVisible: !0
            }), wx.wxapis.navigateTo(!1, {
                url: "/pages/silkview/index?itemId=" + this.properties.itemId + "&id=" + this.properties.itemData.id + "&title=" + this.properties.itemData.title + "&&chapterIndex=" + t.currentTarget.dataset.shareId
            });
        }
    }
});