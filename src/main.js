import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate';
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  render: h => h(App)
})
