<template>
  <div class="popup">
    <div class="popup-inner">
      <Dropdown 
        :possibleCurrencies="availableCurrencies" 
        v-on:currency:selected="(currencyCode) => {passEvent(currencyCode)}" 
      />
      <button class="popup-close" @click="TogglePopup()">Close</button>
      <button class="popup-close" @click="TogglePopup(), Submitt()">Ok</button>
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";

export default {
  props: ["TogglePopup", "availableCurrencies"],
  components: { Dropdown },
  methods: {
    selectedCode: "",

    passEvent(code) {
      this.selectedCode = code;
    },

    Submitt() {
      if(this.selectedCode) {
        this.$emit('currency:selected', this.selectedCode);
      }
        
    }
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  .popup-inner {
    background: #fff;
    padding: 32px;
  }
}
</style>