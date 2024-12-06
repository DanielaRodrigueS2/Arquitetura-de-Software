const Dado = require('../models/rodarDados')

exports.rodarDado = (req, res) =>{
    const tipoDado = parseInt(req.body.tipoDado)
    const valorGerado = Dado.numeroAleatorio(tipoDado)
    res.render('principal', {valorGerado})
}