import { ObjectId } from 'mongodb'
import { AddInvestmentsModel } from '../../../../domain/usecases/add-investments'
import { MongoHelper } from '../helpers/mongo-helper'

export class InvestmentsMongoRepository {
  async add (investmesDate: AddInvestmentsModel): Promise<any> {
    const investmesCollection = MongoHelper.getCollection('investments')
    const result = await investmesCollection.insertOne(investmesDate)
    return MongoHelper.map(result.ops[0])
  }

  async get (userId: string): Promise<AddInvestmentsModel[]> {
    const investmesCollection = MongoHelper.getCollection('investments')
    const result: AddInvestmentsModel[] = await investmesCollection.find({ userId: userId }).toArray()
    const resultWithouId: AddInvestmentsModel[] = []
    for (const investment of result) {
      const inv = MongoHelper.map(investment)
      resultWithouId.push(inv)
    }
    return resultWithouId
  }

  async delete (id: string): Promise<any> {
    const investmesCollection = MongoHelper.getCollection('investments')
    const result = await investmesCollection.deleteOne({ _id: new ObjectId(id) })
    return result
  }
}
