const Response = require('./Response');
const Genre = require('../models/Genre');

exports.getList = async function(req, res){
    await Genre.find({},(err, data)=>{
        Response(res, err, data)
    })
}