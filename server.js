require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
// const layouts = require('express-ejs-layouts');


//Seed Dataconst db = require('./models');

app.set('view engine', 'ejs');
// app.use(layouts);

// Albums Controller

const albumsCtrl = require('./controllers/albumsController.js');
const albums = require('./models/Album.js');


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