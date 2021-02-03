var express = require("express");
var http = require('http'); // node 내장 모듈 불러옴 
var path = require('path');//경로
var static = require('serve-static');// 특정 폴더의 파일들을특정 패스로 접근할 수 있도록 만들어주는 외장 모듈
var cookieParser = require('cookie-parser');
var router = require(`./api/router.js`);
//var ip = '127.0.0.1';///`180.83.98.144`;///"203.241.228.134";//서버주소//당분간 로컬로 진행
var app = express();
const dataset ={
	port : 3000,
	host :'127.0.0.1'
}

app.use('/', router); //router 파일 읽어들이기

app.use('/web', static(path.join(__dirname, 'web')));//--dirmane : js 파일이 있는 폴더경로

app.listen(dataset.port,dataset.host,()=>{
	console.log('익스프레스로 웹 서버를 실행함 : ' + dataset.host+":"+ dataset.port);
	console.log(__dirname);
});
