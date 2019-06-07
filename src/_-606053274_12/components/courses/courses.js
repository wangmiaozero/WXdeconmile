Component({
    properties: {
        listData: {
            type: Array,
            value: []
        },
        showLoading: Boolean,
        canTrain: Boolean
    },
    data: {
        difficultyList: [ "零基础", "初学", "进阶", "强化", "挑战" ]
    },
    methods: {}
});