<template>
  <div class="kitchen">
    <div class="kitchenNav">
      <img :src="bigImg" width="100%" />
    </div>
    <div class="kitchenBody">
      <div class="kitchenbox">
        <div class="kitchenboxNav">
          <h2 @click="gotoAll('allgoods','马克杯')">
            马克杯/Mug
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>

        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in kitchenGoods" :key="item._id">
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
    <div class="kitchenBody">
      <div class="kitchenbox">
        <div class="boderTop"></div>
        <div class="kitchenboxNav">
          <h2 @click="gotoAll('allgoods','插勺杯')">
            插勺杯 / Spoon Cup
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in spoongoods" :key="item._id">
              <img
                @click="Hgoto(item._id,'more')"
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
      kitchenGoods: [],
      spoongoods: [],
      bigImg: ""
    };
  },
  async created() {
    let phoneData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "马克杯"
      }
    });
    let spoonData = await this.$axios.get("http://127.0.0.1:1901/hrl/home", {
      params: {
        title: "插勺杯"
      }
    });
    this.bigImg = phoneData.data.data[0].bigImg;
    this.kitchenGoods = phoneData.data.data.slice(1, 4);
    this.spoongoods = spoonData.data.data.slice(1, 4);
  },
  methods: {
    Hgoto(goods_id, path) {
      this.$router.push({ path, query: { goods_id } });
    },
    gotoAll(path, type) {
      this.$router.push({ path, query: { type } });
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}
.kitchenBody {
  width: 100%;
  height: 210px;
}
.kitchenBody .boderTop {
  border-top: 20px solid rgba(200, 200, 200, 0.3);
  width: 100%;
}
.kitchenBody .kitchenbox .kitchenboxNav {
  width: 100%;
}
.kitchenBody .kitchenbox .kitchenboxNav h2 {
  font-size: 14px;
  width: 100%;
}
.kitchenBody .kitchenbox .kitchenboxNav h2 i {
  float: right;
}
.kitchenBody .kitchenbox .imgbox {
  width: 100%;
  padding: 0 0 10px;
}
.kitchenBody .kitchenbox .imgbox .imglist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}
.kitchenBody .kitchenbox .imgbox .imglist li {
  padding: 10px;
}
</style>