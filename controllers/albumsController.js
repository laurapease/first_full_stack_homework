const express = require('express');
const router = express.Router();

//Albums Model

const albums = require('../models/Album');


// NEW ROUTE

router.get('/newAlbum', (req, res) => {
    res.render('albums/newAlbum');
});


//INDEX ROUTE
router.get('/', (req, res) => {
    res.render('albums/indexAlbum', {
        albums: albums,
    });
});

//SHOW ROUTE

router.get('/:albumIndex', (req, res) => {
    const albumIndex = req.params.albumIndex;
    const album = albums[albumIndex];

    res.render('albums/showAlbum', {
    album: album,
    });

});



module.exports = router;

