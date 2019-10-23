let num = 103.946

//leaves up to x decimal places
console.log(num.toFixed(2))

//rounds to nearest whole
console.log(Math.round(num))
//rounds down
console.log(Math.floor(num))
//rounds up
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// 0 - 0.99999 by default
// multiplying math.random by max - min (10) then adding 1 makes the range 0-10.99999
// using math.floor on the above gives you a 0-10 range. Add min again and it's 10-20
console.log(randomNum)

// Challenge Area
console.log('\n***Challenge Area***\n')
// function takes in guess and generates a random number.
// 1 - 5 trye if correct - false if not correct

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    if (guess === randomNum) {
        return `your guessed ${guess}. Random number was ${randomNum}. WINNER!`
    } else {
        return `your guessed ${guess}. Random number was ${randomNum}. LOSER!`
    }
}
console.log(makeGuess(11))

// Chalenge Area: Same as above but cleaner answer
console.log('\n***Challenge Area: With Cleaner Solution***\n')
let otherMakeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}
console.log(otherMakeGuess(11))