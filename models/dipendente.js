const mongoose = require('mongoose');

const dipendenteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    hireDate: { type: Date, required: true }
});

const Dipendente = mongoose.model('Dipendente', dipendenteSchema);

module.exports = Dipendente;