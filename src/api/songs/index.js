/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
const SongsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'songs',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const songsHandler = new SongsHandler(service, validator);
    server.route(routes(songsHandler));
  },
};
