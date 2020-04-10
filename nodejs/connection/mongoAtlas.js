const mongoose = require('mongoose');
const user = 'ntphuong2603';
const pass = '0410@Huong';
const databaseName = 'library';
const connectionString = `mongodb+srv://${user}:${pass}@cluster0-axerp.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).catch(err => console.log(err.reason));

const connect = mongoose.connection;

//connect.on('error', console.error.bind(console, 'MongoDB connection is error!!!'));

module.exports = connect;