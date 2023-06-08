const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'u417213122_moviewala',
    password: '4@vmH5&Pu',
    database : 'u417213122_moviewalas'
});

module.exports = connection;