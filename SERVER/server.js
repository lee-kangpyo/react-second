const express = require('express')
const path = require('path')
const app = express()

app.listen(8080, function (){
    console.log("listening on 8080")
})

// 유저가 보낸 array/object 데이터 출력해보기 위해 필요
app.use(express.json())
// 다른 도메인 주소끼리 ajax 요청 주고 받을때 필요
// npm install cors
var cors = require("cors")
app.use(cors())

app.use(express.static(path.join(__dirname, 'client/build')))

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, 'client/build/index.html'))
});

// api 요청을 할수 있다.
app.get("/getData", function(request, response){
    // 서버에서 데이터를 받아온후 아래와같이 전달
    response.json({"value":"express에서 가져온 데이터"})
});


app.get("*", function(request, response){
    response.sendFile(path.join(__dirname, 'client/build/index.html'))
})