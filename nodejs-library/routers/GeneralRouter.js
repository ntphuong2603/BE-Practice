const express = require('express');
const GeneralRouter = express.Router();
const IndexCtrl = require('../controllers/IndexCtrl');

const generalCtroller = new IndexCtrl.GeneralCtrl();
GeneralRouter.get('/', (req, res) => generalCtroller.getGeneral(req, res));
/*
GeneralRouter.get('/:id', (req, res) => generalCtroller.getOne(req, res));
GeneralRouter.put('/:id', (req, res) => generalCtroller.update(req, res));
GeneralRouter.delete('/:id', (req, res) => generalCtroller.delete(req, res));
GeneralRouter.post('/', (req, res) => generalCtroller.create(req, res));
*/

module.exports = GeneralRouter;