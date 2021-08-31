const express = require('express')
const mongoose = require('mongoose') //Conexión a la BD
require('dotenv').config() //Variables de entorno
const app = express()

// Config
app.set('port', process.env.PORT || 3000)  //Puerto
app.set('view engine', 'ejs')  //Motor de plantillas
app.set('views', __dirname + '/views') //Ruta

// Conexión a la DB
const uri = `mongodb+srv://${process.env.user}:${process.env.pass}@cluster0.fda5w.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true})
.then(()=> console.log('Conectado a mongodb')) 
.catch(e => console.log('Error de conexión', e))

// Midlewares
app.use(express.static(__dirname + "/public"))

// Routes
app.use('/', require('./router/inicio'))
app.use('/citas', require('./router/citas'))

// Midlewares
app.use((req, res, next) =>{
    res.status(404).sendFile(__dirname + '/public/404.html')
})

// Listen
const puerto = app.get('port')
app.listen(puerto, ()=>{
    console.log('Escuchando en puerto', puerto)
})