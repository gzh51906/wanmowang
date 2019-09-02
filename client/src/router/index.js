// 路由跳转

import Vue from "vue";

// 引入路由
import VueRouter from "vue-router";


// 使用路由
Vue.use(VueRouter);

// 引入单页面组件
// import Home from "../pages/Home.vue";
// 陈日兴引入的


// 黄日隆引入的


// 苏沛龙引入的
import mine from "../components/spl/mine.vue" //引入个人中心模块

import home from "../components/spl/home.vue" //引入首页模块（暂时）
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
        name: mine,
        path: "/mine",
        component: mine
    }, {
        name: "home",
        path: "/home",
        component: home
    }]
})

export default router;