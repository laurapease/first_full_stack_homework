const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/fullstackhw';

const configObj = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

mongoose.connect(connectionString, configObj);

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected....')
});

mongoose.connection.on('error', (error) => {
    console.log(error)
});

module.exports.Album = require('./Album');