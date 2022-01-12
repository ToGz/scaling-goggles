<template>
  <main-workspace />
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
  background: $material_green;
}
</style>
