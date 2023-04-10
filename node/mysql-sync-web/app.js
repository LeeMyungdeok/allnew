const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const bodyParse = require('body-parser');
const cookeParse = require('cookie-parser');
const cookieParser = require('cookie-parser');
const { join } = require('path');
const router = express.Router();

app.get('port', process.env.PORT || 8000)
app.use(morgan('dev'))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:false}))
app.use(cookieParser.json())
app.use(express.static(path.join(__dirname, 'pubilc')))

var main = require('./routes/main.js')
app.use('/', main)

app.listen(app.get('port'), () => {
    console.log('8000 Port : Server Started~!!');
})