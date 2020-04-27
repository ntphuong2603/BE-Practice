const BookCtrl = require('./BookCtrl');
const GenreCtrl = require('./GenreCtrl');
const AuthorCtrl = require('./AuthorCtrl');
const BookInstanceCtrl = require('./BookInstanceCtrl');

const IndexControllers = {
    BookCtrl: BookCtrl,
    GenreCtrl: GenreCtrl,
    AuthorCtrl: AuthorCtrl,
    BookInstanceCtrl: BookInstanceCtrl
}

module.exports = IndexControllers;