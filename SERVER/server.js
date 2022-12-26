const express = require('express');
const path = require('path');
const app = express();

const logger = require("./logger");

const { connPool } = require('./config/pool');


var indexRouter = require('./routes/index');
var testRouter = require('./routes/test');

app.listen(8080, function (){
    logger.info("Server listening on port 8080");
})

connPool;
/*
// mssql 연동
var sql = require('mssql');

var config = {
    user: 'dtpuser',
    password: 'wkdsksgksi1!',
    server: '52.78.33.182',
    database: 'DTP',
    stream: true,
    options: {
    encrypt: false,
    trustServerCertificate: true,
    }
}
*/
sql.connect(config, function(err){
    if(err){
        logger.error(err.stack);
        return;
    }
    logger.info('MSSQL 연결 완료')
})
// 유저가 보낸 array/object 데이터 출력해보기 위해 필요
app.use(express.json())
// 다른 도메인 주소끼리 ajax 요청 주고 받을때 필요
// npm install cors
let corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
var cors = require("cors")
app.use(cors(corsOptions))

// 모듈로 분리
app.use('/', indexRouter);
app.use('/test', testRouter);

// 리액트 환경 변수
app.use(express.static(path.join(__dirname, 'client/build')))
app.get("*", function(request, response){
    logger.info("리액트 라우터에 위임")
    response.sendFile(path.join(__dirname, 'client/build/index.html'))
})