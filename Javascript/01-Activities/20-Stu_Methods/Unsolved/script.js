var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

// add element to beginning of array
constellations.unshift('Canis Major');
console.log(constellations);

// remove last element of array
planets.pop();
console.log(planets);

// join two arrays together
var galaxy = constellations.concat(planets);
console.log(galaxy);

// string method for capitalizing all letters in string
var the_star = star.toUpperCase();
console.log(the_star);