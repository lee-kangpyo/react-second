const logger = require("../../../logger");
const User = require('../model/user.js');
const jwt = require("../../../util/jwt-util")

exports.createUser = async (params) => {
    logger.info('UserService.createUser 호출됨.');
    const newUser = new User({
        id: 'sale111',
        password: '2',
        email: 'john.doe@example.com',
        name: 'john',
    });
      
    await newUser.save()
    .then(user => {
        logger.info(user.name + " saved to users collection.");
        logger.info(user.id + " saved to users collection.");
        logger.info(user.email + " saved to users collection.");
        return "create";
    })
    .catch(err => {
        logger.error(err);
        return "err";
    });
};


exports.findUser = async (id) => {
    User.find({ id: id }, { id: 1, name: 1, _id: 0 })
    .then(user => {
        logger.info(user)
        return { user: user }
        //res.json({ user: user });
    })
    .catch(err => {
        logger.error(err)
        return { err: err }
        //res.json({ err: err } );
    })
}

exports.loginUser = async (params) => {
    logger.info('UserService.loginUser 호출됨.');
    let result = false;
    await User.find({ id:params.userId, password:params.password }, {id:1,name:1})
    .then(user => {
        if (user) {
            logger.info(user);
            result = true;

            const accessToken = jwt.sign(user[0])
            const ver =jwt.verify(accessToken);
        }
    })
    .catch(err => {
        logger.error(err)
    })
    return result;
};


