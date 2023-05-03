const express = require('express')
var router = express.Router();
const logger = require("../logger");
const UserController = require("../src/user/controller/UserController.js")

router.get("/create", UserController.createUser);
router.get("/id/:id", UserController.findUser);
router.post("/loginUser", UserController.loginUser);

module.exports = router;