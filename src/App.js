import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "./App.css";
import Header from './components/Header/header.component';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
      </div>
      <Route path='/' component={null}/>
      <Route path='/about' component={ null} />
      <Route path='/profile' component={null } />
    </BrowserRouter>
    )
}

export default App