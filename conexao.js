const mysql = require("mysql2");
function execSQLQuery(sqlQry, res) {
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "atividade4",
  });

  connection.query(sqlQry, function (error, results, fields) {
    if (error) res.json(error);
    else res.json(results);
    connection.end();
    console.log("executou!");
  });
}

exports.execSQLQuery = execSQLQuery;