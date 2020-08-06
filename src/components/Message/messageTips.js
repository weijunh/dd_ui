
import Vue from 'vue'
import MessageTips from './Message.vue'
Vue.prototype.$messageTips = (options) => {
  //options为调用时的传入的参数
  if (options === undefined) {
    throw new Error('messageTips未传入提示信息')
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      message: options
    }
  } else if (typeof options === 'object') {
    options = options
  }

  //创建一个实例
  let message = Vue.extend(MessageTips)

  //挂载
  let component = new message({
    data: options
  }).$mount()
  document.body.appendChild(component.$el)

  //dom更新完毕展示
  Vue.nextTick(() => {
    component.show = true
  })
}
// Vue.js 的插件应该暴露一个 install 方法
MessageTips.install = (vue) => {
  vue.component(MessageTips.name, MessageTips)
}
export default MessageTips