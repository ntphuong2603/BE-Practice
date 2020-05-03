const BookRouter = require('./BookRouter');
const GenreRouter = require('./GenreRouter');
const AuthorRouter = require('./AuthorRouter');
const BookInstanceRouter = require('./BookInstanceRouter');
const GeneralRouter = require('./GeneralRouter');

const IndexRouter = {
    BookRouter: BookRouter,
    GenreRouter: GenreRouter,
    AuthorRouter: AuthorRouter,
    BookInstanceRouter: BookInstanceRouter,
    GeneralRouter: GeneralRouter,
}

module.exports = IndexRouter;