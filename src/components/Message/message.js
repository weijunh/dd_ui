import MessageComponent from './Message.vue'
import Vue from 'vue'
// const Message = {}
/*
1、创建一个空对象，这个对象就是日后要使用到的插件的名字。此外，这个对象中要有一个install的函数。
2、使用vue的extend方法创建一个插件的构造函数（可以看做创建了一个vue的子类），实例化该子类，之后的所有操作都可以通过这个子类完成。
3、之后再Vue的原型上添加一个共用的方法。
*/

// 通过Vue的原型注册一个方法
// 让所有实例共享这个方法
Vue.prototype.$messageTip = (options) => {
    if(options === undefined){
        throw new Error('messageTips未传入提示信息')
    }else if(typeof options === 'string'){
        options={
            message:options
        }
    }else{
        options = options
    }
    let MessageConstructor = Vue.extend(MessageComponent)
    let instance = new MessageConstructor({
        data:options
    }).$mount()

    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    //instance.$el 为相对应模板的跟标签

    // instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    //dom更新完毕展示
    Vue.nextTick(() => {
        instance.show = true
    })
}

MessageComponent.install = (vue)=> {
    vue.component(MessageComponent.name, MessageComponent)
}

export default MessageComponent
