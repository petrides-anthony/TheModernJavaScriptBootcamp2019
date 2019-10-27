const notes = [{
    title: 'My next trip',
    body: 'I would like to go to away for New Years'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new keyboard'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, searchText) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(searchText.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(searchText.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, 'work'))

// const note = findNote(notes, 'office other hahaha modifications')
// console.log(note)

sortNotes(notes)
console.log(notes)