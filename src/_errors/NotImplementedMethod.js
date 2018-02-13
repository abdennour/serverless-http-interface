class NotImplementedMethod extends Error {

  constructor(className, methodName) {
    super(`${className} class must implement ${methodName}`);
  }
}

module.exports = NotImplementedMethod;
