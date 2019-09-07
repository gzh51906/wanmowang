<template>
  <div id="hrl">
    <div class="hearder">
      <div class="hearderTop">
        <i @click="goback('home')" class="el-icon-back"></i>
        <strong>全部商品</strong>
      </div>
      <div class="hearderBottom">
        <ul class="hList">
          <li>最新</li>
          <li>人气</li>
          <li>
            <span>价格</span>
            <i class="el-icon-arrow-up icon1" @click="upPrice(true)"></i>
            <i class="el-icon-arrow-down icon2" @click="downPrice(false)"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="body">
      <div class="infinite-list-wrapper" style="overflow:auto">
        <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
          <li v-for="item in comgoods" class="list-item" :key="item._id">
            <div class="goodsbox">
              <img
                @click="goto('more',item._id)"
                :src="item.data.result.picture"
                width="170px"
                height="170px"
              />
              <p class="cont">{{item.data.result.title}}</p>
              <p class="price">{{'￥' + item.data.result.price}}</p>
            </div>
          </li>
        </ul>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allgoods: [],
      comgoods: [],
      loading: false,
      num: 9
    };
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.num += 2;
        this.comgoods = this.allgoods.slice(1, this.num);
        this.loading = false;
      }, 2000);
    },
    goto(path, goods_id) {
      this.$router.push({ path, query: { goods_id } });
    },
    goback(path) {
      this.$router.push(path);
    },
    async upPrice(num) {
      let type = this.$route.query.type;
      console.log(num);
      let { data } = await this.$axios.get(
        "http://49.232.25.17:1901/hrl/allgoods",
        {
          params: {
            title: type,
            asc: num
          }
        }
      );
      this.allgoods = data.data;
      this.comgoods = this.allgoods.slice(1, 7);
    },
    async downPrice(num) {
      let type = this.$route.query.type;
      console.log(num);
      let { data } = await this.$axios.get(
        "http://49.232.25.17:1901/hrl/allgoods",
        {
          params: {
            title: type,
            asc: num
          }
        }
      );
      this.allgoods = data.data;
      this.comgoods = this.allgoods.slice(1, 7);
    }
  },
  async created() {
    let type = this.$route.query.type;
    let { data } = await this.$axios.get("http://49.232.25.17:1901/hrl/home", {
      params: {
        title: type
      }
    });
    this.allgoods = data.data;
    this.comgoods = this.allgoods.slice(1, 7);
  },
  computed: {
    noMore() {
      return this.comgoods.length >= this.allgoods.length - 1;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}
#hrl .hearder {
  height: 44px;
  width: 100%;
  background: white;
  line-height: 40px;
  position: fixed;
  top: 0;
}
#hrl .hearder .hearderTop i {
  font-size: 30px;
  text-align: left;
  padding-left: 12px;
}
#hrl .hearder .hearderTop strong {
  text-align: center;
  font-size: 20px;
  margin-left: 25%;
}
#hrl .hearder .hearderBottom {
  border-top: 1px solid #ccc;
  border-bottom: solid #cccccc;
}
#hrl .hearder .hearderBottom .hList {
  width: 100%;
  height: 44px;
  padding: 0;
  margin: 0;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
}
#hrl .hearder .hearderBottom .hList .icon1 {
  position: absolute;
  top: 4px;
}
#hrl .hearder .hearderBottom .hList .icon2 {
  position: absolute;
  bottom: 10px;
}
#hrl .body {
  width: 100%;
  display: flex;
  margin-top: 100px;
  background: rgba(200, 200, 200, 0.3);
}
#hrl .body .list {
  padding: 0;
  margin: 0;
}
#hrl .body .list li {
  width: 100%;
}
#hrl .body .list .goodsbox {
  width: 100%;
  text-align: center;
  margin: 10px 0px;
  height: 250px;
  background: white;
}
#hrl .body .list .goodsbox .cont {
  widows: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
#hrl .body .list .goodsbox .price {
  color: red;
}
</style>