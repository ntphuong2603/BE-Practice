const express = require('express');
const BookInstanceRouter = express.Router();
const IndexCtrl = require('../controllers/IndexCtrl');

const bookInstanceController = new IndexCtrl.BookInstanceCtrl();
BookInstanceRouter.get('/', (req, res) => bookInstanceController.getList(req, res));
BookInstanceRouter.get('/:id', (req, res) => bookInstanceController.getOne(req, res));
BookInstanceRouter.put('/:id', (req, res) => bookInstanceController.update(req, res));
BookInstanceRouter.delete('/:id', (req, res) => bookInstanceController.delete(req, res));
BookInstanceRouter.post('/', (req, res) => bookInstanceController.create(req, res));

module.exports = BookInstanceRouter;