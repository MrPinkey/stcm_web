import request from './request'

export const onceList = () => {
  return request({
    url: '/getOnce'
  })
}
