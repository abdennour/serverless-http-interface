const NotImplementedMethod = require('./NotImplementedMethod');

class HttpRequest {
  get query() {
    return new NotImplementedMethod(this.constructor.name, 'query');
  }

  get body() {
    return new NotImplementedMethod(this.constructor.name, 'body');
  }

  get method() {
    return new NotImplementedMethod(this.constructor.name, 'method');
  }

  get headers() {
    return new NotImplementedMethod(this.constructor.name, 'headers');
  }
}

module.exports = HttpRequest;
