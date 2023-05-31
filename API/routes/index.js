const express = require('express')
const path = require('path');
var router = express.Router();

const logger = require("../logger");

router.get("/", function(request, response){
    logger.info("GET / 모듈에서 호출")
    response.sendFile(path.join(__dirname, '../client/build/index.html'))
});

module.exports = router;