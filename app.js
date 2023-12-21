const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const config = require('./config');
const cors = require('cors'); // Importe o módulo cors

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use o middleware cors para habilitar o CORS
app.use(cors());


// Configuração do banco de dados
const db = mysql.createConnection(config.database);

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conexão bem-sucedida ao banco de dados");
});

// Rotas da API
app.get("/produtos", (req, res) => {
  db.query("SELECT * FROM produtos", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Erro ao buscar produtos" });
      return;
    }
    res.json(results);
  });
});

app.get("/produtos/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  db.query(
    "SELECT * FROM produtos WHERE codigo = ?",
    [codigo],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Erro ao buscar produto" });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Produto não encontrado" });
        return;
      }
      res.json(results[0]);
    }
  );
});

app.post("/produtos", (req, res) => {
  const { codigo, nome, preco } = req.body;
  db.query(
    "INSERT INTO produtos (codigo, nome, preco) VALUES (?, ?, ?)",
    [codigo, nome, preco],
    (err) => {
      if (err) {
        res.status(500).json({ error: "Erro ao inserir produto" });
        return;
      }
      res.json({ message: "Produto inserido com sucesso" });
    }
  );
});

app.put("/produtos/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  const { nome, preco } = req.body;
  db.query(
    "UPDATE produtos SET nome = ?, preco = ? WHERE codigo = ?",
    [nome, preco, codigo],
    (err) => {
      if (err) {
        res.status(500).json({ error: "Erro ao atualizar produto" });
        return;
      }
      res.json({ message: "Produto atualizado com sucesso" });
    }
  );
});

app.delete("/produtos/:codigo", (req, res) => {
  const codigo = req.params.codigo;
  db.query(
    "DELETE FROM produtos WHERE codigo = ?",
    [codigo],
    (err) => {
      if (err) {
        res.status(500).json({ error: "Erro ao excluir produto" });
        return;
      }
      res.json({ message: "Produto excluído com sucesso" });
    }
  );
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
