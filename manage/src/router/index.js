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
import userAdd from "../components/crx/userAdd.vue";
import userManage from "../components/crx/userManage.vue";
import zhuye from "../components/crx/common.vue";
import manageEdit from "../components/crx/manageEdit.vue";
import manageAdd from "../components/crx/manageAdd.vue";
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
        path: "/",
        redirect: {
            path: "/zhuye"
        }
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
        name: 'userAdd',
        path: '/userAdd',
        component: userAdd
    }, {
        name: 'userManage',
        path: '/userManage',
        component: userManage,
        meta: {
            manage: true
        }
    }, {
        name: 'zhuye',
        path: '/zhuye',
        component: zhuye
    }, {
        name: 'manageEdit',
        path: '/manageEdit',
        component: manageEdit
    }, {
        name: 'manageAdd',
        path: '/manageAdd',
        component: manageAdd
    }, {
        name: "editor",
        path: "/editor",
        component: editor
    }]
})

// 防止刷新的时候状态消失
import axios from 'axios';
import store from "../store";
router.beforeEach(async (to, from, next) => {
    store.commit("update");
    let result = await axios.get("http://127.0.0.1:1901/crx/manage_userManage", {
        params: {
            username: localStorage.getItem("userCheck")
        }
    });
    store.commit("permission", {
        delete: result.data.data[0].delete,
        update: result.data.data[0].update,
        insert: result.data.data[0].insert
    })
    if (to.matched.some(item => item.meta.manage)) {
        if (result.data.data[0].manage) {
            next();
        } else {
            alert("权限不足");
        }
    } else {
        store.commit("updateTitle", localStorage.getItem("title"));
        if (!localStorage.getItem("title") || localStorage.getItem("title") === "null") {
            store.commit("updateTitle", "首页/商品管理/商品列表");
        }
        next();
    }
})

export default router;