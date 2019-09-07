<template>
  <div class="content">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="管理员权限">
        <el-select v-model="form.manage" placeholder="请设置对应的权限">
          <el-option label="是" :value="true"></el-option>
          <el-option label="否" :value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="修改权限">
        <el-select v-model="form.update" placeholder="请设置对应的权限">
          <el-option label="是" :value="true"></el-option>
          <el-option label="否" :value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="添加权限">
        <el-select v-model="form.insert" placeholder="请设置对应的权限">
          <el-option label="是" :value="true"></el-option>
          <el-option label="否" :value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="删除权限">
        <el-select v-model="form.delete" placeholder="请设置对应的权限">
          <el-option label="是" :value="true"></el-option>
          <el-option label="否" :value="false"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        manage: false,
        update: false,
        delete: false,
        insert: false
      }
    };
  },
  methods: {
    async submit() {
      if (this.form.username === "") {
        alert("用户名为必填项");
      } else if (this.form.password === "") {
        alert("密码为必填项");
      } else {
        let result = await this.$axios.post(
          "http://49.232.25.17:1901/crx/manage_manageAdd",
          {
            data: this.form
          }
        );
        this.$router.push("/userManage");
      }
    }
  }
};
</script>
<style scoped>
.content {
  padding: 50px 0 0 100px;
}
.el-input {
  width: 300px;
}
</style>