<template>
  <div class="currencyField">
    <currency-info :currencyCode="currencyCode" :currencyName="currencyName" />
    <div class="value-field">{{Number(Math.round(currencyAmount + 'e+2') + 'e-2')}}</div>
    
    <button type="reset" @click="() => { $emit('field:remove') }">
      <img src = "./delete_outline_black_24dp.svg" alt="My Happy SVG"/>
    </button>
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
}

.value-field {
  text-align: right;
  width: 10rem;
  padding: 0.25rem;
}
</style>