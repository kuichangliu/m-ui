import Vue from 'vue'
import App from './App.vue'
// 导入插件
import mui from '../packages'

Vue.config.productionTip = false
Vue.use(mui)

new Vue({
  render: h => h(App),
}).$mount('#app')
