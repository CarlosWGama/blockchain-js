let Bloco = require('./classes/bloco');
let Blockchain = require('./classes/blockchain');

let bc = new Blockchain();
//Cria o Bloco
let bloco = new Bloco(bc.tamanho, bc.ultimoHash(), bc.dificuldade);
bloco.adicionarInformacao('Carlos', 'Hello World');
bloco.adicionarInformacao('Carlos', 'Certificado X na data dd/mm/YYYY');
bloco.criarHash();

//Adiciona a Blockchain
bc.adicionarBloco(bloco);

console.log(bc.blocos);