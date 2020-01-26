const todo = {
    id: 'asoishgf',
    text: 'Pay the bills',
    completed: false
}

// destructuring in function argument
//works because the printTodo(todo) function call is taking in the todo object on line 12
const printTodo = ({ text, completed }) => {
    console.log(`${text}: ${completed}`)
} 
printTodo(todo)

// text:todoText overrides default property name
// details = 'No' (equals overrides default property value)

const { text:todoText, completed, details = 'No details provided', ...others } = todo

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)

const age = [65, 0, 13]
const [firstAge, ...otherAges] = age

console.log(firstAge)
console.log(otherAges.join)