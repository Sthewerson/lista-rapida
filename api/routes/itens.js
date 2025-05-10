const express = require("express");
const router = express.Router();
const db = require("../db");

// READ
router.get("/", (req, res) => {
  db.query("SELECT * FROM itens", (err, results) => {
    if (err) return res.status(500).json({ error: "Erro ao buscar itens" });
    res.json(results);
  });
});

// CREATE
router.post("/", (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ error: "Nome é obrigatório" });
  db.query("INSERT INTO itens (nome) VALUES (?)", [nome], (err, result) => {
    if (err) return res.status(500).json({ error: "Erro ao adicionar item" });
    res.status(201).json({ id: result.insertId, nome });
  });
});

// DELETE
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM itens WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: "Erro ao deletar item" });
    res.status(204).send();
  });
});

module.exports = router;
