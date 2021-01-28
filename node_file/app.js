var express = require("express");
var http = require('http'); // node 내장 모듈 불러옴 
var static = require('serve-static');// 특정 폴더의 파일들을특정 패스로 접근할 수 있도록 만들어주는 외장 모듈
var path = require('path');//경로
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = require(`./router.js`);
var ip = `127.0.0.1`;///"203.241.228.134";//서버주소//당분간 로컬로 진행
var app = express();
app.set('port', process.env.PORT || 3000);//3000번 포트 개방
app.disable(`x-powered-by`);
///////////////////////////////////
const db_config = require(__dirname + '/db.js')
const conn = db_config.init()
db_config.connect(conn)

app.use('/',router); //router 파일 읽어들이기

http.createServer(app).listen(app.get('port'), ip, function () {

	console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port'));
	connectDB();

}); 