var e = require("../../plugins/utils");

Component({
    properties: {
        itemStore: {
            type: Number
        },
        itemRank: {
            type: Number
        },
        itemData: {
            type: Object
        },
        itemId: {
            type: String
        },
        itemIndex: {
            type: Number
        }
    },
    data: {
        score: 3,
        blockColor: "#FF5363",
        bottomColor: "",
        borderTop: "1rpx solid #eee",
        showUploadPop: !1,
        mustKeys: {
            headWarp: {
                desc: "颈椎侧偏，与水平面不垂直",
                name: "头部侧倾"
            },
            highLowSho: {
                desc: "两侧肩峰不在同一水平面上",
                name: "高低肩"
            },
            hipWarp: {
                desc: "两侧髂前上棘不在水平面上(左右髋关节不在同一水平面上)",
                name: "骨盆倾斜"
            },
            spineWarp: {
                desc: "脊柱侧弯，与水平面不垂直",
                name: "脊柱侧倾弯"
            },
            oLeftLeg: {
                desc: "踝关节并拢，膝关节无法并拢(左腿向外弯曲)",
                name: "左腿O型"
            },
            oRightLeg: {
                desc: "踝关节并拢，膝关节无法并拢(右腿向外弯曲)",
                name: "右腿O型"
            },
            xLeftLeg: {
                desc: "膝关节并拢，踝关节距离在1cm以上(左腿向内弯曲)",
                name: "左腿X型"
            },
            xRightLeg: {
                desc: "踝膝关节并拢，踝关节距离在1cm以上(右腿向内弯曲)",
                name: "右腿X型"
            },
            headLead: {
                desc: "耳朵与肩关节连线与水平面不垂直，耳朵靠前",
                name: "头部前引"
            },
            backKnee: {
                desc: "左腿膝关节位于左踝-左髋连线后侧",
                name: "膝盖过伸"
            }
        }
    },
    attached: function(e) {
        this.getStatus(this.properties.itemData.level);
    },
    methods: {
        getStatus: function(e) {
            "3" == e ? this.setData({
                blockColor: "#FF5363",
                bottomColor: "#FFE7E9"
            }) : "2" == e ? this.setData({
                blockColor: "#FF8F0E",
                bottomColor: "#FFEFDD"
            }) : "1" != e && "0" != e || this.setData({
                blockColor: "#24C789",
                bottomColor: "#e0f6ec"
            });
        },
        solveCatch: function() {
            e.sensorTrack("miniprogram_detection_solution_click", {});
            var t = this;
            this.properties.itemData.extraInfo.guideId ? wx.wxapis.navigateTo(!1, {
                url: "/pages/solve/index?name=" + t.properties.itemData.name + "&url=" + t.properties.itemData.url + "&comparePic=" + t.properties.itemData.extraInfo.comparePic + "&harm=" + t.properties.itemData.extraInfo.harm + "&id=" + t.properties.itemData.extraInfo.guideId
            }) : this.setData({
                showUploadPop: !0
            });
        }
    }
});