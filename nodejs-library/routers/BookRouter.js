const express = require('express');
const BookRouter = express.Router();
const BookCtrl = require('../controllers/indexCtrl');

const bookController = new BookCtrl();
BookRouter.get('/list', (req, res) => bookController.getList(req, res));
BookRouter.get('/:id', (req, res) => bookController.getOne(req, res));
BookRouter.update('/update/:id', (req, res) => bookController.update(req, res));
BookRouter.delete('/delete/:id', (req, res) => bookController.delete(req, res));
BookRouter.post('/create', (req, res) => bookController.create(req, res));

module.exports = BookRouter;
