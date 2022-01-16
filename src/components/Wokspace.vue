<template>
  <div class="workspace">
    <div
      style="display: inline-flex; justify-content: space-between; margin: 1px"
    >
      <currency-info
        :currencyCode="baseCurrencyCode"
        :currencyName="availableCurrencies[baseCurrencyCode]?.description ?? ''"
      />
      <CurrencyInputField v-model:amount="baseCurrencyAmount" />

      <button @click="() => TogglePopup('baseCurrencyTrigger')">
        <img src="./edit_black_24dp.svg" alt="My Happy SVG" />
      </button>
    </div>

    <div class="divider"></div>

    <div class="rates" v-for="(item, index) in selectedCurrencies" :key="item">
      <currency-field
        :currencyCode="item"
        :currencyName="availableCurrencies[item]?.description ?? ''"
        :currencyAmount="currencyRates[item] * baseCurrencyAmount"
        v-on:field:remove="removeField(index)"
      />
    </div>

    <div class="field-prop">
      <button
        @click="() => TogglePopup('addCurrencyTrigger')"
      >
        <img src="./add_black_24dp.svg" alt="My Happy SVG" />
      </button>
    </div>

    <Popup
      v-if="popupTriggers.baseCurrencyTrigger"
      :TogglePopup="() => TogglePopup('baseCurrencyTrigger')"
      :availableCurrencies="availableCurrencies"
      v-on:currency:selected="
        (currency) => {
          this.baseCurrencyCode = currency;
        }
      "
    />
    <Popup
      v-if="popupTriggers.addCurrencyTrigger"
      :TogglePopup="() => TogglePopup('addCurrencyTrigger')"
      :availableCurrencies="availableCurrencies"
      v-on:currency:selected="
        (currency) => {
          this.selectedCurrencies.push(currency);
        }
      "
    />
  </div>
</template>

<script>
import { ref } from "vue";
import CurrencyField from "./CurrencyField/CurrencyField.vue";
import CurrencyInfo from "./CurrencyField/CurrencyInfo.vue";
import CurrencyInputField from "./CurrencyField/CurrencyInputField.vue";
import Popup from "./Popup.vue";

export default {
  components: { CurrencyField, CurrencyInfo, CurrencyInputField, Popup },
  name: "MainWorkspace",
  props: {},
  data: function () {
    return {
      baseCurrencyCode: String,
      baseCurrencyAmount: Number,
      selectedCurrencies: ["CAD", "USD", "HUF", "PLN"],
      availableCurrencies: [],
      currencyRates: [],

      removeField: (item) => {
        this.selectedCurrencies.splice(item, 1);
      },
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

  setup() {
    const popupTriggers = ref({
      baseCurrencyTrigger: false,
      addCurrencyTrigger: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      Popup,
      popupTriggers,
      TogglePopup,
    };
  },
};
</script>

<style lang="scss" scoped>
.workspace {
  width: 26.5rem;
  background-color: white;
  border-radius: 5px;
}

.field-prop {
  text-align: right;
  width: 26.3rem;
  height: 2.2rem;
  margin-bottom: 3px;
}

.divider {
  border-bottom: 1px dotted $material_green_light;
  width: 95%;
  margin: auto;
}

.rates {
  display: flexbox;
  width: 100%;
}
</style>
