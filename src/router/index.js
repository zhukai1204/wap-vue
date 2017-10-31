import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Mint)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register/:pid',
      name: 'Register',
      component: Register
    }
  ]
})
