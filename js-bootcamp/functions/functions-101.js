// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome User!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge Area
console.log('\n---Challenge Area---')
// convertFarenheitToCelsius
let convertFarenheitToCelsius = function (temp) {
    let convertedTemp = ((temp - 32) * (5 / 9))
    return convertedTemp
}

// Call a couple of times (32 --> 0) (68 --> 20)
let convertedTempOne = convertFarenheitToCelsius(32)
let convertedTempTwo = convertFarenheitToCelsius(69)

//Print the converted values
console.log(convertedTempOne)
console.log(convertedTempTwo)
