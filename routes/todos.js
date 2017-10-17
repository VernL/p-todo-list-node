var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");

/* GET home page. */
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodos);

router.get('/:todoId', function(req,res){
    db.Todo.findById(req.params.todoId)
        .then(function(todo){
            res.json(todo)
        })
        .catch(function(err){
            res.send(err)
        })
});

router.put('/:todoId', function(req,res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
        .then(function(todo){
            res.json(todo);
        })
        .catch(function(err){
            res.send(err)
        })
});

router.delete('/:todoId', function(req,res){
    db.Todo.remove({_id: req.params.todoId})
        .then(function(){
            res.json({message: 'We deleted it!'})
        })
        .catch(function(err){
        res.send(err)
        })
});

module.exports = router;
