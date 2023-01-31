import React, {useState} from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import './Element.css';
import { Publication } from "../Publication/Publication";

export const Element = () => {
    const [result, setResult] = useState({id: '', content: ''});
    const id = useParams();
    const navigate = useNavigate();

    const redirect = () => {
      navigate(-1);
    };
    
    fetch(`http://localhost:7777/posts/${id.rId}`)
        .then((response) => response.json())
        .then((data) => setResult(data));
///??? the server responded with a status of 405 (Method Not Allowed)
///  Unexpected token 'M', "Method Not Allowed" is not valid JSON
    

    const remove = (e) => {
        e.preventDefault();
        (async () => {
            try {
                const response = await fetch(
                    `http://localhost:7777/posts/${id.rId}`,
                    {method: "DELETE"}
                );
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
            } catch (err) {
                console.log(err);
            }
        })();
        redirect();
    }


    return (
        <div className="info-new">
            <div className="contains">
                <img className="avatar" src='https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp' alt=""/>
                <p className="names">Lora Ivanova</p>
                <h3 className='content'>{result.content}</h3>
            </div>
            <div className="list-content">
                <div className="bottom-buttons">
                    <button className="button-click">Нравится</button>
                    <button className="button-click">Комментировать</button>
                </div>
                <div className="buttons">
                    <NavLink className="editings" to="/post/new/publication">Изменить</NavLink>
                    <button className="delete" onClick={remove}>Удалить</button>
                </div>
            </div>
        </div>
    )
}
