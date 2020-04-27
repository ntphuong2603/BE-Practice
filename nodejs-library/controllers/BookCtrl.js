const BaseController = require('./BaseCtrl');
const IndexSchema = require('../schema_models/IndexSchema');

class BookCtrl extends BaseController{
    constructor(){
        super('Book', IndexSchema.BookSchema);
    }
}

module.exports = BookCtrl; 