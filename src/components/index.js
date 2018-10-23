import MInput from './MInput/MInput.vue'
import MForm from './MForm/MForm.vue'
import MPopup from './MPopup/MPopup.vue'
import MCell from './MCell/MCell.vue'

export default {
  install(Vue) {
    Vue.component('MInput', MInput);
    Vue.component('MForm', MForm);
    Vue.component('MPopup', MPopup);
    Vue.component('MCell', MCell);
  }
}
