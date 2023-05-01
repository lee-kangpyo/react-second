const express = require('express');
const logger = require("../../../logger");

const UserService = require('../service/UserService.js')


exports.createUser = async (req, res, next) => {
    logger.info("UserController.createUser - get /create")
    const result = await UserService.createUser(req.body);
    res.send(result);
};

exports.findUser = async (req, res, next) => {
    logger.info("UserController.findUser - get /id/:id")
    const result = await UserService.findUser(req.params.id);
    res.send(result);
}

exports.login = async (req, res, next) => {
    logger.info("LoginController.login - post /login")
    const result = await LoginService.Login(req.body);
    res.json(result);
};


