import { AddAccount, AddAccountModel, Encrypter, AddAccountRepository } from './db-add-account-protocols'
// import { AccountModel } from '../../../domain/models/account'
export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<any> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return new Promise(resolve => resolve(null))
  }
}
