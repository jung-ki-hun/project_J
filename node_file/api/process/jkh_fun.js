var isEmpty = (str) => {

    if (typeof str == "undefined" || str == null || str == "")
        return true;
    else
        return false;
}

var log_save = async (conn, titie, error_data) => {
    let sql1 = 'SELECT * FROM og_database ORDER BY count_d DESC limit 1';
     let limit_num = await conn.query(sql1,()=>{
        return 
    });
}
module.exports = {
    isEmpty,
}
