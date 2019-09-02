// 路由跳转

import Vue from "vue";
// 引入路由
import VueRouter from "vue-router";


// 使用路由
Vue.use(VueRouter);

// 引入单页面组件
// import Home from "../pages/Home.vue";
// 陈日兴引入的
import cMore from "../components/crx/cMore.vue";
import cCart from "../components/crx/cCart.vue";

// 黄日隆引入的
import Home from "../pages/home.vue";
import Brand from "../pages/brand.vue";
import Cloth from "../pages/cloth.vue";
import Collocation from "../pages/collocation.vue";
import Digital from "../pages/digital.vue";
import Kitchen from "../pages/kitchen.vue";
import Live from "../pages/live.vue";
import Stationery from "../pages/stationery.vue";
import Trip from "../pages/trip.vue";

// 苏沛龙引入的
import mine from "../components/spl/mine.vue" //引入个人中心模块

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
     * 陈日兴引入cMore
     */
    routes: [{
        name: 'home',
        path: '/home',
        component: Home
    }, {
        name: 'brand',
        path: '/brand',
        component: Brand
    }, {
        path: '/',
        redirect: {
            path: '/home'
        }
    }, {
        name: 'cloth',
        path: '/cloth',
        component: Cloth
    }, {
        name: 'collocation',
        path: '/collocation',
        component: Collocation
    }, {
        name: 'digital',
        path: '/digital',
        component: Digital
    }, {
        name: 'kitchen',
        path: '/kitchen',
        component: Kitchen
    }, {
        name: 'live',
        path: '/live',
        component: Live
    }, {
        name: 'stationery',
        path: '/stationery',
        component: Stationery
    }, {
        name: 'trip',
        path: '/trip',
        component: Trip
    }, {
        name: mine,
        path: "/mine",
        component: mine
    }, {
        name: "more",
        path: "/more",
        component: cMore
    }, {
        name: "cart",
        path: "/cart",
        component: cCart
    }]
})

export default router;