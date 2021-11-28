import React, { useState } from "react";
import Favourite from "./Favourite";

const PostForm = () => {

    const [form, setForm] = useState("");

    const handleForm = (event) => {
        setForm(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        setForm("");
    };

    return(
        <div>
            <h2>What is your favourite on Reddit?</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Link:</label>
                <input type="text" value={form} onChange={handleForm}/>
                <input type="submit" value="Send"/>
            </form>
            
        </div>
    )
};

export default PostForm;