const Movie = require('../models/Movie');

function response(res, err, data){
    let code = 200;
    if (err){
        code = 400;
    }
    res.status(code).json({
        success: code === 200,
        messeage: err,
        data: data
    })
}

class MovieController {

    async getList(req, res){
        await Movie.find({}, (err, data)=>{
            response(res, err, data);
        })
    }

    async getOne(req, res){
        const id = req.params.id;
        await Movie.findById({_id : id}, (err, data)=>{
            response(res, err, data);
        })
    }

    async create(req, res){
        const movie = req.body;
        await Movie.create({...movie}, (err, data)=>{
            response(res, err, data);
        })
    }

    async update(req, res){
        const id = req.params.id;
        const movie = req.body;
        Movie.findOneAndUpdate({_id: id}, {...movie}, (err, data)=>{
            response(res, err, data);
        })
    }

    async delete(req, res){
        const id = req.params.id;
        await Movie.findOneAndDelete({_id:id}, (err, data)=>{
            response(res, err, data);
        })
    }
}

module.exports = MovieController