import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'

// Import custome style
import './styles/custom.scss'

Vue.use(BootstrapVue)
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
