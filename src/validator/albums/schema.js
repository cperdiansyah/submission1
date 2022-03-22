/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

const Joi = require('joi');
 
const AlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required(),
  
});
 
module.exports = { AlbumPayloadSchema };
