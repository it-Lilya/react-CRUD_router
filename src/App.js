import {Link, NavLink, Route, Routes, useSearchParams, Navigate} from 'react-router-dom';
import { CreatePost } from './component/CreatedPost/CreatePost';
import './App.css';
import { List } from './component/List/List';
import { Publication } from './component/Publication/Publication';
import { useState } from 'react';

// const Redirect = () => {
//   return (
//     <Navigate to={'/'} />
//   )
// }

function App() {
const openForm = () => {
  const form = document.getElementById('form');
  form.classList.toggle('active');
}

  return (
    <div className="container">
      <div className='btn'>
        <NavLink to='/post/new/*' className='create_button' onClick={openForm}>Создать пост</NavLink>
      </div>
        <Routes> 
           <Route path='/' element={<List />} /> 
          <Route path='/post/new/*' element={<CreatePost />} />
           </Routes>
    </div>
  );
}

export default App;
