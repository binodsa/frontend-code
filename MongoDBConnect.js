const mongoose = require('mongoose');

// Connection string
const MONG_URI = 'mongodb://localhost:27017/BooksData';

// Connect to MongoDB
mongoose.connect(MONG_URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

const db = mongoose.connection;

// Handle connection events
db.on('error', (err) => {
    console.log('Error occurred: ' + err);
});

db.once('connected', () => {
    console.log("Connected to MongoDB at " + MONG_URI);
});

module.exports = db;
