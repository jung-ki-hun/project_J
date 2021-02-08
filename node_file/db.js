const mysql = require('mysql');
const dataset = require('./app.js');
const db_info = {
    // host: '127.0.0.1',
    // port: '3306',
    // user: 'ghtest',
    // password: 'ghtestpwd2@',
    // database: 'ghtest_db'
    host: dataset.host,//'192.168.219.100',//'127.0.0.1',//'180.83.98.144',//'203.241.228.134',//
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
    },
    clsose: function (conn) {
        conn.disconnect(function (err) {
            if (err) {
                console.error('mysql connection error : ' + err);
            }
            else {
                console.log('mysql connection disconnectting');
            }
        });
    }
}
