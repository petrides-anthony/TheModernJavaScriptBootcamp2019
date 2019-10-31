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
    completed: false
}]

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    
document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add a new Todo...')
})

document.querySelector('#new-todo-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})