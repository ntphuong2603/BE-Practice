//const Response = require('./Response');
//const Genre = require('../models/Genre');
const BaseController = require('./BaseCtrl');
const GenreSchema = require('../models/Genre')
/*
exports.getList = async function(req, res){
    await Genre.find({},(err, data)=>{
        Response(res, err, data)
    })
}
*/

class GenreCtrl extends BaseController{
    constructor(){
        super('Genre', GenreSchema);
    }
}

module.exports = GenreCtrl;