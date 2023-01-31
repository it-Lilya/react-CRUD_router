import './Publication.css'
import React, {useState} from 'react'
import shortid from 'shortid';
import {useNavigate} from 'react-router-dom';


export const Publication = () => {
    const [content, setContent] = useState("");
    let nav = useNavigate();

    const redirect = () => {
        nav(-1);
    };

    const editingDate = (e) => {
        const { value } = e.target;
        setContent(value);
    };

    const addForm = (e) => {
        e.preventDefault();
        const newObject = JSON.stringify({id: shortid.generate(), content: content});
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:7777/posts', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status !== 204) {
                return false
            }
        } 
        console.log(xhr.statusText)
        xhr.send(newObject);
        setContent("");
        redirect();
    };

    return (
        <form className='form-input' name='data' onSubmit={addForm}>
            <textarea name="new_post" className="window_texts" value={content} onChange={editingDate}></textarea>
            <button className="btn_post" type='submit'>Опубликовать</button>
        </form>
    )
}
