const Dado = require('../models/rodarDados')

// Controller realiza a comunicação entre models, views e app.js 

exports.rodarDado = (req, res) =>{
    const tipoDado = parseInt(req.body.tipoDado) // Recebe dados enviados pela view e transforma em int (denovo)
    const valorGerado = Dado.numeroAleatorio(tipoDado) // Faz o uso da função numeroAleatorio do models RolarDados
    res.json({valorGerado}) // Envia o resultado como respostaa
}