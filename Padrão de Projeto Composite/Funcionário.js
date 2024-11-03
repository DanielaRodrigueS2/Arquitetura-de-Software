class Funcionário{

    // Atributos do funcionário são Nome e Salário
    constructor(nome, salario){
        this.nome = nome
        this.salario = salario
    }

    // Função responsável por exbiir as informações dos funcionários, espaçamento é utilizado para 
    // criar uma identação entre os elementos internos
    exibir(espaçamento = ''){
        console.log(espaçamento + "Nome: " + this.nome + " Salário: "+ this.salario)
    }

    getNome(){
        return this.nome
    }
    
    // Função responsável por retornar o salario do funcionario acessado
    getSalario(){
        return this.salario
    }

}

module.exports = Funcionário