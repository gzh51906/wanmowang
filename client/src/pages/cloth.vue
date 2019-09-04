<template>
  <div class="cloth">
    <div class="clothNav">
      <img :src="bigImg" width="100%" />
    </div>
    <div class="clothBody">
      <div class="clothbox">
        <div class="clothboxNav">
          <h2>
            T恤/Tee
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>

        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in clothGoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" class="" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="clothBody">
      <div class="clothbox">
          <div class="boderTop"></div>
        <div class="clothboxNav">
          <h2>
            卫衣
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in weiyigoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="clothBody">
      <div class="clothbox">
          <div class="boderTop"></div>
        <div class="clothboxNav">
          <h2>
            联名潮牌/vest
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in lmcpgoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" :src="item.data.result.picture" width="105px" height="105px" />
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
      clothGoods: [],
      weiyigoods:[],
      lmcpgoods:[],
      bigImg: "",
      type: ""
    };
  },
  async created() {
    let clothData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "联名潮牌"
      }
    });
    this.bigImg = clothData.data.data[0].bigImg;
    this.clothGoods = clothData.data.data.slice(5, 8);
    this.weiyigoods = clothData.data.data.slice(21);
    this.lmcpgoods = clothData.data.data.slice(19,22);
    this.type = clothData.data.data[0].type.slice(1);
  },
  methods:{
    Hgoto(goods_id,path){
      this.$router.push({path,query:{goods_id}})
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}
.clothBody {
  width: 100%;
  height: 210px;
}
.clothBody .boderTop{
    border-top:20px solid rgba(200, 200, 200, 0.3);
    width: 100%;
}
.clothBody .clothbox .clothboxNav{
    width: 100%;
}
.clothBody .clothbox .clothboxNav h2 {
  font-size: 14px;
  width: 100%;
}
.clothBody .clothbox .clothboxNav h2 i {
  float: right;
}
.clothBody .clothbox .imgbox {
  width: 100%;
  padding: 0 0 10px;
}
.clothBody .clothbox .imgbox .imglist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}
.clothBody .clothbox .imgbox .imglist li{
    padding: 10px;
}
</style>