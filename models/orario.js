const mongoose = require('mongoose');

const orarioSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    // Add more fields here as necessary
});

orarioSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Orario = mongoose.model('Orario', orarioSchema);

module.exports = Orario;
