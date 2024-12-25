const mongoose = require('mongoose');

// MongoDB connection string
const MONGO_URI = 'mongodb://localhost:27017/Week8';
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

// Handle connection errors
db.on('error', (err) => {
    console.log("Error occurred during connection: " + err);
});

// Handle successful connection
db.once('connected', () => {
    console.log(`Connected to ${MONGO_URI}`);
});

// Schema and Model
const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    gender: String,
    salary: Number
});

const Person = mongoose.model('Person', PersonSchema, 'personCollection');

// Create a single document
const doc = new Person({ 
    name: 'Jacky', 
    age: 36, 
    gender: "Male", 
    salary: 3456 
});

doc.save()
    .then(() => console.log("Document saved!"))
    .catch((err) => console.error("Error saving document:", err));

// Insert multiple documents
const manyPersons = [
    { name: 'Simon', age: 42, gender: "Male", salary: 3456 },
    { name: 'Neesha', age: 23, gender: "Female", salary: 1000 },
    { name: 'Mary', age: 27, gender: "Female", salary: 5402 },
    { name: 'Mike', age: 40, gender: "Male", salary: 4519 }
];

Person.insertMany(manyPersons)
    .then(() => console.log("Multiple documents inserted successfully!"))
    .catch((err) => console.error("Error inserting documents:", err));

// Find documents with criteria
Person.find({ gender: "Female", age: { $gt: 25 } })
    .then((docs) => console.log("Filtered documents:", docs))
    .catch((err) => console.error("Error fetching documents:", err));
