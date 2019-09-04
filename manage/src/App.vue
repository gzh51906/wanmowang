<template>
  <div id="app">
    <home v-if="usercheck"></home>
    <login v-else></login>
  </div>
</template>

<script>
import home from "./pages/home.vue";
export default {
  name: "app",
  data() {
    usercheck: false;
  },
  components: {
    home
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
#app {
}
</style>
