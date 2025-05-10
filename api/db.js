const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "lista_rapida",
  port: process.env.DB_PORT || 3306,
});

const conectar = () => {
  connection.connect((err) => {
    if (err) {
      console.error("Erro ao conectar ao MySQL:", err);
      setTimeout(conectar, 2000); // tenta de novo em 2s
    } else {
      console.log("Conectado ao banco de dados MySQL");
    }
  });
};

conectar();

module.exports = connection;
