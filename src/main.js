import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './static/css/font.scss'
import './static/css/index.scss'
import TheNav from "./components/TheNav";
import TheFooter from "./components/TheFooter";
import marked from 'marked'
import hljs from 'highlight.js'
import './static/css/dark.scss'
import 'highlight.js/styles/a11y-dark.css'
Vue.component('TheNav', TheNav)
Vue.component('TheFooter', TheFooter)

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://www.yezhikang.site:8081/';
Vue.use(ElementUI)
Vue.prototype.$marked = marked;

Vue.directive('highlight',function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block)=>{
    hljs.highlightBlock(block)
  })
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
