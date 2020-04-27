const BookRouter = require('./BookRouter');
const GenreRouter = require('./GenreRouter');
const AuthorRouter = require('./AuthorRouter');
const BookInstanceRouter = require('./BookInstanceRouter');

const IndexRouter = {
    BookRouter: BookRouter,
    GenreRouter: GenreRouter,
    AuthorRouter: AuthorRouter,
    BookInstanceRouter: BookInstanceRouter,
}

module.exports = IndexRouter;