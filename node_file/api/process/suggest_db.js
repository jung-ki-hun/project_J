var jkh_fun = require('../process/jkh_fun.js');
var response = {
    state: 1,
    query: null,
    msg: 'Succesful'
};//사용자 이름 전송용 

module.exports = {
    addsuggest: async (req,res,conn, data_sug) => {
            let sql = 'INSERT into user_database values(?,?,?)';
            conn.query(sql, [data_sug.email,data_sug.name,data_sug.msg], function (err, rows) {
                if (err) {
                    console.error(err);
                }//실패~!
                else {
                    console.log(rows);
                    response.msg = 'Succesful';
                    return res.status(200).json(JSON.stringify(response));
                }//성공~!
            })
        //가입 성공시

    }, 
    
    //userCheck: async () => { return 1; }
}