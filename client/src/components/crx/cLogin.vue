<template>
  <div class="box">
    <div class="header">
      <button @click="back">
        <i class="el-icon-back"></i>
      </button>
      <span class="login" @click="goto">注册</span>
      <span class="register">登录</span>
    </div>
    <div class="main">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="cEmail">
          <i class="el-icon-message"></i>
          <el-input type="text" v-model="ruleForm.cEmail" autocomplete="off" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <i class="el-icon-lock"></i>
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="请输入密码"
            @keyup.13.native="submitForm('ruleForm')"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="regBtn" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        cEmail: ""
      },
      rules: {
        pass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "请输入长度为6-18位的密码",
            trigger: "blur"
          }
        ],
        cEmail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let { pass: password, cEmail: email } = this.ruleForm;
          let result = await this.$axios.get(
            "http://127.0.0.1:1901/crx/login",
            {
              params: {
                email,
                password
              }
            }
          );
          if (result.data.code) {
            let targetUrl = this.$route.query.targetUrl || "/mine";
            localStorage.setItem("authorCheck", result.data.data.authorCheck);
            localStorage.setItem("username", result.data.data.username);
            this.$store.commit("addDate", {
              authorCheck: result.data.data.authorCheck,
              username: result.data.data.username
            });
            this.$router.push(targetUrl);
          } else {
            alert("邮箱或者密码错误");
          }
        } else {
          return false;
        }
      });
    },
    back() {
      this.$router.push("/mine");
    },
    goto() {
      this.$router.push("/reg");
    }
  }
};
</script>
<style scoped>
.el-form-item {
  position: relative;
}
.el-form-item i {
  position: absolute;
  display: block;
  font-size: 16px;
  z-index: 10;
  color: rgb(51, 51, 51);
  top: 13px;
  left: 0px;
}
.demo-ruleForm {
  margin: 350px 10px 0;
}
.demo-ruleForm .regBtn {
  width: 100%;
  background: rgb(255, 215, 29);
}
.box {
  background: url("../spl/image/login_reg_bg.png");
  background-size: 100%;
}
.main {
  background: rgb(239, 239, 244);
}
.main > div > img {
  display: block;
  width: 100%;
}
.header {
  height: 44px;
  overflow: hidden;
  background: white;
}
.header > button {
  border: 0;
  background: white;
  font-size: 30px;
  margin: 5px 0 0 10px;
}
.header > span {
  color: #333;
  float: right;
  line-height: 44px;
  margin-right: 10px;
}
.header .register {
  font-weight: 600;
}
</style>