const NotSupportedProvider = require('./_errors/NotSupportedProvider');

let HttpRequest, HttpResponse;

function httpInterface(handler, providerName = process.env.SLS_PROVIDER_NAME) {

  try {
    HttpRequest = require(`./${providerName}/HttpRequest`);
    HttpResponse = require(`./${providerName}/HttpResponse`);
    return (...args) => {
      const request = new HttpRequest(...args);
      const response = new HttpResponse(...args);
      return handler(request, response, ...args);
    };
  } catch (e) {
    throw new NotSupportedProvider(e);
    return;
  }
};


module.exports = httpInterface;
