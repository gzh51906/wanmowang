<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="pageData"
      tooltip-effect="dark"
      style="width: 100%"
      :default-sort="{prop: ['price','num'], order: 'descending'}"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="ID" width="120" show-overflow-tooltip>
        <template slot-scope="scope">{{ scope.row._id }}</template>
      </el-table-column>
      <el-table-column prop="desc" label="商品" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column prop="price" label="单价" sortable></el-table-column>
      <el-table-column prop="num" label="数量" sortable></el-table-column>
      <el-table-column label="运费">
        <template>{{ 0 }}</template>
      </el-table-column>
      <el-table-column label="总价">
        <template slot-scope="scope">{{ (scope.row.num * scope.row.price).toFixed(2) }}</template>
      </el-table-column>
      <el-table-column prop="username" label="购买者"></el-table-column>
      <el-table-column prop="complete" label="订单状态">
        <template slot-scope="scope">{{ scope.row.complete?'已完成':'未完成' }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button
              size="small"
              type="success"
              @click="complete(scope.row.complete,scope.row._id)"
            >完成</el-button>
            <el-button size="small" type="danger" @click="deleter(scope.row._id)">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
    <div class="block">
      <span class="demonstration">页码</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="4"
        background
        layout="prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      pageData: [],
      multipleSelection: [],
      currentPage3: 1
    };
  },
  async created() {
    let {
      data: { data }
    } = await this.$axios.get("http://127.0.0.1:1901/hrl/order");
    this.tableData = data;
    this.pageData = data.slice(0, 4);
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async deleter(goods_id) {
      if (this.$store.state.common.delete) {
        let {
          data: { data }
        } = await this.$axios.delete("http://127.0.0.1:1901/hrl/order", {
          params: {
            goods_id: goods_id
          }
        });

        let newData = await this.$axios.get("http://127.0.0.1:1901/hrl/order");
        this.tableData = newData.data.data;
        this.pageData = newData.data.data.slice(0, 4);
      } else {
        alert("权限不足");
      }
    },
    async complete(complete, id) {
      if (this.$store.state.common.update) {
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i]._id === id) {
            this.tableData[i].complete = true;
            this.$refs.multipleTable.setCurrentRow(id);
          }
        }
        let {
          data: { data }
        } = await this.$axios.patch("http://127.0.0.1:1901/hrl/order", {
          _id: id
        });
      } else {
        alert("权限不足");
      }
    },
    //分页功能
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      let newval = 4 * val;
      this.pageData = this.tableData.slice(newval - 4, newval);
    }
  }
};
</script>

<style scoped>
</style>