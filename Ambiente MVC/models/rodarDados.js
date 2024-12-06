const numeroAleatorio = (valor) => {
    return Math.floor(Math.random() * valor) + 1
}

module.exports = {numeroAleatorio}