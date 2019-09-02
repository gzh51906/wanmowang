<template>
  <div class="box">
    <div class="header">
      <button class="back">
        <i class="el-icon-back"></i>
      </button>
      <span>购物车</span>
      <button class="delete">
        <i class="el-icon-s-order"></i>
      </button>
    </div>
    <div class="main">
      <ul>
        <li>
          <img
            src="http://cdn.inklego.com/picture/template/iphone6/36900d4264c81583f540ef5ffb687747.jpg?x-oss-process=image/resize,m_fill,h_300,w_300"
            alt
          />
          <p class="desc">每个明天，都是明天</p>
          <div class="price">RMB 39.00</div>
          <div class="type">
            <button>啦啦啦</button>
            <button>哈哈哈哈哈哈哈哈</button>
            <span>×1</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="priceAll">合计：RMB 69.00</div>
      <button class="buy">结算</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.main {
  height: 718px;
  margin-top: 44px;
  background: rgb(239, 239, 244);
  padding-top: 15px;
}
.main > ul {
  height: 440px;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;
  width: 100%;
}
.main > ul > li {
  width: 300px;
  flex-shrink: 0;
  margin: 0 10px;
  background: white;
}
.main > ul > li > img {
  display: block;
  width: 300px;
  height: 300px;
}
.main > ul > li .desc {
  font-size: 14px;
  color: #333;
  margin: 18px 15px 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.main > ul > li .price {
  font-size: 12px;
  color: #8f8f94;
  margin-left: 15px;
}
.main > ul > li .type {
  margin: 20px 0 0 15px;
}
.main > ul > li .type > button {
  width: 75px;
  height: 27px;
  border-radius: 13px;
  font-size: 12px;
  color: #666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: white;
  border: 1px solid grey;
  margin-right: 7px;
}
.main > ul > li .type > button:last-of-type {
  width: 90px;
}
.main > ul > li .type > span {
  font-size: 12px;
  color: #666;
}
.footer {
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgb(247, 247, 247);
  overflow: hidden;
}
.footer .priceAll {
  float: left;
  height: 100%;
  width: 67%;
  font-size: 14px;
  line-height: 50px;
  text-align: center;
  color: rgb(221, 85, 81);
}
.footer .buy {
  float: right;
  width: 33%;
  line-height: 50px;
  text-align: center;
  border: 0;
  background: rgb(217, 60, 55);
  font-size: 17px;
  color: white;
}
.box {
  position: relative;
  background: rgb(239, 239, 244);
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