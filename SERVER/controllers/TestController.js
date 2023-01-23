const express = require('express');
const logger = require("../logger");
const TestService = require('../services/TestService')

exports.getData = async (req, res, next) => {
    // 서버에서 데이터를 받아온후 아래와같이 전달
    logger.info("GET /test/getData")
    res.json({"value":"express에서 가져온 데이터"})
}

//mybatis 사용
exports.getTestYak = async (req, res, next) => {
    logger.info("TestController.getTestYak - GET /test/getTestYak")
    try {
        let { cstCl } = req.query
        const params = { 'cstCl':cstCl }
        const result = await TestService.getTestYak(params);
        res.send(result);    
    } catch (err) {
        res.status(500);                                            // 에러 발생시 Response 상태를 서버에러인 500에러로 세팅
        res.send(err.message);                                      // 에러 발생시 Response에 서버에러 내용 포함 전달
    }
}

