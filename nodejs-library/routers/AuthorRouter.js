const express = require('express');
const AuthorRouter = express.Router();
const IndexCtrl = require('../controllers/IndexCtrl');

const authorController = new IndexCtrl.AuthorCtrl();
AuthorRouter.get('/', (req, res) => authorController.getList(req, res));
AuthorRouter.get('/:id', (req, res) => authorController.getOne(req, res));
AuthorRouter.put('/:id', (req, res) => authorController.update(req, res));
AuthorRouter.delete('/:id', (req, res) => authorController.delete(req, res));
AuthorRouter.post('/', (req, res) => authorController.create(req, res));

module.exports = AuthorRouter;