import { Middleware, HttpRequest, HttpResponse } from '../protocols'
import { forbidden, ok } from '../helper/http/http-helper'
import { AcessDeniedError } from '../errors/access-denied-error'
import { LoadAccountByToken } from '../../domain/usecases/load-account-by-token'
export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly role?: string
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const accessToken = httpRequest.headers?.['x-access-token']
    if (accessToken) {
      const account = await this.loadAccountByToken.load(accessToken, this.role)
      if (account) {
        return ok({ userId: account.id })
      }
    }

    return forbidden(new AcessDeniedError())
  }
}
