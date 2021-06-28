<template>
  <div id="app">
    <canberra-js text="asdf" />
  </div>
</template>

<script>
import CanberraJs from "./components/CanberraJs.vue";

export default {
  name: "App",
  components: {
    CanberraJs,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
