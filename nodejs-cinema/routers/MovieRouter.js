const express = require('express');
const router = express.Router();
const MovieCtrl = require('../controllers/MovieCtrl');

router.get('/all', MovieCtrl.getList);

module.exports = router;