// TODO: What does 'this' refer to?
// keyword "this" refers to the global object
// In a browser, the global object is the Window 
console.log(this);

// TODO: What does 'this' refer to?
//'this' refers to the global object window - since it is not defined within function
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
// 'this' refers to the 'child' object, 'child.age + 10 = 20'
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
// 'this' refers to investment property, 'investment.initialInvestment * 1.15 = 5750'
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();



// Bonus: randomly select an element from an array

// Use Math. random() function to get the random number between(0-1, 1 exclusive).
// Multiply it by the array length to get the numbers between(0-arrayLength).
// Use Math. floor() to get the index ranging from(0 to arrayLength-1).


var items = [
   1,
   2,
   3,
   4,
   5
]
var item = items[Math.floor(Math.random()*items.length)];
console.log(item);
