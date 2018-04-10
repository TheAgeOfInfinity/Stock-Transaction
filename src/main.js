import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import { routes } from './routes.js'
import store from './store/store.js'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.root = 'https://vue-max-project.firebaseio.com/'

const router = new VueRouter({
  routes,
})

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
