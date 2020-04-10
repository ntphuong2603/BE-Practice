const express = require('express');
const GenreRouter = express.Router();
const Genre = require('../controllers/indexCtrl');

GenreRouter.get('/list', (req, res) => Genre.getList(req, res));

module.exports = GenreRouter;
