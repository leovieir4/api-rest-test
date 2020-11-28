import { LoginController } from './login'
import { badRequest } from '../../helper/http-helper'
import { MissingParamError } from '../../errors'

describe('Login Controller', () => {
  test('', async () => {
    const sut = new LoginController()
    const httRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })
})
