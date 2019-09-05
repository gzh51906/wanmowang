// 路由跳转

import Vue from "vue";

// 引入路由
import VueRouter from "vue-router";


// 使用路由
Vue.use(VueRouter);

// 引入单页面组件
// import Home from "../pages/Home.vue";
// 陈日兴引入的
import userList from "../components/crx/userList.vue";
// 黄日隆引入的
import Order from "../components/hrl/order.vue";
import Classification from "../components/hrl/classification.vue";

// 苏沛龙引入的


// 实例化路由
let router = new VueRouter({
    //例子
    //     {
    //     name: "home",
    //     path: "/home",
    //     component: Home
    // }, {
    //     path: "/",
    //     redirect: {
    //         path: "/home"
    //     }
    // }
    /** 
     * 不方便注释的地方在这里注释
     */
    routes: [{
        name: "userList",
        path: "/userList",
        component: userList
    }, {
        name: "order",
        path: "/order",
        component: Order
    },{
        name:'class',
        path:'/class',
        component: Classification
    }]
})

// 防止刷新的时候状态消失
import store from "../store";
router.beforeEach(async (to, from, next) => {
    store.commit("update");
    next();
})

export default router;