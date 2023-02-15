const mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "empdetails",
    dialect: "mysql"

    // pool: {
    //     max: 5,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000
    // }


});

connection.connect(function (err) {
    if (!err) {
        console.log('database is connected');
    }
    else {
        console.log('database is not connected' + err.message);
    }
})

module.exports=connection