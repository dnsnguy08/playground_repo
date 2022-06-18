// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = moment('10/08/2022', 'MM-DD-YYYY').format("MMM Do, YYYY");
$("#1a").text(gradDate);

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment('1/1/2022', 'MM-DD-YYYY').format('dddd');
$("#2a").text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
var now = moment().dayOfYear();
$("#3a").text(now);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = moment().format('h:mm:ss a');
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
var unix = moment().unix();
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment.unix(1318781876).format("dddd, MMM Do YYYY, h:mm:ss a");
$("#6a").text(unixFormat);


// Bonus: Use diff() to calculate difference between timestamps
function calcDiff(){
var date1 = moment("2018-03-10", "YYYY-MM-DD");
var date2 = moment("2022-01-01","YYYY-MM-DD");

//Difference in number of days
console.log(date1.diff(date2, 'minutes'));
}

calcDiff();