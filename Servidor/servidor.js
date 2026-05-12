// Importa os módulos necessários
const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const path = require('path');
const fs = require('fs');

const MongoClient = mongodb.MongoClient;
const app = express();
const server = http.createServer(app);

//app.use('/paginas', express.static(path.join(__dirname, 'paginas')));
// Servir arquivos estáticos (HTML, CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));
//interpretar dados de formulario
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//ejs configuração
app.set('view engine', 'ejs');
app.set('view', './view');
// URL de conexão com MongoDB
const uri = "mongodb+srv://caueaquino09:Nn5oH6tNv22Boxss@sitelivros.4lm0eg3.mongodb.net/?appName=SiteLivros"; 


// Conexão com o MongoDB
MongoClient.connect(uri)
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
  });

// Cadastro de usuário 
app.post("/cadastrar_usuario", (req, res) => {
  const { nome, senha } = req.body;

  if (!nome || !senha) {
    return res.status(400).send("Campos obrigatórios não preenchidos!");
  }

  const novoUsuario = { nome, senha };

  usuarios.insertOne(novoUsuario, (err) => {
    if (err) {
      return res.status(500).send("Erro ao cadastrar usuário!");
    }

    return res.redirect('/login.html');
  });
});

// Login de usuário 
app.post("/logar_usuario", async (req, res) => {
  try {
    const { nome, senha } = req.body;

    if (!nome || !senha) {
      return res.status(400).send("Nome e senha são obrigatórios!");
    }

    const user = await usuarios.findOne({
        nome,
        senha
      });

      if (!user) {
        return res.status(401).send("Usuário inválido");
      }
      
    
    return res.redirect('/Perfil.html');}
  catch (erro) {
    console.error(erro);
    return res.status(500).send("Erro no servidor");
     }
});
 app.post("/Escrever_Critica", (req, res) => {
   const { resposta, arquivo } = req.body;
 
   if (!resposta || !arquivo) {
     return res.status(400).send("Resposta ou arquivo ausente.");
   }
 
   const caminhoArquivo = path.join(__dirname, 'public', arquivo);
   console.log(caminhoArquivo);
   fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
     if (err) {
       console.error("Erro ao ler o arquivo:", err);
       return res.status(500).send("Erro ao ler o arquivo.");
     }
 
     const marcador = "<!-- CRITICAS-AQUI -->";
     const novaResposta = `
          <div class="usuario">\n

          <div class="avatar"><img src="https://i.pinimg.com/564x/c7/ab/cd/c7abcd3ce378191a3dddfa4cdb2be46f.jpg"></div>\n

          <div class="conteudo-critica">\n
            <h3>Título da Crítica</h3>\n
            <p>${resposta}</p>\n
          </div>\n
          <h4>Escreva:</h4>\n
          <form method="post" action="/Escrever_Resposta">\n
          <textarea name="resposta" rows="4" cols="80" placeholder="Digite sua Resposta..."></textarea><br>\n
          <input type="hidden" name="arquivo" value="hungergames.html">\n
          <input type="submit" value="Enviar">\n
          </form>\n
        </div>\n

        <div class="avaliacao">\n
          Avaliação: ☆ ☆ ☆ ☆ ☆\n
        </div>\n
        <!-- RESPOSTAS-AQUI -->
        `;  
 
     if (!data.includes(marcador)) {
       return res.status(500).send("Arquivo não possui marcador de respostas.");
     }
 
     const novoConteudo = data.replace(marcador, `${novaResposta}${marcador}`);
 
     fs.writeFile(caminhoArquivo, novoConteudo, 'utf8', (err) => {
       if (err) {
         console.error("Erro ao salvar resposta:", err);
         return res.status(500).send("Erro ao salvar resposta.");
       }
 
       res.redirect(`/${arquivo}`);
     });
   });
 }); 

  app.post("/Escrever_Resposta", (req, res) => {
   const { resposta, arquivo } = req.body;
 
   if (!resposta || !arquivo) {
     return res.status(400).send("Resposta ou arquivo ausente.");
   }
 
   const caminhoArquivo = path.join(__dirname, 'public', arquivo);
   console.log(caminhoArquivo);
   fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
     if (err) {
       console.error("Erro ao ler o arquivo:", err);
       return res.status(500).send("Erro ao ler o arquivo.");
     }
 
     const marcador = "<!-- RESPOSTAS-AQUI -->";
     const novaResposta = `
          <div class="usuario">\n

          <div class="avatar"><img src="https://i.pinimg.com/564x/c7/ab/cd/c7abcd3ce378191a3dddfa4cdb2be46f.jpg"></div>\n

          <div class="conteudo-critica">\n
            <h3>Título da Crítica</h3>\n
            <p>${resposta}</p>\n
          </div>\n
          <h4>Escreva:</h4>\n
          <form method="post" action="/Escrever_Resposta">\n
          <textarea name="resposta" rows="4" cols="80" placeholder="Digite sua Resposta..."></textarea><br>\n
          <input type="hidden" name="arquivo" value="hungergames.html">\n
          <input type="submit" value="Enviar">\n
          </form>\n
        </div>\n

        <div class="avaliacao">\n
          Avaliação: ☆ ☆ ☆ ☆ ☆\n
        </div>\n
        
        `;  
 
     if (!data.includes(marcador)) {
       return res.status(500).send("Arquivo não possui marcador de respostas.");
     }
 
     const novoConteudo = data.replace(marcador, `${novaResposta}${marcador}`);
 
     fs.writeFile(caminhoArquivo, novoConteudo, 'utf8', (err) => {
       if (err) {
         console.error("Erro ao salvar resposta:", err);
         return res.status(500).send("Erro ao salvar resposta.");
       }
 
       res.redirect(`/${arquivo}`);
     });
   });
 }); 

 





