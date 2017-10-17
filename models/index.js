var mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/todo-api', {useMongoClient: true}); //create database if does nto exit or connect

mongoose.Promise = Promise; //allow us to use the promise syntax

module.exports.Todo = require("./todo")