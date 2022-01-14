<template>
  <div class="workspace">
    <currency-field :currencyCode="'EUR'" :currencyName="'The Juro'" />

    <h1>Vue Popups</h1>
    <button @click="() => TogglePopup('buttonTrigger')">Open Popup</button>
    <Popup
      v-if="popupTriggers.buttonTrigger"
      :TogglePopup="() => TogglePopup('buttonTrigger')"
    >
      <h2>My Button Popup</h2>
    </Popup>
    <div class="vl"></div>
    <currency-field :currencyCode="currencyCode" :currencyName="currencyName" />
    <currency-field :currencyCode="currencyCode" :currencyName="currencyName" />
    <currency-field :currencyCode="currencyCode" :currencyName="currencyName" />
    <currency-field :currencyCode="currencyCode" :currencyName="currencyName" />
    <currency-field :currencyCode="currencyCode" :currencyName="currencyName" />
    <currency-field :currencyCode="currencyCode" :currencyName="currencyName" />
  </div>
</template>

<script>
import { ref } from "vue";
import CurrencyField from "./CurrencyField/CurrencyField.vue";
import Popup from "./Popup.vue";

export default {
  components: { CurrencyField, Popup },
  name: "MainWorkspace",
  props: {},
  data: function () {
    return {
      availableCurrencies: [],
      currencyCode: "PLN",
      currencyName: "Polish Zloty",
    };
  },

  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    setTimeout(() => {
      popupTriggers.value.timedTrigger = true;
    }, 3000);
    return {
      Popup,
      popupTriggers,
      TogglePopup,
    };
  },

  created() {
    return fetch("https://api.exchangerate.host/symbols")
      .then((response) => response.json())
      .then((data) => (this.availableCurrencies = data.symbols));
  },
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
