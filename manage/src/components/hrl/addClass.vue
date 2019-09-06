<template>
  <div class="hrl">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="分类">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('class')">立即创建</el-button>
        <el-button>取消</el-button>
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
        desc: ""
      }
    };
  },
  methods: {
    onSubmit(path) {
    //   this.$router.push(path);
      console.log(this.form.name,this.form.desc);
      
    }
  }
};
</script>

<style scoped>
.hrl{
    width: 600px;
    margin-top: 20px;
}
</style>