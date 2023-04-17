const express = require('express')
const path = require('path');
var router = express.Router();
const logger = require("../logger");
const LoginController = require("../controllers/LoginController")

router.post("/", LoginController.login);

module.exports = router;