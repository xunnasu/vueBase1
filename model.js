function defineReactive(obj, key, val) {
  // 递归子属性
  Object.defineProperty(obj, key, {
    // 可枚举
    enumerable: true,
    // 可配置
    configurable: true,
    // 自定义函数
    get: function reactiveGetter() {
      console.log('get value')
      return val
    },
    set: function reactiveSetter(newVal) {
      console.log('change value')
      val = newVal
    }
  })
}
let data = {
  a: 1
}
defineReactive(data, 'a', data['a'])
data.a = 1111
console.log('data.a :>> ', data.a);



