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

if(req.body.own === 'on') {
    req.body.own = true;
} else {
    req.body.own = false;
}

albums.push(req.body);
res.redirect(`/albums/${albums.length - 1}`);

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

    if(albums[albumIndex]) {
        res.render('albums/showAlbum', {
            album: album,
            albumIndex: albumIndex
        });
    } else {
        res.render('albums/showAlbum', {
            album: {title:'Does not exist'},
        });
    } });


// DELETE ROUTE

router.delete('/:albumIndex', (req, res) => {
    albums.splice(req.params.albumIndex, 1);
    res.redirect('/albums');

});

//EDIT ALBUM

router.get('/:albumIndex/edit', (req, res) => {
const albumIndex = req.params.albumIndex;

    res.render("albums/editAlbum", {
    album: albums[albumIndex],
    albumIndex: albumIndex
    });
});



module.exports = router;

