import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

function masking(mask, onlyNumber = false) {
  return function (e) {
    let symbols = new Set(mask.replace(/#/g, '').split(''))
    let maxLength = mask.length

    let str = e.srcElement.value.slice(0, maxLength)
    let unmaskedStr = str.split('').filter(s => !symbols.has(s))

    if (onlyNumber) {
      if (!parseInt( unmaskedStr[unmaskedStr.length - 1] )) {
        unmaskedStr.splice(unmaskedStr.length - 1, 1)
      }
    }

    let maskedStr = mask

    unmaskedStr.map(s => {
      maskedStr = maskedStr.replace(/#/, s)
    })

    if (maskedStr.indexOf('#') !== -1) {
      maskedStr = maskedStr.slice(0, maskedStr.indexOf('#'))
    }

    let reversedStr = maskedStr.split('').reverse()
    let firstIndexOfDigit = reversedStr.findIndex( s => !symbols.has(s))
    // if (firstIndexOfDigit !== 0) reversedStr.splice(0, firstIndexOfDigit)
    reversedStr.splice(0, firstIndexOfDigit >= 0 ? firstIndexOfDigit : 1)
    maskedStr = reversedStr.reverse().join('')

    e.srcElement.value = maskedStr
  }
}

Vue.directive('mask', {
  bind: function (el, binding, vnode) {
    let handler = masking(binding.value, true)
    el.addEventListener('input', handler)
    el.handler = handler
  },
  componentUpdated: function (el, binding, vnode) {
    el.removeEventListener('input', el.handler)

    let handler = masking(binding.value, true)
    el.addEventListener('input', handler)
    el.handler = handler
  },
  unbind: function (el, binding, vnode) {
    el.removeEventListener('input', masking(binding.value, true))
  }
})

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
