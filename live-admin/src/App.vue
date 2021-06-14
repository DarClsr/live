<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from "@/view/layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
