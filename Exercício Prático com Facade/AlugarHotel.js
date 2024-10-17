class AlugarHotel{
    alugarH(lugar, inicio, fim){
        console.log("Reserva confirmada")
        return {lugar : lugar,
            data : (inicio + " até "+ fim),
            valor: 200 * (inicio - fim)
        }
    }
}

module.exports = AlugarHotel