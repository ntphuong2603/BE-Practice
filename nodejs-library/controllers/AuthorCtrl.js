const BaseController = require('./BaseCtrl');
const IndexSchema = require('../schema_models/IndexSchema');

class AuthorCtrl extends BaseController{
    constructor(){
        super('Author', IndexSchema.AuthorSchema);
    }
}

module.exports = AuthorCtrl;