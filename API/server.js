const express = require('express');
const path = require('path');
const app = express();

const logger = require("./logger");

var indexRouter = require('./routes/index');
var testRouter = require('./routes/test');

app.listen(8080, () => { logger.info("Server listening on port 8080"); })

// 유저가 보낸 array/object 데이터 출력해보기 위해 필요
app.use(express.json())
// 다른 도메인 주소끼리 ajax 요청 주고 받을때 필요
// npm install cors
// let corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true
// }
var cors = require("cors")
app.use(cors(corsOptions))

// 모듈로 분리
app.use('/', indexRouter);
app.use('/test', testRouter);