const express = require('express');

const authController = require('../Controllers/authControllers');
const webhookController = require('../Controllers/webhookControllers');
const router = express.Router();

router.post('/', webhookController.webhook);

module.exports = router;