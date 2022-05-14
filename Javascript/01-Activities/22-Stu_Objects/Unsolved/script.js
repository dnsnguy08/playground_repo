//WRITE YOUR CODE BELOW
var customerOrder = {
    drink: 'Dr. Pepper',
    sugar: '10g',
    isReady: false
};

// log sugar, drink name to console:
console.log(customerOrder.drink);

console.log(customerOrder.sugar);

// log order ready if true
if (customerOrder.isReady) {
    console.log("Ready for pick-up");    
} else {
    console.log("Still in order queue");    
}
