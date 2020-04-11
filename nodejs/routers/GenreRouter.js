const express = require('express');
const GenreRouter = express.Router();
const GenreCtrl = require('../controllers/indexCtrl');

const genreController = new GenreCtrl();
GenreRouter.get('/list', (req, res) => genreController.getList(req, res));
GenreRouter.get('/:id', (req, res) => genreController.getOne(req, res));
GenreRouter.update('/update/:id', (req, res) => genreController.update(req, res));
GenreRouter.delete('/delete/:id', (req, res) => genreController.delete(req, res));
GenreRouter.post('/create', (req, res) => genreController.create(req, res));

module.exports = GenreRouter;
