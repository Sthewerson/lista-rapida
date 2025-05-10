const express = require("express");
const app = express();
const itensRouter = require("./routes/itens");

app.use(express.json());
app.use("/itens", itensRouter);

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor rodando na porta 3000");
});
