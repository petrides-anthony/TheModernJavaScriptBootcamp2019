
const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}
printTeam(team.name, team.coach, ...team.players)

let cities = ['Barcelona', 'Cape Town', 'Bordeaux']
cities = ['Santiago', ...cities, 'New York']
console.log(cities)

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}
let newHouse = {
    basement: true,
    bedrooms: 3,
    ...house,
}

console.log(house)
console.log(newHouse)

let person = {
    name: 'Tony',
    age: 28
}

let location = {
    city: 'London',
    country: 'United Kingdom'
}

const overview = {
    ...person,
    ...location
}

console.log(overview)