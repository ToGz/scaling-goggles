<template>
  <div class="workspace">
    <h2>Scaling-googles</h2>
    <CurrencyField />
  </div>
</template>

<script>
  import CurrencyField from './CurrencyField/CurrencyField.vue';

  export default {
  components: { CurrencyField },
    name: "Workspace",
    props: {},
  };
</script>

<style lang="scss" scoped>
  .workspace {
    width: 66vw;
    height: 33vh;
    background-color: white;
    border-radius: 5px;
  }
</style>
