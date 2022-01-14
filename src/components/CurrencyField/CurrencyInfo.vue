<template>
  <div class="CurrencyInfo">
    <div class="container">
      <!-- currency-flag class required by the currency-flags package -->
      <div
        class="currency-flag"
        :class="'currency-flag-' + currencyCode.toLowerCase()"
      ></div>
    </div>
    <div class="description container">
      <div class="code">
        {{ this.currencyCode }}
        <!-- Icons will need to be moved to assets and switched into SVGs - they didn't work correctly, additional configuration needed -->
        <img src="./outline_keyboard_arrow_down_black_24dp.png" />
      </div>
      <div>
        {{ this.currencyName }}
      </div>
    </div>
  </div>
</template>

<script>
import "/node_modules/currency-flags/dist/currency-flags.css";
// import KeyboardArrowDown from '/src/assets/icons/keyboard_arrow_down_black_24dp.svg';

export default {
  name: "CurrencyInfo",
  // components: {
  //   KeyboardArrowDown
  // },
  props: {
    currencyCode: String,
    currencyName: String,
  },
};
</script>

<style lang="scss">
.CurrencyInfo {
  display: inline-flex;
}

.code {
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
}

.description {
  display: flexbox;
  flex-direction: column;
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