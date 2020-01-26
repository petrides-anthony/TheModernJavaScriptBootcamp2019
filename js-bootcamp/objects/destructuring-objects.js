const todo = {
    id: 'asoishgf',
    text: 'Pay the bills',
    completed: false
}

// const text = todo.text
// const completed = todo.completed

// text:todoText overrides default property name
// details = 'No' (equals overrides default property value)

const { text:todoText, completed, details = 'No details provided', ...others } = todo

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)