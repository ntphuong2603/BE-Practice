const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

const port = 5000;
server.get('/', (req, res) => {
    res.send('Hello word');
})

server.listen(port, ()=>{
    console.log(`NodeJS sever is running on ${port}`);
})

const db = require('./connection/mongoAtlas');

const indexRouter = require('./routers/IndexRouter')
server.use('/api/books', indexRouter.BookRouter);
server.use('/api/genres', indexRouter.GenreRouter);
server.use('/api/authors', indexRouter.AuthorRouter);
server.use('/api/bookInstances', indexRouter.BookInstanceRouter);