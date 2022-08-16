// 1) Where is carNoise stored?
// global scope
const carNoise = 'Honk';
// 2) Where is goFast stored?
// glocal scope
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Once goFast is called -> speed value will be assigned.
  // the value stored in the local function

  
  // 5) Where is makeNoise stored?
  // makeNoise is stored in the local function (goFast)
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // assign the global variable of carNoise to the value of sound
  // then execute the the code inside of the makeNoise function
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// the if condition must return a true bool after the 
// confirm method has been removed from the call stack
// if true then call the goFast function and assign 80 value to speed variable defined within the function
// then execute code within the goFast function - call makeNoise()
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
