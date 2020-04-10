//const {Book, Author, Genre} = require('../models/indexModel');
const Response = require('./Response');
const mongoose = require('mongoose');
const Genre = mongoose.model('Genre');

exports.getList = async function(req, res){
    await Genre.find({},(err, data)=>{
        Response(req, res, err, data)
    })
}