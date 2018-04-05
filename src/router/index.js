import Vue from 'vue'
import Router from 'vue-router'
import Visualization from '@/components/Visualization'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Visualization
    }
  ]
})
