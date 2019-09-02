<template>
  <div class="mine">
    <div class="mine-head">
      <div class="touxiang">
        <a href>
          <img src="./image/default_user_icon.png" alt />
          <button>登录/注册</button>
        </a>
      </div>
      <div class="mine-msg">
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
              <div>动态</div>
              <p>0</p>
            </a>
          </li>
        </ul>
      </div>
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
}
.mine-head {
  display: flex;
  width: 100%;
  height: 180px;
  justify-content: center;
  align-content: center;
  background-image: url(./image/user_default_bg.jpg);
}
.touxiang img {
  width: 68px;
  height: 68px;
}
</style>