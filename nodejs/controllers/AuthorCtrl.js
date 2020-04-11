<<<<<<< HEAD
const BaseController = require('./BaseCtrl');
const AuthorSchema = require('../schema_models/AuthorSchema')
=======
const Response = require('./Response');
const Author = require('../models/Author');
>>>>>>> 38b89565238703356d2af8d412b15c5583826e11

exports.getList = async function(req, res){
    await Author.find({},(err, data)=>{
        Response(res, err, data)
    })
}