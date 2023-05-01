const express = require('express')
var router = express.Router();
const logger = require("../logger");
const UserController = require("../src/user/controller/UserController.js")

router.get("/create", UserController.createUser);
router.get("/id/:id", UserController.findUser);




router.get('/id/:id', (req, res) => {
    logger.info("id")
    User.find({ id: req.params.id }, { id: 1, name: 1, _id: 0 })
        .then(user => {
            logger.info(user)
            res.json({ user: user } );
        })
        .catch(err => {
            logger.error(err)
            res.json({ err: err } );
        })
});

module.exports = router;