const mysql = require('mysql');

const {promisify} = require('util');

const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION LOST');
    };
    if(connection) connection.release();
    console.log('DB is connected');
    return;
}});


pool.query = promisify(pool.query);

module.exports = pool;



