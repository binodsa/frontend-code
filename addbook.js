import React, { useState } from "react";
import axios from 'axios';

export default function Book_Form() {
    const url = "http://localhost:5000/";
    const [state, setState] = useState({
        booktitle: "", author: "", formate: "", Topic: "", PubYear: 1990,
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const OnSubmit = (e) => {
        e.preventDefault();
        axios.post(url + "addbooks", state)
            .then(res => console.log(res.data));
    };

    return (
        <div>
            <h3>Add Book</h3>
            <form onSubmit={OnSubmit}>
                <input name="booktitle" value={state.booktitle} onChange={handleChange} />
                <input name="author" value={state.author} onChange={handleChange} />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}
