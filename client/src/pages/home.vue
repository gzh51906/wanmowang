<template>
  <el-container>
    <el-header>
      <i class="el-icon-search icon header-left"></i>
      <div class="header-middle">
        商城
        <br />
        <span>STORE</span>
      </div>
      <i class="el-icon-shopping-cart-2 icon header-right"></i>
    </el-header>
    <div>
      <ul class="hnav">
        <li v-for="item in hdatalist" :key="item.name">{{item.text}}</li>
        <p class="slit"></p>
      </ul>
    </div>
    <el-main>
      <div class="block" width="100%">
        <el-carousel height="170px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="hauthor">
        <div class="hauthor-nav">
          <h4>精选设置商店<p>SELECTED STORE</p></h4>
        </div>
        <div>
          <ul class="authorList">
            <li>
              <div>
                <el-avatar
                  :size="78"
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
                <p>name</p>
                <i class="el-icon-circle-plus icon"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </el-main>
    <div class="footer">
      <ul class="Hfooter">
        <li v-for="item in hiconlist" :key="item">
          <i :class="item" class="icon"></i>
        </li>
      </ul>
    </div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      active: "/home",
      //导航集合
      hdatalist: [
        {
          name: "home",
          text: "精选",
          path: "./home"
        },
        {
          name: "cloth",
          text: "服饰",
          path: "./cloth"
        },
        {
          name: "collocation",
          text: "搭配",
          path: "./collocation"
        },
        {
          name: "digital",
          text: "数码",
          path: "./digital"
        },
        {
          name: "kitchen",
          text: "餐厨",
          path: "./kitchen"
        },
        {
          name: "trip",
          text: "出行",
          path: "./trip"
        },
        {
          name: "stationery",
          text: "文具",
          path: "./stationery"
        },
        {
          name: "live",
          text: "家居",
          path: "./live"
        },
        {
          name: "brand",
          text: "品牌",
          path: "./brand"
        }
      ],
      //图标集合
      hiconlist: [
        "el-icon-s-goods",
        "el-icon-message-solid",
        "el-icon-s-custom",
        "el-icon-chat-line-round",
        "el-icon-user"
      ]
    };
  },
  created() {
    // console.log(this.$router)
    this.active = this.$router.path;
  },
  methods: {
    changpage(index, path) {
      this.active = index;
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}

.el-header {
  width: 100%;
  background-color: rgba(255, 215, 29);
  height: 54px;
  position: fixed;
  top: 0;
}
.header-left {
  float: left;
  padding-top: 16px;
}
.header-middle {
  display: inline-block;
  font-size: 16px;
  text-align: center;
  margin-left: 108px;
  margin-top: 10px;
}
.header-right {
  float: right;
  padding-top: 16px;
}
.hnav {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  overflow: auto;
  position: fixed;
  top: 54px;
}
.hnav li {
  width: 68px;
  height: 100%;
  flex-shrink: 0;
}
.el-main {
  margin-top: 104px;
  padding: 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
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
.el-main .hauthor{
  height: 270px;
}
.el-main .hauthor-nav{
  text-align: center;
}
.el-main .hauthor-nav h4 p{
  margin:0;
  font-size: 12px;
  color: #99a9bf;
}
.el-main .authorList{
  text-align: center;
  padding: 0;
}
.footer {
  width: 100%;
  background-color: rgba(247, 247, 247);
  height: 50px;
  position: fixed;
  bottom: 0;
}
.icon {
  font-size: 30px;
}
.footer .Hfooter {
  padding-left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.footer .Hfooter li {
  width: 100%;
  text-align: center;
}
</style>