const mongoose = require('mongoose');

// MongoDB connection string
const MONG_URI = 'mongodb://localhost:27017/BooksData';

// Connect to MongoDB
mongoose.connect(MONG_URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

const db = mongoose.connection;

// Connection events
db.on('error', (err) => {
    console.log('Error occurred: ' + err);
});

db.once('connected', () => {
    console.log("Connected to MongoDB at " + MONG_URI);
});

module.exports = db;
