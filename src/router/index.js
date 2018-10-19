import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mInput from '@/pages/input/mInput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mInput',
      component: mInput
    }
  ]
})
