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

app.get("/login", (req, res) => {
  res.send("관리 접속중입니다.");
});

app.get('/login', (req, res) => {
    res.send("관리 접속중입니다.");
    // const { id, pw } = req.body;
    // const result = 1;
    // res.send(result)
    // const result = connection.query("select * from UserTbl where User_ID=? and Name=?", [id, pw]);
    // console.log(result);
//     if (result.length == 0) {
//         res.redirect('error.html')
//     }
//     if (id == 'admin' || id == 'root') {
//         console.log(id + " => Administrator Logined")
//         res.redirect(1);
//     } else {
//         console.log(id + " => User Logined")
//         res.redirect(2)
//     }
});

app.post('/rent', (req, res) => {
  const { userId, itemId, startDate, endDate } = req.body;
  const result = connection.query("SELECT * FROM items WHERE item_id=? AND status='available'", [itemId]);

  if (result.length == 0) {
    res.status(404).send('Item not found or not available');
    return;
  }

  const reservation = {
    user_id: userId,
    item_id: itemId,
    start_date: startDate,
    end_date: endDate
  };

  connection.query('INSERT INTO reservations SET ?', reservation, (error, results, fields) => {
    if (error) {
      res.status(500).send('Error creating reservation');
    } else {
      connection.query('UPDATE items SET status = "rented" WHERE item_id = ?', [itemId], (error, results, fields) => {
        if (error) {
          res.status(500).send('Error updating item status');
        } else {
          res.send('Item rented successfully');
        }
      });
    }
  });
});

app.post("/register", (req, res) => {
  const { id, pw } = req.body;
    if (id == "") {
    res.redirect('register.html')
    } else {
        let result = connection.query("select * from user where userid=?", 
        [id]);
        if (result && result[0] && result[0].userid == id) {
            res.writeHead(200);
            var tamplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Login Failed</title>
                <meta charset="utf-8" />
            </head>
            <body>
                <div>
                    <h3 style="margin-left: 30px">Registrer Failed</h3>
                    <h4 style="margin-left: 30px">이미 존재하는 아이디입니다.</h4>
                    <a href="register.html" style="margin-left: 30px">다시
                    시도하기</a>
                </div>
            </body>
            </html>
            `;
            res.end(tamplate)
        } else {
            result = connection.query("insert into user values (?, ?)",
            [id, pw]);
            console.log(result);
            res.redirect('/')
        }
    }
});








app.get("/select", (req, res) => {
  const result = connection.query("select * from user");
  console.log(result);
  res.send(result);
});

app.post("/select", (req, res) => {
  const result = connection.query("select * from user");
  console.log(result);
  res.send(result);
});

app.get("/selectQuery", (req, res) => {
  const id = req.query.id;
  const result = connection.query("select * from user where userid=?", [id]);
  console.log(result);
  res.send(result);
});

app.post("/selectQuery", (req, res) => {
  const id = req.body.id;
  const result = connection.query("select * from user where userid=?", [id]);
  console.log(result);
  res.send(result);
});

app.post("/insert", (req, res) => {
  const { id, pw } = req.body;
  const result = connection.query("insert into user values (?, ?)", [id, pw]);
  console.log(result);
  res.redirect("/selectQuery?id=" + req.body.id);
});

app.post("/update", (req, res) => {
  const { id, pw } = req.body;
  const result = connection.query("update user set passwd=? where userid=?", [
    pw,
    id,
  ]);
  console.log(result);
  res.redirect("/selectQuery?id=" + req.body.id);
});

app.post("/delete", (req, res) => {
  const id = req.body.id;
  const result = connection.query("delete from user where userid=?", [id]);
  console.log(result);
  res.redirect("/select");
});

module.exports = app;