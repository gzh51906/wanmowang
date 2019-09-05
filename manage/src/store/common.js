export default {
    // 请写好注释，下面依次类推
    state: {
        // 陈日兴定义的
        userCheck: false,
        title: "/首页/商品管理/商品分类"
        // 黄日隆定义的

        // 苏沛龙定义的

    },
    getters: {
        //注释
    },
    mutations: {
        //注释
        userChange(state, username) {
            localStorage.setItem("userCheck", username);
            state.userCheck = true;
        },
        update(state) {
            if (localStorage.getItem("userCheck")) {
                state.userCheck = true;
            }
        },
        updateTitle(state, data) {
            state.title = data;
        },
        removeUser(state) {
            state.userCheck = false;
            localStorage.removeItem("userCheck");
        }
    },
    actions: {
        //注释
    }
}