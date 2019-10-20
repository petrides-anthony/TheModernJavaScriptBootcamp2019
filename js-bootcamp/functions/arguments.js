// Multiple args
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
    let getScoreText = function (name = 'Anonymous', score = 0) {
        return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area
console.log('\n**** Challenge Area ****\n')

// total, tipPercent .2 as default (20%)
let tipCalculation = function (total, tipPercent = 0.2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on £${total} would be £${tip}`
}

let totalTip = tipCalculation(100)
console.log(totalTip)
