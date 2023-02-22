const express = require("express");
const router = express.Router();


const homeAuth = require("./home.route");
const companInfo = require("./compny.route");
const webhook = require("./webhook.route");
const vendor = require("./vendor.route");

router.use("/", homeAuth);

router.use('/company', companInfo);

router.use('/webhook', webhook)

router.use("/vendor", vendor)

module.exports = router;