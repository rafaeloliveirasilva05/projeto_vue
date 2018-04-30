import Vue from "vue";
import App from "./App";
import router from "./router";
import VueI18n from "vue-i18n";
import store from "../vuex/store";

import BootstrapVue from "bootstrap-vue";
import FullCalendar from "vue-full-calendar";

Vue.use(FullCalendar);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
