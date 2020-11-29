import { Controller } from '../../../presentation/protocols'
import { makeInvestmentsValidation } from './investments-validation-factory'
import { InvestmentsController } from '../../../presentation/controllers/investments/investments-controller'
import { LogControllerDeccorator } from '../../decoratos/log-controller-decorator'
import { LogMongoRepository } from '../../../infra/db/mongodb/log/log-mongo-repository'
import { InvestmentsMongoRepository } from '../../../infra/db/mongodb/investments/investments-mongo-repository'

export const makeInvestmentsController = (): Controller => {
  const investmentsMongoRepository = new InvestmentsMongoRepository()
  const investmentsController = new InvestmentsController(makeInvestmentsValidation(), investmentsMongoRepository)
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDeccorator(investmentsController, logMongoRepository)
}
