<template>
  <div v-if="type">
    <div class="topSearch">
      <el-button type="danger" @click="remove">
        <i class="el-icon-delete"></i> 删除
      </el-button>
      <div class="search">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          class="input-with-select"
          @keyup.13.native="searchBtn"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="用户名" value="username"></el-option>
            <el-option label="邮箱地址" value="email"></el-option>
            <el-option label="性别" value="gender"></el-option>
            <el-option label="职业" value="job"></el-option>
            <el-option label="所在城市" value="city"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="searchBtn"></el-button>
        </el-input>
      </div>
    </div>
    <div class="content">
      <el-table
        ref="multipleTable"
        :data="data"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        border
      >
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column label="用户名" show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.username }}</template>
        </el-table-column>
        <el-table-column prop="email" label="邮箱地址" show-overflow-tooltip></el-table-column>
        <el-table-column prop="gender" label="性别"></el-table-column>
        <el-table-column prop="job" label="职业" show-overflow-tooltip></el-table-column>
        <el-table-column prop="city" label="所在城市"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="edit(scope.row)">
              <i class="el-icon-edit"></i> 编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="pageChange"
        background
        layout="prev, pager, next"
        :total="pageNum"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: false,
      input: "",
      select: "",
      multipleSelection: [],
      data: "",
      pageNum: 10
    };
  },
  async beforeMount() {
    let data = await this.$axios.get(
      "http://127.0.0.1:1901/crx/manage_userGet"
    );
    this.$store.commit("getData", data.data.data);
    this.data = this.$store.state.userlist.data.slice(0, 8);
    if (this.$store.state.userlist.data.length % 8 !== 0) {
      this.pageNum = Math.ceil(this.$store.state.userlist.data.length / 8) * 10;
    } else {
      this.pageNum = (this.$store.state.userlist.data.length / 8) * 10;
    }
    this.type = true;
  },
  methods: {
    async searchBtn() {
      if (this.select) {
        let result;
        if (this.select === "email") {
          result = await this.$axios.get(
            "http://127.0.0.1:1901/crx/manage_userGet",
            {
              params: {
                email: this.input
              }
            }
          );
        } else if (this.select === "username") {
          result = await this.$axios.get(
            "http://127.0.0.1:1901/crx/manage_userGet",
            {
              params: {
                username: this.input
              }
            }
          );
        } else if (this.select === "gender") {
          result = await this.$axios.get(
            "http://127.0.0.1:1901/crx/manage_userGet",
            {
              params: {
                gender: this.input
              }
            }
          );
        } else if (this.select === "job") {
          result = await this.$axios.get(
            "http://127.0.0.1:1901/crx/manage_userGet",
            {
              params: {
                job: this.input
              }
            }
          );
        } else if (this.select === "city") {
          result = await this.$axios.get(
            "http://127.0.0.1:1901/crx/manage_userGet",
            {
              params: {
                city: this.input
              }
            }
          );
        }
        this.$store.commit("getData", result.data.data);
        if (this.$store.state.userlist.data.length % 8 !== 0) {
          this.pageNum =
            Math.ceil(this.$store.state.userlist.data.length / 8) * 10;
        } else {
          this.pageNum = (this.$store.state.userlist.data.length / 8) * 10;
        }
        this.pageChange();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageChange(val) {
      var val = val || 1;
      let num = val - 1;
      this.data = this.$store.state.userlist.data.slice(num * 8, num * 8 + 8);
    },
    async remove() {
      if (this.$store.state.common.delete) {
        this.$store.commit("removeData", this.multipleSelection);
        if (this.$store.state.userlist.data.length % 8 !== 0) {
          this.pageNum =
            Math.ceil(this.$store.state.userlist.data.length / 8) * 10;
        } else {
          this.pageNum = (this.$store.state.userlist.data.length / 8) * 10;
        }
        this.pageChange();
        this.multipleSelection.forEach(item => {
          this.$axios.delete("http://127.0.0.1:1901/crx//manage_userRemove", {
            params: {
              _id: item._id
            }
          });
        });
      } else {
        alert("权限不足");
      }
    },
    edit(data) {
      if (this.$store.state.common.update) {
        this.$router.push({
          path: "/userEdit",
          query: {
            id: data._id
          }
        });
      } else {
        alert("权限不足");
      }
    }
  }
};
</script>
<style scoped>
.topSearch {
  overflow: hidden;
  padding: 20px 50px;
}
.topSearch > .el-button {
  float: left;
}
.search {
  float: left;
  margin-left: 40px;
}
.search .el-input {
  width: 500px;
}
.search .el-input .el-select {
  width: 125px;
}
</style>