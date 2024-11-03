const Funcionario = require('./Funcionário');

class Departamento{

    constructor(nome){
        this.nome = nome
        this.componentes = new Array()
    }

    // Função que adiciona um componente de forma recursiva
    // Recebe o componente a ser inserido e em qual departamento deve ser inserido
    adicionarComponente(comp, departamento){
        if(this.nome == departamento){
            this.componentes.push(comp)
            return true
        }
        for(let i = 0; i< this.componentes.length; i++){
            if(this.componentes[i] instanceof Departamento){
                if(this.componentes[i].adicionarComponente(comp, departamento)){
                    return true
                }
            }
        }
        return false
    }

    // Função para remover um componente existente
    // A função usa recursividade caso não seja encontrada na primeira instância do departamento
    // Percorre outros departamento até encontrar o componetne a ser eliminado
    removerComponente(nome){
        const pertence = this.componentes.findIndex((comp) => comp.getNome() == nome)
        if(pertence != -1){
            this.componentes.splice(pertence,1)
            return true
        }
        else{
            for(let i = 0; i< this.componentes.length; i++){
                if(this.componentes[i] instanceof Departamento){
                    if(this.componentes[i].removerComponente(nome)){
                        return true
                    }
                }
            }
            console.log("Componente não existe ou não foi encontrado")
            return false
        }
        
    }

    // Concatena os departamentos 
    exibir(concatenação = ''){
        console.log(concatenação +"Departamento: "+ this.nome)
        for(let i = 0; i< this.componentes.length; i++){
            this.componentes[i].exibir(concatenação + ' ')
        }
    }

    // Retorna um componente(funcionario/departamento) com base no nome
    getFilho(nome) {
        if (this.nome == nome) return this;

        for (let i = 0; i < this.componentes.length; i++) {
            if (this.componentes[i].getNome() == nome) {
                return this.componentes[i];
            }
            if (this.componentes[i] instanceof Departamento) {
                const filho = this.componentes[i].getFilho(nome);
                if (filho) return filho;
            }
        }
        return null;
    }

    // Retorna o salário total de um departamento
    getSalarioDepartamento(){
        let total = 0
        for(let i = 0; i< this.componentes.length;i++){
            if(this.componentes[i] instanceof Funcionario){
                total += this.componentes[i].getSalario()
            }
            else{
                total += this.componentes[i].getSalarioDepartamento()
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