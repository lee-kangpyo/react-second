const express = require('express')
var router = express.Router();

const logger = require("../logger");


// api 요청을 할수 있다.
router.get("/getData", function(request, response){
    // 서버에서 데이터를 받아온후 아래와같이 전달
    logger.info("GET /test/getData")
    response.json({"value":"express에서 가져온 데이터"})
});

module.exports = router;