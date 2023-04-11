const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("sync-mysql");
const env = require("dotenv").config({ path: "../../.env" });

var connection = new mysql({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/select", (req, res) => {
  const result = connection.query('select * from UserTbl');
  console.log(result);
  res.send(result);
});

app.post("/select", (req, res) => {
  const result = connection.query('select * from UserTbl');
  console.log(result);
  res.send(result);
});

app.get("/selectQuery", (req, res) => {
  const UserID = req.query.UserID;
  const result = connection.query("select * from UserTbl where UserID=?" , [UserID]);
  console.log(result);
  res.send(result);
});


app.post("/insert", (req, res) => {
  const { UserID, Name, Email, Mobile } = req.body;
  const result = connection.query("insert into UserTbl values (?, ?, ?, ?)" , [UserID, Name, Email, Mobile]);
  res.redirect("/selectQuery?UserID=" + req.body.UserID);
});

app.post("/update", (req, res) => {
  const { UserID, Name, Email, Mobile } = req.body;
  const result = connection.query("update UserTbl set name=? , email=? ,mobile=?  where UserID=?", [Name, Email, Mobile, UserID]);
  console.log(result);
  res.redirect("/selectQuery?UserID=" + req.body.UserID);
});

app.post("/delete", (req, res) => {
  const UserID = req.body.UserID;
  const result = connection.query("delete from UserTbl where UserID=?", [UserID]);
  console.log(result);
  res.redirect("/select");
});

module.exports = app;






// app.get("/selectQuery", (req, res) => {
//   const userid = req.query.userid;
//   const result = connection.query("select * from user where userid=?" , [userid]);
//   console.log(result);
//   res.send(result);
// });


// app.get("/select", (req, res) => {
//   const result = connection.query('select * from UserTbl');
//   console.log(result);
//   res.send(result);
// });

// app.post("/insert", (req, res) => {
//   const { id, pw } = req.body;
//   const result = connection.query("insert into user values (?, ?)" , [id, pw]);
// });