const express = require('express');
const router = express.Router();
const MovieCtrl = require('../controllers/MovieCtrl');

router.get('/all', MovieCtrl.getList);
router.get('/:id', MovieCtrl.read);
router.post('/create', MovieCtrl.create);
router.post('/update/:id', MovieCtrl.update);
router.delete('/:id', MovieCtrl.delete);

module.exports = router;