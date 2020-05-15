import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './static/css/font.scss'
import './static/css/index.scss'

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://www.yezhikang.site:8081/';
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
