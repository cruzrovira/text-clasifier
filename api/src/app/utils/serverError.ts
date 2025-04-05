interface ServerErrorOptions {
  message: string
  status: number
  data?: unknown
}
class ServerError extends Error {
  status: number
  data: unknown

  constructor({ message, status, data }: ServerErrorOptions) {
    super(message)
    this.status = status
    this.data = data
  }
}

export default ServerError
