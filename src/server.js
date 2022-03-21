const express = require("express");
const app = express();

/**
 * Colocar servidor no ar
 * process.env.PORT     -> Variável de ambiente.
 */
 const PORTA = process.env.PORT || 8081;
 app.listen(PORTA,function(){
     console.log('Servidor rodando na porta 8081');
 });

/**
 * caminhos estaticos
 * ./           -> indica o diretório raiz do projeto
 * __dirname    -> retorna o diretório do arquivo que está sendo executado, no caso, o server.js
 */
app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/mask', express.static('./node_modules/jquery-mask-plugin/dist'));
app.use('/publico', express.static(__dirname + '/publico'));
 
/**
 * Requisições
 */
app.get('/form-album',function(req, resp){
    resp.sendFile(__dirname + '/views/form-album.html');
});

app.post('/cadastro-album',function(req, resp){
    console.log("Cheguei até a rota");
});