const express = require('express')
const app = express()

// Config
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// Midlewares
app.use(express.static(__dirname + "/public"))

// Routes
app.get('/', (req, res)=>{
    res.render('index', {title:'Esperanza - Sala de Belleza'})
})


// Midlewares
app.use((req, res, next) =>{
    res.status(404).sendFile(__dirname + '/public/404.html')
})

// Listen
const puerto = app.get('port')
app.listen(puerto, ()=>{
    console.log('Escuchando en puerto', puerto)
})