var jkh_fun = require('./jkh_fun.js');
var response = {
    state: 1,
    query: null,
    msg: 'Succesful'
};//사용자 이름 전송용 

var price = (conn, data_sug) => {
    let sql = 'SELECT * FROM qrcode_database WHERE name = ? ';  //가져오기
    conn.query(sql, [data_sug.listname], function (err, results, fields) {
        if (err) {
            console.error(`${jkh_fun.date_time()} : price is not fined => ${err}`);
        }
        else {
            try {
                if (jkh_fun.isEmpty(results)) {
                    console.log(`${jkh_fun.date_time()} : undifined price data`);
                    var data_price = null;
                    return data_price;
                }//조회 실패
                else {
                    data_price = results[0].price;
                    console.log(`${jkh_fun.date_time()} : price data => ${data_price}`);
                    return data_price;
                }
            }
            catch (e) {
                console.log(`${jkh_fun.date_time()} : database Searching => ${e}`);
            }
        }
    });
}//가격 들고오는 함수
var add_stock = (conn, data_sug) => {
    let sql = 'UPDATE qrcode_database SET stock = stock + ? WHERE name = ?';
    conn.query(sql, [data_sug.count, data_sug.listname], function (err) {
        if (err) {
            console.error(`${jkh_fun.date_time()} : stock is not updata => ${err}`);
            return;
        }//실패~!
        else {
            console.log(`${jkh_fun.date_time()} : chage stock data`);
            response.msg = 'Succesful';
            return;
        }//성공~!
    })

}//제고 채워줌
var order_history = (res, conn, data_price, data_sug) => {
    var data = {
        price: data_price ,//* data_sug.count,
        username: data_sug.listname,
        date: jkh_fun.date_ymd()
    }
    let sql = 'INSERT into orderhistory(price, UserName, Mdate) values(?,?,?)';
    conn.query(sql, [data.price, data.username, data.date], function (err) {
        if (err) {
            console.error(`${jkh_fun.date_time()} : add not order history => ${err}`);
        }//실패~!
        else {
            console.log(`${jkh_fun.date_time()} : add order history data`);
            response.msg = 'Succesful';
            return res.status(200).json(JSON.stringify(response));
        }//성공~!
    })
}
module.exports = {
    listSelect: (res, conn) => {
        let sql = 'SELECT * FROM qrcode_database';  //가져오기
        conn.query(sql, async function (err, results, fields) {
            if (err) {
                console.error(`${jkh_fun.date_time()} : product list is not fined => ${err}`);
            }
            else {
                try {
                    if (jkh_fun.isEmpty(results)) {
                        console.log(`${jkh_fun.date_time()} : undifined data`);
                        response.query = false;//이름없음
                        response.msg = 'failed';
                        return res.status(200).json(JSON.stringify(response));
                    }//조회 실패
                    else {
                        var rr = JSON.stringify(results);
                        response.query = rr;
                        response.msg = 'Succesful';
                        console.log(`${jkh_fun.date_time()} : defined data => good!`);
                        return res.status(200).json(JSON.stringify(response));
                    }
                }
                catch (e) {
                    console.log(`${jkh_fun.date_time()} : database Searching => ${e}`);
                }
            }
        });

    },
    buySelect: async (req, res, conn, data_sug) => {
        var data_price =  price(conn, data_sug); // 가격 들고옴
        //console.log(data_price);
        var data_stock = await add_stock(conn, data_sug); //제고 업데이트
        var order_history1 = await order_history(res, conn, data_price, data_sug);

    },
    order_history_list: (res, conn) => {
        let sql = 'SELECT * FROM orderhistory';  //가져오기
        conn.query(sql, async function (err, results, fields) {
            if (err) {
                console.error(`${jkh_fun.date_time()} : product list is not fined => ${err}`);
            }
            else {
                try {
                    if (jkh_fun.isEmpty(results)) {
                        console.log(`${jkh_fun.date_time()} : undifined data`);
                        response.query = false;//이름없음
                        response.msg = 'failed';
                        return res.status(200).json(JSON.stringify(response));
                    }//조회 실패
                    else {
                        var rr = JSON.stringify(results);
                        response.query = rr;
                        response.msg = 'Succesful';
                        console.log(`${jkh_fun.date_time()} : order defined data => good!${rr}`);
                        return res.status(200).json(JSON.stringify(response));
                    }
                }
                catch (e) {
                    console.log(`${jkh_fun.date_time()} : database Searching => ${e}`);
                }
            }
        });
    }
    //제품추가  -> 1. 재고량 변경 2. 주문기록 테이블에 추가
}