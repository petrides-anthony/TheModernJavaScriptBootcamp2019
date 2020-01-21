// Note: The import outside of the curly braces 'otherSquare' is the exported default from the utilities file.
// Notice the name should be square per the file, but as it's the default, you can call it whatever you want
// And it will still work exactly as square per utilities.js
import otherSquare, { add, name } from './utilities'
import otherScream from './scream'

console.log('index.js')
console.log(add(1, 32))
console.log(name)
console.log(otherScream(name))
console.log(otherSquare(10))