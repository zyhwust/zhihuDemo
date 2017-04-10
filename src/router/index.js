import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import zh_header from '@/components/zh_header'


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
