<template>
  <div class="mine">
    <div class="mine-head">
      <div class="mine-head-bc">
        <div class="touxiang">
          <a href>
            <img src="./image/default_user_icon.png" alt />
            <button>登录/注册</button>
          </a>
        </div>
        <ul class="msg-ul">
          <li>
            <a href>
              <div>关注</div>
              <p>0</p>
            </a>
          </li>
          <li>
            <a href>
              <div>粉丝</div>
              <p>0</p>
            </a>
          </li>
          <li>
            <a href>
              <div style="border-right:none">动态</div>
              <p>0</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="buy">
      <div style="border-right:1px solid #ccc">
        <p>
          <i class="el-icon-document"></i>
        </p>
        <p>订单</p>
      </div>
      <div>
        <p>
          <i class="el-icon-shopping-cart-2"></i>
        </p>
        <p>购物车</p>
      </div>
    </div>
    <div class="server-type">
      <ul>
        <li>
          <i class="el-icon-truck"></i>
          <p>地址</p>
        </li>
        <li>
          <i class="el-icon-user"></i>
          <p>账号</p>
        </li>
        <li>
          <i class="el-icon-star-off"></i>
          <p>收藏</p>
        </li>
        <li>
          <i class="el-icon-headset"></i>
          <p>客服</p>
        </li>
        <li>
          <i class="el-icon-c-scale-to-original"></i>
          <p>AR</p>
        </li>
        <li>
          <i class="el-icon-setting"></i>
          <p>设置</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style  scoped>
body {
  width: 100%;
  height: 100%;
  background-color: rgb(239, 239, 244);
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
.mine {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: rgb(239, 239, 244);
}
.mine-head {
  display: flex;
  width: 100%;
  height: 180px;
  justify-content: center;
  align-items: center;
  background-image: url(./image/user_default_bg.jpg);
  background-size: contain;
  background-color: rgb(161, 164, 166);
}
.mine-head-bc {
  display: flex;
  width: 100%;
  height: 180px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(161, 164, 166, 0.7);
}
.touxiang {
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.touxiang a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
}
.touxiang a button {
  width: 100px;
  height: 35px;
  text-align: center;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 5px;
}
.touxiang img {
  width: 68px;
  height: 68px;
  display: block;
}
.msg-ul {
  display: flex;
}
.msg-ul li {
  width: 75px;
  height: 71px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.msg-ul li a {
  color: #fff;
  font-size: 14px;
}
.msg-ul li a div {
  width: 65px;
  height: 30px;
  border-right: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.msg-ul li a p {
  display: flex;
  justify-content: center;
  align-items: center;
}
.buy {
  width: 100%;
  height: 75px;
  display: flex;
  background-color: #fff;
  margin-top: 20px;
}
.buy div {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(129, 128, 128);
}
.buy div i {
  display: block;
  font-size: 30px;
}
.buy div p:nth-child(2) {
  font-size: 14px;
}
.server-type {
  width: 100%;
  height: 150px;
  background-color: #fff;
  margin-top: 20px;
}
.server-type ul {
  display: flex;
  flex-wrap: wrap;
}
.server-type ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 75px;
  border-right: 1px solid rgb(239, 239, 244);
  box-sizing: border-box;
  border-bottom: 1px solid rgb(239, 239, 244);
  color: rgb(119, 116, 116);
}
.server-type ul li i {
  display: flex;
  width: 25px;
  height: 25px;
  font-size: 20px;
  justify-content: center;
}
</style>