const Response = require('./Response');
const Author = require('../models/Author');

exports.getList = async function(req, res){
    await Author.find({},(err, data)=>{
        Response(res, err, data)
    })
}