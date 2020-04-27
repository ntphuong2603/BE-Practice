const BookSchema = require('./BookSchema');
const AuthorSchema = require('./AuthorSchema');
const GenreSchema = require('./GenreSchema');
const BookInstanceSchema = require('./BookInstanceSchema');

const IndexSchema = {
    BookSchema: BookSchema,
    AuthorSchema: AuthorSchema,
    GenreSchema: GenreSchema,
    BookInstanceSchema: BookInstanceSchema
}

module.exports = IndexSchema;