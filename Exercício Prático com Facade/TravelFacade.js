const AlugarCarro = require('./AlugarCarro')
const ReseraVoo = require ('./ReservaVoo')
const AlugarHotel = require ('./AlugarHotel')

class TravelFacade{
    constructor(){
        this.alugarCarro = new AlugarCarro()
        this.reservaVoo = new ReseraVoo()
        this.alugarHotel = new AlugarHotel()
    }

    // Recebe todos os dados da viagem e encaminha para cada classe responsável por gerenciar cada informação
    dadosViagem(local, inicio, fim, modeloCarro, numPessoas){
        const voo = this.reservaVoo.reservar(local, numPessoas, inicio)
        const hotel = this.alugarHotel.alugarH(local, inicio, fim)
        const carro = this.alugarCarro.alugarC(modeloCarro, inicio, fim)

        return{
            voo : voo,
            hotel : hotel,
            carro : carro
        }
    }
}

module.exports = TravelFacade