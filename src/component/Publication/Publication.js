import './Publication.css'
import React, {useState} from 'react'
import shortid from 'shortid';
import { Navigate } from 'react-router';


export const Publication = () => {
    const [content, setContent] = useState("");

    const editingDate = (e) => {
        const { value } = e.target;
        setContent(value);
    };
const close = () => {
    return (
            <Navigate to='/sdfsfsfsfsdf' replace/>
    )
}

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
          console.log('ok')
          
        }
        xhr.send(newObject);
        setContent("");
    };


    return (
        <form onSubmit={addForm}>
            <textarea name="new_post" className="window_texts" value={content} onChange={editingDate}></textarea>
            <button className="btn_post" type='submit' element={close}>Опубликовать</button>
            asdada
        </form>
    )
}