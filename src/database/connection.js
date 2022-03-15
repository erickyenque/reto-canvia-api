import mysql from "mysql";
import config from "../config";

const mysqlConection = mysql.createConnection({
  host: config.dbServer,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbDatabase,
});

mysqlConection.connect(function (e) {
  if (e) {
    console.log(e);
  } else {
    console.log("DB is connected");
  }
});

export default mysqlConection;