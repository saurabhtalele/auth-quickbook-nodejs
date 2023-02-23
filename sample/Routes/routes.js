const express = require("express");
const router = express.Router();


const homeAuth = require("./home.route");
const companInfo = require("./compny.route");
const webhook = require("./webhook.route");
const findWth = require("./findWth.route");

router.use("/", homeAuth);

router.use('/company', companInfo);

router.use('/webhook', webhook)

router.use("/findWth", findWth)

module.exports = router;