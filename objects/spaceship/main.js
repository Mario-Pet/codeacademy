let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    "Active Mission": true,
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };

let fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'

}
let returnAnyProp = (object, prop) => object[prop];
console.log(returnAnyProp(spaceship, "color"))

let propName =  'Active Mission';
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;
console.log(crewCount, planetArray)

let isActive = spaceship[propName];
console.log(isActive)

console.log(spaceship[propName])


let spaceshipNew = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  spaceshipNew.color = 'glorious gold'
  spaceshipNew.numEngines = 4;
  delete spaceshipNew['Secret Mission']