const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const rodarDadoController = require('./controllers/dadosController') // Exportação do Controller
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) =>{
    res.render('principal', {valorGerado: null})
})

app.post('/rodarDados', rodarDadoController.rodarDado) // Requisição post que executa o rodarDadoController

app.listen(4000, () => // usei essa porta porque a 3000 não estava funcionando
    console.log("Server foi inciado")
);