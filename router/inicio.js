const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('index', {title:'Esperanza - Sala de Belleza'})
})

module.exports = router;