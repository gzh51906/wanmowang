<template>
  <div v-if="cType" class="box">
    <div class="header">
      <el-page-header @back="goBack" :content="data.data.result.cate.title"></el-page-header>
    </div>
    <div class="content">
      <el-carousel trigger="click" height="375px" arrow="never">
        <el-carousel-item v-for="item in data.data.result.banner" :key="item">
          <img :src="item" alt class="carousel" />
        </el-carousel-item>
      </el-carousel>
      <h1>{{data.data.result.title}}</h1>
      <div class="price">RMB {{data.data.result.price.toFixed(2)}}</div>
      <div class="designer">
        <h4>设计者</h4>
        <img :src="data.data.result.designer.thumb" alt />
        <p>{{data.data.result.designer.nick}}</p>
      </div>
      <div class="details">
        <img v-for="item in data.data.result.details" :src="item" alt :key="item" />
      </div>
    </div>
    <div class="footer">
      <el-row class="row">
        <el-col :span="8" class="client">
          <button>
            <i class="el-icon-shopping-cart-full"></i>
          </button>
          <button>
            <i class="el-icon-service"></i>
          </button>
        </el-col>
        <el-col :span="8" class="cart">
          <button>加入购物车</button>
        </el-col>
        <el-col :span="8" class="butIt">
          <button>立即购买</button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cType: false,
      cTargetUrl: "",
      data: ""
    };
  },
  async beforeMount() {
    this.cTargetUrl = this.$route.query.targetUrl || "/home";
    let goods_id = this.$route.query.goods_id || "5d6b48acbb54e228905705c3";
    let data = await this.$axios.get("http://127.0.0.1:1901/crx/goods", {
      params: {
        goods_id
      }
    });
    this.data = data.data.data[0];
    this.cType = true;
  },
  methods: {
    goBack() {
      this.$router.push(this.cTargetUrl);
    }
  }
};
</script>
<style scoped>
.client button {
  border: 0;
  width: 50%;
  height: 100%;
}
.client button i {
  font-size: 22px;
}
.butIt button {
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 14px;
  background: rgb(255, 215, 29);
  color: #333;
}
.cart button {
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 14px;
  background: #333;
  color: white;
}
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
.box .header {
  width: 100%;
  background: rgb(247, 247, 247);
  height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.el-page-header {
  line-height: 44px;
  font-size: 17px;
  font-weight: 700;
  padding-left: 20px;
}
.box .content {
  margin-top: 44px;
  flex: 1;
  background: rgb(239, 239, 244);
  overflow: auto;
}
.box .content .el-carousel {
  background: white;
}
.box .content .carousel {
  width: 100%;
}
.box .content > h1 {
  height: 40px;
  background: white;
  margin: 0;
  font-size: 17px;
  color: #666;
  text-align: center;
  line-height: 40px;
  padding: 0 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.box .content .price {
  height: 31px;
  background: white;
  text-align: center;
  font-size: 14px;
  color: rgb(221, 80, 75);
}
.box .content .designer {
  height: 180px;
  margin-top: 15px;
  background: white;
}

.box .content .designer > h4 {
  font-size: 14px;
  font-weight: 500;
  padding: 15px 15px 7px;
  margin: 0;
}
.box .content .designer > img {
  display: block;
  width: 73px;
  height: 73px;
  margin: 0 auto;
  border-radius: 50%;
}
.box .content .designer > p {
  font-size: 14px;
  color: #333;
  text-align: center;
  margin-top: 20px;
}
.box .content .details {
  margin-top: 15px;
}
.box .content .details > img {
  width: 100%;
  display: block;
}
.box .footer {
  width: 100%;
  height: 51px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: rgb(247, 247, 247);
  z-index: 100;
}
.box .footer .row {
  height: 100%;
}
.el-col {
  height: 100%;
}
</style>