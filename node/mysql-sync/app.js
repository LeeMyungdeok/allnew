var mysql = require('sync-mysql');
const env = require('dotenv').config({ path: "../../.env"});

var connection = new mysql({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

let result = connection.query('select * from st_info');
console.log(result);

let data = {
    st_id: "202308",
    name: "Lee",
    dept: "Computer"
}

let insertId = data.st_id;

//inserty query
result = connection.query("insert into st_info values (?, ?, ?)", 
[insertId, data.name, data.dept]);
console.log("data is Inserted~!!");

// select query from inseted data
result = connection.query('select * from st_info where st_id =?', [insertId]);
console.log(result);

//update query
result = connection.query("update st_info set dept=? where st_id = ?", 
["Game", insertId]);
console.log(result);

//select query from updated data
result = connection.query('select * from st_info where st_id =?', [insertId]);
console.log(result);

// delete row
result = connection.query("delete from st_info  where st_id = ?", [insertId]);
console.log(result);

// select query all data
result = connection.query("select * from st_info");
console.log(result);