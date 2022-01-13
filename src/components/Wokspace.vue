<template>
  <div class="workspace">
    <currency-field />
    <div class="vl"></div>
    <currency-field />
    <currency-field />
    <currency-field />
    <currency-field />
    <currency-field />
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
  min-width: 19rem;
  width: 66vw;
  height: 33vh;
  background-color: white;
  border-radius: 5px;
}

.vl {
  border-bottom: 1px solid $material_green_light;
  width: 95%;
  margin: auto;
}
</style>
