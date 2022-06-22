const inquirer = require('inquirer');
const fs = require('fs');
// import inquirer from 'inquirer';

inquirer.prompt([
    {
        message: 'What is your name?',
        name: 'name',
        type: 'input',
    },
    {
        message: 'What do you want your password to be?',
        name: 'password',
        type: 'password',
    },
    {
        message: 'Which pokemon do you want to choose?',
        name: 'pokemon',
        type: 'list',
        choices: ['Bulbasaur', 'Squirtle', 'Charmander'],
    },
    {
        message: "What is your rival's name?",
        name: 'rivalName',
        type: 'rawlist',
        choices: ['Blue', 'Gary', 'Bill'],
    }
]).then(answers => {
    // answers is an object where it has its keys all of the names key from each question object
    // as the key, and each keys value will be an answer that the user gave for each question
    console.log(answers);
    fs.writeFile(`${answers.name}.json`, JSON.stringify(answers, null, 2), err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Success');
    })
})