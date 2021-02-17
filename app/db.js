

const mysql = require('mysql');
const db_info = {
    // host: '127.0.0.1',
    // port: '3306',
    // user: 'ghtest',
    // password: 'ghtestpwd2@',
    // database: 'ghtest_db'
    host: '203.241.228.134',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'ghtest'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function (conn) {
        conn.connect(function (err) {
            if (err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}
