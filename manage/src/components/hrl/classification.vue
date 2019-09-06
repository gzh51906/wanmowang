<template>
  <div>
    <el-button-group>
      <el-button type="primary" icon="el-icon-circle-plus">添加</el-button>
      <el-button type="primary" icon="el-icon-delete">删除</el-button>
    </el-button-group>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      :default-sort="{prop: 'num', order: 'descending'}"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="#" width="120"></el-table-column>
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
      <el-table-column  label="操作">
        <el-button-group>
          <el-button size="small" type="primary" icon="el-icon-edit" round>修改</el-button>
          <el-button size="small" type="danger" icon="el-icon-delete" round>删除</el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
    <!-- <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "服饰",
          num:''
        },
        {
          name: "搭配",
          num:''
        },
        {
          name: "数码",
          num:''
        },
        {
          name: "餐具",
          num:''
        },
        {
          name: " 出行",
          num:''
        },
        {
          name: " 文具",
          num:''
        },
        {
          name: "居家",
          num:''
        },
        {
          name: "品牌",
          num:''
        }
      ],
      multipleSelection: [],
      clothTpye: [],
      typeNum: ""
    };
  },
  async created() {
    //请求服饰的数据
    let {
      data: { data }
    } = await this.$axios.get("http://127.0.0.1:1901/hrl/class", {
      params: {
        type: "服饰"
      }
    });
    this.tableData[0].num = data.length;
    //请求搭配的数据
    let dpData = await this.$axios.get("http://127.0.0.1:1901/hrl/class", {
      params: {
        type: "搭配"
      }
    });
    this.tableData[1].num = dpData.data.data.length;
    //请求数码的数据
    let smData = await this.$axios.get("http://127.0.0.1:1901/hrl/class", {
      params: {
        type: "数码"
      }
    });
    this.tableData[2].num = smData.data.data.length;
    //请求餐厨的数据
    let ccData = await this.$axios.get("http://127.0.0.1:1901/hrl/class", {
      params: {
        type: "餐具"
      }
    });
    this.tableData[3].num = ccData.data.data.length;
    //请求出行的数据
    let cxData = await this.$axios.get("http://127.0.0.1:1901/hrl/class", {
      params: {
        type: " 出行"
      }
    });
    this.tableData[4].num = cxData.data.data.length;
    //请求文具的数据
    let wjData = await this.$axios.get("http://127.0.0.1:1901/hrl/class", {
      params: {
        type: " 文具"
      }
    });
    this.tableData[5].num = wjData.data.data.length;
    //请求居家的数据
    let jjData = await this.$axios.get("http://127.0.0.1:1901/hrl/class", {
      params: {
        type: "居家"
      }
    });
    this.tableData[6].num = jjData.data.data.length;
    //请求品牌的数据
    let ppData = await this.$axios.get("http://127.0.0.1:1901/hrl/class", {
      params: {
        type: "品牌"
      }
    });
    this.tableData[7].num = ppData.data.data.length;
  },
  methods: {
    // toggleSelection(rows) {
    //   if (rows) {
    //     rows.forEach(row => {
    //       this.$refs.multipleTable.toggleRowSelection(row);
    //     });
    //   } else {
    //     this.$refs.multipleTable.clearSelection();
    //   }
    // },
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
      console.log(data)
      this.typeNum = data.length;
    },
    async hTypelis(type) {
      console.log(type);
      let {
        data: { data }
      } = await this.$axios.get("http://127.0.0.1:1901/hrl/class", {
        params: {
          type: type
        }
      });
      this.typeNum = data.length;
      this.clothTpye = data[0].type;
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