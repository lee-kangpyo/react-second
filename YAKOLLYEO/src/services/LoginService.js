const logger = require("../logger");
const execSql = require("../util/executeSql");
const { login } = require("../mapper/login");


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
