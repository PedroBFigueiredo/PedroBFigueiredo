const express = require("express");
const app = express();

/**
 * Caminhos estáticos
 */
app.use('/bscss', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/popperjs', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));


app.listen(3000,function(){
    console.log('Servidor rodando na porta 3000');
});

app.get('/', function(req, resp){
    resp.sendFile(__dirname + '/views/formulario.html')
});