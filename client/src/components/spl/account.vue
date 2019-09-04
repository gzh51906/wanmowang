<template>
  <div class="account">
    <div class="head">
      <i class="el-icon-back" @click="back"></i>
      <span>
        <b>个人信息</b>
      </span>
    </div>
    <div class="main">
      <div class="picture">
        <span>
          <img src="./image/thumb.png" alt />
        </span>
        <span>点击上传您的头像</span>
      </div>
      <div class="message">
        <ul>
          <li>
            <span>昵称:</span>
            <span>{{$store.state.common.username}}</span>
          </li>
          <li>
            <span>性别:</span>
            <span>保密</span>
          </li>
          <li>
            <span>生日:</span>
          </li>
          <li>
            <span>个人简介:</span>
          </li>
          <li>
            <span>密码:</span>
            <span style="color:gold">修改密码</span>
          </li>
          <li>
            <span>我的邮箱:</span>
            <span v-if="email">{{data.data.email}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: "",
      email: false
    };
  },
  methods: {
    back() {
      this.$router.push("/mine");
    }
  },
  mounted() {},
  async created() {
    let { data } = await this.$axios({
      methods: "get",
      url: "http://127.0.0.1:1901/spl/account",
      params: { username: this.$store.state.common.username }
    });
    this.data = data;
    this.email = true;
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
.account {
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
  font-size: 18px;
}
.main {
  width: 100%;
  /* height: 380px; */
  margin-top: 10px;
  background-color: #fff;
}
.main .picture {
  width: 100%;
  height: 150px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.main .picture img {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  margin-left: 30px;
}
.main .picture span:nth-child(2) {
  color: rgb(150, 148, 148);
  font-size: 14px;
  margin-left: 20px;
}
.message,
.message ul {
  width: 100%;
}
.message ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
  padding: 0px 15px 0px 15px;
}
.message ul li span {
  color: rgb(122, 119, 119);
  font-size: 14px;
}
</style>