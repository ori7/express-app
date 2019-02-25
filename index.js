const express = require('express');
var cors = require('cors')
var mysql = require('mysql');

const PORT = 8888;

const app = express();
app.use(cors());

//  const app = require('express')();

/*
const studentsArray = [
    {
        id: 1,
        name: "a"
    },
    {
        id: 2,
        name: "b"
    },
    {
        id: 3,
        name: "c"
    }
]

app.get('/student', function (req, res) {
    res.send(JSON.stringify(studentsArray));
});
*/

app.get('/student', function (req, res) {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "school"
    });
    connection.connect();
    connection.query('SELECT `student_id`,`student_name` FROM `student`', function (error, results) {
        if (error) throw error;
        res.send(results);
        connection.end();
    }); 
});

app.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});