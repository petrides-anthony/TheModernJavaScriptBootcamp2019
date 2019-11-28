const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Naruto', 'Uzamaki', 27)
console.log(me)

const person2 = new Person('Sasuke', 'Uchiwa', 27)
console.log(person2)