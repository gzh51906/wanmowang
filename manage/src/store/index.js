//store模块

import Vue from "vue";

// 引入vuex
import Vuex from "vuex";

// 使用Vuex
Vue.use(Vuex);

// 引入vuex模块(公共的模块)
import common from "./common.js";

// 陈日兴引入的模块
import userlist from "./userlist.js";

// 黄日隆引入的模块


// 苏沛龙引入的模块


// 实例化Vuex并且配置参数
let store = new Vuex.Store({
    modules: {
        common,
        userlist
    }
})


export default store;