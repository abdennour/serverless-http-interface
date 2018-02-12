
const HttpRequest = require('../HttpRequest');

class AzureHttpRequest extends HttpRequest {
  constructor(context, request) {
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

module.exports = AzureHttpRequest;
