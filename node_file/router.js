var express = require('express');
const router = express.Router();
const db = require('./db');
const db_config = require(__dirname + '/db.js')
const conn = db_config.init()
db_config.connect(conn)
/*****************************/
/******URL 관리 스크립트*******/
/*****************************/

//router 시작

router.use('/', (req, res, next) => {
    try {
        res.redirect('web/index.html');//메인페이지로 가는것
    }
    catch (e) {
        console.log(e + '메인페이지로 이동 불가');
    }
    //console.log(req);
    next();
})
router.post('/login', (req, res) => {
    let email = req.body.email;
    let pw = req.body.password;
    var db_email;
    var db_pw;
    var db_name;
    const response = {
        state: 1,
        query: null,
        msg: 'Succesful'
    }
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
                res.redirect('/index.html');
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
});
// router.get('/',(req,res)=>{
//     res.redirect('index.html');
// });
// router.get('/',(req,res)=>{
//     res.render();
// });

module.exports = router;