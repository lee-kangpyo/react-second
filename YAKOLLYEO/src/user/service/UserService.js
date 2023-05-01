const logger = require("../../../logger");
const User = require('../model/user.js');

exports.createUser = async (params) => {
    logger.info('UserService.createUser 호출됨.');
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
};

exports.findUser = async (id) => {
    User.find({ id: id }, { id: 1, name: 1, _id: 0 })
    .then(user => {
        logger.info(user)
        return { user: user }
        res.json({ user: user });
    })
    .catch(err => {
        logger.error(err)
        return { err: err }
        res.json({ err: err } );
    })
}

exports.Login = async (params) => {
    logger.info('LoginService.Login 호출됨.');
    /*
    const result = await execSql(login, params);
    logger.info(JSON.stringify(result.recordsets));

    let reresult = {
        totalCount:result.recordset.length,
        result:result.recordset
    }

    return reresult;
    */
};


