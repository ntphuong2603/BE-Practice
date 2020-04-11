const express = require('express');
const BookRouter = express.Router();
const BookCtrl = require('../controllers/BookCtrl');

BookRouter.get('/list', BookCtrl.getList);

module.exports = BookRouter;
