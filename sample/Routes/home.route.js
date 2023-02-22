const express = require('express');


const authController = require('../Controllers/authControllers');
const router = express.Router();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', authController.atHome);
router.get('/authUri', urlencodedParser, authController.authUri);
router.get('/callback', authController.callBack);
router.get('/refreshAccessToken', authController.refreshAccessToken);
router.get('/retrieveToken', authController.retrieveToken);
router.get('/disconnecto', authController.disconnecto);
module.exports = router;