const BaseController = require('./BaseCtrl');
const {BookSchema} = require('../schema_models/indexModel');

class BookCtrl extends BaseController{
    constructor(){
        super('Book', BookSchema);
    }
}

module.exports = BookCtrl;