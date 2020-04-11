const {BookSchema, AuthorSchema, GenreSchema} = require('../models/indexModel');
const Response = require('./Response');
const mongoose = require('mongoose');

exports.getList = async function(req, res){
        await Book.find({}, "title summary")
            .populate({path: 'author', model: Author})
            .populate('genre', Genre)
            .exec((err, data)=>{
                    Response(res, err, data)
            })
}

class BookCtrl extends BaseController {
        constructor(){
                super('Book', BookSchema);
                this.modelList = mongoose.modelNames();
                console.log(this.modelList);
        }

        async getListFull(req, res){
                let Author = this.modelList['author'];
                let Genre = this.modelList['genre'];
                await super._model.find({}, 'title summary')
                        .populate({path: 'author', model: Author})
                        .populate('genre', Genre)
                        .exec((err, data)=>{
                                Response(res, err, data)
                        })
        }
}

module.exports = BookCtrl;