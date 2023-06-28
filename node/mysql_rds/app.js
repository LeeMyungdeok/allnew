var express = require('express');
const { ftruncate } = require('fs');
var mysql = require('mysql');
const env = require('dotenv').config({ path : "./.env"});
 
var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

var app = express();

connection.connect(function(err) {
    if(!err) {
        console.log("Database is connected....\n\n");
    } else {
        console.log("Error connecting Database....\n\n");
    }
});

app.get('/', function(req,res) {
    connection.query('select * from st_info', function(err, row, fields) {
        // connection.end();
        if(!err) {
            var template = `
        <!doctype html>
        <html>
        <head>
            <title>Result</title>
            <meta charset="utf-8">
            <link type="text/css" rel="stylesheet" href="mystyle.css" />
        </head>
        <body>
        <table border="1" style="margin:auto;">
        <thead>
            <tr><th>ID<th>Name</th><th>Dept</th></tr>
        </thead>
        <tbody>
        `;
        for (var i = 0; i < row.length; i++) {
            template += `
        <tr>
            <td>${row[i]['ST_ID']}</td>
            <td>${row[i]['NAME']}</td>
            <td>${row[i]['DEPT']}</td>
        </tr>
        `;
        }
        template += `
        </tbody>
        </table>
        </body>
        </html>
        `;
        res.end(template);
        } else {
            console.log('Error while performing Query');
        }
        
    })
})

app.listen(8000, function() {
    console.log('8000 port : Server Started...');
})



