import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
//import database from "./database";
import {
  remote
} from "electron";


Vue.config.productionTip = false

Vue.prototype.$electron = remote;
//Vue.prototype.$db = database;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')