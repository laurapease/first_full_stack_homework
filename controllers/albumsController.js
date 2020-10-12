const express = require('express');
const router = express.Router();

//Albums Model

const db = require('../models');

//--------------INDEX ROUTE

router.get('/', (req, res) => {

    db.Album.find({}, (err, allAlbums) => {
    console.log(allAlbums);

    if (err) return console.log(err);

    res.render('albums/indexAlbum', {
        albums: allAlbums,
    });
});
  });

    // NEW ALBUM

router.get('/newAlbum', (req, res) => {
    res.render('albums/newAlbum');
    });

//------------- CREATE ROUTE

router.post('/', (req, res) => {
    
    req.body.own = req.body.own === 'on';

    db.Album.create(req.body, (err, newAlbum) => {
        if(err) return console.log(err);
         res.redirect(`/albums/${newAlbum._id}`)
    });
});

//SHOW ROUTE

router.get('/:albumId', (req, res) => {
 
    const albumId = req.params.albumIndex;

    db.Album.findById(req.params.albumId, (err, foundAlbum) => {
        if (err) return console.log(err);
         res.render('albums/showAlbum', {
            album: foundAlbum,
        });
    });
  
     });

// DELETE ROUTE

router.delete('/:albumId', (req, res) => {
   db.Album.findByIdAndDelete(req.params.albumId, (err, deletedAlbum) => {
       
    if(err) return console.log(err);
       res.redirect('/albums');

   });
});


// EDIT ALBUM

router.get('/:albumId/edit', (req, res) => {
  
  db.Album.findById(req.params.albumId, (err, foundAlbum) => {
    if (err) return console.log(err);
    
    res.render('albums/editAlbum', {
      album: foundAlbum,
    });
  });
});


// UPDATE ALBUM

router.put('/:albumId', (req, res) => {
    
    req.body.own = req.body.own === 'on';

    db.Album.findByIdAndUpdate(
        req.params.albumId,
        req.body,
        {new: true},
        (err, updatedAlbum) => {
            if (err) return console.log(err);
            res.redirect(`/albums/${updatedAlbum._id}`);

        }
    );
}); 




module.exports = router;

