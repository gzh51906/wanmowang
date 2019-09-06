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
import userEdit from "../components/crx/userEdit.vue";
// 黄日隆引入的
import Order from "../components/hrl/order.vue";
import Classification from "../components/hrl/classification.vue";
import Addclass from "../components/hrl/addClass.vue";
import Addtype from "../components/hrl/addType.vue";

// 苏沛龙引入的
import goodlist from "../components/spl/goodlist.vue"
import editor from "../components/spl/editor.vue"

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
        name: "goodlist",
        path: "/goodlist",
        component: goodlist
    }, {
        name: "userList",
        path: "/userList",
        component: userList
    }, {
        name: "order",
        path: "/order",
        component: Order
    }, {
        name: "userEdit",
        path: "/userEdit",
        component: userEdit
    }, {
        name: 'class',
        path: '/class',
        component: Classification
    }, {
        name:'addclass',
        path:"/addclass",
        component: Addclass
    },{
        name:'addtype',
        path:'/addtype',
        component: Addtype
    },{
        name: "editor",
        path: "/editor",
        component: editor
    }]
})

// 防止刷新的时候状态消失
import store from "../store";
router.beforeEach(async (to, from, next) => {
    store.commit("update");
    next();
})

export default router;