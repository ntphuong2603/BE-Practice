const Response = require('./Response');
const {BookInstance, Book, Author, Genre} = require('../models/indexModel');

exports.getList = async function(req, res){
    await BookInstance.find({}, "status due_date due_back imprint")
        .populate({
            path: 'book', 
            model: Book,
            select: "title",
            populate: [
                {
                    path: 'author', 
                    model: Author, 
                    select: "family_name first_name"
                },{
                    path: 'genre', 
                    model: Genre, 
                    select: 'name'
                }]
        })
        .exec((err, data)=>{ 
            Response(res, err, data)})
}