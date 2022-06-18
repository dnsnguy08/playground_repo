// TODO: What are we importing?
// filesystem module
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// 1st argument is the file name
// 2nd argument is the content to append to file
// 3rd is callback function - error logging
fs.appendFile('../30/log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // left of question mark is the if statement
  // right of question mark is code to execute
  // right of colon is the else statement
  err ? console.error(err) : console.log('Commit logged!')
);
