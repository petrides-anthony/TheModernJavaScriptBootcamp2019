class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing' 
    }
    calculateStatus() {
        // .every checks if all values in an array are in the array and returns true
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = "failed"
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}.`
        } else if (this.status === 'finished') {
            return 'Great work! You guessed the word.'
        } else {
            return `Nice try! The word was "${this.word.join('')}".`
        }
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }
    makeGuess (guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        // This disables guesses if status is not 'playing' by returning nothing
        // which stops the blocks below running
        if (this.status !== 'playing') {
            return
        }

        if(isUnique) {
        this.guessedLetters.push(guess) 
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.calculateStatus()
        }
}

