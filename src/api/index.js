//axios 模块化 
import axios from 'axios'

//全局配置
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    //获取token
    var token = localStorage.getItem('token')
    if (token) {  //页面中如果有token
        //设置token
        config.headers.Authorization = token
        //或
        // config.headers['Authorization'] = token
    }

    return config;
}, function (error) { 
    // 对请求错误做些什么
    return Promise.reject(error);
});

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response;
//   }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   });


//管理api的操作
export const login = (username, password) => axios.post("/login", { username, password }) //导出登录请求
export const users = (pagenum, pagesize) => axios.get('/users', { params: { pagenum, pagesize } }) //导出users请求
