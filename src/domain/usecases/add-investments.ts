import { InvestmentsModel } from '../models/investments'

export interface AddInvestmentsModel {
  type: string
  value: string
  data: number
  userId: string
  ticket?: string
  qtdTickets? : number
}

export interface Investments {
  add (account: AddInvestmentsModel): Promise<InvestmentsModel>
  get(userId: string): Promise<InvestmentsModel[]>
  delete (id: string): Promise<any>
}
