const HttpResponse = require('../HttpResponse');

class AWSHttpResponse extends HttpResponse {
  constructor(event, context, callback) {
    super();
    this.callback = callback;
  }

  send(data) {
    this.callback(null, {
      statusCode: this.statusCode,
      headers: this.headers,
      body: JSON.stringify(data)
    });
  }
}

module.exports = AWSHttpResponse;
