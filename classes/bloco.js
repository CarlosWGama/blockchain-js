let Dado = require('./dado');
let sha256 = require('sha256');

class Bloco {
    /**
     * Construtor da Classe
     * @param {number} index 
     * @param {string} hashAnterior 
     * @param {string} dificuldade 
     */
    constructor(index, hashAnterior, dificuldade) {
        this.index = index;
        this.hashAnterior = hashAnterior;
        this.dificuldade = dificuldade;
        this.nonce = 0;
        this.dados = [];
        this.hash = '';
    }

    /**
     * Informa os valores que vão ser adicionados nos dados do bloco
     * @param {string} autor 
     * @param {string} msg 
     */
    adicionarInformacao(autor, msg) {
        this.dados.push(new Dado(autor, msg));
    }

    /**
     * Retorna todos os dados que devem compor o hash
     * @return string
     */
    key() {
        return JSON.stringify(this.dados) + this.index + this.hashAnterior + this.dificuldade + this.nonce;
    }

    /**
     * Realiza a prova de trabalho para Gerar um Hash com a dificuldade informada
     */
    criarHash() {
        do {
            this.nonce++;
            this.hash = sha256(this.key());
        } while (!this.hash.startsWith(this.dificuldade));   
    }
}
//Exporta a classe para outros arquivos
module.exports = Bloco;