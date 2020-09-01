//与Toast相比,用这种方法写的是会存在于html结构中
//这个和toast的插件相比，简单了很多，依然是一个空对象，里面有一个install方法，然后在全局注册了一个组件
import LoadingComponent from './Loading.vue'
let Loading = {}

Loading.install = function (Vue) {
  Vue.component('loading', LoadingComponent)
}

export default Loading