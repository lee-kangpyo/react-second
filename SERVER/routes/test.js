const express = require('express')
var router = express.Router();

const logger = require("../logger");

const { sql, pool } = require('../config/pool');


// api 요청을 할수 있다.

router.get("/getData", function (request, response){
    // 서버에서 데이터를 받아온후 아래와같이 전달
    logger.info("GET /test/getData")
    response.json({"value":"express에서 가져온 데이터"})
});

router.get("/getTestYak", async (req, res) => {
    logger.info("GET /test/getTestYak")
    try{
        const query = await pool;               // Query 실행을 위한 Pool 지정
        const result = await query.request()    // Query 요청
            .input('KEY', 'ASDF')				// 하단 query에 @로 들어가는 파라미터 값을 사전에 설정
            .query("SELECT * FROM DTPMCST");
        console.log(result)
        res.send(result);                       // Response에 결과값을 포함하여 전달
    }catch(err){
        res.status(500);                        // 에러 발생시 Response 상태를 서버에러인 500에러로 세팅
        res.send(err.message);                  // 에러 발생시 Response에 서버에러 내용 포함 전달
    }
    
});


module.exports = router;