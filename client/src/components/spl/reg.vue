<template>
  <div class="reg">
    <div class="reg-head">
      <i class="el-icon-back"></i>
      <a href>
        <b>注册</b>
      </a>
      <a href>
        <b>登录</b>
      </a>
    </div>
    <!-- <div class="form">
      <div class="email">
        <i class="el-icon-message"></i>
        <input type="text" placeholder="请输入邮箱" />
      </div>
      <div class="name">
        <i class="el-icon-cpu"></i>
        <input type="text" placeholder="请输入昵称" />
      </div>
      <div class="password">
        <i class="el-icon-lock"></i>
        <input type="password" placeholder="请输入密码" />
      </div>
    </div>

    <a href class="handon">注册</a>-->
    <div class="form">
      <el-form
        v-model="dynamicValidateForm.email"
        class="demo-dynamic"
        :model="dynamicValidateForm"
      >
        <el-form-item
          prop="email"
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
    ]"
        >
          <i class="el-icon-message"></i>
          <el-input v-model="dynamicValidateForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
      </el-form>

      <el-form class="demo-ruleForm" :model="ruleForm" ref="ruleForm">
        <el-form-item
          prop="name"
          :rules=" [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
          ]"
        >
          <i class="el-icon-cpu"></i>
          <el-input v-model="ruleForm.name" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item
          prop="pass"
          :rules=" [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ]"
        >
          <i class="el-icon-lock"></i>
          <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// var emailReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;

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
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ],
        email: ""
      },
      ruleForm: {
        name: ""
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
.reg {
  width: 100%;
  height: 100%;
  background-image: url(./image/login_reg_bg.png);
  background-size: 100% auto;
  min-height: 640px;
}
.reg-head {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background-color: #fff;
}
.reg-head i {
  font-size: 30px;
  margin-left: 10px;
  margin-top: 10px;
}
.reg-head a {
  float: right;
  color: #000;
  font-size: 20px;
  margin-right: 10px;
}
/* .form {
  width: 100%;
  margin-left: 12px;
  margin-top: 340px;
} */
.form .email,
.form .name,
.form .password {
  height: 40px;
  width: 100%;
  position: relative;
  border-left: 1px solid #ccc;
}
.form .email i,
.form .name i,
.form .password i {
  font-size: 20px;
  position: absolute;
  left: 8px;
  top: 12px;
}
.form .email input,
.form .name input,
.form .password input {
  height: 40px;
  width: 300px;
  padding-left: 30px;
  /* border-left: 1px solid #ccc; */
}
.handon {
  display: block;
  width: 334px;
  height: 40px;
  background-color: #ffd71d;
  color: #000;
  text-align: center;
  line-height: 40px;
  margin-left: 12px;
  margin-top: 15px;
}
.form {
  margin-top: 340px;
}
.el-form {
  /* margin-top: 340px; */
  /* padding-right: 20px; */
  width: 340px;
}
.el-form-item {
  width: 340px;
  position: relative;
  margin-top: 20px;
  margin-left: 10px;
}
.el-form-item i {
  position: absolute;
  left: 0px;
  top: 10px;
  z-index: 2;
  font-size: 20px;
  color: rgb(182, 179, 179);
}

.el-input {
  width: 340px;

  /* padding: 0; */
  box-sizing: border-box;
}
</style>