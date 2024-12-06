const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const rodarDadoController = require('./controllers/dadosController')
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) =>{
    res.render('principal', {valorGerado: null})
})

app.post('/rodarDados', rodarDadoController.rodarDado)

app.listen(3000, () =>
    console.log("Server foi inciado")
);