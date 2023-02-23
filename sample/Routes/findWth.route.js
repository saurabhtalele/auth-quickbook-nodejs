const express = require('express');
const authController = require('../Controllers/authControllers');

const findWthController = require('../Controllers/findWthController');
const router = express.Router();

router.get('/', findWthController.getfindWthById);

module.exports = router;