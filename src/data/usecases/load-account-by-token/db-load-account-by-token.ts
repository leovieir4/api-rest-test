import { LoadAccountByToken } from '../../../domain/usecases/load-account-by-token'
// import { Decrypter } from '../../protocols/criptography/decrypter'
// import { AccountModel } from '../../../domain/models/account'
import { Decrypter } from '../../protocols/criptography/decrypter'
import { LoadAccountByTokenRepository } from '../../protocols/db/account/load-account-by-token-repository'
export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) { }

  async load (accessToken: string, role?: string): Promise<any> {
    try {
      const token = await this.decrypter.decrypt(accessToken)
      if (token) {
        const account = await this.loadAccountByTokenRepository.loadByToken(token, role)
        if (account) {
          return account
        }
      }
      return null
    } catch (error) {
      return null
    }
  }
}
