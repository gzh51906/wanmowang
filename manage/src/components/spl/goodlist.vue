<template>
  <div class="box">
    <div class="head">
      <el-button type="info" size="small" icon="el-icon-circle-plus" @click="goto">添加</el-button>
      <el-button type="danger" size="small" icon="el-icon-delete" @click="delgoods">删除</el-button>
      <el-input v-model="input" placeholder="请输入内容" @keyup.13.native="search(input)"></el-input>
      <el-select v-model="value" clearable placeholder="请选择分类" @click="search(value)">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="primary" @click="search(value)">搜索</el-button>
    </div>
    <div class="main">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="序号" width="120" prop="num" sortable>
          <template slot-scope="scope">{{ scope.row.num }}</template>
        </el-table-column>
        <el-table-column prop="id" label="商品编号" show-overflow-tooltip width="120"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="200" show-overflow-tooltip></el-table-column>

        <el-table-column label="图片" show-overflow-tooltip width="120">
          <template slot-scope="scope">
            <img :src="scope.row.imgurl" alt />
          </template>
        </el-table-column>

        <el-table-column prop="type" label="分类" show-overflow-tooltip width="120"></el-table-column>
        <el-table-column prop="price" label="价格(元)" width="120" sortable></el-table-column>

        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" circle @click="gotoEditor(scope.row)"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="remove(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="changePage"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "服饰"
        },
        {
          value: "搭配"
        },
        {
          value: "数码"
        },
        {
          value: "餐具"
        },
        {
          value: " 出行"
        },
        {
          value: " 文具"
        },
        {
          value: "居家"
        },
        {
          value: "品牌"
        }
      ],
      value: "",
      input: "",
      total: 10,
      goodsmsg: "",
      tableData: [],
      multipleSelection: []
    };
  },
  async created() {
    let { data } = await this.$axios({
      methods: "get",
      url: "http://127.0.0.1:1901/spl/goodlist"
    });
    this.tableData = data.data.slice(0, 6);
    this.total = parseInt((data.data.length / 6) * 10);

    for (var i = 0; i < 6; i++) {
      this.tableData[i] = {
        num: i + 1,
        name: data.data[i].data.result.title,
        type: data.data[i].type[0],
        id: data.data[i].data.result.designer.id,
        price: data.data[i].data.result.price,
        imgurl: data.data[i].data.result.picture,
        goods_id: data.data[i]._id
      };
    }
    //将数据存到Vuex的state
    this.$store.state.goods.data = data.data;
  },
  methods: {
    goto() {
      this.$router.push("/editor");
    },
    gotoEditor(goodsmsg) {
      this.$router.push({ path: "/editor", query: { goodsmsg } });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.goodsmsg = val;
    },
    async delgoods() {
      this.$store.commit("removeMoreItem", this.goodsmsg);
      this.changePage();
      let goods_id = this.goodsmsg.map(ele => {
        return ele.goods_id;
      });
      let { data } = await this.$axios.delete(
        "http://127.0.0.1:1901/spl/removeMoregoods",
        {
          params: {
            goods_id: goods_id
          }
        }
      );
    },
    changePage(page) {
      var page = page || 1;
      var index = page - 1;
      this.tableData = this.$store.state.goods.data.slice(
        index * 6,
        index * 6 + 6
      );
      for (var i = 0; i < this.tableData.length; i++) {
        this.tableData[i] = {
          num: i + 1,
          name: this.tableData[i].data.result.title,
          type: this.tableData[i].type[0],
          id: this.tableData[i].data.result.designer.id,
          price: this.tableData[i].data.result.price,
          imgurl: this.tableData[i].data.result.picture,
          goods_id: this.tableData[i]._id
        };
      }
    },
    async remove(goodsmsg) {
      this.$store.commit("removeItem", goodsmsg);
      this.changePage();
      let { data } = await this.$axios.delete(
        "http://127.0.0.1:1901/spl/removegoods",
        {
          params: {
            _id: goodsmsg.goods_id
          }
        }
      );
    },
    async search(val) {
      let { data } = await this.$axios({
        methods: "get",
        url: "http://127.0.0.1:1901/spl/search",
        params: { val: val }
      });
      this.$store.state.goods.data = data.data;
      this.changePage();
      this.total = parseInt((data.data.length / 6) * 10);
    }
  }
};
</script>
<style scoped>
.head {
  margin-top: 20px;
}
.el-input {
  width: 300px;
  margin-left: 100px;
  margin-right: 30px;
}
.el-select {
  margin-right: 30px;
}
.main {
  margin-top: 25px;
  border: 1px solid #ccc;
}
.page {
  margin-left: 250px;
  margin-top: 20px;
}
img {
  width: 40px;
  height: 40px;
}
</style>