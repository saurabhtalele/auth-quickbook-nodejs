const express = require('express');
const authController = require('../Controllers/authControllers');

const vendorController = require('../Controllers/vendorController');
const router = express.Router();

router.get('/', vendorController.getVendorById);

module.exports = router;