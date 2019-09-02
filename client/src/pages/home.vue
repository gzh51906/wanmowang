<template>
  <el-container>
    <el-header>Header</el-header>
    <el-menu
      :default-active="active"
      @select="changpage"
      router
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item v-for="item in hdatalist" :index="item.path" :key="item.name">{{item.text}}</el-menu-item>
    </el-menu>
    <el-main>Main</el-main>
    <el-footer>
      <ul v-for="item in hiconlist" :key="item" class="Hfooter">
        <li>
          <i :class="item"></i>
        </li>
      </ul>
    </el-footer>
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
*{list-style: none;}
.el-header {
  background-color: rgba(255, 215, 29);
  height: 54px;
}
.el-menu {
  width: 800px;
}
.el-main {
  background: white;
  height: 300px;
}
.el-footer {
  background-color: rgba(247, 247, 247);
  height: 50px;
}
.el-footer .Hfooter li {
  float: left;
}
</style>