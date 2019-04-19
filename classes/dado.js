class Dado {

    /**
     * Construtor da Classe
     * @param {string} autor 
     * @param {string} mensagem 
     */
    constructor(autor, mensagem) {
        this.autor = autor;
        this.mensagem = mensagem;
    }
}

//Permite ser importada em outros arquivos
module.exports = Dado;