import Vue from 'vue'
import Router from 'vue-router'


import loginComponent from '@/pages/login' //导入登录组件

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/login'},
    {path:'/login',component: loginComponent}
  ]
})
