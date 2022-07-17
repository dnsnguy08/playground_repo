// TODO: Import the parent class
const Vehicle = require('./vehicle');
// TODO: Create a `Car` class that extends the `Vehicle` class

class Car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 4,'beep');
    this.color = color;
    this.passengers = passengers;
  }
  checkPassengers() {    
    if (this.passengers.length < 4) {
      console.log(`There are ${4-this.passengers.length} seats left.`);
    } else {
      console.log(`This car only seats 4 people. You have ${this.passengers.length} passengers!`);
    }
  }
}
const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
