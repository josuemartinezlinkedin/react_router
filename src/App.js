import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css";
// import Header from './components/Header/header.component'
// import Posts from './components/Posts/posts.component'
import {Posts, Header} from './components'
import { Home, Profile, About, NotFound } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
      </div>
      <Routes>
      <Route path='/' element={<Home />} exact/>
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile /> } />
      <Route path='*' element={<NotFound />} />
      <Route path='/posts/:id' element={<Posts />}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App