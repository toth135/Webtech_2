const mongoose = require('mongoose');

var Carparts = mongoose.model('Carparts', {
    name: { type: String },
    car_type: { type: String },
    description: { type: String },
    price: { type: Number }
});

module.exports = { Carparts: Carparts };