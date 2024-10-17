class ReservarVoo{
    reservar(destino, num_passagens, data ){
        console.log("Voo confirmado")
        return {destino : destino,
            passagens : num_passagens,
            data: data
        }
    }
}

module.exports = ReservarVoo