<template>
  <div>
    <div class="header">
      <button class="back">
        <i class="el-icon-back"></i>
      </button>
      <span>编辑商品</span>
      <button class="delete">
        <i class="el-icon-delete"></i>
      </button>
    </div>
    <div class="main">
      <ul>
        <li>
          <img
            src="http://cdn.inklego.com/picture/template/iphone6/36900d4264c81583f540ef5ffb687747.jpg?x-oss-process=image/resize,m_fill,h_200,w_200"
            alt
          />
          <p>啦啦啦啦啦啦啦啦啦啦啦啦</p>
          <div>RMB 39.00</div>
          <span>
            <i class="el-icon-success" :class="type ? 'active' : ''" @click="change"></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: false
    };
  },
  methods: {
    change() {
      this.type = !this.type;
    }
  }
};
</script>
<style scoped>
.main {
  background: rgb(239, 239, 244);
  min-height: 768px;
  margin-top: 44px;
  overflow: hidden;
}
.main > ul {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  overflow: hidden;
}
.main > ul > li {
  height: 234px;
  width: 45%;
  margin: 8px;
  float: left;
  border: 1px solid rgb(221, 221, 223);
  position: relative;
}
.main > ul > li > img {
  width: 100%;
  height: 169px;
}
.main > ul > li > p {
  font-size: 12px;
  font-weight: 600;
  padding: 0 16px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 6px;
}
.main > ul > li > div {
  font-size: 12px;
  text-align: center;
  padding: 0 16px;
  color: rgb(255, 221, 66);
}
.main > ul > li > span {
  display: block;
  position: absolute;
  right: -8px;
  top: -8px;
  border-radius: 50%;
}
.main > ul > li > span > i {
  display: block;
  font-size: 24px;
  color: white;
}
.main > ul > li > span > i.active {
  color: green;
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
.header .delete {
  border: 0;
  background: rgb(247, 247, 247);
  float: right;
  font-size: 30px;
  color: grey;
  margin: 5px 10px 0 0;
}
</style>