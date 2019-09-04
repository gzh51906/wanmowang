<template>
  <div id="app">
    <home v-if="$store.state.common.userCheck"></home>
    <login v-else></login>
  </div>
</template>

<script>
import home from "./pages/home.vue";
import login from "./pages/login.vue";
export default {
  name: "app",
  components: {
    home,
    login
  },
  created() {
    let usercheck = localStorage.getItem("usercheck");
    if (usercheck) {
      this.usercheck = true;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
