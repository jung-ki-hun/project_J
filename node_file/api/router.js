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
/**********URL 관리***********/
/*****************************/

//접근제한 관련 코드 작성
router.post('/p/m/office',(req,res)=>{
    if(req.session.user)
    {
       res.redirect(302,`/web/office_function.html`); 
    }else
    {
        res.redirect(302,'/web/landing/office/index.html');
    }
});
router.get('/p/m/industry',(req,res)=>{
    if(req.session.user)
    {
       res.redirect(302,`/web/industry_function.html`); 
    }else
    {
        res.redirect(302,'/web/landing/industry/index.html');
    }
});


/*****************************/
/**********로그인 설정*********/
/*****************************/
router.post('/login', (req, res) => {
    var req_data = {
        email: req.body.id,
        pw: req.body.password
    }
    jkh_db_config.userSelect_post(req, res, conn, req_data);

});
//로그인 - 세션등록
router.get('/login', (req, res) => {
    try{
    var req_data = {
        name: req.session.user.name,
        email: req.session.user.email,
        pw: req.session.user.password
    }}
    catch(e){
       
    }
    jkh_db_config.userSelect_get(req, res, conn, req_data);
})
//로그인 - 닉네임 추출
router.post('/logout', (req, res) => {
    jkh_db_config.userdisable(req, res, conn);
})
//로그아웃
router.post('/regi', (req, res) => {

    var req_data = {
        email: req.body.email,
        pw: req.body.password,
        name: req.body.username,
    }
    jkh_db_config.userCreate(req, res, conn, req_data);
});
//회원 가입
router.post('/repw', (req, res) => {
    var email = req.body.email;
    jkh_db_config.userchage(req, res, conn, email);
});
//비밀번호 찾기

/*****************************/
/*******게시판 환경 소스*******/
/*****************************/

router.post('/suggest', (req, res) => {
    var data_sug = {
        email: req.body.email,
        name: req.body.name,
        msg: req.body.message,
        title:req.body.title
    }
    jkh_suggest.addsuggest(req, res, conn, data_sug);
});
router.get('/suggest/list', (req, res) => {
    // var data_sug = {
    //     email: req.body.email,
    //     name: req.body.name,
    //     msg: req.body.message,
    //     title:req.body.title
    // }
    jkh_suggest.listsuggest(req, res, conn);
});
//건의 사항 접수

/*****************************/
/*********제품 관리 환경*******/
/*********사무실 페이지********/
/*****************************/

router.get('/p/list', (req, res) => {
    jkh_product.listSelect(res, conn);
});
//제품리스트 반환

router.post('/p/buy', (req,res) => {
    var data_sug = {
        listname : req.body.name,
        count : req.body.count
    }
    jkh_product.buySelect(req,res,conn,data_sug); 
});
//제품 구매
router.get('/p/order/list', (req,res) => {
    jkh_product.order_history_list(res,conn);
})//발주 기록
router.post('/p/buy/out', (req,res) => {
    var data_sug = {
        listname : req.body.name,
        count : req.body.count,
        qr_code : req.body.qr_code
    }
    jkh_product.out_order_history_list(req,res,conn,data_sug);
})//출고 명령

/*****************************/
/******최상위 환경 페이지******/
/*****************************/
router.post('/')

//'//web/landing/industry/index.html' 일때 로그인의 유무를 판단하는 기능 구현
router.get('/', (req, res) => {
    req.session;

    res.redirect(302, '/web/index.html');
});
//메인페이지로 이동

module.exports = router;