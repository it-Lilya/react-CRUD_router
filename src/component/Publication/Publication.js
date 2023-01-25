import './Publication.css'
import React, {useEffect, useState} from 'react'
import shortid from 'shortid';
import { Link, Navigate, NavLink} from 'react-router-dom';


export const Publication = () => {
    const [content, setContent] = useState("");


    const editingDate = (e) => {
        const { value } = e.target;
        setContent(value);
    };
    
    const addForm = (e) => {
        e.preventDefault();
        const newObject = JSON.stringify({id: shortid.generate(), content: content});
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:7777/posts');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status !== 204) {
                return false
            }
        } 
        xhr.send(newObject);
        setContent("");
        window.location = 'http://localhost:3000/'
    };
      

    return (
        <form className='form-input' onSubmit={addForm}>
            <textarea name="new_post" className="window_texts" value={content} onChange={editingDate}></textarea>
            <button className="btn_post" type='submit'>Опубликовать</button>
            {/* <NavLink className="btn_post" type='submit' to='/'>Опубликовать </NavLink> */}
        </form>
    )
}