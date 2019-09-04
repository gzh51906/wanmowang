<template>
    <div class="stationery">
    <div class="stationeryNav">
      <img :src="bigImg" width="100%" />
    </div>
    <div class="stationeryBody">
      <div class="stationerybox">
        <div class="stationeryboxNav">
          <h2 @click="gotoAll('allgoods','精装本')">
			精装本 / Hardcover Notebook
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>

        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in stationeryGoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" class="" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="stationeryBody">
      <div class="stationerybox">
          <div class="boderTop"></div>
        <div class="stationeryboxNav">
          <h2 @click="gotoAll('allgoods','裸背本')">
			裸背本 / Backless Notebook
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in spoongoods" :key="item._id">
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
      stationeryGoods: [],
      spoongoods:[],
      bigImg: "",
    };
  },
  async created() {
    let phoneData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "精装本"
      }
    });
    let spoonData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "裸背本"
      }
    });
    this.bigImg = phoneData.data.data[0].bigImg;
    this.stationeryGoods = phoneData.data.data.slice(1, 4);
    this.spoongoods = spoonData.data.data.slice(1,4);
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
.stationeryBody {
  width: 100%;
  height: 210px;
}
.stationeryBody .boderTop{
    border-top:20px solid rgba(200, 200, 200, 0.3);
    width: 100%;
}
.stationeryBody .stationerybox .stationeryboxNav{
    width: 100%;
}
.stationeryBody .stationerybox .stationeryboxNav h2 {
  font-size: 14px;
  width: 100%;
}
.stationeryBody .stationerybox .stationeryboxNav h2 i {
  float: right;
}
.stationeryBody .stationerybox .imgbox {
  width: 100%;
  padding: 0 0 10px;
}
.stationeryBody .stationerybox .imgbox .imglist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}
.stationeryBody .stationerybox .imgbox .imglist li{
    padding: 10px;
}
</style>