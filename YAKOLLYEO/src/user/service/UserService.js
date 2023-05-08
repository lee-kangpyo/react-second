const logger = require("../../../logger");
const User = require('../model/user.js');
const jwt = require("../../../util/jwt-util");
const redis = require("../../../util/redis");

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

exports.loginUser = async (params, response) => {
    logger.info('UserService.loginUser 호출됨.');
    let result = false;
    await User.find({ id:params.userId, password:params.password }, {id:1,name:1})
    .then( async users => {
        const user = users[0]
        if (user) {
            logger.info(user);
            result = true;

            const accTk = jwt.sign(user);
            //const ver =jwt.verify(accToken);
            const refTk = jwt.refresh();
            console.log(user.id)
            console.log(refTk);
            await redis.set(user.id, refTk);

            response.setHeader('Content-Type','application/json; charset=utf-8');
            response.setHeader('Authorization', 'Bearer ' + accTk);
            response.setHeader('Refresh', 'Bearer ' + refTk);
        }else{
            logger.error("로그인 에러 : 해당하는 유저가 없음 userId : "+params.userId)
        }
    })
    .catch(err => {
        logger.error(err.message);
        logger.error(err.stack);
    })
    return result;
};


