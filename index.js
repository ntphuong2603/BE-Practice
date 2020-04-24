const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = process.env.port || 5000;
app.listen(port, ()=>{
    console.log(`NodeJS is listenning on ${port}`, app.settings.env);
})

app.get('/', (req, res)=> {
    res.send(' MongoDB - Cinema');
})

const db = require('./connection/mongoDB');

const MovieRouter = require('./routers/MovieRouter');
app.use('/movie', MovieRouter);