<template>
  <div v-if="type">
    <div class="header">
      <button class="back" @click="back">
        <i class="el-icon-back"></i>
      </button>
      <span>编辑商品</span>
      <button class="delete" @click="remove">
        <i class="el-icon-delete"></i>
      </button>
    </div>
    <div class="main">
      <ul>
        <li v-for="item in data" :key="item._id">
          <img :src="item.imgUrl" alt />
          <p>{{item.desc}}</p>
          <div>RMB {{(item.price*item.num).toFixed(2)}}</div>
          <span>
            <i class="el-icon-success" @click="select($event,item._id)"></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: false,
      data: "",
      selected: []
    };
  },
  async beforeMount() {
    let username = this.$store.state.common.username;
    let data = await this.$axios.get("http://127.0.0.1:1901/crx/read", {
      params: {
        username
      }
    });
    this.data = data.data.data;
    this.type = true;
  },
  methods: {
    back() {
      this.$router.push({
        path: "/cart",
        query: {
          targetUrl: this.$route.query.targetUrl
        }
      });
    },
    select(e, id) {
      e.target.classList.toggle("active");
      let has = e.target.className.includes("active");
      if (has) {
        if (this.selected.includes(id)) {
          return;
        } else {
          this.selected.push(id);
        }
      } else {
        let idx = this.selected.indexOf(id);
        this.selected.splice(idx, 1);
      }
    },
    async remove() {
      if (this.selected.length !== 0) {
        for (let i = 0; i < this.selected.length; i++) {
          let result = await this.$axios.delete(
            "http://127.0.0.1:1901/crx/remove",
            {
              params: { selected: this.selected[i] }
            }
          );
        }
        this.selected = [];
      }
    }
  }
};
</script>
<style scoped>
.main {
  background: rgb(239, 239, 244);
  min-height: 768px;
  margin-top: 44px;
  overflow: hidden;
}
.main > ul {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  overflow: hidden;
}
.main > ul > li {
  height: 234px;
  width: 45%;
  margin: 8px;
  float: left;
  border: 1px solid rgb(221, 221, 223);
  position: relative;
}
.main > ul > li > img {
  width: 100%;
  height: 169px;
}
.main > ul > li > p {
  font-size: 12px;
  font-weight: 600;
  padding: 0 16px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 6px;
}
.main > ul > li > div {
  font-size: 12px;
  text-align: center;
  padding: 0 16px;
  color: rgb(255, 221, 66);
}
.main > ul > li > span {
  display: block;
  position: absolute;
  right: -8px;
  top: -8px;
  border-radius: 50%;
}
.main > ul > li > span > i {
  display: block;
  font-size: 24px;
  color: white;
}
.main > ul > li > span > i.active {
  color: green;
}
.header {
  height: 44px;
  width: 100%;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  line-height: 44px;
  background: rgb(247, 247, 247);
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
}
.header .back {
  border: 0;
  background: rgb(247, 247, 247);
  float: left;
  font-size: 30px;
  margin: 6px 0 0 10px;
}
.header > span {
  float: left;
  margin-left: 105px;
}
.header .delete {
  border: 0;
  background: rgb(247, 247, 247);
  float: right;
  font-size: 30px;
  color: grey;
  margin: 5px 10px 0 0;
}
</style>