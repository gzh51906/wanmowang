<template>
  <div class="hrl">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
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
        name: ""
      }
    };
  },
  methods: {
    onSubmit(path) {
      this.$router.push(path)
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