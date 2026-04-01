const mongoose = require('mongoose');

const mansioneSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Mansione = mongoose.model('Mansione', mansioneSchema);

module.exports = Mansione;