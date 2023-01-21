    const express = require('express')
    var router = express.Router();
    const logger = require("../logger");
    const testController = require('../controllers/TestController')




    // api 요청을 할수 있다.
    
    router.get("/getData", testController.getData)
    router.get("/getTestYak",testController.getTestYak)

    /*
    router.get("/getData", function (request, response){
        // 서버에서 데이터를 받아온후 아래와같이 전달
        logger.info("GET /test/getData")
        response.json({"value":"express에서 가져온 데이터"})
    });
    */
    router.get("/getTestYak2", async (req, res) => {
        logger.info("GET /test/getTestYak")
        
        try{
            const query = await pool;               // Query 실행을 위한 Pool 지정
            const params = { 'cstCl':'PH' }
            const format = { language:'sql' };
            const sqlText = mapper.getStatement('user', 'getList', params, format);
            logger.info(sqlText)
            const result = await query.request().query(sqlText);
            //logger.info(sqlText);
            res.send(result);                       // Response에 결과값을 포함하여 전달
        }catch(err){
            res.status(500);                        // 에러 발생시 Response 상태를 서버에러인 500에러로 세팅
            res.send(err.message);                  // 에러 발생시 Response에 서버에러 내용 포함 전달
        }
        // 일반요청
        /*
        try{
            const query = await pool;                                   // Query 실행을 위한 Pool 지정
            const result = await query.request()                        // Query 요청
                .input('cstCl', 'PH')				                    // 하단 query에 @로 들어가는 파라미터 값을 사전에 설정
                .query("SELECT * FROM DTPMCST WHERE CSTCL = @cstCl");
            console.log(result)
            res.send(result);                                           // Response에 결과값을 포함하여 전달
        }catch(err){
            res.status(500);                                            // 에러 발생시 Response 상태를 서버에러인 500에러로 세팅
            res.send(err.message);                                      // 에러 발생시 Response에 서버에러 내용 포함 전달
        }*/
        
    });
    

    module.exports = router;