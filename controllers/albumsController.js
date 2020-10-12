const express = require('express');
const router = express.Router();

//Albums Model

const albums = require('../models/Album');


// NEW ROUTE

router.get('/newAlbum', (req, res) => {
    res.render('albums/newAlbum');
    });

//CREATE ROUTE

router.post('/', (req, res) => {
    console.log(req.body);
res.send("Received");
})



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

    if(albums[albumIndex]) {
        res.render('albums/showAlbum', {
            album: album,
        });
    } else {
        res.render('albums/showAlbum', {
            album: {name:'Does not exist'},
        });
    }

});



module.exports = router;

