<template>
    <div class="live">
    <div class="liveNav">
      <img :src="bigImg" width="100%" />
    </div>
    <div class="liveBody">
      <div class="livebox">
        <div class="liveboxNav">
          <h2>
			方抱枕 / Throw Pillow
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>

        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in liveGoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" class="" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="liveBody">
      <div class="livebox">
          <div class="boderTop"></div>
        <div class="liveboxNav">
          <h2>
			圆抱枕 / Round Pillow
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in canvasgoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="liveBody">
      <div class="livebox">
          <div class="boderTop"></div>
        <div class="liveboxNav">
          <h2>
			挂钟 / WallClock
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in badgegoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="liveBody">
      <div class="livebox">
          <div class="boderTop"></div>
        <div class="liveboxNav">
          <h2>
			方帆布画 / Wall Art
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in truckergoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
     <div class="liveBody">
      <div class="livebox">
          <div class="boderTop"></div>
        <div class="liveboxNav">
          <h2>
			矩帆布画 / Wall Art
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in eyegoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="liveBody">
      <div class="livebox">
          <div class="boderTop"></div>
        <div class="liveboxNav">
          <h2>
			毛毯 / Fluffy Blanket
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in mouthgoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="liveBody">
      <div class="livebox">
          <div class="boderTop"></div>
        <div class="liveboxNav">
          <h2>
			毛巾 / Towel
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in capgoods" :key="item._id">
              <img @click="Hgoto(item._id,'more')" :src="item.data.result.picture" width="105px" height="105px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="liveBody">
      <div class="livebox">
          <div class="boderTop"></div>
        <div class="liveboxNav">
          <h2>
			懒人沙发 / 
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in cmirrorgoods" :key="item._id">
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
      liveGoods: [],
      canvasgoods:[],
      badgegoods:[],
      truckergoods:[],
      eyegoods:[],
      mouthgoods:[],
      capgoods:[],
      cmirrorgoods:[],
      bigImg: "",
    };
  },
  async created() {
    let mouseData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "方抱枕"
      }
    });
    let canvasData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "圆抱枕"
      }
    });
    let badgeData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "挂钟"
      }
    });
    let truckerData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "方帆布画"
      }
    });
    let eyeData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "矩帆布画"
      }
    });
    let mouthData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "毛毯"
      }
    });
     let capData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "毛巾"
      }
    });
     let cmirrorData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "懒人沙发"
      }
    });
    this.bigImg = mouseData.data.data[0].bigImg;
    this.liveGoods = mouseData.data.data.slice(1, 4);
    this.canvasgoods = canvasData.data.data.slice(1,4);
    this.badgegoods = badgeData.data.data.slice(1,4);
    this.truckergoods = truckerData.data.data.slice(1,4);
    this.eyegoods = eyeData.data.data.slice(1,4);
    this.mouthgoods = mouthData.data.data.slice(1,4);
    this.capgoods = capData.data.data.slice(1,4);
    this.cmirrorgoods = cmirrorData.data.data;
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
.liveBody {
  width: 100%;
  height: 210px;
}
.liveBody .boderTop{
    border-top:20px solid rgba(200, 200, 200, 0.3);
    width: 100%;
}
.liveBody .livebox .liveboxNav{
    width: 100%;
}
.liveBody .livebox .liveboxNav h2 {
  font-size: 14px;
  width: 100%;
}
.liveBody .livebox .liveboxNav h2 i {
  float: right;
}
.liveBody .livebox .imgbox {
  width: 100%;
  padding: 0 0 10px;
}
.liveBody .livebox .imgbox .imglist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}
.liveBody .livebox .imgbox .imglist li{
    padding: 10px;
}
</style>