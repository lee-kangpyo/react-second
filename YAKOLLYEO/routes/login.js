const express = require('express')
var router = express.Router();
const logger = require("../logger");
const LoginController = require("../../SERVER/controllers/LoginController")

router.post("/", LoginController.login);

module.exports = router;