<template>
  <div class="presale">
    <div class="head">
      <span>
        <b>预售</b>
      </span>
      <span>FUND</span>
    </div>
    <div class="main">
      <img src="./image/2bf2a6a15ecb8810a240579f420eee68.png" alt />
      <ul>
        <li>
          <b>全部</b>
        </li>
        <li>
          <b>预售中</b>
        </li>
        <li>
          <b>最新</b>
        </li>
      </ul>
      <img src="./image/63f0481a3fbdf3b22a201a8361b507b8.png" alt />
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
        <li>
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
.main img {
  width: 100%;
}
.main ul {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin-top: 15px; */
  font-size: 14px;
}
.footer {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  background-color: #fff;
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