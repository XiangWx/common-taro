import axios from 'axios'
import router from '../router'
axios.defaults.timeout = 20000
//axios.defaults.withCredentials = true //跨域时需要凭证

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.data.code ==  '99999999' ){
        localStorage.removeItem('token')
        router.push('/')
    }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export function post(url,params){
    return new Promise((resolve,reject)=>{
        axios({
            method:'POST',
            url,
            data:params,
            headers:{
                token:localStorage.getItem('token') || ''
            },
            validateStatus: function (status) {
               if(status > 500){
                this.$message.error('服务器'+status+'错误');
               }
               return status < 500
              }
        }).then(response=>{
            //根据接口返回的状态码
            // if(res.data.code == 1){
            //     return res.data
            // }else{
            //     this.$message.warning(res.data.msg)
            //     return res.data
            // }
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
  }
  export  function get(url,params){
    return new Promise((resolve,reject)=>{
        axios({
            method:'GET',
            url,
            data:params
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
  }