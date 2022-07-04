const express = require('express');
const path = require('path');
const app = express();

// middleware
//  Create a route for every file in this folder that we specify to this middleware
app.use(express.static('public'));


// You can only have 1 server running per PORT

/*
* MONGO DB: 270187
* REDIS: 6307
* */

const PORT = 3001;

const todos = [
    {
        id: 1,
        todo: 'Take another covid test',
    },
    {
        id: 2,
        todo: 'cook'
    },
    {
        id: 3,
        todo: 'update resume'
    },
    {
        id: 4,
        todo: 'watch movie'
    },
];

app.get('/', (req, res) => {
    console.log(__dirname);
    // res.send('hello world');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/todos', (req, res) => {
    console.log('IM HIT!!!!');
    res.sendFile(path.join(__dirname, 'public', 'todos.html'));
  });
  

app.get('/api/todos', (req, res) => {
// 1st parameter = request object
// this contains info about the incoming request

// 2nd parameter = Response onject
// this contains functions for responding to the specific request
    console.log('IM HIT!!!!!');
    res.json(todos);
    
});

app.get('/api/me', (req, res) => {
    res.json({
        firstName: 'Dennis',
        powerLevel: 9001,
    });
});

app.listen(PORT, () => console.log(`Server successfully listening for request on PORT ${PORT}`));
