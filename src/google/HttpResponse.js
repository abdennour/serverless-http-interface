
const HttpResponse = require('../HttpResponse');

class GoogleHttpResponse extends HttpResponse {
  constructor(request, response) {
    super();
    this.response = response;
  }

  send(data) {
    this.response.status(this.statusCode).send(data);
  }
}

module.exports = GoogleHttpResponse;
