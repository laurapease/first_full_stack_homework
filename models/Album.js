const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: String,
    artist: String,
    rating: Number,
    yearReleased: Number
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
