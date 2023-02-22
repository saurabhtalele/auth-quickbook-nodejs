const express = require('express');

const authController = require('../Controllers/authControllers');
const compnyController = require('../Controllers/compnyControllers');
const router = express.Router();

router.get('/getCompanyInfo', authController.retrieveToken3, compnyController.getCompanyInfo);

module.exports = router;