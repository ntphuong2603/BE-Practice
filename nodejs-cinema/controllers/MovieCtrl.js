const Movie = require('../models/Movie');

exports.getList = async function(req, res){
    await Movie.find({},(err, data)=>{
        let code = 200;
        if (err){
            code = 400;
        }
        res.status(code).json({
            messeage: err,
            data: data
        })
    })
}