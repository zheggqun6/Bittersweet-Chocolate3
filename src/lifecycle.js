/*
 * @Author: zihao.chen
 * @Date: 2021-03-01 16:43:09
 * @LastEditors: zihao.chen
 * @LastEditTime: 2021-03-01 16:49:21
 * @Description: 生命周期
 */
export function lifecycleMixin(Vue){
  Vue.prototype._update = function (vnode){
    
  }
}

export function mountComponent(vm,el){
  // 调用render方法去渲染 el属性

  // 先调用render方法创建虚拟节点，再将虚拟节点渲染到页面上
  vm._update(vm._render())
}