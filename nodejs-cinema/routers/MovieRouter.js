const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/MovieCtrl');

const MovieCtrl = new MovieController();
router.get('/', (req, res)=>MovieCtrl.getList(req, res));
router.get('/:id', (req, res)=>MovieCtrl.getOne(req, res));
router.post('/', (req, res)=>MovieCtrl.create(req, res));
router.put('/:id', (req, res)=>MovieCtrl.update(req, res));
router.delete('/:id', (req, res)=>MovieCtrl.delete(req, res));

module.exports = router;