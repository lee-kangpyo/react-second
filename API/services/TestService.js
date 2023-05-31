const logger = require("../logger");
const sqlSession = require('../config/sqlSession');
//const mapper = require('mybatis-mapper');	// MyBatis Mapper 로드
//mapper.createMapper(["./mapper/user.xml"])   // MyBatis SQL 로드


exports.getTestYak = async (params) => {
    logger.info("TestService.getTestYak 호출됨.")
    const result = await sqlSession.query("user.getList", params)
    logger.info(result)
    return result
}


// mybatis 사용하지 않을때
exports.getTestYak2 = async (params) => {
    logger.info("TestService.getTestYak2 호출됨.")
    var cstCl = params.cstCl
    try{
        const query = await pool;                                   // Query 실행을 위한 Pool 지정
        const result = await query.request()                        // Query 요청
            .input('cstCl', cstCl)				                    // 하단 query에 @로 들어가는 파라미터 값을 사전에 설정
            .query("SELECT * FROM DTPMCST WHERE CSTCL = @cstCl")
            logger.info(result)
        return result
    }catch(err){
        logger.info(err)
        throw Error(err)
    }
}