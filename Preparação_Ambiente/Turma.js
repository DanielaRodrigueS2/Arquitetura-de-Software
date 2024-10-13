module.exports = class Turma {
    
    constructor(codigo, nota) {
        this.codigo = codigo
        this.nota = nota
    }
    aprovado(){
        //Caso a nota seja maior ou igual a 6 irá retornar true
        return this.nota >= 6
    }
}
