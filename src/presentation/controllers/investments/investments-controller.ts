import { serverError, ok, badRequest } from '../../helper/http/http-helper'
import { HttpResponse } from '../../protocols'
import { Validation } from '../../protocols/validation'
import { HttpRequest, Investments } from './investments-controller-protocols'

export class InvestmentsController {
  constructor (
    private readonly validation: Validation,
    private readonly investments: Investments
  ) { }

  async handle (httpRequest: HttpRequest): Promise<any> {
    if (httpRequest.mehod === 'POST') {
      return this.post(httpRequest)
    }
    if (httpRequest.mehod === 'GET') {
      return this.get(httpRequest)
    }
    if (httpRequest.mehod === 'DELETE') {
      return this.delete(httpRequest)
    }
  }

  async post (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { type, userId, value, ticket, qtdTickets } = httpRequest.body
      const investment = await this.investments.add({
        type,
        userId,
        data: Date.now(),
        value,
        ticket,
        qtdTickets
      })
      return ok(investment)
    } catch (error) {
      return serverError(error)
    }
  }

  async get (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { userid } = httpRequest.headers
      const investment = await this.investments.get(userid)
      return ok(investment)
    } catch (error) {
      return serverError(error)
    }
  }

  async delete (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // const { id } = httpRequest.headers
      const { id } = httpRequest.headers
      const investment = await this.investments.delete(id)
      return ok(investment)
    } catch (error) {
      console.log(httpRequest.headers.id, 'AAAAAAAAAAAAAA')
      console.error(error)
      return serverError(error)
    }
  }
}
