const express = require('express')
var router = express.Router();
const logger = require("../logger");

const User = require('../model/user.js');

router.get('/create', (req, res) => {
    logger.info("create")
    const newUser = new User({
        id: 'sale222',
        password: '2',
        email: 'john.doe@example.com',
        name: 'john',
    });
      
    newUser.save()
    .then(user => {
        logger.info(user.name + " saved to users collection.");
        logger.info(user.id + " saved to users collection.");
        logger.info(user.email + " saved to users collection.");
        res.send("create");
    })
    .catch(err => {
        logger.error(err);
        res.send("err");
    });
    
});



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