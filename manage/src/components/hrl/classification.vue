<template>
  <div>
    <el-button
      slot="reference"
      type="primary"
      icon="el-icon-circle-plus"
      @click="Haddclass('addclass')"
    >添加</el-button>
    <el-popover placement="top" width="160" v-model="visible">
      <p>确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
        <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
      </div>
      <el-button slot="reference" type="danger" icon="el-icon-delete">删除</el-button>
    </el-popover>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      :default-sort="{prop: 'num', order: 'descending'}"
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
      <el-table-column prop="num" label="数量" sortable show-overflow-tooltip>
        <template slot-scope="scope">{{ scope.row.num }}</template>
      </el-table-column>
      <el-table-column prop="time" label="时间" sortable show-overflow-tooltip></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
        <el-button-group>
          <el-button
            size="small"
            type="primary"
            icon="el-icon-edit"
            round
            @click="Haddtype('addtype',scope.row._id)"
          >修改</el-button>
          <el-button size="small" type="danger" icon="el-icon-delete" round>删除</el-button>
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
      newlis:[],
    };
  },
  async created() {
    let {
      data: { data }
    } = await this.$axios.get("http://127.0.0.1:1901/hrl/classtype");
    this.tableData = data;
    console.log(this.$route.query);
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async handleCommand(command) {
      let {
        data: { data }
      } = await this.$axios.get("http://127.0.0.1:1901/hrl/classnum", {
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
      } = await this.$axios.get("http://127.0.0.1:1901/hrl/class", {
        params: {
          type: type
        }
      });
      this.typeNum = data.length;
      this.clothTpye = data[0].type;
    },
    Haddclass(path) {
      this.$router.push(path);
    },
    Haddtype(path,id) {
      this.$router.push({path,query:{id:id}})
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