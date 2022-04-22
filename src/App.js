import React from 'react';
import { BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import "./App.css";
import Header from './components/Header/header.component';
import { Home, Profile, About } from './pages';

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
      </Routes>
    </BrowserRouter>
    )
}

export default App