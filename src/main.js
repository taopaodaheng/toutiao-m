import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
import './styles/index.css'
// 加载Vant核心组件库
import Vant from 'vant'
// 加载Vant全局样式
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
