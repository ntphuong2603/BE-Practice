const BaseController = require('./BaseCtrl');
const {GenreSchema} = require('../schema_models/indexModel');

class GenreCtrl extends BaseController{
    constructor(){
        super('Genre', GenreSchema);
    }
}

module.exports = GenreCtrl;