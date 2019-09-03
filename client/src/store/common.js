export default {
    // 请写好注释，下面依次类推
    state: {
        // 陈日兴定义的
        authorCheck: "",
        username: "",
        targetUrl: ""
        // 黄日隆定义的

        // 苏沛龙定义的

    },
    getters: {
        //注释
    },
    mutations: {
        //注释
        //将token状态与用户名保存在state中
        addDate(state, data) {
            state.username = data.username;
            state.authorCheck = data.authorCheck;
        },
        typeChange(state) {
            let authorCheck = localStorage.getItem("authorCheck");
            state.authorCheck = authorCheck;
        },
        nameChange(state) {
            let username = localStorage.getItem("username");
            state.username = username;
        }
    },
    actions: {
        //注释
    }
}