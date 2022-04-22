import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css";
import Header from './components/Header/header.component';
import { Home, Profile, About, NotFound } from './pages';

const App = () => {
  return (
    <BrowserRouter basename='/base'>
      <div className='App'>
        <Header />
      </div>
      <Routes>
      <Route path='/' element={<Home />} exact/>
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile /> } />
      <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App