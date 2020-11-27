import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'
import { LogControllerDeccorator } from './log'

interface SutTypes {
  sut: LogControllerDeccorator
  controllerStub: Controller
}
const makeController = (): Controller => {
  class ControllerStub implements Controller {
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
      const httpResponse: HttpResponse = {
        body: {
          name: 'any_name'
        },
        statusCode: 200
      }
      return new Promise(resolve => resolve(httpResponse))
    }
  }

  return new ControllerStub()
}
const makeSut = (): SutTypes => {
  const controllerStub = makeController()
  const sut = new LogControllerDeccorator(controllerStub)
  return {
    sut,
    controllerStub
  }
}
describe('LogController Decorator', () => {
  test('Should call controller handle', async () => {
    const { sut, controllerStub } = makeSut()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    await sut.handle(httpRequest)
    expect(handleSpy).toHaveBeenCalledWith(httpRequest)
  })
})
