import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import MessageTips from './components/Message/messageTips'

import Toast from './components/Toast/Toast'
import Loading from './components/Loading/index'

Vue.use(MessageTips)
Vue.use(Toast)
Vue.use(Loading)

//阻止启动生产消息，常用作指令 主要在console里面
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
