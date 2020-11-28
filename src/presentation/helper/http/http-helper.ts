import { ServerError, UnauthorizedError } from '../../errors'
import { HttpResponse } from '../../protocols'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})
export const serverError = (error: Error): HttpResponse => {
  const stack = (!error.stack) ? 'error type nbnot found' : error.stack
  return {
    statusCode: 500,
    body: new ServerError(stack)
  }
}
export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
