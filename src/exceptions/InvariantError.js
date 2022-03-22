/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
const ClientError = require('./ClientError');
 
class InvariantError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'InvariantError';
  }
}
 
module.exports = InvariantError;
