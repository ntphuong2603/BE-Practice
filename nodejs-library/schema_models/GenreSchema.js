const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreShema = new Schema({
    name: {type: String, required: true},
})

module.exports = GenreShema;