const BookCtrl = require('./BookCtrl');
const GenreCtrl = require('./GenreCtrl');
const AuthorCtrl = require('./AuthorCtrl');
const BookInstanceCtrl = require('./BookInstanceCtrl');
const GeneralCtrl = require('./GeneralCtrl')

const IndexControllers = {
    BookCtrl: BookCtrl,
    GenreCtrl: GenreCtrl,
    AuthorCtrl: AuthorCtrl,
    BookInstanceCtrl: BookInstanceCtrl,
    GeneralCtrl: GeneralCtrl
}

module.exports = IndexControllers;