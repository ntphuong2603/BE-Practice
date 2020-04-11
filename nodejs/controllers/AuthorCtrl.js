const BaseController = require('./BaseCtrl');
const AuthorSchema = require('../schema_models/AuthorSchema')

class AuthorCtrl extends BaseController{
    constructor(){
        super('Author', AuthorSchema);
    }
}

module.exports = AuthorCtrl;