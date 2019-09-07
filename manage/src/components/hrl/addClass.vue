<template>
  <div class="hrl">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="分类">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="添加">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
      </el-form-item>
      <el-form-item label="数量">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('class')">立即创建</el-button>
        <el-button @click="remove">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        desc: "",
        date1: ""
      }
    };
  },
  methods: {
    async onSubmit(path) {
      // console.log(this.form.name, this.form.desc);
      if (this.form.name === "") {
        alert("商品类型不能为空");
      } else if (this.form.date1 === "") {
        alert("时间不能为空");
      } else if (this.form.desc === "") {
        alert("数量不能为空");
      } else {
        this.$router.push({
          path
        });
        let {
          data: { data }
        } = await this.$axios.patch("http://49.232.25.17:1901/hrl/classtype", {
          num: this.form.desc,
          name: this.form.name,
          time: this.form.date1
        });
      }
    },
    remove() {
      this.form.name = "";
      this.form.desc = "";
      this.form.data1 = "";
    }
  }
};
</script>

<style scoped>
.hrl {
  width: 600px;
  margin-top: 20px;
}
</style>