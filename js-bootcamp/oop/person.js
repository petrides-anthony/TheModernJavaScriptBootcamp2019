// Prototypal Inheritance

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Naruto', 'Uzamaki', 26, ['Teaching', 'Biking'])
me.setName('Alexis Turner')
console.log(me.getBio())

const person2 = new Person('Sasuke', 'Uchiwa', 27)
console.log(person2.getBio())