const express = require('express');
const GenreRouter = express.Router();
const GenreCtrl = require('../controllers/indexCtrl');

GenreRouter.get('/list', (req, res) => GenreCtrl.getList);

module.exports = GenreRouter;
