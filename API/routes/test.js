const express = require('express')
var router = express.Router();
const logger = require("../logger");
const TestController = require('../controllers/TestController')

// api 요청을 할수 있다.

router.get("/getData", TestController.getData)
router.get("/getTestYak",TestController.getTestYak)

module.exports = router;