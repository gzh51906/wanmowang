<template>
  <div class="collocation">
    <div class="collocationNav">
      <img :src="bigImg" width="100%" />
    </div>
    <div class="collocationBody">
      <div class="collocationbox">
        <div class="collocationboxNav">
          <h2 @click="gotoAll('allgoods','鼠标垫')">
            鼠标垫/Mousepad
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>

        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in collocationGoods" :key="item._id">
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
    <div class="collocationBody">
      <div class="collocationbox">
        <div class="boderTop"></div>
        <div class="collocationboxNav">
          <h2 @click="gotoAll('allgoods','帆布包')">
            帆布包/ToTe Bag
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in canvasgoods" :key="item._id">
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
    <div class="collocationBody">
      <div class="collocationbox">
        <div class="boderTop"></div>
        <div class="collocationboxNav">
          <h2 @click="gotoAll('allgoods','徽章')">
            微章/Badge
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in badgegoods" :key="item._id">
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
    <div class="collocationBody">
      <div class="collocationbox">
        <div class="boderTop"></div>
        <div class="collocationboxNav">
          <h2 @click="gotoAll('allgoods','货车帽')">
            货车帽/Trucker Hat
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in truckergoods" :key="item._id">
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
    <div class="collocationBody">
      <div class="collocationbox">
        <div class="boderTop"></div>
        <div class="collocationboxNav">
          <h2 @click="gotoAll('allgoods','眼罩')">
            眼罩/Eye Mask
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in eyegoods" :key="item._id">
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
    <div class="collocationBody">
      <div class="collocationbox">
        <div class="boderTop"></div>
        <div class="collocationboxNav">
          <h2 @click="gotoAll('allgoods','口罩')">
            口罩/Mouth Mask
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in mouthgoods" :key="item._id">
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
    <div class="collocationBody">
      <div class="collocationbox">
        <div class="boderTop"></div>
        <div class="collocationboxNav">
          <h2 @click="gotoAll('allgoods','棒球帽')">
            棒球帽/Cap
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in capgoods" :key="item._id">
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
    <div class="collocationBody">
      <div class="collocationbox">
        <div class="boderTop"></div>
        <div class="collocationboxNav">
          <h2 @click="gotoAll('allgoods','圆化妆镜')">
            圆化妆镜/circle mirror
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in cmirrorgoods" :key="item._id">
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
    <div class="collocationBody">
      <div class="collocationbox">
        <div class="boderTop"></div>
        <div class="collocationboxNav">
          <h2 @click="gotoAll('allgoods','方化妆镜')">
            方化妆镜/rectangle mirror
            <i class="el-icon-arrow-right"></i>
          </h2>
        </div>
        <div class="imgbox">
          <ul class="imglist">
            <li v-for="item in rectanglegoods" :key="item._id">
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
      collocationGoods: [],
      canvasgoods: [],
      badgegoods: [],
      truckergoods: [],
      eyegoods: [],
      mouthgoods: [],
      capgoods: [],
      cmirrorgoods: [],
      rectanglegoods: [],
      bigImg: ""
    };
  },
  async created() {
    let mouseData = await this.$axios.get("http://49.232.25.17:1901/hrl/home", {
      params: {
        title: "鼠标垫"
      }
    });
    let canvasData = await this.$axios.get(
      "http://49.232.25.17:1901/hrl/home",
      {
        params: {
          title: "帆布包"
        }
      }
    );
    let badgeData = await this.$axios.get("http://49.232.25.17:1901/hrl/home", {
      params: {
        title: "徽章"
      }
    });
    let truckerData = await this.$axios.get(
      "http://49.232.25.17:1901/hrl/home",
      {
        params: {
          title: "货车帽"
        }
      }
    );
    let eyeData = await this.$axios.get("http://49.232.25.17:1901/hrl/home", {
      params: {
        title: "眼罩"
      }
    });
    let mouthData = await this.$axios.get("http://49.232.25.17:1901/hrl/home", {
      params: {
        title: "口罩"
      }
    });
    let capData = await this.$axios.get("http://49.232.25.17:1901/hrl/home", {
      params: {
        title: "棒球帽"
      }
    });
    let cmirrorData = await this.$axios.get(
      "http://49.232.25.17:1901/hrl/home",
      {
        params: {
          title: "圆化妆镜"
        }
      }
    );
    let rectangleData = await this.$axios.get(
      "http://49.232.25.17:1901/hrl/home",
      {
        params: {
          title: "方化妆镜"
        }
      }
    );
    this.bigImg = mouseData.data.data[0].bigImg;
    this.collocationGoods = mouseData.data.data.slice(1, 4);
    this.canvasgoods = canvasData.data.data.slice(1, 4);
    this.badgegoods = badgeData.data.data.slice(1, 4);
    this.truckergoods = truckerData.data.data.slice(1, 4);
    this.eyegoods = eyeData.data.data.slice(1, 4);
    this.mouthgoods = mouthData.data.data.slice(1, 4);
    this.capgoods = capData.data.data.slice(1, 4);
    this.cmirrorgoods = cmirrorData.data.data.slice(1, 4);
    this.rectanglegoods = rectangleData.data.data.slice(1, 4);
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
.collocationBody {
  width: 100%;
  height: 210px;
}
.collocationBody .boderTop {
  border-top: 20px solid rgba(200, 200, 200, 0.3);
  width: 100%;
}
.collocationBody .collocationbox .collocationboxNav {
  width: 100%;
}
.collocationBody .collocationbox .collocationboxNav h2 {
  font-size: 14px;
  width: 100%;
}
.collocationBody .collocationbox .collocationboxNav h2 i {
  float: right;
}
.collocationBody .collocationbox .imgbox {
  width: 100%;
  padding: 0 0 10px;
}
.collocationBody .collocationbox .imgbox .imglist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}
.collocationBody .collocationbox .imgbox .imglist li {
  padding: 10px;
}
</style>