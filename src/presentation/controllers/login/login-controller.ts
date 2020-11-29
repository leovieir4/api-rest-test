import { badRequest, serverError, unauthorized, ok } from '../../helper/http/http-helper'
import { Controller, HttpRequest, Authentication, Validation } from './login-controller-protocols'

export class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) { }

  async handle (httpRequest: HttpRequest): Promise<any> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = httpRequest.body
      const body = await this.authentication.auth(
        { email, password }
      )
      if (!body) {
        return unauthorized()
      }
      return ok({ body })
    } catch (error) {
      return serverError(error)
    }
  }
}
