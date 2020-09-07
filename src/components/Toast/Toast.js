//用这种方法写的是在Vue实例中的对象方法,不用写在html结构中的,用方法控制的
import ToastComponent from './Toast.vue'

const Toast = {}

/* 
1、创建一个空对象，这个对象就是日后要使用到的插件的名字。此外，这个对象中要有一个install的函数。
2、使用vue的extend方法创建一个插件的构造函数（可以看做创建了一个vue的子类），实例化该子类，之后的所有操作都可以通过这个子类完成。
3、之后再Vue的原型上添加一个共用的方法。 
*/
Toast.install = function (Vue) {
  // 生成一个Vue的子类
  // 同时这个子类也就是组件
  const ToastConstructor = Vue.extend(ToastComponent)
  const instance = new ToastConstructor()

  // 将这个实例挂载在我创建的div上
  // 并将此div加入全局挂载点内部
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法
  Vue.prototype.$toast = (msg, duration = 2000) => {
    instance.message = msg
    instance.show = true

    setTimeout(() => {
      instance.show = false
    }, duration)

  }

}

export default Toast