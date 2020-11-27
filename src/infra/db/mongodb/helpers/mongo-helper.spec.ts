import { MongoHelper as sut } from './mongo-helper'
import env from '../../../../main/config/env'

describe('Mongfo helper', () => {
  beforeAll(async () => {
    await sut.connect(env.mongoTest)
  })
  afterAll(async () => {
    await sut.disconnect()
  })
  test('Should reconnect mongodb', async () => {
    const accountCollection = await sut.getCollection('accounts')
    expect(accountCollection).toBeTruthy()
  })
})
