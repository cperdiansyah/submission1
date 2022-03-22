/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable lines-between-class-members */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class AlbumsService {
  constructor() {
    this._albums = [];

  }
   
  addAlbum({ name, year }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
 
    const newAlbum = {
      name, year, id, createdAt, updatedAt,
    };
 
    this._albums.push(newAlbum);

    const isSuccess = this._albums.filter((album) => album.id === id).length > 0;

    if (!isSuccess) {
      throw new InvariantError('Album gagal ditambahkan');
    }
   
    return id;

  }

  getNoteById(id) {
    const album = this._albums.filter((n) => n.id === id)[0];
    if (!album) {
      throw new NotFoundError('Album tidak ditemukan');
    }
    return album;

  }

  editAlbumById(id, { name, year }) {
    const index = this._albums.findIndex((album) => album.id === id);
 
    if (index === -1) {
      throw new NotFoundError('Gagal memperbarui album. Id tidak ditemukan');
    }
 
    const updatedAt = new Date().toISOString();
 
    this._albums[index] = {
      ...this._albums[index],
      name,
      year,
      updatedAt,
    };
  }

  deleteAlbumById(id) {
    const index = this._albums.findIndex((album) => album.id === id);
    if (index === -1) {
      throw new NotFoundError('Album gagal dihapus. Id tidak ditemukan');
    }
    this._albums.splice(index, 1);
  }

}

module.exports = AlbumsService;
