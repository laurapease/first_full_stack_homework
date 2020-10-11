const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    yearReleased: Number
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
