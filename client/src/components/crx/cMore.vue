<template>
  <div v-if="cType" class="box">
    <el-page-header @back="goBack" :content="data.data.result.cate.title"></el-page-header>
    <div class="content">
      <el-carousel trigger="click" height="375px" arrow="never">
        <el-carousel-item v-for="item in data.data.result.banner" :key="item">
          <img :src="item" alt class="carousel" />
        </el-carousel-item>
      </el-carousel>
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
    let goods_id = this.$route.query.goods_id || "5d6b48acbb54e228905705c2";
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
.box {
  display: flex;
  flex-direction: column;
}
.box .content {
  flex: 1;
  background: rgb(239, 239, 244);
}
.box .content .el-carousel {
  background: white;
}
.box .content .carousel {
  width: 100%;
}
.el-page-header {
  background: rgb(247, 247, 247);
  height: 44px;
  line-height: 44px;
  font-size: 17px;
  font-weight: 700;
  padding-left: 20px;
}
</style>