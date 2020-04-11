const BaseController = require('./BaseCtrl');
const AuthorSchema = require('../models/Author')

class AuthorCtrl extends BaseController{
    constructor(){
        super('Author', AuthorSchema);
    }
}

module.exports = AuthorCtrl;