const express = require('express')
const path = require('path');
var router = express.Router();
const logger = require("../logger");
const ApiController = require("../controllers/ApiController")


router.post("/v1/clkLandingBtn", ApiController.clkLandingBtn)

module.exports = router;