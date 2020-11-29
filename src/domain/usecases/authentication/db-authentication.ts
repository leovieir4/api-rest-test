import { HashComparer } from '../../../data/protocols/criptography/hash-comparer'
import { Encrypter } from '../../../data/protocols/criptography/encrypter'
import { LoadAccountByEmailRepository } from '../../../data/protocols/db/account/load-account-by-email-repository'
import { Authentication, AuthenticationModel } from '../../usecases/authentication'
import { UpdateAcessTokenRepository } from '../../../data/protocols/db/account/update-access-token-repository'
export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly updateAcessTokenRepository: UpdateAcessTokenRepository
  ) { }

  async auth (authentication: AuthenticationModel): Promise<any> {
    const account = await this.loadAccountByEmailRepository.load(authentication.email)
    if (account) {
      const isValid = await this.hashComparer.compare(authentication.password, account.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id)
        await this.updateAcessTokenRepository.update(account.id, accessToken)
        return { accessToken, id: account.id }
      }
    }
    return null
  }
}
