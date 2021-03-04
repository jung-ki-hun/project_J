var express = require("express");
var http = require('http'); // node 내장 모듈 불러옴 
var path = require('path');//경로
var static = require('serve-static');// 특정 폴더의 파일들을특정 패스로 접근할 수 있도록 만들어주는 외장 모듈
var cookieParser = require('cookie-parser');
var session = require('express-session');
var db = require('./db.js');
var MySQLStore = require("express-mysql-session")(session);
var router = require(`./api/router.js`);
var argv_ip = process.argv[2];
const app = express();
const dataset = {
	port: 3000,
	host: argv_ip != null ? argv_ip.toString() : '127.0.0.1'//'180.83.98.144' //'127.0.0.1'//'192.168.219.102'
	//테스트 하기위한 코드
}
var db_info = db.getConnection();
var sessionStore = new MySQLStore(db_info);

app.use('/', router); //router 파일 읽어들이기 
app.use(
	session({
		key: "session_cookie_name",
		secret: "session_cookie_secret",
		store: sessionStore,
		resave: false,
		saveUninitialized: false,
	})
);
app.use('/web', static(path.join(__dirname, 'web')));//--dirmane : js 파일이 있는 폴더경로

app.listen(dataset.port, dataset.host, () => {
	console.log('익스프레스로 웹 서버를 실행함 : ' + dataset.host + ":" + dataset.port);
	console.log(__dirname);
	console.log(argv_ip);
	console.log(db_info);

});
