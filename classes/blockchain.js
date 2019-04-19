let sha256 = require('sha256');
let Bloco = require('./bloco');
class Blockchain {

    constructor() {
        this.dificuldade = '0';
        this.blocos = [];
        this.tamanho = 0;

        let genesis = new Bloco(this.tamanho, '', this.dificuldade);
        genesis.criarHash();
        this.adicionarBloco(genesis);
    }

    /**
     * Adiciona o bloco a Blockchain caso válido
     * @param { Bloco } bloco 
     */
    adicionarBloco(bloco) {
        if (this.validarBloco(bloco)) {
            this.blocos.push(bloco);
            this.tamanho++;
        }
    }

    /**
     * Retorna TRUE caso o Bloco seja válido
     * @param {Bloco} bloco
     * @return boolean  
     */
    validarBloco(bloco) {
        if (!bloco.hash.startsWith(this.dificuldade)) return false;
        if (sha256(bloco.key()) != bloco.hash) return false;
        if (bloco.index != this.tamanho) return false;
        return true;
    }

    /**
     * Retorna o Hash do Ultimo bloco que deve ser adicionado no próximo
     * @return string
     */
    ultimoHash() {
        return this.blocos[this.blocos.length - 1].hash;
    }
}
//Permite a classe ser exportada
module.exports = Blockchain;