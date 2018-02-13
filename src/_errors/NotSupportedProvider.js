class NotSupportedProvider extends Error {

  constructor(message) {
    super(`
      Provider is not supported. Check your serverless.yml
      Details:
        ${message}
    `);
  }
}

module.exports = NotSupportedProvider;
