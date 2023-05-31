const logger = require("../logger");
const { sql, pool } = require('./pool');
const mapper = require('mybatis-mapper');	// MyBatis Mapper 로드
mapper.createMapper(["./mapper/user.xml"])   // MyBatis xml 로드

exports.query = async (path, params) => {
    try {
        const query = await pool;               // Query 실행을 위한 Pool 지정
        const format = { language:'sql' };
        const  [mapperName, mapperId] = path.split(".")
        const sqlText = mapper.getStatement(mapperName, mapperId, params, format);
        logger.info("\n"+sqlText)
        return await query.request().query(sqlText);
    } catch (err) {
        logger.info(err)
        throw Error(err)
    }
}