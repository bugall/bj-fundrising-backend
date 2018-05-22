import grpc from 'grpc'
import PROTO_PATH from '../../models/rpc/user.proto'
import config from '../../../config'

const userProto = grpc.load(PROTO_PATH).impl
const client = new implProto.LBS(`${config.rpc.host}:${config.rpc.port}`, grpc.credentials.createInsecure())

export default class Grpc {
  constructor() {}

  async register(opts) {
    const data = await client.register(opts)
    return data
  }

}
