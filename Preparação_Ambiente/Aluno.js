module.exports = class Aluno {
    
    constructor(nome, login, RA) {
        this.nome = nome
        this.login = login
        this.RA = RA
    }

    // Métodos getters e setters

    getNome(){
        return this.nome
    }

    getLogin(){
        return this.login
    }

    getRA(){
        return this.RA
    }

    setNome(nome){
        this.nome = nome
    }

    setLogin(login){
        this.login = login
    }

    setRA(RA){
        this.RA = RA
    }
}