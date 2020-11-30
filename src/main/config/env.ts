export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/gorila-node-api',
  mongoTest: 'mongodb://localhost:27017/test',
  port: process.env.port,
  jwtSecret: process.env.JWT_SECRET || 'tj670==5H'
}
