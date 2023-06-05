import request from './request'

/**
 * 使用这种定义方式时，请求的参数是在请求体中，而不是在url中
 * url: '/login'是后端接口，不是前端路由
 */
export const login = (data) => {
  return request({
    url: '/auth',
    method: 'post',
    data
  })
}

/**
 * 使用这种定义方式时，请求的参数是在url中，而不是在请求体中
 */
// export function login(params) {
//   return request({
//     url: '/private/v1',
//     method: 'post',
//     params
//   })
// }
