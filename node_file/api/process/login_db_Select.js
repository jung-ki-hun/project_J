/*****************************/
/******db 연결부 코드구현******/
/*****************************/

const db_config = require('../../db.js')
const conn = db_config.init()
db_config.connect(conn)
var jkh_fun = require('../process/jkh_fun.js');

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
    userSelect: async (res,email, pw) => {
        console.log('이메일 : ' + email);//확인용용
        let sql = 'SELECT * FROM user_database WHERE user_email = ? AND user_password = ?';  //가져오기
        conn.query(sql, [email, pw], function (err, results) {
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
                        console.log(response);
                       
                        return res.status(200).json(JSON.stringify(response));
                    }
                }
                catch (e) {
                    console.log(e + '// db조회중 오류 발생');
                }
            }
        });
    },
    userCreate: () => { }
}