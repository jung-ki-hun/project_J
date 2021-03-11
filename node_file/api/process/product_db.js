/*****************************/
/******db 연결부 코드구현******/
/*****************************/

// const db_config = require('../../db.js')
// const conn = db_config.init()
// db_config.connect(conn)
var jkh_fun = require('./jkh_fun.js');

var db_data = [{
    db_name: null,
    db_price: null,
    db_qrcode: null,
    db_stock: null,
    // db_data : (name,price,qrcode,stock) =>{
    //     this.db_name = name;
    //     this.db_price = price;
    //     this.db_qrcode =qrcode;
    //     this.db_stock =stock;
    // }
}];
var response = {
    state: 1,
    query: null,
    msg: 'Succesful'
};//사용자 이름 전송용 

module.exports = {
    userSelect: ( res, conn, req_data) => {

        //console.log('이메일 : ' + email);//확인용용
        let sql = 'SELECT * FROM qrcode_database ';  //가져오기


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
                        //db_data.db_name = results[0].user_name;
                        for (let i = 0; i < results.length; i++) {

                            db_data.push({
                                db_name: results[i].name,
                                db_price: results[i].price,
                                db_qrcode: results[i].qr_code,
                                db_stock: results[i].stock
                            });
                        }
                        response.query = db_data;
                        response.msg = 'Succesful';

                        console.log(response);//결과 출력
                        return res.status(200).json(JSON.stringify(response));

                        //세션에다가 결과 저장해야됨
                    }
                }
                catch (e) {
                    console.log(e + '// db조회중 오류 발생');
                }
            }
        });

    },
}