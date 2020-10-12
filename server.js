require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
// const layouts = require('express-ejs-layouts');

//Set View Engine
app.set('view engine', 'ejs');


// Albums Controller

const albumsCtrl = require('./controllers/albumsController.js');
const albums = require('./models/Album.js');

// MIDDLEWARE

//Bodyparser

app.use(bodyParser.urlencoded({extended: false}));


app.use((req, res, next) => {
const method = req.method;
const path = req.url;
const timestamp = new Date().toLocaleTimeString();
console.log(`${method}  ${path}  ${timestamp}`);
next();
});



//HOME ROUTE
app.get('/', (req, res) => {
    res.render('index');
});

//Albums Route

app.use('/albums', albumsCtrl);



// MIDDLEWARE

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(methodOverride('_method'));




app.listen(3000, () => {console.log(`Server is running on port ${PORT}`)});