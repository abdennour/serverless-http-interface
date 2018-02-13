const HttpResponse = require('../HttpResponse');

class AzureHttpResponse extends HttpResponse {
  constructor(context, request) {
    super();
    this.context = context;
  }

  send(data) {
    this.context = {
      status: this.statusCode,
      headers: this.headers,
      body: data
    };
    this.context.done();
  }
}

module.exports = AzureHttpResponse;
