export default {
    // 请写好注释，下面依次类推
    state: {
        // 陈日兴定义的
        data: ""
        // 黄日隆定义的

        // 苏沛龙定义的

    },
    getters: {
        //注释

    },
    mutations: {
        //注释
        getData(state, data) {
            state.data = data;
        },
        removeData(state, rData) {
            state.data = state.data.filter(item => {
                return !rData.includes(item);
            })
        }
    },
    actions: {
        //注释
    }
}