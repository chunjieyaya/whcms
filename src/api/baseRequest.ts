import axios from 'axios'
import { reqBaseUrl } from '@/units/config'

// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'


// 创建axios实例
const request = axios.create({
  baseURL: '/api',
  timeout: 10000,
})
request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// 请求拦截
request.interceptors.request.use(
  function (config) {
    //开始加载-进度条开始
    nprogress.start();
    return config
  },
  function (err) {
    return Promise.reject(new Error(err))
  }
)

// 响应拦截
request.interceptors.response.use(
  function (res) {
    // 结束加载-进度条结束
    nprogress.done();

    // 请求成功，返回主要数据
    if (res.status == 200) {
      return res.data
    } else {
      console.log(res)
    }
  }
)

export default request