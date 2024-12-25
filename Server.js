const express = require('express');
const bodyparser = require("body-parser");
const cors = require('cors');
const Books = require('./BooksSchema');
require('./MongoDBConnect');

const app = express();

// Middleware
app.use(bodyparser.json());
app.use(cors());

// Endpoints
app.get('/', (req, res) => res.send("Welcome to the Library Backend"));

app.get('/allbooks', async (req, res) => {
    const books = await Books.find();
    res.json(books);
});

app.get('/getbook/:id', (req, res) => {
    Books.findById(req.params.id, (err, book) => {
        if (err) res.status(400).send(err);
        res.json(book);
    });
});

app.post('/addbooks', (req, res) => {
    const newBook = new Books(req.body);
    newBook.save()
        .then(() => res.status(200).json({ message: 'Book added successfully' }))
        .catch(err => res.status(400).send('Adding book failed: ' + err));
});

app.post('/updatebook/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBook) => {
        if (err) res.status(400).send(err);
        res.json({ message: 'Book updated successfully', updatedBook });
    });
});

app.post('/deleteBook/:id', (req, res) => {
    Books.findByIdAndDelete(req.params.id, (err) => {
        if (err) res.status(400).send(err);
        res.send('Book deleted successfully');
    });
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
