import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@progress/kendo-ui'

import '@progress/kendo-theme-default/dist/all.css'

import { Scheduler } from '@progress/kendo-scheduler-vue-wrapper'
// import { SchedulerResource } from '@progress/kendo-scheduler-vue-wrapper'
// import { SchedulerView } from '@progress/kendo-scheduler-vue-wrapper'
import { SchedulerInstaller } from '@progress/kendo-scheduler-vue-wrapper'

Vue.use(SchedulerInstaller)

Vue.config.productionTip = false

new Vue({
  Scheduler,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
