Component({
    properties: {
        itemData: {
            type: Object,
            observer: function(t, e, a) {
                this.getStatus(this.properties.itemData.score);
            }
        }
    },
    data: {
        itemDataReal: {},
        score: null,
        text: "",
        backColor: ""
    },
    attached: function(t) {
        this.setData({
            text: ""
        }), this.getStatus(this.properties.itemData.score);
    },
    methods: {
        getStatus: function(t) {
            (t || 0 === t) && (t >= 0 && t < 60 ? this.setData({
                backColor: "#FF5363",
                text: "非常严重"
            }) : t >= 60 && t <= 90 ? this.setData({
                backColor: "#FF8F0E",
                text: "需要警惕"
            }) : t > 90 && t <= 100 && this.setData({
                backColor: "#24C789",
                text: "继续保持"
            }));
        }
    }
});