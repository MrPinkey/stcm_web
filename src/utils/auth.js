import { TOKEN_TIME, TOKEN_TIME_VALUE } from './const'

// 登陆时设置时间
export const setTokenTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now())
}

// 获取
export const getTokenTime = () => {
  return localStorage.getItem(TOKEN_TIME)
}

// 判断是否过期
export const diffTokenTime = () => {
  const currentTime = Date.now()
  const tokenTime = getTokenTime()
  return currentTime - tokenTime > TOKEN_TIME_VALUE
}
