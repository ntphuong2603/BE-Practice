const {Book, Author, Genre} = require('../models/indexModel');
const Response = require('./Response');

exports.getList = async function(req, res){
        await Book.find({}, "title summary")
            .populate({path: 'author', model: Author})
            .populate('genre', Genre)
            .exec((err, data)=>{
                    Response(res, err, data)
            })
}