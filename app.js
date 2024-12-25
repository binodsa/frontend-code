import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Book_Form from "./components/AddBook";
import Book_UpDateForm from "./components/BookUpdate";
import FncDisplayBooks from "./components/DsplyBk_fncCompt";
import DeleteBook from "./components/Delete_Book";

export default function App() {
    return (
        <Router>
            <div className="container">
                <center><h2>Online Book Library</h2></center>
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <Link to="/" className="navbar-brand">Add a Book</Link>
                    <Link to="/DisplayBooksF1" className="navbar-brand">Display All Books</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Book_Form />} />
                    <Route path="/edit/:id" element={<Book_UpDateForm />} />
                    <Route path="/Delete/:id" element={<DeleteBook />} />
                    <Route path="/DisplayBooksF1" element={<FncDisplayBooks />} />
                </Routes>
            </div>
        </Router>
    );
}
