Component({
    properties: {},
    data: {},
    methods: {
        exitLogin: function() {
            wx.navigateBack({
                delta: 1
            });
        }
    }
});