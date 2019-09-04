<template>
  <div class="serve">
    <div class="head">
      <span>
        <b>客服</b>
      </span>
      <span>server</span>
    </div>
    <div class="main">
      <div class="status">已联系人工客服</div>
      <div class="tall">
        <span>
          <i class="el-icon-user-solid"></i>
        </span>
        <span>您好，请问有什么可以帮到您？</span>
      </div>
      <div class="content">
        <i class="el-icon-picture-outline-round"></i>
        <input type="text" />
        <i class="el-icon-circle-plus-outline"></i>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li @click="gotohome">
          <i class="el-icon-s-home"></i>
          <p>首页</p>
        </li>
        <li @click="gotopresale">
          <i class="el-icon-alarm-clock"></i>
          <p>预售</p>
        </li>
        <li @click="gotodes">
          <i class="el-icon-data-analysis"></i>
          <p>设计师</p>
        </li>
        <li @click="gotoserver">
          <i class="el-icon-chat-line-round"></i>
          <p>客服</p>
        </li>
        <li @click="gotomine">
          <i class="el-icon-user"></i>
          <p>我的</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotohome() {
      this.$router.push("/home");
    },
    gotomine() {
      this.$router.push("/mine");
    },
    gotoserver() {
      this.$router.push("/server");
    },
    gotopresale() {
      this.$router.push("/presale");
    },
    gotodes() {
      this.$router.push("/designer");
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
html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgb(239, 239, 244);
}
.server {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(239, 239, 244);
}
.head {
  width: 100%;
  background-color: rgb(255, 219, 45);
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.main .status {
  width: 150px;
  height: 30px;
  background-color: #ccc;
  text-align: center;
  border-radius: 10px;
  font-size: 13px;
  line-height: 30px;
  margin: auto;
  color: #fff;
  margin-top: 20px;
}
.main .tall {
  margin-top: 20px;
}
.main .tall span:nth-child(1) {
  display: inline-block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 15px;
  margin-left: 10px;
}
.main .tall span:nth-child(1) i {
  text-align: center;
  margin-left: 12px;
  line-height: 45px;
  font-size: 20px;
}
.main .tall span:nth-child(2) {
  height: 45px;
  background-color: #ccc;
  color: #fff;
  border-radius: 5px;
}
.main .content {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 50px;
  border-top: 1px solid #ccc;
  line-height: 50px;
  vertical-align: middle;
  box-sizing: border-box;
}
.main .content i {
  font-size: 30px;
  margin-left: 10px;
  vertical-align: middle;
}
.main .content input {
  width: 75%;
  height: 35px;
  border: 1px solid #ccc;
  margin-left: 5px;
  vertical-align: middle;
  border-radius: 5px;
  margin-bottom: 2px;
}
.footer {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid rgb(230, 228, 228);
}
.footer ul {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footer ul li {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer ul li i {
  font-size: 25px;
  color: rgb(190, 187, 187);
}
.footer ul li p {
  color: rgb(136, 134, 134);
}
</style>