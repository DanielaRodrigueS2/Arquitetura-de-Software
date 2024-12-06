const Dado = require('../models/rodarDados')

exports.rodarDado = (req, res) =>{
    const valor = req.params;
    const dados = Dado.numeroAleatorio(valor)
    res.redirect('/')
}