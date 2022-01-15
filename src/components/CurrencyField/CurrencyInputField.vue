<template>
  <div class="input-field">
    <input
      :value="amount"
      @input="(event) => $emit('update:amount', event.target.value)"
      type="text"
    />
  </div>
</template>

<script>
export default {
  props: ["amount"],
};
</script>

<style lang="scss" scoped>
input {
  outline: 0;
  border-width: 0 0 1px;
  border-color: $material_orange_light;
  text-align: right;
}
input:focus {
  border-color: $material_orange_dark;
}
</style>
