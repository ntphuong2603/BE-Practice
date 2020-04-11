/*
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
*/
const mongoose = require('mongoose');
const BaseController = require('./BaseCtrl');
const {BookInstanceSchema, BookSchema, AuthorSchema, GenreSchema} = require('../schema_models/indexModel');

class BookInstanceCtrl extends BaseController{
    constructor(){
        super('BookInstance', BookInstanceSchema);
        this.Book = mongoose.model('Book', BookSchema);
        this.Author = mongoose.model('Author', AuthorSchema);
        this.Genre = mongoose.model('Genre', GenreSchema);
        console.log(mongoose.modelNames());
    }

    async getListFull(req, res){
        await this.model.find({}, "status due_date due_back")
                    .populate({
                        path: 'book', 
                        model: this.Book, 
                        select: 'title',
                        populate : [{
                                path: 'author',
                                model: this.Author,
                                select: "first_name family_name"
                            }, {
                                path: 'genre',
                                model: this.Genre,
                                select: 'name'
                            }
                        ]
                    })
                    .exec((err, data)=>{
                        this.Response(res, err, data)
                    })
    }
}

module.exports = BookInstanceCtrl;
