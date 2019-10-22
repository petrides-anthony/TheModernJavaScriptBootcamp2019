let name = '   Anthony PETRIDES '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to upper case
console.log(name.toLowerCase())

// Includes Method (checks if given string is in the string)
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim Method (useful for sanatising user input data)
console.log(name.trim())

// Challenge Area

// isValidPassword
// length is more than 8 - and it doesn't contain the word password
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}
console.log(isValidPassword('abc123@!*&%'))
console.log(isValidPassword('haisuhfiuhiuhfapassword'))