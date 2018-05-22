import grpc from 'grpc'
const proto = grpc.load(__dirname + '/../../server/models/rpc/user.proto').user

const server = new grpc.Server()
server.addProtoService(proto.User.service, {
  register: (opts) => {
    console.log(opts)
  }
})

server.bind('0.0.0.0:3333', grpc.ServerCredentials.createInsecure())
server.start()
