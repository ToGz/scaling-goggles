<template>
  <div class="workspace">
    <currency-field />
  </div>
</template>

<script>
import CurrencyField from "./CurrencyField/CurrencyField.vue";

export default {
  components: { CurrencyField },
  name: "MainWorkspace",
  props: {},
};
</script>

<style lang="scss" scoped>
.workspace {
  min-width: 16rem;
  width: 66vw;
  height: 33vh;
  background-color: white;
  border-radius: 5px;
}
</style>
