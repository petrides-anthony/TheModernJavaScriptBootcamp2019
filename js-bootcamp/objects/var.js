var firstName = 'Tony'
firstName = 'Mike'

var firstName = 'Jen'
// let and const stops you accidentally creating vars that already exist. var does not. Reason to avoid var

if (10 === 10) {
    var firstName = 'Jen'
}
// var doesn't appreciate block scoping. Meaning firsName in the if statement can be used anywhere. Dodgy AF!@£$£

console.log(firstName)

// Basically never use var to declare variables!!!!!!