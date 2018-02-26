const HttpResponse = require('../HttpResponse');

class AWSHttpResponse extends HttpResponse {
  constructor(event, context, callback) {
    super();
    this.callback = callback;
  }

  body(data) {
    const contentType =
      this.headers['Content-Type'] || this.headers['content-type'] || '';
    return contentType.includes('application/json')
      ? JSON.stringify(data)
      : data;
  }

  send(data) {
    this.callback(null, {
      statusCode: this.statusCode,
      headers: this.headers,
      body: this.body(data)
    });
  }
}

module.exports = AWSHttpResponse;
