This module aimes to make an interface among all providers about the way of HTTP request/response handling.

This single way is closer to Express syntax.

This module provides a decorator for that.

# Providers:

- AWS (Supported)
- Google (Supported)
- Azure (Supported)
- Kubeless (Not yet)


# Install

Require Node 6.x at least.

```sh
npm install --save serverless-http-interface;
```

# Usage

```js
const httpInterface = require('serverless-http-interface');

function handler(request, response) {
    response.status(200).send({ hello: 'World' })
}

exports.handler = httpInterface(handler);
```


# How to migrate ?


- Before using it, you will need to maintain your code if you migrate from provider to another ( AWS)

```js
// (((((         Request     ))))
// With AWS
event.queryStringParameters
// With Google
req.query

//... so on
// (((((         Response     ))))
// With AWS
callback(null, {statusCode: 200, body: JSON.stringify(body)})
// With Azure
context.res = {status: 200, body};
context.done()

```

- Now , you have one code base (close to Express syntax) :


```js
// Before

exports.handler = function(event, context, callback) {
    callback(null, {statusCode: 200, body: JSON.stringify({ hello: 'World' })})
}

// Now
const httpInterface = require('serverless-http-interface');

function handler(request, response) {
    response.status(200).send({ hello: 'World' })
}

exports.handler = httpInterface(handler);

```
Now, change the provider (aws, azure, google) and don't worry. The function should be stay the same.

# Flexibility

You are still able to access to default arguments according to provider. Those default arguments are available starting for the third index (after "request" and "response" arguments).

For example, if the provider is AWS :

- 3rd argument : event
- 4th argument: context
- 5th argument: callback


If provider is Azure:

- 3rd argument: context
- 4th argument: request

The following example is an AWS Lambda function that leverage both : The interface by using "response" API, and The default by using "event"

```js
const httpInterface = require('serverless-http-interface');

function handler(request, response, event, context, callback) {
    response.status(200).send(event.queryStringParameters);
}

exports.handler = httpInterface(handler);

```
