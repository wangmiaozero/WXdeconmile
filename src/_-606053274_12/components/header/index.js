Component({
    properties: {},
    data: {},
    methods: {
        exitLogin: function() {
            wx.wxapis.navigateBack(!1, {
                delta: 1
            });
        }
    }
});