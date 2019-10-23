const person = {
    age: 27
}

person.age = 28
// person = {} would break. Because with const objects, you can reassign props but not the objects themselves.

console.log(person)