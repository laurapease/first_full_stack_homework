const express = require('express');
const router = express.Router();

//Albums Model

const db = require('../models');



//CREATE ROUTE

router.post('/', (req, res) => {
    
    req.body.own = req.body.own === 'on';

    db.Album.create(req.body, (err, newAlbum) => {
        if(err) return console.log(err);
         res.redirect(`/albums/${newAlbum._id}`)
    });
});


//INDEX ROUTE
router.get('/', (req, res) => {

    db.Album.find({}, (err, allAlbums) => {
    console.log(allAlbums);

    if (err) {
        console.log(err);
    }

    res.render('albums/indexAlbum', {
        albums: allAlbums,
    });
});
  });

  // NEW ALBUM

router.get('/new', (req, res) => {
    res.render('albums/newAlbum');
    });

//SHOW ROUTE

router.get('/:albumId', (req, res) => {
    const albumId = req.params.albumIndex;

    db.Album.findById(req.params.albumId, (err, foundAlbum) => {
        if (err) {
            console.log(err);
        } res.render('albums/showAlbum', {
            album: foundAlbum,
        });
    });
  
     });

// DELETE ROUTE

router.delete('/:albumIndex', (req, res) => {
    albums.splice(req.params.albumIndex, 1);
    res.redirect('/albums');

});

router.get('/:albumIndex/edit', (req, res) => {
const albumIndex = req.params.albumIndex;

    res.render("albums/editAlbum", {
    album: albums[albumIndex],
    albumIndex: albumIndex
    });
});

//UPDATE ALBUM

router.put('/:albumIndex', (req, res) => {
    
    //GET DATA FROM REQUEST BODY

    console.log(req.body);

    const newAlbum = {
        title: req.body.title,
        artist: req.body.artist,
        rating: req.body.rating.artist,
        year: req.body.year,
        own: req.body.own === 'on' ? true : false
    }

    // UPDATE FRUIT IN DATABASE

    albums.splice(req.params.albumIndex, 1, newAlbum);
    console.log(albums);

    //REDIRECT

    res.redirect(`/albums/${req.params.albumIndex}`);

});

module.exports = router;

