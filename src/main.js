// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './components'
import {Validator} from './assets/js/validator'
// import './config/axios'
// import Vconsole from 'vconsole';
// const vConsole = new Vconsole();

Vue.use(api);


Vue.prototype.$validator = Validator;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
