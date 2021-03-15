/*****************************/
/******db 연결부 코드구현******/
/*****************************/

// const db_config = require('../../db.js')
// const conn = db_config.init()
// db_config.connect(conn)
var jkh_fun = require('./jkh_fun.js');
var fs =require('fs');
// var db_data = {
//     db_name: null,
//     db_price: null,
//     db_qrcode: null,
//     db_stock: null,
//     qrcode_check : null,
// };
var response = {
    state: 1,
    query: null,
    msg: 'Succesful'
};//사용자 이름 전송용 

module.exports = {
    listSelect: async (res, conn) => {

        //console.log('이메일 : ' + email);//확인용용
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
                        //db_data.db_name = results[0].user_name;
                        var str = '', rr = JSON.stringify(results);
                        console.log(rr);//results[i].name);//결과 출력
                        // for (var i = 0; i < results.length; i++) {
                        //     // var stock = result[i].stock *10;
                        //     // var qrcode = results[i].qr_code;
                        //     // var price = results[i].price;
                        //     // var name = results[i].name;
                        //     // var qrcode_check =result[i].QRcode_check;
                        //     str += `<tr>
						// 	<td>
						// 		<h6 class="mt-0 m-b-5">${results[i].QRcode_check}</h6>
						// 		<p class="m-0 font-14">${results[i].name}</p>
						// 	</td>							
						// 	<td>${results[i].price}</td>
						// 	<td>${results[i].qr_code}</td>
						// 	<td>
						// 		<div class="progress" style="height: 5px;">
						// 			<div class="progress-bar bg-danger" role="progressbar" style="width:${results[i].stock}0%;"
						// 				aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
						// 		</div>
						// 	</td>
						// 	<td>
						// 		<a href="javascript:void(0);" class="m-r-15 text-muted" data-toggle="tooltip"
						// 			data-placement="top" title="" data-original-title="Edit"><i
						// 				class="mdi mdi-pencil font-18"></i></a>
						// 		<a href="javascript:void(0);" class="text-muted" data-toggle="tooltip"
						// 			data-placement="top" title="" data-original-title="Delete"><i
						// 				class="mdi mdi-close font-18"></i></a>
						// 	</td>
						// </tr>`;
                        // }
               
                        //console.log(str);
                        response.query = rr;//str;//db_data;
                        response.msg = 'Succesful';

                        //console.log(response.query);//결과 출력
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