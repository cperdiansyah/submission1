/* eslint-disable linebreak-style */
/* eslint-disable camelcase */

const mapDBToModel = ({
  id,
  name,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
  created_at,
  updated_at,
}) => ({
  id,
  name,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel };
