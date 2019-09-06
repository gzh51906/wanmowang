<template>
  <div class="content">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender" placeholder="请选择您的性别">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职业">
        <el-input v-model="form.job"></el-input>
      </el-form-item>
      <el-form-item label="所在城市">
        <el-input v-model="form.city"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">添加</el-button>
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
        email: "",
        password: "",
        gender: "",
        job: "",
        city: ""
      }
    };
  },
  methods: {
    async submit() {
      if (this.form.username === "") {
        alert("用户名为必填项");
      } else if (this.form.email === "") {
        alert("邮箱为必填项");
      } else if (this.form.password === "") {
        alert("密码为必填项");
      } else {
        let result = await this.$axios.post(
          "http://127.0.0.1:1901/crx/manage_userAdd",
          {
            data: this.form
          }
        );
        if (result.data.code === 0) {
          alert("添加失败");
        } else {
          this.$store.commit("updateTitle", "首页/用户管理/用户列表");
          this.$router.push("/userList");
        }
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