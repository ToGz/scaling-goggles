<template>
    <div>
        <vue-select
            v-model="value"
            :options="options"
            label-by="description"
            searchable
            close-on-select
            clear-on-select
            v-on:closed="() => { $emit('currency:selected', value.code) }"
        />
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import VueSelect from 'vue-next-select'

export default {
    name: "Dropdown",
    props: {
        possibleCurrencies: Object
    },
    created() {  
      this.options = reactive(Object.values(this.possibleCurrencies));
  },
  setup() {
    const value = ref(0)
    const options = reactive([])
    return {
      value,
      options,
    }
  },
  components: {
    VueSelect,
  },
};
</script>