import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zfb from '@/components/zfb'
import loading from '@/components/loading'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/zfb',
      name: 'zfb',
      component: zfb
    }, {
    path: '/loading',
      name:'loading',
      component:loading
    }
  ]
})
