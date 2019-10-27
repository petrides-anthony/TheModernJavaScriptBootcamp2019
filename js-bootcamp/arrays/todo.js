const todos = [{
    text: 'Book New Years Trip',
    completed: false
}, {
    text: 'Finish Arrays Section',
    completed: true
}, {
    text: 'Pet Project Planning',
    completed: false
}, {
    text: 'Reach Lv 20 in WoW',
    completed: true
}, {
    text: 'Finish Docker Swarm',
    completed: true
}]

// 1. convert array of strings to array of objects -> text & completed properties [DONE]
// 2. Create function to remove a todo by text value

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

// Lists incomplete Todos
const getThingsToDo = function (todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'Book new Years trip')
// console.log(todos)