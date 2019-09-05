<template>
  <div v-if="type" class="content">
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
        <el-button type="primary" @click="submit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: false,
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
  async beforeMount() {
    let data = await this.$axios.get(
      "http://127.0.0.1:1901/crx/manage_userEditRead",
      {
        params: {
          _id: this.$route.query.id
        }
      }
    );
    this.type = true;
    this.form.username = data.data.data[0].username;
    this.form.email = data.data.data[0].email;
    this.form.password = data.data.data[0].password;
    this.form.gender = data.data.data[0].gender;
    this.form.job = data.data.data[0].job;
    this.form.city = data.data.data[0].city;
  },
  methods: {
    async submit() {
      let result = await this.$axios.patch(
        "http://127.0.0.1:1901/crx/manage_userEditPatch",
        {
          _id: this.$route.query.id,
          data: this.form
        }
      );
      this.$router.push("/userList");
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