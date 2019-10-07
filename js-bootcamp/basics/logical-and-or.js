let temp = 55

// Logican And Operator - True if both sides are true. False Otherwise.
// Logical OR Operator - True if at least one side is true. False Otherwise.
if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Dangerous to go outside!')
} else {
    console.log('Eh. Do what you want.')
}

// Challenge Area
console.log('\nChallenge Area')

let isGuestOneVegan = true
let isGuestTwoVegan = true

// Are both vegan? Only offer up vegan dishes
// At least one vegan? Make sure to offer up some vegan options
// Else, Offer up anything on the menue

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer Vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegen) {
    console.log('Make sure to offer some vegan options')
} else {
    console.log('Offer up anything on the menu')
}