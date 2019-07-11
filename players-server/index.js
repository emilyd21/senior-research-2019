const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_PLAYERS_QUERY = 'SELECT * FROM players';
const SELECT_ALL_USERS_QUERY = 'SELECT * FROM users';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ilovefood21!',
    database: 'react_sql',
    port: '3306'
});

connection.connect(err=> {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Connected to the MySQL server')
    }
})


app.use(cors());

app.get('/', (req, res) => {
   res.send('go to /players to see players')
});


app.get('/players', (req, res) => {
    connection.query(SELECT_ALL_PLAYERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        
        else {
            return res.json({
                data: results
            })
        }
    });
});

app.get('/users', (req, res) => {
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        
        else {
            return res.json({
                data: results
            })
        }
    });
});

app.listen(4000, () => {
    console.log('Players server listening on port 4000')
});