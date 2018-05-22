import grpc from 'grpc'
const proto = grpc.load(__dirname + '/../../server/models/rpc/user.proto').user

const server = new grpc.Server()
server.addProtoService(proto.User.service, {
  register: (opts, callback) => {
    console.log(opts)
    callback(null, { result: 0, error: 0})
  }
})

server.bind('0.0.0.0:5555', grpc.ServerCredentials.createInsecure())
server.start()
