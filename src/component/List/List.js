import React, { useState } from "react";
import './List.css';
import {Link} from 'react-router-dom';
import {format} from "date-fns";
import { Element } from "../Element/Element";

export const List = () => {
  const [result, setResult] = useState([]);

  fetch("http://localhost:7777/posts/")
    .then((response) => response.json())
    .then((data) => setResult(data));

  return (
      <div className="list-container">
        {result.map((o, id) => (
          <li key={id} className='element_lists'>
            <div className="info">
              <img className="avatar" src='https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp' alt=""/>
              <div className="contain">
                <p className="name">Lora Ivanova</p>
                <p className="date">{String(format(new Date(o.created), 'HH:mm:ss'))}</p>
              </div>
              <Link className="edit" to={`/posts/${o.id}`}>&#9998;</Link>
            </div>
            <div className="list-content">
                <h3 className='content'>{o.content}</h3>
                <div className="bottom-buttons">
                    <button className="button-click">Нравится</button>
                    <button className="button-click">Комментировать</button>
                </div>
                <div className='comment'>
                  <img className="avatar-comment" src='https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp' alt="" />
                  <input className='input' type='text' placeholder='Напишите комментарий...' defaultValue=''/>
                </div>
            </div>
          </li>
        ))}
      </div>
  );
};

