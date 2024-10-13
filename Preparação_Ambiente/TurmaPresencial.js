
module.exports = class TurmaPresencial extends Turma{
    
    constructor(frequencia, codigo, nota){
        this.codigo = codigo
        this.nota = nota
        this.frequencia = frequencia
    }
    aprovado(){
        //Caso a nota seja maior ou igual a 6 irá retornar true
        return this.nota >= 6
    }
}