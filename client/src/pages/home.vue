<template>
  <el-container>
    <el-header>
      <i class="el-icon-search icon header-left"></i>
      <div class="header-middle">
        商城
        <br />
        <span>STORE</span>
      </div>
      <i class="el-icon-shopping-cart-2 icon header-right" @click="gotocart('cart')"></i>
    </el-header>
    <div>
      <ul class="hnav">
        <li v-for="item in hdatalist" :key="item.name" @click="goto(item.name)">{{item.text}}</li>
        <p class="slit"></p>
      </ul>
    </div>
    <el-main>
      <keep-alive>
        <component :is="currter" v-model="currter"></component>
      </keep-alive>
    </el-main>
    <div class="footer">
      <ul class="Hfooter">
        <li v-for="item in hiconlist" :key="item.text" @click="Hfgoto(item.path)">
          <i :class="item.icon" class="icon"></i>
          <p class="iconText">{{item.text}}</p>
        </li>
      </ul>
    </div>
  </el-container>
</template>

<script>
import selert from "./selert.vue";
import cloth from "./cloth.vue";
import collocation from "./collocation.vue";
import digital from "./digital.vue";
import kitchen from "./kitchen.vue";
import trip from "./trip.vue";
import stationery from "./stationery";
import live from "./live";
import brand from "./brand";
export default {
  data() {
    return {
      active: "/home",
      //导航集合
      hdatalist: [
        {
          name: "selert",
          text: "精选",
          path: "./home",
          id:'0'
        },
        {
          name: "cloth",
          text: "服饰",
          path: "./cloth",
          id:"1"
        },
        {
          name: "collocation",
          text: "搭配",
          path: "./collocation",
          id:"2"
        },
        {
          name: "digital",
          text: "数码",
          path: "./digital",
          id:"3"
        },
        {
          name: "kitchen",
          text: "餐厨",
          path: "./kitchen",
          id:"4"
        },
        {
          name: "trip",
          text: "出行",
          path: "./trip",
          id:'5'
        },
        {
          name: "stationery",
          text: "文具",
          path: "./stationery",
          id:'6'
        },
        {
          name: "live",
          text: "家居",
          path: "./live",
          id:"7"
        },
        {
          name: "brand",
          text: "品牌",
          path: "./brand",
          id:'8'
        }
      ],
      //图标集合
      hiconlist: [
        {
          icon:"el-icon-s-home",
          text:"首页",
          path:'/home'
        },{
          icon:"el-icon-alarm-clock",
          text:"预售",
          path:"/presale"
        },{
          icon:"el-icon-data-analysis",
          text:"设计师",
          path:''
        },{
          icon:"el-icon-chat-line-round",
          text:"客服",
          path:"/server"
        },{
          icon:"el-icon-user",
          text:"我的",
          path:"/mine"
        }
      ],
      currter: "selert"
    };
  },
  components: {
    selert,
    cloth,
    collocation,
    digital,
    kitchen,
    trip,
    stationery,
    live,
    brand
  },
  methods: {
    goto(name) {
      this.currter = name
    },
    Hfgoto(path){
       this.$router.push(path);
    },
    gotocart(path){
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}
.icon {
  font-size: 30px;
}
.el-header {
  width: 100%;
  background-color: rgba(255, 215, 29);
  height: 54px;
  z-index: 100;
  position: fixed;
  top: 0;
  padding: 0;
}
.header-left {
  float: left;
  padding-top: 16px;
  padding-left: 10px;
}
.header-middle {
  display: inline-block;
  font-size: 16px;
  text-align: center;
  margin-left: 35%;
  margin-top: 10px;
}
.header-right {
  float: right;
  padding-top: 16px;
  padding-right: 10px;
}
.hnav {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  overflow: auto;
  position: fixed;
  top: 44px;
  z-index: 100;
  background: white;
}
.hnav li {
  width: 68px;
  height: 100%;
  flex-shrink: 0;
  line-height: 40px;
}
.el-main {
  margin-top: 104px;
  padding: 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 16px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.footer {
  width: 100%;
  background-color: rgba(247, 247, 247);
  height: 50px;
  position: fixed;
  bottom: 0;
}
.iconText{
  font-size: 10px;
  margin: 0;
}
.footer .Hfooter {
  padding-left: 0;
  width: 100%;
  margin-top: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.footer .Hfooter li {
  width: 100%;
  text-align: center;
}
</style>