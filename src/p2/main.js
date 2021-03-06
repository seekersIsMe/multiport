// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Animated from 'animate.css'
import i18n from '../i18n'
import BUS from '../util/bus'
const Velocity = require('velocity-animate/velocity.js')
require('velocity-animate/velocity.ui.js')
BUS(Vue)
Vue.prototype.$Velocity = Velocity
Vue.use(ElementUI)
Vue.use(Animated)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: {App},
  template: '<App/>'
})
