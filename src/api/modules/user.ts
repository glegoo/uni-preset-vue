import request from '../request'

function login(account: string, pwd: string) {
  return request.post('user/login', {
    account,
    pwd,
  })
}

/**
 * 获取验证码
 * @param phone 手机号
 */
function getCode(phone: string): Promise<{ num: number }> {
  return request.get('random/code', {
    params: {
      phone,
    },
  })
}
export default {
  login,
  getCode,
}
