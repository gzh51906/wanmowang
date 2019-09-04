<template>
  <div class="des">
    <div class="head">
      <span>
        <b>设计师</b>
      </span>
      <span>DESIGNER</span>
    </div>
    <div class="type">
      <ul>
        <li v-for="item in datalist" :key="item.eng">
          <span>{{item.type}}</span>
          <span>{{item.eng}}</span>
        </li>
      </ul>
    </div>
    <div class="main">
      <div class="title">
        <span>
          <b>精选商店</b>
        </span>
        <span>SELECTED STORE</span>
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
  data() {
    return {
      datalist: [
        { type: "知名品牌", eng: "FAMOUS BRAND" },
        {
          type: "漫画插画",
          eng: "CARTOON ILLUSTRATION"
        },
        { type: "人气博主", eng: "POPULAR BLOGGER" },
        {
          type: "文创娱乐",
          eng: "CULTURAL RECREATION"
        },
        {
          type: "书法字设",
          eng: "CALLIGRAPHY DESIGN"
        },
        { type: "明星应援", eng: "STAR WHO" }
      ]
    };
  },
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
  },
  async created() {
    let { data } = await this.$axios({
      methods: "get",
      url: "http://127.0.0.1:1901/spl/designer"
    });
    console.log(data);
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
.head span:nth-child(2) {
  font-size: 14px;
}
.type {
  width: 100%;
  height: 80px;
  display: flex;
  margin-top: 15px;
}
.type ul {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
}
.type ul li {
  width: 130px;
  height: 80px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  color: #fff;
}
.type ul li:nth-child(1) {
  background-color: rgb(27, 231, 194);
}
.type ul li:nth-child(2) {
  background-color: rgb(255, 212, 73);
}
.type ul li:nth-child(3) {
  background-color: rgb(25, 116, 117);
}
.type ul li:nth-child(4) {
  background-color: rgb(90, 182, 255);
}
.type ul li:nth-child(5) {
  background-color: rgb(255, 126, 61);
}
.type ul li:nth-child(6) {
  background-color: rgb(160, 151, 244);
}
.type ul li span:nth-child(1) {
  font-size: 15px;
}
.type ul li span:nth-child(2) {
  display: flex;
  white-space: nowrap;
  justify-content: center;
  font-size: 12px;
  margin-top: 3px;
}
.main {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.main .title {
  width: 100%;
  height: 45;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-left: 20px;
  box-sizing: border-box;
  color: rgb(153, 148, 148);
}
.main .title span:nth-child(1) {
  font-size: 16px;
  color: #000;
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