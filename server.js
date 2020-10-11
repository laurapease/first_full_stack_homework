require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
// const layouts = require('express-ejs-layouts');

const db = require('./models');

app.set('view engine', 'ejs');
// app.use(layouts);


//HOME ROUTE
app.get('/', (req, res) => {
    res.send('Home Page')
});

//INDEX ROUTE
app.get('/albums', (req, res) => {
    console.log(albums);
    res.send(albums);
});

//SHOW ROUTE


// Controller

// const albumsCtrl = require('./controllers/albumsController.js');
// const albums = require('./models/Album.js');

// MIDDLEWARE

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send('Server is working')
});



app.listen(3000, () => {console.log(`Server is running on port ${PORT}`)});