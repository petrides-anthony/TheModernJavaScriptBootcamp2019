// Create an array with five todos
// Print Message: You have x todos
// Print the first and second to last items -? print out: Todo: walk the dog

const todos = ['Book New Years Trip', 'Finish Arrays Section', 'Pet Project Planning', 'Reach Lv 20 in WoW', 'Finish Docker Swarm']

// Delete the 3rd item
todos.splice(2, 1)
// Add a new item onto the end
todos.push('Buy mechanical keyboard')
// Remove the first item from the list
todos.shift()

console.log(`you have ${todos.length} todos in your list`)
console.log(todos)