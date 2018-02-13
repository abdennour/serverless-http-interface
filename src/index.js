const readYaml = require('read-yaml');
const NotSupportedProvider = require('./_errors/NotSupportedProvider');

let HttpRequest, HttpResponse;

module.exports = function(handler) {
  const config = readYaml.sync(`${process.cwd()}/serverless.yml`);
  try {
    HttpRequest = require(`./${config.provider.name}/HttpRequest`);
    HttpResponse = require(`./${config.provider.name}/HttpResponse`);
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
