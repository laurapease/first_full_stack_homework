const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fullstackhw', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
    console.log('mongoDB connected')
});

mongoose.connection.on('error', (err) => {
    console.log(err)
});