const express = require('express');
const logger = require("../logger");

const LoginService = require('../services/LoginService')



exports.login = async (req, res, next) => {
    logger.info("LoginController.login - post /login")
    const result = await LoginService.Login(req.body);
    res.send(result);
};


