const express = require('express');
const logger = require("../../../logger");

const UserService = require('../service/UserService.js')


exports.createUser = async (req, res, next) => {
    logger.info("UserController.createUser - get /create")
    const result = await UserService.createUser(req.body);
    logger.info(result);
    res.send(result);
};

exports.findUser = async (req, res, next) => {
    logger.info("UserController.findUser - get /id/:id")
    const result = await UserService.findUser(req.params.id);
    res.send(result);
}

exports.loginUser = async (req, res, next) => {
    logger.info("LoginController.loginUser - post //loginUser")
    const result = await UserService.loginUser(req.body);
    res.json(result);
};


