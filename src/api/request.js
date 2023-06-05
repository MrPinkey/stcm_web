import axios from 'axios'
import { ElMessage } from 'element-plus'
import { diffTokenTime } from '@/utils/auth'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 30000
})

service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      if (diffTokenTime()) {
        store.dispatch('app/logout')
        return Promise.reject(new Error('token 失效了'))
      }
    }
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

service.interceptors.response.use(
  (response) => {
    const { data, meta } = response.data.result
    if (meta.status === 200 || meta.status === 201) {
      if (window.location.href.includes('login')) {
        ElMessage.success('登录成功')
      }
      return data
    } else {
      ElMessage.error(meta.message)
      return Promise.reject(new Error(meta.message))
    }
  },
  (error) => {
    error.response && ElMessage.error('登录异常')
    return Promise.reject(new Error('登录异常'))
  }
)

export default service
