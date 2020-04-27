const express = require('express');
const GenreRouter = express.Router();
const IndexCtrl = require('../controllers/IndexCtrl');

const genreController = new IndexCtrl.GenreCtrl();
GenreRouter.get('/', (req, res) => genreController.getList(req, res));
GenreRouter.get('/:id', (req, res) => genreController.getOne(req, res));
GenreRouter.put('/:id', (req, res) => genreController.update(req, res));
GenreRouter.delete('/:id', (req, res) => genreController.delete(req, res));
GenreRouter.post('/', (req, res) => genreController.create(req, res));

module.exports = GenreRouter;