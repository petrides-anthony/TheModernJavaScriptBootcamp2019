let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Account Locked')
} else if (userRole === 'admin') {
    console.log('Welcome' + " " + userRole + "!")
} else {
    console.log('Welcome!')
}

// Challenge area 

let temp = 4

// less than 45 it is freezing outside!
// it is hot outside!
// 45 - Go for it. It is pretty nice.

console.log("\nChallenge Area: ")

if (temp <= 32) {
    console.log("It is freezing outside!")
} else if (temp >= 110) {
    console.log("It is hot outside!")
} else {
    console.log("Got for it. It is pretty nice!")
}

