<template>
  <div class="CurrencyInfo">
    <div class="flag container">
      <!-- currency-flag class required by the currency-flags package -->
      <div
        class="currency-flag"
        :class="'currency-flag-' + currencyCode.toLowerCase()"
      ></div>
    </div>
    <div class="description container">
      {{ this.currencyCode }} <br />
      {{ this.currencyName }}
    </div>
  </div>
</template>

<script>
import "/node_modules/currency-flags/dist/currency-flags.css";

export default {
  name: "CurrencyInfo",
  props: {
    currencyCode: String,
    currencyName: String,
  },
};
</script>

<style lang="scss" scoped>
.CurrencyInfo {
  display: inline-flex;
  flex-direction: row;
}

.currency-flag {
  height: 2rem;
  width: 3rem;

  border-color: gainsboro;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
}

.container {
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0.25rem;
}
</style>