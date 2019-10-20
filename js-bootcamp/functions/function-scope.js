// Global Scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    // Local Scope (farenheit, celsius)
        // Local Scope (isFreezing)

let convertFahrenheitToCelsius = function (farenheit) {
    let celsius = (farenheit - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)