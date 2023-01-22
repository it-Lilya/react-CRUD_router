/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import './List.css';
import {NavLink} from 'react-router-dom';
import {format} from "date-fns";

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
            <div className="info">
              <img className="avatar" src='https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp' />
              <div className="contain">
                <p className="name">Lora Ivanova</p>
                <p className="date">{String(format(new Date(o.created), 'HH:mm:ss'))}</p>
              </div>
            </div>
            <div className="l">
                <h3 className='content'>{o.content}</h3>
                <div className="bottom-buttons">
                    <NavLink className="button">Нравится</NavLink>
                    <NavLink className="button">Комментировать</NavLink>
                </div>
                <input className='input' type='text' defaultValue='Напишите комментарий...'></input>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
