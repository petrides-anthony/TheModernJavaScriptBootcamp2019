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

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos, 'Book new Years trip')
console.log(todos)