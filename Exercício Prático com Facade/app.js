const Facade = require('./TravelFacade')

const facade = new Facade()

const viagem = facade.dadosViagem('Minas Gerais', 12, 20, 'Fiat', 3)

console.log(viagem)