const express = require('express');
const logger = require("../logger");
//const Users = require('../models/Users');
//const Views = '../views/'
const { sql, pool } = require('../config/pool');
const mapper = require('mybatis-mapper');	// MyBatis Mapper 로드
mapper.createMapper(["./mapper/user.xml"])   // MyBatis SQL 로드

exports.getData = async (req, res, next) => {
    // 서버에서 데이터를 받아온후 아래와같이 전달
    logger.info("GET /test/getData")
    res.json({"value":"express에서 가져온 데이터"})
}

//mybatis 사용
exports.getTestYak = async (req, res, next) => {
    logger.info("TestController.getTestYak - GET /test/getTestYak")
    let { cstCl } = req.query
    logger.info(cstCl)
    try{
        const query = await pool;               // Query 실행을 위한 Pool 지정
        const params = { 'cstCl':cstCl }
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
}
// mybatis 사용하지 않을때
exports.getTestYak2 = async (request, response, next) => {
    logger.info("GET /test/getTestYak2")
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
    }
}
