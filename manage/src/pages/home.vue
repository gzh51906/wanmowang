<template>
  <el-container>
    <el-aside width="240px">
      <h1>玩墨网后台管理系统</h1>
      <el-collapse v-model="activeName" accordion class="overflow">
        <el-collapse-item title="商品管理" name="1">
          <div>商品列表</div>
          <div>商品分类</div>
        </el-collapse-item>
        <el-collapse-item title="用户管理" name="2">
          <div>用户列表</div>
          <div>添加用户</div>
          <div>管理人员</div>
        </el-collapse-item>
        <el-collapse-item title="订单管理" name="3">
          <div>订单列表</div>
        </el-collapse-item>
      </el-collapse>
    </el-aside>
    <el-main>
      <div class="topHead"></div>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1"
    };
  }
};
</script>
<style scoped>
.topHead {
  height: 52px;
  border-bottom: 2px solid rgb(242, 242, 242);
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