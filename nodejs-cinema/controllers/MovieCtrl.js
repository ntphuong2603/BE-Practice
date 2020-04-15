const Movie = require('../models/Movie');

function response(res, err, data){
    let code = 200;
    if (err){
        code = 400;
    }
    res.status(code).json({
        messeage: err,
        data: data
    })
}

exports.getList = async function(req, res){
    await Movie.find({},(err, data)=>{
        response(res, err, data);
    })
}

exports.create = async function(req, res){
    const movie = req.body;
    console.log('Before', movie);
    await Movie.create(movie, (err, data)=>{
        response(res, err, data);
        console.log('After', data);
    });
}

exports.read = async function(req, res){
    const id = req.params.id;
    await Movie.findById({_id : id}, (err, data)=>{
        response(res, err, data);
    })
}

exports.update = async function(req, res){
    const id = req.params.id;
    const movie = req.body;
    /*
    let timeArray = [];
    if (movie.time.length){
        timeArray = movie.time.split(',');
    }
    */
    console.log(`Before: ${id}`, movie);
    await Movie.findByIdAndUpdate({_id: id}, {
        name: movie.name,
        rating: movie.rating,
        time: movie.time
    }, (err, data)=>{
        response(res, err, data);
        console.log('After: ', data);
    })
}

exports.delete = async function(req, res){
    const id = req.params.id;
    console.log(id);
    await Movie.findByIdAndDelete({_id:id}, (err, data)=>{
        response(res, err, data);
        console.log(data)
    })
}