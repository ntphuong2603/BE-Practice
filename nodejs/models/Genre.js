const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GenreShema = new Schema({
    name: {type: String, required: true},
})

module.exports = mongoose.model('Genre', GenreShema);