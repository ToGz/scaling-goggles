import { createApp } from 'vue'
import VueSelect from 'vue-next-select';
import 'vue-next-select/dist/index.min.css'
import App from './App.vue'

let app = createApp(App);
app.component('vue-select', VueSelect);
app.mount('#app')
