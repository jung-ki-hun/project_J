

module.exports = {
    userSelect: (conn,db ,req_data, res) => {
        console.log('이메일 : ' + email);//확인용용
        let sql = 'SELECT * FROM user_database WHERE user_email = ? AND user_password = ?';  //가져오기
        conn.query(sql, [req_data.email,req_data.password], function (err, results) {
            if (err) {
                console.log('에러 : ' + error);
            }
            else {
                try {
                    if (results != null) {
                        console.log('조회 결과 :' + results);//결과 출력
                        db.b_name = results[0].user_name;
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
           console.log(results);
        });
        return res.status(200).json(response);
    }
}