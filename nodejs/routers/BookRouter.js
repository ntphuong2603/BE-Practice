const express = require('express');
const BookRouter = express.Router();
const BookCtrl = require('../controllers/indexCtrl');

BookRouter.get('/list', (req, res) => BookCtrl.getList);

module.exports = BookRouter;
