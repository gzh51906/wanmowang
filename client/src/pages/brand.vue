<template>
  <div class="brand">
    <div class="brandNav">
      <img :src="bigImg" width="100%" />
    </div>
    <div class="brandBody">
      <div class="brandbox">
        <div class="brandboxNav">
          <h2>
			ZOEAT棉花糖 / Marshmallow
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in brandGoods" :key="item._id">
              <img
                @click="Hgoto(item._id,'more')"
                class
                :src="item.data.result.picture"
                width="105px"
                height="105px"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandGoods: [],
      bigImg: ""
    };
  },
  async created() {
    let phoneData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "ZOEAT棉花糖"
      }
    });
    this.bigImg = phoneData.data.data[0].bigImg;
    this.brandGoods = phoneData.data.data.slice(1, 4);
  },
  methods: {
    Hgoto(goods_id, path) {
      this.$router.push({ path, query: { goods_id } });
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}
.brandBody {
  width: 100%;
  height: 210px;
}
.brandBody .boderTop {
  border-top: 20px solid rgba(200, 200, 200, 0.3);
  width: 100%;
}
.brandBody .brandbox .brandboxNav {
  width: 100%;
}
.brandBody .brandbox .brandboxNav h2 {
  font-size: 14px;
  width: 100%;
}
.brandBody .brandbox .brandboxNav h2 i {
  float: right;
}
.brandBody .brandbox .imgbox {
  width: 100%;
  padding: 0 0 10px;
}
.brandBody .brandbox .imgbox .imglist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}
.brandBody .brandbox .imgbox .imglist li {
  padding: 10px;
}
</style>