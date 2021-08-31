const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definición del esquema
const citaSchema = new Schema({
  nombre:  String,
  telefono: String,
  servicio: String,
  fecha: String
});

// Crear el modelo
const Cita = mongoose.model('Cita', citaSchema);

module.exports = Cita;