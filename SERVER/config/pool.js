const sql = require('mssql');
const { config } = require('./config');

console.log(config)

const connPool = new sql.ConnectionPool(config.dbconfig)
  .connect()
  .then((pool) => {
    console.log('DB연결 성공');
    return pool;
  })
  .catch((err) => {
    console.log('err ', err);
  });

module.export = {
  sql,
  connPool
}