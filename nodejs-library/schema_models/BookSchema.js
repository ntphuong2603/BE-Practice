const mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type:mongoose.Schema.Types.ObjectId, ref: 'Genre'}]
})

module.exports = BookSchema;