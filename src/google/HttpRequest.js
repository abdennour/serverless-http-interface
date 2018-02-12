const HttpRequest = require('../HttpRequest');

class GoogleHttpRequest extends HttpRequest {
  constructor(request, response) {
    super();
    this.request = request;
  }

  get query() {
    return this.request.query;
  }

  get body() {
    return this.request.body;
  }

  get headers() {
    return this.request.headers;
  }

  get method() {
   return this.request.method;
  }
}

module.exports = GoogleHttpRequest;
