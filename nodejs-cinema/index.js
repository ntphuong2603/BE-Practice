const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let db = require('./connection/mongoDB');

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`NodeJS is listenning on ${port}`, app.settings.env);
})


let MovieRouter = require('./routers/MovieRouter');
app.use('/api/movies', MovieRouter);


app.get('/', (req, res)=> {
    res.status(200).json('MongoDB - Cinema');
})