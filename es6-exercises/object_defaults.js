/*
 * Programming Quiz: Using Default Function Parameters
 */

function buildHouse({
    floors = 1,
    color = 'red',
    walls = ['brick']
} = {}) {
    const floorText = floors === 1 ? 'floor' : 'floors';
    return `Your house has ${floors} ${floorText} with ${color} ${walls.join(' and ')} walls.`;
}

console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({
    floors: 3,
    color: 'yellow'
})); // Your house has 3 floor(s) with yellow brick walls.