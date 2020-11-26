import { AddAccount, AddAccountModel, Encrypter } from './db-add-account-protocols'
// import { AccountModel } from '../../../domain/models/account'
export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<any> {
    await this.encrypter.encrypt(account.password)
    return new Promise(resolve => resolve(null))
  }
}
