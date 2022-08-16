// const submitBtn = document.querySelector('.btn');
// // function to block the stack for x number of milliseconds
// const pause = milliSeconds => {
//   // get the current time
//   var startTime = new Date().getTime(); 
//   // block stack until time's up
//   while (new Date().getTime() < startTime + milliSeconds); 
// }

// pause(8000);

setTimeout(() => {
  const submitBtn = document.querySelector('.btn');
  submitBtn.style.visibility ='visible';
}, 8000);