import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { useState } from 'react';
import { Home, Profile, About, NotFound } from './pages';
import { Posts, Header } from './components'
import "./App.css";

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <button onClick={()=>setLogin(!login)}>
          {login ? "logout" : "login"}
        </button>
      </div>
      <Routes>
      <Route path='/' element={<Home />} exact/>
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={login ? <Profile/>: <Navigate to="/" replace />}/>
      <Route path='*' element={<NotFound />} />
      <Route path='/posts/:id' element={<Posts />}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App