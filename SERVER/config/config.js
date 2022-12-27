const dotenv = require('dotenv');
dotenv.config();

const config = {
  port: process.env.DB_PORT,
  dbconfig: {
    server: process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT),
    pool: {
      max: 5,
      min: 1,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: false,
      datebase: process.env.DB_DATEBASE,
      trustServerCertificate: true,
    },
    authentication: {
      type: 'default',
      options: {
        userName: process.env.DB_USERNAME,
        password: process.env.DB_PASSOWRD,
      },
    },
  },
};

module.exports = { config };