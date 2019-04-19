//API
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());

//Blockchain
let Bloco = require('./classes/bloco');
let Blockchain = require('./classes/blockchain');

let bc = new Blockchain();

//-------------- ROTAS ----------------//
//Retornar os blocos da Blockchain
app.get('/blockchain', (req, res) => {
    res.send(bc.blocos);
});

//Salva nova informação na Blockchain
app.post('/blockchain', (req, res) => {
    let bloco = new Bloco(bc.tamanho, bc.ultimoHash(), bc.dificuldade);

    //Recebe um objeto do tipo {autor:string, msg:string}[]
    req.body.forEach((dado) => {
        bloco.adicionarInformacao(dado.autor, dado.msg);
    })
    
    bloco.criarHash();

    bc.adicionarBloco(bloco);
    res.send(bloco);
});

app.listen('3000', () => {
    console.log('Servidor Inicido na porta 3000');
});
