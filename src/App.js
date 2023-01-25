import {NavLink, Route, Routes} from 'react-router-dom';
import { CreatePost } from './component/CreatedPost/CreatePost';
import './App.css';
import { List } from './component/List/List';
import { Element } from './component/Element/Element';

function App() {
  return (
    <div className="container">
      <div className='btn'>
        <NavLink className='create_button' to='/post/new/publication'>Создать пост </NavLink>
      </div>
        <Routes> 
          <Route path='/' element={<List />} /> 
          <Route path='/post/new/*' element={<CreatePost />} />
          <Route path={`/posts/{id}`} element={<Element />} />
        </Routes>
    </div>
  );
}

export default App;
