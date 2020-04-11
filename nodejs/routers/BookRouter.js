/*
const express = require('express');
const BookRouter = express.Router();
const BookCtrl = require('../controllers/BookCtrl');

BookRouter.get('/list', BookCtrl.getList);

module.exports = BookRouter;
*/
const express = require('express');
const BookRouter = express.Router();
const BookCtrl = require('../controllers/BookCtrl');

let bookController = new BookCtrl()
BookRouter.get('/list', (req, res) => bookController.getList(req, res));
BookRouter.get('/fullList', (req, res) => bookController.getListFull(req, res));
BookRouter.get('/:id', (req, res) => bookController.getOne(req, res));
BookRouter.get('/full/:id', (req, res) => bookController.getOneFull(req, res));
BookRouter.post('/update/:id', (req, res) => bookController.update(req, res));
BookRouter.delete('/delete/:id', (req, res) => bookController.delete(req, res));
BookRouter.post('/create', (req, res) => bookController.create(req, res));

module.exports = BookRouter;
