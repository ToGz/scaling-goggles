<template>
  <div class="currencyField">
    <currency-info :currencyCode="currencyCode" :currencyName="currencyName" />
    <div class="value-field">{{currencyAmount}}</div>
  </div>
</template>

<script>
import CurrencyInfo from "./CurrencyInfo.vue";
export default {
  components: { CurrencyInfo },
  name: "CurrencyField",
  props: {
      currencyCode: String,
      currencyName: String,
      currencyAmount: Number,
  },
};
</script>

<style lang="scss" scoped>
.currencyField {
  display: inline-flex;
  justify-content: space-between;

  margin: 1px;

  // border-color: black;
  // border-width: 1px;
  // border-style: solid;
  // border-radius: 5px;
  // border-color: gray;
}

.value-field {
  text-align: right;
  width: 10rem;
  padding: 0.25rem;
}
</style>