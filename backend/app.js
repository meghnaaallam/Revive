//initializing the required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const errorHandler = require('./middleware/error');

//configuring models
require('dotenv').config();

//importing routes (authRoutes for users & drafts)
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');

//creating database connection string
var db = 'mongodb://127.0.0.1:27017/Revive_Users';
// Created express server
const app = express();
mongoose.Promise = global.Promise;

//connecting to the database
    //if connection is successfully it state db created else error will be popped
mongoose.connect(db, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(
() => { console.log('db is connected') },
err => { console.log('There is problem while connecting database ' + err) }
);

// using middlewares
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({     
    // to support URL-encoded bodies
    limit: '100mb', extended: false
    }));
app.use(cookieParser());
app.use(cors());

//using routes to middleware
app.use("/api", authRoutes)
app.use("/api/drafts",postRoutes)

//using error handlers as middleware
app.use(errorHandler);

//initializing port (backend port : 8000)
const port = process.env.PORT || 8000;

//connection string to listen port at 8000
app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})