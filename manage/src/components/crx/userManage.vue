<template>
  <div v-if="type">
    <div class="header">
      <el-button type="success" plain @click="manageAdd">
        <i class="el-icon-plus"></i> 添加
      </el-button>
    </div>
    <div class="content">
      <el-table ref="singleTable" :data="data" highlight-current-row style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column property="username" label="管理员"></el-table-column>
        <el-table-column label="管理权限">
          <template slot-scope="scope">{{ scope.row.manage ? "有" : "无" }}</template>
        </el-table-column>
        <el-table-column label="修改权限">
          <template slot-scope="scope">{{ scope.row.update ? "有" : "无" }}</template>
        </el-table-column>
        <el-table-column label="添加权限">
          <template slot-scope="scope">{{ scope.row.insert ? "有" : "无" }}</template>
        </el-table-column>
        <el-table-column label="删除权限">
          <template slot-scope="scope">{{ scope.row.delete ? "有" : "无" }}</template>
        </el-table-column>
        <el-table-column label="操作" width="170">
          <template slot-scope="scope">
            <el-button type="primary" plain size="mini" @click="manageEdit(scope.row)">
              <i class="el-icon-edit"></i>编辑
            </el-button>
            <el-button type="danger" plain size="mini" @click="manageRemove(scope.row)">
              <i class="el-icon-delete"></i>删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="pageNum" @current-change="pageChange"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: false,
      data: "",
      pageNum: 10
    };
  },
  async beforeMount() {
    let result = await this.$axios.get(
      "http://127.0.0.1:1901/crx/manage_userManage"
    );
    this.$store.commit("manageData", result.data.data);
    this.data = this.$store.state.manage.data.slice(0, 8);
    if (this.$store.state.manage.data.length % 8 !== 0) {
      this.pageNum = Math.ceil(this.$store.state.manage.data.length / 8) * 10;
    } else {
      this.pageNum = (this.$store.state.manage.data.length / 8) * 10;
    }
    this.type = true;
  },
  methods: {
    pageChange(val) {
      var val = val || 1;
      let num = val - 1;
      this.data = this.$store.state.manage.data.slice(num * 8, num * 8 + 8);
    },
    async manageRemove(val) {
      this.$store.commit("manageRemove", val);
      if (this.$store.state.manage.data.length % 8 !== 0) {
        this.pageNum = Math.ceil(this.$store.state.manage.data.length / 8) * 10;
      } else {
        this.pageNum = (this.$store.state.manage.data.length / 8) * 10;
      }
      this.pageChange();
      let result = await this.$axios.delete(
        "http://127.0.0.1:1901/crx/manage_removeManage",
        {
          params: {
            _id: val._id
          }
        }
      );
      if (val.username === localStorage.getItem("userCheck")) {
        this.$store.commit("removeUser");
        this.$router.push("/");
      }
    },
    manageEdit(val) {
      this.$router.push({
        path: "/manageEdit",
        query: {
          _id: val._id
        }
      });
    },
    manageAdd() {
      this.$router.push("/manageAdd");
    }
  }
};
</script>
<style scoped>
.header {
  padding: 20px 0 10px 50px;
}
</style>