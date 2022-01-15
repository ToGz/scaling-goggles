<template>
  <div class="workspace">
    <currency-field
      :currencyCode="baseCurrencyCode"
      :currencyName="availableCurrencies[baseCurrencyCode]?.description ?? ''"
      :currencyAmount="baseCurrencyAmount"
    />

    <!-- <h1>Vue Popups</h1>
    <button @click="() => TogglePopup('buttonTrigger')">Open Popup</button>
    <Popup
      v-if="popupTriggers.buttonTrigger"
      :TogglePopup="() => TogglePopup('buttonTrigger')"
    >
      <h2>My Button Popup</h2>
    </Popup> -->
    <div class="divider"></div>

    <div class="rates" v-for="item in selectedCurrencies" :key="item">
      <currency-field
        :currencyCode="item"
        :currencyName="availableCurrencies[item]?.description ?? ''"
        :currencyAmount="currencyRates[item] * baseCurrencyAmount"
      />
    </div>
  </div>
</template>

<script>
//import { ref } from "vue";
import CurrencyField from "./CurrencyField/CurrencyField.vue";
//import Popup from "./Popup.vue";

export default {
  components: { CurrencyField }, //Popup
  name: "MainWorkspace",
  props: {},
  data: function () {
    return {
      baseCurrencyCode: String,
      baseCurrencyAmount: Number,
      selectedCurrencies: ["CAD", "USD", "HUF", "PLN"],
      availableCurrencies: [],
      currencyRates: [],
    };
  },

  created() {
    (this.baseCurrencyCode = "EUR"),
    (this.baseCurrencyAmount = 10),
    this.getAvailableSymbols().then(
      (data) => (this.availableCurrencies = data.symbols)
    );
  },

  watch: {
    baseCurrencyCode(code) {
      this.getRatesForCurrency(code).then((data) => {
        this.currencyRates = data.rates;
      });
    },
  },

  methods: {
    getAvailableSymbols: () =>
      fetch("https://api.exchangerate.host/symbols").then((response) =>
        response.json()
      ),

    getRatesForCurrency: (currency) =>
      fetch("https://api.exchangerate.host/rates?base=" + currency).then(
        (response) => response.json()
      ),
  },

  // setup() {
  //   // const TogglePopup = (currencyCode) => {
  //   //   return fetch("" + currencyCode)
  //   //     .then((response) => response.json())
  //   //     .then((data) => (this.availableCurrencies = data.symbols));
  //   // };
  // }

  // setup() {
  //   const popupTriggers = ref({
  //     buttonTrigger: false,
  //     timedTrigger: false,
  //   });
  //   const TogglePopup = (trigger) => {
  //     popupTriggers.value[trigger] = !popupTriggers.value[trigger];
  //   };
  //   setTimeout(() => {
  //     popupTriggers.value.timedTrigger = true;
  //   }, 3000);
  //   return {
  //     Popup,
  //     popupTriggers,
  //     TogglePopup,
  //   };
  // },
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

.divider {
  border-bottom: 1px solid $material_green_light;
  width: 95%;
  margin: auto;
}

.rates {
  display: flexbox;
  width: 100%;
}
</style>
