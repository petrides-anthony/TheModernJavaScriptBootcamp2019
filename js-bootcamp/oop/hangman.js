const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const gameOne = new Hangman('cats', 2)
console.log(gameOne)

const gameTwo = new Hangman('dogs', 4)
console.log(gameTwo)