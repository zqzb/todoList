import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import add from '@/components/add'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'/add',
          name:'add',
          component:add
        },
        {
          path:'/test',
          component:test
        }
      ]
    },
    
  ]
})
