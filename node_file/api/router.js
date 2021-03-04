/*****************************/
/*******초기 환경 설정*********/
/*****************************/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jkh_db_config = require('./process/login_db_Select');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ express: true }));


/*****************************/
/******db 연결부 코드구현******/
/*****************************/

// const db_config = require('../db.js')
// const conn = db_config.init()
// db_config.connect(conn)


/*****************************/
/******URL 관리 스크립트*******/
/*****************************/

//router 시작
router.post('/login', (req, res) => {
    var email = req.body.id;// || req.query.email,
    var pw = req.body.password;// || req.query.password

    /***************** */
    /** 리팩토링   **** */
    /***************** */
    jkh_db_config.userSelect(res, email, pw);

});
//로그인
router.post('logout',(req, res)=>{

})
//로그아웃
router.post('/regi', (req, res) => {
    var email = req.body.email;
    var name = req.body.username;
    var pw = req.body.password;
    /***************** */
    /** 리팩토링   **** */
    /***************** */
    
    jkh_db_config.userCreate(res, email, name, pw);
});//회원 가입
router.get('/repw', (req, res) => {
    var email = req.body.email;
    jkh_db_config.userchage(res, email);
});//비밀번호 찾기


router.post('/proposal', (req, res) => {
    res.redirect('index.html');
});
router.get('/', (req, res) => {
    res.redirect(302, '/web/index.html');
});//메인페이지로 이동

module.exports = router;