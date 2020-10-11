const express = require('express');
const router = express.Router();



//INDEX ROUTE
router.get('/', (req, res) => {
    console.log(albums);
    res.render('indexAlbum');
});

//SHOW ROUTE

router.get('/:albumIndex', (req, res) => {
    const albumIndex = req.params.albumIndex;

    res.render('albums/showAlbum');

    // if (albums[albumIndex]) {
    //     res.send(albums[albumIndex]);
    // } else {
    //     res.send('Sorry, that album deos not exist');
    // }
});

module.exports = router;

