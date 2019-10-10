


// Vue.directive('bg', {
const directives={
  //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  bind: function (el, binding, vnode, oldVnode) {
    el.style.backgroundColor = binding.value
    el.onclick=function (params) {
      console.log('params', params)
    }
    console.log(binding);
    console.log(vnode);
    // name：指令名，不包括 v - 前缀。
    // value：指令的绑定值，例如：v - my - directive="1 + 1" 中，绑定值为 2。
    // oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
    // expression：字符串形式的指令表达式。例如 v - my - directive="1 + 1" 中，表达式为 "1 + 1"。
    // arg：传给指令的参数，可选。例如 v - my - directive: foo 中，参数为 "foo"。
    // modifiers：一个包含修饰符的对象。例如：v - my - directive.foo.bar 中，修饰符对象为 { foo: true, bar: true } 。
  },
  //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
  inserted: function () {},
  //所在组件的 VNode 更新时调用
  update: function () {},
  //指令所在组件的 VNode 及其子 VNode 全部更新后调用
  componentUpdated: function () {},
  //只调用一次，指令与元素解绑时调用
  unbind: function () {}
} 
export default directives



