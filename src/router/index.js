import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
