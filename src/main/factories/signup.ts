import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { LogMongoRepository } from '../../infra/db/mongodb/log-repository/log'
import { Controller } from '../../presentation/protocols'
import { LogControllerDeccorator } from '../decoratos/log'

export const makeSignUpController = (): Controller => {
  const accountMongoRepository = new AccountMongoRepository()
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  const signUpController = new SignUpController(emailValidatorAdapter, dbAddAccount)
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDeccorator(signUpController, logMongoRepository)
}
