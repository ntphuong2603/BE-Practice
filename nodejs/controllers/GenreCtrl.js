<<<<<<< HEAD
//const Response = require('./Response');
//const Genre = require('../models/Genre');
const BaseController = require('./BaseCtrl');
const GenreSchema = require('../schema_models/GenreSchema')
/*
=======
const Response = require('./Response');
const Genre = require('../models/Genre');

>>>>>>> 38b89565238703356d2af8d412b15c5583826e11
exports.getList = async function(req, res){
    await Genre.find({},(err, data)=>{
        Response(res, err, data)
    })
}