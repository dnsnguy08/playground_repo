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
        message: 'What languages do you know?',
        name: 'languages',
        type: 'input',
    },
    {
        message: 'What is your preferred method of communication?',
        name: 'communication',
        type: 'checkbox',
        choices: ['Phone', 'Email', 'Mail', 'Text'],
    }
]).then(answers => {
    fs.writeFile(`${answers.name}.json`, JSON.stringify(answers, null, 2), err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Success');
    })
})