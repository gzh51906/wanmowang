export default {
    // 请写好注释，下面依次类推
    state: {
        // 陈日兴定义的
        userCheck: false
        // 黄日隆定义的

        // 苏沛龙定义的

    },
    getters: {
        //注释
    },
    mutations: {
        //注释
        userChange(state,username) {
            localStorage.setItem("userCheck", username);
            state.userCheck = true;
        }
    },
    actions: {
        //注释
    }
}