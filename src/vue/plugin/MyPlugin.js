export default class MyPlugin{
    static install: () => void;
    constructor(){
    }
}
MyPlugin.install =function (Vue, options) {
  // 1. add global method or property
  Vue.myGlobalMethod = function () {
      console.log("call myGlobalMethod");
    // something logic ...
  }
  // 2. add a global asset
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // something logic ...
    }
  })
  // 3. inject some component options
  Vue.mixin({
    created: function () {
        console.log(
            123
        )
      // something logic ...
    }
  })
  // 4. add an instance method
  Vue.prototype.$myMethod = function (options) {
    // something logic ...
    console.log('call myMethod')
  }
  }
