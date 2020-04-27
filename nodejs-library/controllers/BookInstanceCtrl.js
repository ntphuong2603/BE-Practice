const BaseController = require('./BaseCtrl');
const IndexSchema = require('../schema_models/IndexSchema');

class BookInstanceCtrl extends BaseController{
    constructor(){
        super('BookInstance', IndexSchema.BookInstanceSchema);
    }
}

module.exports = BookInstanceCtrl;