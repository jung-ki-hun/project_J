/*****************************/
/******db 연결부 코드구현******/
/*****************************/

// const db_config = require('../../db.js')
// const conn = db_config.init()
// db_config.connect(conn)
var jkh_fun = require('./jkh_fun.js');

var db_data = {
    db_pw: null,
    db_name: null,
    db_email: null
};
var response = {
    state: 1,
    query: null,
    msg: 'Succesful'
};//사용자 이름 전송용 

module.exports = {
    userSelect: (req, res, conn, req_data) => {

        //console.log('이메일 : ' + email);//확인용용
        let sql = 'SELECT * FROM user_database WHERE user_email = ? AND user_password = ?';  //가져오기
        if (isEmpty(req_data)) {
            console.log('프론트로부터 로그인 정보 수집 실패');
        }
        else {
            conn.query(sql, [req_data.email, req_data.pw], function (err, results) {
                if (err) {
                    console.log('에러 : ' + error);
                }
                else {
                    try {
                        if (jkh_fun.isEmpty(results)) {
                            console.log("조회 결과 없음");
                            response.query = false;//이름없음
                            response.msg = 'failed';
                            return res.status(200).json(JSON.stringify(response));
                        }//조회 실패
                        else {
                            console.log('조회 결과 :' + results[0].user_name);//결과 출력
                            db_data.db_name = results[0].user_name;
                            response.query = db_data.db_name;
                            response.msg = 'Succesful';
                            // req.session.db_name = results[0];
                            // req.session.save();
                            req.session = db_data.db_name;
                            console.log(response);//결과 출력
                            console.log(req.session);//결과 출력
                            return res.status(200).json(JSON.stringify(response));

                            //세션에다가 결과 저장해야됨
                        }
                    }
                    catch (e) {
                        console.log(e + '// db조회중 오류 발생');
                    }
                }
            });
        }
    },
    userCreate: (req, res, conn, email, name, pw) => {
        var check_data = 1;// this.userCheck();
        if (check_data != 1) {

        }//중복 항목 존재시..
        else {
            let sql = 'INSERT into user_database values(?,?,?)';
            conn.query(sql, [email, name, pw], function (err, rows) {
                if (err) {
                    console.error(err);
                }//실패~!
                else {
                    console.log(rows);
                    response.msg = 'Succesful';
                    return res.status(200).json(JSON.stringify(response));
                }//성공~!
            })
        }//가입 성공시

    }, //회원 가입
    userchage: (req, res, conn, email) => {
        if (jkh_fun.isEmpty(email)) {
            response.msg = 'please enter to email';
        }
        else {
            let sql = 'UPDATE user_database set user_password =1234 WHERE user_email = ?';
            conn.query(sql, [email], function (err, rows) {
                if (err) {
                    console.error(err);
                }//디비 조회중 에러발생
                else {
                    try {
                        if (jkh_fun.isEmpty(results)) {
                            console.log("조회 결과 없음");
                            response.query = false;//이름없음
                            response.msg = 'failed';
                            return res.status(200).json(JSON.stringify(response));
                        }//조회 실패
                        else {
                            console.log('조회 결과 :' + results[0].user_name);//결과 출력

                            response.msg = 'Succesful';
                            console.log(response);

                            return res.status(200).json(JSON.stringify(response));
                        }
                    }
                    catch (e) {
                        console.log(e);
                    }
                }//정상적으로 디비 조회
            })
        }
    },
    //userCheck: async () => { return 1; }
}