
const express = require('express');
const bodyparser = require("body-parser");
const cors = require('cors');
const Books = require('./BooksSchema');
require('./MongoDBConnect'); // Ensures MongoDB connection

const app = express();

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

// Default route
app.get('/', (req, res) => {
    res.send("Welcome to the Library Backend");
});

// Fetch all books
app.get('/allbooks', async (req, res) => {
    const books = await Books.find();
    res.json(books);
});

// Fetch a single book by ID
app.get('/getbook/:id', (req, res) => {
    let id = req.params.id;
    Books.findById(id, (err, book) => {
        if (err) return res.status(400).send(err);
        res.json(book);
    });
});

// Add a new book
app.post('/addbooks', (req, res) => {
    let newBook = new Books(req.body);
    newBook.save()
        .then(() => res.status(200).json({ message: 'Book added successfully' }))
        .catch(err => res.status(400).send('Adding book failed: ' + err));
});

// Update a book by ID
app.post('/updatebook/:id', (req, res) => {
    let id = req.params.id;
    Books.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedBook) => {
        if (err) return res.status(400).send(err);
        res.json({ message: 'Book updated successfully', updatedBook });
    });
});

// Delete a book by ID
app.post('/deleteBook/:id', (req, res) => {
    let id = req.params.id;
    Books.findByIdAndDelete(id, (err) => {
        if (err) return res.status(400).send(err);
        res.send('Book deleted successfully');
    });
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
