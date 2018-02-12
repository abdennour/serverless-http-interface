'use strict';

const readYaml = require('read-yaml');

let HttpRequest, HttpResponse;

module.exports = function(handler) {
  const config = readYaml.sync(`${process.cwd()}/serverless.yml`).provider;
  console.log('zxpxrprpr:' , config.provider);
  try {
    HttpRequest = require(`./src/${provider}/HttpRequest`);
    HttpResponse = require(`./src/${provider}/HttpResponse`);
  } catch (e) {
    throw new Error(
      'Provider is not supported. Check your serverless.yml\n Details: \n\t' + e
    );
    return;
  }
  return (...args) => {
    const request = new HttpRequest(...args);
    const response = new HttpResponse(...args);
    return handler(request, response, ...args);
  };
};
