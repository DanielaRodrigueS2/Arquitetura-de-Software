// Função simples para gerar um valor aleatorio entre 1 e o valor recebido

const numeroAleatorio = (valor) => {
    return Math.floor(Math.random() * valor) + 1
}

module.exports = {numeroAleatorio}