const express = require('express')
const router = express.Router()

const Cita = require('../models/cita')

router.get('/', async(req, res)=>{
    try {
        const getCitas = await Cita.find()
        console.log(getCitas)
    } catch (e) {
        
    }
})

module.exports = router;