class RequestError extends Error {
  constructor(message, status, data) {
    super(message)
    this.message = message
    this.status = status
    this.data = data
  }
}

export default RequestError