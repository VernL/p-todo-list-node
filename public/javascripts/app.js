$(document).ready(function(){
    $.getJSON("/api/todos")
        .then(function(todos){
            addTodos(todos)
        });

    $('#todoInput').keypress(function(event){
        if(event.which === 13){
            createTodo()
        }
    });

    $('.list').on("click", "li", function (event) {
        updateTodo($(this))
    })

    $('.list').on("click", "span", function (event) {
        removeTodo( $(this).parent())
    })
});

function addTodos(todos){
    todos.forEach(function(todo){
        addTodo(todo)
    })
};

function addTodo(todo){
    var newTodo = $('<li class="task">' + todo.name + "<span> X </span></li>");
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed){
        newTodo.addClass("done")
    }
    $('.list').append(newTodo);

};

function createTodo(){
    var userInput = $('#todoInput').val();
    $.post('/api/todos', {name: userInput})
        .then(function(todo){
            $('#todoInput').val("");
            addTodo(todo)
        })
                       // we get the newly created todo back
        .catch(function (err){
            console.log(err)
        })
}

function updateTodo(todo){
    var id = todo.data('id')
    var isCompleted = todo.data('completed');
    $.ajax({
        method: 'PUT',
        url: '/api/todos/' + id,
        data: {completed: !isCompleted}
    })
        .then(function(data){
            console.log(data);
            todo.data('completed', !isCompleted);
            todo.toggleClass("done");
        })
        .catch(function(err){
            console.log(err)
        })
}

function removeTodo(todo){
    event.stopPropagation();
    var id = todo.data('id')
    $.ajax({
        method: 'DELETE',
        url: '/api/todos/' + id
    })
        .then(function(){
            todo.remove();
        })
        .catch(function(err){
            console.log(err)
        })
}