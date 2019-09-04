<template>
    <div class="trip">
    <div class="tripNav">
      <img :src="bigImg" width="100%" />
    </div>
    <div class="tripBody">
      <div class="tripbox">
        <div class="tripboxNav">
          <h2>
			滑板 / Skateboard
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>

        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in tripGoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" class="" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tripBody">
      <div class="tripbox">
          <div class="boderTop"></div>
        <div class="tripboxNav">
          <h2>
			沙滩巾 / Beach Towel
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in beachgoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
     <div class="tripBody">
      <div class="tripbox">
          <div class="boderTop"></div>
        <div class="tripboxNav">
          <h2>
			雨伞 / Umbrella
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in umbrellagoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
     <div class="tripBody">
      <div class="tripbox">
          <div class="boderTop"></div>
        <div class="tripboxNav">
          <h2>
			旅行箱 / Suitcase
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in suitcasegoods" :key="item._id">
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
      tripGoods: [],
      beachgoods:[],
      umbrellagoods:[],
      suitcasegoods:[],
      bigImg: "",
    };
  },
  async created() {
    let phoneData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "滑板"
      }
    });
    let beachData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "沙滩巾"
      }
    });
    let umbrellaData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "雨伞"
      }
    });
    let suitcaseData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "旅行箱"
      }
    });
    this.bigImg = phoneData.data.data[0].bigImg;
    this.tripGoods = phoneData.data.data.slice(1, 4);
    this.beachgoods = beachData.data.data.slice(1,4);
    this.umbrellagoods = umbrellaData.data.data.slice(1,4);
    this.suitcasegoods = suitcaseData.data.data.slice(1,4);
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
.tripBody {
  width: 100%;
  height: 210px;
}
.tripBody .boderTop{
    border-top:20px solid rgba(200, 200, 200, 0.3);
    width: 100%;
}
.tripBody .tripbox .tripboxNav{
    width: 100%;
}
.tripBody .tripbox .tripboxNav h2 {
  font-size: 14px;
  width: 100%;
}
.tripBody .tripbox .tripboxNav h2 i {
  float: right;
}
.tripBody .tripbox .imgbox {
  width: 100%;
  padding: 0 0 10px;
}
.tripBody .tripbox .imgbox .imglist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}
.tripBody .tripbox .imgbox .imglist li{
    padding: 10px;
}
</style>