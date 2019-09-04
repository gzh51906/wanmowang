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
import cEdit from "../components/crx/cEdit.vue";
import cLogin from "../components/crx/cLogin.vue";

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
import reg from "../components/spl/reg.vue" //引入登录模块
import server from "../components/spl/server.vue" //引入客服模块
import presale from "../components/spl/presale.vue" //引入预售模块
import set from "../components/spl/set.vue" //引入设置退出模块
import account from "../components/spl/account.vue" //引入账户模块
import designer from "../components/spl/designer.vue" //引入设计师模块

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
        component: cCart,
        meta: {
            authorCheck: true
        }
    }, {
        name: "edit",
        path: "/edit",
        component: cEdit
    }, {
        name: "reg",
        path: "/reg",
        component: reg
    }, {
        name: "server",
        path: "/server",
        component: server,
        meta: {
            authorCheck: true
        }
    }, {
        name: "presale",
        path: "/presale",
        component: presale
    }, {
        name: "login",
        path: "/login",
        component: cLogin
    }, {
        name: "set",
        path: "/set",
        component: set
    }, {
        name: "account",
        path: "/account",
        component: account
    }, {
        name: "designer",
        path: "/designer",
        component: designer
    }]
})


// 路由拦截
import axios from 'axios';
import store from "../store";
router.beforeEach(async (to, from, next) => {
    store.commit("typeChange");
    store.commit("nameChange");
    if (to.matched.some(item => item.meta.authorCheck)) {
        let authorCheck = localStorage.getItem("authorCheck");
        if (authorCheck) {
            let type = await axios.get("http://127.0.0.1:1901/crx/verify", {
                headers: {
                    authorCheck
                }
            });
            if (type.data.data.authorCheck) {
                next();
            } else {
                localStorage.removeItem("authorCheck");
                localStorage.removeItem("username");
                next({
                    path: '/login',
                    query: {
                        targetUrl: to.fullPath
                    }
                })
            }
        } else {
            next({
                path: '/login',
                query: {
                    targetUrl: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})


export default router;