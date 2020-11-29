import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-route-adapter'
import { makeInvestmentsController } from '../../factories/investments/investments-factory'
import { tickets } from './tickets'
export default (router: Router): void => {
  router.post('/investments', adaptRoute(makeInvestmentsController()))
  router.get('/investments', adaptRoute(makeInvestmentsController()))
  router.delete('/investments', adaptRoute(makeInvestmentsController()))
  router.get('/investments/tickets', (req, res) => {
    return res.status(200).send(tickets)
  })
}
