var mongoose = require('mongoose');
mongoose.set('debug',true);

if(!process.env.DATABASEURL){
    process.env.DATABASEURL = 'mongodb://localhost/todo-api';
}

mongoose.connect(process.env.DATABASEURL, {useMongoClient: true});

mongoose.Promise = Promise; //allow us to use the promise syntax

module.exports.Todo = require("./todo")

