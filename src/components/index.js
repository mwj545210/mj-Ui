import MInput from './MInput.vue'
import FormWrap from './FormWrap.vue'

export default {
  install(Vue) {
    Vue.component('MInput', MInput);
    Vue.component('FormWrap', FormWrap);
  }
}
