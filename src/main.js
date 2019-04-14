// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

//导入Vuex
import Vuex from 'vuex'
Vue.use(Vuex);
//vuex使用
var store = new Vuex.Store({
  state:{
    userInfoX:{}  
    
  },
  mutations:{
    addUserinfo(state,getInfo){  //登录时调用,将数据放在getInfo,然后存在state中
     
      state.userInfoX = getInfo

       // console.log(getInfo);
      // console.log( state.userInfoX);
    }
  },
  getters:{}
})



//安装完整的element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入公共css reset
import './styles/common.css' 

//路由全局导航守卫
router.beforeEach ((to, from, next) => {
  //校验是否登录
  let token = localStorage.getItem('token') //获取token

  // if(!token && to.path !== '/login'){  //如果页面没有token,并且不是登录页面
  //   return next({path:'/login'}) //跳转到登录页面
  // }
  if(!token && to.path !== '/login') return next({path:'/login'}) //简写 没有登录调回登录页
  if(token && to.path =='/login') return next({path:'/home'})     //简写 已经登录调回主页
   next()
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
