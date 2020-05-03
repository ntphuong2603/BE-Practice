const mongoose = require('mongoose');
const BaseController = require('./BaseCtrl');
const IndexSchema = require('../schema_models/IndexSchema');
//const async = require('async');

module.exports = class General extends BaseController{
    constructor(){
        super();
        this.models = [
            mongoose.model('Book', IndexSchema.BookSchema) ,
            mongoose.model('Author', IndexSchema.AuthorSchema),
            mongoose.model('Genre', IndexSchema.GenreSchema),
            mongoose.model('BookInstance', IndexSchema.BookInstanceSchema)
        ]
        }
    
    
    async getGeneral(req, res){
        const promises = this.models.map((value, index)=>{
            return value.countDocuments({}).then(value=>{return value})
        })
        promises.push(this.models.slice(-1)[0].countDocuments({status:'Available'}).then(value=>{return value}))
        
        let countResult = await Promise.all(promises);
        let results = {}
        this.models.forEach((value, index)=>{
            results[value.modelName] = countResult[index]
        })
        results['BookInstance_available'] = countResult.slice(-1)[0];
        super.Response(res, null, results);
    }

}