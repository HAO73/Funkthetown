const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/api/signup', userCtrl.signup);


module.exports = router;