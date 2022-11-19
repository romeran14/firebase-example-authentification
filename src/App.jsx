
import './App.css';
import React from 'react'
import { BrowserRouter as Router,
Route, Routes, Link
} from 'react-router-dom'
import Inicio from './components/Inicio'
import Admin from './components/Admin'
import Login from './components/Login'
import Menu from './components/Menu';
function App() {
  return (
    
    <div className='container'>
    <Router>
      <Menu></Menu>
        <Routes>
            <Route path='/' element={<Inicio></Inicio>}  ></Route>
            <Route path='/admin' element={<Admin></Admin>}  ></Route>
            <Route path='/login' element={<Login></Login>}  ></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
