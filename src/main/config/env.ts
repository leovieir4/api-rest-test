export default {
  mongoUrl: process.env.MONGO_URL,
  port: process.env.port,
  jwtSecret: process.env.JWT_SECRET || 'tj670==5H'
}
