const mongoose = require('mongoose');
const user = 'ntphuong2603';
const pass = '0410@Huong';
const databaseName = 'library';
const connectionString = `mongodb+srv://${user}:${pass}@cluster0-axerp.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose
    .connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(error){
        if (error){
            console.log("Connection error")
        }
        console.log('MongoDB connection is successfully!!!')
    })
    .catch(error => console.log(error))

module.exports = mongoose.connection;