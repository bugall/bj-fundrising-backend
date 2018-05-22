import grpc from 'grpc'
import PROTO_PATH from './impl.proto'
import config from '../../config'

const implProto = grpc.load(PROTO_PATH).impl
const client = new implProto.LBS(`${conf.ip.client}:${conf.port}`, grpc.credentials.createInsecure())

export default class Grpc {
  constructor() {}

  
}
