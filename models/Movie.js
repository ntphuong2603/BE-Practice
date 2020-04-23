const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    time: {type: [String]}
})

module.exports = mongoose.model('Movie', MovieSchema);