const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
})

AuthorSchema
    .virtual('full_name')
    .get(function(){
        return `${this.first_name} ${this.family_name}`;
    })

module.exports = AuthorSchema;