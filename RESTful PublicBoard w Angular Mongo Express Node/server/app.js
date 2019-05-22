var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyparser = require('body-parser')

const mongoose = require("mongoose");
require('dotenv').config();


// Connects to the mongo collection using login credentials
mongoose.connect(`mongodb+srv://${process.env.CONTACTS_USERNAME}:${process.env.CONTACTS_PASSWORD}@cluster0-mogaq.mongodb.net/blogDB?retryWrites=true`,  { useNewUrlParser: true })
.catch((err)=>{
  console.error(`Could not Connect to Database: ${err}`);
  process.exit();
});


var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Allows the app to handle post data in json format
app.use(bodyparser.json({limit : '10mb'}));
// bodyparser handles post data
app.use(bodyparser.urlencoded({limit:'10mb', extended: false}));


app.use('/', express.static('../client/dist'));
app.use('/api', apiRouter);




module.exports = app;
