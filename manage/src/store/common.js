export default {
    // 请写好注释，下面依次类推
    state: {
        // 陈日兴定义的
        userCheck: false,
        title: "首页/商品管理/商品列表",
        delete: "",
        update: "",
        insert: ""
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
            localStorage.setItem("title", data);
        },
        removeUser(state) {
            state.userCheck = false;
            localStorage.removeItem("userCheck");
            localStorage.removeItem("title");
        },
        permission(state, data) {
            state.delete = data.delete;
            state.update = data.update;
            state.insert = data.insert;
        }
    },
    actions: {
        //注释
    }
}