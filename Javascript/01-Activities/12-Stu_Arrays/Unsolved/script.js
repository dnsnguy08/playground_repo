// WRITE YOUR CODE HERE
var names = [
    'Dennis',
    'Daniel',
    'Kenny',
    'Matthew',
]

for (let i = 0, len = names.length, text = "Welcome to the class ", new_names = []; i < len; i++) {
    console.log(text + names[i]);
}

names[0] = 'Manny';

if (names[0] !== 'Dennis') {
    console.log(`${snames[0]} is in class`);
}
