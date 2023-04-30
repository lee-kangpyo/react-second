const express = require('express');
const logger = require("../logger");
//const TestService = require('../services/TestService')


//mybatis 사용
exports.clkLandingBtn =  (req, res, next) => {
    logger.info("ApiController.clkLandingBtn - post /api/v1/clkLandingBtn")
    try {
        let { id } = req.body
        logger.info(id);
        //const params = { 'cstCl':cstCl }
        //const result = await TestService.getTestYak(params);
        //res.json({"value":"다녀옴"})
        res.send("다녀옴");    
    } catch (err) {
        res.status(500);                                            // 에러 발생시 Response 상태를 서버에러인 500에러로 세팅
        res.send(err.message);                                      // 에러 발생시 Response에 서버에러 내용 포함 전달
    }
}


