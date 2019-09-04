<template>
  <div class="set">
    <div class="head">
      <i class="el-icon-back" @click="back"></i>
      <span>
        <b>设置</b>
      </span>
    </div>
    <div class="content">
      <ul>
        <li>
          <span>清除缓存</span>
          <span>0.00M</span>
        </li>
        <li>
          <span>关于我们</span>
          <span>&gt;</span>
        </li>
        <li>
          <span>下载APP</span>
          <span>&gt;</span>
        </li>
      </ul>
    </div>
    <div class="logout" @click="exit">
      <span>
        <b>退出登录</b>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  //   data() {
  //     return {
  //       username: ""
  //     };
  //   },
  methods: {
    back() {
      this.$router.push("/mine");
    },
    exit() {
      localStorage.removeItem("username");
      localStorage.removeItem("authorCheck");
      this.$store.state.common.username = "";
      this.$store.state.common.authorCheck = "";
      this.$router.push("/mine");
    },
    mounted() {
      console.log(this.$store.state.common);
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
body,
html,
.set {
  width: 100%;
  height: 100%;
  background-color: rgb(239, 239, 244);
  display: flex;
  flex-direction: column;
}
.head {
  display: flex;
  width: 100%;
  height: 45px;
  text-align: center;
  background-color: #fff;
}
.head i {
  display: flex;
  flex: 15%;
  font-size: 30px;
  justify-content: center;
  align-items: center;
}
.head span {
  display: flex;
  flex: 85%;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
  font-size: 20px;
}
.content {
  width: 100%;
  height: 130px;
  margin-top: 10px;
  background-color: #fff;
}
.content ul {
  width: 100%;
  height: 130px;
}
.content ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  border-bottom: 1px solid rgb(223, 223, 223);
  font-size: 14px;
  color: rgb(138, 134, 134);
  padding: 0px 10px 0px 10px;
}
.content ul li:nth-child(3) {
  border-bottom: none;
}
.logout {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-top: 10px;
}
.logout span {
  height: 45px;
  width: 90%;
  border: 1px solid red;
  color: red;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>