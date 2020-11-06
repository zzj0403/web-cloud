import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入全局样式
import './assets/css/global.css'

// axios
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.localStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
