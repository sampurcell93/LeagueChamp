var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'LeagueChamp',
  password : ''
});

connection.connect();

module.exports = connection;

// dump_rows(db.query(""));
