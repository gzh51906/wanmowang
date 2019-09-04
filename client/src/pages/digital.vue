<template>
    <div class="digital">
    <div class="digitalNav">
      <img :src="bigImg" width="100%" />
    </div>
    <div class="digitalBody">
      <div class="digitalbox">
        <div class="digitalboxNav">
          <h2 @click="gotoAll('allgoods','手机壳')">
            手机壳/Phone case
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>

        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in digitalGoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" class="" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="digitalBody">
      <div class="digitalbox">
          <div class="boderTop"></div>
        <div class="digitalboxNav">
          <h2 @click="gotoAll('allgoods','mac贴纸')">
            mac贴纸/Mac Cover Sticker
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in macgoods" :key="item._id">
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
      digitalGoods: [],
      macgoods:[],
      bigImg: "",
    };
  },
  async created() {
    let phoneData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "手机壳"
      }
    });
    let macData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "mac贴纸"
      }
    });
    this.bigImg = phoneData.data.data[0].bigImg;
    this.digitalGoods = phoneData.data.data.slice(1, 4);
    this.macgoods = macData.data.data.slice(1,4);
  },
  methods:{
    Hgoto(goods_id,path){
      this.$router.push({path,query:{goods_id}})
    },
    gotoAll(path,type){
       this.$router.push({path,query:{type}})
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}
.digitalBody {
  width: 100%;
  height: 210px;
}
.digitalBody .boderTop{
    border-top:20px solid rgba(200, 200, 200, 0.3);
    width: 100%;
}
.digitalBody .digitalbox .digitalboxNav{
    width: 100%;
}
.digitalBody .digitalbox .digitalboxNav h2 {
  font-size: 14px;
  width: 100%;
}
.digitalBody .digitalbox .digitalboxNav h2 i {
  float: right;
}
.digitalBody .digitalbox .imgbox {
  width: 100%;
  padding: 0 0 10px;
}
.digitalBody .digitalbox .imgbox .imglist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}
.digitalBody .digitalbox .imgbox .imglist li{
    padding: 10px;
}
</style>