const Funcionario = require("./Funcionário")

class Departamento{

    constructor(nome){
        this.nome = nome
        this.componentes = []
    }

    adicionarComponente(comp){
        this.componentes.push(comp)
    }

    // Função para remover um componente existente
    // A função usa recursividade caso não seja encontrada na primeira instância do departamento
    // Percorre outros departamento até encontrar o componetne a ser eliminado
    removerComponente(nome){
        const pertence = this.componentes.findIndex((comp) => comp == nome)
        if(pertence != -1){
            this.componentes.splice(pertence,1)
            return true
        }
        else{
            for(i = 0; i< this.componentes.length(); i++){
                if(this.componentes[i] instanceof Departamento){
                    this.componentes[i].removerComponente(nome)
                }
            }
            console.log("Componente não existe ou não foi encontrado")
            return false
        }
        
    }

    // Concatena os departamentos 
    exibir(concatenação = ''){
        console.log(concatenação +"Departamento: "+ this.nome)
        for(i = 0; i< this.componentes.length(); i++){
            this.componentes[i].exibir()
        }
    }

    // Retorna um componente(funcionario/departamento) com base no nome
    getFilho(nome){
        for(i = 0; i< this.componentes.length(); i++){
            if(nome == this.componentes[i]){
                return this.componentes[i]
            }
        }
        return false
    }

    // Retorna o salário total de um departamento
    getSalarioDepartamento(){
        const total = 0
        for(i = 0; i< this.componentes.length();i++){
            if(this.componentes[i] instanceof Funcionario){
                total += this.componentes[i].getSalario()
            }
        }
        return total
    }

    // Retorna o nome do departamento ()
    getNome(){
        return this.nome
    }

}

module.exports = Departamento