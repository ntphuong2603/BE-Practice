const express = require('express');
const BookRouter = express.Router();
const IndexCtrl = require('../controllers/IndexCtrl'); 

const bookController = new IndexCtrl.BookCtrl();
BookRouter.get('/', (req, res) => bookController.getList(req, res));
BookRouter.get('/:id', (req, res) => bookController.getOne(req, res));
BookRouter.put('/', (req, res) => bookController.create(req, res));
BookRouter.post('/:id', (req, res) => bookController.update(req, res));
BookRouter.delete('/:id', (req, res) => bookController.delete(req, res));


module.exports = BookRouter;