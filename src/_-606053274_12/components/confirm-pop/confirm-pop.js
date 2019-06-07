Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        show: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    methods: {
        close: function() {
            this.setData({
                show: !1
            }), this.triggerEvent("closeevent");
        },
        cancel: function() {
            this.setData({
                show: !1
            }), this.triggerEvent("cancelevent");
        }
    }
});