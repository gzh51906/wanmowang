<template>
  <div>
    <el-button
      slot="reference"
      type="success"
      icon="el-icon-circle-plus"
      @click="Haddclass('addclass')"
    >添加</el-button>
    <el-popover placement="top" width="160" v-model="visible">
      <p>确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
        <el-button type="primary" size="mini" @click="removemore(visible)">确定</el-button>
      </div>
      <el-button slot="reference" type="danger" icon="el-icon-delete">删除</el-button>
    </el-popover>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      :default-sort="{prop: ['num','time'], order: 'descending'}"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" label="#" width="120"></el-table-column>
      <el-table-column label="商品类型" width="120">
        <template slot-scope="scope">
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link" @click="hTypelis(scope.row.name)">
              {{ scope.row.name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in clothTpye" :key="item" :command="item">
                <template>{{ item }}</template>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
      <el-table-column prop="num" label="数量" sortable show-overflow-tooltip></el-table-column>
      <el-table-column prop="time" label="时间" sortable show-overflow-tooltip>
        <template slot-scope="scope">{{ scope.row.time.slice(0,10) }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button
              size="small"
              type="primary"
              icon="el-icon-edit"
              round
              @click="Haddtype('addtype',scope.row._id)"
            >编辑</el-button>
            <el-button
              @click="removeOne(scope.row._id)"
              size="small"
              type="danger"
              icon="el-icon-delete"
              round
            >删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      clothTpye: [],
      typeNum: "",
      visible: false,
      newdata: "",
      newlis: []
    };
  },
  async created() {
    let {
      data: { data }
    } = await this.$axios.get("http://49.232.25.17:1901/hrl/classtype");
    this.tableData = data;
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async handleCommand(command) {
      let {
        data: { data }
      } = await this.$axios.get("http://49.232.25.17:1901/hrl/classnum", {
        params: {
          title: command
        }
      });
      this.typeNum = data.length;
    },
    async hTypelis(type) {
      // console.log(type);
      let {
        data: { data }
      } = await this.$axios.get("http://49.232.25.17:1901/hrl/class", {
        params: {
          type: type
        }
      });
      this.typeNum = data.length;
      this.clothTpye = data[0].type;
    },
    Haddclass(path) {
      if (this.$store.state.common.insert) {
        this.$router.push(path);
      } else {
        alert("权限不足");
      }
    },
    Haddtype(path, id) {
      if (this.$store.state.common.update) {
        this.$router.push({ path, query: { id: id } });
      } else {
        alert("权限不足");
      }
    },
    //删除单个
    async removeOne(id) {
      if (this.$store.state.common.delete) {
        let {
          data: { data }
        } = await this.$axios.delete(
          "http://49.232.25.17:1901/hrl/classremove",
          {
            params: {
              _id: id
            }
          }
        );
        let datatype = await this.$axios.get(
          "http://49.232.25.17:1901/hrl/classtype"
        );
        this.tableData = datatype.data.data;
      } else {
        alert("权限不足");
      }
    },
    //删除所勾选的
    async removemore(visible) {
      if (this.$store.state.common.delete) {
        this.visible = false;
        for (let i = 0; i < this.multipleSelection.length; i++) {
          let {
            data: { data }
          } = await this.$axios.delete(
            "http://49.232.25.17:1901/hrl/classremoves",
            {
              params: {
                _id: this.multipleSelection[i]._id
              }
            }
          );
        }
        let datatypes = await this.$axios.get(
          "http://49.232.25.17:1901/hrl/classtype"
        );
        this.tableData = datatypes.data.data;
      } else {
        alert("权限不足");
      }
    }
  }
};
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>