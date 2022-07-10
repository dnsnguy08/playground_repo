const express = require('express');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'todos_db',
    password: 'password',
});

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/api/todos', (req, res) => {
    connection.query('SELECT * FROM todos;', (err, rows, fields) => {
        if (err) {
            return res.status(400).json(err);
        }
        console.log('**********I AM ROWS***********');
        console.log(rows);
        res.json(rows);
        
    });
});

app.listen(PORT, () => console.log('Success!!!'));