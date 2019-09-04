<template>
  <div v-if="type">
    <div class="header">
      <button class="back" @click="back">
        <i class="el-icon-back"></i>
      </button>
      <span>我的订单</span>
    </div>
    <div class="main">
      <ul>
        <li v-for="item in data" :key="item._id" :class="item.complete ? 'active' : ''">
          <img :src="item.imgUrl" alt />
          <div class="desc">
            <p>{{item.desc}}</p>
            <span>{{item.type1}}</span>
            <span>{{item.type2}}</span>
            <strong>×{{item.num}}</strong>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <p>(*^_^*)</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: false,
      data: ""
    };
  },
  async beforeMount() {
    let result = await this.$axios.get("http://127.0.0.1:1901/crx/readOrder", {
      params: {
        username: this.$store.state.common.username
      }
    });
    this.data = result.data.data;
    this.type = true;
  },
  methods: {
    back() {
      this.$router.push("/mine");
    }
  }
};
</script>
<style scoped>
.main {
  background: rgb(239, 239, 244);
  margin-top: 44px;
  padding: 10px 5px;
}
.main > ul {
  list-style: none;
  padding: 0;
  background: white;
}
.main > ul > li {
  margin-bottom: 5px;
  overflow: hidden;
  height: 70px;
  background: rgb(244, 244, 239);
}
.main > ul > li.active {
  background: greenyellow;
}
.main > ul > li > img {
  float: left;
  width: 70px;
  height: 70px;
}
.main > ul > li .desc {
  height: 100%;
  float: left;
  width: 250px;
  margin-left: 20px;
}
.main > ul > li .desc > p {
  margin: 8px 0;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.main > ul > li .desc > span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  background: white;
  display: inline-block;
  margin-right: 5px;
  width: 90px;
  text-align: center;
  height: 24px;
  line-height: 24px;
  border-radius: 12px;
  padding: 0 3px;
}
.footer > p {
  text-align: center;
  font-size: 14px;
  color: #666;
}
.header {
  height: 44px;
  width: 100%;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  line-height: 44px;
  background: rgb(247, 247, 247);
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
}
.header .back {
  border: 0;
  background: rgb(247, 247, 247);
  float: left;
  font-size: 30px;
  margin: 6px 0 0 10px;
}
.header > span {
  float: left;
  margin-left: 105px;
}
</style>