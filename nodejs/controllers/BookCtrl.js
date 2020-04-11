const {BookSchema, AuthorSchema, GenreSchema} = require('../schema_models/indexModel');
//const Response = require('./Response');
const mongoose = require('mongoose');
const BaseController = require('./BaseCtrl');

/*
exports.getList = async function(req, res){
        await Book.find({}, "title summary")
            .populate({path: 'author', model: Author})
            .populate('genre', Genre)
            .exec((err, data)=>{
                    Response(res, err, data)
            })
}
*/

class BookCtrl extends BaseController {
        constructor(){
                super('Book', BookSchema);
                this.Author = mongoose.model('Author', AuthorSchema);
                this.Genre = mongoose.model('Genre', GenreSchema);
        }

        async getListFull(req, res){
                await this.model.find({}, 'title summary')
                        .populate({path: 'author', model: this.Author, select : "family_name first_name"})
                        .populate('genre', this.Genre)
                        .exec((err, data)=>{
                                this.Response(res, err, data)
                        })
        }

        async getOneFull(req, res){
                let id = req.params.id;
                await this.model.findById({_id:id}, 'title summary')
                        .populate({path: 'author', model: this.Author, select : "family_name first_name"})
                        .populate('genre', this.Genre)
                        .exec((err, data)=>{
                                this.Response(res, err, data)
                        })
        }
}

module.exports = BookCtrl;