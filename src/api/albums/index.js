/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
const AlbumsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'albums',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const albumsHandler = new AlbumsHandler(service, validator);
    server.route(routes(albumsHandler));
  },
};
