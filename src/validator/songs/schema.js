/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

const Joi = require('joi');

const SongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
  genre: Joi.string().required(),
  performer: Joi.string().required(),
  duration: Joi.number().required(),
  albumId: Joi.string(),
});

module.exports = { SongPayloadSchema };
