const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

const port = process.env.PORT || 8080;
server.get('/', (req, res) => {
    res.send('Hello word');
})

server.listen(port, ()=>{
    console.log(`NodeJS sever is running on ${port}`);
})

const db = require('./connection/mongoAtlas');

const IndexRouter = require('./routers/IndexRouter')
server.use('/api/books', IndexRouter.BookRouter);
server.use('/api/genres', IndexRouter.GenreRouter);
server.use('/api/authors', IndexRouter.AuthorRouter);
server.use('/api/bookInstances', IndexRouter.BookInstanceRouter);
server.use('/api/generalInfo', IndexRouter.GeneralRouter);