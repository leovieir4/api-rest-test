export class ServerError extends Error {
  constructor (statck: string) {
    super('Internal server error')
    this.name = 'ServerError'
    this.stack = statck
  }
}
