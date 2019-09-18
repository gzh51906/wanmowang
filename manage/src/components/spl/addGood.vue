<template>
  <div class="box">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="form.name" placeholder="请输入商品标题" @change="goodname(form.name)"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.price" placeholder="请输入商品价格" @change="goodprice(form.price)" ></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="form.type" placeholder="请选择分类" @change="select(form.type)">
          <el-option :label="item.value" :value="item.value" v-for="item in options" :key="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品图片">
        <div class="demo-image">
          <div class="block" v-for="(fit,idx) in fits" :key="idx">
            <el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="商品描述">
        <textarea placeholder="请输入内容" cols="80" rows="10"></textarea>
      </el-form-item>
      <el-button type="primary" size="medium" @click="gotogoodlist">确定</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        type: "",
        price: "",
        
      },
      textarea: "",
      value: "",
      goodsmsg: "",
      options: [
        { value: "服饰" },
        { value: "搭配" },
        { value: "数码" },
        { value: "餐具" },
        { value: "出行" },
        { value: "文具" },
        { value: "居家" },
        { value: "品牌" }
      ],
      fits: ["cover", "cover", "cover", "cover"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  },
  mounted() {
   
    
    // this.goodsmsg = this.$route.query.goodsmsg || "";
    // this.form.name = this.goodsmsg.name || "";
    // this.form.price = this.goodsmsg.price || "";
    // this.url =
    //   this.goodsmsg.imgurl ||
    //   "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
    // this.form.type = this.goodsmsg.type || "";
    
  
    
  },
  methods: {
   async gotogoodlist() {
      
     
      let {data}= await this.$axios({
        methods:"get",
        url: "http://127.0.0.1:1901/spl/add",
        params:{
          name:this.form.name,
          type:this.form.type,
          price:this.form.price,
          image:this.url
         
        }
      })
      console.log(data);
      
      this.$store.state.goods.data = data;
       this.$router.push("/goodlist");
    
      
    },
    select(value){  
      this.form.type=value
    // console.log(value);
    
    },
    goodname(value){
    this.form.name=value
    // console.log(value);
    },
    goodprice(value){
     this.form.price=value
    // console.log(value);
      
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  margin-top: 30px;
}
.el-input {
  width: 300px;
}
.el-form .el-form-item:nth-child(2) .el-input {
  width: 150px;
}
img {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
.block {
  display: inline-block;
  margin-right: 30px;
}
.el-button {
  width: 200px;
  height: 50px;
  margin-left: 76px;
}
textarea {
  padding: 10px;
}
</style>