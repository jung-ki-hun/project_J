/*****************************/
/*******초기 환경 설정*********/
/*****************************/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jkh_db_config = require('./process/login_db');
var jkh_suggest = require('./process/suggest_db');
var jkh_product = require('./process/product_db');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ express: true }));


/*****************************/
/******db 연결부 코드구현******/
/*****************************/

const db_config = require('../db.js')
const conn = db_config.init()
db_config.connect(conn)


/*****************************/
/******URL 관리 스크립트*******/
/*****************************/

//router 시작
router.post('/login', (req, res) => {
    var req_data = {
        email: req.body.id,
        pw: req.body.password
    }
    jkh_db_config.userSelect_post(req, res, conn, req_data);

});
router.get('/login', (req, res) => {
    //이름 보내주는 기능 만들기
    var req_data = {
        name: req.session.user.name,
        email: req.session.user.email,
        pw: req.session.user.password
    }
    jkh_db_config.userSelect_get(req, res, conn, req_data);
})
//로그인
router.post('/logout', (req, res) => {
    jkh_db_config.userdisable(req, res, conn);
})//로그아웃

router.post('/regi', (req, res) => {

    var req_data = {
        email: req.body.email,
        pw: req.body.password,
        name: req.body.username,
    }
    jkh_db_config.userCreate(req, res, conn, req_data);
});//회원 가입

router.get('/repw', (req, res) => {
    var email = req.body.email;
    jkh_db_config.userchage(req, res, conn, email);
});//비밀번호 찾기


router.post('/suggest', (req, res) => {
    var data_sug = {
        email: req.body.email,
        name: req.body.name,
        msg: req.body.msg
    }
    jkh_suggest.addsuggest(req, res, conn, data_sug);
});


router.get('/p/list', (req, res) => {
    jkh_product.listSelect(res, conn);
});

router.post('/')
//'//web/landing/industry/index.html' 일때 로그인의 유무를 판단하는 기능 구현
router.get('/', (req, res) => {
    req.session;
    res.redirect(302, '/web/index.html');
});//메인페이지로 이동

module.exports = router;