<template>
  <div class="input-field">
    <input
      :value="amount"
      @input="(event) => $emit('update:amount', event.target.value)"
      type="number"
    />
  </div>
</template>

<script>
export default {
  props: ["amount"],
};
</script>

<style lang="scss" scoped>
.input-field {
  padding: 0.25rem;
}

input {
  outline: 0;
  border-width: 0 0 1px;
  border-color: $material_orange_light;
  text-align: right;
  width: 9.5rem;
}
input:focus {
  border-color: $material_orange_dark;
}
</style>
