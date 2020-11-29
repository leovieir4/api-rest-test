import { Router } from 'express'
import { adaptMiddleware } from '../../adapters/express-middleware-adapter copy'
import { adaptRoute } from '../../adapters/express-route-adapter'
import { makeInvestmentsController } from '../../factories/investments/investments-factory'
import { makeAuthMiddleware } from '../../factories/middlewares/auth-middleware-factory'
import { tickets } from './tickets'
export default (router: Router): void => {
  const adminAuth = adaptMiddleware(makeAuthMiddleware())

  router.post('/investments', adminAuth, adaptRoute(makeInvestmentsController()))
  router.get('/investments', adminAuth, adaptRoute(makeInvestmentsController()))
  router.delete('/investments', adminAuth, adaptRoute(makeInvestmentsController()))
  router.get('/investments/tickets', adminAuth, (req, res) => {
    return res.status(200).send(tickets)
  })
}
