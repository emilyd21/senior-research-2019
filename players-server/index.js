const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_PLAYERS_QUERY = 'SELECT * FROM players';
const SELECT_ALL_USERS_QUERY = 'SELECT * FROM users';
const SELECT_ALL_TEAMS_QUERY = 'SELECT * FROM fantasyTeam';



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
        console.log('Connected to MySQL')
    }
})


app.use(cors());


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

app.get('/fantasyTeam', (req, res) => {
    connection.query(SELECT_ALL_TEAMS_QUERY, (err, results) => {
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

app.get('/users/add', (req, res) => {
    const { name, email, password} = req.query;
    const INSERT_USERS_QUERY = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
    connection.query(INSERT_USERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        
        else {
            return res.send('successfully added user')
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