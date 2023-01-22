import React, { useState } from "react";
import './List.css';
import {NavLink} from 'react-router-dom';


export const List = () => {
  const [result, setResult] = useState([]);

  fetch("http://localhost:7777/posts")
    .then((response) => response.json())
    .then((data) => setResult(data));




  return (
    <>
      <ul className="list-container">
        {result.map((o) => (
          <li key={o.id} className='element_lists'>
            <div className="l">
                <p className="date">{String(new Date(o.created))}</p>
                <h3 className='content'>{o.content}</h3>
                <div className="bottom-buttons">
                    <NavLink className="button">Нравится</NavLink>
                    <NavLink className="button">Комментировать</NavLink>
                </div>
                <input className='input' type='text' value='Напишите комментарий...'></input>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
