const BaseController = require('./BaseCtrl');
const IndexSchema = require('../schema_models/IndexSchema');

class GenreCtrl extends BaseController{
    constructor(){
        super('Genre', IndexSchema.GenreSchema);
    }
}

module.exports = GenreCtrl;