class AlugarCarro{
    alugarC(modelo, inicio, fim){
        console.log("Carro reservado")
        return {modelo : modelo,
            data : (inicio + " até " + fim),
            valor: 100 * inicio - fim
        }
    }
}

module.exports = AlugarCarro