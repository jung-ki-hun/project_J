var jkh_fun = require('./jkh_fun.js');
var response = {
    state: 1,
    query: null,
    msg: 'Succesful'
};//사용자 이름 전송용 

module.exports = {
    listSelect: async (res, conn) => {
        let sql = 'SELECT * FROM qrcode_database';  //가져오기
         conn.query(sql, function (err, results, fields) {
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
                        var str = '', rr = JSON.stringify(results);
                        response.query = rr;
                        response.msg = 'Succesful';
                        return res.status(200).json(JSON.stringify(response));
                    }
                }
                catch (e) {
                    console.log(e + '// db조회중 오류 발생');
                }
            }
        });

    },
}