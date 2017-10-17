var mongoose = require('mongoose');
mongoose.set('debug',true);

// mongoose.connect('mongodb://localhost/todo-api', {useMongoClient: true}); //create database if does nto exit or connect

mongoose.connect('mongodb://vernon:cows56m5@ds121945.mlab.com:21945/todos-api', {useMongoClient: true});


mongoose.Promise = Promise; //allow us to use the promise syntax

module.exports.Todo = require("./todo")

