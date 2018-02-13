const NotImplementedMethod = require('./_errors/NotImplementedMethod');

class HttpResponse {
  constructor() {
    this.statusCode = 200;
    this.headers = {};
  }

  set(headerName, headerValue) {
    this.headers[headerName] = headerValue;
    return this;
  }

  status(statusCode) {
    this.statusCode = statusCode;
    return this;
  }

  send(data) {
    return new NotImplementedMethod(this.constructor.name, 'send');
  }
}

module.exports = HttpResponse;
