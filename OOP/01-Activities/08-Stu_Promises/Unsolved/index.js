// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';

// TODO: Refactor the following to use promises
const practiceCoding = new Promise((resolve, reject) => {
  if (!studentDistracted) {
    const coding = 'We are coding in promises!';
    resolve(coding);
  } else {
    const distracted = {
      issue: 'Distracted',
      message: 'Coding stopped',
    };
    const message = 'Promise rejected: Error: Coding stopped - Student is distracted';
    reject(message);
    }
  }
);

// TODO: Refactor to call 'practiceCoding()' and chain a 'then()' to log "We are coding in promises!" in the console
// TODO: Chain a 'catch()' to log "Promise rejected: " and the error

practiceCoding
  .then((resolved) => console.log(resolved))
  .catch((err) => console.error(err));
