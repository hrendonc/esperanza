const express = require('express');
const router = express.Router();

const Cita = require('../models/cita');

router.get('/', async(req, res)=>{
    try {
        //const getCitas = await Cita.find()

        res.render('citas', {title:'CRUD - Citas'});

        //console.log(getCitas);
    } catch (e) {
        
    }
})

router.post('/', async (req, res)=>{
    const body = req.body;
    try {
        console.log(body);
        const citaDB = new Cita(body)
        await citaDB.save()
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;