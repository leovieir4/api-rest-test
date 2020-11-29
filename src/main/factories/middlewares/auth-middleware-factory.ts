import { AuthMiddleware } from '../../../presentation/middlewares/auth-middleware'
import { Middleware } from '../../../presentation/protocols'
import { makeDbLoadAccountByToken } from '../usecases/load-account-by-token/db-load-account-by-token'

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken())
}
