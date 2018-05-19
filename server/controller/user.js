export default class User {
  construtor() {}

  async signin(params) {
    const { username, password, realName, idCard, mobile } = params

    return {
      result: '123456789',
      error: 0
    }
  }
  async getLoginStatus() {}
  async searchPaymentLog() {}
}
