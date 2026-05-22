# Projeto-Front-End
Para funcionar precisa-se instalar os modulos :
express → servidor web
body-parser → ler formulários e JSON
mongodb → conectar no MongoDB
express-session → sessões/login
ejs

Para funcionar o projeto precisa de conexão com o banco de dados caso nao esteja funcionando pode ser que o link atual seja do banco de dados do criador que é bloqueado por ip.
usamos mongodb banco nao relacional - como opção de conexão mongo db local funciona ou atlas com versão gratuita

Nesse projeto, nós fizemos um site para organizar e catalogar as leituras dos usuários. Onde
todos podem visualizar as notas e as críticas dos outros. No começo, nós fizemos uma tela de login,
se o usuário não tiver cadastrado, então eles podem clicar em "cadastrar-se" e serem redirecionados para a tela de cadastro, onde nós implementamos um banco de dados do mongodb para eles armazenarem os nomes dos usuários e suas senhas.
Assim que conseguirem fazer login, eles vão poder aproveitar o perfil, e a página inicial do site, onde é possível navegar e descobrir os livros arquivados no site. Um exemplo de navegação, é a lista de "populares" na página inicial, é visto os livros mais populares no momento, também na página inicial, tem as leituras recentes, e as 'recomendações' que mostram livros não lidos pelo usuário, que são similares aos lidos recentes. Para achar um livro específico, temos a barra de pesquisa, no canto superior direito, do lado do 'perfil', que completara e ajudará bastante os navegadores a achar um livro específico.
É possível aprender mais sobre um livro, ao clicar na sua capa ou no título abaixo da capa, onde o usuário é levado para a página do livro escolhido, onde podemos ver quem é o auto, em que ano ele foi lançado, quais os gêneros literários ele tem, e também uma pequena sinopse que fala uma breve descrição da história do livro.
Depois de verificar as informações do livro, é possível colocar um status do livro, entre 'planejo ler', 'lendo' e 'lido', para marcar o progresso do usuário no livro, assim que terminar, é possível atribuir uma nota ao livro de 1 a 5 estrelas, sendo 1 representando algo ruim, e 5 sendo incrível. Se também tiver vontade, pode escrever uma crítica do que achou do livro, e do que em específico.
Após catalogá-lo, ele aparecerá no seu perfil, e ele estará presente nas suas 'leituras recentes', para você ver o seu histórico de livros catalogados. Com mais livros catalogas, maior será a sua 'lista de livros', que mostrar o seu repertório e quantos livros você leu, e também, temos um gráfico de pizza, que mostrar os gêneros mais catalogados. 