<template>
  <div class="currencyInfo">
    <div class="currency-flag" :class="currencyFlagDescriptor"></div>
    <div>
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
  data() {
    return {
      currencyFlagDescriptor:
        "currency-flag-" + this.currencyCode.toLowerCase(),
    };
  },
};
</script>

<style lang="scss" scoped>
.currency-flag {
  display: inline-flex;
  flex-direction: row;

  height: 2.5rem;
  width: 2.5rem;

  border-color: gray;
  border-style: solid;
  border-width: 1px;
  border-radius: 50%;
}
</style>