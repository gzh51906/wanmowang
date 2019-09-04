<template>
  <div class="login">
    <h1>玩墨网管理系统</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input type="text" v-model="ruleForm.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      ruleForm: {
        pass: "",
        name: ""
      },
      rules: {
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          this.$store.commit("userChange");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
body {
  position: relative;
  width: 100%;
  height: 100%;
}
.login {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(224, 223, 223);
  background-image: url("../components/spl/image/login_reg_bg.png");
  border-radius: 10px;
}
h1 {
  background-image: url("../components/spl/image/logo2.png");
  background-repeat: no-repeat;
  background-size: 50px 50px;
  background-position: 30px 27px;
  text-align: center;
  height: 95px;
  width: 100%;
  line-height: 95px;
  padding-left: 20px;
}
.el-form {
  padding-right: 100px;
  margin-top: 50px;
}
.el-button {
  width: 100px;
  margin-left: 40px;
}
</style>

