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
        <img src="./edit_black_24dp.svg" alt="change" />
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
      <button @click="() => TogglePopup('addCurrencyTrigger')">
        <img src="./add_black_24dp.svg" alt="Add" />
      </button>
    </div>

    <Popup
      v-if="popupTriggers.baseCurrencyTrigger"
      :TogglePopup="() => TogglePopup('baseCurrencyTrigger')"
      :availableCurrencies="availableCurrencies"
      v-on:currency:selected="
        (currency) => {
          replaceField(currency, this.baseCurrencyCode);
          this.baseCurrencyCode = currency;
        }
      "
      ><h4>Change base currency</h4></Popup
    >

    <Popup
      v-if="popupTriggers.addCurrencyTrigger"
      :TogglePopup="() => TogglePopup('addCurrencyTrigger')"
      :availableCurrencies="
        Object.values(this.availableCurrencies).filter(
          (currency) => this.selectedCurrencies.indexOf(currency.code) == -1
        )
      "
      v-on:currency:selected="
        (currency) => {
          this.selectedCurrencies.push(currency);
        }
      "
      ><h4>Add new currency</h4></Popup
    >
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
      selectedCurrencies: [],
      availableCurrencies: [],
      currencyRates: [],

      removeField: (itemIndex) => {
        this.selectedCurrencies.splice(itemIndex, 1);
      },

      replaceField: (oldItem, newItem) => {
        this.selectedCurrencies = this.selectedCurrencies.map((element) => {
          return element == oldItem ? newItem : element;
        });
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
      fetch("https://api.exchangerate.host/symbols")
        .catch(() => {
          alert("There was an an retrieving currencies. Try refreshing the site");
        })
        .then((response) => response.json()),

    getRatesForCurrency: (currency) =>
      fetch("https://api.exchangerate.host/rates?base=" + currency)
        .catch(() => {
           alert("There was an an retrieving rates. Try refreshing the site");
        })
        .then((response) => response.json()),
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
