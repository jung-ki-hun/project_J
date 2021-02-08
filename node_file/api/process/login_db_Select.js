const response = {
    state: 1,
    query: null,
    msg: 'Succesful'
}//사용자 이름 전송용 


module.exports = {
    userSelect: (conn,db , res) => {
        console.log('이메일 : ' + email);//확인용용
        let sql = 'SELECT * FROM user_database WHERE user_email = ? AND user_password = ?';  //가져오기
        conn.query(sql, [email, pw], function (err, results) {
            if (err) {
                console.log('에러 : ' + error);
            }
            else {
                try {
                    if (results != null) {
                        console.log('조회 결과 :' + results);//결과 출력
                        //db_name = results[0].user_name;
                        response.query = db_name;
                        res.redirect();
                        res.render('./web/index.html');
                        res.end();
                    }
                    else {
                        console.log("조회 결과 없음");
                        response.query = false;
                    }
                }
                catch (e) {
                    console.log(e + ' db조회중 오류 발생');
                }
            }
           //console.log(results);
        });
        return res.status(200).json(response);
    }
}