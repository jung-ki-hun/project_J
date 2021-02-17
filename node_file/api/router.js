/*****************************/
/*******초기 환경 설정*********/
/*****************************/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
//var login_Select = require('./process/login_db_Select');
var jkh_fun = require('./process/jkh_fun.js');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ express: true }));

/*****************************/
/****** session 코드구현 ******/
/*****************************/

var cookieParser = require('cookie-parser');
const expressSession = require('express-session');//세션
router.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // store: new MysqlStore({
    // 	url: "mongodb://localhost:27017/local",
    // 	collection: "sessions"
    // })
}));// 저장할 정보에 대해서 어떻게 할지..

/*****************************/
/******db 연결부 코드구현******/
/*****************************/

const db = require('../db');
const db_config = require('../db.js')
const conn = db_config.init()
db_config.connect(conn)


/*****************************/
/******URL 관리 스크립트*******/
/*****************************/

//router 시작
router.post('/login', (req, res) => {
    var email = req.body.email;// || req.query.email,
    var pw = req.body.password;// || req.query.password

    var db_data = {
        db_pw: null,
        db_name: null,
        db_email: null
    };
    var response = {
        state: 1,
        query: null,
        msg: 'Succesful'
    }//사용자 이름 전송용 

    console.log(req.body);//받은 데이터 확인인
    //console.log('이메일 : ' + email);//확인용용
    let sql = 'SELECT * FROM user_database WHERE user_email = ? AND user_password = ?';  //가져오기 
    conn.query(sql, [email, pw], function (err, results) {
        console.log(results);
        if (err) {
            console.log('에러 : ' + error);
        }
        else {
            try {
                if (jkh_fun.isEmpty(results)) {
                    console.log("조회 결과 없음");
                    response.query = false;//이름없음
                    response.msg = 'failed';
                    return res.status(200).json(JSON.stringify(response))
                }//조회 실패
                else {
                    console.log('조회 결과 :' + results[0].user_name);//결과 출력
                    db_data.db_name = results[0].user_name;
                    response.query = db_data.db_name; 
                    return res.status(200).json(JSON.stringify(response));
                    
                }
            }
            catch (e) {
                console.log(e + '// db조회중 오류 발생');
            }
        }
        
    });
    

});

router.get('/regi', (req, res) => {
    //res.redirect('index.html');
    let email = req.body.email;
    let pw = req.body.password;
    var db_email;
    var db_pw;
    var db_name;
    const response = {
        state: 1,
        query: null,
        msg: 'Succesful'
    }//사용자 이름 전송

    let sql = 'SELECT * FROM user_database WHERE user_email = ' + email + 'AND user_password = ' + pw  //가져오기
    conn.query(sql, function (err, results, field) {
        if (error) {
            console.log(error);
        }
        try {
            if (results != null) {
                console.log(results);//결과 출력
                db_name = results[0].user_name;
                response.query = db_name;
                res.redirect(__dirname + 'node_file/web/index.html');
            }
            else {
                response.query = 'field';
            }
        }
        catch (e) {
            console.log(e + 'db조회중 오류 발생');
        }
    });
    return res.status(200).json(response);
});//회원 가입
router.get('/repw', (req, res) => {
    res.redirect('index.html');
});//비밀번호 찾기
router.post('/proposal', (req, res) => {
    res.redirect('index.html');
});
router.get('/', (req, res) => {
    res.redirect(302, '/web/index.html');
});

module.exports = router;