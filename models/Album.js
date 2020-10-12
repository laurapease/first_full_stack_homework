const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: {
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
    year: Number,
    owned: Boolean
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
