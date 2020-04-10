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
db.on('error', console.error.bind(console, 'MongoDB connection is error!!!'));
db.

const {BookRouter, GenreRouter} = require('./routers/indexRouter');
//const BookRouter = require('./routers/BookRouter');
const BookCtrl = require('./controllers/BookCtrl');
server.use('/bookApi', (req, res) => BookCtrl.getList);
server.use('/genreApi', GenreRouter);