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

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

// Print You have x todos left (p element)
// Add a new element
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

// Add a p for each todo above (use text value)
todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add a new Todo...')
})

document.querySelector('#new-todo-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})