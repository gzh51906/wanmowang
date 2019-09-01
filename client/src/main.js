// 引入vue,App组件
import Vue from 'vue';
import App from './App.vue';

// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入animate动画
import "animate.css/animate.css";

// 引入axios请求插件
import axios from "axios";
// 把axios写入Vue原型，方便子组件调用
Vue.prototype.$axios = axios;

// 引入router
import router from "./router";

// 引入vuex，store
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  // 把router注入到实例中
  router,
  store,
  render: h => h(App),
}).$mount('#app')