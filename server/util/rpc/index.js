import grpc from 'grpc'
import config from '../../../config'
import Promise from 'bluebird'

const impl = grpc.load(__dirname + '/../../models/rpc/user.proto').user
const client = new impl.User(`${config.rpc.host}:${config.rpc.port}`, grpc.credentials.createInsecure())

class Grpc {
  constructor() {}

  register(opts) {
    return new Promise((resolve, reject) => {
      client.register(opts, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  login(opts) {
    return new Promise((resolve, reject) => {
      client.register(opts, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}

export default new Grpc()
