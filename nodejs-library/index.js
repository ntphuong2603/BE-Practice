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

const {BookRouter, GenreRouter, AuthorRouter, BookInstanceRouter} = require('./routers/indexRouter')
server.use('/bookApi', BookRouter);
server.use('/genreApi', GenreRouter);
server.use('/authorApi', AuthorRouter);
server.use('/bookInstanceApi', BookInstanceRouter);