import Vue from 'vue'
import App from './App.vue'
import HeimaUi from '../packages/index'

Vue.use(HeimaUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
