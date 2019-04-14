import Vue from 'vue'
import Router from 'vue-router'


import loginComponent from '@/pages/login' //导入登录组件
import homeComponent from '@/pages/home'   //导入首页
import usersComponent from '@/pages/home/users'   //导入首页下的users
import users2Component from '@/pages/home/users2' //导入首页下的users2
import users3Component from '@/pages/home/users3' //导入首页下的users3
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/login'},
    {path:'/login',component: loginComponent},
    {
      path:'/home',
      component:homeComponent,
      redirect:'/home/users', //进入home的时候重定向到users组件
      children:[
        { path: 'users', component: usersComponent }, //home下的子组件,children是个数组
        { path: 'users2', component: users2Component } ,
        { path: 'users3', component: users3Component } 
      ]
    }
  ]
})
