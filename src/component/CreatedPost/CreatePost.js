import React from "react";
import "./CreatePost.css";
import { Link,NavLink, Routes, Route, Navigate } from "react-router-dom";
import { Publication } from "../Publication/Publication";
import { PhotoVideo } from "../PhotoVideo/PhotoVideo";
import { Ether } from "../Ether/Ether";
import { More } from "../More/More";

const Header = () => {
  return (
    <div className="modal-content" id="form">
      <form className="form-content"> 
      <Link className="close" to='/'>&times; </Link>
      <div className="menu">
        <NavLink className="menu__item" to="/post/new/publication">
          <h4>Публикация</h4>
        </NavLink>
        <NavLink className="menu__item" to="/post/new/photoVideo">
          <h4>Фото/видео</h4>
        </NavLink>
        <NavLink className="menu__item" to="/post/new/ether">
          <h4>Прямой эфир</h4>
        </NavLink>
        <NavLink className="menu__item" to="/post/new/more">
          <h4>Ещё</h4>
        </NavLink>
      </div>
      </form>
    </div>
  );
};

export const CreatePost = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/post/new/publication" element={<Publication />} />
        <Route path="/post/new/photoVideo" element={<PhotoVideo />} />
        <Route path="/post/new/ether" element={<Ether />} />
        <Route path="/post/new/more" element={<More />} />
      </Routes>
    </>
  );
};
