<template>
  <main-workspace />
  <div class="desc">
    <h6>scaling-googles</h6>
    <h6>109261</h6>
  </div>
</template>

<script>
import MainWorkspace from "./components/Wokspace.vue";

export default {
  name: "App",
  components: {
    MainWorkspace,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: $material_green;
}

.desc {
  text-align: center;
}
</style>
