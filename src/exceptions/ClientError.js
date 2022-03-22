/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'ClientError';
  }
}
   
module.exports = ClientError;
