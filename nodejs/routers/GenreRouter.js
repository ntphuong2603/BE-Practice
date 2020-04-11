const express = require('express');
const GenreRouter = express.Router();
const GenreCtrl = require('../controllers/GenreCtrl');

GenreRouter.get('/list', GenreCtrl.getList);

module.exports = GenreRouter;
