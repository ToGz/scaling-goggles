<template>
  <Menu msg="Welcome to Yous"/>
</template>

<script>
import Menu from './components/Menu.vue'


export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style lang="scss">
  #app {
    height: 100%;
    text-align: center;
    background: $backq;
  }
</style>
