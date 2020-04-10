const {Book, Author, Genre} = require('../models/indexModel');
const Response = require('./Response');

exports.getList = async function(req, res){
    await Genre.find({},).exec((err, data)=>{
        Response(req, res, err, data)
    })
}