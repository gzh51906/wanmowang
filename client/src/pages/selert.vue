<template>
  <div>
    <div class="block" width="100%">
      <el-carousel height="170px">
        <el-carousel-item v-for="item in bannerimg" :key="item">
          <img :src="item" width="100%" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="hauthor">
      <div class="hauthor-nav">
        <h4>
          精选设置商店
          <p>SELECTED STORE</p>
        </h4>
      </div>
      <div>
        <ul class="authorList">
          <li v-for="item in hAuthor" :key="item._id">
            <div>
              <el-avatar :size="78" :src="item.data.result.designer.thumb"></el-avatar>
              <p>{{item.data.result.designer.nick}}</p>
              <i class="el-icon-circle-plus icon"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="hotGoods">
      <div class="hotGoodsBox">
        <img src="./img/hot.png" width="100%" />
        <ul class="hotGoodsList">
          <li v-for="item in hHotgoods" :key="item._id">
            <div>
              <img
                @click="hGoto(item._id,'more')"
                :src="item.data.result.picture"
                width="130px"
                height="130px"
              />
              <p class="hcont">{{item.data.result.title}}</p>
              <p class="hprice">{{'￥' + item.data.result.price}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="newGoods">
      <div class="newGoodsBox">
        <img src="./img/new.png" width="100%" />
        <ul class="newGoodsList">
          <li v-for="item in hNewgoods" :key="item._id">
            <div>
              <img
                @click="hGoto(item._id,'more')"
                :src="item.data.result.picture"
                width="130px"
                height="130px"
              />
              <p class="hcont">{{item.data.result.title}}</p>
              <p class="hprice">{{'￥' + item.data.result.price}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="clothGoods">
      <h2>
        服饰
        <i class="el-icon-caret-right"></i>
      </h2>
      <div class="clothGoodsBox">
        <ul class="clothGoodsList">
          <li v-for="item in hClothgoods" :key="item._id">
            <img @click="hGoto(item._id,'more')" :src="item.data.result.picture" width="100%" />
            <p class="hcont">{{item.data.result.title}}</p>
            <p class="price">{{'￥' + item.data.result.price}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="DPGoods">
      <h2>
        搭配
        <i class="el-icon-caret-right"></i>
      </h2>
      <div class="DPGoodsBox">
        <ul class="DPGoodsList">
          <li v-for="item in hDPgoods" :key="item._id">
            <img @click="hGoto(item._id,'more')" :src="item.data.result.picture" width="100%" />
            <p class="hcont">{{item.data.result.title}}</p>
            <p class="price">{{'￥' + item.data.result.price}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="digital">
      <h2>
        数码
        <i class="el-icon-caret-right"></i>
      </h2>
      <div class="digitalBox">
        <ul class="digitalList">
          <li v-for="item in hDigitalgoods" :key="item._id">
            <img @click="hGoto(item._id,'more')" :src="item.data.result.picture" width="100%" />
            <p class="hcont">{{item.data.result.title}}</p>
            <p class="price">{{'￥' + item.data.result.price}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="kitchen">
      <h2>
        餐厨
        <i class="el-icon-caret-right"></i>
      </h2>
      <div class="kitchenBox">
        <ul class="kitchenList">
          <li v-for="item in hKitchengoods" :key="item._id">
            <img @click="hGoto(item._id,'more')" :src="item.data.result.picture" width="100%" />
            <p class="hcont">{{item.data.result.title}}</p>
            <p class="price">{{'￥' + item.data.result.price}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="trip">
      <h2>
        出行
        <i class="el-icon-caret-right"></i>
      </h2>
      <div class="tripBox">
        <ul class="tripList">
          <li v-for="item in htripgoods" :key="item._id">
            <img @click="hGoto(item._id,'more')" :src="item.data.result.picture" width="100%" />
            <p class="hcont">{{item.data.result.title}}</p>
            <p class="price">{{'￥' + item.data.result.price}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="stationery">
      <h2>
        文具
        <i class="el-icon-caret-right"></i>
      </h2>
      <div class="stationeryBox">
        <ul class="stationeryList">
          <li v-for="item in hStationerygoods" :key="item._id">
            <img @click="hGoto(item._id,'more')" :src="item.data.result.picture" width="100%" />
            <p class="hcont">{{item.data.result.title}}</p>
            <p class="price">{{'￥' + item.data.result.price}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="live">
      <h2>
        居家
        <i class="el-icon-caret-right"></i>
      </h2>
      <div class="liveBox">
        <ul class="liveList">
          <li v-for="item in hLivegoods" :key="item._id">
            <img @click="hGoto(item._id,'more')" :src="item.data.result.picture" width="100%" />
            <p class="hcont">{{item.data.result.title}}</p>
            <p class="price">{{'￥' + item.data.result.price}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="brand">
      <h2>
        品牌
        <i class="el-icon-caret-right"></i>
      </h2>
      <div class="brandBox">
        <ul class="brandList">
          <li v-for="item in hbrandgoods" :key="item._id">
            <img @click="hGoto(item._id,'more')" :src="item.data.result.picture" width="100%" />
            <p class="hcont">{{item.data.result.title}}</p>
            <p class="price">{{'￥' + item.data.result.price}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerimg: [
        "http://cdn.inklego.com/picture/banner/20190114/b5f154a7be5efb76e2154c81a952a2a6.png?x-oss-process=image/resize,w_500",
        "http://cdn.inklego.com/picture/banner/20180403/dca575d46f495eea73c65819123aff9a.png?x-oss-process=image/resize,w_500",
        "http://cdn.inklego.com/picture/banner/20190228/cc65b511cf72f9154d6c3fab03c30186.jpg?x-oss-process=image/resize,w_500",
        "http://cdn.inklego.com/picture/banner/20181010/342719b89256204014b440dffa4c8974.jpg?x-oss-process=image/resize,w_500",
        "http://cdn.inklego.com/picture/banner/20190219/bb8c5575de53128c48093725d24da1b1.jpg?x-oss-process=image/resize,w_500"
      ],
      hAuthor: [],
      hHotgoods: [],
      hNewgoods: [],
      hClothgoods: [],
      hDPgoods: [],
      hDigitalgoods: [],
      hKitchengoods: [],
      htripgoods: [],
      hStationerygoods: [],
      hLivegoods: [],
      hbrandgoods: []
    };
  },
  //发送请求
  async created() {
    // console.log(this.$route)
    // let goods_id = this.$route.query.goods_id
    let { data } = await this.$axios.get("http://49.232.25.17:1901/hrl/home", {
      params: {
        title: "联名潮牌"
      }
    });
    let phoneData = await this.$axios.get("http://49.232.25.17:1901/hrl/home", {
      params: {
        title: "手机壳"
      }
    });
    let dapeiData = await this.$axios.get("http://49.232.25.17:1901/hrl/home", {
      params: {
        title: "帆布包"
      }
    });
    let kitchenData = await this.$axios.get(
      "http://49.232.25.17:1901/hrl/home",
      {
        params: {
          title: "马克杯"
        }
      }
    );
    let tripData = await this.$axios.get("http://49.232.25.17:1901/hrl/home", {
      params: {
        title: "滑板"
      }
    });
    let stationeryData = await this.$axios.get(
      "http://49.232.25.17:1901/hrl/home",
      {
        params: {
          title: "精装本"
        }
      }
    );
    let liveData = await this.$axios.get("http://49.232.25.17:1901/hrl/home", {
      params: {
        title: "方帆布画"
      }
    });
    let brandData = await this.$axios.get("http://49.232.25.17:1901/hrl/home", {
      params: {
        title: "ZOEAT棉花糖"
      }
    });
    this.hAuthor = data.data.slice(1, 6);
    this.hHotgoods = data.data.slice(1, 10);
    this.hClothgoods = data.data.slice(8, 12);
    this.hNewgoods = phoneData.data.data.slice(1, 10);
    this.hDigitalgoods = phoneData.data.data.slice(1, 6);
    this.hDPgoods = dapeiData.data.data.slice(1, 6);
    this.hKitchengoods = kitchenData.data.data.slice(1, 6);
    this.htripgoods = tripData.data.data.slice(1, 6);
    this.hStationerygoods = stationeryData.data.data.slice(1, 6);
    this.hLivegoods = liveData.data.data.slice(1, 6);
    this.hbrandgoods = brandData.data.data.slice(1, 6);
    // this.active = this.$router.path;
  },
  methods: {
    hGoto(goods_id, path) {
      this.$router.push({ path, query: { goods_id } });
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}
.icon {
  font-size: 40px;
}
.el-main .hauthor {
  height: 270px;
}
.el-main .hauthor-nav {
  text-align: center;
}
.el-main .hauthor-nav h4 p {
  margin: 0;
  font-size: 12px;
  color: #99a9bf;
}
.el-main .authorList {
  width: 100%;
  text-align: center;
  padding: 0;
  overflow: auto;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.el-main .authorList li {
  width: 130px;
  height: 100%;
  flex-shrink: 0;
}
.el-main .hotGoods {
  border-top: 20px solid rgba(200, 200, 200, 0.5);
}
.el-main .hotGoods .hotGoodsBox .hotGoodsList {
  width: 100%;
  padding: 0;
  height: 240px;
  display: flex;
  overflow: auto;
  flex-direction: row;
  justify-content: space-between;
}
.el-main .hotGoods .hotGoodsBox .hotGoodsList li {
  padding: 5px 10px;
  text-align: center;
  width: 130px;
  height: 100%;
  flex-shrink: 0;
}
.el-main .hotGoods .hotGoodsBox .hotGoodsList li .hcont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.el-main .hotGoods .hotGoodsBox .hotGoodsList li .hprice {
  color: red;
}
.el-main .newGoods {
  border-top: 20px solid rgba(200, 200, 200, 0.5);
}
.el-main .newGoods .newGoodsBox .newGoodsList {
  width: 100%;
  padding: 0;
  height: 240px;
  display: flex;
  overflow: auto;
  flex-direction: row;
  justify-content: space-between;
}
.el-main .newGoods .newGoodsBox .newGoodsList li {
  padding: 5px 10px;
  text-align: center;
  width: 130px;
  height: 100%;
  flex-shrink: 0;
}
.el-main .newGoods .newGoodsBox .newGoodsList li .hcont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.el-main .newGoods .newGoodsBox .newGoodsList li .hprice {
  color: red;
}
.el-main .clothGoods {
  border-top: 20px solid rgba(200, 200, 200, 0.5);
}
.el-main .clothGoods h2 {
  width: 100%;
  font-size: 16px;
  text-align: center;
}
.el-main .clothGoods .clothGoodsBox .clothGoodsList {
  width: 100%;
  padding: 0;
  height: 320px;
  display: flex;
  overflow: auto;
  flex-direction: row;
  justify-content: space-between;
}
.el-main .clothGoods .clothGoodsBox .clothGoodsList li {
  text-align: center;
  width: 190px;
  height: 100%;
  flex-shrink: 0;
  padding: 15px;
}
.el-main .clothGoods .clothGoodsBox .clothGoodsList li .hcont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.el-main .clothGoods .clothGoodsBox .clothGoodsList li .price {
  color: red;
}
.el-main .DPGoods {
  border-top: 20px solid rgba(200, 200, 200, 0.5);
}
.el-main .DPGoods h2 {
  width: 100%;
  font-size: 16px;
  text-align: center;
}
.el-main .DPGoods .DPGoodsBox .DPGoodsList {
  width: 100%;
  padding: 0;
  height: 320px;
  display: flex;
  overflow: auto;
  flex-direction: row;
  justify-content: space-between;
}
.el-main .DPGoods .DPGoodsBox .DPGoodsList li {
  text-align: center;
  width: 190px;
  height: 100%;
  flex-shrink: 0;
  padding: 15px;
}
.el-main .DPGoods .DPGoodsBox .DPGoodsList li .hcont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.el-main .DPGoods .DPGoodsBox .DPGoodsList li .price {
  color: red;
}
.el-main .digital {
  border-top: 20px solid rgba(200, 200, 200, 0.5);
}
.el-main .digital h2 {
  width: 100%;
  font-size: 16px;
  text-align: center;
}
.el-main .digital .digitalBox .digitalList {
  width: 100%;
  padding: 0;
  height: 320px;
  display: flex;
  overflow: auto;
  flex-direction: row;
  justify-content: space-between;
}
.el-main .digital .digitalBox .digitalList li {
  text-align: center;
  width: 190px;
  height: 100%;
  flex-shrink: 0;
  padding: 15px;
}
.el-main .digital .digitalBox .digitalList li .hcont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.el-main .digital .digitalBox .digitalList li .price {
  color: red;
}
.el-main .kitchen {
  border-top: 20px solid rgba(200, 200, 200, 0.5);
}
.el-main .kitchen h2 {
  width: 100%;
  font-size: 16px;
  text-align: center;
}
.el-main .kitchen .kitchenBox .kitchenList {
  width: 100%;
  padding: 0;
  height: 320px;
  display: flex;
  overflow: auto;
  flex-direction: row;
  justify-content: space-between;
}
.el-main .kitchen .kitchenBox .kitchenList li {
  text-align: center;
  width: 190px;
  height: 100%;
  flex-shrink: 0;
  padding: 15px;
}
.el-main .kitchen .kitchenBox .kitchenList li .hcont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.el-main .kitchen .kitchenBox .kitchenList li .price {
  color: red;
}
.el-main .trip {
  border-top: 20px solid rgba(200, 200, 200, 0.5);
}
.el-main .trip h2 {
  width: 100%;
  font-size: 16px;
  text-align: center;
}
.el-main .trip .tripBox .tripList {
  width: 100%;
  padding: 0;
  height: 320px;
  display: flex;
  overflow: auto;
  flex-direction: row;
  justify-content: space-between;
}
.el-main .trip .tripBox .tripList li {
  text-align: center;
  width: 190px;
  height: 100%;
  flex-shrink: 0;
  padding: 15px;
}
.el-main .trip .tripBox .tripList li .hcont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.el-main .trip .tripBox .tripList li .price {
  color: red;
}
.el-main .stationery {
  border-top: 20px solid rgba(200, 200, 200, 0.5);
}
.el-main .stationery h2 {
  width: 100%;
  font-size: 16px;
  text-align: center;
}
.el-main .stationery .stationeryBox .stationeryList {
  width: 100%;
  padding: 0;
  height: 320px;
  display: flex;
  overflow: auto;
  flex-direction: row;
  justify-content: space-between;
}
.el-main .stationery .stationeryBox .stationeryList li {
  text-align: center;
  width: 190px;
  height: 100%;
  flex-shrink: 0;
  padding: 15px;
}
.el-main .stationery .stationeryBox .stationeryList li .hcont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.el-main .stationery .stationeryBox .stationeryList li .price {
  color: red;
}
.el-main .live {
  border-top: 20px solid rgba(200, 200, 200, 0.5);
}
.el-main .live h2 {
  width: 100%;
  font-size: 16px;
  text-align: center;
}
.el-main .live .liveBox .liveList {
  width: 100%;
  padding: 0;
  height: 320px;
  display: flex;
  overflow: auto;
  flex-direction: row;
  justify-content: space-between;
}
.el-main .live .liveBox .liveList li {
  text-align: center;
  width: 190px;
  height: 100%;
  flex-shrink: 0;
  padding: 15px;
}
.el-main .live .liveBox .liveList li .hcont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.el-main .live .liveBox .liveList li .price {
  color: red;
}
.el-main .brand {
  border-top: 20px solid rgba(200, 200, 200, 0.5);
}
.el-main .brand h2 {
  width: 100%;
  font-size: 16px;
  text-align: center;
}
.el-main .brand .brandBox .brandList {
  width: 100%;
  padding: 0;
  height: 320px;
  display: flex;
  overflow: auto;
  flex-direction: row;
  justify-content: space-between;
}
.el-main .brand .brandBox .brandList li {
  text-align: center;
  width: 190px;
  height: 100%;
  flex-shrink: 0;
  padding: 15px;
}
.el-main .brand .brandBox .brandList li .hcont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.el-main .brand .brandBox .brandList li .price {
  color: red;
}
</style>