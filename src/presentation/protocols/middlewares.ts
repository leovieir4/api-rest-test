import { HttpRequest } from './http'

export interface Middleware {
  handle (httpRequest: HttpRequest): Promise<any>
}
