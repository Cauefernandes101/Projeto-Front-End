// Importa os módulos necessários
const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
//const mongodb = require("mongodb");
const path = require('path');
//const fs = require('fs');

//const MongoClient = mongodb.MongoClient;
const app = express();
const server = http.createServer(app);


// Servir arquivos estáticos (HTML, CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// URL de conexão com MongoDB
//const uri = "";

server.listen(3000);
console.log("servidor rodando...")



// Conexão com o MongoDB
/*MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    const db = client.db("exemplo_bd");
    usuarios = db.collection("usuarios");
    console.log("Conectado ao MongoDB.");

    // Inicia o servidor SOMENTE após a conexão com o banco
    server.listen(3000, () => {
      console.log("Servidor rodando em http://localhost:3000");
    });
  })
  .catch(err => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });*/





