var mysql = require('mysql');

connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0504',
  database: 'portal_noticias'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = function () {
  return connection;
}