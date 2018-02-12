const HttpRequest = require('../HttpRequest');

class AWSHttpRequest extends HttpRequest {
  constructor(event, context, callback) {
    super();
    this.event = event;
  }

  get query() {
    return this.event.queryStringParameters;
  }

  get body() {
    return this.event.body;
  }

  get headers() {
    return this.event.headers;
  }

  get method() {
    returnn this.event.httpMethod;
  }
}

module.exports = AWSHttpRequest;
