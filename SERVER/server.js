const express = require('express')
const path = require('path')
const app = express()

const logger = require("./logger");
 
logger.info("hello world");
logger.error("hello world");
logger.warn("hello world");
logger.debug("hello world");
logger.verbose("hello world");
logger.silly("hello world");

app.listen(8080, function (){
    console.log("listening on 8080")
})

// 유저가 보낸 array/object 데이터 출력해보기 위해 필요
app.use(express.json())

// 다른 도메인 주소끼리 ajax 요청 주고 받을때 필요
// npm install cors
let corsOptions = {
    origin: 'https://www.yakollyeo.com',
    credentials: true
}
var cors = require("cors")
app.use(cors(corsOptions))

// 리액트 환경 변수
app.use(express.static(path.join(__dirname, 'client/build')))

// 처음 접속시 호출됨
app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, 'client/build/index.html'))
});

// api 요청을 할수 있다.
app.get("/getData", function(request, response){
    // 서버에서 데이터를 받아온후 아래와같이 전달
    response.json({"value":"express에서 가져온 데이터"})
});

// 리액트 라우터에게 위임
app.get("*", function(request, response){
    response.sendFile(path.join(__dirname, 'client/build/index.html'))
})