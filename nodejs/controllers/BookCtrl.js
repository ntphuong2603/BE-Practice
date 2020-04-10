const {Book, Author, Genre} = require('../models/indexModel');
const Response = require('./Response');

exports.getList = (req, res) => function(){
        Book.find({}, "title summary")
            .populate({path: 'Author', model: Author})
            .populate({path: 'Genre', model: Genre})
            .exec((err, data)=>{
                    Response(req, res, err, data)
            })
}