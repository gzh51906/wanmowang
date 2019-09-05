<template>
  <el-container>
    <el-aside width="240px">
      <h1>玩墨网后台管理系统</h1>
      <el-collapse v-model="activeName" accordion class="overflow">
        <el-collapse-item title="商品管理" name="1">
          <div @click="change('/商品管理/商品列表','/goodlist')">商品列表</div>
          <div @click="change('/商品管理/商品分类')">商品分类</div>
        </el-collapse-item>
        <el-collapse-item title="用户管理" name="2">
          <div @click="change('/用户管理/用户列表')">用户列表</div>
          <div @click="change('/用户管理/添加用户')">添加用户</div>
          <div @click="change('/用户管理/管理人员')">管理人员</div>
        </el-collapse-item>
        <el-collapse-item title="订单管理" name="3">
          <div @click="change('/订单管理/订单列表')">订单列表</div>
        </el-collapse-item>
      </el-collapse>
    </el-aside>
    <el-main>
      <div class="topHead">
        <span>{{$store.state.common.title}}</span>
        <span class="tuichu" @click="tuichu">退出</span>
      </div>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      activeName: "1"
    };
  },
  methods: {
    change(title, path) {
      this.$store.commit("updateTitle", "首页" + title);
      this.$router.push(path);
    },
    ...mapMutations({
      tuichu: "removeUser"
    })
  }
};
</script>
<style scoped>
.el-collapse div {
  cursor: pointer;
}
.topHead {
  height: 52px;
  border-bottom: 2px solid rgb(242, 242, 242);
}
.topHead > span {
  font-size: 14px;
  color: #666;
  float: left;
  line-height: 54px;
  margin-left: 20px;
}
.topHead .tuichu {
  float: right;
  margin-right: 30px;
  color: blue;
  cursor: pointer;
  line-height: 18px;
  margin-top: 17px;
}
.el-collapse div {
  text-align: center;
}
.el-aside {
  height: 720px;
  padding: 0 45px;
}
.el-aside > h1 {
  color: rgb(194, 194, 194);
  font-size: 16px;
  text-align: center;
  margin-top: 35px;
}
.el-main {
  height: 720px;
}
</style>