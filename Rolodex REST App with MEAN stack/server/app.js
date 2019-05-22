const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyparser = require('body-parser');
const mongoose = require("mongoose");
const apiRouter = require('./routes/myapi/api-contacts');

const app = express();
require('dotenv').config();

// Connects to the mongo collection using login credentials
mongoose.connect(`mongodb+srv://${process.env.CONTACTS_USERNAME}:${process.env.CONTACTS_PASSWORD}@cluster0-mogaq.mongodb.net/testDB?retryWrites=true`,  { useNewUrlParser: true })
.catch((err)=>{
  console.error(`Could not Connect to Database: ${err}`);
  process.exit();
});

// Sets up sessions and cookie parser for flash messages
app.use(cookieParser());
app.use(session({
  secret: "myContacts",
  resave: "true",
  saveUninitialized: "true"
}));

// bodyparser handles post data
app.use(bodyparser.urlencoded({extended: false}));
// Allows the app to handle post data in json format
app.use(bodyparser.json());


// Static elements are sent to public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes to API and Angular dist folder
app.use('/myapi/contacts', apiRouter);

// Routes to dist folder.
app.use('/', express.static('../client/dist'));



// Static Error Page
app.use((req, res, next)=>{
  res.redirect('/Error.html')
});


module.exports = app;
