<template>
  <div class="currencyField">
    <currency-info currencyCode="PLN" currencyName="Polish Zloty" />
    <div class="value-field">196.15</div>
  </div>
</template>

<script>
import CurrencyInfo from "./CurrencyInfo.vue";
export default {
  components: { CurrencyInfo },
  name: "CurrencyField",
  props: {},
};
</script>

<style lang="scss" scoped>
.currencyField {
  display: inline-flex;
  justify-content: space-between;

  //min-width: 15rem;
  //height: 3rem;

  margin: 1px;

  border-color: black;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: gray;
}

.value-field {
}
</style>