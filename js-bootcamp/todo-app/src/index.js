import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'

renderTodos()

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    //const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (e.target.elements.newTodo.value.trim().length > 0) {
        createTodo(e.target.elements.newTodo.value)
        renderTodos()
        e.target.elements.newTodo.value = ''
    }
})


document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

// This watches local storage and updates the page in real time.
// E.g. if you duplicate a tab of the running app and make changes, both tabs will
// Reflect the changes without you having to reload them. Pretty cool
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})